const { db, DataTypes, Model } = require("../db/config.js");

class Attack extends Model {};

Attack.init(
    {
        title: DataTypes.STRING,
        mojoCost: DataTypes.STRING,
        staminaCost: DataTypes.STRING
    },
    {
        sequelize: db,
        modelName: "Attack"
    }
);

module.exports = Attack;