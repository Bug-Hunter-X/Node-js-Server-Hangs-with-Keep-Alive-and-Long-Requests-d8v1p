const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });

  const worker = new Worker('./long-task.js');

  worker.on('message', (result) => {
    res.end(result);
  });

  worker.on('error', (err) => {
    res.end(`Error: ${err.message}`);
  });

  worker.on('exit', (code) => {
    if (code !== 0)
      console.error(`Worker stopped with exit code ${code}`);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// long-task.js
const { parentPort } = require('worker_threads');

let result = '';
for (let i = 0; i < 1000000000; i++) {
    result += 'a';
}
parentPort.postMessage(result);