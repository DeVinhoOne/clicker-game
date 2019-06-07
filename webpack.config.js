const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
   module: {
      rules: [
         {
            test: /\.html$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'html-loader'
               }
            ]
         },
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader'
               }
            ]
         },
         {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
                  options: {
                     importLoaders: 2,
                     modules: true,
                     localIdentName: '[name]__[local]__[hash:base64:5]'
                  }
               },
               {
                  loader: 'postcss-loader',
                  options: {
                     ident: 'postcss',
                     plugins: () => [
                        autoprefixer()
                     ]
                  }
               },
               {
                  loader: 'sass-loader'
               }
            ]
         },
         {
            test: /\.(png|jpe?g|svg)$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 8192
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         filename: './index.html'
      })
   ],
   resolve: {
      extensions: ['.js', '.jsx']
   }
}