const mongoose = require("mongoose");

const CarBookingSchema = mongoose.Schema({
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "driver"
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer"
  },
  isPending: {
    type: Boolean,
    default: false
  },
  later: {
    onDate: {
      type: Date,
      default: Date.now
    },
    duration: {
      type: Date
    },
    airlineCode: {
      type: String,
      default: null
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("carBooking", CarBookingSchema);
