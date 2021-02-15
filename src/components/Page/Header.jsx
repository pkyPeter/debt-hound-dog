import React from 'react';
import styled from '@emotion/styled';
import Text from '../Text';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 3.85rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  background-color: white;
  box-shadow: 0 2px 8px 0 rgb(40 37 89 / 20%);
`;

const Header = ({ title }) => (
  <HeaderWrapper>
    <Text.SubTitle>{title}</Text.SubTitle>
  </HeaderWrapper>
);

export default Header;
