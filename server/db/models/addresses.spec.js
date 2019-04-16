/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Addresses = db.model('addresses')

describe('Address model', () => {
  describe('Validations', () => {
    it('requires `street`', async () => {
      const addresses = Addresses.build()
      try {
        await addresses.validate()
        throw Error(
          'validation was successful but should have failed without `street`'
        )
      } catch (err) {
        expect(err.message).to.contain('street cannot be null')
      }
    }) // end requiere street

    it('requires `street` to not be an empty string', async () => {
      const addresses = Addresses.build({
        street: ''
      })

      try {
        await addresses.validate()
        throw Error(
          'validation was successful but should have failed if street is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of name
  })
})
