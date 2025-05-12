

# React

## 学习路径

> 核心知识

## 核心特性

## 目录结构

```shell
public  # 静态资源, 通常不会被打包和构建工具(vite/webpack)处理, 而是直接复制到构建的输出目录
favicon.ico  # 站点图标
manifest.json  # 清单文件 用于定义Web应用的外观和行为


/src
./assets  # 用于存放需要经过构建过程处理的静态资源，如样式文件、图像（如果不是放在 public/ 中的话）等。

/assets/  #（顶级目录）：有时用于存放不需要通过构建工具处理的静态资源，不过这些资源也可以放在 public/ 中。

```



```shell
# Ant Design Pro文件夹结构 https://pro.ant.design/zh-CN/docs/folder
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```



### 页面代码结构推荐

为了让项目代码组织更加规范，让开发能够更方便的定位到相关页面组件代码，我们定义了一套规范，该规范当前只作为推荐的指导，并非强制。

```shell
src
├── components
└── pages
    ├── Welcome        // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── components // 对于复杂的页面可以再自己做更深层次的组织，但建议不要超过三层
    |   ├── Form.tsx
    |   ├── index.tsx  // 页面组件的代码
    |   └── index.less // 页面样式
    ├── Order          // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── index.tsx
    |   └── index.less
    ├── User
    |   ├── components // group 下公用的组件集合
    |   ├── Login      // group 下的页面 Login
    |   ├── Register   // group 下的页面 Register
    |   └── util.ts    // 这里可以有一些共用方法之类，不做推荐和约束，看业务场景自行做组织
    └── *              // 其它页面组件代码
```

所有路由组件（会配置在路由配置中的组件）我们推荐以大驼峰命名打平到 pages 下面第一级（复杂的项目可以增加 group 层级，在 group 下放置 pages）。不建议在路由组件内部再嵌套路由组件 - 不方便分辨一个组件是否是路由组件，而且不方便快速从全局定位到路由组件。

我们推荐尽可能的拆分路由组件为更细粒度的组件，对于多个页面可能会用到的组件我们推荐放到 src/components 中，对于只是被单个页面依赖的（区块）组件，我们推荐就近维护到路由组件文件夹下即可。

# Hooks

### UseState-触发器

> React 的渲染机制基于 **声明式编程** 和 **不可变性** 的设计理念。
>
> ### **声明式编程 vs. 命令式编程**
>
> - 声明式：告诉 React *"根据状态渲染成这样"*
> - 命令式：自己手动操作 DOM 去更新 UI

作用, 触发UI界面重新渲染, 

1. **普通变量的变化不会触发 React 的重新渲染**。

2. **跟踪状态变化**：每次调用 `setState`，React 会知道状态发生了更新。

   **触发重新渲染**：React 会使用最新的状态重新调用组件函数，并更新 DOM。

React 函数组件是**无状态的函数**，每次重新渲染都会重新执行函数，局部变量会被重新初始化

每次组件重新渲染时，`count` 都会重新初始化为 `0`，之前的值完全丢失。而 `useState` 内部维护了状态，能够在重新渲染之间保持值。

因此

`useState` 的工作机制可以分为以下几个步骤：

1. **状态存储**： React 内部使用链表存储每个组件的 Hook 数据，并绑定到组件的 Fiber 节点上。
2. **状态读取**： 每次渲染时，根据 Hook 调用的顺序获取对应的状态。
3. **状态更新**： 调用 `setState` 时，React 将新的状态存入状态队列中，并触发重新渲染。

### UseEffect-监听器

渲染后的副作用, 保证渲染后根据状态更新执行一些副作用

[]数组表示只执行一次, 页面/组件初始化时这样写[a, b] - 当useEffect有多个依赖项时，只要 任意一个依赖发生变化，就会触发副作用函数。

### useCallback-缓存函数

### useMemo-缓存计算结果



# Glossary

## 布局-Layout

## 路由-Route

# Antd

## 参考资料

- [Github ant design pro: 示例项目](https://github.com/ant-design/ant-design-pro)
  - [官网](https://pro.ant.design)
- [语雀-AntD实战教程](https://www.yuque.com/ant-design/course)

## 常见问题

### ant design pro 登录失败

别使用 `npm run dev ` 而是使用 `npm start` 才会登录成功

# 编程范式

### 开发流程建议

1. 需求分析

- 明确页面功能需求

- 划分组件层级

- 确定状态管理方案

1. 开发步骤

- 先搭建静态页面

- 确定状态结构

- 添加交互功能

- 处理边界情况

- 优化性能

1. 测试和维护

- 编写单元测试

- 进行性能测试

- 添加适当的注释

- 保持代码整洁

```tsx
状态声明  
 - 局部状态：使用 useState
 - 复杂状态：使用 useReducer
 - 全局状态：使用 Context API 或 Redux/Zustand
副作用处理(生命周期管理)
事件处理函数(业务逻辑处理函数, 初始化逻辑)
条件渲染逻辑
主题渲染
```



# Next

# Vite

[Vite 官网](https://cn.vitejs.dev)

[Vite](https://vitejs.dev)

# HeroUI

# 概述

Vite（法语意为 "快速的"，发音 `/vit/`，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：

- 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://cn.vitejs.dev/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)。
- 一套构建指令，它使用 [Rollup](https://rollupjs.org/) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

Vite 是一种具有明确建议的工具，具备合理的默认设置。您可以在 [功能指南](https://cn.vitejs.dev/guide/features.html) 中了解 Vite 的各种可能性。通过 [插件](https://cn.vitejs.dev/guide/using-plugins.html)，Vite 支持与其他框架或工具的集成。如有需要，您可以通过 [配置部分](https://cn.vitejs.dev/config/) 自定义适应你的项目。

Vite 还提供了强大的扩展性，可通过其 [插件 API](https://cn.vitejs.dev/guide/api-plugin.html) 和 [JavaScript API](https://cn.vitejs.dev/guide/api-javascript.html) 进行扩展，并提供完整的类型支持。

你可以在 [为什么选 Vite](https://cn.vitejs.dev/guide/why.html) 部分深入了解该项目的设计理念。

## 核心概念

打包(bundle)

构建(build)

依赖()

源码

### 原生[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules): 模块功能

```html
<script type="module" src="main.js"></script>
```

```js
// 导入模块对象 并声明命名空间
import * as Module from "/modules/module.js";

Module.function1();
Module.function2();
```

# 最佳实践



## 状态管理

> [!Note]
>
> - `context API` + `useReducer` (Hooks)
> - zustand

## 私有路由

路由保护, 私有路由

private route, protected route WithAuth, AuthProvider

# 问题记录

```js
// jsx中 

style={{display:'none'}}
```

