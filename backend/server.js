const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5555;

app.use(express.json());
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:5173", // Allow frontend requests
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to Database'))
  .catch(console.error);

const ObjectModel = require('./schema');

app.get("/",(req,res)=>{
  res.status(200).send('connected');
})

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
