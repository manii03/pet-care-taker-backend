var express = require("express");
const petInfoSchema = require("../../schemas/petInfoSchema");
var router = express.Router();

//Add a pet
router.post("/addPetInfo", async function (req, res, next) {
  const query = {
    userId: req.body.userId,
  };

  let petInfo = await petInfoSchema.findOne(query);

  if (petInfo == null) {
    var newPetInfo = new petInfoSchema({
      petInfoArray: req.body.petArray,
      userId: req.body.userId,
    });

    await newPetInfo.save();

    res.send({ message: "OK PASS" });
  } else {
    let petInfo = await petInfoSchema.findOne(query);

    const newPetInfo = {
      petName: req.body.petName,
      petType: req.body.petType,
      breed: req.body.breed,
      age: req.body.age,
    };

    petInfo.petInfoArray.push(newPetInfo);

    await petInfoSchema.findOneAndUpdate(query, petInfo);

    res.send({ message: "OK PASS" });
  }
});

module.exports = router;
