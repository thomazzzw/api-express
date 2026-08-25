const express = require('express');
const app = express();

const PORTA = 3000;

app.get('/saudacao', (req, res) => {
    const {nome} = req.query;

    if(!nome){
        res.send('Olá, convidado');
    } else {
        res.send(`Olá ${nome}`)
    }
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 