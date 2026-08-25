const express = require('express');
const app = express();

app.use(express.json());

const PORTA = 3000;

function verificarToken( req, res, next) {
    const token = req.headers['token'];

    if(!token || token !== 'segredo123'){
        return res.status(401).json(
            { erro: 'Acesso não autroizado.'}
        );
    }

    next();
}

app.get('/area-restrita', verificarToken, (req, res) => {
    res.send('Bem vindo')
})

app.listen(PORTA, () => {
    console.log(`Servidor rodando no enderenco http://localhost:${PORTA}`);
}) 