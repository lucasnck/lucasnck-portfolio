import * as React from "react";
import { ErrorMessage, FormItemStyle } from "./style";

export interface IFormItemProps {
  id: string;
  error?: any;
}

export const FormItem: React.FC<IFormItemProps> = (props) => {
  return (
    <FormItemStyle>
      {props.children}
    </FormItemStyle>
  );
};
