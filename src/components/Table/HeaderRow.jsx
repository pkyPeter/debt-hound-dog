import React from "react";
import styled from "@emotion/styled/macro";

const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.BLACK_400};
  color: #6e6b7b;
  text-align: left;
  font-size: 0.8125rem;
  letter-spacing: 0.5px;
  border-top: 1px solid #ebe9f1;
  border-bottom: 2px solid #ebe9f1;
`;

const Th = styled.th`
  ${({ width }) => width && `width: ${width}`};
  padding: .65rem 1.5rem;
`;

const HeaderRow = ({ columns }) => (
  <Thead>
    <tr>
      {columns.map(({ title, width }) => (
        <Th width={width}>{title}</Th>
      ))}
    </tr>
  </Thead>
);

export default HeaderRow;
