import styled from "styled-components";
import is from "styled-is";

export const BadgeStyle = styled.span`
  display: inline-block;
  line-height: 15px;
  padding: 0 0.3rem;
  font-size: 10px;
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors[props.type]};
  ${is("outlined")`
    background-color: transparent;
    color: ${(props) => props.theme.colors[props.type]};
    border: 1px solid ${(props) => props.theme.colors[props.type]};
  `}
  border: 1px solid ${(props) => props.theme.colors[props.type]};
  transform: skew(${(props) => props.theme.skew.md});
  > * {
    display: block;
    transform: skew(-${(props) => props.theme.skew.md});
  }
`;
