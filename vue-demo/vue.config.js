const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const vConsolePlugin = require('vconsole-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

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
        target: process.env.VUE_APP_API_ROOT,
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
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
    config.when(process.env.NODE_ENV != 'production',
      config => {
        config.plugin('vconsole').use(vConsolePlugin, [{enable: true}]).end()
      }
    )
    config.when(process.env.ENV === 'production',
      config => {
        config.plugin('UglifyJsPlugin')
          .use(UglifyJsPlugin, [
            {
              uglifyOptions: {
                warnings: false,
                compress: {
                  drop_debugger: true,
                  drop_console: true
                },
                output: {
                  comments: false,
                  beautify: false
                }
              },
              sourceMap: false,
              parallel: true//使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
            }
          ])
          .end()
        config.plugin('gzip')
          .use(CompressionWebpackPlugin, [
            {
              filename: '[path].gz[query]',
              algorithm: 'gzip',
              test: /\.(js|css)$/,
              threshold: 10240,
              minRatio: 0.8
            }
          ])
          .end()
      }
    )


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
