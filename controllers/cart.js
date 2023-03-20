const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const { Buyers } = require('../models/model')
const JWT = process.env.JWT_SECRET_KEY


async function add(req, res) {
    const { fname, lname, email, password, isAdmin } = req.body;
    try {
        Buyers.findOne({ email })
            .then(fu => {
                if (fu)
                    return res.status(200).send({
                        "status": "warn",
                        "msg": "User already exists"
                    });
                else {
                    bcrypt.hash(password, 10)
                        .then(hashed => {
                            const buyer = new Buyers({
                                fname, lname, email, password: hashed, isAdmin
                            })
                            buyer.save();
                            const token = jwt.sign({
                                userId: buyer._id,
                                username: buyer.fname
                            }, JWT);
                            // res.cookie("jwtToken", token, { maxAge: 3600000, httpOnly: true })
                            // Set the cookie
                            // res.cookie('jwtToken', token);
                            // Send a response
                            res
                                .send({
                                    "status": "success",
                                    "msg": "Successfully created your account",
                                    "token": token
                                })
                        })
                        .catch(e => {
                            return res.status(500).send({
                                error: "Unable to hashed password"
                            })
                        })
                }
            })
            .catch(err => {
                res.status(500).send({
                    error: err
                })
            })

        // if (fu) {
        //     return res.status(409).send({
        //         "status": "warn", "msg": "User already exists"
        //     });
        // }
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hash = bcrypt.hashSync(password, salt);

        // const buyer = await Buyers.create({
        //     fname, lname, email, password, isAdmin
        // })
        // const payload = {
        //     ID: {
        //         id: buyer.id
        //     }
        // }
        // var token = jwt.sign(payload, JWT_SECRET_KEY);

        // res.send({
        //     "status": "success",
        //     "msg": "Successfully created your account",
        //     buyer,
        //     token
        // })
    } catch (error) {
        res.send(error)
    }
}




module.exports = { add }

