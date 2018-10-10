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
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};

module.exports = config;