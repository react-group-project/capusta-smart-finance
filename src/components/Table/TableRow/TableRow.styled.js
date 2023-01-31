import { IoTrashOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { theme } from 'theme';

export const Icon = styled(IoTrashOutline)`
  width: 15px;
  height: 18px;
`;

export const Tr = styled.tr`
  height: 40px;
  border: 2px solid ${theme.colors.grey.light};
`;

export const Td = styled.td`
  color: ${theme.colors.grey.dark};
  font-weight: ${theme.fontWeights.regular};
  padding: 13px;
`;

export const ExpenseTd = styled(Td)`
  color: ${theme.colors.red.base};
  font-weight: ${theme.fontWeights.bold};
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
