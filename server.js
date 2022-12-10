import express from "express";

const app = express();

import cors from "cors";
import morgan from "morgan";
const PORT = 8000;

// middlewares
app.use(express.json());
app.use(cors());

app.use(morgan("dev"));
// DB connection
import { connectDb } from "./src/config/config.js";
connectDb();

import userRouter from "./src/userRouter.js";

app.use("/users", userRouter);
// request handeler
app.use("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

// run node app in the web server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`your server is running att http://localhost:${PORT}`);
});
