const express = require("express");
const router = express.Router();
const Airbnb = require("../models/airbnb");

router.get("/", async (req, res) => {
  try {
    const propiedades = await Airbnb.find().limit(2);
   return res.json(propiedades);
  } catch (error) {
    console.error("Error al obtener las propiedades de Airbnb", error);
   return res
      .status(500)
      .json({ error: "Error al obtener las propiedades de Airbnb" });
  }
});


module.exports = router;
