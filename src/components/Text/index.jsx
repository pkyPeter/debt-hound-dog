import { css } from '@emotion/react';
import styled from '@emotion/styled';

const resetMargin = css`
  margin-block-start: 0;
  margin-block-end: 0;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.BLACK_200};
  font-size: 1.5rem;
  ${resetMargin};
`;

const SubTitle = styled.h1`
  color: ${({ theme }) => theme.colors.BLACK_200};
  font-size: 1.25rem;
  ${resetMargin};
`;

export default { Title, SubTitle };
