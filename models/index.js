var sequelize = require('sequelize');
var db = require('../config/db');

var users = db.define('users',{
        user_id : {
            primaryKey: true,
            type: sequelize.INTEGER
        },
        firstName : sequelize.STRING,
        lastName: sequelize.STRING,
        level: sequelize.STRING,

    }, {
        timestamps: false,
        freezeTableName: true
    })


var product = db.define('product', {
    product_id: {
        primaryKey: true,
        type: sequelize.INTEGER
    },
    productName: sequelize.TEXT,
    user_id: {
        type: sequelize.INTEGER
    }

}, {
    timestamps: false,
    freezeTableName: true
})


users.belongsTo(product, {foreignKey : 'user_id'})
module.exports = users,product
