import { Slider, StyledButton } from './ArrowButton.styled';
import { BackArrow, NextArrow } from '../Arrows/Arrows';
import { Text } from 'components/Common/Text/Text.styled';

export default function ArrowButton({ wages, onChangeWages }) {
  const onChange = () => {
    onChangeWages(wages === 'expenses' ? 'incomes' : 'expenses');
  };

  return (
    <>
      <Slider>
        <StyledButton onClick={onChange}>
          <BackArrow />
        </StyledButton>
        <Text variant="boldUppercase" mr="16px" ml="16px" mt="2px">
          {wages}
        </Text>

        <StyledButton onClick={onChange}>
          <NextArrow />
        </StyledButton>
      </Slider>
    </>
  );
}
