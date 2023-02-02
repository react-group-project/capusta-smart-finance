import NoData from '../../images/defaultImages/NoData.svg';
import { NoDataText } from './NoData.styled';
export default function NoFoundData() {
  return (
    <>
      <img src={NoData} alt="No data"></img>
      <NoDataText>No data for selected period</NoDataText>
    </>
  );
}
