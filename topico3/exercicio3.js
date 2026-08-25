const express = require('express');
const app = express();

app.use(express.json());

const PORTA = 3000;

app.post('/usuarios', (req, res) => {
    const {nome, email} = req.body;
    res.status(201).json({
        mensagem: 'Usuário criado com sucesso',
        usuario: {nome, email}
    });
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 