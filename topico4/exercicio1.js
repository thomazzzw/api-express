const express = require('express');
const app = express();

app.use(express.json());

const PORTA = 3000;

app.use((req, res, next) => {
    const dataAtual = new Date().toISOString();
    console.log(`[${dataAtual}] Método: ${req.method} - URL: ${req.url}`);
    next();
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 