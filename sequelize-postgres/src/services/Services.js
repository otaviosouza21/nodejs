// esta classe intermediaria pega o modelo, aplica regras de negocio e faz a interface com controllers
const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  } 

  async criaUmRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

 async excluiRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }  

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: { id: id },
      },
    );
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;
