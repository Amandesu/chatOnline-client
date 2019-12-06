const paths = require("./paths");
const path = require("path")
const webpack = require("webpack")
module.exports = {
    entry: {
        // 定义程序中打包公共文件的入口文件vendor.js
        common: ["react", "react-dom", "mobx", "mobx-react", "react-router-dom"],
    },
    output:{
        path: path.join(paths.appSrc, "lib"),
        filename: "common.js",
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            // manifest缓存文件的请求上下文（默认为webpack执行环境上下文）
            context: process.cwd(),
            
            // manifest.json文件的输出位置
            path:path.resolve(process.cwd(), '[name]-manifest.json'),
            
            // 定义打包的公共vendor文件对外暴露的函数名
            name: '[name]'
        })
    ]
}