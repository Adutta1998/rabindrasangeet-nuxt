const express = require("express");
const bp = require("body-parser");
const app = express();

app.use(bp.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.post("/song", (req, res) => {
  res.json({ status: "Added!" });
  console.log(req.body);
});

module.exports = {
  path: "/api",
  handler: app
};
