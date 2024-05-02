# Go程序设计语言

> 参考文档
>
> 理论: <**Go程序设计语言**>    **官方文档**
>
> 实践:  **Go开发实战(极客时间)**    
>
> **千锋Go语言**
>
> **尚硅谷**
>
> **参考官方文档结构**

## 学习资源

- [官网](https://go.dev)
- [知识图谱](https://go.dev/src/cmd/compile/README)
- Concurrency in Go 书籍(推荐英文版, 中文翻译很烂)

## 基本认知

Go语言中, 一切皆是类型, 一切皆是对象, 类型即是对象,类型必有对象

类型即时模型, 类型优先, 然后才是方法, 

以数据为中心, 一切都可以属性化, 包括函数和接口

类型是一种约束, 接口约束了类型的方法必须满足接口中所有的方法签名, 类型则约束了必须是某类型, 约束了相应的字段



### 设计理念

Go起初是专为API和网络服务器而设计，Github上的大多数Go项目都是以库的形式编写的，因此“标准Go程序结构”可能非常适合。 

## 重点概念

指针(pointer), 

go协程(go ), 

接口, 结构, 包(package), 容器(container), 切片(slice)

goimports

协程(goroutines)

通道(channels)

## 学习技巧

根据最佳时间, 总结的一系列 策略, 和细节问题

- **学习新语言比较自然的方式, 是使用新语言写一些你已经可以用其他语言实现的程序.**
- 优先学会系统调用和编写命令行程序
- 然后是网络编程



## Go Proverbs

> `go proverbs` `GO箴言` `Zen of Go`

[//]: # (TODO )

```markdown
# Go 箴言
"Go Proverbs"

# 简单, 诗意, 精炼
Simple, Poetic, Pithy

# 别通过共享内存通信, 通过通信共享内存
"Don't communicate by sharing memory, share memory by communicating."

# 并发不是并行
Concurrency is not parallelism.

# Channel用于编排, 互斥锁用于串行化.
Channels orchestrate; mutexes serialize.
什么时候使用 mutex, sync, atomic, channel
Channels orchestrate
a lot of beginners struggle with idea of when do i use a mutex(mutual exclusion) or a sync cond(condition variable) or a atomic value. or when do i use a channel and a goroutine. and you know all this stuff and one way to think about that is that mutexes are fine-grained and very small and they tend to serialize execution. if you put a mutex on a variable then only one can ever happen at a time to that variable. but when you and thats often very important and sometimes that's exactly what you want. but in the big picture of the whole program what's going on goroutines and channels give you a way to sort of structure the program and i'm using the word orchestrate here to arrange how the pieces work and to generate that sort of large scale service or whatever it is you're building. the sort of select for loop that everybody knows using channels to orchestrate your program is sort of the canonical example. 
很多初学者纠结于什么时候使用互斥

for 循环
很多初学者

# 接口越大抽象就越弱
The bigger the interface, the weaker the abstraction.

# 使零值是有用
Make the zero value useful.

# interface{}什么也没说
interface{} says nothing.

# Gofmt是所有人的最爱
Gofmt's style is no one's favorite, yet gofmt is everyone's favorite.

# 少量复制比少量依赖更好
A little copying is better than a little dependency.
代码复制胜过使用依赖, 不能总是使用依赖, 尤其是面对简单的代码.

# 必须使用构建标签的方式保护系统调用
Syscall must always be guarded with build tags.

Cgo must always be guarded with build tags.

# cgo不是Go
Cgo is not Go.

# 使用不安全的包不能保证安全.
With the unsafe package there are no guarantees.

# 清晰比聪明好
Clear is better than clever.

# 反射绝不清晰
Reflection is never clear.

# 错误是个值
Errors are values.

# 别只检查错误, 优雅地处理错误. 
Don't just check errors, handle them gracefully.

# 设计架构, 命名组件, 编写文档.
Design the architecture, name the components, document the details.

# 文档供用户使用. 
Documentation is for users.

# 不要抛出异常
Don't panic.

panic更多是在调试的时候使用, 生产程序应该尽可能避免抛出异常
```



## 程序原理

> 执行原理 组织结构

## 应用场景

开发大型系统

## 优势

特性足够简单

具备垃圾回收机制

编译速度快

可读性较好, 方便维护

### 1、学习曲线容易

Go语⾔言语法简单，包含了了类C语法。因为Go语⾔言容易易学习，所以⼀一个普通
的⼤大学⽣生花几个星期就能写出来可以上手的、高性能的应用。在国内大家都追求
快，这也是为什么国内Go流行的原因之一。

### 2、效率：快速的编译时间，开发效率和运⾏行行效率⾼高

开发过程中相较于 Java 和 C++呆滞的编译速度，Go 的快速编译时间是一
个主要的效率优势。Go拥有接近C的运⾏行行效率和接近Python的开发效率。

### 3、出身名门、⾎统纯正

之所以说Go出身名⻔门，从Go语⾔言的创造者就可⻅见端倪，Go语⾔言绝对⾎血统纯
正。其次Go语⾔言出⾃自Google公司，Google在业界的知名度和实⼒力力⾃自然不不⽤用多
说。Google公司聚集了了⼀一批⽜牛⼈人，在各种编程语⾔言称雄争霸的局⾯面下推出新的
编程语⾔言，⾃自然有它的战略略考虑。⽽而且从Go语⾔言的发展态势来看，Google对它
这个新的宠⼉儿还是很看重的，Go⾃自然有⼀一个良好的发展前途。

### 4、⾃由⾼效：组合的思想、⽆侵入式的接口

Go语⾔言可以说是开发效率和运⾏行行效率二者的完美融合，天生的并发编程支
持。Go语言支持当前所有的编程范式，包括过程式编程、⾯面向对象编程、面向
接口编程、函数式编程。程序员们可以各取所需、自由组合、想怎么玩就怎么
玩。

### 5、强⼤的标准库

这包括互联网应用、系统编程和网络编程。Go里面的标准库基本上已经是非常稳定了，特别是我这里提到的三个，网络层、系统层的库非常实用。

### 6、部署方便：二进制文件，Copy部署

这一点是很多⼈人选择Go的最⼤大理理由，因为部署太方便了，所以现在也有很
多人用Go开发运维程序。

### 7、简单的并发

Go是一种非常高效的语言, 高度支持并发性. Go是为大数据、微服务、并发而生的一种编程语言.
Go作为一门语言致力于使事情简单化。它并未引⼊入很多新概念，而是聚焦于打造一门简单的语言, 它使用起来异常快速并且简单。其唯一的创新之处是goroutines
和channel. Goroutines 是 Go ⾯面向线程的轻量量级⽅方法，而通道是 goroutines 之间通信的优先方式。
创建 Goroutines 的成本很低，只需几千个字节的额外内存，正由于此，才使得同时运⾏行行数百个甚⾄至数千个 goroutines 成为可能。可以借助通道实现
goroutines 之间的通信。Goroutines 以及基于通道的并发性方法使其非常容易使用所有可⽤用的CPU内核，并处理理并发的
IO。相较于Python/Java，在一个 goroutine 上运⾏行行⼀一个函数需要最⼩小的代码。

### 8、稳定性

Go拥有强大的编译检查、严格的编码规范和完整的软件生命周期工具，具有很强的稳定性，稳定压倒一切。那么为什么Go相比于其他程序会更更稳定呢？这是因为Go提供了了软件⽣生命周期（开发、测试、部署、维护等等）的各个环节的工具，如go
tool、gofmt、go test。

### Go语⾔言的核心特性和优势

Go主要有静态语言、函数多返回值、天⽣并发、内置GC（⾃自动垃圾回收）、安全性高、语法简单、编译快速这几个方⾯面的特性。这些特性决定了了Go的三个高富帅特性：运行快、开发快和部署快。

静态类型语言是指在编译时变量的数据类型即可确定的语言，要求在使⽤用变量之前必须声明数据类型（具有类型推导能力的现代语言可能能够部分减轻这个要求）；

动态类型语言是在运行时确定数据类型的语言，变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。

Go语言是目前项目转型首选的语言，也是软件工程师转型首选的语言，是添加技术栈的首选语言。Go常常是一种为转型而量身定制的语言。

### Go语⾔言能开发什什么？

1、服务器器编程，以前你如果使⽤用C或者C++做的那些事情，⽤Go来做很合适，例如处理日志、数据打包、虚拟机处理、⽂件系统等。
2、分布式系统、数据库代理理器器、中间件等，例如Etcd。
3、⽹络编程，这⼀一块⽬目前应用最广，包括Web应用、API应用、下载应用，⽽且Go内置的net/http包基本上把我们平常⽤用到的⽹网络功能都实现了了。
4、数据库操作
5、开发云平台，⽬前国外很多云平台在采用Go开发

### 运行方式

go run hello-world.go

go build >> ./hello-world

> 经过编译后的程序, 可以不用进行任何其他处理, 随时执行

## 编程规范

### 注释

### 标识符

Go语言中, 使用大小写来决定标识符(变量, 常量, 类型, 接口, 结构, 函数)是否可以被外部包所调用

以一个大写字母开头, 那么使用这种形式的标识符的对象就可以被外部包的代码所使用(使用时程序需要先导入这个包), 如同⾯向对象语言中的
public。

如果以小写字母开头，则对包外是不可⻅的，但是他们在整个包的内部是可⻅并且可用的，像⾯向对象语言中的 private.

`{` 符号必须和关键字func在同一行, 不能独自成行, 对于 `x + y` 表达式, 换行符必可以在 `+` 操作符后面, 但是不能在 `+` 前面

Go对于代码的格式化要求非常严格. gofmt工具将diamante以标准格式重写, `go fmt` 命令其实使用了 `gofmt`
工具来格式化指定包里的所有文件或者当前文件夹中的文件(默认).

## 关键字和保留字

## GO程序结构

```go
//通常在该位置对包进行描述, 
//对于main包, 注释是一个或多个完整的句子, 用来对这个程序进行整体概括
//当前程序的包名
package main

//导入其他包
import "fmt"

//常量定义
const PI = 3.14

//全局变量声明和赋值
var name = "Asa"

//一般类型声明
type newType int

// 结构声明
type my struct()

//接口声明
type golang interface()

//由main()函数作为程序的入口
func main(){
	fmt.Print("Hello, 世界!\n")
}



```

## GO项目结构

[参考文档-官方](https://golang.org/doc/gopath_code.html)

仓库, 模块, 包, 源文件(source file), 语句, 表达式, 单词

Go programs are organized into packages. A package is a collection of source files in the same directory that are
compiled together. Functions, types, variables, and constants defined in one source file are visible to all other source
files within the same package.

A repository contains one or more modules. A module is a collection of related Go packages that are released together. A
Go repository typically contains only one module, located at the root of the repository. A file named `go.mod` there
declares the module path: the import path prefix for all packages within the module. The module contains the packages in
the directory containing its `go.mod` file as well as subdirectories of that directory, up to the next subdirectory
containing another `go.mod` file (if any).

Note that you don't need to publish your code to a remote repository before you can build it. A module can be defined
locally without belonging to a repository. However, it's a good habit to organize your code as if you will publish it
someday.

Each module's path not only serves as an import path prefix for its packages, but also indicates where the `go` command
should look to download it. For example, in order to download the module `golang.org/x/tools`, the `go` command would
consult the repository indicated by `https://golang.org/x/tools` (described
more [here](https://golang.org/cmd/go/#hdr-Relative_import_paths)).

An import path is a string used to import a package. A package's import path is its module path joined with its
subdirectory within the module. For example, the module `github.com/google/go-cmp` contains a package in the
directory `cmp/`. That package's import path is `github.com/google/go-cmp/cmp`. Packages in the standard library do not
have a module path prefix.

## Go文件结构组成

Go 程序是通过 package 来组织的

变量

变量是计算机语言中储存数据的抽象概念。变量量的功能是存储数据。变量通过变量量名访问；

变量的本质是计算机分配的⼀一⼩小块内存，专门用于存放指定数据，在程序运⾏过程中该数值可以发⽣改变；
变量的存储往具有瞬时性，或者说是临时存储，当程序运⾏结束，存放该数据的内存就会释放，⽽该变量就会消失；

Go 语言的变量名由字⺟、数字、下划线组成，首个字符不能为数字;

**Go语法规定，定义的局部变量若没有被调⽤则编译错误。**
命名 : 驼峰命名⻛格，不建议用下划线连接多个单词。

### 七、出于性能考虑的最佳实践和建议

1. 尽可能的使⽤ `:=` 去初始化声明⼀个变量（在函数内部）；
2. 尽可能的使⽤`字符代替字符串`；
3. 尽可能的使⽤`切⽚`代替数组；
4. 尽可能的使⽤数组和切⽚代替map；
5. 如果只想获取切⽚中某项值，不需要值的索引，尽可能的使⽤`for range`去遍历切⽚，这⽐必须查询切⽚中的每个元素要快⼀些；
6. 当数组元素是`稀疏`的（例如有很多0值或者空值nil），使⽤map会降低内
   存消耗；
7. 初始化map时指定其容量；
8. 当定义⼀个⽅法时，使⽤`指针类型`作为⽅法的接收者；
9. 在代码中使⽤`常量`或者标志提取常量的值；
10. 尽可能在需要分配⼤量内存时使⽤`缓存`；
11. 使⽤`缓存模板`。



# Glossary

> 专业术语
> 术语对照表

## Cheatsheet

| 英文 | 中文 | 描述 |
|----|----|----|
|    |    |    |
|    |    |    |
|    |    |    |



## 术语列表

- workspace-工作空间: 开发go程序之前必须指定GOPATH
- 通道(channel):
- 指针(pointer):
    - python中叫作引用

- routine-例程(goroutine):
- 控制流(control flow):
- 命名类型(named type)
- 方法(method): 一个关联了命名类型的函数
- 接口(interface):
- 包(package)
- 注释(comment)
- 零值(zero value)
    - type numbers is 0
    - type booleans is false
    - type strings is ""
    - complex type is nil

- 引用类型-reference types:
    - slice
    - pointer
    - map
    - channel
    - function
- 程序-**program**: 计算机指令(,动作, 过程, 流程的集合), 通常指源代码编译生成的二进制文件.
- 源文件-**source file**: 编写程序的源代码文件
- 操作数-**operands**: 运算符作用于的实体, 操作对象, 运算对象
- 语法块-**syntactic block**: 大括号围起来的一个语句序列, 比如一个循环体或函数体.
- 词法块-**lexical block**: 没有被显式包含在大括号中的声明代码. 包, 文件, for语句等
- 全局块-**global block**: 包含了全部源代码的词法块.
- 模块-**module**:
    - A module is a collection of [Go packages](https://golang.org/ref/spec#Packages) stored in a file tree with
      a `go.mod` file at its root. The `go.mod` file defines the module’s *module path*, which is also the import path
      used for the root directory, and its *dependency requirements*, which are the other modules needed for a
      successful build. Each dependency requirement is written as a module path and a
      specific [semantic version](http://semver.org/).
- 包-**package**:
- 环境变量:
    - GOROOT:Go语言的当前安装目录
    - GOPATH(Deprecated):工作区目录
        - the location of workspace
- 导入路径(import path): 唯一标识包(package)的字符串

## 工作空间-workspace

> - https://github.com/golang/go/wiki/SettingGOPATH
>   - https://go.dev/doc/code#Workspaces

## Go指针-pointer

> 指针, 也称"引用", 指针变量

Go指针的指是变量的地址。在一些语言中(比如C), 指针是没有约束的。其他语言中, 指针被称为"引用", 并且除了到处传递之外,
它不能做其他的事情。

Go做了一个折中, 指针显式课件。 使用 `&` 操作符可以获取一个变量的地址, 使用 `*` 操作符可以获取指针引用的变量的值,
但是指针不支持算术运算。

```go
// 关于指针的例子说明

// 使用函数改变变量的值 
package main
import "fmt"

func changeValue(p int) {
  p = 10
}
func main() {
  var a int = 1
  changeValue(a)  //形参会在函数每调用一次时初始化并新开辟一个内存地址, 
  
  fmt.Println(a)  // 这个时候a的值应该为1  并未修改成功
}
```

```go
package main
import "fmt"

func changeValue(p *int) {
  *p = 10
}
func main() {
  var a int = 1
  changeValue(&a)  //形参会在函数每调用一次时初始化并新开辟一个内存地址, 
  
  fmt.Println(a)  // a = 10 修改成功
}
```

*形参会初始化一个新的内存地址, 而指针则是直接操控内存地址, 但是初始化了一个新的指针变量*

## 控制流

for, if, switch

## 命名类型

```go
type Point struct {
  X, Y int
}

var p Point
```

## 方法-method

一个关联了命名类型的函数称为方法

## 接口-interface

接口可以用相同的方式处理不同的具体类型的抽象类型, 它基于这些类型所包含的方法, 而不是类型的描述或实现

## 注释-comment

在声明任何函数, 写一段注释来说明它的行为是一个很好的风格。这个约定很重要, 因为它们可以被go doc 和godoc工具定位和作为文档显示。

## 闭包-closure



## 引用类型-reference type

注意引用类型与复合数据类型的区别

Go中的引用类型: function pointer, channel.

# 语言特性

[官方文档](https://go.dev/doc/)

易读-expressive

简洁-concise

清晰-clean

高效-efficient

并发机制-concurrency mechanism

快速

静态类型

编译型

## 定义

**经典书籍**: Go是**编译型**的语言. Go的工具链将程序的源文件转变成机器相关的原生二进制指令. 这些工具可以通过单一的go命令配合其子命令进行使用.

**百度百科**: Go(又称golang)是google开发的一种**静态强类**型, **编译**型, **并发**型,并具有**垃圾回收**功能的编程语言

## Go程序设计语言

- Go**原生支持Unicode**, 所以它可以处理所有国家的语言
- Go代码是**使用包来组织**的, 类似于其他语言中的库和模块.
- 变量可以在声明的时候初始化
  如果变量没有明确地初始化, 它将隐式地初始化为这个类型的空值
- Go不需要再语句(statement)或声明结尾使用分号, 除非多个语句或声明出现在同一行
  事实上, 跟在特定符号后面的换行符被转换为分号, 因此在什么地方进行换行会影响对Go代码的解析)
- "{"符号必须和关键字func在同一行, 不能独自成行, 并且在`x+y`表达式中, 换行符可以在+操作符的后面但不能再+操作符前面
- Go对于代码的格式化要求非常严格. gofmt工具将代码以标准格式重写,
  go工具的fmt子命令使用gofmt工具来格式化指定包里的所有文件或者当前文件夹中的文件(默认情況下). 本书中包含的所有Go源代码文件都使用gofmt
  运行过，你应该养成对自己的代码使用gofmt工真的习惯。定制一个标准的格式，可以省去大量无关紧要的辦论，更重要的是，如果允许随心所欲的格式，各种自动化的记代的转换工具将不可用。
- `i++` 等价于 `i += 1` 等价于 `i = i + 1` 这是一个语句, 而不是表达式 不同于其他C族语言, 因此 `j = i++` 是错误的写法
- Go 不允许存在无用的临时变量。*声明未使用, 不需要的变量*
- 大多数Go程序员喜欢搭配使用range和_来写循环程序, 因为索引是隐式的, 不容易换错。
- 使用显式的初始化来说明初始化变量的重要性, 使用隐式的初始化来表名初始化变量不重要
- <u>按照惯例, 包的名字和导入路径的最后一个元素一致</u>

- 没有继承多态的⾯面向对象
- 强⼀致类型
- 天然并发
- interface不不需要显式声明(Duck Typing)
- 没有异常处理理(Error is value)
- 基于⾸首字⺟母的可访问特性
- 不不⽤用的import或者变量量引起编译错误
- 完整⽽而卓越的标准库包
- Go内置runtime（作⽤用是性能监控、垃圾回收等）
- 具有静态编译语言的安全和性能, 又有动态语言开发和维护的高效率, 既有C静态语言程序的运行速度, 又能达到Python动态语言的快速开发。
- 引入了包的概念, 用于组织程序结构, go语言的一个文件u要归属一个包, 二不能单独存在, *一个go文件需要在一个包内,
  声明所属包*
- 不能多行写成一行, 否则会报错
- 定义的`变量`或是`import 包`如果未使用, 编译时将会报错
- 块注释不允许有嵌套, 一般推荐使用行注释来注释方法和语句

一、垃圾回收

1、内存自动回收。

2、只需要创建，不需要释放

二、天然并发：

1、语言层支持并发，对比python，少了GIL锁。

2、goroute，轻量级线程。

3、基于CSP模型实现

三、channel管道

1、管道，类似unix/linux中的pipe

2、多个goroute之间通过channel进行通信

3、支持任何类型



# 编程思想

> [参见](Go最佳实践.md)



# 语言规范(Specification)

> the Go Programming Language Specification, 语言参考, 技术规范, 技术说明
>
> Go编程语言规范
>
> 参考链接:
>
> [the Go Programming Language Specification](https://golang.org/ref/spec)

`''` 单引号表示元字符(asci, rune), `""`双引号表示字符串, `` ` 反引号表示多行字符串

```markdown

与其编程语言一样，Go语言中的大程序都以小的基本组件构建而来：

- 变量存储值;
- 简单表达式通过加和减等操作合并成大的;
- 基本类型通过数组和结构体进行聚合;
- 表达式通过if和for等控制语句来决定执行顺序;
- 语句被组织成函数用于隔离和复用;
- 函数被组织成源文件和包.

--出自《Go程序设计语言》第二章
```

## 注解-Notation

> 语言文法说明
>
> [参考文档](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form)
>
> [Wirth_syntax_notation](https://en.wikipedia.org/wiki/Wirth_syntax_notation)

Go参考文档采用EBNF变体wirth语法注解:

he syntax is specified using a [variant](https://en.wikipedia.org/wiki/Wirth_syntax_notation) of Extended Backus-Naur Form (EBNF):

`""` 词法标识 identify 

`=` 定义 defination

`|` 替代 alternation

`()` 分组 grouping

`[]` 可选 option

`{}` 重复 repetition

## 词法元素-Lexical elements

### 字面量-Literals

> 字面量, 用字面意思表示其值

### 关键字-Keywords

> [defer, recover, panic](https://blog.golang.org/defer-panic-and-recover)

### defer

> A defer statement defers the execution of a function until the surrounding function returns.
>
> The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding
> function returns.

```
A defer statement defers the execution of a function until the surrounding function returns.

The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.
```

defer会在return后执行

```go
defer fmt.Println("1")  // 函数返回后调用
return 0


```

### import

字面量

### 操作符-Operators

## 常量-Constants

```go
const pai = 3.15

```

## 变量-Variables

> 内存中的一块存储空间, 内存地址的索引或别名, 可以通过变量访问变量所存储的变量值, 取到变量实际存储的数据
>
> 每初始化一个变量都会新开辟一块内存空间
>
> 变量可以在声明的时候初始化, 如果变量没有明确地初始化, 它将隐式地初始化为这个类型的空值.
>
> 变量的作用: 变量存储值. variables store values

```go
// 变量声明

// 通用声明形式
var name type = expression

// 将会初始化为所属变量类型的零值
var s string

// 声明变量列表
var i, j, k int  // int, int, int
// 初始化为字面量
var b, f, s = true, 2.3, "four"  // bool, float64, string

// 通过多返回值的函数进行初始化
var f, err = os.Open(name)  // os.Open返回一个文件和一个错误

// 短变量声明
name := expression

// 多变量短声明
i, j := 0, 1

```

零值机制保障所有的变量是良好定义的, Go里面不存在未初始化的变量. 这种机制简化了代码, 并且不需要额外工作就能感知边界条件的行为.
以字符串的零值为例, 输出空字符串, 而不是一些错误和不可预料的行为. Go程序员经常花费精力来使复杂类型的零值有意义,
以便变量一开始就处于一个可用的状态

初始值设定可以说字面量值或任意表达式. 包级别的初始化在main开始之前进行, 局部变量初始化和声明一样在函数执行期间进行.

*经测试, 包级别常量和变量初始化时可以不用考虑声明的位置, 即声明可以放在引用之后*

*短变量声明仅可以用于声明和初始化局部变量(函数中)*

在函数中, 一种称作 **短变量声明** 的可选形式可以用来声明和初始化局部变量.

它使用 `name:=expression`的形式, name的类型由expression. 短变量声明具有短小, 灵活的特定, 在局部变量的声明和初始化中主要使用段声明.
var声明通常是为那些跟初始化表达式类型不一致的局部变量保留的, 或者用于后面才对变量赋值以及变量初始值不重要的情况.

## 类型-Types

### 指针-Pointer Types

A pointer type denotes the set of all pointers to [variables](https://go.dev/ref/spec#Variables) of a given type, called
the *base type* of the pointer. The value of an uninitialized pointer is `nil`.

```go
PointerType = "*" BaseType .
BaseType    = Type .
*Point
*[4]int
```

### 接口-Interface Types

```ebnf
```





## 类型和值的属性

> Properties of type and values



### 底层类型(Underlying Type)

### 类型同一性(Type identity)



## 属性-Properties

> Properties of types and values

## 块-Blocks

## 声明和域-Declarations and scope

### (类型声明)Type Declarations

#### (别名声明)alias declarations

> type alias declarations, 

```go
type interface{} = any
type Shape struct{...}
type 形状 = Shape  // 为Shape设置别名`形状`, 形状恒等于Shape

type 形状 Shape // 这是命名类型(named type) 是不同于类型别名的
```





## 表达式-Expressions

### 类型断言-Type assertions

> 接口x类型断言

```go
x.(T)
```



### 操作符-Operators

### 

## 语句-Statements

```go
// 普通循环
for initialization; condition; post {
    // statements
}

// 传统"while"循环
for condition {
    // ...
}

// 无限循环
for {
    // ...
}

// 迭代循环
for _, arg := range os.Args[1:] {
    
}
```

## 流程控制-Flow Control

> 控制流(control flow)
>
> 另请参考 [](#语句-statements)

### 变量声明

```go
//下面的定义是等价的
s := ""				// 短声明
var s string		// 仅声明
var s = ""			// 声明并初始化
var s string = ""	// 显式的变量类型, 在类型一致的情形下是冗余信息, 不一致情形下是必须的
```

### if

```go

```

### for

```go
// for condition clause
for a<b {
  ...
}
// for clause
for i := 0; i<5; i++ {
  ...
}

// for range
for _, arg := range os.Args[1:] {
  ...
}


```

### select

```go
select {
    case <- ch1:
        // ...
    case <- ch2:
        // ...
    case <- ch3:
        // ...
    default:
        // ...
}
```

### switch语句

### defer语句

## 内置函数-Built-in functions

### make

### new

### panic-抛出

> 应用场景, 处理非预期的错误时, 抛出错误, 相当于一个抛出一个故障, 尤其是无法正常处理的错误.
>
> 类似定义一个错误对象

### recover

> 从go协程的异常控制流中收回控制权, 重新控制

代码片段执行完成, 或函数返回后操作

## 包-Packages

> **关于导包**: 按照约定，包名与导入路径的最后一个元素一致。例如，"math/rand" 包中的源码均以
>
> package rand 语句开始。 初始化和执行 - Program initialization and execution
>
> go程序是由package组成的, 程序从 package main运行起

*包级别语句中只能包含声明类型的语句, 非声明语句不能出现在函数体外*

相当于其他语言中的library和module, 一个包本质上就是一个文件夹

```text
Every Go program is made up of packages.

Programs start running in package main.

By convention, the package name is the same as the last element of the import path. 
```

Go代码是使用**包**(package)来组织的, 包类似于其他语言中的库和模块. 一个包由一个多个`.go`源文件组成, 放在一个文件夹中,
该文件夹的名字描述了包的作用. 每一个源文件的开始都用package声明,package main 指明了这个文件属于哪个包. 后面跟着导入其他包的列表,
然后是存储在文件中的程序声明.

声明给一个程序实体命名，并且设定其部分或全部属性。有4个主要的声明:（var）、常量（
const）类型（type）和函数（fun）。本章讨论变量和类型，常量放在第3章讨论，函数放在第5章讨论。
Go程序存储在一个或多个以·go为后缀的文件里。每一个文件以 package声明开头，表明文件属于哪个包。
package声明后面是import声明，然后是包级别的类型、变量、常量、函数的声明，不区分顺序。

名为 `main` 的包比较特殊, 它用来定义一个独立的可执行程序, 而不是库.

*注意可执行程序和库的区别, 可执行程序一定有main包, 库一般不需要main包, 工程项目文件中不一定有main包,
因为不一定需要时一个可执行程序文件*

在 `main` 包中, main函数也是特殊的, 不管在什么程序中, main做什么事情, 它总是程序开始执行的地方.

<u>main函数不能有返回值</u>

当然, main通常调用其他包中的函数来做更所的事情.

导包时必须是精确的, 不能缺失, 也不可以存在不需要的包, 这样都会造成编译失败

`import` 声明必须跟在 `package` 声明之后,

然后是 : `function` 或 `variable` 或 `instant` 或 `type` 声明:(fun, var, inst, type)声明

*包的形式通常是指一个文件夹, 最顶层的文件夹, 这和Python的叫法类似* 每一个源文件的开始都用**package**声明, 指明这个源文件属于哪个包。

## 函数-Functions

> 函数执行完成后, 程序控制和返回值都返回给调用者.

函数声明

一个函数的声明由func关键字, 函数名, 参数列表(main函数为空), 返回值列表(可以为空), 放在大括号内的函数体组成.

```go
func name(para1,para2){
    statements
    return
}

func 函数名(参数1,参数2){
    函数体
    return
}

```

## 切片-Slice

```go 
os.Args[0:len(os.Args)]
```

## 错误-errors

## 运算符-Operators

> [官网链接](https://golang.org/ref/spec#Operators)

> 更多参考[语言规范](https://golang.org/ref/spec)

### `_`-下划线: 空标识符

空标识符可以用在任何语法需要变量名但是程序逻辑不需要的地方, 例如丢弃每次迭代产生的无用索引。

### `==` 比较

对于引用类型, 例如指针和通道, 操作符`==`检查的是引用相等性, 即他们是否指向相同的元素

### `[]` 切片

### `...`可变长度标识

### `<-`通信操作符

### `#` 输出

### `*`取值 

dereference opeartion

`*p`作为操作数时, 意味着取得指针对象p所指向的值

### `&`取址



# 标准库参考

> 源码足够详细, 直接看源码, [翻译请点击](Go标准库.md)

# Effective Go

> 高效使用Go
>
> [Effective Go](https://go.dev/doc/effective_go)

## 简介·Introduction

[Introduction](https://go.dev/doc/effective_go#introduction)

Go是一门新的语言. 尽管它从其他已有语言中获得灵感, 它也有不寻常的特性, 这让高效Go程序从编写及其相关特征上有许多不同. 简单地将C++或Java翻译成Go并不能产生令人满意的结果,Java程序是Java编写的,不是Go程序. 换句话说, 从Go的视角来考虑这个问题会产生成功且完全不同的程序. 换句话说, 想要编写好的Go程序, 理解它的 **特性·properties** 和 **习语·idioms** 很重要. 知道编写Go程序的既有 **惯例·conventions** 也相当重要, 比如,命名, 格式化, 程序结构(construction)等等.  只有这样, 其他Go程序员才更容易理解你编写的程序.

这篇文档给出一些提示, 方便你写出·**清晰的**·*clear*, **地道的**·*idiomatic* Go代码. 它是对 the [language specification](https://go.dev/ref/spec), the [Tour of Go](https://go.dev/tour/),  [How to Write Go Code](https://go.dev/doc/code.html)等你应该首先阅读的内容的补充. 

>  <u>原文中有一些补充描述, 大致意思是这篇指南写于2009年, 至今少有改动, 同时随着生态的丰富, 网上有很多关于Go用法的指南,本文将不做更新. 本文依然很实用, 但是并不是完全指南.</u>

### 示例·Examples

Go包[源代码](https://go.dev/doc/effective_go)不仅仅致力于服务于核心库也是关于如何使用Go语言的示例. 此外, [go.dev](https://go.dev/) 网站中的许多包(packages)包含了运行方式, 独立可执行的例子, 例如 [这个](https://go.dev/pkg/strings/#example-Map), (如果有必要, 点击"Example"单词展开它).如果你问题关于如何深入一个问题或某种机制如何实现, 库中的文档,代码和示例可能提供答案, 想法和背景. 

## 格式化·Formatting

gofmt工具格式化



## 注释·Commentary

Go提供了C风格`/* */`的块注释和C++风格`//`的行注释. 行注释更为常见, 块注释更多出现在package注释中, 块注释在表达式中或禁用大片代码时也很有作用. 

出现在顶层声明之前, 没有新行作为间隔的注释被考虑成声明本身的文档. 这些 "文档注释(doc comments)"是Go包或命令的主要文档. 关于doc comments的更多说明, 参考 “[Go Doc Comments](https://go.dev/doc/comment)”.



## 名称·Names

和其他语言一样, Go中 **名称·names** 非常重要. 他们甚至具有语义效果: 名称的包外可见性(可导出性)由名称的首字母大小写决定(大写表示包外可见,小写表示包外不可见). 因此值得花费少量时间了解一下Go程序的 **命名约定·naming conventions**.



### 包名·(Package names)

当包被导入时, **包名**·(*package name*) 成了这些内容的 **访问器**·*accessor* . 当`import "bytes"`导入bytes包之后, 导包对象(导入该包的包)就可以访问`bytes.Buffer`. 当有人要使用包时, 用包名来 **引用**(refer,提及) 它的内容是非常有用的, 这意味着应该给包取一个 **简短**·short, **简洁**·concise, **好记**·evocative的名称. 依照惯例, 包名是用小写字母表示的单个单词, 包名不应该出现下划线`_`或大写字母<u>(编者提示: 计算机科学中通常用复数命名法(strings as string))</u>. 尽量简洁, 因为每个使用你包的人都要输入这个名称. 不要担心与其他包名发生碰撞. 包名仅仅是用于导入时的默认名. 贯穿整个源代码, 它不需要是唯一的, 在少量发生导包碰撞的场景中我们可以选择一个不同的名称来本地化使用. 无论如何, 冲突是少见的, 因为决定导入的文件名仅仅在包被使用的时候才会用到.

> Another convention is that the package name is the base name of its source directory; the package in `src/encoding/base64` is imported as `"encoding/base64"` but has name `base64`, not `encoding_base64` and not `encodingBase64`.
>
> The importer of a package will use the name to refer to its contents, so exported names in the package can use that fact to avoid repetition. (Don't use the `import .` notation, which can simplify tests that must run outside the package they are testing, but should otherwise be avoided.) For instance, the buffered reader type in the `bufio` package is called `Reader`, not `BufReader`, because users see it as `bufio.Reader`, which is a clear, concise name. Moreover, because imported entities are always addressed with their package name, `bufio.Reader` does not conflict with `io.Reader`. Similarly, the function to make new instances of `ring.Ring`—which is the definition of a *constructor* in Go—would normally be called `NewRing`, but since `Ring` is the only type exported by the package, and since the package is called `ring`, it's called just `New`, which clients of the package see as `ring.New`. Use the package structure to help you choose good names.
> 
> Another short example is `once.Do`; `once.Do(setup)` reads well and would not be improved by writing `once.DoOrWaitUntilDone(setup)`. Long names don't automatically make things more readable. A helpful doc comment can often be more valuable than an extra long name.

另一个惯例是, 当包名包含路径时, 使用包的源路径的基名(base name)作为包名; 包 `src/encoding/base64` 被导入为 `"encoding/base64"`,  但是其在当前包的名称是`base64`, 不是 `encoding_base64` 也不是 `encodingBase64`.

包导者使用包名引用包中的内容, 因此可以使用包的可导出名称去事实上避免重复. (不要使用`import.`注解, 必须在包外进行测试时这种方法可能是简单的, 除非必要否则避免这样做) 例如, buffered reader类型在bufio包中叫作Reader, 不是bufReader, 因为用户将其视作`bufio.reader`, 非常清晰简洁. 此外, 因为被导入实体总是用包名来标记其地址, `bufio.Reader`与`io.Reader`并不冲突.Similarly, the function to make new instances of `ring.Ring`—which is the definition of a *constructor* in Go—would normally be called `NewRing`, but since `Ring` is the only type exported by the package, and since the package is called `ring`, it's called just `New`, which clients of the package see as `ring.New`. 使用包结构帮助你选择好的名字.

另一个短小示例是`once.Do`; once.Do(setup)容易阅读, 写成`once.DoOrWaitUntilDone(setup)`没有得到改善, 这并不易读. 长的名称不会让事情变得可读.为其编写文档注释通常是更有价值的做法.

### Getters

> Go doesn't provide automatic support for getters and setters. There's nothing wrong with providing getters and setters yourself, and it's often appropriate to do so, but it's neither idiomatic nor necessary to put `Get` into the getter's name. If you have a field called `owner` (lower case, unexported), the getter method should be called `Owner` (upper case, exported), not `GetOwner`. The use of upper-case names for export provides the hook to discriminate the field from the method. A setter function, if needed, will likely be called `SetOwner`. Both names read well in practice:
>
> ```
> owner := obj.Owner()
> if owner != user {
>     obj.SetOwner(user)
> }
> ```



### 接口名·Interface names

> By convention, one-method interfaces are named by the method name plus an -er suffix or similar modification to construct an agent noun: `Reader`,`Writer`, `Formatter`, `CloseNotifier` etc.
>
> There are a number of such names and it's productive to honor them and the function names they capture. `Read`, `Write`, `Close`, `Flush`, `String` and so on have canonical signatures and meanings. To avoid confusion, don't give your method one of those names unless it has the same signature and meaning. Conversely, if your type implements a method with the same meaning as a method on a well-known type, give it the same name and signature; call your string-converter method `String` not `ToString`

依照惯例, 单方法接口名称使用方法名+`-er`后缀或类似后缀来构造一个代理名称: `Reader`,`Writer`, `Formatter`, `CloseNotifier` 等等.

有很多这样的名称去...TODO

### MixedCaps

Finally, the convention in Go is to use `MixedCaps` or `mixedCaps` rather than underscores to write multiword names.

最后, Go中约定使用 `MixedCaps` 或 `mixedCaps` 而不是下划线`_`来写多词名称/



## 分号·Semicolons

略

## 控制结构·Control-structures

略

### if

### 重声明和重赋值

### For

### Switch

### Type switch

## 函数·Functions

### 多返回值:Multiple-return-values

### 命名结果参数·Named result parameters

### Defer





## 数据·Data

### `new`分配:Allocation with `new`

> Go has two allocation primitives, the built-in functions `new` and `make`. They do different things and apply to different types, which can be confusing, but the rules are simple. Let's talk about `new` first. It's a built-in function that allocates memory, but unlike its namesakes in some other languages it does not *initialize* the memory, it only *zeros* it. That is, `new(T)` allocates zeroed storage for a new item of type `T` and returns its address, a value of type `*T`. In Go terminology, it returns a pointer to a newly allocated zero value of type `T`.
>
> Since the memory returned by `new` is zeroed, it's helpful to arrange when designing your data structures that the zero value of each type can be used without further initialization. This means a user of the data structure can create one with `new` and get right to work. For example, the documentation for `bytes.Buffer` states that "the zero value for `Buffer` is an empty buffer ready to use." Similarly, `sync.Mutex` does not have an explicit constructor or `Init` method. Instead, the zero value for a `sync.Mutex` is defined to be an unlocked mutex.
>
> The zero-value-is-useful property works transitively. Consider this type declaration.
>
> ```
> type SyncedBuffer struct {
>     lock    sync.Mutex
>     buffer  bytes.Buffer
> }
> ```
>
> Values of type `SyncedBuffer` are also ready to use immediately upon allocation or just declaration. In the next snippet, both `p` and `v` will work correctly without further arrangement.
>
> ```
> p := new(SyncedBuffer)  // type *SyncedBuffer
> var v SyncedBuffer      // type  SyncedBuffer
> ```

Go有两个分配基元, 内置函数`new`和`make`. 它们有不同的用处和作用于不同的类型, 你也许会困惑, 但是规则很简单. 首先谈谈new函数, 它是用于分配内存的内置函数, 但是不像它在其他语言上字面意思, 它并不初始化内存, 仅仅将其置零(设为零值). 也就是说, `item := new(T)`为新的条目(T类型)分配零存储并返回它的地址, item的值是类型为`*T`. 在Go术语中, 它返回了一个指针, 该指针指向一个新分配的T类型的零值.

既然通过new函数返回内存是置零的, 这在设计数据结构时很有用, 每种类型的零值无需进一步初始化就可以使用. 意思是可以用new新建数据结构零值来让程序正确工作. 例如, `bytes.Buffer`的文档中声明"Buffer的零值是一个准备使用的空buffer". 类似地, `symc.Mutex`没有一个显式的构造器(constructor)或者初始化方法. `sync.Mutex`的零值被定义为一个`unlocked mutex`.

零值有用属性具有传递性, 考虑下面这个类型声明:

```go
type SyncedBuffer struct {
 lock    sync.Mutex
 buffer  bytes.Buffer
}
```

通过分配或声明让SyncedBuffer准备好随时可用. 下面片段中的两种方式都能正确工作, 无需更近一步安排

```go
p := new(SyncedBuffer)  // type *SyncedBuffer
var v SyncedBuffer      // type  SyncedBuffer
```



### 构造器和复杂字面量·Constructors-and-composite-literals

> Sometimes the zero value isn't good enough and an initializing constructor is necessary, as in this example derived from package `os`.
>
> ```
> func NewFile(fd int, name string) *File {
>     if fd < 0 {
>         return nil
>     }
>     f := new(File)
>     f.fd = fd
>     f.name = name
>     f.dirinfo = nil
>     f.nepipe = 0
>     return f
> }
> ```
>
> There's a lot of boilerplate in there. We can simplify it using a *composite literal*, which is an expression that creates a new instance each time it is evaluated.
>
> ```
> func NewFile(fd int, name string) *File {
>     if fd < 0 {
>         return nil
>     }
>     f := File{fd, name, nil, 0}
>     return &f
>    }
>    ```
>    
> Note that, unlike in C, it's perfectly OK to return the address of a local variable; the storage associated with the variable survives after the function returns. In fact, taking the address of a composite literal allocates a fresh instance each time it is evaluated, so we can combine these last two lines.
>
> ```
>  return &File{fd, name, nil, 0}
>    ```
>    
>    The fields of a composite literal are laid out in order and must all be present. However, by labeling the elements explicitly as *field*`:`*value* pairs, the initializers can appear in any order, with the missing ones left as their respective zero values. Thus we could say
>    
>    ```
>     return &File{fd: fd, name: name}
>    ```
>    
>    As a limiting case, if a composite literal contains no fields at all, it creates a zero value for the type. The expressions `new(File)` and `&File{}` are equivalent.
> 
> Composite literals can also be created for arrays, slices, and maps, with the field labels being indices or map keys as appropriate. In these examples, the initializations work regardless of the values of `Enone`, `Eio`, and `Einval`, as long as they are distinct.
>
> ```
>a := [...]string   {Enone: "no error", Eio: "Eio", Einval: "invalid argument"}
> s := []string      {Enone: "no error", Eio: "Eio", Einval: "invalid argument"}
> m := map[int]string{Enone: "no error", Eio: "Eio", Einval: "invalid argument"}
>    ```

有时候零值不是足够好的方案, 使用初始化构造器是很有必要的, 就像下面这个取自os包的例子一样

```
func NewFile(fd int, name string) *File {
 if fd < 0 {
     return nil
 }
 f := new(File)
 f.fd = fd
 f.name = name
 f.dirinfo = nil
 f.nepipe = 0
 return f
}
```

上述例子有大量的属性引用. 我们可以用**复杂字面量**简化它, 复杂字面量是一个创建实例的表达式, 表达式每次都是计算完成的.

```go
func NewFile(fd int, name string) *File {
 if fd < 0 {
     return nil
 }
 f := File{fd, name, nil, 0}
 return &f
}
```

请注意, 不像C语言, 返回本地变量的地址是非常OK的做法;函数返回后使用生存变量(variable survives)分配存储空间. 实际上,分配一个新的复杂字面量实体的地址, 我们可以将后面两行组合在一起:

```go
    return &File{fd, name, nil, 0}
```

上述方式复杂字面量的字段全部被按顺序表示.我们可以通过 `field:value`对 显式地标记字段名字, 初始化可以是任何顺序, 未初始化的字段则继续为零值. 因此我们可以这样写:

```go
    return &File{fd: fd, name: name}¸
```

一个特殊场景, 如果复杂字面量不包含任何字段, 它创建了这个类型的零值. 表达式 `new(File)`和`&File{}`是等价的

复杂字面量也可以用于创建数组, 切片和映射, 使用字段标签作为索引, 映射键也是可以的. In these examples, the initializations work regardless of the values of `Enone`, `Eio`, and `Einval`, as long as they are distinct.

```go
a := [...]string   {Enone: "no error", Eio: "Eio", Einval: "invalid argument"}
s := []string      {Enone: "no error", Eio: "Eio", Einval: "invalid argument"}
m := map[int]string{Enone: "no error", Eio: "Eio", Einval: "invalid argument"}
```



### `make`分配·Allocation with `make`

> Back to allocation. The built-in function `make(T, `*args*`)` serves a purpose different from `new(T)`. It creates slices, maps, and channels only, and it returns an *initialized* (not *zeroed*) value of type `T` (not `*T`). The reason for the distinction is that these three types represent, under the covers, references to data structures that must be initialized before use. A slice, for example, is a three-item descriptor containing a pointer to the data (inside an array), the length, and the capacity, and until those items are initialized, the slice is `nil`. For slices, maps, and channels, `make` initializes the internal data structure and prepares the value for use. For instance,
>
> ```
> make([]int, 10, 100)
> ```
>
> allocates an array of 100 ints and then creates a slice structure with length 10 and a capacity of 100 pointing at the first 10 elements of the array. (When making a slice, the capacity can be omitted; see the section on slices for more information.) In contrast, `new([]int)` returns a pointer to a newly allocated, zeroed slice structure, that is, a pointer to a `nil` slice value.
>
> These examples illustrate the difference between `new` and `make`.
>
> ```
> var p *[]int = new([]int)       // allocates slice structure; *p == nil; rarely useful
> var v  []int = make([]int, 100) // the slice v now refers to a new array of 100 ints
> 
> // Unnecessarily complex:
> var p *[]int = new([]int)
> *p = make([]int, 100, 100)
> 
> // Idiomatic:
> v := make([]int, 100)
> ```
>
> Remember that `make` applies only to maps, slices and channels and does not return a pointer. To obtain an explicit pointer allocate with `new` or take the address of a variable explicitly.

回到分配. 内置函数 make(T, args)不同于new(T), 它有不同用途. make仅仅用于创建slices, maps和channels, 并且返回一个T类型的初始化的值(非零值). 区别它们的原因是: 这个三种类型的表示是对数据结构的引用(引用类型), 在使用前必须初始化. (机器翻译结果:区别的原因是，这三种类型在背后表示对数据结构的引用，这些数据结构在使用前必须初始化。)比如, 一个Slice有三项描述符, 分别是执行数据的指针(数据用数组存储), 长度和容量, 直到他们被初始化之前, slice的值都是nil. 对slices,maps, channels而言, make初始化内部数据结构并准备要使用的值. 例如,

```go
make([]int, 10, 100)
```

分配一个100个整数的数组, 然后创建一个长度为10容量为100的slice指向数组的前10个元素.(创建切片时, 容量可以省略;官方文档有对slices更详细的解释)相比之下, new([]int)返回一个指向新分配的零值slice结构的指针, 也就是说 一个指向nil slice值的指针.

这些例子描绘了new和make的不同

```go
var p *[]int = new([]int)       // 分配一个slice结构; *p == nil; 很少使用
var v  []int = make([]int, 100) // slice v表示一个长度100个整数的数组

// 完全没必要复杂化成这样:
var p *[]int = new([]int)
*p = make([]int, 100, 100)

// 更地道的写法:
v := make([]int, 100)
```

请记住, make仅仅适用于maps, slices和channels并且不返回指针. 想要获得指针, 通过new分配一显式的指针或者显式地获取变量的地址. 

### Arrays

数组在规划内存布局细节时非常有用, 某些时候可以避免内存分配, 更常用的是他们构建用于slices的块.数组是是slice的一个主题.

为给slice奠定基础, 这里有一些关于数组的词汇.

下面是Go与C的工作方式的主要不同之处. 在Go中:

- 数组是值.将数组赋值给另一个对象将会复制数组的所有元素
- 特别地, 如果你传入一个数组到函数中, 函数将会接收一个数组的复制而不是指向该数组的指针
- 数组的大小是数组类型的一部分. `10[int]`和`[20]int`是不同的类型.

这种值的属性很有用但是也有较大开销, 如果你想使用C风格的行为和效率, 你可以传入一个指向该数组的指针.

```go
func Sum(a *[3]float64) (sum float64) {
    for _, v := range *a {
        sum += v
    }
    return
}

array := [...]float64{7.0, 8.5, 9.1}
x := Sum(&array)  // Note the explicit address-of operator
```

但是这种风格甚至不是地道的Go, 作为替代, Go使用slices.

### Slices

Slices包裹arrays来给出一个更为 **常用**(general),强大(powerful)和方便(convenient)的序列数据接口. 除去一些显式维度的类型比如 变换矩阵(transformation matrices), Go编程中大多数时候数组采用slices实现而不是简单的数组.

Slice是对底层数组的引用, 如果赋值slice给其他对象, 二者指向同一个数组. 如果函数传入一个slice参数, 更改slice元素对将所有调用者可见, 类似传入一个指向底层数组的指针. 一个读函数因此可以接受一个slice参数而不是一个指针和计数;slice的长度限制了数据读的上限. 下面是os包中File类型的Read方法的签名:

```go
func (f *File) Read(buf []byte) (n int, err error)
```

方法返回读取的直接输和错误值. 读取一个更大buffer bug的前32个字节, slice(动词,切片)这个buffer. 

```go
    n, err := f.Read(buf[0:32])
```

这样的切片是普遍和高效的. 实际上, 撇开效率不谈, 下面的片段也可以读取buffer的前32个字节.

```go
var n int
    var err error
    for i := 0; i < 32; i++ {
        nbytes, e := f.Read(buf[i:i+1])  // Read one byte.
        n += nbytes
        if nbytes == 0 || e != nil {
            err = e
            break
        }
    }
```

slice长度可能被改变, 只要它实际符合底层数组的长度限制; 仅仅赋值slice本身.slice容量通过内置函数cap访问, 返回slice可以指定的最大长度. 这儿有一个函数append用于追加数据到slice中, 如果数据超出容量限制, slice将会进行重新分配. 然后返回slice的结构. 这个函数使用了"在nils lice上len和cap是合法的,并且返回0"这一事实

```go
func Append(slice, data []byte) []byte {
    l := len(slice)
    if l + len(data) > cap(slice) {  // reallocate
        // Allocate double what's needed, for future growth.
        newSlice := make([]byte, (l+len(data))*2)
        // The copy function is predeclared and works for any slice type.
        copy(newSlice, slice)
        slice = newSlice
    }
    slice = slice[0:l+len(data)]
    copy(slice[l:], data)
    return slice
}
```

之后我们必须返回slice. 因为尽管Append可以修改slice的元素, slice本身(运行时数据结构处理指针, 长度和容量)被传入了值

向slice追加元素的主意非常有用的, 通过内置函数append来完成. 然后要理解这个函数的设计, 我们需要更多信息, 之后我们将会再提到它. 

### 二维切片-Two-dimensional slices

略

### 映射·Maps

Maps是一个方便切强大的内置数据结构, Maps关联一种类型的值(key)和另一种类型的值(value). key可以是任何可以执行=操作符(equality operator)的类型, 比如integers, floating point和complex numbers, strings, pointers, interfaces(只要动态类型支持等操作), structs和arrays. Slices不可以用在map的key上, 因为slice并没有定义equality操作. 像slices一样, maps是对到底层数据结构的引用. 如果你传入一个map到函数并修改map的内容, 这个修改效果将会对所有调用者可见.

Maps可以通过复杂字面量语法构造, 元素之间使用冒号(:)分割键值对(key-value pairs), 因此初始化他是很容易的

```go
var timeZone = map[string]int{
    "UTC":  0*60*60,
    "EST": -5*60*60,
    "CST": -6*60*60,
    "MST": -7*60*60,
    "PST": -8*60*60,
}
```

赋值和获取map的value语法上看起来与array和slice上的操作相同, 除此之外, map的索引不必是一个整数.

```go
offset := timeZone["EST"]
```

尝试获取一个key不在map中的map value时将会返回在map中条目的类型的零值. 例如, 如果map包含整数, 查找一个不存在的key将会返回0. 集合(set) 可以通过value类型为bool的map实现. 设置map条目设置为true以将值放入集合, 然后通过简单的索引进行测试

```go
attended := map[string]bool{
    "Ann": true,
    "Joe": true,
    ...
}

if attended[person] { // will be false if person is not in the map
    fmt.Println(person, "was at the meeting")
}
```

有时你需要从零值中区分该条目是否存在. "UTC"不存在还是"UTC"=0? 你可以使用多重赋值的方式加以区分.

```go
var seconds int
var ok bool
seconds, ok = timeZone[tz]
```

因为显而易见的原因这被叫作"comma ok"习语. 下面的例子, 如果 tz存在, seconds将会正确的设置并且ok的值将会是true; 如果不存在, seconds将会设置为0并且ok的值将会是false. 下面这个函数中, 附加上了漂亮的错误报告:

```go
func offset(tz string) int {
    if seconds, ok := timeZone[tz]; ok {
        return seconds
    }
    log.Println("unknown time zone:", tz)
    return 0
}
```

测试值是否存在而不用关心实际值, 可以使用 空白标识符(blank identifier)(_)代替变量值的位置.

```go
_, present := timeZone[tz]
```

删除一个map条目(map entry), 使用内置函数delete, delete需要的参数是map对象和要被删除的key. 这样做是安全的, 甚至当key值缺乏的时候

```go
delete(timeZone, "PDT")  // Now on Standard Time
```



### 打印·Printing

在Go中格式化打印使用与C的printf族类似的风格, 但更丰富更通用. 这些函数位于fmt包中

### Append

略

## 初始化·Initialization

尽管看起和C或C++没有太大的不同, Go的初始化更加强大. 复杂结构可以在初始化期间被构建, 并且包括初始对象之间的顺序问题甚至不同的包之间都可以正确处理.

### 常量·Constants

在Go中常量就是它字面上的意思(常量就是常量). 它们在编译时创建, 甚至包括定义在函数中的常量, 常量的类型只能是数值(numbers), 字符(runes), 字符串(strings)和布尔值(booleans). 

 

Because of the compile-time restriction, the expressions that define them must be constant expressions, evaluatable by the compiler. For instance, `1<<3` is a constant expression, while `math.Sin(math.Pi/4)` is not because the function call to `math.Sin` needs to happen at run time.

In Go, enumerated constants are created using the `iota` enumerator. Since `iota` can be part of an expression and expressions can be implicitly repeated, it is easy to build intricate sets of values.

```
type ByteSize float64

const (
    _           = iota // ignore first value by assigning to blank identifier
    KB ByteSize = 1 << (10 * iota)
    MB
    GB
    TB
    PB
    EB
    ZB
    YB
)
```

The ability to attach a method such as `String` to any user-defined type makes it possible for arbitrary values to format themselves automatically for printing. Although you'll see it most often applied to structs, this technique is also useful for scalar types such as floating-point types like `ByteSize`.

```
func (b ByteSize) String() string {
    switch {
    case b >= YB:
        return fmt.Sprintf("%.2fYB", b/YB)
    case b >= ZB:
        return fmt.Sprintf("%.2fZB", b/ZB)
    case b >= EB:
        return fmt.Sprintf("%.2fEB", b/EB)
    case b >= PB:
        return fmt.Sprintf("%.2fPB", b/PB)
    case b >= TB:
        return fmt.Sprintf("%.2fTB", b/TB)
    case b >= GB:
        return fmt.Sprintf("%.2fGB", b/GB)
    case b >= MB:
        return fmt.Sprintf("%.2fMB", b/MB)
    case b >= KB:
        return fmt.Sprintf("%.2fKB", b/KB)
    }
    return fmt.Sprintf("%.2fB", b)
}
```

The expression `YB` prints as `1.00YB`, while `ByteSize(1e13)` prints as `9.09TB`.

The use here of `Sprintf` to implement `ByteSize`'s `String` method is safe (avoids recurring indefinitely) not because of a conversion but because it calls `Sprintf` with `%f`, which is not a string format: `Sprintf` will only call the `String` method when it wants a string, and `%f` wants a floating-point value.

### 变量·Variables

变量可以像常量一样被初始化,但是初始化可以是一个生成式表达式, 表示在运行时才会计算(延迟计算) 

```
var (
    home   = os.Getenv("HOME")
    user   = os.Getenv("USER")
    gopath = os.Getenv("GOPATH")
)
```

### 初始化函数·The init function

最后, 每个源文件可以定义一个自己的无参init函数去设置它任何需要的状态. (实际上每个文件可以有多个init函数.) 最后的意思是最后: init在所有的包中的变量声明并初始化后调用, 这些计算完成的变量在所有的包导入完成之后完成初始化.

<mark>同一个包中, 永远是先导入包的先初始化,之后再初始化变量, 再执行初始化函数</mark>



此外, 初始化不能被表达为声明, init函数的一种常见的用法是在真正执行开始前验证或修复程序状态的正确性

```go
func init() {
    if user == "" {
        log.Fatal("$USER not set")
    }
    if home == "" {
        home = "/home/" + user
    }
    if gopath == "" {
        gopath = home + "/go"
    }
    // gopath may be overridden by --gopath flag on command line.
    flag.StringVar(&gopath, "gopath", gopath, "override default GOPATH")
}
```



## 方法·Methods

### 指针和值

## 接口和其他类型·Interfaces-and-Other-Types

### 接口·Interfaces

### 转换·Conversions

### 接口转换和类型断言·Interface conversions and type assertions

### Generality

### 接口和方法

## 空白标识符·Blank-Identifier

## 嵌套·Embedding

## 并发·concurrency

### 通过通信共享

### Goroutines

### Channels

### Channels of channels

## 错误·Errors

运行时库通常必须返回一排错误提示给调用者. 如同早前提到的一样, Go的多值返回让错误返回变得简单, 返回值中额外返回一个错误描述即可. 使用这种特性提供详细错误是一种很好的风格. 如我们将看到的, `os.OPen`不仅在发生错误时返回了一个空指针, 它也返回了一个描述所发生的错误值.

依照惯例, errors的类型是error, 一个简单的内置接口

```
type error interface {
    Error() string
}
```

writer库通过掩盖的丰富模型免费实现了这个接口, 这让不见看到错误而且提供上下文成为了可能. 如上面提到的, 在`*os.File`返回值的旁边, `os.Open`也返回了错误值.如果文件成功打开, 错误值为nil, 当发生错误时, error值为`os.PathError`

```
// PathError records an error and the operation and
// file path that caused it.
type PathError struct {
    Op string    // "open", "unlink", etc.
    Path string  // The associated file.
    Err error    // Returned by the system call.
}

func (e *PathError) Error() string {
    return e.Op + " " + e.Path + ": " + e.Err.Error()
}
```

`PathError`的 `Error` 生成了一个像这样的字符串:

```
open /etc/passwx: no such file or directory
```

这样的错误非常有用(包含了导致错误的文件名, 操作名称和操作系统触发的错误), 甚至也打印了导致错误的调用.这比" no such file or directory"提供了更多的信息.

如果可行的话, 错误字符串应该标识他们的错误来源, 例如哪包个发生了错误就应该包括该包中操作的前缀名称. 例如: 包image中, 表示由于未知的格式导

关心错误详情的调用者可以使用这个类型切换或类型断言去查询指定的错误和更详细的内容. 对于`PathErrors`来讲, 它们应该包括检查内部`err`字段用于恢复这个错误.

```
for try := 0; try < 2; try++ {
    file, err = os.Create(filename)
    if err == nil {
        return
    }
    if e, ok := err.(*os.PathError); ok && e.Err == syscall.ENOSPC {
        deleteTempFiles()  // Recover some space.
        continue
    }
    return
}
```

The second `if` statement here is another [type assertion](https://go.dev/doc/effective_go#interface_conversions). 

第二条if语句是另外一种类型断言. 成功, ok值为true,意思是错误类型为 `*os.PathError`, 接下来是`e`, 我们可以检查它的更多错误相关的信息.

### 宕机·Panic

向调用者报告错误的通常做法是返回一个error作为额外的返回值. 权威的Read方法是一个典型的例子; 它返回一个字节计数和一个错误. 但是当错误无法恢复时怎么办? 有时程序无法继续执行.

为了这个目的, 内置函数panic非常有效, panic创建一个运行时错误并停止程序. panic函数需要一个任意类型的参数(通常是一个字符串)并在程序宕机时打印. 这种方式表明某种事情不可能发生, 例如退出一个·**无限循环**(infinite loop).

```go
// A toy implementation of cube root using Newton's method.
func CubeRoot(x float64) float64 {
    z := x/3   // Arbitrary initial value
    for i := 0; i < 1e6; i++ {
        prevz := z
        z -= (z*z*z-x) / (3*z*z)
        if veryClose(z, prevz) {
            return z
        }
    }
    // A million iterations has not converged; something is wrong.
    panic(fmt.Sprintf("CubeRoot(%g) did not converge", x))
}
```

这仅仅是一个例子,但是真实的库函数应该避免panic. 如果问题可以被遮掩或跳过, 让程序继续运行通常是更好的选择而不是退出整个程序. 一个可能的例子是初始化期间: 如果库真的无法设置成功, 这应该是触发宕机的理由, 因此抛出错误:

```go
var user = os.Getenv("USER")

func init() {
    if user == "" {
        panic("no value for $USER")
    }
}
```



### 恢复·Recover

当panic被调用时, 包括隐式的运行时错误(索引超出slice的限制或者错误的类型断言), 当前函数立即停止执行并开始展开(unwinding)goroutine的栈, 通过这种方式运行任何延迟函数.当goroutine栈解开到栈顶时, 程序停止运行.不过, 可以通过内置函数recover再次控制goroutine并重新开始正常的执行.

调用recover将停止展开和返回panic传入的参数.  因为展开时唯一运行的代码在延迟函数内, recover函数仅可以用于defer函数中. 

恢复应用其实是关闭服务中的失败goroutine, 并不会终止其他执行中的goroutine.

```go
func server(workChan <-chan *Work) {
    for work := range workChan {
        go safelyDo(work)
    }
}

func safelyDo(work *Work) {
    defer func() {
        if err := recover(); err != nil {
            log.Println("work failed:", err)
        }
    }()
    do(work)
}
```

这个例子中, 如果do(work)发生宕机, 错误结果将会被记录到日志, 协程将会干净地退出而不会影响其他执行. 延迟闭包不需要做别的任何事情, 只需要调用recover函数处理这种情形. 

因为recover除了直接被延迟函数调用外总是返回nil值, 延迟代码可以自动调用库运行时(panic和recover)时不会有任何错误. 有一个例子, 延迟函数安全执行中可能在调用recover之前调用日志器函数, 日志器代码可能因为宕机状态而无法有效执行.

使用了我们的恢复模式, do函数(包括其中任何执行)可以干净地从任何调用了panic函数的糟糕情形退出. 我们可以用这个主意去简化复杂软件中的错误处理. 让我们看看一个有创意的版本,`regexp`包通过抛出本地错误类型报告一些解析错误. 这是`Error`的定义, 一个`error`方法和`Compile`函数.

```go
// Error is the type of a parse error; it satisfies the error interface.
type Error string
func (e Error) Error() string {
    return string(e)
}

// error is a method of *Regexp that reports parsing errors by
// panicking with an Error.
func (regexp *Regexp) error(err string) {
    panic(Error(err))
}

// Compile returns a parsed representation of the regular expression.
func Compile(str string) (regexp *Regexp, err error) {
    regexp = new(Regexp)
    // doParse will panic if there is a parse error.
    defer func() {
        if e := recover(); e != nil {
            regexp = nil    // Clear return value.
            err = e.(Error) // Will re-panic if not a parse error.
        }
    }()
    return regexp.doParse(str), nil
}
```

如果doParse触发宕机, 恢复代码将会返回nil值——延迟函数可以修改命名的返回值(err). 延迟函数然后将会检查panic, 将其错误赋值到err, "通过断言解析到的错误"有自己的错误类型. 如果不解析错误(err=e.Error), 类型断言将会失效, 导致运行时错误发生, 实质上的继续展开栈将会抛出错误而终止掉程序. 检查错误意味着如果无法预期的事情发生声(例如索引超出限制)将会导致代码失效, 尽管我们使用了panic和recover机制去解析了错误. 

使用了错误处理后, error方法可以很容易报告解析到的错误而不用担心栈手动展开(导致最终没有成功恢复而终止程序)

```go
if pos == 0 {
    re.error("'*' illegal at start of expression")
}
```

Useful though this pattern is, it should be used only within a package. `Parse` turns its internal `panic` calls into `error` values; it does not expose `panics`to its client. That is a good rule to follow.

尽管这种模式很有用，但它应该只在包中使用。Parse将其内部的``panic`调用转换为 `error`值;它不会将`panic`暴露给客户。这是一条值得遵循的好规则。

顺便一提, 如果错误发生了re-panic习语(err=e.(Error))改变了panic的错误值. 尽管如此, 原先的和新的失败将会表示到崩溃报告中, 导致问题的根源任然是可见的. 因此这种简单的re-panic机制通常是足够充分(表示了所有的崩溃报告), 但是如果你只想显示原来的错误值, 你可以写更多的代码去过滤不可预期的问题并使用源错误值re-panic问题. 这是留个读者的练习.



## web服务器

# Runtime

> [腾讯技术工程: 万字长文深入浅出 Golang Runtime](https://zhuanlan.zhihu.com/p/95056679)



GPM调度模型

并发原语

内存空间结构

GC

## 文章笔记

### 知乎

1. ﻿﻿协程调度，内存分配，GC;
2. ﻿﻿﻿操作系统及CPU相关的操作的封装(信号处理，系统调用，寄存器操作，原子操作等)，CGO;
3. ﻿﻿﻿pprof, trace, race检测的支持;
4. map, channel, string等内置类型及反射的实现



1. 与Java, Python不同，Go并没有虛拟机的概念，Runtime也直接被编译native code.
2. Go的Runtime与用户代码一起打包在一个可执行文件中
3. 用户代码与Runtime代码在执行的时候并没有明显的界限，都是函数调用
4. go对系统调用的指令进行了封装，不必依赖于glibc

5. 一些go的关键字被编译器编译成runtime包 下的函数.

#### Go调度

- PMG模型, M:N调度模型.

    调度在计算机中是分配工作所需资源的方法. linux的调度为CPU找到可运行的线程. 而Go的调度是为

    M(线程)找到P(内存, 执行票据)和可运行的G.

     轻量级协程G, 栈初始2KB, 调度不涉及系统调用.

     用户函数调用前会检查栈空间是否足够, 不够的话, 会进行栈扩容.

     用户代码中的协程同步造成的阻塞, 仅仅是切换协程, 而不阻塞线程.

     网络操作封装了epoll, 为NonBlocking模式, 未ready, 切换协程, 不阻塞线程.

     每个p均有local runq, 大多数时间仅与local runq无锁交互. 实现work stealing.

     用户协程无优先级, 基本遵循FIFO.

     目前(1.12), go支持协作的抢占调度, 还不支持非协作的抢占调度.

#### Go内存管理

#### Go GC

### An Introduction to Go Scheduler

> [原文链接](https://www.developer.com/languages/go-scheduler/)

> In Go and Golang programming, a scheduler is responsible for distributing jobs in a multiprocessing environment. When the available resources are limited, it is the task of the scheduler to manage the work that needs to be done in the most efficient way. In Go, the scheduler is responsible for scheduling goroutines, which is particularly useful in concurrency. Goroutines are like OS threads, but they are much lighter weight. However, goroutines always take the help of the underlying OS thread model and the scheduler it works on is at a much higher level than the OS scheduler. This Go programming tutorial provides a quick look at the concepts behind the Go scheduler.

在Go编程中, 调度器负责在多任务处理环境中完成任务分发. 当资源受限时, 调度器管理帮助系统以更高效的方式完成任务. 在Go中, 调度器负责调度goroutine, 这在并发时非常有用. Goroutine像OS线程但更轻量. 无论如何, goroutine的执行总是基于其底层的OS线程模型和调度器, 这比起OS调度是更高层的调度方式. 本教程带你窥探Go调度器后面的相关概念.



#### What is a CPU Scheduler in Go?

Go中, 什么是CPU调度器?

> CPUs today come with multiple cores – these multicore processors are optimized to handle simultaneous execution – also known as parallel processing. This occurs at the hardware level and it is nice to have multiprocessing ability imbibed into the core functionality of the processors. But the problem is that there must be something that manages the incoming multiple jobs and distributes them among the available processors. This is the job of the scheduler and the process is known as *scheduling*. A *scheduler* schedules jobs at the software level and is a core part of the operating system functionality. Being part of the operating system, a scheduler is well aware of the intricacies and working mechanisms of the operating system; also, the scheduler must be aware of the hardware layout it is running on. This makes the scheduler a complex piece of software. So, in a nutshell:
>
> - A scheduler’s job is to provide some sort of a control on work distribution over available resources.
> - Understand that, in this Go tutorial, we have been talking about *process schedulers*. There can be a scheduler for networks and containers as well. However, the basic idea of a scheduler remains the same.

现如今的CPU是多核处理器——这些多核处理器被优化处理同时进行的(simultaneous)操作——通常叫作并行处理(parallel processing). 这是发生在硬件层的事, 使用多核处理器完成多任务处理能力的方式非常棒. 随之而来的问题是如何在可用处理器之间管理和分发任务. 这就是调度器的任务, 这个处理过程被称作调度(scheduling). 调度器在软件层调度任务, 这也是操作系统的核心功能. 作为操作系统的一部分, 调度器需要能够理解操作系统的复杂性和运行机制;因此, 调度器需要知晓其所运行的硬件布局. 这让调度器成为了软件中复杂的一部分. 作个简单总结:

- 调度器的任务是利用可用资源控制, 排列和分发任务;
- 上面所提及的是关于处理器调度器的内容.其中包含网络和容器调度等内容. 但是调度器的基本思想是一致的.

#### Go运行时调度器(Go’s Runtime Scheduler)

> The Go runtime scheduler schedules goroutines. A goroutine is a lightweight thread that has the ability to execute on a single OS thread. The OS threads run on single or multiple available processors. The runtime scheduler of Go distributes goroutines over multiple threads. The scheduler determines the state of the goroutine. A life cycle of the goroutine can be in one of three fundamental states : *running*, *runnable*, and *not runnable* (due to IO blocked or system call):
>
> ![Go Scheduler Example](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202307061241097.png)
>
> Go works on a type of scheduler called an **m:n scheduler (M:N scheduler)**, which states that **M** number of goroutines can be distributed over **N** number of OS threads. Comparatively, OS threads have much more overhead than goroutines. Therefore, Go uses a limited number of threads to run a maximum number of goroutines.
>
> Similar to kernel level threads managed entirely by the OS, goroutines are user-space threads managed entirely by the Go runtime and the runtime scheduler schedules them. This makes goroutines cheaper, more lightweight than kernel threads, and they run on a very small memory footprint (with initial stack size of **2kb**, whereas the default stack size of a thread is **8kb**).
>
> The runnable goroutines (shown in the above figure) are picked from the queue to run over available OS threads, which, in turn, run on one or more available processors. The goroutines that are blocked are put into a *not runnable* state queue. Once unblocked, the goroutine is put back on the *runnable* queue and waits for its turn to run on the available OS thread.

Go调度器负责调度协程(goroutine). 协程是一种轻量级线程, 协程可以在单个OS线程上执行. OS线程则运行在单个或多个处理器上. Go运行时调度器分发goroutine到多线程上. 运行时调度器决定goroutine的运行状态. goroutine的生命周期可以归纳为三个基本状态: 运行中, 可运行和 不可运行(由于IO阻塞或系统调用). 

<mark>单个线程只能在单个核心上运行, 由OS调度器调度. 因此Go调度器采用了不同的操作粒度, go调度器可以在多个核心上运行goroutine, 也就说OS调度器的基本调度单位是OS线程, 而Go调度器的基本调度单位是goroutine. </mark>

![Go Scheduler Example](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202307061258502.png)

Go运行在一种叫做 **m:n scheduler(M:N scheduler)**的调度器上, 表明M个goroutine可以被分发到N个OS线程上.OS线程比起goroutine开销更大. 因此, Go使用少量的线程运行大量goroutine.

和内核级线程完全由OS管理类似, goroutine是完全由Go运行时管理的用户空间线程,并且由Go调度器完成调度. 这让goroutine的开销比内核线程更加便宜和轻量, 它们运行在非常小的内存占用上(初始堆栈占用大小为2kb, 同样的线程的默认占用为8kb).

从队列中选择可运行的goroutine到可用的OS线程上, 它们依次运行在一个或多个可用处理器上. 被阻塞的goroutine放进不可运行队列中. 一旦阻塞解除, goroutine被放回到可运行队列中,按序等待直到运行到可用OS线程上.

#### Fork-join Concurrency Model in Go

> Go uses the *fork-join concurrent execution strategy* to execute programs in parallel. This enables the Go program to branch its own execution path to be run with its main branch. This splitting branch can coincide at some later point and run as a single execution path. The fork part of the model states branching off of code at designated points and the join part states reuniting back to the caller after execution finishes. Let’s try to understand this with the help of an example. Here is a simple program showing how to perform fork-join concurrency in Go and Golang:

 Go 使用 (*fork-join concurrent execution strategy*)策略来并行执行程序. 这使得Go程序可以从主分支分割出自己的执行路径. 分割出的分支可以在以后某些时刻(节点, point)同时进行并以单一执行路径执行. 这模型状态的分叉部分可以在指定点取消分支并重新连接到主分支直到执行完成(TODO, 这句话翻译有歧义, 参考原文理解). 让我们尝试通过下面的例子来加以理解. 这个简单程序展示了Go如何执行fork-join并发模型:

```go
package main
import (
	"fmt"
    	"time"
)
func f1() {
	fmt.Println("func 1")
}
func f2() {
	fmt.Println("func 2")
}
func main() {
	fmt.Println("Start...")
	go f1()
	go f2()
	fmt.Println("End")
	time.Sleep(1 * time.Second)
}
```

This produces the follow output when run your integrated development environment (IDE):

```shell
Start...
End
func 2
func 1
```

![Golang Scheduler tutorial](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202307061347680.png)

The **main** method begins with a linear execution path and the designated split point is the function call with the **go** keyword (**go func1()**). Similarly, another function call, **go func2()** splits into another execution path. Both the functions join back to the source after finishing their execution. The main program waits courtesy of **time.Sleep(1\*time.Second)** for a constant time so that the child branches finish their execution in the meantime.

Try executing the same code by commenting out the the line: **time.Sleep(1\*time.Second)**. The output will be as follows:

```
Start...
End
```

The output from **func1** and **func2** will not be displayed. This is because the main program terminates before the child branches and rejoins. This means the **main**goroutine must wait till the forked child is able to rejoin its parent. The function **time.Sleep** makes force wait possible in this case. A better way to write concurrent execution code is with the help of **WaiteGroup** from the **sync** package.

#### Using WaiteGroup in Go

We can rewrite the above Go code using **WaiteGroup**. The **WaiteGroup** is a blocking mechanism used to *wait* for all the goroutines to finish their execution and, once more, *wait* until they rejoin their parent. So, we could rewrite the above code to this example:

```
package main

import (
	"fmt"
	"sync"
)

func f1(wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("func 1")
}

func f2(wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("func 2")
}

func main() {
	var wg sync.WaitGroup
	fmt.Println("Start...")
	wg.Add(2)
	go f1(&wg)
	go f2(&wg)
	fmt.Println("End")
	wg.Wait()
}
```

Observe that we have called **Add** to set the number of goroutines to wait for. Each goroutine calls **Done** when it finishes its execution. The **Wait** function ensures that all the execution rejoins back to its parent before final termination of the program.

#### The Fair Scheduling Strategy in Golang

公平调度策略

One of the problems with concurrent execution is the underutilized processor. Although the *fair scheduling strategy* tries to share execution load to all available processors, it is not always the case, because most distributed tasks are dependent on other tasks. This makes load sharing among multiple available processors unequal. There is always a chance that some processors are actually more utilized than the others. Moreover, holding a global lock to manage goroutines is expensive. Heavy IO block programs are prone to constant preemption of OS threads which is a significant overhead. A simple workaround of the problem is *work stealing*.

The work stealing strategy the Go scheduler looks for any logical underutilized processor and steals some processing time for the runnable goroutines to execute.

一个简单的解决办法是 偷偷工作.

Go调度器利用work stealing策略寻找任何逻辑上为充分利用的处理器, 并偷取更多处理时间来执行goroutine

#### Final Thoughts on Golang Scheduler

These are quick glimpses of the working process of the Go scheduler. Understand that Go scheduler is evolving very quickly and developers are constantly trying to improve the performance by making small to considerable changes on how it works. But the core principles remain the same. Here we have simply scratched the surface and tried to give a very high level overview of Go scheduler.

这些是Go调度器工作过程的快速一瞥。Go调度器的发展非常迅速，开发人员不断尝试通过对其工作方式进行小到大的更改来提高性能。但核心原则保持不变。在这里，我们只是触及了表面，并试图给出Go调度器的一个非常高级的概述。

# Go内存模型

> 参考文档:
>
> - [The Go Memory Model](https://go.dev/ref/mem)

## 介绍

```text
The Go memory model specifies the conditions under which reads of a variable in one goroutine can be guaranteed to observe values produced by writes to the same variable in a different goroutine.
机器翻译: Go内存模型指定了在一个goroutine中读取变量的条件，保证在另一个goroutine中写入同一个变量所产生的值。
```

Go内存模型指定了一些场景, 在该场景下, goroutine变量读取可以通过在不同goroutine中写入相同的变量时, 来保证观察到的变量值

**修饰后** 本文指定了Go内存模型中的一些特殊场景, 该场景下, 有多个协程对同一个变量执行写操作时, 协程读操作确保观察该变量值的正确性

<u>Go内存模型指导我们如何解决和避免数据竞争问题</u>



### 建议

```markdown
<!--程序在同时修改多个goroutine的数据时, 必须序列化操作-->
Programs that modify data being simultaneously accessed by multiple goroutines must serialize such access.

To serialize access, protect the data with channel operations or other synchronization primitives such as those in the sync and sync/atomic packages.

If you must read the rest of this document to understand the behavior of your program, you are being too clever.

Don't be clever.
```

程序在同时修改多个goroutine的数据时, 必须使用序列化访问的方式.

要序列化访问, 通过channel或者其他同步基元(*synchronization primitives*)比如`sync`和`sync/atomic`包来保护数据.

如果你必须要阅读文档其余部分才能理解你的程序的行为时, 你实在太聪明了. 

仔细阅读本文档吧!

<u>修饰后</u>

程序中, 修改可被多个协程同时存取(access, 读写)的数据时, 必须要序列化访问该数据. 通过序列化存取, 通过channel, sync包中的锁,原子锁等方式保护数据. 现在可能还不太清晰这些概念, 同阅读本文来加深理解.



### 非正式概述

>Go approaches its memory model in much the same way as the rest of the language, aiming to keep the semantics simple, understandable, and useful. This section gives a general overview of the approach and should suffice for most programmers. The memory model is specified more formally in the next section.
>
>A data race is defined as a write to a memory location happening concurrently with another read or write to that same location, unless all the accesses involved are atomic data accesses as provided by the sync/atomic package. As noted already, programmers are strongly encouraged to use appropriate synchronization to avoid data races. In the absence of data races, Go programs behave as if all the goroutines were multiplexed onto a single processor. This property is sometimes referred to as DRF-SC: data-race-free programs execute in a sequentially consistent manner.
>
>While programmers should write Go programs without data races, there are limitations to what a Go implementation can do in response to a data race. An implementation may always react to a data race by reporting the race and terminating the program. Otherwise, each read of a single-word-sized or sub-word-sized memory location must observe a value actually written to that location (perhaps by a concurrent executing goroutine) and not yet overwritten. These implementation constraints make Go more like Java or JavaScript, in that most races have a limited number of outcomes, and less like C and C++, where the meaning of any program with a race is entirely undefined, and the compiler may do anything at all. Go's approach aims to make errant programs more reliable and easier to debug, while still insisting that races are errors and that tools can diagnose and report them.



Go接近它的内存模型的方式, 大部分情况下和其他语言一样, 致力于时语义简单, 易于理解和实用的. 本节内容给出的一般性概述适用于大多数程序员. 后面的章节讲给出更正式的详解.

**数据竞争**·*data race* 定义: 对内存地址执行写操作时同时发生其他对该地址进行读或写操作的情况, 除开 `sync/atomic`包中提供的原子数据读写内存地址的方式除外. 如上所述,强烈鼓励程序员使用合适的同步机制来避免数据竞争. 没了数据竞争, Go程序行为就像所用的goroutine在一个单核处理器中多路复用一样.这种特性有时更喜欢被叫成DRF-SC(Sequential Consistency for Data Race Freedom): 用顺序一致性的方式执行非数据竞争程序.

程序员在编写没有数据竞争的Go程序时, 这里有一个限制关于 Go实现可以如何响应数据竞争. 这种实现可能通过报告竞争和终止程序的形式立马反应. 否则, 每个内存地址读操作时必须能观察到内存地址的值是否存在在被其他值写入或还在写操作中(尚未覆盖). 这些实现约数使Go更像Java和JavaScript的处理方式, 这种方式中大多数竞争有一个限定的结果数量, 不太像C和C++, 他们不允许任何竞争, 编译器可能做任何事情. Go的接近方式致力于使出轨的程序更可靠更容易调试, 然而需要指明的是, 竞态是错误并且go tools能够诊断和报告他们. 

<u>使用go build -race ...来诊断并报告程序中的races</u>

## 内存模型

> The memory model describes the requirements on program executions, which are made up of goroutine executions, which in turn are made up of memory operations.
>
> A memory operation is modeled by four details:
>
> - its kind, indicating whether it is an ordinary data read, an ordinary data write, or a synchronizing operation such as an atomic data access, a mutex operation, or a channel operation,
> - its location in the program,
> - the memory location or variable being accessed, and
> - the values read or written by the operation.
>
> Some memory operations are read-like, including read, atomic read, mutex lock, and channel receive. Other memory operations are write-like, including write, atomic write, mutex unlock, channel send, and channel close. Some, such as atomic compare-and-swap, are both read-like and write-like.



内存模型描述了程序执行的需求, 程序执行由goroutines执行完成, goroutines反过来由内存操作执行. 

内存操作模型有以下四个要点:

- 操作类型表明该操作是常规读, 常规写, 或者同步操作(比如: 原子数据访问,锁操作或channel操作)
- 操作在程序中的位置
- 内存位置或变量存取位置和
- 通过操作读或写该变量的值

<u>内存操作类型, 内存操作在程序中的位置以及内存变量的读和写</u>



> Some memory operations are read-like, including read, atomic read, mutex lock, and channel receive. Other memory operations are write-like, including write, atomic write, mutex unlock, channel send, and channel close. Some, such as atomic compare-and-swap, are both read-like and write-like.
>
> A goroutine execution is modeled as a set of memory operations executed by a single goroutine.
>
> Requirement 1: The memory operations in each goroutine must correspond to a correct sequential execution of that goroutine, given the values read from and written to memory. That execution must be consistent with the sequenced before relation, defined as the partial order requirements set out by the Go language specification for Go's control flow constructs as well as the order of evaluation for expressions.
>
> A Go program execution is modeled as a set of goroutine executions, together with a mapping W that specifies the write-like operation that each read-like operation reads from. (Multiple executions of the same program can have different program executions.)
>
> Requirement 2: For a given program execution, the mapping W, when limited to synchronizing operations, must be explainable by some implicit total order of the synchronizing operations that is consistent with sequencing and the values read and written by those operations.
>
> The synchronized before relation is a partial order on synchronizing memory operations, derived from W. If a synchronizing read-like memory operation r observes a synchronizing write-like memory operation w (that is, if W(r) = w), then w is synchronized before r. Informally, the synchronized before relation is a subset of the implied total order mentioned in the previous paragraph, limited to the information that W directly observes.
>
> The happens before relation is defined as the transitive closure of the union of the sequenced before and synchronized before relations.
>
> Requirement 3: For an ordinary (non-synchronizing) data read r on a memory location x, W(r) must be a write w that is visible to r, where visible means that both of the following hold:
>
> w happens before r.
> w does not happen before any other write w' (to x) that happens before r.
>
> A read-write data race on memory location x consists of a read-like memory operation r on x and a write-like memory operation w on x, at least one of which is non-synchronizing, which are unordered by happens before (that is, neither r happens before w nor w happens before r).
>
> A write-write data race on memory location x consists of two write-like memory operations w and w' on x, at least one of which is non-synchronizing, which are unordered by happens before.
>
> Note that if there are no read-write or write-write data races on memory location x, then any read r on x has only one possible W(r): the single w that immediately precedes it in the happens before order.
>
> More generally, it can be shown that any Go program that is data-race-free, meaning it has no program executions with read-write or write-write data races, can only have outcomes explained by some sequentially consistent interleaving of the goroutine executions. (The proof is the same as Section 7 of Boehm and Adve's paper cited above.) This property is called DRF-SC.
>
> The intent of the formal definition is to match the DRF-SC guarantee provided to race-free programs by other languages, including C, C++, Java, JavaScript, Rust, and Swift.
>
> Certain Go language operations such as goroutine creation and memory allocation act as synchronization operations. The effect of these operations on the synchronized-before partial order is documented in the “Synchronization” section below. Individual packages are responsible for providing similar documentation for their own operations.



内存操作分read-like, write-like and read-write-like.

read-like操作包括read,atomic read, mutex lock和channel receive;

write-like操作包括write, atomic write, mutex unlock, channel send和channel close;

read-write-like包括 atomic compare-and-swap等.



一个 **协程执行**·*goroutine execution* 模型由一系列 **内存操作**·*memory operation* 组成.



需求1: 我们考虑从内存中读和写值等操作, 每个goroutine的内存操作必须与该协程的正确串行执行顺序相符. goroutine中的语句执行顺序必须在相关(执行顺序)之前串行, 部分执行顺序在[the Go language specification]()的流程控制结构和表达式求值顺序定义.

一个Go **程序执行**·*program execution* 模型, 由一系列 goroutine execution 构成, 以及指定每个read-like操作从write-like操作读取的映射W。 (同一程序多次执行可能有不同的程序执行顺序)

<u>修饰后</u> 需求1: 对给定内存位置执行读写操作时, 操作必须按照协程顺序串行执行(协程本身是串行的). 协程本身的执行顺序必须是串行的, 该顺序由语言参考的流程控制语句和表达式求值顺序控制. 

Go程序执行模型由一系列协程执行组成, 以及从类读操作到类写操作的映射W(记作W=Map[r]w).(程序的多次执行可能产生不同的执行顺序)

<u>@wwfyde:goroutine内的内存操作默认都是串行执行的, 和普通的程序一样</u>





要求2:  对于一个给定*program execution*的而言,  有映射W, 当限制为同步操作时, 必须通过某种同步操作的隐式总顺序解释, 该顺序与这些操作的顺序必须与串行和值读写一致.

相关程序执行顺序的是在同步内存操作上的部分顺序, 源自映射W. 如果一个同步的read-like内存操作r发线了一个同步的write-like操作w(if W(r)=w), 之后w在r之前同步. 非正式地, 在(执行顺序)关联之前的同步是一个上个段落提到的隐式总顺序的子集, 这样的同步限制为W可以直接发现信息.

关联发生之前, 关联有The happens before relation is defined as the transitive closure of the union of the sequenced before and synchronized before relations.

<u>修饰后</u>

[//]: # (TODO 待完成)
<mark>高亮</mark>

要求3: 对于一个在内存地址x上日常的(非同步)数据读r, 相关写(`W(r)=w`)必须是一个对r可见的, 可见有以下两层意思: w发生在r之前, w不会在另外一个(发生在r之前的)w之前发生. 

有内存地址x上的read-write数据竞争:r和w,  其中之一是非同步的, 发生之前的执行顺序是不确定的(r和w的执行顺序不确定).

<u>读写操作中, 其中任何一个操作非同步, 都会引发数据竞争, 不能确定是先读还是先写.</u>

有内存地址x上的write-write数据竞争: w和w', 其中任何一个操作非同步, 发生之前的顺序是不确定的.

请记住, 内存地址x上如果没有读写数据竞争或写写数据竞争, 任何x上的读操作都是唯一的: the single w that immediately precedes it in the happens before order.



More generally, it can be shown that any Go program that is data-race-free, meaning it has no program executions with read-write or write-write data races, can only have outcomes explained by some sequentially consistent interleaving of the goroutine executions. (The proof is the same as Section 7 of Boehm and Adve's paper cited above.) This property is called DRF-SC.

更常见地, 任何没有数据竞争的Go程序意味着它没有读写或写写执行, ???. (证据是)???

The intent of the formal definition is to match the DRF-SC guarantee provided to race-free programs by other languages, including C, C++, Java, JavaScript, Rust, and Swift.



Certain Go language operations such as goroutine creation and memory allocation act as synchronization operations. The effect of these operations on the synchronized-before partial order is documented in the “Synchronization” section below. Individual packages are responsible for providing similar documentation for their own operations.

某些Go语言操作, 比如协程创建和内存分配以同步的方式执行. ???? 每个包负责为自己的操作提供类似的文档.





## 解决数据竞争

>  原文标题: Implementation Restrictions for Programs Containing Data Races

<!-- TODO 文档带完善-->

> The preceding section gave a formal definition of data-race-free program execution. This section informally describes the semantics that implementations must provide for programs that do contain races.
>
> First, any implementation can, upon detecting a data race, report the race and halt execution of the program. Implementations using ThreadSanitizer (accessed with “go build -race”) do exactly this.
>
> Otherwise, a read r of a memory location x that is not larger than a machine word must observe some write w such that r does not happen before w and there is no write w' such that w happens before w' and w' happens before r. That is, each read must observe a value written by a preceding or concurrent write.
>
> Additionally, observation of acausal and “out of thin air” writes is disallowed.
>
> Reads of memory locations larger than a single machine word are encouraged but not required to meet the same semantics as word-sized memory locations, observing a single allowed write w. For performance reasons, implementations may instead treat larger operations as a set of individual machine-word-sized operations in an unspecified order. This means that races on multiword data structures can lead to inconsistent values not corresponding to a single write. When the values depend on the consistency of internal (pointer, length) or (pointer, type) pairs, as can be the case for interface values, maps, slices, and strings in most Go implementations, such races can in turn lead to arbitrary memory corruption.
>
> Examples of incorrect synchronization are given in the “Incorrect synchronization” section below.
>
> Examples of the limitations on implementations are given in the “Incorrect compilation” section below.



The preceding section gave a formal definition of data-race-free program execution. This section informally describes the semantics that implementations must provide for programs that do contain races.

上节内容对非数据竞争操作给了一个正式的定义. 本节正式描述数据竞争程序的语义.



First, any implementation can, upon detecting a data race, report the race and halt execution of the program. Implementations using ThreadSanitizer (accessed with “`go` `build` `-race`”) do exactly this.

首先,  

Otherwise, a read *r* of a memory location *x* that is not larger than a machine word must observe some write *w* such that *r* does not happen before *w* and there is no write *w'* such that *w* happens before *w'* and *w'* happens before *r*. That is, each read must observe a value written by a preceding or concurrent write.

否则

Additionally, observation of acausal and “out of thin air” writes is disallowed.

另外的, 

Reads of memory locations larger than a single machine word are encouraged but not required to meet the same semantics as word-sized memory locations, observing a single allowed write *w*. For performance reasons, implementations may instead treat larger operations as a set of individual machine-word-sized operations in an unspecified order. This means that races on multiword data structures can lead to inconsistent values not corresponding to a single write. When the values depend on the consistency of internal (pointer, length) or (pointer, type) pairs, as can be the case for interface values, maps, slices, and strings in most Go implementations, such races can in turn lead to arbitrary memory corruption.

读取超过机器内存地址的数据是支持的, ...这意味着 multiword数据结构上的竞争可能导致值不一致, 这语单次写的结果不想符.



下节内容(错误同步)将给出一些错误的同步的例子



下节内容(错误编译)将给出一些错误的编译的例子



## 同步

### 初始化

> Program initialization runs in a single goroutine, but that goroutine may create other goroutines, which run concurrently.
>
> If a package p imports package q, the completion of q's init functions happens before the start of any of p's.
>
> The completion of all init functions is synchronized before the start of the function main.main.



程序初始化在一个单独的goroutine中运行, 但是这个goroutine可创建其他的goroutine, goroutines并发运行.

如果包p导入包q, 在任何p的初始化函数发生之前 q的初始化已经完成. 

所有初始化函数的完成都是同步的, 这在`main.main`函数开始之前.

### goroutine创建

> The go statement that starts a new goroutine is synchronized before the start of the goroutine's execution.
>
> For example, in this program:
>
> ```go
> var a string
> 
> func f() {
> 	print(a)
> }
> 
> func hello() {
> 	a = "hello, world"
> 	go f()
> }
> ```
>
> calling hello will print "hello, world" at some point in the future (perhaps after hello has returned).





使用go语句创建一个新协程是同步的, 这发生在该协程启动之前.调用hello程序将会在将来的某个时间点上打印"hello, world"(也有可能在hello函数执行完成之后打印). 

<u>Go语句创建执行完毕和,继续向后执行. 而且并行地执行着创建的协程.</u>

<u>事件A和事件B同步执行表示串行, A和B异步执行表式并行</u>



### goroutine销毁

> The exit of a goroutine is not guaranteed to be synchronized before any event in the program. For example, in this program:
>
> ```go
> var a string
> 
> func hello() {
> 	go func() { a = "hello" }()
> 	print(a)
> }
> ```
>
> the assignment to a is not followed by any synchronization event, so it is not guaranteed to be observed by any other goroutine. In fact, an aggressive compiler might delete the entire go statement.
>
> If the effects of a goroutine must be observed by another goroutine, use a synchronization mechanism such as a lock or channel communication to establish a relative ordering.



goroutine退出操作并不保证在任何程序事件之前同步. 例如:

```go
var a string

func hello() {
	go func() { a = "hello" }()
	print(a)
}
// a = "" not "hello", 赋值语句所在goroutine已经被销毁
```

```go
var a string

func hello() {
	go func() { a = "hello";time.Sleep(time.Second) }()
	time.Sleep(500 * time.Millisecond)
	print(a)
}
// 延迟销毁goroutine后, main goroutine 可以读取到变量a
```

赋值a语句不是在任何同步事件之后, 因此这并不保证赋值被其他goroutine发现. 事实上, 激进的编译器甚至会删除整个go语句. 

如果goroutine的效果必需被其他goroutine发现, 使用同步机制, 比如用lock或channel通信来建立一个相对顺序

```go
var a string

func hello() {
	ch := make(chan struct{})
	go func() { a = "hello"; ch <- struct{}{} }()
	<-ch
	print(a)
}
// a = "hello" 函数将可观察到赋值A事件
```



<u>go协程与主协程并行执行, go协程写操作与main程序读取a的顺序不确定, 逻辑上是异步的. 如果要与主协程同步以让该写操作被主协程观察, 需要使用同步机制来保证读和写的顺序确定</u>

### channel通信

> Channel communication is the main method of synchronization between goroutines. Each send on a particular channel is matched to a corresponding receive from that channel, usually in a different goroutine.
>
> A send on a channel is synchronized before the completion of the corresponding receive from that channel.
> This program:
>
> var c = make(chan int, 10)
> var a string
>
> func f() {
> 	a = "hello, world"
> 	c <- 0
> }
>
> func main() {
> 	go f()
> 	<-c
> 	print(a)
> }
> is guaranteed to print "hello, world". The write to a is sequenced before the send on c, which is synchronized before the corresponding receive on c completes, which is sequenced before the print.
>
> The closing of a channel is synchronized before a receive that returns a zero value because the channel is closed.
>
> In the previous example, replacing c <- 0 with close(c) yields a program with the same guaranteed behavior.
>
> A receive from an unbuffered channel is synchronized before the completion of the corresponding send on that channel.
>
> This program (as above, but with the send and receive statements swapped and using an unbuffered channel):
>
> var c = make(chan int)
> var a string
>
> func f() {
> 	a = "hello, world"
> 	<-c
> }
>
> func main() {
> 	go f()
> 	c <- 0
> 	print(a)
> }
> is also guaranteed to print "hello, world". The write to a is sequenced before the receive on c, which is synchronized before the corresponding send on c completes, which is sequenced before the print.
>
> If the channel were buffered (e.g., c = make(chan int, 1)) then the program would not be guaranteed to print "hello, world". (It might print the empty string, crash, or do something else.)
>
> The kth receive on a channel with capacity C is synchronized before the completion of the k+Cth send from that channel completes.
>
> This rule generalizes the previous rule to buffered channels. It allows a counting semaphore to be modeled by a buffered channel: the number of items in the channel corresponds to the number of active uses, the capacity of the channel corresponds to the maximum number of simultaneous uses, sending an item acquires the semaphore, and receiving an item releases the semaphore. This is a common idiom for limiting concurrency.
>
> This program starts a goroutine for every entry in the work list, but the goroutines coordinate using the limit channel to ensure that at most three are running work functions at a time.
>
> var limit = make(chan int, 3)
>
> func main() {
> 	for _, w := range work {
> 		go func(w func()) {
> 			limit <- 1
> 			w()
> 			<-limit
> 		}(w)
> 	}
> 	select{}
> }





goroutine之间同步的主要方法是*Channel communication*. 每个指定send channel都被匹配了一个相应的receive channel, 通常在不同协程之间. 


发送到channel的操作是同步的, 在相应的接收channel操作完成完成之前.

例如:

```go
var c = make(chan int, 10)
var a string

func f() {
	a = "hello, world"
	c <- 0
}

func main() {
	go f()
	<-c
	print(a)
}
```

上面的程序保证会输出"hello, world!". 接收c之前, 写入a操作会与之串行, 接收c在发送c完成之前同步, 接收c在print之前与之串行.



If the channel were buffered (e.g., c = make(chan int, 1)) then the program would not be guaranteed to print "hello, world". (It might print the empty string, crash, or do something else.)

如果channel是 bufferd channel, 程序不会确保打印"hello, world". (它可能会打印空字符串, 崩溃, 或者一些其他操作)

The kth receive on a channel with capacity C is synchronized before the completion of the k+Cth send from that channel completes.

This rule generalizes the previous rule to buffered channels. It allows a counting semaphore to be modeled by a buffered channel: the number of items in the channel corresponds to the number of active uses, the capacity of the channel corresponds to the maximum number of simultaneous uses, sending an item acquires the semaphore, and receiving an item releases the semaphore. This is a common idiom for limiting concurrency.

This program starts a goroutine for every entry in the work list, but the goroutines coordinate using the limit channel to ensure that at most three are running work functions at a time.





### 锁

### Once

### Atomic Values

### Finalizers终结器

### 额外机制·Additional Mechanisms

## 同步错误·Incorrect synchronization

## 编译错误

## 结论

```text
Go programmers writing data-race-free programs can rely on sequentially consistent execution of those programs, just as in essentially all other modern programming languages.

When it comes to programs with races, both programmers and compilers should remember the advice: don't be clever.
```

Go程序员编写非数据竞争程序可以依靠程序串行一致性执行, 就像其他程序语言一样.

当程序出现竞态时, 程序员和编译者应该记住这个忠告: 别自作聪明.







### 

# Go Tools

> https://pkg.go.dev/cmd
>
> https://pkg.go.dev/cmd/go
>
> https://tip.golang.org/doc/toolchain
>
> https://pkg.go.dev/golang.org/x/tools

Go is a tool for managing Go source code.

## Cheatsheet

## build

compile packages and dependencies

## doc

> https://tip.golang.org/doc/comment

```shell

go doc net/http | grep "^func"
```



## env

The `GOPATH` environment variable specifies the location of your workspace.

If no `GOPATH` is set, it is assumed to be `$HOME/go` on Unix systems. If you want to use a custom location as your
workspace, you can set the `GOPATH` environment variable. This page explains how to set this variable on various
platforms.

## get

add dependencies to current module and install them

## mod

module maintenance

## run

compile and run Go program

## work

Workspace maintenance

## env

## test

```shell
go test -v # 输出包中每个测试用例的名称和执行时间
-run # 指定测试用例

go help testfunc
go doc test
```

## **tool**

```go
go doc cmd/vet

go tool trace
```

### tarce

### pprof

## vet-详检



## **extra**额外工具

## pprof

- https://go.dev/blog/pprof

```shell
go tool pprof http://localhost:8080/debug/pprof/heap

top
```



## gops

## guru

[http://golang.org/s/using-guru](http://golang.org/s/using-guru)

## GODBUG

## expvar-度量

### prometheus

###  

# **Topics**

> 使用和理解Go(Using and understanding Go)

## Naming

### Package

使用简短名字, 但是不要短到像加了密一样.

尽可能保持可读性和无歧义. (辅助工具: util, ioutil)

包通常使用统一的形式. 使用复数来避免覆盖响应的预声明类型, 使用`go/types`形式, 来避免和关键字冲突. 

避免使用有其他含义的包名, (如:temp, temporary, temperature, tempconv)

包成员命名: 

当设计一个包时, 要考虑两个有意义的部分如何一起工作, 二不只是成员名.(例如: bytes.Equal, flag.Int, http.Get)

<u>包名可以携带语境, 成员命名时可以省去这部分语境</u>

我们可以识别出一些通用的命名模式. strings包提供一系列操作字符串的独立函数. string这个词不会出现在任何包成员名字中, 客户通过`strings.Index`, `strings.Replace`等引用它们.

其他一些包可以描述为单一类型包, 例如`html/template`和`math/rand`中, 这也是为什么这类包名通常都比较短.

一些极端情况下, 像net/http这样的包有很多名字, 但是没有结构, 因为他们执行复杂的任务. 尽管有超过20种类型和更多的函数, 但是包中最重要的成员使用最简单的命名: Get, Post, Handle, Error, Client, Server. 

## 诊断学(Diagnostics)

> 诊断, 诊断学
>
>  [诊断](https://go.dev/doc/diagnostics)

> The Go ecosystem provides a large suite of APIs and tools to diagnose logic and performance problems in Go programs. This page summarizes the available tools and helps Go users pick the right one for their specific problem.
>
> Diagnostics solutions can be categorized into the following groups:
>
> - **Profiling**: Profiling tools analyze the complexity and costs of a Go program such as its memory usage and frequently called functions to identify the expensive sections of a Go program.
> - **Tracing**: Tracing is a way to instrument code to analyze latency throughout the lifecycle of a call or user request. Traces provide an overview of how much latency each component contributes to the overall latency in a system. Traces can span multiple Go processes.
> - **Debugging**: Debugging allows us to pause a Go program and examine its execution. Program state and flow can be verified with debugging.
> - **Runtime statistics and events**: Collection and analysis of runtime stats and events provides a high-level overview of the health of Go programs. Spikes/dips of metrics helps us to identify changes in throughput, utilization, and performance.
>
> Note: Some diagnostics tools may interfere with each other. For example, precise memory profiling skews CPU profiles and goroutine blocking profiling affects scheduler trace. Use tools in isolation to get more precise info.

Go生态系统提供了大量的API套件和工具来诊断Go程序中的逻辑和性能问题. 本文章总结了可用的工具并帮助Go用户针对特定问题选择正确选项.

诊断方案可以分成下面四类:

- **分析(Profiling)**: Profiling工具分析Go程序的复杂性和开销, 比如分析程序的内存用量和函数调用频度以标识其中的高昂开销部分
- **追踪(Tracing)**: Tracing是一种测量代码以分析调用和用户请求的延迟和吞吐量生命周期. Traces提供了关于每个组件在总延迟中贡献的延迟量的概述. Traces可以在多个Go进程之间进行跟踪.
- **调试(Debuging)**: Debuging允许我们暂停一个Go程序并检查其执行. 可以通过调试 核验(verify) 程序的状态和流程.
- **运行时统计和事件(Runtime statistics and events)**: 通过收集和分析运行时状态和事件提供一个顶层的(high-level)程序健康状态概述. 通过指标的峰值或波谷来帮助我们标识吞吐量,利用率和性能的变更.

注意: 某些诊断工具的功能可能相互干扰. 例如, 精确的内存分析偏向CPU分析和协程块分析, 这影响追踪调度器的使用. 使工具间相互隔离以获取更精确的信息.



### AI Answer of `diagnosis in go`



```markdown
In Go, diagnosing issues typically involves a combination of techniques including logging, debugging, profiling, and possibly using specialized diagnostic tools. Here are some common approaches:

1. **Logging**:
   - Use the `log` package to record information about the program's execution. This is especially useful for understanding the flow of execution and identifying potential issues.
   - Example: `log.Println("Something happened")`

2. **Error Handling**:
   - Properly handle errors returned by functions. This ensures that you're aware of any issues that occur during execution.
   - Example: 
     ```go
     result, err := someFunction()
     if err != nil {
         log.Fatal(err)
     }
```

3. **Debugging**:
   - Use a debugger like Delve (`dlv`) to step through your code, inspect variables, and identify the source of issues.
   - Example: `dlv debug`

4. **Profiling**:
   - Use the built-in profiling tools like `pprof` to identify performance bottlenecks, memory usage, and other metrics.
   - Example: `go tool pprof http://localhost:6060/debug/pprof/heap`

5. **Race Detector**:
   - Use the race detector to find and fix race conditions in your concurrent Go code.
   - Example: `go run -race main.go`

6. **Tracing**:
   - Implement custom traces to follow the flow of your program and identify bottlenecks.
   - Example: Use `context.WithValue` to attach trace information to the context.

7. **Benchmarking**:
   - Write benchmarks to measure the performance of specific functions or code sections.
   - Example: `go test -bench=.`

8. **Error Checking Tools**:
   - Use tools like `errcheck` to ensure that all returned errors are handled appropriately.
   - Example: `errcheck ./...`

9. **Memory Leaks**:
   - Use `pprof` to identify memory leaks and analyze memory usage patterns.
   - Example: `go tool pprof http://localhost:6060/debug/pprof/heap`

10. **Goroutine Leaks**:
    - Use the `goroutine` pprof to check for goroutine leaks.
    - Example: `go tool pprof http://localhost:6060/debug/pprof/goroutine`

11. **Code Review**:
    - Have peers review your code. Fresh eyes can often spot issues that may have been overlooked.

12. **Static Analysis Tools**:
    - Use static analysis tools like `go vet` and `golint` to catch common mistakes and enforce coding standards.
    - Example: `go vet ./...`

Remember that the exact approach you choose will depend on the nature of the issue you're trying to diagnose. A combination of these techniques is often the most effective way to identify and resolve problems in your Go code.
```





## 垃圾回收(Garbage Collection, GC)

> 三色标记法
>
> 引用计数(reference counting)
>
> 标记清除技术(mark-sweep technique)

### 简介-Introduction

本指南致力于通过深入理解 **Go垃圾回收器**(Go garbage collector)增强Go用户对应用开销的理解. 同时指导用户如何利用这些深入理解改善应用资源利用率()

#### Where Go values Live

#### Tracing Garbage Collection

### The GC cycle

### A note about virtual memory

### Optimization guide

### 附录-Appendix

## test

测试函数的基本思路是预期in和want的值是否一致.

基准函数的基本思路是将函数循环执行b.N次, 并得出每次循环的耗时



## Debug

## Profiling-性能分析

> performance and optimization

## Generics



## Fuzzing-模糊测试

# Topic: 并发-Concurrency

<!-- TODO 待完成 -->

> 参考资料:
>
> - Go Blog: https://go.dev/blog/context
> - [(Go Blog)Go Concurrency Patterns: Pipelines and cancellation](https://go.dev/blog/pipelines)
> - https://go.dev/blog/concurrency-timeouts
> - https://go.dev/blog/io2013-talk-concurrency
>     The talk shows how to detect and avoid deadlocks and race conditions, and demonstrates the implementation of deadlines, cancellation, and more.
> - https://go.dev/blog/waza-talk
> - https://go.dev/talks/2012/concurrency.slide#1

## 文章-Slide

https://go.dev/talks/2012/concurrency.slide

Questions:

- Why is concurrency supported?
- What is concurrency, anyway?
- Where does the idea come from?
- What is it good for?
- How do I use it?

### What is concurrency?

Concurrency is the composition of independently executing computations.

Concurrency is a way to structure software, particularly as a way to write clean code that interacts well with the real world.

It is not parallelism.

### Concurrency is not parallelism

Concurrency is not parallelism, although it enables parallelism.

If you have only one processor, your program can still be concurrent but it cannot be parallel.

On the other hand, a well-written concurrent program might run efficiently in parallel on a multiprocessor. That property could be important...

For more on that distinction, see the link below. Too much to discuss here.

[golang.org/s/concurrency-is-not-parallelism](http://golang.org/s/concurrency-is-not-parallelism)

### A model for software construction

Easy to understand.

Easy to use.

Easy to reason about.

You don't need to be an expert!

(Much nicer than dealing with the minutiae of parallelism (threads, semaphores, locks, barriers, etc.))

### Goroutines

What is a goroutine? It's an independently executing function, launched by a go statement.

It has its own call stack, which grows and shrinks as required.

It's very cheap. It's practical to have thousands, even hundreds of thousands of goroutines.

It's not a thread.

There might be only one thread in a program with thousands of goroutines.

Instead, goroutines are multiplexed dynamically onto threads as needed to keep all the goroutines running.

But if you think of it as a very cheap thread, you won't be far off.



### Synchronization

When the main function executes <–c, it will wait for a value to be sent.

Similarly, when the boring function executes c <– value, it waits for a receiver to be ready.

A sender and receiver must both be ready to play their part in the communication. Otherwise we wait until they are.

Thus channels both communicate and synchronize.

## Go Concurrency Patterns: Context

### 简介-Introduction

> In Go servers, each incoming request is handled in its own goroutine. Request handlers often start additional goroutines to access backends such as databases and RPC services. The set of goroutines working on a request typically needs access to request-specific values such as the identity of the end user, authorization tokens, and the request’s deadline. When a request is canceled or times out, all the goroutines working on that request should exit quickly so the system can reclaim any resources they are using.
>
> At Google, we developed a `context` package that makes it easy to pass request-scoped values, cancellation signals, and deadlines across API boundaries to all the goroutines involved in handling a request. The package is publicly available as [context](https://go.dev/pkg/context). This article describes how to use the package and provides a complete working example.

在Go服务器中, 每个新到的请求都由一个独立的goroutine来处理. 请求处理者经常开启额外的goroutine去访问后端, 比如数据库和RPC服务. 工作在一个典型请求上的goroutine需要访问特定的请求属性值比如终端用户标识符, 授权token和请求截止期限. 当一个请求取消或超时时, 所有运行在该请求上的goroutine都应该快速退出来让系统可以回收它们占用的任何资源.

在Google, 我们开发了一个`context`包来轻松传入请求域值, 取消信号, 和所有涉及到处理请求的API边界之间的截止期限. [context](https://go.dev/pkg/context)包可以是公开可用的. 本文章讲述了如何使用context包并提供一个可以工作的完整例子. 



# Go modules

- Go模块开发步骤:
    - 创建一个新的模块
        - creating a new module
    - 增加一个依赖
        - adding a dependency
    - 升级依赖
        - upgrading dependencies
    - 在新的主要版本中增加一个依赖
        - Adding a dependency on a new major version.
    - 升级一个依赖到一个新的主要版本中
        - upgrading a denpendency to a new major version.
    - 移除不使用的依赖
        - removing unused dependencies.

## Modules

> - [Go Modules Reference](https://go.dev/ref/mod)
>     - [Using Go Modules](https://go.dev/blog/using-go-modules)
>         -

[Using Go Modules]:https://go.dev/blog/using-go-modules    "如何使用模块"

>-

[test]: #语言参考

>-

```markdown
Go code is grouped into packages, and packages are grouped into modules. Your module specifies dependencies needed to
run your code, including the Go version and the set of other modules it requires.
```

module 可以被其他人使用, 程序的一种组织形式

## 命令参考



```shell
go mod init

go mod download

go mod tidy

go mod vendor
```



# 并发编程

## 参考资料

- [极客时间: Go并发编程实践]
- [课件:Go并发编程(来自《Go并发编程实践》)](/Users/wwfyde/Desktop/Materials/Go.pptx)

## 开篇



# **最佳实践**

> What types of software do you develop with Go?
>
> 36% Websites
>
> 31% Utilities (small apps for small tasks)
>
> 26% IT Infrastructure
>
> 24% Libraries / Frameworks
>
> 20% System Software
>
> 14% Database / Data Storage
>
> 12% Programming Tools
>
> 6% Business Intelligence / Data Science / Machine Learning
>
>
>
> ---
>
>
>
> DevOps and Infrastructure development are some of the most popular uses for Go.

使用 go fmt *.go 格式化代码/ 或者 ctrl + alt + L

用go编写命令行程序的感觉真是太爽了! 一次编译,多处运行

## Go Router

> 路由
>
> gorilla / mux 39%
>
> Standard library 30%

## 错误处理

## 重要特性

go runtime / channels docker microservice

## Style Guide

> 参考链接
>
> - [go.dev:names](https://go.dev/doc/effective_go#names)
> - [google go style guide](https://google.github.io/styleguide/go/)

### tips

> Go语言对于代码的格式化要求非常严格
>
> gofmt是用来格式化代码分官方工具

1. go不需要再语句或声明后面使用分号结尾, 除非有多个语句或声明出现在同一行(*这种写法也不被推荐*)。
2. 事实上, 跟在特定符号后面的换行符被转换为分号`;`, 在什么地方进行换行会影响对Go代码的执行;
3. "`{`"符号必须和关键字func在同一行, <u>不能独自成行</u>;
4. ` ⏎`符(newline)需要谨慎使用不能出现在 `+` 等操作符之前;

### list

- Package Names
    - [go blog](https://go.dev/blog/package-names)

### table

| type     | example |      |
| -------- | ------- | ---- |
| variable |         |      |
| package  |         |      |
|          |         |      |



## 如何正确编写Go代码

前提:

合理使用 go packages 和 go commands

### 代码组织

工作空间: go的工作环境, 相当于 python的虚拟环境一样

- 将所有代码组织到一个单独的工作空间(workspace)
- 一个工作空间包含许多版本控制仓库;
- 每个仓库包含一个或多个包;
- 每个包由单独的目录和源文件来构成;*[ 一个目录作为一个包? ]*
- 包的目录路径决定了导入路径

注意与其他开发环境的区别: 每个工程有一个分离的工作空间, 工作空间与版本控制仓库的紧密相连.

**工作空间**: 目录层级是两个目录`src` 和 `bin` 作为根目录

`src` contains Go source files and `bin` contains executable commands;

```shell
bin/
    hello                          # command executable
    outyet                         # command executable
src/
    github.com/golang/example/
        .git/                      # Git repository metadata
	hello/
	    hello.go               # command source
	outyet/
	    main.go                # command source
	    main_test.go           # test source
	stringutil/
	    reverse.go             # package source
	    reverse_test.go        # test source
    golang.org/x/image/
        .git/                      # Git repository metadata
	bmp/
	    reader.go              # package source
	    writer.go              # package source
    ... (many more repositories and packages omitted) ...
```

`GOPATH` 环境变量 :

```shell
# 查询GOPATH 是否存在
echo $GOPATH

# 将go命令集添加到根目录
export PATH=$PATH:$(go env GOPATH)/bin
```

### 代码测试

### 导入远程包

# 常见问题

> - [Frequently Asked Questions (FAQ)](https://go.dev/doc/faq)

## List of FAQ

- $GOPATH/go.mod exists but should not
    - 如果存在go.



## go module 与 GOPATH

# **底层原理**

[init in go](https://david-yappeter.medium.com/init-in-go-programming-31e2c2bc2371)

![Go程序执行过程](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306071353352.png)

## 编译原理

> [Introduction to the Go compiler](https://go.dev/src/cmd/compile/README)
>
> [中文](https://github.com/gocn/translator/blob/e6aef7adcf25cd0a31a26cd643e0272e780af503/2021/w31_How_Does_Go_Calculate_Len.md)
>
> 

## 调度器

[](https://www.zhihu.com/question/20862617/answer/27964865)

[](https://morsmachine.dk/go-scheduler)

[Go调度器](https://www.zhihu.com/question/20862617/answer/27964865)

### 



## GMP模型- Go调度器

> [参考文献1](https://zhuanlan.zhihu.com/p/352964026)
>
> [参考文献2](https://www.cnblogs.com/luozhiyun/p/14426737.html)
>
> [官方文档](https://golang.org/src/runtime/proc.go)
>
> [中文书籍-Go语言设计与实现](https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-goroutine/)
>
> go scheduler
>
> [知乎上的回答](https://www.zhihu.com/question/20862617/answer/27964865)
>
> [Golang 调度器 GMP 原理与调度全分析](https://learnku.com/articles/41728)

<u>Go 语言的调度器通过使用与 CPU 数量相等的线程以减少线程频繁切换的内存开销，同时在每一个线程上执行额外开销更低的
Goroutine 来降低操作系统和硬件的负载。</u>

真非协作的抢占式调度器:

M 内核线程, 工作线程

M:代表真正的内核[OS线程](https://www.zhihu.com/search?q=OS线程&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A27964865})，和POSIX里的thread差不多，真正干活的人

G: 协程单元

```text
G - goroutine. 一个待执行的任务
M - worker thread, or machine. 内核线程, 工作线程, 操作系统线程, 有内核调度和管理.
P - processor, a resource that is required to execute Go code.
     M must have an associated P to execute Go code[...].
     处理器, 运行在线程上的本地调度器.
```

goroutine和调度器都依赖于内核线程.

Go调度器: 分配准备就绪的Goroutine到工作线程中.

P: 处理器, 执行Go代码所需要的资源,

>  P:代表调度的上下文，可以把它看做一个局部的调度器，使go代码在一个线程上跑，它是实现从N:1到N:M映射的关键。

M的数量一般为CPU的核心数, M需要与P关联使用以执行Go代码. M可能被阻塞, 或者在一个系统调用中不保含或没有关联的P.

工作线程暂停或解除暂停. 我们需要在 保持足够多的工作线程以利用可用的并行硬件资源 和 暂停过多(excessive)
的运行中的工作线程以节省CPU资源和电量 中保持平衡.

这并不容易, 有以下两个原因:

1, 调度器状态是刻意分布式的(P工作队列)

2, 为了理想的线程管理我们需要知道接下来的线程(当一个新的G准备好时, 不应该暂停工作线程).

**饥饿状态**: 活跃的, 旋转的线程, 等待分配任务, 发现可执行的线程后立即执行线程.

当前的办法:

```text
We unpark an additional thread when we ready a goroutine if (1) there is an
idle P and there are no "spinning" worker threads.
```

如果有一个闲置的P且没有一个旋转的(spinning, 活跃)工作线程(重复检查状态, 没有挂起, 活跃的)时, 在准备好一个G后启动一个附加的线程

<u>如果存在闲置的P并且没有活跃的M时, 当一个G准备好后启动一个附加的线程M.</u>

```text
A worker thread is considered spinning if it is out of local work and did not find work in global run queue/netpoller; the spinning state is denoted in m.spinning and in sched.nmspinning.
```

如果任务完成后且没有发现全局运行队列/轮询, M进入活跃状态(饥饿状态).这个饥饿状态表示为 `m.spinning`.

```text
Threads unparked this way are also considered spinning; we don't do goroutine
handoff so such threads are out of work initially.

Spinning threads do some
spinning looking for work in per-P run queues before parking. 
```

启动的线程也被考虑为饥饿状态的, 不执行(传递)G时的M最初是没有工作的.

活跃的M在暂停前轮询执行P运行队列中的任务.

```text
If a spinning thread finds work it takes itself out of the spinning state and proceeds to execution. If it does not find work it takes itself out of the spinning state
and then parks.
```

如果饥饿线程M发现任务时, M进入非饥饿状态并继续任务. 如果没有发现任务, M进入饥饿状态并暂停.

```text
If there is at least one spinning thread (sched.nmspinning>1), we don't unpark new threads when readying goroutines. To compensate for that, if the last spinning thread finds work and stops spinning, it must unpark a new spinning thread.

This approach smooths out unjustified spikes of thread unparking, but at the same time guarantees eventual maximal CPU parallelism utilization.
```

如果有至少一个饥饿线程M, 在出现准备就绪的G时不需要启动新的(用户态)线程M. 作为补偿, 如果最后一个饥饿线程开始工作并停止饥饿时,
需要启动一个新的饥饿线程.

这种方法不但消除了不合理的线程M断开, 并且同时保证了最大化CPU资源利用.

```text
The main implementation complication is that we need to be very careful during
spinning->non-spinning thread transition. This transition can race with submission of a new goroutine, and either one part or another needs to unpark another worker thread. If they both fail to do that, we can end up with semi-persistent CPU underutilization. The general pattern for goroutine readying is: submit a goroutine to local work queue, #StoreLoad-style memory barrier, check sched.nmspinning.

The general pattern for spinning->non-spinning transition is: decrement nmspinning, #StoreLoad-style memory barrier, check all per-P work queues for new work.

Note that all this complexity does not apply to global run queue as we are not sloppy about thread unparking when submitting to global queue. Also see comments
for nmspinning manipulation.
```

主要的实现复杂性是, 在线程M从饥饿状态到非饥饿状态转变(transition)时我们需要非常小心. 这种转变可能在提交一个新的协程时产生竞争,
其中一个部分或另一个部分需要启动一个新的工作线程M. 如果两者都失败了, 可能会出现半持续性的CPU利用率不足.
当一个G准备就绪时的通常做法是: 提交一个G到局部任务队列——存储加载式的内存屏障，检查sched_nmspinning, 检查M的饥饿状态.

线程M的饥饿状态转移时的通常做法是:  饥饿状态减量/缩减——存储加载式的内存屏障, 检查M的饥饿状态.

需要注意的是, 这种复杂性不适用于全局运行队列. 当提交全局运行队列时, 我们不会轻易的启动线程.

也可以参考饥饿状态操作的注解.

### G-Goroutine

Goroutine 是 Go 语言调度器中待执行的任务，它在运行时调度器中的地位与线程在操作系统中差不多，但是它占用了更小的内存空间，也降低了上下文切换的开销。

Goroutine 只存在于 Go 语言的运行时，它是 Go 语言在用户态提供的线程，作为一种粒度更细的资源调度单元，如果使用得当能够在高并发的场景下更高效地利用机器的
CPU。

### M-Machine

Go 语言并发模型中的 M 是操作系统线程。调度器最多可以创建 10000
个线程，但是其中大多数的线程都不会执行用户代码（可能陷入系统调用），最多只会有 `GOMAXPROCS` 个活跃线程能够正常运行。

### P-Processor

调度器中的处理器 P 是线程和 Goroutine 的中间层，它能提供线程需要的上下文环境，也会负责调度线程上的等待队列，通过处理器 P
的调度，每一个内核线程都能够执行多个 Goroutine，它能在 Goroutine 进行一些 I/O 操作时及时让出计算资源，提高线程的利用率。

因为调度器在启动时就会创建 `GOMAXPROCS` 个处理器，所以 Go 语言程序的处理器数量一定会等于 `GOMAXPROCS`，这些处理器会绑定到不同的内核线程上。

### 调度器启动

1. 当 `next` 为 `true` 时，将 Goroutine 设置到处理器的 `runnext` 作为下一个处理器执行的任务；
2. 当 `next` 为 `false` 并且本地运行队列还有剩余空间时，将 Goroutine 加入处理器持有的本地运行队列；
3. 当处理器的本地运行队列已经没有剩余空间时就会把本地队列中的一部分 Goroutine 和待加入的 Goroutine
   通过 [`runtime.runqputslow`](https://draveness.me/golang/tree/runtime.runqputslow) 添加到调度器持有的全局运行队列上；

处理器本地的运行队列是一个使用数组构成的环形链表，它最多可以存储 256 个待执行任务。

![golang-runnable-queue](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193643.png)

简单总结一下，Go 语言有两个运行队列，其中一个是处理器本地的运行队列，另一个是调度器持有的全局运行队列，只有在本地运行队列没有剩余空间时才会使用全局队列。

### 调度循环

[`runtime.schedule`](https://draveness.me/golang/tree/runtime.schedule) 函数会从下面几个地方查找待执行的 Goroutine：

1. 为了保证公平，当全局运行队列中有待执行的 Goroutine 时，通过 `schedtick` 保证有一定几率会从全局的运行队列中查找对应的
   Goroutine；
2. 从处理器本地的运行队列中查找待执行的 Goroutine；
3. 如果前两种方法都没有找到
   Goroutine，会通过 [`runtime.findrunnable`](https://draveness.me/golang/tree/runtime.findrunnable) 进行阻塞地查找
   Goroutine；

[`runtime.findrunnable`](https://draveness.me/golang/tree/runtime.findrunnable) 的实现非常复杂，这个 300
多行的函数通过以下的过程获取可运行的 Goroutine：

1. 从本地运行队列、全局运行队列中查找；
2. 从网络轮询器中查找是否有 Goroutine 等待运行；
3. 通过 [`runtime.runqsteal`](https://draveness.me/golang/tree/runtime.runqsteal) 尝试从其他随机的处理器中窃取待运行的
   Goroutine，该函数还可能窃取处理器的计时器；

因为函数的实现过于复杂，上述的执行过程是经过简化的，总而言之，当前函数一定会返回一个可执行的 Goroutine，如果当前不存在就会阻塞等待。

### 触发调度

# Go标准库

> 转移到 [Go标准库](Go标准库.md)

> 

# 核心知识

- goroutine
- channel
- mutex
- syncmap
- gin
- grpc
- 并发编程
- 分布式架构

# 《Go程序设计语言》读书笔记

> 与其他编程语言一样, Go语言中的大程序都从小的基本组件构建而来: 变量存储值; 简单表达式通过加和减等操作合并成大的;
> 基本类型通过数组和结构体进行聚合; 表达式通过if和for等控制语句来决定执行顺序; 语句被组织成函数用于隔离和复用;
> 函数被组织成源文件和包.

## 程序结构-Program Structure

> program structure
>
> the basic structural elements of a Go Program.

### 名称-Names

> variables -> aggregates -> expressions -> statements -> functions -> source files -> packages.
>
> 元素命名, 命名规则



The names of Go functions, variables, constants, types, statement labels, and packages follow a simple rule: a name
begins with a letter (that is, anything that Unicode deems a letter) or an underscore and may have any number of
additional letters, digits, and underscores. Case mat- ters: heapSort and Heapsort are different names.

Go的 **关键字(keywords)** 不能用作名称:

```markdown
			                 25 keywords of Go

break:用于控制流
case: 用于控制流
chan: 通道声明
const: 常量声明
continue: 用于控制流

default: 用于控制流
defer:  // 推延
else: if/for子句
fallthrough:
for: for语句

func: 函数声明
go: 例程声明
goto:
if: if声明
import: 导入声明

interface: 接口声明
map:
package: 包声明
range: 迭代
return: 函数返回

select: select语句
struct: 结构体声明
switch: switch语句
type: 类型声明
var: 变量声明

```

以下的 **预声明(predeclared)** 的常量、类型和函数 虽然不是预留的, 可以在声明中使用它们, 但是重声明有发生冲突的风险:

```go

// 常量 constants

true false iota nil

// 类型 types
int int8 int16 int32 int64
uint uint8 uint16 uint32 uint64
float32 float64 complex128 complex64
bool byte rune string error

// 函数 functions
make len cap new append copy close delete 
complex real imag
panic recover

```

如果一个实体在函数中声明, 它只在函数 **局部(local)** 有效. 如果声明在函数外, 它将对包里面的所有源文件可见.

实体第一个字母的大小写决定其可见性是否跨包. 如果名称已大写字母开头, 它是 **导出(exported)** 的, 意味着它对保外是可见和可访问的,
可以被自己包之外的其他程序所引用, 如 `fmt.Printf`. 包名本身总是由小写字母组成.

名称的长度使没有限制的, Go的编程风格倾向于使用短名称.

通常, 名称的作用域越大, 就使用越长且更有意义的名称.

风格上Go 程序员更喜欢采用 "**驼峰式(camel case)**" 的风格——更喜欢使用大写字母而不是下划线,
比如: `QuoteRuneToASCII`, `parseRequestLine`, 遇到缩写类型时则是 `htmlEscape`, `escapeHTML`, `HTMLEscape`,
但不会是`escapeHtml`.

### 声明-Declarations

> 变量声明, 常量声明, 类型声明, 函数声明.
>
> 局部变量声明, 全局变量声明, 多变量声明

声明给一个程序实体命名, 并且设定其部分或全部属性.

Go程序存储在一个或多个以 `.go` 为后缀的文件里. 每个文件以package声明开头

```go
var a int  // 仅声明, 默认值为零值

var a int = 10  

var a = 100 // 可用 但不推荐
// 多变量声明

var a, b int = 10, 20
var (
	a int = 100
  b string = "abcd"
)

a := 10 // 推荐, 只能使用在函数体内 
```

### 变量-Variables

```go
// var 变量名 类型 = 表达式
var name type = expression
```

类型和表达式部分可以省略一个，但是不能都省略。

如果类型省略，它的类型将由初始化表达式决定；如果表达式省略，其初始值对应于类型的零值--对于数字是`0`，对于布尔值是`false`
，对于字符串是`""`，对于接口和引用类型（slice，指针pointer、map、通道channel、函数function）是`nil`
，对于一个像数组或结构体这样的复合类型，零值是其所有元素或成员的零值。
零值机制(zero-value mechanism)保障所有的变量是良好定义的，

Go里面不存在未初始化变量. 这种机制简化了代码, 并且不需要额外工作就能感知边界条件的行为.

输出空字符串, 而不是一些错误或不可预料的行为. Go程序员经常花费精力来使复杂类型的零值有意义, 以便变量一开始就处于一个可用状态.

初始值设定可以是字面量值或者任意的表达式. 包级别的初始化在main开始之前进行, 局部变量初始化和声明一样在函数执行期间进行.

变量可以通过调用返回多个值的函数进行初始化:

```go
var f, err = os.Open(name)  // os.Open返回一个文件和一个错误
```

#### 短变量声明

**短变量声明(short variable declaration)**: 用于声明和初始化局部变量. name的类型由 `expression` 的类型决定.

局部变量的声明和初始化中主要使用短变量声明. var 声明通常是为那些跟初始化表达式类型不一致的局部变量保留的,
或者用于后面才对变量赋值以及变量初始值不重要的情况.

<u>短变量声明无法应用于全局变量声明, 只能应用于函数体内</u>

```go
name := expression
i := 100
var boiling float64 = 100 // 一个float64类型的变量
var names []string	
i, j := 0, 1  // 变量声明和初始化
i, j = j, i  // 变量赋值
```

`:=`表示声明, `=`表示赋值. 一个多变量的声明不能和 **多重赋值** 搞混, 后者将右边的值赋给左边的对应变量

**一个容易被忽略但重要的地方是: 短变量声明不需要声明所有在左边的变量.**

<u>允许一部分变量是赋值,而不是声明, 但是至少声明一个新变量</u>

如果一些变量在同一个词法块中声明, name对于那些变量, 短声明的行为等于赋值.

短变量声明最少声明一个新变量, 否则代码编译无法通过.

```go
in, err := os.Open(infile)
out, err:= os.Create(outfile)  // 此次err相当于赋值
in, err:= os.Create(outfile)  // 因为in, err均已存在, 所以编译会报错
```

只有在同一个词法块中以及存在变量的情况下, 短声明的行为才和赋值操作一样, 外层的声明将被忽略

#### 指针

**指针(pointer)**: 存储变量的地址(address).

变量是存储值的地方, 变量是存储值的一块内存地址.

`A variable is a piece of storage containing a value.`

借助声明创建的变量, 变量使用名字来区分. 例如x,但是许多变量仅仅使用像x[i]或者x.f这样的表达式来区分. 所有这些表达式读取一个变量的值,
除非它们出现在赋值操作符的左边, 这个时候是给变量赋值.

**指针** 的值是一个变量的地址. (地址是指内存地址用十六进制表示)

`A pointer value is the address of a variable. `

一个指针指示值所保存的位置. 不是所有的值都有地址, 但是所有变量都有值.

<u>使用指针可以在无须知道变量名字的情况下, 间接(indirectly)读取或更新变量的值.</u>

```markdown
If a variable is declared var x int, the expression &x (‘‘address of x’’) yields a pointer to an integer variable, that
is, a value of type *int, which is pronounced ‘‘pointer to int.’’ If this value is called p, we say ‘‘p points to x,’’
or equivalently ‘‘p contains the address of x.’’ The vari- able to which p points is written *p. The expression *p
yields the value of that variable, an int, but since *p denotes a variable, it may also appear on the left-hand side of
an assignment, in which case the assignment updates the variable.
```

如果一个变量声明为 `var x int`, 表达式`&x`(x的地址)获取一个指向整型变量的指针, 该指针的类型是整型指针(*int). 如果值叫作p,
我们说p指向x, 或者p包含x的地址. p指向的变量写成`*p`. 表达式`*p`获取变量x的值, 一个整型, 因为`*p`代表一个变量,
所以它也可以出现在赋值操作符的左边, 用于更新变量到的值.

```go
x := 1		// 声明整型变量
p := &x		// 声明指针 p是整型指针, p指向x
var p *int = &x  // 声明指针变量
fmt.Println(*p)		// "1"
fmt.Println(p)
*p = 2 // 修改指针指向变量的指 x = 2, 该语句修改了变量x的值
fmt.Println(x)
fmt.Println(p)

var x int  // x是整型变量
p := &x  // p是整型指针, p指向x, &x表达式的值是指针, *p表达式的值是一个整型变量
```

```markdown
Each component of a variable of aggregate type—a field of a struct or an element of an array— is also a variable and
thus has an address too.
Variables are sometimes described as addressable values. Expressions that denote variables are the only expressions to
which the address-of operator & may be applied.
The zero value for a pointer of any type is nil. The test p != nil is true if p points to a vari- able. Pointers are
comparable; two pointers are equal if and only if they point to the same variable or both are nil.
```

每一个聚合类型的组成(结构体的成员或数组中的元素)都是变量, 所以也有一个地址.

变量有时候使用一个地址化的值. 代表变量的表达式, 是唯一可以应用 **取地址** 操作符`&`的表达式.

指针类型的零值是`nil`.

函数返回局部变量的地址是非常安全. 每次调用后返回的局部变量值是不同的.

```go
var p = f()
func f() *int {
  v := 1
  return &v
}
fmt.Println(f() == f())  // "false"
```

因为一个指针包含变量的地址, 所以传递一个指针参数给函数, 能够让函数更新间接传递的变量值.

每次使用变量的地址或复制一个指针, 我们就创建了新的 **别名(aliases)** 或者方式来标记同一个变量.
指针别名允许我们用不同的变量的名字来访问变量. (使用*p来访问变量v, *p是b的别名). 但是这也是双刃剑, 为了找到所用访问变量的语句,
需要知道所有的别名. 不仅指针产生别名, 当复制其他引用类型(slice, map, channel, 甚至包含引用类型的struct, array,
interface)

*函数参数传递是复制一份数据到函数作用域中, 参数为指针时可以修改函数域外部的值, 在Python中, 全局变量往往是不可变*

```go
func incr(p *int) int {  // *int 整型指针类型
  *p++ 
  return *p
}

v := 1
incr(&v)  // 副作用: side effect
fmt.Println(incr(&v)
```

```go
v1, v2 := 1, 1

fmt.Println("指针传递v1:=1, 传递的是变量", PointerParam(&v1), v1)  // 2, 2
fmt.Println("变量传递v2:=1, 传递的是值", NormalParam(v2), v2)  // 2, 1


func PointerParam(p *int) int {
	*p++
	return *p
}

func NormalParam(p int) int {
	p++
	return p
}

```

#### new函数

> 内建函数

表达式`new(T)`创建一个未命名的T类型变量, 初始化为T类型的零值, 并返回其地址(地址类型为*T)

```go
p := new(int)  // p的类型是 *int 即指针, 指向未命名的int变量
fmt.Println(*p)  // "0"
*p = 2  // 把未命名的int设置为2
fmt.Println(*p)  // 2
```

使用new创建的变量和取其地址的普通局部变量没有什么不同, 只是不需要引入(和声明)一个虚拟的名字, 通过new(T)就可以直接在表达式中使用.

每一次调用new返回一个具有唯一地址的不同变量:

```go
p := new(int)
q := new(int)

fmt.Println( p == q)  // "false"
```

new 是一个预声明的函数, 不是一个关键字, 可以对其进行重声明.

#### 变量的生命周期

生命周期指在程序执行过程中变量存在的时间段.

包级别变量的生命周期是整个程序的执行时间.

局部变量有一个动态的生命周期: 每次执行声明语句时创建一个新的实体, 变量抑制生存到它变得不可访问(unreachable),
这时它占用的存储空间被回收.

<u>函数的参数和返回值也是局部变量,</u> 它们在函数被调用的时候创建.

在没有指针或其他方式的引用可以找到变量时, 变量变得不可访问, 这时它占用的存储空间被回收.

那么垃圾回收器如何知道一个变量是否应该被回收? 其基本思路是每一个包级别变量, 以及每一个当前执行函数的局部变量,
可以作为追溯该变量的路径的源头, 通过指针和其他方式的引用可以找到变量. 如果变量路径不存在(没有被引用), 那么变量变得不可访问,
因此它不会影响任何其他的计算过程.

变量的生命周期是通过它是否可以到达(访问)来确定的, 局部变量可在包含它的循环的一次迭代之外继续存活. 即使包含它的循环已经返回,
它的存在还可能延续.

编译器可以选择使用堆或栈上的空间来分配.

逃逸(escape): 包级别的变量被外部所引用或访问

垃圾回收对于写出正确的程序有巨大的帮助, 但是免不了考虑内存的负担. 不需要显式分配和释放内存, 但是变量的生命周期是写出高效程序所必须清楚的.

在长生命周期对象中保持短生命周期对象不必要的指针, 特别是在全局变量中, 会阻止垃圾会是怄气回收短生命周期里的对象空间.

### 赋值-Assignments

赋值语句用来更新变量所指的值.

```go
x = 1  // 有名称的变量
*p = true  // 间接变量
person.name = "bob"  // 结构体成员
count[x] = count[x] * scale  // 数组或slice或map的元素
count[x] *= scale
v++  // v = v + 1
v--
```

#### 多重赋值(tuple assignment)

多个变量被一次赋值.

```go
x, y = y, x
a[i], a[j] = a[j], a[i]
f, err = os.Open("foo.txt")  // 函数调用返回两个值
v, ok := m[key]		// map查询
v, ok := x.(T)		// 类型断言
v, ok <- ch			// 通道接收
_, err := os.Copy(dst, src)		// 丢弃字节个数
```

#### 可赋值性assignability

显式的(explicit), 隐式的(implicit)

不管是隐式赋值还是显式赋值, 如果变量和值得类型相同, 则该赋值语句就是合法的(legal).

可赋值性根据类型不同有着不同的规则, 我们将会引入新类型的时候解释相应的规则. 一般的规则是:

<u>类型必须精准匹配, nil可以被赋值给任何接口变量或引用类型</u>

两个值使用 `==` 和 `!=` 进行比较与可赋值性相关

可比较性(comparability)

### 类型声明-Type Declarations

变量或表达式的类型定义了这些值应有的特性, 例如大小(多少位或多少个元素等), 在内部如何表达, 可以对其进行何种操作. (
具有的操作属性或操作方法)

任何程序中, 都有一些变量使用相同的表示方式, 但有着不同的含义. int 可能是 索引, 时间戳, 月份或者文件描述.

因此对于基础类型可以就进一步的类型标识

`type` 声明定义一个新的 **命名类型(named type)** , 它和某个已有类型使用同样的 **底层类型(underlying type)**.
命名类型提供了一种方式来区分底层类型的不同或不兼容使用.

类型的声明通常出现在包级别, 这里命名的类型在整个包中可见, 如果名字是导出的(以大写字母开头的名称), 其他的包也可以访问它

命名类型的底层类型决定了它的结构和表达式, 以及它支持的内部操作集合, 这些内部操作与直接使用底层类型的情况相同.

```go
type name underlying-type		// 通用类型声明格式
// type 类型名 底层类型
type Celsius float64
type Fahrenheit float64
func CToF(c Celsius) Fahrenheit {return Fahrenheit(c*9/5 + 32)
```

类型**转换(conversation)** Fahrenheit(t) 表示类型转换而不是函数调用. 它们不改变值和表达方式(representation), 但是改变了显示意义

类型转换不改变类型值的表现形式(represention), 仅改变类型. 如果x对于类型T是可赋值的, 类型转换也是允许的, 但是通常是不必要的.

<u> 不同的命名类型没办法比较, 编辑器或编译器会报错</u>

```go
func (c Celsius) String() string {return fmt.Sprintf("%g℃", c)}  // 声明一个接口?
```

类型转换不改变该类型的值, 只改变该其类型

### 包和文件-Packages and Files

<u>在Go语言中包的作用和其他语言中的库或模块作用类似, 用于支持模块化、封装、编译隔离和重用.</u>

一个包的源代码存在一个或多个以.go结尾的文件中, 它所在的目录名的尾部就是导入路径.

每一个包给它的声明提供独立的命名空间(name space)

*每个包都有/都是一个独立的命名空间*

包让我们可以通过控制变量在包外面的可见性(或导出情况)来隐藏信息.

<u>如果包级别的名称(类型, 常量)在包的一个文件中声明, 就像所有的源代码在同一个文件中一样,
它们对于同一个包中的其他文件可见.</u>

*同一个包中, 存在多个.go文件是, 一个.go文件可以直接访问零一个.go文件的声明, 不需要特别的表示,
就像是访问当前文件中的声明一样*

package声明前面紧挨着的文档注释对整个包进行描述. 习惯性, 应该在开头用一句话对包进行总结性的描述. 每一个包里只有一个文件应该包含该包的文档注释.
*对与包路径名称相同的go文件进行注释.* 扩展的文档注释通常放在一个文件中, 按惯例名字叫作`doc.go`

#### 导入-import

> 修饰(qualify)标识符
>
>   标识:identify

在Go程序中, 每一个包通过称为 **导入路径**(import path) 的唯一字符串来标识

当使用go工具是, 一个导入路径标注(denote)一个目录, 目录中包含构成包的一个或多个Go源文件.

除了导入路径之外, 每个包还有一个包名, 它以 短名字(short name) 的形式出现在包的声明中. 按约定, 包名匹配导入路径的最后一段,
这样可以方便的预测"gopl.io/ch2/tempconv"包的的包名是tempconv.

*要使用一个包必须先导入*

导入声明可以给导入的包绑定一个短名字, 用来在整个人间中引用包的内容. 对于"gopl.io/ch2/tempconv"中的声明, 可以使用 **修饰标识符
**(qualified identifier) 来引入, 比如 tempconv.CToF. 导入路径的默认短名字是包名,
也可以为导入声明设定一个可选的名字来避免冲突(conflict).

```go
// 导入标准库
import "fmt"
//导入本地库, 相对路径导入


//防止冲突, 为包设置短名字(short name)别名
mrand "math/rand"
// 导入网络库


```

如果导入一个没有被引用的包, 编译时会触发错误. 这个检查帮助消除程序中不必要的依赖. 当引用包的代码被注释掉时,
相关的导入声明也应该被注释掉.

#### 包初始化

包的初始化从包级别变量开始, 这些变量按照声明顺序初始化, 在依赖已解析完毕的情况下, 根据依赖顺序进行.

```go
var a = b + c  // 最后把a初始化为3
var b = f()  // 通过调用f接着把b初始化为2
var c = 1  // 首先初始化为1 
func f() int { return c + 1}
```

如果包由多个.go文件组成, 初始化按照编译器收到文件的顺序进行: go工具会在调用编译器前将.go文件进行排序.

对于包级别的每一个变量, 生命周期从其值被初始化开始, 但是对于其他一些变量, 比如数据表(tables of data),
初始化表达式不是简单的设置它的初始值. 这种情况下, init函数的机制会比较简单. 任何文件可以包含任意数量的声明如下的函数:

```go
func init() {/* ... */}
```

这个init函数不能被调用和被引用, 另一方面, 它也是普通的函数. 在每一个文件里, 当程序启动的时候, init函数按照它们声明的顺序自动执行.

包的初始化按照在程序中导入的顺序来进行, 依赖顺序优先, 每次初始化一个包. 如果包p导入了包q, 可以确保q在p之前已完全初始化.
初始化过程是自下向上的, main包最后初始化. 这种方式下, 在程序的main函数开始执行前, 所有的包已经初始化完毕.

### 作用域-Scope

声明将名字和程序实体关联起来, 如一个函数或一个变量.

*程序实体, 声明语句中被声明的名字, 这个标识符/对象就是程序实体*

声明的作用域(scope)是指用到声明时所声明名字的源代码片段.

不要将作用域(scop)和生命周期(lifetime)混淆.

声明的 **作用域** 是声明在程序文本中出现的区域, 它是一个编译时(compile-time)属性.

变量的 **生命周期** 是变量在程序执行期间能被程序的其他部分所引用的起止时间, 它是一个运行时(run-time)属性.

**语法块**(syntactic block) 是由大括号围起来的一个语句序列, 比如一个循环体或函数体. <u>
在语法块内部声明的变量对块外部不可见.</u> 块把声明包起来, 并且决定了它的可见性. 我们可以把 **块**(blocks)
的概念推广到其他没有显式包含在大括号中的声明代码, 将其统称为 **词法块**(lexical blocks). 包含了全部源代码的词法块叫作 *
*全局块**(universe block). *内置声明其实是隐式的包含在所有用户编写的源代码中的* 每一个包, 每一个文件,
每一个for、if和switch语句, 以及switch和select语句中的每一个条件, 都是写在一个词法块里的. 当然显式地卸载大括号语法里的代码块也算是一个词法块.

<u>一个声明的词法块决定声明的作用域大小.</u> 像int、len和true等内置类型、函数或常量在全局块中声明,
这些标识符并且对整个程序可见. <u>在包级别的声明(任何函数外的声明), 可以被同一个包里的任何文件引用.</u> 导入的包时文件级别的,
所以它们可以在同一个文件内引用, 但是不能再没有另一个import的前提下被同一个包中其他文件中的东西引用. 许多声明时局部的,
仅可在同一个函数中或者仅仅是函数的一部分所引用.

<u>控制流标签(break, continue, goto)的作用域是整个外层的函数(entire enclosing function).</u>

一个程序可以包含多个同名的声明, 前提是他们在不同的词法块中. 应该尽量避免重声明, 重声明所涉及的作用域越广, 越可能影响其他的代码.

当编译器(compiler)遇到一个名字的引用时, 将从最内层的封闭词法块到全局块寻找其声明. 如果没有找到, 它会报"undeclared name"
错误; 如果内层和外层块都存在这个声明, 内层的将先被找到. 这种情况下, 内层声明会覆盖外层声明, 使得外层声明变得不可访问.

在函数里, 词法块可能嵌套很深, 所以一个局部变量声明可能覆盖另一个. 很多词法块使用if语句和for循环这类控制流结构构建:

```go
// 这种编写风格虽然不会报错 是正确的代码, 但是并不推荐
func main() {
    x := "hello!"
    for i := 0; i<len(x); i++ {
        x := x[i]
        if x != '!' {
            x := x + 'A' - 'a'
            fmt.Printf("%c", x)	// "HELLO"
        }
    }
}

```

for循环创建了两个词法块: 一个循环体本身的显式块, 以及一个隐式块,这个隐式块的作用域包括条件, 后置预语句以及for循环体本身

```go
func main() {
    x := "hello!"
        fmt.Println("函数体中的x: ", x)
        for _, x := range x {
            fmt.Println("for的隐式块中的x: ", string(x))
            x := x + 'A' - 'a'
            fmt.Println("for的隐式块中的x: ", string(x))
        }
}
```

if和switch也会创建隐式的词法块:

```go
	if x := f(); x == 0 {
		fmt.Println(x)
	} else if y := g(x); x == y {
		fmt.Println(x, y)
	} else {
		fmt.Println(x, y)
	}

	fmt.Println(x, y)  // 外部不可见
```

<u>在包级别, 声明的顺序和它们的作用域没关系, 所以一个声明可以引用它自己或者跟在它后面的其他声明,
使我们可以声明递归或相互递归的类型和函数.</u> 如果常量或变量声明引用自己, 则编译会报错.

```go
if f, err := os.Open(filename); err != nil {
    return err
} else {
    // f与err在这里可见
    f.Stat()
    f.Close()
}
```

<u>短变量声明依赖一个明确的作用域.</u> *短变量声明不是赋值, 相同的变量在函数中短声明是并不会初始化包变量*

```go
var cwd string  // 包变量

func init() {
	cwd, err := os.Getwd()  // 短声明cwd变量
	if err != nil {
		log.Fatal("%v", err)
	}
	log.Println(cwd)
}
func main(){
    fmt.Println(cwd)  // 会输出为空, cwd不会正确的初始化
}
```

正确写法:

```go
var cwd string

func init() {
	var err error
	cwd, err = os.Getwd()
	if err != nil {
		log.Fatal("%v", err)
	}
	log.Println(cwd)
}
```

现在我们已经看到 包, 文件, 声明以及语句是如何来构成程序的(程序的结构). 接下来的两章将要讨论数据的结构

## 基础数据类型-Basic Data Types

> basic data types
> bit
> word
> data

<u>在Go中, 每种数据类型都有自己特定的大小, 对正负号的支持也各异.</u>

计算机的底层全是位(bit), 而实际操作则是基于大小固定的单元中的数值, 称为字(word).

Go的数据类型分四大类: 基础类型(base type), 聚合类型(aggregate type), 引用类型(reference type)和接口类型(interface type)

基础类型 包括 数字, 字符串, 布尔型
聚合类型 包括 数组，结构体，通过组合各种简单类型得到更复杂的数据类型
**引用类型** 包括 指针，slice， map，function，channel。引用类型的特点是间接指向程序变量或状态，于是操作所引用数据的效果就会遍及改数据的全部引用

### 整数-Integers

> unsigned integers 无符号整型, uint

int, int8, int16, int32, int64

uint, uint8, uint16, uint32, uint64

int, 和uint等于该平台上运算效率最高的值, 一般32位或64 位

`rune`类型时`int32`的同义词, `uint8`是`byte`的同义词

uintptr 其大小不明确但足以保存指针, 很少用, 仅仅用于底层编程.

int和int32是不同类型

<u>相较于uint一般习惯上更长用int</u>

<u>通常将某种类型的值转换为另一种, 需要显示转换</u>

算术运算符和逻辑运算符需要操作数的类型必须相同

```go
// Go的二元操作符, 按优先级降序排序
// 二元运算符分五大优先级, 并满足左结合律
// 算术运算符
* / % << >> & &^			// 一 最高优先级

+ - | ^						// 二

// 比较运算符
== != < <= > >=		// 三

// 逻辑运算符
&&		// 四

||  // 五 最低优先级

```

二元运算符分为五大优先级. 同级别的运算满足 **左结合律**, 为求清晰, 可能需要圆括号, 或为使表达式内的运算符按指定次序计算,
如 mask & (1 << 28)

上述列表中前两行的运算符都有对应的 赋值运算符 assignment operator(如 + 的赋值运算符是 +=), 用于简写赋值语句.

算术运算符(+ - * /)可应用于整数, 浮点数和复数, 而取模运算符%仅能用于整数.

取模运算符%的行为因编程语言而异. 在Go语言中, <u>取模余数的正负号总是与被除数一致</u>, 也就是(-5%3 == -5%-3 为true),
二者的值都是-2.

除法运算的行为取决于操作数是否都为整型, 整数相除, 商会舍弃小数部分(*应该就是整除的意思*), 所以会有(5.0/4.0 = 1.25), 而(
5/4 = 1 )

不论是有符合数还是无符号数, 若表示算术运算结果所需的位超出该类型的范围, 就成为 **溢出**(overflow). 溢出的高位部分会无提示的丢弃.

假如原本的计算结果是有符号类型, 且最左侧位是1, 则会形成负值, 以int8为例

<u>比较表达式本身的类型是布尔型</u>. *表达式的结果*

*比较运算符两边的操作数必须是相同类型的*

实际上, 全部基本类型的值(布尔值, 数值, 字符串)都可以比较, 这意味着两个相同类型的值可用==和!=运算符比较. 整数, 浮点数,
和字符串还能根据比较运算符排序. 许多其他类型的值是不可比较的, 也无法排序.

一元运算符 一元取正`+` 和 一元取负`-`

对于整数, `+x`是`0+x`的简写, 而`-x`是`0-x`的简写. 对于浮点数和复数, +x就是x, -x为x的负数

**位运算符**

| 符号 |  说明  | 备注                                  |
|:--:|:----:|-------------------------------------|
| &  | 按位与  | 当两边的位的值均为1时, 结果的对应位为1, 否则为0         |
| \| | 按位或  | 当两边的位的值至少有一位为1时, 结果的对应位为1, 否则为0     |
| ^  | 按位异或 | 当两边的位的值互斥时, 结果的对应位为1, 否则为0          |
| &^ | 按位清除 | 根据右边的操作数的位是否为1 若为1则清楚, 否则等于左操作数对应的值 |
| << |  左移  |                                     |
| >> |  右移  |                                     |
| ^  | 按位取反 | 当用作一元运算符时                           |

位运算在集合中的运用举例:

```go
var x uint8 = 1<<1 | 1<<5
var y uint8 = 1<<1 | 1<<2

fmt.Printf("%08b\n", x)    // 00100010, 集合{1, 5}
fmt.Printf("%08b\n", y)    // 00000110, 集合{1, 2}
fmt.Printf("%08b\n", x&y)  // 00000010, 交集{1}
fmt.Printf("%08b\n", x|y)  // 00100110, 并集{1, 2, 5}
fmt.Printf("%08b\n", x^y)  // 00100100, 对称差{2, 5}  异或集
fmt.Printf("%08b\n", x&^y) // 00100000, 差集{5}

for i := uint(0); i < 8; i++ {
    if x&(1<<i) != 0 {
        fmt.Println(i) // 1, 5
    }
}
fmt.Printf("%08b\n", x<<1) // 01000100  {2, 6}
fmt.Printf("%08b\n", x>>1) // 00010001  {0, 4}
fmt.Printf("%08b\n", x)    // 00100010  {1, 5}
fmt.Printf("%08b\n", ^x)   // 11011101  取反

```

在移位运算x<<n和x>>n中, 而且n必须为无符号型; 操作数x可以是有符号型也可以是无符号型. 算术上, 左移运算x<<n等价于$x×2^n$;
而右移运算x>>n等价于$x÷2^n$, 向下取整.

左移以0填补右边空位, 无符号整数右移同样以0填补左边空位, 但有符合数的右移操作是按照符号位的值填补空位. 因此, 请注意,
如果将整数以位模式处理, 须使用无符号整型.

尽管Go具备无符号整型数和相关算术运算, 也尽管某些零值不可能为负, 但是我们往往还采用有符号整型数, 如数组的长度(
即便直观上明显更应该选用uint)

```go
medals := []string{"gold", "silver", "brone"}
for i := len(medals)-1; i>=0;i-- {
    fmt.Println(medals[i])
}  // i 最终会等于 -1 如果i是无符号整数, 循环语句会不断循环i会变成最大整数
```

无符号整数往往只用于位运算符和特定算术运算, 如实现位集, 解析二进制格式的文件, 或散列或加密. 一般而言, 无符号整数极少用于表示非负值.

<u>通常, 将某种类型的值转换成另一种, 需要显示转换.</u> 对于算术和逻辑(不包含一位)二元运算符, 其操作数的类型必须相同.
虽然这有时会导致表达式相对荣昌, 但是一整类型错误得以避免, 程序也更容易理解

```go
var apples int32 = 1
var oranges int64 = 2
var compote int = apples + oranges	 // 类型不一致, 造成编译错误

var f = int(apples) + int(oranges)   // 进行显式地类型转换
```

<u>对于每种类型T, 若允许转换, 操作T(x)会将x的值转换成类型T.</u> 很多整型-整型转换不会引起值得变化, 仅告知编译器如何解读该值.
不过缩减大小的整型转换, 以及整型与浮点型的相互转换, 可能会改变值或损失精度.

浮点数转换成整型, 会舍弃小数部分, 趋零截尾(正值向下取整, 负值向上取整).

不论有无大小和符号限制, 源码中的整数都能写成常见的**十进制**数; 也能写成**八进制**数, 以0开头, 如0666; 还能写成**十六进制
**数, 以0x或0X开头, 如0xdeadbeef. 十六进制的数字或字母大小写均可. *Go语言二进制没办法直接表示, 输出则用%b*

当前, 八进制数似乎只有一种用途——表示POSIX文件系统的权限——而十六进制数广泛用于强调其位模式, 而非数值大小.

如下例所示, 如果使用fmt包输出数字, 我们可以用谓词%d,%o和%x指定进位制基数和输出格式

```go
o := 06666
fmt.Printf("%d %[1]o %#[1]o\n", o)
// 3510 6666 06666
x := int64(0xdeadbeef)
fmt.Printf("%d %[1]x %#[1]x %#[1]X\n", x)
// 3735928559 deadbeef 0xdeadbeef 0XDEADBEEF
```

注意fmt的两个技巧. 通常Printf的格式化字符串含有多个%谓词, 这要求提供相同数目的操作数, 而%后的[1]告知Printf重复使用第一个操作数.
%o, %x之前的#告知Printf输出相应的前缀0, 0x.

源码中, 文字符号(rune literal)的形式是字符写在一对单引号. 文字符号的转义规则有: %d输出码值, %c输出文字符号,
%q输出带单引号的文字符号格式.

```go
	ascii := 'a'
	unicode := '国'
	newline := '\n'

	fmt.Printf("%d %[1]c %[1]q\n", ascii)
	fmt.Printf("%d %[1]c %[1]q\n", unicode)
	fmt.Printf("%d %[1]c %[1]q\n", newline)

```

### 浮点数-(Floating-Point Numbers)

Go具有两种大小的浮点数: `float32`和`float64`.

十进制下, float32的有效数字大约是6位, float64的有效数字大约是15位. 绝大多数情况下都应该优先使用`float64`. 引文除非格外小心,
否则float32的运算会迅速积累误差. 另外, float32能精确表示的正整数范围有限

小数点前的数字可以省略(.707), 后面的也可以省去(1.)

NaN(Not a Number): 数学上无意义的运算结果(0/0或Sqrt(-1)), 任何涉及NaN的操作（例如NaN/10）都会返回NaN。NaN与任何值都不相等，包括NaN本身。即使如NaN/10这样的操作，结果也会是NaN。

```go
var z float64
fmt.Println(z, -z, 1/z, -1/z, z/z)
// 0 -0 +Inf -Inf NaN


```

math.IsNaN函数判断其参数是否是非数值, math.NaN函数则返回非数值(NaN). 在数字运算中, 我们倾向于将NaN当做信号值(sentinel
value), 但直接判断具体的计算结果是否为NaN可能导致潜在错误, 因为NaN的比较总不成立:

```go
nan := math.NaN()
fmt.Println(nan == nan, nan < nan, nan > nan)
// false false false
```

一个函数的返回值是浮点型且它有可能出错, 那么最好单独报错, 如下:

```go
func compute() (value float64, ok bool) {
	// ...
	if failed {
		return 0, false
	}
	return result, true
}
```

### 复数-Complex Numbers

> 暂时不考虑学习

### 布尔值-Booleans

bool型的值或布尔值(boolean)只有两种可能: 真(true)和假(false). if和for语句里的条件就是布尔值, 比较操作符也能得出布尔值结果.
一元操作符(!)表示逻辑取反, 因此!true就是false, 或者可以说(!true==false)==true. 比如考虑到代码风格, 布尔表达式x==true相对冗长,
我们总是简化为x.

布尔值可以由运算符`&&`(AND)以及`||`(OR)组合运算, 这可能引起短路行为: 如果运算符左边的操作数已经能直接确定总体结果,
则右边的操作数不会计算在内.

&&较||优先级更高, 两者非同级运算符, 表达式总是优先进行&&运算.

布尔值无法隐式转换成数值(0, 1), 反之也不行.

### 字符串-Strings

字符串是不可变的(immutable)字节序列, 它可以包含任意数据, 包括0值字节, 但主要是人类可读的文本. 习惯上,
文本字符串被都城按UTF-8编码的Unicode码点(文字符号)序列.

Go中内置的len函数返回字符串的字节数(并非文字符号的数目), 下标访问操作s[i]则取得第i个字符, 其中, 0≤i<len(s).

字符串的第i个字节不一定就是第i个字符, 因为非ASCII字符的UTF-8码点需要两个字节或多个字节.

子串生成操作s[i:j]将产生一个新字符串, 内容取自原字符串的字节. *是字节不是字符,和Python并不一样*

不可变意味着两个字符串能安全地共用同一段底层内存，使得复制任何长度字符串的开销都低廉。类似地，字符串s及其子串（如s［7:
）可以安全地共用数据，因此子串生成操作的开销低廉。这两种情况下都没有分配新内存。图3-4展示了一个字符串及其两个子字符串的内存布局，它们共用底层字节数组。
*切片时并不会新开辟一块内存*

```go
v := "获取字符串的字符长度"
w := []rune(v)
fmt.Println(v, w, len(w))
// 获取字符串的字符长度 [33719 21462 23383 31526 20018 30340 23383 31526 38271 24230] 10
```

字符串可以通过比较运算符做比较, 如==和<; 比较运算符按字节进行, 结果服从本身的字典排序.

尽管肯定可以将新值赋予字符串变量, 但是字符串值无法改变: 字符串值本身所包含的字节序列永不可变. 要在一个字符串后面添加另一个字符串,
可以这样编写代码

```go
s := "left foot"
t := s
s += ", right foot"
s[0] = 'L'  //编译错误, s[0]无法赋值
```

这并不改变s原有的字符串值, 只是将+=语句生成的新字符串赋予s. 同时t仍然持有旧的字符串值.

不可变意味着两个字符串能安全地共用同一段底层内存, 使得赋值任何长度字符串的开销都低廉. 类似地, 字符串s及其子串(如s[7:])
可以安全地共用数据, 因此子串生成操作的开销低廉. 这两种情况下都没有分配新内存.

```go
s := "hello, world!"
hello := s[:5]
world := s[7:]
```

s和它的两个字符串hello和world共享底层内存, hello和world不会分配新的内存.

#### 字符串字面量

字符串的值可以直接写成字符串字面量(string literal), 形式上就是带双引号的字节序列:

`"Hello, 世界!"`

因为Go的源文件总是按UTF-8编码, 并且习惯上Go的字符串也会按UTF-8解读, 所以在源码中我们可以将Unicode码点写入字符串字面量.

```go
// 字符串字面量
// 特殊字符需要用到转义序列
"hello, 世界!"


// 原生字符串字面量
// 转义序列不起作用
`Go is a tool for managing Go source code.
Usage:
		go command [arguments]
...`
```

在带双引号的字符串字面量中, 转义序列以反斜杠(`\`)开始, 可以将任意值得字节插入字符串中.

源码中的字符串也可以包含十六进制或八进制的任意字节. 十六进制的转义字符写成`\xhh`的形式, h是十六进制数字(大小写皆可),
切必须是两位. 八进制的转义字符写成`\ooo`形式, 必须使用三维八进制数字(0~7), 且不能超过`\377`. 这两者都表示单个字节,
内容是给定值.

**原生字符串**字面量的书写形式是\`...\`, 使用反引号而不是双引号. 原生的字符串字面量内, 转义序列不起作用; 实质内容与字面写法严格一致,
包括反斜杠和换行符, 因此, 在程序源码中, 原生的字符串字面量可以展开多行. 唯一的特殊处理是回车符会被删除(换行符会保留),
使得同一字符串在所有平台上的值都相同, 包括习惯在文本文件存入换行符的系统.

正则表达式往往含有大量反斜杠, 可以方便地协程原生字符串字面量. 原生的字面量也适用于HTML模版, JSON字面量, 命令行提示符,
以及需要多行文本表达的场景.

```go
const GoUsage = `Go is a tool for managing Go source code.
Usage:
	go command [arguments]
`
```

#### Unicode

Unicode囊括了世界上所有文书体系的全部字符, 还有重音符和其他变音符, 控制码(如制表符和换行符), 以及许多特有文字,
对他们各自赋予一个Unicode码点的标准数字.

Unicode 字符集在Go语言中的字符(assigns)被称为 文字符号(rune).

#### UTF-8

UTF-8编码方式: UTF-8以字节为单位对Unicode码点作边长编码, 用1-4个字节表示字符.

ASCII字符的编码仅占一个字节, 而其他常用的文书字符的编码知识2或3个字节. 一个文字符号编码的首字节的高位指明了后面还有多少字节.

若最高位为0, 则标示着它是7位的ASCII码, 其**文字符号**(rune)的编码进占1个字节, 这样就与传统的ASCII码一致.

若最高几位是110, 则文字符号的编码占用2个字节, 第二个字节以10开始.

若最高几位是1110, 则文字符号的编码占用3个字节, 第二, 三个字节以10开始.

若最高几位是11110, 则文字符号的编码占用4个字节, 第二,三, 四个字节以10开始.

更长的编码以此类推.

```text
0xxxxxxx                                        文字符号0~127
110xxxxx    10xxxxxx                            128~2047
1110xxxx    10xxxxxx    10xxxxxx
11110xxx    10xxxxxx    10xxxxxx    10xxxxxx
```

<u>变长编码的字符串无法按下标直接访问第n个字符</u>, 然而有失有得, UTF-8换来许多有用的特性.UTF-8编码紧凑, 兼容ASCII码,
并且自同步:最多追溯3个字节就能定位一个字符的起始位置. UTF-8还是前缀编码, 因此它能从左向右解码而不产生歧义, 也无须超前预读.
于是查找文字符号仅需搜索它自身的字节, 不必考虑前文内容. 文字符号的字典自己顺序与Unicode码点顺序一致(UNicode设计如此),
因此按UTF-8编码排序自然就是对文字符号排序. UTF-8编码本身不会嵌入NUL自己(0值), 这便于某些程序语言用NUL标记字符串结尾.

<u>Go的源文件总是以UTF-8编码, 同时, 需要用Go程序操作的文本字符串也优先采用UTF-8编码.</u>

unicode包具备针对单个文字符号的函数, 而unicode/utf8包则提供了按utf-8编码和解码文字符号的函数.

许多Unicode字符难以直接从键盘输入; 有的看起来十分相似几乎无法分辨; 有些甚至不可见. Go语言中,
字符串字面了的转义让我们得以用码点的值来指明Unicode字符. 有两种形式, `\uhhhh`表示16位码点值, `\uhhhhhhhh`表示32位码点值,
其中每个h代表一个十六进制数字; 32位形式的码点值几乎不需要用到.
这两种形式都以UTF-8编码表示出给定的码点.下面几个字符串字面量都表示长度为6字节的相同串:

```go
s1 := "世界"
s2 := "\xe4\xb8\x96\xe7\x95\x8c"  // 以8进制编码字符
s3 := "\u4e16\u754c"
s4 := "\U00004e16\U0000754c"
println(s1, s2, s3, s4)
// 世界 世界 世界 世界

```

当[]rune转换作用域UTF-8编码的字符串时, 返回该字符串的Unicode码点序列

```go
s := "世界和平"
fmt.Printf("% x\n", s) // e4 b8 96 e7 95 8c e5 92 8c e5 b9 b3
// 12字节 每个字节以十六进制数形式输出
r := []rune(s)
fmt.Printf("%x\n", r)        // [4e16 754c 548c 5e73]
// 输出Unicode码点序列
fmt.Println(string(r))       // 世界和平
fmt.Println(string(65))      // A 而不是65
fmt.Println(string(0x4e16))  // 世
fmt.Println(string(1234567)) // 非法符号: � = \uFFFD
```

#### 字符串和字节slice

4个标准包对字符串操作特别重要: bytes, strings, strconv和unicode.

strings包: 用于字符的搜索, 替换, 比较, 修整, 切分和链接.

bytes包: 用于操作字节slice([]byte类型, 其某些属性和字符串相同).

strconv包: 主要用于转换布尔值, 证书, 浮点数为与之对应的字符串形式, 或者把字符串转换为布尔值, 整数, 浮点数,
另外还有为字符串添加/去除引号的函数.

unicode包: 包含判别文字符号值特性的函数, 如IsDigit, IsLetter, IsUpper和IsLower. 每个函数都以单个文字符号值作为其蚕食,
并返回布尔值. 若文字符号值是英文字母, 转换函数如ToUpper/ToLower将其转换成制定的大小写. strings包也有类似地函数,
函数名也是ToUpper/ToLower用于将原字符串的每个字符做制定变换, 生成并返回一个新的字符串.

`[]bytes(s)`操作会分配新的字节数组, 拷贝填入s含有的字节, 并生成一个slice引用, 指向整个数组.

#### 字符串和数字的相互转换

除了字符串, 文字符号和字节之间的转换, 我们常常也需要相互转换数值及其字符串表示形式. 这有strconv包完成

```go
// 字符串和数字相互转换

// 将整数转换成字符串

x := 123
y := fmt.Sprintf("%d", x)
fmt.Println(y, strconv.Itoa(x))  // "123" "123"
fmt.Println(strconv.FormatInt(int64(x), 2))  // "1111011" 
```

fmt.Printf里的谓词%b, %d, %o和%x往往比Format函数方便, 若要包含数字以外的附加信息, 它就尤其用用

```go
s := fmt.Printf("x=%b", x)  // x="1111011" 
```

### 常量

<u>常量是一种表达式, 可以保证在编译在编译阶段就计算出表达式的值, 并不需要等到运行时, 从而使编译器得以知晓其值.</u>
所有常量本质上都属于基本类型: 布尔型, 字符串或数字.

常量的用法和变量相似, 但是其值恒定不变, 以防止程序在运行过程中对其进行修改, 比如圆周率π.

```go
// 声明常量
const pi = 3.1415

// 声明一系列常量
const (
	e = 2.71828
	pi = 3.1415
)

// 数学运算, 逻辑运算后的常量
const timeout = 5 * time.Minute

// 声明具名常量
const time.Duration
const math.Pi



// 常量生成器iota 枚举类型
// iota 从0 开始取值逐项加1
type Weekday int
const (
	Sunday Weekday = iota
  Monday
  Tuesday
  Wednesday
  THursday
  Friday
  Saturday
)


```

对于常量操作数, 所有数学运算, 逻辑运算和比较运算的结果依然是常量, 常量的类型转换结果和某些内置函数的返回值(如 len, cap,
real, unsafe.Sizeof), 同样是常量.

*常量的好处是在编译时就可以得到其值, 因而减少了运行时的开销*

因为编译器知晓其值, 常量表达式可以出现在设计类型的声明中, 具体而言就是数组类型的长度:

```go
const IPv4len = 4

func parseIPv4(s string) IP {
	var p [IPv4len]byte
	// ..
}
```

常量声明可以同时指定类型和值, 如果没有显示指定类型, 则类型根据右边的表达式推断

```go
const noDelay time.Duration = 0
const timeout = 5 * time.Minute
fmt.Printf("%T %[1]v\n", noDelay)     //time.Duration 0s
fmt.Printf("%T %[1]v\n", timeout)     // time.Duration 5m0s
fmt.Printf("%T %[1]v\n", time.Minute) //time.Duration 1m0s
```

若同时声明一组常量, 除了第一项之外, 其他项在等号右侧的表达式都可以省略, 这意味着会复用前面一项的表达式及其类型.

```go
// 声明相同值的常量 不推荐
const (
    a = 1
    b
    c = 2
    d
)  // b=a=1, d=c=2
fmt.Println(a, b, c, d)  // 1 1 2 2

```

#### 常量生成器iota

常量的声明可以使用常量生成器iota, 它创建一系列相关之, 而不是诸葛值显式写出. 常量声明中, iota从0开始取值, 逐项加1.

以time包中的Weekday具名类型为例, 这种类型通常称为枚举类型(enumeration, 或缩写成enum)

```go
// A Weekday specifies a day of the week (Sunday = 0, ...).
type Weekday int

const (
	Sunday Weekday = iota
	Monday
	Tuesday
	Wednesday
	Thursday
	Friday
	Saturday
)
// 0, 1, 2, 3, 4, 5, 6 均为Weekday类型
```

更复杂的iota生成常量方式:

```go

type Flags uint
const (
    FlagUp Flags = 1 << iota
    FlagBroadcast
    FlagLoopback
    FlagPointToPoint
    FlagMulticast
    _  // 甚至可以对某一个值进行舍弃, 舍弃零值等
)
// 1, 2, 4, 8, 16
```

#### 无类型常量

Go 的常量自有特别之处。虽然常量可以是任何基本数据类型，如int或float64，也包括具名的基本类型(如 time.Duration)，<u>
但是许多常量并不从属某一具体类型。</u>
编译器将这些从属类型待定的常量表示成某些值，这些值比基本类型的数字精度更高，且算术精度高于原生的机器精度。可以认为它们的精度至少达到256位。从属类型待定的常量共有6种，分别是
无类型布尔、无类型整数、 无类型文宇符号、无类型浮点数、无类型复数、无类型字符串。

借助推迟确定从属类型，无类型常量不仅能暂时维持更高的精度，与类型己确定的常量相比，它们还能写进更多表达式而无需转换类型。

浮点型常量 math.Pi 可用于任何需要浮点值或复数的地方：

```go
var x float32 = math.Pi

var y float64 = math. Pi

var z complex128 = math.Pi
```

若常量 math.pi一开始就确定从屈于-某具体类型，如f1oat64，就会导致结果的精度下降。另外，假使最终需要f1oat32值或complex128
值，则可能需要转换类型：

```go
const Pi64 float64 = math.Pi

var x float32 = float32 (Pi64)

var y float64 = Pi64

var z complex128 = complex128(Pi64)
```

字面量的类型由语法决定。0, 0.0, 0i和'\u0000'全都表示相同的常量值，但类型相异，分别是：无类型整数、无类型浮点数、无类型复数和无类型文字符号。类似地，true
和

false 是无类型布尔値，而字符串字面量則是无类型字符串。

根据除法运算中操作数的类型，除法运算的结果可能是整型或浮点型。所以，常量除法

表达式中，操作数选择不同的字面写法会影响结果：

```go
var f float64 = 212
fmt.Println((f - 32) * 5 / 9) //"100;(f - 32) * 5 的果是 float64型
fmt.Println(5 / 9 * (f - 32)) // "0"; 5/9的结果是无类型整数，0
fmt.Println(5.0 / 9.0 * (f - 32)) // "10"; 5.0/9.0 的告果是元类型浮点数

```

只有常量才可以是无类型的。若将无类型常量声明为变量（如下面的第一条语句所示），或在类型明确的变量赋值的右方出现无类型常量（如下面的其他三条语句所示），则常量会被隐式转换成该变量的类型。

```go
var f float64 = 3 + 0i // 无类型复数 -> float64
f = 2  //无类型整数 -> float64
f = 1e123  //无类型浮点数 -> float64
f='a'  //无类型-> float64
```

上述语句与下面的语句等价：

```go
var f float64 = float64(3 + 01)
f = float64(2)
f = float64(1e123)
f = float64('a')
```

不论隐式或显式，常量从一种类型转换成另一种，都要求目标类型能够表示原值。

变量声明(包括短变量声明)中, 加入没有显式指定类型, 无类型常量会隐式转换成变量的默认类型.

注意各类型的不对称性：无类型整数可以转换成int, 其大小不确定,
但无类型浮点数和无类型复数被转换成大小明确的float64和complex128。Go语言中，只有大小不明确的int类型，却不存在大小不确定的float类型和complex类型，原因是，如果浮点型数据的大小不明，就很难写出正确的数值算法。

要将变量转换成不同的类型，我们必须将无类型常量显式转换为期望的类型，或在声明变量时指明想要的类型，如下例所示：

```go
var i = int8(0)

var i int8 = 0
```

在将无类型常量较换为接口值时 （见第7章），这些默认类型就分外重要，因为它们决定了接口值的动态类型。

```go
fmt.Printf("%T\n", 0) // "int"
fmt.Printf("%T\n", 0.0) // "float64"
fmt.Printf("%T\n", 0i) // "complex128"
fmt.Printf("%T\n", '\000') // "int32" (rune)

```

至此，我们己经概述了 Go 的基本数据类型。下一步就是要说明如何将它们构建成为更大的聚合体，如数组和结构体，更进一步组成数据结构以解决实际的编程问题。

## 复合数据类型-Composite Types

> composite types

复合数据类型是由基本数据类型以各种方式组合而构成的, 就像分子由原子构成一样.

数组和结构体都是**聚合**(aggregate)类型, 它们的值是由内存中的一组变量构成.数组的元素具有相同的类型, 而结构体中的元素数据类型则可以不同.
数组和结构体的长度都是固定的.

slice和map都是动态数据结构, 它们的长度在元素添加到结构中时可以动态增长.

### 数组-Arrays

数组是具有固定长度且拥有零个或者多个相同数据类型元素的序列. 由于数组的长度固定, 所以在Go里面很少直接使用.
slice的长度可以增长和缩短, 在很多场合下使用得更多.

数组组中的每个元素是通过索引来访问的, 索引从0到数组长度减1. Go内置的函数len可以返回数组中的元素个数.

```go
// 声明方式
var a [arrayLength]Type
var a [3]int  // [0, 0, 0]
fmt.Println(a[0])
fmt.Println(a[len(a)-1]) 

// 使用数组字面量
var q [3]int = [3]int{1, 2, 3}
var r [3]int = [3]int{1, 2}
fmt.Println(r[2])  // "0"

q := [...]int{1, 2, 3}  // 根据初始化数组元素个数决定数组的长度


// 根据索引创建值
type Currency int
	const (
		USD Currency = iota
		EUR
		GBP
		RMB
	)
symbol := [...]string{USD: "$", EUR: "€", GBP:"£", RMB: "¥"}
r := [...]int{99:3}  // 使用索引的方式赋值
fmt.Println(symbol[RMB], reflect.TypeOf(symbol))
```

默认情况下, 一个新数组中的元素初始值为元素类型的零值, 对于数字来说, 就是0. 也可以使用**数组字面量**(array literal)
根据一组值来初始化一个数组.

```go
var q [3]int = [3]int{1, 2, 3}
var r [3]int = [3]int{1, 2}
fmt.Println(r[2])  // "0"
```

在数组字面量中, 如果省略号"..."出现在数组长度的位置, 那么数组的长度由初始化数组的元素个数决定.
以上数组q的定义可以简化为:

```go
q := [...]int{1, 2, 3}  // 根据初始化数组元素个数决定数组的长度
fmt.Printf("%T\n", q)  // "[3]int"
```

数组的长度是数组类型的一部分, 所以[3]int和[4]int是两种不同的数组类型. 数组的长度必须是常量表达式, 也就是说,
这个表达式的值在程序编译时就可以确定.

数组, slice, map和结构体的字面语法都是相似的. 上面的例子是按顺序给出一组值; 也可以通过索引给相应的索引位置指定值

```go
type Currency int

const (
	USD Currency = iota
	EUR
	GBP
	RMB
)
	
symbol := [...]string{USD: "$", EUR: "€", GBP: "£", RMB: "¥"}
fmt.Printf("%T, %[1]v\n", symbol)  // [4]string, [$ € £ ¥]
```

通过索引的方式提供值时, 可以按照任意顺序出现, 并且有的时候还可以省略.

```go
r := [...]string{2: "99", 3: "10", 40: "测试"}
q := [...]int{99:-1}  // 除了最后一个元素为-1外, 其他全省略默认为零值
fmt.Println(r) // [  99 10                                     测试]
```

如果一个数组的元素类型是可比较的, 那么这个数组也是可以比较的, 这样我们就可以直接使用==操作操作符来比较两个数组,
比较的结果是两边元素的值是否完全相同. 使用!=来比较两个数组是否不同.

<u>不同数组类型是无法比较的, 不同元素长度的数组的类型是不同的</u>

```go
a := [2]int{1, 2}
b := [...]int{1, 2}
c := [...]int{1, 3}
fmt.Println(a == b, a == c, b == c)  //true false false
d := [3]int{1, 2}
fmt.Println(a == d) // mismatched types [2]int and [3]int
```

<u>当调用一个函数的时候, 每个传入的参数都会创建一个副本, 然后赋值给对应的函数变量, 所以函数接受的是一个副本,
而不是原始的参数.</u> 这种传递方式传递大的数组会很低效, 并且不会影响原始数组.这种情况下, Go把数组和其他类型都看成值传递.
而在其他的语言中, 数组是隐式地使用**引用**(reference)传递.

*数组可以通过下标的方式修改其值*

```go
func zero(ptr *[32]byte) {
    for i := range ptr {
        ptr[i] = 0
    }
}

func zero(ptr *[32]byte) {
    *ptr = [32]byte{}
}
```

使用数组指针是高效的, 同时允许被调函数修改调用方数组中的元素, 但是因为数组长度是固定的, 所以数组本身是不可变的.
由于数组的长度不可变的特性, 除了在特殊情况下之外, 我们很少使用数组. 我们可以使用数组作为函数的参数或结果, 但是更多的情况下,
我们使用slice.

### 切片-Slices

> *切片本身并不存储实际数据信息, 而是间接引用了底层数组的内容*

slice表示一个拥有相同类型元素的可变长度的序列; slice通常写成`[]T`, 其中元素的类型都是T它看上像没有长度的数组类型.

slice和数组是紧密关联的. slice是一种轻量级的数据结构, 可以用来访问数组的部分或者全部的元素, 而这个数组称为slice的*
*底层数组(underlying array)**.

slice有三个属性: 指针、长度(len:length)和容量(cap:capacity).

指针: 指针指向数组的第一个可以从slice中访问的元素,

长度: slice中的元素个数.

容量: 从slice的起始元素到底层数组的最后一个元素间的个数.

一个底层数组可以对应多个slice, 这些slice可以引用数组的任何位置, 彼此之间的元素还可以重叠.

指针指向数组的第一个可以从slice中访问的元素, 这个元素并一定是数组的第一个元素.

内置函数len和cap用来返回slice的长度和容量.

```go

months := [...]string{
		1:  "January",
		2:  "February",
		3:  "March",
		4:  "April",
		5:  "May",
		6:  "June",
		7:  "July",
		8:  "August",
		9:  "September",
		10: "October",
		11: "November",
		12: "December",
	}  // 底层数组
Q2 := months[4:7] // 新的slice
summer := months[6:9]  // 新的slice

fmt.Printf("%T %[1]v\n", Q2)    //[]string [April May June]
fmt.Println(summer, len(summer), cap(summer))  // [June July August] 3 7
fmt.Println(summer[:], summer[1])  // summer[:]=summer[0:len(summer)]
fmt.Println(summer[4])                // index超过了len(summer) = 3, 编译报错
newSummer := summer[:7]               // 创建新的slice时, 不能超过cap(summer)
fmt.Println(summer[:7], newSummer[4]) // [June July August September October November December] October
	
```

如果slice的引用超过了被引用对象的容量, 即cap(s), 那么会导致程序宕机; 但是如果slice的引用超出了被引用对象的长度, 即len(
s), 那么最终slice会比原slice长.

*不同于python的切片的是, Go中不能使用负数引用, 而应该是cap(s)-i:cap(s)的方式进行切片*

```go
// 基本语法
var s []T

months[i:j] 
months[1:]
month[:]  // 引用数组month的所有元素


// 数组与切片的区别
a := [...]int{0, 1, 2, 3, 4, 5}  // 数组, 固定长度
s := []int{0, 1, 2, 3, 4, 5}  // slice 指向数组的slice

s == nil  // 这是被允许的比较操作, 检查s 是否为空

```

slice操作符s[i:j] (0≤i≤j≤cap(s))创建了一个新的slice, 这个新的slice引用了序列

<u>因为slice包含了指向数组元素的指针, 所以将一个slice传递给函数的时候, 可以在函数内部修改底层数组的元素.</u>

换而言之, 创建一份数组的slice等于为数组创建了一个别名.

slice特性: 无法像数组一样做比较. 不能用 `==` , 进行比较时一般需要自己编写函数.

slice比较不可以直接使用==操作符做比较. 其一, slice的元素是非直接的, 有可能slice可以包含它自身. 其二, slice的元素不是直接的,
如果底层数组元素改变, 同一个slice在不同的时间会拥有不同的元素.

由于散列表(如map类型)仅对元素的键做浅拷贝, 这就要求散列表里面, 键在散列表的整个生命周期内必须保持不变. 因为slice需要深度比较,
所以就不能用slice作为map的键.

对于引用类型, 例如指针和通道, 操作符==检查的是引用相等性, 即它们是否指向相同的元素.

slice类型的零值是nil. 值为nil的slice没有对应的底层数组, 值为nil的slice长度和容量都是零, 但是也有非nil的slice的长度和容量是零,
例如[]int{}或maike([]int, 3)[3:].

对于任何类型, 如果他们的值可以是nil, 那么这个类型的nil值可以使用一种**转换表达式**(conversion expression), 例如 []int(
nil)

*转换表达式 其实就是类型转换 T(p), 将 p 转换成 p 类型*

```go
var s []int    // len(s) == 0, s == nil
s = nil        // len(s) == 0, s == nil
s = []int(nil) // len(s) == 0, s == nil
s = []int{}    // len(s) == 0, s != nil
```

所以, 如果想检查一个slice是否是空, 那么使用`len(s)==0`, 而不是 `s==nil`, 在`s!=nil`的情况下, slice页有可能是空.

内置函数make可以创建一个具有制定元素类型, 长度和容量的slice. 其中容量参数可以省略, 这种情况下, slice的长度和容量相等.

```go
// 使用make函数创建slice
// 其实make创建了一个无名数组, 并返回了它的一个slice;
make([]T, len)  // 长度和容量相等
make([]T, len, cap)





```

深入研究下, 其实make创建了一个无名数组并返回了它的一个slice; 这个数组仅可以通过这个slice来访问.

`make([]T, len)`所返回的slice引用了整个数组, `make([]T, len, cap)`所返回的slice之引用了数组的前len个元素, 但是它的容量是数组的长度,
这位未来的slice元素留出空间.

#### append函数

```go
var runes []rune
for _, r := range "Hello, 世界!" {
    runes = append(runes, r)
}
fmt.Printf("%T %[1]q\n", runes)  
// []int32 ['H' 'e' 'l' 'l' 'o' ',' ' ' '世' '界' '!']


runes2 := []rune("hello, 世界!")  // 这种方式也可
```

```go
func appendInt(x []int, y int) []int {
	var z []int
	zlen := len(x) + 1
	if zlen <= cap(x) {
		z = x[:zlen]
	} else {
		zcap := zlen
		if zcap < 2*len(x) {
			zcap = 2 * len(x)
		}
		z = make([]int, zlen, zcap)
		copy(z, x)
	}
	z[len(x)] = y
	return z
}
```

内置的 append 函数使用了比 appendInt 更复杂的增长策略. 通常情况下, 我们不清楚一次append 调用会不会导致一次心的内存分配,
所以我们不能假设原始的 slice 用 append 后的结果指向同一个底层数组, 也无法证明它们就指向不同的底层数值. 同样, 我们也无法假设旧
slice 上对元素的操作会不会影响新的 slice 元素. 所以通常我们将 append 的调用结果再次复制给传入的 append 函数的 slice:

`runes = append(runes, r)`

每次slice容量改变都意味着一次底层数组重新分配和元素复制.

不仅仅是在调用 append 函数的情况下需要更新 slice 变量. 另外, 对于任何函数, 只要有可能改变 slice 的长度或者容量, 抑或是是的
slice 指向不同的底层数组都需要更新 slice 变量.

为了正确地使用 slice, 必须记住, 虽然底层数组的元素是间接引用的, 但是 slice 的指针, 长度和容量不是. 要更新一个 slice 的指针,
长度或容量必须使用如上所示的显式赋值.

从这个角度看, slice 并不是纯引用类型, 而是像下面这种聚合类型:

```go
type IntSlice struct {
  ptr	*int
  len, cap int
}
```

函数参数声明中的省略号`...`表示该函数可以接口**可变长度参数列表**(variadic).

*可变长度参数列表实际上是一个slice*

```go
// 修改后的 appendInt
func appendInt(x []int, y ...int) []int {
	var z []int
	zlen := len(x) + len(y)
	fmt.Printf("...类型: %T %[1]v\n", y)
	if zlen <= cap(x) {
		z = x[:zlen]
	} else {
		zcap := zlen
		if zcap < 2*len(x) {
			zcap = 2 * len(x)
		}
		z = make([]int, zlen, zcap)
		copy(z[len(x):], y)
	}
	return z
}
```

#### slice就地修改

> In-place slice techniques

*其实就是根据索引修改原有 slice 并使用重新赋值来更高 slice 的长度和容量*

```go
func main() {
	s := []string{"abcd", "", "ef"}
	s = noempty(s)
	fmt.Printf("%v", s)  // [abcd ef]
}

func noempty(strings []string) []string {
	i := 0
	for _, s := range strings {
		if s != "" {
			strings[i] = s
			i++
		}
	}
	return strings[:i]
}
```

slice 可以用来实现 **栈**(stack)

```go
stack = append(stack, v) //push v

top := stack[len(stack)-1]  // 栈顶

stack = stack[:len(stack)-1] // pop
```

移除 slice 中间的元素, 并保留剩余元素的顺序, 可以使用函数 copy 来将高位索引的元素向前移动来覆盖被移除元素所在位置:

```go
// 前面的值不变, 只需考虑被修改部分的值, 并返回新的 slice
func remove(slice []int, i int) []int {
	copy(slice[i:], slice[i+1:])
	
	return slice[:len(slice)-1]
```

如果不需要维持 slice 中剩余元素的顺序, 可以简单的将 slice 的最后一个元素赋值给被移除元素所在的索引位置:

```go
// 如果不考虑顺序, 直接将末尾的值插入到要被移除的元素上, 并返回新的 slice
func remove(slice []int, i int) []int {
	slice[i] = slice[len(slice)-1]
	return slice[:len(slice)-1]
}
```

### 字典-Maps

> 字典, 映射

散列表(Hash)是设计精妙、用途广泛的数据结构之一. 它是一个拥有键值对元素的无序集合. 集合中健的值是唯一的,
键对应的值可以通过键来获取、更新或移除. 无论这个散列表有多大, 这些操作基本上是通过常量时间的键比较就可以完成.

在Go语言中, map是散列表的引用, map的类型是`map[K]V`. map中所有的键都拥有相同的数据类型, 同时所有的值也都拥有相同的数据类型,
但键的类型和值得类型不一定相同.

键的类型 K, 必须是可以通过操作符==来进行比较的数据类型, 所以 map 可以检测某一个键是否存在.

<u>虽然浮点型是可以比较的, 但是比较浮点数的相等性是不明智的选择.</u>

```go
// 使用make创建map
args := make(map[string]int)

// 使用map字面量创建map
args := map[string]int{
  "a": 1, 
  "b": 2, 
}

// 等价于
args := make(map[string]int)
args["a"] = 1
args["b"] = 2

// 移除map的元素
delete(args, "a")  
```

使用delete删除map的元素时, 即使键不存在, 操作也是安全的.

map使用给定的键来查找元素, 如果对应的元素不存在, 就返回值类型的零值.

```go
ages["bob"] = ages["bob"] + 1	// bob 键并不存在, 该运算依然工作
ages["bob"] += 1				// 效果相同
ages["bob"] ++					// 效果相同

_ = &ages["bob"]				// 编译错误
```

<u>map的元素不是一个变量, 不能获取他的地址</u>

*map的值可以是变量, 应该可以获取其地址*

我们无法获取元素的地址的一个原因是map的增长可能导致已有元素被重新散列到新的存储位置, 这样就可能使得获取的地址无效.

map中元素的迭代顺序是不固定的, 不同的实现方法会使用不同的散列算法, 得到不同的元素顺序. 实践中, 我们认为这种顺序是随机的,
从一个元素开始到最后一个元素, 依次执行.

这个设计是有意为之的, 这样可以使得程序在不同的散列算法实现下变得健壮. 如果需要按照某种顺序来遍历 map 中的元素,
我们必须显式地来给键排序.

因为我们一开始就知道 slice names 的长度, 所以在声明 slice 时使用 make 直接制定一个 slice 的容量会更加高效.

```go
// 遍历map 元素的顺序不固定
for key, value := range args {
  fmt.Println(key, value)
}

// 按顺序排序map元素的方
// 使用数组来排序map的键, 然后通过数组中的键来获取值.
import "sort"

var names string
names := make([]string, 0,len(args))  // 这种方式更高效
for name := range args {
  names := append(names, name)
}
sort.Strings(names)
for _, name := range names {
  fmt.Println(name, args[name])
}

arg, ok := args["a"]
```

map类型的零值是nil, 也就是说, 没有引用任何**散列表**(hash table).

大多数的map操作都可以安全地在map的零值nil上执行, 包括查找元素, 删除元素, 获取map元素个数(len), 执行range循环,
因为这和空map的行为一致.

<u>但是向零值map中设置元素会导致错误, 引发宕机(panic), 设置元素之前必须初始化map.</u>

```go
var ages map[string]int
fmt.Println(ages == nil)  // "true"
fmt.Println(len(ages) == 0)  // "true"
ages["jack"] = 21 // 宕机(panic): 为零值map中的项赋值
```

通过下标的方式访问map中的元素总会有值. 如果键在map中, 返回键在map中的值, 如果不再map中则返回map值类型的零值. 很多情况下,
这个没有问题, 但是有时候你需要知道一个元素是否在map中. *某个元素的值可能恰好是零值, 这样不能证明该元素是否存在*

正确判断键是否存在的做法是:

```go

age, ok := ages["bob"]
if !ok{/* "bob"不是字典中的键, age == 0 */}


//推荐写法
if age, ok := ages["bob"]; !ok {/* ... */}
```

通过这种下标方式访问map中的元素输出两个值, 第二个值是布尔值, 用来报告元素是否存在. 这个布尔变量一般叫作ok,
尤其是它立即用在if条件判断中的时候. ok

和slice一样, map不可比较, 唯一合法的比较就是和nil比较.

为了判断两个map是否拥有相同的键和值, 必须写一个循环:

Go没有提供**集合类型**(set type), 但是既然map的键都是唯一的, 就可以用map

<u>map的值类型本身可以是复合数据类型</u>, 如map或slice.

### 结构体-Structs

> 结构体是一种聚合数据类型, 成员描述了该数据类型所具有的属性
>
>   结构体的用法, 应用场景: 声明一个新的数据类型.

<u>结构体的作用是存储数据到内存,声明的结构体决定了该类型的存储方式</u>

结构体是将零个或多个任意类型的命名变量组合在一起的聚合数据类型.

每个变量都叫作结构体的**成员**(field).

结构体的每个成员变量(fileds)必须是唯一的.

<u>结构体成员可以是任何类型, 接口, 方法</u>

```go
// 结构体声明
type Employee struct {
  ID		int
  Name, Address	string  // 相同且连续的成员变量可以的写法
  DoB			time.Time
  Position		string
  Salary		int
  ManagerID		int
}

var demo Employee

demo.ID = 12345
fmt.Println(demo, reflect.TypeOf(demo))
pointer := &demo.ID
*pointer = 99
fmt.Println(demo.ID)

var employeeOfTheMonth *Employee = &demo
fmt.Println(employeeOfTheMonth.ID)  // 通过指正访问结构体的成员变量
struct{}  //空结构体
```

结构体的每一个成员都通过点号方式来访问. 就像demo.Name, demo.DoB这样.

demo是一个变量, 它的所有成员也都是变量, 因此可以给结构体的成员赋值:`demo.Salary -= 5000`.

或者获取成员变量的地址, 然后通过指针来访问

```go
position := &demo.Position
*postion = "Senior" + *postion
```

点号同样可以用在结构体指针上:

```go
var employeeOfTheMonth *Employee = &demo
employeeOfTheMonth.Postion += " (proactive team player)"
(*employeeOfTheMonth).Postion += " (proactive team player)" 
// 二者等价
```

成员变量的顺序对于结构体同一性很重要. 在组合成员变量(Name, Address)时一般按照具体相关性来.

聚合类型(结构体, 数组)不可以包含类型自己. 但是可以包含该类型(S)的指针类型(*S), 这样我们就可以创建一些递归数据结果,
比如链表和树.

结构体零值由结构成员的零值组成.

没有任何成员变量的结构体称为**空结构体(struct{})**. 它没有长度, 也不携带任何信息, 但是有时候会很有用.
有一些Go程序员用它来替代被当作集合使用的map中的布尔值, 来强调只有键是有用的, 但由于这种方式节约的内存很少并且语法复杂,
所以一般尽量避免这样用.

> 空结构体应用场景
>
> 1. as a method receiver type Example struct{};func (e Example) demo (in int) (res int);
> 2. as sentinel value, make(chan, struct{}), 不需要传送数据, 强调功能,占位
> 3. Define a set, 

#### 结构体字面量

结构体类型的值可以通过**结构体字面量**(struct literal)来设置, 即通过设置结构体的成员变量来设置.

方式一, 要求按照正确的顺序, 为每个成员变量指定一个值. 这会给开发和阅读代码的人增加负担, 因为他们必须记住每个成员变量的顺序,
另外这也使得未来结构体成员变量扩充或者重新排列的时候代码维护性差. 所以这种格式一般用在定义结构体类型的包中或者一些有明显成员变量顺序约定的小结构体.
比如image.Point(x, y)或者color.RGBA{red, green, blue, alpha}

```go
// 结构体字面量
type Point struct{X, Y int} 

// 方式一 不常用 初始化结构体字面量
p := Point{1, 2}  // 必须按顺序, 且每给字段都需要指定值
// 上述声明方式的结构体扩展和维护性较差
```

我们用得更多的是第二种格式, 通过指定部分或者全部成员变量的名称和值来初始化结构体变量

如果在这种初始化方式中某个成员变量没有指定, 那么它的值就是该成员变量类型的零值. 因为指定了成员变量的名字, 所以它们的顺序是无所谓的.

```go
// 方式二 通过指定部分或全部成员变量的名称和值来初始化结构体
anim := gif.GIF{LoopCount: nframes}
p := Point{Y:2}  //可以不指定值, 也可以不按顺序指定


type Vertex struct {
	X, Y int
}

var (
	v1 = Vertex{1, 2}  // has type Vertex
	v2 = Vertex{X: 1}  // Y:0 is implicit
	v3 = Vertex{}      // X:0 and Y:0
	p  = &Vertex{1, 2} // has type *Vertex
)
```

这两种初始化方式不可以混合使用, 另外也无法使用第一种初始化方式来绕过<u>不可导出变量无法再其他包中使用</u>的规则.

```go
package p
type  T struct{a, b int}  // a b 不可导出

package q
import q
import "p"
var _ = p.T{a:1, b: 2} // 编译错误, 无法引用a, b
var _ = p.T{1, 2}  // 编译错误, 无法引用a, b
```

结构体类型的值可以作为参数传递给函数或者作为函数的返回值.

```go
func Scale( p Point, factor int) Point {
  return Point(p.X * factor, p.Y * factor)
}
```

出于效率考虑, 大型的结构体通常都使用结构体指针的方式直接传递给函数或者从函数中返回

```go
func Bonus( e *Employee, percent int) int {
  return e.Salary * percent / 100
}
// 传递指针比直接传递值更有效率
```

这种方式在函数需要修改结构体内容的时候也是必需的. <u>在Go这种按值调用的语言中, 调用的函数接收到的是实参的一个副本,
并不是实参的引用.</u>

```go
// 修改被引用的数据的内容
func AwardAnnualRaise(e *Employee) {
    e.Salary = e.Salary * 105 / 100
}
```

由于通常结构体都通过指针的方式使用, 因此可以使用一种简单的方式来创建、初始化一个类型struct类型的变量并获取它的地址:

```go
pp := &Point{1, 2}

// 等价于
pp := new(Point)  // 新建指针
*pp = Point{1, 2}

```

但是&Point{1, 2}这种方式可以直接使用在一个表达式中, 例如函数调用.

#### 结构体比较

<u>如果结构体的所有成员变量都可以比较, 那么这个结构体是可比较的.</u>

两个结构体的比较可以使用`=`或`!=`. 其中`=`操作符按照顺序比较两个结构体变量的成员变量. 因此下面两个输出语句是等价的:

```go

type Point struct {X, Y int}	
p := Point{1, 2}
q := Point{2, 1}
fmt.Println(p.X == q.X && p.Y == q.Y)
fmt.Println(p == q)
```

可比较的结构体类型都可以作为map的键的类型.

```go
// == != 
type address struct {
  hostname string
  port int
}
hits := make(map[address]int)
hits[address{"golang.org", 443}]++
```

#### 结构体嵌套和匿名成员

> struct embedding and anonymous fields

任何命名类型或指向命名类型的指针都可以在结构体中嵌套使用

Go允许我们定义不带名称的结构体成员, 只需要指定类型即可, 这种结构体成员称作 **匿名成员**(anonymous field).
这个结构体成员的类型必须是一个命名类型或指向命名类型的指针.

```go
// 原始做法
type Point struct {X, Y int}
type Circle struct {
	X, Y, Radius int
}
type Wheel struct {
    X, Y, Radius, Spokes int
}

var w Wheel
w.X = 8
w.Y = 8
w.Radius = 5
w.Spokes = 20

```

上述做法的缺点是, 无法意识到结构体之间的相似性和重复性. 所以需要重构相同的部分

不使用嵌套功能的做法如下

```go
package main

type Point struct {
	X, Y int
}

type Circle struct {
	Center Point
	Radius int
}

type Wheel struct {
	Circle Circle
	Spokes int
}

func main() {
	var w Wheel
	w.Circle.Center.X = 8
	w.Circle.Center.Y = 8
	w.Circle.Radius = 5
	w.Spokes = 20
}

```

使用嵌套功能后:

```go
type Point struct {
	X, Y int
}

type Circle struct {
	Point  // 不带名称的结构通类型
	Radius int
}

type Wheel struct {
	Circle
	Spokes int
}

func main() {
	var w Wheel
    
    // 可以直接访问需要的变量, 而不需要逐层访问
	w.X = 8  // 等价于 w.Circle.Center.X = 8
	w.Y = 8  // 等价于 w.Circle.Center.Y = 8
	w.Radius = 5  // 等价于 w.Circle.Radius = 5
	w.Spokes = 20
}

```

Go允许我们定义不带名称的结构体成员, 只需要指定类型即可, 这种结构体成员称作 **匿名成员**(anonymous field).
这个结构体成员的类型必须是一个命名类型或指向命名类型的指针.

正因为有了这种结构体嵌套功能, 我们才能直接访问到我们需要的变量而不是指定一大串中间变量. 上面的注释里面的方式也是正确的.
当我们访问最终需要的变量的时候可以省略中间所有的匿名成员.

遗憾的是, 结构体字面量并没有什么快捷方式来初始化结构体, 所以下面的方式是无法通过编译的

```go
w = Wheel{8, 8, 5, 20}  // 编译错误, 位置成员变量
w = Wheel{X:8, Y: 8, Radius: 5, Spokes: 20}  // 编译错误, 位置成员变量
```

结构体字面量必须遵循形状类型的定义, 所以我们使用下面两种方法来初始化, 这两种方式即时等价的:

```go
w = Wheel{Circle{Point{8, 8}, 5}, 20}
w = Wheel{
    Circle: Circle{
        Point: Point{X:8, Y:8}
        Radius: 5,
    },
    Spokes: 20,  // 注意尾部逗号是必须的(Radius后面的逗号也是一样) 
}
// 当} 不换行写时逗号可以省略, 换行写了就必须要使用逗号

fmt.Printf("%#v\n", w)
// Wheel{Circle:main.Circle{Point:main.Point{X:8, Y:8}, Radius:5}, Spokes:20}
fmt.Printf("%+v\n", w)
// {Circle:{Point:{X:8 Y:8} Radius:5} Spokes:20}
w.X = 25
fmt.Printf("%#v\n", w)
// Wheel{Circle:main.Circle{Point:main.Point{X:25, Y:8}, Radius:5}, Spokes:20}
```

注意使用副词#如何使得Printf的格式化符号%v以类似Go语法的方式输出对象, 这个方式里面包含了成员变量的名字

```text
%v	the value in a default format
	when printing structs, the plus flag (%+v) adds field names
%#v	a Go-syntax representation of the value
%T	a Go-syntax representation of the type of the value
%%	a literal percent sign; consumes no value
```

因为“匿名成员”拥有隐式的名字，所以你不能在一个结构体里面定义两个相同类型的匿名成员，否则会引起冲突。由于匿名成员的名字是由它们的类型决定的，因此它们的可导出性也是由它们的类型决定的。在上面的例子中，
Point和Circle这两个匿名成员是可导出的。即使这两个结构体是不可导出的（point和circle），我们仍然可以使用快捷方式:`w.x=8//等价于w.circle.point.x =8`
但是注释中那种显式指定中间匿名成员的方式在声明circle和point的包之外是不允许的，因为它们是不可导出的。

到目前为止，我们所看到关于结构体嵌套的使用，仅仅是关于点号访问匿名成员内部变量的语法糖。后面我们将了解到匿名成员不一定是结构体类型，任何佥名类型或者指向命名类型的指针都可以。不过话说回来，嵌套一个没有子成员的类型有什么用呢？

以快捷方式访问匿名成员的内部变量同样适用于访问匿名成员的内部方法。因此，外围的结构体类型获取的不仅是匿名成员的内部变量，还有相关的方法。这个机制就是从简单类型对象组合成复杂的复合类型的主要方式。

<u>在Go中, 组合(composition)是面向对象编程方式的核心.</u> 详情参考Methods >> Composed Methods

### JSON

JavaScript对象表示法(JavaScript Object Notation, JSON)是一种发送和接收格式化信息的标准.

Go 通过标准库encoding/json, encoding/xml, encodingasn1和其他的库对这些格式的编码和解码提供了非常好的支持, 这些库都拥有相同的API.

JSON是JavaScript值的Unicode编码, 这些值包括字符串, 数字, 布尔值, 数组和对象. JSON是基本数据类型(string, int, float64...)
和复合数据类型(array, slice, struct, map)的一种高效的, 可读性强的表示方法.

JSON最基本的数字类型是数字(以十进制或者科学计数法表示), 布尔值(true, false)和字符串.

字符串是用双引号括起来的Unicode代码点的序列, 使用反斜杠作为转义字符, 通过和Go类似的方式访问成员. 当然, JSON里面的`\uhhh`
数字转义得到的是UTF-16编码, 而不是Go里面的字符.

这些基础类型可以通过JSON的数组和对象进行组合. JSON的数组是一个有序的元素序列, 每个元素之间用逗号分隔,
两边使用方括号括起来. <u>JSON的数组用来编码Go里面的数组和slice.</u>

JSON的对象是一个从字符串到值的映射, 写成name:value对的序列, 每个元素之间用逗号分隔, 两边使用花括号扩起来.

<u>JSON的对象用来编码Go里面的map(键为字符串类型)和结构体.</u>

```markdown
boolean true
number -273.15
string        "She said \"hello, 世界!\""
array        ["gold", "silver", "bronze"]
object {"year": 1980,
"event": "archery",
"medals": ["gold", "silver", "bronze"]}
```

```go
// gopl.io/ch4/movie

// !+
type Movie struct {
	Title  string
	Year   int  `json:"released"`
	Color  bool `json:"color,omitempty"`
	Actors []string
}

var movies = []Movie{
	{Title: "Casablanca", Year: 1942, Color: false,
		Actors: []string{"Humphrey Bogart", "Ingrid Bergman"}},
	{Title: "Cool Hand Luke", Year: 1967, Color: true,
		Actors: []string{"Paul Newman"}},
	{Title: "Bullitt", Year: 1968, Color: true,
		Actors: []string{"Steve McQueen", "Jacqueline Bisset"}},
	// ...
}

//!-

func main() {
	{
		//!+Marshal
		data, err := json.Marshal(movies)
		if err != nil {
			log.Fatalf("JSON marshaling failed: %s", err)
		}
		fmt.Printf("%s\n", data)
		//!-Marshal
	}
    /*
    //!+output
    [{"Title":"Casablanca","released":1942,"Actors":["Humphrey Bogart","Ingr
    id Bergman"]},{"Title":"Cool Hand Luke","released":1967,"color":true,"Ac
    tors":["Paul Newman"]},{"Title":"Bullitt","released":1968,"color":true,"
    Actors":["Steve McQueen","Jacqueline Bisset"]}]
    //!-output
    */

	{
		//!+MarshalIndent
		data, err := json.MarshalIndent(movies, "", "    ")
		if err != nil {
			log.Fatalf("JSON marshaling failed: %s", err)
		}
		fmt.Printf("%s\n", data)
		//!-MarshalIndent

		//!+Unmarshal
		var titles []struct{ Title string }
		if err := json.Unmarshal(data, &titles); err != nil {
			log.Fatalf("JSON unmarshaling failed: %s", err)
		}
		fmt.Println(titles) // "[{Casablanca} {Cool Hand Luke} {Bullitt}]"
		//!-Unmarshal
	}
}
```

marshal使用Go结构体成员的名称作为JSON对象里面字段的名称. 只有可导出的成员可以转换为JSON字段, 所以Go结构体里面的所有成员都应该首字母大写.

结构体成员变量名称通过**成员标签**(field tag)修改. 成员标签定义是结构体成员在编译期间关联的一些元信息

```go
Year   int  `json:"released"`
Color  bool `json:"color,omitempty"`
```

成员标签定义可以是任意字符串, 但是按照习惯, 是由一串由空格分开的标签键值对 key: "value"组成的;因为标签的值使用双引号括起来,
所以一般标签都是原生的字符串字面量. 键json控制包encoding/json的行为, 同样其他的encoding/...包也遵循这个规则.

标签值的第一部分指定了Go结构体成员对应JSON中字段的名字. 成员的标签通常这样使用, 比如`total_count`对应Go里面的TotalCount.
Color的标签还有一个额外的选项`omitempty`, 它表示如果这个成员的值是零值或者位空, 则不输出这个成员到JSON中.

> `omitempty`省略输出某字段, 而不是输出该字段的空值

marshal的逆操作将JSON字符串解码为Go数据结构, 这个过程叫做unmarshal, 这个是由json.Unmarshal实现的. 通过合理地定义Go的数据结构,
我们可以选择将哪部分JSON数据解码到结构体对象中, 哪些数据可以丢弃.

unmarshal阶段, JSON字段的名称关联到Go结构体成员的名称是忽略大小写的, 因此这里只需要在JSON中有下划线而Go里面没有下划线的时候使用一下成员标签定义.

```go
//json : js to go

```

解析json时, JSON字段的名称关联到Go结构体成员的名称是忽略大小写的

### 文本和HTML模板

> 类似bash/JavaScript/django中的模版语法, 类似python中的F-string(F字符串)

面对较为复杂的格式化情况, 并且要求格式和代码彻底分离. 可以通过`text/template` 和 `html/template`, 提供了一种机制,
可以将程序变量的值带入到文本或者HTML模板中.

模板是一个字符串或者文件, 它包含一个或者多个两边用双大括号包围的单元: `{{...}} `, 这称为操作**操作**(actions).
大多数的字符串操作是直接输出的, 但是操作可以引发其他行为. 每个操作在模板语言里都对应一个表达式,
提供的简单但强大的功能包括: 输出值, 选择结构体成员, 调用函数和方法, 描述控制逻辑, 实例化其他的模板等.

一个简单的字符串模版如下所示:

```go
//gopl.io/ch4/issuesreport

//!+template
const templ = `{{.TotalCount}} issues:
{{range .Items}}----------------------------------------
Number: {{.Number}}
User:   {{.User.Login}}
Title:  {{.Title | printf "%.64s"}}
Age:    {{.CreatedAt | daysAgo}} days
{{end}}`

//!-template

//!+daysAgo
func daysAgo(t time.Time) int {
	return int(time.Since(t).Hours() / 24)
}

//!-daysAgo
```

通过模版输出结果需要两个步骤. 首先, 需要解析模版并转换为内部的表示方法, 然后在指定的输入上面执行. 解析模版只需要执行一次.

下面的代码创建并解析上面定义的文本模版templ.

注意方法的链式调用: template.New创建并返回一个新的模版, Funcs添加daysAgo到模版内部可以访问的函数列表中, 然后返回这个模版对象;
最后调用Parse方法:

```go
//!+exec
var report = template.Must(template.New("issuelist").
	Funcs(template.FuncMap{"daysAgo": daysAgo}).
	Parse(templ))

func main() {
	result, err := github.SearchIssues(os.Args[1:])
	if err != nil {
		log.Fatal(err)
	}
	if err := report.Execute(os.Stdout, result); err != nil {
		log.Fatal(err)
	}
}
```

由于模版通常是在编译期间就固定下来的, 因此无法解析模版将是程序中的一个严重的bug. 帮助函数template.Must提供了一种便携的错误处理方式,
它接受一个模版和错误作为参数, 检查错误是否为nil(如果不是nil, 则宕机), 然后返回这个模版.

关于html/template包: 它使用和text/template包里面一样的APing和表达式语句, 并且额外地对出现在HTML, JavaScript,
CSS和URL中的字符串进行自动转义. 这些功能可以避免生成的HTML引发长久以来都会有的安全问题, 比如 **注入攻击**(injection
attack), 对方利用issue的标题来包含不安全的代码, 在模版中如果没有合理的进行转义, 会让他们能够控制整个页面.

## 函数-Functions

函数包含连续的执行语句, 可以在代码中通过调用函数来执行它们.

函数能够将一个复杂的工作切分成多个更小的模块, 使得多人协作变得更加容易.

函数对它的使用者隐藏了实现细节.

### 函数声明

**形参列表**(parameters)列表指定了一组变量的参数名和参数类型, 这些局部变量都是由调用者提供的 **实参**(arguments) 传递而来.
*参数列表的值或叫作实参由调用方提供*

**返回列表**(results)列表则指定了函数返回值的类型. 当函数返回一个未命名的返回值或者没有返回值的时候, 返回列表的圆括号可以省略.

如果一个函数既省略了返回列表也没有任何返回值, 那么设计这个函数的目的是调用函数之后所带来的附加效果.

```go
// 函数声明语法
func name(parameter-list) (result-list) {
    body
}

// 多返回值函数
func val() (int, int) {
    return 3, 7
}

func add(x int, y int) int {return x + y}  // 返回表达式
func sub(x, y int) (z int) { z = x - y return}  // 返回值命名
func first(x int, _ int) int { return x}  // 未使用参数
func zero(int, int) int {return 0}
```

如果一个函数既省略返回列表也没有任何返回值, 那么设计这个函数的目的是调用函数之后的附加效果.

<u>返回值也可以像形参一样命名. 这个时候, 每个命名的返回值会声明为一个局部变量, 并根据变量类型初始化为相应的零值.</u>

```go
func MultiReturn(a, b int) (c, d int) {
	c = a + b
	d = a * b
	return c, d
}
```

当函数存在返回列表时, 必须显式地以return语句结束. 除非函数明确不会走完整个执行流程, 比如在函数中抛出**宕机异常(panic)**
或者函数体内存在一个没有break退出条件的无限for循环.

如果几个形参或者返回值的类型相同, 那么类型只需要写一次. 以下两个声明是完全相同的:

```go
func f(i, j, k int, s, t string) {/*...*/}
func f(i int, j int, k int, s string, t string) {/*...*/}
```

下面使用4中方式声明一个带有两个形参和一个返回值的函数, 所有变量都是int类型. 空白标识符用来强调这个形参在函数中未使用.

```go

func add(x int, y int) int {return x + y}  // 返回表达式
func sub(x, y int) (z int) { z = x - y; return}  // 返回值命名
func first(x int, _ int) int { return x}  // 未使用参数
func zero(int, int) int {return 0}

fmt.Printf("%T\n", add)   // func(int, int) int
fmt.Printf("%T\n", sub)   // func(int, int) int
fmt.Printf("%T\n", first) // func(int, int) int
fmt.Printf("%T\n", zero)  // func(int, int) int
```

函数的类型有时也称作 **签名(signature)** . 当两个函数拥有相同的形参列表和返回列表时, 认为这两个函数的类型或签名是相同的.
形参和返回值的名字不影响函数类型, 采用简写同样也不影响函数类型.

每一次调用函数都需要提供实参来对应函数的每一个形参, 包括参数的调用顺序也必须一致.

Go语言语言没有默认参数值的概念也不能指定实参名, 所以除了用于文档说明之外, 形参和返回值的命名不会对调用方有任何影响.

<u>形参变量都是函数的局部变量, 初始值由调用者提供的实参传递.</u> 函数形参以及命名返回值同属于函数最外层作用域的局部变量.

<u>实参是 按值(by value)传递的, 所以函数接收到的是每个实参的副本; 修改函数的形参变量并不会影响到调用者提供的实参.</u>

然而, 如果提供的实参包含引用类型如: 指针、slice、map、function或channel, 那么当函数使用形参变量时就有可能会间接修改实参变量.
*每次调用时, 实参可能因为被其他操作影响而出现 实参虽然不变, 但是实参所引用的地址所存储的值发生蝙蝠*

你可能偶尔会看到有些函数的声明没有函数体, 那说明这个函数使用了除Go以外的语言实现. 这样的声明定义了该函数的签名signature.

```go
package main
func Sin(x float64) float64  // 使用汇编语言实现
```

### 递归-Recursion

函数可以使用递归调用(调用函数本身), 这意味着函数可以直接或间接地调用自己.

递归是一种实用技术, 可以处理许多带有递归特性的数据结构.

许多编程语言使用固定长度的 **函数调用栈**; 大小在64kb到2mb之间. 递归的深度会受限于固定长度的栈大小, 所以当进行深度递归调用时必须谨防
栈 **溢出(overflow)**. 固定长度的栈甚至会造成一定的安全隐患. 相比固定长的栈, Go语言的实现使用了可变长度的栈,
栈的大小会随着使用而增长, 可达到1GB左右的上限. 这使得我们可以安全地使用递归而不用担心溢出的问题.

### 多返回值

一个函数能够返回不止一个结果. 我们之前已经见过标准包内的许多函数返回两个值, 一个期望得到的结果与一个错误值,
或者一个表示函数调用是否正确的布尔值.

```go
// findLinks performs an HTTP GET request for url, parses the
// response as HTML, and extracts and returns the links.
func findLinks(url string) ([]string, error) {
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	if resp.StatusCode != http.StatusOK {
		resp.Body.Close()
		return nil, fmt.Errorf("getting %s: %s", url, resp.Status)
	}
	doc, err := html.Parse(resp.Body)
	resp.Body.Close()
	if err != nil {
		return nil, fmt.Errorf("parsing %s as HTML: %v", url, err)
	}
	return visit(nil, doc), nil
}
```

我们必须保证resp.Body正确关闭使得网络资源正常释放. 即使发生错误的情况下也必须释放资源. Go语言的垃圾回收机制将回收未使用的内存,
但不能指望它会释放未使用的操作系统资源, 比如打开的文件以及网络连接. 必须显式地关闭它们.

返回一个多值结果可以是调用另一个多值返回的函数.

```go
func findLinksLog(url string) ([]string, error) {
    log.Printf("findLinks %s", url)
    return findLinks(url)
}
```

一个多值调用可以作为单独的实参传递给拥有多个形参的函数中. 尽管很少在生产环境使用, 但是这个特性有的时候可以方便调试,
它使得我们仅仅使用一条语句就可以输出所有的结果:

```go
log.Println(findLinks(url))

// 下面的写法与上面的作用一致
links, err := findLinks(url)
log.Println(links, err)
```

良好的名称可以使得返回值更加有意义. 尤其在一个函数返回多个结果且类型相同时, 名字的选择更加重要.

```go
func Size(rect image.rectangle) (width, height int)
func Split(path string) (dir, file string)
func HourMinSec(t time.Time) (hour, minute, second int)
```

但不必始终为每个返回值单独命名. 比如, 习惯上, 最后的一个布尔返回值表示成功与否, 一个error结果通常都不需要特别说明.

一个函数如果有命名的返回值, 可以省略 return 语句的操作数, 这称为 **裸返回(bare return)**. 裸返回是将每个命名返回结果按照顺序返回的快捷方法.

```go
func MultiReturn(a, b int) (c, d int) {
	c = a + b
	d = a * b
	return
}
```

裸返回可以消除重复代码, 但是并不能使代码更加易于理解. 实际使用时应该保守使用裸返回.

### 错误-Error

对于很多函数, 即使在高质量的代码中, 也不能保证一定能够成功返回, 因为有些因素并不受程序设计者的掌控.
比如任何操作I/O的函数都一定会面对可能得错误, 只有没有经验的程序员会认为一个简单的读或写不会失败. 事实上, 这些地方是我们最需要关注的,
很多可靠的操作都可能毫无征兆的发生错误.

因此错误处理是包的API设计或者应用程序用户接口的重要部分, 发生错误只是许多预料行为中的一种而已. 这就是Go语言处理错误的方法.

如果当函数调用发生错误时返回一个附加的结果作为错误值, 习惯上将错误作为最后一个结果返回. 如果错误只有一种情况,
结果通常设置为布尔类型, 就像下面这个查询缓存值的例子里面, 往往都范湖已成功, 只有不存在对应的键值的时候返回错误:

```go
value, ok := cache.Lookup(key)
if !ok {
    // ...cache[key] 不存在 ...
}
```

更多时候, 尤其对于I/O操作, 错误的原因可能多种多样, 而调用者则需要一些详细细腻. 在这种情况下, 错误的结果类型往往是error.

error是内置的接口类型. 目前我们已经了解到, 一个错误可能是控制或者非空值, 空值意味着成功而非空值意味着失败,
而且非空的错误类型有一个错误消息字符串, 可以通过调用它的Error方法或者通过调用fmt.Println(err)或fmt.Printf("%v", error)
直接输出错误消息.

一般当一个函数返回一个非空错误时, 它其他的结果都是未定义的而且应该忽略. 然而, 有一些函数在调用出错的情况下会返回部分有用的结果.
比如, 如果在读取一个文件的时候发生错误, 调用Read函数后返回能够成功读取的字节数与相对应的错误值.
正确的行为通常是在调用者处理错误前先处理这些不完整的返回结果. 因此在文档中清晰的说明返回值的意义是很重要.

与许多其他语言不通, Go语言通过使用普通的值而非异常(exceptions)来报告错误(failures). 尽管Go语言有异常机制,
但是Go语言的异常知识针对程序bug导致的预料外的错误, 而不能作为常规的错误处理方法出现在程序中.

这样做的原因是异常会陷入带有错误消息的控制流去处理它, 通常会导致预期外的结果: 错误会议难以理解的栈跟踪信息报告给最终用户,
这些信息大都是关于程序结构方面的而不是简单明了的错误信息.

相比之下, Go程序使用通常的控制流机制(比如if和return语句)应对错误. 这种方式错误处理逻辑方面要求更加小心谨慎, 但这恰恰是设计的要点.

#### 错误处理策略

当一个函数调用返回一个错误时, 调用者应对负责检查错误并采取合适的处理应对. 根据情形, 将有许多可能得处理场景.

**策略一**: 首先也最常见的情形是将错误传递(propagate)下去, 使得在子例程(subroutine)中发生的错误变为主调例程(routine)的错误.

```go
resp, err := http.Get(url)
if err != nil {
    return nil, err
}
```

或者构建一个新的错误信息, 其中包含我们需要的错误信息(原错误信息并可能附加新的错误信息):

```go
doc, err := html.Parse(resp.Body)
resp.Body.Close()
if err != nil {
    return nil, fmt.Errorf("parsing %s as HTML: %v", url, err)
}
```

设计一个错误消息时应当慎重, 确保每一条消息的描述都是有意义的, 包含充足的相关信息, 并且保持一致性,
不论被同一个函数还是同一个包下面的一组函数返回时, 这样的错误都可以保持统一的形式和错误处理方式.

**策略二**: 对于不固定或者不可预测的错误, 在短暂的间隔后对操作进行重试是合乎情理的, 超出一定的重试次数和限定的时间后再报错退出.

```go
// WaitForServer attempts to contact the server of a URL.
// It tries for one minute using exponential back-off.
// It reports an error if all attempts fail.
func WaitForServer(url string) error {
	const timeout = 1 * time.Minute
	deadline := time.Now().Add(timeout)
	for tries := 0; time.Now().Before(deadline); tries++ {
		_, err := http.Head(url)
		if err == nil {
			return nil // success
		}
		log.Printf("server not responding (%s); retrying...", err)
		time.Sleep(time.Second << uint(tries)) // 指数退避策略
	}
	return fmt.Errorf("server %s failed to respond after %s", url, timeout)
}

```

**策略三**: 如果依旧不能顺利进行下去, 调用者能够输出错误然后又要地停止程序, 但一般这样的处理应该留给主程序部分.
通常库函数应当将错误传递给调用者, 除非这个错误表示一个内部一致性错误, 除非这个错误表示一个内部一致性错误, 这意味着库内部存在bug.

```go
// (In function main.)
if err := WaitForServer(url); err != nil {
    fmt.Fprintf(os.Stderr, "Site is Down: %v\n", err)
    os.Exit(1)
}
```

一个更加方便的方式上已通过调用log.Fatalf实现相同的效果. 就和所有的日志函数一样, 它会默认将时间和日期作为前缀加到错误消息前.

```go
if err := WaitForServer(url); err != nil {
    log.Fatalf("Site is Down: %v\n", err)
 
}
```

**场景四**: 在一些错误情况下, 知识记录下错误信息然后程序继续运行. 同样地, 可以选择使用log包来增加日志的常用前缀:

```go
if err := Ping(); err != nil {
    log.Printf("ping failed: %v; networking disabled", err)
}
```

并且直接输出到标准错误流:

```go
if err := Ping(); err != nil {
    log.Fprintf(os.Stderr, "ping failed: %v; networking disabled\n", err)
}
```

所有log函数都会为缺少换行符的日志补充一个换行符.

**场景五**: 在某些罕见的情况下我们可以直接安全地忽略掉整个日志:

```go
dir, err := ioutil.TempDir("", "scratch")
if err != nil {
    return fmt.Errorf("failed to creat temp dir: %v", err)
}
// ...使用临时目录
os.RemoveAll(dir)  // 忽略错误, $TMPDIR会被周期性清除
```

调用os.RemoveAll可能会失败, 但程序忽略了这个错误, 原因是操作系统会周期性地清除临时目录.

要习惯考虑到每一个函数调用可能发生的出错情况, 当你有意地忽略一个错误的时候, 清楚的注释一下你的意图.

Go语言的错误处理有特定的规律. 进行错误检查之后, 检测到失败的情况往往都在成功之前. 如果检测到的失败导致函数返回,
成功的逻辑一般不会放在else块中二十直接在外城的作用域中. 函数会有一种通常的形式, 就是你在开头有一连串的检查用来返回错误,
之后跟着实际的函数体一直到最后.

#### 文件结束标识

通常, 最终用户会对函数返回的多种错误感兴趣而不是中间涉及的程序逻辑. 偶尔, 一个程序必须针对不同各种类的错误采取不同的措施.
考虑如果要从一个文件中读取n个字节的数据. 如果n是文件本身的长度, 任何错误都代表操作失败. 另一方面,
如果调用者反复地尝试读取固定大小的块知道文件耗尽, 调用者必须把读取到文件尾的情况区别于其他错误的操作. 为此,
io包保证任何由文件结束引起的读取错误, 始终都会得到一个与众不同的错误———`io.EOF`, 它的定义如下:

```go
package io
import "errors"
var EOF = errors.New("EOF")
```

调用者可以使用一个简单的比较错误来检测这种情况, 在下面的循环中, 不断从标准输入中读取字符

```go
in := bufio.NewReader(os.Stdin)
	for {
		r, _, err := in.ReadRune() // returns rune, nbytes, error
		if err == io.EOF {
			break
		}
		if err != nil {
            return fmt.Errorf("read failed: %v", err)
		}
        //  ...使用r ...
		
	}
```

除了反应这个实际情况外, 因为文件结束的条件没有其他信息, 所以`io.EOF`有一条固定的错误消息"EOF". 对于其他错误,
我们可能需要同时得到错误相关的本质原因和数量信息, 因此一个固定的错误值并不能满足我们的需求.

### 函数变量

函数在Go语言中是头等重要的值: 就像其他值, 函数变量也有类型, 而且他们可以赋给变量或者传递或者从其他函数中返回.
函数变量可以像其他函数一样调用. 比如:

```go
package main

import "fmt"

func square(n int) int     { return n * n }
func negative(n int) int   { return -n }
func product(m, n int) int { return m * n }

func main() {
	f := square
	fmt.Println(f(3)) // "9"
	f = negative
	fmt.Println(f(3))     // "-3
	fmt.Printf("%T\n", f) // "func(int) int"
	
	f = product  // "Cannot use 'product' (type func(m int, n int) int) as the type func(n int) int"
	
}

```

函数类型的零值是nil(零值), 调用一个空的函数变量将导致宕机.

函数变量可以和空值比较.

```go
{

    var f func(int) int

    f(3) // 调用空函数 引发宕机
}
{
    var f func(int) int

    if f != nil {
        f(3)

    }
}
```

但他们本身不可比较, 所以不可以互相进行比较或者作为键值出现在map中.

<u>函数变量使得函数不仅将数据进行参数化, 还将函数的行为当做参数进行传递.</u>

*允许将函数变量, 函数的数据作为参数进行传递*

```go
func add1(r rune) rune { return r + 1 }
fmt.Println(strings.Map(add1, "HAL-9000"))  // IBM.:111

fmt.Println(strings.Map(add1, "VMS"))  // 	WNT
```

### 匿名函数-anonymous function

命名函数只能在包级别的作用域进行声明, 但我们能够使用 **函数字面量(function literal)** 在任何表达式内指定函数变量.
函数字面量就像函数声明, 但在func关键字后面没有函数的名称. 函数字面量是一个表达式, 它的值称作 **匿名函数(anonymous
function)**.

函数字面量在我们需要使用的时候才定义

```go
strings.Map(func(r rune) rune {return r + 1}, "HAL-9000")
```

更重要的是, 以这种方式定义的函数能够获取到整个词法环境, 因此里层的函数可以使用外层函数中的变量:

```go
// The squares program demonstrates a function value with state.
package main

import "fmt"

//!+
// squares returns a function that returns
// the next square number each time it is called.
func squares() func() int {
	var x int
	return func() int {
		x++
		return x * x
	}
}

func main() {
	f := squares()  // f 是一个匿名函数 并且可以获取到squares域的变量
	fmt.Println(f()) // "1"
	fmt.Println(f()) // "4"
	fmt.Println(f()) // "9"
	fmt.Println(f()) // "16"
}
```

函数squares 返回了另一个函数, 类型是 `func() int`. 调用squares创建了一个局部变量x而且返回了一个匿名函数,
每次调用square都会递增x的值然后返回x的平方. 第二次调用squares函数将创建第二个变量x, 然后返回一个递增x值的新匿名函数.

这个求平方的实力演示了函数变量不仅是一段代码还可以拥有状态. 里层的匿名函数能够获取和更新外层squares函数的局部变量.
这些因此的变量引用就是我们把函数归类为引用类型而且函数变量无法进行比较的原因. 函数变量类似于使用 **闭包(closure)**
方法实现的变量, <u>Go程序员通常把函数变量称为闭包.</u>

我们再一次看到这个例子里面变量的生命周期不是由它的作用域决定的: 变量x在main函数中返回squares函数后依旧存在(
虽然x在这个时候是隐藏在函数变量f中的).

### 警告: 捕获迭代变量

在这一节, 我们将看到Go语言的词法作用域规则的陷阱, 有时会得到令你吃惊的结果. 我们强烈建议你先理解这个问题再进行下一节的阅读,
因为即使是有经验的程序员也会调入这些陷阱

```go
var rmdirs []func()
for _, d := range tempDirs(){
    dir := d			// 注意, 这一行是必需的
    os.MkdirAll(dir, 0755) //也创建父目录
    rmdirs = append(rmdirs, func() {
        os.RemoveAll(dir)
    })
}
// ...这里做一些处理...
for _, rmdir := range rmdirs {
    rmdir()  // 清理
}
```

你可能会奇怪, 为什么在循环体内将循环变量赋给一个新的局部变量, 而不是在下面这个略有错误的变体中直接使用循环变量dir.

```go
var rmdirs []func()
for _, dir := range tempDirs(){
    os.MkdirAll(dir, 0755)
    rmdirs = append(rmdirs, func() {
        os.RemoveAll(dir)  // 不正确
    })
}
```

<u>这个原因是循环变量的作用域规则限制. 在上面的程序中, dir在for循环引进的一个块作用域内进行声明.
在循环里创建的所有函数变量共享相同的变量———一个可访问的存储位置, 而不是固定的值.</u> dir变量的值在不断地迭代中更新,
因此当调用清理函数时, dir变量已经被每一次的for循环更新多次. 因此, dir变量的实际取值是最后一次迭代时的值并且所有的os.RemoveAll调用最终都试图删除同一个目录.

我们经常引入一个内部变量来解决这个问题, 就像dir变量是一个和外部变量同名的变量, 只不过是一个副本,
这看起来有些奇怪确是一个关键性的声明:

```go
for _, dir := range tempDirs() {
    dir := dir // 声明内部dir, 并以外部dir初始化
    // ...
}
```

这样的隐患不仅仅存在于使用range的for循环里. 在下面的循环中也面临由于无意间捕获的索引变量i二导致同样的问题.

```go
var rmdirs []func()
dirs := tempDirs()
for i := 0; i < len(dirs); i++ {
    os.MkdirAll(dirs[i], 0755) // OK
    rmdirs = append(rmdirs, func(){
        os.RemoveAll(dirs[i])  // 不正确
    })
}
```

在go语句和defer语句的使用当中, 迭代变量捕获的问题是最频繁的, 这是因为这两个逻辑都会推迟函数的执行时机, 直到循环结束.
但是这个问题并不是有go或者defer语句造成的.

### 变长函数

变长函数(variadic function)被调用的时候可以有可变的(varying)参数个数. 最令人熟知的例子就是fmt.Printf与其变种.
Printf需要在开头提供一个固定的参数, 后续便可以接受任意数目的参数.

在参数列表最后的类型名称之前使用省略号"..."表示声明一个变长函数, 调用这个函数的时候可以传递该类型任意数目的参数.

```go
func sum(vars ...int) int {
    total := 0
    for _, val := range vals{
        total += val
    }
    return total
}
```

上面这个sum函数返回另个或者多个int参数. 在函数体内, vals是一个int类型的slice. 调用sum的时候任何数量的参数都将提供给vals参数.

```go
fmt.Println(sum())			// 0
fmt.Println(sum(3))			// 3
fmt.Println(sum(1, 2, 3, 4))// 10
```

调用者显式地申请一个数组, 将实参复制给这个数组, 并把一个数组slice传递给函数. 上面的最后一个调用和下面的调用的作用是一样的,
它展示了当实参已经存在于一个slice的时候如何调用一个变长函数: 在最后一个参数后面放一个沈略号.

```go
values := []int{1, 2, 3, 4}
fmt.Println(sum(values...)  // "10"
```

尽管 ...int参数就像函数体内的slice, 但变长函数的类型和一个带有普通slice参数的函数的类型不相同.

```go
func f(...int) {}
func g([]int) {}
fmt.Printf("%T\n", f) // func(...int)
fmt.Printf("%T\n", g) // func([]int)
```

变长函数通常用于格式化字符串. 下面的errorf函数构建一条格式化的错误消息, 在消息的开头带有行号.函数的后缀f是广泛使用的命名习惯,
用于可变长Printf风格的字符串格式化输出函数.

```go
func errorf(linenum int, format string, args ...interface{}) {
    fmt.Fprintf(os.Stderr, "Line %d: ", linenum)
    fmt.Fprintf(os.Stderr, format, args...)
    fmt.Fprintln(os.Stderr)
}
linenum, name := 12, "count"
errorf(linenum, "undefined: %s", name)  // "Line 23: undefined: count"
```

interface{}类型意味着这个函数的最后一个参数可以接受任何值.

### 延迟函数调用

语法上, 一个defer语句就是一个普通的函数或方法调用, 在调用之前加上关键字defer. <u>函数和参数表达式会在语句执行时求值,
但是无论是正常情况下, 执行return语句或函数执行完毕, 还是不正常的情况下, 比如发生宕机, 实际的(defer)
调用推迟到包含defer语句的函数结束后才执行.</u> defer语句没有限制使用次数, 执行的时候以调用defer语句顺序的倒序进行.

defer语句经常使用于成对的操作, 比如打开和关闭, 连接和断开, 加锁和解锁, 即使是再复杂的控制流, 资源再任何情况下都能够正确释放.
正确使用defer语句的地方是在成功获得资源之后.

<u>defer语句也可以用来调试一个复杂的函数, 即在函数的"入口"和"出口"处设置调试行为.</u> 下面的bigSlowOperation函数在开头调用trace函数,
在函数刚进入的时候执行输出, 然后返回一个函数变量, 当其被调用的时候执行退出函数的操作. 以这种方式推迟返回函数的调用,
我们可以使用一个语句在函数入口和所有出口添加处理, 甚至可以传递一些有用的值, 比如每个操作的开始时间. 但别忘了defer语句末尾的圆括号,
否则入口的操作会在函数退出时执行而出口的操作永远不会调用.

```go
// gopl.io/ch5/trace
func bigSlowOperation() {
	defer trace("bigSlowOperation")() // don't forget the extra parentheses
	// ...lots of work...
	time.Sleep(10 * time.Second) // simulate slow operation by sleeping
}

func trace(msg string) func() {
	start := time.Now()
	log.Printf("enter %s", msg)
	return func() { log.Printf("exit %s (%s)", msg, time.Since(start)) }
}
func main() {
	bigSlowOperation()
}
```

延迟执行的函数在return语句之后执行, 并且可以更新函数的结果变量(result variables).
因为匿名函数可以得到其外层函数作用域内的变量(包括命名的结果), 所以延迟执行的匿名函数可以观察到函数的返回结果.

考虑下面的函数double:

```go
func double(x int) int{
    return x + x 
}
```

通过命名结果变量和增加defer语句, 我们能够在每次调用函数的时候输出它的参数和结果.

```go
func double(x int) (result int) {
    defer func() {fmt.Printf("double(%d) = %d\n", x, result)}()
    return x + x
}
_ = double(4)

// "double(4) = 8"
```

这个技巧的使用相比之前的double函数来说有些过了, 但对于很多返回语句的函数来说很有帮助.

延迟执行的匿名函数能够改变外层函数返回给调用者的结果:

```go
func triple(x int) (result int) {
    def func() {result+=x}()
    return double(x)
}

fmt.Println(triple(4))  // "12"

```

因为延迟的函数不到函数的最后一刻是不会执行的. 要注意循环里defer语句的使用. 下面这段代码代码就可能会用尽所有的文件描述符,
这是因为处理完成后却没有文件关闭.

```go
for _, filename := range filenames {
    f, err := os.Open(filename)
    if err != nil {
        return err
    }
    def f.Close()  // 注意: 可能会用尽文件描述符
    // ...处理文件f...
}
```

一种解决的方式是将循环体(包括defer语句)放到另一个函数里, 每次循环迭代都会调用文件关闭函数.

```go
for _, filename := range filenames {
    if err := doFile(filename); err != nil {
        return err
    }
}

func doFile(filename string) error {
    f, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer f.Close()
    // ...处理文件f...
}



```

### 宕机-panic

Go语言的类型系统会捕获许多编译时错误, 但有些其他的错误(比如数组越界访问或者解引用空指针)都需要在运行时检查.
当Go语言运行时检测到这些错误, 它就会发生 **宕机(panic)**.

一个典型的宕机发生时, 正常的程序执行会终止, goroutine中的所有延迟函数会执行, 然后程序会异常退出并留下一条日志消息.
日志消息包括宕机的值 ,这往往代表某种错误消息, 每一个goroutine都会在宕机的时候显示一个函数调用的 **栈跟踪(stack trace)**
消息. 通常可以借助这条日志消息来诊断问题的原因而不需要再一次运行该程序, 因此报告一个发生宕机的程序bug时, 总是会加上这条消息.

并不是所有宕机都是在运行时发生的. 可以直接调用内置的宕机函数; 内置的宕机函数可以接受任何值作为参数. 如果碰到"不可能发生"
的状况, 宕机是最好的处理方式, 比如语句执行到逻辑上不可能达到的地方时:

```go
switch s := suit(drawCard()); s{
    case "Hearts": // ...
    case "Clubs":  // ...
    default:
    panic(fmt.Sprintf("invalid suit %q", s))
}
```

设置函数的 **断言(assert)** 是一个良好的习惯, 但是这也会带来多余的检查. 除非你能够提供有效的错误消息或者能够很快地检测出错误,
否则在运行时检测断言条件就毫无意义.

```go
func Reset(x *Buffer) {
    if x == nil {
        panic("x is nil") // 没必要
    }
    x.elements = nil
}
```

尽管Go语言的宕机机制(mechanism)和其他语言的异常很相似, 但宕机的使用尝尽不尽相同. 由于宕机会引起程序异常退出,
因此只有在发生严重的错误时才会使用宕机, 比如遇到与预想的逻辑不一致的代码; 用心的程序员会将所有可能发生异常退出的情况考虑在内一证实bug的存在.
强健的代码会优雅地处理"预期的"错误, 比如错误的输入, 配置或者I/O失败等;这时最好能够使用错误值来加以区分.

当宕机发生事, 所有的延迟函数以倒序执行, 从栈最上面的函数开始一直返回之main函数.

熟悉其他语言的异常机制的读者可能会对runtime.Stack能够输出函数栈信息感到吃惊, 引文栈应该已经不存在了. 但事实上,
Go语言的宕机机制让延迟执行的函数在栈清理之前调用.

### 恢复-recover

退出程序通常是正确处理宕机的方式, 但也有例外. 在一定情况下是可以进行回复的, 至少有时候可以在退出前理清当前混乱的情况.
比如, 当web服务器遇到一个未知错误时, 可以先关闭所有连接, 这总比让客户端阻塞在那里要好, 而在开发过程中, 也可以向客户端回报当前遇到的错误.

如果内置的recover函数在延迟函数的内部调用, 而且这个包含defer语句的函数发生宕机, recover回终止当前的宕机状态并且返回宕机的值.
函数不会从之前宕机的地方继续运行而是正常返回. 如果recover在其他任何情况下运行则它没有任何效果且返回nil.

为了说明这一点, 假设我们开发一种语言的解析器. 即使他看起来运行正常, 但考虑到工作的复杂性, 还是会存在只在特殊情况下发生的bug.
我们在这时会更喜欢将本该宕机的错误看作一个解析错误, 不要立即终止运行, 而是将一些有用的附加消息提供给用户来报告这个bug.

```go
func Parse(input string) (s *Syntax, err error) {
    defer func() {
        if p := recover(); p !=nil {
            err = fmt.Errorf("internal error: %v", p)
        }
    }()
    // ...解析器...
}
```

Parse函数中的延迟函数会从宕机状态恢复, 并使用宕机值组成一条错误消息; 理想的写法是使用`runtime.Stack`将真个调用栈包含进来.
延迟函数则将错误赋给err结果变量从而返回给调用者.

对于宕机采用无差别的恢复措施是不可靠的, 因为宕机后包内变量的状态往往没有清晰的定义和解释. 可能是对某个关键数据结构的更新错误,
文件或网络连接打开而未关闭, 或者获得了锁却没有四方. 长此以往, 把异常退出变为简单地输出一条会使真正的bug难以发现.

从同一个包内发生的宕机进行恢复有助于简化处理复杂和未知的错误, 但一般的原则是, 你不应该尝试求恢复从另一个包内发生的宕机.
公共的API应对直接报告错误. 同时你也不应该恢复一个宕机, 而这段代码却不是由你来维护的, 比如调用者提供的回调函数,
因为你不清楚这样做是否安全.

最安全的做法还是要选择性地使用recover. 换句话说, 在宕机过后需要进行恢复的强开本来就不多. 可以通过使用一个明确的,
非导出类型作为宕机值, 之后检测recover的返回值是否是这个类型. 如果是这个类型, 可以想着普通的error那样处理宕机; 如果不是,
使用同一个参数调用panic以触发宕机

```go
defer func() {
    switch p := recover(); p {
        case nil:
        // 没有宕机
        case T{}:
        // "预期的"宕机
        err = fmt.Errorf("...")
        default:
        panic(p)
    }
}()
```

有些情况下是没有恢复动作的. 比如, 内存耗尽是的Go运行时发生严重错误而直接终止进程.

## 方法-Methods

> 类型/对象的方法

从二十世纪90年代初开始, 面向对象编程(oop)的编程思想就已经在工业领域和教学领域占据了主导位置, 而且几乎所有广泛应用的编程语言都支持了这种思想.
Go语言也不例外.

尽管没有统一的面向对象编程的定义, 对我们来说, 对象就是一个简单的值或者变量, 并且拥有其方法, 而 **方法(method)**
是某种特定类型的函数. 面向对象编程就是使用方法来描述每个数据结构的属性(property)和操作(operation), 于是,
使用者不需要了解对象本身的实现.

本章主要学习如何基于面向对象编程思想, 从而更有效地定义和使用方法. 我们也会讲到两个关键的原则: **封装(encapsulation)** 和
**组合(composition)**.

### 方法声明

方法的声明和普通函数的声明类似, 只是在函数名字前面多了一个参数.

这个参数把这个方法绑定到这个参数对应的类型上.

附加的参数p称为方法的 *接收者(receiver)*, 它源自早先的面向对象语言, 用来描述主调方法就像是在向对象发送消息.

Go语言中, 接收者不使用特殊名(比如this或者self);而是我们自己选择接收者名字, 就像其他的参数变量一样. 由于接收者会频繁地使用,
因此最好能够选择简短且在整个方法中名称适中保持一致的名字. 最常用的方法就是取类型名称的首字母, 就像Point中的p.

调用方法的时候, 接收者在方法名的前面. 这样就和声明保持一致.

```go
package geometry

import "math"
// 
type Point struct{X, Y float64}

// 普通函数
// traditional function
func Distance(p, q Point) float64 {
	return math.Hypot(q.X-p.X, q.Y-p.Y)
}

// Point类型的方法声明
// same thing, but as a method of the Point type
func (p Point) Distance(q Point) float64 {
	return math.Hypot(q.X-p.X, q.Y-p.Y)
}


// 函数调用与方法调用

p := Point(1, 2)
q := Point(4, 6)
fmt.Println(Distance(p, q))  // "5", 函数调用
fmt.Println(p.Distance(q))  // "5", 方法调用
```

上面两个Distance函数声明没有冲突.

第一个声明一个包级别的函数(称为 geometry.Distance).

第二个声明一个类型Piont的方法, 因此它的名字是Point.Distance.

表达式p.Distance称作**选择子(selector)** 选择器, 因为它为接收者p选择合适的Distance方法. 选择子也用于选择结构类型中的某些字段之,
就像p.X中的字段值. 由于方法(method)和字段(field)来自于通一个命名空间, 因此在Point结构类型中声明一个叫做X的方法会与字段X冲突,
编译器会报错.

因为每一个类型有它自己的命名空间, 所以我们能够在其他不同类型中使用名字Distance作为方法名. 定义一个Path类型表示一条线段,
同样也适用Distance作为方法名.

```go
// Path 是连接多个点的直线段
type Path []Point

func (path Path) Distance() float64 {
    sum := 0.0
    for i := range path {
        if i > 0 {
            sum += path[i-1].Distance(path[i])
        }
    }
    return sum
}
```

Path是一个命名的slice类型, 而非Point这样的结构体类型, 但我们依旧可以给它定义方法. Go和许多其他面向对象的语言不通,
它可以将方法绑定到任何类型上. 可以很方便地为简单的类型(如数字, 字符串, slice, map, 甚至函数等)定义附加的行为.
同一个包下的任何类型都可以声明方法, 只要它的类型既不是指针类型也不是接口类型.

这两个Distance方法拥有不同的类型. 它们彼此无关, 尽管Path.Distance在内部使用Point.Distance来计算线段相邻点之间的距离.

```go
// 计算三角形的周长
perim := Path{
    {1, 1},
    {5, 1},
    {5, 4},
    {1, 1},
}
fmt.Println(perim.Distance())  // "12"
```

上面两个Distance方法调用中, 编译器会通过方法名和接收者的类型决定调用哪一个函数.

类型拥有的所有方法名都必须是唯一的, 但不同的类型可以使用相同的方法名, 比如Point和Path类型的Distance方法;
也没有必要使用附加的字段来修饰方法名(PathDistance)以示区别.这里我们可以看到使用方法的第一个好处: 命名可以比函数更简短.
在包的外部进行调用的时候, 方法能够使用更加简短的名字且省略包的名字:

```go
import "gopl.io/ch6/geometry"
perim := geometry.Path{
    {1, 1},
    {5, 1},
    {5, 4},
    {1, 1},
}
fmt.Println(geometry.PathDistance(perim))  // "12", 独立函数
fmt.Println(perim.Distance())		// "12", geometry.Path的方法
```

### 指针接收者的方法

由于主调函数会复制每一个实参变量, 如果函数需要更新一个变量, 或者如果一个实参太大而我们希望避免复制整个实参,
因此我们必须使用指针来传递变量的地址. 这也同样适用于更新接收者: 我们将它绑定到指针类型, 比如*Point.

```go
func (p *Point) ScaleBy(factor float64) {
    p.X *= factor
    p.Y *= factor
}
```

这个方法的名字(*Point).ScaleBy. 圆括号是必需的;

没有圆括号, 表达式会被解析为`*(Point.ScaleBy)`.

在真是的程序中, 习惯上遵循如果Point的任何一个方法使用指针接收者, 那么所有的Point方法都应该使用指针接收者, 即使有些方法并不一定需要.
我们在Point中打破了这个习惯只为了方便展示方法的不同使用方法.

命名类型(Point)与指向衙门的指针(*Point)是唯一可以出现在接收者声明处的类型. 而且, 为防止混淆,
不允许本身是指针的类型进行方法声明:

*可以是命名类型指针, 但不能是指针类型*

```go
type P *int
func (P) f() {/*...*/}  //编译错误: 非法的接收者类型
// Invalid receiver type 'P' ('P' is a pointer type)
```

通过提供`*Point`能够调用`(*Point).ScaleBy方法, 比如

```go
// 推荐
r := &Point{1,2}
r.ScaleBy(2)

// 或者
p := Point{1, 2}
pptr := &p
pptr.ScaleBy(2)

// 或者
p := Point{1, 2}
(&p).ScaleBy(2)
```

上面最后两个方法虽然看上去比较别扭, 但也是合法的. 如果接收者p是Point类型的变量, 但方法要求一个`*Point`接收者,
我们可以使用简写:

```go
p.ScaleBy(2)
```

实际上编译器会对变量进行&p的隐式转换. 只有变量才允许这么做, 包括结构体字段, 像p.X和数组或者slice的元素, 比如perim[0].
不能够对一个不能取地址的Point接收者参数调用*Point方法, 因为无法获取临时变量的地址.

```go
Point{1, 2}.ScaleBy(2)  // 编译错误: 不能获得Point类型字面量的地址
```

但是如果实参接收者是`*Point`类型, 以Point.Distance的方式调用Point类型的方法是合法的, 因为我们有办法从地址中获取Point的值;
只要 解引用 指向接收者的指针值即可. 编译器会自动插入一个隐式的`*`操作符. 下面两个函数的调用效果是一样的:

```go
pptr.Distance(q)
(*pptr).Distance(q)
```

在合法的方法调用表达式中, 只有符合下面三种形式的语句才能够成立.

实参接收者和形参接收者是同一个类型, 比如都是T类型或都是*T类型:

```go
Point{1, 2}.Distance(q)	// Point
pptr.ScaleBy(2)			// *Point
```

或者实参接收者是T类型的变量而形参接收者是*T类型. 编译器会隐式地获取变量的地址

```go
p.ScaleBy(2)	// 隐式转换为(&p)
```

或者实参接收者是*T类型而形参接收者是T类型. 编译器会隐式地解引用接收者, 获得实际的取值.

```go
pptr.Distance(q)  // 隐式转换为(*pptr)
```

如果所有类型T方法的接收者是T自己(而非`*T`), 那么复制它的 **实例(instance)** 是安全的; 调用方法的时候都必须进行一次复制.
比如, time.Duration的值在作为实参传递到函数的时候就会复制. 但是任何方法的接收者是指针的情况下, 应该避免复制T的实例,
因为这么做可能会破坏内部原本的数据. 比如, 复制bytes.Buffer实例只会得到相当于原来bytes数组的一个别名. 随后的方法调用会产生不可预期的结果.

*实例, 初始化过的类型*

**nil是一个合法的接收**者. 就像一些函数允许nil指针作为实参, 方法的接收者也一样, 尤其是当nil是类型中有意义的零值(
如map和slice类型)时, 更是如此. 在这个简单的整型数链表中, nil代表空链表:

```go
// IntList是整型链表
// *IntList的类型nil代表空列表

// An IntList is a linked list of integers.
// A nil *IntList represents the empty list.
type IntList struct {
    Value int
    Tail *Intlist
}

// Sum返回列表元素的总和
func (list *IntList) Sum() int {
    if list == nil{
        return 0
    }
    return list.Value + list.Tail.Sum()
}
// Sum(0) = 0
//Sum(n) = Sum(n-1) + n.Value
```

当定义一个类型允许nil作为接收者时, 应当在文档注释中显式地表明, 如上面的例子所示.

这是

```go
type Values map[string][]string

// Get gets the first value associated with the given key.
// If there are no values associated with the key, Get returns
// the empty string. To access multiple values, use the map
// directly.
func (v Values) Get(key string) string {
	if v == nil {
		return ""
	}
	vs := v[key]
	if len(vs) == 0 {
		return ""
	}
	return vs[0]
}

// Add adds the value to key. It appends to any existing
// values associated with key.
func (v Values) Add(key, value string) {
	v[key] = append(v[key], value)
}
```

它的实现是map类型但也提供了一系列方法来简化map的操作, 它的值是slice, 即一个多重map.使用者可以使用它固有的操作方式(make,
slice字面量, m[key]等方式), 或者实用它的方法, 或同时使用:

```go
//!+main
m := url.Values{"lang": {"en"}} // direct construction
m.Add("item", "1")
m.Add("item", "2")

fmt.Println(m.Get("lang")) // "en"
fmt.Println(m.Get("q"))    // ""
fmt.Println(m.Get("item")) // "1"      (first value)
fmt.Println(m["item"])     // "[1 2]"  (direct map access)

m = nil
fmt.Println(m.Get("item")) // ""
m.Add("item", "3")         // panic: assignment to entry in nil map
//!-main
```

在最后一个Get调用中, nil接收者充当一个空map. 它可以等同地写成Values(nil).Get("item"), 但是nil.Get("item")不能通过编译,
因为nil的类型没有确定. 相比之下, 最后的Add方法会发生宕机因为它尝试更新一个空的map.

因为url.Values是map类型而且map简介地指向它的键/值对, 所以url.Values, Add对map中元素的任何更新和删除操作对调用者都是可见的.
然而, 和普通函数一样, 方法对引用本身做的任何改变, 比如设置url.Values为nil或者使它指向一个不同的map数据结构,
都不会在调用者身上产生作用.

### 通过结构体内嵌组成类型

考虑ColoredPoint类型:

```go
import "image/color"

type Point struct{X, Y float64}

type ColoredPoint struct {
    Point
    Color color.RGBA
}
```

==结构体可以使用内嵌的结构体类型的方法==

我们能够通过类型为ColoredPoint的接收者调用内嵌类型Point的方法, 即使在ColoredPoint类型没有声明过这个方方法的情况下:

```go
red := color.RGBA{255, 0, 0, 255}
blue := color.RGBA{0, 0, 255, 255}
```

Point上午方法都都被纳入的ColoredPoint类型中. 以这种方式, 内嵌云溪构成复杂的类型, 该类型由许多字段构成, 每个字段提供一些方法.

熟悉基于类的面向对象编程语言的读者可能认为Point类型就是ColoredPoint类型的基类, 而ColoredPoint则作为子类或派生类,
或将这两者之间的关系翻译为ColoredPoint就是Point的其中一种表现. 但这是个误解. 注意上面调用Distance的地方.
Distance有一个形参Point, q不是Point, 因此虽然q有一个内嵌的Point字段, 但是必须显式地使用它. 尝试直接传递q作为参数会报错:

```go
p.Distance(q)  // 编译错误: 不能将q(ColoredPoint)转换为Point类型
```

ColoredPoint并不是Point, 但是它包含一个Point, 并且它有两个另外的方法Distance和ScaleBy来自Point. 如果考虑具体实现, 实际上,
内嵌的字段会告诉编译器生成额外的包装方法来调用Point声明的方法, 这相当于以下代码:

```go
func (p ColoredPoint) Distance(q Point) float64 {
	return p.Point.Distance(g)
}

func (p *ColoredPoint) ScaleBy(factor float64) {
	p.Point.ScaleBy(factor)
}
```

当point.Distance在上面的第一个包调方法内调用的时候，接收者的值是p.Point 而不是p，而且这个方法是不能访问 coloredPoint(其中内嵌了
point)类型的。

**匿名字段**(没有命名只有类型的字段)
类型可以是个指向命名类型的指针，这个时候，字段和方法间接地来自于所指向的对象。这可以让我们共享通用的结构以及使对象之间的关系更加动态、多样化。下面的ColoredPoint声明内嵌了*
Point:

```go
type ColoredPoint struct {
    *Point
    Color color.RGBA
}
p := ColoredPoint{&Point{1,1}, red}
q := ColoredPoint{&Point{5,4}, red}
fmt.Println(p.Distance(*q.Point)) // "5"
q.Point = p.Point  // p和q共享同一个Point
p.ScaleBy(2)
fmt.Println(*p.Point, *q.Point) // "{2 2} {2 2}"
```

结构体类型可以拥有多个匿名字段. 声明ColoredPoint:

```go
type ColoredPoint struct {
    Point
    color.RGBA
}
```

那么这个类型的值可以拥有Point的所有方法和RGBA的所有方法, 以及任何其他直接在ColoredPoint类型中声明的方法.
当编译器处理选择子(比如p.ScaleBy)的时候. 首先, 它先查找到直接声明的方法ScaleBy, 之后再从来自ColoredPoint的内嵌字段的方法中进行查找,
再之后从Point和RGBA中内嵌字段的方法中进行查找, 以此类推. 当同一个查找级别中同名方法时, 编译器会报告选择子不明确的错误.

方法只能在命名的类型(Point)和指向他们的指针(*Point)中声明, 但内嵌帮助我们能够在未命名的结构体类型中声明方法.

下面是个很好的实例, 这个例子展示了简单的缓存实现, 其中使用了两个包级别的变量——互斥锁和map, 互斥锁将会保护map的数据

```go
var (
	mu sync.MuteX  // 保护mapping
    mapping = make(map[string]string)
)

func Lookup(key string) string {
    mu.Lock()
    v :=mapping[key]
    mu.Unlock()
    return v
}
```

下面这个版本的工鞥和上面完全相同, 但是将两个相关变量放到了一个包级别的变量cache中:

```go
var cache= struct{
	sync.MuteX
    mapping map[string]string
}{
    mapping: make(map[string]string)
}

func Lookup(key string) string {
    cache.Lock()
    v :=cache.mapping[key]
    cache.Unlock()
    return v
}
```

新的变量名更加贴切, 而且sync.MuteX是内嵌的, 它的Lock和Unlock方法也包含进了结构体中, 允许我们直接使用cache变量本身进行加锁.

### 方法变量与表达式

通常我们都在相同的表达式里使用和调用方法, 就像在p.Distance()中, 但是把两个操作分开也是可以的. 选择子p.Distance可以赋予一个
方法变量, 它是一个函数, 把方法(Point.Distance)绑定到一个接收者p上. 函数只需要提供实参而不需要提供接收者就能够调用.

```go
p := Point{1, 2}
q := Point{4, 6}
distanceFromP := p.Distance  // 方法变量
fmt.Println(distanceFromP(q))  // "5"
var origin Point  // {0, 0}
fmt.Println(distanceFromP(origin))

scaleP := p.scaleBy // 方法变量
scaleP(2)  // p变成(2, 4)
scaleP(3)  // (6, 12)
scaleP(10)	// (60, 120)
```

如果包内的API调用一个函数值, 并且使用者期望这个函数的行为是调用一个特定接收者的方法, 方法变量就非常有用. 比如,
函数time.AfterFunc会在指定的延迟后调用一个函数值. 这个程序使用time.AfterFunc在10秒后启动火箭r:

```go
type Rocket struct {/* ... */}
func (r *Rocket) Launch() {/* ... */}
r := new(Rocket)
time.AfterFunc(10 * time.Second, func(){r.Launch()})

//如果使用方法变量则可以更简洁
time.AfterFunc(10 * time.Second, r.Launch)
```

*函数值指的是函数变量*

与方法变量相关的是 方法表达式 . 和调用一个普通的函数不同, 在调用方法的时候必须提供接收者, 必须按照选择子的语法进行调用.
而方法表达式协程T.f或者(*T).f, 其中T是类型, 是一种函数变量, 把原来方法的接收者替换成函数的第一个形参, 因此它可以像平常的函数一样调用.

```go
p := Point{1, 2}
q := Point{4, 6}
distance := Point.Distance  // 方法表达式
fmt.Println(distance(p,q))  // "5"
fmt.Printf("%T\n", distance)  // "func(Point, Point) float64"

scale := (*Point).ScaleBy
scale(&p, 2)
fmt.Println(p)  // "{2, 4}"
fmt.Printf("%T\n", scale)  // "func(*Point, float64)"

```

如果你需要用一个值来代表多个方法中的一个，而方法都属于同一个类型，方法变量可以帮助你调用这个值所对应的方法来处理不同的接收者。在下面这个例子中，变量op代表加法或减法，二者都属于Point
类型的方法。path.TranslateBy 调用了它计算路径上的每一个点:

```go
type Point struct{X, Y float64}
func (p Point) Add(q Point) Point { return Point{p.X + 9.X, P.Y + q.Y}}
func (p Point) Sub(q Point) Point { return Point{P.X - 9.X, p.Y - q.Y}}
type Path []Point
func (path Path) TranslateBy(offset Point, add bool) {
	var op func(p, q Point) Point
	if add {
		op = Point.Add
	} else {
		op = Point. Sub
	}
    for i:= range path {
        path[i] = op(path[i], offset)
    }
}
```

### 示例:位向量

> 跳过

### 封装-Encapsulation

如果变量或者方法是不能通过对象访问到的, 这称作封装的变量或者方法. 封装(数据隐藏information hiding)是面向对象编程中重要的一方面.

Go语言只有一种方式控制命名的可见性: 定义的时候, 首字母大写的标识符是可以从包中导出的, 而首字母没有大写的则不到处.
同样的机制也同样作用域结构体内的字段和类型中的方法. 结论就是, 要封装一个对象, 必须使用结构体.

这就是为什么上一节里IntSet类型被声明为结构体但是它只有单个字段:

```go
type IntSet struct {
    words []uint64
}
```

可以重新定义Int为slice类型, 如下所示, 当然,必须把方法中出现的s.words替换为*s

```go
type IntSet []uint64
```

尽管这个版本的IntSet和之前的基本等同, 但是它将能够允许其他包内的使用方读取和改变这个slice.换句话说, 表达式*s可以在其他包内使用,
s.words只能在定义IntSet的包内使用.

另一个结论就是在Go语言中封装的单元室包而不是类型. 无论是在函数内的代码还是在方法内的代码, 结构体类型内的字段对于同一个包中的所有代码都是可见的.

封装提供了三个优点. 

第一, 因为使用方不能直接修改对象的变量, 所以不需要更多的语句用来检查变量的值.

第二, 隐藏实现细节可以防止使用方依赖的属性发生改变, 使得设计者可以更加灵活地改变API的视线而不破坏兼容性.

第三个重要的好处, 就是防止使用者肆意地改变对象内的变量. 因为对象的变量只能被同一个包内的函数修改,
所以包的作者能够保证所有的函数都可以维护对象内部的资源

## 接口·Interfaces

接口类型是对其他类型行为的概括与抽象. 通过使用接口, 我们可以写出更加灵活和通用的函数, 这些函数不用绑定在一个特定的类型实现上. 

> [!tip]
>
> 接口(interface)概念类似Python中的抽象类(abstract class)和Rust中的trait

Go语言的接口是隐式实现的(类似Python的魔术方法, 或JavaScript的直接量, 只要满足特定范式即可, 而不是显式地声明接口). 换句话说,
对于一个具体的类型, 无须声明它实现了哪些接口, 只要提供接口所必须的方法即可.

这种设计让你无须改变已有类型的实现, 就可以为这些类型创建新的接口, 对于那些不能修改包的类型, 这一点特别有用.

> 接口类型的基本机制类型价值.
>
> 标准库中集中重要的接口.
>
> 类型断言, 类型分支
>
> 实现另一种类型的通用化

### 如何理解

> 接口含义: 顾名思义, 接口是组件, 函数等程序实体间的通信约定, 接口只约定需要实现何种方法, 一个方法具有相同的输入和输出约定, 不关心方法的内部实现, 调用和返回方式相同即可, 不同的场景可以有不同的实现
>
> 使用场景: 多重实现, 当一个功能运行有多种实现方式时, 可以使用接口
>
> "Go语言中的接口是一组方法的签名，它是 Go 语言的重要组成部分。" ——《Go语言设计与实现》

### 接口即约定(contract)

之前介绍的类型都是具体类型(concrete types). 具体类型指定了它所含数据的精确布局, 还暴露了基于这个精确布局的内部操作.

具体类型还会通过其他方法来提供额外的能力.

总之, 如果你知道了一个具体类型的数据, 那么你就精确地知道了它是什么以及它能干什么.

Go语言中还有另外一种类型称为 **接口类型(interface type)**. 接口是一种 **抽象类型(abstract type)**, 它并没有暴露所含数据的布局或者内部结构, 当然也没有那些数据的基本操作, **它所提供的仅仅是一些方法而已**.

<u>声明·定义 一个接口类型, 就是定义该接口具有的方法和功能, 而该方法具体如何实现, 不能确定, 取决于具体类型如何定义该接口的方法</u>

<u>接口元素(interface elements)可以是接口名和方法名</u>

```go
// fmt.Printf把结果发到标准输出standard output(标准输出其实是一个文件)
// fmt.Sprintf返回一个string类型的值. 将对象转换为字符串, 作为一种格式输出
package fmts
fmt Fprintf(w io.Writer, format string, args ...interface{}) (int err)
```

```go
package io

// Writer接口封装了基础的写入方法
type Writer interface {
    /*
    Write从p像底层数据流写入len(p)个字节的数据
    返回实际写入的字节数(0<= n <= len(p)
    如果没有写完, 那么会返回遇到的错误
    在Write返回 n < len(p)时, err必须为非nil
    Write 不允许修改p的数据, 即使是临时修改
    */
    
    // 实现时不允许残留p的引用
    Write(p []byte) (n int, err error) 
    
}
```

io.Writer接口定义了Fprintf和调用者之间的约定.

### 接口类型

一个接口类型定义了一套方法, 如果一个具体类型要实现该接口, 那么必须实现接口类型定义中的所有方法.

```go
package io

type Reader interface {
    Read(p []byte) (n int, err error)
}

type Closer interface {
    Close() error
}

// 组合已有接口得到新的接口

type ReadWriter interface {
    Reader
    Writer
}

//嵌入式接口
type ReaderWriterCloser interface {
    Reader
    Writer
    Closer
}
```

### 实现接口

**如果一个类型实现了一个接口要求的所有方法, 那么这个类型实现了这个接口.**

<u>某对象 实现了接口所要求的所有方法, 那么该对象就是该接口类型, 比如某对象具有了人的所有功能, 该对象就是人</u>

比如, `*os.File`类型实现了io.Reader, Writer, Closer和ReadyWriter接口.

Go程序员通常说一个具体类型"是一个"(is-a)特定的接口类型, 这其实代表着该具体类型实现了该接口.
比如, `*bytes.Buffer`是一个`io.Writer`; `*os.File`是一个`io.ReadWriter`.

接口赋值: 接口的赋值规则很简单, 仅当一个表达式实现了一个接口时, 这个表达式才可以赋值给改接口. 所以,

```go
var w io.Writer = os.Stdout         // OK: *os.File 实现了Write方法
var w io.Writer = new(bytes.Buffer) // OK: *bytes.Buffer 实现了Write方法
var w io.Writer = time.Second       // 编译错误: 缺少Write方法, 未实现io.Writer接口

var rwc io.ReadWriteCloser = os.Stdout  // OK: *os.File 实现了 Read, Write, Close方法
var rwc io.ReadWriteCloser = new(bytes.Buffer) // 编译错误: *bytes.Buffer 缺少Close方法

w = rwc  // OK: io.ReadWriteCloser实现了Write方法
rwc = w  // 编译错误: io.Writer未实现Close方法
```

<u>接口赋值, 接口可以接受的具体类型, 不同于具体类型赋值, 接口赋值只考虑具体类型是否实现了接口所声明的方法, 不关心具体类型的其他声明</u>

<u>在具体类型赋值中, 变量只能接受相同类型的值</u>



接口封装了所有(接口元素)对应的类型和数据, 只有通过接口暴露的方法才可以调用, 类型的其他方法则无法通过接口来调用.

**空接口**`interface{}`对其实现类型没有任何要求, 所以我们可以值赋给空接口类型. 

判断是否实现接口只需要比较具体类型和接口类型的方法, 所以没有必要在具体类型的定义中声明这种关系.

<u>那些具体类型实现了接口, 是明确的, 但是没必要在具体的类型对这种关系进行说明.</u>



### 接口值

从概念上来讲, 一个接口类型的值(简称接口值) 其实有两个部分: 一个具体类型和该类型的一个值. 二者成为接口的动态类型和动态值.

**对于像Go这样的静态类型语言, 类型仅仅是一个编译时的概念, 所以类型不是一个值.**



### 一些建议

当设计一个新包时, 一个新手Go程序员会首先创建一系列接口, 然后再定义满足这些接口的具体类型. 这种方式会产生很多接口, 但这些接口只有一个单独的视线. 不要这样做.这种接口时不必要的抽象, 还有运行时的成本. 可以用导出机制(封装, 变量可见性)来限制一个类型的哪些方法或结构体的哪些字段是对包外可见的. 仅在有两个或者多个具体类型要按统一的方式处理时才需要接口.

这个规则也有特例, 如果接口和类型实现出于依赖的原因不能放在同一个包里边, 那么一个接口只有一个具体类型实现也是可以的. 这种情况下, 接口是一种解耦两个包的好方式.

因为接口仅在有两个或者多个类型满足的情况下存在, 所以它就必然会抽象掉哪些特有的实现细节. 这种设计的结果就是出现了具有更简单和更少方法的接口, 比如io.Writer和fmt.Stringer都只有一个方法. 设计新类型时越小的接口越容易满足. 一个不错的接口设计经验是仅要求你需要的.

Go语言能很好地支持面向对象编程风格, 但这并不意味着你只能使用它. 不是所以东西都必须是一个对象, 全局函数应该有他们的位置, 不完全封装的数据的数据类型也应该有位置. 



<u>接口的应用场景应该是, 让一个函数可以支持对多种具体类型进行操作, 相当于是对类型进行检查, 检查该类型是否满足了接口所定义的方法.</u>

<u>接口的作用是为不同的类型, 声明相同的方法, 使得代码更加统一, 类似于面向对象中的重写(多态), 不同的类型可以有不同的具体实现</u>





## 协程和通道-goroutine and channel

> 开销更小的并发能力.
>
> 并发编程: concurrent programming
>
> 顺序编程: sequential Programming
>
> 协程的本质是用户态线程

**并发编程表现为程序由若干个自主的活动单元组成**, 它从来没有像今天这样重要.

Web服务器可以一次处理数千个请求.平板电脑和手机应用在渲染用户界面的同时, 后端还同步进行着计算和处理网络请求.

甚至传统的批处理任务———读取数据、计算、将结果输出——也使用并发来隐藏I/O操作的延迟, 充分利用现代的多核计算机, 内核的个数每年变多,
但是速度没什么变化.

Go具有两种并发编程风格

第一种, 协程和通道, 通信顺序进程(Communicating Sequential Process, CSP), CSP是一个并发的模式, 在不同的执行体(goroutine)
之间传递值, 但是**变量本身局限于单一的执行体**.

第二种, 共享内存多线程(shared memory multithreading)的传统模型.

即使Go对并发的支持是其很大的长处, 并发编程本质上也比顺序编程要困难一些, 从顺序编程获取的直觉让我们加倍地迷茫.

### goroutine

> goroutine具有并发性, 同时运行.

```go
// A goroutine is a lightweight thread managed by the Go runtime.
go f(x, y, z)

// starts a new goroutine running
f(x, y, z)


```



在Go里, 每一个并发执行的活动称为goroutine.



当一个程序启动时, 只有一个goroutine来调用main函数, 称它为主goroutine. 新的goroutine通过go语句进行创建.

语法上, 一个go语句是在普通的函数或者方法调用前加上go关键字前缀.

```go
f()  // 调用 f(); 等待它返回
go f()  // 新建一个调用f()的goroutine, 不用等待
```

```go
package main

import (
	"fmt"
	"time"
)

// !+
func main() {
	go spinner(100 * time.Millisecond)
	const n = 45
	fibN := fib(n) // slow
	fmt.Printf("\rFibonacci(%d) = %d\n", n, fibN)
}

func spinner(delay time.Duration) {
	for {
		for _, r := range `-\|/` {
			fmt.Printf("\r%c", r)
			time.Sleep(delay)
		}
	}
}

func fib(x int) int {
	if x < 2 {
		return x
	}
	return fib(x-1) + fib(x-2)
}
//!-
```



除了从main返回或者退出程序之外, 没有程序化的方法让一个goroutine来停止另一个, 但是有办法和goroutine通信来要求它自己停止.



### channel

**如果说goroutine是Go程序并发的执行体, channel就是它们之间的连接.**

通道是可以让一个goroutine发送特定值到另一个goroutine的通信机制.

每一个channel是一个具体类型的导管(conduit), 叫作channel的元素类型. 一个有int类型的通道写为 `chan int`.



```go
// 使用内置的make函数来创建一个channel
ch := make(chan int)
```

和map一样, channel是一个使用make创建的数据结构的引用. 通道的零值是nil. 同种类型的channel可以使用==进行比较

通道有两个主要操作: 发送(send) 和接收(receive), 两者统称为通信(communications).

send语句从一个goroutine传输一个值到另一个在执行接收表达式的goroutine. 两个操作都是用 `<-` 操作符书写

```go
ch <- x  // 发送语句
x = <- ch  // 赋值语句中的接收表达式
<- ch  // 接收语句, 丢弃结果
close(ch)  // 关闭通道, 不再能够通过ch传递值
```

通道支持第三个操作: 关闭(close), 它设置了一个标志位来指示值当前已经发送完毕, 这个channel后面就没有值了; 关闭后的发送操作将导致宕机.

使用简单的make调用创建的channel叫无缓冲通道(unbufferd channel), 但make还可以接受第二个可选参数, 一个表示通道容量的整数

```go
ch = make(chan int)  // 无缓冲通道
ch = make(chan int, 0)  // 无缓冲通道
ch = make(chan int, 3)  // 容量为3的缓存通道
```

#### 无缓存通道

无缓存通道上的发送操作将会阻塞, 直到另一个goroutine在对应的通道上执行接收操作, 这时值传送完成, 两个goroutine都可以继续执行.

相反, 如果接收操作先执行, 接收方goroutine将阻塞, 直到另一个goroutine在同一个channel上发送一个值.

**使用无缓冲通道进行的通信导致发送和接收goroutine同步化(synchronize), 无缓冲通道也称为同步(synchronous)通道.**
当一个值在无缓冲通道上传递时, 接收值后发送方goroutine才被再次唤醒.

> 在讨论并发的时候, 当我们说x早于y发生时, 不仅仅是说x发生的时间早于y, 而是说保证它是这样, 并且是可预期的, 比如更新变量, 我们可以依赖这个机制.
>
> 当x既不比y早也不比y晚时, 我们说x和y并发. 这不意味着, x和y一定同时发生, 只说明我们不能假设他们的顺序. 在两个goroutine并发地访问同一个变量的时候, 有必要对这样的事件进行排序, 避免程序的执行发生问题



通过channel发送消息有两个重要的方面需要考虑. 每条消息有一个值, 但有时候通信本身以及通信发生的时间也很重. 当我们强调这方面的时候,
把消息叫作**事件(event)**. 当事件没有携带额外的信息时, 它单纯的目的是进行同步.

> 通常使用 bool 或 int类型的通道



#### 管道-pipeline

> 一个抽象概念

通过可以用来连接goroutine, 这样一个的输出是另一个的输入. 这个链路叫管道(pipeline)

3个goroutine由两个channel连接成一个三级管道(three-stage pipeline)

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	naturals := make(chan int)
	squares := make(chan int)

	go func() {
		for x := 0; ; x++ {
			naturals <- x
		}
	}()

	go func() {
		for {
			x := <-naturals
			squares <- x * x
		}
	}()

	for {
		fmt.Println(<-squares)
		time.Sleep(2 * time.Second)
	}
}
```



**通道关闭后, 任何后续的发送操作将会导致应用崩溃. 当关闭的通道被读完后, 所有后续的接收操作顺畅进行, 只是获取到的是零值.**



#### 单向通道类型

单向通道类型, 仅仅导出发送或接收操作. 

类型`chan<- int`是一个只能发送的通道, 允许发送但不允许接收.

反之, 类型`<-chan int` 是一个只能接收的通道, 允许接收但不能发送.

```go
chan<- "A"  // send : chan received from A, send A to chan
a := <-chan //  a receive from chan 
```



#### 缓冲通道

缓冲通道有一个元素队列, 队列的最大长度在创建的时候通过make的容量参数来设置.

缓冲通道上的发送操作在队列的尾部插入一个元素, 接收操作从队列的头部移除一个元素.

如果通道满了, 发送操作会阻塞所在的goroutine直到另一个goroutine对它进行接收操作来流出空间.

反过来, 如果通道是空的, 执行接收操作的goroutine阻塞, 直到另一个goroutine在通道上发送数据.

<u>缓冲通道满足先进先出原则, 相当于维护了一个队列, 只能从通道头部取数据, 发送到通道尾部</u>

```go
// 当channel为空时可以无阻塞地发送三个值
ch = make(chan string, 3)
ch <- "A"
ch <- "B"
ch <- "C"

fmt.Println(<- ch)  // "A"
fmt.Println(cap(ch))  // 获取通道容量
fmt.Println(len(ch))  // 获取通道长度
```

#### 并行循环

> looping in parallel





#### 使用select多路复用

> multiplexing with select

```go
select {
    case <- ch1:
        // ...
    case <- ch2:
        // ...
    case <- ch3:
        // ...
    default:
        // ...
}
```

#### 取消

## 使用共享变量实现并发-concurrence

> 并发编程的重要难题和陷阱
>
> 使用共享变量实现并发 concurrency with shared memory

### 竞态-race conditions

在串行程序(sequential program)中(即一个程序只有一个goroutine), 程序中各个步骤的执行顺序由程序逻辑来决定. 比如, 在一系列语句中,
第一句在第二句之前执行, 以此类推.

当一个程序有两个或以上goroutine时, 每个goroutine内部的各个步骤是顺序执行的, 但我们无法知道各自事件中的x和y的顺序.
如果我们无法确定事件x和事件y的先后顺序, 那么这两个事件就是**并发的(concurrent)**.

一个能在串行程序中正确工作的函数如果在并发调用时仍然能够正确工作, 那么这个函数是并发安全(concurrency-safe)的, 在这里并发调用是指, 在没有额外同步机制的情况下, 从两个或者多个goroutine同时调用这个函数.

这个概念也可以推广到其他函数, 比如方法或者作用域特定类型的一些操作. 如果一个类型的所有可访问方法(methods)和操作(
operations)都是并发安全时, 则称之为并发安全的类型.

如果要回避并发访问, 要么限制变量只存在于一个goroutine呢, 要么维护一个更高层的 **互斥不变量**(invariant of mutual exclusion.).

导出的包级别的函数通常可以认为是并发安全的. 因为包级别的变量无法限制在一个goroutine呢,
所以那些修改这些变量的函数就必须采用互斥机制(mutual exclusion).

**竞态是指在多个goroutine按某些交错顺序执行时程序无法给出正确的结果.**

竞态对于程序是致命的, 因为它们可能潜伏在程序中, 出现频率也很低, 有可能仅在高负载环境或在使用特定的编译器、平台和架构时才出现.
这些都让竞态很难再现和分析.

### 互斥锁: sync.Mutex

### 读写互斥锁: sync.RWMutex

```go
var mu sync.RWMutex

var balance int
func  Balance() int {
    mu.RLock()  // 读锁
    defer mu.RUnlock()
    return balance
}
```

### 内存同步

现代计算机一般都会有多个处理器, 每个处理器都有内存的本地缓存. 为了提高效率, 对内存的写入是缓存在每个处理器中的,
只在有必要时才刷回内存.

### 延迟初始化: sync.Once

### 竞态检测器

### goroutine与线程

## 包和go工具-Packages and go tools

通过包来实现代码的复用

包索引 http://godoc.org

>
>
>使用go工具下载、构件、运行样例程序.

任何包管理系统的目的都是通过对关联的特性进行分类, 组织成便于理解和修改的单元, 使其与程序的其他包保持独立,
从而有助于设计和维护大型程序.

模块化允许包在不同的项目中共享、复用, 在组织中发布, 或者在全世界范围内使用.

每个包定义了一个不同的命名空间作为它的标识符. 每个名字关联一个具体的包, 它让我们在为类型、函数等选取短小而且清晰地名字的同时,
不与程序的其他部分冲突.

包通过控制名字是否导出使其对外可见来提供封装能力(encapsulation).

go工作空间组织

```
GOPATH/
	src/  源文件
	bin/  二进制文件, 可执行程序
	pkg/  构件工具存储编译后的包的位置
```

## 测试-tests

> "我强烈地意识到我余生的很大一部分时间都将用来寻找我程序中的错误. "
>
> ### Which testing frameworks do you use regularly?
>
> built-in testing 44% 最多

<u>处理程序错误的两种常见方法: 第一种, 软件发布之前的例行同行评审; 第二种, 编写测试.</u>

测试时自动化测试的简称, 编写简单的程序来确保程序(产品代码)在该测试中针对特定输入产生预期的输出.

这些测试通常要么是经过精心设计之后用来检测某种功能, 要么是随机性的, 用来扩大测试的覆盖面.

Go的测试方法看上去相对比较低级. 它依赖于命令`go test`和一些能用`go test`运行的测试函数编写约定.

实际上, 编写测试代码和编写原始程序并没有什么不同. 我们编写聚焦于任务的部分功能的简单函数.

我们必须谨防**条件边界**, 思考**数据结构**, 并且合理地设计如何**根据合适的输入得到输出**. 这和编写常规的Go代码没有区别,
这不需要新的注解(notations)、约定(conventions)和工具(tools).

### go test 工具

`_test.go`结尾的文件不是go build命令编译的目标, 而是`go test`的编译目标.

在 `*_test.go` 文件中, 三种函数需要特殊对待, 即 **功能测试函数**, **基准测试函数** 和 **示例函数** .

**功能测试函数**: 以`Test`前缀命名的函数, 用来检测一些程序逻辑的正确性, `go test` 运行测试函数, 并报告结果是 `PASS`
还是 `FAIL` .

**基准测试函数**: 以 `Benchmark` 开头, 用来测试某些操作的性能, `go test` 汇报操作得物平均执行时间.

**示例函数**: 以`Example` 开头, 用来提供机器检查过的文档.

<u>`go test` 工具扫描 `*_test.go` 文件来寻找特殊函数, 并生成一个临时的main包来调用它们, 然后编译和运行, 并汇报结果,
最后清空临时文件.</u>



### Test 函数

每一个测试文件必须导入 testing 包. 这些函数的函数签名如下:

```go
func TestName(t *testing.T) {
    // ...
}
```

功能测试函数必须以Test开头, 可选的后缀名称必须以大写字母开头

```text
func TestSin(t *testing.T) { /* ... */ }  // Test后的后缀名必须首字母大写
func TestCos(t *testing.T) { /* ... */ }
func TestLog(t *testing.T) { /* ... */ }
```

参数t提供了汇报测试失败和日志记录的功能

<u>基本思路是判断输出结果与预期输出是否一致, 如果不一致则测试不通过</u>

比较好的实践是先写测试然后发现它触发的错误和用户bug报告里面的一致. 只有这个时候我们才能确信我们修复的内容是针对这个出现的问题的.

另外, 运行go testbi手动测试bug报告中的内容要快得多, 测试可以让我们顺序地检查内容. 如果一个测试套件(test suite)里面有很多测试用例, 我们可以选择性地测试用例来添加测试过程.

基于列表的测试方式在Go里面很常见(根据输入参数特性, 指定一定数量的输入集, 列举不同案例下的预期结果).

测试错误消息的一般格式是"f(x)=y, want z", f(x)表示需要执行的操作和它的输入, y是实际输出结果, z是期望得到的结果. 

#### 随机测试

基于表的测试方便针对精心选择的输入检测函数是否工作正常, 以测试逻辑上引人关注的用例. 另外一种方式是随机测试,通过构建随机输入来扩展测试的覆盖范围. 

如果给出的输入是随机的, 我们怎么知道函数输出什么内容呢? 这里有两种策略. 一种是方式就是额外写一个函数, 这个函数使用低效但是清洗的算法, 然后见着这两种实现的输出是否一致. 另一种方式是构建符合某种模式的输入, 这样我们可以知道他们对应的输出是什么. 

#### 白盒测试

#### 编写有效的测试

很多初学Go的人都对Go测试框架的极简主义感到惊奇. 其他语言的框架提供了识别测试函数的极值(一般通过反射或者元数据), 在测试前后执行测试启动和销毁的钩子, 以及为常规的断言, 值比较, 错误消息格式化和终止失败的测试(一般通过抛出异常的方式)提供工具方法的库. 虽然这些机制可以让测试编写更加精细, 但是导致的结果是这些测试看上去像是用一门其他语言编写. 而且, 尽管他们也能准确地报告测试结果是PASS还是FAIL, 但是报告的方式对可怜的维护者来讲或许并不友好, 比如模糊的错误消息"assert: 0==1"或者一页的跟踪栈信息.

Go对测试的看法是完全不同的, 它期望测试的编写者自己来做大部分的工作, 通过定义函数来避免重复, 就像他们为普通函数所做的那样. 测试的过程不是死记硬背地填表格, 测试也是有用户界面的, 虽然它的用户也是它的维护者. 一个好的测试不会在发生错误时崩溃而是输出该文艺一个简洁, 清洗的现象描述, 以及其他与上下文相关的信息. 理想情况下, 围护桩不需要再通过阅读源代码来探究测试失败的原因. 一个好的测试不应该在发现一次测试失败后就终止, 而是需要再一次运行中尝试报告多个错误, 因为错误发生的方式本身会揭露错误的原因.

一个好测试的关键是首先实现你所期望的具体行为, 并且仅在这个时候在使用工具函数来是代码简洁并且避免重复. 好的结果很少是从抽象的, 通用的测试函数开始的. 

#### 避免脆弱的错误

如果一个樱桃在遇到新的合法输入的情况下经常崩溃, 那么这个程序时有 **缺陷**·*buggy* 的; 如果在程序发生可靠的改动的时候测试用例奇怪地失败了, 那么这个测试用例也是 **脆弱**·*brittle* 的. 如果有缺陷的程序会让用户感到沮丧, 脆弱的测试也会激怒它的维护者. 

### 覆盖率·Coverage

<!--TODO 测试相关, 实际有需求后再完善-->

### Benchmark函数

### 性能剖析

### Example函数



## 反射-reflection

Go语言提供了一种 **机制**·*mechanism*, 在编译时不知道类型的情况下, 可更新变量, 在运行时查看值, 调用用方法以及直接对他们的布局进行操作, 这种机制成为 **反射**·*reflection* .反射也让我们可以把类型当做 **头等值**·*first-class values* .

<!--TODO 反射 -->

## 机制mechanism

### 应用场景use cases

不知道接口调用那个函数, 根据入参在运行时决定调用那个函数

序列化数据

转换 接口, 变量, 值转换

## 低级编程

# Go面试题

> 参看xmind文档

