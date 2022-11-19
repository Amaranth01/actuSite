const development = {
    mode: 'development',
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', {
                    loader: "css-loader",
                    options: {
                        import: true,
                        sourceMap: true,
                    }
                },
                ],
            },
            {
                //règle fichier image
                test: /\.(png|jpe?g|gif)$/i,
                type: 'assets/resource',
                generator: {
                    filename: 'image/[name][ext]'
                }
            },
        ]
    },
    optimization: {
        minimize: false,
    }
}

module.exports = development;