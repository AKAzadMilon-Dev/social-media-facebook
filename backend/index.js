const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const { readdirSync } = require("fs");

dotenv.config();

// Middileware
app.use(cors());
app.use(express.json());

// Routes
readdirSync("./routes").map((fileName) =>
  app.use("/", require("./routes/" + fileName))
);

// Database
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("database connected");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
