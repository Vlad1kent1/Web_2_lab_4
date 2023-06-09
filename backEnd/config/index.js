'use strict'

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const env = process.env

module.exports = {
    host: env.HOST || 'localhost',
    port: env.PORT || 8080,
    db_connection: "mongodb://localhost:27017/web3"
}