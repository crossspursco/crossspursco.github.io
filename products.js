// Cross Spurs Co. — product + Square checkout link data, shared by index.html and checkout.html.
// SHIP links: $25 + $6 shipping (Square collects the address). PICKUP links: $25, local pickup in McAllen, Edinburg or Mission, TX.
// Never edit a Square link's shipping fee in Square; recreate the link and paste the new URL here.
window.PRODUCTS = {
  deadline: "2026-11-30T23:59:00-06:00",   // Nov 30, 11:59 PM Central
  price: 25,
  shippingFee: 6,
  pickupPlace: "McAllen, Edinburg or Mission, TX",
  limitPerShirt: 60,                        // max preorders per shirt (all sizes combined)
  apiUrl: "https://crossspurs-checkout.aldovjr03.workers.dev",                               // checkout helper (Cloudflare Worker) address. Checkout needs this set.
  // To close a shirt: set soldOut: true on it below and publish. The card and checkout lock.
  items: {
    men: {
      name: "Men's Signature Tee", colorway: "Natural / Saddle Brown", soldOut: false,
      fit: "Unisex classic fit · true to size", swatch: ["#efe8dc","#7a4a2a"],
      front: "0% 0%", back: "100% 0%", btn: "brown",
      ship:   { "S": "https://square.link/u/vaxaiyAe", "M": "https://square.link/u/aJY9JbqV", "L": "https://square.link/u/htHX5OXG",
                "XL": "https://square.link/u/65twCM2o", "2XL": "https://square.link/u/FzVBFO0d", "3XL": "https://square.link/u/g56yegY4" },
      pickup: { "S": "https://square.link/u/UwadC8Z9", "M": "https://square.link/u/iaqLWRBb", "L": "https://square.link/u/JV1gcOyl",
                "XL": "https://square.link/u/fjoJEaGD", "2XL": "https://square.link/u/Gd1URfOf", "3XL": "https://square.link/u/3JoCpQxl" }
    },
    women: {
      name: "Women's Signature Tee", colorway: "Black / Turquoise", soldOut: false,
      fit: "Unisex classic fit · most women size down one", swatch: ["#1a1715","#2bb3bf"],
      front: "0% 100%", back: "100% 100%", btn: "",
      ship:   { "S": "https://square.link/u/LNZiJtDO", "M": "https://square.link/u/pgUsyyUF", "L": "https://square.link/u/nbiLrVeK",
                "XL": "https://square.link/u/GbxLlTXl", "2XL": "https://square.link/u/LEDaJ3Xw", "3XL": "https://square.link/u/KCeAxsM2" },
      pickup: { "S": "https://square.link/u/Y8BdpjbN", "M": "https://square.link/u/6nEny23K", "L": "https://square.link/u/NP5luHHG",
                "XL": "https://square.link/u/LpaCwEcp", "2XL": "https://square.link/u/xDi6eyfi", "3XL": "https://square.link/u/kLkEvxio" }
    }
  },
  sizes: ["S","M","L","XL","2XL","3XL"]
};
