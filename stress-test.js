const autocannon = require('autocannon');
const fs = require('fs');

function runStressTest() {
  const stream = fs.createWriteStream('results.txt');
  const instance = autocannon({
    url: 'https://free-worlds-flow.loca.lt', 
    connections: 100, 
    duration: 60,
  }, console.log);

  autocannon.track(instance, { outputStream: stream });
}

runStressTest();