('use strict');

const snsPublisher = require('./snsPublisher');

const axios = require('axios');

// module for fetching block list from api
module.exports.blockList = async event => {
  try {
    const response = await axios.get(
      `https://blockchain.info/blocks/?format=json`
    );
    const blocksInfo = response.data;
    console.log('start publishing');

    snsPublisher.snsPublisher();

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: blocksInfo,
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
        null
      )
    };
  }
};

// lambda triggered after fetching bloglist and publishing to Topic
module.exports.snsLambdaTriggered = (event, context, callback) => {
  var topic = event.Records[0].Sns.TopicArn;
  var message = event.Records[0].Sns.Message;
  console.log(event);
  console.log(topic + '  ' + message);
  callback(null, {
    message:
      'SNS lamdba was triggered from the topic ' +
      topic +
      ' with message ' +
      message,
    event
  });
};
