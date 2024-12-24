const express = require('express');
const router = express.Router();
const {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
  likeMessage,
} = require('../controllers/messagesController');

// Rutas
router.get('/', getMessages);
router.post('/', createMessage);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);
router.post('/:id/like', likeMessage); // Ruta para los likes

module.exports = router;


