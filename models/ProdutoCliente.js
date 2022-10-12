const { DataTypes } = require("sequelize");
const database = require("../db/conn");

const ProdutoCliente = database.define("ProdutoCliente", {
  id: {
    type: Sequelize.Integer,
    autoIncrement: true,
    required: true,
    primaryKey: true,
  },
});

module.exports = ProdutoCliente;
