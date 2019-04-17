'use strict'

const db = require('../server/db')
const {
  User,
  Products,
  Addresses,
  OrderDetail,
  Orders
} = require('../server/db/models')

const seedProducts = [
  {
    name: 'Peruvian Geisha',
    description:
      'For the third straight year, four brothers from the village of Alto Ihuamaca in the San Ignacio region anchor our Peru single-origin lineup. This Bourbon lot from the Pintado brothers reminds us of cherry, grape and caramelized sugar.',
    preparation: 'Whole bean',
    origin: 'San Ignacio, Peru',
    weight: '12 oz',
    quantity: 10,
    price: 18.0,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91SLInFPjGL._SY355_.jpg'
  },
  {
    name: 'Kungu Maitu Kenya Estate Intelligentsia',
    description:
      'MURAGE EDITION | Marion Wawira’s forebears planted coffee on the family’s Murage farm in mid-1900s, but it was only one among many crops. When Marion recently prioritized coffee and adopted an explicit focus on quality, we took notice.',
    preparation: 'Whole bean',
    origin: 'Kenya',
    weight: '12 oz',
    quantity: 10,
    price: 24,
    imgUrl:
      ' https://www.intelligentsiacoffee.com/media/catalog/product/cache/small_image/592x275/799896e5c6c37e11608b9f8e1d047d15/k/e/kenya-kungu-maitu-murage-thumbnail.jpg'
  }
]

const seedUsers = [
  {
    first_name: 'Lucy',
    last_name: 'Ripon',
    email: 'lripon0@house.gov',
    password: 'PyKAOPzK',
    imgUrl: 'http://dummyimage.com/112x211.bmp/ff4444/ffffff',
    addresses: [
      {
        street: '966 Moulton Road',
        zipcode: '89110',
        city: 'Las Vegas',
        state: 'Nevada',
        phone: '+1987234355',
        country: 'United States'
      }
    ]
  }
]

const seedOrders = [
  {
    userId: 1,
    completed: true
  }
]

const seedOrderDetail = [
  {
    quantity: 20,
    productId: 1,
    orderId: 1
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    seedUsers.map(user => {
      return User.create(user, {include: [Addresses]})
    })
  )

  await Promise.all(
    seedProducts.map(product => {
      return Products.create(product)
    })
  )
  await Promise.all(
    seedOrders.map(orders => {
      return Orders.create(orders)
    })
  )

  await Promise.all(
    seedOrderDetail.map(orderDetails => {
      return OrderDetail.create(orderDetails)
    })
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
