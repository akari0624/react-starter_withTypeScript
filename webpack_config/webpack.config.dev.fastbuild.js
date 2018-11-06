'use strict';

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const WEBPACK_Config_Base = require('./webpack.config.base');

let __LOADERS_ARR;
if(process.env.NODE_ENV === WEBPACK_Config_Base.NODE_ENV_Keywords.TRANSPILE_WITH_BABEL){

  __LOADERS_ARR = WEBPACK_Config_Base.JS_TRANSPILE_LOADER_ARR_OPTIONS.TS_THEN_BABEL

}else{
  __LOADERS_ARR = WEBPACK_Config_Base.JS_TRANSPILE_LOADER_ARR_OPTIONS.ONLY_TS_LOADER
}

module.exports = {
  entry: WEBPACK_Config_Base.ENTRY_POINT,
  devtool: 'source-map',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: __LOADERS_ARR,
        options: {
          transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
        },
        exclude: /node_modules/
      },

      WEBPACK_Config_Base.ENFORCE_SOURCE_MAP_LOADER,
      WEBPACK_Config_Base.CSS_LOADER_CONFIG,
      {
        use: 'url-loader?limit=8192',
        test: /\.(svg)$/
      }, {
        test: /\.(png|jpg|gif|mp4|ogg|svg|css|ttf|woff|woff2|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/'
            }
          }
        ]

      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '../', 'index.html'),
      filename: './index.html'
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
    
  ],
  resolve: WEBPACK_Config_Base.RESOLVE_SETTING_CONFIG,
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../'),
    port: 9999
  }
};
