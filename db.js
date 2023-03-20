// new
require('dotenv').config();
const mongoose = require("mongoose");

// DB
const mongoURI = `mongodb+srv://${process.env.DATABASE_ID}:${process.env.DATABASE_PASS}@sastastore.1xmvojq.mongodb.net/user?retryWrites=true&w=majority`;

// connection
let conn;
if (process.env.DATABASE_ID == null) {
    conn = mongoose.createConnection('mongodb://127.0.0.1:27017/meranote', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
else {
    conn = mongoose.createConnection(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

conn.on('connected', () => {
    console.log('MongoDB connected!');
});
conn.on('error', (err) => {
    console.log('MongoDB connection error: ' + err);
});


module.exports = { conn, mongoURI }