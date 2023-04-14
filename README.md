- npm init 初始化项目
- src dist package.json package-lock.json 文件夹平级
  - src 中有 index.html index.js index.css

* webpack.config.js
  - module.exports 导出配置
  - entry 入口 js
    - 可以是一个数组，把很多个 js 打包成一个 js 但很多个 js 都是相互隔离的
    - 可以是一个对象，对象{index: {import:"./src/index.js",filename:"app.js",dependOn:"react"}}
    - dependOn 可以跟 entry 对象索引的 key,也可以直接写"react",也可以用数组["react","redux"]
  - output 不写默认 dist 文件夹 输出 main.js 文件
    - path path 必须是绝对路径
    - publicPath 替换的是 html 中的 script 标签和 link 标签的地址，实际是因为 script 标签不一定是相对路径，通常 js css 等静态文件都放在 cdn 上，url 比如"http://www.cdn.com/assets/"
  - plugins 是个数组
    - HtmlWebpackPlugin template 选项 接收绝对路径的 path
  - module
    - rules 选项本质就是 loader rules 里 use 选项是个数组里面要用到的 loader 都写在里面
    - loader 也是需要安装的 style-loader css-loader
    - style-loader 增加 html 的 style 标签，css-loader 是把 css 转化成 js
