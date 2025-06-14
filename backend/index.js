const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = 8888;

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.use("/api/destination", require("./routes/destinationRoute"));

app.use("/api/packages", require("./routes/topSellingRoute"));

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("DB Connected");
  app.listen(PORT, () => {
    console.log(`APP CONNECECTED ON PORT ${PORT}`);
  });
});
