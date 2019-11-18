var db = require('../config/db');
var sequelize = require('sequelize');

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

module.exports = product