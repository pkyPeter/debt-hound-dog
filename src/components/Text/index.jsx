import { css } from "@emotion/react";
import styled from "@emotion/styled";

const resetMargin = css`
  margin-block-start: 0;
  margin-block-end: 0;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.BLACK_100};
  font-size: 2rem;
  ${resetMargin};
`;

const H2 = styled.h1`
  color: ${({ theme }) => theme.colors.BLACK_100};
  font-size: 1.74rem;
  font-weight: 500;
  ${resetMargin};
`;

const H6 = styled.h6`
  color: ${({ theme }) => theme.colors.BLACK_100};
  font-size: 1rem;
`;

export default { H1, H2, H6 };
