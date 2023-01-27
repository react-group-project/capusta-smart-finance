import styled from 'styled-components';
import { theme } from 'theme';

export const TableWrapper = styled.div`
  width: 746px;
  height: 382px;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow-y: auto;
  scrollbar-gutter: both-edges;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.grey.light};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: ${theme.colors.orange.base};
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border: 2px solid ${theme.colors.grey.light};
  border-radius: 10px;
  border-collapse: collapse;
  position: relative;
  text-align: center;
  font-size: ${theme.fontSizes[2]}px;
`;

export const Thead = styled.thead`
  border-radius: 10px;
  background-color: ${theme.colors.grey.light};
  position: sticky;
  top: 1px;
  right: 0;
  width: 100%;

  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 13px;
`;

export const TBody = styled.tbody`
  height: 500px;
`;
