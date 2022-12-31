import auth from "../models/auth.js";
import mongoose from "mongoose"; 
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signup = (req, res) => {

    console.log(req.body); 
    // try {
    //     const newUser = new User();
    // } catch (error) {
    //     //todo
    // }

}

export const signin = (req, res) => {

}


export const googleAuth = (req, res) => {

}