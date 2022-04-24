const mariadb = require('mariadb');
const config = require("../../../config/system-config.json")

const pool = mariadb.createPool( {
    host:config.host,
    port: 3306,
    user: config.user,
    password:config.password,
    connectionLimit:5,
    database:config.database
});

module.exports = pool;
