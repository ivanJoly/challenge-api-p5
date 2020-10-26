const Sequelize = require("sequelize");
const db = require("../config/db");

class Package extends Sequelize.Model {}

Package.init(
  {
    passengerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    category: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "package",
  }
);

module.exports = Package;
