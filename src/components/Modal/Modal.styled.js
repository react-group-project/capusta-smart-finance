import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const ModalWindow = styled.div`
  width: calc(100% - 40px);
  max-width: 380px;
  overflow: hidden;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.modal};
`;
