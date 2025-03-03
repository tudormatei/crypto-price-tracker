import borderRadius from "@/constants/borderRadius";
import colors from "@/constants/colors";
import gap from "@/constants/gap";
import padding from "@/constants/padding";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.primaryBg};

  padding: 0;
  margin: 0;
`;

export const List = styled.div`
  max-width: 500px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.secondaryBg};
  border-radius: ${borderRadius.medium};
  padding: ${padding.large};
  gap: ${gap.medium};
`;

export const Header = styled.h1`
  color: ${colors.primaryText};
  margin: 0;
  text-align: center;
`;

export const Description = styled.p`
  color: ${colors.secondaryText};
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

export const Error = styled.p`
  margin: 0;
  color: ${colors.error};
  font-weight: bold;
`;
