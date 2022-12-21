const express = require("express");
const app = express();
app.get("/test", (req, res) => {
  if (Math.random() > 0.5) {
    res.send("ok");
  } else {
    res.status(500).send("fail");
  }
});

app.get("/", (req, res) => res.send("Hello World"));

app.listen(4000, () => {
  console.log("server running port : 4000");
});
