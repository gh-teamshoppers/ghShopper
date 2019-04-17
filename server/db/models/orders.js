const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Orders
