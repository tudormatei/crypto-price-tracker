import styled from "@emotion/styled";
import borderRadius from "@/constants/borderRadius";
import colors from "@/constants/colors";

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 12px 16px;
  padding-right: 40px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: ${borderRadius.medium};
  transition: border 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 4px rgba(97, 231, 255, 0.5);
    outline: none;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #a0a0a0;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #aaa;
    opacity: 1;
  }

  &:not(:disabled) {
    &:hover {
      border-color: ${colors.primary};
    }
  }
`;
