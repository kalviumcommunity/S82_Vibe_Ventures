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
const user = require('./user')

app.get("/",(req,res)=>{
  res.status(200).send('connected');
})

app.post('/users',async(req,res)=>{
  try{
    const newuser= new user(req.body);
    const saved = await newuser.save();
    res.status(200).send(saved);
  }
  catch(err){
    res.status(400).send(err);
  }
})

app.get('/users',async(req,res)=>{
  try{
    const users = user.find();
    res.status(200).send(users)
  }
  catch(err)
  {
    res.status(400).send(err)
  }
})
app.post('/objects', async (req, res) => {
  try {
    const { firstName, lastName, dob, address, message, fatherName, motherName, noofsiblings, date, created_by } = req.body;

    if (!created_by) {
      return res.status(400).json({ message: 'created_by is required' });
    }

    const newObject = new ObjectModel({
      firstName, lastName, dob, address, message, fatherName, motherName, noofsiblings, date, created_by
    });

    const saved = await newObject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all objects
app.get('/objects', async (req, res) => {
  try {
    const objects = await ObjectModel.find().populate('created_by');
    res.json(objects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get objects by user ID
app.get('/objects/by-user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const objects = await ObjectModel.find({ created_by: userId });
    res.json(objects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/ping', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));