import { useState, useRef } from 'react';
import { Text } from '../Common/Text/Text.styled';
import {
  Container,
  UserInitials,
  UserInfoWrapper,
  Decorline,
  UserEmail,
  StyledHeader,
  LogInBtn,
} from './Header.styled';
import ExitButton from './ExitButton';
import Logo from '../Header/Logo/';
import ExitPopUp from '../Header/ExitPopUp/';
import Modal from '../Modal/';

export default function Header() {
  //--------------------------------------------/ тестовий код - заглушка
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let userEmail = useRef('');

  const LogIn = () => {
    if (isLoggedIn) return;
    const enteredData = prompt('Enter Your e-mail to log in');
    if (enteredData) {
      setIsLoggedIn(true);
      userEmail.current = enteredData;
    }
  };

  const LogOut = () => {
    toggleModalVisibility();
    setIsLoggedIn(false);
  };

  const getUserInitials = () => {
    if (!userEmail.current) return '';
    return userEmail.current[0];
  };
  //------------------------------------------------/ тестовий код - заглушка

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <StyledHeader>
      <Container>
        <Logo />
        {isLoggedIn && (
          <UserInfoWrapper>
            <UserInitials>
              <Text variant="boldUppercase">{getUserInitials()}</Text>
            </UserInitials>
            <UserEmail>{userEmail.current}</UserEmail>
            <Decorline />
            <ExitButton onClick={toggleModalVisibility} />
          </UserInfoWrapper>
        )}
        {!isLoggedIn && (
          <LogInBtn on onClick={LogIn}>
            Log in
          </LogInBtn>
        )}
        {isModalVisible && (
          <Modal toggleModalVisibility={toggleModalVisibility}>
            <ExitPopUp
              LogOut={LogOut}
              toggleModalVisibility={toggleModalVisibility}
            />
          </Modal>
        )}
      </Container>
    </StyledHeader>
  );
}

//оригінальний компонент, якщо щось нахімічу з заглушками)))
// export default function Header() {
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     // const [userEmail, setUserEmail] = useState(false);
//     // const [isLoggedIn, setIsLogged] = useState(false);

//     const toggleModalVisibility = () => {
//         setIsModalVisible(!isModalVisible);
//     };

//     return (
//         <StyledHeader>
//             <Container>
//                 <Logo />
//                 <UserInfoWrapper>
//                     <UserInitials>
//                         <Text variant="boldUppercase">DS</Text>
//                     </UserInitials>
//                     <UserEmail>mr.shpak@gmail.com</UserEmail>
//                     <Decorline />
//                     <ExitButton onClick={toggleModalVisibility} />
//                 </UserInfoWrapper>
//                 {isModalVisible && (
//                     <Modal toggleModalVisibility={toggleModalVisibility}>
//                         <ExitPopUp
//                             toggleModalVisibility={toggleModalVisibility}
//                         />
//                     </Modal>
//                 )}
//             </Container>
//         </StyledHeader>
//     );
// }
