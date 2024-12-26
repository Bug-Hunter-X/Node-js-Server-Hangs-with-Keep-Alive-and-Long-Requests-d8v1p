# Node.js Server Hang with Keep-Alive and Long Requests

This repository demonstrates a common issue in Node.js servers where long-running requests with keep-alive connections can cause the server to hang.  The server becomes unresponsive and unable to handle new requests. The `server.js` file contains the buggy code. `server-solution.js` demonstrates a solution using techniques for handling long requests efficiently.

## Bug Reproduction

1. Clone this repository.
2. Run `node server.js`.
3. Open multiple requests in a browser or use a tool like `ab` (Apache Benchmark) to send multiple concurrent requests to `http://localhost:3000/`.
4. Observe that after some time, the server stops responding to new requests.

## Solution

The solution involves using techniques to manage long-running requests and prevent them from blocking the entire event loop. This includes using techniques like asynchronous operations, worker threads, or a different architecture like a more robust framework which better handles concurrency.