var mongoose = require("mongoose");

const Address = new mongoose.Schema({
  address: String,
  pincode: String,
  city: String,
});

var AddressSchema = new mongoose.Schema({
  address: [Address],
  userId: String,
});

module.exports = mongoose.model("Address", AddressSchema, "Addresses");
