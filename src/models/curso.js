"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curso.belongsTo(models.Categoria, {
        foreignKey: "categoriaId"
      });
      Curso.belongsTo(models.Pessoa, {
        foreignKey: "docenteId"
      });
      Curso.hasMany(models.Matricula, {
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
  });
  return Curso;
};