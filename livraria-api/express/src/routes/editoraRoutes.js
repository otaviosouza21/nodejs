import express from 'express';
import EditoraController from '../controllers/editoraController.js';

const routes = express.Router();

routes.get('/editoras', EditoraController.listarEditoras);
routes.post('/editoras', EditoraController.cadastrarEditora);
routes.get('/editoras/:id', EditoraController.buscaEditoraUnica);
routes.put('/editoras/:id', EditoraController.alterarEditora);
routes.delete('/editoras/:id', EditoraController.deletarEditora);

export default routes;
