const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5555;

app.use(express.json());

mongoose.connect(`mongodb://localhost:27017`)
  .then(() => console.log('Connected to Database'))
  .catch(console.error);

const ObjectModel = require('./schema');

app.post('/objects', async (req, res) => {
  try {
    res.status(201).json(await new ObjectModel(req.body).save());
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/objects', async (req, res) => {
  try {
    res.json(await ObjectModel.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/ping', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
