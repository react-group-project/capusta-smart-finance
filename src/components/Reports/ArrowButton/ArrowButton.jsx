import PropTypes from 'prop-types';
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
        <Text variant="boldUppercase" mt="2px" width="120px" textAlign="center">
          {wages}
        </Text>

        <StyledButton onClick={onChange}>
          <NextArrow />
        </StyledButton>
      </Slider>
    </>
  );
}
ArrowButton.propTypes = {
  wages: PropTypes.string.isRequired,
  onChangeWages: PropTypes.func.isRequired,
};
