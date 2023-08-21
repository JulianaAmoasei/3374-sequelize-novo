const { Router } = require("express");
const dataSource = require("../models");
const PessoaService = require("../services/PessoaService.js");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

const pessoaService = new PessoaService(dataSource);
const pessoaController = new PessoaController(pessoaService);

// router.get("/pessoas", pessoaController.pegaTodasAsPessoas.bind(pessoaController));
router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.pegaUm(req, res));
router.post("/pessoas", (req, res) => pessoaController.criaNovo(req, res));
router.put("/pessoas/:id", (req, res) => pessoaController.atualiza(req, res));
router.delete("/pessoas/:id", (req, res) => pessoaController.exclui(req, res));

module.exports = router;
