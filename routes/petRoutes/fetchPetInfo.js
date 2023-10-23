var express = require("express");
const petInfoSchema = require("../../schemas/petInfoSchema");
var router = express.Router();

router.post("/fetchPetInfo", async function (req, res, next) {
  const query = {
    userId: req.body.userId,
  };

  let petInfo = await petInfoSchema.findOne(query);

  console.log("heyyyyyy",petInfo)

  if (petInfo == null) {
    res.statusCode = 400;
    res.send({ message: "no pets registered to this email" });
  } else {
    res.send({ message: petInfo });
  }
});

module.exports = router;
