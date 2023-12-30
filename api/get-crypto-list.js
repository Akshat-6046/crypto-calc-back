const express = require("express");
const app = express();
const getList = require("./getList");

module.exports = app.get("/", async (req, res) => {
  const data = await getList(); // get cryptocurrency list 
  res.status(200).send(data);
});
