import russia from "./images/russia.png";
import nordw from "./images/nordw.png";
import nordw2 from "./images/nordw2.png";
import redw from "./images/redw.png";
import fly from "./images/fly.png";

import russia_sm from "./images/russia_sm.png";
import redw_sm from "./images/redw_sm.png";
import some_sm from "./images/some_sm.png";

export const results = [
  {
    price: 7712,
    airline: russia,
    badges: { isCharter: true },
    partner: "Cliackavia",
    handbags: 5,
    baggage: "1PC15",
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
    price: 9269,
    ticketsRemain: 4,
    airline: fly,
    badges: { isCharter: true },
    partner: "Biletix",
    handbags: undefined,
    baggage: "1PC20",
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
    ],
    others: [
      { partner: "Svyaznoy Travel", price: 9275 },
      { partner: "Билетик Аэро", price: 9587 },
      { partner: "Other 1", price: 10000 },
      { partner: "Other 2", price: 11000 },
      { partner: "Other 3", price: 12000 },
      { partner: "Other 4", price: 13000 }
    ]
  },
  {
    price: 8029,
    airline: nordw,
    badges: {},
    partner: "Билетик Аэро",
    handbags: 5,
    baggage: "",
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
    price: 8164,
    airline: nordw2,
    badges: { isCharter: true },
    partner: "Авиакасса",
    handbags: 5,
    baggage: "",
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
    price: 8240,
    airline: redw,
    badges: { isCharter: true },
    partner: "Билетик Аэро",
    handbags: 10,
    baggage: "",
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
    ],
    others: [
      { partner: "Svyaznoy Travel", price: 9275 },
      { partner: "Билетик Аэро", price: 9587 },
      { partner: "Other 1", price: 10000 },
      { partner: "Other 2", price: 11000 },
      { partner: "Other 3", price: 12000 }
    ]
  },
  {
    price: 9108,
    airline: [redw_sm, russia_sm],
    badges: { isCharter: true },
    partner: "Clickavia",
    handbags: 10,
    baggage: "1PC15",
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
    price: 9485,
    airline: [russia_sm, some_sm],
    badges: { isCharter: true },
    partner: "Clickavia",
    handbags: undefined,
    baggage: "1PC15",
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
