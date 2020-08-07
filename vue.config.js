module.exports = {
  publicPath: process.env.NODE_ENV  === 'production'
    ? '/Shop-App/'
    : '/',
  assetsDir: 'assets',
  productionSourceMap: false,
}