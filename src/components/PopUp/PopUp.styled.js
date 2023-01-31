import styled from 'styled-components';
import { theme } from 'theme';
import PopUp from '../../images/PopUp.svg';

export const PopUpContainer = styled.div`
  position: absolute;
  top: 165px;
  left: 10%;
  z-index: 10;

  padding-top: 40px;
  padding-left: 25px;
  width: 280px;
  height: 163px;
  background-image: url(${PopUp});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 41%;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    top: 83px;
    left: 12%;
    padding-left: 29px;
    width: 288px;
    height: 163px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    left: 37%;
  }
`;
export const TextPopUp = styled.p`
  margin: 0;
  padding: 0;
  width: 230px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 18px;
  color: ${theme.colors.white};
`;
export const TextBottom = styled.p`
  margin: 0;
  padding: 0;

  width: 250px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: ${theme.colors.white};
`;
