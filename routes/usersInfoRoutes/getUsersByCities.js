var express = require("express");
const addressSchema = require("../../schemas/addressSchema");
const userSchema = require("../../schemas/userSchema");
const petAvailableSchema = require("../../schemas/petAvailableSchema");
var router = express.Router();

router.post("/getUsersByCities", async function (req, res, next) {
  const cities = req.body.cities;

  if (cities == null || cities.length == 0) {
    res.send({ message: "empty city" });
  } else {
    const getAvailablePet = [];
    const mainQuery = { $or: [] };

    console.log("Value of city is : ", cities);

    await cities.map(async (city) => {
      const query = {
        petAvailableDetails: { $elemMatch: { city: city, available: true } },
      };

      mainQuery.$or.push(query);
    });

    await petAvailableSchema.find(mainQuery).then((petAvailable) => {
      const petAvailableArray = petAvailable;

      petAvailableArray.map((petAvailableData) => {
        petAvailableData.petAvailableDetails.map((individualPetAvailable) => {
          cities.map((city) => {
            if (
              individualPetAvailable.city == city &&
              individualPetAvailable.available == true
            ) {
              getAvailablePet.push({
                userId: petAvailableData.userId,
                petDetails: individualPetAvailable,
              });
            }
          });
        });
      });
    });

    res.send({ message: getAvailablePet });
  }
});

module.exports = router;
