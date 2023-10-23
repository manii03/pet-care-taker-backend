var express = require("express");
const petAvailableSchema = require("../../schemas/petAvailableSchema");
var router = express.Router();

router.post("/updatePetAvailable", async function (req, res, next) {
  const query = {
    userId: req.body.userId,
  };

  await petAvailableSchema.findOneAndReplace(query, req.body);

  res.send({ message: "ok pass" });
});

module.exports = router;
