const path = require('path')

module.exports = {
  publicPath: '',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
}
