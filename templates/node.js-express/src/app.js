const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const apiRouter = require('./api/router')

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(bodyParser.json({limit: "10mb"}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', apiRouter)

app.listen(app.get("port") , () => {
  console.log(`App listening on ${app.get("port")}`);
});