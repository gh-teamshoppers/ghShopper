const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false
  },
  preparation: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  origin: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  weight: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    unique: false,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    unique: false,
    allowNull: false
  },
  imgUrl:{
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  }
})

module.exports = Products
