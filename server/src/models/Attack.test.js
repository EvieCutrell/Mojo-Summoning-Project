const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('.')
const { db } = require('../db/config')

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title: 'fireRain', mojoCost: 3, staminaCost: 2 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
  test('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  test("has a title", () => {
    expect(attack['title']).toEqual("fireRain");
  })

  test("has a mojo cost of 3", () => {
    expect(attack['mojoCost']).toBe(3);
  })

  test("has a stamina cost of 2", () => {
    expect(attack['staminaCost']).toBe(2);
  })
});
