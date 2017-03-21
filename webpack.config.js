var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080'
    },
    module: {
        loaders: [{
                test: /.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};
