const express = require('express')
const router = express.Router();

const cart = require('../controllers/cart')

// http://localhost:8020/api/auth/signup
router.route('/add').post(cart.add)


module.exports = router