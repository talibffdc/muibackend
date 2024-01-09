


  const express = require("express");

const PORT = 8000;

const app = express();


// connect the mongo db with url.
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://talibffdc:grFuJTrtpzfp3RLV@cluster0.qj66rhf.mongodb.net/todomui");
  

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

const router = require("./router");

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);
  