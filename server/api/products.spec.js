/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Products = db.model('products')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const name = 'Peruvian Geisha';
    const description ='very good coffee'
    const preparation = 'whole bean'
    const origin = 'Terrazu, Costa Rica'
    const weight ='20oz'
    const quantity =20
    const price = 20.99
    const imgUrl = "https://images-na.ssl-images-amazon.com/images/I/91SLInFPjGL._SY355_.jpg"

    beforeEach(() => {
      return Product.create({
        name: name,
        description: description,
        preparation: preparation,
        origin: origin,
        weight: weight,
        quantity: quantity,
        price: price,
        imgUrl: imgUrl

      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
