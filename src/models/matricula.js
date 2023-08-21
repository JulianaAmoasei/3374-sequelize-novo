"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Pessoa, {
        foreignKey: "estudanteId"
      });
      Matricula.belongsTo(models.Curso, {
        foreignKey: "cursoId"
      });
    }
  }
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Matricula",
    tableName: "matriculas"
  });
  return Matricula;
};