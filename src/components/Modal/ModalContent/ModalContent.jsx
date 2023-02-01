import { ModalContentPropTypes } from './ModalContent.props';
import {
  ButtonWrapper,
  ClosePopUpBtn,
  InnerLayer,
  MainLayer,
  PopUpButton,
  PopUpText,
} from './ModalContent.styled';

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path stroke="#52555F" strokeWidth="2" d="M1 1l12 12M1 13L13 1"></path>
    </svg>
  );
};

export default function ModalContent({ message, onClose, onClick }) {
  return (
    <MainLayer>
      <ClosePopUpBtn onClick={onClose}>
        <CloseIcon />
      </ClosePopUpBtn>
      <InnerLayer>
        <PopUpText>{message}</PopUpText>
        <ButtonWrapper>
          <PopUpButton onClick={onClick} type="button" variant="secondary">
            Yes
          </PopUpButton>
          <PopUpButton onClick={onClose} type="button" variant="greyOutline">
            No
          </PopUpButton>
        </ButtonWrapper>
      </InnerLayer>
    </MainLayer>
  );
}

ModalContent.propTypes = ModalContentPropTypes;
