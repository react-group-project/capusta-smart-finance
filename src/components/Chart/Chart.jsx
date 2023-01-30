import { theme } from 'theme';
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  // Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { ChartContainer, Container } from './Chart.styled';
ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels,
  Tooltip
);

export default function Chart() {
  const data = {
    labels: [
      'Pork',
      'Beef',
      'Chicken',
      'Fish',
      'Coffee',
      'Olives',
      'Fruits',
      'Coffee',
      'Olives',
      'Fruits',
    ],
    datasets: [
      {
        data: [5000, 2500, 800, 500, 1000, 1250, 580, 1000, 1250, 580],

        backgroundColor: [
          theme.colors.orange.base,
          theme.colors.orange.light,
          theme.colors.orange.light,
        ],
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0,
        },

        barThickness: 'flex',
        maxBarThickness: 38,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,
    categoryPercentage: 0.5,
    barPercentage: 1,

    layout: {
      padding: {
        top: 40,
      },
    },

    scales: {
      x: {
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          padding: 0,
        },
      },
      y: {
        border: {
          display: false,
        },

        grid: {
          lineWidth: 2,
          color: theme.colors.lilac.base,
        },
        ticks: {
          display: false,

          stepSize: 600,
          // maxTicksLimit: 9,
        },
      },
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        formatter: function (value) {
          const formattedValue = value.toLocaleString();
          return formattedValue + ' UAH';
        },
      },
    },
  };

  return (
    <Container>
      <ChartContainer>
        <Bar data={data} options={options}></Bar>
      </ChartContainer>
    </Container>
  );
}
