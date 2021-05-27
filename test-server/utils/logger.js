const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const config = require('../config')
// const logger = require('./utils/logger');

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, config.morgan_logFilePath), { flags: 'a' })
let logger = morgan('combined', { stream: accessLogStream })

function log(content){
    console.log(content)
}
// setup the logger
module.exports = {
    logger,
    log,
}
