const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoasServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoasServices.PegaMatriculasPorEstudante(
        Number(estudanteId),
      );
      return res.status(200).json(listaMatriculas);
    } catch {
      //erro
    }
  }
}

module.exports = PessoaController;
