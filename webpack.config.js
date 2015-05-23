var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9009' , // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  extensions: [
    '',
    '.jsx', '.js',
    '.json',
    '.html',
    '.css', '.styl', '.scss', '.sass'
  ],

  module: {
    loaders: [
      // Compile es6 to js.
      {
        test: /app\/.*\.jsx?$/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },

      { test: /app\/.*\.json$/, loader: 'json-loader' },

      // Styles
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.s(a|c)ss$/, loader: "style!css?localIdentName=[path][name]---[local]---[hash:base64:5]!postcss!sass" },

      // Fonts
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

    ],

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  },

  postcss: [
    require('postcss-local-scope'),
    require('autoprefixer-core')
  ],

  devtool: 'inline-source-map'
};
