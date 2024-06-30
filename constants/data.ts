import { Description } from "@radix-ui/react-dialog";

export const CreatorData = [
  { id: 1, name: 'David Jackoff', followers: '12k followers', products: '1k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 2, name: 'Alex Doe', followers: '15k followers', products: '2k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 3, name: 'Jane Smith', followers: '20k followers', products: '3k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipisc.' }
]

export const ProductDetailsData = [
  {
    productDetails: {

      title: "Beverage Animation",
      creator: {
        name: "David Jackoff",
        link: "/creator/1"
      },
      rating: 4.7,
      reviewsCount: "1k",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 25,
      buttons: [
        {
          text: "Add To Cart",
          className: "bg-black text-white px-4 py-2 rounded"
        },
        {
          text: "Buy Now",
          className: "bg-yellow-500 text-black px-4 py-2 rounded"
        }
      ]
    },
    highlights: [
      "Easy to use",
      "Easy Returns",
      "Result in 10 days",
      "Google certified"
    ],
    reviews: [
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor."
      },
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor."
      },
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor."
      },
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor."
      }
    ],
    similarProducts: [
      {
        id: 1,
        title: "Mystic Tarot Reading",
        creator: {
          name: "Luna Lovegood",
          link: "/creator/2"
        },
        productLink: '/product/2',
        rating: 4.8,
        reviewsCount: "2k",
        price: 15
      },
      {
        id: 2,
        title: "Paris Travel Guide",
        creator: {
          name: "John Doe",
          link: "/creator/3"
        },
        productLink: '/product/3',
        rating: 4.5,
        reviewsCount: "1.5k",
        price: 20
      },
      {
        id: 3,
        title: "Italian Pasta Recipes",
        creator: {
          name: "Gordon Ramsay",
          link: "/creator/4"
        },
        productLink: '/product/4',
        rating: 4.9,
        reviewsCount: "2.5k",
        price: 30
      },
      {
        id: 4,
        title: "Keto Diet Plan",
        creator: {
          name: "Jane Smith",
          link: "/creator/5"
        },
        productLink: '/product/5',
        rating: 4.6,
        reviewsCount: "1.8k",
        price: 25
      }
    ]
  }
];

export const cardData = [
  { id: 1, title: 'Coffee Brew', author: 'David Jackoff', rating: 4.8, numReviews: 1200, price: 15, link: "/creator/1" },
  { id: 2, title: 'Tea Blend', author: 'Sarah Smith', rating: 4.6, numReviews: 850, price: 12, link: "/creator/2" },
  { id: 3, title: 'Smoothie Delight', author: 'John Doe', rating: 4.7, numReviews: 900, price: 10, link: "/creator/3" },
  { id: 4, title: 'Latte Art', author: 'Emily White', rating: 4.9, numReviews: 1500, price: 20, link: "/creator/4" },
  { id: 5, title: 'Espresso Shot', author: 'Chris Black', rating: 4.5, numReviews: 700, price: 8, link: "/creator/5" },
  { id: 6, title: 'Herbal Infusion', author: 'Anna Green', rating: 4.4, numReviews: 650, price: 14, link: "/creator/6" },
  { id: 7, title: 'Cappuccino', author: 'Michael Brown', rating: 4.6, numReviews: 1100, price: 18, link: "/creator/7" },
  { id: 8, title: 'Fruit Punch', author: 'Laura Blue', rating: 4.8, numReviews: 1300, price: 16, link: "/creator/8" },
  { id: 9, title: 'Mocha Mix', author: 'James Red', rating: 4.7, numReviews: 1000, price: 19, link: "/creator/9" },
  { id: 10, title: 'Iced Tea', author: 'Nancy Yellow', rating: 4.3, numReviews: 500, price: 7, link: "/creator/10" },
  { id: 11, title: 'Green Tea', author: 'Paul Purple', rating: 4.6, numReviews: 900, price: 13, link: "/creator/11" },
  { id: 12, title: 'Chai Latte', author: 'Susan Orange', rating: 4.9, numReviews: 1400, price: 17, link: "/creator/12" },
];

// src/constants/profileData.js
// src/constants/profileData.js
export const profileData = [
  { name: "David Jackoff", totalProducts: 230, followers: "1M" },
  { name: "Sarah Smith", totalProducts: 120, followers: "500K" },
  { name: "John Doe", totalProducts: 150, followers: "800K" },
  { name: "Emily White", totalProducts: 180, followers: "1.2M" },
  { name: "Chris Black", totalProducts: 90, followers: "400K" },
  { name: "Anna Green", totalProducts: 200, followers: "1.1M" },
  { name: "Michael Brown", totalProducts: 220, followers: "950K" },
  { name: "Laura Blue", totalProducts: 160, followers: "700K" },
  { name: "James Red", totalProducts: 110, followers: "600K" },
  { name: "Nancy Yellow", totalProducts: 80, followers: "300K" },
  { name: "Paul Purple", totalProducts: 100, followers: "450K" },
  { name: "Susan Orange", totalProducts: 140, followers: "550K" },
];



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

// Payout Page 
//Payout Chart Data
export const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Current Week',
      data: [500, 1000, 3256, 4000, 3000, 5000, 8000],
      borderColor: 'black',
      backgroundColor: 'black',
      fill: false,
      tension: 0.4,
      pointBackgroundColor: 'white',
    },
    {
      label: 'Previous Week',
      data: [1000, 3000, 5000, 2000, 1500, 6000, 7000],
      borderColor: 'rgba(75, 192, 192, 0.4)',
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'white',
    },
  ],
};


//payout chartoptions

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  interaction: {
    mode: 'nearest' as const,
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Value',
      },
      suggestedMin: 0,
      suggestedMax: 10000,
    },
  },
};

//creator login page

//creator login chart
export const chartDataCreator = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Current Week',
      data: [500, 1000, 3256, 4000, 3000, 5000, 8000],
      borderColor: 'black',
      backgroundColor: 'black',
      fill: false,
      tension: 0.4,
      pointBackgroundColor: 'white',
    },
    {
      label: 'Previous Week',
      data: [1000, 3000, 5000, 2000, 1500, 6000, 7000],
      borderColor: 'rgba(75, 192, 192, 0.4)',
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'white',
    },
  ],
};


//creator login chartoptions

export const chartOptionsCreator = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  interaction: {
    mode: 'nearest' as const,
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Value',
      },
      suggestedMin: 0,
      suggestedMax: 10000,
    },
  },
};

// Payouts data
export const payoutData = [
  {
    title: "Last 7 Days",
    date: "Apr 2-9 2021",
    payout: "Rs.25"
  },
  {
    title: "Last 30 Days",
    date: "Apr-March 2021",
    payout: "Rs.700"
  },
  {
    title: "Total Earnings",
    date: "Est. by Apr 15 2021",
    payout: "Rs.5337"
  }
]


// Product Lisitng

export const productListings = [
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  }

]