import styled from 'styled-components';
import { position } from 'styled-system';

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: ${({ theme }) =>
    theme.transitions.create(['border-bottom-color'])};

  &:hover,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.grey.alpha};
  }
`;
export const ComponentContainer = styled.div`
  display: flex;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    align-self: flex-start;
    margin-bottom: 16px;
  }
  ${position}
`;
export const Text = styled.span`
  color: ${({ theme }) => theme.colors.grey.alpha};
  margin-left: 16px;
  margin-top: 2px;
  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 1px)) {
    display: none;
  }
`;
