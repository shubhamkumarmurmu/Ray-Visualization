const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const fs = require("fs");
const path=require('path')

app.use(express.static("public"));
app.use(express.static("css"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
