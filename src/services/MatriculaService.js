const Services = require("./Services.js");

class MatriculaService extends Services {
  constructor() {
    super("Matricula");
  }

  async pegaMatriculasPorEstudante(where = {}) {
    const matriculas = await super.pegaTodosOsRegistros(where);
    return matriculas;
    // return matriculas.getAulasMatriculadas();
  }
}

module.exports = MatriculaService;
