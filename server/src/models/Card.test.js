const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const { db } = require('../db/config')

// define in global scope
let card;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'fireMonster', mojo: 4, stamina: 5, imgUrl: '../assets/fireMonster.jpg' })
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  test('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  test("has the name 'fireMonster'", () => {
    expect(card["name"]).toEqual("fireMonster");
  })

  test("has a mojo of 4", () => {
    expect(card["mojo"]).toBe(4);
  })

  test("has a stamina of 5", () => {
    expect(card["stamina"]).toBe(5);
  })

  test("expect the imgUrl to be '../assets/fireMonster.jpg'", () => {
    expect(card['imgUrl']).toEqual("../assets/fireMonster.jpg");
  })

})

