const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("server is up"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));


//mongo connect url goes here
var database = ""

mongoose
    .connect(database)
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.log("db connection error"));