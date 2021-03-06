import React from "react";
import styled from "@emotion/styled";
import Text from "../Text";

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.75rem 1.5rem 1.3125rem;
  background-color: ${({ theme }) => theme.colors.BLACK_300};
`;

const Header = ({ title }) => (
  <HeaderWrapper>
    <Text.H2>{title}</Text.H2>
  </HeaderWrapper>
);

export default Header;
