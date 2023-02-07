const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv/config");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.options("*", cors());


//routes
const productRouter = require('./routes/products');

const api_url = process.env.API_URL;

//middlewares
app.use(express.json());
app.use(morgan("tiny"));

app.use(`${api_url}/products`, productRouter)


app.listen(3002, () => {
  console.log("Server is listening on the 3000 port");
});
