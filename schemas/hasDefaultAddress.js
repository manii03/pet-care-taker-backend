var mongoose = require("mongoose");

const Address = new mongoose.Schema({
  address: String,
  pincode: String,
  city: String,
});

var DefaultAddressSchema = new mongoose.Schema({
  hasDefaultAddress: Boolean,
  address: Address,
  userId: String,
});

module.exports = mongoose.model(
  "DefaultAddress",
  DefaultAddressSchema,
  "DefaultAddresses"
);
