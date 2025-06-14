const TopSelling = require("../model/topSellingModel");

const getTopSelling = async (req, res) => {
  try {
    const foundedTopSelling = await TopSelling.find({});

    if (foundedTopSelling.length <= 0) {
      return res.status(200).json({ message: "NO ITEMS TO SHOW " });
    }

    return res.status(200).json(foundedTopSelling);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

const createTopSelling = async (req, res) => {
  try {
    const { package } = req.body;

    if (!package) {
      return res.status(400).json({ message: "please add package" });
    }

    const newPackage = await TopSelling.create(req.body);

    return res.status(200).json({ message: "Package Added", newPackage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: "internal server error" });
  }
};

module.exports = { getTopSelling, createTopSelling };
