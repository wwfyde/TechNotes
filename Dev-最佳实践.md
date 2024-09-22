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



## AI总结

> 在开发者的工作中，有许多值得遵循的规范和最佳实践文档，除了你提到的Conventional Commits和Semantic Versioning，以下是一些重要的规范和最佳实践文档：
>
> ### 1. **Code Style Guides (代码风格指南)**
>
> - **Google Style Guides**: 包含了多种编程语言的代码风格指南，例如 Google JavaScript Style Guide 和 Google Python Style Guide。
> - **Airbnb JavaScript Style Guide**: 非常流行的JavaScript代码风格指南，适用于现代JavaScript开发。
> - **PEP 8 (Python Enhancement Proposal 8)**: Python语言的代码风格标准，几乎是每个Python开发者必须遵循的规范。
>
> ### 2. **Documentation Standards (文档标准)**
>
> - **JSDoc**: 用于为JavaScript代码添加注释和生成文档的工具和标准。
> - **Sphinx & reStructuredText**: Python文档生成工具，结合reStructuredText，广泛用于创建高质量的Python项目文档。
>
> ### 3. **Version Control Best Practices (版本控制最佳实践)**
>
> - **Git Flow**: 一种基于Git的分支模型，帮助开发者更好地管理项目的开发、发布和维护。
> - **GitHub Flow**: 相对简化的分支模型，适用于持续集成和持续部署环境。
>
> ### 4. **API Design Guidelines (API设计指南)**
>
> - **RESTful API Design Guidelines**: 设计RESTful API的最佳实践，包括资源命名、状态码使用、分页等。
> - **GraphQL Best Practices**: 如果使用GraphQL进行API设计，了解和遵循这些最佳实践非常重要。
>
> ### 5. **Testing Practices (测试实践)**
>
> - **Test-Driven Development (TDD)**: 先编写测试再编写功能代码的一种开发实践。
> - **Behavior-Driven Development (BDD)**: 通过描述行为来驱动开发，常与Cucumber、Gherkin等工具配合使用。
> - **Unit Testing Best Practices**: 单元测试的最佳实践，包括测试覆盖率、测试独立性等。
>
> ### 6. **Security Best Practices (安全最佳实践)**
>
> - **OWASP Top Ten**: OWASP（开放Web应用程序安全项目）列出的Web应用程序最常见的十大安全风险及应对措施。
> - **SANS/CWE Top 25**: 常见的最危险的编程错误列表，提供如何避免这些错误的指导。
>
> ### 7. **Continuous Integration/Continuous Deployment (CI/CD)**
>
> - **Continuous Integration Best Practices**: 涉及如何配置和运行持续集成管道，以保证代码的持续质量。
> - **Continuous Deployment Best Practices**: 自动化部署的最佳实践，包括如何安全地将代码推向生产环境。
>
> ### 8. **Project Management Best Practices (项目管理最佳实践)**
>
> - **Agile Manifesto & Scrum**: 敏捷开发和Scrum的核心原则和实践。
> - **Kanban**: Kanban板用于管理项目任务的流动性，特别是在持续交付和DevOps环境中。
>
> ### 9. **Accessibility Standards (可访问性标准)**
>
> - **WCAG (Web Content Accessibility Guidelines)**: Web内容可访问性指南，确保网页对所有用户都可访问，包括残障人士。
>
> ### 10. **Containerization and Orchestration Best Practices (容器化和编排最佳实践)**
>
> - **Docker Best Practices**: 使用Docker进行容器化的最佳实践。
> - **Kubernetes Best Practices**: 部署和管理容器化应用的最佳实践。
>
> 这些规范和最佳实践文档有助于提高代码质量、团队协作效率以及项目的可维护性和可扩展性。你可以根据具体的技术栈和项目需求选择合适的规范进行深入学习和实践。

# 最佳实践

# 数据同步

## 策略

### 主从复制

### 双主复制

### 快照同步

### 增量同步

### 双写策略(dual-write strategy)

### 消息队列同步

### 定时任务同步

## 方案

### 接口同步

### 双写策略

在UAT环境进行数据变更时，同时将变更写入生产环境。这种方式要求在应用层面进行较多的改动。

### 定时任务

设置定时任务，定期比较UAT和生产环境的数据，并进行同步。这种方式适合数据变更频率较低的场景。

### 消息队列

使用消息队列（如Kafka或RabbitMQ）实现增量数据同步。UAT环境中的数据变更事件可以发布到消息队列，生产环境的消费者订阅这些事件并进行相应的数据更新。

### 数据库级别的复制

使用MySQL的主从复制或者多主复制特性，可以在数据库级别实现数据的实时同步。

### 
