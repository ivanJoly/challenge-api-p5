const Sequelize = require("sequelize");
const db = new Sequelize("postgres", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
module.exports = db;
