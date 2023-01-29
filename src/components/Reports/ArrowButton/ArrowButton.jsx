import {
    PrevArrow,
    NextArrow,
    Slider,
    StyledButton,
} from './ArrowButton.styled';
import { useState } from 'react';
import { Text } from 'components/Common/Text/Text.styled';
export default function ArrowButton() {
    const [value, setValue] = useState('expenses');
    const prevHandler = () => {
        setValue('expenses');
    };
    const nextHandler = () => {
        setValue('income');
    };
    return (
        <>
            <Slider>
                <StyledButton onClick={prevHandler}>
                    <PrevArrow />
                </StyledButton>
                <Text variant="boldUppercase" mr="16px" ml="16px">
                    {' '}
                    {value}
                </Text>

                <StyledButton onClick={nextHandler}>
                    <NextArrow />
                </StyledButton>
            </Slider>
        </>
    );
}
