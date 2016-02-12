
const tweetsec = require('./index');
const internals = {};

internals.lambdaHandler = (data, ctx) => {
  // console.log('processing data: %j', data);
  ctx.succeed(tweetsec.calculate(data.password));
};

module.exports = {
  handler: internals.lambdaHandler
};
