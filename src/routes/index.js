const router = require("express").Router();

const passengersRouter = require("./passengers");
const packageRouter = require("./package");

router.use("/passengers", passengersRouter);
router.use("/packages", packageRouter);

module.exports = router;
