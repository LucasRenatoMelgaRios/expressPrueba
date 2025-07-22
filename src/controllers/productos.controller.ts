import { Request, Response } from "express";
import db from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Producto } from "../models/Producto";

// Obtener todos los productos
export const obtenerProductos = (req: Request, res: Response) => {
  const query = "SELECT * FROM productos";

  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error al obtener productos:", err);
      return res.status(500).json({ error: "Error al obtener productos" });
    }

    const productos = results as RowDataPacket[] as Producto[];
    res.json(productos);
  });
};

// Crear un nuevo producto
export const crearProducto = (req: Request, res: Response) => {
  const { nombre, precio, stock } = req.body as Producto;

  if (!nombre || precio === undefined || stock === undefined) {
    return res.status(400).json({ error: "Faltan datos requeridos" });
  }

  const query = "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)";
  const valores = [nombre, precio, stock];

  db.query(query, valores, (err, result) => {
    if (err) {
      console.error("❌ Error al insertar en la base de datos:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    const resultado = result as ResultSetHeader;

    res.status(201).json({
      mensaje: "✅ Producto creado correctamente",
      id: resultado.insertId,
    });
  });
};
