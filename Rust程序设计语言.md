# Rust程序设计语言

## 参考资料(Links)

- https://www.rust-lang.org
- https://www.rust-lang.org/zh-CN/
- https://doc.rust-lang.org/stable/book/
- 语言参考: https://doc.rust-lang.org/stable/reference/
- 标准库: https://doc.rust-lang.org/std/index.html
- https://www.yuque.com/qyuhen/rust
- [Rust By Example](https://doc.rust-lang.org/stable/rust-by-example/)
- [Rust 测验](https://github.com/rust-lang/rustlings)
  - https://rustlings.cool/
- **Google Rust Course**: https://github.com/google/comprehensive-rust
- rust 中文课程: https://github.com/sunface/rust-course
- Awesome Rust: https://github.com/rust-unofficial/awesome-rust
- https://deps.rs/

### 参考项目

- [A blazing fast inference solution for text embeddings models](https://github.com/huggingface/text-embeddings-inference)
  - rust + auxm 编写的后端

### Articles




![01丨课程介绍-0001](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403171240666.png)

使用技巧和设计模式

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

精准学习+刻意练习

**精准学习(专项练习)**: 就是深挖(深入挖掘)一个个高大上的表层知识点, 回归底层基础知识的本原, 再使用类比、联想等方法, 打通涉及的基础知识; 然后从底层设计往表层实现, 一层层构建知识体系, 这样"撒一层土, 夯实, 再撒一层", 让你对知识点理解得更加透彻、掌握得更牢固. 

比如 Rust 中的所有权和生命周期，很多同学说自己看书或者看其他资料，这部分都学得云里雾里的，即便深入逐一理解了几条基本规则，也依旧似懂非懂。

但我们进一步思考“值在内存中的访问规则”，最后回归到堆和栈这些最基础的软件开发的概念，重新认识堆栈上的值的存储方式和生命周期之后，再一层层往上，我们就会越学越明白。

这就是回归本原的重要性，也就是常说的第一性原理：回归事物最基础的条件，将其拆分成基本要素解构分析，来探索要解决的问题。

![image-20240317135733541](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403171357602.png)

精准学习之后，我们就需要**刻意练习**了。刻意练习，就是用精巧设计的例子，通过练习进一步巩固学到的知识，并且在这个过程中尝试发现学习过程中的不自知问题，让自己从“我不知道我不知道”走向“我知道我不知道”，最终能够在下一个循环中弥补知识的漏洞。

这个过程就像子思在《中庸》里谈治学的方法：博学之，审问之，慎思之，明辨之，笃行之。我们学习就要这样，学了没有学会绝不罢休，不断在学习 - 构建 - 反思这个循环中提升自己。Rust 的学习，也是如此。

https://static001.geekbang.org/resource/image/af/98/af815a24607879d14d9b2701c0491a98.jpg?wh=3645x2506

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403171402973.jpg)



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

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403171404778.jpg)

我非常希望你能坚持学下去，和我一直走到最后一讲。这中间，你如果有想不明白的地方，可以先多思考多琢磨，如果还有困惑，欢迎你在留言区问我。

在具体写代码的时候，你可以多举一反三，不必局限于我给的例子，可以想想工作生活中的产品场景，思考如何用 Rust 来实现。

每讲的思考题，也希望你尽量完成，记录分享你的分析步骤和思路。有需要进一步总结提炼的知识点，你也可以记录下来，与我与其他学友分享。毕竟，大物理学家费曼总结过他的学习方法，评价和分享 / 教授给别人是非常重要的步骤，能让你进一步巩固自己学到的知识和技能。

最后，你可以自己立个 Flag，**哪怕只是在留言区打卡你的学习天数或者 Rust 代码行数，我相信都是会有效果的**。3 个月后，我们再来一起验收。

总之，让我们携手，为自己交付 “Rust 开发” 这个大技能，让 Rust 成为你的下一门主力语言！

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

## 安装配置

```shell
export RUSTUP_UPDATE_ROOT=https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup
export RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup
# 官方安装命令, 即使国内依然使用该脚本,不过需要先添加环境变量
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```



## 应用场景

- CLI
- Web开发
- 系统编程
- GUI编程

## Quickstart

```shell
 # install
 curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
 
 # 查看文档
 rustup doc
 
 # cargo.toml
 cargo new project_name
 # if path exist
 cargo init
 
 # check
 cargo check
```

## 零散记录

> [!note]
>
> > Prompt: Rust语言主要使用了什么编程模型和编程范式, 推崇哪些设计模式和编程技术?
>
> Rust语言是一种以安全、性能和并发为设计目标的系统编程语言。它采用了多种编程模型和编程范式，推崇一系列设计模式和编程技术，旨在提供高效、可靠的软件开发方式。以下是Rust语言的一些关键特征和它所采用的技术概述：
>
> ### 编程模型
>
> 1. **所有权（Ownership）**：Rust的核心特征之一，通过所有权模型管理内存，无需垃圾回收。所有权规则包括：每个值在Rust中有一个变量作为其所有者；一次只能有一个所有者；当所有者超出作用域时，值会被丢弃。
> 2. **借用（Borrowing）**：Rust通过借用（不可变和可变借用）允许你使用数据，而不取得其所有权，这对于数据的安全访问至关重要。
> 3. **生命周期（Lifetimes）**：Rust用生命周期来确保引用总是有效的。生命周期注解帮助编译器理解引用何时有效，何时不再有效。
>
> ### 编程范式
>
> Rust是一种多范式编程语言，支持过程式（命令式）、函数式和面向对象的编程范式：
>
> 1. **过程式编程**：支持直接的变量操作和函数调用，以明确的步骤序列来表达算法。
> 2. **函数式编程**：Rust中的函数式编程特性包括高阶函数、闭包、模式匹配、惰性求值（通过迭代器）等，使得代码更加简洁和表达力强。
> 3. **面向对象编程**：虽然Rust不是一种纯面向对象语言，但它支持面向对象的某些特性，如结构体和枚举用于创建自定义数据类型，trait用于定义共享的行为。
>
> ### 设计模式和编程技术
>
> Rust鼓励使用以下设计模式和技术：
>
> 1. **错误处理**：Rust通过`Result`和`Option`枚举来优雅地处理潜在的错误和空值，避免了空指针异常。
> 2. **并发编程**：Rust的所有权和借用规则自然地避免了数据竞争，使得并发编程更安全、更容易。它提供了多种并发编程工具，如线程、消息传递、共享状态等。
> 3. **零成本抽象**：Rust的抽象不会引入运行时开销。这意味着你可以使用高级抽象，如迭代器、闭包等，而不会牺牲性能。
> 4. **宏系统**：Rust提供了一个强大的宏系统，允许编写代码来生成代码，这有助于减少重复代码，提高开发效率。
>
> 综上所述，Rust语言的设计哲学是在保证内存安全的同时，通过利用现代编程范式和设计模式，实现高效率和高性能的软件开发。



# 效率技巧

```shell
# 打开文档
rustup doc
```



# 核心特性

> 核心思想、核心原理、核心特性、适用场景、核心概念

## trait

> [!important]
>
> 定义共同行为
>
> 注意：*trait* 类似于其他语言中的常被称为 **接口**（*interfaces*）的功能，虽然有一些不同。

> [!tip]
>
> AI提问: rust "trait" 的中文翻译,  业内的最佳翻译是, 请解释和注明出处
>
> "trait" 在 Rust 中的中文翻译通常是 "特征"。这个翻译来自于 Rust 官方文档以及社区的广泛接受和使用。
>
> "特征" 在中文中的含义是指某个事物所具有的独特属性或特点。在 Rust 中，"trait" 用来定义某些类型的共同行为，它类似于其他编程语言中的接口（interface）或抽象类（abstract class），但具有更加灵活和强大的功能。通过 trait，您可以定义某种类型所必须具备的方法，然后在具体类型中实现这些方法，从而使得不同类型之间可以共享相同的行为。
>
> 总之，"特征" 是 Rust 中用来定义共享行为的重要概念，它在 Rust 编程中起着至关重要的作用，让代码更具有可复用性和灵活性。



Rust does not have classes in the same way as object-oriented languages like Java or Python, but it uses structs and traits to achieve similar functionality. Structs define the data a type will contain, while traits define the behavior or methods that can be performed on these types. Here's a basic example:

```rust
struct Person {
    name: String,
    age: u8,
}

trait HasBirthday {
    fn birthday(&mut self);
}

impl HasBirthday for Person {
    fn birthday(&mut self) {
        self.age += 1;
    }
}

fn main() {
    let mut person = Person { name: String::from("Alice"), age: 30 };
    println!("Before: {}", person.age);
    person.birthday();
    println!("After: {}", person.age);
}
```



### 多维解释

- trait是用来定义共享行为的重要概念
- 在Rust中, trait用来定义某些类型的共同行为它类似于其他编程语言中的接口（interface）或抽象类（abstract class），但具有更加灵活和强大的功能。通过 trait，您可以定义某种类型所必须具备的方法，然后在具体类型中实现这些方法，从而**使得不同类型之间可以共享相同的行为**。

# Glossary

## Table

| term   | CN     | Define                                                       | Link                                                         |
| ------ | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| crate  | 箱, 包 |                                                              |                                                              |
| module | 模块   | A module is a container for zero or more [items](https://doc.rust-lang.org/stable/reference/items.html). | - [module](https://doc.rust-lang.org/stable/reference/items/modules.html#modules) |
| item   | 项目   |                                                              |                                                              |

## 核心概念与观点

- 所有权
- 借用
- 所有权和借用 本质上是将数据传递问题, 数据访问控制, 数据的生命周期

## List

- **元编程** (metaprogramming) 的一种编程思想。元编程的核心是：编写能够生成、转换或操作代码的代码。它可以减少重复性工作，提升代码的可复用性和可维护性。

## Item

### 宏(Macro)

宏-macro: 模式匹配, 按照替换规则, 编译时批处理

宏定义

```rust
macro_rules! swap {
    ($x:expr, $y:expr) => {
        {
            let temp = $x;
            $x = $y;
            $y = temp;
        }
    };
}

```

宏调用
```rust
let mut a = 5;
let mut b = 10;
swap!(a, b);
```



Rust 宏和其他语言的宏（比如 C 语言的预处理器宏）不同，它是更为安全的，因为 Rust 的宏是基于语法解析的，而不是简单的文本替换。

## syntax

### !

```shell
# 非运算(negation operation)
# 宏调用(macro invocation)
# 永不类型(never type)
```

### `::`-path operator: 路径操作符, scope resolution(域解析)

### &-引用-reference

```
```



## Concept

### crate-包

原意为箱, 更像是其他语言中的package和module.



### 静态方法

### 关联函数(Associated functions)

### 作用域

### 预导入(preclude)



# Toolchain

## rustup

## cargo

Cargo is Rust's build system and package manager.



```shell
cargo new project_name
cargo new --lib project_name
cargo build
cargo run 

cargo run --bin

# 运行 examples目录中的文件
cargo run --example 


cargo doc --open

# 安装package到目录
cargo install --path . --root ~/.local
cargo install --path .  # cargo.toml 指定install.root = " ~/.local"


#
cargo new —lib

```



## rustc



## rustover

| 功能          | 快捷键               | 英文                           | 描述         |
| ------------- | -------------------- | ------------------------------ | ------------ |
| 宏展开        | option+enter         | Macro Expansion                | Macro Expand |
| 查看定义      | cmd+B<br />cmd+click | Go to Declaration              |              |
| 查看类型信息  | ctrl+shift+P         | Get Type Info                  |              |
| 运行高亮命令  | cmd+enter            | Run Highlight comands in IDE   |              |
| Debug高亮命令 | cmd+shift+enter      | Debug Highlight comands in IDE |              |

# Tools

## cargo-expand

- cargo expand：这是一个非常有用的工具，它可以显示宏展开后的代码，帮助你理解宏的展开过程。

```shell
cargo install cargo-expand
cargo expand
```



# Crates

> 【[link](https://u.geekbang.org/subject/rust/100754402?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search)】: 在 Rust 生态中，prost 是发展最好的 protobuf 实现，而 tonic 是最佳的 gRPC 实现。由于 tonic 兼容 tower 生态，因此它和 axum 可以完美结合，共同提供服务。本周的内容会重点讲解 prost 和 tonic 的应用实践。

## 

## clap(cli)

## axum

## tikio

## prost(protobuf)

## tonic(gRPC)

## tower



# 语言参考

## Links

- [语言参考(Language Reference)](https://doc.rust-lang.org/reference/)
- 

## 符号语义

> [Rust 中的符号语义](https://doc.rust-lang.org/stable/reference/tokens.html#punctuation)

Punctuation symbol tokens are listed here for completeness. Their individual usages and meanings are defined in the linked pages.

| Symbol | Name       | Usage                                                        |
| ------ | ---------- | ------------------------------------------------------------ |
| `+`    | Plus       | [Addition](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators), [Trait Bounds](https://doc.rust-lang.org/stable/reference/trait-bounds.html), [Macro Kleene Matcher](https://doc.rust-lang.org/stable/reference/macros-by-example.html) |
| `-`    | Minus      | [Subtraction](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators), [Negation](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#negation-operators) |
| `*`    | Star       | [Multiplication](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators), [Dereference](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#the-dereference-operator), [Raw Pointers](https://doc.rust-lang.org/stable/reference/types/pointer.html#raw-pointers-const-and-mut), [Macro Kleene Matcher](https://doc.rust-lang.org/stable/reference/macros-by-example.html), [Use wildcards](https://doc.rust-lang.org/stable/reference/items/use-declarations.html) |
| `/`    | Slash      | [Division](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators) |
| `%`    | Percent    | [Remainder](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators) |
| `^`    | Caret      | [Bitwise and Logical XOR](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators) |
| `!`    | Not        | [Bitwise and Logical NOT](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#negation-operators), [Macro Calls](https://doc.rust-lang.org/stable/reference/macros-by-example.html), [Inner Attributes](https://doc.rust-lang.org/stable/reference/attributes.html), [Never Type](https://doc.rust-lang.org/stable/reference/types/never.html), [Negative impls](https://doc.rust-lang.org/stable/reference/items/implementations.html) |
| `&`    | And        | [Bitwise and Logical AND](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators), [Borrow](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#borrow-operators), [References](https://doc.rust-lang.org/stable/reference/types/pointer.html), [Reference patterns](https://doc.rust-lang.org/stable/reference/patterns.html#reference-patterns) |
| `|`    | Or         | [Bitwise and Logical OR](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators), [Closures](https://doc.rust-lang.org/stable/reference/expressions/closure-expr.html), Patterns in [match](https://doc.rust-lang.org/stable/reference/expressions/match-expr.html), [if let](https://doc.rust-lang.org/stable/reference/expressions/if-expr.html#if-let-expressions), and [while let](https://doc.rust-lang.org/stable/reference/expressions/loop-expr.html#predicate-pattern-loops) |
| `&&`   | AndAnd     | [Lazy AND](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#lazy-boolean-operators), [Borrow](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#borrow-operators), [References](https://doc.rust-lang.org/stable/reference/types/pointer.html), [Reference patterns](https://doc.rust-lang.org/stable/reference/patterns.html#reference-patterns) |
| `||`   | OrOr       | [Lazy OR](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#lazy-boolean-operators), [Closures](https://doc.rust-lang.org/stable/reference/expressions/closure-expr.html) |
| `<<`   | Shl        | [Shift Left](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators), [Nested Generics](https://doc.rust-lang.org/stable/reference/items/generics.html) |
| `>>`   | Shr        | [Shift Right](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#arithmetic-and-logical-binary-operators), [Nested Generics](https://doc.rust-lang.org/stable/reference/items/generics.html) |
| `+=`   | PlusEq     | [Addition assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `-=`   | MinusEq    | [Subtraction assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `*=`   | StarEq     | [Multiplication assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `/=`   | SlashEq    | [Division assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `%=`   | PercentEq  | [Remainder assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `^=`   | CaretEq    | [Bitwise XOR assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `&=`   | AndEq      | [Bitwise And assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `|=`   | OrEq       | [Bitwise Or assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `<<=`  | ShlEq      | [Shift Left assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions) |
| `>>=`  | ShrEq      | [Shift Right assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#compound-assignment-expressions), [Nested Generics](https://doc.rust-lang.org/stable/reference/items/generics.html) |
| `=`    | Eq         | [Assignment](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#assignment-expressions), [Attributes](https://doc.rust-lang.org/stable/reference/attributes.html), Various type definitions |
| `==`   | EqEq       | [Equal](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#comparison-operators) |
| `!=`   | Ne         | [Not Equal](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#comparison-operators) |
| `>`    | Gt         | [Greater than](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#comparison-operators), [Generics](https://doc.rust-lang.org/stable/reference/items/generics.html), [Paths](https://doc.rust-lang.org/stable/reference/paths.html) |
| `<`    | Lt         | [Less than](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#comparison-operators), [Generics](https://doc.rust-lang.org/stable/reference/items/generics.html), [Paths](https://doc.rust-lang.org/stable/reference/paths.html) |
| `>=`   | Ge         | [Greater than or equal to](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#comparison-operators), [Generics](https://doc.rust-lang.org/stable/reference/items/generics.html) |
| `<=`   | Le         | [Less than or equal to](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#comparison-operators) |
| `@`    | At         | [Subpattern binding](https://doc.rust-lang.org/stable/reference/patterns.html#identifier-patterns) |
| `_`    | Underscore | [Wildcard patterns](https://doc.rust-lang.org/stable/reference/patterns.html#wildcard-pattern), [Inferred types](https://doc.rust-lang.org/stable/reference/types/inferred.html), Unnamed items in [constants](https://doc.rust-lang.org/stable/reference/items/constant-items.html), [extern crates](https://doc.rust-lang.org/stable/reference/items/extern-crates.html), [use declarations](https://doc.rust-lang.org/stable/reference/items/use-declarations.html), and [destructuring assignment](https://doc.rust-lang.org/stable/reference/expressions/underscore-expr.html) |
| `.`    | Dot        | [Field access](https://doc.rust-lang.org/stable/reference/expressions/field-expr.html), [Tuple index](https://doc.rust-lang.org/stable/reference/expressions/tuple-expr.html#tuple-indexing-expressions) |
| `..`   | DotDot     | [Range](https://doc.rust-lang.org/stable/reference/expressions/range-expr.html), [Struct expressions](https://doc.rust-lang.org/stable/reference/expressions/struct-expr.html), [Patterns](https://doc.rust-lang.org/stable/reference/patterns.html), [Range Patterns](https://doc.rust-lang.org/stable/reference/patterns.html#range-patterns) |
| `...`  | DotDotDot  | [Variadic functions](https://doc.rust-lang.org/stable/reference/items/external-blocks.html), [Range patterns](https://doc.rust-lang.org/stable/reference/patterns.html#range-patterns) |
| `..=`  | DotDotEq   | [Inclusive Range](https://doc.rust-lang.org/stable/reference/expressions/range-expr.html), [Range patterns](https://doc.rust-lang.org/stable/reference/patterns.html#range-patterns) |
| `,`    | Comma      | Various separators                                           |
| `;`    | Semi       | Terminator for various items and statements, [Array types](https://doc.rust-lang.org/stable/reference/types/array.html) |
| `:`    | Colon      | Various separators                                           |
| `::`   | PathSep    | [Path separator](https://doc.rust-lang.org/stable/reference/paths.html) |
| `->`   | RArrow     | [Function return type](https://doc.rust-lang.org/stable/reference/items/functions.html), [Closure return type](https://doc.rust-lang.org/stable/reference/expressions/closure-expr.html), [Function pointer type](https://doc.rust-lang.org/stable/reference/types/function-pointer.html) |
| `=>`   | FatArrow   | [Match arms](https://doc.rust-lang.org/stable/reference/expressions/match-expr.html), [Macros](https://doc.rust-lang.org/stable/reference/macros-by-example.html) |
| `<-`   | LArrow     | The left arrow symbol has been unused since before Rust 1.0, but it is still treated as a single token |
| `#`    | Pound      | [Attributes](https://doc.rust-lang.org/stable/reference/attributes.html) |
| `$`    | Dollar     | [Macros](https://doc.rust-lang.org/stable/reference/macros-by-example.html) |
| `?`    | Question   | [Question mark operator](https://doc.rust-lang.org/stable/reference/expressions/operator-expr.html#the-question-mark-operator), [Questionably sized](https://doc.rust-lang.org/stable/reference/trait-bounds.html#sized), [Macro Kleene Matcher](https://doc.rust-lang.org/stable/reference/macros-by-example.html) |
| `~`    | Tilde      | The tilde operator has been unused since before Rust 1.0, but its token may still be used |

## [Delimiters](https://doc.rust-lang.org/stable/reference/tokens.html#delimiters)

Bracket punctuation is used in various parts of the grammar. An open bracket must always be paired with a close bracket. Brackets and the tokens within them are referred to as “token trees” in [macros](https://doc.rust-lang.org/stable/reference/macros-by-example.html). The three types of brackets are:

| Bracket | Type                   |
| ------- | ---------------------- |
| `{` `}` | Curly braces           |
| `[` `]` | Square brackets 方括号 |
| `(` `)` | Parentheses 括弧       |

| **符号** | **中文**       | **EN**                | **Python** | **Go** | **C**               | **用法**                 |
| -------- | -------------- | --------------------- | ---------- | ------ | ------------------- | ------------------------ |
| **::**   | 路径分隔符     | Path separator        | .          | .      | ::                  | std::io::Result          |
| **->**   | 返回类型指示符 | Return type indicator | ->         | ->     | ->                  | fn example() -> i32      |
| **<-**   | 通道接收       | Channel receive       | 无         | <-     | 无                  | let value = <-channel    |
| **&&**   | 逻辑与         | Logical AND           | and        | &&     | &&                  | if x && y { ... }        |
| **\|\|** | 逻辑或         | Logical OR            | or         | \|\|   | \|\|                | if x \|\| y { ... }      |
| **=**    | 赋值           |                       | =          | =      | =                   | let a = 12;              |
| **==**   | 相等           | Equal to              | ==         | ==     | ==                  | if x == y { ... }        |
| **!=**   | 不相等         | Not equal to          | !=         | !=     | !=                  | if x != y { ... }        |
| **;**    | 语句结束       | Statement terminator  |            | ;      | ;                   | let x = 5;               |
| **let**  | 变量声明       | Variable declaration  |            | var    | 无                  | let x = 10;              |
| **fn**   | 函数声明       | Function declaration  | def        | func   | void/int/float/etc. | fn greet() { ... }       |
| !        | 宏调用         | macro                 |            |        |                     | println!("hello, 世界!") |

## 关键字(keyword)

> - https://kaisery.github.io/trpl-zh-cn/appendix-01-keywords.html

- `as` - 强制类型转换，消除特定包含项的 trait 的歧义，或者对 `use` 语句中的项重命名
- `async` - 返回一个 `Future` 而不是阻塞当前线程
- `await` - 暂停执行直到 `Future` 的结果就绪
- `break` - 立刻退出循环
- `const` - 定义常量或不变裸指针（constant raw pointer）
- `continue` - 继续进入下一次循环迭代
- `crate` - 在模块路径中，代指 crate root
- `dyn` - 动态分发 trait 对象
- `else` - 作为 `if` 和 `if let` 控制流结构的 fallback
- `enum` - 定义一个枚举
- `extern` - 链接一个外部函数或变量
- `false` - 布尔字面值 `false`
- `fn` - 定义一个函数或 **函数指针类型** (*function pointer type*)
- `for` - 遍历一个迭代器或实现一个 trait 或者指定一个更高级的生命周期
- `if` - 基于条件表达式的结果分支
- `impl` - 实现自有或 trait 功能
- `in` - `for` 循环语法的一部分
- `let` - 绑定一个变量
- `loop` - 无条件循环
- `match` - 模式匹配
- `mod` - 定义一个模块
- `move` - 使闭包获取其所捕获项的所有权
- `mut` - 表示引用、裸指针或模式绑定的可变性
- `pub` - 表示结构体字段、`impl` 块或模块的公有可见性
- `ref` - 通过引用绑定
- `return` - 从函数中返回
- `Self` - 定义或实现 trait 的类型的类型别名
- `self` - 表示方法本身或当前模块
- `static` - 表示全局变量或在整个程序执行期间保持其生命周期
- `struct` - 定义一个结构体
- `super` - 表示当前模块的父模块
- `trait` - 定义一个 trait
- `true` - 布尔字面值 `true`
- `type` - 定义一个类型别名或关联类型
- `union` - 定义一个 [union](https://doc.rust-lang.org/reference/items/unions.html) 并且是 union 声明中唯一用到的关键字
- `unsafe` - 表示不安全的代码、函数、trait 或实现
- `use` - 引入外部空间的符号
- `where` - 表示一个约束类型的从句
- `while` - 基于一个表达式的结果判断是否进行循环

### [保留做将来使用的关键字](https://kaisery.github.io/trpl-zh-cn/appendix-01-keywords.html#保留做将来使用的关键字)

如下关键字没有任何功能，不过由 Rust 保留以备将来的应用。

- `abstract`
- `become`
- `box`
- `do`
- `final`
- `macro`
- `override`
- `priv`
- `try`
- `typeof`
- `unsized`
- `virtual`
- `yield`



# 类型系统

> [!note]
>
> Type System

## Links

- [Rust Language References: Type System](https://doc.rust-lang.org/stable/reference/types.html)

## Vec

## HashMap

# **Rust book**

- [patterns and matching](https://doc.rust-lang.org/book/ch18-00-patterns.html)

# 编程技术

编程工具, 编程思想, 



# Web/Backend



# CLI

- https://rust-cli.github.io/book/index.html
- [Rust 中的命令行应用, (官方文档中文翻译linked from official)](https://suibianxiedianer.github.io/rust-cli-book-zh_CN/)

# Topics

## 所有权与借用

### questions

- `self`, `&self` 和 `&mut self`区别

- ```
  
  ```

# 最佳实践

# 常见问题

## 代码规范

## 多二进制文件

主要有两种方式, 一是bin目录中, 二是在cargo中声明多个`[[bin]]`

```shell

```

## 理解哪些概念和问题和观点后有助于提升自己的rust编程能力?

## python类与实例化等效实现

```python
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, I'm {self.name} and I'm {self.age} years old."
    def grow(self):
      self.age += 1

# 实例化
person = Person("Alice", 30)
print(person.greet())
```

```rust
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Self {
        Person { name, age }
    }

    fn greet(&self) -> String {
        format!("Hello, my name is {} and I'm {} years old.", self.name, self.age)
    }

    fn have_birthday(&mut self) {
        self.age += 1;
    }
}
```



## Rust是如何组织代码的

Rust 通过多种模块化和代码组织方式来管理项目的结构，使代码易于维护和扩展。以下是 Rust 代码组织的主要模型和概念：



**1. 模块 (Modules)**



Rust 使用模块（mod）来组织代码，将代码分成多个逻辑单元。模块的核心目的是 **分隔命名空间**，防止名称冲突，并 **提高代码可读性** 和 **可维护性**。



- **定义模块**：使用 mod 关键字定义模块。模块可以嵌套，可以在文件内部或外部定义。



```rust
mod my_module {
  pub fn say_hello() {
    println!("Hello from my_module!");
  }
}

fn main() {
  my_module::say_hello();
}


```





- **子模块**：模块可以有子模块，子模块也可以有子模块。通过模块树可以组织复杂的项目。



mod outer {

  mod inner {

​    pub fn inner_function() {

​      println!("Inside inner function");

​    }

  }

  pub fn outer_function() {

​    println!("Inside outer function");

  }

}

fn main() {

  outer::outer_function();

}







**2. 包 (Packages)**



包（Package）是一个 **用于发布和分发代码的单元**，它包含一个 Cargo.toml 文件和多个库或二进制 crate。一个包可以包含 **0 到多个二进制 crate**，但只能有 **一个库 crate**。



- **Cargo.toml**：这是 Rust 的包管理工具 Cargo 使用的配置文件，它定义了项目的依赖项、元数据（如版本号和作者）以及构建选项。



[package]

name = "my_package"

version = "0.1.0"

edition = "2021"



[dependencies]

serde = "1.0"







**3. Crates (箱)**



Crates 是 Rust 中的 **最小的编译单元**，每个 crate 生成一个独立的库或二进制文件。它可以是一个库 crate（lib.rs）或者二进制 crate（main.rs）。Crates 是通过 extern crate 引入的，这使得它们成为可以在其他项目中复用的模块。



- **库 Crate**：用于定义可以被其他 crate 使用的库。它通常包含在 src/lib.rs 文件中。

- **二进制 Crate**：定义一个可执行文件，通常包含在 src/main.rs 文件中。



**4. 路径 (Paths) 和可见性 (Visibility)**



Rust 使用路径来引用不同模块和结构。路径有两种类型：**绝对路径** 和 **相对路径**。



- **绝对路径**：从 crate 根开始，例如 crate::module_name::function_name。

- **相对路径**：从当前模块开始，例如 self::function_name 或 super::parent_function_name。



默认情况下，模块和函数是私有的。可以通过使用 pub 关键字来公开它们，从而使它们可以被其他模块或 crate 使用。



mod my_module {

  pub fn public_function() {

​    println!("This is a public function");

  }

  fn private_function() {

​    println!("This is a private function");

  }

}

fn main() {

  my_module::public_function();

  // my_module::private_function(); // Error: function is private

}



**5. 工作区 (Workspaces)**



Rust 的工作区是 **多个相关包的集合**，它们共享一个 Cargo.lock 文件，允许它们在同一版本下协调依赖。工作区使得多个 crate 可以在同一项目中协同开发。



工作区通过在 **根目录的 Cargo.toml** 文件中声明，包含多个子包：



[workspace]

members = [

  "crate1",

  "crate2",

]



**6. 使用外部 crate**



Rust 项目可以使用来自 Crates.io 的外部 crate，通过 Cargo.toml 文件中的依赖配置来实现。这些依赖项会在构建时自动下载和编译。



例如，使用 serde 库来处理 JSON 数据：



[dependencies]

serde = "1.0"

serde_json = "1.0"



然后在代码中引入外部 crate：



extern crate serde;

use serde::Serialize;



**7. 宏 (Macros)**



Rust 支持两类宏：**声明式宏**（macro_rules!）和 **过程宏**。它们提供了灵活的 **代码生成** 机制，用来减少重复代码、创建领域特定语言（DSL）等。



声明式宏：



macro_rules! say_hello {

  () => {

​    println!("Hello, Rust!");

  };

}

fn main() {

  say_hello!();

}



**8. 智能指针和所有权系统**



Rust 通过所有权系统管理内存，主要概念有：



- **所有权（Ownership）**：每个值都有一个所有者。

- **借用（Borrowing）**：通过引用共享数据，不转移所有权。

- **生命周期（Lifetimes）**：保证引用在其使用期间是有效的。



**总结**



Rust 的代码组织围绕模块化、包管理、可见性控制、工作区等核心概念展开。通过这些机制，开发者可以高效地管理项目代码，并在多个项目间共享通用逻辑。更多详情可以参考 Rust 官方文档中的模块和路径系统章节 。

# 零散记录

20240409 cargo-expand rustover

