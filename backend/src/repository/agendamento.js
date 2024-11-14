import e from "cors";
import con from "../connection.js";

// Função para exibir todos os agendamentos
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

// Função para criar um novo agendamento
export async function criarAgendamento(agendamento) {
    try {
        
        console.log(agendamento);
        const comando = `INSERT INTO AGENDAMENTOS (CPF, NOME,EMAIL,DATA,HORA,VALOR,PROCEDIMENTO, TP_PAGAMENTO) VALUES (?,?, ?, ?,?, ?, ?, ?)`;
        const valores = [agendamento.CPF, agendamento.NOME, agendamento.EMAIL,agendamento.DATA, agendamento.HORA, agendamento.VALOR,agendamento.PROCEDIMENTO, agendamento.TP_PAGAMENTO];
        console.log(valores);
        const resp = await con.query(comando, valores);

    
        return { id: resp.insertId, ...agendamento }; 
    } catch (error) {
        throw new Error(error.message);
    }
}

// Função para exibir um agendamento de um cliente por e-mail
export async function exibirAgendamentoCliente(email) {
    try {
        const query = `SELECT * FROM AGENDAMENTOS WHERE EMAIL = ?`;

        console.log("email", email);
        let resp = await con.query(query, email);
        console.log(resp[0])
        return resp[0];
    }
    catch (error) {
        throw new Error(error.message);
    }
}