const router = require('express').Router()
const {Orders, OrdersProducts, User} = require('../db/models')

router.get('/cart', async (req, res, next) => {
  try {
    const orders = await Orders.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/cart/:id', async (req, res, next) => {
  try {
    const singleOrder = await OrdersProducts.findByPk(req.params.id)
    res.json(singleOrder)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId/cart', async (req, res, next) => {
  try {
    const [order] = await Orders.findOrCreate({
      where: {
        userId: req.params.userId,
        completed: false
      }
    })
    const orderProduct = await OrdersProducts.create({
      productId: req.body.id,
      quantity: req.body.quantity,
      orderId: order.id
    })

    res.status(201).send()
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/cart/:orderId', async (req, res, next) => {
  try {
    const [order] = await Orders.findAll({
      where: {
        completed: false,
        id: req.params.orderId
      }
    })
    const [numOfOrders, [updated]] = await OrdersProducts.update(
      {
        quantity: req.body.quantity
      },
      {
        where: {
          orderId: order.id,
          productId: req.body.productId
        },
        returning: true
      }
    )
    res.json(updated)
  } catch (err) {
    next(err)
  }
})

router.delete('/:userId/cart/:orderId', async (req, res, next) => {
  try {
    const [order] = await OrdersProducts.findAll({
      where: {
        orderId: req.params.orderId,
        productId: req.body.productId
      }
    })
    await order.destroy()
    res.json(req.params.id).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
