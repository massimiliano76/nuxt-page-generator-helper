const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === 'development'
const DEFAULT_LANG = 'en'

module.exports = {
  dev: isDev,

  modern: 'client',

  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },

  build: {

    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js'
    },

    postcss: {
      plugins: {
        'postcss-nesting': {},
        lost: {
          gutter: '15px',
          flexbox: 'flex',
          cycle: 'auto'
        }
      }
    },

    extend (config) {
      if (!isDev) {
        config.plugins.push(new BundleAnalyzerPlugin({
          reportFilename: resolve(`reports/webpack/${config.name}.html`),
          statsFilename: resolve(`reports/webpack/stats/${config.name}.json`),
          analyzerMode: 'static',
          generateStatsFile: true,
          openAnalyzer: false,
          logLevel: 'info',
          defaultSizes: 'gzip',
          statsOptions: 'normal'
        }))
      }
    }

  },

  router: {
    base: getBasePath(),
    prefetchLinks: true
  },

  modules: [
    [
      resolve(__dirname, '..'), {
        debug: true,
        dev: false,
        routesCache: false,
        pageExtend: '@/extends/PageBuild',
        adapter: require('./adapter/local-json'),
        ignoreRoutes: [
          'index',
          'page',
          'nested-page'
        ],
        nuxtI18n: {
          locales: [
            {
              code: 'en',
              iso: 'en'
            },
            {
              code: 'de',
              iso: 'de'
            }
          ],
          parsePages: true,
          defaultLocale: DEFAULT_LANG,
          strategy: 'prefix_except_default',
          seo: false,
          vueI18nLoader: false,
          vueI18n: {
            fallbackLocale: DEFAULT_LANG,
            messages: {
              en: require('./globals/locales/en.json'),
              de: require('./globals/locales/de.json')
            }
          }
        }
      }
    ]
  ]
}

function getBasePath () {
  return process.env.npm_config_base || '/'
}
