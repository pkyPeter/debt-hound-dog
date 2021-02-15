import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';

const PageWrapper = styled.main`
  position: relative;
  height: calc(100% - 3.3rem);
  width: 100%;
  overflow-y: hidden;
`;

const Content = styled.div`
  padding: ${({ withTitle }) => `${withTitle ? '5.35rem' : '1.5rem'} 1.5rem 1.5rem`};
  background-color: ${({ theme }) => theme.colors.BLACK_100};
  height: 100%;
  overflow-y: scroll;
`;

const Page = ({ title, children }) => (
  <PageWrapper>
    {!!title && <Header title={title} />}
    <Content withTitle={!!title}>
      {children}
    </Content>
  </PageWrapper>
);

export default Page;
