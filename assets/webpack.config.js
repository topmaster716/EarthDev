const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const Visualizer = require('webpack-visualizer-plugin');

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
    "app":  glob.sync('./vendor/**/*.js').concat(['./js/app.js'])
  },

  // optimization of assets (only in production)
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../priv/static/js'),
    publicPath: "/"
  },
  // Instructs webpack how to load files
  module: {
    rules: [
      // load js/jsx assets 
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // load css assets
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      // load sass assets
      // {
      //   test: /\.sass$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },

      //load img assets 
      // {
      //   test: /\.(png|jpe?g|svg)$/i,
      //   exclude: /node_modules/,
      //   loaders: [
      //     'file-loader?name=images/[name].[ext]',
      //     'file-loader?name=images/favicons/[name].[ext]'
      //   ]
      // },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'images/'
      //       }
      //     }
      //   ]
      // },
      //load fonts assets
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../fonts'
            }
          }
        ]
      }
    ]
  },

  plugins: [
  // new CompressionPlugin({  
  //     asset: "[path].gz[query]",
  //     algorithm: "gzip",
  //     deleteOriginalAssets: false,
  //     test: /\.js$|\.css$/,
  //     // compress if size is bigger than 10240 bytes
  //     threshold: 10240,
  //     // compress if size is compressed better than 0.8 ratio
  //     minRatio: 0.8
  //   }),
    // creates visualization of files in root
    new Visualizer({
      filename: '../stats.html'
    }),
    new MiniCssExtractPlugin({ filename: '../css/app.css' }),
    new CopyWebpackPlugin([{ from: 'static/', to: '../' }])
  ]
});
