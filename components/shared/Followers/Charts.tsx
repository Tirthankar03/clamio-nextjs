'use client'
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { barData, pieData } from '@/constants/data';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

const Charts = () => {
    return (
        <section className="my-12 w-full md:w-5/6 mx-auto">
            <h2 className="text-2xl font-bold mb-4">Followers Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded">
                    <h3 className="text-xl font-semibold mb-4">Traffic by Device</h3>
                    <div className="h-64">
                        <Bar data={barData} />
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded">
                    <h3 className="text-xl font-semibold mb-4">Traffic by Location</h3>
                    <div className="h-64">
                        <Pie data={pieData} />
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li>United States - 38.6%</li>
                        <li>Canada - 22.5%</li>
                        <li>Mexico - 30.8%</li>
                        <li>Other - 8.1%</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Charts;
