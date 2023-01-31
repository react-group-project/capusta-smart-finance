import styled from 'styled-components';
import { theme } from 'theme';

export const FormStyle = styled.form`
  background-color: ${theme.colors.white};
  max-width: 100%;
  height: 496px;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  padding: 20px 0px;
    @media screen and (min-width: 281px) {
    max-width: 280px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    max-width: 426px;
     height: 552px;
      padding: 56px 0px;
  }
`;

export const Content = styled.div`
  padding: 0;
  margin: 0 auto;
  max-width: 240px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    max-width: 260px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;
  text-align: center;
  max-width: 222px;
  margin: 0 auto 16px auto;
  letter-spacing: 0.04em;
  color: ${theme.colors.grey.dark};
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    max-width: 100%;
    margin-bottom: 36px;
  }
`;

export const SubText = styled(Text)`
  text-align: start;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 20px;
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
export const BtnBox = styled.div`
  weight: 240px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 40px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    weight: 260px;
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
  cursor: pointer;
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

export const ButtonGoogle = styled.button`
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 122px;
  height: 40px;
  margin: 0 auto 32px auto;
  background: ${theme.colors.grey.light};
  border-radius: 26px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  filter: drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2));
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 1px 2px 6px 1px rgba(33, 33, 33, 0.4);
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    position: relative;
    z-index: -1;
  }
`;

export const LinkGoogle = styled.a`
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 122px;
  height: 40px;
  margin: 0 auto 32px auto;
  color: ${theme.colors.black};
  background: ${theme.colors.lilac.dark};
  border-radius: 26px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  filter: drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2));
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 1px 2px 6px 1px rgba(33, 33, 33, 0.4);
  }
  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    position: relative;
    z-index: -1;
  }
`;

export const FormBtn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  width: 116px;
  height: 44px;
  border-radius: 16px;

  background: ${theme.colors.lilac.dark};
  color: #52555f;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background: ${theme.colors.orange.base};
    color: white;
    box-shadow: 1px 2px 6px 1px rgba(33, 33, 33, 0.4);
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 122px;
  }
`;
