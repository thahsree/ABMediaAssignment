const router = require("express").Router();
const {
  getDestinations,
  createDestination,
} = require("../controller/destination");

router.get("/", getDestinations);
router.post("/", createDestination);

module.exports = router;
