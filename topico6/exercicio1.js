const express = require('express');
const app = express();

app.use(express.json());

const PORTA = 3000;

let tarefas = [
    { id: 1, titulo: 'Lavar tenis', concluida: false},
    { id: 2, titulo: 'Pw tarefa', concluida: true}
];

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;

    if(!titulo) {
        return res.status(400).json({ erro: 'O titulo é obrigatorio'});
    }

    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1: 1,
        titulo,
        concluida: false
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { concluida } = req.body;

    const tarefa = tarefas.find(item => item.id === parseInt(id));

    if(!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada'});
    }

    if(typeof concluida === 'boolean'){
        tarefa.concluida = concluida;
    }

    res.json(tarefa);
});

app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const indice = tarefas.findIndex(item => item.id === parseInt(id));

    if(indice === -1){
        return res.status(404).json({ erro: 'Tarefa não encontrada'});
    }

    tarefas.splice(indice, 1);
    res.status(204).send();
});

app.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada na API'});
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 