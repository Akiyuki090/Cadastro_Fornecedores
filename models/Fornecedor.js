const { DataTypes } = require("sequelize");
const database = require("../db/conn");

const Fornecedor = database.define("Fornecedor", {
  id: {
    type: Sequelize.Integer,
    autoIncrement: true,
    required: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    required: true,
  },
  cpf: {
    type: DataTypes.STRING,
    required: true,
  },
  produto: {
    type: DataTypes.STRING,
    required: true,
  },
  endereco: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = Fornecedor;
