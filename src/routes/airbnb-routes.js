const express = require("express");
const router = express.Router();
const Airbnb = require("../models/airbnb");
const { getHousesByCountry, getDetailProperty, getAllLimitFive } = require("../controllers/airbnb-controller");


router.get("/", getAllLimitFive);

router.get("/property/:id", getDetailProperty);

router.get("/countries/:country", getHousesByCountry);


module.exports = router;
