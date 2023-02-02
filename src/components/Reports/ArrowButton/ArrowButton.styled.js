import styled from 'styled-components';

export const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 20px;
  }
`;
export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
`;
