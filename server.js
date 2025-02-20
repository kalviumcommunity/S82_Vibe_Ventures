const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error(err));

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

app.listen(3000, () => console.log('Server running on port 3000'));
