const express = require('express')
const router = express.Router();

const verify = require('../middleware/verify')
const cart = require("../controllers/cart")

// http://localhost:8020/api/auth/signup
router.route('/add').post(verify.verifyUser, cart.add)
router.route('/fetch').get(verify.verifyUser, cart.fetch)
router.route('/checkIfItemIsInCart/:id').get(verify.verifyUser, cart.checkIfItemIsInCart)
router.route('/del/:id').delete(verify.verifyUser, cart.remove)


module.exports = router