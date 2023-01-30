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
import { useCallback, useEffect } from 'react';

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    ChartDataLabels,
    Tooltip
);

export default function Chart({ stats }) {
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
        //     'Coffee',
        //     'Olives',
        //     'Fruits',
        // ],
        datasets: [
            {
                data: stats?.data || [],
                // data: [5000, 2500, 800, 500, 1000, 1250, 580, 1000, 1250, 580],

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

                // barThickness: 'flex',
                barThickness: 38,
            },
        ],
    };

    const options = {
        responsive: true,

        maintainAspectRatio: false,
        // categoryPercentage: 0.5,
        // barPercentage: 1,

        layout: {
            padding: {
                top: 40,
            },
        },

        scales: {
            x: {
                beginAtZero: true,
                // offset: false,
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    padding: 0,
                    // ticks: context => {
                    //     console.log(context[0].label.length);
                    //     if (context[0].label.length > 6) {
                    //         return context[0].label.slice(0, 5) + '...';
                    //     }
                    // },
                },
            },
            y: {
                border: {
                    display: false,
                },
                grace: '40%',

                grid: {
                    lineWidth: 2,
                    color: ctx => {
                        if (stats?.data) {
                            if (ctx.tick.value >= Math.max(...stats?.data)) {
                                return 'transparent';
                            }
                            return theme.colors.lilac.base;
                        }
                    },
                },
                ticks: {
                    display: false,
                    sugMin: 100,
                    sugMax: 500,
                    // stepSize: 600,
                    // maxTicksLimit: 9,
                },
            },
        },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: theme.colors.grey.dark,
                formatter: function (value) {
                    if (value) {
                        const formattedValue = value.toLocaleString();
                        return formattedValue + ' UAH';
                    }
                },
            },
            // tooltip: {
            //     callbacks: {
            //         title: context => {
            //             console.log(context[0].label.length);
            //             if (context[0].label.length > 6) {
            //                 return context[0].label.slice(0, 5) + '...';
            //             }
            //         },
            //     },
            // },
        },
    };

    data.labels.unshift('');
    data.labels.push('');
    data.datasets[0].data.push(null);
    data.datasets[0].data.unshift(null);

    return (
        <Container>
            <ChartContainer>
                <Bar data={data} options={options}></Bar>
            </ChartContainer>
        </Container>
    );
}
