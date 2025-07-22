import { Request, Response } from "express";
import db from "../db"; // Asegúrate de que la ruta a tu archivo de conexión a la base de datos sea correcta
import { ResultSetHeader } from "mysql2";

export const obtenerProductos = (req: Request, res: Response) => {
  const productos = [
    { id: 1, nombre: "Producto A", precio: 10 },
    { id: 2, nombre: "Producto B", precio: 20 },
  ];

  res.json(productos);
};


export const crearProducto = (req: Request, res: Response) => {
  const { nombre, precio, stock } = req.body;

  const query = 'INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)';
  const valores = [nombre, precio, stock];

  db.query(query, valores, (err, result) => {
    if (err) {
      console.error('Error al insertar en la base de datos:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }

    // Aquí forzamos el tipo del resultado para acceder a insertId
    const resultado = result as ResultSetHeader;

    res.status(201).json({
      mensaje: 'Producto creado correctamente',
      id: resultado.insertId,
    });
  });
};