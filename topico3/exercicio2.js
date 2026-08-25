const express = require('express');
const app = express();

const PORTA = 3000;

app.get('/produtos/:id', (req, res) => {
    const {id} = req.params;

    if(id === '10'){
        return res.send('Produto: Notebook');
    }else{
        res.status(404)
        res.send('Produto não cadastrado')
    }
})

app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 