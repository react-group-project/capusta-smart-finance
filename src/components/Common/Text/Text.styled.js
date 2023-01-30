import styled from 'styled-components';
import { variant } from 'styled-system';
export const Text = styled('p')(
  {
    textTransform: 'uppercase',
    margin: 0,
    padding: 0,
  },
  variant({
    variants: {
      boldUppercase: {
        fontWeight: 'bold',
        letterSpacing: 'small',
        color: 'black',
      },
      normalUppercase: {},
    },
  })
);
