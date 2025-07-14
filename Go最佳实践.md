# Go最佳实践

编程规范, 编程思想, 最佳实践, 开发指南, 编程指引, 最佳建议, 大佬的建议和经验总结

## 参考资料

- https://go.dev
- https://go.dev/doc/
- https://go.dev/ref/spec
- https://gobyexample.com
- [wiki: 常见错误—Common-mistakes](https://github.com/golang/go/wiki/CommonMistakes)

## 安装配置

- https://go.dev/wiki/Ubuntu

### 方法一 ppa

```shell
sudo add-apt-repository ppa:longsleep/golang-backports
sudo apt update
sudo apt install golang-go

```

### 方法二 snap

```shell
sudo snap install --classic go
```



# 学习技巧(原则)

## List/Map/Tree

- 如何快速理解标准库(context为例)?
    - 理清标准库的基本结构
        - go doc context | grep "^func"
        - type: 一个type对应一个模型, 不同的粒度有不同的模型, 模型之间相互组合
        - 类型分类
            - struct
            - interface
            - function
            - map
            - slice
            - string
            - array
            - numeric
            - channel
            - pointer
            - boolean
        - 如何创建分类, 简单类型有创建alias,复杂的类型则是通过组合(不同粒度的类型),
    - 查看源码中的



## Table

# Go Ecosystem Landscape

> Research,Developer Survey

<img src="https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202309011119444.svg" alt="go_app" style="zoom:175%;" />

# 基础设施与组件

## 参考资料

- 问题索引
    - Go后端常用基础设施(infrastructure)和组件(component)

## 数据库

## 缓存

## 消息队列

### Nats

### RabbitMQ

### Kafka

### Redis

## 任务调度

cron

## 搜索引擎

## 认证和授权

## 路由

CDN

## web服务器

## 日志和监控

## 容器和编排

## 自动化配置管理

ansible

Terraform

## 安全管理

vault

## 认证和授权

OAuth JWT

## 云服务

## API网关

# **quickstart**

# 编程规范

## 命名规范

Package-包: package, my_package

Function variable: camelCase

Private Entity(unexported entity): camelCase/lowerCamelCase

Public Entity(exported entity): PascalCase/UpperCamelCase

### Function/Method Var

整体采用短变量/缩写, 通常是调用对象的首字母联合, 

| abbr | mean        | 备注                             |
| ---- | ----------- | -------------------------------- |
| ret  | return      | 表示函数的返回值                 |
| m,n  |             | 通常用于多重循环的的key和index中 |
| srv  | service     |                                  |
| src  | source      |                                  |
| desc | description | Specification for object/strcut  |
| dest | destination | 目的地                           |



# **编程思想**

核心思想

## 编程的本质

将数学

## 零散记录

- 如何解决复杂问题
    - 基本思想是分解, 分解步骤, 分解部分, 分解层(抽象层次).
    - 复用, 嵌套, 归类(分块), 抽象, 接口, 结构化
        - 通过接口交互, 建立一个中间层, 来隔离问题
    - 同一问题可以有不同的描述, 即不同的抽象层次
    - 数据与操作, 属性与方法分离
    - 思考变与不变, 提取不变的部分, 将变化的部分, 抽象为一套逻辑, 即用方法来表示变化
- Go语言的库的入口是, 函数, 类型
- **先系统设计，再定义接口，最后具体实现**



## 面向接口编程

> 思想来源, 极客时间-《手把手带你写一个Web框架》, 第10节-面向接口编程：一切皆服务，服务基于协议(上)
>
> **Interface Oriented Programming:OIP**

<u>个人理解: 程序通过接口,函数,命令等方式为客户提供服务, 一个接口往往是的名称是,某某器, 某某者, 某某人</u>

> 组织的方法也很简单，之前提到过。如果你还记得我们第五课封装请求和返回结构的时候，先定义了 IRequest 和 IResponse 接口，再一一实现具体的函数方法，**这种先接口后实现的方式，其实不仅仅是一种代码优化手段，更是一种编程思想：面向接口编程**，这其实就是我们组织功能模块的核心思路。

### 参考资料

- https://bbs.huaweicloud.com/blogs/327026

### 抽象业务



### 屏蔽具体实现



### 面向接口/对象/过程

### 依赖注入





# 编程思想



## 理解

理解的本质是描述, 通过感知到的信息, 从不同角度和层次剖析并逐渐深入


## 分解

元思维, 

认知,判断, 重复

## 重构

## 复用

## 分层

分多个层面描述同一个问题, 同一个概念可以有多种表现形式

## 抽象

## 结构化

## 模块化

## 自动化

## 编程的本质



> Programming, at its essence, is the process of instructing a computer to perform specific tasks. It involves designing, writing, testing, debugging, and maintaining the source code of computer programs. This source code is written in a programming language, the means by which a programmer precisely defines the actions to be carried out by the system.
> The essence of programming can be distilled into a few key elements:
> **Problem Solving**: Programming is fundamentally about solving problems. At its core, a programmer’s job involves taking a problem, breaking it down into manageable parts, figuring out a solution to those parts, and then translating those solutions into code.
>
> **Communication**: Programming is also a form of communication. Not only is the programmer communicating with the computer via code, but also with others (including future self) who might read or maintain the code.
>
> **Abstraction**: Programming often involves building abstract models of real-world scenarios in code, and manipulating those models to achieve desired results.
>
> **Automation**: Programming enables automation of tasks, which can save time, reduce errors, and increase efficiency. This could be anything from simple scripts to complex systems.
>
> **Creativity**: Although programming is a highly technical skill, it also involves a great deal of creativity. Finding innovative solutions to problems, designing algorithms, or crafting an elegant piece of code, can all be highly creative tasks.
>
> Programming is an ever-evolving field, and its essence lies in its ability to adapt to new challenges, technologies, and paradigms. Having a mindset that embraces these features is crucial to being a successful programmer.

编程, 本质上是一个指示计算机执行特定任务的过程. 该过程涉及到计算机程序源代码的设计, 编写, 测试, 调试和维护. 源代码由某种编程语言编写, 这意味着程序员通过这种方式精确定义可由计算机系统执行的操作.

编程的本质可以提炼成以下几种关键元素:

- **问题解决**(Problem Solving): 编程从根本上讲就是解决问题. 作为核心, 程序员的任务涉及到提取任务,分解成可管理的部分, 理解并得出(figure out)这些部分的解决方案, 然后将解决方案转译成代码. 
- **沟通**(Communication: 编程也是一种沟通形式. 不仅通过代码与计算机进行沟通, 而且与可能阅读和维护代码的人(包括将来的自己)进行沟通.
- **抽象**(Abstraction): 编程经常涉及到用代码构建现实场景的抽象模型, 然后操作这些模型以实现期望中的结果.
- **自动化**(Automation): 编程使得任务自动化, 这可以节省时间, 减少错误, 提升效率. 这可以是任何从简单脚本到复杂系统的过程.
- **创造性**(Creativity): 尽管编程时一种高度技术化的技能, 编程也涉及到大量的创造力(idea of creativity). 寻找问题的创新性解决方案, 设计算法或编写一段优雅的代码, 都是高度创造性的任务.

编程是一个持续不断发展的领域, 它的本质取决于采纳新挑战, 技术和范例的能力. 保持拥抱这些重要特性的观念(mindset)以成为一个成功的程序员. 

## 高质量代码的特征

- 20230723: 
    - 数据和逻辑分离, 数据和逻辑之间通过模型来交互, 即高度抽象化
    - 可批量处理, 不需要人为干预即可自动运行, 即高度自动化
    - 可配置与控制, 通过简单的参数修改来干涉预期结果, 即高度参数化
    - 可维护性, 通过代码组织,添加代码注释等方式提升可读性, 高度结构化
- 



```text
现在有了高效的go语言和成熟的trpc-go框架和一系列的中台SDK，发布平台，一个新手也可以通过教程快速写出简单功能的微服务，以此入门，开始go的微服务开发，并应对大部分开发需求。



但是一旦开始了就会发现随着需求的增加我们常常不得不去花很多时间去维护代码，变更已有的逻辑，不断的抽象，提高部分常用能力的可扩展性，但往往随着多个人在同一份微服务代码里协作，维护这件事情越来越难做了，不仅仅是因为大家的抽象风格不同，对于抽象的标准，模块的分割，数据的流向，分层的逻辑都是不同的，看每个服务都像是一个新的生命，千姿百态。



千姿百态的代码库不是我们希望的，我们希望在代码的架构上保持易读性、可扩展性、可维护性，这样除了对于代码细节的一致性（代码标准）外，还希望有架构上的标准，让开发专注于逻辑设计和具体场景的代码设计，在海量之道的知识下把服务相关内容做好，而不是将时间和精力浪费在纠结如何重新组织和解乱麻、重构等工作上，如果每个服务的架构都足够简洁清晰，团队内部每个仓库都像是自己写的，上手也会很快，团队的效率就会几何的速度提升。
https://mp.weixin.qq.com/s/7ZDhJgq4euiI7bf3wGfdYw
```



抽象标准, 抽象层级, 划分标准, 分层标准;

模块分割

数据流向

分层逻辑

## 问题引导

问题域

关键词

头脑风暴

## 代码生成

- wire
- veawer
- protoc

## 二次开发

利用开源框架, 避免从头思考



### 场景举例

解析Markdown表格上, 网上寻找Markdown解析库pkg, 



# 项目布局

项目布局, 代码结构, 参考优秀项目的最佳实践, 按照项目类别等等, 结构化设计

code organization

Structuring Applications in Go, 

architecting Go applications

项目类别: API/RPC服务, 可执行程序, Library&Framework

## 参考资料

- [<文章>:从 Kratos 设计看 Go 微服务工程实践]https://www.infoq.cn/article/mee5qutrtjvgwzpp57y6
- [<腾讯云开发者>:保姆级教程！Golang微服务简洁架构实战](https://mp.weixin.qq.com/s/7ZDhJgq4euiI7bf3wGfdYw)
- Go-Project-Layout
- google/wire
- [鹅厂火热开发框架: trpc-go设计理念介](https://cloud.tencent.com/developer/article/2208211#)
- [Go 工程化-前端性能监控接入层 Layout 设计实践](https://cloud.tencent.com/developer/article/1945188)

![image-20231008201916488](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202310082019591.png)

## 零散记录

- 一般来说，创建应用程序结构有两种不同的方法：基于业务功能或基于技术结构。[大家的共识](http://www.javapractices.com/topic/TopicAction.do?Id=205)³是基于业务功能的更好，对于单体项目（monolithic project）来说也确实如此。在微服务架构中，情况发生了变化，因为每个服务都有自己的存储库。因此，在每个微服务中，基于技术结构创建项目结构实际上是可行的。(https://jfeng45.github.io/posts/go_microservice_application_layout/)

## 大佬建议

- 

## 核心思想

初始化机制

### 注入机制(inject)

通过接口约束来实现依赖注入

### 供应机制(Provide)

### 插件机制(Plugin)

setup, register, registry

### 组件机制(filter)

filter(Middleware), 过滤器, 中间件, 注册机制

### 分层机制(layer)



推荐的做法, 先按功能模块分层(文件夹-表示一个业务), 然后文件夹中按照技术问题分层(文件-表示中国技术问题域)

模块机制, 按照不同的问题域和职责划分到不同的目录中

- 常见分类方法:
    - API/RPC(api/rpc transport layer)
    - 模型层(model layer)
    - 服务层(service layer)
    - 处理层(handler layer)
    - 数据访问层(data access layer)
    - 业务逻辑层(business logic layer)

```shell
作者：杨先森
链接：https://www.zhihu.com/question/598030565/answer/3053507146
# 推荐

.
├── cmd
│   ├── user
│   │   └── main.go
│   ├── order
│   │   └── main.go
│   └── product
│   │   └── main.go
├── pkg
│   ├── auth
│   │   ├── auth.go
│   │   └── token.go
│   ├── logger
│   │   └── logger.go
│   ├── middleware
│   │   ├── cors.go
│   │   └── jwt_auth.go
│   └── store
│       ├── user.go
│       ├── order.go
│       └── product.go
├── internal
│   ├── user
│   │   ├── user.go
│   │   ├── handler.go
│   │   ├── model.go
│   │   └── service.go
│   ├── order
│   │   ├── order.go
│   │   ├── handler.go
│   │   ├── model.go
│   │   └── service.go
│   └── product
│       ├── product.go
│       ├── handler.go
│       ├── model.go
│       └── service.go
├── api
│   ├── user
│   │   ├── router.go
│   │   └── handler.go
│   ├── order
│   │   ├── router.go
│   │   └── handler.go
│   └── product
│       ├── router.go
│       └── handler.go
├── db
│   ├── mysql
│   │   ├── config.yml
│   │   └── mysql.go
│   └── redis
│       ├── config.yml
│       └── redis.go
├── docs
│   ├── api.md
│   └── database.md
├── configs
│   ├── .env
│   └── Dockerfile
└── main.go
```







```shell
/your-service
|-- cmd
|   |-- main.go           // Entry point of your microservice
|-- internal
|   |-- handler           // HTTP or API handlers
|   |   |-- handler.go
|   |-- service           // Business logic
|   |   |-- service.go
|   |-- repository        // Data access layer
|   |   |-- repository.go
|   |-- model             // Data models or structs
|   |   |-- model.go
|-- pkg                   // Reusable packages or utilities
|   |-- db
|   |   |-- db.go          // Database connection and operations
|-- config                // Configuration files or environment variables
|-- tests                 // Test files
|-- go.mod                // Go module file
|-- go.sum                // Go module checksum file
|-- README.md             // Documentation

```

- **handler**: Contains HTTP or API handlers responsible for handling incoming requests and invoking the appropriate service methods.
- **service**: Contains the business logic of your microservice. It interacts with the repository to perform CRUD operations.
- **repository**: Contains the data access layer responsible for interacting with the database or external data source.
- **model**: Contains data models or structs used by your microservice.



- **kg**: This directory contains reusable packages or utilities that can potentially be used by other services within your organization.
    - **db**: Contains a package for database operations, including establishing connections, querying, and transactions.



## **基本原则**

> AI answer by ChatGPT3.5: `best practices or advice about   code organization  in go microservices`
>
> Meaning: Organizing code in Go microservices is crucial for maintainability, scalability, and collaboration. Here are some best practices and advice for code organization in Go microservices:
>
> 意义: 如何组织Go微服务代码对于代码的维护, 扩展和协作是极度重要的. 下面是一些建议和最佳实践

### 关注点分离(separation of concerns)

- Organize your code based on the principle of separation of concerns. Keep different functionalities in separate packages or modules.

### 领域驱动设计(**Domain-Driven Design (DDD)**)

> 这也是一种开发思想

- https://cloud.tencent.com/developer/article/1423794

- Apply DDD principles to define clear boundaries and responsibilities for different parts of your microservices---应用DDD原则为微服务的不同部分定义清晰的边界和职责. 

""面对客户的业务需求，由领域专家与开发团队展开充分的交流，经过需求分析与知识提炼，以获得清晰的问题域。通过对问题域进行分析和建模，识别限界上下文，利用它划分相对独立的领域，再通过上下文映射建立它们之间的关系，辅以分层架构与六边形架构划分系统的逻辑边界与物理边界，界定领域与技术之间的界限。之后，进入战术设计阶段，深入到限界上下文内对领域进行建模，并以领域模型指导程序设计与编码实现。若在实现过程中，发现领域模型存在重复、错位或缺失时，再进而对已有模型进行重构，甚至重新划分限界上下文。""

### 依赖注入(Dependency Injection)

- Use dependency injection to manage dependencies between components. This makes your code more modular and testable---使用依赖注入管理不同组件之间的依赖. 这让你的代码更加**模块化**和**可测试的**



### 接口使用(Use of Interface)

- everage interfaces to define contracts between different parts of your microservice. This enables easy mocking and testing.





## 目录规范参考一

- https://blog.csdn.net/dream0130__/article/details/129914199



一、如何规范目录
好的目录规范需要满足以下几个要求
- 命名明确： 目录名要清晰、简洁、要能够表达出该目录实现的功能，并且最好使用单数
- 功能明确：一个目录实现的功能应该是明确的，并且在整个项目里具有很高的辨识度，当有新增功能的时候，我们可以清楚的知道应该存放在哪个目录之下
- 全面性：目录结构应该全面包含研发过程中的所有功能，例如文档、脚本、API实现、功能、测试等
- 可预测性：项目规模一定是从小到大，一个好的目录结构应该能够在项目变大时，能够保持之前的目录结构
- 可扩展性：每个目录下存放的功能类型是一样的，在项目变大时，这些目录应该存放更多同类功能

二、平铺式目录结构
平铺式目录结构就是在项目根目录下存放项目的代码，整个目录就像一层的；对于一些简单项目和工具，也可以采用平铺式的目录结构

```
	.
├── CHANGELOG
├── CONTRIBUTING.md
├── LICENSE
├── Makefile
├── OWNERS
├── README.md
├── SECURITY.md
├── _output
├── api
├── build
├── cmd
├── configs
├── deployments
├── docs
├── examples
├── githooks
├── go.mod
├── go.sum
├── init
├── internal
├── pkg
├── scripts
├── test
├── third_party
└── tools
```

**三、结构化目录结构**
目前Go社区比较推崇的结构化目录结构是 project-layout (https://github.com/golang-standards/project-layout), 因为组织方式比较合理，被很多Go开发人员接收



```
目录
/cmd
本项目的主干。

每个应用程序的目录名应该与你想要的可执行文件的名称相匹配(例如，/cmd/myapp)。

不要在这个目录中放置太多代码。如果你认为代码可以导入并在其他项目中使用，那么它应该位于 /pkg 目录中。如果代码不是可重用的，或者你不希望其他人重用它，请将该代码放到 /internal 目录中。你会惊讶于别人会怎么做，所以要明确你的意图!

通常有一个小的 main 函数，从 /internal 和 /pkg 目录导入和调用代码，除此之外没有别的东西。

有关示例，请参阅 /cmd 目录。

/internal
私有应用程序和库代码。这是你不希望其他人在其应用程序或库中导入代码。请注意，这个布局模式是由 Go 编译器本身执行的。有关更多细节，请参阅Go 1.4 release notes 。注意，你并不局限于顶级 internal 目录。在项目树的任何级别上都可以有多个内部目录。

你可以选择向 internal 包中添加一些额外的结构，以分隔共享和非共享的内部代码。这不是必需的(特别是对于较小的项目)，但是最好有有可视化的线索来显示预期的包的用途。你的实际应用程序代码可以放在 /internal/app 目录下(例如 /internal/app/myapp)，这些应用程序共享的代码可以放在 /internal/pkg 目录下(例如 /internal/pkg/myprivlib)。

/pkg
外部应用程序可以使用的库代码(例如 /pkg/mypubliclib)。其他项目会导入这些库，希望它们能正常工作，所以在这里放东西之前要三思:-)注意，internal 目录是确保私有包不可导入的更好方法，因为它是由 Go 强制执行的。/pkg 目录仍然是一种很好的方式，可以显式地表示该目录中的代码对于其他人来说是安全使用的好方法。由 Travis Jeffery  撰写的 I'll take pkg over internal 博客文章提供了 pkg 和 internal 目录的一个很好的概述，以及什么时候使用它们是有意义的。

当根目录包含大量非 Go 组件和目录时，这也是一种将 Go 代码分组到一个位置的方法，这使得运行各种 Go 工具变得更加容易（正如在这些演讲中提到的那样: 来自 GopherCon EU 2018 的 Best Practices for Industrial Programming , GopherCon 2018: Kat Zien - How Do You Structure Your Go Apps 和 GoLab 2018 - Massimiliano Pippi - Project layout patterns in Go ）。

如果你想查看哪个流行的 Go 存储库使用此项目布局模式，请查看 /pkg 目录。这是一种常见的布局模式，但并不是所有人都接受它，一些 Go 社区的人也不推荐它。

如果你的应用程序项目真的很小，并且额外的嵌套并不能增加多少价值(除非你真的想要:-)，那就不要使用它。当它变得足够大时，你的根目录会变得非常繁琐时(尤其是当你有很多非 Go 应用组件时)，请考虑一下。

/vendor
应用程序依赖项(手动管理或使用你喜欢的依赖项管理工具，如新的内置 Go Modules 功能)。go mod vendor 命令将为你创建 /vendor 目录。请注意，如果未使用默认情况下处于启用状态的 Go 1.14，则可能需要在 go build 命令中添加 -mod=vendor 标志。

如果你正在构建一个库，那么不要提交你的应用程序依赖项。

注意，自从 1.13 以后，Go 还启用了模块代理功能(默认使用 https://proxy.golang.org 作为他们的模块代理服务器)。在here 阅读更多关于它的信息，看看它是否符合你的所有需求和约束。如果需要，那么你根本不需要 vendor 目录。

国内模块代理功能默认是被墙的，七牛云有维护专门的的模块代理 。

服务应用程序目录
/api
OpenAPI/Swagger 规范，JSON 模式文件，协议定义文件。

有关示例，请参见 /api 目录。

Web 应用程序目录
/web
特定于 Web 应用程序的组件:静态 Web 资产、服务器端模板和 SPAs。

通用应用目录
/configs
配置文件模板或默认配置。

将你的 confd 或 consul-template 模板文件放在这里。

/init
System init（systemd，upstart，sysv）和 process manager/supervisor（runit，supervisor）配置。

/scripts
执行各种构建、安装、分析等操作的脚本。

这些脚本保持了根级别的 Makefile 变得小而简单(例如， https://github.com/hashicorp/terraform/blob/master/Makefile )。

有关示例，请参见  /scripts 目录。

/build
打包和持续集成。

将你的云( AMI )、容器( Docker )、操作系统( deb、rpm、pkg )包配置和脚本放在 /build/package 目录下。

将你的 CI (travis、circle、drone)配置和脚本放在 /build/ci 目录中。请注意，有些 CI 工具(例如 Travis CI)对配置文件的位置非常挑剔。尝试将配置文件放在 /build/ci 目录中，将它们链接到 CI 工具期望它们的位置(如果可能的话)。

/deployments
IaaS、PaaS、系统和容器编排部署配置和模板(docker-compose、kubernetes/helm、mesos、terraform、bosh)。注意，在一些存储库中(特别是使用 kubernetes 部署的应用程序)，这个目录被称为 /deploy。

/test
额外的外部测试应用程序和测试数据。你可以随时根据需求构造 /test 目录。对于较大的项目，有一个数据子目录是有意义的。例如，你可以使用 /test/data 或 /test/testdata (如果你需要忽略目录中的内容)。请注意，Go 还会忽略以“.”或“_”开头的目录或文件，因此在如何命名测试数据目录方面有更大的灵活性。

有关示例，请参见  /test 目录。

其他目录
/docs
设计和用户文档(除了 godoc 生成的文档之外)。

有关示例，请参阅 /docs 目录。

/tools
这个项目的支持工具。注意，这些工具可以从 /pkg 和 /internal 目录导入代码。

有关示例，请参见 /tools 目录。

/examples
你的应用程序和/或公共库的示例。

有关示例，请参见 /examples 目录。

/third_party
外部辅助工具，分叉代码和其他第三方工具(例如 Swagger UI)。

/githooks
Git hooks。

/assets
与存储库一起使用的其他资产(图像、徽标等)。

/website
如果你不使用 Github 页面，则在这里放置项目的网站数据。

有关示例，请参见 /website 目录。
```



## trpc-go目录规范

> https://cloud.tencent.com/developer/article/2208211?fromSource=gwzcw.6511354.6511354.6511354&utm_medium=cpc&utm_id=gwzcw.6511354.6511354.6511354&cps_key=6a15b90f1178f38fb09b07f16943cf3e

 trpc-go 进行了第一个抽象——service。一个 trpc-go 服务可以包含多个 service，每个 service 监听一个端口，使用一种协议！所以对于 trpc-go 来说是不需要做协议识别的，在实例化 service 时就可以确定协议类型，后续都用该协议进行编解码。



## 纵向切割(按服务)

一般建议先讲所有服务放到同一个Package中, 然后再对服务进行分层设计. 然后所有服务都按照这种规则. django就是采用这种模式, 这是的每个包可以即插即用. 

## 横向切割(按类别)

按技术, 分层设计, 不同的关注点放到不同目录中区

比如, 一般将服务分为handlers/models/services/schema/ 甚至有的项目直接将业务逻辑放在了API上. 

# **代码示例**

Code Examples

## Links

- [google-cloud-go](https://github.com/googleapis/google-cloud-go/tree/main)

# 常用编程技巧

```go
// [几个提升Go语言开发效率的技巧](https://www.51cto.com/article/714195.html)

// 函数/方法内短变量声明
var a int = 12
a := 12  // 这是短变量声明

// 判断map[key]是否存在
if v, ok := M[key]; ok { }

// json序列化, struct tag
type Person struct {
    name string		`json:"-"`  // 序列化时忽略该field
    age	int			`json:"age, omitempty"`  // 空值时忽略该field
}
```

### 函数

### 接口



# 数据模型设计

[]()

```
Designing models in software development, whether for a database, an object-oriented programming language, or any other context, is a critical step in creating a well-structured and maintainable system. Here are some key principles and steps to follow when designing models:

1. **Understand the Problem Domain**:
   - Before designing models, thoroughly understand the problem you're trying to solve and the domain you're working in. This includes understanding the data you need to represent, how it's related, and its behavior.

2. **Identify Entities**:
   - Identify the core entities or objects in your system. These are the nouns in your problem domain, such as "User," "Product," or "Order."

3. **Define Attributes**:
   - For each entity, define the attributes or properties that describe it. These are the adjectives or characteristics of the entities. For example, a "User" entity may have attributes like "Name," "Email," and "Password."

4. **Establish Relationships**:
   - Determine how entities are related to each other. Is there a one-to-one, one-to-many, or many-to-many relationship between them? Define these relationships clearly.

5. **Design Data Types**:
   - Choose appropriate data types for each attribute. Consider factors like data size, precision, and validation rules.

6. **Model Behavior**:
   - Think about the behavior associated with each entity. What methods or functions should the model have? For example, a "User" model might have methods for authentication, profile updates, or password resets.

7. **Normalization (for Databases)**:
   - If you're designing models for a relational database, consider database normalization to minimize data redundancy and improve data integrity. Follow principles like First Normal Form (1NF), Second Normal Form (2NF), etc.

8. **Use Design Patterns**:
   - Utilize design patterns like Singleton, Factory, or Repository to encapsulate and structure your models. These patterns help maintain a clean separation of concerns.

9. **Validation and Constraints**:
   - Implement validation rules and constraints for your models. Ensure that the data remains consistent and valid at all times.

10. **Inheritance and Composition**:
    - Decide if inheritance or composition is appropriate for modeling relationships between entities. Inheritance is useful when you have a "is-a" relationship, while composition is suitable for a "has-a" relationship.

11. **Consider Serialization and Deserialization**:
    - If your models need to be serialized to JSON, XML, or another format, design them with serialization and deserialization in mind. Use tags or annotations to control how data is serialized.

12. **Testing**:
    - Write unit tests for your models to ensure they behave as expected. Test different scenarios, including edge cases and error conditions.

13. **Documentation**:
    - Document your models thoroughly. Include information about their purpose, attributes, relationships, and usage. Good documentation makes it easier for other developers to understand and use your models.

14. **Review and Refinement**:
    - Collaborate with team members to review your model designs. Be open to feedback and iterate on your designs as necessary.

15. **Versioning (for APIs)**:
    - If your models are part of an API, consider versioning them to ensure backward compatibility when you make changes in the future.

16. **Keep It Simple**:
    - Strive for simplicity in your model designs. Avoid unnecessary complexity and keep models focused on their core responsibilities.

17. **Scalability and Performance**:
    - Consider scalability and performance implications. Design models that can handle future growth and perform efficiently.

18. **Consistency**:
    - Maintain a consistent naming convention and coding style for your models. This improves code readability and maintainability.

Remember that the specific design decisions you make will depend on the context of your project and the technologies you're using. The goal is to create models that accurately represent the problem domain, are easy to work with, and can adapt to changing requirements.
```



# 主要编程技术

## 依赖注入



# **性能优化**



## 参考资料

### 文章-Article

- [Go高性能编程技法解读: https://mp.weixin.qq.com/s/fXKSr8GXaYxG1WCrLIgneg](https://mp.weixin.qq.com/s/fXKSr8GXaYxG1WCrLIgneg)
- [「腾讯技术工程」Golang高性能编程实践: https://mp.weixin.qq.com/s/VMzhyySny60zABnxlzlVjQ](https://mp.weixin.qq.com/s/VMzhyySny60zABnxlzlVjQ)

## 技术指标

每秒查询数: QPC(Query Per Second)

# 额外工具

## godoc

```shell
go install golang.org/x/tools/cmd/godoc@latest

which godoc

godoc -http=:6060
```

## golangci-lint

https://github.com/golangci/golangci-lint

> 来自[阿里同学都在用的开发环境和工具](https://mp.weixin.qq.com/s/2qgs4JYOJFCmrxHMxtctyA)

## goimports

```
go install golang.org/x/tools/cmd/goimports@latest
```

> 来自[阿里同学都在用的开发环境和工具](https://mp.weixin.qq.com/s/2qgs4JYOJFCmrxHMxtctyA)

## dlv(delve)

## gopls

Vscode 插件默认使用gopls

# 零散记录

## goroutine leaking 

> alias: 内存泄漏, 协程泄漏, scenarios
>
> links:
>
> - [你好]: https://go101.org/article/memory-leaking.html "标题"
>
> - [Memory Leaking Scenarios](https://go101.org/article/defer-more.html#kind-of-resource-leaking)
>
> - 
>
> - [Link Text][https://go101.org/article/memory-leaking.html] 
>
> - [Ref]: link-address "optional title"

之所以出现内存泄漏, 是一种程序不规范的表现, 没有遵循最佳实践(without following best practice)

没有正常关闭或即时关闭, 处理大文件,尤其是算法复杂度超过O(n^2)时

- time.Ticker
- 上下文未关闭
- channel
- slice
- strings

## 异步与并发(并发)

~~<mark>异步代码编写用goroutine+channel</mark> go中并不过分强调异步的概念, 很多异步任务的实现是通过锁完成的, 但是这会阻塞线程;通过异步框架如asyncio则不会阻塞框架,~~ 

并发代码编写用goroutine+channel



## 函数中声明函数

```go
func ExampleWithCancel() {
	// gen generates integers in a separate goroutine and
	// sends them to the returned channel.
	// The callers of gen need to cancel the context once
	// they are done consuming generated integers not to leak
	// the internal goroutine started by gen.
	gen := func(ctx context.Context) <-chan int {
		dst := make(chan int)
		n := 1
		go func() {
			for {
				select {
				case <-ctx.Done():
					return // returning not to leak the goroutine
				case dst <- n:
					n++
				}
			}
		}()
		return dst
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel() // cancel when we are finished consuming integers

	for n := range gen(ctx) {
		fmt.Println(n)
		if n == 5 {
			break
		}
	}
	// Output:
	// 1
	// 2
	// 3
	// 4
	// 5
}
```

