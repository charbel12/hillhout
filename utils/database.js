const mysql = require("mysql2")
const configs = require("../configs/config.json")
const pool = mysql.createPool({
    host: configs.host,
    user: configs.user,
    database: configs.database,
    password: configs.password
})
module.exports = pool.promise()