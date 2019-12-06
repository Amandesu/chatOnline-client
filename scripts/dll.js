const webpack = require("webpack");
const config = require("../config/webpack.dll");
compiler = webpack(config);


compiler.run((err, stats) => {
    
    console.log(11)
})