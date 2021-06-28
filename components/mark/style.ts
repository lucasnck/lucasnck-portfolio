import styled from "styled-components";

export const MarkStyle = styled.span`
  position: relative;
  z-index: 1;
  display: inline-block;
  &:after {
    content: "";
    width: 100%;
    height: 95%;
    background-color: ${(props) => props.theme.colors[props.type]};
    position: absolute;
    left: ${(props) => props.pos1 - 2}px;
    z-index: -1;
    transform: rotate(-${(props) => props.pos1}deg);
  }
  &:before {
    content: "";
    width: 100%;
    height: 95%;
    background-color: rgb(110 37 200 / 50%);
    position: absolute;
    left: -${(props) => props.pos2}px;
    z-index: -1;
    transform: rotate(${(props) => props.pos1}deg);
  }
`;
