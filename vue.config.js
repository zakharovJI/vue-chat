const path = require('path');

module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/styles/main.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/symbols'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/symbols'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: filePath => path.basename(filePath, '.svg'),
      });
  },
};

function resolve(dir) {
  return path.join(__dirname, './', dir);
}
