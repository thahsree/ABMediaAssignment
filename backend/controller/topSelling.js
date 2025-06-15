const { default: AsyncHandler } = require("../middlewares/AsyncHandler");
const TopSelling = require("../model/topSellingModel");

const getTopSelling = AsyncHandler(async (req, res) => {
  const foundedTopSelling = await TopSelling.find({});

  if (foundedTopSelling.length <= 0) {
    return res.status(200).json({ message: "NO ITEMS TO SHOW " });
  }

  return res.status(200).json(foundedTopSelling);
});

const createTopSelling = AsyncHandler(async (req, res) => {
  const { package } = req.body;

  if (!package) {
    return res.status(400).json({ message: "please add package" });
  }

  const newPackage = await TopSelling.create(req.body);

  return res.status(200).json({ message: "Package Added", newPackage });
});

module.exports = { getTopSelling, createTopSelling };
