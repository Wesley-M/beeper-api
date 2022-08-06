require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.MONGODB_URI;
const routes = require("./routes/routes");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});

app.use("/api", routes);
