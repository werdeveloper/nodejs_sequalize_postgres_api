const express = require('express');
const {getUsers,Register,Login,storeFormMaster} = require('../controllers/adminController');
const isAuthenticatedUser = require('../middleware/auth');
const router = express.Router();

router.post('/user-registration', Register);
router.post('/user-login', Login);
router.get('/user-list', isAuthenticatedUser, getUsers);
// Form Master
router.post('/examination/form-master', isAuthenticatedUser, storeFormMaster);

module.exports = router;