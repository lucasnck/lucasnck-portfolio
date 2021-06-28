import * as React from "react";
import { LogoStyle } from "./logo.style";

export interface ILogoProps {
  centered?: boolean;
  type?: "secondary";
}

export default function Logo(props: ILogoProps) {
  return (
    <LogoStyle centered={props.centered} type={props.type}>
      <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 54 48" fill="none">
        <rect
          x="1.14833"
          y="0.988938"
          width="38"
          height="38"
          transform="matrix(1 0 0.148327 0.988938 7.85331 0.0109393)"
          stroke="#27FCFA"
          strokeWidth="2"
        />
        <rect
          x="1.14004"
          y="0.990146"
          width="38"
          height="38"
          transform="matrix(1 0 0.140037 0.990146 -0.138657 8.00976)"
          stroke="#6E25C8"
          strokeWidth="2"
        />
      </svg>
      <span style={{ marginLeft: "1rem" }}>Lucasnck</span>
    </LogoStyle>
  );
}
