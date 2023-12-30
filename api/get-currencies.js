const express = require("express");
const app = express();
const getList = require("./getCurrencyExchange");

module.exports = app.get("/", async (req, res) => {
  const data = await getList(); // get currencies list

  res.status(200).send(data);
});
