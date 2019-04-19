require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;

const controller = require("./controller");

const massive = require("massive");
const { CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use(express.json());

app.get("/api/houses", controller.getHouse);
app.post('/api/houses', controller.addHouse)

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
