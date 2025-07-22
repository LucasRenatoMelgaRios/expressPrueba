import { Router } from "express";
import { obtenerProductos } from "../controllers/productos.controller";
import { crearProducto } from "../controllers/productos.controller";

const router = Router();

router.get("/", obtenerProductos);
router.post('/', crearProducto);

export default router;
