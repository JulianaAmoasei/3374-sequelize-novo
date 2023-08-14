"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: "docenteId"
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: "estudanteId"
      });
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Pessoa",
  });
  return Pessoa;
};
