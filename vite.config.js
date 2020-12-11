const path = require('path')

module.exports = {
  base: './',
  port: 3001,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  }
}