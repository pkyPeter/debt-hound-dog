import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import sidebar from '../../config/sidebar';

import houndDog from '../../imgs/hound-dog.svg';

const Container = styled.aside`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 14.375rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.BLACK_DEFAULT};
  color: ${({ theme }) => theme.colors.WHITE_DEFAULT};
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #2f2742;
  height: 5.125rem;
`;

const Logo = styled.img`
  max-height: 2.5rem;
  margin-right: .5rem;
`;

const LogoText = styled.div`
  font-weight: 900;
  font-size: 22px;
`;

const SideMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  &: hover {
    background-color: #231a3c;
    color: ${({ theme }) => theme.colors.PURPLE_DEFAULT};
    > li svg path {
      fill:${({ theme }) => theme.colors.PURPLE_DEFAULT}
    }
  }
  &.nav-link--selected {
    background: linear-gradient(87deg, #ab67ec 0, #7659ff 100%);
    &: hover {
      background-color: unset;
      color: unset;
      > li svg path {
        fill: #e6e5e8;
      }
    }
  }
`;

const SideMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  min-height: 3.25rem;
`;

const ItemIcon = styled.div`
  width: 0.9375rem;
  margin-right: .5rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ItemText = styled.span`
  font-size: 0.9rem;
`;

const Sidebar = ({ isOpen }) => (
  <Container isOpen={isOpen}>
    <LogoContainer>
      <Logo src={houndDog} alt="logo" />
      <LogoText>Debt Hound</LogoText>
    </LogoContainer>
    <SideMenu>
      {sidebar.map(({
        key, icon: Icon, title, href,
      }) => (
        <StyledNavLink key={key} to={href} activeClassName="nav-link--selected">
          <SideMenuItem>
            <ItemIcon><Icon /></ItemIcon>
            <ItemText>{title}</ItemText>
          </SideMenuItem>
        </StyledNavLink>
      ))}

    </SideMenu>
  </Container>
);

export default Sidebar;
