const Destination = require("../model/destinationModel");

const getDestinations = async (req, res) => {
  try {
    const foundedDestinations = await Destination.find({});

    if (foundedDestinations.length <= 0) {
      return res.status(200).json({ message: "NO ITEMS TO SHOW " });
    }

    return res.status(200).json(foundedDestinations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

const createDestination = async (req, res) => {
  try {
    const { destination, startingFrom } = req.body;

    if (!destination || !startingFrom) {
      return res
        .status(400)
        .json({ message: "please add destination and starting from inputs" });
    }

    const newDestination = await Destination.create(req.body);

    return res
      .status(200)
      .json({ message: "Destination Added", newDestination });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: "internal server error" });
  }
};

module.exports = { getDestinations, createDestination };
