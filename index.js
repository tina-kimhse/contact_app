// ESM (ES6 Module, Ecoma Script Module) import, export
// commonJS Module : require, module.export 또는 ewports

// const express = require('express')
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import userRouter from "./routers/userRouter.js";

// middleware
app.use(express.json()); //json 데이터를 처리
app.use("/", userRouter);


app.listen(3000)