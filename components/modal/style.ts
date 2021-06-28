import styled from "styled-components";
import is from "styled-is";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
  z-index: 8;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s linear;
  ${is("show")`
    opacity: 1;
    visibility: visible;
  `}
`;

export const ModalStyle = styled.div`
  position: relative;
  > div {
    position: absolute;
    margin-top: -20%;
    left: 50%;
    width: auto;
    height: auto;
    background-color: #000;
    z-index: 9;
    border: 2px solid #4514a7;
    transform: translateX(-50%) translateY(-50%);
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: -14px;
      left: 10px;
      background-color: #101012;
      border: 2px solid #27fffd;
      z-index: 4;
    }

    opacity: 0;
    visibility: hidden;
    transition: all 0.1s linear;
    margin-top: -19%;
    ${is("show")`
      margin-top: -20%;
      opacity: 1;
      visibility: visible;
    `}
  }
`;

export const ModalContent = styled.div`
  padding: 0 1rem 3rem 2rem;
  z-index: 5;
  position: relative;
`;
