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
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4">Total Payout</h2>
            <div className="h-96">
                <Line id="line-chart" data={chartData} options={chartOptions} />
            </div>
        </div>
    </div>
    );
};

export default LineChart;
