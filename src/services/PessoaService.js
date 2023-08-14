class PessoaService {
  constructor(dataSource) {
    this.pessoaModel = dataSource;
  }

  async pegaTodasAsPessoas() {
    return this.pessoaModel.Pessoa.findAll();
  }

  async pegaUmaPessoa(id) {
    return this.pessoaModel.Pessoa.findOne({ where: { id: Number(id) }});
  }

  async criaPessoa(novaPessoa) {
    return this.pessoaModel.Pessoa.create(novaPessoa);
  }

  async atualizaPessoa(id, novasInfos) {
    return this.pessoaModel.Pessoa.update(novasInfos, { where: { id: Number(id) }});
  }

  async excluiPessoa(id) {
    return this.pessoaModel.Pessoa.destroy({ where: { id: Number(id) }});
  }
}

module.exports = PessoaService;
