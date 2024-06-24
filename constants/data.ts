export const CreatorData = [
    { id: 1, name: 'David Jackoff', followers: '12k followers', products: '1k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
    { id: 2, name: 'Alex Doe', followers: '15k followers', products: '2k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.' },
    { id: 3, name: 'Jane Smith', followers: '20k followers', products: '3k Products', description: 'Lorem ipsum dolor sit amet, consectetur adipisc.'}
]

export const ProdudctDetailData = [
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
          title: "Beverage Animation",
          creator: {
            name: "David Jackoff",
            link: "/creator/1"
          },
          rating: 4.7,
          reviewsCount: "1k",
          price: 25
        },
        {
          title: "Beverage Animation",
          creator: {
            name: "David Jackoff",
            link: "/creator/1"
          },
          rating: 4.7,
          reviewsCount: "1k",
          price: 25
        },
        {
          title: "Beverage Animation",
          creator: {
            name: "David Jackoff",
            link: "/creator/1"
          },
          rating: 4.7,
          reviewsCount: "1k",
          price: 25
        },
        {
          title: "Beverage Animation",
          creator: {
            name: "David Jackoff",
            link: "/creator/1"
          },
          rating: 4.7,
          reviewsCount: "1k",
          price: 25
        }
      ]
    }
  ];

  export const cardData = Array.from({ length: 12 }).map((_, idx) => ({
    id: idx,
    title: 'Beverage Animation',
    author: 'David Jackoff',
    rating: 4.7,
    numReviews: 1000,
    price: 25,
    link: "/creator/1"
  }));