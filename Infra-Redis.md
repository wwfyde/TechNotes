# Redis数据库

> 官方简介: 一款开源的、基于内存的数据结构(data structure)存储(store)系统, 可以用作数据库(database)、缓存(cache)和消息中间件(message broker).
>
> Redis支持的数据结构: **字符串**(strings)、**哈希**(hashes, 散列)、**列表**(lists)、**集合**(sets)、支持范围查询的**有序集合**(sorted sets with range queries,  zsets), bitmaps, hyperloglogs, 地理空间索引(geospatia indexes), **流**(streams).
>
> Redis内置了 **复制**(replication), **LUA脚本**, **LRU驱动事件**, **事务**(transactions)和 不同级别的**磁盘持久化**(on-disk persistence), 并通过 Redis哨兵(sentry) 和**自动分区**(automatic partitioning)提供高可用性(high availability). 
>
> 
>
> [安装和配置参见](软件使用技巧.md)

## 参考资料

- [Interview/面试-Redis](interview/面试-Redis.md)
- [Redis FAQ](https://redis.io/docs/get-started/faq/)
- 极客时间: 168-Redis核心技术与实战
- 极客时间: 223-Redis源码剖析与实战

## Articles and Blogs

- [Redis Queue](https://redis.com/glossary/redis-queue/)
- [Redis Queue 20241029](https://redis.io/glossary/redis-queue/)
- [Redis: Solutions, Messagings LOW-LATENCY MESSAGE QUEUE & BROKER SOFTWARE](https://redis.io/solutions/messaging/)

## Glossary

- TTL(Time to Live): 生存时间, 失效时间
- LRU(Least Recenetly Used): 最近最少使用

# 简介·Introduction

## 简介·Introduction

> [Home Page:](https://redis.io) The open source, in-memory data store used by millions of developers as a database, cache, streaming engine, and message broker.

Redis是一款开源,基于内存数据存储的数据库,缓存, 流引擎和消息代理, 超过百万开发使用它.

> A vibrant, open source database
>
> Voted the most-loved database for 5 years running, Redis is at the center of an engaged community of developers, architects, and open source contributors.

充满活力的开源数据库, 有5年被投票为最喜欢的数据库, Redis被开发者, 架构师和开源贡献者深深吸引.



### 核心能力(core capabilities)

#### 内存型数据结构(in-memory data structures)

>  Well-known as a "data structure server", with support for strings, hashes, lists, sets, sorted sets, streams, and more.

为"data structure server"被熟知, 支持strings, hashes, lists, sets, sorted sets, streams等更多数据结构. 

#### 可编程性·Programmability

> Server-side scripting with Lua and server-side stored procedures with Redis Functions.

#### 可扩展性·Extensibility

> A module API for building custom extensions to Redis in C, C++, and Rust.

一个模块API用于使用C/C++/Rust构建定制插件到Redis中

#### 持久化·Persistence

> Keeps the dataset in memory for fast access, but can also persist all writes to permanent storage to survive reboots and system failures.

保留数据集在内存中以便高速访问, 也可以持续将数据写到永久存储中, 去应对突的发重启和**系统故障(system failures)**



#### 集群·Cluster

>  Horizontal scalability with hash-based sharding, scaling to millions of nodes with automatic re-partitioning when growing the cluster.

#### 高可靠·High availbility

> Replication with automatic failover for both standalone and clustered deployments.

为独立或集群部署提供使用自动故障转移主从复制能力

那我们总说的Redis具有高可靠性，又是什么意思呢？其实，这里有两层含义：一是**数据尽量少丢失**，二是**服务尽量少中断**。AOF和RDB保证了前者，而对于后者，Redis的做法就是**增加副本冗余量**，将一份数据同时保存在多个实例上。即使有一个实例出现了故障，需要过一段时间才能恢复，其他实例也可以对外提供服务，不会影响业务使用。

### 使用场景(Use cases)

#### 实时数据存储

> Redis' versatile in-memory data structures enable building data infrastructure for real-time applications that require low latency and high-throughput.

Redis的内存型数据结构艺能使得允许为需要 **低延迟** **高吞吐量** 的实时应用构建数据基础设施

#### 缓存和会话存储

> Redis' speed makes it ideal for caching database queries, complex computations, API calls, and session state.

Redis的速度使其成为理想的工具, 用于缓存数据库查询, 复杂计算, API调用和会话状态.

#### 流和消息

> The stream data type enables high-rate data ingestion, messaging, event sourcing, and notifications.

Stream数据类型可用于高速率数据获取, 信息收发, 事件驱动和通知.

### Redis Stack



## Quick Start

## overview

## Articles

### [Why Redis is so fast?](https://blog.bytebytego.com/p/why-is-redis-so-fast)

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306081454477.jpeg)

1. Redis is a RAM-based database. RAM access is at least 1000 times faster than random disk access.
2. Redis leverages IO multiplexing and single-threaded execution loop for execution efficiency.
3. Redis leverages several efficient lower-level data structures.

---

1. Redis是基于内存的数据库.
2. Redis充分利用IO多路复用和单线程执行回路
3. Redis充分利用高效的底层数据结构



![Memcached vs Redis](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306081519045.jpeg)

The advantages of data structures make Redis a good choice for:

🔹 Recording the number of clicks and comments for each post (hash)

🔹 Sorting the commented user list and deduping the users (zset)

🔹 Caching user behavior history and filtering malicious behaviors (zset, hash)

🔹 Storing boolean information of extremely large data into small space. For example, login status, membership status. (bitmap)

[![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202404281500209.jpg)](https://github.com/ByteByteGoHq/system-design-101/blob/main/images/top-redis-use-cases.jpg)

## 常见问题FAQ

redis删除机制

缓存穿透: 数据不存在时, 去DB中查询, 这个时候 设置默认值; 解决方案: 对于缓存中不存在的key，每次请求都会直接访问数据库。可以使用布隆过滤器来减少这种情况。

缓存雪崩: 大量缓存失效, 需要到Database中去查询增加了数据库的压力, 解决方案使用队列; 解决方案: Ω大量缓存同时过期，导致大量请求打到数据库。可以通过设置不同的过期时间来缓解。

缓存击穿: 热点数据在缓存过期的瞬间有大量并发请求直接访问数据库. 

redis常用命令





## 最佳实践

- 使用 `scan` 命令实现[大量数据的遍历](https://mp.weixin.qq.com/s?__biz=MzU2Njg3OTU1Mg==&mid=2247484141&idx=1&sn=f391cdd1c4f6a6f5f47c3dd95dfb84e6&utm_source=tuicool&utm_medium=referral)
- 持久化 分布式事务



## Redis特性

- 读写性能优异
- 持久化: 数据保存在磁盘中，重启的时候可以再次加载进行使用。
- 数据类型丰富:key-value类型的数据, 同时还提供list，set，zset，hash等数据结构的存储。
- 单线程/ 多线程
- 数据备份: Redis支持数据的备份，即master-slave模式的数据备份
- 数据自动过期
- 发布订阅
- 分布式
- 不支持事务, Key-Value形式
- 性能极高 – Redis能读的速度是110000次/s,写的速度是81000次/s 。
- 原子 – Redis的所有操作都是原子性的。
- 丰富的特性 – Redis还支持 publish/subscribe, 通知, key 过期等等特性。

## 核心能力

### 内存数据结构

```
```



## 底层原理

### 主从模式

### 哨兵机制

### 高可用集群

## 说明简介

### 概念定义

Redis 是一个开源、支持网络、基于内存、可选持久性的键值对(key-value)存储数据库

一种内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。 

它支持多种类型的数据结构，如 [字符串（strings）](http://www.redis.cn/topics/data-types-intro.html#strings)， [散列（hashes）](http://www.redis.cn/topics/data-types-intro.html#hashes)， [列表（lists）](http://www.redis.cn/topics/data-types-intro.html#lists)， [集合（sets）](http://www.redis.cn/topics/data-types-intro.html#sets)， [有序集合（sorted sets）](http://www.redis.cn/topics/data-types-intro.html#sorted-sets) 与范围查询， [bitmaps](http://www.redis.cn/topics/data-types-intro.html#bitmaps)， [hyperloglogs](http://www.redis.cn/topics/data-types-intro.html#hyperloglogs) 和 [地理空间（geospatial）](http://www.redis.cn/commands/geoadd.html) 索引半径查询。

 Redis 内置了 [复制（replication）](http://www.redis.cn/topics/replication.html)，[LUA脚本（Lua scripting）](http://www.redis.cn/commands/eval.html)， [LRU驱动事件（LRU eviction）](http://www.redis.cn/topics/lru-cache.html)，[事务（transactions）](http://www.redis.cn/topics/transactions.html) 和不同级别的 [磁盘持久化（persistence）](http://www.redis.cn/topics/persistence.html)， 并通过 [Redis哨兵（Sentinel）](http://www.redis.cn/topics/sentinel.html)和自动 [分区（Cluster）](http://www.redis.cn/topics/cluster-tutorial.html)提供高可用性（high availability）。



---

### 特点

高性能的key-value数据库

**Redis支持主从同步**；数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。从盘可以有意无意的对数据进行写操作。

当数据依赖不再需要，Redis这种基于内存的性质，与在执行一个事务时将每个变化都写入硬盘的数据库系统相比就显得执行效率非常高。写与读操作速度没有明显差别。

特别适合高并发项目的开发和使用



---

## 数据模型

| 结构类型 | 结构存储的值                                                 | 结构的读写能力                                               |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| String   | 可以是字符串, 整数或者浮点数                                 | 对整个字符串或者字符串的其中一部分执行操作;对整数和浮点数执行自增(increment)或者自减(decrement)  操作 |
| List     | 双向链表, 链表上的每个节点都包含了一个字符串                 | 从链表的两端推入或者弹出元素; 根据偏移量对链表进行修剪(trim);读取单个或者多个元素; 从集合里面随机获取元素 |
| Set      | 包含字符串的无序收集器(unordered collection),并且被包含的每个字符串都是独一无二, 各不相同的 | 添加、获取、移出单个元素；检查一个元素是否存在于集合中；计算交集、并集、差集；从集合里面随机获取元素 |
| Hash     | 包含键值对的无序散列表                                       | 添加、获取、移出单个元素；获取所有键值对                     |
| Zset     | 字符串成员(member)与浮点数分值(score)之间的有序映射,元素的排列顺序由分值的大小决定 | 添加、获取、删除单个元素；根据分值范围（range）或者成员来获取元素 |

## python操作数据库

```python
# 快速使用
import redis

# decode_responses 解决现实打印字符串方式问题
r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)


```



```python
# redis


```

# 快速上手

## 学习技巧

### 通过提问

Top Use Case of Redis

## TOP 5 Redis Use Cases

- https://www.youtube.com/watch?v=a4yX7RUgTxI

### Session Data

### Replication

### 分布式锁

### 流量限制

### Rank/leaderboard



# 应用场景

[What can you use Redis for in a FastAPI project?](https://docs.google.com/forms/d/e/1FAIpQLSfFmBWLtm8oLouaiT3wXpbgZm8Df-FV_xFvnuXEWfbCoh3clw/viewform?fbzx=5923560144014452440&pli=1)

- [x] rate-limit
- [x] caching
- [x] Session Storage
- [x] Storing application data

## 综合概述

```yaml
# Use cass
# @English Use Cases
# @Chinese 应用场景
string: [session, cache, distributed lock]
int: [counter, rate limiter, Global ID]
hash: [Shopping cart]
bitmap: [user retention] 
list: [message queue]
zset: [rank/Leaderboard]
```



## 官方文档

### 实时数据存储

### 缓存和会话存储

### 流和消息



## 应用场景


https://segmentfault.com/a/1190000016188385



### 缓存

- 降低数据库压力
- 键过期功能
- 缓存现在几乎是所有中大型网站都在用的必杀技，合理的利用缓存不仅能够提升网站访问速度，还能大大降低数据库的压力。Redis提供了键过期功能，也提供了灵活的键淘汰策略，所以，现在Redis用在缓存的场合非常多。

### 排行榜

- 很多网站都有排行榜应用的，如京东的月度销量榜单、商品按时间的上新排行榜等。Redis提供的有序集合数据类构能实现各种复杂的排行榜应用。

### 计数器

- incr命令
- 什么是计数器，如电商网站商品的浏览量、视频网站视频的播放数等。为了保证数据实时效，每次浏览都得给+1，并发量高时如果每次都请求数据库操作无疑是种挑战和压力。Redis提供的incr命令来实现计数器功能，内存操作，性能非常好，非常适用于这些计数场景。

### 分布式会话

- 集群模式下，在应用不多的情况下一般使用容器自带的session复制功能就能满足，当应用增多相对复杂的系统中，一般都会搭建以Redis等内存数据库为中心的session服务，session不再由容器管理，而是由session服务及内存数据库管理。

### 分布式锁

- 在很多互联网公司中都使用了分布式技术，分布式技术带来的技术挑战是对同一个资源的并发访问，如全局ID、减库存、秒杀等场景，并发量不大的场景可以使用数据库的悲观锁、乐观锁来实现，但在并发量高的场合中，利用数据库锁来控制资源的并发访问是不太理想的，大大影响了数据库的性能。可以利用Redis的setnx功能来编写分布式的锁，如果设置返回1说明获取锁成功，否则获取锁失败，实际应用中要考虑的细节要更多。

### 社交网络

- 点赞、踩、关注/被关注、共同好友等是社交网站的基本功能，社交网站的访问量通常来说比较大，而且传统的关系数据库类型不适合存储这种类型的数据，Redis提供的哈希、集合等数据结构能很方便的的实现这些功能。

### 最新列表

- Redis列表结构，LPUSH可以在列表头部插入一个内容ID作为关键字，LTRIM可用来限制列表的数量，这样列表永远为N个ID，无需查询最新的列表，直接根据ID去到对应的内容页即可。

### 消息系统

- 消息队列是大型网站必用中间件，如ActiveMQ、RabbitMQ、Kafka等流行的消息队列中间件，主要用于业务解耦、流量削峰及异步处理实时性低的业务。Redis提供了发布/订阅及阻塞队列功能，能实现一个简单的消息队列系统。另外，这个不能和专业的消息中间件相比。

## 按数据类型



## 用作数据库





## 用作消息队列





## 用作缓存



### 缓存更新策略

> [参考文档](https://coolshell.cn/articles/17416.html)
>
> 核心思路是以最新的数据为准, 一旦有新的数据就让缓存失效



# 常见问题FAQ

## 数据增加了选择增加内存还是增加实例?

增加实例, 当数据量过大时, 应该给开, 考虑切片集群, 因为数据量过大尤其是RDB备份时, 会影响性能

## Redis高并发下缓存穿透解决方案与原理解析

作为数据缓存

### Redis缓存穿透何时发生

将id 不存在的数据库也缓存到数据库中

### 缓存缓存解决方案分析

### 布隆过滤器原理与实战

### 除了get set redis还有什么?



## 避免哈希表碰撞策略

增加

maxmemory

maxmemory-policy

# 最佳实践

> 实际需求, 从原理出发, 从需求出发



## python用法

### 4. 依赖注入函数

通过将Redis客户端实例作为参数传递给需要的函数或类，模拟依赖注入。

```python
# redis_client.py
import redis

def get_redis_client():
    return redis.Redis(host='localhost', port=6379, db=0)

# services.py
class MyService:
    def __init__(self, redis_client):
        self.redis_client = redis_client

    def do_something_with_redis(self):
        self.redis_client.set('key', 'value')
        return self.redis_client.get('key')

# main.py
from redis_client import get_redis_client
from services import MyService

def main():
    redis_client = get_redis_client()
    my_service = MyService(redis_client)
    result = my_service.do_something_with_redis()
    print(result)

if __name__ == '__main__':
    main()

```



main 中使用

```python
from redis_client import redis_client

async def main():
    await redis_client.set('foo', 'bar')
    value = await redis_client.get('foo')
    print(value)

# 在需要使用的地方调用 main
if __name__ == '__main__':
    import asyncio
    asyncio.run(main())
```

service/class 中使用

```python
# 示例：services.py

from redis_client import redis_client

class MyService:
    async def do_something_with_redis(self):
        await redis_client.set('key', 'value')
        return await redis_client.get('key')
      

# 示例：controllers.py   
from services import MyService

async def handle_request():
    service = MyService()
    result = await service.do_something_with_redis()
    print(result)

# 在需要使用的地方调用 handle_request
if __name__ == '__main__':
    import asyncio
    asyncio.run(handle_request())
```





## 配置

```conf

```

## 缓存策略

database caching strategies

> [!Note]
>
> - 





1. **Cache-Aside Pattern（缓存旁路模式）**：也称为 Lazy-Loading Pattern。应用程序首先在缓存中查找数据，如果未命中则从数据库中读取数据，并将数据写入缓存。这种模式的优点是简单易实现，缺点是需要开发人员管理缓存与数据库之间的一致性。
2. **Read-Through Pattern（读取透过模式）**：应用程序不直接访问缓存，而是通过一个缓存代理（例如 Redis）来访问数据。如果缓存未命中，则缓存代理负责从数据库中读取数据，并将数据写入缓存。这种模式减少了应用程序与缓存之间的耦合。
3. **Write-Through Pattern（写入透过模式）**：应用程序写入数据时，首先将数据写入缓存，然后缓存负责将数据写入数据库。这种模式可以减少数据库的写入负载，并保持缓存与数据库的一致性。
4. **Write-Behind Caching（延迟写入缓存）**：应用程序写入数据时，首先将数据写入缓存，并立即响应，然后缓存负责将数据异步写入数据库。这种模式可以提高写入性能，但可能会导致缓存与数据库数据不一致。
5. **Cache-Aside with Refresh-Ahead（带有预取的缓存旁路模式）**：应用程序在读取数据时，如果发现缓存中的数据即将过期，则提前从数据库中刷新数据到缓存中。这种模式可以减少缓存失效时的性能损失。
6. **Two-Level Cache（双层缓存）**：使用两级缓存，第一级是本地缓存（如内存），第二级是分布式缓存（如 Redis）。本地缓存用于存储热点数据，分布式缓存用于存储大量数据。

### 缓存读策略



### 缓存旁路策略(Cache Aside)

> 相比缓存读, 增加了数据变更时对缓存的操纵

### 缓存写策略

### 缓存写回策略(Write-Back Cache)

## 缓存失效策略

## 缓存策略最佳实践

1. **设置合理的TTL**：根据业务需求设置缓存项的过期时间，避免缓存数据过期导致数据不一致。
2. **使用合适的缓存策略**：根据数据的读写频率和业务需求选择合适的缓存策略。
3. **缓存预热**：在系统启动时或高峰期前，预先加载常用数据到缓存中，减少缓存未命中的情况。
4. **缓存监控**：监控缓存命中率和性能，及时调整缓存策略和配置，确保系统性能和数据一致性。
5. 处理缓存穿透、缓存雪崩和缓存击穿
    - **缓存穿透**：使用布隆过滤器防止不存在的key频繁查询数据库。
    - **缓存雪崩**：设置不同的过期时间，避免大量缓存同时过期导致数据库负载过高。
    - **缓存击穿**：使用互斥锁或“双重检查”机制，防止热点数据在缓存过期的瞬间大量并发请求直接访问数据库。



# 术语·Glossary

> [Redis Glossary](https://docs.redis.com/latest/glossary/)

## Cheat Sheet



## list

-   RDB(redis database)快照: 
-   AOF(append only file): 仅追加文件
-   ACL(access control list): 
-   availability: 高可靠性
-   Instance(数据库实例): In Memorystore for Redis, an instance refers to **an in-memory Redis data store**.





# 数据类型·(Data Types)

> [Data types](https://redis.io/docs/data-types/)
>
> [Redis Data Structure](https://redis.com/redis-enterprise/data-structures/)

## 概述

键值对通过哈希表实现

Redis键和值用什么结构组织？

为了实现从键到值的快速访问，Redis使用了一个哈希表来保存所有键值对。

一个哈希表，其实就是一个数组，数组的每个元素称为一个哈希桶。所以，我们常说，一个哈希表是由多个哈希桶组成的，每个哈希桶中保存了键值对数据。

看到这里，你可能会问了：“如果值是集合类型的话，作为数组元素的哈希桶怎么来保存呢？”其实，哈希桶中的元素保存的并不是值本身，而是指向具体值的指针。这也就是说，不管值是String，还是集合类型，哈希桶中的元素都是指向它们的指针。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202307211906607.jpg)

键值对

### 值的底层数据结构

#### 简单动态字符串

#### 双向链表

#### 压缩列表

#### 哈希表

#### 跳表

#### 整数数组





## 字符串-Strings

> 底层数据结构是简单动态字符串

### 综述

常见应用场景: Session, Cache, Distributed Lock, Counter, Rate Limiter, Golbal ID







## 列表-Lists

> 底层数据结构是双向链表

[A, B, C, E]

### 综述

常见应用场景: 消息队列



## 哈希-Hash

### 综述

@Chinese 常见应用场景: 购物车

@English Use Cases: Shopping Cart

## 集合-Sets

> {A, B, D, C}



## 有序集合-Sorted sets

> zset

@Chinese 应用场景: 排名/排行榜

@English Use Cases: Rank/Leaderboard



# 如何使用·(Using Redis)

> [Using redis](https://redis.io/docs/manual/)

## 客户端缓存·Client-side caching

> Server-assisted, client-side caching in Redis
>
> redis是基于client-server模式的,这里指的是Redis-client 而不是不是指用户终端(browser)





## 管道-Pipelining

> How to optimize round-trip times by batching Redis commands

## 发布订阅-pub/sub

> 软件架构, 软件设计模式



## 事务-Transactions



## 编程模式-Patterns

### 批量加载-(bulk loading)

### 分布式锁-(Distributed Locks)

DLM, Distributed Lock Manager

### 二级索引-Secondary indexing

## 可编程能力

略

# 管理·Administration

```shell
# 配置文件
/path/to/redis.conf

redis> CONFIG SET

redis> CONFIG GET loglevel


```

## Administration

## Security

## Configuration

## High Availability with Sentinel

>  哨兵机制: 在Redis主从集群中，哨兵机制是实现主从库自动切换的关键机制，它有效地解决了主从复制模式下故障转移的这三个问题。
>
> <Redis核心技术与实践>哨兵机制：主库挂了，如何不间断服务？

哨兵进程

哨兵机制基本流程: <监控>判断是否下线(在线), <切换>选择新的主, <通知>

## Replication

数据同步, 主从同步, 读写分离, 增量复制 

实际上，Redis提供了主从库模式，以保证数据副本的一致，主从库之间采用的是读写分离的方式。

- **读操作**：主库、从库都可以接收；
- **写操作**：首先到主库执行，然后，主库将写操作同步给从库。

## Scale

## Persistence

>   How Redis writes data to disk (append-only files, snapshots, etc.)

### 应用场景

通过回放日志和重新读入RDB文件重新写入内存以恢复数据, 从而保证尽量少丢数据, 提升可靠性. 

### RDB快照

> 内存快照

- ﻿﻿RDB (Redis Database Backup) - a compact, point. in-time snapshot of the database at a specific time





### ROA日志

- ﻿AOF (Append Only File) - keep track of all the commands that are executed, and in a disastrous situation. it re-execute the commands to get the data back

#### 如何实现

Redis在将执行命令写入内存后, 记录日志到磁盘

传统数据库的日志，例如redo log（重做日志），记录的是修改后的数据，而AOF里记录的是Redis收到的每一条命令，这些命令是以文本形式保存的。

命令执行完成后才写入日志, 因此不会阻塞当前操作

#### 优点

#### 缺点

#### 写回策略

其实，对于这个问题，AOF机制给我们提供了三个选择，也就是AOF配置项appendfsync的三个可选值。

- **Always**，同步写回：每个写命令执行完，立马同步地将日志写回磁盘；
- **Everysec**，每秒写回：每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，每隔一秒把缓冲区中的内容写入磁盘；
- **No**，操作系统控制的写回：每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，由操作系统决定何时将缓冲区内容写回磁盘。

#### 重写机制



## Optimization

## 故障排查·Troubleshooting

## 调试·Debugging

## 参考·References

# 管理和配置(非官方)

## 主从配置

- 一个master可以拥有多个slave，一个slave又可以拥有多个slave，如此下去，形成了强大的多级服务器集群架构
- 比如，将ip为192.168.1.10的机器作为主服务器，将ip为192.168.1.11的机器作为从服务器
- 说明：ip可以换为自己机器与同桌机器的地址
- 设置主服务器的配置

```
bind 192.168.1.10
```

- 设置从服务器的配置
- 注意：在slaveof后面写主机ip，再写端口，而且端口必须写

```
bind 192.168.1.11
slaveof 192.168.1.10 6379
```

- 在master和slave分别执行info命令，查看输出信息
- 在master上写数据

```
set hello world
```

- 在slave上读数据

```
get hello
```



# 参考·References

[//]: # (TODO )

## 命令技巧(command tips)

## 哨兵客户端(Sentinel client spec)

## 协议规范(Protocol Spec)

## 客户端处理(client handling)

## 集群规格(cluster specification)

https://redis.io/docs/reference/cluster-spec/

> 集群, 集群模式, 拓扑结构
>
> 集群的目标是增加吞吐量和负载均衡
>
> [分片(sharding)与分区(partitioning的主要区别](https://hazelcast.com/glossary/sharding/): 分片强调不同主机之间, 分区则强调对同一个数据库进行分组, 二者经常是同义的, 分区分为水平分区和垂直分区. 分区.

单机模式

主从复制

分片模式

负载均衡

## 驱逐策略(Key Eviction)

> - https://redis.io/docs/reference/eviction/

# 命令Commands

## info

查看, 

### cuslter info



### client info





# Tail

