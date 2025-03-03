import styled from "@emotion/styled";
import padding from "../../constants/padding";
import colors from "@/constants/colors";

export const StyledTable = styled.table`
  display: table;
  color: ${colors.primaryText};
  flex: 1;
  padding: 0;
  border-collapse: collapse;
  border: none;
  overflow-x: hidden;
  background-color: ${colors.primaryBg};
`;

export const StyledHeader = styled.th`
  padding: ${padding.small};
  text-align: left;
  font-weight: bold;
  color: ${colors.primaryText};
  background-color: ${colors.tertiaryBg};
  text-transform: uppercase;
`;

export const StyledRow = styled.tr`
  background-color: ${colors.secondaryBg};
`;

type CellProps = {
  bold?: boolean;
};

export const Cell = styled.td<CellProps>`
  padding: ${padding.small};
  text-align: left;
  color: ${colors.primaryText};
  text-transform: ${({ bold }) => (bold ? "uppercase" : "none")};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const EvenRow = styled(StyledRow)`
  background-color: ${colors.tertiaryBg};
`;
