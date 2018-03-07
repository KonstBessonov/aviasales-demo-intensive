import React from 'react';

import earth from './earth.svg';
import palm from './palm.svg';
import cart from './cart.svg';
import temple from './temple.svg';
import glass from './glass.svg';
import baby from './baby.svg';

import krasnodar from './city-krasnodar.jpg';
import adler from './city-adler.jpg';
import spb from './city-spb.jpg';
import minvody from './city-minvody.jpg';
import simferopol from './city-simferopol.jpg';
import barcelona from './city-barcelona.jpg';

import flagRu from './flag-ru.png';
import flagEs from './flag-es.png';

export const category = {
  anywhere: {
    text: (
      <span>
        КУДА<br />УГОДНО
      </span>
    ),
    img: earth,
  },
  sea: {
    text: (
      <span>
        СОЛНЦЕ<br />И МОРЕ
      </span>
    ),
    img: palm,
  },
  shop: {
    text: (
      <span>
        ШОППИНГ,<br />ГОРОД
      </span>
    ),
    img: cart,
  },
  culture: {
    text: (
      <span>
        КУЛЬТУРА<br />И ИСТОРИЯ
      </span>
    ),
    img: temple,
  },
  nightlife: {
    text: (
      <span>
        НОЧНАЯ<br />ЖИЗНЬ
      </span>
    ),
    img: glass,
  },
  child: {
    text: (
      <span>
        ОТДЫХ<br />С ДЕТЬМИ
      </span>
    ),
    img: baby,
  },
};

export const destination = [
  {
    img: krasnodar,
    city: 'Краснодар',
    country: 'РОССИЯ',
    flag: flagRu,
    price: 1212,
    date: '18 марта',
  },
  {
    img: adler,
    city: 'Сочи (Адлер)',
    country: 'РОССИЯ',
    flag: flagRu,
    price: 1334,
    date: '27 марта',
  },
  {
    img: spb,
    city: 'Санкт-Петербург',
    country: 'РОССИЯ',
    flag: flagRu,
    price: 1508,
    date: '19 февраля',
  },
  {
    img: minvody,
    city: 'Минеральные воды',
    country: 'РОССИЯ',
    flag: flagRu,
    price: 2074,
    date: '13 марта',
  },
  {
    img: simferopol,
    city: 'Симферополь (Крым)',
    country: 'КРЫМ',
    flag: flagRu,
    price: 2407,
    date: '13 марта',
  },
  {
    img: barcelona,
    city: 'Барселона',
    country: 'ИСПАНИЯ',
    flag: flagEs,
    price: 4247,
    date: '24 марта',
  },
];
