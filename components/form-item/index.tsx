import * as React from "react";
import { FormItemStyle } from "./style";

export interface IFormItemProps {
  id: string;
}

export const FormItem: React.FC<IFormItemProps> = (props) => {
  return <FormItemStyle>{props.children}</FormItemStyle>;
};
