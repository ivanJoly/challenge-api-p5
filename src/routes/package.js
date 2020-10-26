const router = require("express").Router();
const {
  createPackage,
  deletePackages,
} = require("../controllers/package.controller");

router.post("/", createPackage);
router.delete("/", deletePackages);

module.exports = router;
