const express = require("express");

require('dotenv').config();
const app = express();
const port = process.env.PORT;  //  // from env variables - server port

const getCryptoList = require("./api/get-crypto-list"); //  fetch top 100 cryptocurrencies
const getConversion = require("./api/get-conversion");  //  get conversion for exchange currency
const getCurrencyList = require("./api/get-currencies");  //  get list of currencies with their exchange rates

app.use(express.json());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
 

// endpoints 
app.use("/get_crypto_list", getCryptoList); // list crypto
app.use("/get_conversion", getConversion);  // exchange conversion api
app.use("/get_currency_list", getCurrencyList); // list currencies

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});


