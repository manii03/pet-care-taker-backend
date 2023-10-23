var express = require("express");
const addressSchema = require("../../schemas/addressSchema");
var router = express.Router();

router.post("/fetchAddress", async function (req, res, next) {
  const query = {
    userId: req.body.userId,
  };
  console.log("hiiiiiiiiiiiiiiiiiiiiiiii");

  let address = await addressSchema.findOne(query);

  if (address == null) {
    res.statusCode = 400;
    res.send({ message: "no address registered to this email" });
  } else {
    res.send({ message: address });
  }
});

module.exports = router;
