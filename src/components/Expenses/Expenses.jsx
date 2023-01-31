import Table from 'components/Table';
import { Box } from 'components/Box/Box.styled';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';
import { MobTable } from 'components/MobTable/MobTable';

export default function Expenses() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  return (
    <Box
      bg={{ tablet: 'white' }}
      borderRadius={2}
      px={{ mobile: '0px', tablet: '40px', desktop: '32px' }}
      pb={{ mobile: '0px', tablet: '42px', desktop: '61px' }}
      pt={{ mobile: '0px', tablet: '24px', desktop: '32px' }}
      boxShadow={{ tablet: 'base' }}
    >
      {isMobile ? <MobTable /> : <Table />}
    </Box>
  );
}
