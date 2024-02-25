# MongoDB数据库



## 参考资料

- 极客时间-MongoDB高手课(aDrive)
- Compass
- [MongoDB Developer center](https://www.mongodb.com/developer/)
- [mongodb-go-developer](https://www.mongodb.com/developer/languages/go/)
- [MongoDB Go Client](https://www.mongodb.com/docs/drivers/go/current/)
- [MongoDB Go Driver API Document](https://pkg.go.dev/go.mongodb.org/mongo-driver/mongo)

```shell

brew services start mongodb/brew/mongodb-community

To have launchd start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
```

### 教程

- [modeling-documents-with-go-data-structures](https://www.mongodb.com/blog/post/quick-start-golang--mongodb--modeling-documents-with-go-data-structures)
- [build-go-web-application-gin-mongodb-help-ai](https://www.mongodb.com/developer/products/mongodb/build-go-web-application-gin-mongodb-help-ai/)

# Quick Start

> 参考链接
>
> - [MongoDB 面试题](https://zhuanlan.zhihu.com/p/531905712)

## yn

关键词

模型设计, 分片集群

# Glossary

## List

- **数据库·database**:
    A physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.
    
- **集合·collections**:
    A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose. See Namespaces.
    
- **文档·document·**:
    A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as 
    BSON 
    
- **字段·filed**:

    - field A name-value pair in a [document](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-document). A document has zero or more fields. Fields are analogous to columns in relational databases. See [Document Structure.](https://www.mongodb.com/docs/manual/core/document/#std-label-document-structure)

- **索引·index**:

    A data structure that optimizes queries. See [Indexes.](https://www.mongodb.com/docs/manual/indexes/)

- **查询·query**:

    A read request. MongoDB uses a [JSON](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-JSON)-like query language that includes a variety of [query operators](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-operator) with names that begin with a `$` character. In [`mongosh`](https://www.mongodb.com/docs/mongodb-shell/#mongodb-binary-bin.mongosh), you can issue queries using the [`db.collection.find()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find) and [`db.collection.findOne()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/#mongodb-method-db.collection.findOne) methods. See [Query Documents.](https://www.mongodb.com/docs/manual/tutorial/query-documents/#std-label-read-operations-queries)

- **B树·B-Tree**: 
    A data structure commonly used by database management systems to store indexes. MongoDB uses B-trees for its indexes.

## Core Concept

- 验证·Validation:

    为集合增加约束-Constraint
    
- 投影(Projection):



# 简介-Introduction

## 概述-Overview

> [What is mongodb](https://www.mongodb.com/what-is-mongodb)

> MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need

MongoDB是一种可扩展且灵活的文档数据库, 你可轻松查询和索引任何你想和需要的数据



## 特性



**mongodb作为非关系型数据库相较于关系型数据库的优势**

> 易扩展： NoSQL数据库种类繁多， 但是一个共同的特点都是去掉关系数据库的关系型特性。 数据之间无关系， 这样就非常容易扩展

> 大数据量，高性能： NoSQL数据库都具有非常高的读写性能， 尤其在大数据量下表现优秀。 这得益于它的非关系性，数据库的结构简单

> 灵活的数据模型： NoSQL无需事先为要存储的数据建立字段， 随时可以存储自定义的数据格式。 而在关系数据库中， 增删字段是一件非常麻烦的事情。 如果是非常大数据量的表， 增加字段简直就是一个噩梦

MongoDB的优势有哪些

- 面向集合和文档的存储：以 JSON 格式的文档保存数据。
- 简单直接: 以自然的方式来建模, 以直观的方式来与数据库交互
- 结构灵活: 弹性模式从容相应需求的频繁变化
    - 多形性: 统一个集合中可以包含不同字段(类型)的文档对象
        - 同一类型的文档对象, 可以有不同的字段量, 并没有SQL那样的严格限制

    - 动态性: 线上修改数据模式, 修改时应用于数据库均无须下线
        - 直接添加字段, 而不需要影响数据库, 因为没有schema限制

    - 数据治理: 支持使用JSON Schema来规范数据模式. 在保证模式灵活动态的前提下, 数据治理能力
        - 支持选择性的为表(集合)增加限制, 规则限制. 因此可以避免数据的混乱, 但同时了开发者的灵活管理能力 

- 快速开发: 做更多的事, 写更少的代码
- JSON文档模型(对象模型): 半数据结构 
    - 开发代码量低
    - 快速响应新业务需求的能力, 方便拓展
    - 模型设计简单

- 原生的高可用和横向扩展的能力↔
    Natively High Availability and horizontal scalablility
    - 一般推荐至少3个实例
    - Replica Set(复制集)
        - 提供了99.999%高可用

    - 自恢复
    - 多中心容灾能力(failover and fault tolerant)
    - 滚动服务-最小化服务终端

- 横向扩能力
    - 分片集群
    - 需要时无缝扩展
    - 多种数据分布策略
    - 轻松支持TB-PB数量级

- 分片架构支持海量数据和无缝扩容
- 任何属性都可以建立索引。
- 复制以及高可扩展性。
- 自动分片。
- 丰富的查询功能。
- 快速的即时更新。
- 来自 MongoDB 的专业支持。
- 容易调试, 易于扩展
- 易于上手
- 

## 应用场景

> 适用场景
>
> 使用场景和核心价值

## 基本概念/核心概念

数据库-db

集合-collection 相当于一个表

文档-document  相当于一条记录

字段-filed  相当于一列

聚合操作

文档模型设计(对象模型)

默认端口: 21707

默认数据库路径: /data/db



## 基本操作

```shell
# 服务操作

# 启动: sudo mongod [--auth --dbpath=dbpath --logpath=logpath --append --fork] [-–f logfile ]

# 只以 sudo mongod 命令启动时，默认将数据存放在了 /data/db 目录下，需要手动创建
--dbpath  # 指定数据库的存放路径
--logpath  # 指定日志的存放路径
--append  # 或--logappend 设置日志的写入形式为追加模式
--fork  # 或-fork 开启新的进程运行mongodb服务
--f  # 或-f 配置文件路径(可以将上述配置信息写入文件然后通过该文件中的参数进行加载启动)
--auth  # 以权限认证的方式启动，我们会在后边的课程中学习该内容

# 进程及服务管理

# 启动服务
mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork

# 查看服务是否启用
ps aux | grep mongo

# 启动本地客户端: 
mongo
mongo –help  # 查看帮助
exit  # ctrl+c 推迟
```





# mongosh(mongo shell)

> [官方文档](https://docs.mongodb.com/manual/mongo/)
>
> The [`mongo`](https://docs.mongodb.com/manual/reference/program/mongo/#mongodb-binary-bin.mongo) shell is an interactive JavaScript interface to MongoDB. You can use the [`mongo`](https://docs.mongodb.com/manual/reference/program/mongo/#mongodb-binary-bin.mongo) shell to query and update data as well as perform administrative operations.

## 服务管理



[官方文档](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/)

```shell

# 停止服务

# 
use admin
db.shutdownServer()

# linux only
mongod --shutdown

# 登录
mongosh -u admin -p admin


```



## 数据库操作

```shell
# 常见数据库命令

db  # 查看当前数据库

show {dbs,databases}  # 查看所有数据库

use db_name ## 切换数据库


use test
db.DropDatabase()
```



## 集合操作

```shell
# 集合操作
use text
show collections
# 无需手动创建集合：向不存在的集合中第一次添加数据时，集合会自动被创建出来
db.demo2.insert([{name:1, age:18}])
# 


```

# 数据模型

## 模型验证Schema Validation



```text
Schema validation lets you create validation rules for your fields, such as allowed data types and value ranges.

MongoDB uses a flexible schema model, which means that documents in a collection do not need to have the same fields or data types by default. Once you've established an application schema, you can use schema validation to ensure there are no unintended schema changes or improper data types.
```

模型验证为对象字段创建验证规则, 例如对象字段允许的数据类型和取值范围.

MongoDB采用了较为灵活的模型规范(模范模型), 这意味着集合的文档对象不需要有相同的字段或设置默认的类型. 一旦建立起一个应用模型, 你可以使用模型验证去确保文档不会出现无意义的模型变更或不恰当的数据类型. 

## BSON



bson.A represent for Arrays, bson.D represent for BSON Documents(ordered), bson.M represent for Maps(unordered BSON Documents).

# 增删改查

```js
// client to server
mongosh -u admin -p admin

// show dbs
show dbs

// select/switch db
use mock

// show collections/tables
show collections
show tables

```

## SQL vs MQL

| SQL             | MQL                                       |
| --------------- | ----------------------------------------- |
| a = 1 AND b = 1 | {a: 1, b: 1}<br />{$and: [{a:1}, {b: 1}]} |
| a = 1 OR b = 1  | {$or: [{a:1}, {b: 1}]}                    |
| a IS NULL       | {a: {$exists: false}}                     |
| a IN (1, 2, 3)  | {a: {$in: [1, 2, 3]}}                     |



## 增-insert

```js
db.term.insertOne(object)
db.term.insertMany([object1, ..., objectn])

db.fruit.insertOne({ name: "apple", from: { country: "China", province: "Zhejiang" }})
db.fruit.insertOne({ name: "apple", colors: ["red", "green"]})
db.fruit.insertOne({ name: "Mango", colors: ["yellow", "啻een"]})

```

## 查-query

find返回的是一个游标

```js
// find all
db.term.find()
db.term.findOne()

// $and

// 子文档查询
db.fruit.find({"from.country": "China"})

// 数组搜索  
db.fruit.find({colors: "red"})
db.fruit.find({$or:[{colors: "red"},{colors:"yellow"}]})

// 同一子对象的多条件满足: $elemMatch
```

## 改-update

```shell
# rule 
db.collection.updateOne(<filter>, <update>, <options>)
db.fruit.updateOne({name: "apple"}, {$set: {from: "China"}})
```



## 删-Delete

```js
db.fruit.deleteOne()
db.fruit.deleteMany()
```



```js
// 报错
db.fruit.remove()
// 指定条件删除
db.fruit.remove({a:1})
// 删除集合中的所有文档
db.fruit.remove({})

```



 

# 聚合操作(Aggregation Operations)

> https://www.mongodb.com/docs/manual/aggregation/

Aggregation operations process multiple documents and return computed results---聚合操作处理多个文档并返回计算后的结果. 

You can use aggregation operations to---聚合操作可以用在以下场景:

- Group values from multiple documents together.
    将多个文档的值组合在一起.

- Perform operations on the grouped data to return a single result.
    在分组后的数据上执行执行操作并返回一个单一结果.

- Analyze data changes over time.

    分析数据随着时间的变化.





# 主题-Topics



# 运算符

# MongoDB in Go

## Links

- [Quick Start: Golang & MongoDB - Modeling Documents with Go Data Structures](https://www.mongodb.com/blog/post/quick-start-golang--mongodb--modeling-documents-with-go-data-structures)
- https://github.com/PauloPortugal/gin-gonic-rest-mongodb

# 最佳实践

## 摘要

### 参考链接

- https://climbtheladder.com/10-golang-mongodb-best-practices/

## 高级查询

## 备份恢复

## 聚合命令
