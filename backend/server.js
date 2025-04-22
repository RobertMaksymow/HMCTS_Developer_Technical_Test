require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const tasksRoutes = require("./routes/tasks");

const app = express();

// MIDDLEWARE (code executed between getting a request and sending a response)

app.use(express.json()); // parse JSON request body and attach it to req object so we can access it in request handlers
app.use(cors()); // allow cross-origin requests (from frontend to backend)

app.use((req, res, next) => {
  console.log("Method: " + req.method, "Path: " + req.path);
  next(); //this is mandatory otherwise the request will hang
});

// ROUTES
app.use("/api/tasks", tasksRoutes);

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    //Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
