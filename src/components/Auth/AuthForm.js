import styled from 'styled-components';
import { theme } from 'theme';

export const FormStyle = styled.form`
  display: flex;
  justify-content: center;

  max-width: 100%;
  padding: 40px 20px;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.base};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 56px 84px;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  max-width: 258px;
`;

export const FormText = styled.p`
  margin-bottom: 16px;
  padding: 0 9px;

  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 32px;
  }
`;

export const FormSubText = styled.p`
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 20px;
  }
`;

export const GoogleButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 40px;

  padding: 10px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;

  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: ${({ theme }) => theme.lineHeights.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};

  border: none;
  border-radius: 26px;
  background: ${({ theme }) => theme.colors.lilac.dark};
  filter: ${theme.filters.googleButton};

  transition: ${({ theme }) => theme.transitions.create(['box-shadow'])};

  :hover {
    box-shadow: 1px 2px 6px 1px rgba(33, 33, 33, 0.4);
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

export const ErrorText = styled.span`
  position: absolute;
  bottom: -20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;
  margin: 4px 0 0 0;
  color: ${theme.colors.red.base};
  /* text-align: left; */
`;

export const ErrorStar = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;
  margin: 4px 0 0 0;
  color: ${theme.colors.red.base};
  /* text-align: left; */
`;

export const FieldStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 32px;
  }
`;

export const LabelInput = styled.label`
  font-size: 10px;
  line-height: 1.1;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  color: ${theme.colors.black};
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: 12px;
  }
`;

export const InputStyled = styled.input`
  margin: 0;
  padding: 17px 19px;
  font: inherit;
  background: ${theme.colors.lilac.dark};
  border-radius: 30px;
  height: 52px;
  width: 100%;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.04em;
  &::placeholder {
    color: ${theme.colors.grey.base};
  }
  &:focus:invalid {
    filter: drop-shadow(1px 2px 3px rgba(235, 87, 87, 0.2));
  }
  :valid {
    filter: drop-shadow(1px 2px 3px rgba(rgb(255, 117, 29), 0.2));
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: #52555f;
    /* -webkit-box-shadow: 0 0 0 1000px ${theme.colors.lilac.dark} inset; */
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const FormButtonsLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  width: 100%;
  margin-top: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 14px;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  max-width: 122px;
  height: 44px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.grey.dark};

  border: none;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.orange.base : theme.colors.lilac.dark};

  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
`;
