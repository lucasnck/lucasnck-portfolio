import styled from "styled-components";
import is from "styled-is";

export const Button = styled.button`
  height: 40px;
  padding: 0 1rem;
  font-size: 16px;
  background-image: none;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid transparent;
  color: #fff;
  ${is("outlined")`
    background-color: transparent;
    color: ${(props) => props.theme.colors[props.type]};
    border: 1px solid ${(props) => props.theme.colors[props.type]};
  `}
  ${is("skewed")`
    transform: skew(${(props) => props.theme.skew.xs});
    @media (min-width: ${(props) => props.theme.screen.sm}) {
      transform: skew(${(props) => props.theme.skew.sm});
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      transform: skew(${(props) => props.theme.skew.md});
    }
    > * {
      display: block;
      transform: skew(-${(props) => props.theme.skew.xs});
      @media (min-width: ${(props) => props.theme.screen.sm}) {
        transform: skew(-${(props) => props.theme.skew.sm});
      }
      @media (min-width: ${(props) => props.theme.screen.md}) {
        transform: skew(-${(props) => props.theme.skew.md});
      }
    }
  `}
`;
