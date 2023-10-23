var express = require("express");
const petInfoSchema = require("../../schemas/petInfoSchema");
var router = express.Router();

router.post("/editPetInfo", async function (req, res, next) {
  console.log("HEY", JSON.stringify(req.body));

  const query = {
    petInfoArray: { $elemMatch: { _id: req.body.id } },
    userId: req.body.userId,
  };

  const updatedPetDetails = {
    petName: req.body.petName,
    petType: req.body.petType,
    breed: req.body.breed,
    age: req.body.age,
    _id: req.body.id,
  };

  let petDetails = await petInfoSchema.findOne(query);

  console.log("before chnage", JSON.stringify(petDetails));
  console.log("updated", updatedPetDetails);

  petDetails.petInfoArray.forEach((pet, index) => {
    if (pet._id == req.body.id) {
      console.log("manisha");
      petDetails.petInfoArray[index] = updatedPetDetails;
    }
  });

  console.log("after change", JSON.stringify(petDetails));

  await petInfoSchema.findOneAndReplace(query, petDetails);

  res.send("OK PASS");
});

module.exports = router;
