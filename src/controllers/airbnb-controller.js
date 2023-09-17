const Airbnb = require("../models/airbnb");


const getAllLimitTwo = async (req, res) => {
  try {
    const propiedades = await Airbnb.find().limit(2);
    return res.json(propiedades);
  } catch (error) {
    console.error("Error al obtener las propiedades de Airbnb", error);
    return res
      .status(500)
      .json({ error: "Error al obtener las propiedades de Airbnb" });
  };
};

const getDetailProperty = async (req, res) => {
  const propiedadId = req.params.id;

  try {
    const propiedad = await Airbnb.findById(propiedadId);
    if (!propiedad) {
      return res.status(404).json({ error: "Propiedad no encontrada" });
    }
   return res.json(propiedad);
  } catch (error) {
    console.error("Error al obtener detalles de la propiedad", error);
   return res
      .status(500)
      .json({ error: "Error al obtener detalles de la propiedad" });
  };
};

const getHousesByCountry = async (req, res) => {
  const country = req.params.country;

  try {
    const houses = await Airbnb.find({ "address.country": country }).limit(5);
console.log(houses)
  return res.json(houses);
  } catch (error) {
    console.error("Error al obtener las casas por país", error);
   return res.status(500).json({ error: "Error al obtener las casas por país" });
  }
};


module.exports = { getDetailProperty, getHousesByCountry, getAllLimitTwo };

