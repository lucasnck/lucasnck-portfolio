import { useRouter } from "next/router";
import * as React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AddMessage } from "../send-message";
import { Footer } from "../footer";
import { Header } from "../header";
import { CustomCursor, CustomCursorManager } from "../magic-cursor";
import Menu from "../menu";
import { MenuOverlay } from "../menu/menu.style";
import { Content, MouseContainer, WrapperContainer } from "./style";
import { Messages } from "../messages";
import { MessagesProvider } from "../../hooks/messages/messages";
import useServer from "../../hooks/server/server";

export interface IMessagePos {
  x: number;
  y: number;
}

export const Wrapper: React.FC = ({ children }) => {
  // const [mousePos, setMousePos] = useState<IMessagePos>({ x: 0, y: 0 });
  // const [messagePos, setMessagePos] = useState<IMessagePos>({ x: 0, y: 0 });
  // const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMenu((state) => !state);
  }, [setShowMenu]);

  useEffect(() => {
    if (router.asPath.match("#")) {
      setShowMenu(false);
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }, [router.asPath]);

  // const createMessage = () => {
  //   console.log("create message at pos", mousePos);
  //   setMessagePos(mousePos);
  //   setShowMessage((state) => true);
  // };

  // const mouseEvent = (e) => {
  //   setMousePos({
  //     x: e.nativeEvent.offsetX,
  //     y: e.nativeEvent.offsetY,
  //   });
  // };

  return (
    <div>
      <MessagesProvider>
        {/* <CustomCursorManager> */}
        {/* <CustomCursor /> */}
        <WrapperContainer show={showMenu}>
          <Menu show={showMenu} toggleMenu={toggleMenu} />
          <MouseContainer>
            <AddMessage />
            <Content show={showMenu}>
              <Messages />
              <MenuOverlay show={showMenu} onClick={toggleMenu} />
              <Header showMenu={showMenu} toggleMenu={toggleMenu} />
              {children}
              <Footer />
            </Content>
          </MouseContainer>
        </WrapperContainer>
        {/* </CustomCursorManager> */}
      </MessagesProvider>
    </div>
  );
};
