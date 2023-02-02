import { Box } from 'components/Box/Box.styled';
import styled from 'styled-components';

export const TransactionsDataWrapper = styled(Box)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: 40px;
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
