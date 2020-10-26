const Sequelize = require("sequelize");
const db = require("../config/db");

class Passenger extends Sequelize.Model {}

Passenger.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "passenger",
  }
);

module.exports = Passenger;
