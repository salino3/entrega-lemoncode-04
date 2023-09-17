// npm install express mongoose dotenv nodemon

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 
const airbnbRoutes = require("./routes/airbnb-routes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection succefully!");
  })
  .catch((err) => {
    console.error("Error to connect at MongoDB", err);
  });

// Routes
app.use("/airbnb", airbnbRoutes);

app.listen(port, () => {
  console.log(`Servidor running on port ${port}`);
});
