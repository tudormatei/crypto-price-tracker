import borderRadius from "@/constants/borderRadius";
import colors from "@/constants/colors";
import styled from "@emotion/styled";

type StyledButtonProps = {
  disabled?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;
  font-weight: bold;
  background-color: ${({ disabled }) =>
    disabled ? colors.lightGray : colors.primary};
  color: ${({ disabled }) => (disabled ? colors.textLight : colors.buttonText)};
  border: 1px solid
    ${({ disabled }) => (disabled ? colors.lightGray : colors.primary)};
  border-radius: ${borderRadius.medium};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s, color 0.3s;
  outline: none;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? colors.lightGray : colors.primary};
    color: ${({ disabled }) =>
      disabled ? colors.textLight : colors.buttonText};
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : "0 4px 12px rgba(0, 0, 0, 0.1)"};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(0.98)")};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : "0 2px 6px rgba(0, 0, 0, 0.2)"};
  }

  &:focus {
    outline: ${({ disabled }) =>
      disabled ? "none" : `3px solid ${colors.primary}`};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : `0 0 10px rgba(168, 218, 220, 0.5)`};
  }
`;

export const SpinnerWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledSpinner = styled.span`
  width: 14px;
  height: 14px;
  border: 3px solid ${colors.textDark};
  border-bottom-color: transparent;
  border-radius: ${borderRadius.round};
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
