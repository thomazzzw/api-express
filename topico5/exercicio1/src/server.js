const express = require('express');
const rotasUsuarios = require('./routes/rotasUsuarios');
const rotasProdutos = require('./routes/rotasProdutos');

const app = express();

const PORTA = 3000;

app.use(express.json());

app.use('/api', rotasUsuarios);
app.use('/api', rotasProdutos);

app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
})