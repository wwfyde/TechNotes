# Dev-最佳实践

# Glossary

## Items

### RBAC-角色访问控制

- https://www.cloudflare.com/zh-cn/learning/access-management/role-based-access-control-rbac/
- https://www.redhat.com/zh/topics/security/what-is-role-based-access-control

### Infrastructure as Code(IaC, 基础设施及服务)

通过基础设施软件来实现功能, 比如 redis, etcd



## 环境配置

### 问题索引

- django/fastapi迭代更新部署最佳实践
- django应用如何持续更新部署

### 分支策略

开发(dev), 预发布(staging, ~~pre-release~~, UAT,~~预生产~~), 生成环境(production)

### 自动化测试

### 配置热加载



# 代码质量

## 基本原则

### 模块化

### 分层架构

# 开发规范

```shell
# 代码目录
~/projects  # 推荐
~/src

# 用户二进制
~/.local/bin
/usr/local/bin

# 用户配置
~/.config
~/.<project_name>/config
~/.ssh/
~/.gitconfig
~/.npm/

# 控制文件run commands
~/.vimrc
~/.zshrc

# 用户缓存
~/.cache

# 应用/软件安装目录(第三方软件目录
/usr/local
/opt

# 二进制
/usr/local/bin
/usr/bin

# lib
/usr/local/lib

#
```

