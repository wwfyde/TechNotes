# Linux系统原理

## 参考资料

- 极客时间- Linux操作系统
- 《深入Linux内核架构》

# Glossary

- NFS(Network File System, 网络文件系统)
    - 替代: S3, OSS, MinIO

# Linux内核知识体系

- 《深入Linux内核架构》

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202310141814591.jpeg)

## Introduction

Linux 内核：Linux 内核是 Linux 系统的核心，控制着整个系统的运行和资源管理，包括进程管理、内存管理、文件系统等。了解 Linux 内核的原理和机制对于理解整个系统的运行非常重要。

## 进程管理和调度

## 内存管理

## 进程虚拟内存

## 锁与进程间通信

## 文件系统

## 设备驱动程序

## 网络

## 系统调用

## 缓存

## 数据同步



# 基础概念



## 线程 - Thread

**线程**（英语：thread）是[操作系统](https://zh.wikipedia.org/wiki/操作系统)能够进行运算[调度](https://zh.wikipedia.org/wiki/调度)的最小单位。大部分情况下，它被包含在[进程](https://zh.wikipedia.org/wiki/进程)之中，是[进程](https://zh.wikipedia.org/wiki/进程)中的实际运作单位。一条线程指的是[进程](https://zh.wikipedia.org/wiki/进程)中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。

线程是独立调度和分派的基本单位。线程可以为操作系统内核调度的内核线程.

同一进程中的多条线程将共享该进程中的全部系统资源，如虚拟地址空间，[文件描述符](https://zh.wikipedia.org/wiki/文件描述符)和[信号处理](https://zh.wikipedia.org/wiki/信号处理)等等。

### 多线程实现

多线程切换由操作系统控制的

## 进程 - Process

## 子程序 - subroutine





## 协程 - Coroutine

> 协程应该是**coroutine**这类东西，全称是cooperative routine，也叫做cooperative tasks。
>
> 只看英文的话，意思已经很明显了：协同运行的子程序(子程序就是例程、函数、过程)。或者说是协同执行的任务。

## 管道 - Pipe 

> 管道通信, 管道命令, 管道函数, 管道对象
>
> 上一个进程的输出(stdout) 作为下一个进程的输入(stdin)

管道是内核管理中的一个缓冲区

### 特性

由于基于fork机制，所以管道只能用于父进程和子进程之间，或者拥有相同祖先的两个子进程之间 (有亲缘关系的进程之间)。为了解决这一问题，Linux提供了FIFO方式连接进程。FIFO又叫做命名管道(named PIPE)

### 应用场景

```shell

```



## 派生 - Fork

> 分支, 派生



## [轮询](http://man7.org/linux/man-pages/man7/epoll.7.html) - Poll

> 投票



**`epoll`** is a [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel) [system call](https://en.wikipedia.org/wiki/System_call) for a scalable I/O event notification mechanism, first introduced in version 2.5.44 of the [Linux kernel mainline](https://en.wikipedia.org/wiki/Linux_kernel_mainline).[[1\]](https://en.wikipedia.org/wiki/Epoll#cite_note-1) Its function is to monitor multiple file descriptors to see whether I/O is possible on any of them. 

## 流 - Stream

设备或程序间输入/输出时交互的对象, 流意味着一种连接, 

程序中相关的概念是 `指针` ,  

## 索引 - index

## I/O - input/output

> 网络, 磁盘IO, 图形显示, 鼠标指令, 键盘指令,

## 顺序 - sequential

> 顺序程序(sequential program)  , 序列程序 

## 并行 - parallel

多处理器, 真正意义上的与时间同步

## 并发 - concurrency

> 从宏观描述, 任务

宏观上, 操作系统在同时执行多个任务. 

微观上实际则是轮询时间片, 轮流执行多个线程

## 同步 - Synchronous

> 同步执行, 同步调用, 从微观描述, 抽象描述
>
> 描述对象 : 任务, 消息, 功能, 也是针对线程来说的.
>
> 同步将控制权交给内核空间, 异步将控制权交给用户空间
>
> 

与计算机时钟同步, 时任务间协同步调, 保持与实际序列同步, 严格的序列化, 顺序执行一次性, 程序每次执行时都是相同的

<u>同步是指用户空间的线程是主动发起请求的一方，内核空间是被动接受方。</u>

*应用场景*: 任务需要等待完成, 任务间需要保持序列性, 

## 异步 - Asynchronous

> 异步执行, 异步调用

*应用场景*: 任务间不存在先后完成的序列,  任务间不具有相应的, 处理相同优先级的任务时, 

<u>同步是指用户空间的线程是主动发起请求的一方，内核空间是被动接受方。</u>

## 阻塞 - Block

> 描述对像是I/O
>
> 挂起, 阻塞, 暂停运行(线程)
>
> 描述对象: 线程, 
>
> 线程阻塞, 描述线程调用时, 是否想阻塞线程等待完成
>
> 线程执行会等待IO操作完成
>
> 等待过程调用返回
>
> 

阻塞是指用户线程一直在等待，直到内核 IO 操作彻底完成，在这期间不能干别的事情。

## 非阻塞 - Unblock

> 描述对象是I/O, 这个是个相对阻塞的概念
>
> 一般需要一个侦听器来轮询侦听消息的返回

非阻塞是指用户线程拿到内核返回的状态值就返回自己的空间，干别的事情去了。

## 线程切换

> 轮询执行

## 回调函数

callback 把函数当做参数传入 然后 再调用的函数, C中是通过指针, Python中则直接传入或者通过装饰器



## API接口 - Interface

interface 接口概念 接口理解

深入理解API

一个接口代表一种资源，代表一个功能



# 主题·Topics

## 文件系统

![Image](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306090931983.jpeg)

## 同步与异步

[参考链接](https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean)

> **关注: 消息通信机制**, 
>
> 同步, 模拟一个人干事, 异步, 模拟多个人干事
>
> I/O阻塞线程的问题
>
> 是否等待返回调用通知, 
>
> 并发, 避免线程阻塞, 采用异步机制
>
> 描述线程/进程处理任务的方式
>
> 计算机时间 与 现实序列  线程之间同步, 具有序列关系
>
> 同步- [(线程间)**协调同步**]: 线程之间同一时间,只能做一件事情, 完成后才可以切换IO
>
> 计算机序列 与 现实序列 非同步, 线程之间没有序列关系
>
> 异步 - []: 线程之间挂起时, 无论是否完成, 都会切换IO

[区别说明](https://www.cnblogs.com/zhangmingda/p/9396994.html)

## 阻塞与非阻塞

> 线程挂起时, 是否等待
>
> I/O阻塞, 主动阻塞

[同步与阻塞的联系](https://www.cnblogs.com/felixzh/p/10345929.html)

在处理 IO 的时候，阻塞和非阻塞都是同步 IO。
只有使用了特殊的 API 才是异步 IO。 

## 异步I/O 与 阻塞I/O



## I/O重定向

[参考手册	]( https://www.tldp.org/LDP/abs/html/io-redirection.html )

```shell
# There are always three default files open, stdin (the keyboard), stdout (the screen), and stderr (error messages output to the screen). These, and any other open files, can be redirected. 

# Redirection simply means capturing output from a file, command, program, script, or even code block within a script and sending it as input to another file, command, program, or script.
```

## IO模式

[博客文档](https://segmentfault.com/a/1190000003063859)

[epoll - 向保松](https://zhuanlan.zhihu.com/p/137964977)

## 调度策略

FIFO

CFS(Linux 公平调度)

## 系统初始化

## 进程的内存管理

虚拟文件系统



# **性能优化**

## 参考资料

- https://www.brendangregg.com/linuxperf.html

![linux_observability_tools](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/linux_observability_tools.png)

![img](https://www.brendangregg.com/Perf/linux_observability_tools.png)

# 操作系统原理

[Linux系统原理](https://github.com/wx-chevalier/Linux-Series)

[Linux操作系统原理与应用](https://github.com/xylinuxer/LKPA)





## 权限管理

[sudoers](https://segmentfault.com/a/1190000007394449)

## 标准输入/输出/错误

stdin stdout stderr  

理解 数据流

前台进程可以接受 stdin / stdout / stderr 信息

后台进程 daemon 接受 stdout / stderr 信息

## 命名空间

namespace

## I/O 复用

知识概念 : I/O 多路复用 `STDIN`	`STDOUT`	`STDERROR`

### epoll(事件驱动)

维护了一个数据结构

初步理解: 事件响应机制, 同时监听多个事件, 当有响应时, 响应事件, 

核心API : 3个 epoll_create: int , epoll_ctl: int, epoll_wait: int

核心数据结构 : 1个红黑树, 1个链表



功能



# Linux内核特性

# 系统调用

> system call, syscall - Linux system calls
>
> [官方文档](https://man7.org/linux/man-pages/man2/syscalls.2.html)
>
> 查看系统调用方法: 

## open(const char *pathname, int flags) - 打开或创建文件

> open, openat, creat - open and possibly create a file
>
> open(const char *pathname, int flags)



## fork()

## exit()

# 趣谈Linux操作系统

> 原文出处: 极客时间 趣谈Linux操作系统

## linux特性

### 一切皆文件

- 启动一个进程，需要一个程序文件，这是一个**二进制文件**。

- 启动的时候，要加载一些配置文件，例如yml、properties等，这是文本文件；启动之后会打印一些日志，如果写到硬盘上，也是**文本文件**。

- 但是如果我想把日志打印到交互控制台上，在命令行上唰唰地打印出来，这其实也是一个文件，是标准输出**stdout文件**。

- 这个进程的输出可以作为另一个进程的输入，这种方式称为**管道**，管道也是一个文件。

- 进程可以通过网络和其他进程进行通信，建立的**Socket**，也是一个文件。

- 进程需要访问外部设备，**设备**也是一个文件。

- 文件都被存储在文件夹里面，其实**文件夹**也是一个文件。

- 进程运行起来，要想看到进程运行的情况，会在/proc下面有对应的**进程号**，还是一系列文件。

- 每个文件，Linux都会分配一个**文件描述符**（File Descriptor），这是一个整数。有了这个文件描述符，我们就可以使用系统调用，查看或者干预进程运行的方方面面。

  所以说，文件操作是贯穿始终的，这也是“一切皆文件”的优势，就是统一了操作的入口，提供了极大的便利。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193003.jpeg)

## Linux学习的六个层级

- [x] Linux命令

系统调用或glibc, 程序设计

linux内核机制, 反复研习重点突破

*内核代码阅读, 聚焦核心逻辑和场景

*定制化linux 组件

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193014.jpeg)

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193019.jpeg)

## 程序是如何运行的

输入设备 - 处理 - 输出设备

二进制执行文件 -> 程序(program)

运行的程序,(不断运行的) -> 进程(process)

进程通过系统调用(system call) 对 操作系统 (内核) -> 进行调用

### 程序运行方式

shell 交互式运行

后台运行

以服务方式运行

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193026.jpg)

### 操作系统

系统调用

进程管理

内存管理

文件管理

设备管理

网络系统

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193036.jpeg)

## 系统调用

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193042.jpeg)

**查看源代码中的系统调用**

你如果问，这里的系统调用列举全了吗？其实没有，系统调用非常多。我建议你访问[https://www.kernel.org](https://www.kernel.org/)下载一份Linux内核源代码。因为在接下来的整个课程里，我讲述的逻辑都是这些内核代码的逻辑。

对于64位操作系统，找到unistd_64.h文件，里面对于系统调用的定义，就是下面这样。

```c
#define __NR_restart_syscall	  0
#define __NR_exit		  1
#define __NR_fork		  2
#define __NR_read		  3
#define __NR_write		  4
#define __NR_open		  5
#define __NR_close		  6
#define __NR_waitpid		  7
#define __NR_creat		  8
```

**中介与Glibc**

如果你做过开发，你会觉得刚才讲的和平时咱们调用的函数不太一样。这是因为，平时你并没有直接使用系统调用。虽然咱们的办事大厅已经很方便了，但是为了对用户更友好，我们还可以使用中介**Glibc**，有事情找它就行，它会转换成为系统调用，帮你调用。

Glibc是Linux下使用的开源的标准C库，它是GNU发布的libc库。**Glibc为程序员提供丰富的 API，除了例如字符串处理、数学运算等用户态服务之外，最重要的是封装了操作系统提供的系统服务，即系统调用的封装**。

每个特定的系统调用对应了至少一个Glibc封装的库函数，比如说，系统提供的打开文件系统调用sys_open对应的是Glibc中的open函数。

有时候，Glibc一个单独的API可能调用多个系统调用，比如说，Glibc提供的printf函数就会调用如sys_open、sys_mmap、sys_write、sys_close等等系统调用。

也有时候，多个API也可能只对应同一个系统调用，如Glibc下实现的malloc、calloc、free等函数用来分配和释放内存，都利用了内核的sys_brk的系统调用。

### 系统调用原理

操作系统通过系统调用为运行于其上的进程提供服务。

当用户态进程发起一个系统调用， CPU 将切换到 **内核态** 并开始执行一个 **内核函数** 。 内核函数负责响应应用程序的要求，例如操作文件、进行网络通讯或者申请内存资源等。

调用的方式 : 通过命令, 通过接口, 通过函数

库函数 - glibc 是建立在系统调用之上的更高层次的调用

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193050.jpg)

### 

## 异常处理与信号处理

## 系统初始化



但是从内核态来看，无论是进程，还是线程，我们都可以统称为任务（Task），都使用相同的数据结构，平放在同一个链表中。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193055.jpeg)

### 0号进程 - 原始进程

### 1号进程 - 用户态管理

### 2号进程 - 内核态管理

## 进程管理

## 进程间通信

## 网络通信

## 计算机工作模式

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193100.jpeg)



![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193105.jpeg)

CPU与内存之间的信息交换 通过总线实现 而总线又分为 地址总线和数据总线

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193110.jpg)

cpu 指令指针寄存器 -> 读取代码(二进制)地址(应该是逐行,)

### 程序计数器 和指令指针寄存器

针寄存器，从名称上我们可以看出它们和指令的关系。
在8086PC机中，任意时刻，设CS中的内容为Ｍ，IP中的内容为Ｎ，8086CPU将从内存M 16+N单元开始，读取一条指令并执行。

也可以这样表述：8086机中，任意时刻，CPU将CS:IP指向的内容当作指令执行。


x86 系统中自增的是 IP，用 CS:IP 组合表示正在执行的指令地址，此时 PC 只是一个概念上的说法。在 ARM 体系中 R15 就是 PC，当然 ARM 和 IA-32、x64 都支持高级内存管理，所以「PC」的内容未必是当前指令在内存中的绝对位置。



当计算机系统上电开机或者按了机箱上的复位按钮时，CPU会自动把代码段寄存器CS设置为0XF000，其段基地址则被设置为
0XFFFF 0000，段长度设置为64K。而IP则设置为0XFFF0，因此此时CPU代码指针指向0XFFFF FFF0处，即4G空间的最后一个64K的最后16字节处

# 「Linux工具快速教程」<u></u>dia