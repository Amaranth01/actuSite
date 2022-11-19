const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const production = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        //style-loader injecte le CSS dans le head
                        //
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
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
                type: 'asset/resource',
                generator: {
                    filename: 'image/[name][ext]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
    ],
}

module.exports = production;