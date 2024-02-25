---
aliases:
    - grpc
    - protobuf
    - protocol buffers
tags:
---



# gRPC框架

API

REST API use JSON

GRAPHQL

## 参考资料

- [grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway)
    - [guide-to-grpc-gateway](https://blog.logrocket.com/guide-to-grpc-gateway/)
    
- [RPC课件](/Users/wwfyde/Desktop/课件汇总/RPC/index.html)

- [protobuf-go-tutorials](https://protobuf.dev/getting-started/gotutorial/)

- [代码生成指南-Go_Generated_Code_Guide](https://protobuf.dev/reference/go/go-generated/)

- 


### 示例

- https://earthly.dev/blog/golang-grpc-example/
- 
- 

## 多维解释

- RPC通常用于产品内部服务器间, HTTP则常用在用户和产品服务器上. 



## Introduction

### Why gRPC?

gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services.

`gRPC`是一个可以运行在任何环境中的开源且先进高性能RPC框架. 它可以高效连入跨数据中心的各个服务, 并且支持可插拔的负载均衡, 追踪, 健康检查和认证. 它也可以作为分布式计算的连接器, 包括设备, 移动应用和浏览器后端服务等. 

## Features

- 轻松定义服务(simple service define)
    - Define your service using Protocol Buffers, a powerful binary serialization toolset and language
- 启动快速并可伸缩(start quickly and scale)
    - Install runtime and dev environments with a single line and also scale to millions of RPCs per second with the framework
- 跨语言和平台运行(work across languages and platforms)
    - Automatically generate idiomatic client and server stubs for your service in a variety of languages and platforms
- 双向流和认证集成(Bi-directional streaming and integrated auth)
    - Bi-directional streaming and fully integrated pluggable authentication with HTTP/2-based transport

## 应用场景

> Why would I want to use gRPC?

分布式系统中, 用于服务端之间通信

### Why would I want to use gRPC? [¶](https://grpc.io/docs/what-is-grpc/faq/#why-would-i-want-to-use-grpc)

The main usage scenarios:

- Low latency, highly scalable, distributed systems.
    低延迟且高可伸缩性的分布式系统.
- Developing mobile clients which are communicating to a cloud server.
    开发需要与云服务器通讯的移动客户端
- Designing a new protocol that needs to be accurate, efficient and language independent.
    设计一个需要时精确, 高效且与语言无关的新协议
- Layered design to enable extension eg. authentication, load balancing, logging and monitoring etc.
    分层设计以实现支持扩展认证, 负载均衡, 日志和监控等.



# 术语表·Glossary

## List

- RPC
    远程过程调用(remote procedure call)
- A local procedure call is a function call with in a process to execute some code 
- protobuf
    - grpc use protobuf to encode and send data over the wire by default.




## RPC

> 参考链接
>
> - [wiki: RPC](https://en.wikipedia.org/wiki/Remote_procedure_call)
> - [百科:](https://baike.baidu.com/item/远程过程调用/7854346)

> In [distributed computing](https://en.wikipedia.org/wiki/Distributed_computing), a **remote procedure call** (**RPC**) is when a computer program causes a procedure (subroutine) to execute in a different [address space](https://en.wikipedia.org/wiki/Address_space) (commonly on another computer on a shared network), which is written as if it were a normal (local) procedure call, without the programmer explicitly writing the details for the remote interaction. That is, the programmer writes essentially the same code whether the subroutine is local to the executing program, or remote. This is a form of client–server interaction (caller is client, executor is server), typically implemented via a request–response message-passing system. In the object-oriented programming paradigm, RPCs are represented by remote method invocation (RMI). The RPC model implies a level of location transparency, namely that calling procedures are largely the same whether they are local or remote, but usually, they are not identical, so local calls can be distinguished from remote calls. Remote calls are usually orders of magnitude slower and less reliable than local calls, so distinguishing them is important.
>
> RPCs are a form of inter-process communication (IPC), in that different processes have different address spaces: if on the same host machine, they have distinct virtual address spaces, even though the physical address space is the same; while if they are on different hosts, the physical address space is different. Many different (often incompatible) technologies have been used to implement the concept.

在分布式计算领域, RPC(Remote Procedure Call)远程过程调用

# Quick Start

## 基本思路

> 如何使用

> 首先安装前置环境protoc proto-gen-go proto-gen-go-grpc命令
>
> 编写proto文件, pb接口(go中需要声明syntax, go_package, package 三个命令)
>
> 根据proto文件编译生成相应语言的代码(每次重新改动proto文件后, 都应该重新编译生成protobuf代码)
>
> 手动编写客户端和服务端代码(如何引用生成的代码?)
>
> 导入grpc包和pb(由编译器生成的包)

```shell
#  get protobuf
go get -u google.golang.org/protobuf
#  get grpc
go get -u google.golang.org/grpc


#  install protobuf compiler
brew install protobuff

# install protoc-gen-go
# a protobuf runtime for go that used for generating go code
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

# Define your gRPC service and generate the gRPC stub cod
# 1.Create a .proto file that defines your gRPC service and messages.
# 2.Use the Protocol Buffers compiler (protoc) to generate the necessary Go code for the gRPC service. This will generate the client and server stubs.

# wirte proto file


# gen code
protoc --go_out=gen --go_opt=paths=source_relative \
  --go-grpc_out=gen --go-grpc_opt=paths=source_relative \
  -I=$PWD pb/helloworld.proto

protoc --proto_path=src --go_out=out --go_opt=paths=source_relative foo.proto bar/baz.proto

# Implement the gRPC server:
# 1. Create a new Go file to define your gRPC server implementation.
# 2. Implement the methods defined in your gRPC service interface.

Initialize a Gin router:
Import the necessary Gin and gRPC packages.
Create a new Gin router.

Register the gRPC server with the Gin router:
Create a new gRPC server instance.
Register your gRPC server implementation with the server.
Create a listener on a specific port for the gRPC server.

Start the gRPC server:
Start the gRPC server in a separate Goroutine.

Handle gRPC requests in Gin:
Define a Gin handler function that handles the incoming HTTP requests.
Inside the handler, create a gRPC client connection to the server.
Make gRPC calls using the generated client stubs.
Return the response to the HTTP client.




```

## 常见问题FAQ

### protobuf compiler

>  The protocol buffer compiler, `protoc`, is used to compile `.proto` files, which contain service and message definitions. 

```shell
brew install protobuf

protoc --version 
```



proto文件包含了服务和消息定义

### proto file



## 基础教程(Basical Tutorials)

> [Basic Tutorials](https://grpc.io/docs/languages/go/basics/)

通过本教程你将学会:

- 在`.proto`文件中定义一个service
- 使用protocol buffer编译器生成服务端和客户端代码
- 使用Go gRPC API为你的service写一个简单的客户端和服务端应用

## ALTS authentication

[应用层传输安全(Application Layer Transport  Security, ALTS)](https://grpc.io/docs/languages/go/alts/)

> Application Layer Transport Security (ALTS) is a mutual authentication and transport encryption system developed by Google. It is used for securing RPC communications within Google’s infrastructure. ALTS is similar to mutual TLS but has been designed and optimized to meet the needs of Google’s production environments. For more information, take a look at the [ALTS whitepaper](https://cloud.google.com/security/encryption-in-transit/application-layer-transport-security).

ALTS是由Google开发的一种互相认证和传输加密系统. 用于在Google基础设施中的RPC安全通信. ALTS与相互的TLS相似, 但是ALTS根据Google产品环境需求进行了重新设计和优化. 更多相关信息, 请查看[ALTS白皮书](https://cloud.google.com/security/encryption-in-transit/application-layer-transport-security)

在gRPC中, ALTS具有如下特征:

- gRPC客户端和服务端使用ALTS创建传输安全协议;
- ALTS连接从端到端保护传输的隐私性和完整性;
- 应用可以访问对等信息(peer information), 例如对等服务账号;
- 支持客户端和服务端授权;
- 尽可能少的代码修改以启用ALTS.

gRPC用户可以使用少量代码配置应用以使用ALTS作为传输安全协议.



## API

## 生成的代码Generated code

双向数据流中的单个流不支持并发读或并发写()

# 零散记录

gRPC请求响应模式

gRPC是一种Client-Server mode 框架



# protobuf

> > 关键词: `Protocol Buffers`	`缓冲协议`
>
> 参考链接
>
> - [protobuf:Protocol Buffers](https://protobuf.dev)
> - [Go API](https://pkg.go.dev/google.golang.org/protobuf/proto)
> - [go-protobuf](https://pkg.go.dev/google.golang.org/protobuf)
> - [protobuf-go repo](https://github.com/protocolbuffers/protobuf-go)
> - [protocol buffer developer guide](https://protobuf.dev/overview)
> - [Protocol Buffer Basics: Go](https://protobuf.dev/getting-started/gotutorial/)

## 概述·Overview

> Protocol Buffers are a language-neutral, platform-neutral, extensible mechanism for serializing structured data.
>
> Protocol Buffers 一种用于序列化结构数据的机制, 它是语言中立的, 平台中立的, 可扩展的.



```protobuf
message Person {
  optional string name = 1;
  optional int32 id = 2;
  optional string email = 3;
}
```

**What are Protocol Buffers?:**

​	Protocol buffers are Google’s language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages.

类似xml, 但是更小更快更简单, 你一旦定义了数据是如何组织的之后, 你就可以用特别生成的源码, 通过源码你可以轻松地通过不同语言和不同的数据流去写和读你的结构化数据.

**如何使用?**

​	下载安装protobuf编译器, 阅读概述, 使用你选择的语言尝试教程.



> Protocol buffers provide a language-neutral, platform-neutral, extensible mechanism for serializing structured data in a forward-compatible and backward-compatible way. It’s like JSON, except it’s smaller and faster, and it generates native language bindings. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages.
>
> Protocol buffers are a combination of the definition language (created in`.proto` files), the code that the proto compiler generates to interface with data, language-specific runtime libraries, and the serialization format for data that is written to a file (or sent across a network connection).
>
> Protocol Buffers使用向前兼容和向后兼容的方式. 它很像JSON, 除此之外它更小更快,并且生成原生语言绑定.
>
> Protocol Buffers是一个定义语言的组合体(创建在.proto文件中), proto编译器通过文件中的代码生成相应的接口数据,指定语言运行时库和数据的序列化格式, 并将其写入到一个文件中或通过网络连接发送.

### What Problems do Protocol Buffers Solve?



### What are the Benefits of Using Protocol Buffers?

> Protocol buffers are ideal for any situation in which you need to serialize structured, record-like, typed data in a language-neutral, platform-neutral, extensible manner. They are most often used for defining communications protocols (together with gRPC) and for data storage.
>
> Some of the advantages of using protocol buffers include:
>
> - Compact data storage
> - Fast parsing
> - Availability in many programming languages
> - Optimized functionality through automatically-generated classes

当你需要用某种与语言和平台无关且可扩展的方式来序列化你的结构化, 类似记录, 类型化的数据是, Protocol buffers是一种非常理想的方式. 它经常用于定义通信协议(与gRPC框架一起)和数据存储.它的优势包括: 紧凑的数据存储, 快速解析, 多种编程语言可用, 通过自动生成类优化功能.



#### 跨语言兼容

#### 跨项目支持

通过`.proto`文件实现跨项目支持, 只需将该文件放置到需要的项目中即可. 

#### 更新proto定义时无需更新代码

向后兼容是软件的基本原则, 但是向前兼容并不常见.当你更新`.proto`文件时只要遵循 最佳实践· [simple practices](https://protobuf.dev/programming-guides/proto3/#updating)

,旧的代码读取更新的信息完全没问题,并且忽略任何新增加的字段. 对于那些旧的代码, 字段被删除时将会有特定的默认值, 重复删除则会导致字段结果为空. 

### When are Protocol Buffers not a Good Fit?

协议缓冲区什么时候是不适用的?

### Who Uses Protocol Buffers?

[谁在用](https://protobuf.dev/overview/#who-uses)

grpc

### How do Protocol Buffers Work?

[如何工作](https://protobuf.dev/overview/#work)

The following diagram shows how you use protocol buffers to work with your data.

![protobuf-work-flow](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306021551163.png)

The code generated by protocol buffers provides utility methods to retrieve data from files and streams, extract individual values from the data, check if data exists, serialize data back to a file or stream, and other useful functions.

protocol buffers生成的代码提供了实用方式以从文件和流中检索数据, 从数据中提取单独的值, 检查文件是否存在, 从文件或流中反序列化数据和其他有用的功能

The following code samples show you an example of this flow in Java. As shown earlier, this is a `.proto` definition:	

### Protocol Buffers Definition Syntax

[Protocol Buffers定义语法](https://protobuf.dev/overview/#syntax)



## 编程指南:Programming Guides



## Go References Guides

## Go Tutorials



# proto

# protoc

```shell
# Example
protoc 


# options and arguments

# Generated go files output path
--go_out
--go_out=.

--go_opt=paths=source_relative

--go-grpc_out=.

--go-grpc_opt=paths=source_relative



```



# Introduction

本节内容主要介绍`gRPC`和`protocol buffers`. `gRPC`可以使用`protocol buffers`作为协议两端的**接口定义语言**(Interface Definition Language,IDL)和底层**消息(message)**交互格式.

## Overview

在gRPC中, 客户端应用可以直接调用不同机器上的服务端应用的**方法(method)**, 就像是一个本地对象一样, 这让创建分布式应用和服务变得简单. 和许多RPC系统一样, gRPC的基本思路是定义一个**服务(service)**, 服务指定方法, 方法可以被远程调用的同时携带参数并返回类型. 在服务端, 服务端实现接口并运行一个gRPC服务来处理客户端调用. 在客户端, 客户端有一个**存根(stub)**(指代某种语言的客户端), 存根提供了和服务端一样的方法. 

![landing-2](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306231521300.svg)

gRPC客户端和服务端可以在不同的运行环境之间运行和交流——从服务端(Google)到你的桌面——也可以被写成任何gRPC支持的语言. 因此, 比如, 你可以轻松创建一个Java编写的gPRC服务端,并使用Go或Python编写的客户端. 此外, 最近的Google API将会包含接口的gRPC版本, 这让你轻松构建Google函数到你的应用中. 



## 使用Protocol Buffers

默认情况下, gRPC使用[Protocol Buffers](https://protobuf.dev/overview), Google的一套用于序列化结构数据的开源成熟机制(尽管序列化结构数据也可以使用其他数据格式比如JSON). 下面是Protocol Buffers如何工作的快速介绍. 如果你已经熟悉它, 可以跳过到下一个章节.

首先, 定义一个用于序列化的数据结构到proto文件(扩展名为proto的普通文本文件)中. PB数据被结构化为消息(message), 每个消息是一个小的逻辑记录信息, 包含了一系列叫作字段(field)的name-value对. 简单示例如下:

```protobuf
message Person {
	string name = 1;
	int32 id = 2;
	bool has_ponycopter = 3;
}
```

然后, 一旦指定数据结构后, 使用protocol buffer编译器`protoc`, protoc根据proto定义和指定的语言生成相应的**数据存取类**(data access class). 这为每个字段提供了一个简单的存取器, 像`name()`和`set_name()`, 也包括方法去序列化/解析整个结构为原生字节串. 因此, 如果你指定的语言是C++, 编译器运行上面的例子将会生成一个`Person`类. 之后你可以在应用中使用这个类去 填充(populate), 序列化和检索 `Person` proto buffer 消息.

> 填充, populate, 设置message对象字段的值, 定义一个message, 创建一个message 然后设置其中字段的值, 这个字段称为填充

在proto文件中定义一个普通的gRPC服务, 使用RPC方法参数和返回类型指定protocol buffer 消息:

```protobuf
// The greeter service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}
```

gRPC使用携带特殊gRPC插件的protoc编译器将proto文件编译成代码: 生成的gPRC客户端和服务端代码,也是用于填充,序列化和检索消息类型的规范protocol buffer代码. 要学习更多protocol buffer, 包括如何安装protoc和指定语言的gRPC插件, 参考[protocol buffers documentation](https://protobuf.dev/overview).

## Protocol buffer versions

推荐使用 proto3.

# Core concepts, architecture and lifecycle

> [Core concepts, architecture and lifecycle](https://grpc.io/docs/what-is-grpc/core-concepts/)
>
> 核心概念, 架构和生命周期
>
> 本章节介绍gRPC核心概念, 包括gRPC架构概述和RPC生命周期. 

## 概述

### 服务定义-Service definition

```protobuf
service HelloService {
  rpc SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
  string greeting = 1;
}

message HelloResponse {
  string reply = 1;
}
```

gRPC支持定义四种service方法:

- `Unary RPC` : 客户端发送一个单一请求到服务端, 得到一个返回的单一响应, 就像普通的函数调用一样.

    ```protobuf
    rpc SayHello(HelloRequest) returns (HelloResponse);
    ```

    

- `Server streaming RPC`: 客户端发送一个请求到服务端, 得到一个返回的读取消息序列的流. 客户端从返回的流中读取消息直到完成. gRPC保证消息顺序在一个单独的RPC调用内.

    ```protobuf
    rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse);
    ```

- `Client streaming RPC`: 客户端编写一个消息序列并发送到服务端, 重复使用一个提供的流. 一旦客户端完成写入消息, 它等待服务端读取完消息并返回一个响应. gRPC再次保证消息顺序在一个单独的RPC调用内.

    ```protobuf
    rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse);
    ```

- `Bidirectional streaming RPC`: 使用读写流双向发送消息序列. 两个流各自独立操作, 因此客户端和服务端可以按照想要的顺序读写: 例如, 服务端可以在写一个响应之前等待所有客户端消息接收完成,或它可以读一个消息写一个消息, 或一些其他的联合读和写. 每个流中的消息顺序是得到保护的.

    ```protobuf
    rpc BidiHello(stream HelloRequest) returns (stream HelloResponse);
    ```

你将会在下面章节[RPC life cycle](https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle)中学到更多不同的类型.

### 使用API

从在`.proto`文件中定义一个service开始, gRPC提供protocol buffer编译器插件, 该插件生成客户端和服务端代码. 在客户端调用这些API, 在服务端实现相应的API.

- 在服务端, 服务器实现由service声明方法, 运行一个gRPC server以处理调用. gRPC基础设施解码到来的请求, 执行服务方法, 编码服务响应.
- 在客户端, 客户机存有一个被称为stub的本地对象(某些语言中更喜欢称之为client), 该对象实现了跟服务器上的service相同的方法. 客户机仅仅需要调用本地对象中的方法, 这些方法携带参数来让调用选择合适protocol buffer消息类型, 发送请求到服务端, 服务端返回protocol buffer响应.

### 同步和异步



### RPC生命周期

### Unary RPC

### 服务端流RPC

### 客户端流RPC

### Bidirectional streaming RPC

### Deadlines/Timeouts [􀉣](https://grpc.io/docs/what-is-grpc/core-concepts/#deadlines)

### RPC termination[ ](https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-termination)

### Cancelling an RPC[ ](https://grpc.io/docs/what-is-grpc/core-concepts/#cancelling-an-rpc)

### Metadata[ ](https://grpc.io/docs/what-is-grpc/core-concepts/#metadata)

### Channels[ ](https://grpc.io/docs/what-is-grpc/core-concepts/#channels)









### 

# RPC简介

> 该资料来源于 《RPC原理与实践》课程, 视频资料

## 1. 什么是RPC

**远程过程调用**（英语：**Remote Procedure Call**，缩写为 **RPC**，也叫**远程程序调用**）是一个计算机通信协议。该协议允许运行于一台计算机的程序调用另一台计算机的子程序，而程序员无需额外地为这个交互作用编程。如果涉及的软件采用面向对象编程，那么远程过程调用亦可称作**远程调用**或**远程方法调用**。

![RPC示意图](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202307171723083.png)

## 2. 背景与用途

在单台计算机中，我们可以通过程序调用来传递控制和数据；或者说通过程序调用，我们可以将多个程序组成一个整体来实现某个功能。

如果将这种调用机制推广到多台彼此间可以进行网络通讯的计算机，由多台计算机中的多个程序组成一个整体来实现某个功能，这也是可以的。调用的一方（发起远程过程调用，然后调用这方的环境挂起，参数通过网络传递给被调用方，被调用的一方执行程序，当程序执行完成后，产生的结果再通过网络回传给调用的一方，调用的一方恢复继续执行。这样一种原型思想，就是我们所说的RPC远程过程调用。

![单机到多机](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202307171725711.png)

RPC这种思想最早可以追溯到1976年，RPC的发展到今天已经40年有余了。

如今的计算机应用中，单机性能上很难承受住产品的压力，需要不断扩充多台机器来提升整体的性能。同时为了充分利用这些集群里的计算机，需要对其从架构上进行划分，以提供不同的服务，服务间相互调用完成整个产品的功能。RPC就能帮助我们解决这些服务间的信息传递和调用。

## 3. 概念说明

关于RPC的概念，我们可以从广义和狭义来分别进行理解。

#### 广义

我们可以将所有通过网络来进行通讯调用的实现统称为RPC。

按照这样来理解的话，那我们发现HTTP其实也算是一种RPC实现。

![HTTP](/Users/wwfyde/Desktop/课件汇总/RPC/RPC原理与实践第二部分课件/images/HTTP.png)



#### 狭义

区别于HTTP的实现方式，在传输的数据格式上和传输的控制上独立实现。比如在机器间通讯传输的数据不采用HTTP协议的方式（分为起始行、header、body三部份），而是使用自定义格式的二进制方式。

我们更多时候谈到的RPC都是指代这种狭义上的理解。

## 4. 优缺点

相比于传统HTTP的实现而言：

#### 优点

- 效率高
- 发起RPC调用的一方，在编写代码时可忽略RPC的具体实现，如同编写本地函数调用一样

#### 缺点

- 通用性不如HTTP好 因为传输的数据不是HTTP协议格式，所以调用双方需要专门实现的通信库，对于不同的编程开发语言，都要有相关实现。而HTTP作为一个标准协议，大部分的语言都已有相关的实现，通用性更好。

HTTP更多的面向用户与产品服务器的通讯。

RPC更多的面向产品内部服务器间的通讯。

# RPC结构

RPC的设计思想是力图**使远程调用中的通讯细节对于使用者透明**，调用双方无需关心网络通讯的具体实现。因而实现RPC要进行一定的封装。

RPC原理上是按如下结构流程进行实现的。

![RPC结构](/Users/wwfyde/Desktop/课件汇总/RPC/RPC原理与实践第二部分课件/images/RPC结构.png)

#### 流程：

1. 调用者（Caller, 也叫客户端、Client）以本地调用的方式发起调用；
2. Client stub（客户端存根，可理解为辅助助手）收到调用后，负责将被调用的方法名、参数等打包编码成特定格式的能进行网络传输的消息体；
3. Client stub将消息体通过网络发送给对端（服务端）
4. Server stub（服务端存根，同样可理解为辅助助手）收到通过网络接收到消息后按照相应格式进行拆包解码，获取方法名和参数；
5. Server stub根据方法名和参数进行本地调用；
6. 被调用者（Callee，也叫Server）本地调用执行后将结果返回给server stub;
7. Server stub将返回值打包编码成消息，并通过网络发送给对端（客户端）；
8. Client stub收到消息后，进行拆包解码，返回给Client；
9. Client得到本次RPC调用的最终结果。

**RPC的目标就是要2~8这些步骤都封装起来，让使用者对这些细节透明。**

在了解了RPC流程之后，为了实现RPC，我们还需要关注两点：

- **消息协议**

    客户端调用的参数和服务端的返回值这些在网络上传输的数据以何种方式打包编码和拆包解码。

    我们可以使用HTTP协议中关于报文格式的规定（如此一来，就编程了HTTP通讯），也可以自己定义某种格式，让客户端与服务端双方都遵循此种格式。

- **传输控制**

    在网络中数据的收发传输控制具体如何实现。





# kratos

# go-zero

# dubbo-go

# kitex

(cloudwego, bytedance)

# trpc-go



