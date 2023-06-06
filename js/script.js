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
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];