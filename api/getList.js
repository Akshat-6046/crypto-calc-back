const axios = require("axios");

const GetList = async () => {
  let response;
  try {
    response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CRYPTO_API_KEY,   // from env variables - crypto api key
        },
      }
    );
    if (response) {
      // success
      const json = response?.data?.data;
      const list = json.map((item) => {
        return {
          id: item.id,
          name: item.name,
          symbol: item.symbol,
          currency: Object.keys(item.quote)[0],
          price: item.quote?.["USD"]?.price,
          last_updated: item.quote?.["USD"]?.last_updated,
        };
      });
      return list;
    }
  } catch (ex) {
    response = null;
    // error
    console.log(ex);
    return null;
  }
};

module.exports = GetList;
