import * as React from "react";
import { MenuContainer, MenuStyle, Navbar, SocialMedia } from "./menu.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { CustomCursorContext } from "../magic-cursor";

export interface IMenuProps {
  show: boolean;
  toggleMenu: () => void;
}

export default function Menu(props: IMenuProps) {
  const { setType } = useContext(CustomCursorContext);

  return (
    <MenuStyle show={props.show}  onMouseEnter={() => setType("menu")} onMouseLeave={() => setType("default")}>
      <MenuContainer show={props.show}>
        <Navbar>
          <ul>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#skills">Skills</Link>
            </li>
            <li>
            <li>
              <Link href="/#jobs">Career</Link>
            </li>
              <Link href="/#education">Education</Link>
            </li>
          </ul>
        </Navbar>
        <SocialMedia>
          <ul>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
            <li>
              <a href="#about">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a href="#about">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </li>
            <li>
              <a href="#about">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>
          </ul>
        </SocialMedia>
      </MenuContainer>
    </MenuStyle>
  );
}
