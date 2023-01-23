import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auths.js";
import cookieParser from "cookie-parser";

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
app.use(cookieParser());


app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/videos", videoRoutes);

app.use("/api/comments", commentRoutes);


//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// app.get("/", (req, res) => {
//     res.send("Hi bro")
// })

app.listen(8800, () => {
    connect()
    console.log("Your website is running on http://localhost:8800")
})