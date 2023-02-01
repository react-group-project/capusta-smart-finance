import styled from 'styled-components';

export const MobileChartContainer = styled.div`
  position: relative;
  margin-left: -8px;
  max-width: 480px;
  /* height: 60px; */
  height: ${({ initHeight }) => {
    return (initHeight - 2) * 60 + 120;
  }}px;
`;
