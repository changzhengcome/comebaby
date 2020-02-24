## vue-cli3项目搭建步骤
node >= 8.9 
全局安装vue
npm install -g @vue/cli
创建项目
vue create vue-demo
* node_modules  文件夹  项目依赖(对webpack进行了封装)
* public 文件夹
1.favicon.ico  是 网站图标
2.index.html  页面入口文件
* src 文件夹
  main.js  入口js
  assets  存放静态文件
  components 存放公用组件
  App.vue 入口vue文件
* .eslintrc.js 配置
* .gitignore 指定文件无需提交到git上
*  balel.config.js 使用一些预设
* package.json 项目描述及依赖
* package-lock.json 版本管理使用的文件
.运行命令行

```npm run dev``` // 开发环境

```npm run test``` // 测试环境

```npm run build``` // 正式环境打包

```npm run build:test```  // 测试环境打包
在vue项目中，和后台交互获取数据这块，我们通常使用的是axios库，它是基于promise的http库，可运行在浏览器端和node.js中。他有很多优秀的特性，例如拦截请求和响应、取消请求、转换json、客户端防御XSRF等
 npm install axios --save
* 安装vuex
npm install vuex -S
在assets下新建如下文件，具体的代码自行进行配置

    * common.scss 主要存放公共的样式

    * mixin.scss 存放混入样式

    * reset.scss 存放重置样式。

    * variable.scss 存放变量
在app.vue中引入reset.scss文件，完成后，样式即可进行全局调用了。

    移动端适配配置
 npm i px2rem --save-dev
使用vant 框架编写界面
npm i babel-plugin-import -D 按需要引入组件

