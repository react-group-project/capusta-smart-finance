import PropTypes from 'prop-types';
import AddIncome from 'components/Icons/AddIncome';
import Alcohol from 'components/Icons/Alcohol';
import Communal from 'components/Icons/Communal';
import Education from 'components/Icons/Education';
import Entertainment from 'components/Icons/Entertainment';
import Health from 'components/Icons/Health';
import Housing from 'components/Icons/Housing';
import Other from 'components/Icons/Other';
import Products from 'components/Icons/Products';
import Salary from 'components/Icons/Salary';
import Sports from 'components/Icons/Sports';
import Technique from 'components/Icons/Technique';
import Transport from 'components/Icons/Transport';
import { Text } from 'components/Common/Text/Text.styled';
import { Category, IconContainer, StyledText } from './ReportsItem.styled';
import { convertMoneyToString } from 'helpers';

const categories = {
  Transport: Transport,
  Health: Health,
  Alcohol: Alcohol,
  Entertainment: Entertainment,
  Products: Products,
  Housing: Housing,
  Technique: Technique,
  'Communal, communication': Communal,
  'Sports, hobbies': Sports,
  Education: Education,
  Other: Other,
  Salary: Salary,
  'Add. income': AddIncome,
};

export default function ReportsItem({ category, activeIcon }) {
  const Component = categories[category[0]];
  return (
    <>
      <Category>
        <Text variant="uppercase" color="grey.dark">
          {convertMoneyToString(category[1].total)}
        </Text>
        <IconContainer>
          {<Component isActive={activeIcon === category[0]} />}
        </IconContainer>
        <StyledText variant="uppercase">{category[0]}</StyledText>
      </Category>
    </>
  );
}
ReportsItem.propTypes = {
  category: PropTypes.array.isRequired,
  activeIcon: PropTypes.string.isRequired,
};
