import { Router } from "express";
import { alterar, deletar, exibir, exibirUsuario, salvar } from "../repository/login.js";
let servidor = Router()


servidor.get('/usuarios', async (req, res) => {
    try {
        let usuarios = await exibir();
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

servidor.post('/usuarios', async (req, res) => {
    try {
        let usuario = req.body;  // Assumindo que o corpo da requisição contém o objeto usuario
        let novoUsuario = await salvar(usuario);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
servidor.put('/usuarios/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let usuario = req.body;  // Assumindo que o corpo da requisição contém o objeto usuario
        let usuarioAlterado = await alterar(id, usuario);
        res.status(200).json(usuarioAlterado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
servidor.delete('/usuarios/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let resposta = await deletar(id);
        res.status(200).json(resposta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
servidor.get('/usuarios/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let usuarios = await exibirUsuario(id);
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});



export default servidor;