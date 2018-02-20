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
    forward: {
      departure: "00:05",
      arrival: "03:05",
      duration: "5 ч",
      transfers: 0
    },
    reverse: {
      departure: "10:35",
      arrival: "17:10",
      duration: "4 ч 35 м",
      transfers: 0
    }
  },
  {
    price: 9269,
    airline: fly,
    forward: {
      departure: "07:30",
      arrival: "09:50",
      duration: "4 ч 20 м",
      transfers: 0
    },
    reverse: {
      departure: "11:20",
      arrival: "17:35",
      duration: "4 ч 15 м",
      transfers: "CDG"
    }
  },
  {
    price: 8029,
    airline: nordw,
    forward: {
      departure: "00:15",
      arrival: "03:10",
      duration: "4 ч 55 м",
      transfers: 0
    },
    reverse: {
      departure: "10:45",
      arrival: "17:15",
      duration: "4 ч 30 м",
      transfers: 0
    }
  },
  {
    price: 8164,
    airline: nordw2,
    forward: {
      departure: "00:15",
      arrival: "03:10",
      duration: "4 ч 55 м",
      transfers: 0
    },
    reverse: {
      departure: "10:45",
      arrival: "17:15",
      duration: "4 ч 30 м",
      transfers: 0
    }
  },
  {
    price: 8240,
    airline: redw,
    forward: {
      departure: "00:15",
      arrival: "03:10",
      duration: "4 ч 55 м",
      transfers: 0
    },
    reverse: {
      departure: "10:45",
      arrival: "17:15",
      duration: "4 ч 30 м",
      transfers: 0
    }
  },
  {
    price: 9108,
    airline: [redw_sm, russia_sm],
    forward: {
      departure: "00:15",
      arrival: "03:10",
      duration: "4 ч 55 м",
      transfers: 0
    },
    reverse: {
      departure: "10:45",
      arrival: "17:15",
      duration: "4 ч 30 м",
      transfers: 0
    }
  },
  {
    price: 9485,
    airline: [russia_sm, some_sm],
    forward: {
      departure: "00:15",
      arrival: "03:10",
      duration: "4 ч 55 м",
      transfers: 0
    },
    reverse: {
      departure: "10:45",
      arrival: "17:15",
      duration: "4 ч 30 м",
      transfers: 0
    }
  }
];
