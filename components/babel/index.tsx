import styled from "styled-components";
import is from "styled-is";

export const Babel = styled.span`
  display: inline-block;
  line-height: 25px;
  padding: 0 0.5rem;
  font-size: 12px;
  color: ${(props) => props.theme.colors["light"]};
  background-color: ${(props) => props.theme.colors[props.type]};
  ${is("outlined")`
    background-color: transparent;
    color: ${(props) => props.theme.colors[props.type]};
    border: 1px solid ${(props) => props.theme.colors[props.type]};
  `}
  border: 1px solid ${(props) => props.theme.colors[props.type]};
  /* border-radius: 4px; */
  transform: skew(${(props) => props.theme.skew.md});
  > * {
    display: block;
    transform: skew(-${(props) => props.theme.skew.md});
  }
`;
