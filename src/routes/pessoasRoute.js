const { Router } = require("express");
const dataSource = require("../models");
const PessoaService = require("../services/PessoaService.js");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

const pessoaService = new PessoaService(dataSource);
const pessoaController = new PessoaController(pessoaService);

// router.get("/pessoas", pessoaController.pegaTodasAsPessoas.bind(pessoaController));
router.get("/pessoas", (req, res) => pessoaController.pegaTodasAsPessoas(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.pegaUmaPessoa(req, res));
router.post("/pessoas", (req, res) => pessoaController.criaPessoa(req, res));
router.put("/pessoas/:id", (req, res) => pessoaController.atualizaPessoa(req, res));
router.delete("/pessoas/:id", (req, res) => pessoaController.excluiPessoa(req, res));

module.exports = router;
