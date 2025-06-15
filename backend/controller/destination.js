const { default: AsyncHandler } = require("../middlewares/AsyncHandler");
const Destination = require("../model/destinationModel");

const getDestinations = AsyncHandler(async (req, res) => {
  const foundedDestinations = await Destination.find({});

  if (foundedDestinations.length <= 0) {
    return res.status(200).json({ message: "NO ITEMS TO SHOW " });
  }

  return res.status(200).json(foundedDestinations);
});

const createDestination = AsyncHandler(async (req, res) => {
  const { destination, startingFrom } = req.body;

  if (!destination || !startingFrom) {
    return res
      .status(400)
      .json({ message: "please add destination and starting from inputs" });
  }

  const newDestination = await Destination.create(req.body);

  return res.status(200).json({ message: "Destination Added", newDestination });
});

module.exports = { getDestinations, createDestination };
