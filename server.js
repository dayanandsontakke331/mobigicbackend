const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const userRouter = require('./routes/user');
const fileUploadRouter = require('./routes/uploadFile');
const fileMiddleware = require('./middlewares/upload-file');


const conn = require('./db');

const app = express()

const PORT = process.env.PORT || 8080;

// middlewares
app.use(cors()) // to access data from another server
app.use(bodyParser.json())
app.use(express.json()) // convert data into json format

app.use(express.static('public/uploads'));

// db connection
conn.connection.on('connected', (err)=>{

    if(err){

        console.log('SOMETHING WENT WRONG IN DB_CONNECTION');

    }else{

        console.log('CONNECTED TO MONGO DB');

    }
});


app.get('/', (req, res)=>{

    res.send({'SERVER' : 'SERVER IS LIVE'});

});


app.use('/user', userRouter);
app.use('/file', fileUploadRouter);


app.get('*', (req, res)=>{
    res.send('<h1>SOMETHING WENT WRONG CHECK THE ROUTES');
});

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING AT localhost:${PORT}`);
});

