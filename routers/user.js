const User = require('../models/User');

const router = require("express").Router();

router.get("/:id", async(req, res) =>{
            const id = request.params.id
         try {
            const sylviorus = await sylviorus.findOne({ user: id })
            res
            .status(200)
            .json(sylviorus);
        } catch (err) {
            res
            .status(500)
            .json(err);
        }
});

module.exports = UserRouter;
