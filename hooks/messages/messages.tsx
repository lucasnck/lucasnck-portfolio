import React, { useContext, useEffect, useReducer, useState } from "react";
import { useMouseTrack } from "../mouse-track";
import useServer from "../server/server";
import { reducer } from "./reducer";

const MessagesContext = React.createContext(undefined);

export const MessagesProvider: React.FC = (props) => {
  const { socket } = useServer();
  const { mousePosition, mouseClick } = useMouseTrack();
  const { x, y } = mousePosition;
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    showSendMessage: false,
    mousePos: { x: null, y: null },
  });
  const [form, setForm] = useState({ nickname: "", message: "", hasNickname: false });

  useEffect(() => {
    socket.on("newMessage", ({ nickname, message, posX, posY }) => {
      dispatch({ type: "add", payload: { nickname, message, posX, posY } });
    });
  }, []);

  useEffect(() => {
    console.log("state", state);
    setForm((prevState) => ({ ...prevState, nickname: state.nickname, hasNickname: !!state.nickname }));
  }, [state]);

  useEffect(() => {
    if (mouseClick) {
      dispatch({ type: "toggleSendMessage" });
      dispatch({ type: "mousePos", payload: { x, y } });
    }
  }, [mouseClick]);

  function sendMessage() {
    let user = state;
    user.nickname = form.nickname;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "save", payload: user });
    socket.emit("send-message", { ...form, uuid: user.uuid, mousePos: { x, y } });
    dispatch({ type: "toggleSendMessage", payload: false });
  }

  const onChange = (input, e) => setForm((state) => ({ ...state, [input]: e.target.value }));

  return (
    <>
      <MessagesContext.Provider
        value={{
          messages: state.messages,
          showSendMessage: state.showSendMessage,
          sendMessage,
          onChange,
          form,
          x: state.mousePos.x,
          y: state.mousePos.y,
        }}
      >
        {props.children}
      </MessagesContext.Provider>
    </>
  );
};

export default function useMessages() {
  const context = useContext(MessagesContext);
  return { ...context };
}
