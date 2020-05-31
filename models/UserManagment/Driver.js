const mongoose = require("mongoose");

const DriverSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  carNumber: {
    type: String,
    // required: true,
    unique: true
  },
  licenseNumber: {
    type: String,
    // required: true,
    unique: true
  },
  ownerName: {
    type: String,
    // required: true
  },
  city: {
    type: String,
    // required: true
  },
  starRating: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("driver", DriverSchema);
