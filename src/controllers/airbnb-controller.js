const Airbnb = require("../models/airbnb");

// Controlador para obtener detalles de una propiedad por su ID
exports.getDetallePropiedad = async (req, res) => {
  const propiedadId = req.params.id;

  try {
    const propiedad = await Airbnb.findById(propiedadId);
    if (!propiedad) {
      return res.status(404).json({ error: "Propiedad no encontrada" });
    }
    res.json(propiedad);
  } catch (error) {
    console.error("Error al obtener detalles de la propiedad", error);
    res
      .status(500)
      .json({ error: "Error al obtener detalles de la propiedad" });
  }
};

// Otros controladores, como agregar reseñas, actualizar detalles, etc.
