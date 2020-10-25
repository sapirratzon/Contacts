const express = require('express');
const app = express();

/**
 * Basic HTTP server that response
 */
app.get('/whos-there', function (request, response) {
  response.status(200).send('Hi Trax! This is SAPIR RATZON');
});

let port = process.env.PORT || 3000;
app.listen(port);

console.log("Server is running on: " + port);
