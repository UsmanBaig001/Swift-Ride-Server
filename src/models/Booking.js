const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    rentalPlan: {
      name: String,
      duration: Number,
      price: Number,
    },
    driverOption: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    startDateTime: {
      type: Date,
      required: true,
    },
    endDateTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to update status to completed when endDateTime is passed
bookingSchema.pre("save", function (next) {
  if (this.endDateTime < new Date() && this.status !== "cancelled") {
    this.status = "completed";
  }
  next();
});

module.exports = mongoose.model("Booking", bookingSchema);
