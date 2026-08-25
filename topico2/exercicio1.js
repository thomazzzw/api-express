const express = require('express');
const app = express();

const PORTA = 4000;

app.get('/', (req, res) => {
    res.send('Servidor Express funcionando corretamente');
});
app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 