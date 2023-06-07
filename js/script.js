// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import burger8 from '../assets/burger-8.png'
import burger9 from '../assets/burger-9.png'
import burger12 from '../assets/burger-12.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingBurgers = [
    'Mushroom Swiss Burger',
    'Make Burger',
    'Bacon Burger',
    'Breakfast Burger',
    'Guacamole Burger',
    'Classic Cheeseburger'
];

const trendingDrinks = [
    "Sprite",
    "Fanta",
    "Schweppes",
    "smoothie",
    "Malt",
    
]

const cards = [
    {
        imgSrc: burger12,
        alt: "burger-12",
        title: "",
        rating: "4.7",
        price: "#3,500"
    },
    {
        imgSrc: burger12,
        alt: "burger-12",
        title: "Originale burger",
        rating: "4.8",
        price: "#12,000",
        active: true
    },
    {
        imgSrc: burger12,
        alt: "burger-12",
        title: "bacon burger",
        rating: "4.9",
        price: "#5,000"
    }
];