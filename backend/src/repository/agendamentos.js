import con from "../conection.js";

export async function exibirAgendamentos() {
    try {
        let comando = `SELECT * FROM agendamentos`;
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
export async function criarAgendamento(agendamento) {
    try {
        const comando = `INSERT INTO AGENDAMENTOS (CPF, NOME, DATA, HORA, PROCEDIMENTO, TP_PAGAMENTO) VALUES (?, ?, ?, ?, ?, ?)`;
        const valores = [agendamento.CPF, agendamento.NOME, agendamento.DATA, agendamento.HORA, agendamento.PROCEDIMENTO, agendamento.TP_PAGAMENTO];
        const resp = await con.query(comando, valores);
        return { id: resp.insertId, ...agendamento }; 
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function excluirAgendamento(id) {
    try {
        const comando = `DELETE FROM AGENDAMENTOS WHERE ID = ?`;
        await con.query(comando, [id]);
        return { mensagem: "Agendamento deletado com sucesso!" };
    } catch (error) {
        throw new Error(error.message);
    }
}
