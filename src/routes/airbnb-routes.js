const express = require("express");
const router = express.Router();
const Airbnb = require("../models/airbnb");
const { getHousesByCountry, getDetailProperty, getAllLimitTwo } = require("../controllers/airbnb-controller");


router.get("/", getAllLimitTwo);

router.get("/property/:id", getDetailProperty);

router.get("/countries/:country", getHousesByCountry);


module.exports = router;
