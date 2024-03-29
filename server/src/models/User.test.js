const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const { db } = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  test('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  test("has a username of gandalf", () => {
    //console.log(JSON.stringify(user, null, 2));
    expect(user["username"]).toEqual("gandalf");
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
