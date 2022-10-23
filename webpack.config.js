const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = (env) => {
  const isDevelopment = env.development
  
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      additionalData: `@import 'common/styles/index.scss';`,
    },
  };
  
  const styleLoader = isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader;
  
  return {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
      rules: [
        // ts/js:
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },

        // css/scss
        {
          test: /\.scss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            styleLoader,
            'css-loader',
            sassLoader,
          ],
        },
        {
          test: /\.module.(s(a|c)ss)$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  localIdentName: isDevelopment ? '[path]:[local]--[hash:base64:5]' : '[hash:base64:5]',
                },
              }
            },
            sassLoader,
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: [path.resolve('./src'), 'node_modules'],
      alias: {
        '@common': resolvePath('./src/common'),
        '@components': resolvePath('./src/components'),
        '@containers': resolvePath('./src/containers'),
        '@ducks': resolvePath('./src/ducks'),
        '@public': resolvePath('./src/public'),
        '@routers': resolvePath('./src/routers'),
        '@store': resolvePath('./src/store'),
        '@views': resolvePath('./src/views'),
      }
    },

    output: {
      filename: 'bundle.js',
      path: resolvePath('dist'),
    },

    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      })
    ]
  };
};