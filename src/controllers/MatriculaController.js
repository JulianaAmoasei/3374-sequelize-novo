const Controller = require("./Controller.js");
const Service = require("../services/MatriculaService.js");

const matriculaService = new Service();

class MatriculaController extends Controller {

  constructor() {
    super(matriculaService);
  }

  async pegaMatriculas(req, res) {  
    const { estudanteId } = req.params;
    try {
      const matriculas = await matriculaService
        .pegaMatriculasPorEstudante({ estudanteId: Number(estudanteId) });
      return res.status(200).json(matriculas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async pegaUmaMatricula(req, res) {
    const { estudanteId, id } = req.params;
    try {
      const umaMatricula = await matriculaService.pegaUmRegistro({ 
        id: Number(id),
        estudanteId: Number(estudanteId)
      });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await matriculaService.criaRegistro(novaMatricula);
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async atualizaMatricula(req, res) {  
    const { estudanteId, id } = req.params;
    const novasInfos = req.body;
    try {
      await matriculaService
        .atualizaRegistro(novasInfos, 
          { id: Number(id), estudante_id: Number(estudanteId) });
      return res.status(200).json({ mensagem: `id ${id} atualizado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = MatriculaController;
