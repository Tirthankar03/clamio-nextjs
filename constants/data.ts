export const CreatorData = [
    { id: 1, name: 'David Jackoff', followers: '12k followers', products: '1k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
    { id: 2, name: 'Alex Doe', followers: '15k followers', products: '2k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
    { id: 3, name: 'Jane Smith', followers: '20k followers', products: '3k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipisc.' }
]


// chartData.ts Followers Page

export const pieData = {
    labels: ['United States', 'Canada', 'Mexico', 'Other'],
    datasets: [
        {
            label: 'Traffic by Location',
            data: [38.6, 22.5, 30.8, 8.1],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const barData = {
    labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'],
    datasets: [
        {
            label: 'Traffic by Device',
            data: [20, 25, 30, 22, 18, 15],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

// /constants/topFansData.js

export const topFans = [
    { id: 1, name: 'John Doe', country: 'USA', watchHours: 120 },
    { id: 2, name: 'Jane Smith', country: 'UK', watchHours: 110 },
    { id: 3, name: 'Alice Johnson', country: 'Canada', watchHours: 100 },
    { id: 4, name: 'Bob Brown', country: 'Australia', watchHours: 95 },
    { id: 5, name: 'Charlie Davis', country: 'Germany', watchHours: 90 },
    { id: 6, name: 'Eva Green', country: 'France', watchHours: 85 },
    { id: 7, name: 'Frank Harris', country: 'Japan', watchHours: 80 },
    { id: 8, name: 'Grace Lee', country: 'South Korea', watchHours: 75 },
];
