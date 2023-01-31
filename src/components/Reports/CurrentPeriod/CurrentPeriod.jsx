import { BackArrow, NextArrow } from '../Arrows/Arrows';
import { Button, PaleText, FlexContainer } from './CurrentPeriod.styled';
import { format, subMonths, addMonths } from 'date-fns';
import { Text } from 'components/Common/Text/Text.styled';
import { Box } from 'components/Box/Box.styled';

export default function CurrentPeriod({ date, setDate }) {
  const onClickBackHandler = () => {
    const newDate = subMonths(date, 1);
    setDate(newDate);
  };
  const onClickNextHandler = () => {
    const newDate = addMonths(date, 1);
    setDate(newDate);
  };
  return (
    <Box mb={{ _: '32px', tablet: '0' }}>
      <PaleText>Current period:</PaleText>
      <FlexContainer>
        <Button onClick={onClickBackHandler}>
          <BackArrow />
        </Button>
        <Text variant="boldUppercase" mr="4px" ml="4px" mb="2px">
          {format(date, 'MMMM yyyy')}
        </Text>
        <Button onClick={onClickNextHandler}>
          <NextArrow />
        </Button>
      </FlexContainer>
    </Box>
  );
}
