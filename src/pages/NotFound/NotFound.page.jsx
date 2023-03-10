import Error404 from '../../images/defaultImages/Error404.svg';
import { routes } from 'constants/routes';
import { Link } from 'react-router-dom';
import { Container } from 'components/Common/Container/Container.styled';
import {
  Button,
  Text,
} from 'components/Reports/MainPageButton/MainPageButton.styled';
import { NoDataText } from 'components/NoData/NoData.styled';
export default function NotFoundPage() {
  return (
    <>
      <Container>
        <Button as={Link} to={routes.HOME} style={{ borderBottom: 'none' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g clipPath="url(#clip0_11_747)">
              <path
                fill="#FF751D"
                d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_11_747">
                <path fill="#fff" d="M0 0H24V24H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <Text>Home page</Text>
        </Button>
        <img src={Error404} alt="Error"></img>
        <NoDataText>Page not found</NoDataText>
      </Container>
    </>
  );
}
