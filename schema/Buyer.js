const mongoose = require('mongoose')
const {Schema} = mongoose

const BuyersSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    cart:[
        {
            p_id:{
                type: String
            },
            title:{
                type: String
            },
            price:{
                type: Number
            }, 
            quantity:{
                type: Number
            }, 
            imageurl:{
                type: String
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = BuyersSchema;