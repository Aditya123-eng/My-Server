// const {sum, subtract, multiply}= require("./index")

// console.log(sum(3,4))
// console.log(subtract(4,2))
// console.log(multiply(4,6))

// import {sum , subtract, multiply} from  "./index.js"

// console.log(sum(3,4))
// console.log(subtract(4,2))
// console.log(multiply(4,6))

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("My First");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
