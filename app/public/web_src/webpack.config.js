var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require('webpack-dashboard/plugin');
var isProduction;
var plugins;
if(process.env.NODE_ENV =="production"){
  isProduction = true;
  plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: false
        })
  ]
}else {
    var LiveReloadPlugin = require('webpack-livereload-plugin');
    plugins = [
      new LiveReloadPlugin({}),
      new webpack.HotModuleReplacementPlugin(),
    ];

}
module.exports = {
    devtool: isProduction ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
    entry:{
    	topic:[
    		'./entry/topic'
    	],
    	album:[
    		'./entry/album'
    	]
    },
    output:{
        path: path.resolve(__dirname, '../web'),
        filename: '[name].js',
        publicPath: '/static/'
    },
    plugins:plugins,
    module:{
    	loaders:[
    		{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:path.resolve( __dirname,"node_modules"),
				include:path.resolve( __dirname,"src")
			},
        {
          test:/\.css$/,
          use:[
              'style-loader',
              {
                  loader: 'css-loader',
                  options: {
                      importLoaders: 1
                  }
              },
              {
                loader:'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
              }
            ]
        },
       {
				test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }
    	]
    }
}