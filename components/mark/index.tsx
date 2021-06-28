import React from "react";
import { MarkStyle } from "./style";

export const Mark: React.FC<{ type }> = ({ children, type }) => {
  const pos1 = Math.floor(Math.random() * 6);
  const pos2 = Math.floor(Math.random() * 11);

  return (
    <MarkStyle pos1={pos1} pos2={pos2} type={type}>
      {children}
    </MarkStyle>
  );
};
