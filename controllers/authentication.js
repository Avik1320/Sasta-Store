const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const { Buyers } = require('../models/model')
const JWT = process.env.JWT_SECRET_KEY


function testing(req, res) {
    res.send("hrllow bro me Biswajit")
}
async function signup(req, res) {
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


async function login(req, res) {
    //     // console.log("hellowe");
    const { email, password } = req.body;
    try {
        Buyers.findOne({ email })
            .then(fu => {
                if (!fu) {
                    return res.status(409).send({
                        "status": "warn",
                        "msg": "User does not exists"
                    });
                }
                bcrypt.compare(password, fu.password)
                    .then(passwordChk => {
                        if (!passwordChk) return res.status(409).send({
                            "status": "warn",
                            "msg": "credentials doesn't matched"
                        });

                        // create jwt token
                        const token = jwt.sign({
                            userId: fu._id,
                            username: fu.fname
                        }, JWT);
                        res.status(200).send({
                            "status": "success",
                            "msg": "you have successfully logged in",
                            token
                        })
                    })
                    .catch(error => {
                        return res.status(400).send({ error: "Password does not Match" })
                    })
            })

        //         const compPass = bcrypt.compareSync(password, fu.password);
        //         if (!compPass) {
        //             return res.status(401).send({
        //                 "status": "warn",
        //                 "msg": "Please try to login with correct credentials"
        //             });
        //         }
        //         const payload = {
        //             ID: {
        //                 id: fu.id
        //             }
        //         }
        //         // console.log("logging from signin:"+payload.ID.id);

        //         var token = jwt.sign(payload, JWT_SECRET_KEY);

    } catch (error) {
        res.status(500).send({ error })
    }
}



async function getuser(req, res) {
    // verifyUser(req,res,async ()=>{
        // console.log("getuser called "+req.user.id);
        // const fu = await Buyers.findOne({ _id:req.headers.token }).select('-password')
        res.send(req.user);   
    // })
}






// module.exports = { testing, signup, login ,getuser}
module.exports = { signup, login,getuser }