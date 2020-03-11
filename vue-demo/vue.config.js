const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const vConsolePlugin = require('vconsole-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, './', dir)
}
// 压缩js
const compress = new CompressionWebpackPlugin(
  {
    filename: info => {
      return `${info.path}.gz${info.query}`
    },
    algorithm: 'gzip',
    threshold: 10240,
    test: new RegExp(
      '\\.(' +
      ['js'].join('|') +
      ')$'
    ),
    minRatio: 0.8,
    deleteOriginalAssets: false
  }
)
module.exports = {
  publicPath: './',
  filenameHashing: true,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'https://dev.inspurhealth.com',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  // 配置别名
  chainWebpack: (config) => {
    config.when(process.env.NODE_ENV != 'production',
      config => {
        config.plugin('vconsole').use(vConsolePlugin, [{enable: true}]).end()
      }
    )
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all'
    })

    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('static', resolve('src/static'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
  },
  // 压缩代码
  configureWebpack: {
    plugins: [compress]
  },
  css: {
    extract: true,
    loaderOptions: {
      // pass options to sass-loader
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `
               @import "@/assets/css/variable.scss"; 
               @import "@/assets/css/common.scss";
               @import "@/assets/css/mixin.scss";
              `
      }
    }
  },
}
