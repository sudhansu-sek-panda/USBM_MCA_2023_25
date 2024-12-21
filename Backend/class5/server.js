// import
const express = require("express");
require("dotenv").config();


const app = express();


app.get("/", (req, res) => {
  res.status(201).send({ msg: "It is working" });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});