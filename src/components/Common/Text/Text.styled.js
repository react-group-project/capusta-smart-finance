import styled from 'styled-components';
import { variant } from 'styled-system';
export const Text = styled('p')(
  { textTransform: 'uppercase' },
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
