import styled from 'styled-components';
import { IoTrashOutline } from 'react-icons/io5';

export const Icon = styled(IoTrashOutline)`
  width: 15px;
  height: 18px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
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

export const List = styled.ul`
  width: 100%;

  padding: 0;

  margin-right: auto;
  margin-left: auto;
`;

export const DescrWrapper = styled.div`
  margin-right: 10px;
`;

export const Descr = styled.h4`
  margin: 0;
  margin-bottom: 3px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: ${({ theme }) => theme.lineHeights.base};

  letter-spacing: ${({ theme }) => theme.letterSpacings.base};

  color: ${({ theme }) => theme.colors.grey.dark};
`;

export const Content = styled.p`
  margin: 0;

  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 1.12;
`;

export const Amount = styled(Content)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.lineHeights.base};
  color: ${({ theme, amount }) =>
    amount < 0 ? theme.colors.red.dark : theme.colors.green.base};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lilac.base};
`;

const FlexDiv = styled.div`
  display: flex;
`;

export const CategoryWrapper = styled(FlexDiv)`
  gap: 20px;
`;

export const EmountWrapper = styled(FlexDiv)`
  gap: 20px;
  align-items: center;
`;
