var webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['env', 'react', 'stage-2'] }
      },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader!autoprefixer-loader' },
      { test: /\.scss$/, exclude: /node_modules/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' }
    ]
  },
  devServer: {
    contentBase: SRC_DIR,
    hot: true
  }
};

module.exports = config;




// ----
// var webpack = require('webpack');
// var path = require('path');                // a useful node path helper library

// var config = {
//   entry: [
//     'webpack/hot/dev-server',
//     'webpack-dev-server/client?http://localhost:3000',
//     './src/main.js'
//   ],
//   externals: {
//     'cheerio': 'window',
//     'react/addons': true,
//     'react/lib/ExecutionEnvironment': true,
//     'react/lib/ReactContext': true
//   },
//   resolve: {
//     root: [
//       // allows us to import modules as if /src was the root.
//       // so I can do: import Comment from 'components/Comment'
//       // instead of:  import Comment from '../components/Comment' or whatever relative path would be
//       path.resolve(__dirname, './src')
//     ],
//     // allows you to require without the .js at end of filenames
//     // import Component from 'component' vs. import Component from 'component.js'
//     extensions: ['', '.js', '.json', '.jsx']
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'), // store the bundled output in dist/bundle.js
//     filename: 'bundle.js'                  // specifying file name for our compiled assets
//   },
//   module: {
//     loaders: [
//       // telling webpack which loaders we want to use.  For now just run the
//       // code through the babel-loader.  'babel' is an alias for babel-loader
//       { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
//     ]
//   }
// }

// module.exports = config;