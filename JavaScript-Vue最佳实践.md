# Vue最佳实践

# 常见需求

按需加载

定制主题

## 折叠面板-collapse

colls

## iframe 父子页面传递消息

```javascript
export default ={
    mounted(){
        window.addEventListener('message', function(){
            console.log(e)
        }
	},
	methods: {
                      test(){
            window.parent.postMessage({closeWindow: true}, '*')
        }
                                }
}
                     
```



# 项目初始化

## 注意事项

- MacOS全局安装时需要使用`sudo`命令

## 基础环境

### node.js和npm

```shell
# node.js

# npm


# vue-cli
sudo npm install -g @vue/cli
```

### vue-cli 官方构建工具

```shell
sudo npm install -g @vue/cli
# OR
sudo yarn global add @vue/cli
```



# 风格规范

[官方风格指南](https://v3.cn.vuejs.org/style-guide/)

[official-style-guide](https://v3.vuejs.org/style-guide/)

```shell
# 绑定变量 myList

# 属性名 my-prop

# 组件名(标签名) myComponent my-component
```

# 开发记录

## 转置表格

> 技术: element

表头显示到列首, 而不是行首

### 技术要点

- 隐藏原表头
    - `:show-header="false"`
- 转置数据
- 列数问题 
    - 需要使用的for 循环

### 技术缺陷





# Vite

# Vue-cli

# 单页面网站开发



参考文档-HM.vue 含视频

## 单页面网站

单页面: 一个网站只有一个页面

*实现原理*: 通过框架实现,然后通过框架里面的路由功能,查找到对应的组件. 实际上实现的是一个页面组件之间的跳转,而不是页面与页面之间的跳转

好处: 节省用户流量, 节省用户等待时间, 时间成本资源成本都会减少 对于服务器来说不需要渲染整个页面, 所以服务器的负载也会降低

单页面网站基于框架**vue-project** 开发

```text
使用流程
1. 准备环境 需要用到node
	1.1安装node
	1.2安装自动化开发工具包
2.下载框架并启动服务
3.书写代码
4.打包上线
```

对于单页面网站开发,公司会有专门的前端人员去拆分组件写项目的

单页面组件怎么开发

但也组件开发的好处

知道在哪找位置放数据   component组件文件夹下的vue文件中

## 环境搭建

## 单文件组件 -组件以文件的形式出现



将一个组件相关的html结构，css样式，以及交互的JavaScript代码从html文件中剥离出来，合成一个文件，这种文件就是单文件组件，相当于一个组件具有了结构、表现和行为的完整功能，方便组件之间随意组合以及组件的重用，这种文件的扩展名为“.vue”，比如："menu.vue"。代码顺序: template, JavaScript,Style Scoped

单文件组件写js必须是模块导出的形式

scoped块级作用域, 显示地声明该组件只生效于组件中

#### 单文件组件代码结构

```vue
// 使用template标签来定义html部分
<template>
<div class="breadcrumb" @click="fnLight">
  当前位置：<span :class="{hot:isHot}">{{pos}}</span>
</div>
</template>

// javascript要写成模块导出的形式：
<script>
    // 导出了 才能被应用 参考ES6语法
export default{
  props:['pos'],
  name:'breadcrumb',
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
}
</script>

// 样式中如果有scope关键字，表示这些样式是组件局部的，不会影响其他元素
<style scoped>
.breadcrumb{
    width:90%;
    line-height:50px;
    border-bottom:1px solid #ddd;
    margin:0px auto;
}
.breadcrumb .hot{
    font-weight:bold;
    color:red;
    letter-spacing:2px;
}
</style>
```

### Vue组件开发自动化工具

#### windows终端操作

1、打开终端
在window开始的搜索框，输入cmd，回车；或者在开始上点右键，选择运行，输入cmd回车；或者在window窗口的地址栏上输入cmd，回车。

2、常用终端命令

```
// 查看文件夹内容
dir +回车

// 进入某个文件夹
cd 文件夹名 +回车

// 进入上一级文件夹
cd .. +回车 

// 切换到e盘
e: +回车

// 清除屏幕
cls +回车
```

#### Node.js

Node.js是一个新的后端(后台)语言，它的语法和JavaScript类似，所以可以说它是属于前端的后端语言，后端语言和前端语言的区别：

- 运行环境：后端语言一般运行在服务器端，前端语言运行在客户端的浏览器上
- 功能：后端语言可以操作文件，可以读写数据库，前端语言不能操作文件，不能读写数据库。

Node.js如果安装成功，可以查看Node.js的版本,在终端输入如下命令：

```
node -v
```

#### npm

npm是node.js的包管理器，安装了node.js同时会自动安装这个包管理器，可以npm命令来安装node.js的包。这个工具相当于python的pip管理器。

#### 安装vue的自动化工具

vue开发生态区提供了用node.js开发的自动化开发工具包，这个工具包可以帮我们编译单文件组件。

也叫vue的脚手架

```
// 全局安装 vue-cli
npm install --global vue-cli
```

### 生成Vue单页面应用项目目录

#### 单页应用(SPA)

单页Web应用（single page web application，SPA），就是将系统所有的操作交互限定在一个web页面中。单页应用程序 (SPA) 是加载单个HTML页面，系统的不同功能通过加载不同功能组件的形式来切换，不同功能组件全部封装到了js文件中，这些文件在应用开始访问时就一起加载完，所以整个系统在切换不同功能时，页面的地址是不变的，系统切换可以做到局部刷新，也可以叫做无刷新，这么做的目的是为了给用户提供更加流畅的用户体验。

#### 生成项目目录

使用vue自动化工具可以快速搭建单页应用项目目录。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：

```
// 生成一个基于 webpack 模板的新项目
$ vue init webpack my-project

// 启动开发服务器 ctrl+c 停止服务
cd my-project
npm run dev
```


需要关注的是上面标注的三个目录：

- 文件夹1(src)，主开发目录，要开发的单文件组件全部在这个目录下
  - components -- 组件文件存放位置, 找对应组件, 放对应数据
  - router -- 路由跳转页面, 路由功能
  - App.vue -- 框架里面最大的组件
  - main.js -- 查找组件用的文件
- 文件夹2(static)，静态资源目录，所有的css，js文件放在这个文件夹
- 文件夹3(dist)，项目打包发布文件夹，最后要上线单文件项目文件都在这个文件夹中
- build -打包配置文件
- config --框架的配置文件
- node_modules -- 模块文件
- index.html首页面

还有node_modules目录是node的包目录，config是配置目录，build是项目打包时依赖的目录。

#### 页面结构说明

![项目文件夹图](https://ask.qcloudimg.com/http-save/yehe-2193867/5ok3nzt1p9.png)
整个项目是一个主文件index.html,

index.html中会引入src文件夹中的main.js,

main.js中会导入顶级单文件组件App.vue,

App.vue中会通过组件嵌套或者路由来引用components文件夹中的其他单文件组件。

## Vue单页面项目实战

> 了解单页面系统开发流程

### 组件嵌套

将单文件组件组合在一起有两种方式，一种是嵌套方式，一种用路由的方式。嵌套的方式代码如下：

下图示中，假设组件A中要嵌入组件B

```html
<template>

    // 在A组件中使用B组件
    <B_zujian></B_zujian>
</template>


<script>
// 先导入B组件，其中'@'表示src目录，组件后的vue扩展名可以省略
import B_zujian from '@/components/B_zjian'

export default{
    name:'A_zujian',
    data:function(){
        return {
            iNum:0
        }
    },
    // 接着在components属性选项中注册
    components:{
        B_zujian
    }
}


</script>
```

### 路由

可以通过路由的方式在一个组件中加载其他组件，要使用路由功能，需要在main.js中先导入路由的包,然后在组件对象中还需要包含它。

```
import router from './router'

new Vue({
    .....
    router
})
```

组件中通过路由标签来加载其他的路由

```
<!-- 路由标签 -->
<router-view></router-view>

<!-- 简写成下面一个标签的形式： -->
<router-view/>
```

路由标签里面加载哪个组件呢？在router文件中的index.js文件中设置

```
import Vue from 'vue'
import Router from 'vue-router'

// 导入对应组件 '@' 表示src文件夹
import MainList from '@/components/MainList'
import UserList from '@/components/UserList'
import UpDate from '@/components/UpDate'

// 使用路由模块的固定写法
Vue.use(Router)

// path为'/'表示路由默认加载的组件
// 这些路由默认设置的是App.vue中的路由标签加载的组件
export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainList',
      component: MainList
    },
    {
      path: '/user',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/update',
      name: 'UpDate',
      component: UpDate
    }
  ]
})
```

通过链接可以切换路由标签里面对应的组件，链接的地址是上面index.js文件中定义的path值，不过链接标签是"router-link",链接地址用'to'来定义：

```
<router-link to="/">股票信息</router-link>
<router-link to="/user">个人中心</router-link>
```

链接地址中可以传递参数，格式如下：

```
// name对应的是路由中定义的一个path对应的name属性
<router-link :to='{name:"UpDate",params:{code:item.code}}'>
```

有时候需要在组件的js中跳转页面，也就是改变路由，改变路由有下面这些方式：

```
// 当前页面重新加载
this.$router.go('/user');

// 跳转到另外一个路由
this.$router.push({path:'/user'});

// 获取当前的路由地址
var sPath = this.$route.path;
```

### 数据请求及跨域

#### 数据请求

数据请求使用的是ajax，在vue中使用的axios.js，这个文件可以在index.html文件中引入，也可以作为模块导入，在main.js中导入这个模块，然后将它绑定在Vue类的原型上。

```
import axios from 'axios'
Vue.prototype.axios = axios
```

在组件的js代码中使用axios：

```
this.axios({......})
```

#### 跨域请求

vue的自动化工具提供了开发的服务器，我们在这个服务器环境下开发，改动代码可以马上更新显示，错误了还有代码提示，非常方便，但是，如果我们组件中需要数据，而且数据在另一个服务器环境下运行，我们就需要跨域请求数据，vue工具中可以使用代理来跨域请求，设置的方法是：在项目的config文件夹中，打开index.js,在proxyTable一项中设置：

```
// 'http://localhost:7890' 表示的是要跨域请求的地址
// 如果请求的地址是：'http://localhost:7890/index_data'
// 在请求时就可以写成: '/apis/index_data'

'/apis': {
    target: 'http://localhost:7890', 
    changeOrigin: true,
    pathRewrite: {
        '^/apis': ''
    }              
}
```

### 打包上线

项目开发完成后，需要把请求数据的代理地址改成和提供数据的服务器在同一个域的地址，因为最终会把前端代码放在和数据在同一个域的服务器下面运行。

```
// 将下面的请求地址
'/apis/index_data'

// 改成
'/index_data'
```

改完请求地址后，就可以将代码打包，生成最终可以上线的单文件结构：

```
// 打开终端，ctrl+c停掉开发服务器，执行下面的命令

npm run build
```

自动化程序会将打包的文件自动生成到项目的dist文件夹中。

将这些文件拷贝到提供数据服务的服务器的静态目录文件夹中，完成最终的上线！

#  Ant design - 单文件组件

使用 基于 Vue-cli 的脚手架工具

```html
<!-- 添加按钮 -->
<a-button type='primary'>按钮</a-button>

```

单文

## 项目结构

```shell

```



# Ant-design-pro

依赖组件

```js
//快速安装 
yarn install
// 全局安装

@vue/cli

@vue/cli-service

@vue/cli-plugin-babel

@vue/cli-plugin-eslint

@vue/cli-plugin-unit-jest

// 本地安装

```

页面结构

```yaml
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 个人页
  - 个人中心
  - 个人设置
- 帐户
  - 登录
  - 注册
  - 注册成功
```

# 极客时间

1. 创建Vue程序
2. 创建单文件组件
3. Vue程序改写为单位件组件

## 常见需求

- 使用路由管理用户权限

- 根据路由生成菜单

- 可动态改变的页面

- 路由的实现方式

- 通过条件判断 来隐藏表单 39/15:00

- 权限控制

  - 路由级别 : 39 
  - 组件级别 :40
    - 组件式的
    - 指令式的
  - 函数式组件提高渲染性能

- 全局注册组件的方法之一

  - 推荐, 缺点是写法不太方便

  - ```js
    import Authorized from "./components/Authorized" // 导入组件
    
    Vue.component('Authorized', Authorized)
    ```

  - ```vue
    <Authorized :authority=['admin']>
        <SettingDrawer />
    </Authorized>
    ```

- 权限指令

  - 缺陷, 只有第一次才去控制, 如果更改了用户权限就不行, 但是一般都没必要更改用户权限 所以两者都是可以的	

  - ```js
    // 书写指令
    ```

  - 

  - ```js
    import Auth from "./directive/auth"  // 导入指令
    
    Vue.use(Auth)  // 注册指令
    ```

  - ```js
    //相应的要控制的组件上加上
    v-auth 指令式 的
    v-auth = ['admin']
    ```

- 组件中使用图标库



## 生态工具

ant design vue helper

ant design pro

## 创建项目

 项目名 ant-design-vue-pro

- 工具列表
  - vue
  - babel
  - eslint
  - jest
  - router
  - vuex
- 安装库
  - ant-design-vue 
  - moment
- `npm install` 自动修复依赖



## webpack and babel

### 按需加载

babel-plugin-import

## 路由的实现方式

实现方式: *基于配置* 和 *基于约定*



## 可动态改变的页面



## 根据路由生成菜单38- 如何将路由和菜单结合

## 用户权限校验 39 使用路由管理用户权限

## 与服务端进行交互

快速切换mock环境和联调环境, 通过添加环境变量来区分环境

cross env

## 创建一个表单 44 手动校验

## 初始状态, 自动校验, 动态赋值

自动校验功能表单

基于双向绑定的表单功能

Antd表单设计模式

# OM前端

```shell
vue create ommanager_vue

cd ommanager_vue

yarn add ant-design-vue moment
```

