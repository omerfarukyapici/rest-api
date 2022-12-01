import express from "express";
import User from "../models/User";
const router = express.Router();

//REGISTER
router.post("/", (req, res) => {
    try {
        const newUser = User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        const user = newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json("Eklenmedi aq")
    }
});


export default router;

//LOGİN
