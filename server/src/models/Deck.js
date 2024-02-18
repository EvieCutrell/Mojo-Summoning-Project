const { db, DataTypes, Model } = require("../db/config.js");

class Deck extends Model {};

Deck.init(
    {
        name: DataTypes.STRING
    },
    {
        sequelize: db,
        modelName: "Deck"
    }
);

module.exports = Deck;