import earth from "./earth.svg";
import palm from "./palm.svg";
import cart from "./cart.svg";
import temple from "./temple.svg";
import glass from "./glass.svg";
import baby from "./baby.svg";

import krasnodar from "./city_krasnodar.png";
import adler from "./city_adler.png";
import spb from "./city_spb.png";
import minvody from "./city_minvody.png";
import simferopol from "./city_simferopol.png";
import barcelona from "./city_barcelona.png";

import flag_ru from "./flag_ru.png";
import flag_es from "./flag_es.png";

export const category = {
  anywhere: { text: "КУДА УГОДНО", img: earth },
  sea: { text: "СОЛНЦЕ И МОРЕ", img: palm },
  shop: { text: "ШОППИНГ, ГОРОД", img: cart },
  culture: { text: "КУЛЬТУРА И ИСТОРИЯ", img: temple },
  nightlife: { text: "НОЧНАЯ ЖИЗНЬ", img: glass },
  child: { text: "ОТДЫХ С ДЕТЬМИ", img: baby }
};

export const destination = [
  {
    img: krasnodar,
    city: "Краснодар",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1212,
    date: "18 марта"
  },
  {
    img: adler,
    city: "Сочи (Адлер)",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1334,
    date: "27 марта"
  },
  {
    img: spb,
    city: "Санкт-Петербург",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1508,
    date: "19 февраля"
  },
  {
    img: minvody,
    city: "Минеральные воды",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 2074,
    date: "13 марта"
  },
  {
    img: simferopol,
    city: "Симферополь (Крым)",
    country: "КРЫМ",
    flag: flag_ru,
    price: 2407,
    date: "13 марта"
  },
  {
    img: barcelona,
    city: "Барселона",
    country: "ИСПАНИЯ",
    flag: flag_es,
    price: 4247,
    date: "24 марта"
  }
];
