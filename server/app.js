import express from "express";
import {config} from "dotenv"; 

config({
    path:"./data/config.env",
});

export const app = express();

//using middlewares
app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("working");
})

// Importing routers Here
import user from "./routes/user.js"
app.use("/api/v1/user",user)