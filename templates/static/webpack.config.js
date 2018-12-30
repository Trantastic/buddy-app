const webpack = require('webpack');
const resolve = require('path').resolve;
const HtmlWebPackPlugin = require("html-webpack-plugin");



const config = {
    devtool: 'eval-source-map',
    entry: __dirname + '/js/index.jsx',
    output: {
        path: resolve('../public'),
        filename: 'bundle.js',
        publicPath: resolve('../public')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test:/\.jsx?/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader?modules'
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin()
    ]
};


module.exports = config;