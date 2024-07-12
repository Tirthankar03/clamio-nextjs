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
// export const payoutData = [
//   {
//     title: "Last 7 Days",
//     payout: "Rs.25"
//   },
//   {
//     title: "Last 30 Days",
//     payout: "Rs.700"
//   },
//   {
//     title: "Total Earnings",
//     payout: "Rs.5337"
//   }
// ]


// communityData.js
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface CommunityCardData {
  id: number;
  title: string;
  members: string;
  products: {
    topSellingProducts: Product[];
    allProducts: Product[];
  };
}

// data.ts

export const communityCardsData = {
  1: {
    id: 1,
    title: "Gaming Legends",
    members: "1k Members",
    img_url: "/assets/product-img/imgone.png",
    products: {
      topSellingProducts: [
        { id: 101, title: "Gaming Headset", description: "High quality gaming headset", price: 99, image: "/images/headset.jpg", author: "TechBrand", ratings: 4.5, numReviews: 120 },
        { id: 102, title: "Gaming Chair", description: "Comfortable gaming chair", price: 199, image: "/images/chair.jpg", author: "ComfortSeats", ratings: 4.8, numReviews: 80 },
        { id: 103, title: "Gaming Keyboard", description: "RGB mechanical keyboard", price: 79, image: "/images/keyboard.jpg", author: "TypeMaster", ratings: 4.7, numReviews: 150 },
      ]
    },
    creators: {
      TopCreatorData: [
        { id: 1, name: 'GamerOne', followers: '12k followers', products: '1k Products', description: 'Pro gamer with years of experience.' },
        { id: 2, name: 'EliteGamer', followers: '15k followers', products: '2k Products', description: 'Top-tier gamer and content creator.' },
        { id: 3, name: 'GameMaster', followers: '20k followers', products: '3k Products', description: 'Master of various game genres.' },
        { id: 4, name: 'ProGamer', followers: '10k followers', products: '1k Products', description: 'Expert in competitive gaming.' }
      ]
    }
  },
  2: {
    id: 2,
    title: "Travel Enthusiasts",
    members: "2k Members",
    img_url: "/assets/product-img/imgone.png",
    products: {
      topSellingProducts: [
        { id: 201, title: "Travel Backpack", description: "Spacious travel backpack", price: 79, image: "/images/backpack.jpg", author: "TravelPro", ratings: 4.8, numReviews: 200 },
        { id: 202, title: "Travel Pillow", description: "Comfortable travel pillow", price: 19, image: "/images/pillow.jpg", author: "ComfortCo", ratings: 4.3, numReviews: 150 },
        { id: 203, title: "Travel Jacket", description: "Waterproof travel jacket", price: 129, image: "/images/jacket.jpg", author: "WeatherGuard", ratings: 4.7, numReviews: 90 },
      ],
    },
    creators: {
      TopCreatorData: [
        { id: 1, name: 'TravelGuru', followers: '12k followers', products: '1k Products', description: 'Expert in travel gear and destinations.' },
        { id: 2, name: 'Wanderlust', followers: '15k followers', products: '2k Products', description: 'Avid traveler and travel blogger.' },
        { id: 3, name: 'GlobeTrotter', followers: '20k followers', products: '3k Products', description: 'Exploring the world one place at a time.' },
        { id: 4, name: 'NomadSpirit', followers: '10k followers', products: '1k Products', description: 'Lover of off-the-beaten-path travel.' }
      ]
    }
  },
  3: {
    id: 3,
    title: "Healthy Recipes",
    members: "5k Members",
    img_url: "/assets/product-img/imgone.png",
    products: {
      topSellingProducts: [
        { id: 301, title: "Vegan Cookbook", description: "Delicious vegan recipes", price: 29, image: "/images/vegan_cookbook.jpg", author: "Chef Green", ratings: 4.8, numReviews: 300 },
        { id: 302, title: "Organic Spices Set", description: "A set of organic spices", price: 49, image: "/images/spices.jpg", author: "SpiceMaster", ratings: 4.7, numReviews: 250 },
        { id: 303, title: "Smoothie Blender", description: "High-performance blender", price: 89, image: "/images/blender.jpg", author: "BlendIt", ratings: 4.6, numReviews: 180 },
      ],
    },
    creators: {
      TopCreatorData: [
        { id: 1, name: 'ChefHealthy', followers: '12k followers', products: '1k Products', description: 'Specialist in healthy and nutritious recipes.' },
        { id: 2, name: 'FitChef', followers: '15k followers', products: '2k Products', description: 'Combining fitness and healthy eating.' },
        { id: 3, name: 'VeganQueen', followers: '20k followers', products: '3k Products', description: 'Expert in vegan and plant-based diets.' },
        { id: 4, name: 'OrganicGuru', followers: '10k followers', products: '1k Products', description: 'Advocate for organic and clean eating.' }
      ]
    }
  },
  4: {
    id: 4,
    title: "Digital Art Club",
    members: "3k Members",
    img_url: "/assets/product-img/imgone.png",
    products: {
      topSellingProducts: [
        { id: 401, title: "Drawing Tablet", description: "Professional drawing tablet", price: 199, image: "/images/tablet.jpg", author: "ArtTech", ratings: 4.9, numReviews: 400 },
        { id: 402, title: "Digital Brushes Pack", description: "High-quality digital brushes", price: 29, image: "/images/brushes.jpg", author: "BrushMaster", ratings: 4.8, numReviews: 350 },
        { id: 403, title: "Art Software License", description: "Full-featured art software", price: 299, image: "/images/software.jpg", author: "SoftArt", ratings: 4.7, numReviews: 320 },
      ]
    },
    creators: {
      TopCreatorData: [
        { id: 1, name: 'ArtVirtuoso', followers: '12k followers', products: '1k Products', description: 'Creating stunning digital art.' },
        { id: 2, name: 'PixelPainter', followers: '15k followers', products: '2k Products', description: 'Master of digital painting techniques.' },
        { id: 3, name: 'SketchArtist', followers: '20k followers', products: '3k Products', description: 'Expert in digital sketching and illustrations.' },
        { id: 4, name: 'CreativeGenius', followers: '10k followers', products: '1k Products', description: 'Innovative digital art creator.' }
      ]
    }
  },
  // Add more communities here
};


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


import { Description } from "@radix-ui/react-dialog";


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
// export const chartData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//   datasets: [
//     {
//       label: 'Current Week',
//       data: [500, 1000, 3256, 4000, 3000, 5000, 8000],
//       borderColor: 'black',
//       backgroundColor: 'black',
//       fill: false,
//       tension: 0.4,
//       pointBackgroundColor: 'white',
//     },
//     {
//       label: 'Previous Week',
//       data: [1000, 3000, 5000, 2000, 1500, 6000, 7000],
//       borderColor: 'rgba(75, 192, 192, 0.4)',
//       backgroundColor: 'rgba(75, 192, 192, 0.4)',
//       fill: true,
//       tension: 0.4,
//       pointBackgroundColor: 'white',
//     },
//   ],
// };


//payout chartoptions

// export const chartOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     tooltip: {
//       mode: 'index' as const,
//       intersect: false,
//     },
//   },
//   interaction: {
//     mode: 'nearest' as const,
//     intersect: false,
//   },
//   scales: {
//     x: {
//       display: true,
//       title: {
//         display: true,
//         text: 'Month',
//       },
//     },
//     y: {
//       display: true,
//       title: {
//         display: true,
//         text: 'Value',
//       },
//       suggestedMin: 0,
//       suggestedMax: 10000,
//     },
//   },
// };

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





import { User, CreditCard, Users, LifeBuoy, Settings, Keyboard, Plus, Coins } from 'lucide-react';
export const headerLinks = [
  {
    label: 'Community',
    route: '/community',
  },
  {
    label: 'Explore',
    route: '/explore',
  },
  {
    label: 'Creators',
    route: '/creator',
  },
  {
    label: 'Dashboard',
    route: '/dashboard',
  },

]

const headerLinksDashboard = [
  {
    label: 'Dashboard',
    route: '/dashboard',

  },
  {
    label: 'Product',
    route: '/',

  },
  {
    label: 'User',
    route: '/creator',

  },
  {
    label: 'Orders',
    route: '/orders',

  },
  {
    label: 'Settings',
    route: '/settings',

  },
];
export const headerLinkstwo = [
  {
    label: 'Refer and Earn',
    route: '/refer',
  }
]
export const headerLinksThree = [
  {
    label: 'Sell Your Product',
    route: '/explore',
  },
  {
    label: 'Wishlist',
    route: '/wishlist',
  },
  {
    label: 'Cart',
    route: '/cart',
  },
]
export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}



export const INSTAGRAM_PNG = "/instagram.png"
export const FACEBOOK_PNG = "/pngegg (14).png"
export const GOOGLE_PNG = "/pngegg (15).png"
export const CUATE_PNG = "\cuate.png"
export const STAR_PNG = "\Frame 203.png"
export const GOLD_SACK = "/gold_sack.png"
export const signInImage = "/Frame 120.png"
export const REWARD_PNG = "/Frame 121.png"
export const EARN_POINT_PNG = "/Frame 122.png"
export const BRO_PNG = "/Frame 132.png"
export const BOY_PNG = "/Frame 205.png"
export const STAR1_PNG = "/star (2).png"
export const STAR2_PNG = "/police-badge (1).png"
export const STAR3_PNG = "/star-medal (2).png"
export const AMICO_PNG = "\amico.png"
export const BLOCK_PNG = "\Chart.png"
export const BLOCK_PNG2 = "\Frame (1).png"
export const BG_IMAGE = "https://images.unsplash.com/photo-1539597833161-fd52d6ee5d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU2fHx5ZWxsb3clMjBiYWNrZ3JvdW5kJTIwaW1hZ2V8ZW58MHwwfDB8fHww"




export const faqs = [
  {
    question: 'Can I add a wide range of products?',
    answer: 'Absolutely! Our platform allows you to easily add a wide range of products from your catalog.',
  },
  {
    question: 'What kind of digital products can I sell?',
    answer: 'You can sell a wide range of digital products like ebooks, software, videos, music, and more.',
  },
  {
    question: 'How do I get paid?',
    answer: 'You will receive payments directly to your linked bank account through our secure payment gateway.',
  },
  {
    question: 'Is there a limit to the number of products I can list?',
    answer: 'No, there is no limit. You can list as many products as you like.',
  },
  {
    question: 'Can I customize my store?',
    answer: 'Yes, our platform offers various customization options to help you create a unique store.',
  },
  {
    question: 'What support is available if I encounter issues?',
    answer: 'We offer 24/7 customer support to assist you with any issues you may encounter.',
  },
];

// pricingConstants.js
export const pricingData = [
  {
    title: 'You',
    description: 'You will be charged 12.5%',
    example: {
      productPrice: 'Rs.100',
      customerPay: 'Rs.100',
      earning: 'Rs.87.5',
    },
  },
  {
    title: 'Your Customers',
    description: 'Customers will be charged 12.5%',
    example: {
      productPrice: 'Rs.100',
      customerPay: 'Rs.112.5',
      earning: 'Rs.100',
    },
  },
];


// constants.js

// export const PRODUCTS = [
//   {
//     id: 1,
//     title: "Beverage Animation",
//     author: "David Jackoff",
//     rating: 4.7,
//     numRatings: 1000,
//     price: 25,
//   },
//   {
//     id: 2,
//     title: "Another Product",
//     author: "John Doe",
//     rating: 4.5,
//     numRatings: 800,
//     price: 30,
//   },
//   {
//     id: 3,
//     title: "Third Product",
//     author: "Jane Smith",
//     rating: 4.9,
//     numRatings: 1200,
//     price: 20,
//   },
//   {
//     id: 4,
//     title: "Third Product",
//     author: "Jane Smith",
//     rating: 4.9,
//     numRatings: 1200,
//     price: 20,
//   },
//   {
//     id: 5,
//     title: "Third Product",
//     author: "Jane Smith",
//     rating: 4.9,
//     numRatings: 1200,
//     price: 20,
//   },
//   {
//     id: 6,
//     title: "Third Product",
//     author: "Jane Smith",
//     rating: 4.9,
//     numRatings: 1200,
//     price: 20,
//   },
//   // Add more products as needed
// ];


// data/products.ts
export const productsInfo = [
  {
    id: 1,
    title: "Beverage Animation",
    author: {
      name: "David Jackoff",
      id: 1
    },
    rating: 4.7,
    reviews: "1k",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 25,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 2,
    title: "Nature Landscape",
    author: {
      name: "Emily Watson",
      id: 2
    },
    rating: 4.9,
    reviews: "500",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 30,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 3,
    title: "Urban Photography",
    author: {
      name: "John Doe",
      id: 3
    },
    rating: 4.8,
    reviews: "800",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    price: 40,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 4,
    title: "Abstract Art",
    author: {
      name: "Sarah Johnson",
      id: 4
    },
    rating: 4.6,
    reviews: "700",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 35,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 5,
    title: "Portrait Drawing",
    author: {
      name: "Michael Smith",
      id: 5
    },
    rating: 4.5,
    reviews: "1.2k",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: 20,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 6,
    title: "Wildlife Illustration",
    author: {
      name: "Jessica Brown",
      id: 6
    },
    rating: 4.7,
    reviews: "600",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    price: 45,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 7,
    title: "Fantasy World",
    author: {
      name: "Paul Wilson",
      id: 7
    },
    rating: 4.9,
    reviews: "900",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    price: 50,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 8,
    title: "Sci-Fi Concepts",
    author: {
      name: "Laura Martinez",
      id: 8
    },
    rating: 4.8,
    reviews: "1.1k",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 55,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 9,
    title: "Historical Figures",
    author: {
      name: "Tom Harris",
      id: 9
    },
    rating: 4.6,
    reviews: "300",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 60,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 10,
    title: "Cartoon Characters",
    author: {
      name: "Amy Lee",
      id: 10
    },
    rating: 4.7,
    reviews: "1.5k",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    price: 22,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 11,
    title: "3D Modeling",
    author: {
      name: "Chris Moore",
      id: 11
    },
    rating: 4.5,
    reviews: "750",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 28,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 12,
    title: "Vintage Posters",
    author: {
      name: "Nancy White",
      id: 12
    },
    rating: 4.6,
    reviews: "400",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: 32,
    image: "/assets/product-img/imgone.png"
  }
];


// creator-login 

export const Add = [{ image_url: "/assets/creator-login-img/Add.png" }]

export const accounts = [
  { id: 1, image_url: "/assets/your-account-img/order.png", title: "Your Order", description: "Track , return , or buy things" },
  { id: 2, image_url: "/assets/your-account-img/address.png", title: "Address", description: "Edit adresses for orders and gift" },
  { id: 3, image_url: "/assets/your-account-img/coin.png", title: "Clamio Coins", description: "See your Clamio Coins and purchase" },
  { id: 3, image_url: "/assets/your-account-img/Payment.png", title: "Payment Methods", description: "Edit or add Payment Methods" },
  { id: 3, image_url: "/assets/your-account-img/contact.png", title: "Contact Us", description: "" }
]