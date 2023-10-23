var express = require("express");
const petAvailableSchema = require("../../schemas/petAvailableSchema");
var router = express.Router();

router.post("/fetchPetAvailable", async function (req, res, next) {
  const query = {
    userId: req.body.userId,
  };
  let petInfo = await petAvailableSchema.findOne(query);

  console.log("uuuuuuu",petInfo)

  if (petInfo == null) {
    res.statusCode = 400;
    res.send({ message: "no address registered to this email" });
  } else {
    res.send({ message: petInfo });
  }
});

module.exports = router;
