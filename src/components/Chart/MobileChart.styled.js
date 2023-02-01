import styled from 'styled-components';

export const MobileChartContainer = styled.div`
  position: relative;
  margin: auto;
  max-width: 480px;
  height: 60px;
  height: ${({ f }) => {
    return (f - 2) * 60 + 120;
  }}px;
`;
