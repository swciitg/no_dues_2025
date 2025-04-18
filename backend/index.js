import express from "express";
import mongoose from "mongoose";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_ROUTE || "/nodues/api";

mongoose.set("strictQuery", false);

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// default route
app.get(BASE_URL, (req, res) => {
    res.status(200).json({
        message: "Welcome to the No Dues API",
    });
});

// log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

const PORT = process.env.PORT || 9010;

server.listen(PORT, () => {
    try {
        const mongoURL = process.env.MONGO_URI;
        mongoose.connect(mongoURL) 
            .then(() => {
                console.log("Connected to MongoDB");
            })
            .catch((err) => {
                console.log("Error connecting to MongoDB");
                console.log(err);
            });   
    } catch (e) {
        console.log(e);
    }
    console.log(`Server is running on port ${PORT}`);
});