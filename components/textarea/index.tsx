import * as React from "react";
import { IInput, InputContainerStyle, InputStyle } from "../input/style";

interface IInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, IInput {
  label?: React.ReactNode;
}

export function TextArea(props: IInputProps) {
  return (
    <InputContainerStyle>
      <label htmlFor={props.id}>{props.label}</label>
      <InputStyle {...props}>
        <textarea placeholder={props.placeholder} name={props.name} id={props.id} />
      </InputStyle>
    </InputContainerStyle>
  );
}
