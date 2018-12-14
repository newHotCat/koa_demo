const session = require('./lib/session')
const convert = require('./lib/convert')
const bodyParser = require('./lib/body')
const static = require('./lib/static')

const middleware = {
    session,
    convert,
    bodyParser,
    static
}

module.exports = middleware;