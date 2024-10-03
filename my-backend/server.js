const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuración de CORS
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12345',
  database: 'SHOP'
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    process.exit(1);
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener datos
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM Producto', (err, results) => {
    if (err) {
      console.error('Error en la consulta a la base de datos:', err);
      return res.status(500).json({ message: 'Error en la consulta a la base de datos' });
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.use(express.static('public')); // Si los archivos están en la carpeta 'public'
