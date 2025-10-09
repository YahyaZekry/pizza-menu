import { Pizza } from './types';

export const pizzaData: Pizza[] = [
  {
    id: 'focaccia',
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: '/pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    id: 'margherita',
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: '/pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    id: 'spinaci',
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: '/pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    id: 'funghi',
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: '/pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    id: 'salamino',
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: '/pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    id: 'prosciutto',
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: '/pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

export const businessHours = {
  openHour: 11,
  closeHour: 2,
} as const;
