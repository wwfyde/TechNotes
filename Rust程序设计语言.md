# Rust程序设计语言

## 参考资料(Links)

- https://www.rust-lang.org
- https://www.rust-lang.org/zh-CN/
- https://doc.rust-lang.org/stable/book/
- [**★**Rust语言速查表](https://cheats.rs/)
- 语言参考: https://doc.rust-lang.org/stable/reference/
- 标准库: https://doc.rust-lang.org/std/index.html
- [Rust::Book::异步编程](https://rust-lang.github.io/async-book/intro.html): https://rust-lang.github.io/async-book/intro.html
- [Book]Blog推荐: https://effective-rust.com (先读官方文Book, 这本进阶)
  - https://bitfieldconsulting.com/posts
  - 大卫·德赖斯代尔（David Drysdale）的这本优秀著作准确地回答了这个问题，并提供了许多实用的技巧和解释。这就像与 Rustacean 专家配对，他可以倾身说出诸如“尝试使用迭代器而不是循环”或“这里使用宏有意义的地方，以及没有意义的地方”之类的话。
  - 这本书充满了关于如何像母语一样说 Rust 的好建议，并且还为进一步学习提供了一些很好的起点：例如，David 建议您通读所有[Clippy lints](https://rust-lang.github.io/rust-clippy/master/index.html) 。这是一个很好的建议，我现在将其传授给我自己的学生。

- https://www.yuque.com/qyuhen/rust
- [**推荐** Rust By Example](https://doc.rust-lang.org/stable/rust-by-example/)
- [推荐Rust by practice](https://github.com/sunface/rust-by-practice)
  - ripgrep
  - 中文: https://practice-zh.course.rs/elegant-code-base.html

- [**★**Rust 测验 rust exercise](https://github.com/rust-lang/rustlings)
  - https://rustlings.cool/
- [**★**100道练习题](https://rust-exercises.com/100-exercises/)
- **Google Rust Course**: https://github.com/google/comprehensive-rust
- **★**rust 中文课程: https://github.com/sunface/rust-course
  - Rust语言圣经:https://github.com/sunface/rust-course

- Awesome Rust: https://github.com/rust-unofficial/awesome-rust
- https://deps.rs/
- roadmap
- ripgrep 代码量少 适合阅读
- [清华大学 rust程序训练](https://lab.cs.tsinghua.edu.cn/rust/)

### 参考项目

- [A blazing fast inference solution for text embeddings models](https://github.com/huggingface/text-embeddings-inference)
  - rust + auxm 编写的后端
- https://github.com/loco-rs/loco
  - 比较全面的 axum后端

### Articles

- [JetBrain::Blog::2024 年如何学习 Rust：掌握 Rust 编程的完整入门指南](https://blog.jetbrains.com/zh-hans/rust/2024/12/24/how-to-learn-rust/)




![01丨课程介绍-0001](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403171240666.png)

使用技巧和设计模式

3.	

## 安装配置

```shell
# https://mirrors.tuna.tsinghua.edu.cn/help/rustup/
# 清华
export RUSTUP_UPDATE_ROOT=https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup
export RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup
# 官方安装命令, 即使国内依然使用该脚本,不过需要先添加环境变量
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 中科大 `https://rcore-os.cn/arceos-tutorial-book/ch01-02.html`
export RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
export RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
curl https://sh.rustup.rs -sSf | sh


### https://rsproxy.cn  
# 第二种镜像方案
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

# quickstart

## 重点知识

所有权

生命周期

## 多维观点

- Rust macro 是一种语法解析, 而不是一般的文本替换

## 实践

# 知识概念

> 核心思想、核心原理、核心特性、适用场景、核心概念, 知识与认知
>
> concepts

## table

## misc

- cargo.toml相当于声明了一个package, 可以通过workspace来组织多个cargo.toml





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
- 翻译: 特征(推荐), 一般不翻译
- 在Rust中, trait用来定义某些类型的共同行为它类似于其他编程语言中的接口（interface）或抽象类（abstract class），但具有更加灵活和强大的功能。通过 trait，您可以定义某种类型所必须具备的方法，然后在具体类型中实现这些方法，从而**使得不同类型之间可以共享相同的行为**。
- 从trait命名看其用法
  - Drawable

- **Trait Object 实现运行时多态**



## 宏macro

# Glossary

## Table

| term           | CN          | Define                                                       | Link                                                         |
| -------------- | ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| crate          | 箱, 包      |                                                              |                                                              |
| module         | 模块        | A module is a container for zero or more [items](https://doc.rust-lang.org/stable/reference/items.html). | - [module](https://doc.rust-lang.org/stable/reference/items/modules.html#modules) |
| item           | 项目        |                                                              |                                                              |
| derive         | 派生        |                                                              |                                                              |
| trait          | 特征        |                                                              |                                                              |
| prelude        | 预导入/前奏 | use your_crate::prelude::*;                                  |                                                              |
| implementation | 实现        | iml                                                          |                                                              |

## 核心概念与观点

- 所有权

- 借用

- 所有权和借用 本质上是将数据传递问题, 数据访问控制, 数据的生命周期

- 实现(impl)
  - 固有实现
  - trait实现

- 方法
  - 固有方法
  - 工厂方法
  - trait方法

- 堆分配智能指针(Box)**Box<T>：堆分配智能指针（Heap-Allocated Smart Pointer）**

  - Box<T> 是 Rust 标准库提供的一个智能指针，用于在堆（heap）上分配内存。Box 指向的数据在堆上，Box 本身（指针）在栈（stack）上。

  - > **Box**：用于在堆上存储数据的所有权类型。
    > **智能指针（Smart Pointer）**：除了像常规指针那样存储内存地址，还拥有额外元数据和功能（如自动释放内存）。



## 读法规范

- `&a`: 引用a, 借用a,reference to a, borrow a
  - 取A的引用, a的引用, 本质是a的地址, 存的是一个地址16进制地址
- `*a`: 解引用a, dereference a, 
  - star x, asterisk x 
  - 星a, 星号a, 取a指向的值, 对a进行解引用


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

## cargo-nextest

## cargo-edit

升级包并写入cargo.toml

```shell
cargo install cargo-edit
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

## strum-枚举派生

A small rust library for adding custom derives to enums

# 语言参考

> 语法, syntax

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
  - dyn 表示**动态分发 trait 对象**，即类型在编译时不确定、运行时才能确定的 trait 实现对象。

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

## 枚举

枚举成员成为 variant 有多种类型

## Attribute(属性)

> - [Rust Attribute](https://doc.rust-lang.org/reference/attributes.html)

| **分类**        | **代表属性**                                          | **作用 / 典型场景**    |
| --------------- | ----------------------------------------------------- | ---------------------- |
| **派生**        | #[derive(Debug, Clone)]                               | 自动实现常用 trait     |
| **条件编译**    | #[cfg(target_os = "linux")], #[cfg_attr(test, trace)] | 支持多平台、多 profile |
| **Lint**        | #[allow(unused)], #[deny(warnings)]                   | 编译警告/错误级别管理  |
| **宏**          | #[macro_use], #[macro_export]                         | 宏引入与导出           |
| **测试**        | #[test], #[ignore], #[bench]                          | 单元测试 / 基准测试    |
| **异步**        | #[tokio::test], #[tokio::main]                        | 在 async 运行时中启动  |
| **文档**        | #![doc(html_root_url = "...")], ///                   | 影响 rustdoc 输出      |
| **安全/不安全** | #[repr(C)], #[no_mangle]                              | FFI、布局、符号控制    |
| **编译器特性**  | #![feature(generic_const_exprs)]                      | Nightly gate           |

| **能力层级**   | **典型属性**                            | **强大之处**                                                |
| -------------- | --------------------------------------- | ----------------------------------------------------------- |
| ✅ **静态标记** | #[allow(dead_code)]                     | *零宏*，给编译器/工具一个布尔开关                           |
| 🛠️ **配置裁剪** | #[cfg(target_os = "linux")]             | 单源码跨平台，把不需要的代码连 AST 都不保留                 |
| 🔧 **后端指令** | #[repr(transparent)], #[inline(always)] | 控制 ABI/布局/性能，代替手写 asm 或链接脚本                 |
| 🌀 **派生宏**   | #[derive(Clone, Serialize)]             | 一行代码生成百行实现，且与 trait 系统完美耦合               |
| 🛠️ **属性宏**   | #[instrument], #[tokio::test]           | 拿到 **整个函数 token stream**，可插桩、改签名、生成多版本… |
| 🧩 **跨语言桥** | #[no_mangle], #[link_section]           | 把 Rust 融进 C/Obj-C/JS/WASM 生态，无缝 FFI                 |

# 类型系统

> [!note]
>
> Type System

## Links

- [Rust Language References: Type System](https://doc.rust-lang.org/stable/reference/types.html)

## Vec

## HashMap



# stdlib

# ecosystem

# **Rust book**

- [patterns and matching](https://doc.rust-lang.org/book/ch18-00-patterns.html)

# 编程技术

编程工具, 编程思想, 



# API



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

## List

- 宏与函数定义
  - 变量后面加个!表示这是一个宏而不是函数, 比如`println!`

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



```rust
mod my_module {
  pub fn public_function() {
		println!("This is a public function");

  }

fn private_function() {
    println!("This is a private function");
  }
}

fn main() {
  my_module::public_function();
  // my_module::private_function(); // Error: function is private
}
```



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

