const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dataBase = require("./dataBase");
const table = dataBase.table;
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.post("/set", (req, res) => {
  console.log("post");
  pushIntoTable(req.body);
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`server has been started on port ${PORT}...`);
});

function pushIntoTable(req) {
  console.log(req);
  table.create({
    count: req.count,
  });
}
