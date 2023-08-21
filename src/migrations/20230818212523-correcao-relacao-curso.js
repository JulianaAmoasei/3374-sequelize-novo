"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cursos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      dataInicio: {
        type: Sequelize.DATEONLY
      },
      categoriaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "categorias", key: "id"}
      },
      docenteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "pessoas", key: "id"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cursos");
  }
};