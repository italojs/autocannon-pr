const autocannon = require('autocannon');
const fs = require('fs');
const server = require('./server.js');


function runStressTest() {

  const stream = fs.createWriteStream('results.txt');
  stream.write('```\n');

  const instance = autocannon({
    url: 'http://localhost:8000', 
    connections: 100, 
    duration: 60,
  }, () => server.close());

  autocannon.track(instance, { outputStream: stream });
}

runStressTest();
