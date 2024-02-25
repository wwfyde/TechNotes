# Vue框架

> Vue is a progressive Javascript Framework用于构建用户界面
>
> 学习目标: 
>
> - 理解vue的基本用法思想
> - 特点,特性
> - 语法
> - 用法: 数据显示, 控制标签属性, 绑定事件

*避免用传统的思维去开发前端, 应该选择工程思维, 项目思维来开发.*

# 简介

宣传语: **只要数据变, 页面视图变**



Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

Vue.js可以作为一个js库来使用，也可以用它全套的工具来构建系统界面，这些可以根据项目的需要灵活选择，所以说，Vue.js是一套构建用户界面的渐进式框架。

Vue的核心库只关注**视图层**，Vue的目标是通过尽可能简单的 API 实现响应的数据绑定，在这一点上Vue.js类似于后台的模板语言。

Vue也可以将界面拆分成一个个的组件，通过组件来构建界面，然后用自动化工具来生成单页面(SPA - single page application)系统

## 理解vue.js

一个前端的函数库, 框架

jquery 和vue.js的功能本质上是一样的  React.js

vue: 双向绑定

监控数据和函数是否有发生变化

**mvvm框架**

m: model 数据模型

v: view 用户操作层

vm:viewmodel 业务逻辑层

```js
<script src="../js/jquery.js"></script>
<script src="../js/vue.js"></script>
<script>
    console.log($) // function
    console.log(typeof $)
    console.log($.ajax)  // function
    console.log(typeof $.ajax)

    console.log(Vue)  // function
    console.log(new Vue) // 实例化一个 Vue 对象
    console.log(typeof Vue)  // function
    console.log(typeof new Vue)  // object
</script>
```



## 设计哲学&核心思想

方法改变值, 改变值触发响应

数据怎么准备一完成特定的需求	

js, jq特别像面向过程编程, 而vue则只考虑数据为核心

**创建Vue应用, 数据和行为分离,使得被接管的对象可响应**



```html

```



```js
<div id="app">
  {{ message }} 
</div>
//实例化的vue应用本质上是一个javascript对象
window.onload = function(){
    var app = new Vue({
      el: '#app', //element, vue要控制的标签
      data: {  //data存储vue的数据
        message: 'Hello Vue!'
      }
      methods:{
        fnSendMsg: function(){
        alert('数据')
    },
    })	
}
```

我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是**响应式的**。我们要怎么确认呢？打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 `app.message` 的值，你将看到上例相应地更新。

## Vue特性

- Vue绑定的元素节点,将被Vue完全掌控该元素节点(当前标签,和当前标签下的所有内容)

## Vue.js基本概念和用法

### Vue实例

每个 Vue 应用都是通过实例化一个新的 Vue对象开始的：

```js
window.onload = function(){
    var vm = new Vue({
        el:'#app',
        data:{message:'hello world!'}
    });
}    
......

<div id="app">{{ message }}</div>
```

其中，el属性对应一个标签，当vue对象创建后，这个标签内的区域就被vue对象接管，在这个区域内就可以使用vue对象中定义的属性和方法。

### 数据与方法

当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其data对象中能找到的所有的属性。当这些**属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值**。还可以在Vue实例中定义方法，**通过方法来改变实例中data对象中的数据，数据改变了，视图中的数据也改变**。

```js
window.onload = function(){
    var vm = new Vue({
        el:'#app',
        
        //数据层
        data:{message:'hello world!'},
        
        //方法层
        methods:{
            fnChangeMsg:function(){
                this.message = 'hello Vue.js!';
            }
        }
    });
}    
......

<div id="app">
    <p>{{ message }}</p>
    <button @click="fnChangeMsg">改变数据和视图</button>
</div>
```

## 核心思想

增量开发,渐进式开发, 只关注视图层, vue应用 组件化开发, 

使用模板语法进行解析和渲染

使用 `Vue()` 类来实例化应用, 该应用的特性时, 实时相应和实时渲染的

### 开发思路

- 

### 深入响应式原理

数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。这使得状态管理非常简单直接，不过理解其工作原理同样重要，这样你可以避开一些常见的问题。在这个章节，我们将研究一下 Vue 响应式系统的底层的细节。

### HTML + Script 架构

### Template + Script + Style 架构	

# 编程风格

基于配置, 属性和方法

先声明, 再注册, 再使用

先安装, 在引入, 在注册, 在挂载, 再使用

# 大佬建议

状态变更,置于`mutation`中, 这样devtools 会有记录, 不建议放在 `actions`中

打好基础

勤能补拙

# 生态工具

> 更多配置移步到 [环境配置](计算机环境配置.md)

Vue项目所需要用到的周边技术, 很多都是官方实现



- vue-cli
- axios
- vuer-outer: 路由管理工具
- vuex: 动态管理器， 状态管理
- dev-tools: 浏览器调试插件
- vue-loader: webpack载入器
  - less less-loader
- Prettier: 代码格式化工具
- eslint-plugin-vue - [链接](https://eslint.vuejs.org/): 只能提示插件
- webpack
  - imports-loader

```shell
@vue/cli

@vue/cli-service

@vue/cli-plugin-babel

@vue/cli-plugin-eslint

@vue/cli-plugin-unit-jest

@babel/core @babel/cli  # 语法编译器

@vue/eslint-config-standard

@vue/cli-init
```

```shell
npm install -g --save-dev @babel/core @babel/cli
```

## Vuex

### 基本介绍

Vuex是一种状态管理模式, 

### 应用场景

动态注册响应式数据, 需要命名空间来管理数据

### 优势

官方组件

不与组件强相关, 可以独立的提供一些数据	

Vuex提供数据, 驱动component, 视图,, 然后视图通过dispatcher派发给action, 

### 核心概念及底层原理 

## Vue Router

用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：

### HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

JavaScript

```js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```



### 使用方式

- 提供一个路由配置表, 不同URL对应不同组件的配置  `const routes = []`
- 初始化路由实例 `new VueRouter()`
- 挂载到Vue实例 
- 提供一个路由占位, 用来挂载URL匹配到的组件

### \*Nuxt 单页面痛点解决方案

## Vetur

- 语法高亮
- 标签补全、模板生成
- Lint检查
- 格式化

## ESlint

代码规范, 

错误检查

## Prettier

格式化， 代码美化

## Vue Devtools

> 浏览器插件, chrome

- 集成Vuex
- 可远程调试
- 性能分析

## webpack - 一切皆模块

前端资源模块化管理和打包工具, 将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源

webpack是一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。 webpack 的核心是 依赖分析,把依赖分析出来了，其他都是细枝末节了

```shell
yarn global add webpack
```



## babel - JavaScript编译器

Babel 是一个 JavaScript 编译器。Babel 通过语法转换器支持最新版本的 JavaScript 语法

## axios

使用 `request.js` 进行二次封装



## mock - 假数据	

vue-cli 配置参考 `devServer` 代理



[webpack](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy)

有时你不想代理所有的请求。可以基于一个函数的返回值绕过代理。

在函数中你可以访问请求体、响应体和代理选项。必须返回 `false` 或路径，来跳过代理请求。

例如：对于浏览器请求，你想要提供一个 HTML 页面，但是对于 API 请求则保持代理。你可以这样做：

**webpack.config.js**

proxyOptions参数不需要

```javascript
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        //mock数据拦截
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return '/index.html';
          } else {
                        const name = req.path
                            .split("/api/")[1]
                            .split("/")
                            .join("_");
                        const mock = require(`./ mock/${name}`)
                        const result = mock(req.method);
                        return res.send(result);
        }
      }
    }
  }
};
```

## jsx

[官方链接](https://github.com/vuejs/jsx)

```shell
yarn add @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props
```



## **Ant Design Vue**

### nprogress - 切换路由时的友好提示

做加载动画

### lodash

### cross-env

解决mock 环境的问题

```shell
yarn add cross-env
```

```shell
>> package.json >> scripts >> 
# 添加该脚本
"serve:no-mock": "cross-env MOCK=none vue-cli-service serve"

# 启动环境方式
yarn run serve:no-mock
```

## Github

### CI持续集成

travis-ci.org  [推荐]

circleci.org 

### 单测覆盖率

codecov.io

coveralls.io

### 文档管理

文档托管

github.io

gitee.io

netlify.com

### issue管理

- https://github.com/apps/close-issue-app
- issue-helper (https://vuecomponent.github.io/issue-helper/
- https://github.com/dessant/lock-threads

# 环境搭建

> 移看 [计算机配置技巧](计算机配置技巧.md)

## Vscode

- 

### 配置修改

```js
{
    "sync.gist": "41d1eb42858f586358e65c4253584862",
    "workbench.statusBar.visible": true,
    "workbench.colorTheme": "wwfyde",
    "editor.fontFamily": "'Droid Sans Mono',Consolas, 'Courier New', monospace",
    "editor.fontSize": 16,
    "files.autoSave": "afterDelay",
    "files.associations": {
        "*.html": "html"
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue",
        "html"
    ],
    "emmet.includeLanguages": {
        "vue-html": "html",
        "javascript": "javascriptreact",
        "vue": [
            "html",
            "javascript"
        ],
        "plaintext": "pug"
    },
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "vetur.format.options.tabSize": 4,
    "workbench.iconTheme": "vscode-icons",
    "eslint.nodePath": "C:\\Users\\wwfyde\\AppData\\Roaming\\npm\\node_modules",
    "eslint.probe": [
        "typescript",
        "typescriptreact",
        "vue",
        "markdown",
        "html",
        "vue-html"
    ],
    "vetur.format.defaultFormatterOptions": {},
    "eslint.codeActionsOnSave.mode": "problems",
    "eslint.packageManager": "yarn",
    "editor.detectIndentation": false,
    "[vue]": {
        // "editor.defaultFormatter": "octref.vetur"
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "html.autoClosingTags": false,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "vetur.format.styleInitialIndent": true,
    "[javascript]": {
        // "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "eslint.alwaysShowStatus": true,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.validation.script": false,
    "eslint.codeAction.disableRuleComment": {},
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    "eslint.lintTask.enable": true,
    "eslint.options": {
        "extensions": [
            ".js",
            ".jsx",
            ".vue"
        ]
    },
    "emmet.triggerExpansionOnTab": true,
    "workbench.activityBar.visible": true,
    "workbench.startupEditor": "newUntitledFile",
    "window.menuBarVisibility": "default",
    "editor.renderControlCharacters": true,
    "npm.packageManager": "yarn",
    "npm-intellisense.importQuotes": "\"",
    "npm-intellisense.importLinebreak": "",
    "open-in-browser.default": "chrome",
    "vetur.validation.template": false,
    "eslint.format.enable": true,
    "prettier.packageManager": "yarn",
    "files.eol": "\n",
}
```

# 工程思想

工程化

# 核心思想

组件化

- 数据驱动: DOM是通过数据来映射的, 数据改变的时候, 视图才会改变
  - **这是Vue的核心思想**
  - 没有特殊情况, 不要去直接操作DOM





# **核心概念**

- 组件 :万物皆属性 : options / define
  - 小型的一个独立的可以复用的*UI模块*
- 应用实例
    - const App =
    - App 称之为实例
- 应用
    - app = Vue.createApp(App)
- 组件实例(实例)
    - vm = app.mount('#app')
    - 一般提及到的实例指的就是组件实例
- 属性:props: 动态属性
  - 原生属性: attribute
  - 特殊属性 :  Vue提供
- 事件
- 插槽
- 双向绑定: model(数据) < - > view(视图) 
- **单向数据流**: model(改变) -> view   model 更新 view
  - Vue是单向数据流, 双向绑定不过是语法糖
- Virtual DOM
  - Jquery : 事件Event直接操纵 Element元素
  - Vue增加了一个数据中间层, 然后决定要不要触发更新, 事件不再直接操纵DOM, 而是通过事件改变数据, 数据然后再映射到真实的DOM, 这样的功能是有Vue底层去帮我们实现的
  - 数据的更新就会导致DOM的更新, 如何尽可能高效的去更新DOM呢?, 操作DOM是一件非常耗性能的事情, 
  - 数据(state) + 模板(template) : 生成了一个类似于DOM的数据结构, 然后查找两个数据结构的差别
  - 基本不会出现跨层级的节点移动, 新算法 只比对相同层级的节点
- key属性
- 数据来源: 
  - 来自于父元素的属性
  - 来自于组件自身的状态 data
  - 来自组件管理器 如 vuex, Vue.observable
- 状态(state) 和 属性 (props)
  - 状态是组件自身的数据
  - 属性是来自父组件的数据
- 响应式更新:
  - 条件触发了菜户更新, 最大程度的减少DOM操作
- 计算属性
- 侦听器
- 二者区别
  - 计算属性能做到的, 侦听属性都能做, 反之则不行
- 如何选择
  - 能用计算属性(computed)的尽量用计算属性(computed), 
- 防抖改造:
  - 直到用户停止输入超过500ms后才, 更新fullname
- 生命周期的应用场景
- 函数式组件: 就是一个方法
  - 是一个js文件
  - 组件定义的时候, 声明一个 `functional:true` 就是一个函数式组件
- 临时变量
  - 使用函数式组件,实现临时变量需求
  - 秒杀倒计时
- Vue指令的本质
  - **指令的本质是语法糖, 是一个标志位**
  - **编译阶段 从template 编译到 render函数的时候, 会把这些语法糖,编译成js的代码**
  - jsx不支持和render函数并不支持render函数
  - 指令: v-for v-on v-model
  - v-text:设置和覆盖标签内的文本
  - v-html 生产环境中 *不推荐*
  - v-show :显示隐藏, 但是不删除
  - v-if : 直接删除
  - v-bind = `:` 简写 声明动态属性
  - v-on = `@` 简写 事件指令声明
  - v-model : 双向绑定语法糖
  - v-pre : 绕过编译
  - v-once : 数据只会响应一次, 一般业务中很少用到
- 自定义指令: 非刚性功能, 完全可以通过其他方式完成
- 跨组件通信: provide | inject
  - 属性通信 解决通知父组件
  - 事件通信: 解决子组件
  - Vue.observable 按需挂在属性
- 获取跨组件实例
  - ref 引用信息

# 单元测试

使用方式

- jest(推荐) / mocha
- @vue/test-utils
- sinon

# **底层原理**





双向绑定: model层和view层双向绑定, 一边数据修改,都会的带刷新

Vue是如何做双向绑定的: 

- Vue是单向数据流, 不是双向保定
- 双向绑定不过是语法糖
- Object.defineProperty 是用来做响应式更新的, 和双向绑定没关系



双向绑定原理

```vue
<Personal v-model='phoneInfo' :zip-code.sync="zipCode" />
<PersonalInfo
              :phone-info="phoneInfo"
              :zip-code = "zipCode"
              @change="val => (phoneInfo = val)"
              @update:zipCode="val => (zipCode = val)"
              
              </templat>
<script>
import PersonalInfo from "./PersonalInfo"
    export default {
        component: {
            PersonalInfo
        }
        data () {
            return {
                poneInfo : {
                    areaCode: "+86",
                    phone: ""
                },
                zipCode: ""
            }
        }
    }
</script>
```

## 响应式原理

如何触发组件更新, 数据驱动

响应式原理作为 `Vue` 的核心，使用数据劫持实现数据驱动视图。

本文将会循序渐进的解析响应式原理的工作流程，主要以下面结构进行：

1. 分析主要成员，了解它们有助于理解流程
2. 将流程拆分，理解其中的作用
3. 结合以上的点，理解整体流程

### 主要成员

在响应式原理中，`Observe`、`Dep`、`Watcher` 这三个类是构成完整原理的主要成员。

- `Observe`，响应式原理的入口，根据数据类型处理观测逻辑
- `Dep`，依赖收集器，属性都会有一个`Dep`，方便发生变化时能够找到对应的依赖触发更新
- `Watcher`，用于执行更新渲染，组件会拥有一个渲染`Watcher`，我们常说的收集依赖，就是收集 `Watcher`

下面来看看这些类的实现，包含哪些主要属性和方法。



# 基本概念

- Vue程序: 包含了Vue应用的html页面
- Vue单文件组件: `.vue` 文件

## 专业术语

|      |           |            |
| ---- | --------- | ---------- |
| vm   | viewModel | 视图模型层 |
|      |           |            |
|      |           |            |

### 

## Vue全局组件 - 不推荐

使用 `Vue.component()` 构造函数示例化的对象

- 全局定义:强制要求每个component中的命名不得重复

- 字符串模板:缺乏语法高亮,在HTML有多行的时候,需要用到丑陋的\

- 不支持CSS :意味着当HTML和JavaScript组件化时, CSS明显被遗漏

- 没有构建步骤:限制只能使用HTML和ES5 JavaScript, 而不能使用预处理器,如Pug
  (formerly Jade)和Babel

## Vue 单文件组件 (SFC) 规范

> `.vue`相当于是一个源文件, 需要使用 `vue-loader` 编译之后才能被浏览器解析, 生成 html, js,css等静态资源

`.vue` 文件是一个自定义的文件类型，用类 HTML 语法描述一个 Vue 组件。每个 `.vue` 文件包含三种类型的顶级语言块 `template`、`script` 和 `style`，还允许添加可选的自定义块：

```vue
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>
```

`vue-loader` 会解析文件，提取每个语言块，如有必要会通过其它 loader 处理，最后将他们组装成一个 ES Module，它的默认导出是一个 Vue.js 组件选项的对象。

`vue-loader` 支持使用非默认语言，比如 CSS 预处理器，预编译的 HTML 模版语言，通过设置语言块的 `lang` 属性。例如，你可以像下面这样使用 Sass 语法编写样式：

```vue
<style lang="sass">
  /* write Sass! */
</style>
```

更多细节可以在[使用预处理器](https://vue-loader.vuejs.org/zh/guide/pre-processors.html)中找到。

### [#](https://vue-loader.vuejs.org/zh/spec.html#语言块)语言块

#### [#](https://vue-loader.vuejs.org/zh/spec.html#模板)模板

- 每个 `.vue` 文件最多包含一个 ` 块。
- 内容将被提取并传递给 `vue-template-compiler` 为字符串，预处理为 JavaScript 渲染函数，并最终注入到从 `` 导出的组件中。

#### [#](https://vue-loader.vuejs.org/zh/spec.html#脚本)脚本

- 每个 `.vue` 文件最多包含一个 `` 块。
- 这个脚本会作为一个 ES Module 来执行。
- 它的**默认导出**应该是一个 Vue.js 的[组件选项对象](https://cn.vuejs.org/v2/api/#选项-数据)。也可以导出由 `Vue.extend()` 创建的扩展对象，但是普通对象是更好的选择。
- 任何匹配 `.js` 文件 (或通过它的 `lang` 特性指定的扩展名) 的 webpack 规则都将会运用到这个 `` 块的内容中。

#### [#](https://vue-loader.vuejs.org/zh/spec.html#样式)样式

- 默认匹配：`/\.css$/`。
- 一个 `.vue` 文件可以包含多个 `` 标签。
- <style> 标签可以有 scoped 或者 module 属性 (查看 scoped CSS和 CSS Modules) 以帮助你将样式封装到当前组件。具有不同封装模式的多个 <style> 标签可以在同一个组件中混合使用。
- 任何匹配 `.css` 文件 (或通过它的 `lang` 特性指定的扩展名) 的 webpack 规则都将会运用到这个 `` 块的内容中。

#### [#](https://vue-loader.vuejs.org/zh/spec.html#自定义块)自定义块

可以在 `.vue` 文件中添加额外的自定义块来实现项目的特定需求，例如 `` 块。`vue-loader` 将会使用标签名来查找对应的 webpack loader 来应用在对应的块上。webpack loader 需要在 `vue-loader` 的选项 `loaders` 中指定。

更多细节，查看[自定义块](https://vue-loader.vuejs.org/zh/guide/custom-blocks.html)。

#### [#](https://vue-loader.vuejs.org/zh/spec.html#src-导入)Src 导入

如果喜欢把 `.vue` 文件分隔到多个文件中，你可以通过 `src` 属性导入外部文件：

```vue
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

需要注意的是 `src` 导入遵循和 webpack 模块请求相同的路径解析规则，这意味着：

- 相对路径需要以 `./` 开始
- 你可以从 NPM 依赖中导入资源：

```vue
<!-- import a file from the installed "todomvc-app-css" npm package -->
<style src="todomvc-app-css/index.css">
```

在自定义块上同样支持 `src` 导入，例如：

```vue
<unit-test src="./unit-test.js">
</unit-test>
```

### [#](https://vue-loader.vuejs.org/zh/spec.html#语法高亮-ide-支持)语法高亮 / IDE 支持

目前有下列 IDE/编辑器 支持语法高亮：

- [Sublime Text](https://github.com/vuejs/vue-syntax-highlight)
- [VS Code](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Atom](https://atom.io/packages/language-vue)
- [Vim](https://github.com/posva/vim-vue)
- [Emacs](https://github.com/AdamNiederer/vue-mode)
- [Brackets](https://github.com/pandao/brackets-vue)
- [JetBrains IDEs](https://plugins.jetbrains.com/plugin/8057) (WebStorm、PhpStorm 等)

非常感谢其他编辑器/IDE 所做的贡献！如果在 Vue 组件中没有使用任何预处理器，你可以把 `.vue` 文件当作 HTML 对待。

## [#](https://vue-loader.vuejs.org/zh/spec.html#注释)注释

在语言块中使用该语言块对应的注释语法 (HTML、CSS、JavaScript、Jade 等)。顶层注释使用 HTML 注释语法：``。

## 属性

## 事件



## 路由 - Router

应用场景, 单页面开发时, 解决复杂的路由问题, 类似于python中的 `URLConf`

## 组件 - component

在很多 Vue 项目中，我们使用 `Vue.component` 来定义全局组件，紧接着用 `new Vue({ el: '#container '})` 在每个页面内指定一个容器元素。

这种方式在很多中小规模的项目中运作的很好，在这些项目里 JavaScript 只被用来加强特定的视图。但当在更复杂的项目中，或者你的前端完全由 JavaScript 驱动的时候，下面这些缺点将变得非常明显：

- **全局定义 (Global definitions)** 强制要求每个 component 中的命名不得重复
- **字符串模板 (String templates)** 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 `\`
- **不支持 CSS (No CSS support)** 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
- **没有构建步骤 (No build step)** 限制只能使用 HTML 和 ES5 JavaScript，而不能使用预处理器，如 Pug (formerly Jade) 和 Babel

文件扩展名为 `.vue` 的 **single-file components (单文件组件)** 为以上所有问题提供了解决方法，并且还可以使用 webpack 或 Browserify 等构建工具。





# **组件基础**



![Component Tree](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193541.jpg)

![](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193545.png)

![](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193550.png)

[官方链接](https://cn.vuejs.org/v2/guide/components)

## 基本示例

这里有一个 Vue 组件的示例：

```
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 ` `。我们可以在一个通过 `new Vue` 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：

```
<div id="components-demo">
  <button-counter></button-counter>
</div>
```

{% codeblock lang:js %} new Vue({ el: '#components-demo' }) {% endcodeblock %}

{% raw %}

<script> Vue.component('button-counter', { data: function () { return { count: 0 } }, template: 'You clicked me {{ count }} times.' }) new Vue({ el: '#components-demo' }) </script> {% endraw %}

因为组件是可复用的 Vue 实例，所以它们与 `new Vue` 接收相同的选项，例如 `data`、`computed`、`watch`、`methods` 以及生命周期钩子等。仅有的例外是像 `el` 这样根实例特有的选项。

## 组件的复用

你可以将组件进行任意次数的复用：

```
<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```

{% raw %}

<script> new Vue({ el: '#components-demo2' }) </script> {% endraw %}

注意当点击按钮时，每个组件都会各自独立维护它的 `count`。因为你每用一次组件，就会有一个它的新**实例**被创建。

### `data` 必须是一个函数

当我们定义这个 `` 组件时，你可能会发现它的 `data` 并不是像这样直接提供一个对象：

```
data: {
  count: 0
}
```

取而代之的是，**一个组件的 `data` 选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝：

```
data: function () {
  return {
    count: 0
  }
}
```

如果 Vue 没有这条规则，点击一个按钮就可能会像如下代码一样影响到*其它所有实例*：

{% raw %}

<script> var buttonCounter2Data = { count: 0 } Vue.component('button-counter2', { data: function () { return buttonCounter2Data }, template: 'You clicked me {{ count }} times.' }) new Vue({ el: '#components-demo3' }) </script> {% endraw %}

## 组件的组织

通常一个应用会以一棵嵌套的组件树的形式来组织：

[![Component Tree](https://github.com/vuejs/cn.vuejs.org/raw/master/images/components.png)](https://github.com/vuejs/cn.vuejs.org/blob/master/images/components.png)

例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。

为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。这里有两种组件的注册类型：**全局注册**和**局部注册**。至此，我们的组件都只是通过 `Vue.component` 全局注册的：

```
Vue.component('my-component-name', {
  // ... options ...
})
```

全局注册的组件可以用在其被注册之后的任何 (通过 `new Vue`) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。

到目前为止，关于组件注册你需要了解的就这些了，如果你阅读完本页内容并掌握了它的内容，我们会推荐你再回来把[组件注册](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-registration.html)读完。

## 通过 Prop 向子组件传递数据

> 将值注册为组件的属性

```html
<my-button v-for="item in list" item="item"> 组件的HTML内容, 也可以写在template属性中</my-button>
my-button : 组件名
v-for : 特殊vue属性
item : 组件属性
html: 相当于模板, 默认会被覆盖, 不会生效
```



*应用场景*: 

早些时候，我们提到了创建一个博文组件的事情。问题是如果你不能向这个组件传递某一篇博文的标题或内容之类的我们想展示的数据的话，它是没有办法使用的。这也正是 prop 的由来。

**Prop 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。**为了给博文组件传递一个标题，我们可以用一个 `props` 选项将其包含在该组件可接受的 prop 列表中：

```
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。在上述模板中，你会发现我们能够在组件实例中访问这个值，就像访问 `data` 中的值一样。

一个 prop 被注册之后，你就可以像这样把数据作为一个自定义 attribute 传递进来：

```
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

{% raw %}

<script> Vue.component('blog-post1', { props: ['title'], template: '

### {{ title }}

' }) new Vue({ el: '#blog-post-demo' }) </script> {% endraw %}

然而在一个典型的应用中，你可能在 `data` 里有一个博文的数组：

```js
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
```

并想要为每篇博文渲染一个组件：

```
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
></blog-post>
```

如上所示，你会发现我们可以使用 `v-bind` 来动态传递 prop。这在你一开始不清楚要渲染的具体内容，比如[从一个 API 获取博文列表](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-component-blog-post-example)的时候，是非常有用的。

到目前为止，关于 prop 你需要了解的大概就这些了，如果你阅读完本页内容并掌握了它的内容，我们会推荐你再回来把 [prop](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-props.html) 读完。

## *单个根元素*

当构建一个 `` 组件时，你的模板最终会包含的东西远不止一个标题：

```
<h3>{{ title }}</h3>
```

最最起码，你会包含这篇博文的正文：

```
<h3>{{ title }}</h3>
<div v-html="content"></div>
```

然而如果你在模板中尝试这样写，Vue 会显示一个错误，并解释道 **every component must have a single root element (每个组件必须只有一个根元素)**。你可以将模板的内容包裹在一个父元素内，来修复这个问题，例如：

```
<div class="blog-post">
  <h3>{{ title }}</h3>
  <div v-html="content"></div>
</div>
```

看起来当组件变得越来越复杂的时候，我们的博文不只需要标题和内容，还需要发布日期、评论等等。为每个相关的信息定义一个 prop 会变得很麻烦：

```
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
  v-bind:content="post.content"
  v-bind:publishedAt="post.publishedAt"
  v-bind:comments="post.comments"
></blog-post>
```

所以是时候重构一下这个 `` 组件了，让它变成接受一个单独的 `post` prop：

```
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
```

```
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})
```

上述的这个和一些接下来的示例使用了 JavaScript 的[模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)来让多行的模板更易读。它们在 IE 下并没有被支持，所以如果你需要在不 (经过 Babel 或 TypeScript 之类的工具) 编译的情况下支持 IE，请使用[折行转义字符](https://css-tricks.com/snippets/javascript/multiline-string-variables-in-javascript/)取而代之。

现在，不论何时为 `post` 对象添加一个新的 property，它都会自动地在 `` 内可用。

## 监听子组件事件

在我们开发 `` 组件时，它的一些功能可能要求我们和父级组件进行沟通。例如我们可能会引入一个辅助功能来放大博文的字号，同时让页面的其它部分保持默认的字号。

在其父组件中，我们可以通过添加一个 `postFontSize` 数据 property 来支持这个功能：

```
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [/* ... */],
    postFontSize: 1
  }
})
```

它可以在模板中用来控制所有博文的字号：

```
<div id="blog-posts-events-demo">
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
    ></blog-post>
  </div>
</div>
```

现在我们在每篇博文正文之前添加一个按钮来放大字号：

```
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
```

问题是这个按钮不会做任何事：

```
<button>
  Enlarge text
</button>
```

当点击这个按钮时，我们需要告诉父级组件放大所有博文的文本。幸好 Vue 实例提供了一个自定义事件的系统来解决这个问题。父级组件可以像处理 native DOM 事件一样通过 `v-on` 监听子组件实例的任意事件：

```
<blog-post
  ...
  v-on:enlarge-text="postFontSize += 0.1"
></blog-post>
```

同时子组件可以通过调用内建的 [**`$emit`** 方法](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/api/#vm-emit)并传入事件名称来触发一个事件：

```
<button v-on:click="$emit('enlarge-text')">
  Enlarge text
</button>
```

有了这个 `v-on:enlarge-text="postFontSize += 0.1"` 监听器，父级组件就会接收该事件并更新 `postFontSize` 的值。

{% raw %}

<script> Vue.component('blog-post', { props: ['post'], template: '\

\

### {{ post.title }}

\ \ Enlarge text\ \

\

\ ' }) new Vue({ el: '#blog-posts-events-demo', data: { posts: [ { id: 1, title: 'My journey with Vue', content: '...content...' }, { id: 2, title: 'Blogging with Vue', content: '...content...' }, { id: 3, title: 'Why Vue is so fun', content: '...content...' } ], postFontSize: 1 } }) </script> {% endraw %}

### 使用事件抛出一个值

有的时候用一个事件来抛出一个特定的值是非常有用的。例如我们可能想让 `` 组件决定它的文本要放大多少。这时可以使用 `$emit` 的第二个参数来提供这个值：

```
<button v-on:click="$emit('enlarge-text', 0.1)">
  Enlarge text
</button>
```

然后当在父级组件监听这个事件的时候，我们可以通过 `$event` 访问到被抛出的这个值：

```
<blog-post
  ...
  v-on:enlarge-text="postFontSize += $event"
></blog-post>
```

或者，如果这个事件处理函数是一个方法：

```
<blog-post
  ...
  v-on:enlarge-text="onEnlargeText"
></blog-post>
```

那么这个值将会作为第一个参数传入这个方法：

```
methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```

### 在组件上使用 `v-model`

自定义事件也可以用于创建支持 `v-model` 的自定义输入组件。记住：

```
<input v-model="searchText">
```

等价于：

```
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

当用在组件上时，`v-model` 则会这样：

```
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
```

为了让它正常工作，这个组件内的 `` 必须：

- 将其 `value` attribute 绑定到一个名叫 `value` 的 prop 上
- 在其 `input` 事件被触发时，将新的值通过自定义的 `input` 事件抛出

写成代码之后是这样的：

```
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
```

现在 `v-model` 就应该可以在这个组件上完美地工作起来了：

```
<custom-input v-model="searchText"></custom-input>
```

到目前为止，关于组件自定义事件你需要了解的大概就这些了，如果你阅读完本页内容并掌握了它的内容，我们会推荐你再回来把[自定义事件](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-custom-events.html)读完。

## 通过插槽分发内容

和 HTML 元素一样，我们经常需要向一个组件传递内容，像这样：

```
<alert-box>
  Something bad happened.
</alert-box>
```

可能会渲染出这样的东西：

{% raw %}

Something bad happened.

<script> Vue.component('alert-box', { template: '\

\ **Error!**\ \

\ ' }) new Vue({ el: '#slots-demo' }) </script> <style> .demo-alert-box { padding: 10px 20px; background: #f3beb8; border: 1px solid #f09898; } </style> {% endraw %}

幸好，Vue 自定义的 `` 元素让这变得非常简单：

```
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
```

如你所见，我们只要在需要的地方加入插槽就行了——就这么简单！

到目前为止，关于插槽你需要了解的大概就这些了，如果你阅读完本页内容并掌握了它的内容，我们会推荐你再回来把[插槽](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.html)读完。

## 动态组件

有的时候，在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里：

{% raw %}

{{ tab }}

<script> Vue.component('tab-home', { template: '

Home component

' }) Vue.component('tab-posts', { template: '

Posts component

' }) Vue.component('tab-archive', { template: '

Archive component

' }) new Vue({ el: '#dynamic-component-demo', data: { currentTab: 'Home', tabs: ['Home', 'Posts', 'Archive'] }, computed: { currentTabComponent: function () { return 'tab-' + this.currentTab.toLowerCase() } } }) </script> <style> .dynamic-component-demo-tab-button { padding: 6px 10px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid #ccc; cursor: pointer; background: #f0f0f0; margin-bottom: -1px; margin-right: -1px; } .dynamic-component-demo-tab-button:hover { background: #e0e0e0; } .dynamic-component-demo-tab-button-active { background: #e0e0e0; } .dynamic-component-demo-tab { border: 1px solid #ccc; padding: 10px; } </style> {% endraw %}

上述内容可以通过 Vue 的 `` 元素加一个特殊的 `is` attribute 来实现：

```
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component v-bind:is="currentTabComponent"></component>
```

在上述示例中，`currentTabComponent` 可以包括

- 已注册组件的名字，或
- 一个组件的选项对象

你可以在[这里](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-dynamic-components)查阅并体验完整的代码，或在[这个版本](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-dynamic-components-with-binding)了解绑定组件选项对象，而不是已注册组件名的示例。

请留意，这个 attribute 可以用于常规 HTML 元素，但这些元素将被视为组件，这意味着所有的 attribute **都会作为 DOM attribute 被绑定**。对于像 `value` 这样的 property，若想让其如预期般工作，你需要使用 [`.prop` 修饰器](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/api/#v-bind)。

到目前为止，关于动态组件你需要了解的大概就这些了，如果你阅读完本页内容并掌握了它的内容，我们会推荐你再回来把[动态和异步组件](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-dynamic-async.html)读完。

## 解析 DOM 模板时的注意事项

有些 HTML 元素，诸如 ``、``、`` 和 ``，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 ``、 和 ``，只能出现在其它某些特定的元素内部。

这会导致我们使用这些有约束条件的元素时遇到一些问题。例如：

```
<table>
  <blog-post-row></blog-post-row>
</table>
```

这个自定义组件 `` 会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 `is` attribute 给了我们一个变通的办法：

```
<table>
  <tr is="blog-post-row"></tr>
</table>
```

需要注意的是**如果我们从以下来源使用模板的话，这条限制是\*不存在\*的**：

- 字符串 (例如：`template: '...'`)
- [单文件组件 (`.vue`)](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/single-file-components.html)
- [``](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-edge-cases.html#X-Templates)

到这里，你需要了解的解析 DOM 模板时的注意事项——实际上也是 Vue 的全部*必要内容*，大概就是这些了。恭喜你！接下来还有很多东西要去学习，不过首先，我们推荐你先休息一下，试用一下 Vue，自己随意做些好玩的东西。

如果你感觉已经掌握了这些知识，我们推荐你再回来把完整的组件指南，包括侧边栏中组件深入章节的所有页面读完。







# 组件注册

 

> 该页面假设你已经阅读过了[组件基础](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components.html)。如果你还对组件不太了解，推荐你先阅读它。

[观看本节视频讲解](https://learning.dcloud.io/#/?vid=13)

## 快速上手

```js
// 全局组件 - Vue程序 - html页面中
// 默认注册, 且全局注册
Vue.component('my-component-name', { /* ... */ }  // 组件名, 组件配置

// 局部组件 - Vue程序中
// 需要先注册
var ComponentA = {/* 组件配置信息 */}, // JavaScript对象
new Vue({
    ...
    components:{
        "component-name": ComponentA,  //选择性的注册到应用中
    }
})

// 局部注册在其子组件中不可用
// 需要手动将组件注册到父组件中
var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}

// 使用ES6+属性
import ComponentA from "./ComponentA.Vue"

export default {
    components:{
        ComponentA,
    }
}
```



## 组件名

在注册一个组件的时候，我们始终需要给它一个名字。比如在全局注册的时候我们已经看到了：

```
Vue.component('my-component-name', { /* ... */ })
```

该组件名就是 `Vue.component` 的第一个参数。

你给予组件的名字可能依赖于你打算拿它来做什么。当直接在 DOM 中使用一个组件 (而不是在字符串模板或[单文件组件](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/single-file-components.html)) 的时候，我们强烈推荐遵循 [W3C 规范](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助你避免和当前以及未来的 HTML 元素相冲突。

你可以在[风格指南](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/style-guide/#基础组件名-强烈推荐)中查阅到关于组件名的其它建议。

### 组件名大小写

定义组件名的方式有两种：

#### 使用 kebab-case

```
Vue.component('my-component-name', { /* ... */ })
```

当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 ``。

#### 使用 PascalCase

```
Vue.component('MyComponentName', { /* ... */ })
```

当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 `` 和 `` 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

## 全局注册

到目前为止，我们只用过 `Vue.component` 来创建组件：

```
Vue.component('my-component-name', {
  // ... 选项 ...
})
```

这些组件是**全局注册的**。也就是说它们在注册之后可以用在任何新创建的 Vue 根实例 (`new Vue`) 的模板中。比如：

```
Vue.component('component-a', { /* ... */ })
Vue.component('component-b', { /* ... */ })
Vue.component('component-c', { /* ... */ })

new Vue({ el: '#app' })
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
```

在所有子组件中也是如此，也就是说这三个组件*在各自内部*也都可以相互使用。

## 局部注册

全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。

在这些情况下，你可以通过一个普通的 JavaScript 对象来定义组件：

```js
var ComponentA = { /* ... */ }  // 相当于组件名变量名, 和组件名的属性`{}`中. 
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
```

然后在 `components` 选项中定义你想要使用的组件：

```js
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,  //注册局部组件
    'component-b': ComponentB
  }
})
```

对于 `components` 对象中的每个 property 来说，其 property 名就是自定义元素的名字，其 property 值就是这个组件的选项对象。

注意**局部注册的组件在其子组件中\*不可用\***。例如，如果你希望 `ComponentA` 在 `ComponentB` 中可用，则你需要这样写：

```
var ComponentA = { /* ... */ }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}
```

或者如果你通过 Babel 和 webpack 使用 ES2015 模块，那么代码看起来更像：

```
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  },
  // ...
}
```

注意在 ES2015+ 中，在对象中放一个类似 `ComponentA` 的变量名其实是 `ComponentA: ComponentA` 的缩写，即这个变量名同时是：

- 用在模板中的自定义元素的名称
- 包含了这个组件选项的变量名

## 模块系统

如果你没有通过 `import`/`require` 使用一个模块系统，也许可以暂且跳过这个章节。如果你使用了，那么我们会为你提供一些特殊的使用说明和注意事项。

### 在模块系统中局部注册

如果你还在阅读，说明你使用了诸如 Babel 和 webpack 的模块系统。在这些情况下，我们推荐创建一个 `components` 目录，并将每个组件放置在其各自的文件中。

然后你需要在局部注册之前导入每个你想使用的组件。例如，在一个假设的 `ComponentB.js` 或 `ComponentB.vue` 文件中：

```
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}
```

现在 `ComponentA` 和 `ComponentC` 都可以在 `ComponentB` 的模板中使用了。

### 基础组件的自动化全局注册

可能你的许多组件只是包裹了一个输入框或按钮之类的元素，是相对通用的。我们有时候会把它们称为[基础组件](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/style-guide/#基础组件名-强烈推荐)，它们会在各个组件中被频繁的用到。

所以会导致很多组件里都会有一个包含基础组件的长列表：

```
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseInput from './BaseInput.vue'

export default {
  components: {
    BaseButton,
    BaseIcon,
    BaseInput
  }
}
```

而只是用于模板中的一小部分：

```
<BaseInput
  v-model="searchText"
  @keydown.enter="search"
/>
<BaseButton @click="search">
  <BaseIcon name="search"/>
</BaseButton>
```

如果你恰好使用了 webpack (或在内部使用了 webpack 的 [Vue CLI 3+](https://github.com/vuejs/vue-cli))，那么就可以使用 `require.context` 只全局注册这些非常通用的基础组件。这里有一份可以让你在应用入口文件 (比如 `src/main.js`) 中全局导入基础组件的示例代码：

```
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
```

记住**全局注册的行为必须在根 Vue 实例 (通过 `new Vue`) 创建之前发生**。[这里](https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js)有一个真实项目情景下的示例。

# 属性 - Prop

![](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193627.png)

## Prop 的大小写 (camelCase vs kebab-case)

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名：

```
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

重申一次，如果你使用字符串模板，那么这个限制就不存在了。

## Prop 类型

到这里，我们只看到了以字符串数组形式列出的 prop：

```
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
```

但是，通常你希望每个 prop 都有指定的值类型。这时，你可以以对象形式列出 prop，这些 property 的名称和值分别是 prop 各自的名称和类型：

```
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```

这不仅为你的组件提供了文档，还会在它们遇到错误的类型时从浏览器的 JavaScript 控制台提示用户。你会在这个页面接下来的部分看到[类型检查和其它 prop 验证](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-props.md#Prop-验证)。

## 传递静态或动态 Prop

像这样，你已经知道了可以像这样给 prop 传入一个静态的值：

```
<blog-post title="My journey with Vue"></blog-post>
```

你也知道 prop 可以通过 `v-bind` 动态赋值，例如：

```
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post
  v-bind:title="post.title + ' by ' + post.author.name"
></blog-post>
```

在上述两个示例中，我们传入的值都是字符串类型的，但实际上*任何*类型的值都可以传给一个 prop。

### 传入一个数字

```
<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:likes="post.likes"></blog-post>
```

### 传入一个布尔值

```
<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
<blog-post is-published></blog-post>

<!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:is-published="false"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

### 传入一个数组

```
<!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:comment-ids="post.commentIds"></blog-post>
```

### 传入一个对象

```
<!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post
  v-bind:author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:author="post.author"></blog-post>
```

### 传入一个对象的所有 property

如果你想要将一个对象的所有 property 都作为 prop 传入，你可以使用不带参数的 `v-bind` (取代 `v-bind:prop-name`)。例如，对于一个给定的对象 `post`：

```
post: {
  id: 1,
  title: 'My Journey with Vue'
}
```

下面的模板：

```
<blog-post v-bind="post"></blog-post>
```

等价于：

```
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```

## 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你**不**应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

这里有两种常见的试图变更一个 prop 的情形：

1. **这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。**在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值：

```
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}
```

1. **这个 prop 以一种原始的值传入且需要进行转换。**在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

```
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身**将会**影响到父组件的状态。

## Prop 验证

我们可以为组件的 prop 指定验证要求，例如你知道的这些类型。如果有一个需求没有被满足，则 Vue 会在浏览器控制台中警告你。这在开发一个会被别人用到的组件时尤其有帮助。

为了定制 prop 的验证方式，你可以为 `props` 中的值提供一个带有验证需求的对象，而不是一个字符串数组。例如：

```
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。

注意那些 prop 会在一个组件实例创建**之前**进行验证，所以实例的 property (如 `data`、`computed` 等) 在 `default` 或 `validator` 函数中是不可用的。

### 类型检查

`type` 可以是下列原生构造函数中的一个：

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

额外的，`type` 还可以是一个自定义的构造函数，并且通过 `instanceof` 来进行检查确认。例如，给定下列现成的构造函数：

```
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
```

你可以使用：

```
Vue.component('blog-post', {
  props: {
    author: Person
  }
})
```

来验证 `author` prop 的值是否是通过 `new Person` 创建的。

## 非 Prop 的 Attribute

一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 prop 定义的 attribute。

因为显式定义的 prop 适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景。这也是为什么组件可以接受任意的 attribute，而这些 attribute 会被添加到这个组件的根元素上。

例如，想象一下你通过一个 Bootstrap 插件使用了一个第三方的 `` 组件，这个插件需要在其 `` 上用到一个 `data-date-picker` attribute。我们可以将这个 attribute 添加到你的组件实例上：

```
<bootstrap-date-input data-date-picker="activated"></bootstrap-date-input>
```

然后这个 `data-date-picker="activated"` attribute 就会自动添加到 `` 的根元素上。

### 替换/合并已有的 Attribute

想象一下 `` 的模板是这样的：

```
<input type="date" class="form-control">
```

为了给我们的日期选择器插件定制一个主题，我们可能需要像这样添加一个特别的类名：

```
<bootstrap-date-input
  data-date-picker="activated"
  class="date-picker-theme-dark"
></bootstrap-date-input>
```

在这种情况下，我们定义了两个不同的 `class` 的值：

- `form-control`，这是在组件的模板内设置好的
- `date-picker-theme-dark`，这是从组件的父级传入的

对于绝大多数 attribute 来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 `type="text"` 就会替换掉 `type="date"` 并把它破坏！庆幸的是，`class` 和 `style` attribute 会稍微智能一些，即两边的值会被合并起来，从而得到最终的值：`form-control date-picker-theme-dark`。

### 禁用 Attribute 继承

如果你**不**希望组件的根元素继承 attribute，你可以在组件的选项中设置 `inheritAttrs: false`。例如：

```
Vue.component('my-component', {
  inheritAttrs: false,
  // ...
})
```

这尤其适合配合实例的 `$attrs` property 使用，该 property 包含了传递给一个组件的 attribute 名和 attribute 值，例如：

```
{
  required: true,
  placeholder: 'Enter your username'
}
```

有了 `inheritAttrs: false` 和 `$attrs`，你就可以手动决定这些 attribute 会被赋予哪个元素。在撰写[基础组件](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/style-guide/#基础组件名-强烈推荐)的时候是常会用到的：

```
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})
```

注意 `inheritAttrs: false` 选项**不会**影响 `style` 和 `class` 的绑定。

这个模式允许你在使用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是真正的根元素：

```
<base-input
  v-model="username"
  required
  placeholder="Enter your username"
></base-input>
```



# 事件 - Event

> 事件分为普通事件, 修饰符事件, 自定义事件

子组件里面通过 this.$emit('event-name') 触发

![](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193608.jpg)

## 事件名

不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。举个例子，如果触发一个 camelCase 名字的事件：

```
this.$emit('myEvent')
```

则监听这个名字的 kebab-case 版本是不会有任何效果的：

```
<!-- 没有效果 -->
<my-component v-on:my-event="doSomething"></my-component>
```

不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或 property 名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。

因此，我们推荐你**始终使用 kebab-case 的事件名**。

## 自定义组件的 `v-model`

> 2.2.0+ 新增

一个组件上的 `v-model` 默认会利用名为 `value` 的 prop 和名为 `input` 的事件，但是像单选框、复选框等类型的输入控件可能会将 `value` attribute 用于[不同的目的](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Value)。`model` 选项可以用来避免这样的冲突：

```
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
```

现在在这个组件上使用 `v-model` 的时候：

```
<base-checkbox v-model="lovingVue"></base-checkbox>
```

这里的 `lovingVue` 的值将会传入这个名为 `checked` 的 prop。同时当 `` 触发一个 `change` 事件并附带一个新的值的时候，这个 `lovingVue` 的 property 将会被更新。

注意你仍然需要在组件的 `props` 选项里声明 `checked` 这个 prop。

## 将原生事件绑定到组件

你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 `v-on` 的 `.native` 修饰符：

```
<base-input v-on:focus.native="onFocus"></base-input>
```

在有的时候这是很有用的，不过在你尝试监听一个类似 `` 的非常特定的元素时，这并不是个好主意。比如上述 `` 组件可能做了如下重构，所以根元素实际上是一个 `` 元素：

```
<label>
  {{ label }}
  <input
    v-bind="$attrs"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  >
</label>
```

这时，父级的 `.native` 监听器将静默失败。它不会产生任何报错，但是 `onFocus` 处理函数不会如你预期地被调用。

为了解决这个问题，Vue 提供了一个 `$listeners` property，它是一个对象，里面包含了作用在这个组件上的所有监听器。例如：

```
{
  focus: function (event) { /* ... */ }
  input: function (value) { /* ... */ },
}
```

有了这个 `$listeners` property，你就可以配合 `v-on="$listeners"` 将所有的事件监听器指向这个组件的某个特定的子元素。对于类似 `` 的你希望它也可以配合 `v-model` 工作的组件来说，为这些监听器创建一个类似下述 `inputListeners` 的计算属性通常是非常有用的：

```
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
})
```

现在 `` 组件是一个**完全透明的包裹器**了，也就是说它可以完全像一个普通的 `` 元素一样使用了：所有跟它相同的 attribute 和监听器都可以工作。

## `.sync` 修饰符

> 2.3.0+ 新增

在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件都没有明显的变更来源。

这也是为什么我们推荐以 `update:myPropName` 的模式触发事件取而代之。举个例子，在一个包含 `title` prop 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：

```
this.$emit('update:title', newTitle)
```

然后父组件可以监听那个事件并根据需要更新一个本地的数据 property。例如：

```
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
```

为了方便起见，我们为这种模式提供一个缩写，即 `.sync` 修饰符：

```
<text-document v-bind:title.sync="doc.title"></text-document>
```

注意带有 `.sync` 修饰符的 `v-bind` **不能**和表达式一起使用 (例如 `v-bind:title.sync="doc.title + '!'"` 是无效的)。取而代之的是，你只能提供你想要绑定的 property 名，类似 `v-model`。

当我们用一个对象同时设置多个 prop 的时候，也可以将这个 `.sync` 修饰符和 `v-bind` 配合使用：

```
<text-document v-bind.sync="doc"></text-document>
```

这样会把 `doc` 对象中的每一个 property (如 `title`) 都作为一个独立的 prop 传进去，然后各自添加用于更新的 `v-on` 监听器。

将 `v-bind.sync` 用在一个字面量的对象上，例如 `v-bind.sync="{ title: doc.title }"`，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。



# 插槽

在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 `v-slot` 指令)。它取代了 `slot` 和 `slot-scope` 这两个目前已被废弃但未被移除且仍在[文档中](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#废弃了的语法)的 attribute。新语法的由来可查阅这份 [RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md)。

## 快速上手

作用:为组件分发内容, 传递组件的html值, 使用组件是, 标签里的内容, 同时可以通过具名插槽在组件中的不同的位置插入内容

应用场景: header, footer, body, default, 为不同的位置插入不同的内容

## 插槽内容

Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 [Web Components 规范草案](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md)，将 `` 元素作为承载分发内容的出口。

它允许你像这样合成组件：

```
<navigation-link url="/profile">
  Your Profile
</navigation-link>
```

然后你在 `` 的模板中可能会写为：

```
<a
  v-bind:href="url"
  class="nav-link"
>
  <slot></slot>
</a>
```

当组件渲染的时候，`` 将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括 HTML：

```
<navigation-link url="/profile">
  <!-- 添加一个 Font Awesome 图标 -->
  <span class="fa fa-user"></span>
  Your Profile
</navigation-link>
```

甚至其它的组件：

```
<navigation-link url="/profile">
  <!-- 添加一个图标的组件 -->
  <font-awesome-icon name="user"></font-awesome-icon>
  Your Profile
</navigation-link>
```

如果 `` **没有**包含一个 `` 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。

## 编译作用域

当你想在一个插槽中使用数据时，例如：

```
<navigation-link url="/profile">
  Logged in as {{ user.name }}
</navigation-link>
```

该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而**不能**访问 `` 的作用域。例如 `url` 是访问不到的：

```
<navigation-link url="/profile">
  Clicking here will send you to: {{ url }}
  <!--
  这里的 `url` 会是 undefined，因为其 (指该插槽的) 内容是
  _传递给_ <navigation-link> 的而不是
  在 <navigation-link> 组件*内部*定义的。
  -->
</navigation-link>
```

作为一条规则，请记住：

> 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

## 后备内容

有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 `` 组件中：

```
<button type="submit">
  <slot></slot>
</button>
```

我们可能希望这个 `` 内绝大多数情况下都渲染文本“Submit”。为了将“Submit”作为后备内容，我们可以将它放在 `` 标签内：

```
<button type="submit">
  <slot>Submit</slot>
</button>
```

现在当我在一个父级组件中使用 `` 并且不提供任何插槽内容时：

```
<submit-button></submit-button>
```

后备内容“Submit”将会被渲染：

```
<button type="submit">
  Submit
</button>
```

但是如果我们提供内容：

```
<submit-button>
  Save
</submit-button>
```

则这个提供的内容将会被渲染从而取代后备内容：

```
<button type="submit">
  Save
</button>
```

## 具名插槽

> 自 2.6.0 起有所更新。已废弃的使用 `slot` attribute 的语法在[这里](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#废弃了的语法)。

有时我们需要多个插槽。例如对于一个带有如下模板的 `` 组件：

```
<div class="container">
  <header>
    <!-- 我们希望把页头放这里 -->
  </header>
  <main>
    <!-- 我们希望把主要内容放这里 -->
  </main>
  <footer>
    <!-- 我们希望把页脚放这里 -->
  </footer>
</div>
```

对于这样的情况，`` 元素有一个特殊的 attribute：`name`。这个 attribute 可以用来定义额外的插槽：

```
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

一个不带 `name` 的 `` 出口会带有隐含的名字“default”。

在向具名插槽提供内容的时候，我们可以在一个 ` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：

```
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

现在 ` 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 `v-slot` 的 ` 中的内容都会被视为默认插槽的内容。

然而，如果你希望更明确一些，仍然可以在一个 ` 中包裹默认插槽的内容：

```
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

任何一种写法都会渲染出：

```
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

注意 **`v-slot` 只能添加在 ` 上** (只有[一种例外情况](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#独占默认插槽的缩写语法))，这一点和已经废弃的 [`slot` attribute](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#废弃了的语法) 不同。

## **作用域插槽**

> 自 2.6.0 起有所更新。已废弃的使用 `slot-scope` attribute 的语法在[这里](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#废弃了的语法)。

有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的 `<current-user>` 组件：

```
<span>
  <slot>{{ user.lastName }}</slot>
</span>
```

我们可能想换掉备用内容，用名而非姓来显示。如下：

```
<current-user>
  {{ user.firstName }}
</current-user>
```

然而上述代码不会正常工作，因为只有 `<current-user>` 组件可以访问到 `user` 而我们提供的内容是在父级渲染的。

为了让 `user` 在父级的插槽内容中可用，我们可以将 `user` 作为 `<slot>` 元素的一个 attribute 绑定上去：

```
<span>
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>
```

绑定在 `<slot>` 元素上的 attribute 被称为*插槽prop*。现在在父级作用域中，我们可以使用带值的 `v-slot` 来定义我们提供的插槽 prop 的名字：

```vue
<!-- slotProps指向实例化的插槽的所有值 -->
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 `slotProps`，但你也可以使用任意你喜欢的名字。

### 独占默认插槽的缩写语法

在上述情况下，当被提供的内容*只有*默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 `v-slot` 直接用在组件上：

```
<current-user v-slot:default="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```

这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 `v-slot` 被假定对应默认插槽：

```
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```

注意默认插槽的缩写语法**不能**和具名插槽混用，因为它会导致作用域不明确：

```
<!-- 无效，会导致警告 -->
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
  <template v-slot:other="otherSlotProps">
    slotProps is NOT available here
  </template>
</current-user>
```

只要出现多个插槽，请始终为*所有的*插槽使用完整的基于 ` 的语法：

```
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>

  <template v-slot:other="otherSlotProps">
    ...
  </template>
</current-user>
```

### 解构插槽 Prop

作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里：

```
function (slotProps) {
  // 插槽内容
}
```

这意味着 `v-slot` 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 ([单文件组件](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/single-file-components.html)或[现代浏览器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#浏览器兼容))，你也可以使用 [ES2015 解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#解构对象)来传入具体的插槽 prop，如下：

```
<current-user v-slot="{ user }">
  {{ user.firstName }}
</current-user>
```

这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 `user` 重命名为 `person`：

```
<current-user v-slot="{ user: person }">
  {{ person.firstName }}
</current-user>
```

你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：

```
<current-user v-slot="{ user = { firstName: 'Guest' } }">
  {{ user.firstName }}
</current-user>
```

## 动态插槽名

> 2.6.0 新增

[动态指令参数](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/syntax.html#动态参数)也可以用在 `v-slot` 上，来定义动态的插槽名：

```
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

## 具名插槽的缩写

> 2.6.0 新增

跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (`v-slot:`) 替换为字符 `#`。例如 `v-slot:header` 可以被重写为 `#header`：

```
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：

```
<!-- 这样会触发一个警告 -->
<current-user #="{ user }">
  {{ user.firstName }}
</current-user>
```

如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：

```
<current-user #default="{ user }">
  {{ user.firstName }}
</current-user>
```

## 其它示例

**插槽 prop 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容。**这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。

例如，我们要实现一个 `` 组件，它是一个列表且包含布局和过滤逻辑：

```
<ul>
  <li
    v-for="todo in filteredTodos"
    v-bind:key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

我们可以将每个 todo 作为父级组件的插槽，以此通过父级组件对其进行控制，然后将 `todo` 作为一个插槽 prop 进行绑定：

```
<ul>
  <li
    v-for="todo in filteredTodos"
    v-bind:key="todo.id"
  >
    <!--
    我们为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
    -->
    <slot name="todo" v-bind:todo="todo">
      <!-- 后备内容 -->
      {{ todo.text }}
    </slot>
  </li>
</ul>
```

现在当我们使用 `` 组件的时候，我们可以选择为 todo 定义一个不一样的 ` 作为替代方案，并且可以从子组件获取数据：

```
<todo-list v-bind:todos="todos">
  <template v-slot:todo="{ todo }">
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo-list>
```

这只是作用域插槽用武之地的冰山一角。想了解更多现实生活中的作用域插槽的用法，我们推荐浏览诸如 [Vue Virtual Scroller](https://github.com/Akryum/vue-virtual-scroller)、[Vue Promised](https://github.com/posva/vue-promised) 和 [Portal Vue](https://github.com/LinusBorg/portal-vue) 等库。

## 废弃了的语法

> `v-slot` 指令自 Vue 2.6.0 起被引入，提供更好的支持 `slot` 和 `slot-scope` attribute 的 API 替代方案。`v-slot` 完整的由来参见这份 [RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md)。在接下来所有的 2.x 版本中 `slot` 和 `slot-scope` attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。

### 带有 `slot` attribute 的具名插槽

> 自 2.6.0 起被废弃。新推荐的语法请查阅[这里](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#具名插槽)。

在 ` 上使用特殊的 `slot` attribute，可以将内容从父级传给具名插槽 (把[这里](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#具名插槽)提到过的 `` 组件作为示例)：

```
<base-layout>
  <template slot="header">
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template slot="footer">
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

或者直接把 `slot` attribute 用在一个普通元素上：

```
<base-layout>
  <h1 slot="header">Here might be a page title</h1>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <p slot="footer">Here's some contact info</p>
</base-layout>
```

这里其实还有一个未命名插槽，也就是**默认插槽**，捕获所有未被匹配的内容。上述两个示例的 HTML 渲染结果均为：

```
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

### 带有 `slot-scope` attribute 的作用域插槽

> 自 2.6.0 起被废弃。新推荐的语法请查阅[这里](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#作用域插槽)。

在 ` 上使用特殊的 `slot-scope` attribute，可以接收传递给插槽的 prop (把[这里](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#作用域插槽)提到过的 `` 组件作为示例)：

```
<slot-example>
  <template slot="default" slot-scope="slotProps">
    {{ slotProps.msg }}
  </template>
</slot-example>
```

这里的 `slot-scope` 声明了被接收的 prop 对象会作为 `slotProps` 变量存在于 ` 作用域中。你可以像命名 JavaScript 函数参数一样随意命名 `slotProps`。

这里的 `slot="default"` 可以被忽略为隐性写法：

```
<slot-example>
  <template slot-scope="slotProps">
    {{ slotProps.msg }}
  </template>
</slot-example>
```

`slot-scope` attribute 也可以直接用于非 ` 元素 (包括组件)：

```
<slot-example>
  <span slot-scope="slotProps">
    {{ slotProps.msg }}
  </span>
</slot-example>
```

`slot-scope` 的值可以接收任何有效的可以出现在函数定义的参数位置上的 JavaScript 表达式。这意味着在支持的环境下 ([单文件组件](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/single-file-components.html)或[现代浏览器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#浏览器兼容))，你也可以在表达式中使用 [ES2015 解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#解构对象)，如下：

```
<slot-example>
  <span slot-scope="{ msg }">
    {{ msg }}
  </span>
</slot-example>
```

使用[这里](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-slots.md#其它示例)描述过的 `` 作为示例，与它等价的使用 `slot-scope` 的代码是：

```
<todo-list v-bind:todos="todos">
  <template slot="todo" slot-scope="{ todo }">
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo-list>
```

## 动态组件&异步组件

## 在动态组件上使用 `keep-alive`

我们之前曾经在一个多标签的界面中使用 `is` attribute 来切换不同的组件：

{% codeblock lang:html %} {% endcodeblock %}

当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。例如我们来展开说一说这个多标签界面：

{% raw %}

{{ tab }}

<script> Vue.component('tab-posts', { data: function () { return { posts: [ { id: 1, title: 'Cat Ipsum', content: '

Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around

' }, { id: 2, title: 'Hipster Ipsum', content: '

Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.

' }, { id: 3, title: 'Cupcake Ipsum', content: '

Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.

' } ], selectedPost: null } }, template: '\

\


\

\

\

### {{ selectedPost.title }}

\

\

\ **\ Click on a blog title to the left to view it.\** \

\

\ ' }) Vue.component('tab-archive', { template: '

Archive component

' }) new Vue({ el: '#dynamic-component-demo', data: { currentTab: 'Posts', tabs: ['Posts', 'Archive'] }, computed: { currentTabComponent: function () { return 'tab-' + this.currentTab.toLowerCase() } } }) </script> <style> .dynamic-component-demo-tab-button { padding: 6px 10px; border-top-left-radius: 3px; border-top-right-radius: 3px; border: 1px solid #ccc; cursor: pointer; background: #f0f0f0; margin-bottom: -1px; margin-right: -1px; } .dynamic-component-demo-tab-button:hover { background: #e0e0e0; } .dynamic-component-demo-tab-button.dynamic-component-demo-active { background: #e0e0e0; } .dynamic-component-demo-tab { border: 1px solid #ccc; padding: 10px; } .dynamic-component-demo-posts-tab { display: flex; } .dynamic-component-demo-posts-sidebar { max-width: 40vw; margin: 0 !important; padding: 0 10px 0 0 !important; list-style-type: none; border-right: 1px solid #ccc; } .dynamic-component-demo-posts-sidebar li { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; cursor: pointer; } .dynamic-component-demo-posts-sidebar li:hover { background: #eee; } .dynamic-component-demo-posts-sidebar li.dynamic-component-demo-active { background: lightblue; } .dynamic-component-demo-post-container { padding-left: 10px; } .dynamic-component-demo-post > :first-child { margin-top: 0 !important; padding-top: 0 !important; } </style> {% endraw %}

你会注意到，如果你选择了一篇文章，切换到 *Archive* 标签，然后再切换回 *Posts*，是不会继续展示你之前选择的文章的。这是因为你每次切换新标签的时候，Vue 都创建了一个新的 `currentTabComponent` 实例。

重新创建动态组件的行为通常是非常有用的，但是在这个案例中，我们更希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来。为了解决这个问题，我们可以用一个 `` 元素将其动态组件包裹起来。

```
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

来看看修改后的结果：

{% raw %}

{{ tab }}

<script> new Vue({ el: '#dynamic-component-keep-alive-demo', data: { currentTab: 'Posts', tabs: ['Posts', 'Archive'] }, computed: { currentTabComponent: function () { return 'tab-' + this.currentTab.toLowerCase() } } }) </script> {% endraw %}

现在这个 *Posts* 标签保持了它的状态 (被选中的文章) 甚至当它未被渲染时也是如此。你可以在[这个示例](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-keep-alive-with-dynamic-components)查阅到完整的代码。

注意这个 `` 要求被切换到的组件都有自己的名字，不论是通过组件的 `name` 选项还是局部/全局注册。

你可以在 [API 参考文档](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/api/#keep-alive)查阅更多关于 `` 的细节。

## 异步组件

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/dynamically-load-components?friend=vuejs)

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。例如：

```
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```

如你所见，这个工厂函数会收到一个 `resolve` 回调，这个回调函数会在你从服务器得到组件定义的时候被调用。你也可以调用 `reject(reason)` 来表示加载失败。这里的 `setTimeout` 是为了演示用的，如何获取组件取决于你自己。一个推荐的做法是将异步组件和 [webpack 的 code-splitting 功能](https://webpack.js.org/guides/code-splitting/)一起配合使用：

```
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})
```

你也可以在工厂函数中返回一个 `Promise`，所以把 webpack 2 和 ES2015 语法加在一起，我们可以写成这样：

```
Vue.component(
  'async-webpack-example',
  // 这个 `import` 函数会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
```

当使用[局部注册](https://github.com/vuejs/cn.vuejs.org/blob/master/src/v2/guide/components-registration.html#局部注册)的时候，你也可以直接提供一个返回 `Promise` 的函数：

```
new Vue({
  // ...
  components: {
    'my-component': () => import('./my-async-component')
  }
})
```

如果你是一个 **Browserify** 用户同时喜欢使用异步组件，很不幸这个工具的作者[明确表示](https://github.com/substack/node-browserify/issues/58#issuecomment-21978224)异步加载“并不会被 Browserify 支持”，至少官方不会。Browserify 社区已经找到了[一些变通方案](https://github.com/vuejs/vuejs.org/issues/620)，这些方案可能会对已存在的复杂应用有帮助。对于其它的场景，我们推荐直接使用 webpack，以拥有内置的头等异步支持。

### 处理加载状态

> 2.3.0+ 新增

这里的异步组件工厂函数也可以返回一个如下格式的对象：

```
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

> 注意如果你希望在 [Vue Router](https://github.com/vuejs/vue-router) 的路由组件中使用上述语法的话，你必须使用 Vue Router 2.4.0+ 版本。



# **基础语法**

## **模板语法**

模板语法指的是如何将数据放入html中，Vue.js使用了基于 HTML的模板语法，允许开发者**声明式**地将DOM绑定至底层 Vue 实例的数据。所有 Vue.js的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。

声明式: `{{ msg }}`声明该数据为模板语言



在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。



## 指令

指令 (Directives) 是带有“v-”前缀的**特殊属性**。指令属性会在渲染的DOM上应用特殊的响应式行为.

指令属性的值预期是单个**JavaScript表达式**(v-for除外)，指令的职责是，**当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM**。常见的指令有v-bind(监听:值改变)、v-if、v-on(监听:事件触发)。

```html
<p v-if="seen">现在你看到我了</p>
```

这里，`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除 `<p>` 元素。

在下面的例子中, 该指令的意思是:"将这个 **元素节点** 的 `title` 特性和Vue实例的 `message` 属性保持一致". 

```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```

```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```



```html
<!-- 根据ok的布尔值来插入/移除 <p> 元素 -->
<p v-if="ok">是否显示这一段</p>

<!-- 监听按钮的click事件来执行fnChangeMsg方法 -->
<button v-on:click="fnChangeMsg">按钮</button>
```

## 参数

一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML 特性：

```html
<a v-bind:href="url">...</a>
```

在这里 `href` 是参数，告知 `v-bind` 指令将该元素的 `href` 特性与表达式 `url` 的值绑定。

另一个例子是 `v-on` 指令，它用于监听 DOM 事件：

```
<a v-on:click="doSomething">...</a>
```

在这里参数是**监听的事件名**。

## 缩写

`v-` 前缀作为一种视觉提示，用来识别模板中 Vue 特定的特性。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，`v-` 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的[单页面应用程序 (SPA - single page application)](https://en.wikipedia.org/wiki/Single-page_application) 时，`v-` 前缀也变得没那么重要了。

因此，Vue 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：

[`v-bind` 缩写 -- :](https://cn.vuejs.org/v2/guide/syntax.html#v-bind-缩写)

```
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写  -->
<a :href="url">...</a>
```

[`v-on` 缩写 -- @](https://cn.vuejs.org/v2/guide/syntax.html#v-on-缩写)

```js
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>
```

…

它们看起来可能与普通的 HTML 略有不同，但 `:` 与 `@` 对于特性名来说都是合法字符，在所有支持 Vue 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。

## 封装函数

语法规则:

methods:{

函数名1: 匿名函数(要执行的命令),

函数名2:匿名函数

}

```html
    <div id="app">
        {{ num }}
        <br>
        <button @click="fnAdd" >单击按钮修改数字</button>
    </div>
    <script>
    var app = new Vue({
        el:"#app",
        data:{
            num : 1,
        },
        methods:{
            // 语法 -- 函数名: 匿名函数
            fnAdd: function(){
            this.num += 1 //获取当前对象的数据用this
            }
        }
    })
    </script>
```



## 数据显示

```html
        <div id="app">
            <!-- 直接显示数据 -->
                {{ message }}  <br>
                <!-- 进行命令操作 -->
                <div>{{ message.split("").reverse().join("-") }}</div>
                <!-- 进行数据运算操作 -->
                <span>{{num + 1}}</span>
                <!-- 三元运算 -->
                <!-- 条件?条件成立:条件不成立 -->
                <div>{{ bool?"成立":"不成立"}}</div>
              </div>
              <!-- 实例化的vue应用本质上是一个javascript对象 -->
              <script>
                  var app = new Vue({
                      //element, vue要控制的标签
                      el: '#app', 

                     //data存储vue的数据
                    data: {
                      message: 'HelloVue',
                      num: 1,
                      bool: false,
                    }
 
                  })
              </script>
```

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

```html
<span>Message: {{ msg }}</span>
```

Mustache 标签将会被替代为对应数据对象上 `msg` 属性的值。无论何时，绑定的数据对象上 `msg` 属性发生了改变，插值处的内容都会更新。

通过使用 [v-once 指令](https://cn.vuejs.org/v2/api/#v-once)，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

迄今为止，在我们的模板中，我们一直都只绑定简单的属性键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 **JavaScript 表达式支持**。

插入的值当中还可以写表达式：

```html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<a v-bind:href="url">链接文字</a>
<
```

这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含**单个表达式**，所以下面的例子都**不会**生效。

```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

#### [输出原始 HTML](https://cn.vuejs.org/v2/guide/syntax.html#原始-HTML)

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 `v-html` 指令：

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

```html
Using mustaches: <span style="color: red">This should be red.</span>

Using v-html directive: This should be red.
```

这个 `span` 的内容将会被替换成为属性值 `rawHtml`，直接作为 HTML——会忽略解析属性值中的数据绑定。注意，你不能使用 `v-html` 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。

## 控制HTML属性

语法: v-bind:href="变量"

Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 [v-bind 指令](https://cn.vuejs.org/v2/api/#v-bind)：

如果是**标签的属性要使用值(变量)**，就不能使用“Mustache”语法，需要写成使用v-bind指令：

```html
<a v-bind:href="url" v-bind:title='tip'>百度网</a>
<div id="app" :class="myClass">要显示的内容</div>
```

对于布尔特性 (它们只要存在就意味着值为 `true`)，`v-bind` 工作起来略有不同，在这个例子中：

```
<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果 `isButtonDisabled` 的值是 `null`、`undefined` 或 `false`，则 `disabled`特性甚至不会被包含在渲染出来的 `<button>` 元素中。

## 绑定Class与Style

控制CSS : class属性和style属性

实现方法: 字符串,字典, 对象, 列表 均可以完成对CSS的控制, 列表其实是对多个对象的引用

使用v-bind指令来设置元素的class属性或者sytle属性，它们的属性值可以是表达式，vue.js在这一块做了增强，表达式结果除了是字符串之外，还可以是对象或者数组。

#### 绑定样式

**核心思想**: 使用布尔值判断该class属性是否显示

可以给v-bind:class传一个字典，以动态的切换class

```html
<div class="static" v-bind:class="{active:isActive,'text-danger':hasError }"></div>
<!--data属性值 -->
data: {
  isActive: true,
  hasError: false
}
<!-- 渲染效果 -->
<div class="static active"></div>
```

也可以给v-bind:class传一个对象引用

```html
<div v-bind:class="classObject"></div>
data: {
	active: 'active',
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

可以给v-bind:class传一个数组，以应用一个 class 列表

```html
<div v-bind:class="[activeClass, errorClass]"></div>
......

data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

如果你也想根据条件切换列表中的 class，可以用**三元表达式**：

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div
```

在数组语法中也可以使用对象语法：

```
<div v-bind:class="[{ active: isActive }, errorClass]"></div>

```

#### 绑定内联样式

v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个**JavaScript 对象**。

CSS 属性名可以用驼峰式 (camelCase) 来命名

使用对象的方式可以用短横线分隔(came-class) --**需要用引号引起来**来命名：

```html
<div v-bind:style="{color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}
```

也可以给v-bind:style传一个对象引用,直接绑定到一个样式通常更好, 这会让模板更清晰. 同样的，对象语法常常结合返回对象的计算属性使用

```html
<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px' //使用驼峰式命名法
  }
}
```

```html
    <div id="app" :style="styleObject">这是内容, This is content, 1234567890</div>
    <script>
    var app = new Vue({
        el:"#app",
        data:{
            styleObject:{
                "color": "red",
                "font-size": 60,
                "text-align":"center"
            }
        }
    })
	</script>
```

v-bind:style 的**数组语法**可以将多个样式对象应用到同一个元素上：

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```







## **事件处理**

#### 监听事件

可以用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。

绑定事件的函数对象,在有参数时必须要小括号

```html
        <div id="app">

                <span>{{num + 1}}</span>

                <!-- 括号可以不写, 但是当插入参数时必须要写 -->
                <button @click= "fnTest()" >按钮</button> 
              </div>

              <script>
                  var app = new Vue({
                      el: '#app', 
                    data: {

                      num: 1,
                    },
                    methods:{
                        // 语法 -- 函数名: 匿名函数
                        fnTest: function(){
                            this.num += 1 //获取当前对象的数据用this
                        }
                    }
                  })
              </script>
```

#### 事件处理方法

简单的逻辑可以写在指令中, 然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 `v-on` 指令中是不可行的。因此 `v-on` 还可以接收一个需要调用的**方法名称**。

```html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
<script>
	var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
</script>
```

#### 内联处理器中的方法

除了直接绑定到一个方法，也可以在内联 JavaScript 语句中**调用方法**：

```html
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
<script>
new Vue({
      el: '#example-3',
      methods: {
        say: function (message) {
          alert(message)
        }
      }
    })
</script>
```

#### 事件修饰符

在事件处理程序中调用 `event.preventDefault()` (默认不要做,但会冒泡传播)或 `event.stopPropagation()` (阻止事件冒泡)是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。



#### 为什么在 HTML 中监听事件?

你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 `v-on` 有几个好处：

1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。
2. 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。
3. 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。

## **条件渲染**

通过条件指令可以控制元素的创建(显示)或者销毁(隐藏)

**特点**: 删除标签以达到隐藏的效果



#### v-if

控制切换一个元素是否显示也相当简单：

```html
<!-- 使用v-if控制元素节点的显示与隐藏 -->
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
<script>
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
</script>
```

#### v-else

v-else指令来表示 v-if 的“else 块”，v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。

```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

#### v-else-if

v-else-if，顾名思义，充当 v-if 的“else-if 块”，可以连续使用：

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

#### v-show

另一个用于根据条件展示元素的选项是 v-show 指令。不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS 属性 `display`。

用法和v-if大致一样，但是它不支持v-else,它和v-if的区别是，它制作元素样式的显示和隐藏，元素一直是存在的：

```html
<h1 v-show="ok">Hello!</h1>
```

#### [`v-if` vs `v-show`](https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)性能对比

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。



## **列表渲染**

支持渲染的数据类型: 数组, 对象(可迭代对象)

#### 数组遍历

[用 `v-for` 把一个数组对应为一组元素](https://cn.vuejs.org/v2/guide/list.html#用-v-for-把一个数组对应为一组元素)

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**

```html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

```

在 `v-for` 块中，我们可以访问所有父作用域的属性。`v-for` 还支持一个可选的第二个参数，即当前项的索引。

```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
<script>
    var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
</script>
```

你也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法：

```html
<div v-for="item of items"></div>
```

#### 对象遍历

你也可以用 `v-for` 来遍历一个对象的属性。

```html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
<script>
   var app2 = new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
</script>
```

你也可以提供第二个的参数为 property 名称 (也就是键名)：

```html
<div v-for="(value, name) in object">
  {{ name }}: {{ value }}
</div>
```

还可以用第三个参数作为索引：

```html
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

在遍历对象时，会按 `Object.keys()` 的结果遍历，但是**不能**保证它的结果在不同的 JavaScript 引擎下都一致。









## **表单输入绑定**

任何表单控件只要想绑定数据(value)都是使用v-model

实现双向绑定的原理: { prop?: string, event?: string } `v-model` 同时实现了属性和事件的绑定

基本思想: 首先获取表单(输入的数据)控件的value值

双向数据绑定: v-model指令先将HTML中表单的值绑定Vue, Vue再将表单的值通过模板语法渲染到页面中

### 基础用法

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。

它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

> `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。

实现**双向绑定**的原理: { prop?: string, event?: string } `v-model` 同时实现了属性和事件的绑定

`v-model` 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

- text 和 textarea 元素使用 `value` 属性和 `input` 事件；
- checkbox 和 radio 使用 `checked` 属性和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。



### 单行文本框

```html
<input v-model="message" placeholder="提示信息">
<p>输入的信息是:{{ message }} </p>
```

### 多行文本框

```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

在文本区域插值 (`<textarea>{{text}}</textarea>`) 并不会生效，应用 `v-model` 来代替。

### 单选按钮

js实现单选功能

```html
    <!-- 实现单选功能, 给标签组添加相同的name值 -->
    <!-- 实现单击文字选中单选框,需要用label for 来绑定单选框id -->
   <input type="radio" name='gender' id="one"><label for="one">男</label> <br>
   <input type="radio" name='gender' id="two"><label for="two">女</label>
```

vue实现单选功能	

```html
<div id="app">
        <div>现在被选中的是: {{ myradio }}</div>
<input type="radio" v-model="myradio" value="男" id="r_man"><label for="r_man">男</label><br>
<input type="radio" v-model="myradio" value="女" id="r_woman"><label for="r_woman">女</label>
</div>
<script>
    new Vue({
        el: "#app",
        data:{
            myradio:"男",
        }
    })
</script>
```

### 单个复选框

单个复选框, 绑定到布尔值

```html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

### 多个复选框

多个复选框，绑定到同一个数组：

```html
    <div id="app" >

    <input type="checkbox" v-model="checkbox" value="健身" id="s_selected"><label for="s_selected">健身</label><br>
    <input type="checkbox" v-model="checkbox" value="读书" id="s_selected_1"><label for="s_selected_1">读书</label><br>
    <input type="checkbox" v-model="checkbox" value="动漫" id="s_selected_2"><label for="s_selected_2">动漫</label><br>
    <div>{{ checkbox }} </div>
</div>
<script>
new Vue({
    el:"#app",
    data:{
        checkbox: ["读书"],
    }
})
</script>    
```

### 选择框

单选时 通过value来控制选项的值

```html
<div id="example-5">
  <select v-model="selected">
      <!-- disabled表示禁用选项 -->
    <option disabled value="">请选择</option>
    <option value="0" >A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
<script>
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
</script>
```

> 如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

### **表单输入值绑定**

对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时我们可能想把值绑定到 Vue 实例的一个动态属性上，这时可以用 `v-bind` 实现，并且这个属性的值可以不是字符串。

### **表单输入修饰符**

[`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy)

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转变为使用 `change` 事件进行同步：

```
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```

[`.number`](https://cn.vuejs.org/v2/guide/forms.html#number)

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

[`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim)

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```
<input v-model.trim="msg">
```

## 计算属性和侦听器

#### 计算属性compute

板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：

```
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

这个表达式的功能是将message字符串进行反转，这种带有复杂逻辑的表达式，我们可以使用计算属性

```js
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

......

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

#### 侦听属性watch

侦听属性的作用是侦听某属性值的变化，从而做相应的操作，侦听属性是一个对象，它的键是要监听的对象或者变量，值一般是函数,当你侦听的元素发生变化时，需要执行的函数，这个函数有两个形参，第一个是当前值，第二个是变化后的值。

```js
window.onload = function(){
    var vm = new Vue({
        el:'#app',
        data:{
            iNum:1
        },
        watch:{
            iNum:function(newval,oldval){
                console.log(newval + ' | ' + oldval) 
            }
        },
        methods:{
            fnAdd:function(){
                this.iNum += 1;
            }
        }
    });
}
```

## 条件渲染

通过条件指令可以控制元素的创建(显示)或者销毁(隐藏)，常用的条件指令如下：

#### v-if

v-if可以控制元素的创建或者销毁

```
<h1 v-if="ok">Yes</h1>
```

#### v-else

v-else指令来表示 v-if 的“else 块”，v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。

```
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

#### v-else-if

v-else-if，顾名思义，充当 v-if 的“else-if 块”，可以连续使用：

```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

#### v-show

另一个用于根据条件展示元素的选项是 v-show 指令。用法和v-if大致一样，但是它不支持v-else,它和v-if的区别是，它制作元素样式的显示和隐藏，元素一直是存在的：

```
<h1 v-show="ok">Hello!</h1>
```

## 列表渲染

通过v-for指令可以将一组数据渲染到页面中，数据可以是数组或者对象，v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。

#### 遍历数组

```
<ul id="example-1">
  <li v-for="item in items">
    {{ item}}
  </li>
</ul>
```

vue对象创建如下：

```
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: ['foo','bar']
  }
})
```

如果想加上索引值，可以加上第二个参数

```
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ index }} - {{ item.message }}
  </li>
</ul>
```

#### 遍历对象

也可以用 v-for 通过一个对象的属性来迭代

```
<ul id="v-for-object">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

如果想加上对象属性名，可以加上第二个参数

```
<ul id="v-for-object">
  <li v-for="(value,key) in object">
    {{ key }}-{{ value }}
  </li>
</ul>
```

## 事件处理

#### 事件绑定方法

可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码，事件的处理，简单的逻辑可以写在指令中，复杂的需要在vue对象的methods属性中指定处理函数。

```
<div id="example-1">
  <!-- 在指令中写处理逻辑 -->
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
......
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```

methods属性中指定处理函数：

```
<div id="example-2">
  <!-- greet 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
......

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function () {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
    }
  }
})
```

#### 事件修饰符

实际开发中，事件绑定有时候牵涉到阻止事件冒泡以及阻止默认行为，在vue.js可以加上事件修饰符

```
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
```

## 表单输入绑定

可以用 v-model 指令在表单 `<input> `及 `<textarea> `元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素

### 单行文本框

```
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

### 多行文本框

```
<span>Multiline message is:</span>
<p>{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

### 复选框

单个复选框，绑定到布尔值：

```
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

多个复选框，绑定到同一个数组：

```
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>

......

new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})
```

### 单选框

```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>

......
<script>
    new Vue({
      el: '#example-4',
      data: {
        picked: ''
      }
    })
</script>
```

### 下拉框

```html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
......

new Vue({
  el: '...',
  data: {
    selected:''
  }
})
```

## 计算属性

**匿名函数中引用实例中的数据时一定要记得使用this**

**应用场景**:模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。

**解决方案**: 复杂的表达式运算放到对象中封装而不是Mustache语法`{{}}`书写

**语法特征**: 使用computed接口:字典

计算属性: 命令必须是返回值的形式

属性名自定义:匿名函数

引用属性值时直接在mustache语法中写入匿名函数的键属性名即可



在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用**计算属性**。

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

这个表达式的功能是将message字符串进行反转，这种带有复杂逻辑的表达式，我们可以使用计算属性

```js
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

......

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

## 侦听属性

> 监听一个某个变化是否发生变法的

语法: watch参数API:对象

**侦听属性名(必须同变量名字相同):**匿名函数

匿名函数: function(newVal,OldVal){函数语句}

侦听属性中的匿名函数自带两个形参,第一个是变化后的值,第二个是变化之前的值

**侦听属性的作用是侦听某属性值的变化**，从而做相应的操作，侦听属性是一个对象，它的键是要监听的对象或者变量，值一般是函数,当你侦听的元素发生变化时，需要执行的函数，这个函数有两个形参，第一个是当前值，第二个是变化后的值。

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch`——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

```js
        watch:{
            // 侦听属性名（侦听的变量是谁就是哪个名字）：匿名函数
            // 参数1是变化之后的值，参数2是变化之前的值
            num:function(newVal, oldVal){
                // 0 | 1
                console.log(oldVal +'|' + newVal)
            }
        }
```



```js
window.onload = function(){
	var vm = new Vue({
        el:'#app',
        data:{
            iNum:1
        },
        watch:{
            iNum:function(newval,oldval){
                console.log(newval + ' | ' + oldval) 
            }
        },
        methods:{
            fnAdd:function(){
                this.iNum += 1;
            }
        }
    });
}
```



## 过滤器

作用: 格式化文本

#### **语法**: 

**定义过滤器**: filter参数API: 对象  >>  过滤器名称:匿名函数 >> 匿名函数自带形参是需要被格式化的数据,同时该函数必须是带有返回值的形式

**使用过滤器**: {{ 数据 | 过滤器名称 }}



Vue.js允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式

```html
<!-- 在双花括号中 -->
{{ prize | RMB }}

<!-- 在v-bind中 -->
<div v-bind:id="rawId | formatId"></div>
```

过滤器实际上是一个函数，可以在一个组件的选项中定义组件内部过滤器：

```js
        filters:{
            // 局部过滤器：只针对这个对象生效的过滤器
            // 过滤器名字：匿名函数（格式化命令）
            yuan:function(aa){
                if(aa==0)
                {
                    return aa
                }
                return aa + '元'
            }
        },
```

```js
filters:{
  RMB:function(value){
    if(value=='')
    {
      return;
    }
    return '¥ '+value;
  }
}
```

或者在创建 Vue 实例之前**全局定义过滤器**：这里是filter 而不是filters

语法: Vue.filter(过滤器名字,匿名函数) 

作用: 定义全局过滤器 -- 将来所有对象都能调用 -- 书写的位置一定应该在所有对象的上面(位于script标签中)

```js
    // 定义全局过滤器：所有对象都能调用 -- 代码书写位置一定是在所有对象的上面
    // Vue.filter(过滤器名字,匿名函数)
    // ￥
    Vue.filter('RMB', function(aa){
        if(aa==0)
        {
            return aa
        }
        return '￥' + aa
    })
    // 定义全局过滤器
```



```js 
Vue.filter('Yuan',function(value){
  if(value=='')
  {
    return;
  }
  return value+'元';
});
```

此时过滤器'RMB'只能在定义它的对象接管标签内使用，而'Yuan'可以全局使用

**同时引用多个过滤器**: 使用多个管道

```html
    <div>{{ price1 | yuan | RMB }}</div>
```



### 自定义指令 

> 指令 v-on v-bind v-model

指令是用来做DOM操作的，如果vue现有的指令不能满足开发要求，我们需要对普通DOM元素进行底层操作，这时候就会用到自定义指令。

定义一个全局指令，让input框自动获取焦点

```
Vue.directive('focus',{
  inserted:function(el,binding){
    el.focus();
    el.style.background = 'gold';
    console.log(binding.name);
  }     
})
......

<div id="app">    
  <input type="text" v-focus>
</div>
```

如果定义成vue对象局部的，可以用vue对象的directives属性：

```
directives: {
  focus: {
    inserted: function (el,binding) {
      el.focus();
      el.style.background = 'gold';
      console.log(binding.name);
    }
  }
}
```

### 实例生命周期

> 理解生命周期:任何一个Vue实例的生命周期类似于Python中的实例: 由创建 >> 初始化 >> 挂载  >> 更新>>销毁等过程够, 期间还会有其他的监听事件产生比如(组件激活, 遇到错误)
>
> 挂载: Vue实例绑定到标签之前

每个Vue实例在被创建时都要经过一系列的初始化过程——例如，需要设置**数据监听**、**编译模板**、**将实例挂载到DOM**并在**数据变化时**更新 DOM 等。同时在这个过程中会自动运行一些叫做**生命周期钩子**的函数，我们可以使用这些函数，在实例的不同阶段加上我	们需要的代码，实现特定的功能。

生命周期钩子在实例生命周期的不同阶段被调用，如 [`mounted`](https://cn.vuejs.org/v2/api/#mounted)、[`updated`](https://cn.vuejs.org/v2/api/#updated) 和 [`destroyed`](https://cn.vuejs.org/v2/api/#destroyed)。生命周期钩子的 `this` 上下文指向调用它的 Vue 实例。

#### beforeCreate

在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

#### created

在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始

```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```



#### beforeMount

在挂载开始之前被调用：相关的 render 函数首次被调用。

**该钩子在服务器端渲染期间不被调用。**

#### **mounted**: 重点

理解:Vue实例已经作用于标签了, 可以完全操纵了

实例挂载到dom之后被调用，可以当成是vue对象的ready方法来使用，一般用它来做dom的初始化操作。

`el` 被新创建的 `vm.$el` 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 `mounted` 被调用时 `vm.$el` 也在文档内。

**该钩子在服务器端渲染期间不被调用。**

注意 `mounted` **不会**承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 [vm.$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick) 替换掉 `mounted`：

```js
// 用法和data methods同级  mounted: 匿名函数
mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
```



#### beforeUpdate

数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

**该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。**

#### updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用[计算属性](https://cn.vuejs.org/v2/api/#computed)或 [watcher](https://cn.vuejs.org/v2/api/#watch) 取而代之。

**该钩子在服务器端渲染期间不被调用。**

注意 `updated` **不会**承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 [vm.$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick) 替换掉 `updated`：

```js
updated: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
  })
}
```

#### activated

keep-alive 组件激活时调用。

**该钩子在服务器端渲染期间不被调用。**

#### [deactivated](https://cn.vuejs.org/v2/api/#deactivated)

keep-alive 组件停用时调用。

**该钩子在服务器端渲染期间不被调用。**

#### beforeDestroy

实例销毁之前调用。在这一步，实例仍然完全可用。

**该钩子在服务器端渲染期间不被调用。**

#### [destroyed](https://cn.vuejs.org/v2/api/#destroyed)

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

**该钩子在服务器端渲染期间不被调用。**

#### errorCaptured

当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播。

> 你可以在此钩子中修改组件的状态。因此在模板或渲染函数中设置其它内容的短路条件非常重要，它可以防止当一个错误被捕获时该组件进入一个无限的渲染循环。

**错误传播规则**

- 默认情况下，如果全局的 `config.errorHandler` 被定义，所有的错误仍会发送它，因此这些错误仍然会向单一的分析服务的地方进行汇报。
- 如果一个组件的继承或父级从属链路中存在多个 `errorCaptured` 钩子，则它们将会被相同的错误逐个唤起。
- 如果此 `errorCaptured` 钩子自身抛出了一个错误，则这个新错误和原本被捕获的错误都会发送给全局的 `config.errorHandler`。
- 一个 `errorCaptured` 钩子能够返回 `false` 以阻止错误继续向上传播。本质上是说“这个错误已经被搞定了且应该被忽略”。它会阻止其它任何会被这个错误唤起的 `errorCaptured` 钩子和全局的 `config.errorHandler`。

### 生命周期图示

![官方图片](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193619.png)



### **数据交互**

> 使用axios前需要,加载axios.js脚本到网页

vue.js没有集成ajax功能，要使用ajax功能，可以使用vue官方推荐的axios.js库来做ajax的交互。 axios库的下载地址：https://github.com/axios/axios/releases

用法机会和ajax完全一样: type/method = method  done = then fail = catch(捕获)

axios安装说明

使用npm安装:

```
$ npm install axios
```

调用cdn链接:

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

直接调用上方的链接将js文件下载下来,然后通过外链式引用

```js
    <script src="js/axios.min.js"></script>
```



#### 官方参考示例

```html
    <script src="js/vue.js"></script>
    <script src="js/axios.min.js"></script>
<div id="app" >
    <div>{{ info }}</div>
</div>
<script>
new Vue({
    el:"#app",
    data:{
        info:null,
    },
    mounted:function () {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    }
})
</script> 
```



#### axios完整写法：



```
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

axios请求的写法也写成get方式后post方式。

#### 执行get请求

```js
// 为给定 ID 的 user 创建请求
// then是请求成功时的响应，catch是请求失败时的响应

axios.get('/user?ID=12345')
//成功之后的回调函数
.then(function (response) {
  console.log(response);
})
//失败之后的回调函数
.catch(function (error) {
  console.log(error);
});


// 可选地，上面的请求可以这样做
axios.get('/user', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```

#### 执行post请求

```js
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```

#### 其他小知识点

事件冒泡在Vue中依然存在,解决这类问题采用修饰函数`stop`比如 `@click.stop` 来阻止事件冒泡

`return false` 在Vue中不光支持阻止事件冒泡, 还支持阻止表单提交,

另一种阻止表单自动提交的方式是prevent函数, 语法顺序是 `@click.stop.prevent`

阻止表单提交: prevent

阻止事件冒泡: stop



# **API接口**

### el  >> element元素

作用是获取要被控制的元素, 语法等同于选择器,一般被控制的元素被标记为id选择器

### model

> 同时绑定属性和事件, 这也是为什么会是双向绑定的原因

类型: { prop?: string, event?: string }

允许一个自定义组件在使用 `v-model` 时定制 prop 和 event。默认情况下，一个组件上的 `v-model` 会把 `value` 用作 prop 且把 `input` 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 `value` prop 来达到不同的目的。使用 `model` 选项可以回避这些情况产生的冲突。

## Vue.js进阶

> 学习目标: 了解单页面怎么开发, **知道在什么位置放数据**

## 组件 - Component

```shell
组件定义
组件应用场景
组件用法
组件结构
```





> 公司一般会专门有人拆分组件写项目的, 前端也不会自己写组件,会有一个工具生成组件,然后往里面填写内容;
>
> 工作中都是开发单文件

组件示例:

```js
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

//使用组件
<div id="components-demo">
  <button-counter></button-counter>
</div>

//创建Vue应用, 实例化
new Vue({ el: '#components-demo' })
```



组件(Component)是Vue.js最强大的功能之一。**组件可以扩展 HTML 元素**，封装可重用的代码。所有的 Vue 组件同时也都是 Vue 的实例，所以可接受相同的选项对象 (除了一些根级特有的选项) 并提供相同的生命周期钩子。

**理解组件**: 类似一个代码块, 可以被多引用. 核心思想是封装思想, 类似一个模块(属性,方法,模板),组件注册,就是讲组件注册到vue中, 组件好比一个模块, 里面封装了很多功能,哪里有需要就往哪里搬, 将(结构,表现,行为)三个部分封装到一个组件中,然后在需要时显性地调用该模块即可. 

**组件用法**: 注册一个组件, 使用组件(当做HTML元素),在Vue中, 是Vue的抽象, 在HTML中是HTML的抽象

注册组件语法: Vue.component('组件名',{组件信息: Vue实例化})

**注册及使用组件**

组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 `<button-counter>`。我们可以在一个通过 `new Vue` 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：

```js
// 注册一个全局组件：
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

//使用组件
<div id="example">
  <my-component></my-component>
</div>
......

//实例化Vue
new Vue({
  el: '#example'
})
```

```js
// 定义组件
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function () {
        return {
        counter: 0
      }
  }
})

// 使用组件
<div id="example-2">
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
</div>
......
new Vue({
  el: '#example-2'
})
```

#### 注册局部组件

全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。

在这些情况下，你可以通过一个普通的 JavaScript 对象来定义组件：

```js
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
```

然后在 `components` 选项中定义你想要使用的组件：

```
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```

对于 `components` 对象中的每个属性来说，**其属性名就是自定义元素的名**字，其属性值就是这个组件的选项对象。

注意**局部注册的组件在其子组件中不可用**。例如，如果你希望 `ComponentA` 在 `ComponentB` 中可用，则你需要这样写：

```
var ComponentA = { /* ... */ }

var ComponentB = {
  components: {
    'component-a': ComponentA
  },
  // ...
}
```



因为组件是可复用的 Vue 实例，所以它们与 `new Vue` 接收相同的选项，例如 `data`、`computed`、`watch`、`methods` 以及生命周期钩子等。仅有的例外是像 `el` 这样根实例特有的选项。

### 组件的复用

你可以将组件进行任意次数的复用：

```html
<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```

注意当点击按钮时，每个组件都会各自独立维护它的 `count`。因为你每用一次组件，就会有一个它的新**实例**被创建。也就是说,**组件之间**是**彼此独立**的

### data必须是函数 - 使用返回值得形式	

**组件就是vue的实例**，所有vue实例中属性和方法，组件中也可以用，但是data属性必须是一个函数，因为组件会重复使用在多个地方，为了使用在多个地方的组件数据相对独立，**data属性需要用一个函数来返回值**。

```js
//普通Vue实例中
data: {
  count: 0
}

//Vue组件中
data: function () {
  return {
    count: 0
  }
}
```



### 组件的组织 - 逐层排列和嵌套

通常一个应用会以一棵嵌套的组件树的形式来组织：

![组织](/home/wwfyde/wwfyde/wwfyde/Markdown/images/components.png)



例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。

为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。这里有两种组件的注册类型：**全局注册**和**局部注册**。至此，我们的组件都只是通过 `Vue.component` 全局注册的：

```js
Vue.component('my-component-name', {
  // ... options ...
})
```

全局注册的组件可以用在其被注册之后的任何 (通过 `new Vue`) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。

### props传递数据

通过prop向子组件传递数据

prop是组件中的参数, 类似于vue实例中的data??? 好像不对 组件中也有data属性

早些时候，我们提到了创建一个博文组件的事情。问题是如果你不能向这个组件传递某一篇博文的标题或内容之类的我们想展示的数据的话，它是没有办法使用的。这也正是 prop 的由来。

Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。为了给博文组件传递一个标题，我们可以用一个 `props` 选项将其包含在该组件可接受的 prop 列表中：

```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。在上述模板中，你会发现我们能够在组件实例中访问这个值，就像访问 `data` 中的值一样。

一个 prop 被注册之后，你就可以像这样把数据作为一个自定义特性传递进来：

```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

如果想给组件中传递参数，组件要显式地用 props 选项声明它预期的数据：



```html
<!-- 样式 -->
<style>
    .breadcrumb{width:90%;line-height:50px;
    border-bottom:1px solid #ddd;margin:0px auto;}
    .breadcrumb .hot{font-weight:bold;color:red;letter-spacing:2px;}
</style>

......
<div id="app">
    <bread-crumb pos="首页&gt;图片列表"></bread-crumb>
</div>

<script>
    Vue.component('bread-crumb',{
        props:['pos'],
        template:'<div class="breadcrumb" @click="fnLight">当前位置：<span :class="{hot:isHot}">{{pos}}</span></div>',
        data:function(){
            return {
                isHot:false
            }
        },
        methods:{
            fnLight:function(){
                this.isHot = !this.isHot;
            }
        }
    })
    let vm = new Vue({
        el:'#app'
    })
</script>
```

### [单个根元素](https://cn.vuejs.org/v2/guide/components.html#单个根元素)

当构建一个 `<blog-post>` 组件时，你的模板最终会包含的东西远不止一个标题：

```
<h3>{{ title }}</h3>
```

最最起码，你会包含这篇博文的正文：

```
<h3>{{ title }}</h3>
<div v-html="content"></div>
```

然而如果你在模板中尝试这样写，Vue 会显示一个错误，并解释道 **every component must have a single root element (每个组件必须只有一个根元素)**。你可以将模板的内容包裹在一个父元素内，来修复这个问题，例如：

```
<div class="blog-post">
  <h3>{{ title }}</h3>
  <div v-html="content"></div>
</div>
```

看起来当组件变得越来越复杂的时候，我们的博文不只需要标题和内容，还需要发布日期、评论等等。为每个相关的信息定义一个 prop 会变得很麻烦：

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
  v-bind:content="post.content"
  v-bind:publishedAt="post.publishedAt"
  v-bind:comments="post.comments"
></blog-post>
```

所以是时候重构一下这个 `<blog-post>` 组件了，让它变成接受一个单独的 `post` prop：

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
```

```html
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})
```



## render 渲染函数

[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)

- **类型**：`(createElement: () => VNode) => VNode`

- **详细**：

  字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 `createElement` 方法作为第一个参数用来创建 `VNode`。

  如果组件是一个函数组件，渲染函数还会接收一个额外的 `context` 参数，为没有实例的函数组件提供上下文信息。

  Vue 选项中的 `render` 函数若存在，则 Vue 构造函数不会从 `template` 选项或通过 `el` 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。

Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用**渲染函数**，它比模板更接近编译器。

让我们深入一个简单的例子，这个例子里 `render` 函数很实用。假设我们要生成一些带锚点的标题：

# 快速开始

## 环境搭建



- 参考文档
    - [ant-design-vue](https://antdv.com/docs/vue/introduce-cn/)
    - [ant-design-vue-pro](https://pro.loacg.com/)
    - 官方文档: [vue-cli](https://cli.vuejs.org/zh/guide/)
- 推荐工具
    - chrome
    - vscode / webstorm
    - nodejs/npm/yarn
        - 切换源
        - 本地安装时, 其实是安装到当前文件夹
        - 全局安装时, 其实是安装到全局文件夹, 需要使用命令的推荐这种方式

```shell
# 安装node.js
# 查看 计算机实用技巧.md

# 安装yarn
npm install -g yarn
yarn config set registry https://registry.npm.taobao.org
# 安装cnpm

# 安装vue-cli
sudo npm install -g @vue/cli
yarn global add @vue/cli




```

## Vue工程应用

### 创建项目

```shell
# 创建vue项目
vue create ant-demo

# 使用组件
# npm i --save ant-design-vue
yarn add ant-design-vue
```



```js


// 引入组件 src/main/js
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

// 注册组件
import { Button } from 'ant-design-vue';
Vue.use(Button);
```



## 第一个应用



```js
// data 函数风格, 应是Vue实现的接口
new Vue({
    el: '#app',
    // data(){
    //     return {
    //         msg : "hello, 世界!",
    //     }
    // },
    data: {
        msg: "hello, 世界!",
    }
})
```

html页面直接嵌入组件

```

```



# 常见需求

- 传入数据

  - `{{}}`模板变量渲染

- 捕获input数据

  - `v-model`双向绑定, 页面或脚本或后端修改都会出发页面显示

- 添加列表

  - 使用列表(数据结构)控制, 然后使用

- 清除表单

  - this.info = ''

- 自定义标签 其实器具Vue组件

- 事件
  - @
  - v-on:

- 绑定
  - :
  - `v-bind:`

- 全局组件
  - Vue.component()
    - 属性声明: 标签的属性, 作用是当做一个变量, 传递该值到组件中
    - 组件拿到声明的属性的值, 并渲染

- 组件可以引入组件
  - 组件相当于一个HTML标签, 同时该组件上下文有着自己的样式和script
  - 组件引用了还不能直接使用, 需要先注册了才能使用

- `scoped` 限定样式的作用域, 仅对当前组件生效

  - 如何做到的?

- 在console 控制台中获取data中的值

    - vm.$data
    - vm 表示创建 new Vue()对象

    

    

## 

# 专题笔记

## 模块系统

webpack

babel

