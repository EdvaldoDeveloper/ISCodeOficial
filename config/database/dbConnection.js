const Sequelize = require('sequelize');

const connection = new Sequelize('iscodec1_mensagem', 'iscodec1_devEdvaldo', 'pr06390721', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;