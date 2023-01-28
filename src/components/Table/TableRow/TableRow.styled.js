import styled from 'styled-components';
import { theme } from 'theme';
import { IoTrashOutline } from 'react-icons/io5';

export const Icon = styled(IoTrashOutline)`
  width: 15px;
  height: 18px;
`;

export const Tr = styled.tr`
  height: 40px;
  border: 2px solid ${theme.colors.grey.light};
`;

export const Td = styled.td`
  color: ${props => props.type === 'expenses' && theme.colors.red.base}${props => props.type === 'incomes' && theme.colors.green.base};
  font-weight: ${props => props.type && theme.fontWeights.bold};
  padding: 13px;
`;

export const Ttrash = styled(Td)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.grey.light};
  }
`;
