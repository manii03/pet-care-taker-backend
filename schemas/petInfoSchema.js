var mongoose = require("mongoose");

const pet = new mongoose.Schema({
  petName: String,
  petType: String,
  breed: String,
  gender: String,
  age: String,
});

var petInfoSchema = new mongoose.Schema({
  petInfoArray: [pet],
  userId: String,
});


module.exports = mongoose.model("PetInfo", petInfoSchema, "PetInfos");
