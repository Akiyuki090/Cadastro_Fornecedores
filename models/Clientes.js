const { DataTypes } = require("sequelize");
const database = require("../db/conn");

const Cliente = database.define("Cliente", {
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

module.exports = Cliente;
