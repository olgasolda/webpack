const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log('IS DEV:', isDev);
console.log('IS PROD:', isProd);

module.exports = {
  context: path.resolve(__dirname, 'src/assets'),
  mode: 'development',
  entry: {
    main: './index.js',
    stat: './statistics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js',
  },
  target: 'web',
  devServer: {
    hot: false,
    port: 4200
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/assets'),
    }
  },
  optimization: {
    splitChunks: {
    chunks: 'all'
    },
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
      {
      from: path.resolve(__dirname, 'src/assets/favicon.png'),
      to: path.resolve(__dirname, 'dist'),
      }
      ]
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash].css'
        })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext]'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
        // generator: {
        //   filename: 'assets/fonts/[name].[hash][ext]'
        // }
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
        },
        {
          test: /\.csv$/,
          use: ['csv-loader']
          }
   ]
  }
};