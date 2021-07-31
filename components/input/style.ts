import styled from "styled-components";
import is from "styled-is";
import { theme } from "../../theme/sith.theme";

export interface IInput {
  colorType?: keyof typeof theme.colors;
  skewed?: boolean;
}
export const InputContainerStyle = styled.div``;

export const InputStyle = styled.div<IInput>`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors[props.colorType]};
  width: 100%;
  padding: 5px 15px;
  box-sizing: border-box;
  input,
  textarea {
    resize: none;
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    border-radius: 0;
    padding: 0;
    color: ${(props) => props.theme.colors[props.colorType]};
    font-size: 1em;
    &::placeholder {
      font-size: 1em;
      color: ${(props) => props.theme.colors["text-light"]};
    }
  }
  input {
    height: 35px;
  }

  ${is("skewed")`
    transform: skew(${(props) => props.theme.skew.xs});
    transform: skew(${(props) => props.theme.skew.xs});
    @media (min-width: ${(props) => props.theme.screen.sm}) {
      transform: skew(${(props) => props.theme.skew.sm});
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      transform: skew(${(props) => props.theme.skew.md});
    }
    @media (min-width: ${(props) => props.theme.screen.lg}) {
      transform: skew(${(props) => props.theme.skew.lg});
    }
    @media (min-width: ${(props) => props.theme.screen.xl}) {
      transform: skew(${(props) => props.theme.skew.xl});
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
      @media (min-width: ${(props) => props.theme.screen.lg}) {
        transform: skew(-${(props) => props.theme.skew.lg});
      }
      @media (min-width: ${(props) => props.theme.screen.xl}) {
        transform: skew(-${(props) => props.theme.skew.xl});
      }
    }
  `}
`;
