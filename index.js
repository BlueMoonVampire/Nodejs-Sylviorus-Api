const express = require('express');
const moe = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000
const UserRouter = require('./routers/user');


const host = process.env.host
const db = process.env.db

mongoose.connect('mongodb://' + host + '/' + db);


moe.use('/getinfo', UserRouter);

moe.listen( port, () => {
    console.log(`Connected to port ${port}`)
} )
