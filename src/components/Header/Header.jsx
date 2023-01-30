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
import ExitPopUp from '../Header/ExitPopUp/';
import Modal from '../Modal/';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth.selectors';
import { selectUserEmail } from 'redux/user/user.selectors';
import { logoutThunk } from 'redux/auth/auth.thunk';

export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isLoggedIn = useSelector(selectToken);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const LogOut = () => {
    toggleModalVisibility();
    dispatch(logoutThunk());
  };

  const getUserInitials = () => {
    if (!userEmail) return '';
    return userEmail[0];
  };

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
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
              <ExitButton onClick={toggleModalVisibility} />
            </UserInfoWrapper>
          )}
          {isModalVisible && (
            <Modal toggleModalVisibility={toggleModalVisibility}>
              <ExitPopUp
                LogOut={LogOut}
                toggleModalVisibility={toggleModalVisibility}
              />
            </Modal>
          )}
        </HeaderContainer>
      </Container>
    </StyledHeader>
  );
}
