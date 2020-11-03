const Sequelize = require('sequelize');

const connection = new Sequelize('curso', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;