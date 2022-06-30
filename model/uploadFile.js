const mongoose = require('mongoose');


const uploadFileSchema = new mongoose.Schema({

    // image : {
    //     type : String
    // },

    "file_id" : Number,
    location: {
         type: String
         },

    pimage: { 
        type: String,
    },
    rdoc:   {
        type: String,
    },
    randomNumber:   {
        type: String,
    }

});

module.exports = mongoose.model('files', uploadFileSchema)