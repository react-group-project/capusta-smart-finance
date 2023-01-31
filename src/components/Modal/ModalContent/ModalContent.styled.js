import { Button } from 'components/Common/Button/Button.styled';
import styled from 'styled-components';

export const ClosePopUpBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const MainLayer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 194px;

  background-color: ${props => props.theme.colors.white};
`;

export const InnerLayer = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 58px;
    padding-right: 58px;
  }
`;

export const PopUpText = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0 30px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[4]};
  line-height: ${props => props.theme.lineHeights.small};

  text-align: center;
  letter-spacing: ${props => props.theme.letterSpacings.small};
  color: ${props => props.theme.colors.grey.dark};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 40px;
  }
`;

export const PopUpButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  max-width: 125px;
  height: 44px;
`;
