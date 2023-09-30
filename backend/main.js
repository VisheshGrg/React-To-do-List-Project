require('dotenv').config();

// const winston = require("winston");
const cors = require("cors");
const todos = require("./Routes/todos");
const register = require("./Routes/register");
const login = require("./Routes/login");
const { urlencoded } = require('express')
const express = require("express");
const mongoose = require("mongoose");

// process.on("unhandledRejection", (error) => {
//     throw error;
// });

// winston.add(new winston.transports.File({filename: "logfile.log"}));

// require("dotenv").config;

const app = express();

const db_url = process.env.DB_URL;
const port = process.env.PORT || 5000;

mongoose.set('strictQuery',false);
mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", ()=>{
    console.log("Database connected!");
})

app.use(express.json());
app.use(urlencoded({extended: false}))
app.use(cors());

app.use("/api/todos", todos);
app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req,res) => {
    res.send("Welcome!");
});

app.use((err,req,res,next)=>{
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).json({"msg":err.message})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
