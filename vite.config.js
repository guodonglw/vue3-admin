const path = require('path')

module.exports = {
  port: 3001,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  }
}