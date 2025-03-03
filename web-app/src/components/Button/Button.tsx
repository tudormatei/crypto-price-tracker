import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { SpinnerWrapper, StyledButton, StyledSpinner } from "./Button.styled";

type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "type" | "disabled"
>;

const Button: FC<ButtonProps> = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButton {...props} disabled={disabled || loading}>
      {loading && (
        <SpinnerWrapper>
          <StyledSpinner />
        </SpinnerWrapper>
      )}
      {children}
    </StyledButton>
  );
};

export default Button;
