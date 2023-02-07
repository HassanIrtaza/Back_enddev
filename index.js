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


mongoose
  .connect(process.env.CONNNECTION_STRING)
  .then(() => {
    console.log("Database is successfully connected!!!");
  })
  .catch((err) => {
    console.log("Database error ", err);
  });

app.listen(3001, () => {
  console.log("Server is listening on the 3000 port");
});
