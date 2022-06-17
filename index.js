const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/nexo/snapshot", (req, res) => {
  res.json({
    timestamp: "2022-06-14T07:00:00.000Z",
    liabilitiesUSD: 5279836727.077789,
    liabilitesBTC: 1234.1234,
    pctText: "100",
    pctDecorator: "+",
    ripcord: true,
  });
});

app.get("/physical/snapshot", (req, res) => {
  res.json({
    products: [
      {
        asset: "ETH",
        hedging: 66481.58159915004,
        liabilities: 65826.165912,
        order: 2,
        name: "Ethereum",
        exchangeRates: { USD: 1219.135, EUR: 1166.96 },
      },
      {
        asset: "BTC",
        hedging: 9507.07917686,
        liabilities: 9421.86808728,
        order: 1,
        name: "Bitcoin",
        exchangeRates: { USD: 22718.5625, EUR: 21746.440000000002 },
      },
      {
        asset: "ADA",
        hedging: 3181936.447482,
        liabilities: 3179107.26035,
        order: 7,
        name: "Cardano",
        exchangeRates: { USD: 0.49387625, EUR: 0.47262375000000006 },
      },
      {
        asset: "XRP",
        hedging: 10825188.317854999,
        liabilities: 10819456.650101999,
        order: 4,
        name: "XRP",
        exchangeRates: { USD: 0.31567249999999997, EUR: 0.30194624999999997 },
      },
      {
        asset: "LTC",
        hedging: 50817.68639796,
        liabilities: 50584.3197,
        order: 3,
        name: "Litecoin",
        exchangeRates: { USD: 44.02824999999999, EUR: 42.12083333333334 },
      },
      {
        asset: "SOL",
        hedging: 1084336.035546395,
        liabilities: 1081401.7937476,
        order: 8,
        name: "Solana",
        exchangeRates: { USD: 29.46, EUR: 28.1975 },
      },
      {
        asset: "XTZ",
        hedging: 2147361.457697,
        liabilities: 2138740.875,
        order: 6,
        name: "Tezos",
        exchangeRates: { USD: 1.440675, EUR: 1.38265 },
      },
      {
        asset: "DOT",
        hedging: 322003.7801678914,
        liabilities: 318317.871875,
        order: 5,
        name: "POLKADOT",
        exchangeRates: { USD: 7.283737499999999, EUR: 6.9727250000000005 },
      },
      {
        asset: "FTT",
        hedging: 1002988.261632,
        liabilities: 1000759.781446,
        order: 9,
        name: "FTX Token",
        exchangeRates: { USD: 24.379646249999997, EUR: 23.72298 },
      },
    ],
    totalLiabilities: 362389406.26866233,
    totalHedge: 365306874.85628736,
    totalHedgeEUR: 349947164.5129369,
    timestamp: "2022-06-14T09:18:30.183Z",
    ripcord: true,
  });
});

app.listen(1313);
