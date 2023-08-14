class PessoaController {

  constructor(pessoaService) {
    this.pessoaService = pessoaService;
  }

  async pegaTodasAsPessoas(req, res){
    try {
      const todasAsPessoas = await this.pessoaService.pegaTodasAsPessoas();
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  } 
}

module.exports = PessoaController;
