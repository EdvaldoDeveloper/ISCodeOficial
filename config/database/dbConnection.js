const Sequelize = require('sequelize');

const connection = new Sequelize('', {
    host: '',
    dialect: 'mysql'
});

module.exports = connection;