const {CracoAliasPlugin} = require('react-app-alias')
const loaderWebpackConfig = require('./craco.webpack')

module.exports = {
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {}
        },
        {
        plugin: loaderWebpackConfig,
        }
    ]
}