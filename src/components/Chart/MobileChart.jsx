import PropTypes from 'prop-types';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { theme } from 'theme';
import { MobileChartContainer } from './MobileChart.styled';
ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
  Tooltip
);

export default function MobileChart({ stats }) {
  const data = {
    labels: stats?.labels || [],
    // labels: [
    //     'Pork',
    //     'Beef',
    //     'Chicken',
    //     'Fish',
    //     'Coffee',
    //     'Olives',
    //     'Fruits',
    //     'Pork',
    //     'Beef',
    //     'Chicken',
    //     'Fish',
    //     'Coffee',
    //     'Olives',
    //     'Fruits',
    // ],
    datasets: [
      {
        data: stats?.data || [],
        // data: [
        //     5000, 2500, 800, 500, 1000, 1250, 580, 5000, 2500, 800, 500,
        //     1000, 1250, 580,
        // ],

        backgroundColor: [
          theme.colors.orange.base,
          theme.colors.orange.light,
          theme.colors.orange.light,
        ],
        borderRadius: {
          topLeft: 0,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 10,
        },

        // barThickness: 'flex',
        // maxBarThickness: 15,
        barThickness: 15,
      },
    ],
  };
  const options = {
    // categoryPercentage: 0.5,
    // barPercentage: 1,
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: 'y',

    layout: {
      padding: {
        top: 20,
        right: 70,
        left: 0,
      },
    },
    scales: {
      x: {
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        // beginAtZero: true,
        // grace: '10%',
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          mirror: true,
          color: theme.colors.grey.dark,
          fontSize: 10,
          lineHeight: 1.2,
          labelOffset: -17,
          padding: 0,
        },
      },
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        offset: 10,
        formatter: function (value) {
          if (value) {
            const formattedValue = value.toLocaleString();
            return formattedValue + ' UAH';
          }
        },
        color: theme.colors.grey.dark,
        font: {
          size: 10,
          lineHeight: 1.2,
        },
      },
    },
  };

  return (
    <MobileChartContainer initHeight={data.labels.length}>
      <Bar data={data} options={options} />
    </MobileChartContainer>
  );
}
MobileChart.propTypes = {
  stats: PropTypes.object.isRequired,
};
