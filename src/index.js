import express from "express";
import bodyParser from "body-parser";
import connectDb from "./db/index.js";
import errorCatcherMiddleWare from "./middlewareS/error/errorCatcher.js";
import ErrorHandler from "./middlewareS/error/errorHandler.js";

// importing environment variables
import "dotenv/config";
const app = express();

// connecting databse with app
connectDb();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Define your routes
app.get("/", (req, res, next) => {
  return next(new ErrorHandler(404, "Hello this is a error"));
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});

// catch the error
app.use(errorCatcherMiddleWare);
