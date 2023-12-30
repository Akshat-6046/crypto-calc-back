const express = require("express");
const app = express();
const getList = require("./getList");
const getCurrencyExchange = require("./getCurrencyExchange");

module.exports = app.get("/", async (req, res) => {
  const { id, amount, currency } = req?.query;

  const data = await getList(); // get list of cryptocurrencies through api
  const exchangeValue = await getCurrencyExchange(currency, "exchange"); // get exchange rate of currency from api
  
  const cryptoData = data.find((item) => Number(item?.id) === Number(id)); // getting cryptocurrency (by id)

  const valueUSD =
    Number(amount) * Number(cryptoData?.price) * Number(exchangeValue); // calculation of amount in currency provided

  res
    .status(200)
    .send({
      value: valueUSD,
      currency,
      amount,
      crypto: cryptoData?.name,
      symbol: cryptoData?.symbol,
    });
});
