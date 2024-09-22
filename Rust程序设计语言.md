# Rust程序设计语言

## 参考资料(Links)

- https://www.rust-lang.org
- https://www.rust-lang.org/zh-CN/
- https://doc.rust-lang.org/stable/book/
- https://www.yuque.com/qyuhen/rust
- [Rust By Example](https://doc.rust-lang.org/stable/rust-by-example/)



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



# 学习技巧

```shell
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

## List

- 宏-macro: 模式匹配, 按照替换规则, 编译时批处理

    - 宏定义

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

    - 宏调用
        ```rust
        let mut a = 5;
        let mut b = 10;
        swap!(a, b);
        ```

- `::`-path operator: 路径操作符, scope resolution(域解析)

## syntax

### !

```shell
# 非运算(negation operation)
# 宏调用(macro invocation)
# 永不类型(never type)
```

### ::

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


cargo doc --open

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

# 语言参考

## Links

- [语言参考(Language Reference)](https://doc.rust-lang.org/reference/)





# 类型系统

> [!note]
>
> Type System

# 零散记录

20240409 cargo-expand rustover

