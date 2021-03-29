import React from "react";
import styled from "@emotion/styled/macro";
import HeaderRow from "./HeaderRow";
import Row from "./Row";

interface TableWrapperProps {
  maxWidth?: string;
  maxHeight?: string;
}

const TableWrapper = styled("div")<TableWrapperProps>(
  ({ maxWidth, maxHeight }) => ({
    maxWidth,
    maxHeight,
    overflow: "scroll",
  }),
);

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

interface Column {
  key: string;
  title: string;
  width: string;
}

interface IProps {
  columns: Column;
  dataSource: Record<string, any>[];
  maxWidth?: string;
  maxHeight?: string;
}

const Table = ({
  columns,
  dataSource = [],
  maxWidth = "",
  maxHeight = "",
}: IProps) => (
  <TableWrapper maxWidth={maxWidth} maxHeight={maxHeight}>
    <StyledTable>
      <HeaderRow columns={columns} />
      <tbody>
        {dataSource.map((rowData) => (
          <Row key={rowData.key} columns={columns} rowContents={rowData} />
        ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

export default Table;
