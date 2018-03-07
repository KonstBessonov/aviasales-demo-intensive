import flagRu from './flag-ru.png';
import flagAm from './flag-am.png';
import flagMd from './flag-md.png';

export default [
  {
    id: 1,
    destination: { city: 'Симферополь (Крым)', country: 'КРЫМ', flag: flagRu },
    prices: [
      { origin: 'Москвы', price: 4813 },
      { origin: 'Санкт-Петербурга', price: 7857 },
      { origin: 'Новосибирска', price: 15127 },
      { origin: 'Екатеринбурга', price: 9275 },
      { origin: 'Челябинска', price: 9148 },
    ],
  },
  {
    id: 2,
    destination: { city: 'Ереван', country: 'АРМЕНИЯ', flag: flagAm },
    prices: [
      { origin: 'Москвы', price: 6758 },
      { origin: 'Санкт-Петербурга', price: 9932 },
      { origin: 'Сочи', price: 11951 },
      { origin: 'Краснодара', price: 11741 },
      { origin: 'Ростова-на-Дону', price: 11956 },
    ],
  },
  {
    id: 3,
    destination: { city: 'Кишинёв', country: 'МОЛДАВИЯ', flag: flagMd },
    prices: [
      { origin: 'Москвы', price: 3819 },
      { origin: 'Санкт-Петербурга', price: 10800 },
      { origin: 'Краснодара', price: 12098 },
      { origin: 'Сургута', price: 16277 },
      { origin: 'Нового Уренгоя', price: 15987 },
    ],
  },
];
