import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from '@emotion/styled';
import { SidebarContext } from '../context/sidebar';
import Home from './Home';
import Hangouts from './Hangouts';
import Debtors from './Debtors';
import Sidebar from '../components/Sidebar';
import MainPage from '../components/MainPage';

const Routes = () => (
  <Switch>
    <Route path="/hangouts" component={Hangouts} />
    <Route path="/debtor" component={Debtors} />
    <Route path="/" component={Home} />
  </Switch>
);

const AppContent = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Pages = () => {
  const { isOpen, toggleOpen } = useContext(SidebarContext);
  return (
    <AppContent>
      <Sidebar isOpen={isOpen} />
      <MainPage isOpen={isOpen} onClickBurger={toggleOpen}>
        <Routes />
      </MainPage>
    </AppContent>
  );
};

export default Pages;
