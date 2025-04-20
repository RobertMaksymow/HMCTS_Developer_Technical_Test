require("dotenv").config();

const express = require("express");

const app = express();

// MIDDLEWARE (code executed between getting a request and sending a response)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); //this is mandatory otherwise the request will hang
});

// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
