# Rust最佳实践

> 构建 **Rust知识体系的层级结构** , 建立层级()和边界(boundary)

> **Rust Reference = Rust语言规范（Language Specification）**

```text
rust 知识体系


1. 设计哲学(顶层思想, 如何设计)
2. 语言机制(如何实现)
3. 抽象机制(如何表达)
4. 设计原则
5. 工程实践
6. idiomatic Rust
```

```markdown
一、从问题到代码的完整工程链条

理解
↓
建模
↓
分解
↓
设计
↓
实现
↓
表达
↓
验证
↓
演化


Understand
Model
Decompose
Design
Implement
Express
Verify
Evolve

## 理解层
需求
问题描述
用例
场景
业务规则

## 建模工具
```



## 必看

- [crates.io](https://crates.io)
- [docs.rs](https://docs.rs/)
- [强烈推荐elements-of-rust](https://github.com/ferrous-systems/elements-of-rust)

- [Rust Ecosystem](https://blessed.rs/crates)
- [curated crates libraries](lib.rs)
- [rust trends 趋势](https://rust-trends.com/)

<img src="https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202506131608991.png" style="zoom: 25%;" />



## Specifications

> 标准, 规范, 约定
> Specifications, Conventions

- [Rust API Guideline](https://rust-lang.github.io/api-guidelines)
- [Rust Style Guide + rustfmt](https://doc.rust-lang.org/style-guide/index.html)
- clippy
- rust + semver
- rustdoc

## 学习技巧

> [!Tip]
>
> 陈天: 如何学习一门语言
>
> 语言: 语法, 范式, 约定, 生态
>
> 策略: 泛读, 精读, 实践
>
> 架构

> [!important]
>
> - 参与真实项目, realworld-projects
>   - Most resources only scratch the surface—they don’t prepare you for real-world projects.
> - a clear roadmap
>   - Without a clear roadmap, it’s easy to waste months on the wrong things.

![极客时间Rust训练营](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20260206164536602.png)

精准学习+刻意练习

**精准学习(专项练习)**: 就是深挖(深入挖掘)一个个高大上的表层知识点, 回归底层基础知识的本原, 再使用类比、联想等方法, 打通涉及的基础知识; 然后从底层设计往表层实现, 一层层构建知识体系, 这样"撒一层土, 夯实, 再撒一层", 让你对知识点理解得更加透彻、掌握得更牢固. 

比如 Rust 中的所有权和生命周期，很多同学说自己看书或者看其他资料，这部分都学得云里雾里的，即便深入逐一理解了几条基本规则，也依旧似懂非懂。

但我们进一步思考“值在内存中的访问规则”，最后回归到堆和栈这些最基础的软件开发的概念，重新认识堆栈上的值的存储方式和生命周期之后，再一层层往上，我们就会越学越明白。

这就是回归本原的重要性，也就是常说的第一性原理：回归事物最基础的条件，将其拆分成基本要素解构分析，来探索要解决的问题。

![image-20240317135733541](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20260206164536704.png)

精准学习之后，我们就需要**刻意练习**了。刻意练习，就是用精巧设计的例子，通过练习进一步巩固学到的知识，并且在这个过程中尝试发现学习过程中的不自知问题，让自己从“我不知道我不知道”走向“我知道我不知道”，最终能够在下一个循环中弥补知识的漏洞。

这个过程就像子思在《中庸》里谈治学的方法：博学之，审问之，慎思之，明辨之，笃行之。我们学习就要这样，学了没有学会绝不罢休，不断在学习 - 构建 - 反思这个循环中提升自己。Rust 的学习，也是如此。

https://static001.geekbang.org/resource/image/af/98/af815a24607879d14d9b2701c0491a98.jpg?wh=3645x2506

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20260206164536679.jpg)



根据这种学习思路，在这个专栏里，我会带着你循序渐进地探索 Rust 的基本概念和知识、开发的原则和方法，力求掌握 Rust 开发的精髓；同时，每一部分内容，都用一个或多个实操项目帮你巩固知识、查漏补缺。

具体来看，整个专栏会分成五个模块：

前置知识篇

在正式学习 Rust 之前，先来回顾一下软件开发的基础概念：堆、栈、函数、闭包、虚表、泛型、同步和异步等。你要知道，想要学好任意一门编程语言，首先要吃透涉及的概念，**因为编程语言，不过是这些概念的具体表述和载体**。

基础知识篇

我们会先深入浅出地探讨 Rust 变量的**所有权和生命周期**，并对比几种主流的内存管理方式，包括，Rust 的内存管理方式、C 的手工管理、Java 的 GC、Swift 的 ARC 。之后围绕着所有权和生命周期，来讨论 Rust 的几大语言特性：函数式编程特性、类型系统、泛型编程以及错误处理。

进阶篇

Pascal 之父，图灵奖得主尼古拉斯·沃斯（Niklaus Wirth）有一个著名的公式：算法 + 数据结构 = 程序。**想随心所欲地使用 Rust 为你的系统构建数据结构，深度掌握类型系统必不可少**。

在 Rust 里，你可以使用 Trait 做接口设计、使用泛型做编译期多态、使用 Trait Object 做运行时多态。在你的代码里用好 Trait 和泛型，可以非常高效地解决复杂的问题。

随后我们会介绍 unsafe rust，不要被这个名字吓到。所谓 unsafe，不过是把 Rust 编译器在编译器做的严格检查退步成为 C++ 的样子，由开发者自己为其所撰写的代码的正确性做担保。

最后我们还会讲到 FFI，这是 Rust 和其它语言互通操作的桥梁。掌握好 FFI，你就可以用 Rust 为你的 Python/JavaScript/Elixir/Swift 等主力语言在关键路径上提供更高的性能，也能很方便地引入 Rust 生态中特定的库。

并发篇

从没有一门语言像 Rust 这样，在提供如此广博的并发原语支持的前提下，还能保证并发安全，所以 Rust 敢自称**无畏并发**（Fearless Concurrency）。在并发篇，我带你从 atomics 一路向上，历经 Mutex、Semaphore、Channel，直至 actor model。其他语言中被标榜为实践典范的并发手段，在 Rust 这里，只不过是一种并发工具。

Rust 还有目前最优秀的异步处理模型，我相信假以时日，这种用状态机巧妙实现零成本抽象的异步处理机制，必然会在更多新涌现出来的语言中被采用。

在并发处理这个领域，Rust 就像天秤座圣衣，刀枪剑戟斧钺钩叉，十八般兵器都提供给你，让你用最合适的工具解决最合适的问题。

实战篇

掌握一门语言的特性，能应用这些特性，写出解决一些小问题的代码，算是初窥门径，就像在游泳池里练习冲浪，**想真正把语言融会贯通，还要靠大风大浪中的磨炼**。在这篇中，我们会学习如何把 Rust 应用在生产环境中、如何使用 Rust 的编程思想解决实际问题，最后谈谈如何用 Rust 构建复杂的软件系统。

整个专栏，我会把内容尽量写得通俗易懂，并把各个知识点类比到不同的语言中，力求让你理解 Rust 繁多概念背后的设计逻辑。每一讲我都会画出重点，理清知识脉络，再通过一个个循序渐进的实操项目，让你把各个知识点融会贯通。

我衷心希望，通过这个专栏的学习，**你可以从基本概念出发，一步步跨过下图的愚昧之巅，越过绝望之谷，向着永续之原进发**！通过一定的努力，最终自己也可以用 Rust 构建各种各样的系统，让自己职业生涯中多一门面向未来的利器。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20260206164536770.jpg)

我非常希望你能坚持学下去，和我一直走到最后一讲。这中间，你如果有想不明白的地方，可以先多思考多琢磨，如果还有困惑，欢迎你在留言区问我。

在具体写代码的时候，你可以多举一反三，不必局限于我给的例子，可以想想工作生活中的产品场景，思考如何用 Rust 来实现。

每讲的思考题，也希望你尽量完成，记录分享你的分析步骤和思路。有需要进一步总结提炼的知识点，你也可以记录下来，与我与其他学友分享。毕竟，大物理学家费曼总结过他的学习方法，评价和分享 / 教授给别人是非常重要的步骤，能让你进一步巩固自己学到的知识和技能。

最后，你可以自己立个 Flag，**哪怕只是在留言区打卡你的学习天数或者 Rust 代码行数，我相信都是会有效果的**。3 个月后，我们再来一起验收。

总之，让我们携手，为自己交付 “Rust 开发” 这个大技能，让 Rust 成为你的下一门主力语言！

### 学习Rust的十条最佳建议(by 张汉东)

- 从整体出发,不要让自己陷入到细节中去
  - 语言特性
  - 设计哲学
  - 高屋建瓴, 结构性认知 

### 重点与难点

- 语言核心概念
- 所有权机制
- 借用(borrow)和生命周期(lifetime)
- 类型系统与trait
- 突破抽象范式
- Unsafe Rust
- 从命令式编程语言转换到函数式编程语言, 从变量的可变性迁移到不可变性, 从若类型语言迁移到强类型语言, 以及从手工或者自动内存管理到通过生命周期来管理内存
- Rust编译器原理
- 最大的思维转换就是变量的所有权和生命周期. 
- 所有权和生命周期
- 并发处理, 类型系统和泛型编程, 并发安全



## 学习大纲

语法

标准库

## 学习路线与目标

> 看懂代码, 编写cli应用, 编写web/api服务器, 参与Rust开源贡献

### 个人

- 语法, 读懂代码
- 标准库
- 教程

### AI

学习Rust语言的确是一项很有价值的投资，特别是在系统编程和高性能开发领域。Rust在保证内存安全、并发处理等方面具有极大的优势，且其生态系统中很多库已经能够高效地支持Web开发。下面是一个逐级递进的Rust学习计划，帮助你快速上手，掌握读懂代码并写出Web业务代码的能力。



**学习规划分为三个阶段：基础入门、进阶应用、Web开发应用。**



**阶段 1: 基础入门 (1-2周)**



**目标: 熟悉Rust语法和核心概念，能够读懂基础Rust代码**



Rust和C/Go在语法上有一些相似之处，但Rust引入了更多的编译时安全检查，比如所有权（Ownership）和借用（Borrowing）。所以你需要熟悉这些独特概念。



**学习内容:**



1.	**Rust基础语法**

- **基础数据类型**: 整型、浮点型、字符串、布尔值等

- **控制结构**: if/else, match, loop, for 等

- **函数和模块**: Rust中函数的定义、参数、返回值、模块化组织代码

- **变量绑定与不可变性**: let 和 mut

- **所有权与借用（Ownership & Borrowing）**: 这是Rust的核心概念

2.	**内存管理**

- 所有权（Ownership）

- 借用（Borrowing）和引用（References）

- 生命周期（Lifetimes）

3.	**Cargo & Crates (依赖管理工具)**

- 安装与使用 Cargo，如何新建项目、运行项目

- 如何使用 Cargo.toml 文件管理项目依赖

- 如何引入外部的 crate（第三方库）



**推荐学习资源:**



- [The Rust Programming Language (官方书籍)](https://doc.rust-lang.org/book/)

- [Rustlings](https://github.com/rust-lang/rustlings) 练习项目，非常适合Rust入门学习，通过实际动手练习来巩固概念。



**实践项目建议:**



- 完成Rustlings中的所有练习题。

- 实现一个简单的命令行程序，如计算器或文本处理器，来巩固基础语法和内存管理。



**阶段 2: 进阶应用 (2-4周)**



**目标: 掌握Rust的复杂特性，并能够编写较为复杂的Rust代码**



在掌握了基础语法后，需要进一步学习Rust的高级特性，并熟悉一些标准库的使用。



**学习内容:**



1.	**高级特性**

- **枚举（Enum）与模式匹配（Pattern Matching）**

- **结构体（Struct）与方法（Methods）**

- **Traits与泛型（Generics）**

- **错误处理**: Result, Option, 和 ? 操作符的使用

2.	**并发编程**

- **线程（Threads）** 和 **消息传递（Channels）**

- **异步编程**: 初步了解Rust中的异步编程模型，可以了解 async/await 和 tokio 库的基本使用

3.	**文件与网络IO**

- 学习标准库中的 std::fs 和 std::net 模块

- 实现文件读写和简单的网络编程



**推荐学习资源:**



- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) 官方示例教程，覆盖了Rust的各种特性

- [Programming Rust (O’Reilly)](https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/) 进阶的Rust书籍，适合进一步深入学习



**实践项目建议:**



- 实现一个多线程的下载器，支持断点续传。

- 实现一个简单的TCP服务器，处理基本的客户端请求。



**阶段 3: Web开发应用 (4-6周)**



**目标: 掌握使用Rust开发Web应用的能力，并熟悉主流的Web框架**



Rust的Web开发生态在近年来发展迅速，主要的Web框架包括 Actix-web 和 Axum。这些框架类似于你熟悉的Go中的 Gin 或Python中的 FastAPI。



**学习内容:**



1.	**选择并熟悉Web框架**

- **Actix-web** 或 **Axum**

- **异步编程模型**：Rust中的异步编程在Web开发中至关重要，熟悉 tokio 或 async-std 运行时

- 如何定义路由、处理请求、返回响应

- 中间件（Middlewares）的使用，如身份验证、日志记录

2.	**数据库交互**

- 学习如何与数据库进行交互：优先选择 SQLx 或 Diesel 作为ORM（对象关系映射）

- 结合 PostgreSQL 进行数据库操作：插入、查询、更新、删除

- 事务处理和异步数据库操作

3.	**RESTful API**

- 使用 Actix-web 或 Axum 实现一个完整的RESTful API

- 学习如何处理请求参数、JSON 序列化/反序列化、表单提交等

4.	**测试与部署**

- 学习如何编写测试：单元测试、集成测试

- 使用 Docker 构建Rust服务的容器化

- 了解Rust的性能优化工具，如 cargo build --release 和 cargo flamegraph



**推荐学习资源:**



- [Actix Web 官方文档](https://actix.rs/)

- [Axum Web Framework 官方文档](https://github.com/tokio-rs/axum)

- [SQLx 官方文档](https://docs.rs/sqlx/)



**实践项目建议:**



- 使用 Actix-web 或 Axum 实现一个简易的CRUD API，例如用户管理系统或博客系统。

- 结合 SQLx 和 PostgreSQL 实现完整的数据库交互。

- 使用 Docker 部署Rust Web应用。



**学习路径总结与进阶建议**



1.	**基础阶段**：1-2周内掌握Rust的基本语法、内存管理、所有权规则，搭建起Rust思维体系。

2.	**进阶阶段**：2-4周内深入学习Rust的高级特性（如泛型、错误处理、并发编程），并应用于较为复杂的项目。

3.	**Web开发应用**：4-6周内掌握Rust Web开发框架，如 Actix-web 或 Axum，并通过实际项目应用强化。



Rust语言的学习曲线较为陡峭，尤其是在所有权和借用规则方面，但这也是其独特之处，正因为此，Rust能够提供极高的安全性和性能。通过上述学习计划，你可以逐步深入，掌握Rust编程的核心概念，特别是Web开发相关的技能，最终具备编写高效、内存安全的Web业务代码的能力。



**后续问题建议：**



1.	Rust中所有权和借用的机制如何在实际项目中提升内存管理的安全性？

2.	在Web开发中，如何选择适合项目的Rust框架，例如Actix-Web和Axum之间的异同是什么？

3.	Rust异步编程模型中的async/await相比于Go的协程在处理并发时有何优势？

## 应用场景

- CLI tools (2024-40%, )
- System Programming(2024-38%, )
- Web Development(2024-38%)

## references

- Towards an "Easy" Rust

## roadmap

syntax, type system, standard library, ecosystem

## 观点

- Rust开发者应该如何思考, 设计和实现代码时, 应该考虑哪些问题, 应该如何建立心智模型
- crate标识的crate root模块, main.rs通常是crate root, 但是bin/some.rs 中 crate root 是bin/some.rs
- 枚举也是类型系统的一部分, 本质是类型声明——wwfyde
- 使用智能指针实现多所有权
- trait:特征: 指定类型的能力和行为
  - ..的, Printable
  - 某种特性
  - 动词
  - 描述特性的名称
  - 某种行为的执行者(不太久)
- rust类型系统, ADT(algebra data type),  基于struct+enum的组合
- rust 中有很多基于表达式的代码, 一切皆表达式
- 迭代器 
  - 组合式 API（map/filter/collect）
  - 惰性计算
  - 零开销链式调用

- 链式调用(每次调用后返回对象本身)
- **包/Crate/模块**：
  - crate（编译单元）
  - module（文件/子模块）
  - package（多个 crate）
- **路径**：self、super、crate


## Rust开发者心智模型

所有权, 生命周期, 数据流向, 显式优于隐式, 借用检查器(borrow checker)

**函数/方法签名**:

- **参数传递**:
  - 传递所有权 (value: T)?
  - 不可变借用 (value: &T)?
  - 可变借用 (value: &mut T)?
  - 对于字符串，是 &str (通用，高效) 还是 String (需要所有权)？对于集合，是 &[T] 还是 Vec<T>?
- **返回值**:
  - 返回所有权 (-> T)?
  - 返回借用 (-> &T 或 -> &mut T)? 如果是，生命周期参数是什么？
- **错误处理**: 使用 Result<T, E> 还是 Option<T>? panic! 应该只用于不可恢复的错误

## **设计哲学**

> 理念

- **一切皆明确（explicit is better than implicit）**
- 零成本抽象（zero-cost abstraction）
- 显式优于隐式(explicit over implicit)
- 解析优于校验(Parse, don't validate)

## 核心特性

ADT

## Python To Rust

> - [corrode::blog::python-to-rust](https://corrode.dev/learn/migration-guides/python-to-rust)

指针处理与装箱(Pointer handling and boxing)

Rust 的“指针”不等于 C 语言的原生指针（*T），更强调**安全和所有权**。常见的指针类型有：



- **引用指针**

  - &T（不可变引用）：指向某个值但**不拥有**它。编译器保证生命周期安全，不会悬垂。
  - &mut T（可变引用）：可修改所指对象，但同一时间只有一个可变引用。

- **裸指针**

  - *const T, *mut T（裸指针）：和 C 类似，极少直接用。用于 FFI（C交互）、底层开发。

- **智能指针**

  - `Box<T>`：堆分配，独占所有权，最常用的“装箱指针”。
  - `Rc<T>` / `Arc<T>`：引用计数/原子引用计数，允许多所有者共享所有权（但不可变/线程安全）。
  - RefCell<T> / Mutex<T>：内部可变性/线程同步的指针封装。

  

## Project Layout

- [How to organize large Rust codebases](https://kerkour.com/rust-how-to-organize-large-workspaces)
- [rust-web-services-axum-sqlx-postgresql](https://kerkour.com/rust-web-services-axum-sqlx-postgresql)
- 主要推荐使用DDD+ 分层架构, 而不是Clean架构
- [[rust-axum-postgres-api](https://github.com/wpcodevo/rust-axum-postgres-api)](https://github.com/wpcodevo/rust-axum-postgres-api)



### 布局

[Gemini](https://gemini.google.com/app/780a5faf3c065668?utm_source=chrome_omnibox&utm_medium=owned&utm_campaign=gemini_shortcut)

```shell
my_axum_project/
├── Cargo.toml
├── .env           # 环境变量 (可选, 用于本地开发)
├── config/        # 配置文件目录 (可选, 例如使用 config-rs)
│   ├── default.toml
│   ├── production.toml
│   └── ...
├── src/
│   ├── main.rs        # 程序入口: 初始化配置、数据库、状态、路由、启动服务器
│   ├── config.rs      # 配置加载与解析逻辑
│   ├── errors.rs      # 自定义错误类型及 IntoResponse 实现
│   ├── state.rs       # 定义应用共享状态 (AppState)
│   │
│   ├── routes/        # 路由定义模块
│   │   ├── mod.rs     # 组织和导出所有路由模块，创建主 Router
│   │   ├── health.rs  # 健康检查路由 (示例)
│   │   ├── users.rs   # 用户相关路由
│   │   └── products.rs # 产品相关路由
│   │   └── middleware.rs # (可选) 自定义中间件
│   │
│   ├── handlers/      # 请求处理函数 (Handler Functions)
│   │   ├── mod.rs
│   │   ├── health_handler.rs
│   │   ├── user_handler.rs
│   │   └── product_handler.rs
│   │
│   ├── services/      # 业务逻辑层 (Business Logic)
│   │   ├── mod.rs
│   │   ├── user_service.rs
│   │   └── product_service.rs
│   │
│   ├── repositories/  # 数据访问层 (Data Access Layer / DAL)
│   │   ├── mod.rs
│   │   ├── database.rs # 数据库连接池设置 (例如使用 sqlx, sea-orm)
│   │   ├── user_repo.rs
│   │   └── product_repo.rs
│   │
│   ├── models/        # 数据模型 (Data Models) 或领域对象 (Domain Objects)
│   │   ├── mod.rs
│   │   ├── user.rs    # 可能包含请求/响应体结构、数据库实体等
│   │   └── product.rs
│   │
│   └── utils/         # 通用工具函数 (可选)
│       ├── mod.rs
│       └── ...
│
├── tests/             # 集成测试目录
│   ├── common/        # 测试辅助模块 (可选)
│   │   └── mod.rs
│   ├── health_check.rs
│   └── user_tests.rs
│
└── migrations/        # 数据库迁移文件 (如果使用如 sqlx-cli 或 sea-orm-cli)
```

**各部分说明:**

1. **`src/main.rs`**:

   - 程序的入口点。
   - 负责初始化：日志、配置 (`config.rs`)、数据库连接池 (`repositories/database.rs`)、应用状态 (`state.rs`)。
   - 构建主路由 (`routes/mod.rs`)。
   - 将状态注入到 Axum 的 `Extension` 层或作为 `State`。
   - 启动 HTTP 服务器。

2. **`src/config.rs`**:

   - 定义配置结构体。
   - 实现从文件（如 `config/` 目录下的 TOML/YAML 文件）或环境变量加载配置的逻辑。可以使用 `config-rs`, `dotenvy` 等库。

3. **`src/errors.rs`**:

   - 定义整个应用程序统一的错误类型（例如一个 `enum AppError`）。
   - 为这个错误类型实现 `axum::response::IntoResponse` trait，以便在 Handler 返回错误时能自动转换为合适的 HTTP 响应（状态码、错误信息）。这有助于保持 Handler 的简洁。

4. **`src/state.rs`**:

   - 定义 `AppState` 结构体，包含需要在整个应用中共享的状态，如数据库连接池 (`sqlx::PgPool`, `sea_orm::DatabaseConnection`)、配置实例等。
   - 通常需要 `#[derive(Clone)]`，因为 Axum 的 Handler 和 State Extractor 需要 `Clone` trait。内部共享状态（如连接池）通常使用 `Arc` 包裹。

5. **`src/routes/`**:

   - **`mod.rs`**: 聚合所有子模块（`users.rs`, `products.rs` 等）定义的路由，并创建一个顶层的 `axum::Router`。可以 在这里应用全局中间件。

   - `users.rs`, `products.rs`, ...

     : 按功能或资源划分路由。每个文件通常定义一个函数，该函数返回一个 

     ```
     axum::Router
     ```

     ，其中包含该功能相关的所有路由（GET, POST, PUT, DELETE 等）。这些子路由可以应用特定的中间件。例如：

     Rust

     ```
     // src/routes/users.rs
     use axum::{routing::{get, post}, Router};
     use crate::handlers::user_handler;
     use crate::state::AppState;
     
     pub fn create_user_routes() -> Router<AppState> { // 或者 Router<()> 如果状态通过 Extension 传递
         Router::new()
             .route("/", post(user_handler::create_user))
             .route("/:id", get(user_handler::get_user))
             // ... 其他用户相关路由
     }
     ```

   - **`middleware.rs` (可选)**: 定义自定义的 Axum 中间件函数或 `tower::Layer` 实现。

6. **`src/handlers/`**:

   - 包含实际处理 HTTP 请求的异步函数。
   - 职责：
     - 从请求中提取数据（路径参数、查询参数、请求体 `Json<Payload>` 等）。
     - 调用 `services` 层来执行业务逻辑。
     - 根据 `services` 层的结果构建并返回响应（通常是 `Result<impl IntoResponse, AppError>`）。
   - 应保持 **轻量级**，避免包含复杂的业务逻辑。

7. **`src/services/`**:

   - 封装核心业务逻辑。
   - 不直接依赖 Axum 的特定类型（如 `Json`, `Path` 等），使其更易于测试和复用。
   - 接收从 Handler 传递过来的数据（通常是 `models` 中定义的结构体）。
   - 与 `repositories` 层交互以获取或修改数据。
   - 返回结果或自定义的业务错误（可以映射到 `AppError`）。

8. **`src/repositories/`**:

   - 负责与数据存储（数据库、缓存、外部 API 等）进行交互。
   - **`database.rs`**: 设置和管理数据库连接池。
   - **`user_repo.rs`, `product_repo.rs`, ...**: 实现具体的数据库操作（CRUD）。例如，使用 `sqlx` 执行 SQL 查询，或使用 `sea-orm` 的 Active Model / Entity。
   - 通常返回 `Result<ModelType, DbError>`，其中 `DbError` 可以是 `sqlx::Error`, `sea_orm::DbErr` 等，并在 Service 层转换为 `AppError`。

9. **`src/models/`**:

   - 定义数据结构：
     - API 请求/响应体（可能使用 `serde::{Serialize, Deserialize}`）。
     - 数据库实体/模型（如果使用 ORM，如 `sea-orm` 的 Entity；如果使用 `sqlx`，可能是简单的 struct）。
     - 领域对象。

10. **`src/utils/` (可选)**:

    - 存放不属于特定模块的通用辅助函数，例如日期时间处理、加密、字符串操作等。

11. **`tests/`**:

    - 存放集成测试。这些测试通常会启动一个测试服务器，并模拟 HTTP 请求来验证路由、中间件和整个请求处理流程。可以使用 `axum::TestClient` 或 `reqwest`。

### qwen

```shell
my_axum_project/
├── Cargo.toml
├── src/
│   ├── main.rs
│   ├── app/
│   │   ├── mod.rs
│   │   ├── routes/
│   │   │   ├── mod.rs
│   │   │   ├── user_routes.rs
│   │   │   ├── auth_routes.rs
│   │   │   └── health_routes.rs
│   │   ├── handlers/
│   │   │   ├── mod.rs
│   │   │   ├── user_handlers.rs
│   │   │   ├── auth_handlers.rs
│   │   │   └── health_handlers.rs
│   │   ├── models/
│   │   │   ├── mod.rs
│   │   │   ├── user_model.rs
│   │   │   └── auth_model.rs
│   │   ├── services/
│   │   │   ├── mod.rs
│   │   │   ├── user_service.rs
│   │   │   ├── auth_service.rs
│   │   │   └── db_service.rs
│   │   ├── middleware/
│   │   │   ├── mod.rs
│   │   │   ├── auth_middleware.rs
│   │   │   └── logging_middleware.rs
│   │   └── config/
│   │       ├── mod.rs
│   │       └── settings.rs
│   └── utils/
│       ├── mod.rs
│       ├── error.rs
│       └── logging.rs
├── migrations/ (if using a database)
├── tests/
│   ├── integration/
│   └── unit/
└── README.md
```



### GPT

## 项目布局

### web

```shell
src/
├── main.rs          # 应用入口
├── lib.rs           # 核心模块导出（可选）
├── config/          # 配置管理
│   ├── mod.rs       # 配置结构体、加载逻辑
│   └── env.rs       # 环境变量处理
├── routes/          # 路由定义
│   ├── mod.rs       # 聚合所有子路由（v1, v2, admin...）
│   ├── health.rs    # 健康检查路由
│   └── users.rs     # 用户相关路由
├── handlers/        # 请求处理函数（Controller层）
│   ├── mod.rs       # 处理器聚合
│   ├── health.rs    # 健康检查逻辑
│   └── users.rs     # 用户相关逻辑
├── services/        # 业务逻辑（Service层）
│   ├── mod.rs       # 服务聚合
│   └── users.rs     # 用户服务
├── models/          # 数据结构（DTO/实体）
│   ├── mod.rs       # 模型聚合
│   ├── user.rs      # 用户模型
│   └── error.rs     # 统一错误类型（推荐用 thiserror）
├── repositories/    # 数据访问层（Repository/DAO）
│   ├── mod.rs       # 数据库操作聚合
│   └── user.rs      # 用户数据访问
├── middleware/      # 自定义中间件
│   ├── mod.rs       # 中间件聚合
│   └── auth.rs      # 认证中间件
├── state/           # 全局应用状态（AppState）
│   └── mod.rs       # 状态定义与初始化
└── utils/           # 工具类（日志、加密等）
    └── mod.rs       # 工具函数聚合
```

# 语法速记

```rust
// 原子引用计数(Atomic Reference Counted, Arc)

// Arc比Rc有更大的运行时开销
// The key difference between them is that Arc is thread safe, while Rc isn’t. Arc uses atomic operations to manage the reference count, which gives it a higher runtime cost but makes it safe to share between threads. If you’re only working in a single thread, then Rc is the faster alternative.

// 需要保证所引用的底层数据不可变
// The last important fact about Rc and Arc is that they only allow you to get immutable references to the underlying data.[2] Since they fundamentally represent shared data, allowing mutable references would violate Rust’s safety guarantees by allowing for data races and use-after-free errors.

```

# 心智模型

> 语言特性

- Rust强调**类型安全**, 类型检查需要**显式转换**
- 所有权系统
  ownership system
  - 所有数据只有一个所有者
  - 数据同一时间只能有一个所有者
  - 所有者离开作用域时, 值(数据)被销毁
  - 数据的所有权在创建时确定归属, 可以通过移动转移所有权, 但就是不能没有归属(owner)
    - 变量绑定时确定归属
    - 函数调用时, 借用和转移所有权
    - 赋值时转移所有权
    - 返回值时转移所有权(其实也是赋值给新的变量, 绑定到新的数据)
  
  - 数据状态
    - owned拥有状态
    - moved移动
      - 不可访问状态
  
    - borrowed: 
      - Immutably Borrowed (不可变借用: 可多次借用), 
      - Mutably Borrowed (可变借用:独占借用)
  
    - partial moved: 结构体部分字段被移动
    - Uninitialized (未初始化): 已声明但未赋值
  
- 引用和借用
  reference and borrow
- 生命周期
  lifecycle
- Rust中变量默认是不可变的
  Variables in Rust are immutable by default
- rust中mod才是语言级别命名空间和组织单元, 

## 关注点

- 类型系统
- 所有权
- 生命周期
- 并发
- 核心语义

```shell
Rust 语言
├── 1. 语法（Syntax）
│     └── let, fn, match, struct 等语法结构
├── 2. 类型系统（Type System）
│     └── 每个变量必须有类型，可以推断
├── 3. 核心语义/执行规则（Semantics）
│     └── 所有权、借用、生命周期、安全性检查
└── 4. 标准库 API（Std & crates.io）
      └── Vec, String, IO, traits, futures 等
```



## 语言特性

> Rust 重要语言规则（核心原则）, 核心语义

## 设计哲学

> **“安全、明确、可组合的系统级语言 —— 不牺牲性能，也不放弃表达力。”**

- 显式优于隐式(**Explicit over Implicit**)

## Core Concepts

- 闭包(closure): 闭包会**自动根据使用方式**捕获外部变量，优先级：&T → &mut T → T（move）

### 变量

- 属性
  - 所有权
  - 作用域
  - 存储位置

### 引用

- 属性
  - 生命周期
  - 作用域
  - 所有者: 引用的数据来源

### 生命周期(lifetime)

- 定义: 也就是引用保持有效的作用域
- 作用: 一种机制用于追踪**引用**有效性,描述了保持**引用**有效的代码范围; 
  - 防止悬垂引用(dangling reference);
  - 保证内存安全
  - 让编译器知道变量合适销毁, 什么时候结束, 活到什么时候
  - 复合数据类型, 如结构体实例, 可能会被多个地方引用, 
- 性质: 编译时概念, 不影响运行时性能; 每个引用都有生命周期
- 理解(多视角理解): 
  - 变量的生命周期的开始与结束, 通过调用决定
  - 生命周期约束, 是一种**引用约束**; 变量拥有数据, 引用借用数据
  - 生命周期是引用的属性
  - 从类型系统看, 引用类型具有生命周期
  - 从代码层面看, 生命周期是参数
- 规则:
  - 引用的生命周期不能超过数据的生命周期本身
- 陷阱
  - 试图返回局部变量的引用
    - 解决方案: 返回对象的所有权而不是引用
    - 解决方案: 接受输入参数

### trait

- 定义共享行为, 未不同类型实现相同的行为

## 类型系统

**单元结构体**：用于自定义类型但无需数据。

```rust      
// 单元结构体(unit struct)
struct Name
```

**单元类型**：用于表示“无值”或“无返回”。 

```rust     
fn some() ->() {
    let world = "世界";
    println!("hello,{}", world);
    ()
}
```



## HowTo

> what is rust
>
> A  language ro empowering everyone to build reliable and efficient software
>
> modern system programming language
>
> ---
>
> why is rust
>
> performance reliabilty productivity
>
> ---
>
> misleading  a high-level language
>
> ---
>
> RUst's ease of use

# **开发规范**



# 抽象机制

> 使用Rust构建复杂系统

# 设计原则

> 设计经验, design principle, 设计方法论
>
> 应该如何设计

## catalog

- ### **闭集用 enum，开集用 trait**

- 用类型表达约束

- ### **composition over inheritance**

- ### **Minimize shared mutability**

- ### **Prefer immutability**

- ### **Errors are values**

# 工程实践



> 开发库与开发应用遵循这不同的工程实践
>
> 开发规范, style guideline , 



> rust coding guidelines and best practices

## Links

- [★Rust API Guidelines](https://rust-lang.github.io/api-guidelines/naming.html)
- [官方命名规范](https://rust-lang.github.io/api-guidelines/naming.html)
  <img src="https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20251018155105448.png" alt="image-20251018155105196" style="zoom:25%;" />

## Tips

- 不要在行末添加注释, 一般位于上方
  - `√` `/// a \nlet a = 12;`
  - `×` `let a = 12;  // a`



# 项目管理

## Tips

- 使用common编写workspace共享依赖
  - [codex-common](https://github.com/openai/codex/tree/main/codex-rs/common): This crate is designed for utilities that need to be shared across other crates in the workspace, but should not go in `core`.

# 效率提示

## Links

- [YouTube::Let's Get Rusty::21+ Rust Pro Tips (TOP SECRET)](https://www.youtube.com/watch?v=53XYcpCgQWE)

## misc

- 使用dbg!调试
- 使用 todo!
- cargo bacon
- cargo nextest
- compiler-driven development, 优秀的错误提示帮助你理解错误 mentor
- 

# Cargo

Cargo is Rust's build system and package manager.

> 一个`cargo.toml`对应一个包 用 `-p, --package`执行
>
> [Cargo Book](https://doc.rust-lang.org/cargo/)



```shell
cargo new project_name
cargo new --lib project_name
cargo build

### run
cargo run 

cargo run --bin

# 通过workscpace package运行
cargo run --package chat # default-run
cargo run --package chat --bin chat 
cargo run -p chat 
cargo run --pakcage chat

# 进入package运行
cd examples/chat && cargo run

# 直接运行任意package 从仓库任意位置用 manifest 路径运行
cargo run --manifest-path examples/chat/Cargo.toml

# rustrover 单机文件运行
cargo run --color=always --bin example-chat --profile dev --manifest-path /Users/wwfyde/projects-refs/axum/examples/chat/Cargo.toml


# 构建后运行

# 安装后运行

### package/dependency管理

# package/dependency管理
cargo add serde_json
cargo remve serde_json

# 运行 examples目录中的文件
cargo run --example 


cargo doc --open

# run
cargo run --release


# 安装package到目录
cargo install --path . --root ~/.local
cargo install --path .  # cargo.toml 指定install.root = " ~/.local"


# create workspace package
cargo new —lib

# cargo tree

cargo tree



```



| 命令              | 作用                                  | 示例                            |
| ----------------- | ------------------------------------- | ------------------------------- |
| `cargo new`       | 创建一个新的 Rust 项目                | `cargo new my_project`          |
| `cargo build`     | 编译项目和其依赖                      | `cargo build --release`         |
| `cargo run`       | 编译并运行 Rust 项目                  | `cargo run`                     |
| `cargo test`      | 运行项目的测试                        | `cargo test`                    |
| `cargo doc`       | 为项目的依赖生成文档                  | `cargo doc --open`              |
| `cargo update`    | 更新 `Cargo.lock` 文件中的依赖版本    | `cargo update`                  |
| `cargo check`     | 快速检查代码能否编译                  | `cargo check`                   |
| `cargo clean`     | 清除编译生成的文件                    | `cargo clean`                   |
| `cargo publish`   | 将包发布到 crates.io                  | `cargo publish`                 |
| `cargo bench`     | 运行基准测试                          | `cargo bench`                   |
| `cargo fetch`     | 下载项目依赖的 crate，但不进行编译    | `cargo fetch`                   |
| `cargo install`   | 安装和管理 Rust 二进制文件            | `cargo install [crate_name]`    |
| `cargo uninstall` | 卸载通过 Cargo 安装的 Rust 二进制文件 | `cargo uninstall [crate_name]`  |
| `cargo package`   | 准备一个本地 crate 以便发布           | `cargo package`                 |
| `cargo search`    | 在 crates.io 上搜索 crate             | `cargo search [search_query]`   |
| `cargo login`     | 使用 API token 登录 crates.io         | `cargo login [token]`           |
| `cargo owner`     | 管理 crate 的所有者                   | `cargo owner --add [username]`  |
| `cargo init`      | 在现有目录中初始化新的 Rust 项目      | `cargo init my_project`         |
| `cargo version`   | 显示 Cargo 的版本信息                 | `cargo version`                 |
| `cargo vendor`    | 将所有依赖复制到本地目录              | `cargo vendor`                  |
| `cargo metadata`  | 输出 JSON 格式的项目元数据            | `cargo metadata`                |
| `cargo tree`      | 显示项目依赖树                        | `cargo tree`                    |
| `cargo fix`       | 自动修复 Rust 代码中的警告            | `cargo fix`                     |
| `cargo audit`     | 审核 Cargo.lock 以查找不安全的依赖    | `cargo audit`                   |
| `cargo rustc`     | 提供对 rustc 编译器参数的访问         | `cargo rustc -- [options]`      |
| `cargo rustdoc`   | 为项目运行 rustdoc 工具               | `cargo rustdoc -- [options]`    |
| `cargo clippy`    | 运行 clippy 来进行代码审查            | `cargo clippy`                  |
| `cargo fmt`       | 使用 rustfmt 格式化代码               | `cargo fmt`                     |
| `cargo miri`      | 运行 miri 以执行内存安全检查          | `cargo miri test`               |
| `cargo outdated`  | 检查过时的依赖                        | `cargo outdated`                |
| `cargo release`   | 自动化 crate 发布流程                 | `cargo release`                 |
| `cargo add`       | 向 Cargo.toml 添加新依赖              | `cargo add [crate_name]`        |
| `cargo rm`        | 从 Cargo.toml 中移除依赖              | `cargo rm [crate_name]`         |
| `cargo upgrade`   | 升级 Cargo.toml 的依赖版本            | `cargo upgrade -p [crate_name]` |

请注意，一些命令如 `cargo audit`, `cargo clippy`, `cargo fmt`, `cargo miri`, `cargo outdated`, `cargo release`, `cargo add`, `cargo rm`, 和 `cargo upgrade` 实际上是由第三方提供的 Cargo 扩展（也称为 "cargo 子命令"），并可能需要单独安装。

## commands



### run

```shell




```



## third-party

- cargo-nextest
- cargo-edit
- cargo-watch

## examples

- examples目录是外部二进制, 不能直接`use crate::some_function`, 应该使用`use your_create_name::some_function`
- tests 也是外部二进制, 默认不再crate命名空间中

# Topics

## 智能指针(smart pointer)

### `Box<T>`堆分配



### `Rc<T>`-

### `Arc<T>`

### `RefCell<T>`-内部可变

### `Mutex<T>`

### RwLock<T>

### Arc<Mutex<T>>



# tools

## suttle

# Clap

> uv, ruff, bat 等都是用的derive API

## Links

- [Derive API](https://docs.rs/clap/latest/clap/_derive/index.html)
- [Clap Tutorials](https://docs.rs/clap/latest/clap/_derive/_tutorial/index.html)
- [Clap Examples](https://github.com/clap-rs/clap/tree/master/examples)

# Axum

## Links

- [docs.rs](https://github.com/rust-lang/docs.rs)
- [mast axum](https://masteringbackend.com/posts/axum-framework)
- [★arewewebyet](https://www.arewewebyet.org)
- [**★**loco: Rust单人框架，适用于副项目和初创企业](https://github.com/loco-rs/loco)
- [一个适合新手学习使用的 Rust API 快速开发脚手架](https://github.com/shenghui0779/api-tpl-rs)
  - https://github.com/wohy/Rust_Learning
  - https://github.com/kwseeker/rust-template
- [](https://github.com/lniche/aphrodite-rs)
- [★realworld-axum-api](https://github.com/0xshadow-dev/realworld-axum-api)
- rust-todo-skeleton
- [bili-sync rust项目](https://github.com/amtoaer/bili-sync)
- [text-embeddings-inference](https://github.com/huggingface/text-embeddings-inference)
- [master-hexagonal-architecture-in-rust](https://www.howtocodeit.com/guides/master-hexagonal-architecture-in-rust)

### Projects use axum

- openobserve
- [bionic-gpt](https://github.com/bionic-gpt/bionic-gpt)

## Project Structure

- https://blog.logrocket.com/best-way-structure-rust-web-services/

```shell
# claude sonnet
# rust axum  hexagonal  architecture , layered , project structure 

my-axum-app/
├── Cargo.toml
├── src/
│   ├── main.rs
│   ├── lib.rs
│   ├── domain/           # Core business logic (innermost layer)
│   │   ├── mod.rs
│   │   ├── models/
│   │   │   ├── mod.rs
│   │   │   └── user.rs
│   │   ├── services/
│   │   │   ├── mod.rs
│   │   │   └── user_service.rs
│   │   └── ports/        # Interfaces (traits)
│   │       ├── mod.rs
│   │       ├── repositories.rs
│   │       └── external_services.rs
│   ├── application/      # Use cases / application services
│   │   ├── mod.rs
│   │   ├── dto/
│   │   │   ├── mod.rs
│   │   │   └── user_dto.rs
│   │   └── use_cases/
│   │       ├── mod.rs
│   │       └── create_user.rs
│   ├── infrastructure/   # Adapters (implementations)
│   │   ├── mod.rs
│   │   ├── database/
│   │   │   ├── mod.rs
│   │   │   ├── postgres.rs
│   │   │   └── repositories/
│   │   │       ├── mod.rs
│   │   │       └── user_repository.rs
│   │   ├── external/
│   │   │   ├── mod.rs
│   │   │   └── email_service.rs
│   │   └── config/
│   │       ├── mod.rs
│   │       └── settings.rs
│   └── presentation/     # HTTP layer (Axum handlers)
│       ├── mod.rs
│       ├── routes/
│       │   ├── mod.rs
│       │   └── user_routes.rs
│       ├── handlers/
│       │   ├── mod.rs
│       │   └── user_handler.rs
│       ├── middleware/
│       │   ├── mod.rs
│       │   └── auth.rs
│       └── responses/
│           ├── mod.rs
│           └── api_response.rs
```



## Tips

- tx = transaction

## Concepts&Principles

- 全局共享状态优先使用State
  - ~~全局共享状态(Extension)~~

- 

# 原型设计

`prototyping in rust`

`pdb!`, `todo!`

>  I find that Rust works great for data-heavy prototypes, where it’s mostly about the “shape” of data and how to compose it.
>
> 我发现Rust非常适合处理数据密集型的原型，这主要涉及到数据的“形状”以及如何组合它。

使用rust进行原型设计, 尤其是数据密集型应用, 得益于rust强大的类型系统和强大的表达能力

## Links

- [prototype, prototyping in rust](https://corrode.dev/blog/prototyping/)
- [](https://lobste.rs/s/atglkw/prototyping_rust)

## Tips

- 避免与借用检查器做斗争, 使用shared owenership

# Rustic

## 借用检查器

使用 共享所有权(shared ownership)

Maybe you’re prototyping and don’t yet want to tackle ownership and lifetimes in a more concrete way.

# 设计模式

## Links

- [5 Essential Rust Design Patterns to Write Better Code](https://www.youtube.com/watch?v=1Ql7sQG8snA)

# 常见问题

## 生命周期管理

## 加速构建



```shell
sudo spctl developer-mode enable-terminal
```

