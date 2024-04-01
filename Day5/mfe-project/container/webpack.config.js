/* this is a generic version of the config file. To use this file:
1 - change the port used for development to a unique number
2 - change the name and exposes sections of the ModuleFederationPlugin
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 3000,
        historyApiFallback : {
            index : '/index.html'
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
plugins : [
        new HtmlWebpackPlugin({
            template : './public/index.html'
        }),
        new ModuleFederationPlugin({
            name : 'container',
            remotes : {
                payments_list: 'payments_list@http://localhost:3001/remoteEntry.js',
                static_pages: 'static_pages@http://localhost:3002/remoteEntry.js'

            },
            shared : ['react', 'react-dom', 'css-loader','ts-loader']
        }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
