import { autor } from '../models/Autor.js';
import { editora } from '../models/Editora.js';
import livro from '../models/Livro.js';

class LivroController {
  /*========Metodos ativado pela rotas "/livros" [GET], e lista todos os livros do banco============*/
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao buscar livro`,
      });
    }
  }

  /*========Metodos ativado pela rotas "/livros/:id" [GET] , e lista 1 livro especifica baseado na ID============*/
  static async buscarLivroUnico(req, res) {
    try {
      const livroPorId = await livro.findById(req.params.id);
      res.status(200).json(livroPorId);
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao buscar livro`,
      });
    }
  }

  /*========Metodos ativado pela rotas "/livros/" [POST] , e cadastra 1 livro que bem do req.body============*/
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const editoraEncontrada = await editora.findById(novoLivro.editora);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
        editora: { ...editoraEncontrada._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({
        message: 'criado com sucesso',
        livro: livroCriado,
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao cadastrar livro`,
      });
    }
  }

  /*========Metodos ativado pela rotas "/livros/:id [PUT]" , atualiza um livro com a req.body baseado na ID============*/
  static async alterarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: 'livro Atualizado',
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao atualizar livro`,
      });
    }
  }

  /*========Metodos ativado pela rotas "/livros/:id [DELETE]" , DELETA um livro baseado na ID============*/
  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findOneAndDelete(id);
      res.status(200).json({
        message: 'livro deletado',
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao deletar livro`,
      });
    }
  }

  /*========Metodos ativado pela rotas "/busca/ [GET]" , Busca um livro baseado em um parametro passado em query editora============*/
  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      // '1º editora propriedade do livro/ 2º editora parametro da query
      const livrosPorEditora = await livro.find({ 'editora': editora });
      res.status(200).json(livrosPorEditora);
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao buscar `,
      });
    }
  }
}

export default LivroController;
