import express from "express";
import { conexion } from "./db";
import productosRouter from './routes/productos.router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/productos', productosRouter);

// Ruta simple de prueba
app.get("/", (req, res) => {
  res.send("API funcionando 👋");
});

// Ruta para ver productos
app.get("/productos", (req, res) => {
  conexion.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: "Error al obtener productos", error: err });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
