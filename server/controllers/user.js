import User from "../models/User.js";
import mongoose from "mongoose";
import { createError } from "../error.js";



export const update = async (req, res, next) => {
    if (req.parmas.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.parmas.id, {
                $set: res.body
            })
            res.status(200).json(updatedUser);
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(403, "You can update Only Your Account"))
    }
}

export const deleteUser = (req, res, next) => {

}

export const getUser = (req, res, next) => {

}

export const subscribe = (req, res, next) => {

}

export const unsubscribe = (req, res, next) => {

}

export const like = (req, res, next) => {

}

export const dislike = (req, res, next) => {

}