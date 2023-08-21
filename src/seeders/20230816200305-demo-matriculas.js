"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("matriculas", [
      {
        estudanteId: 1,
        cursoId: 1,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudanteId: 2,
        cursoId: 2,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudanteId: 3,
        cursoId: 3,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudanteId: 4,
        cursoId: 4,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("matriculas", null, {});
  }
};
