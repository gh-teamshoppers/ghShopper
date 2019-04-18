const router = require('express').Router()
const {Orders, OrdersProducts, User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Orders.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleOrder = await OrdersProducts.findByPk(req.params.id)
    res.json(singleOrder)
  } catch (err) {
    next(err)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const data = req.body
    const [order] = await Orders.findOrCreate({
      where: {
        userId: req.body.userId,
        completed: false
      }
    })
    console.log('ORDEER', order)
    const orderProduct = await OrdersProducts.create({
      productId: req.body.productId,
      quantity: req.body.quantity,
      orderId: order.id
    })

    res.status(201).send()
  } catch (err) {
    next(err)
  }
})

module.exports = router
