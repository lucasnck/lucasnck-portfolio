import * as React from "react";
import { LogoStyle } from "./logo.style";

export interface ILogoProps {
  centered?: boolean;
  type?: "secondary";
}

export default function Logo(props: ILogoProps) {
  return (
    <LogoStyle centered={props.centered} type={props.type}>
      <span>Lucasnck</span>
    </LogoStyle>
  );
}
