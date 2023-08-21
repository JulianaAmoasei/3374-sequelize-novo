const { Router } = require("express");
const dataSource = require("../models");
const CategoriaService = require("../services/CategoriaService.js");
const CategoriaController = require("../controllers/CategoriaController.js");

const router = Router();

const categoriaService = new CategoriaService(dataSource);
const categoriaController = new CategoriaController(categoriaService);

// router.get("/pessoas", pessoaController.pegaTodasAsPessoas.bind(pessoaController));
router.get("/categorias", (req, res) => categoriaController.pegaTodos(req, res));
router.get("/categorias/:id", (req, res) => categoriaController.pegaUm(req, res));
router.post("/categorias", (req, res) => categoriaController.criaNovo(req, res));
router.put("/categorias/:id", (req, res) => categoriaController.atualiza(req, res));
router.delete("/categorias/:id", (req, res) => categoriaController.exclui(req, res));

module.exports = router;
