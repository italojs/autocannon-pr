const autocannon = require('autocannon');
const fs = require('fs');

function runStressTest() {
  const stream = fs.createWriteStream('results.md');
  stream.write('```');
  stream.on('finish', () => {
    stream.write('```');
  });
  const instance = autocannon({
    url: 'http://localhost:8000', 
    connections: 100, 
    duration: 60,
  }, console.log);

  autocannon.track(instance, { outputStream: stream });
  // add ``` to the beginning and end of the file

}

runStressTest();