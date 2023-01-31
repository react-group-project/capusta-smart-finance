import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey.light};
    padding-bottom: 20px;
    padding-top: 20px;
  }
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
export const NoDataText = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
`;
