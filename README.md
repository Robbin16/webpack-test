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
    - filename 将所有 js 文件输出为一个 js 文件
    - chunkFilename import()动态导入会产生 chunk 文件 chunk 文件名默认是[id].[output-filename].js
    - [id]在 filename 中 webpack 可以使用的变量
  - plugins 是个数组
    - HtmlWebpackPlugin template 选项 接收绝对路径的 path
      - title 需要在 html 中用 ejs 模板语法引用 <%= htmlWebpackPlugin.options.title %>
      - filename 指定输出的 html 文件名
      - templateParameters 中自定义 titleName 属性 在 html 中用 ejs 模板语法引用 <%= titleName %>
    - MiniCssExtractPlugin filename 指定分离 css 文件的名称 chunkFilename 在动态导入 js 中引入的 css 文件 需要在 chunkFilename 中命名
  - module
    - rules 选项本质就是 loader rules 里 use 选项是个数组里面要用到的 loader 都写在里面
    - loader 也是需要安装的 style-loader css-loader
    - style-loader 增加 html 的 style 标签，css-loader 是把 css 转化成 js
    - scss 处理需要 sass-loader 以及安装 sass 要在 js 文件中引入"style.scss" loader 顺序["style-loader","css-loader","sass-loader"]
    - mini-css-extract-plugin.loader 与 style-loader 功能相反，能单独分离 css 文件。顺序为[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
    - 常用 loader babel-loader ts-loader style-loader css-loader sass-loader MiniCssExtractPlugin.loader
