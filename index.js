const express = require('express');
const moe = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000
const User = require('./models/User');

const cors = require('cors')
const NodeCache = require('node-cache')

const host = process.env.host
const db = process.env.db

mongoose.connect('mongodb://' + host + '/' + db);

moe.use(cors())
moe.use(express.json())
moe.use(express.urlencoded({ extended: false }))

moe.get("/", (req, res) => {
    res.status(200).json({
        "api": "getinfo/{userid}",

    });
});

moe.get("/getinfo/:id", async(req, res) =>{
            const id = request.params.id
         try {
            const User = await sylviorus.findOne({ user: id })
            res
            .status(200)
            .json(User);
        } catch (err) {
            res
            .status(500)
            .json(err);
        }
});

moe.listen( port, () => {
    console.log(`Connected to port ${port}`)
} )
