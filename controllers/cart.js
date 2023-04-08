const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const { Buyers } = require('../models/model')
const JWT = process.env.JWT_SECRET_KEY


async function add(req, res) {
    // const { id, title, price,image} = req.body;
    const temp={
        p_id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        imageurl: req.body.imageurl
    }
    Buyers.findByIdAndUpdate(req.user.userId, { $push: { cart: temp } }, { upsert: true })
        .then(result => {
            // console.log(result);
        })
        .catch(error => {
            console.error(`Error adding item to cart: ${error}`);
        })
}
async function remove(req, res) {
    const itemId = req.params.id;
    Buyers.findByIdAndUpdate(req.user.userId, { $pull: { cart: { _id: itemId } } }, { new: true })
        .then(result => {
            res.send(result); 
        })
        .catch(error => {
            console.error(`Error removing item from cart: ${error}`);
        })
}
async function fetch(req, res) {
    // const { id, title, price,image} = req.body;
    Buyers.findById(req.user.userId,{cart:1})
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            console.error(`Error adding item to cart: ${error}`);
        })
}
async function checkIfItemIsInCart(req,res) {
    try {
        const buyer = await Buyers.findOne({ _id: req.user.userId, cart: { $elemMatch: { p_id: req.params.id } } });
        if (buyer && buyer.cart) {
            // Item is in cart
            res.send({"msg":"true"});
        } else {
            // Item is not in cart
            res.send({"msg":"false"});
        }
    } catch (error) {
        console.error(`Error checking if item is in cart: ${error}`);
        return false;
    }
}




module.exports = { add, fetch, remove, checkIfItemIsInCart }

