import styled from 'styled-components';
import { theme } from 'theme';

export const TableWrapper = styled.div`
  width: 624px;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 746px;
  }
`;

export const TbodyWrapper = styled.div`
  height: 344px;

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

export const TheadWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  overflow: hidden;
`;

export const HeadRow = styled.tr`
  /* &:last-child {
    width: 108px;
  } */
`;

export const Thead = styled.thead`
  width: 100%;
  border-radius: 10px;
  background-color: ${theme.colors.grey.light};

  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 13px;
  &:last-child {
    width: 89px;
    @media screen and (min-width: ${theme.breakpoints[2]}) {
      width: 109px;
    }
  }
`;

export const TBody = styled.tbody`
  height: 500px;
`;
