import styled from 'styled-components';
import { theme } from 'theme';

export const Tr = styled.tr``;

export const Table = styled.table`
  margin-top: 30px;
  width: 213px;
  background-color: ${theme.colors.grey.light};
`;

export const Wrapper = styled.div`
  width: 213px;
`;

export const ListHead = styled.h3`
  text-align: center;
  margin-bottom: 0px;
  padding-top: 14px;
  padding-bottom: 14px;

  background-color: ${theme.colors.grey.light};
  border: 1px solid ${theme.colors.white};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const List = styled.ul`
  margin-bottom: 0px;
  margin-top: 0;
  padding-left: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-right: 13px;
  padding-left: 13px;
  background-color: ${theme.colors.grey.light};
  border: 1px solid ${theme.colors.white};
  &:last-child {
    border-bottom-right-radius: 15px;
  }
`;
