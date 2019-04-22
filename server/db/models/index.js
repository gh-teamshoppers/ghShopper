const User = require('./user')
const Products = require('./products')
const Addresses = require('./addresses')
const Orders = require('./orders')
const Sequelize = require('sequelize')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Addresses.belongsTo(User)
User.hasMany(Addresses)

User.hasMany(Orders)

const OrdersProducts = db.define('OrdersProducts', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

Orders.belongsToMany(Products, {through: 'OrdersProducts'})
Products.belongsToMany(Orders, {through: 'OrdersProducts'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Products,
  Addresses,
  Orders,
  OrdersProducts
}
