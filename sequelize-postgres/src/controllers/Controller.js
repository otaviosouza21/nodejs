class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      // acessa o modelo (models/index.js que indexa todos os modelos criados)
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros(); // acessa os metodos do sequelize do modelo Pessoa
      return res.status(200).json(listaDeRegistro); // da a resposta na api status 200  e um json com a resposta de lista
    } catch {}
  }

  async pegaUmPorId(req,res){
    const {id} = req.params
    try{
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id))
      return res.status(200).json(umRegistro)
    }
    catch{
      //erro
    }
  } 

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaUmRegistro(
        dadosParaCriacao,
      );
      return res
        .status(200)
        .json({ mensagem: 'Registro Criado', novoRegistroCriado });
    } catch {
      //erro
    }
  }

    async excluir(req,res){
    const {id} = req.params
      try{
        await this.entidadeService.excluiRegistro(Number(id))
        return res.status(200).json({mensagem: `id: ${id} Deletado`})
      }
      catch{
        //erro
      }
    }
  

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id),
      );
      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ mensagem: 'Registro nao foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {}
  }
}

module.exports = Controller;
