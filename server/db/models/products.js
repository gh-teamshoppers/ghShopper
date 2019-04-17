const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  preparation: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  origin: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  weight: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.FLOAT,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDecimal: true, 
    }
  },
  imgUrl: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Products
