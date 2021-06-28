import { useRouter } from "next/router";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { CustomCursor, CustomCursorManager } from "../magic-cursor";
import Menu from "../menu";
import { MenuOverlay } from "../menu/menu.style";
import { Content, WrapperContainer } from "./style";

export const Wrapper: React.FC = ({ children }) => {
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
            {children}
            <Footer />
          </Content>
        </WrapperContainer>
      </CustomCursorManager>
    </div>
  );
};
