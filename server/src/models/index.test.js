const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals');
const { Attack, Deck, Card, User } = require('.');
const { db } = require('../db/config');

let user;
let user2;
let deck;
let deck2;
let card;
let card2;
let attack;
let attack2;

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    user = await User.create({ username: 'gandalf'});
    user2 = await User.create({ username: 'balrog'});
    deck = await Deck.create({ name: 'fire', });
    deck2 = await Deck.create({ name: 'thunder'});
    card = await Card.create({ name: 'fireMonster', mojo: 4, stamina: 5, imgUrl: '../assets/fireMonster.jpg' });
    card2 = await Card.create({ name: 'thunderMonster', mojo: 3, stamina: 4, imgUrl: '../assets/fireMonste.jpg'});
    attack = await Attack.create({ title: 'fireRain', mojoCost: 3, staminaCost: 2 });
    attack2 = await Attack.create({ title: 'tackle', mojoCost: 1, staminaCost: 1});
    await user.setDeck(deck);
    console.log(JSON.stringify(user, null, 2));
    let userDeck = await user.getDeck();
    console.log(JSON.stringify(userDeck, null, 2));
    await user.setDeck(deck2);
    userDeck = await user.getDeck();
    console.log(JSON.stringify(userDeck, null, 2));
  });

  // clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("associations",() => {
    test("user-deck association",() => {
        
        expect(user2["username"]).toEqual("balrog");
    })
});