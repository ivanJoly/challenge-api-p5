const { Passenger, Package } = require("./models/index");

const promises = [
  Passenger.create({
    name: "Emiliano Rodriguez",
    code: "A1572",
    id: 1,
  }),
  Passenger.create({
    name: "Julieta Pieretti",
    code: "B2458",
    id: 2,
  }),
  Passenger.create({
    name: "Agustin Perkins",
    code: "C1574",
    id: 3,
  }),
  Package.create({
    passengerId: 1,
    category: 1,
    id: 1,
  }),
  Package.create({
    passengerId: 1,
    category: 2,
    id: 2,
  }),
  Package.create({
    passengerId: 2,
    category: 1,
    id: 3,
  }),
  Package.create({
    passengerId: 3,
    category: 1,
    id: 4,
  }),
];

Promise.all(promises).then((statusList) => {
  statusList.forEach((status) => console.log(status));
  process.exit();
});
