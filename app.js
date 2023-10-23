var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./services/connectDb");

const cors = require("cors");

//APIs (alphabetically)
var addAddressRouter = require("./routes/addressRoutes/addAddress");
var addPetInfoRouter = require("./routes/petRoutes/addPetInfo");
var deleteAddressRouter = require("./routes/addressRoutes/deleteAddress");
var deletePetDetailsRouter = require("./routes/petRoutes/deletePetInfo");
var editAddressRouter = require("./routes/addressRoutes/editAddress");
var editPetInfoRouter = require("./routes/petRoutes/editPetInfo");
var fetchAddressRouter = require("./routes/addressRoutes/fetchAddress");
var fetchPetAvailableRouter = require("./routes/petAvailableRoutes/fetchPetAvailable");
var fetchPetInfoRouter = require("./routes/petRoutes/fetchPetInfo");
var getUsersByCities = require("./routes/usersInfoRoutes/getUsersByCities");
var loginRouter = require("./routes/usersInfoRoutes/login");
var petAvailableRouter = require("./routes/petAvailableRoutes/petAvailable");
var signUpRouter = require("./routes/usersInfoRoutes/signUp")
var updatePetAvailable = require("./routes/petAvailableRoutes/updatePetAvailable");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", addAddressRouter);
app.use("/", addPetInfoRouter);
app.use("/", editAddressRouter);
app.use("/", editPetInfoRouter);
app.use("/", deleteAddressRouter);
app.use("/", deletePetDetailsRouter);
app.use("/", fetchAddressRouter);
app.use("/", fetchPetAvailableRouter);
app.use("/", fetchPetInfoRouter);
app.use("/", getUsersByCities);
app.use("/", loginRouter);
app.use("/", petAvailableRouter);
app.use("/", signUpRouter);
app.use("/", updatePetAvailable);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
          console.log("hiiiiiiiiiiiiiiiiiiiiiiii");

  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
