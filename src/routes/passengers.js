const router = require("express").Router();
const {
  getPassengers,
  getPassengerById,
  createPassenger,
  deletePassengerById,
} = require("../controllers/passenger.controller");

router.get("/", getPassengers);
router.post("/", createPassenger);
router.get("/:passengerId", getPassengerById);
router.delete("/:passengerId", deletePassengerById);

module.exports = router;
