import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import socketClient from "socket.io-client";

const MessagesContext = React.createContext(undefined);

const SERVER = "http://localhost:5000";

let socket;

export const MessagesProvider: React.FC = (props) => {
  socket = socketClient(SERVER);
  const [state, dispatch] = useReducer(reducer, { messages: [], usersPos: [] });

  useEffect(() => {
    socket.on("messages", (data) => {
      dispatch({ type: "updateMessages", payload: data });
    });
  }, []);

  return (
    <>
      <MessagesContext.Provider value={state}>{props.children}</MessagesContext.Provider>
    </>
  );
};

export default function useMessages() {
  const context = useContext(MessagesContext);
  return { ...context };
}
