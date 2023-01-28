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

export default function MobileChart() {
  const data = {
    labels: [
      'Pork',
      'Beef',
      'Chicken',
      'Fish',
      'Coffee',
      'Olives',
      'Fruits',
      'Pork',
      'Beef',
      'Chicken',
      'Fish',
      'Coffee',
      'Olives',
      'Fruits',
    ],
    datasets: [
      {
        data: [
          5000, 2500, 800, 500, 1000, 1250, 580, 5000, 2500, 800, 500, 1000,
          1250, 580,
        ],

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

        barThickness: 'flex',
        maxBarThickness: 15,
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
        top: 30,
        right: 70,
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
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          mirror: true,
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
          const formattedValue = value.toLocaleString();
          return formattedValue + ' UAH';
        },
        font: {
          size: 10,
          lineHeight: 1.2,
        },
      },
    },
  };
  return (
    <MobileChartContainer>
      <Bar data={data} options={options} />
    </MobileChartContainer>
  );
}
