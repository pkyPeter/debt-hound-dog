import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Burger } from '../../imgs/burger.svg';

const MainHeaderWrapper = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  height: 3.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
`;

const BurgerWrapper = styled.div`
  > svg {
    cursor: pointer;
    max-width: 1rem;
    max-height: 1rem;
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.PURPLE_DEFAULT};
      }
    }
  }
`;

const MainHeader = ({ onClickBurger }) => (
  <MainHeaderWrapper>
    <BurgerWrapper onClick={onClickBurger}>
      <Burger />
    </BurgerWrapper>
  </MainHeaderWrapper>
);

export default MainHeader;
