import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '../MainHeader';

const MainPageWrapper = styled.main`
  box-sizing: border-box;
  padding-left: ${({ isOpen }) => (isOpen ? '14.375rem' : 0)};
  width: 100%;
  height: 100%;
`;

const MainPage = ({ isOpen, onClickBurger, children }) => (
  <MainPageWrapper isOpen={isOpen}>
    <MainHeader onClickBurger={onClickBurger} />
    {children}
  </MainPageWrapper>
);

export default MainPage;
