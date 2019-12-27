('use strict');

const axios = require('axios');

module.exports.blockList = async event => {
  try {
    const response = await axios.get(
      `https://blockchain.info/blocks/?format=json`
    );
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: data,
          input: event
        },
        null,
        2
      )
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: error.response.data
        },
        null,
        2
      )
    };
  }
};
