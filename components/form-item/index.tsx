import * as React from "react";
import { FormItemStyle } from "./style";

export interface IFormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const FormItem: React.FC<IFormItemProps> = (props) => {
  return (
    <FormItemStyle {...props} id={`form-item-${props.id}`}>
      {props.children}
    </FormItemStyle>
  );
};
