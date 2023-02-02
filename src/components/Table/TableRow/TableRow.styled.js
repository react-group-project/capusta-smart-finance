import { IoTrashOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const Icon = styled(IoTrashOutline)`
  width: 15px;
  height: 18px;
`;

export const Tr = styled.tr`
  height: 40px;
  width: 100%;

  display: flex;

  border-bottom: 2px solid ${({ theme }) => theme.colors.grey.light};
`;

export const Td = styled.td`
  color: ${({ theme }) => theme.colors.grey.dark};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  display: flex;
  align-items: center;
  padding-left: 10px;

  &:nth-child(1) {
    width: 20%;
  }
  &:nth-child(2) {
    width: 30%;
  }
  &:nth-child(3) {
    justify-content: center;
    width: 20%;
  }
  &:nth-child(4) {
    width: 20%;
    justify-content: center;
  }
  &:nth-child(5) {
    width: 10%;
    justify-content: center;
  }
`;

export const ExpenseTd = styled(Td)`
  color: ${({ theme, amount }) =>
    amount < 0 ? theme.colors.red.base : theme.colors.green.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Ttrash = styled(Td)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  transition: ${({ theme }) => theme.transitions.create(['background-color'])};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey.light};
  }
`;
