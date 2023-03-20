const {conn} = require('../db')

const buyersSchema = require('../schema/Buyer');

const Buyers = conn.model('buyers',buyersSchema)

module.exports = {Buyers}