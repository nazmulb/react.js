var config = {
    entry: __dirname + '/main.js',

    output: {
        path: __dirname + '/build',
        publicPath: '/assets/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 8081
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;