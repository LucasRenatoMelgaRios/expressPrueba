import express from "express";
import { conexion } from "./db";
import productosRouter from "./routes/productos.router";
import { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas
app.use("/productos", productosRouter);

// Ruta raíz simple
app.get("/", (req: Request, res: Response) => {
  res.send("API funcionando 👋");
});

// Conexión y arranque
conexion.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar con MySQL:", err);
    return;
  }
  console.log("✅ Conexión exitosa a MySQL.");

  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});
