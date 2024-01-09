const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'template.js'),
    devtool: "eval-source-map",
    module: {
        rules: [
          {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
          },
          {
             test: /\.(css)$/,
             use: ['MiniCssExtractPlugin.loader','css-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        hot: true
    },
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
};
