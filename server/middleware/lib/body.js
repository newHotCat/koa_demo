const bodyParser = require('koa-bodyparser')

function register () {
    return bodyParser()
}

module.exports = register