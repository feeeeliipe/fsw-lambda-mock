const payload = require('./payload.json');
const lambda = require('../index');

lambda.handler(payload).then(res => {
    console.log(res);
});