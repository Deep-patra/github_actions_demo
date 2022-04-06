const express = require('express');

const app = express();

app.use(express.json());

app.use('/hello', (req, res) => {
  res.status(200).json({ message: "hello" });
});

module.exports = app;