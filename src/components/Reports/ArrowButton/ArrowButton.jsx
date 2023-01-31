import { Slider, StyledButton } from './ArrowButton.styled';
import { BackArrow, NextArrow } from '../Arrows/Arrows';
import { useState } from 'react';
import { Text } from 'components/Common/Text/Text.styled';
export default function ArrowButton({ getWages }) {
  const [value, setValue] = useState('expenses');
  getWages(value);
  const onChange = () => {
    if (value === 'expenses') {
      setValue('incomes');
    } else {
      setValue('expenses');
    }
  };

  return (
    <>
      <Slider>
        <StyledButton onClick={onChange}>
          <BackArrow />
        </StyledButton>
        <Text variant="boldUppercase" mr="16px" ml="16px">
          {value}
        </Text>

        <StyledButton onClick={onChange}>
          <NextArrow />
        </StyledButton>
      </Slider>
    </>
  );
}
