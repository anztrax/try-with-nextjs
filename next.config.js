const withCss = require('@zeit/next-css');
const compose = require('next-compose');

const withCssConfig = {};

let config = compose([
  [withCss, withCssConfig],
  {
    webpack : (config, options) => {
      const { isServer } = options;

      config.module.rules.push({
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: './',
            outputPath: 'static/css/',
            name: '[name].[ext]'
          }
        }
      });

      return config
    }
  }
]);

module.exports = config;