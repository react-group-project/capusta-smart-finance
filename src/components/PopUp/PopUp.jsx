import { PopUpContainer, TextPopUp, TextBottom } from './PopUp.styled';

export default function PopUp() {
  return (
    <>
      <PopUpContainer>
        <TextPopUp>
          Hello! To get started, enter the current balance of your account!
        </TextPopUp>
        <TextBottom>
        You can't spend money until you have it :)
        </TextBottom>
      </PopUpContainer>
      </>
  );
};
