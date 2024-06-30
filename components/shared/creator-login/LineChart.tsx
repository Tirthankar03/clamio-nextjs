"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartDataCreator } from '@/constants/data';
import { chartOptionsCreator } from '@/constants/data';
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
        <div className='w-5/6'>
            <h2 className='text-bold text-4xl p-4 pl-0 mt-4'>Total Payout</h2>
            <Line data={chartDataCreator} options={chartOptionsCreator} />
        </div>
    );
};

export default LineChart;
