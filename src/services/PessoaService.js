const Services = require("./Services.js");

class PessoaService extends Services {
  constructor() {
    super("Pessoa");
    this.matriculas = new Services("Matricula");
  }
}

module.exports = PessoaService;
