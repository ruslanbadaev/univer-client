module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Северо-Кавказский филиал МТУСИ'
        return args
      })
  }
}
