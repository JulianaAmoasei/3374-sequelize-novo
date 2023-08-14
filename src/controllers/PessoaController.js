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

  async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await this.pessoaService.pegaUmaPessoa(id);
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await this.pessoaService.criaPessoa(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      const foiAtualizado = await this.pessoaService.atualizaPessoa(id, novasInfos);
      return res.status(200).json({ atualizado: foiAtualizado });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async excluiPessoa(req, res) {
    const { id } = req.params;
    try {
      await this.pessoaService.excluiPessoa(id);
      return res.status(200).json({ mensagem: `id ${id} deletado` });

    } catch (error) {
      return res.status(500).json(error.message);
    }
  }



}

module.exports = PessoaController;
