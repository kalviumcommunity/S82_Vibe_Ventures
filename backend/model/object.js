const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const user = require('./user');

const objectmodel = sequelize.define('object', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  dob: DataTypes.DATEONLY,          // Corrected to DATEONLY
  address: DataTypes.STRING,        // Address should be STRING
  message: DataTypes.STRING,
  fatherName: DataTypes.STRING,
  motherName: DataTypes.STRING,
  noofsiblings: DataTypes.INTEGER,
  date: DataTypes.DATE,
});

// Define associations
user.hasMany(objectmodel, { foreignKey: 'created_by' });
objectmodel.belongsTo(user, { foreignKey: 'created_by' });

module.exports = objectmodel;
