class PessoaService {
  constructor(dataSource) {
    this.pessoaModel = dataSource;
  }

  async pegaTodasAsPessoas() {
    return this.pessoaModel.Pessoa.findAll();
  }
}

module.exports = PessoaService;
