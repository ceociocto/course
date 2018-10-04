module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://yourserver.com:port',
        // target: 'http://www.api.com:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}