import React from "react";
import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";
import sidebar from "../../config/sidebar";

import houndDog from "../../imgs/hound-dog.svg";

const Container = styled.aside`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  width: 16.25rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.WHITE_DEFAULT};
  box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.875rem;
`;

const Logo = styled.img`
  max-height: 2.5rem;
  margin-right: 0.5rem;
`;

const LogoText = styled.div`
  font-weight: 900;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.PURPLE_DEFAULT};
`;

const SideMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const SideMenuItemHeader = styled.div`
  padding: 2.285rem 1.625rem 0.9575rem;
  color: ${({ theme }) => theme.colors.BLACK_200};
  font-size: 0.9rem;
`;

const SideMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 0.9375rem;
  min-height: 2.625rem;
  transition-duration: 0.3s;
`;

const ItemIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ItemText = styled.span`
  font-size: 0.9625rem;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0 0.9375rem;
  color: ${({ theme }) => theme.colors.BLACK_DEFAULT};
  > li svg path {
    fill: ${({ theme }) => theme.colors.BLACK_DEFAULT};
  }
  &:hover {
    ${SideMenuItem} {
      padding-left: 1.375rem;
    }
  }
  &.nav-link--selected {
    > ${SideMenuItem} {
      background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240.7));
      box-shadow: 0 0 10px 1px rgba(115 103 240 / 70%);
      border-radius: 4px;
    }
    color: ${({ theme }) => theme.colors.WHITE_DEFAULT};
    > li svg path {
      fill: ${({ theme }) => theme.colors.WHITE_DEFAULT};
    }
  }
`;

const Sidebar = ({ isOpen }) => (
  <Container isOpen={isOpen}>
    <LogoContainer>
      <Logo src={houndDog} alt="logo" />
      <LogoText>Debt Hound</LogoText>
    </LogoContainer>
    <SideMenu>
      {sidebar.map(({ title: groupTitle, group }) => (
        <div>
          <SideMenuItemHeader>
            {groupTitle}
          </SideMenuItemHeader>
          {group.map(({
            key, icon: Icon, title, href,
          }) => (
            <StyledNavLink
              key={key}
              to={href}
              activeClassName="nav-link--selected"
            >
              <SideMenuItem>
                <ItemIcon>
                  <Icon />
                </ItemIcon>
                <ItemText>{title}</ItemText>
              </SideMenuItem>
            </StyledNavLink>
          ))}
        </div>
      ))}
    </SideMenu>
  </Container>
);

export default Sidebar;
