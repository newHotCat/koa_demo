const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const {config} = require('./utils')

// session存储配置
const sessionMysqlConfig= {
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST,
}

/**
 * 注册session中间件
 * 
 * @param {String} key 
 */
function register (key) {
    console.log('我已经注册session')
    return session({
        key: key ? key : 'USER_SID',
        store: new MysqlStore(sessionMysqlConfig)
    })
}

module.exports = register;