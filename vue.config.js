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
              additionalData: `@import "~@/assets/styles/main.sass"`
          }
      }
  },
    chainWebpack: (config) => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = 'MyApp title';
            args[0].meta = {viewport: 'width=device-width,initial-scale=1,user-scalable=no'};

         return args;
    })
}

}