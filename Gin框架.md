# Gin框架



## 参考资料

- gin
- gin-contrib
- gin-examples

## features

- 零分配路由。
- 仍然是最快的 http 路由器和框架。
- 完整的单元测试支持。
- 实战考验。
- API 冻结，新版本的发布不会破坏你的代码。



### crash-free



# Glossary

> 核心概念



## 特性

## 路由-Route

根据请求地址匹配路由规则(由pattern组成), 根据匹配到的pattern执行相应的HandleFunc(也称Controller)

### 路由组Group

为路由批量设置前缀

## 中间件-Middleware

提高路由的可扩展性, 自由的为路由添加执行逻辑

## 定时任务cron

# API

## Cheat Sheet

| API         | 作用 |      |
| ----------- | ---- | ---- |
| gin.Context |      |      |
| gin.Default |      |      |
|             |      |      |

# Quick Start

## 常见问题

- 如何使用中间件
- 项目结构和代码组织

# Gin with grpc

其实就是一种封装, 封装到 router

# Topics

## 认证和授权

### jwt

- https://jwt.io/introduction
- https://github.com/golang-jwt/jwt

## 安全Security

csrf, cors

## 缓存Cache

## 日志Log

## 命令行Command

## 性能

## 基准测试

# 最佳实践



## 项目布局

### 方案一: 按业务划分

目录是业务分, 文件是技术划分

layer是业务

section是技术



# hertz

