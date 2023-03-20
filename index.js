const path = require("path");
const express = require('express')
const app = express()

var cors = require('cors')  // cors policy handle
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());



require('dotenv').config();
let port = process.env.PORT || 8020;

// const Items = require('./schema/BestDeals')

const { conn } = require('./db')




//available routes
app.use('/api/auth', require('./Routes/Auth'))
app.use('/api/cart',require('./Routes/Cart'))






app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

