const express = require('express');
const uploadFile = require('../controllers/uploadFile');
const upload = require("../middlewares/upload-file");
const router = express.Router();

router.post('/',upload.any(), uploadFile.save_files); // save files
router.get('/', uploadFile.find_files); // get files
router.delete('/:fileId', uploadFile.delete_file) // delete file by random six digit id

module.exports = router;