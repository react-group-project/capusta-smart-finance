import { useState } from 'react';
import { Container } from '../Common/Container/Container.styled';
import { Text } from '../Common/Text/Text.styled';
import {
  HeaderContainer,
  UserInitials,
  UserInfoWrapper,
  Decorline,
  UserEmail,
  StyledHeader,
} from './Header.styled';
import ExitButton from './ExitButton';
import Logo from '../Header/Logo/';
import Modal from '../Modal/';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth.selectors';
import { selectUserEmail } from 'redux/user/user.selectors';
import { logoutThunk } from 'redux/auth/auth.thunk';
import ModalContent from 'components/Modal/ModalContent/ModalContent';

export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isLoggedIn = useSelector(selectToken);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    closeModalHandler();
    dispatch(logoutThunk());
  };

  const getUserInitials = () => {
    if (!userEmail) return '';
    return userEmail[0];
  };

  const openModalHandler = () => {
    setIsModalVisible(true);
  };
  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledHeader>
      <Container px={{ mobile: null, tablet: null, desktop: '16px' }}>
        <HeaderContainer>
          <Logo />
          {isLoggedIn && (
            <UserInfoWrapper>
              <UserInitials>
                <Text variant="boldUppercase">{getUserInitials()}</Text>
              </UserInitials>
              <UserEmail>{userEmail}</UserEmail>
              <Decorline />
              <ExitButton onClick={openModalHandler} />
            </UserInfoWrapper>
          )}
          {isModalVisible && (
            <Modal onClose={closeModalHandler}>
              <ModalContent
                message={`Do you really want to leave?`}
                onClose={closeModalHandler}
                onClick={logOutHandler}
              />
            </Modal>
          )}
        </HeaderContainer>
      </Container>
    </StyledHeader>
  );
}
