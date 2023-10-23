var express = require("express");
const userSchema = require("../../schemas/userSchema");
var router = express.Router();

router.post("/login", async function (req, res, nex) {
  const query = {
    email: req.body.email,
  };

  let queryDetail = await userSchema.findOne(query);

  if (queryDetail === null) {
    res.statusCode = 400;
    res.send({ message: "You have not signed up" });
  }

  if (queryDetail.password === req.body.password) {
    res.statusCode = 200;
    res.send({ message: "Successfully signed in" });
  } else {
    res.statusCode = 400;
    res.send({ message: "Wrong password" });
  }
});

module.exports = router;
