const { DataTypes } = require("sequelize");
const database = require("../db/conn");

const Fornecedor = require("../models/Fornecedor");
const Cliente = require("../models/Clientes");
const ProdutoCliente = require("../models/ProdutoCliente");

const Produtos = database.define("Produtos", {
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
  tipo: {
    type: DataTypes.STRING,
    required: true,
  },
});

Produtos.belongsTo(Fornecedor, {
  constraint: true, // cria a chave estrangeira
  foreignKey: "idFornecedor",
});

//Problemas de referencia circular
Fornecedor.hasMany(Produtos, {
  foreignKey: "idFornecedor",
});

Produtos.belongsToMany(Cliente, {
  // atraves de um produto se chgea ate um cliente
  through: {
    // especifica qual a tabela meio termo que fará a relação n:n
    model: ProdutoCliente,
  },
  foreignKey: "idProduto",
  constraint: true,
});

Cliente.belongsToMany(Produtos, {
  // atraves de um cliente se chgea ate um produto
  through: {
    model: ProdutoCliente,
  },
  foreignKey: "idCliente",
  constraint: true,
});

module.exports = Produtos;
