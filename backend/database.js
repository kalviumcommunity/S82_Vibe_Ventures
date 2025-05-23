const express = require('express')
const mysql = require('mysql2')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
const db = mysql.createConnection({
    host :process.env.DB_HOST,
    user :process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

db.connect((err)=>{
    if(err)
    {
        console.error('Not Connected');
    }
    else
    {
        console.log('Connected to Sql');
    }
});

app.get('/',(req,res)=>{
    res.send('HEllo from sql');
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})