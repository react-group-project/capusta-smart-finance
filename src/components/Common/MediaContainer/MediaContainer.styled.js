import styled from 'styled-components';

export const MediaContainer = styled.div`
  @media screen and (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints[1]}) and (max-width: 1279px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-left: 91px;
    padding-right: 91px;
  }
`;
