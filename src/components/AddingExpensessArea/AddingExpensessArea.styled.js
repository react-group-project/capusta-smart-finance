import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { CalculatorIcon } from './calculator';
import { theme } from 'theme';

export const Form = styled.form`
  display: flex;
  height: 44px;
`;

export const DateLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledDatePicker = styled(DatePicker)`
  border: none;
  outline: none;
  padding: 0;

  width: 74px;

  font-weight: ${theme.fontWeights.black};
  font-size: ${theme.fontSizes[2]};
  line-height: ${theme.lineHeights.base};
  letter-spacing: ${theme.letterSpacings.base};

  color: ${theme.colors.grey.dark};
`;

export const DescritionLabel = styled.label`
  width: 290px;
`;

export const DescriptionInput = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid ${theme.colors.grey.light};
  border-top-left-radius: 16px;
  outline: none;
  padding-left: 19px;
  padding-right: 32px;
`;

export const SelectLabel = styled.label`
  width: 169px;
  border: 2px solid ${theme.colors.grey.light};
`;

export const SelectInput = styled.input``;

export const AmountLabel = styled.label`
  width: 120px;
  position: relative;
  margin-right: 32px;
`;

export const AmountInput = styled.input`
  width: 100%;
  height: 100%;

  padding-right: 50px;
  padding-left: 20px;

  border: 2px solid ${theme.colors.grey.light};
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  text-align: end;

  outline: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const StyledCalculatorIcon = styled(CalculatorIcon)`
  position: absolute;
  color: black;
`;

const Button = styled.button`
  min-width: 136px;
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
`;

export const SubmitBtn = styled(Button)`
  margin-right: 16px;

  background-color: ${theme.colors.orange.base};

  color: ${theme.colors.white};
`;

export const ClearBtn = styled(Button)`
  border: 2px solid ${theme.colors.violet.light};
  background-color: transparent;
  color: ${theme.colors.grey.dark};
`;
