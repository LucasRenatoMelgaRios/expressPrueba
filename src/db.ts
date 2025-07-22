import mysql from "mysql2";

// Creamos la conexión
export const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // o tu contraseña de XAMPP
  database: "mi_tienda",
});

// Tipamos el error usando mysql2.ConnectionError (o mysql2.QueryError en casos más generales)
conexion.connect((err: mysql.QueryError | null) => {
  if (err) {
    console.error("❌ Error al conectar con MySQL:", err);
  } else {
    console.log("✅ Conexión exitosa a MySQL.");
  }
});

export default conexion;
