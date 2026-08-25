module.exports = {
    listar(req, res) {
        return res.json([
            {id: 1, nome: 'leozinho'},
            {id: 2, nome: 'dedo'}
        ]);
    },

    criar(req, res) {
        const {nome} = req.body;
        return res.status(201).json(
            { mensagem: `Usuário ${nome} criado com sucesso`}
        );
    }
};