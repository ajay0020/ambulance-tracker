// SOS alert schema will go hereconst mongoose = require("mongoose");

const SOSAlertSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    latitude: Number,
    longitude: Number,
    status: {
      type: String,
      default: "sent"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SOSAlert", SOSAlertSchema);

