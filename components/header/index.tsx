import * as React from "react";
import { Container } from "../container";
import { Flex } from "../flex";
import Logo from "../logo";
import { ToggleMenu } from "../toggle-menu";
import { HeaderContainerStyle, HeaderStyle } from "./header.style";

export interface IHeaderProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

export default function Header(props: IHeaderProps) {
  return (
    <HeaderContainerStyle>
      <HeaderStyle centeredY>
        <Container>
          <Flex spaceBetween centeredY>
            <Logo centered />

            <ToggleMenu onClick={props.toggleMenu} oppened={props.showMenu}>
              <span></span>
              <span></span>
              <span></span>
            </ToggleMenu>
          </Flex>
        </Container>
      </HeaderStyle>
    </HeaderContainerStyle>
  );
}
