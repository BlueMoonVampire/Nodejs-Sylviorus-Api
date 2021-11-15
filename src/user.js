const router = require("express").Router();
const user = require("./User");
const getverify = require("./verify");



router.get("/removeban/:userid", getverify, async(req, res) =>{
    if(req.sylviorus.permission) {
         try {
            await sylviorus.findByIdAndDelete(req.params.userid);
            res
            .status(200)
            .json("User has been deleted!");
        } catch (err) {
            res
            .status(500)
            .json(err);
        }
        
    } else {
        res
        .status(403)
        .json("Don't Have permissions");
    }

});

router.get("/getInfo/:userid", getverify, async(req, res) =>{
         try {
            const sylviorus = await sylviorus.findById(req.params.id);
            res
            .status(200)
            .json(sylviorus);
        } catch (err) {
            res
            .status(500)
            .json(err);
        }
});

module.exports = src
