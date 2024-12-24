require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const messagesRoutes = require('./routes/messagesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Asegúrate de que la URL del frontend sea correcta
app.use(bodyParser.json());

// Rutas
app.use('/api/messages', messagesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta para la raíz (opcional)
app.get('/', (req, res) => {
  res.send('Servidor Backend Activo. Use /api/messages para interactuar con la API.');
});


