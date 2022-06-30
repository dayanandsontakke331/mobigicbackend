const multer = require('multer')
const path = require('path')

console.log(__dirname)

const upload = multer({
  
  storage: multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, `public/uploads/image`)

    },

    filename: function (req, file, cb) {

      cb(null, `${Date.now()}-${file.originalname}`)
      
    }

  })
})

module.exports = upload;