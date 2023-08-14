class PessoaController {

  constructor(pessoaService) {
    this.pessoaService = pessoaService;
  }

  async pegaTodasAsPessoas(req, res){
    try {
      const todasAsPessoas = await this.pessoaService.pegaTodosOsRegistros();
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await this.pessoaService.pegaUmRegistro(Number(id));
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await this.pessoaService.criaRegistro(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      const foiAtualizado = await this.pessoaService.atualizaRegistro(novasInfos, id);
      if (!foiAtualizado) {
        return res.status(400).json({ message: "registro não foi atualizado" });
      }
      return res.json({ message: "Atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async excluiPessoa(req, res) {
    const { id } = req.params;
    try {
      await this.pessoaService.excluiRegistro(id);
      return res.status(200).json({ mensagem: `id ${id} deletado` });

    } catch (error) {
      return res.status(500).json(error.message);
    }
  }



}

module.exports = PessoaController;
