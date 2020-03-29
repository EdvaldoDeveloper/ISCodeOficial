const Sequelize = require('sequelize');

const connection = new Sequelize('bd_agencia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;