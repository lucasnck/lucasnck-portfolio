import styled from "styled-components";
import is from "styled-is";
import { theme } from "../../theme/sith.theme";

export interface IText {
  type: keyof typeof theme.colors;
  align?: string;
  fontSize?: "";
  transform?: "";
}

export const Text = styled.span<IText>`
  color: ${(props) => props.theme.colors[props.type]};
  text-align: ${(props) => props.align || "inherit"};
  ${is("transform")`
    text-transform: ${(props) => props.transform};
  `}
  ${is("fontSize")`
    font-size: ${(props) => props.fontSize};
  `}
`;
