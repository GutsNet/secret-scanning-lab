require("dotenv").config();

const API_KEY = process.env.API_KEY;
const DB_PASSWORD = process.env.DB_PASSWORD;

if (!API_KEY || !DB_PASSWORD) {
  console.error("Faltan variables de entorno. Copia .env.example a .env");
  process.exit(1);
}
console.log("Conectando con la llave:", API_KEY.slice(0, 8) + "...");
