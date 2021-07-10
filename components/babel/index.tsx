import * as React from "react";
import { BadgeStyle } from "./style";

export interface IBadge {
  type: string;
  outlined?: boolean;
}

export const Badge: React.FC<IBadge> = (props) => {
  return (
    <BadgeStyle {...props}>
      <span>{props.children}</span>
    </BadgeStyle>
  );
};
