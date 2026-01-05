const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    address: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hospital", HospitalSchema);
