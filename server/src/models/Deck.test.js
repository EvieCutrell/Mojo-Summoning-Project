const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const { db } = require('../db/config')

// define in global scope
let deck;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'fire' })
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  test('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  test("has the name 'fire'", () => {
    expect(deck["name"]).toEqual("fire");
  })

})
