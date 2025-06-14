const router = require("express").Router();
const { getTopSelling, createTopSelling } = require("../controller/topSelling");

router.get("/top-selling", getTopSelling);
router.post("/top-selling", createTopSelling);

module.exports = router;
