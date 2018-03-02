import russia from "./images/russia.png";
import nordw from "./images/nordw.png";
import nordw2 from "./images/nordw2.png";
import redw from "./images/redw.png";
import fly from "./images/fly.png";

import russia_sm from "./images/russia_sm.png";
import redw_sm from "./images/redw_sm.png";
import some_sm from "./images/some_sm.png";

export const partners = {
  1: "Clickavia",
  2: "Biletix",
  3: "Svyaznoy Travel",
  4: "Билетик Аэро",
  5: "Авиакасса"
};

export const airports = {
  VKO: { name: "Внуково", city: "MOW" },
  SVO: { name: "Шереметьево", city: "MOW" },
  BCN: { name: "Барселона", city: "BCN" },
  CDG: { name: "Шарль-де-Голль", city: "PAR" }
};

export const cities = {
  MOW: "Москва",
  BCN: "Барселона",
  PAR: "Париж"
};

export const results = [
  {
    prices: [{ partnerId: 1, price: 7712 }],
    airline: russia,
    badges: { isCharter: true },
    baggage: [{ handbag: 5, baggage: 15, selected: true }],
    segments: [
      {
        segmentAirports: ["VKO", "BCN"],
        departure_time: "00:05",
        departure_date: "2018-02-24",
        arrival_time: "03:05",
        arrival_date: "2018-02-24",
        duration: 300
      },
      {
        segmentAirports: ["BCN", "SVO"],
        departure_time: "10:35",
        arrival_time: "17:10",
        departure_date: "2018-03-03",
        arrival_date: "2018-03-03",
        duration: 275
      }
    ]
  },
  {
    prices: [
      { partnerId: 2, price: 9269 },
      { partnerId: 3, price: 9275 },
      { partnerId: 4, price: 9587 },
      { partnerId: 101, price: 10000 },
      { partnerId: 102, price: 11000 },
      { partnerId: 103, price: 12000 },
      { partnerId: 104, price: 13000 }
    ],
    ticketsRemain: 4,
    airline: fly,
    badges: { isCharter: true },
    baggage: [{ handbag: 0, baggage: 20, selected: true }],
    segments: [
      {
        segmentAirports: ["VKO", "BCN"],
        departure_time: "07:30",
        departure_date: "2018-02-24",
        arrival_time: "09:50",
        arrival_date: "2018-02-24",
        duration: 260
      },
      {
        segmentAirports: ["BCN", "CDG", "SVO"],
        departure_time: "11:20",
        arrival_time: "17:35",
        departure_date: "2018-03-03",
        arrival_date: "2018-03-03",
        duration: 255
      }
    ]
  },
  {
    prices: [{ partnerId: 4, price: 8029 }],
    airline: nordw,
    badges: {},
    baggage: [{ handbag: 5, baggage: 0, selected: true }],
    segments: [
      {
        segmentAirports: ["VKO", "BCN"],
        departure_time: "00:15",
        departure_date: "2018-02-24",
        arrival_time: "03:10",
        arrival_date: "2018-02-24",
        duration: 295
      },
      {
        segmentAirports: ["BCN", "SVO"],
        departure_time: "10:45",
        arrival_time: "17:15",
        departure_date: "2018-03-03",
        arrival_date: "2018-03-03",
        duration: 270
      }
    ]
  },
  {
    prices: [{ partnerId: 5, price: 8164 }],
    airline: nordw2,
    badges: { isCharter: true },
    baggage: [
      { handbag: 5, baggage: 0, selected: false },
      { handbag: 5, baggage: 12, selected: true, extraCost: 136 }
    ],
    segments: [
      {
        segmentAirports: ["VKO", "BCN"],
        departure_time: "00:15",
        departure_date: "2018-02-24",
        arrival_time: "03:10",
        arrival_date: "2018-02-24",
        duration: 295
      },
      {
        segmentAirports: ["BCN", "SVO"],
        departure_time: "10:45",
        arrival_time: "17:15",
        departure_date: "2018-03-03",
        arrival_date: "2018-03-03",
        duration: 270
      }
    ]
  },
  {
    prices: [
      { partnerId: 4, price: 8240 },
      { partnerId: 3, price: 9275 },
      { partnerId: 4, price: 9587 },
      { partnerId: 101, price: 10000 },
      { partnerId: 102, price: 11000 },
      { partnerId: 103, price: 12000 }
    ],
    airline: redw,
    badges: { isCharter: true },
    baggage: [
      { handbag: 10, baggage: 0, selected: false },
      { handbag: 10, baggage: 20, selected: true, extraCost: 267 }
    ],
    segments: [
      {
        segmentAirports: ["VKO", "BCN"],
        departure_time: "00:15",
        departure_date: "2018-02-24",
        arrival_time: "03:10",
        arrival_date: "2018-02-24",
        duration: 295
      },
      {
        segmentAirports: ["BCN", "SVO"],
        departure_time: "10:45",
        arrival_time: "17:15",
        departure_date: "2018-03-03",
        arrival_date: "2018-03-03",
        duration: 270
      }
    ]
  },
  {
    prices: [{ partnerId: 1, price: 9108 }],
    airline: [redw_sm, russia_sm],
    badges: { isCharter: true },
    baggage: [{ handbag: 10, baggage: 15, selected: true }],
    segments: [
      {
        segmentAirports: ["VKO", "BCN"],
        departure_time: "00:15",
        departure_date: "2018-02-24",
        arrival_time: "03:10",
        arrival_date: "2018-02-24",
        duration: 295
      },
      {
        segmentAirports: ["BCN", "SVO"],
        departure_time: "10:45",
        arrival_time: "17:15",
        departure_date: "2018-03-03",
        arrival_date: "2018-03-03",
        duration: 270
      }
    ]
  },
  {
    prices: [{ partnerId: 1, price: 9485 }],
    airline: [russia_sm, some_sm],
    badges: { isCharter: true },
    baggage: [{ handbag: 0, baggage: 15, selected: true }],
    segments: [
      {
        segmentAirports: ["VKO", "BCN"],
        departure_time: "00:15",
        departure_date: "2018-02-24",
        arrival_time: "03:10",
        arrival_date: "2018-02-24",
        duration: 295
      },
      {
        segmentAirports: ["BCN", "SVO"],
        departure_time: "10:45",
        arrival_time: "17:15",
        departure_date: "2018-03-03",
        arrival_date: "2018-03-03",
        duration: 270
      }
    ]
  }
];
