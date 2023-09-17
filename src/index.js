// npm install express mongoose dotenv nodemon
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Asegúrate de importar cors si lo necesitas

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;

// Conexión a la base de datos MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Puedes agregar otras opciones de configuración aquí
  })
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB", err);
  });

// Importar rutas
const airbnbRoutes = require("./routes/airbnb-routes");

// Rutas
app.use("/airbnb", airbnbRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
