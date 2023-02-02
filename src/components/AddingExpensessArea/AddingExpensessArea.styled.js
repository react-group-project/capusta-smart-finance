import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { CalculatorIcon } from './calculator';

import { theme } from 'theme';

export const DescrWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: auto;
    display: flex;
    flex-direction: row;
    height: 100%;

    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;

  max-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    height: 44px;
    max-width: 100%;

    flex-direction: row;
    margin-bottom: 60px;
  }
`;

export const DateLabel = styled.label`
  display: flex;

  align-items: center;
  margin-bottom: 32px;
  /* margin-right: ; */
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-right: 44px;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    margin-right: 32px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 32px;
    width: 604px;
    height: 44px;
    flex-direction: row;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 714px;
    margin-bottom: 0;
    margin-right: 32px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  border: none;
  outline: none;
  padding: 0;

  width: 74px;

  background-color: transparent;
  font-weight: ${theme.fontWeights.black};
  font-size: ${theme.fontSizes[2]};
  line-height: ${theme.lineHeights.base};
  letter-spacing: ${theme.letterSpacings.base};

  color: ${theme.colors.grey.dark};
`;

export const DescritionLabel = styled.label`
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 184px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 290px;
  }
`;

export const DescriptionInput = styled.input`
  width: 100%;
  height: 44px;

  border: 2px solid ${theme.colors.white};
  border-bottom: none;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  outline: none;

  padding-left: 19px;
  padding-right: 32px;

  background-color: transparent;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    border-color: ${theme.colors.grey.light};
    border-bottom: 2px solid ${theme.colors.grey.light};
    border-right: none;
    border-top-right-radius: 0;
  }
`;

export const SelectLabel = styled.label`
  width: 100%;
  height: 44px;

  border: 2px solid ${theme.colors.white};
  border-bottom-right-radius: 16px;

  padding-right: 4px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    border: 2px solid ${theme.colors.grey.light};
    width: 186px;
    border-right: none;
    border-bottom-right-radius: 0;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 169px;
    border-right: none;
    border-bottom-right-radius: 0;
  }
`;

export const SelectInput = styled.input``;

export const AmountLabel = styled.label`
  width: 185px;
  height: 44px;

  position: relative;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 110px;
    height: 100%;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 120px;
  }
`;

export const AmountInput = styled.input`
  width: 100%;
  height: 100%;

  padding-right: 60px;
  padding-left: 10px;

  border: 2px solid ${theme.colors.white};
  border-radius: 16px;
  outline: none;
  background-color: transparent;

  text-align: end;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding-right: 40px;

    border-color: ${theme.colors.grey.light};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const StyledCalculatorIcon = styled(CalculatorIcon)`
  position: absolute;
  color: black;
`;

const Button = styled.button`
  min-width: 130px;
  padding: 12px 14px;

  border: none;
  border-radius: 16px;
  cursor: pointer;

  text-transform: uppercase;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[2]};
  line-height: ${theme.lineHeights.base};

  text-align: center;
  letter-spacing: ${theme.letterSpacings.small};
  text-transform: uppercase;

  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    min-width: 125px;

    box-shadow: none;
    &:hover {
      box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
    }
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    min-width: 136px;
  }
`;

export const SubmitBtn = styled(Button)`
  /* margin-right: 16px; */

  background-color: ${theme.colors.orange.base};

  color: ${theme.colors.white};
`;

export const ClearBtn = styled(Button)`
  border: 2px solid ${theme.colors.violet.light};
  background-color: ${theme.colors.lilac.base};
  color: ${theme.colors.grey.dark};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    background-color: transparent;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    display: flex;
    gap: 16px;
  }
`;
