const merge = require('webpack-merge')
const webpack = require('webpack')

const common = require('./webpack.base.config')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development')
        })
    ]
})