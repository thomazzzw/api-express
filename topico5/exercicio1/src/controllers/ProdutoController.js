module.exports = {
    listar(req, res) {
        return res.json([
            {id: 1, produto: 'pessoa'},
            {id: 2, produto: 'parte do corpo'}
        ]);
    },

    criar(req, res) {
        const {produto} = req.body;
        return res.status(201).json(
            { mensagem: `Usuário ${produto} criado com sucesso`}
        );
    }
};