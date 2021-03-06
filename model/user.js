const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    "email" : {

        "type" : String,
        "unique" : true,
        "trim" : true

    },
    "password" : {
        "type" : String,
        "trim" : true
    }
})

module.exports = mongoose.model('users', userSchema)