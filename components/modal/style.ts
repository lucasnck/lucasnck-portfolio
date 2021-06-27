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
    transform: translateX(-50%) translateY(-50%) skew(4deg);
    @media (min-width: ${(props) => props.theme.screen.sm}) {
      transform: skew(${(props) => props.theme.skew.sm}) translateX(-50%) translateY(-50%);
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      transform: skew(${(props) => props.theme.skew.md}) translateX(-50%) translateY(-50%);
    }
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: -14px;
      left: 10px;
      background-color: #101012;
      border: 2px solid #27fffd;
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
  padding: 1rem 3rem 2rem 5rem;
  transform: skew(-4deg);
  @media (min-width: ${(props) => props.theme.screen.sm}) {
    transform: skew(-${(props) => props.theme.skew.sm});
  }
  @media (min-width: ${(props) => props.theme.screen.md}) {
    transform: skew(-${(props) => props.theme.skew.md});
  }
`;
