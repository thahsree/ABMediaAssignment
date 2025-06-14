const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  destination: {
    type: String,
    required: true,
  },
  startingFrom: {
    type: Number,
    required: true,
  },
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
