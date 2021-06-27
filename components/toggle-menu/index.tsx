import styled from "styled-components";
import { Button } from "../button";
import is, { match } from "styled-is";

export const ToggleMenu = styled<{ oppened: boolean }>(Button)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  position: relative;
  padding: 0;
  height: 25px;
  width: 35px;
  span {
    display: block;
    position: absolute;
    height: 3px;
    right: 0;
    border-radius: 1.5px;
    background-color: ${(props) => props.theme.colors.default};
    ${match("type", "secondary")`
      background-color: ${(props) => props.theme.colors.secondary};
    `}
    &:nth-child(1) {
      width: 25px;
      top: 0;
      right: 0;
      transform: translateX(0);
    }
    &:nth-child(2) {
      width: 35px;
      top: 50%;
      transform: translateX(0) translateY(-50%);
    }
    &:nth-child(3) {
      width: 20px;
      bottom: 0;
      right: 0;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 1;
      transform: translateX(0vh);
    }
    100% {
      opacity: 0;
      transform: translateX(100vh);
    }
  }
`;
