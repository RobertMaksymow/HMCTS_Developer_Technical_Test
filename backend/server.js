require("dotenv").config();

const express = require("express");

const tasksRoutes = require("./routes/tasks");

const app = express();

// MIDDLEWARE (code executed between getting a request and sending a response)

app.use(express.json()); // parse JSON request body and attach it to req object so we can access it in request handlers

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); //this is mandatory otherwise the request will hang
});

// ROUTES
app.use("/api/tasks", tasksRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
