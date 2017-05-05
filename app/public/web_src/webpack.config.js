const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
let isDebug =false;
if(process.NODE_ENV=="development"){
    isDebug = true;
}
module.exports = {
  devtool: 'source-map', // or 'inline-source-map'
  devServer: {
    disableHostCheck: true
  },

  entry: { 
    topic: path.resolve(__dirname, './src/entry/topic'),
    album: path.resolve(__dirname, './src/entry/album') 
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '../dist/'
  },

  resolve: {
    extensions: ['.web.js', '.jsx', '.js', '.json'],
  },

  module: {
    rules: [
            {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              include: [
                path.resolve(__dirname, './src'),
              ],
              query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: false,

                // https://babeljs.io/docs/usage/options/
                babelrc: false,
                presets: [
                  // A Babel preset that can automatically determine the Babel plugins and polyfills
                  // https://github.com/babel/babel-preset-env
                  // Experimental ECMAScript proposals
                  // https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
                  'stage-2',
                  // JSX, Flow
                  // https://github.com/babel/babel/tree/master/packages/babel-preset-react
                  'react',
                  // Optimize React code for the production build
                  // https://github.com/thejameskyle/babel-react-optimize
                ],
                plugins: [
                  // Adds component stack to warning messages
                  // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source
                  ...isDebug ? ['transform-react-jsx-source'] : [],
                  // Adds __self attribute to JSX which React will use for some warnings
                  // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-self
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
                    // CSS Loader https://github.com/webpack/css-loader
                    importLoaders: 1,
                    sourceMap: isDebug,
                    // CSS Modules https://github.com/css-modules/css-modules
                    modules: true,
                    localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                    // CSS Nano http://cssnano.co/options/
                    minimize: !isDebug,
                    discardComments: { removeAll: true },
                  },
                },
                 {
                      loader:'postcss-loader',
                      options: {
                          plugins: function () {
                              return [
                                  require('autoprefixer')
                              ];
                               autoprefixer({
                                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                                }),
                              pxtorem({ rootValue: 100, propWhiteList: [] })
                          }
                      }
                  }
              ],
            },
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // minChunks: 2,
      name: 'shared',
      filename: 'shared.js'
    }),
    new ExtractTextPlugin('[name].css')
  ]

}