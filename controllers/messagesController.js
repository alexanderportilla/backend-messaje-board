const pool = require('../models/db');

// Obtener todos los mensajes
exports.getMessages = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM messages ORDER BY timestamp DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo mensaje
exports.createMessage = async (req, res) => {
  const { user_name, content } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO messages (user_name, content, likes) VALUES ($1, $2, 0) RETURNING *',
      [user_name, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un mensaje
exports.updateMessage = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const result = await pool.query(
      'UPDATE messages SET content = $1 WHERE id = $2 RETURNING *',
      [content, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un mensaje
exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM messages WHERE id = $1', [id]);
    res.status(200).json({ message: 'Mensaje eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Dar like a un mensaje
exports.likeMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'UPDATE messages SET likes = likes + 1 WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Mensaje no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



