export const CreatorData = [
  { id: 1, name: 'David Jackoff', followers: '12k followers', products: '1k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 2, name: 'Alex Doe', followers: '15k followers', products: '2k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 3, name: 'Jane Smith', followers: '20k followers', products: '3k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 4, name: 'John Doe', followers: '10k followers', products: '1k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 5, name: 'Emma Johnson', followers: '18k followers', products: '2k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 6, name: 'Michael Brown', followers: '25k followers', products: '4k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 7, name: 'Chris Green', followers: '14k followers', products: '1.5k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 8, name: 'Patricia White', followers: '19k followers', products: '3.5k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 9, name: 'Linda Black', followers: '22k followers', products: '2k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
  { id: 10, name: 'Kevin Blue', followers: '17k followers', products: '1.8k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
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
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  interaction: {
    mode: 'nearest',
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
    payout: "Rs.25"
  },
  {
    title: "Last 30 Days",
    payout: "Rs.700"
  },
  {
    title: "Total Earnings",
    payout: "Rs.5337"
  }
]


// communityData.js
export const communityCardsData = [
  {
    title: "Gaming Legends",
    members: "1k Members"
  },
  {
    title: "Travel Enthusiasts",
    members: "2k Members"
  },
  {
    title: "Healthy Recipes",
    members: "1.5k Members"
  },
  {
    title: "Digital Art Hub",
    members: "3k Members"
  },
];


// categoryData.js

export const categoryData = [
  { id: 1, name: "Tarot Card Reading" },
  { id: 2, name: "Travel Guide" },
  { id: 3, name: "Food Recipes" },
  { id: 4, name: "Diet Plan" },
  { id: 5, name: "Digital Art" },
  { id: 6, name: "E-Sports Guide" },
  { id: 7, name: "MORE" },
];



//Product Data
//Top Selling Product Data
export const TopSellingproductData = [
  { id: 1, productName: "Mystic Tarot Reading", name: "Luna Lovegood", stars: "4.8", price: "$15", imageUrl: "/assets/product-img/imgone.png" },
  { id: 2, productName: "Paris Travel Guide", name: "John Doe", stars: "4.5", price: "$20", imageUrl: "/assets/product-img/imgone.png" },
  { id: 3, productName: "Italian Pasta Recipes", name: "Gordon Ramsay", stars: "4.9", price: "$30", imageUrl: "/assets/product-img/imgone.png" },
  { id: 4, productName: "Keto Diet Plan", name: "Jane Smith", stars: "4.6", price: "$25", imageUrl: "/assets/product-img/imgone.png" },

];

export const HotNewproductData = [
  { id: 1, productName: "Advanced Tarot Techniques", name: "Mystic Meg", stars: "4.9", price: "$18", imageUrl: "/assets/product-img/imgone.png" },
  { id: 2, productName: "Tokyo Travel Guide", name: "Jane Doe", stars: "4.4", price: "$22", imageUrl: "/assets/product-img/imgone.png" },
  { id: 3, productName: "Vegan Dessert Recipes", name: "Jamie Oliver", stars: "4.8", price: "$28", imageUrl: "/assets/product-img/imgone.png" },
  { id: 4, productName: "Mediterranean Diet Plan", name: "Dr. Health", stars: "4.5", price: "$20", imageUrl: "/assets/product-img/imgone.png" },
];

export const TopDiscountProduct = [
  { id: 1, productName: "Vanilla Milkshake recipe", name: "Mystic Meg", stars: "4.9", price: "$18", imageUrl: "/assets/product-img/imgone.png" },
  { id: 2, productName: "Dummy Data", name: "Jane Doe", stars: "4.4", price: "$22", imageUrl: "/assets/product-img/imgone.png" },
  { id: 3, productName: "Chocolate Recipe", name: "Jamie Oliver", stars: "4.8", price: "$28", imageUrl: "/assets/product-img/imgone.png" },
  { id: 4, productName: "Greek Diet Plan", name: "Dr. Health", stars: "4.5", price: "$20", imageUrl: "/assets/product-img/imgone.png" },
];


// ------------&&-------------


export const products = [
  {
    name: "Tarot Card Reading",
    description: "Get insights into your future with our detailed Tarot Card Readings.",
    image: '/tarot.png',
  },
  {
    name: "Travel Guide",
    description: "Discover the best travel destinations and tips with our comprehensive travel guides.",
    image: '/travel-guide.png',
  },
  {
    name: "Food Recipes",
    description: "Explore a variety of delicious recipes that you can try at home.",
    image: '/book.png',
  },
  {
    name: "Diet Plan",
    description: "Personalized diet plans to help you achieve your health goals.",
    image: '/diet.png',
  },
  {
    name: "Digital Art",
    description: "Explore and purchase unique digital artworks created by talented artists.",
    image: '/digital-art.png',
  },
  {
    name: "E-Sports Guide",
    description: "Become a pro gamer with our expert guides and tips on e-sports.",
    image: '/e-sports.png',
  }
];

// faqData.js

export const faqData = [
  {
    id: 1,
    question: 'Can I add a wide range of products?',
    answer: 'Absolutely! Our platform allows you to easily add a wide range of products from your catalog.',
  },
  {
    id: 2,
    question: 'What kind of digital products can I sell?',
    answer: 'You can sell a wide range of digital products like ebooks, software, videos, music, and more.',
  },
  {
    id: 3,
    question: 'How do I get paid?',
    answer: 'You will receive payments directly to your linked bank account through our secure payment gateway.',
  },
  {
    id: 4,
    question: 'Is there a limit to the number of products I can list?',
    answer: 'No, there is no limit. You can list as many products as you like.',
  },
  {
    id: 5,
    question: 'Can I customize my store?',
    answer: 'Yes, our platform offers various customization options to help you create a unique store.',
  },
  {
    id: 6,
    question: 'What support is available if I encounter issues?',
    answer: 'We offer 24/7 customer support to assist you with any issues you may encounter.',
  },
];

export default faqData;

//product-cards all category

// export const productData = {
//   products: [
//     { id: 1, productName: "Mystic Tarot Reading", name: "Luna Lovegood", stars: "4.8", price: "$15", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 2, productName: "Paris Travel Guide", name: "John Doe", stars: "4.5", price: "$20", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 3, productName: "Italian Pasta Recipes", name: "Gordon Ramsay", stars: "4.9", price: "$30", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 4, productName: "Keto Diet Plan", name: "Jane Smith", stars: "4.6", price: "$25", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 5, productName: "Advanced Tarot Techniques", name: "Mystic Meg", stars: "4.9", price: "$18", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 6, productName: "Tokyo Travel Guide", name: "Jane Doe", stars: "4.4", price: "$22", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 7, productName: "Vegan Dessert Recipes", name: "Jamie Oliver", stars: "4.8", price: "$28", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 8, productName: "Mediterranean Diet Plan", name: "Dr. Health", stars: "4.5", price: "$20", imageUrl: "/assets/product-img/imgone.png" },
//   ],
//   searchQuery: '',
// };
