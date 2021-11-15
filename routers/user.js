const User = require('../modules/User');

const router = require("express").Router();

router.get("/getInfo/:id", async(req, res) =>{
            const id = request.params.id
         try {
            const sylviorus = await sylviorus.findOne({ userid: id })
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
