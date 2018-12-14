const convert = require('koa-convert')
const koaLogger = require('koa-logger')
/**
 * 配置控制台日志中间件
 * @returns async
 */
function register () {
    return convert(koaLogger())
}

module.exports = register;