const path = require('path')
module.exports = {
  entry: {
    // 可以有多个入口，如果有一个，默认从这个入口分析
    'main': './src/main.js',
  },
  // 输出
  output: {
    path: path.resolve('./dist'), // 相对转绝对
    filename: 'build.js'
  },
  // 声明模块，模块内部包含loader
  module: {
    loaders: [
      { 
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'url-loader?limit=1024000',
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      }
    ]
  },
  watch: true,
}