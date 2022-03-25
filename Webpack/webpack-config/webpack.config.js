
const path = require('path')

module.exports ={
  /** 入口 */
  entry: './src/index.js',
  /** 出口 */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  /** 模块：loader的相关配置，一般是写在模块里面 */
  module: {
    rules: [

    ]
  },
  /** 插件 */
  // plugins: [

  // ],
  /** 配置开发机 */
  // devServe: {

  // },
  /** 打包模式 development / production / none */
  mode: 'development',
}