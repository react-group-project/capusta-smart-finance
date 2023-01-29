import MediaQuery from 'react-responsive';
import Chart from './Chart';
import MobileChart from './MobileChart';
export default function CommonChart() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <MobileChart />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <Chart />
      </MediaQuery>
    </>
  );
}
