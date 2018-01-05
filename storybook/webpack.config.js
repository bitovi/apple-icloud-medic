const path = require('path');
const ModletResolver = require('./assets/modlet-resolver');

const systemLoader = path.resolve(__dirname, './assets/systemjs-loader.js')

module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.resolve.alias = {
    '@public': path.resolve(process.cwd(), './public'),
    '@root': path.resolve(process.cwd(), './')
  };

  storybookBaseConfig.resolve.plugins = [
    ModletResolver
  ];

  // ensure CSS and fonts are loaded properly
  storybookBaseConfig.module.rules.push({
    // Allows for systemjs-style inline loader syntax to be
    // converted to to webpack-style inline loader syntax.
    test: /\.js$/,
    loader: systemLoader,
    exclude: [
      path.resolve('node_modules')
    ],
    options: {
      loaderMap: {
        'systemjs-plugin-text': 'raw-loader'
      }
    }
  }, {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader']
  }, {
    test: /\.less$/,
    loaders: ["style-loader", "css-loader", {
      loader: "less-loader", options: {
        noIeCompat: true
      }
    }]
  }, {
    test: /\/fonts\/.+\.(ttf|eot|woff|woff2|svg)$/,
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]',
    }
  }, {
    test: /\.(jpe?g|png|gif)$/i,
    loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
        gifsicle: {
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        // Specifying webp here will create a WEBP version of your JPG/PNG images
        webp: {
          quality: 75
        }
      }
    }]
  });

  // Return the altered config
  // console.log(storybookBaseConfig);
  return storybookBaseConfig;
};
