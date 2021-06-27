import * as React from "react";
import Menu from "../menu";
import { useCallback, useEffect, useState } from "react";
import Header from "../header";
import { Footer } from "../footer";
import { Content, WrapperContainer } from "./style";
import { MenuOverlay } from "../menu/menu.style";
import { useRouter } from "next/router";
import CustomCursorManager, { CustomCursor } from "../magic-cursor";

export interface IWrapperProps {}

export const Wrapper: React.FC<IWrapperProps> = (props) => {
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

  return (
    <div>
      <CustomCursorManager>
        <CustomCursor />
        <WrapperContainer show={showMenu}>
          <Menu show={showMenu} toggleMenu={toggleMenu} />
          <Content show={showMenu}>
            <MenuOverlay show={showMenu} onClick={toggleMenu} />
            <Header showMenu={showMenu} toggleMenu={toggleMenu} />
            {props.children}
            <Footer />
          </Content>
        </WrapperContainer>
      </CustomCursorManager>
    </div>
  );
};
