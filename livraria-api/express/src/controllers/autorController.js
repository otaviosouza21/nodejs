import { autor } from '../models/Autor.js';

class AutorController {
  /*========Metodo do mongoose .find para retornar todos os livros do model livro"============*/
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao buscar autor`,
      });
    }
  }

  static async buscarAutorUnico(req, res) {
    try {
      const autorPorId = await autor.findById(req.params.id);
      res.status(200).json(autorPorId);
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao buscar autor`,
      });
    }
  }

  /*======Metodo do mongoose .create para cadastrar um novo livro enviado na req.body ==== */
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: 'Autor criado com sucesso',
        autor: novoAutor,
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao cadastrar autor`,
      });
    }
  }

  static async alterarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: 'Autor Atualizado',
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao atualizar Autor`,
      });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findOneAndDelete(id);
      res.status(200).json({
        message: 'autor deletado',
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao deletar autor`,
      });
    }
  }
}

export default AutorController;
