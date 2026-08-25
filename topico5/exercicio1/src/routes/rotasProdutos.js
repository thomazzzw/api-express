const express = require('express');
const router = express.Router();
const ProdutoController = require( '../controllers/ProdutoController');

router.get('/produtos', ProdutoController.listar);
router.post('/produtos', ProdutoController.criar);

module.exports = router;