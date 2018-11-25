'use strict'

const path = require('path');

module.exports = {

  ENTRY_POINT: [
    '@babel/polyfill', path.join(__dirname, '../', './src/index.tsx')
  ],

  JS_TRANSPILE_LOADER_ARR_OPTIONS:{
    ONLY_TS_LOADER:[{loader:'ts-loader'}],
    TS_THEN_BABEL:[{loader:'babel-loader'},{loader:'ts-loader'}],
  },

  CSS_LOADER_CONFIG: {
    use: [
      {
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true
        }
      }
    ],
    test: /\.(css|less)$/

  },

  RESOLVE_SETTING_CONFIG: {
    modules: [
      path.join(__dirname, '../', 'node_modules'),
      'node_modules'
    ],
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },

  ENFORCE_SOURCE_MAP_LOADER: {
    enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' 
  },

  NODE_ENV_Keywords: {

    TRANSPILE_WITH_BABEL: 'withBabel'

  }

}

