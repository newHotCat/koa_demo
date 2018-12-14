const path = require('path')
const convert = require('koa-convert')
const koaStatic = require('koa-static')

const {config} = require('./utils')

function register () {
    return convert(koaStatic(
        path.resolve(config.root , 'static')
    ))
}

module.exports = register