const { Router } = require("express");
const dataSource = require("../models");
const CursoService = require("../services/CursoService.js");
const CursoController = require("../controllers/CursoController.js");

const router = Router();

const cursoService = new CursoService(dataSource);
const cursoController = new CursoController(cursoService);

// router.get("/pessoas", pessoaController.pegaTodasAsPessoas.bind(pessoaController));
router.get("/cursos", (req, res) => cursoController.pegaTodos(req, res));
router.get("/cursos/:id", (req, res) => cursoController.pegaUm(req, res));
router.post("/cursos", (req, res) => cursoController.criaNovo(req, res));
router.put("/cursos/:id", (req, res) => cursoController.atualiza(req, res));
router.delete("/cursos/:id", (req, res) => cursoController.exclui(req, res));

module.exports = router;
