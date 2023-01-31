import styled from 'styled-components';

import {
  typography,
  space,
  color,
  background,
  border,
  shadow,
  variant,
  layout,
  flex,
} from 'styled-system';
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
        fontSize: 14,
        lineHeight: 16 / 14,
      },
      normalUppercase: {},
    },
  }),
  typography,
  space,
  color,
  background,
  border,
  shadow,
  layout,
  flex
);
