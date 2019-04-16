/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Products = db.model('products')

describe('Products model', () => {
  describe('Validations', () => {
    it('requires `name`', async () => {
      const products = Products.build()
      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed without `name`'
        )
      } catch (err) {
        expect(err.message).to.contain('name cannot be null')
      }
    })

    it('requires `name` to not be an empty string', async () => {
      const products = Products.build({
        name: ''
      })

      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if name is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of name



    it('requires `description` to not be an empty string', async () => {
      const products = Products.build({
        description: ''
      })
      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if description is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of description
    it('requires `preparation` to not be an empty string', async () => {
      const products = Products.build({
        preparation: ''
      })

      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if preparation is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of preparation
    it('requires `origin` to not be an empty string', async () => {
      const products = Products.build({
        origin: ''
      })

      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if origin is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of origin
    it('requires `weight` to not be an empty string', async () => {
      const products = Products.build({
        weight: ''
      })

      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if weight is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of name
    it('requires `quantity` to not be an empty string', async () => {
      const products = Products.build({
        quantity: ''
      })

      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if quantity is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle quantity */
      }
    }) // end of name
    it('requires `price` to not be an empty string', async () => {
      const products = Products.build({
        price: ''
      })

      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if price is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of price

    it('requires `imgUrl` to not be an empty string', async () => {
      const products = Products.build({
        imgUrl: ''
      })

      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if imgUrl is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of imgUrl
  })
})
