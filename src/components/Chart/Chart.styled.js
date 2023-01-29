import styled from 'styled-components';

export const ChartContainer = styled.div`
  @media screen and (max-width: 1279px) {
    width: 635px;
    height: 328px;
  }

  width: 758px;
  height: 380px;
`;
export const Container = styled.div`
  @media screen and (max-width: 1279px) {
    padding: 20px 35px;
    width: 704px;
  }
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadows.base};
  width: 1034px;
  padding: 20px 138px;
`;
