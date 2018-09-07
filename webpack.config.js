const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: '#sourcemap',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.html$/,
                use: [{loader: "html-loader"}]
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use:[ 'style-loader', MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.json$/,
                use:[{loader: "json-loader"}]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        })

    ]

};