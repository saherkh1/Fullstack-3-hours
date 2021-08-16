global.config = require("./config-dev.json");
const express = require("express");
const cors = require("cors");
const meetingsController = require("./controllers/meetings-controller");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/", meetingsController);

server.listen(3001, () => console.log("Listening..."));
