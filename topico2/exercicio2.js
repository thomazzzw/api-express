const express = require('express');
const app = express();

const PORTA = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu site');
});
app.get('/sobre', (req, res) =>{
    res.send('sou estudante de desenvolvimento de software');
});
app.get('/contato', (req, res) => {
    app.send('takeothomaz@gmail.com')
});
app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 