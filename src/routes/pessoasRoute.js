const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require("../controllers/MatriculaController.js");
const router = Router();

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

// router.get("/pessoas", pessoaController.pegaTodasAsPessoas.bind(pessoaController));
router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.pegaUmPorId(req, res));
router.post("/pessoas", (req, res) => pessoaController.criaNovo(req, res));
router.put("/pessoas/:id", (req, res) => pessoaController.atualiza(req, res));
router.delete("/pessoas/:id", (req, res) => pessoaController.exclui(req, res));
router.get("/pessoas/:estudanteId/matriculas", (req, res) => matriculaController.pegaMatriculas(req, res));
router.get("/pessoas/:estudanteId/matriculas/:id", (req, res) => matriculaController.pegaUmaMatricula(req, res));
router.post("/pessoas/:estudanteId/matriculas", (req, res) => matriculaController.criaMatricula(req, res));
router.put("/pessoas/:estudanteId/matriculas/:id", (req, res) => matriculaController.atualizaMatricula(req, res));
router.delete("/pessoas/:estudanteId/matriculas/:id", (req, res) => matriculaController.exclui(req, res));

module.exports = router;
