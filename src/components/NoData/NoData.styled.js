import styled from 'styled-components';

export const NoDataText = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 20px;
  }
`;
