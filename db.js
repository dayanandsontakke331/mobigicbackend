const  mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

const DB_URL = 'mongodb+srv://mobigic:1234@cluster0.0nivd.mongodb.net/?retryWrites=true&w=majority'

// const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);

module.exports = mongoose;