import { InputHTMLAttributes, FC } from "react";
import { StyledInputWrapper, StyledInput } from "./InputField.styled";

type InputFieldProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | "onChange"
  | "onKeyDown"
  | "name"
  | "id"
  | "autoFocus"
  | "defaultValue"
  | "value"
  | "disabled"
  | "type"
  | "placeholder"
>;

const InputField: FC<InputFieldProps> = ({ type, ...props }) => {
  return (
    <>
      <StyledInputWrapper>
        <StyledInput type={type} {...props} />
      </StyledInputWrapper>
    </>
  );
};

export default InputField;
