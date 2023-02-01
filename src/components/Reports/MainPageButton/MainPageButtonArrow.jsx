import { Link, useLocation } from 'react-router-dom';
import { Button, ComponentContainer, Text } from './MainPageButton.styled';
import { routes } from 'constants/routes';

export default function MainPageButtonArrow(props) {
  const location = useLocation();
  const toMain = location.state?.from || routes.HOME;

  return (
    <ComponentContainer {...props}>
      <Button as={Link} to={toMain}>
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
        <Text>Main page</Text>
      </Button>
    </ComponentContainer>
  );
}
