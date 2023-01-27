import styled from 'styled-components';
import { theme } from 'theme';

export const Tr = styled.tr`
  height: 40px;
  border: 2px solid ${theme.colors.grey.light};
`;

export const Td = styled.td`
  color: ${props => props.type === 'expenses' && theme.colors.red.base}
    ${props => props.type === 'incomes' && theme.colors.green.base};

  font-weight: ${props => props.type && theme.fontWeights.bold};
  padding: 13px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.grey.light};
  }
`;
