const router = require("express").Router();
const {
  getDestinations,
  createDestination,
} = require("../controller/destination");

router.get("/", getDestinations);
router.put("/", createDestination);

module.exports = router;
