"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartData } from '@/constants/data';
import { chartOptions } from '@/constants/data';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart: React.FC = () => {
    return (
        <div className='w-full xl:w-9/12'>
            <h2 className='text-bold text-4xl p-4 mt-4'>Total Payout</h2>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default LineChart;
