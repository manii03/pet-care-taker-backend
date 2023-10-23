//Delete a pet info
var express = require("express");
const petInfoSchema = require("../../schemas/petInfoSchema");
var router = express.Router();

router.post("/deletePetInfo", async function (req, res, next) {
  console.log("HEY in deletePetInfo", JSON.stringify(req.body) + petInfoSchema.petInfoArray);

  if (petInfoSchema.petInfoArray == null) {
    res.statusCode = 400;
    res.send({ message: "No pet is found" });
  }

  const query = {
    petInfoArray: { $elemMatch: { _id: req.body.id } },
    userId: req.body.userId,
  };

  let petInfo = await petInfoSchema.findOne(query);

  petInfo.petInfoArray = petInfo.petInfoArray.filter(
    (pet) => pet._id != req.body.id
  );

  await petInfoSchema.findOneAndReplace(query, petInfo);

  res.send({ message: "OK PASS" });
});

module.exports = router;

