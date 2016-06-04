const webpack = require('webpack');
const path = require('path');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], 
    singleRun: true, 
    frameworks: [ 'mocha' ], 
    
    files: [
      "tests/*_spec.js",
    ],
    
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],

    preprocessors: {
      './src/**/*': [ 'webpack', 'sourcemap' ],
      './tests/*.js' : ['webpack', 'sourcemap']
    },
    
    reporters: [ 'dots' ], 
    
    webpack: { 
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },

      module: {
        loaders: [
          { test: /\.js$|\.jsx$/, loader: 'babel', include: [path.resolve(__dirname, 'tests')] },
          { test: /\.json$/, loader: 'json' },
        ],
      },

    },

    webpackServer: {
      noInfo: true 
    }
  });
};

