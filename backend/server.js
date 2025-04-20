const express = require("express");

const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
