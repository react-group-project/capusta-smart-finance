import styled from 'styled-components';

export const IconWrapper = styled.div`
  cursor: pointer;
  color: ${({ isActive, theme }) => {
    if (isActive) return theme.colors.orange.base;
    return theme.colors.blue.dark;
  }};
  transition: ${({ theme }) => theme.transitions.create(['color'])};
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.orange.base};
  }
`;

export const IconBg = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.blue.light};
  background-color: ${({ isActive, theme }) => {
    if (isActive) return theme.colors.orange.light;
    return theme.colors.blue.light;
  }};
  width: 52px;
  height: 46px;
  border-radius: 20px;
  transition: ${({ theme }) => theme.transitions.create(['background-color'])};
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.orange.light};
  }
`;

export const Svg = styled.svg`
  display: block;
  position: absolute;
  bottom: 4px;
`;
export const BookSvg = styled.svg`
  display: block;
  position: absolute;
  bottom: 12px;
`;
export const CarSvg = styled.div`
  display: block;
  position: absolute;
  bottom: 8px;
`;
