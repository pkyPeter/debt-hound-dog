import React from "react";
import styled from "@emotion/styled";
import Text from "../Text";

const BreadcrumbsWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1.75rem 1.5rem 1.3125rem;
  background-color: ${({ theme }) => theme.colors.BLACK_300};
`;

const Breadcrumbs = ({ breadCrumbs }) => (
  <BreadcrumbsWrapper>
    {breadCrumbs.map(({ text, href, isActive }) => <Text.H6>{text}</Text.H6>)}
  </BreadcrumbsWrapper>
);

export default Breadcrumbs;
