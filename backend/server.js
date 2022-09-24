const express = require("express");
const app = express();
const dotEnv = require("dotenv").config();
const { asyncErrorHandler } = require("./middleware/errorHandlerMiddleware");

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(asyncErrorHandler);

app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
