const express = require('express')
const router = express.Router();

const auth  = require('../controllers/authentication');
const verify = require('../middleware/verify');





// http://localhost:8020/api/auth/signup
router.route('/signup').post(auth.signup)

// http://localhost:8020/api/auth/login
router.route('/login').post(auth.login)

// http://localhost:8020/api/auth/getuser
router.route('/getuser').post(verify.verifyUser, auth.getuser)

// router.get('/test',testing)


module.exports = router