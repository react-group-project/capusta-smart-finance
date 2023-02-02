import styled from 'styled-components';
import { theme } from 'theme';

export const TableWrapper = styled.div`
  width: 624px;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 746px;
  }
`;

export const TbodyWrapper = styled.div`
  //height: 344px;
`;

export const StyledTable = styled.table`
  width: 100%;

  border-radius: 10px;
  border-collapse: collapse;
  position: relative;
  text-align: center;
  font-size: ${theme.fontSizes[2]};
`;

export const TheadWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  overflow: hidden;
`;

export const HeadRow = styled.tr`
  display: flex;
  width: 100%;
`;

export const Thead = styled.thead`
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${theme.colors.grey.light};

  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px;

  display: flex;
  align-items: center;
  &:nth-child(1) {
    width: 20%;
    padding-left: 20px;

    @media screen and (min-width: ${theme.breakpoints[2]}) {
      padding-left: 28px;
    }
  }
  &:nth-child(2) {
    width: 30%;

    @media screen and (min-width: ${theme.breakpoints[2]}) {
      padding-left: 20px;
    }
  }
  &:nth-child(3) {
    justify-content: center;
    width: 20%;
  }
  &:nth-child(4) {
    justify-content: center;
    width: 20%;
  }
  &:nth-child(5) {
    width: 10%;
  }
`;

export const TBody = styled.tbody`
  display: block;
  width: 100%;
  height: 348px;

  border: 2px solid ${theme.colors.grey.light};

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
