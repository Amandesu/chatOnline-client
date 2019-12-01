"use strict";

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development";
}
const webpack = require("webpack");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const path = require("path");
const paths = require("./paths");
const fs = require("fs");

module.exports = {
    mode: "production",
    entry: {
        "main":paths.appIndexJs,
    },
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
        path: paths.appBuild,
        filename: "js/bundle.[hash].js",
        chunkFilename: "js/[name].[hash].chunk.js",
        publicPath: "./",
        devtoolModuleFilenameTemplate: (info) =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")
    },
    resolve: {
        modules: ["node_modules", paths.appNodeModules].concat(
            // It is guaranteed to exist because we tweak it in `env.js`
            (process.env.NODE_PATH || "").split(path.delimiter).filter(Boolean)
        ),
        extensions: [".js", ".json", ".jsx"],
        alias: {
            ROOT:path.resolve(process.cwd(), "src")
        },
        plugins: [new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])]
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.less$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/[name].[hash:8].[ext]',
                }
                
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve("url-loader"),
                options: {
                    limit: 10000,
                    name: "images/[name].[ext]"
                }
            },
            {
                test: /\.(js|jsx)$/,
                include: [paths.appSrc, /node_modules\/superagent/],
                loader: require.resolve("babel-loader")
                
            },
            {
                test: /\.css/,
                use: [
                    require.resolve("style-loader"),
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            importLoaders: 1,
                            url: true
                            //root: path.resolve(paths.appSrc, "images")
                        }
                    },
                    {
                        loader: require.resolve("postcss-loader"),
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                require("postcss-flexbugs-fixes"),
                                require("autoprefixer")({
                                    browsers: [
                                        ">1%",
                                        "last 4 versions",
                                        "Firefox ESR",
                                        "not ie < 9"
                                    ],
                                    flexbox: "no-2009"
                                }),
                                require("postcss-px2rem")({ remUnit: 100 })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback:require.resolve("style-loader"),
                    use:[{
                        loader: require.resolve("css-loader"),
                        options: {
                            url: true,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: require.resolve("postcss-loader"),
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                require("postcss-flexbugs-fixes"),
                                require("autoprefixer")({
                                    browsers: [
                                        ">1%",
                                        "last 4 versions",
                                        "Firefox ESR",
                                        "not ie < 9"
                                    ],
                                    flexbox: "no-2009"
                                }),
                                require("postcss-px2rem")({ remUnit: 100 })
                            ]
                        }
                    },
                    {
                        loader: require.resolve("less-loader"), // compiles Less to CSS
                        options: {
                            javascriptEnabled: true,
                            modifyVars: {
                                hd: "1px"
                            }
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml
        }),
        new webpack.NamedModulesPlugin(),
        //new webpack.DefinePlugin(env.stringified),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: "main.[hash:8].css"
        }),
      /* new WebpackParallelUglifyPlugin({
            uglifyJS: {
              output: {
                beautify: false, //不需要格式化
                comments: false //不保留注释
              },
              compress: {
                warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
                drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
                collapse_vars: true, // 内嵌定义了但是只用到一次的变量
                reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
              }
            }
          })  */ 
    ],

    optimization: {
        minimize: true
    }, 
    node: {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty"
    },
    performance: {
        hints: false
    }
};
