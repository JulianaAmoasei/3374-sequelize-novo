"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.Categoria, {
        tableName: "categorias",
        foreignKey: "categoriaId"
      });
      Curso.belongsTo(models.Pessoa, {
        tableName: "pessoas",
        foreignKey: "docenteId"
      });
      Curso.hasMany(models.Matricula, {
        tableName: "matriculas",
        foreignKey: "cursoId"
      });
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataInicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: "Curso",
    tableName: "cursos",
  });
  return Curso;
};