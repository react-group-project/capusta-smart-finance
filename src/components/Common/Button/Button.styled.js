import styled from 'styled-components';
import { theme } from 'theme';
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
const primary = {
  bg: 'lilac.base',
  color: 'grey.dark',
};
const secondary = {
  bg: 'orange.base',
  color: 'white',
};
export const Button = styled('button')(
  {
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    textTransform: 'uppercase',
    padding: '12px 14px',
  },

  variant({
    variants: {
      primary: {
        ...primary,
      },
      secondary: {
        ...secondary,
      },
      filterPrimary: {
        ...primary,
        filter: theme.filters.primaryButton,
      },
      filterSecondary: {
        ...secondary,
        filter: theme.filters.accentButton,
      },
      greyOutline: {
        boxShadow: 'greyOutline',
        color: 'grey.dark',
      },
      whiteOutline: {
        boxShadow: 'whiteOutline',
        color: 'grey.alpha',
      },
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
Button.defaultProps = {
  fontSize: 2,
  fontWeight: 'bold',
  borderRadius: 'sm',
};
