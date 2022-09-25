const express = require("express");
const app = express();
const dotEnv = require("dotenv").config();
const { asyncErrorHandler } = require("./middleware/errorHandlerMiddleware");
const colors = require("colors");
const connectDatabase = require("./databaseConfig/databaseConnection");
// const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

//database connection
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(asyncErrorHandler);
// app.use(
//   cors({
//     origin: "http://localhost:5000/api/goals",
//   })
// );

app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
