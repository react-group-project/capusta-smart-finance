import PropTypes from 'prop-types';
import { format, subMonths, addMonths } from 'date-fns';
import { BackArrow, NextArrow } from '../Arrows/Arrows';
import { Button, PaleText, FlexContainer } from './CurrentPeriod.styled';
import { Text } from 'components/Common/Text/Text.styled';
import { Box } from 'components/Box/Box.styled';

export default function CurrentPeriod({ date, onChangeDate }) {
  const onClickBackHandler = () => {
    const newDate = subMonths(date, 1);
    onChangeDate(newDate);
  };
  const onClickNextHandler = () => {
    const newDate = addMonths(date, 1);
    onChangeDate(newDate);
  };

  return (
    <Box mb={{ _: '32px', tablet: '0' }}>
      <PaleText>Current period:</PaleText>
      <FlexContainer>
        <Button onClick={onClickBackHandler}>
          <BackArrow />
        </Button>
        <Text variant="boldUppercase" mb="2px" width="130px" textAlign="center">
          {format(date, 'MMMM yyyy')}
        </Text>
        <Button onClick={onClickNextHandler}>
          <NextArrow />
        </Button>
      </FlexContainer>
    </Box>
  );
}
CurrentPeriod.propTypes = {
  date: PropTypes.string.isRequired,
  onChangeDate: PropTypes.func.isRequired,
};
