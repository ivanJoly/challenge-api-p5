const express = require("express");
const cors = require("cors");

// init
const app = express();
app.set("port", process.env.PORT || 5000);
app.use(cors());

const morgan = require("morgan");
const bodyParser = require("body-parser");
const db = require("./config/db");

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api", require("./routes"));

db.sync().then(() => {
  app.listen(app.get("port"), () => {
    console.log(`Escuchando puerto ${app.get("port")}`);
  });
});
