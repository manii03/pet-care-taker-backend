var express = require("express");
const addressSchema = require("../../schemas/addressSchema");
var router = express.Router();

//Add another address
router.post("/addAddress", async function (req, res, next) {
  const query = {
    userId: req.body.userId,
  };

  let Addresses = await addressSchema.findOne(query);

  if (Addresses == null) {
    var newAddress = new addressSchema({
      address: req.body.address,
      userId: req.body.userId,
    });

    await newAddress.save();
  } else {
    const newAddress = {
      address: req.body.address,
      city: req.body.city,
      pincode: req.body.pincode,
    };

    Addresses.address.push(newAddress);

    await addressSchema.findOneAndUpdate(query, Addresses);
  }
  res.send({ message: "ok pass" });
});

router.get("/health", async function (req, res) {
  res.statusCode = 200;
  res.send("API SUCCESSFULLY RUNNING");
});

module.exports = router;
