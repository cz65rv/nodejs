'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:blue;">Deployed using Jenkins Pipeline - version-2!!</h1> <p>This is a simple NodeJS web application for demo.</p>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);