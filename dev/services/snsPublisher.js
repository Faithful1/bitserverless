const AWS = require('aws-sdk');
const SNS = new AWS.SNS();
const config = require('./config.js');

function snsPublisher() {
  console.log('Starting function');

  SNS.publish(
    {
      Message: 'blocks list have been updated',
      TopicArn: `arn:aws:sns:${config.awsRegion}:${config.awsAccountId}:${config.topicName}`
    },
    function(err, data) {
      if (err) {
        console.log(err.stack);
        return;
      }
      console.log('push sent');
      console.log(data);
    }
  );
}

module.exports = {
  snsPublisher: snsPublisher
};
