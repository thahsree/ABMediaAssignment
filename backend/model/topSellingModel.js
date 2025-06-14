const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topSellingSchema = new Schema({
  package: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const TopSelling = mongoose.model("TopSelling", topSellingSchema);

module.exports = TopSelling;
