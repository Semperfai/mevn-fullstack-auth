require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const corsOptions = require("./config/cors");
const connectDB = require("./config/database");
const credentials = require("./middleware/credentials");
const errorHandker = require("./middleware/errors_handler");

const app = express();
const PORT = process.env.PORT || 3500;

connectDB();

//Allow Credentials
app.use(credentials);
//CORS
app.use(cors(corsOptions));
//app.x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//app/json responses
app.use(express.json());
//middleware for cookies
app.use(cookieParser());

//static files
app.use("/static/", express.static(path.join(__dirname, "public")));

//Default errors handler
app.use(errorHandker);

//Routes
app.use("/api/auth", require("./routes/api/auth"));

app.all("*", (req, res) => {
  res.status(404);

  if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("text").send("404 Not Found");
  }
});

mongoose.connection.once("open", () => {
  console.log("DB connected");
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
