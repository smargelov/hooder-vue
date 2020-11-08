module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            {
              use: ['raw-loader', 'pug-plain-loader']
            }
          ]
        }
      ]
    }
  },
  css: {
      loaderOptions: {
          sass: {
              additionalData: `@import "~@/assets/styles/main.sass";`
          }
      }
  }
}