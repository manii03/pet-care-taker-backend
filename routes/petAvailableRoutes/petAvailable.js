var express = require("express");
const petAvailableSchema = require("../../schemas/petAvailableSchema");
var router = express.Router();

router.post("/petAvailable", async function (req, res, next) {
  const query = {
    userId: req.body.userId,
  };

  const newPetAvailablePet = {
    petName: req.body.petName,
    petType: req.body.petType,
    breed: req.body.breed,
    age: req.body.age,
    city: req.body.city,
    available: req.body.available,
    message: req.body.message,
  };

  var newPetAvailableData = new petAvailableSchema({
    petAvailableDetails: newPetAvailablePet,
    userId: req.body.userId,
  });

  let emailExist = await petAvailableSchema.findOne(query);

  if (emailExist == null) {
    await newPetAvailableData.save();
    res.send({ message: "ok pass" });
  } else {
    emailExist.petAvailableDetails.push(newPetAvailablePet);

    await petAvailableSchema.findOneAndUpdate(query, emailExist);
    res.send({ message: "ok pass" });
  }
});

module.exports = router;
