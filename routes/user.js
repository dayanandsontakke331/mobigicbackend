const express = require('express');
// const { appendFile } = require('fs');
const userContrller = require('../controllers/user')

const router = express.Router();

router.post('/', userContrller.save_new_user); // Register user
router.get('/:userId', userContrller.get_user_login); // for login
// router.delete('/:userId', userContrller.delete_file ); // for login


module.exports = router;