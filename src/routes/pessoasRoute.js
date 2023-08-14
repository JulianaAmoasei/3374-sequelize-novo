const { Router } = require("express");
const dataSource = require("../models");
const PessoaService = require("../services/PessoaService.js");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

const pessoaService = new PessoaService(dataSource);
const pessoaController = new PessoaController(pessoaService);

router.get("/pessoas", pessoaController.pegaTodasAsPessoas.bind(pessoaController));

module.exports = router;
