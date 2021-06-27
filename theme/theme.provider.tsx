import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./sith.theme";

export interface ITheme {}

export const Theme: React.FC<ITheme> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
