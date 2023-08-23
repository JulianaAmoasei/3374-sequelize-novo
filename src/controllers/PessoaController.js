const Controller = require("./Controller.js");
const Service = require("../services/PessoaService.js");

const pessoaService = new Service();

class PessoaController extends Controller {

  constructor() {
    super(pessoaService);
  }
}

module.exports = PessoaController;
