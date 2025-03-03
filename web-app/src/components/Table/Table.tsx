import { FC } from "react";
import {
  StyledRow,
  StyledTable,
  StyledHeader,
  EvenRow,
  Cell,
} from "./Table.styled";
import { CryptoCoin } from "@/types/crypto";

interface TableProps {
  headers: string[];
  entries: CryptoCoin[];
}

const Table: FC<TableProps> = ({ entries, headers }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((item, index) => (
            <StyledHeader key={index}>{item}</StyledHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(entries) &&
          entries.map((entry, idx) => {
            const Row = idx % 2 === 0 ? StyledRow : EvenRow;

            return (
              <Row key={idx}>
                <Cell bold>{entry.name}</Cell>
                <Cell>{entry.price}</Cell>
              </Row>
            );
          })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
