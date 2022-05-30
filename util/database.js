const Sequelize = require('sequelize');

const sequelize = new Sequelize('c24shop', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
