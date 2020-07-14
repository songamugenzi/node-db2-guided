const express = require("express");
const helmet = require("helmet");

const fruitsRouter = require("../fruits/fruits-router.js");
const db = require("../data/connection.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/fruits", fruitsRouter);

server.get("/api/veggies", (req, res) => {
  db("veggies")
    .then((veggies) => {
      res.status(200).json({ data: veggies });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = server;
