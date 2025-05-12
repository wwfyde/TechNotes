# Web最佳实践

> 非构建开发模式: raw/plain/classic/pure html 原始/经典, 不用任何构建的原始HTML
>
> build system: modern web development with build step



## 技术栈

> https://andreasbm.github.io/web-skills/

## 参考项目

- https://github.com/langgenius/dify
- https://github.com/GetStream/stream-chat-react?tab=readme-ov-file
- https://github.com/GetStream/website-react-examples/

## Tools

- nidjourney
- https://jsonplaceholder.typicode.com/
- tsx > ts-node

## 安装配置

## 认知

- 前端的环境变量分为, 浏览器(客户端), 构建时, 运行时
- 前端在构建时注入环境变量到浏览器(静态文件), 是明文, 因此需要注意
- vite中推荐优先使用`import.meta.env` 而不是`process.env`



## 效率提示

- [emmet](https://code.visualstudio.com/docs/languages/emmet) 实现代码块

# package manager

## nvm

```shell
brew install nvm


You should create NVM's working directory if it doesn't exist:
  mkdir ~/.nvm

Add the following to your shell profile e.g. ~/.profile or ~/.zshrc:
  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion


nvm use

nvm alias default 20

nvm which 20 

# 支持的长期版本
nvm ls-remote --lts

# 已安装
nvm ls

# 系统版本
nvm use system
nvm run system --version

# 不同环境中使用不同node 通过.nvmrc 然后nvm use
.nvmrc
#然后
nvm use
```



## npm

配置

```shell
### 镜像加速
# 查看当前配置
npm config get refistry

# 淘宝镜像
npm config set registry https://registry.npmmirror.com

# 腾讯镜像
npm config set registry http://mirrors.cloud.tencent.com/npm/

# 华为镜像
npm config set registry https://mirrors.huaweicloud.com/repository/npm/

```

```shell
# 全局安装 甚至会自动安装
npx vite@4 ..

npx 
```



## pnpm



```shell
# 安装 pnpm 依赖 
pnpm install tailwindcss @tailwindcss/postcss postcss

# 升级依赖
pnpm update package-name # 只会升级到 3.x.x
pnpm add package-name@latest  # 这会忽略^ 允许 3.x.x->4.x.x


pnpm create vite --template=react-ts
```





## yarn

> 主语 pnp 模式与`node-modules`模式

```shell
corepack disable 
corepack enable

corepack prepare yarn@4 --activate
```

# plugin

## eslint

```shell
# https://typescript-eslint.io/getting-started
pnpm add --save-dev eslint @eslint/js typescript typescript-eslint
```

```js
// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
);
```



### eslint-config-prettier

https://prettier.io/docs/integrating-with-linters

### ~~eslint-plugin-prettier~~

## prettier

> In other words, use **Prettier for formatting** and **linters for catching bugs!**
>



# vite

## start

```shell

pnpm create vite --template=react-ts
```



## vite.config.ts

> `pnpm add -D @types/node` 以解决 path __dirname 报错

```shell
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// pnpm add -D @types/node

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()]
})
```



## plugins

### vite-plugin-static-copy

### vite-tsconfig-paths







# umi

```shell
# 使用umi max 创建项目 
npx create-umi@latest

```



# Types

- 

- ```
  @types/node
  ```

# **React**

## 编程范式

- **声明式、组件化、函数式与面向状态** 

## code-inspector-plugin

> option + shift
>
> 一直按住⌥option + Shift，鼠标在页面上移动，找到对应元素后点击即可代码定位

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { codeInspectorPlugin } from 'code-inspector-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // code-inspector-plugin should be used before @vitejs/plugin-react
    codeInspectorPlugin({ bundler: 'vite' }),
    react(),
  ],
});

```



# **Vue**

![Image](https://mmbiz.qpic.cn/sz_mmbiz_png/EO58xpw5UMPNTRVCmJtBSZTGmCOFGWO86vSKfKYxOnXDStQNgqvfkwU7c5BUWrtXSwTvAGUbrN0KbfRv6nd3icA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

## Links

- [vite-ts-tailwind-starter](https://github.com/Uninen/vite-ts-tailwind-starter)
- [](https://mp.weixin.qq.com/s/YpQU2A8Ke6mm73LW3toCYQ)
- [尤雨溪：React 生态中那些很酷的工具，Vue 生态中也有对应实现！](https://mp.weixin.qq.com/s/XkTrezd5sLj5KRPWiuQykQ)

## 编程范式

- 组合式(Composition API)代替选项式(Option API) API
- `<script setup>` 提升效率
  - 不再需要 `setup()` 函数。
  - 不需要手动 `return` 数据和方法。
  - 所有顶层声明的变量/函数都自动暴露给模板。
  - 更加简洁，适合大型项目逻辑组织。



## pina

状态管理

## vue-router

## VueUse

## primevue

## ElementPlus

## Arco Design

## TDesign

## vite-plugin-vue-devtools



## nuxt

## motion-vue

## Reka UI(UI 组件库) ：Shadcn -> Shadcn-vue (shadcn-vue.com)

## Aceternity UI / Magic UI -> Inspira UI (inspira-ui.com)

## 优秀的表单库，如 Formkit (formkit.com) 和 VueForm (vueform.com)。

## 数据请求：React Query -> TanStack Query for Vue

## UI 组件库 ：Shadcn -> Shadcn-vue (shadcn-vue.com)

# create-next-app

> next 模版 https://nextjstemplates.com/templates?type=free
>
> https://vercel.com/templates

# 配置

```shell
```

# 调试Debug

> react developer tools

## react

hide logs during additional invocations in strict mode

- hit count % 2

# **Solutions**

## SSG

### vitepress

### astro(★)

### next+mdx

### nextra

## SSR

### react-router

### next

### remix

## chart

### echarts



# 技术标准

## htmx



# toolchain

> - [openai-node](https://github.com/openai/openai-node)

## eslint

### plugin

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

## prettier



### plugin

- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)



## vite

## redux(不推荐)

## vitepress

## nextra(next+mdx)

## mdx+next

>  https://github.com/shuding/nextra-docs-template

## next-mdx-remote







# **Packages**

## vite

## axios-推荐

可选 fetch

使用axios 拦截器与

配合 React Query 进行异步数据请求管理。

Axios 支持拦截器，更容易与 FastAPI 的接口集成。

## fetch

## jest

## three.js

## zod-表单数据类型检查和验证, 配合typescript

>  配合 react-hook-form
>
>  In this guide, we will take a look at building forms with [`react-hook-form`](https://react-hook-form.com/) and [`zod`](https://zod.dev/).
>  https://ui.shadcn.com/docs/components/form



## core.js

## moment-日期处理

## ~~lodash~~

## echarts

## dotenv

## ~~underscore~~

## animate.css

## react-hook-form

## @tanstack/react-query



## react-infinite-scroll-component(无限加载)

## next-auth

https://github.com/nextauthjs/next-auth



## zustand(全局状态)

> 这是客户端状态管理库, 服务端通常还是使用React Context 

## marked

## highlight.js

## shiki(语法高亮)

> modern

# 开发增强

types-fest

@type/*

ts-node

## 类型支持

- **@types/***: TypeScript类型定义包
- **type-fest**: 有用的TypeScript类型集合
- **ts-node**: 直接运行TypeScript文件

## 代码质量

> code quality

- [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports)

## 调试增强

- code-inspector (code-inspect-plugin)



# Frameworks

## React

## Next(推荐)

## Ant.design

```shell
# ant design 使用tailwindcss 时 应该使用 css 
# Tailwind CSS v4.0 is a full-featured CSS build tool designed for a specific workflow, and is not designed to be used with CSS preprocessors like Sass, Less, or Stylus.
# Tailwind CSS v4.0 是一个为特定工作流程设计的全功能 CSS 构建工具，不设计用于与 Sass、Less 或 Stylus 等 CSS 预处理器一起使用。
# Think of Tailwind CSS itself as your preprocessor — you shouldn't use Tailwind with Sass for the same reason you wouldn't use Sass with Stylus.
# 将 Tailwind CSS 本身视为您的预处理器 — 您不应该像您不会用 Sass 与 Stylus 一起使用一样，用 Tailwind 与 Sass 一起使用。

# 完整版ant-design-pro
pnpm dlx @ant-design/pro-cli create ant-design-admin
```



## umi(结合antd)

## Vue

> 主流也是Shadcn UI

## ui

## radix-ui

> openai, claude 有使用, 
>
> roadmap.sh 推荐

## headlessui

> chatgpt 采用 
>
> tailwindcss 官方的ui 

[headlessui](https://github.com/tailwindlabs/headlessui)





# CSS

## scss

> 推荐scss

## tailwind(推荐)

原子化CSS



# icons

## **Heroicons**：与 TailwindCSS 完美搭配。

## **React Icons**：多样化图标选择，轻量简单。

# 静态页面

>  Static Site Generator(SSG)
>
> > https://www.wappalyzer.com/technologies/static-site-generator/
>
> >  https://www.wappalyzer.com/technologies/static-site-generator/nextra



## vitepress

## rspress

## nextra

> - [vercel-swr](https://swr.vercel.app/)
>   - 推荐 喜欢页面的风格, 适合快速生成静态文档
> - https://authjs.dev/getting-started

## mintlify

## next+mdx

> 自定义程度最高, 但是可能比较费时

## ~~astro~~

> 可能需要一定的上手时间, 虽然可定制化程度最高

# 技术方案



- 后台管理: React + antd
- 高度可定制界面: React + Next.js +  Tailwind + shadcn + radixui
  - **Tailwind + shadcn/ui + Radix 黄金三角**
    - Radix Primitives（无障碍基础）
      │
      ▼
      shadcn/ui（样式实现层）
      │
      ▼ 
      Tailwind（样式原子）
  - Day.js
- 静态站点, 基于Markdown的网站
  - vitepress
  - mdx
  - nextra
  - mintlify
  - next-mdx-remote


# 开发增强

## MDX

## yarn

## **pnpm**



## Volta

## umi





# **最佳实践**

## 布局技巧

```css
flex: '1 1 0%',
overflow: 'hidden auto',
```



## 滚动问题

> [!Important]
>
> 使用 `react-infinite-scroll-component` 库来实现, 如果是ant-design, 结合List使用



# 调试技巧



# 参考项目

[shuttle.rs 官网源码](https://github.com/shuttle-hq/www)	
