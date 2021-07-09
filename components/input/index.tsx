import * as React from "react";
import { IInput, InputContainerStyle, InputStyle } from "./style";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>, IInput {
  label?: React.ReactNode;
}

export function Input(props: IInputProps) {
  return (
    <InputContainerStyle>
      <label htmlFor={props.id}>{props.label}</label>
      <InputStyle {...props} name={`input-${props.name}`}>
        <input placeholder={props.placeholder} name={props.name} id={props.id} />
      </InputStyle>
    </InputContainerStyle>
  );
}
