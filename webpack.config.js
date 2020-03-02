const path = require('path')

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.svg', '.vue'],
        alias: {
            '@': path.resolve(__dirname),
            '~': path.resolve(__dirname)
        },
    },
}
