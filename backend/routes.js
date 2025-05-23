const express = require('express');
const user = require('./user');
const cookieParser = require('cookie-parser');

const router = express.Router();

// Sample GET endpoint
router.get('/getdata', async (req, res) => {
  try {
    const data = {
      name: "hello",
      age: "18"
    };
    return res.status(200).json({ message: "success", info: data });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

// LOGIN
router.get('/check-cookie', (req, res) => {
  console.log('Cookies:', req.cookies);
  const username = req.cookies.username;

  res.cookie('username', 'hello', {
      maxAge: 60000
    });
    console.log(req.cookies);
  if (!username) return res.status(401).send('No cookie found');
  return res.status(200).json({ message: `Welcome back, ${username}` });
});


router.post('/login', async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).send('All Fields are required');
    }

    res.cookie('username', 'hello', {
      maxAge: 60000
    });
    console.log('Cookies:', req.cookies);
    return res.status(200).send('Login Successful');
  } catch (err) {
    return res.status(500).send(err.message);
  }
});


// LOGOUT
router.post('/logout', async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).send('All Fields are required'); // return added
    }

    res.clearCookie('username');
    return res.status(200).send('Logout Successful'); // return added
  } catch (err) {
    return res.status(500).send(err.message); // changed to 500 and added return
  }
});

module.exports = router;
