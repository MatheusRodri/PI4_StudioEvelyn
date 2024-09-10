import con from "../conection.js";

export async function exibir() {
    try {
        let comando = `SELECT * FROM dados`;
        let resp = await con.query(comando, []);
        let linhas = resp.length;
        if (linhas === 0) {
            throw new Error("Erro ao realizar operação!");
        }
        return resp[0];
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function salvar(usuario) {
    try {
        let comando = `INSERT INTO dados (nome, endereco, email) VALUES (?, ?, ?)`;
        let resp = await con.query(comando, [usuario.nome, usuario.endereco, usuario.email]);
        if (resp.affectedRows === 0) {
            throw new Error("Erro ao realizar operação!");
        }
        return { id: resp.insertId, ...usuario };
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function alterar(id, usuario) {
    try {
        let comando = `UPDATE dados SET nome = ?, endereco = ?, email = ? WHERE id = ?`;
        let resp = await con.query(comando, [usuario.nome, usuario.endereco, usuario.email, id]);
        if (resp.affectedRows === 0) {
            throw new Error("Erro ao realizar operação ou registro não encontrado!");
        }
        return { id, ...usuario };
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function deletar(id) {
    try {
        let comando = `DELETE FROM dados WHERE id = ?`;
        let resp = await con.query(comando, [id]);
        if (resp.affectedRows === 0) {
            throw new Error("Erro ao realizar operação ou registro não encontrado!");
        }
        return { message: "Registro deletado com sucesso!", id };
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function exibirUsuario(id) {
    try {
        let comando = `SELECT * FROM dados where id = ?`;
        let resp = await con.query(comando, [id]);
        let linhas = resp.length;
        if (linhas === 0) {
            throw new Error("Erro ao realizar operação!");
        }
        return resp[0];
    } catch (error) {
        throw new Error(error.message);
    }
}