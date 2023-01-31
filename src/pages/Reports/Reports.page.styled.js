import styled from 'styled-components';

export const ReportsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    flex-direction: column;
  }
`;
