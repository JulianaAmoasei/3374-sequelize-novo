class Controller {

  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(_, res){
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async pegaUm(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      return res.status(200).json(umRegistro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, id);
      if (!foiAtualizado) {
        return res.status(400).json({ message: "registro não foi atualizado" });
      }
      return res.json({ message: "Atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(id);
      return res.status(200).json({ mensagem: `id ${id} deletado` });

    } catch (error) {
      return res.status(500).json(error.message);
    }
  }



}

module.exports = Controller;
