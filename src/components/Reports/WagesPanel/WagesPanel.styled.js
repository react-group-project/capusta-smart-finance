import styled from 'styled-components';
export const WagesContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 50px;

  align-items: center;
  margin-top: 40px;
  margin-bottom: 32px;
  padding-top: 15px;
  padding-bottom: 15px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii[2]}px;
  box-shadow: ${({ theme }) => theme.shadows.base};

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 1px)) {
    height: 85px;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-right: 15px;
  }
`;
export const PositiveSum = styled(Text)`
  color: ${({ theme }) => theme.colors.green.base};
`;
export const NegativeSum = styled(Text)`
  position: relative;
  color: ${({ theme }) => theme.colors.red.base};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-right: 40px;
    ::after {
      display: inline-block;
      content: '';
      position: absolute;

      border: 1px solid ${({ theme }) => theme.colors.grey.light};
      height: 36px;
      right: -20px;
      top: -10px;
    }
  }
`;
export const MobileContainer = styled.div`
  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 1px)) {
    width: 130px;
    text-align: center;
    position: relative;
    &:not(:last-child) {
      ::after {
        display: block;
        content: '';
        position: absolute;
        height: 70px;
        border: 1px solid ${({ theme }) => theme.colors.grey.light};
        right: -2px;
        top: -14px;
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
  }
`;
