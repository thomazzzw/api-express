const express = require('express');
const router = express.Router();
const UsuárioController = require( '../controllers/UsuarioController');

router.get('/usuarios', UsuárioController.listar);
router.post('/usuarios', UsuárioController.criar);

module.exports = router;