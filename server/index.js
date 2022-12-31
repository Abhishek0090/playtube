import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); //to run config


const app = express();

const connect = () => {
    mongoose.set('strictQuery', false)

    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected Successfully")
    }).catch((error) => {
        throw error;
    })
}



app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi bro")
})

app.listen(8800, () => {
    connect()
    console.log("Your website is running on http://localhost:8800")
})