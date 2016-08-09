var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/main.js') 
  ],
  output: {
    publicPath: "http://127.0.0.1:8080/public",
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ], 
  module: {
    loaders: [
      { 
        test: /\.js|jsx$/, 
        loaders: ['react-hot'], 
        include: path.join(__dirname, 'app') 
      },
      {
        test: /\.js|jsx$/,
        loader: 'babel',
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
    ]
  }
};

module.exports = config;
