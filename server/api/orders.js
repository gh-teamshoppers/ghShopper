const router = require('express').Router()
const {Orders, OrderDetail} = require('../db/models')

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
    const singleOrder = await Orders.findByPk({
      where: {id: req.params.id},
      include: [{model:OrderDetail}]
      }
    )
    res.json(singleOrder)
  } catch (err) {
    next(err)
  }
})

router.post('/neworder', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    res.status(200).json(newOrder)
  } catch (err) {
    next(err)
  }
})

router.post('/:id/addproducts', async (req, res, next) => {
  try {
    const newOrderDetail = await OrderDetail.create(req.body)



    res.status(200).json(newOrderDetail)
  } catch (err) {
    next(err)
  }
})

router.delete('/orderdetail/:id', async (req, res, next) => {
  try {
    await OrderDetail.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(req.params.id).end()
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const [numOfRows, [updated]] = await Products.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
    console.log('UPDATED', updated)
    res.json(updated)
  } catch (err) {
    next(err)
  }
})

module.exports = router
