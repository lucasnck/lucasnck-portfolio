import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import socketClient from "socket.io-client";

const ServerContext = React.createContext(undefined);

const SERVER = "http://localhost:5000";

let socket = socketClient(SERVER);

export const ServerProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    let user = userStorage ? JSON.parse(userStorage) : null;

    socket.on("connection", (data) => {
      console.log(`connection`, data);
      if (!user?.uuid) {
        const uuid = data.uuid;
        user = { uuid: uuid };
        localStorage.setItem("user", JSON.stringify(user));
        socket.emit("signIn", user);
      } else if (user?.uuid) {
        socket.emit("signIn", user);
      }
      dispatch({ type: "save", payload: user });
    });

    socket.on("disconnect", (reason) => {
      console.log("SERVER DISCONECTED", reason);
      socket.connect();
    });

    socket.on("connect_error", () => {
      console.log("error connection");
      setTimeout(() => {
        socket.connect();
      }, 1000);
    });
  }, []);

  return (
    <>
      <ServerContext.Provider value={{ state, dispatch, socket }}>{props.children}</ServerContext.Provider>
    </>
  );
};

export default function useServer() {
  const context = useContext(ServerContext);
  return { ...context };
}
