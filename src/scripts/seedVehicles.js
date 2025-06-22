const mongoose = require("mongoose");
const Vehicle = require("../models/Vehicle");
const config = require("../config/config");

const vehicles = [
  {
    name: "Toyota Camry 2022",
    brand: "Toyota",
    vehicleType: "Car",
    location: "Lahore",
    seats: 4,
    features: [
      "Sunroof",
      "Leather Seats",
      "GPS Navigation",
      "Bluetooth",
      "Air Conditioning",
      "Cruise Control",
    ],
    rentalPlans: [
      {
        duration: "12 Hour",
        priceRange: { min: 5000, max: 6500 },
      },
      {
        duration: "2 Day",
        priceRange: { min: 9500, max: 12500 },
      },
      {
        duration: "3 Day",
        priceRange: { min: 14000, max: 18000 },
      },
      {
        duration: "1 Week",
        priceRange: { min: 28000, max: 36000 },
      },
    ],
    status: "Available",
  },
  {
    name: "Honda Civic 2022",
    brand: "Honda",
    vehicleType: "Car",
    location: "Rawalpindi",
    seats: 4,
    features: [
      "Leather Seats",
      "Bluetooth",
      "Air Conditioning",
      "Reverse Camera",
      "Cruise Control",
    ],
    rentalPlans: [
      {
        duration: "12 Hour",
        priceRange: { min: 5000, max: 6500 },
      },
      {
        duration: "2 Day",
        priceRange: { min: 9500, max: 12500 },
      },
    ],
    status: "Unavailable",
  },
  {
    name: "Yutong ZK6122H9",
    brand: "Yutong",
    vehicleType: "Mini Bus",
    location: "Faisalabad",
    seats: 30,
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth"],
    rentalPlans: [
      {
        duration: "12 Hour",
        priceRange: { min: 17000, max: 19500 },
      },
      {
        duration: "2 Day",
        priceRange: { min: 32000, max: 36000 },
      },
      {
        duration: "3 Day",
        priceRange: { min: 46000, max: 51000 },
      },
      {
        duration: "1 Week",
        priceRange: { min: 90000, max: 99000 },
      },
    ],
    status: "Available",
  },
  {
    name: "MAN Lion's Coach",
    brand: "MAN",
    vehicleType: "Bus",
    location: "Gujranwala",
    seats: 45,
    features: [
      "Air Conditioning",
      "GPS Navigation",
      "Bluetooth",
      "Leather Seats",
    ],
    rentalPlans: [
      {
        duration: "12 Hour",
        priceRange: { min: 25000, max: 29000 },
      },
      {
        duration: "2 Day",
        priceRange: { min: 48000, max: 56000 },
      },
      {
        duration: "3 Day",
        priceRange: { min: 70000, max: 81000 },
      },
      {
        duration: "1 Week",
        priceRange: { min: 130000, max: 144000 },
      },
    ],
    status: "Available",
  },
  {
    name: "Toyota Coaster Deluxe",
    brand: "Toyota Coaster",
    vehicleType: "Coaster",
    location: "Sialkot",
    seats: 22,
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth"],
    rentalPlans: [
      {
        duration: "12 Hour",
        priceRange: { min: 12000, max: 14500 },
      },
      {
        duration: "2 Day",
        priceRange: { min: 22500, max: 26500 },
      },
    ],
    status: "Unavailable",
  },
  {
    name: "Hyundai Sonata 2022",
    brand: "Hyundai",
    vehicleType: "Car",
    location: "Multan",
    seats: 4,
    features: [
      "Sunroof",
      "Leather Seats",
      "GPS Navigation",
      "Bluetooth",
      "Air Conditioning",
      "Cruise Control",
      "Reverse Camera",
    ],
    rentalPlans: [
      {
        duration: "12 Hour",
        priceRange: { min: 5000, max: 6500 },
      },
      {
        duration: "3 Day",
        priceRange: { min: 14000, max: 18000 },
      },
    ],
    status: "Available",
  },
];

const seedVehicles = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing vehicles
    await Vehicle.deleteMany({});
    console.log("Cleared existing vehicles");

    // Insert new vehicles
    await Vehicle.insertMany(vehicles);
    console.log("Added sample vehicles");

    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding vehicles:", error);
    process.exit(1);
  }
};

seedVehicles();
