// Emergency contact schema will go here
const mongoose = require("mongoose");

const EmergencyContactSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    relation: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "EmergencyContact",
  EmergencyContactSchema
);
