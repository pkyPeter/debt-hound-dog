import React from "react";
import styled from "@emotion/styled/macro";

const Td = styled.td`
  ${({ width }) => width && `width: ${width}`};
  padding: .65rem 1.5rem;
`;

const Row = ({ columns, rowContents }) => (
  <tr>
    {columns.map(({ key, width }) => (
      <Td key={key} width={width}>{rowContents[key]}</Td>
    ))}
  </tr>
);

export default Row;
