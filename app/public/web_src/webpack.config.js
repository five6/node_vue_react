const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
let isDebug = false;
if (process.NODE_ENV == "development") {
    isDebug = true;
}
var plugins =[];
if(process.env.NODE_ENV ==="production"){
    plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: true
        })
    ]
}else {
    plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}
module.exports = {
    devtool: 'source-map', // or 'inline-source-map'
    devServer: {
        disableHostCheck: true
    },
    
    entry: {
        topics: path.resolve(__dirname, './src/entry/topics'),
        topic: path.resolve(__dirname, './src/entry/topicDetail'),
        albums: path.resolve(__dirname, './src/entry/albums')
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        path: path.join(__dirname, '../dist/react'),
        publicPath: '../dist/react'
    },
    
    resolve: {
        extensions: ['.web.js', '.jsx', '.js', '.json'],
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                // include: [
                //     path.join(__dirname, './src'),
                // ],
                query: {
                    // https://github.com/babel/babel-loader#options
                    cacheDirectory: false,
                    
                    // https://babeljs.io/docs/usage/options/
                    babelrc: false,
                    presets: [
                        'stage-2',
                        'es2015',
                        'react',
                    ],
                    plugins: [
                        ['import', {libraryName: 'antd-mobile', style: 'css'}],
                        ...isDebug ? ['transform-react-jsx-source'] : [],
                        ...isDebug ? ['transform-react-jsx-self'] : [],
                    ],
                },
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: isDebug,
                            modules: true,
                            localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                            minimize: !isDebug,
                            discardComments: {removeAll: true},
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                                autoprefixer({
                                    browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                                }),
                                    pxtorem({rootValue: 100, propWhiteList: []})
                            }
                        }
                    }
                ],
            },
        ]
    },
    plugins: plugins
    
}