
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";


export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });

        await newUser.save();
        res.status(200).send("User has been created!");
    } catch (err) {
        next(err);
    }
};

export const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) return next(createError(404, "User not Found !"))

        const isCorrect = bcrypt.compare(req.body.password, user.password);

        if (!isCorrect) return next(createError(400, "Wrong Credentials !"))

        const token = jwt.sign({ id: user._id }, process.env.JWT);

        const { password, ...others } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(others);  // for storing our token in cookie

    } catch (err) {
        next(err);
    }
}



export const googleAuth = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT);
            res
                .cookie("access_token", token, {
                    httpOnly: true,
                })
                .status(200)
                .json(user._doc);
        } else {
            const newUser = new User({
                ...req.body,
                fromGoogle: true,
            });
            const savedUser = await newUser.save();
            const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
            res
                .cookie("access_token", token, {
                    httpOnly: true,
                })
                .status(200)
                .json(savedUser._doc);
        }
    } catch (err) {
        next(err);
    }
};


export const signout = async (res, req) => {

    const user = await User.findOne({ name: req.body.name })

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    // res.cookie("access_token", token, {
    //     httpOnly: true
    // }).status(200).json(others);
    // //for deleting our cookie

    // res.clearCookie("access_token").status(200).json("User has been Logged out");

    res.clearCookie('access_token');
    res.cookie('token',token, { maxAge: 900000, httpOnly: true });


    // const authHeader = req.headers["access_token"];
    //     jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
    //     if (logout) {
    //     res.send({msg : 'You have been Logged Out' });
    //     } else {
    //     res.send({msg:'Error'});
    //     }
    //     });
}
