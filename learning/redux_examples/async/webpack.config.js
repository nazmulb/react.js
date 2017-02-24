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
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    }
};

module.exports = config;