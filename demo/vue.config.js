// vue.consfig.js 是vue-cli脚手架创建项目的配置文件
// vite.config.ts是vite创建项目的配置文件
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭严格模式
  // true表示严格模式
  lintOnSave: false,
  // 设置路径
  publicPath: '/baishan/',
  // 开启服务器
  devServer: {
    // 设置端口号
    port: 10010,
    host: 'localhost',
    // 项目运行起来自动打开浏览器
    open: true,
    // 专门配置跨域代理

    // 这种方法叫做反向代理
    // proxy:{

    // http://m.maoyan.com/ajax/movieOnInfoList",  // 代理的接口
    // "/ajax": {
    //   // 想要代理的跨域接口的前缀
    //   target: "http://m.maoyan.com",
    //   // 允许跨域
    //   changeOrigin: true
    // },
    // }
  }

})
