var mongoose = require("mongoose");

const petAvailableDetails = new mongoose.Schema({
  petName: String,
  petType: String,
  breed: String,
  age: String,
  message: String,
  city: String,
  available:Boolean
});

var petAvailableSchema = new mongoose.Schema({
  petAvailableDetails: [petAvailableDetails],
  userId: String,
});

module.exports = mongoose.model(
  "petAvailable",
  petAvailableSchema,
  "petAvailables"
);
