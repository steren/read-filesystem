const express = require('express');
const app = express();

const fs = require('fs');
const os = require("os");
const process = require('process');

app.get('*', (req, res) => {
  console.log(`Reading ${req.path}`);
  try {
    res.send(fs.readFileSync(req.path, 'utf8'));
  } catch(e) {
    res.send(`Cannot read ${req.path}: ${e}`);
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});