import mysql from 'mysql2/promise';
import 'dotenv/config';


let connection;

async function connectToDatabase() {
    if (!connection) {
        try {
            connection = await mysql.createConnection({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PWD,
                database: process.env.MYSQL_DB,
            });
            console.log('Conexão com BD realizada');
        } catch (error) {
            console.error('Erro ao conectar ao banco de dados!', error);
            throw error;
        }
    }
   
    return connection;
}
console.log(connection)



export default connectToDatabase;