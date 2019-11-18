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
        umur: sequelize.INTEGER,
        nomorTelepon: sequelize.INTEGER,
        alamat: sequelize.STRING,
        tglLahir: sequelize.STRING

    }, {
        timestamps: false,
        freezeTableName: true
    })

module.exports = users
