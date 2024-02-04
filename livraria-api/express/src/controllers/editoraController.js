import { editora } from '../models/Editora.js';

class EditoraController {
  /*========Metodo do mongoose .find para retornar todos os livros do model livro"============*/
  static async listarEditoras(req, res) {
    try {
      const listaEditoras = await editora.find({});
      res.status(200).json(listaEditoras);
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao buscar editora`,
      });
    }
  }

  static async buscaEditoraUnica(req, res) {
    try {
      const editoraPorId = await editora.findById(req.params.id);
      res.status(200).json(editoraPorId);
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao buscar editora`,
      });
    }
  }

  /*======Metodo do mongoose .create para cadastrar um novo livro enviado na req.body ==== */
  static async cadastrarEditora(req, res) {
    try {
      const novaEditora = await editora.create(req.body);
      res.status(201).json({
        message: 'Editora criada com sucesso',
        editora: novaEditora,
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao cadastrar Editora`,
      });
    }
  }

  static async alterarEditora(req, res) {
    try {
      const id = req.params.id;
      await editora.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: 'Editora Atualizada',
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao atualizar Editora`,
      });
    }
  }

  static async deletarEditora(req, res) {
    try {
      const id = req.params.id;
      await editora.findOneAndDelete(id);
      res.status(200).json({
        message: 'Editora deletada',
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - Falha ao deletar Editora`,
      });
    }
  }
}

export default EditoraController;
