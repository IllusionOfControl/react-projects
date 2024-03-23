const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: '[name]_[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/dist"),
        },
        port: 8080,
        open: true
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:[["@babel/preset-react", {"runtime": "automatic"}]]
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CopyPlugin({
            patterns:[
                {from: 'public/manifest.json', to: "manifest.json"},
                {from: 'public/robots.txt', to: "robots.txt"}
            ]
        })
    ],
};