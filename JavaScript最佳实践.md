# JavaScript最佳实践

## 技术栈

> https://andreasbm.github.io/web-skills/

## 安装配置

# fnm

```
curl -fsSL https://fnm.vercel.app/install | bash
```

# nvm

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



# npm

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



# yarn

```shell
corepack disable 
corepack enable

corepack prepare yarn@4 --activate
```



# 配置

```shell
```



# 技术标准

## htmx



# toolchain

> - [openai-node](https://github.com/openai/openai-node)

## eslint

## prettier

## vite

## redux(不推荐)

## vitepress

## mdx+next



# Packages

## vite

## axios-推荐

可选 fetch

使用axios 拦截器与

配合 React Query 进行异步数据请求管理。

Axios 支持拦截器，更容易与 FastAPI 的接口集成。

## jest

## three.js

## zod-表单数据类型检查和验证, 配合typescript

## core.js

## moment-日期处理

## lodash

## echarts

## dotenv

## underscore

## animate.css



# Frameworks

## React

## Next(推荐)

## Ant.design

## umi(结合antd)

## Vue

# CSS

## sass

## tailwind(推荐)



# icons

## **Heroicons**：与 TailwindCSS 完美搭配。

## **React Icons**：多样化图标选择，轻量简单。



# 开发增强

## MDX

## yarn

## **pnpm**



## Volta

## umi







# 调试技巧



# 参考项目

[shuttle.rs 官网源码](https://github.com/shuttle-hq/www)
