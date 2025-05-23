const {DataTypes} = require('sequelize');

const sequelize = require('../config/database')

const user = sequelize.define('user',{
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:DataTypes.STRING
})

module.exports = user;