"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cursos", [
      {
        titulo: "API com Express",
        descricao: "Curso de API com Express e MongoDB",
        dataInicio: "2023-01-01",
        categoriaId: 1,
        docenteId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "SpringBoot",
        descricao: "Curso de Java com Spring Framework",
        dataInicio: "2023-01-01",
        categoriaId: 2,
        docenteId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Python Web com Django",
        descricao: "Curso de aplicações web com Django",
        dataInicio: "2023-01-01",
        categoriaId: 3,
        docenteId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Orientação a Objetos com C#",
        descricao: "Curso de C#: coleções, arquivos e libs",
        dataInicio: "2023-01-01",
        categoriaId: 4,
        docenteId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cursos", null, {});
  }
};
