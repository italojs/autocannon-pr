const autocannon = require('autocannon');
const fs = require('fs');
require('./server.js');


function runStressTest() {

  const stream = fs.createWriteStream('results.txt');
  stream.write('```\n');
  stream.on('finish', () => {
    stream.write('\n```\n');
  });

  const instance = autocannon({
    url: 'http://localhost:8000', 
    connections: 100, 
    duration: 60,
  }, console.log);

  autocannon.track(instance, { outputStream: stream });
}

runStressTest();
