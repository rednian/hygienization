module.exports = {
  configureWebpack: {
    devtool: false
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  transpileDependencies: [
    'vuetify'
  ],
  
  // devServer: {
  //   proxy: 'http://localhost:808'
  // }
}
