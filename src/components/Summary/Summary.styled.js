import styled from 'styled-components';
import { theme } from 'theme';

export const Tr = styled.tr`
  border: 2px solid ${theme.colors.white};
`;

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
  border-bottom: 1px solid ${theme.colors.white};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  text-transform: uppercase;

  font-size: ${theme.fontSizes[2]};
  line-height: ${theme.lineHeights.base};

  color: ${theme.colors.black};
`;

export const List = styled.ul`
  width: 213px;
  margin-bottom: 0px;
  margin-top: 0;
  padding-left: 0;

  overflow: hidden;

  background-color: ${theme.colors.grey.light};
  border-bottom-right-radius: 15px;

  font-weight: 400;
  font-size: ${theme.fontSizes[2]};
  line-height: ${theme.lineHeights.base};
  letter-spacing: ${theme.letterSpacings.base};
  text-transform: uppercase;

  color: ${theme.colors.grey.dark};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-right: 13px;
  padding-left: 13px;

  background-color: ${theme.colors.grey.light};
  border-top: 2px solid ${theme.colors.white};
`;
