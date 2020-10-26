const Passenger = require("./Passenger");
const Package = require("./Package");

Passenger.hasMany(Package, { foreignKey: "passengerId", sourceKey: "id" });
Package.belongsTo(Passenger, { foreignKey: "passengerId", sourceKey: "id" });

module.exports = {
  Passenger,
  Package,
};
