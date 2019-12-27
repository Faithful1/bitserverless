('use strict');

const axios = require('axios');

module.exports.blockList = async event => {
  try {
    const response = await axios.get(
      `https://blockchain.info/blocks/?format=json`
    );
    const data = response.data;
    console.log(data);
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
    console.log(error.response.data);
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
