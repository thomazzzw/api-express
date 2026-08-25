const express = require('express');
const app = express();

app.use(express.json());

const PORTA = 3000;

let tarefas = [
    { id: 1, titulo: 'Lavar tenis', concluida: false},
    { id: 2, titulo: 'Pw tarefa', concluida: true}
]

app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 