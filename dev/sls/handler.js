'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World: We are serverless now!',
        input: event
      },
      null,
      2
    )
  };
};
