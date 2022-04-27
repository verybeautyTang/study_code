const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename:'bundle',
        path: path.resolve(__dirname , 'dist')
    },
    watch: true, // 文件监听
    watchOptions: {
        aggregateTimeout: 600,
        ignored: /node_modules/,
        poll: 5000,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env'], /** 资源解析：增加ES6的babel preset配置  */
                    }
                }
            },
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use: ['style-loader','css-loader', 'less-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => {
                            'autoprefixer'
                        }
                    }
                }
                ], 
            },
            { 
                test: /\.txt$/,
                use: 'raw-loader'
            },
        ]
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: 'index.html',
            chunks: ['index'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
                },
                default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
                },
            },
        }
    }
}