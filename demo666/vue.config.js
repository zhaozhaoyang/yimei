var appData = require('./data.json');

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    lintOnSave: false,
    // runtimeCompiler: false, //关键点在这  
    // // 调整内部的 webpack 配置。
    // // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    // chainWebpack: () => {},
    // configureWebpack: () => {},
    // // 配置 webpack-dev-server 行为。
    devServer: {
      open: false,  //自动掉起浏览器
      host: '0.0.0.0',
      port: 8080,
      https: false,
      hotOnly: false,
      // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
      proxy: null, // string | Object
      before: app => {
        app.get('/api/goods',function(req,res){
          res.json({errno: 0,data:appData.goods})
        })
      }
    }
  }