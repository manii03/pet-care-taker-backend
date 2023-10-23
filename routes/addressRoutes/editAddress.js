var express = require("express");
const addressSchema = require("../../schemas/addressSchema");
const userSchema = require("../../schemas/userSchema");
var router = express.Router();

router.post("/editAddress", async function (req, res, next) {
  console.log("HEY", JSON.stringify(req.body));

  const query = {
    address: { $elemMatch: { _id: req.body.id } },
    userId: req.body.userId,
  };

  const updatedAddress = {
    address: req.body.address,
    city: req.body.city,
    pincode: req.body.pincode,
    _id: req.body.id,
  };

  let Addresses = await addressSchema.findOne(query);

  console.log("before chnage", JSON.stringify(Addresses));
  console.log("updated", updatedAddress);

  Addresses.address.forEach((add, index) => {
    if (add._id == req.body.id) {
      console.log("manisha");
      Addresses.address[index] = updatedAddress;
    }
  });

  console.log("after change", JSON.stringify(Addresses));

  await addressSchema.findOneAndReplace(query, Addresses);

  res.send({ message: "OK PASS" });
});

module.exports = router;
