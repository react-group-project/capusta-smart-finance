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
