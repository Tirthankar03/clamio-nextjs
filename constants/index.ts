import { User, CreditCard, Users, LifeBuoy, Settings, Keyboard, Plus, Coins } from 'lucide-react';
export const headerLinks = [
  {
    label: 'Community',
    route: '/community',
  },
  {
    label: 'Explore',
    route: '/',
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



export const APPLE_PNG = "\pngegg (13).png"
export const FACEBOOK_PNG = "\pngegg (11).png"
export const GOOGLE_PNG = "\pngegg (12).png"
export const INSTAGRAM_PNG = "\instagram.png"
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




export const products = [
  {
    name: "Tarot Card Reading",
    description: "Get insights into your future with our detailed Tarot Card Readings.",
    image: "/assets/svg/vec-five.png",
  },
  {
    name: "Travel Guide",
    description: "Discover the best travel destinations and tips with our comprehensive travel guides.",
    image: "/assets/svg/vec-five.png",
  },
  {
    name: "Food Recipes",
    description: "Explore a variety of delicious recipes that you can try at home.",
    image: "/assets/svg/vec-five.png",
  },
  {
    name: "Diet Plan",
    description: "Personalized diet plans to help you achieve your health goals.",
    image: "/assets/svg/vec-five.png",
  },
  {
    name: "Digital Art",
    description: "Explore and purchase unique digital artworks created by talented artists.",
    image: "/assets/svg/vec-five.png",
  },
  {
    name: "E-Sports Guide",
    description: "Become a pro gamer with our expert guides and tips on e-sports.",
    image: "/assets/svg/vec-five.png",
  }
];


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
