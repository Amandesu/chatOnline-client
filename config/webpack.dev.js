"use strict";

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development";
}
const webpack = require("webpack");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const path = require("path");
const paths = require("./paths");

const fs = require("fs");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: [
        paths.appIndexJs,
        require.resolve("react-dev-utils/webpackHotDevClient")
    ],
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
        filename: "static/js/bundle.js",
        chunkFilename: "static/js/[name].chunk.js",
        publicPath: "./",
        devtoolModuleFilenameTemplate: (info) =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")
    },
    resolve: {
        // This allows you to set a fallback for where Webpack should look for modules.
        // We placed these paths second because we want `node_modules` to "win"
        // if there are any conflicts. This matches Node resolution mechanism.
        // https://github.com/facebookincubator/create-react-app/issues/253
        modules: ["node_modules", paths.appNodeModules].concat(
            // It is guaranteed to exist because we tweak it in `env.js`
            (process.env.NODE_PATH || "").split(path.delimiter).filter(Boolean)
        ),
        extensions: [".js", ".json", ".jsx"],
        alias: {
            ROOT:path.resolve(process.cwd(), "src"),
            
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
                    /\.png$/
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
                include: paths.appSrc,
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
                use: [
                    require.resolve("style-loader"),
                    {
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
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'process.env.MOCK': !!process.env.MOCK?JSON.stringify(process.env.MOCK):"false"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            templateParameters: {
                'foo': ''
              },
        }),
        new webpack.NamedModulesPlugin(),
        //new InterpolateHtmlPlugin(),
        new webpack.DefinePlugin({
            DEVELOPMENT: JSON.stringify(true),
            PRODUCTION: JSON.stringify(false)
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty"
    },
    // Turn off performance hints during development because we don't do any
    // splitting or minification in interest of speed. These warnings become
    // cumbersome.
    performance: {
        hints: false
    }
};
