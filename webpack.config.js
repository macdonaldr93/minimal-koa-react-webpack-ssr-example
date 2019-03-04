const path = require('path');
const nodeExternals = require('webpack-node-externals');

const buildPath = path.resolve(__dirname, 'build');

const client = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: buildPath,
    filename: 'public/client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

const server = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: './src/server.js',
  externals: [nodeExternals()],
  output: {
    path: buildPath,
    filename: 'server.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' }
      }
    ]
  }
};

module.exports = [client, server];
