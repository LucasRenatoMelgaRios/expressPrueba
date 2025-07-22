import mysql from "mysql2";

export const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // o tu contraseña de XAMPP, si tienes una
  database: "mi_tienda",
});

conexion.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar con MySQL:", err);
  } else {
    console.log("✅ Conexión exitosa a MySQL.");
  }
});

export default conexion;
