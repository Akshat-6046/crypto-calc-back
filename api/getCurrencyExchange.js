const axios = require("axios");

const GetList = async (currency, type = "list") => {
  let response;
  try {
    response = await axios.get("https://api.freecurrencyapi.com/v1/latest", {
      headers: {
        apikey: process.env.CURRENCY_API_KEY,   // from env variables - currency api key
      },
    });
    if (response) {
      // success
      if (type === "exchange") {
        const curr = response?.data?.data?.[currency];
        return curr;
      }
      return response?.data;
    }
  } catch (ex) {
    response = null;
    // error
    console.log(ex);
    return null;
  }
};

module.exports = GetList;
