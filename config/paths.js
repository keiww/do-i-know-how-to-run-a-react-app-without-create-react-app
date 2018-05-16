const path = require('path')

const root = path.resolve(__dirname, '../')
const resolve = _path => path.resolve(root, _path)

const src = resolve('src')

module.exports = {
  root,
  src,
  index: resolve('src/index.jsx'),
  build: resolve('build'),
  public: resolve('public')
}
