ES6模块化，浏览器暂时不支持
ES6语法，浏览器并不完全支持
压缩代码、整合代码、让页面更快的跑起来


前端代码为什么要进行构建和打包？

module、chunk、 bundle分别是什么意思？ 有何区别？

loader、plugin的区别？

webpack的懒加载如何实现？

webpack常见性能优化？

bable-runtime 、bable-polyfill的区别？



webpack5主要是针对内部效率的优化，对于webpack4，在使用上 没有太多的改动。

区别：
webpack-dev-server 4是： webpack-dev-server， 5是webpack server 
CleanWebpackPlugin 改成了 { CleanWebpackPlugin }
所有的loader:[] 的形式全部改成了 use的是形式
output的 contentHash的H要改成小写h，不能大写 不然会报错 


webpack的基本配置和merge？
  基本配置 entry、modules、 plugin、 mode、devserver、loader
  启动 本地服务： 需要安装webpack-dev-server // 设置代理啊、默认压缩、webpack跨域设置proxy

处理jsx、tsx babel-loader 处理es6 
一般css-loader是从后往前的 
图片： url-loader/ 如果是小于5kb，

