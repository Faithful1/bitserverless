const AWS = require('aws-sdk');
const SNS = new AWS.SNS();

function snsPublisher() {
  console.log('Starting function');

  SNS.publish(
    {
      Message: 'blocks list have been updated',
      TopicArn: 'arn:aws:sns:ap-southeast-1:729181142258:bitlambda-dev-SNSTopic'
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
