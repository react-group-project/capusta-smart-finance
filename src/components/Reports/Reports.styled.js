import styled from 'styled-components';

export const List = styled.ul`
  //width: 623px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const ReportContainer = styled.div`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 40px;
    margin-bottom: 40px;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadows.base};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 20px 200px;
  }
`;
