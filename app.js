'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:blue;">NodeJS Sample App Demo - version-1!!</h1> <p>This is a simple NodeJS web application for demo.</p>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);