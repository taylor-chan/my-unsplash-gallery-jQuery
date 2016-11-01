/*
* @Author: taochen
* @Date:   2016-10-30 15:46:01
* @Last Modified by:   taochen
* @Last Modified time: 2016-11-01 18:08:52
*/

var path = require("path") /*path是nodejs的一个模块，是拿来处理路径的*/

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"), /*__dirname表示当前文件所在的文件夹，用path模块的join方法和dist连接到一起得到路径，最后生成的bundle.js文件放到这*/

    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test:/\.styl$/,  /*用正则表达式来表示要对什么文件进行处理*/
        exclude: /node_modules/, /*exclude就是告诉什么样的文件不处理*/
        loader: "style!css!stylus", /*loader之间用!连接，从右往左处理*/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
    ],
  },
}
