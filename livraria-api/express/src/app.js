import express from 'express';
import conectaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

/*=====retorna e execura uma funcao asyncrona de conexao criada em dbConnect.js=======*/
const conexao = await conectaDatabase();

/*=== a palavra chave error indica que houve um erro na conexao com o banco e retorna este erro no console====*/
conexao.on('error', (erro) => {
  console.error('Erro de conexao', erro);
});

/*===========a palavra chave open indica que a conexao foi feita com sucesso, e retorne no console*/
conexao.once('open', () => {
  console.log('Conexao com db feita com sucesso');
});

const app = express();
routes(app);

export default app;
