var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: ['./src/app']
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], include: path.join(__dirname, 'src'), exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!scss-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
    alias: {
      'pages': path.join(__dirname, '/src/dialogue/pages/'),
      'utils': path.join(__dirname, '/src/dialogue/utils/'),
      '__test_helper__': path.join(__dirname, '/src/__test__/helper/')
    }
  },


  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
