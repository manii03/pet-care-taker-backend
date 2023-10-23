var express = require("express");
const addressSchema = require("../../schemas/addressSchema");
var router = express.Router();

router.post("/deleteAddress", async function (req, res, next) {
  const query = {
    userId: req.body.userId,
    address: { $elemMatch: { _id: req.body.id } },
  };

  let Addresses = await addressSchema.findOne(query);

  Addresses.address = Addresses.address.filter((add) => add._id != req.body.id);

  await addressSchema.findOneAndReplace(query, Addresses);

  res.send({ message: "OK PASS" });
});

module.exports = router;
