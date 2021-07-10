import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import * as React from "react";
import { useContext } from "react";
import { CustomCursorContext } from "../magic-cursor";
import { MenuContainer, MenuStyle, Navbar, SocialMedia } from "./menu.style";

export interface IMenuProps {
  show: boolean;
  toggleMenu: () => void;
}

export default function Menu(props: IMenuProps) {
  const { setType } = useContext(CustomCursorContext);

  return (
    <MenuStyle show={props.show} onMouseEnter={() => setType("menu")} onMouseLeave={() => setType("default")}>
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
              <Link href="/#jobs">Career</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <li>
              <Link href="/#education">Education</Link>
            </li>
          </ul>
        </Navbar>
        <SocialMedia>
          <ul>
            <li>
              <a href="https://github.com/lucasnck" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/lucasnck" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/wh15y5gilc2rzany6blje0649?si=ca25a9380d624d79"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "spotify"]} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/lucasnck" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/luscanck" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>
          </ul>
        </SocialMedia>
      </MenuContainer>
    </MenuStyle>
  );
}
