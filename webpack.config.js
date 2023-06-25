const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['babel-loader'],
        exclude: '/node_modules',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@assets': path.resolve(process.cwd(), 'src/assets'),
      '@components': path.resolve(process.cwd(), 'src/components'),
      '@src': path.resolve(process.cwd(), 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
}
