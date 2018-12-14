const path = require('path')

const port = process.argv[2] || 3000
const root = path.resolve(__dirname)

const config = {
    root,
    port,
    database: {
        USERNAME: 'root',
        PASSWORD: 'example',
        DATABASE: 'koa_demo',
        HOST: '10.165.1.28'
    }
}

module.exports = config