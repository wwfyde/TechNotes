# MySQL数据库



## Overview

### 为什么需要Database

> [!note]
>
> In your code you already have **variables**, **dictionaries**, **lists**, etc. They all store **data** in some way already. Why would you need to have a separate database?
>
> If you look closely, your code is **static**, it doesn't really change over time *once you run it*. Of course, you change the code frequently, adding features, etc, but once you start Python running your code, the program stays as it was when you started it. And if you change the code, the program will only change **once you run it again**.

- 保证代码与数据隔离, 数据会频繁变更, 而不至于修改代码.

- 可以持久化数据
- 大多数场景中, 数据始于程序之外或止于程序之外. 
- 高效处理数据, 并将数据独立于代码

# Glossary

> [Database Glossary](https://www.prisma.io/dataguide/intro/database-glossary)
>
> [MySQL Glossary](https://dev.mysql.com/doc/refman/8.0/en/glossary.html)



- SQL(Structured Query Language)结构化查询语言(sequel)  结构化
- RDBMS(Relationship DataBase Management System)关系型数据库管理系统
- Data(数据)::数据库中储存的基本对象,描述事务的符号记录.
- 表现形式:text(文本),graph(图形),image(图像),Audio(音频),Video(视频),档案记录等...
- DataBase(数据库):数据存放的仓库.永久储存, 有组织,可访问,可共享   (容器)
    - 实体概念: 数据的集合

- Schema(架构/模式): 关于数据库和表的布局特性的信息
    - 抽象概念: database的结构视图
    - 数据库模式被视为数据库的蓝图，描述了数据如何与其他表或其他数据模型相关联。 但是，模式中并不包含数据。

- Table(表)::某种特定类型数据的结构化清单
    - 数据库中的表名应该是唯一的,通常库+表名的结构.
- column(列)::
- 分解数据:数据分解,分级,同级( 类)  层级()
- row(行)::表中的一个记录
- clause(子句)::SQL语句由字句构成,有些子句是必须的,有些子句则是可选的(关键字+数据)
- Keyword(关键字):SQL组成部分的保留字,不能作为表名或列的名字
- Primary Key(主键)::主键常用来表示一个特定的行
- 主键需满足以下条件：
    - 任意两行都不具有相同的主键值;
    - 每一行都都必须具有一个主键值(Not Null值)
    - 主键列中的值不允许修改或更新;
    - 主键值不能重用(如果某行从表中删除,它的主键不能赋值给以后的新行)
    - (多列组合时,列值的组合必须是唯一的)
- datatype(数据类型)
- DataBase Administrator (数据库管理员DBA)
- DataBase Management System(数据库管理系统) software
  -
    1. 数据定义功能
    2. 数据组织,存储和管理
    3. 数据操纵功能(query insert delete,modify,update )
    4. 数据库的事务管理类和维护功能
    5. 数据库的建立和维护功能
    6. 其他
- 数据库系统(DataBase System)=DataBase,DBMS,Software System, DBA 习惯被简称为数据库.
- SQL DML 和 DDL
- 可以把 SQL 分为两个部分：数据操作语言 (DML) 和 数据定义语言 (DDL)。
- SQL (结构化查询语言)是用于执行查询的语法。但是 SQL 语言也包含用于更新、插入和删除记录的语法。
- 查询和更新指令构成了 SQL 的 DML 部分：
  -
    - SELECT - 从数据库表中获取数据
    - UPDATE - 更新数据库表中的数据
    - DELETE - 从数据库表中删除数据
    - INSERT INTO - 向数据库表中插入数据
- SQL 的数据定义语言 (DDL) 部分使我们有能力创建或删除表格。我们也可以定义索引（键），规定表之间的链接，以及施加表间的约束。
- SQL 中最重要的 DDL 语句:
  -
    - CREATE DATABASE - 创建新数据库
    - ALTER DATABASE - 修改数据库
    - CREATE TABLE - 创建新表
    - ALTER TABLE - 变更（改变）数据库表
    - DROP TABLE - 删除表
    - CREATE INDEX - 创建索引（搜索键）
    - DROP INDEX - 删除索引
- Query(查询):SQL的任何语句都是查询,但此术语一般指select语句
- QPS(query per second, 每秒查询数)
- TPS(Transactions Per Second, 每秒处理事务数)
- MVCC(Multiple Version Concurrency Control, 多版本并发控制)

    - MVCC是可重复读隔离级别的核心机制，它允许数据库维护同一数据的多个版本。这样，每个事务都可以看到一个一致的数据快照，即在事务开始时数据库的状态，而不受其他并发事务的影响。在MySQL的InnoDB存储引擎中，每行数据都会有一个隐藏的字段记录该行数据的版本信息，当读取数据时，InnoDB会返回版本最接近当前事务版本的数据行，以确保数据的一致性。

- ### **Undo日志**

    Undo日志用于记录数据的旧版本，当数据发生变更时，变更前的数据会被写入Undo日志。如果一个事务需要读取的数据在事务开始后被其他事务修改了，它可以通过Undo日志来访问到该数据的旧版本，从而实现可重复读。Undo日志还支持数据库的事务回滚操作，即如果一个事务失败或被撤销，通过Undo日志可以恢复数据到事务开始前的状态。
- ### **锁机制**

    尽管MVCC允许多个事务并发读取同一数据的不同版本，但对于数据的修改操作，MySQL仍然需要通过锁机制来避免数据冲突。在可重复读隔离级别下，InnoDB使用行级锁和间隙锁（Next-Key锁的一部分）来防止其他事务插入、删除或修改当前事务已经读取或准备读取的数据范围。这种锁机制确保了即使在高并发的环境下，数据的一致性也得到了保证。
- ### **间隙锁（Gap Locks）**

    在可重复读隔离级别下，InnoDB还会使用间隙锁来防止幻读（Phantom Reads），即防止在同一事务中两次执行相同查询时返回不同结果集。间隙锁是一种锁定索引记录之间的“间隙”，而不是锁定实际的记录，它确保在事务执行过程中不会有新的记录被插入到这些间隙中。 
- ### 结论

    通过MVCC、Undo日志、行级锁和间隙锁等机制，可重复读隔离级别能够有效地平衡数据的一致性需求和系统的并发性能。这些机制共同工作，为数据库操作提供了一个稳定且一致的数据视图，同时减少了锁竞争，提高了系统的并发处理能力。然而，这种隔离级别虽然可以防止脏读和不可重复读，但在某些情况下仍可能发生幻读，这是设计者在选择隔离级别时需要权衡的一个因素。





## 行话

- 软删除(soft delete), 也称逻辑删除, 标记删除

- 硬删除(hard delete), 也称物理删除

# 基础概念

- 全表扫描: 数据库中通常对于无索引的表进行查询.
- 慢查询

# 数据库基础

## 数据库的概念

数据库就是以⼀定格式进行组织的数据的集合。通俗来看数据库就是用户计算机上 一些具有特殊格式的数据文件的集合。

### 数据库的作用

数据库就是⽤来存储数据

相较于普通文本,数据库具备的优势

- 持久化存储
- 读写速度极高
- 保证数据的有效性
- 对程序⽀持性非常常好，容易扩展

### 数据库的分类及特点

⼀般情况下，可以将数据库分为关系型数据库和非关系型数据库

**关系型数据库**

基于关系模型建立, 用二维表进行数据存储的数据库

关系型数据库管理系统-RDBMS（Relational Database Management System）

所谓的关系型数据库RDBMS，是建⽴在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据，本质上使⽤⼀张⼆维表来表示关系。



> Mysql Oracle SQLite PostgreSQL

mysql:web时代使用最广泛的关系型数据库

采⽤了双授权政策，它分为社区版和商业版，由于其体积⼩、速度快、总体使⽤成本低，尤其是开源，⼀般中⼩型⽹站的开发都选择MySQL作为⽹站数据库。

**非关系系数据库**

非关系型数据库，又被称为NoSQL（Not Only SQL )，意为不仅仅是SQL，对NoSQL 最普遍的定义是“非关联型的”，强调Key-Value 存储和文档数据库的优点

基于key-value方式存储

> redis MongoDB

## 数据库管理系统

数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库⽽设计的软件系统，包括三⼤部分构成:

1. 数据库文件集合. 主要是⼀系列的数据⽂件, 作⽤是存储数据.
2. 数据库服务端. 主要负责对数据⽂件以及⽂件中的数据进行管理.
3. 数据库客户端. 主要负责和服务端通信, 向服务端传输数据或者从服务端获取数据.

他们之间的关系:

数据库客户端通过 SQL 语句告诉服务端, 客户端想要做什么.

服务端和数据⽂件⼀般都在同⼀台机器上, 直接可以读写数据⽂件.

由此可知: 我们学习数据库的重点在于如何编写 SQL 语句

数据库客户端通过SQL告诉服务端,客户端想要做什么

### SQL语句

SQL语句的作用是实现数据库客户端和服务端之间的通信.

> 其表现形式为: 带有⼀定格式的字符串.

SQL(Structured Query Language)是结构化查询语⾔，是⼀种⽤来操作RDBMS的数据库语⾔。当前⼏乎所有关系型数据库都⽀持使⽤SQL语⾔进⾏操作,也就是说可以通过
SQL 操作 oracle,sql server,mysql,sqlite 等等所有的关系型的数据库。

SQL语句主要分为:

- **DQL：数据查询语⾔，⽤于对数据进⾏查询，如select**
- **★DML：数据操作语⾔，对数据进⾏增加、修改、删除，如insert、udpate、delete**
- TPL：事务处理语⾔，对事务进⾏处理，包括begin transaction、commit、rollback
- DCL：数据控制语⾔，进⾏授权与权限回收，如grant、revoke
- **★DDL：数据定义语⾔，进⾏数据库、表的管理等，如create、drop**

对于web程序员来讲，重点是数据的crud（增删改查），必须熟练编写DQL、DML，能够编写 DDL完成数据库、表的操作，其它语⾔如TPL、DCL、CCL了解即可.

注意: 不区分大小写

### 关系型数据库中的核心元素

- 数据行(记录)
- 数据列(字段)
- 数据表(数据行的集合)
- 数据库(数据表的集合)

### 数据完整性

#### 数据库分类

**数据库完整性约束⽤于保证数据的正确性**。

系统在更新、插⼊或删除等操作时都要检查数据的完整性，核实其约束条件，即关系模型的完整性规则。

**关系模型**中有四类完整性约束：**实体完整性**、**域完整性**、**参照完整性**和**用户定义完整性**
，其中实体完整性和参照完整性约束条件，成为关系的两个不变性。

#### 1. 实体完整性

实体完整性指表中行的完整性。<u>主要用于保证操作的数据(记录)**非空**、**唯一**且不重复</u>。

即实体完整性要求每个**关系表**有且**仅有一个主键**，每个主键值必须**唯一**，而且**不允许为“空”或重复**。
主键索引，不重复不可以为空
唯一索引，不重复可以为空

#### 2. 域完整性

域完整性是指数据库表中的列必须满足特定的 **数据类型** 和 **约束**. 其中约束又包括 **取值范围,** **精度** 等. check
foreign key约束 和 default not null定义都属于域完整性的范畴.

#### 3. 参照完整性

参照完整性属于表间规则. 对于永久关系的相关表,对其更新,删除,插入记录时, 如果只改其一就会影响数据的完整性. 如 删除父表的某记录后,
子表的相应记录未删除, 致使这些记录成为孤立记录. 对于更新, 插入, 删除表间数据的完整性, 统称为参照完整性.

Asa: 孤立记录,无法被应用,成为无效数据,却占用内存,影响性能和结果.  (关联性删除,依赖关系)

#### 4. 用户定义完整性

用户定义完整性是对数据表中**字段属性**的约束, 用户定义完整性规则也称域完整性规则. 包括字段的值域, 字段类型和字段的有效规则等约束,
是由确定关系结构时所定义的字段属性决定的.

#### 常见约束介绍

| 约束类型        | 约束说明                  |
|-------------|-----------------------|
| not null    | 非空约束(设置非空约束, 该字段不能为空) |
| primary key | 主键约束(唯一性, 非空性)        |
| unique key  | 唯一约束(唯一性,可以空, 但只能有一个) |
| default     | 默认约束(该数据的默认值)         |
| foreign key | 外键约束(需要建立两表间的关系)      |

约束介绍: 分为表级约束和列级约束.

约束作用: 保证数据的完整性和一致性.



# mysql常用命令

> 客户端常用命令
>
> 参考链接

```mysql
# \G Send command to mysql server, display result vertivally. 
# 使用垂直方向显示结果
select * from mysql.user\G

# 使用 mysql Monitor, MySQL Command-Line Cliet

# \q quit mysql
\q

# 通过 -e 参数 执行命令 
mysql -u root -p molook_extend -e 'show tables'
mysql -uroot -p database_name -e "SELECT * FROM table_name;" -t
```

## mysqldump





## mysqlbinlog

```shell
for i in $(seq -w 1 48); do
    mysqlbinlog /path/to/logs/mysql-bin.$i | mysql -u [user] -p[password] [database_name]
done
```

```shell
# 通过--verbose参数打印人类可读语句
mysqlbinlog  --verbose


--exclude-gtids or --include-gtids
```

```shell
# Show events from a specific binary log file:
    mysqlbinlog path/to/binlog

- Show entries from a binary log for a specific database:
    mysqlbinlog --database database_name path/to/binlog

- Show events from a binary log between specific dates:
    mysqlbinlog --start-datetime='2022-01-01 01:00:00' --stop-datetime='2022-02-01 01:00:00' path/to/binlog

- Show events from a binary log between specific positions:
    mysqlbinlog --start-position=100 --stop-position=200 path/to/binlog

- Show binary log from a MySQL server on the given host:
    mysqlbinlog --host=hostname path/to/binlog

```

```shell
#!/usr/bin/env bash

for i in $(seq -w 10 47); do
  if [[ "$i" -eq "47" ]]; then
#        mysqlbinlog --stop-position=1655053 "binlog.0000$i" --database=moway_look | mysql -h 192.168.0.181 -u root -pmetac2022 moway_look
        mysqlbinlog --stop-position=1655053 "binlog.0000$i"  | mysql -h 192.168.0.181 -u root -pmetac2022
  else
#        mysqlbinlog "binlog.0000$i"  --database=moway_look | mysql -h 192.168.0.181 -u root -pmetac2022 moway_look
        mysqlbinlog "binlog.0000$i"   | mysql -h 192.168.0.181 -u root -pmetac2022
  fi
done

```





# 数据类型

先会用,不考虑优化 的问题

> 修饰限定一个列: 数据类型 约束
>
> 实质上 SQL存储的都是字符串
>
> 结构化, 格式化

### 数据类型简述

常规分类方法: 数值, 日期/时间, 字符串

### 数值

#### 整型类型

tinyint

smallint

mediumint

**int**

bigint

#### 浮点型

浮点数是用来表示实数的一种方法

float: 单精度

float(M,D)

float只保证6位有效数字的准确性

double只保证16位有效数字的准确性(很少使用现在统一了float)

#### 定点数

decimal定点数,保持精确的小数

### 字符串

| 字段名称        | 长度 | 用途 |
|-------------|----|----|
| char        | 字符 |    |
| **varchar** |    |    |
| tinytext    |    |    |
| text        |    |    |
|             |    |    |
|             |    |    |
|             |    |    |

varchar 的优先存储类型

varchar(10) 表示10个字符可存储

char 定长 总是占用最大字符

### 枚举类型

gender enum('男','女','妖')

应用场景: 性别 星期 月份 状态表示(是否) , 下拉表单

### 时间类型

date(年月日)

datetime(年月日-时分秒)

timestamp(时间戳)

time(时分秒)

year

### 表的增删改查

增删改查CURD

创建 Create
更新 Update
读取 Read
删除 Delete

删除 数据 / 记录

**插入值时如果不想传值 写入 default 关键字**

**对于自增长的字段, 要么不添加数据, 要么设置为null**

```mysql

-- 增 插入数据
insert into 表名[字段]
values (值1, 值2, 值3...),(...),(...);
-- 删 删除数据 物理删除
delete
from 表名 [
where 条件判断]
-- 改 更新数据
update 表名
set 字段名 = 数据
where 主键字段名 = 记录标识;

-- 查 查询数据
select *
from 表名 -- 一般先输入表名 在输入要查询的字段
select id, name
from classes;

-- 逻辑删除 本质就是修改操作
update students
set isdelete = 1
where id = 1;
```

主键列是自动增长,单数在全列插入时需要占位,**通常使用空值( `0` 或者 `null` )**; 字段**默认值用   `default` 来占位,**
插入成功后以实际数据为准.

全列插入: 值的顺序与表结构字段的顺序完全一一对应

指定插入: 插入值时,与自定的顺序有关

## 条件检索

### where条件之模糊查询

> 能够说出like的作用
>
> 模糊查询关键字和标志位

#### as关键字

给字段起别名, 使显示结果具备良好的可读性

select

#### 数据去重

数据去重,消除重复行

```mysql
-- distinct关键字可以消除重复的行
select distinct 列1, 列2, ... from 表名;
select distinct gender
from students;
```

#### 模糊查询

1. like
2. %表示任意多个任意字符
3. _表示任意一个字符

### where条件之范围查询

范围查询分为连续范围查询和非连续范围查询

> in 表示在一个非连续的范围内

```mysql
select *
from Customers
where cust_state in ('IN', 'MI');
```

> between and 表示在一个连续范围内(可以用 >= <= 替代 以避免歧义)
>
> 连续: 包含开始值和结束值

```mysql
select *
from Customers
where cust_zip between 40000 and 50000;
```

> 不在范围内 前面加 not 即可

```mysql
select *
from Customers
where cust_state not in ('IN', 'MI');
select *
from Customers
where cust_zip not between 40000 and 50000;
```

> not (between 18 and 34) 是错误的 这和not in 相似 不能分开

### where条件之空值判断

> 知道用什么判断空 和 非空

#### 空判断

```mysql
select *
from Customers
where cust_state is null;
```

limit 使用插件 而不是自己写

#### 非空判断

```mysql
select *
from Customers
where cust_state is not null;
```

### order by 排序

```mysql
select prod_name, prod_price, prod_id
from Products
order by prod_price desc, prod_name;
```

## 聚合函数

> 数据统计 max() min() avg() sum() count()
>
> 求出集合中的 最大值, 最小值, 平均值, 和, 数量
>
> 对现有数据进行计算

### 聚合函数的作用(方法)和特点(属性)

aggregation function 又称为组函数, 默认情况下, 聚合函数会对当前所在表当做一个组进行统计.

| 命令       | 作用   | 用法 |
|----------|------|----|
| count(*) | 表统计  |    |
| max(col) | 最大值  |    |
| min(col) | 最小值  |    |
| sum(col) | 求和   |    |
| avg(col) | 求平均数 |    |

> round(avg(col),2)  小数点四舍五入 这不是聚合函数 保留几位小数

### 聚合函数的用法(应用场景)

## 分组数据

> 目标
>
> 对数据进行分类统计和计算
>
> 分组的目的
>
> group by 完成对数据的分组
>
> group_concat(字段名)函数的作用
>
> 使用聚合函数完成对分组结果进行统计
>
> 能够使用having 完成对分组结果进行

### 数据分组的概念

对数据表的子集进行处理,将数据分为多个逻辑组,对每个组进行聚集计算

```mysql
select vend_id, count(*)
from Products
group by vend_id;
```

```mysql
select vend_id, group_concat(prod_id)
from Products
group by vend_id;
```

group_concat(字段名)根据分组结果，使⽤group_concat()来放置每⼀个分组中某字段的集合

使用 with rollup 进行汇总合计

having 组级过滤

###  

### 外键: foreign key

> 外键约束的作用
> 应用场景:表和表之间的约束 现有分类再有产品

#### 外键的概念

**外键约束**: 指定某一个列或一组列作为外部键, 其中包含外部键的表称为子表,包含外键所引用的键的表称为父表

当一个表的**主键A**在另外一个表B出现,则说 **A** 是表B的一个**外键**

外键的概念:
一个表的主键在另外一个表中出现,在另外一个表中称为外键

作用:表键的 数据插入, 更新的时候的一种**约束**

创建外键:

#### 对于已经存在的字段添加外键约束

创建外键不成功的原因可能是表里面有无效数据

```sql
alter table goods
    add foreign key (current.id) references goods_state id;
alter table 表名
    add foreign key (当前表的字段) references 表名 (字段)
```

#### 创建表的同时创建外键

```mysql
create table test
(
    test_id int unsigned primary key auto_increment not null,

);
```

删除外键

使用到外键约束会极大额降低表更新的效率

### 视图(view)

> 白话理解: 数据库的快照, 一张临时表

#### 视图的概念及特性

虚拟表,仅仅支持查询,把复杂的sql语句的功能封装起来

当原表(物理表改变后会影响视图(虚拟表)的数据也会发生改变

视图的数据是动态的

#### 视图的作用及方法

为了简化用户的复杂的引用

事务-- 面试题天天问事务

#### 视图的用法(应用场景)

注意: 视图命名时 应该以`v_`开头 以与物理表区分开来

视图只能用来查询,查询时的使用和普通表效果一直

```mysql
-- 创建视图
create view v_test as
(
查询语句);
-- 类似子查询
-- 查看视图
show tables;
select *
from v_test;
-- 使用视图
select *
from v_test;
-- 删除视图
drop view v_test;
```

### 事务-transaction

> 学习目标
>
> 事务的使用场景
>
> 事务的**四个特性**

#### 事务的概念及特性

原意: 需要完成的一件事情

事务transaction, 是指作为一个基本工作单元执行的一系列 SQL语句的操作, 要么完全地执行, 要么完全地都不执行.

事务的四大特性ACID

- 原子性(Atomicity)

  > 一个事务必须被视为一个不可分割的最小工作单元

- 一致性(Consistency)

  > 数据库总是从一个一致性的状态转换到另一个一致性状态. 在提交修改前, 数据是不会修改的.

- 隔离性(Isolation)

  > 一个事务所做的修改在最终提交以前,对其他事务是不可见的(其他人无法进行操作). 同一时间只有 一个事务在操作
  >
  > (7天之后可撤销,7天后再存到数据库)

- 持久性(Durability)

  > 一旦事务提交,则其所做的修改会永久保存到数据库. 操作完成结果持久不变

#### 事务的作用

保证:保证数据操作的有效性,要么完全执行,要么完全不执行

可以回滚数据,增强可操作性,和避免误操作

**一般对数据库进行操作时, 建议开启事务**

#### 事务的使用

> 明确目标
>
> - commit对事务的作用
> - rollback对事务的作用

show engines;

存储引擎

开启事务

回滚事务

放弃缓存中变更的数据,表示事务执行失败, 应该回到开始事务前的状态

```mysql
-- 开启事务 进入事务模式 
begin;
start transaction;
-- 或者该方法
-- 操作数据库
update vend_name = 'test'
where vend_id = 12345;
-- 提交事务 彻底修改数据库,无法撤销
commit;
-- 回滚事务, 支持撤销功能
rollback;
```

### 验证事务

> 验证事务的特性

连表查 自连接 子查询 事务

#### 思考问题

原子性强调事务中的多个操作是一个整体

一致性强调数据库中不会保存不一致状态

隔离性强调数据库中事务之间相互不可见

持久性强调数据库能永久保存数据, 一旦提交就不可撤销

事务方面需要注意的几个问题

修改数据的命令会⾃动的触发事务，包括insert、update、delete

2. 在mysql命令⾏中会⾃动提交事务，所以当我insert语句执⾏完成后没有commit数据库也看到了提
   交的数据。
3. 当我们不需要mysql命令行自动提交的时候 键键入set autocommit=0 即可
4. SQL语句中有⼿动开启事务的原因是：可以进行多次数据的修改，如果成功⼀起成功，否则⼀起
   会滚到之前的数据
5. 不可撤销的操作（隐式提交）: 除了对表数据insert/update/delete语句之外的绝⼤多数语句都是不
   能撤销的，比如数据库、表结构的操作，大家可以动手验证。

### 数据库设计三范式

(信息分类整理, 数据表述 修饰明确)

更好对现实对象进行模拟

- 强调的是列的原子性,即列不能够再分成其他几列;
- 表必须有一个主键,非主键字段必须**完全依赖**于主键,而不能部分依赖.  (拆表)
- 非主键字段必须**直接依赖**于主键,不能存在传递依赖(间接依赖).

非主键是对主键的修饰

### 数据库设计

数据库的关联是重点(灵活使用外键)

一个表可以有任意个外键, 必须有一个主键

### ER模型及表间关系

实体联系图(Entity Relationship Diagram)

E-R图即实体-联系图, 是指提供了实体型, 属性和联系的方法, 用来**描述现实世界的概念模型**.

E-R图

#### 使用场景

- **关系型数据库** 关系模型的基础上, 我们需要根据产品经理的设计策划, 抽取出来模型与关系, 制定出表结构, 这是项目开始的第一步

- 在设计阶段一般使用E-R模型进行建模. 有很多设计数据库的软件, 常用的如power designer,db designer, Visio等,
  这些软件可以直观的看到实体及实体间的关系

- 设计数据库, 可能由专门的数据库设计人员完成, 也可能是由开发组成员完成,一般是项目经理带领组员来完成

- 设计完成E-R模型后,一般会将其转化为关系模型

  > 关系模型 用二维表的形式表示实体和实体间联系的数据模型

E-R模型 转化为 二维关系模型

实体间的交互 是联系的方法

**关系也是一种数据, 需要通过一个字段存储在表中**

#### E-R模型组成元素

- 实体型: 矩形
- 属性: 椭圆
- 联系:菱形(1 : n 1 : 1 n : n)
- 连接方法:实心线段

**如何保存多对多的关系场景**

- 学生表/科目表 - 学生选课表
- 订单/商品 - 订单详情表

使用中间表(关系表)

## 数据库编程

### 学习目标

> python操作数据库: 连接数据库并查询
>
> connect()方法创建连接对象
>
> cursor()方法 创建游标对象
>
> execute()方法 执行 SQL语句



用编程的思路完成10万天数据插入数据库

### Python中操作MySQL步骤

#### 使用 Python DB API访问数据库流程

#### Connection对象

## 索引 - index

索引的本质其实是为字段的一列或多列创建一个数据结构, 方便查询是快速查询到该值

一般的应用系统对比数据库的**读写比例**在**10 : 1**左右(10次查操作才有一次写操作)
而且插入和更新操作很少出现性能问题

**因此需要使用索引来提高查询效率**

遇到最多, 最容易出问题还是一些复杂的查询操作, 所以查询语句的优化显然是重中之重.
当数据库中数据量很大时, 查找数据会变得很慢,我们就可以使用索引来提高数据库的查询效率

### 索引概念

**索引**是一种**特殊的文件**, 它包含着对数据表的所有记录的**位置信息**

好比是一本书前面的目录,能加快数据库的查询速度

### 索引原理

通过不断缩小想要获得数据的范围来筛选出最终想要的结果

同时把随机的事件变成顺序的事件

分段查询

### 索引的使用

查看表中已有索引

```mysql
show index from 表名;
```

创建索引

```mysql
create index 索引名称 on 表名 (字段名称(长度) )
create index index0 on goods id;
```

删除索引

```mysql
drop index 索引名称 on 表名;
```

### 索引作用

**数据库索引**，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中数据。**索引的实现通常使用B树及其变种B+树
**。

设置索引的代价: 一是增加了数据库的存储空间，二是在插入和修改数据时要花费较多的时间(因为索引也要随之变动)。

创建索引可以大大提高系统的性能。

第一，通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。

第二，可以大大加快数据的检索速度，这也是创建索引的最主要的原因。

第三，可以加速表和表之间的连接，特别是在实现数据的参考完整性方面特别有意义。

第四，在使用分组和排序子句进行数据检索时，同样可以显著减少查询中分组和排序的时间。

第五，通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。

**索引是建立在数据库表中的某些列的上面**
。在创建索引的时候，应该考虑在哪些列上可以创建索引，在哪些列上不能创建索引。一般来说，应该在这些列上创建索引：在经常需要搜索的列上，可以加快搜索的速度；在作为主键的列上，强制该列的唯一性和组织表中数据的排列结构；在经常用在连接的列上，这些列主要是一些外键，可以加快连接的速度；在经常需要根据范围进行搜索的列上创建索引，因为索引已经排序，其指定的范围是连续的；在经常需要排序的列上创建索引，因为索引已经排序，这样查询可以利用索引的排序，加快排序查询时间；在经常使用在WHERE子句中的列上面创建索引，加快条件的判断速度。

根据数据库的功能，可以在数据库设计器中创建三种索引：唯一索引、主键索引和聚集索引。

- 唯一索引
  唯一索引是不允许其中任何两行具有相同索引值的索引。当现有数据中存在重复的键值时，大多数数据库不允许将新创建的唯一索引与表一起保存。数据库还可能防止添加将在表中创建重复键值的新数据。例如，如果在employee表中职员的姓(
  lname)上创建了唯一索引，则任何两个员工都不能同姓。
- 主键索引
  数据库表经常有一列或列组合，其值唯一标识表中的每一行。该列称为表的主键。
  在数据库关系图中为表定义主键将自动创建主键索引，主键索引是唯一索引的特定类型。该索引要求主键中的每个值都唯一。当在查询中使用主键索引时，它还允许对数据的快速访问。

- 聚集索引
  在聚集索引中，表中行的物理顺序与键值的逻辑（索引）顺序相同。一个表只能包含一个聚集索引。
  如果某索引不是聚集索引，则表中行的物理顺序与键值的逻辑顺序不匹配。与非聚集索引相比，聚集索引通常提供更快的数据访问速度。

## 爬取数据并保存到数据库中

> 创建所需数据库, 数据表
>
> 采集电影信息保存到数据库中

## 创建用户

```mysql
create database meiduo_mall character set utf8mb4;

create user meiduo identified by 'meiduo';
grant all on meiduo_mall.* to 'meiduo'@'%';
flush privileges;
```

说明：

- 为本项目创建数据库用户（不再使用root账户）
- 第一句：创建用户账号 meiduo, 密码 meiduo (由identified by 指明)
- 第二句：授权meiduo_mall数据库下的所有表（meiduo_mall.*
  ）的所有权限（all）给用户meiduo在以任何ip访问数据库的时候（'meiduo'@'%'）
- 第三句：刷新生效用户权限

# 技术原理

SQL执行过程包括以下阶段 词法分析->语法分析->语义分析->执行计划优化->执行。词法分析->语法分析这两个阶段我们称之为硬解析。

词法分析识别sql中每个词，语法分析解析SQL语句是否符合sql语法，并得到一棵语法树（Lex）。对于只是参数不同，其他均相同的sql，它们执行时间不同但硬解析的时间是相同的。

Prepare的出现就是为了优化硬解析的问题。

## 执行过程

SQL语句执行顺序





# SQL语句-[statements](https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html)

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306060843045.png)

## SELECT

### 分页查询

> 能够使用公式计算limit查询的起始数据

```mysql
select *
from 表名
limit start
=0, count
```

### 连接查询

> 连接的作用
>
> 笛卡尔积
>
> 内连接
>
> 外连接
>
> inner join
>
> left/right join

连接表概念

### 等值连接 = 内连接

创建连接非常简单, 制定要连接的所有表以及关联他们的方式即可

```mysql
select vend_name, prod_name, prod_price
from Vendors,
     Products
-- 当不限定where子句时,返回结果将是笛卡尔积
where Vendors.vend_id = Products.vend_id
;
```

### 内连接

两则的区别是语法不同

```mysql
select prod_name, vend_name, prod_price
from Vendors
         inner join Products
                    on Vendors.vend_id = Products.vend_id
;
```

### 连接多个表

要连接的表, 和连接的对应关系

```mysql
select prod_name, vend_name, prod_price, quantity
from OrderItems,
     Products,
     Vendors
where Products.vend_id = Vendors.vend_id
  and OrderItems.prod_id = Products.prod_id
  and order_num = 20007;
```

对表使用别名 as a, b, c

### 外连接

许多连接将一个表中的行与另一个表中的行进行关联, 但有时候需要包含没有关联行的那些行. 连接包含了那些站在相关表中没有关联行的行,这种连接被称为外连接.

外连接的特点: 以主表为基础进行统计,不论副表中要匹配的数据是否存在着关联

需求场景:

- 对每个顾客下的订单进行计数,包括那些至今尚未下订单的顾客;

```mysql
-- 对每个顾客下的订单进行计数,包括那些至今尚未下订单的顾客;
select Customers.cust_id, count(Orders.order_num)
from Customers
         left join Orders
                   on Customers.cust_id = Orders.cust_id
group by Customers.cust_id
;
```

- 列出所有产品以及订购数量,包括没有人订购的产品;

```mysql
-- 列出所有产品以及订购数量,包括没有人订购的产品; 
select Products.prod_id, sum(OrderItems.order_item), group_concat(order_item)
from Products
         left join OrderItems
                   on Products.prod_id = OrderItems.prod_id -- 这是关联条件/对应关系
group by prod_id
;
```

- 计算平均销售规模,包括那些至今尚未下订单的顾客.

```mysql

```

### 使用连接和连接条件

- 注意所使用的连接类型. 一般我们使用内连接, 但使用外连接也有效.
- 保证使用正确的连接条件(不管采用哪种语法), 否则会返回不正确的数据.
- 应该总是提供连接条件, 否则会得出笛卡尔积.
- 在一个连接中可以包含多个表,甚至可以对每个连接采用不同的连接类型. 虽然这样做是合法, 一般也很有用,但应该在**一起测试它们前
  ** **分别测试每个连接**. 这会使故障排除更为简答.

### 去重复查询(修饰限定)

select distinct prod_name from Prouducts;

### 子查询

## 语法规则-SQL statements

> [官方文档](https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html)

一般规则:

- 分号结束语句
- shell 模式下强制以分号结束语句
- 语句一般以 `关键字 + 参数 + 数据` 的形式
- `keyword` + `parameter` + `[options]`

查看帮助文档

- shell 模式下 ? 键入问好 进入帮助模式

- bash 下 `man mysql` 查看手册 或者 `mysql --help`

**数据定义语句**  Data Definition Statement

> DDS create alter drop

**数据操作语句** Data Manipulation Statement

> DMS select delete update insert

### 子句结构和顺序

支持嵌套(子查询)

| 子句         | 说明             |
|------------|----------------|
| select     | 要返回的列或表达式      |
| from       | 从中检索数据的表       |
| where      | **行级过滤**       |
| group by   | 分组说明           |
| having     | **组级过滤**       |
| order by   | 输出排序顺序         |
| limit 0, 3 | 限制记录(从第几条,共几条) |

总结: 使用group by子句对多组数据进行汇总计算, 返回每个组的结果. 使用having子句过滤特定的组. 区分order by和group
by之间以及where和having之间的差异.

### 检索 - select

检索数据时 通常还会涉及到 **排序** - **过滤** - **处理** 等动作来取到预期的数据

通过非查询列进行检索列排序也是可以的

```mysql
SELECT
    [ALL | DISTINCT | DISTINCTROW ]
    [HIGH_PRIORITY]
    [STRAIGHT_JOIN]
    [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]
    [SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]
    select_expr [, select_expr]...
    [into_option]
    [
FROM table_references
    [PARTITION partition_list]]
    [
WHERE where_condition]
    [
GROUP BY {col_name | expr | position}, ... [
WITH ROLLUP]]
    [
HAVING where_condition]
     [WINDOW window_name AS (window_spec)
     [
     , window_name AS (window_spec)]...]
    [
ORDER BY {col_name | expr | position}
    [ASC |
DESC],... [WITH ROLLUP]]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
    [into_option]
    [FOR {
UPDATE | SHARE}
    [OF tbl_name [, tbl_name]...]
    [NOWAIT | SKIP LOCKED]
    |
LOCK
IN SHARE MODE]
    [into_option]

into_option: {
    INTO OUTFILE 'file_name'
        [CHARACTER
SET charset_name]
    export_options
    | INTO DUMPFILE 'file_name'
    | INTO var_name [, var_name]...
}
```

```mysql
-- 基础查询
select *
from t_study;

-- 使用表别名 
select <exp> as < name >
from < table >;

select RTRIM(vend_name) + '(' + RTRIM(vend_country) + ')' AS Vend_title
from Vendors
order by vend_name;
```

### 过滤 - where

### 插入 - insert

> 相当于是位置参数的模式, 一个都不能少, 也不能多, 而且应该一一对应;
>
> 作用: 利用SQL的insert语句将数据插入表中.

#### 重要说明

- 主键, 自增时的 替代 null,
- 默认值 用 `default`
- 插入完整/部分行

- 不插入的列应该允许NULL值,或者在表定义中给出默认值

#### 常见需求

插入单条/ 多条数据,插入完整/部分行, 从查询结果中插入数据, 从表到表插入数据

```mysql
-- 插入单条数据
insert into < table >(col0, col1, ..., colN)
values (val0, val1, ...,valN);
insert into my_table
values (null, '吴方圆', default, 18, '吴方圆, 重庆人云阳,是个帅哥!');

-- 插入多条数据
insert into < table >(col0, col1, ..., colN)
values
    (val0, val1, ...,valN),
(val0,val1,...,valN),
(val0,val1,...,valN),
...
(val0,val1,...,valN)
;
-- 插入完整/部分行
insert into TABLE(column_a, column_b, colum_c)
values ('A', 'B', 'C');

-- 插入检索出的数据 
insert into TABLE(column_A, B, C)
select A, B, C
from custnew;

-- TODO从一个表复制到另一个表
Oracle/SQL Server:
select *
into TABLE_New
from TABLE;
MySQL/PostgreSQL:
create table table_New AS
select *
from customers;
insert select 与select into的一个区别:前者是插入数据,而后者导出数据(对已有表进行覆盖)
select
into / create table 的重要作用是导出原表而不用对原表进行任何改动.

-- 语法示例
    insert
into my_table
values
    (null, '吴方圆0', default, 18, '吴方圆, 重庆人云阳,是个帅哥!'), (null, '吴方圆1', default, 19, '吴方圆, 重庆人云阳,是个帅哥!'), (null, '吴方圆2', default, 20, '吴方圆, 重庆人云阳,是个帅哥!'), (null, '吴方圆3', default, 21, '吴方圆, 重庆人云阳,是个帅哥!')
;

```

### 更新 - update

### 创建 - create

```mysql
CREATE
[TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
    (create_definition,.
..)
    [table_options]
    [partition_options]

CREATE
[TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
    [(create_definition,.
..)]
    [table_options]
    [partition_options]
    [IGNORE |
REPLACE]
    [AS] query_expression

CREATE
[TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
    { LIKE old_tbl_name | (LIKE old_tbl_name) }

create_definition: {
    col_name column_definition
  | {INDEX | KEY} [index_name] [index_type] (key_part,.
..)
      [index_option] .
..
  | {FULLTEXT | SPATIAL} [INDEX | KEY] [index_name] (key_part,.
..)
      [index_option] .
..
  | [CONSTRAINT [symbol]] PRIMARY KEY
      [index_type] (key_part,.
..)
      [index_option] .
..
  | [CONSTRAINT [symbol]] UNIQUE [INDEX | KEY]
      [index_name] [index_type] (key_part,.
..)
      [index_option] .
..
  | [CONSTRAINT [symbol]] FOREIGN KEY
      [index_name] (col_name,.
..)
      reference_definition
  | check_constraint_definition
}

column_definition: {
    data_type [NOT NULL | NULL] [DEFAULT {literal | (expr)} ]
      [VISIBLE | INVISIBLE]
      [AUTO_INCREMENT] [UNIQUE [KEY]] [[PRIMARY] KEY]
      [COMMENT 'string']
      [COLLATE collation_name]
      [COLUMN_FORMAT {FIXED | DYNAMIC | DEFAULT}]
      [ENGINE_ATTRIBUTE [=] 'string']
      [SECONDARY_ENGINE_ATTRIBUTE [=] 'string']
      [STORAGE {DISK | MEMORY}]
      [reference_definition]
      [check_constraint_definition]
  | data_type
      [COLLATE collation_name]
      [GENERATED ALWAYS] AS (expr)
      [VIRTUAL | STORED] [NOT NULL | NULL]
      [VISIBLE | INVISIBLE]
      [UNIQUE [KEY]] [[PRIMARY] KEY]
      [COMMENT 'string']
      [reference_definition]
      [check_constraint_definition]
}

data_type:
    (see Chapter 11, Data Types)

key_part: {col_name [(length)] | (expr)} [ASC |
DESC]
    index_type:
    USING {BTREE | HASH}
    index_option: {
    KEY_BLOCK_SIZE [=] value
    | index_type
    | WITH PARSER parser_name
    | COMMENT 'string'
    | {VISIBLE | INVISIBLE}
    |ENGINE_ATTRIBUTE [=] 'string'
    |SECONDARY_ENGINE_ATTRIBUTE [=] 'string'
    }
    check_constraint_definition:
    [CONSTRAINT [symbol]]
CHECK (expr) [[NOT] ENFORCED]
    reference_definition:
    REFERENCES tbl_name (key_part,...)
      [MATCH FULL | MATCH PARTIAL | MATCH SIMPLE]
      [ON
DELETE reference_option]
    [
ON
UPDATE reference_option]
    reference_option:
    RESTRICT | CASCADE |
SET NULL | NO ACTION | SET DEFAULT
    table_options:
    table_option [[,] table_option]...

table_option: {
    AUTOEXTEND_SIZE [=] value
  | AUTO_INCREMENT [=] value
  | AVG_ROW_LENGTH [=] value
  | [DEFAULT] CHARACTER
SET
[=] charset_name
  |
CHECKSUM [=] {0 | 1}
    | [DEFAULT] COLLATE [=] collation_name
    | COMMENT [=] 'string'
    | COMPRESSION [=] {'ZLIB' | 'LZ4' | 'NONE'}
    | CONNECTION [=] 'connect_string'
    | {DATA | INDEX} DIRECTORY [=] 'absolute path to directory'
    | DELAY_KEY_WRITE [=] {0 | 1}
    | ENCRYPTION [=] {'Y' | 'N'}
    | ENGINE [=] engine_name
    | ENGINE_ATTRIBUTE [=] 'string'
    | INSERT_METHOD [=] { NO | FIRST | LAST }
    | KEY_BLOCK_SIZE [=] value
    | MAX_ROWS [=] value
    | MIN_ROWS [=] value
    | PACK_KEYS [=] {0 | 1 | DEFAULT}
    | PASSWORD [=] 'string'
    | ROW_FORMAT [=] {DEFAULT | DYNAMIC | FIXED | COMPRESSED | REDUNDANT | COMPACT}
    | SECONDARY_ENGINE_ATTRIBUTE [=] 'string'
    | STATS_AUTO_RECALC [=] {DEFAULT | 0 | 1}
    | STATS_PERSISTENT [=] {DEFAULT | 0 | 1}
    | STATS_SAMPLE_PAGES [=] value
    | TABLESPACE tablespace_name [STORAGE {DISK | MEMORY}]
    | UNION [=] (tbl_name[,tbl_name]...)
}

partition_options:
    PARTITION BY
        { [LINEAR] HASH(expr)
        | [LINEAR] KEY [ALGORITHM={1 | 2}] (column_list)
        | RANGE{(expr) | COLUMNS(column_list)}
        | LIST{(expr) | COLUMNS(column_list)} }
    [PARTITIONS num]
    [SUBPARTITION BY
        { [LINEAR] HASH(expr)
        | [LINEAR] KEY [ALGORITHM={1 | 2}] (column_list) }
      [SUBPARTITIONS num]
    ]
    [(partition_definition [, partition_definition] ...)]

partition_definition:
    PARTITION partition_name
        [VALUES
            {LESS THAN {(expr | value_list) | MAXVALUE}
            |
            IN (value_list)}]
        [[STORAGE] ENGINE [=] engine_name]
        [COMMENT [=] 'string' ]
        [DATA DIRECTORY [=] 'data_dir']
        [INDEX DIRECTORY [=] 'index_dir']
        [MAX_ROWS [=] max_number_of_rows]
        [MIN_ROWS [=] min_number_of_rows]
        [TABLESPACE [=] tablespace_name]
        [(subpartition_definition [, subpartition_definition] ...)]

subpartition_definition:
    SUBPARTITION logical_name
        [[STORAGE] ENGINE [=] engine_name]
        [COMMENT [=] 'string' ]
        [DATA DIRECTORY [=] 'data_dir']
        [INDEX DIRECTORY [=] 'index_dir']
        [MAX_ROWS [=] max_number_of_rows]
        [MIN_ROWS [=] min_number_of_rows]
        [TABLESPACE [=] tablespace_name]

query_expression:
SELECT...   (Some valid select or union statement)
```

17.1.2使用null值

☆主键和null值:主键是其值唯一标识表中每一行的列.只有不允许NULL值的列可以为主键,允许NULL值的列不能作为唯一标识.

[注意]理解NULL:NULL值与空字符串是不一样的

 17.1.3指定默认值

SQL允许指定默认值,在插入行时如果不给出值,DBMS将自动采用默认值.默认值在create table语句发热列定义中 用关键字default指定;

create table OrderItems (quantity integer NOT NULL default 1);

系统时间默认值函数 MySQL: current_date()    SQL server: getdate()

17.2更新表

更新表定义 可以使用 alter table语句

场景:增加列:alter table vendors add vend_phone char(20);

场景:删除列:alter table vendors drop column vend_phone;

```mysql
create table products
(
    prod_id   char(10)   NOT NULL,
    vend_id   char(10)   NOT NULL,
    prod_name char(10)   NOT NULL,
    prod_desc text(1000) NULL
);
```

### 删除 - delete Data

重要说明

- 不要省略where子句!!否则会更新所有行.
- update与安全客户端/服务器的DBMS中.
- 使用update语句需要特殊的安全权限
- 要删除某列某行的值,需要将将该行设置值为NULL

### 删除 - Drop Table

```mysql
-- 删除表
drop table CustCopy;

-- 重命名表
RENAME TABLE old_table_name TO new_table_name;
```

### 修改 - Alter Table

## INSERT



# 常用函数

## 类型转换

> cast()    convert()    binary()

语法格式

```mysql
-- 时间转字符串
date_format
    (BirthDate, '%Y%m%d')

-- 字符串转日期
select str_to_date('2016-01-02', '%Y-%m-%d %H');
# 结果：2016-01-02 00:00:00
select str_to_date('2016-01-02', '%Y-%m-%d');
```

## 常用函数

## 日期函数

对比时间差

timestampdiff

datediff

date()

对mysql中日期范围搜索的大致有三种方式：

1、between and语句；
2、datediff函数；
3、timestampdiff函数

[官方文档](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html)

| Name                                                                                                                                          | Description                                                                                                                 |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| [`ADDDATE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_adddate)                                          | Add time values (intervals) to a date value                                                                                 |
| [`ADDTIME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_addtime)                                          | Add time                                                                                                                    |
| [`CONVERT_TZ()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_convert-tz)                                    | Convert from one time zone to another                                                                                       |
| [`CURDATE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_curdate)                                          | Return the current date                                                                                                     |
| [`CURRENT_DATE()`, `CURRENT_DATE`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-date)                | Synonyms for CURDATE()                                                                                                      |
| [`CURRENT_TIME()`, `CURRENT_TIME`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-time)                | Synonyms for CURTIME()                                                                                                      |
| [`CURRENT_TIMESTAMP()`, `CURRENT_TIMESTAMP`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-timestamp) | Synonyms for NOW()                                                                                                          |
| [`CURTIME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_curtime)                                          | Return the current time                                                                                                     |
| [`DATE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date)                                                | Extract the date part of a date or datetime expression                                                                      |
| [`DATE_ADD()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-add)                                        | Add time values (intervals) to a date value                                                                                 |
| [`DATE_FORMAT()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-format)                                  | Format date as specified                                                                                                    |
| [`DATE_SUB()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-sub)                                        | Subtract a time value (interval) from a date                                                                                |
| [`DATEDIFF()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_datediff)                                        | Subtract two dates                                                                                                          |
| [`DAY()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_day)                                                  | Synonym for DAYOFMONTH()                                                                                                    |
| [`DAYNAME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayname)                                          | Return the name of the weekday                                                                                              |
| [`DAYOFMONTH()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofmonth)                                    | Return the day of the month (0-31)                                                                                          |
| [`DAYOFWEEK()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofweek)                                      | Return the weekday index of the argument                                                                                    |
| [`DAYOFYEAR()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofyear)                                      | Return the day of the year (1-366)                                                                                          |
| [`EXTRACT()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_extract)                                          | Extract part of a date                                                                                                      |
| [`FROM_DAYS()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_from-days)                                      | Convert a day number to a date                                                                                              |
| [`FROM_UNIXTIME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_from-unixtime)                              | Format Unix timestamp as a date                                                                                             |
| [`GET_FORMAT()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_get-format)                                    | Return a date format string                                                                                                 |
| [`HOUR()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_hour)                                                | Extract the hour                                                                                                            |
| [`LAST_DAY`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_last-day)                                          | Return the last day of the month for the argument                                                                           |
| [`LOCALTIME()`, `LOCALTIME`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_localtime)                         | Synonym for NOW()                                                                                                           |
| [`LOCALTIMESTAMP`, `LOCALTIMESTAMP()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_localtimestamp)          | Synonym for NOW()                                                                                                           |
| [`MAKEDATE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_makedate)                                        | Create a date from the year and day of year                                                                                 |
| [`MAKETIME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_maketime)                                        | Create time from hour, minute, second                                                                                       |
| [`MICROSECOND()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_microsecond)                                  | Return the microseconds from argument                                                                                       |
| [`MINUTE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_minute)                                            | Return the minute from the argument                                                                                         |
| [`MONTH()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_month)                                              | Return the month from the date passed                                                                                       |
| [`MONTHNAME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_monthname)                                      | Return the name of the month                                                                                                |
| [`NOW()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now)                                                  | Return the current date and time                                                                                            |
| [`PERIOD_ADD()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_period-add)                                    | Add a period to a year-month                                                                                                |
| [`PERIOD_DIFF()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_period-diff)                                  | Return the number of months between periods                                                                                 |
| [`QUARTER()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_quarter)                                          | Return the quarter from a date argument                                                                                     |
| [`SEC_TO_TIME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_sec-to-time)                                  | Converts seconds to 'hh:mm:ss' format                                                                                       |
| [`SECOND()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_second)                                            | Return the second (0-59)                                                                                                    |
| [`STR_TO_DATE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_str-to-date)                                  | Convert a string to a date                                                                                                  |
| [`SUBDATE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_subdate)                                          | Synonym for DATE_SUB() when invoked with three arguments                                                                    |
| [`SUBTIME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_subtime)                                          | Subtract times                                                                                                              |
| [`SYSDATE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_sysdate)                                          | Return the time at which the function executes                                                                              |
| [`TIME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time)                                                | Extract the time portion of the expression passed                                                                           |
| [`TIME_FORMAT()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time-format)                                  | Format as time                                                                                                              |
| [`TIME_TO_SEC()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time-to-sec)                                  | Return the argument converted to seconds                                                                                    |
| [`TIMEDIFF()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timediff)                                        | Subtract time                                                                                                               |
| [`TIMESTAMP()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestamp)                                      | With a single argument, this function returns the date or datetime expression; with two arguments, the sum of the arguments |
| [`TIMESTAMPADD()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestampadd)                                | Add an interval to a datetime expression                                                                                    |
| [`TIMESTAMPDIFF()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestampdiff)                              | Subtract an interval from a datetime expression                                                                             |
| [`TO_DAYS()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_to-days)                                          | Return the date argument converted to days                                                                                  |
| [`TO_SECONDS()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_to-seconds)                                    | Return the date or datetime argument converted to seconds since Year 0                                                      |
| [`UNIX_TIMESTAMP()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_unix-timestamp)                            | Return a Unix timestamp                                                                                                     |
| [`UTC_DATE()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-date)                                        | Return the current UTC date                                                                                                 |
| [`UTC_TIME()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-time)                                        | Return the current UTC time                                                                                                 |
| [`UTC_TIMESTAMP()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-timestamp)                              | Return the current UTC date and time                                                                                        |
| [`WEEK()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_week)                                                | Return the week number                                                                                                      |
| [`WEEKDAY()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_weekday)                                          | Return the weekday index                                                                                                    |
| [`WEEKOFYEAR()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_weekofyear)                                    | Return the calendar week of the date (1-53)                                                                                 |
| [`YEAR()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_year)                                                | Return the year                                                                                                             |
| [`YEARWEEK()`](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_yearweek)                                        | Return the year and week                                                                                                    |

| Specifier |      | Description                                                                                                                                                                         |
|-----------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `%a`      | 星期   | Abbreviated weekday name (`Sun`..`Sat`)                                                                                                                                             |
| `%b`      | 月份   | Abbreviated month name (`Jan`..`Dec`)                                                                                                                                               |
| `%c`      | 数字月份 | Month, numeric (`0`..`12`)                                                                                                                                                          |
| `%D`      |      | Day of the month with English suffix (`0th`, `1st`, `2nd`, `3rd`, …)                                                                                                                |
| `%d`      | 数字天数 | Day of the month, numeric (`00`..`31`)                                                                                                                                              |
| `%e`      |      | Day of the month, numeric (`0`..`31`)                                                                                                                                               |
| `%f`      |      | Microseconds (`000000`..`999999`)                                                                                                                                                   |
| `%H`      |      | Hour (`00`..`23`)                                                                                                                                                                   |
| `%h`      |      | Hour (`01`..`12`)                                                                                                                                                                   |
| `%I`      |      | Hour (`01`..`12`)                                                                                                                                                                   |
| `%i`      |      | Minutes, numeric (`00`..`59`)                                                                                                                                                       |
| `%j`      |      | Day of year (`001`..`366`)                                                                                                                                                          |
| `%k`      |      | Hour (`0`..`23`)                                                                                                                                                                    |
| `%l`      |      | Hour (`1`..`12`)                                                                                                                                                                    |
| `%M`      |      | Month name (`January`..`December`)                                                                                                                                                  |
| `%m`      | 月份   | Month, numeric (`00`..`12`)                                                                                                                                                         |
| `%p`      |      | `AM` or `PM`                                                                                                                                                                        |
| `%r`      |      | Time, 12-hour (*`hh:mm:ss`* followed by `AM` or `PM`)                                                                                                                               |
| `%S`      |      | Seconds (`00`..`59`)                                                                                                                                                                |
| `%s`      |      | Seconds (`00`..`59`)                                                                                                                                                                |
| `%T`      |      | Time, 24-hour (*`hh:mm:ss`*)                                                                                                                                                        |
| `%U`      |      | Week (`00`..`53`), where Sunday is the first day of the week; [`WEEK()`](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_week) mode 0                 |
| `%u`      |      | Week (`00`..`53`), where Monday is the first day of the week; [`WEEK()`](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_week) mode 1                 |
| `%V`      |      | Week (`01`..`53`), where Sunday is the first day of the week; [`WEEK()`](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_week) mode 2; used with `%X` |
| `%v`      |      | Week (`01`..`53`), where Monday is the first day of the week; [`WEEK()`](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_week) mode 3; used with `%x` |
| `%W`      |      | Weekday name (`Sunday`..`Saturday`)                                                                                                                                                 |
| `%w`      |      | Day of the week (`0`=Sunday..`6`=Saturday)                                                                                                                                          |
| `%X`      |      | Year for the week where Sunday is the first day of the week, numeric, four digits; used with `%V`                                                                                   |
| `%x`      |      | Year for the week, where Monday is the first day of the week, numeric, four digits; used with `%v`                                                                                  |
| `%Y`      | 年份   | Year, numeric, four digits                                                                                                                                                          |
| `%y`      |      | Year, numeric (two digits)                                                                                                                                                          |
| `%%`      |      | A literal `%` character                                                                                                                                                             |
| `%*`x`*`  |      | *`x`*, for any “*`x`*” not listed above                                                                                                                                             |

| SECOND  | 秒  |
|---------|----|
| MINUTE  | 分钟 |
| HOUR    | 小时 |
| DAY     | 天  |
| WEEK    | 星期 |
| MONTH   | 月  |
| QUARTER | 季度 |
| YEAR    | 年  |

### 日期过滤

```mysql
-- between and 日期范围搜索

select *
from dat_document
where commit_date between '2018-07-01' and '2018-07-04';
-- datediff 返回日期差值 date1 - date2
DATEDIFF
    (expr1,expr2)
select datediff(date1, date2);
SELECT DATEDIFF('2018-07-01', '2018-07-04');

-- timestampdiff函数日期或日期时间表达式之间的整数差 date2 -date1
TIMESTAMPDIFF
    (unit,datetime_expr1,datetime_expr2)
select timestampdiff(day, '2019-12-08', '2019-11-07')
from dual;
-- -31

-- 截取时间/日期部分
select time(date)
from dual;
select time(now())
from dual;
select date(now())
from dual;
```

日期转换

## 复合语句 Compound Statement

>

```mysql
-- 创建数据库
CREATE
{DATABASE | SCHEMA} [IF NOT EXISTS] db_name
    [create_specification] .
..

create_specification:
    [DEFAULT] CHARACTER SET
[=] charset_name
  | [DEFAULT] COLLATE [=] collation_name



```

SELECT

```mysql
- SELECT语句
- 检索单个列:
SELECT [column_x]
FROM [TABLE];
- 检索多个列:
SELECT [column_x1], [column_x2]
FROM [TABLE];
- 检索所有列:
SELECT *
FROM [TABLE];
- 检索不同的值:
SELECT DISTINCT [column_X]
FROM [TABLE];
- 限制结果:
- SQL Server 和Access:
SELECT TOP[n][column_x]
FROM [TABLE];
-- MySQL,PostgreSQL和SQLite 自第几行起, 限制几行
SELECT [column_x]
FROM [TABLE]
LIMIT n OFFSET m;
-- Oracle
SELECT [column_x]
FROM [TABLE]
where rownum <= n;


-- 用法示例
select prod_name, prod_price, prod_id
from Products
order by prod_price desc, prod_name;


```

```mysql
DELETE [LOW_PRIORITY] [QUICK] [IGNORE]
FROM tbl_name
    [PARTITION (partition_name [, partition_name]...)]
    [
WHERE where_condition]
    [
ORDER BY...]
    [
LIMIT row_count]
```

delete insert

### 流程控制语句 Flow Control Statement

[官方文档5.7](https://dev.mysql.com/doc/refman/5.7/en/if.html)

```mysql
-- CASE Statement
-- 根据值判断
CASE case_value
    WHEN when_value THEN statement_list
    [WHEN when_value THEN statement_list] .
..
    [ELSE statement_list]
END CASE

-- 根据表达式判断
CASE
    WHEN search_condition THEN statement_list
    [WHEN search_condition THEN statement_list] .
..
    [ELSE statement_list]
END CASE

-- IF Statement
IF search_condition THEN statement_list
    [ELSEIF search_condition THEN statement_list] .
..
    [ELSE statement_list]
END IF

```

# Python Client API接口

> 不能原生使用with 语句实现 连接和游标关闭

[官方链接](https://dev.mysql.com/doc/connector-python/en/connector-python-reference.html)

## Demo

```python
import mysql.connector as mysql
import MySQLdb  # mysqlclient 实现

db_config = dict(user='root', passwd='wawawa', db='test',
                 host='127.0.0.1', port=3306, charset='utf8')


def conn_with_mysql_official():
    print(db_config)
    try:
        conn = mysql.connect(**db_config)
        cur = conn.cursor()
        cur.execute("select * from test")
        res = cur.fetchall()
        print(res)

    except Exception as exc:
        print(f"错误提示, {exc}")

    finally:
        conn.close()


def conn_with_mysqlclient():
    print(db_config)
    try:
        conn = MySQLdb.connect(**db_config)
        with conn.cursor() as cur:
            cur.execute("select * from test")
            res = cur.fetchall()
            print(res)
    except Exception as exc:
        print(f"错误提示, {exc}")

    finally:
        conn.close()


if __name__ == '__main__':
    conn_with_mysqlclient()
    conn_with_mysql_official()

```

```python
# -*- coding: utf-8 -*-
# coding=utf-8

import pymysql.cursors

# 连接数据库
connect = pymysql.Connect(
    host='localhost',
    port=3310,
    user='user',
    passwd='123',
    db='test',
    charset='utf8'
)
# 事务处理
sql_1 = "UPDATE staff SET saving = saving + 1000 WHERE user_id = '1001' "
sql_2 = "UPDATE staff SET expend = expend + 1000 WHERE user_id = '1001' "
sql_3 = "UPDATE staff SET income = income + 2000 WHERE user_id = '1001' "

try:
    cursor.execute(sql_1)  # 储蓄增加1000
    cursor.execute(sql_2)  # 支出增加1000
    cursor.execute(sql_3)  # 收入增加2000
except Exception as e:
    connect.rollback()  # 事务回滚
    print('事务处理失败', e)
else:
    connect.commit()  # 事务提交
    print('事务处理成功', cursor.rowcount)
finally:
    # 关闭连接
    cursor.close()
    connect.close()

```

## [Connect](https://dev.mysql.com/doc/connector-python/en/connector-python-connectargs.html)

| Argument Name                             | Default                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                 |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `user` (`username`*)                      |                                                                                                                                                                                         | The user name used to authenticate with the MySQL server.                                                                                                                                                                                                                                   |
| `password` (`passwd`*)                    |                                                                                                                                                                                         | The password to authenticate the user with the MySQL server.                                                                                                                                                                                                                                |
| `database` (`db`*)                        |                                                                                                                                                                                         | The database name to use when connecting with the MySQL server.                                                                                                                                                                                                                             |
| `host`                                    | 127.0.0.1                                                                                                                                                                               | The host name or IP address of the MySQL server.                                                                                                                                                                                                                                            |
| `port`                                    | 3306                                                                                                                                                                                    | The TCP/IP port of the MySQL server. Must be an integer.                                                                                                                                                                                                                                    |
| `unix_socket`                             |                                                                                                                                                                                         | The location of the Unix socket file.                                                                                                                                                                                                                                                       |
| `auth_plugin`                             |                                                                                                                                                                                         | Authentication plugin to use. Added in 1.2.1.                                                                                                                                                                                                                                               |
| `use_unicode`                             | `True`                                                                                                                                                                                  | Whether to use Unicode.                                                                                                                                                                                                                                                                     |
| `charset`                                 | `utf8`                                                                                                                                                                                  | Which MySQL character set to use.                                                                                                                                                                                                                                                           |
| `collation`                               | `utf8mb4_general_ai_ci` (is `utf8_general_ci` in 2.x                                                                                                                                    | Which MySQL collation to use. The 8.x default values are generated from the latest MySQL Server 8.0 defaults.                                                                                                                                                                               |
| `autocommit`                              | `False`                                                                                                                                                                                 | Whether to [autocommit](https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_autocommit) transactions.                                                                                                                                                                                |
| `time_zone`                               |                                                                                                                                                                                         | Set the `time_zone` session variable at connection time.                                                                                                                                                                                                                                    |
| `sql_mode`                                |                                                                                                                                                                                         | Set the `sql_mode` session variable at connection time.                                                                                                                                                                                                                                     |
| `get_warnings`                            | `False`                                                                                                                                                                                 | Whether to fetch warnings.                                                                                                                                                                                                                                                                  |
| `raise_on_warnings`                       | `False`                                                                                                                                                                                 | Whether to raise an exception on warnings.                                                                                                                                                                                                                                                  |
| `connection_timeout` (`connect_timeout`*) |                                                                                                                                                                                         | Timeout for the TCP and Unix socket connections.                                                                                                                                                                                                                                            |
| `client_flags`                            |                                                                                                                                                                                         | MySQL client flags.                                                                                                                                                                                                                                                                         |
| `buffered`                                | `False`                                                                                                                                                                                 | Whether cursor objects fetch the results immediately after executing queries.                                                                                                                                                                                                               |
| `raw`                                     | `False`                                                                                                                                                                                 | Whether MySQL results are returned as is, rather than converted to Python types.                                                                                                                                                                                                            |
| `consume_results`                         | False                                                                                                                                                                                   | Whether to automatically read result sets.                                                                                                                                                                                                                                                  |
| `ssl_ca`                                  |                                                                                                                                                                                         | File containing the SSL certificate authority.                                                                                                                                                                                                                                              |
| `ssl_cert`                                |                                                                                                                                                                                         | File containing the SSL certificate file.                                                                                                                                                                                                                                                   |
| `ssl_disabled`                            | `False`                                                                                                                                                                                 | `True` disables SSL/TLS usage. Option added in Connector/Python 2.1.7.                                                                                                                                                                                                                      |
| `ssl_key`                                 |                                                                                                                                                                                         | File containing the SSL key.                                                                                                                                                                                                                                                                |
| `ssl_verify_cert`                         | `False`                                                                                                                                                                                 | When set to `True`, checks the server certificate against the certificate file specified by the `ssl_ca` option. Any mismatch causes a `ValueError` exception.                                                                                                                              |
| `ssl_verify_identity`                     | `False`                                                                                                                                                                                 | When set to `True`, additionally perform host name identity verification by checking the host name that the client uses for connecting to the server against the identity in the certificate that the server sends to the client. Option added in Connector/Python 8.0.14.                  |
| `force_ipv6`                              | `False`                                                                                                                                                                                 | When set to `True`, uses IPv6 when an address resolves to both IPv4 and IPv6. By default, IPv4 is used in such cases.                                                                                                                                                                       |
| `dsn`                                     |                                                                                                                                                                                         | Not supported (raises `NotSupportedError` when used).                                                                                                                                                                                                                                       |
| `pool_name`                               |                                                                                                                                                                                         | Connection pool name. The pool name is restricted to alphanumeric characters and the special characters `.`, `_`, `*`, `$`, and `#`. The pool name must be no more than `pooling.CNX_POOL_MAXNAMESIZE` characters long (default 64).                                                        |
| `pool_size`                               | 5                                                                                                                                                                                       | Connection pool size. The pool size must be greater than 0 and less than or equal to `pooling.CNX_POOL_MAXSIZE` (default 32).                                                                                                                                                               |
| `pool_reset_session`                      | `True`                                                                                                                                                                                  | Whether to reset session variables when connection is returned to pool.                                                                                                                                                                                                                     |
| `compress`                                | `False`                                                                                                                                                                                 | Whether to use compressed client/server protocol.                                                                                                                                                                                                                                           |
| `converter_class`                         |                                                                                                                                                                                         | Converter class to use.                                                                                                                                                                                                                                                                     |
| `failover`                                |                                                                                                                                                                                         | Server failover sequence.                                                                                                                                                                                                                                                                   |
| `option_files`                            |                                                                                                                                                                                         | Which option files to read. Added in 2.0.0.                                                                                                                                                                                                                                                 |
| `option_groups`                           | `['client', 'connector_python']`                                                                                                                                                        | Which groups to read from option files. Added in 2.0.0.                                                                                                                                                                                                                                     |
| `allow_local_infile`                      | `True`                                                                                                                                                                                  | Whether to enable [`LOAD DATA LOCAL INFILE`](https://dev.mysql.com/doc/refman/8.0/en/load-data.html). Added in 2.0.0.                                                                                                                                                                       |
| `use_pure`                                | `False` as of 8.0.11, and `True` in earlier versions. If only one implementation (C or Python) is available, then then the default value is set to enable the available implementation. | Whether to use pure Python or C Extension. If `use_pure=False` and the C Extension is not available, then Connector/Python will automatically fall back to the pure Python implementation. Can be set with *mysql.connector.connect()* but not *MySQLConnection.connect()*. Added in 2.1.1. |

## Cursor

[方法- 属性列表](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor.html)

```python
import mysql.connector

cnx = mysql.connector.connect(*args)

cursor = cnx.cursor()
```

## Cursor.[MySQLCursor](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor-constructor.html)(conn)

```python
import mysql.connector
from mysql.connector.cursor import MySQLCursor

cnx = mysql.connector.connect(database='world')
cursor = MySQLCursor(cnx)
```

## Cursor.[callproc](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor-callproc.html)()

```python
result_args = cursor.callproc(proc_name, args=())
```

## Cursor.[close](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor-close.html)()

关闭游标对象

Use `close()` when you are done using a cursor. This method closes the cursor, resets all results, and ensures that the
cursor object has no reference to its original connection object.





# 优化-[optimization](https://dev.mysql.com/doc/refman/8.0/en/optimization.html)

## 优化概述

数据库性能取决于数据库级别的多个因素，例如表，查询和配置设置。

### 数据库级别优化

- 合适的表结构
    - 数据类型

- 适当的索引(帮助提高查询效率)
- 选择恰当的储存引擎
- 每个表是否使用适当的行格式
- 锁策略
- 使用缓存

### 硬件级别优化

## 优化SQL语句

### 优化SELECT语句

select语句执行了所有的查询操作.

#### 基本思路

- 让where子句效率更高. 第一件事是是否可以添加索引. 给用于where子句的列创建索引, 去加速计算(evaluation), 过滤和最终的检索结果.
    为了避免浪费磁盘空间, 构建少量的索引去加速更多相关的查询.
- 隔离和调优查询的任何部分, 比如函数调用会占用较多时间. 根据查询的结构,函数调用可能在结果集的每一行都调用一次,
    甚至表中的每一行进行函数调用，这会大大降低查询效率。
- 最大限度的减少全表扫描(无索引查询), 尤其是对于大表
- 通过`analyze table`语句定期更新表统计, 这有助于优化器根据信息构建高效的执行计划.
- 了解特定于每个表的存储引擎的调优技术，索引技术和配置参数. 根据不同的储存引擎优化查询
- 调整MySQL用于缓存的内存区域的大小和属性
- 即使对于使用高速缓存存储区域快速运行的查询，您仍可以进一步优化，以便它们需要更少的高速缓存，从而使您的应用程序更具可伸缩性。
    可伸缩性意味着您的应用程序可以处理更多的并发用户，更大的请求等，而不会出现性能大幅下降的情况。
- 处理锁问题, 其中查询的速度可能会同时访问表的其他会发的影响.

#### 优化where子句

- 避免多余条件, 简化表达式避免多余的计算

#### 避免全表扫描

> avoiding full table sca

以下情况会使用到全表扫描:

- 全表扫描的速度比索引查询更快的情绪, 通常是表行数少于10行和较小表
- on或where子句中, 被索引的列没有可用的限制.
- 被索引的列与常量进行比较

较大的表避免全表扫描:

## **优化和索引**

> optimization and indexes

改善查询操作性能的最佳方式是为一个或多个列创建索引. 索引就像是行指针一样, 允许查询快速确定那些行与where子句中的条件匹配,
并检索这些行的其他列值. 所有的MySQL数据类型都可以建立索引.

尽管我们可以为每个可能的列创建索引以用于查询, 非必要的索引会浪费空间和时间. 索引会增加`insert`, `update`,` delete`操作的成本,
因为每个索引都会更新. 你必须找到正确的平衡, 才能使用最佳索引集实现快速查询.

### 如何使用索引

> How MySQL Uses Indexes
>
> 索引的应用场景

索引用于快速查找指定列的行, 没有索引时, MySQL必须从第一行开始然后扫描全表以找到相关的行. 表越大, 开销就会越高.
如果表对相关问题创建索引, MySQL可以快速确定在数据文件中间寻求的位置, 而无需全表扫描.这比按照顺序读取每一行要快的多.

大多数的MySQL索引(primary key, unique, index, fulltext)都存在`B-trees`中. 除此之外,空间数据类型的索引使用`R-trees`,
内存表也支持哈希索引(hash indexes), InnoDB对fulltext使用反向列表(inverted lists).

- 快速查找与where子句匹配的行
- 从考虑中剔除行. 如果在多个索引之间进行选择, MySQL通常使用查找最小行数的索引(最具选择性的索引)
- 如果表含有多列索引, 将从最左边的前缀查起
- 当执行连接时, 从其他表检索行.
- 对具有所有的列找出最大或最小的值
- 某些情况下可以

####  

### Primary Key Optimization

### spatial index optimization

### Foreign Key optimization

### Column Indexes

### Multiple-Column Indexes

### Comparison of B-Tree and Hash Indexes

比较B-trees和hash indexes

## 优化数据库结构

### 优化数据大小

### 优化数据类型

### 多表优化

### 内部暂时表

### 限制表和库的数量

### 限制表大小

限制表列数和行大小

## **优化InnoDB表**

### 优化储存布局

- 当表变大时, 使用`optimize table`语句重新组织和压缩多余的空间
- 尽量使用自增列作为主键, 因为每个二级索引都会携带主键
- 使用varchar而不是char. 使用VARCHAR数据类型而不是CHAR来存储可变长度的字符串或具有许多NULL值的列。CHAR(N)
    列总是使用N个字符来存储数据，即使字符串较短或其值为NULL。较小的表格更适合缓冲池，并减少磁盘I/O。
- 考虑使用compressed行格式

### 优化事务管理

### 优化只读事务

- 每张表都指定主键列
- 主键不要太长或包含太多列

### 优化重做日志

### 批量加载数据InnoDB

### 优化InnoDB查询

### 优化InnoDB DDL操作

### 优化InnoDB磁盘I/O

### 优化InnoDB配置变量

### 针对多表系统优化InnoDB

## 理解查询执行计划

## 控制查询优化器

## **缓冲和缓存**

## **优化锁操作**

## 优化服务器

## **性能测试**

## 检查Server线程

# 15, **InnoDB存储引擎**

> 15, InnoDB Storage Engine

## 零散记录

### InnoDB引擎四大特性

- 插入缓冲（insert buffer)
- 二次写(double write)
- 自适应哈希索引(ahi)
- 预读(read ahead)

## 简介-Introduction



> [官方文档](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html)
>
> `InnoDB` is a general-purpose storage engine that balances high reliability and high performance. In MySQL 8.0, `InnoDB` is the default MySQL storage engine. Unless you have configured a different default storage engine, issuing a [`CREATE TABLE`](https://dev.mysql.com/doc/refman/8.0/en/create-table.html) statement without an `ENGINE` clause creates an `InnoDB` table.

InnoDB是一个在高性能和高可靠间比较平衡的一般用途存储引擎. MySQL8中,  InnoDB是默认存储引擎.

创建表格时如果没有 ENGINE子句的话默认是InnoDB类型的表.

### 主要优势

- DML操作满足ACID模型, 具有事务提交, 回滚, 崩溃恢复能力以保护数据完整.
- 行级别锁和读取一致性增加多用户并发性和性能.
- InnoDB表排列磁盘中的资料以基于主键优化查询, 每个InnoDB表都有一个叫作聚集索引(clusterd indexes)
    的主键索引来组织数据以最小化主键查询的I/O操作.
- 支持外键约束以维护数据完整性.使用外键约束时, 插入、更新、删除操作会受到检查以保证相关联的表不会结果不一致.



### 核心优势

- DML操作遵守AICD模型, 具有事务特征的, 提交, 回滚, 崩溃-恢复能力以保护用户数据. 
- 行级别锁和Oracle-style一致性读, 增加了多用户并发性和性能.
- InnoDB 表排列磁盘数据来优化基于主键查询的查询, 每个InnoDB表都有一个叫作 聚簇索引(clusterd index) 的主键索引, 聚簇索引组织数据以最小化主键查找I/O.
- 支持外键约束, 这可以维护数据完整性. 外键将会检查插入, 更新和删除操作以确保他们在相关表之间不会存在不一致的结果.



### 特性

| 特性             | Feature                                                      | Support                                                      |
| ---------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| B-Tree 索引      | B-tree indexes                                               | Yes                                                          |
| 备份恢复         | Backup/point-in-time recovery <br />(Implemented in the server, rather than in the storage engine.) | Yes                                                          |
|                  | ~~Cluster database support~~                                 | No                                                           |
| 聚簇索引         | Clustered indexes                                            | Yes                                                          |
| 压缩数据         | Compressed data                                              | Yes                                                          |
| 数据缓存         | Data caches                                                  | Yes                                                          |
| 加密数据         | Encrypted data                                               | Yes (Implemented in the server via encryption functions; In MySQL 5.7 and later, data-at-rest encryption is supported.) |
| 外键             | Foreign key support                                          | Yes                                                          |
| 全文检索索引     | Full-text search indexes                                     | Yes (Support for FULLTEXT indexes is available in MySQL 5.6 and later.) |
|                  | Geospatial data type support                                 | Yes                                                          |
|                  | Geospatial indexing support                                  | Yes (Support for geospatial indexing is available in MySQL 5.7 and later.) |
|                  | ~~Hash indexes~~                                             | No (InnoDB utilizes hash indexes internally for its Adaptive Hash Index feature.) |
| 索引缓存         | Index caches                                                 | Yes                                                          |
| 锁粒度           | Locking granularity                                          | Row                                                          |
|                  | MVCC                                                         | Yes                                                          |
| 主从复制         | Replication support <br />(Implemented in the server, rather than in the storage engine.) | Yes                                                          |
|                  | Storage limits                                               | 64TB                                                         |
| T-Tree索引       | T-tree indexes                                               | No                                                           |
| 事务             | Transactions                                                 | Yes                                                          |
| 更新数据字典统计 | Update statistics for data dictionary                        | Yes                                                          |

### 使用InnoDB的好处



## ACID模型

好处是, 确保数据的一致性, 自带崩溃恢复机制

## InnoDB Multi-Versioning



## InnoDB架构

![InnoDB architecture](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426192904.png)

写缓冲(change buffer): 节省随机读写磁盘的I/O消耗.

系统表空间(system tablespace)

独立表空间(file-per-table)

通用表空间(general tablespace)

暂存表空间(temporary tablespace)

### buffer pool in-memory

缓冲池(buffer pool): InnoDB引擎被访问时的主要内存, 用于缓存table和index数据.缓冲池运行频繁使用的数据直接从内存快速访问,
加快了处理速度. 专用的服务器中80%的物理内存被用作缓冲池.

为了提高读取大容量数据的效率, 缓冲池被分割为可容纳多行的页. 缓存用链表实现的内存页以提高缓存管理效率. 通过变化的LRU(
least recently used)算法将很少使用的数据从缓存中老化.

充分利用缓冲池的优势以频繁的访问内存中的数据是MySQL调优中非常重要方面.

缓存池配置

### 索引-indexes

### 聚集索引和次级索引-clusterd and secondary indexes

> 主键值的逻辑顺序决定了行的物理顺序, 所以损失了插入顺序, 但是可以按照插入时间排序.

每个InnoDB表都有一个叫作聚集索引(clusterd index)的特殊的索引来存储行数据. 特别指出, 聚集索引与主键的意义是相同的(
synonymous). 为了获得最好的查询,插入和其他数据库操作性能, InnoDB使用了聚集索引去优化(optimize)一般的查找和DML操作.

- 当表定义了一个主键时, InnoDB使用它作为聚集索引. 主键在每个表中都应该被定义和使用. 如果不存在逻辑唯一且非空列或非空列集合用作主键,
    InnoDB增加一个自增(auto-increment)的列. 自增列的值是唯一的, 且在新的行添加时自动插入值.
- 如果没有定义主键, InnoDB使用第一个唯一索引UNIQUE(且所有键列定义为非空NOT NULL)为聚集索引.
- 如果表没有主键或者合适的唯一索引, InnoDB生成一个叫作`GEN_CLUST_INDEX`的隐藏聚集索引到一个包含了行ID值的合成列(
    synthetic column)上. 这些行被通过InnoDB制定的行ID排序. 行ID(row ID)是一个在新行被插入时单调递增的6-byte字段. 因此,
    这些被物理上通过row ID排序的是按照插入顺序排列的.

### 聚集索引是如何加速查询的?

通过聚集索引访问一行数据是快速的, 因为索引搜索直接指向包含该行数据的数据页. 如果表很大, 聚集索引架构通常节省了I/O操作,
与使用 索引记录的不同页存储行数据 存储组织相比.

*涉及到表页很多时, 不需要逐一的查找数据页, 因为聚集索引包含了该行数据的数据页数据*

聚集索引是通过BTree实现的, 一张表只有一个聚集索引, 查找范围值

### 次级索引如何关联到聚集索引

与聚集索引不同的索引称为次级索引. 在InnoDB中, 每个次级索引中都记录了行数据的主键, 以及次级索引指定的列.
InnoDB通过主键值查找聚集索引中的行.

如果主键很长, 次级索引使用更多空间, 因此使用短主键具有很大的优势.

## InnoDB内存结构

## InnoDB磁盘结构

### 表-Table



#### 创建

```mysql
# 创建InnoDB表
# 其中`engine=InnoDB`不是必要的
create table t1 (a int, b char (20), primary key (a)) engine=InnoDB;
CREATE TABLE t1 (a INT, b CHAR (20), PRIMARY KEY (a)) ENGINE=InnoDB;


# 查看默认存储引擎
SELECT @@default_storage_engine;
```

主键

推荐为每个表创建一个主键, 选择主键列时, 选择以下特征的列:

- Columns that are referenced by the most important queries.
    被大多数重要查询引用
- Columns that are never left blank.
    不包含空行
- Columns that never have duplicate values.
    不含有重复值
- Columns that rarely if ever change value once inserted.
    一旦创建便很少修改

通常的做法是创建一个名为id的自增列作为主键

```mysql
# The value of ID can act like a pointer between related items in different tables.
CREATE TABLE t5 (id INT AUTO_INCREMENT, b CHAR (20), PRIMARY KEY (id));

# The primary key can consist of more than one column. Any autoinc column must come first.
CREATE TABLE t6 (id INT AUTO_INCREMENT, a INT, b CHAR (20), PRIMARY KEY (id,a));
```

##### 查看InnoDB表属性;

```mysql
SHOW TABLE STATUS FROM test LIKE 't%' \G;
SHOW TABLE STATUS FROM test\G
```







#### 导入



#### 移动或复制

#### 转换

#### 自增处理

### 索引-Indexes

### 表空间-Tablespaces

### 双写缓冲-Doublewrite buffer

### 重做日志-Redo Log

### 撤销日志-Undo Logs



## 15.7 **锁和事务模型**

> To implement a large-scale, busy, or highly reliable database application, to port substantial code from a different database system, or to tune MySQL performance, it is important to understand `InnoDB` locking and the `InnoDB` transaction model.
>
> This section discusses several topics related to `InnoDB` locking and the `InnoDB` transaction model with which you should be familiar.
>
> - [Section 15.7.1, “InnoDB Locking”](https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html) describes lock types used by `InnoDB`.
> - [Section 15.7.2, “InnoDB Transaction Model”](https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-model.html) describes transaction isolation levels and the locking strategies used by each. It also discusses the use of [`autocommit`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_autocommit), consistent non-locking reads, and locking reads.
> - [Section 15.7.3, “Locks Set by Different SQL Statements in InnoDB”](https://dev.mysql.com/doc/refman/8.0/en/innodb-locks-set.html) discusses specific types of locks set in `InnoDB` for various statements.
> - [Section 15.7.4, “Phantom Rows”](https://dev.mysql.com/doc/refman/8.0/en/innodb-next-key-locking.html) describes how `InnoDB` uses next-key locking to avoid phantom rows.
> - [Section 15.7.5, “Deadlocks in InnoDB”](https://dev.mysql.com/doc/refman/8.0/en/innodb-deadlocks.html) provides a deadlock example, discusses deadlock detection, and provides tips for minimizing and handling deadlocks in `InnoDB`.

为了实现大规模, 繁忙, 或高可靠数据库应用, 从不同的数据库系统移植大量代码，或者调优MySQL的性能, 理解InnoDB锁和事务模型是非常重要的.



### InnoDB Locking



#### 共享锁和互斥锁-Shared and Exclusive Locks



> 互斥锁也称独占锁和排他锁

`InnoDB`实现标准的行级锁定，其中有两种类型的锁， 共享锁S和独占锁X。

- 共享锁`S`允许持有锁的事务读取某行 。
- 独占锁`X`允许持有锁的事务更新或删除某行 。

如果事务`T1`在行`r`上持有一个共享锁, 那么来自某不同事务`T2`, 在行`r`上使用锁的请求将会这样处理:

- 使用共享锁的`T2`的请求可以被立即授权. 结果上, T1和T2都持有一个r上的共享锁.
- 使用独占锁的`T2`的强求不能被立即授权(需要等待锁释放).

如果事务`T1`在行`r`上持有一个独占锁`X`, 来自某不同事务`T2`, 在`r`上使用任意锁的请求都不能被立即授权. 相反, T2不得不等待T1释放它在r上的锁.

```mysql
# 读取行并建立共享锁
SELECT * FROM your_table WHERE id = 1 FOR SHARE

# 创建独占锁
SELECT * FROM your_table WHERE id = 1 FOR UPDATE

```



#### 意向锁-Intention Locks

> 控制锁的粒度
> 意向锁应用于table上,用于表明事务锁意图获取表中的多行 

InnoDB支持 **多种粒度锁**(multiple granularity), 这允许同时使用行级锁和表级锁. 例如, `LOCK TABLES ... WRITE`语句在指定的表上使用了一个独占锁. 要使多种粒度级别的锁更加符合实际, InnoDB使用了意向锁. 意向锁是表级别锁, 表明事务以后需要在行上使用共享锁还是独占锁. 有两种意向锁:

- **共享意向锁**`IS`表明事务意图设置一个共享锁到表中不同的行上.
- **独占意向锁**`IX`表明事务意图设置一个独占锁到表中不同的行上.

例如, `SELECT ... FOR SHARE`设置了一个 共享意向锁, `SELECT ... FOR UPDATE` 设置了一个 独占意向锁. 

意向锁的协议如下:

- 事务在获取一个共享锁之前, 必须首先在表上获取一个共享意向锁或更高权限的锁.
- 事务在获取一个独占锁之前, 必须首先在表上获取一个独占意向锁. 

下面的矩阵概括了表级别锁类型兼容性:

|      | `X`      | `IX`       | `S`        | `IS`       |
| :--- | :------- | :--------- | :--------- | :--------- |
| `X`  | Conflict | Conflict   | Conflict   | Conflict   |
| `IX` | Conflict | Compatible | Conflict   | Compatible |
| `S`  | Conflict | Conflict   | Compatible | Compatible |
| `IS` | Conflict | Compatible | Compatible | Compatible |

 如果某锁与存在的锁兼容的话, 事务才能被授予该锁, 如果相冲突则不会授予. 事务等待直到存在冲突的锁释放. 如果锁请求与存在的锁冲突, 将不会授权因为这将会导致死锁, 会发生错误. 

意向锁不会阻塞任何操作除了整表锁请求(例如:  `LOCK TABLES ... WRITE`). 意向锁的主要目的是显示某人正在锁定某行, 或将要锁定表中的某行.

意向锁的事务数据的呈现, 和 `SHOW ENGINE INNODB STATUS` 和 InnoDB监视器的输出相似, 如下:

```
TABLE LOCK table `test`.`t` trx id 10080 lock mode IX
```



#### 记录锁-Record Locks

记录锁是一种在索引记录上的锁. 例如  `SELECT c1 FROM t WHERE c1 = 10 FOR UPDATE;` 将会阻止任何其他事务插入,更新或删除 `where the value of t.c1 is 10 `所影响的行.

记录数总是锁定索引记录, 甚至对没有定义索引的表也是如此. 这样的案例中, InnoDB创建一个隐藏的聚簇索引并使用这个索引锁定记录. 参考 [Section 15.6.2.1, “Clustered and Secondary Indexes”](https://dev.mysql.com/doc/refman/8.0/en/innodb-index-types.html).

在`SHOW ENGINE INNODB STATUS`和InnoDB monitor的输出中，记录锁的事务数据如下所示:

```
RECORD LOCKS space id 58 page no 3 n bits 72 index `PRIMARY` of table `test`.`t`
trx id 10078 lock_mode X locks rec but not gap
Record lock, heap no 2 PHYSICAL RECORD: n_fields 3; compact format; info bits 0
 0: len 4; hex 8000000a; asc     ;;
 1: len 6; hex 00000000274f; asc     'O;;
 2: len 7; hex b60000019d0110; asc        ;;
```



#### 间隙锁-Gap Locks



#### 下一键锁-Next-Key Locks

#### Insert Intention Locks

#### Auto-INC Locks

> 自增锁

#### Predicate Locks for Spatial Indexes

用于空间索引的谓词锁



### 事务模型-InnoDB Transaction Model

InnoDB事务模型旨在将多版本数据库的最佳特性与传统的两阶段锁相结合. InnoDB在行级别执行锁定, 默认以非锁定一致性读的方式运行查询, 这和Oracle风格类似. InnoDB中锁信息存储是节省空间的以至于不需要锁升级. 典型地, 少数用户坚持锁定InnoDB表中的每一行, 或任何随机行的自己, 不会导致InnoDB内存耗尽

#### 事务隔离级别Transaction Isolation Levels

事务隔离性是数据库处理的基础. 隔离性是ACID中的I; 设置隔离级别的目的是良好调优并在性能和可靠性间取得平衡, 一致性和多事务作出修改和同时执行查询时的结果再现性.

InnoDB提供了所有的四种隔离级别(该标准由SQL建立于1992): 

**未提交读** `read uncommitted`, 

**已提交读** ` read committed`, 

**可重复读** `repeatable read`, 

**可串行化** `serializable`. 

InnoDB的默认隔离级别是 可重复读.

用户可以为单一会话修改事务级别, 或者所有使用了`SET TRANSACTION`语句的子链接. 在命令行或option文件中使用`--transaction-isolation`选项可设置作用于所有链接的服务器的默认隔离级别. 更多关于隔离级别和级别设置语法的详情参见 [Section 13.3.7, “SET TRANSACTION Statement”](https://dev.mysql.com/doc/refman/8.0/en/set-transaction.html).

InnoDB支持根据隔离级别使用不同的锁定策略. 你可以使用默认的 **可重复读** 级别强制高度一致性, 用于操作至关重要的数据, 尤其对AICD准则非常重要的数据. 或者你可以放开一致性规则使用 **已提交读** 或 **未提交读** , 以下情形中,  例如在精确一致性和重复结果不比最小化锁开销数量重要的批量报告. **可串行化** 强制使用比 **可重复读** 更为严格的规则, 主要在特定情形使用, 例如 [XA](https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_xa) 事务(一种分布式事务)和解决并发问题和死锁等故障.

下面的列表详细描述了MySQL是如何支持不同事务界别的. 按最常用级别到最不常用排列:

##### 可重复读

InnoDB默认隔离界别.  在同一事务中 [一致性读(consistent reads)](https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_consistent_read)  读取首次读建立的快照.  这意味着，如果在同一个事务中执行几个普通(非锁定)`SELECT`语句，这些`SELECT`语句之间也是一致的。See [Section 15.7.2.3, “Consistent Nonlocking Reads”](https://dev.mysql.com/doc/refman/8.0/en/innodb-consistent-read.html).

对锁定读(`SELECT ... FOR UPDATE`, `SELECT ... FOR SHARE`), `UPDATE`和`DELETE`语句而言, 锁定方式取决于语句是否使用了唯一查找条件的唯一索引, 按范围类型查找条件的语句.

对于按唯一查找条件的唯一索引, InnoDB仅仅锁定找到的索引记录, 而不是它之前的间隙·gap.

对于其他查找条件, InnoDB锁定扫描到的索引范围, 使用 间隙锁 或 下一键锁 来阻止其他会话插入到该覆盖范围的间隙中. 关于间隙锁和下一键锁的更多信息, see [Section 15.7.1, “InnoDB Locking”](https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html).

##### 已提交读

每个一致性读, 甚至相同事务中, 设置和读它自己刷新的快照.  关于一致性读的更多信息, see [Section 15.7.2.3, “Consistent Nonlocking Reads”](https://dev.mysql.com/doc/refman/8.0/en/innodb-consistent-read.html).

For locking reads ([`SELECT`](https://dev.mysql.com/doc/refman/8.0/en/select.html) with `FOR UPDATE` or `FOR SHARE`), [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) statements, and [`DELETE`](https://dev.mysql.com/doc/refman/8.0/en/delete.html)statements, `InnoDB` locks only index records, not the gaps before them, and thus permits the free insertion of new records next to locked records. Gap locking is only used for foreign-key constraint checking and duplicate-key checking.

Because gap locking is disabled, phantom row problems may occur, as other sessions can insert new rows into the gaps. For information about phantom rows, see [Section 15.7.4, “Phantom Rows”](https://dev.mysql.com/doc/refman/8.0/en/innodb-next-key-locking.html).

Only row-based binary logging is supported with the `READ COMMITTED` isolation level. If you use `READ COMMITTED` with [`binlog_format=MIXED`](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_format), the server automatically uses row-based logging.

Using `READ COMMITTED` has additional effects:

- For [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) or [`DELETE`](https://dev.mysql.com/doc/refman/8.0/en/delete.html) statements, `InnoDB` holds locks only for rows that it updates or deletes. Record locks for nonmatching rows are released after MySQL has evaluated the `WHERE` condition. This greatly reduces the probability of deadlocks, but they can still happen.
- For [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) statements, if a row is already locked, `InnoDB` performs a “semi-consistent” read, returning the latest committed version to MySQL so that MySQL can determine whether the row matches the `WHERE` condition of the [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html). If the row matches (must be updated), MySQL reads the row again and this time `InnoDB` either locks it or waits for a lock on it.

Consider the following example, beginning with this table:

```sql
CREATE TABLE t (a INT NOT NULL, b INT) ENGINE = InnoDB;
INSERT INTO t VALUES (1,2),(2,3),(3,2),(4,3),(5,2);
COMMIT;
```

In this case, the table has no indexes, so searches and index scans use the hidden clustered index for record locking (see [Section 15.6.2.1, “Clustered and Secondary Indexes”](https://dev.mysql.com/doc/refman/8.0/en/innodb-index-types.html)) rather than indexed columns.

Suppose that one session performs an [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) using these statements:

```sql
# Session A
START TRANSACTION;
UPDATE t SET b = 5 WHERE b = 3;
```

Suppose also that a second session performs an [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) by executing these statements following those of the first session:

```sql
# Session B
UPDATE t SET b = 4 WHERE b = 2;
```

As [`InnoDB`](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html) executes each [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html), it first acquires an exclusive lock for each row, and then determines whether to modify it. If [`InnoDB`](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html) does not modify the row, it releases the lock. Otherwise, [`InnoDB`](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html) retains the lock until the end of the transaction. This affects transaction processing as follows.

When using the default `REPEATABLE READ` isolation level, the first [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) acquires an x-lock on each row that it reads and does not release any of them:

```none
x-lock(1,2); retain x-lock
x-lock(2,3); update(2,3) to (2,5); retain x-lock
x-lock(3,2); retain x-lock
x-lock(4,3); update(4,3) to (4,5); retain x-lock
x-lock(5,2); retain x-lock
```

The second [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) blocks as soon as it tries to acquire any locks (because first update has retained locks on all rows), and does not proceed until the first [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) commits or rolls back:

```none
x-lock(1,2); block and wait for first UPDATE to commit or roll back
```

If `READ COMMITTED` is used instead, the first [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) acquires an x-lock on each row that it reads and releases those for rows that it does not modify:

```none
x-lock(1,2); unlock(1,2)
x-lock(2,3); update(2,3) to (2,5); retain x-lock
x-lock(3,2); unlock(3,2)
x-lock(4,3); update(4,3) to (4,5); retain x-lock
x-lock(5,2); unlock(5,2)
```

For the second `UPDATE`, `InnoDB` does a “semi-consistent” read, returning the latest committed version of each row that it reads to MySQL so that MySQL can determine whether the row matches the `WHERE`condition of the [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html):

```none
x-lock(1,2); update(1,2) to (1,4); retain x-lock
x-lock(2,3); unlock(2,3)
x-lock(3,2); update(3,2) to (3,4); retain x-lock
x-lock(4,3); unlock(4,3)
x-lock(5,2); update(5,2) to (5,4); retain x-lock
```

However, if the `WHERE` condition includes an indexed column, and `InnoDB` uses the index, only the indexed column is considered when taking and retaining record locks. In the following example, the first[`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) takes and retains an x-lock on each row where b = 2. The second [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html) blocks when it tries to acquire x-locks on the same records, as it also uses the index defined on column b.

```sql
CREATE TABLE t (a INT NOT NULL, b INT, c INT, INDEX (b)) ENGINE = InnoDB;
INSERT INTO t VALUES (1,2,3),(2,2,4);
COMMIT;

# Session A
START TRANSACTION;
UPDATE t SET b = 3 WHERE b = 2 AND c = 3;

# Session B
UPDATE t SET b = 4 WHERE b = 2 AND c = 4;
```

The `READ COMMITTED` isolation level can be set at startup or changed at runtime. At runtime, it can be set globally for all sessions, or individually per session.





##### 未提交读

`SELECT`语句以非锁定的方式执行, 但是读取结果可能是某行的更早版本数据. 因此, 使用该隔离级别, 读取是非一致的. 这种情形也被称为 **[脏读](https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_dirty_read)**. 否则, 该隔离级别将像 已提交读 一样. 

##### 可串行化

> 可串行化指的是事务通过串行化执行保证数据读取的正确性

该级别很像 可重复读, 但是如果 `autocommit`处于禁用状态时, InnoDB 隐式地转换了所有的`SELECT`语句成 `SELECT ... FOR SHARE`  . 如果`autocommit`可用, `SELECT` 语句使用原有的事务. 因此知道它是只读的, 当一致性(非锁定)读时可以进行序列化, 不需要阻塞其他事务. (如果其他事务修改了选择的行, 强制执行一个普通`SELECT`去阻塞他们, 禁用自动提交.)



#### autocommit, Commit and Rollback

#### Consistent Nonlocking Reads

#### Locking Reads

### Locks Set by Different SQL Statements in InnoDB

### 幻影行-Phantom Rows

### 死锁-Deadlocks in InnoDB

### 事务调度-Transaction Scheduling





## InnoDB配置

## InnoDB表和页压缩

## InnoDB行格式

| Row Format   | Compact Storage Characteristics | Enhanced Variable-Length Column Storage | Large Index Key Prefix Support | Compression Support | Supported Tablespace Types      |
| :----------- | :------------------------------ | :-------------------------------------- | :----------------------------- | :------------------ | :------------------------------ |
| `REDUNDANT`  | No                              | No                                      | No                             | No                  | system, file-per-table, general |
| `COMPACT`    | Yes                             | No                                      | No                             | No                  | system, file-per-table, general |
| `DYNAMIC`    | Yes                             | Yes                                     | Yes                            | No                  | system, file-per-table, general |
| `COMPRESSED` | Yes                             | Yes                                     | Yes                            | Yes                 | file-per-table, general         |

The topics that follow describe row format storage characteristics and how to define and determine the row format of a
table.

## InnoDB磁盘I/O和文件空间管理

## 15.12 InnoDB 和在线DDL

## 15.13 [InnoDB Data-at-Rest Encryption](https://dev.mysql.com/doc/refman/8.0/en/innodb-data-encryption.html)

## 15.14 [InnoDB Startup Options and System Variables](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html)

## 15.15 [InnoDB INFORMATION_SCHEMA Tables](https://dev.mysql.com/doc/refman/8.0/en/innodb-information-schema.html)

## 15.16 [InnoDB Integration with MySQL Performance Schema](https://dev.mysql.com/doc/refman/8.0/en/innodb-performance-schema.html)

## 15.17 [ InnoDB Monitors](https://dev.mysql.com/doc/refman/8.0/en/innodb-monitors.html)

## 15.18 [InnoDB Backup and Recovery](https://dev.mysql.com/doc/refman/8.0/en/innodb-backup-recovery.html)

## [15.19 InnoDB and MySQL Replication](https://dev.mysql.com/doc/refman/8.0/en/innodb-and-mysql-replication.html)

## [15.20 InnoDB memcached Plugin](https://dev.mysql.com/doc/refman/8.0/en/innodb-memcached.html)

## [15.21 InnoDB Troubleshooting](https://dev.mysql.com/doc/refman/8.0/en/innodb-troubleshooting.html)

## [15.22 InnoDB Limits](https://dev.mysql.com/doc/refman/8.0/en/innodb-limits.html)

## [15.23 InnoDB Restrictions and Limitations](https://dev.mysql.com/doc/refman/8.0/en/innodb-restrictions-limitations.html)



# 高级特性

## 预处理语句 - prepare statements

[官方文档:prepared statements](https://dev.mysql.com/doc/refman/8.0/en/sql-prepared-statements.html)

### 理论原理

> mysql不支持变量绑定, 解决方案是 预解析语句 来完成相同的任务

优势: 解决SQL防注入

##  

本实例演示事务处理方法

# 常见问题

- 在mysql中, 关于utf8与[utf8mb4](https://dev.mysql.com/doc/refman/8.0/en/charset-unicode-utf8mb4.html)
    - utf8是utf8mb3的别名
    - utf8mb4的意思是: a maximum of four bytes per multibyte character
    - mysql8 则默认使用utf8-mb4;
- `/var/run/mysqld/mysqld.sock`是一个套接字文件
    - 它允许同一机器上的程序之间通过该文件与mysql服务器通信, 而不需要TCP/IP来完成

# 配置

```shell
# 安装与初始化
sudo apt update
sudo apt install mysql-server mysql-client

# run scurity script
sudo mysql_secure_installation
```



```shell
 # The MySQL server, mysqld, has many command options and system variables that can be set at startup to configure its operation. To determine the default command option and system variable values used by the server, execute this command:
 mysqld --verbose --help
 
 
 # 查看变量
 show variables;
 
 # 查看状态
 show status;
```

```ini

# 允许被远程访问

bind-address=0.0.0.0
```



# 备份恢复

## Links

- [mysql manual: backup and recovery](https://dev.mysql.com/doc/refman/8.3/en/backup-and-recovery.html)
- [](https://dev.mysql.com/doc/mysql-backup-excerpt/8.0/en/)

## 操作原则

- 操作前先备份

```shell
mysqldump -u root -p <pass> <db_name> > mysql_bak.sql
```



```mysql
# 查看二进制日志
show variables like 'log_%';
```

## 备份方式

### 逻辑备份

#### mysqldump-snapshot backup

```shell

# 从文件加载
LOAD DATA LOCAL INFILE '/path/pet.txt' INTO TABLE pet;
```



#### mysqlhotcoy

### binlog(二进制日志)

> binary log

## docker备份

### snapshot backup

```shell
# 备份整条数据库
docker exec mysql_container_name mysqldump -u root --password=your_password database_name > backup.sql

# 恢复数据库
docker exec -i new_mysql_container mysql -u root --password=your_password database_name < backup.sql


```



### volume backup

创建快照








# MySQL安装

```shell
# 停止 / 开启 / 重启 mysql
sudo service mysql stop
sudo service mysql start
sudo service mysql restart
```

### mysql8-server安装

[更新配置](https://dev.mysql.com/downloads/repo/apt/)

[APT-REPO指南](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)

```shell
# 选择安装版本时选择 bonic 版本 --新版似乎不需要这个步骤了
# 密码方式选择旧方式
wget *.deb
sudo apt install  ./mysql-apt-config_0.8.13-1_all.deb
# 更新配置后需要更新软件源
sudo apt update

# 安装mysql
sudo apt install mysql-server
```

[教程](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)

[workbench](https://dev.mysql.com/downloads/workbench/)

```shell
sudo apt install mysql-workbench
```

[connector/python](https://dev.mysql.com/downloads/connector/python/)

```shell
sudo apt install mysql-connector-python  # 不推荐, 应该直接使用pip的方式安装
```

选择安装mysql8.0 选 b开头的ubuntu版本 新版本好像不需要这个选项

#### 远程连接mysql

修改配置文件

/etc/mysql/mysql.conf.d/mysqld.cnf

添加以下代码

bind-address = 0.0.0.0

并关闭两端的防火墙

设置允许被远程连接

#### 常见问题

无法远程连接到服务器

关闭防火墙

设置允许主机访问权限

% 允许任何IP地访问连接

root@%

user@host

## centos install mysql

```shell
curl -o https://repo.mysql.com/yum/mysql-8.0-community/el/7/x86_64/mysql-community-server-8.0.25-1.el7.x86_64.rpm 
```

## python连接驱动安装&下载

[可选驱动Python官方文档](https://wiki.python.org/moin/MySQL)

[connect/python链接地址](https://dev.mysql.com/downloads/connector/python/)

[驱动安装](https://dev.mysql.com/doc/connector-python/en/connector-python-installation-binary.html)

```shell
# 两种方式选择一种即可
# 安装 connecter for python
sudo apt install mysql-connector-python-cext-py3 


# 驱动
# python3连接驱动
pip install pymysql
pip install mysql-connector-python
# 安装connector-python

```

### Django官方推荐使用 `mysqlclient`

[pypi](https://pypi.org/project/mysqlclient/)

针对问题1

```shell
    OSError: mysql_config not found
    ----------------------------------------
ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.

```

[参考链接1](https://stackoverflow.com/questions/5178292/pip-install-mysql-python-fails-with-environmenterror-mysql-config-not-found)

针对问题2

```shell
error: command 'x86_64-linux-gnu-gcc' failed with exit status 1
```

[参考链接](https://stackoverflow.com/questions/41492878/command-x86-64-linux-gnu-gcc-failed-with-exit-status-1)

解决方案

```shell
pip install mysqlclient

sudo apt-get install python3-dev 	default-libmysqlclient-dev

```

# 数据库设计

## 闭包表



# **最佳实践**

> 从业务的问题和需求 来理解程序

- [ ] 执行计划 explain

## 重点提示

- int 现在不推荐指定位数
- 多条SQL语句必须以分号(;)分隔
- SQL语句不区分大小写  (表名,字段 函数).
- 在处理SQL语句时,其中所有换行都被忽略.SQL语句可以写成长长的一行,也可以分写在多行.分写成多行更利于阅读和调试
- 检索多个列时,需要用逗号隔开,最后 一个列名不用加逗号,否则会出现错误.
- OFFSET（补偿，偏移）使用时 注意第0行,默认是从0数起
- 当涉及到第几行时从零开始数，共几行相当于计数从1开始记
- ORDER BY子句的位置应该在SELECT语句的句末.
- SQL DML(数据操作语言)和 DDL(数据定义语言)

## 常见需求

### 事务处理

### offset limit 且获取总页数

```mysql
# 请注意, 这条语句的total_count会返回where后整个表的数据统计 而不是limit后的统计
select *, count(*) over() as total_count from model limit 10 offset 1;
```



## **零散记录**

- 当数据库关联文件时, 删除该记录, 应该先, 删除该文件, 再删除记录, **先删除实体, 再删除索引**
    - 删除数据出错时, 如果先删除了索引, 文件就成了垃圾了。没办法再找到该文件
- 表名, 个人一般喜欢单数, 一张表对应一个实体
- MySQL会默认为主键创建索引, 所以一般不需要显式的声明`index=True`

## 常用日志

> [!tip]
>
> AI prompt: explain all mysql log type and their usage and purpose.

| log type              | general path             | purpose |
| --------------------- | ------------------------ | ------- |
| error log             | /var/log/mysql/error.log |         |
| general query log     |                          |         |
| slow query log        |                          |         |
| binary log            |                          |         |
| relay log             |                          |         |
| innoDB Monitor Output |                          |         |



### Error Log

```shell
/var/log/mysql/error.log
```





### 

## MySQL主从同步

### 说明简介

主从同步使得数据可以从一个数据库服务器复制到其他服务器上，在复制数据时，一个服务器充当主服务器（master），其余的服务器充当从服务器（slave）。因为复制是异步进行的，所以从服务器不需要一直连接着主服务器，从服务器甚至可以通过拨号断断续续地连接主服务器。通过配置文件，可以指定复制所有的数据库，某个数据库，甚至是某个数据库上的某个表。

**使用主从同步的好处：**

（1） 通过增加从服务器来**提高数据库的性能**，在主服务器上执行写入和更新，在从服务器上向外提供读功能，可以动态地调整从服务器的数量，从而调整整个数据库的性能。

（2） **提高数据安全**，因为数据已复制到从服务器，从服务器可以终止复制进程，所以，可以在从服务器上备份而不破坏主服务器相应数据

（3） 在主服务器上生成实时数据，而在从服务器上分析这些数据，从而 **提高主服务器的性能**

### 原理机制

Mysql服务器之间的主从同步是基于**二进制日志机制**，主服务器使用二进制日志来记录数据库的变动情况，从服务器通过读取和执行该日志文件来保持和主服务器的数据一致。

在使用二进制日志时，主服务器的所有操作都会被记录下来，然后从服务器会接收到该日志的一个副本。从服务器可以指定执行该日志中的哪一类事件（譬如只插入数据或者只更新数据），默认会执行日志中的所有语句。

每一个从服务器会记录关于二进制日志的信息：文件名和已经处理过的语句，这样意味着不同的从服务器可以分别执行同一个二进制日志的不同部分，并且从服务器可以随时连接或者中断和服务器的连接。

主服务器和每一个从服务器都必须配置一个唯一的ID号（在my.cnf文件的[mysqld]模块下有一个server-id配置项），另外，每一个从服务器还需要通过CHANGE
MASTER TO语句来配置它要连接的主服务器的ip地址，日志文件名称和该日志里面的位置（这些信息存储在主服务器的数据库里）

### 配置实现

有很多种配置主从同步的方法，可以总结为如下的步骤：

（1） 在主服务器上，必须开启二进制日志机制和配置一个独立的ID

（2） 在每一个从服务器上，配置一个唯一的ID，创建一个用来专门复制主服务器数据的账号

（3） 在开始复制进程前，在主服务器上记录二进制文件的位置信息

（4） 如果在开始复制之前，数据库中已经有数据，就必须先创建一个数据快照（可以使用mysqldump导出数据库，或者直接复制数据文件）

（5） 配置从服务器要连接的主服务器的IP地址和登陆授权，二进制日志文件名和位置

### 操作步骤

#### 通过Docker安装MySQL

在ubuntu中已经有安装一台mysql了，现在使用docker安装另外一台mysql. 获取mysql的镜像，主从同步尽量保证多台mysql的版本相同

```shell
# 查看当前环境中的mysql版本信心
mysql -V
mysql --version

# 从官方拉取相同的mysql版本, 或从本地加载
docker image pull mysql:8.0.16
docker load -i mysql.tar

```

运行 mysql docker 镜像(创建容器)前, 需要在宿主机中简历文件目录用语mysql容器 **保存数据** 和 **读取配置文件**

```shell
cd ~
mkdir mysql_slave
cd mysql_slave
mkdir data
cp /etc/mysql/mysql.conf.d ./
```

复制好配置文件后,需要为宿主机配置文件配置 `server-id = 1` , 同时修改复制好的配置文件,作如下修改:

```text
# 使容器中的mysql运行在8306端口
port = 8306

general_log = 0

# id编号设为2
server-id = 2
```

创建docker容器

```shell
docker run --name mysql-slave -e MYSQL_ROOT_PASSWORD=wawawa -d --network=host -v /home/wwfyde/mysql_slave/data:/var/lib/mysql -v /home/wwfyde/mysql_slave/mysql.conf.d:/etc/mysql/mysql.conf.d mysql:latest
```

MYSQL_ROOT_PASSWORD 是创建mysql root用户的密码

测试，在ubuntu中使用mysql命令尝试连接docker容器中的mysql

```shell
mysql -uroot -pwawawa -h 127.0.0.1 --port=8306
```

### **备份**主服务器**原有数据**到从服务器

如果在设置主从同步前，主服务器上已有大量数据，可以使用mysqldump进行数据备份并还原到从服务器以实现数据的复制。

在主服务器Ubuntu上进行备份，执行命令：

```shell
mysqldump -uroot -pwawawa --all-databases --lock-all-tables > ~/master_db.sql
```

- -u ：用户名
- -p ：示密码
- --all-databases ：导出所有数据库
- --lock-all-tables ：执行操作时锁住所有表，防止操作时有数据修改
- ~/master_db.sql :导出的备份数据（sql文件）位置，可自己指定

在docker容器中导入数据

```shell
mysql -uroot -pwawawa -h127.0.0.1 --port=8306 < ~/master_db.sql
```

### 配置主服务器master 宿主机中的MySQL

编辑设置mysqld的配置文件, 设置log_bin 和 server-id

```shell
sudo vim /etc/mysql.conf.d/mysqld.cnf
```

重启mysql服务

```shell
sudo service mysql restart
```

登入主服务器Ubuntu中的mysql, 创建用于从服务器同步数据使用的账号

```shell
mysql -uroot -pwawawa
GRANT REPLICATION SLAVE ON *.* TO 'slave'@'%' identified by 'slave';
FLUSH PRIVILEGES;
```

获取主服务器的二进制日志信息

```sql
show
master status;
```

- File为使用日志文件名字,
- Postion为使用的文件位置,

这两个参数须记下, 配置从服务器时会用到.

### 配置从服务器slave

进入docker中的mysql

```shell
mysql -uroot -pwawawa -h127.0.0.1 --port=8306
```

执行以下命令:

```sql
change
master to master_host='127.0.0.1', master_user='slave', master_password='salve', master_log_file='mysql-bin.000006', master_log_pos=590;
```

- master_host: 主服务器的IP地址
- master_log_file: 上文查询到的主服务器日志文件名
- master_log_pos: 上文查询到的主服务器日志文件位置

启动slave服务器, 并查看同步状态

```sql
start
slave;
show
slave status
\G;
```

当且仅当 `Slave_IO_Running: Yes` , `Slave_SQL_Running: Yes` 时, 表示同步已正常运行

## <u>数据库管理</u>

## 登录和退出数据库

```shell
# 登录
mysql -uroot -p

# 远程登录mysql
mysql -h host -u user -p

# 当前用户快捷登录
mysql --quick -p

# 退出
exit
quit
Ctrl + Z
Ctrl + D

# 取消输入
Ctrl + C

# 从文本编辑器粘贴
Ctrl + Shift + v
```

## 用户管理

```mysql
# 创建用户
create user 'test'@'%' identified by 'wawawa';

# 授权用户db.tables to user@host 
# *.* 表示 任何库和任何表
grant all privileges on *.* to 'wwfyde'@'%';

# 授予用户某个库的权限
GRANT ALL ON menagerie.* TO 'your_mysql_name'@'your_client_host';

# 修改表来实现权限修改
update user
set host='%'
where user = 'user';

# 刷新权限, 将文件读取到内存中
flush privileges;

# 删除用户
drop user 'meiduo_test'@'%';

# 查看用户信息
select user, host
from mysql.user;
```

## 数据库管理

```mysql
# 查看数据库
show databases;

# 创建数据库
create database test;

# 切换数据库

# 查看表结构
describe user;
show columns from user;
SHOW [EXTENDED] [FULL] {COLUMNS | FIELDS}
    {FROM | IN} tbl_name
    [{FROM | IN} db_name]
    [LIKE 'pattern' | WHERE expr];
# 查看权限
show grants for 'Asa'@'baidu.com'
SHOW GRANTS FOR 'jeffrey'@'localhost';

```

## SQL表结构的创建, 插入和管理

### 创建表结构

> 数据间用逗号隔开
>
> auto_increment 表示自动增长
>
> unsigned
>
> default 数据 是默认格式
>
> 表一经创建,不应随便操作

```mysql
-- 创建表之前 记得切换数据库
use test
-- 初始化表结构 
-- 数据间用逗号隔开
create table test
(
    # 字段名称,数据类型 [约束条件]
    # [field type null,key,default,extra]
    test_id int                               not null primary key auto_increment,
    name    varchar(10)                       null default '',
    height  decimal(5, 2)                     null,
    age     tinyint unsigned                  null default 0,
    gender  enum ('男', '女', '其他', '保密') null,
    cls_id  int unsigned                      null default 0
)
    # 主键可以放在字段中单独说明

    );

# 插入数据 
insert into test

```

### 表管理

```mysql
-- 查看表列表
show tables;

-- 查看表结构(创建语句)
show create table 表名;

-- 查看表结构
desc classes;

-- 输出表结构-含记录 
select *
from 表名
limit 5 offset 1;
-- limit: 设定返回的记录数
-- offset: 设定查询时的便宜个数,默认为零

-- 重命名表
rename table 原表名 to 新表名;

-- 删除表
drop table 表名;
drop table students;

-- //修改表结构

-- 添加字段
alter table 表名
    add 列名 类型 [约束];
alter table students
    add birthday datetime;

-- 重命名字段
alter table 表名
    change 原名 新名 [类型] [约束];
alter table students
    change birthday birth;

-- 修改字段类型及约束
alter table 表名
    modify 列名 类型及约束;
alter table students
    modify birth date not null;

-- 删除字段
alter table 表名
    drop 列名;
alter table students
    drop birthday;

```

## 数据字典

data dictionary

> 个人理解是, 基于表格的配置文件, 用于存储数据库元信息和相关配置

## 概要

MySQL包含(合并)了一个事务性(transactional)数据字典, 用于存储数据库对象信息. 之前的版本的数据字典存储于元数据文件,
非事务性表和特定存储引擎的数据字典.

- 改进后主要优势:
    - 简化了一个集中式的数据字典架构以统一存储数据字典.
    - 移除了基于文件的元数据存储.
    - 事务性的, 崩溃安全的存储体系.
    - 统一和集中化的缓存方案.
    - 对INFORMATION_SCHEMA简单化和改进的实现.
    - 原子性的DDL(数据定义语言)

## 配置文件

[官方文档](https://dev.mysql.com/doc/refman/8.0/en/option-files.html)

安装完成后 以root用户省份登录进去

```shell
sudo su root
mysql -uroot
# 初次密码查询


use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';

# 服务管理
sudo systemctl status mysql
sudo systemctl  start | stop | restart  mysql

systemctl start | status | stop  mysql

# 从配置启动

```

查找配置文件顺序

```shell
mysql --help|grep my.cnf
```

```text
Default options are read from the following files in the given order:
/etc/my.cnf /etc/mysql/my.cnf ~/.my.cnf 
The following groups are read: mysql client
```

```mysql
-- 查看用户允许连接的主机
SELECT host
FROM mysql.user
WHERE User = 'root';

-- 为用户设置连接权限(允许主机)
-- 设置允许被远程连接
update user
set host = '%'
where user = 'root';
-- 使刚才的代码生效
flush privileges;
-- 登录mysql
mysql -uroot -p
-- 切换数据库
use mysql;
-- 可连接主机信息
select user, host
from user;
```

```mysql
-- 记得关闭两端防火墙,并允许两端被远程连接
-- 修改配置文件 修改该配置文件似乎不会生效, 因为不会优先使用该配置
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
-- 末行添加以下代码
bind-address = 0.0.0.0




```

```ini
[client]
port = 3306
socket = /tmp/mysql.sock

[mysqld]
port = 3306
socket = /tmp/mysql.sock
key_buffer_size = 16M
max_allowed_packet = 128M

[client]
# The following password will be sent to all standard MySQL clients
password = "my password"

[mysql]
no-auto-rehash
connect_timeout = 2
```

### 权限管理

```shell
grant all privileges on *.* to root@"%" identified by 'wawawa';
```

## 数据库操作

```mysql
-- 创建数据库
-- 注意拼写 character 字符的意思
create database gjcy character set utf8mb4;
create database python;
create database django_demo default charset = utf8mb4;

-- 查看所有数据库
show databases;

-- 删除python数据库
drop database python;

-- 引用切换数据库 :use 后面不要加database 参数 分号可以不要
use 数据库名

-- 查看当前数据库 活动的数据库
select database();
show tables;

-- 查看当前版本
select version();

-- 查看当前时间
select now();

```

**数据库创建相关说明**: 默认字符串 charset = utf8mb4

## 创建时间与更新时间

一般命名为 `created_at` 和 `updated_at` | `create_time` 和 `update_time`

另外可能涉及到前缀和后缀, 比如 `user_create_at`

存储的数据类型 一般选择 `datetime` 或 `timestamp`

```sql
CREATE TABLE example_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 表名

> [!note]
>
> But this name will be derived from a class name. And it's common practice to use **singular**names for classes (e.g. `class Hero`, instead of `class Heroes`). Using singular names for classes like `class Hero` also makes your code more intuitive.

一般推荐使用单数

## 关系表命名

```markdown
在数据库设计中，命名约定是保持组织性和可读性的关键要素之一，特别是对于关系表，其命名应清晰反映表的用途和包含的数据类型。以下是一些广泛认可的最佳实践方法，用于命名那些存储实体之间关系的表：

1. 使用实体名和关系指示
实体-关系-实体 (Entity1_Relationship_Entity2): 这种方法直接将两个相关实体的名称和它们之间的关系结合起来。例如，如果你有一个表用来存储书和作者之间的关系，可以命名为Book_Author或Book_WrittenBy_Author，取决于关系的具体性质。
2. 使用动词或关系短语
动词或关系短语 (Verb_Entity1_Entity2, Entity1_Verb_Entity2): 选择反映实体间关系的动词或短语。例如，对于用户和他们的登录会话的关系表，可以命名为User_Has_Sessions或User_Sessions。
3. 使用“连接”或“映射”表达关联
连接或映射 (Entity1_to_Entity2, Entity1Entity2Map): 对于简单的关联表，可以使用“to”或“Map”来表示实体之间的连接或映射关系，如User_to_Role或UserRoleMap。
4. 考虑关系方向
指示关系方向 (Entity1_for_Entity2, Entity1_of_Entity2): 如果关系有明确的方向性，使用“for”或“of”来指示。例如，如果你存储的是用户为特定项目创建的内容，可以使用Content_for_Project或ProjectContent。
5. 精简且描述性命名
精简描述：尽可能使命名既简洁又具描述性，避免过长或过于复杂的名称，同时确保名称清楚地反映了表的内容和用途。
6. 保持一致性
命名一致性：在整个数据库中保持命名约定的一致性极为重要，这有助于开发人员和数据库管理员更容易理解和维护数据模型。
7. 使用复数形式
复数形式：考虑使用实体的复数形式来命名表，以表明表中包含了多个记录或实例，如Users_Roles。
选择哪种命名方法取决于个人或团队的偏好、项目的具体需求以及现有的命名规范。重要的是选择一种清晰、逻辑性强且一致的命名策略，并在整个数据库设计中坚持使用它。
```



### 使用实体名和关系指示

book_autor/ boot_writtenby_author

### 使用动词或关系短语

## 多对多表设计

many-to-many

> [!tip]
>
> 另外查看FastAPI文档

```mysql
CREATE TABLE Students (
    student_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (student_id)
);

CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT,
    title VARCHAR(100),
    PRIMARY KEY (course_id)
);

-- 符复合主键, 关联表
CREATE TABLE StudentCourses (
    student_id INT,
    course_id INT,
    enroll_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

```



# MySQL必知必会>学习笔记

## 重要知识点

字段区分

## 学习引导

1数据库设计/使用原则

安全性,可维护,高效性,一致性



------

SQL实践

创建表

查询表

增加行数据



------



------

需要掌握的点

Use scripts Create table

------

mysql技巧

快捷键 ctrl +enter 运行





------

-

------

## SQL简介及术语

SQL的优点:

- 所有DBMS都支持SQL
    - SQL简单易学
    - 可以处理非常复杂和高级数据库操作



## 排序检索数据

```mysql
select prod_name, prod_price, prod_id
from Products
order by prod_price desc, prod_name;
```

`order by`子句的位置应该在`select`语句的句末.

-

按多个列序:

按列位置排序:

```mysql
SELECT prod_id, prod_price, prod_name
FROM Products
ORDER BY prod_price, prod_name.
```

> 指定排序方向ORDER BY prod_name,prod_price DESC(descending order).
>
> 当指定多个列上进行排序时,必须分别对指定顺序列的后面指定DESC.

------

## 过滤数据

(单一条件)

关键字:WHERE(过滤指定的数据),指定条件

★WHERE子句的位置:ORDER BY 应该位于WHERE之后

WHERE 子句操作符:= ,<>(不等于) , != , < ,<= ,!<(不小于) ,> ,>= ,!> , BETWEEN(指定的两个值之间) ,IS NULL (为NULL值)

- 检查单个值(=,<,>,)
- 不匹配检查(不等于检查)
- 范围值检查:WHERE Keyword BETWEEN A AND B;
- 空值检查:WHERE Keyword IS (NOT) NULL;

☆NULL和非匹配: 因为结果未知,往往匹配和非匹配都不会返回这些结果

------

## 高级数据过滤

///概念:

Operator(操作符) ：logical operator

★求值顺序:默认由左至右,'AND'优先级高于'OR'  可以使用括号进行优先级的更改, '()'的优先级最高

- AND 操作符:(且)
- OR操作符:(或)
- IN操作符:(包含于)             //WHERE vend_id IN ( 'DLL01', 'BRS01')
- NOT操作符:(不包含)    否定后面所跟的任何条件 //WHERE NOT vend_id = 'DLL01'

★NOT可以与其他操作符组合



------

## 用通配符进行过滤

目标:了解通配符概念,使用通配符,怎样使用LIKE 操作符进行通配搜索,以便进行对数据进行复杂过滤

//概念:

wildcard(通配符):用来匹配值的一部分的特殊字符.//SQL 语句WHERE子句中有特殊含义的字符

search pattern(搜索模式):由字面值、通配符或者两者组合构成的搜索条件。

★为在搜索子句中使用通配符，必须使用LIKE操作符

- LIKE 操作符:标示后面的搜索模式利用通配符匹配

★通配符搜索智能用于文本字段（字符串），非文本数据类型字段不能使用通配符进行搜索

- %（百分号）通配符: WHERE prod_name LIKE 'Fish%';
  -
    - '%Fish%': 任何位置
    - '%Fish': 字段末尾的
    - 'F%y': F起头,Y结尾的所有产品 //不常用

★通配符搜索区分大小写

★通配符不会匹配名称为NULL的行

★部分DBMS会考虑字段末尾为空格的情况 这种时候'%Fish'是无法被检索出来的(字段大小 为50个字节)

★Access '*'代表'%' ,?代表_

★%还能匹配0个字符

- _(下划线)通配符:匹配单个字符(一个字符,而不是一个单词,多个字符则用多个'_')
- [](方括号)通配符:用来指定一个字符集,它必须匹配指定位置(通配符位置)的一个字符
  -
    - [J]只能匹配单个字符
    - [JM]表示任意J或M单个字符
    - [JM]%表示JM之后可以是任意数目的字符

★仅仅Access和SQL Server支持 集合'[]',SQL server中用[^J]表示否定,Access中用[!J]

★二者都可以使用'NOT'实现否定集合

- 使用通配符的技巧
  -
    - 这种方式虽然有用,但是比较耗费检索时间
    - 不要过度使用通配符
    - 不要把通配符用于搜索模式的开始处,这样搜索起来会相当的慢!
    - 仔细注意通配符的位置

------

## 创建计算字段

//目标:计算字段概念、特点和如何使用,如何从应用程序中使用别名引用他们.

filed(字段): 基本上与column(列)的意思相同

计算字段:

需求分析：数据库表中的数据一般不是应用程序所需的格式,一般需要检索并转换、计算或格式化数据，而非直接的检索数据就完事

★只有数据库知道SELECT语句中哪些列是实际的表列,哪些列是计算字段.从客户端来看,计算字段的数据与其他列的数据的返回方式相同.

★客户端与服务器的格式:在SQL语句内可完成的许多转换和格式化工作都可以直接在客户端应用程序内完成.但一般来讲,数据库服务器上完成这些操作比在客户端中完成要快的多.

concatenate(拼接字段):将值连接到一起构成单个值

使用说明:Access/SQL Server 用'+',其它用'||'

mysql 使用连接函数concat()  合并函数

★RTRIM()函数: 修剪右边多余空格

☆TRIM()函数: 修剪两边多余空格

☆LTRIM()函数: 修剪左边多余空格

使用别名(也有叫导出列) AS vend_title:

☆指示SQL创建一个包含指定计算结果的名为vend_title的计算字段

执行算术计算:columnA || columnB AS fieldA 相当于一个新列需要 和前面的用逗号隔开

算术操作符:'+' , '-' , '*' , '/'

☆如何测试计算 SELECT 3*2, SELECT TRIM('abc'),SELECT NOW()



------



\8. 使用函数处理数据

//目标:什么是函数,DBMS支持何种函数,函数的用法,常见问题

- 函数带来的问题:
  -
    - 不同DBMS的函数是不等同的,SQL函数是不可移植的,
    - 使用函数时,应该使用代码注释,以便以后自己或其他人能确切地知道所编写的SQL代码的含义

portable(可移植:便携的)

- 使用函数 :常见函数类型
  -
    - 用于处理文本字符串
    - 用于在数值数据上进行算术操作
    - 用于处理时期和时间值并从这些值中提取特定成分
    - 返回DBMS正使用的特殊信息(如返回用户登录信息)的系统函数


- 文本处理函数
  -
    - LEFT()/RIGHT(): 返回字符串左/右边的字符
    - LENGTH()/LEN()/: 返回字符串的长度
    - LOWER():将字符串转换为小写
    - UPPER():将字符串转换为大写
    - TRIM():去掉字符串中的空格
- 日期和时间处理函数???
- 数值处理函数
  -
    - ABS()--absolute:返回一个数值的绝对值
    - COS()/SIN()/TAN():返回一个角度的余弦/正弦/正切
    - EXP(): 返回一个数的指数值
    - PI(): 返回圆周率
    - SQRT()--square root:返回一个数的平方根

------



汇总数据

//目标:什么是SQL的聚集函数,如何利用他们汇总表的数据

- 聚集函数的用途:
  -
    - 确定表中的行数
    - 获得表中某些行的和
    - 找出表列(所有行,特定行)的最大值,最小值、平均值
- SQL聚集函数：(共5个)
  -
    - AVG(): 返回某列的平均值
    - COUNT(): 返回某列的行数:
      -
        - COUNT(*)返回所有行数,COUNT(cust_email)会去除NULL值
    - MAX()/MIN():返回某列的最大/最小值
      -
        - 对非数值数据使用MAX()/MIN()时,返回按该列排序后的最后/前一行
        - MAX()/MIN()函数会忽略列值为NULL的行
    - SUM(): 返回某列值之和
      -
        - SUM()函数会忽略列值为NULL的行
- 聚集不同的值:DISTINCT /TOP /TOP PERCENT
  -
    - DISTINCT不能用于COUNT(*)
- 组合聚集函数:用逗号隔开

## 分组数据

> 目标:如何分组数据,以便汇总表内内容的子集GROUP BY // HAVING



数据分组:对数据表的子集进行处理,将数据分为多个逻辑组,对每个组进行聚集计算

创建分组:GROUP BY

如果分组列中包含具有NULL值的行,则NULL将作为一个分组返回,如果列中含有多行NULL值,它们将分为一组GROUP BY
子句必须出现在WHERE子句之后,ORDER BY子句之前

- 过滤分组:HAVING(过滤)
  -
    - ☆HAVING和WHERE的区别:where在数据分组前进行过滤,having在数据分组后既行过滤.
    - ☆where排除的行不包括在分组中.因此这可能会改变计算值,从而影响having子句中基于这些值过滤掉的分组
    - ☆where先进行第一层数据过滤,进行分组后,再用having过滤数据
- 分组和排序:
  -
    - group by 和order by的区别

| order by            | group by                    |
|---------------------|-----------------------------|
| 对产生的输出排序            | 对行分组,但输出可能不是分组的顺序           |
| 可以对任意列都可以使用(非选择列也行) | 只可能使用选择列或表达式,而且必须使用每个选择列表达式 |
| 不一定需要               | 如果与聚集函数一起使用列(或表达式),则必须使用    |

## 使用子查询

学习目标: 什么是 子查询,如何使用它们

subquery(子查询):SQL允许嵌套在其他查询中的查询---(嵌套查询)

☆嵌套的执行顺序总是由内到外进行的

☆子查询语句只能是单列 可以理解,作为条件,应该是独立的

☆子查询和性能:虽然这些代码有效,但使用子查询并不总是执行这类数据检索的最有效方法!!

**利用子查询进行过滤**

需求场景:列出订购物品RGAN01的所有顾客

分析:

订单Orders表中存储着订单信息,订单编号/订单日期/顾客ID等信息

消费者customers表中存储着顾客ID,顾客信息

订单详情OrderItems表中存储着订单ID/订单量/产品名/客单价

解决方案:先根据已知条件物品---在订单详情表中查出购买过该产品的所有订单ID,然后根据订单ID在表orders中检索出订单ID的相应买家

1)检索包含物品rgan01的所有订单编号

2)检索具有前一步列出的订单编号的所有顾客ID

```mysql
select cust_id
from orders
where order_num in (select order_num
                    from orderitems
                    where prod_id = 'RGAN01')
;
```

☆格式化SQL:适当的使用缩进,以增加代码的阅读性

需求场景:根据查询的顾客ID(cust_id),查询顾客名cust_name和联系方式cust_contact

分析: 给出已知条件,然后进行简单查询

**作为计算字段使用子查询**

使用子查询的另一个方法是创建计算字段.

需求场景:显示customers表中每个顾客的订单总数.

分析:订单与相应的顾客ID存储在Orders表中

select count(*) from orders where orders.cust_id=customers.cust_id

查询customers.cust_id在orders表中分别出现的次数

:::::比较orders表中的cust_id和当前正在从customers表中检索出的cust_id

☆完全限制列名:避免歧义发生尤其是涉及到查询多张表时TABLE.column_x

☆不止一种解决方案:对于上面的问题,我们还有其他有效方法.



------

## 连接表

学习目标//:什么是连接,为什么使用连接,如何编写连接结构SELECT语句

连接:

SQL最强大的功能之一就是能在数据查询中执行连接(join)表,(join 参加,结合,连接)

关系表

结构化数据,优化逻辑理清对应关系

优势

- 减少信息重复和节省存储空间
- 信息记录具备唯一性,便于修改,防止出现不一致性;因为没有重复信息,当数据出现变动时,只需修改一个地方即可,极大的增加了数据库性能
- 输入数据时,简便快捷;当数据出现不一致性时,引用时很容易出现错误.
- 总之相同的数据出现多次绝不是一件好事,这是关系型数据设计的基础.
- 因为我们需要对数据进行维护和增删改查,,逻辑结构越清晰越不容易出现错误
- 可伸缩(scale):能够适应不断增加的工作量而不失败. 设计良好的数据库或应用程序称为可伸缩性好(scale well)

为什么使用连接

应用场景:如果数据存储在多个表中,怎样用一条SELECT语句就检索出来呢?

答案是使用连接.如何理解?

连接是一种机制,用来在一条select语句中关联表,因此称为连接.

使用特殊语法,可以连接多个表返回一组输出,连接在运行时关联表中正确的行.

创建连接

思路:指定要连接的所有表以及关联他们的方式即可.

充的列在前面,,,将两个表的相关性进行匹配A:C,,,C:D,,,---A:D

```mysql
select vend_name, prod_name, prod_price
from vendors,
     products
where Vendors.vend_id = products.vend_id
-- 将 A 与B 进行配对
;
```

☆这里一定要完全限定列名,相对于数据库(TABLE.Column_n)

where子句的重要性

在一条select语句中连接几个表时,相应的关系是在运行中构造.DBMS本身没有指示如何对表进行连接.

连接两个表时,我们需要做的是将第一个表中的每一行与第二个表中的每一行配对

☆笛卡尔积(Cartesian product)

当表关系没有指定连接条件时,返回的结果为笛卡尔积:检索出的行的数目为A*B

☆不要忘了where子句

为了保证结果的正确输出,请不要忘记使用where子句过滤条件.同理,不正确的过滤条件会导致DBMS返回不正确的数据.

内连接

前面使用的连接也被成为等值连接(equijoin),它基于两个表之间的相等测试.

这种连接也被称为内连接(inner join),只是使用了不同的语法(换种方式解决实际问题)

用例如下:

select vend_name, prod_name, prod_price

from Vendors inner join Products

on vendors.vend_id=products.vend_id

-- order by vend_name, prod_name

;

连接多个表

☆出于性能，不要连接不必要的表，因为这很耗费资源。

多实践，执行一定的任务，一般的SQL操作不止一种方法。

但是使用时应该考虑性能，查询速度等因素

连接是SQL中一个最重要、最强大的特性。有效地使用连接需要对数据库设计有基本的了解



------

## 创建高级连接(未完成)

学习目标//:另外一些连接(含义和用法),介绍如何使用表别名,如何对被连接的表使用聚集函数

13.1使用表别名  [TABLE AS A] 便于多次引用

这样做的意义和目的:缩短SQL语句,允许在一条select语句中多次使用相同的表

13.2使用不同类型的连接

13.2.1自连接:(两个集合,两个条件)

需求场景:给与jim jones 同一公司的所有顾客发一封邮件.

分析:找出jim jones 公司, 然后找出该公司工作的顾客 该顾客可能买不同公司的产品

select c1.cust_id, c1.cust_name, c1.cust_contact

from customers as c1,customers as c2

where c1.cust_name = c2.cust_name

and c2.cust_contact = 'jim jones';

☆用自连接而不用子查询:因为自连接查询速度比子查询快的多,性能更好

13.2.2自然连接:排除多次出现,只返回一次 . 连接的 另一个目的在于产生对应关系

例子:

select C.*, O.order_num, O.order_date, OI.prod_id, OI.quantity,OI.item_price

from customers as C ,orders as O, OrderItems as OI

where C.cust_id = O.cust_id

and OI.order_num = O.order_num

and prod_id = 'RGAN01';

确定好对应关系,C.* 表示对应表的所有列

迄今为止建立的每个内连接都是自然连接

13.2.3外连接 outer join

许多连接将一个表中的行与另一个表中的行想关联,但有时需要包含没有关联行的那些行.

需求场景:

A.对每个顾客的订单计数,包括尚未下单的顾客

B.列出所有产品以及订购数量,包括没有人订购的产品.

C.计算平均销售规模,包括那些至今尚未下单的顾客









------

## 更新和删除数据

学习目标//:利用update/delete语句进行表数据操作

16.1更新(修改)数据

应用场景:更新特定行,更新所有列

用法示例:

update customers

set cust_email='wwfyde@163.com',

 cust_name='wwfyde',

 cust_ address= NULL

where cust_id = '100 000 000 5';

16.2 删除数据

delete from customers

where cust_id = '100000005';

16.3更新和删除的指导原则

- 除非确实打算更新或删除每一行,一般一定要带where子句的update或delete语句
- 在update或delete语句使用where子句之前,应该先用select进行测试,保证它过滤的是正确的数据
- 施加约束,防止执行不带where子句的update和delete子句
- 若是SQL没有撤销(undo)按钮,应该非常小心地使用update和delete,避免错误的更新或删除表.

------

## 创建和操纵表

学习目标//:创建、更改和删除表的基本知识

17.1创建表

两种方法：交互式创建和管理数据库表的工具；直接用SQL语句操纵：create table

```mysql

```



------

# MySQL优化(侯哥)

## 一、MySQL架构与历史

### A.并发控制

- 1.共享锁（shared lock，读锁）：共享的，相互不阻塞的
- 2.排他锁（exclusive lock，写锁）：排他的，一个写锁会阻塞其他的写锁和读锁

### B.事务

- 1.事务ACID

    -
        * 原子性（atomicity）一个事务必须被视为一个不可分割的最小工作单元，整个事务中所有操作要么全部提交成功，要么全部失败回滚，对于一个事务来说，不可能只执行其中的一部分操作
    -
        * 一致性（consistency）数据库总是从一个一致性的状态转换到另外一个一致性的状态
    -
        * 隔离性（isolation）一个事务所做的修改在最终提交以前，对其他事务是不可见的
    -
        * 持久性（durability）一旦事务提交，则其所做的修改就会永久保存到数据库中

- 2.四种隔离级别

    -
        * READ UNCOMMITTED（未提交读），事务中的修改，即使没有提交，对其他事务也都是可见的，事务可以读取未提交的数据，也被称为脏读（Dirty
          Read），这个级别会导致很多问题
        -
            * READ
              COMMITTED（提交读），大多数数据库系统的默认隔离级别，一个事务开始时，只能“看见”已经提交的事务所做的修改，一个事务从开始直到提交之前，所做的任何修改对其他事务都是不可见的，也叫不可重复读（nonrepeatable
              read），有可能出现幻读（Phantom Read），指的是当某个事务在读取某个范围内的记录时，另外一个事务又在该范围内插入了新的记录，当之前的事务再次读取该范围的记录时，会产生幻行（Phantom
              Row）
            -
                * REPEATABLE READ（可重复读），通过InnoDB和XtraDB存储引擎，是MySQL的默认事务隔离级别
                -
                    * SERIALIZABLE（可串行化）最高级别，通过强制事务串行执行，避免了幻读问题，会在读取的每一行数据上都加锁，可能导致大量的超时和锁争用的问题

- 3.死锁：

    - 指两个或多个事务在同一资源上相互占用，并请求锁定对方占用的资源，从而导致恶性循环的现象

- 4.事务日志：

    -
    存储引擎在修改表的数据时只需要修改其内存拷贝，再把该修改行为记录到持久在硬盘上的事务日志中，而不用每次都将修改的数据本身持久到磁盘。事务日志持久以后，内存中被修改的数据在后台可以慢慢地刷回到磁盘，称为预写式日志（Write-Ahead
    Logging）

### C.多版本并发控制

- 1.多版本并发控制（MVCC）是行级锁的一个变种，但是它在很多情况下避免了加锁操作，因此开销更低。虽然实现机制有所不同，但大都实现了非阻塞的读操作，写操作也只锁定必要的行
- 2.MVCC的实现，是通过保存数据在某个时间点的快照来实现的，有乐观和悲观两种，只在REPEATABLE READ和READ COMMITTED两个隔离级别下工作

### D.MySQL的存储引擎

- 1.MySQL的.frm文件保存表的定义，SHOW TABLE STATUS显示表的相关信息
- 2.除非有非常特别的原因需要使用其他的存储引擎，否则应该优先考虑InnoDB引擎
- 3.不要轻易相信MyISAM比InnoDB快之类的经验之谈，这个结论并不是绝对的

## 二、MySQL基准测试

### A.为什么需要基准测试

- 1.基准测试可以观察系统在不同压力下的行为，评估系统的容量，掌握哪些是重要的变化，或者观察系统如何处理不同的数据

### B.基准测试的策略

- 1.两种主要的策略：

    -
        * 针对整个系统的整体测试（集成式full-stack）
    -
        * 单独测试MySQL（单组件式single-component）

- 2.测试何种指标：

    -
        * 吞吐量，指单位时间内的事务处理数

        - 常用的测试单位是每秒事务数（TPS）
        - 每分钟事务数（TPM）

    -
        * 响应时间或者延迟，用于测试任务所需的整体时间，根据具体的应用，测试的时间单位可能是微秒、毫秒、秒或者分钟。通常使用百分比响应时间（percentile
          response time）来替代最大响应时间

    - 并发性，需要关注的是正在工作中的并发操作，或者是同时工作中的线程数或者连接数，在测试期间记录MySQL数据库的Threads_running状态值

    - 可扩展性，给系统增加一倍的工作，在理想情况下就能获得两倍的效果（即吞吐量增加一倍），对于容量规范非常有用，可以提供其他测试无法提供的信息，来帮助发现应用的瓶颈

### C.基准测试方法

- 1.需要避免的一些常见错误：

    -
        * 使用真实数据的子集而不是全集
    -
        * 使用错误的数据分布
    -
        * 使用不真实的分布参数
    -
        * 在多用户场景中，只做单用户测试
    - 在单服务器上测试分布式应用
      -
        * 与真实用户行为不匹配
      -
        * 反复执行同一个查询
      -
        * 没有检查错误
      -
        * 忽略了系统预热（warm up）的过程
      -
        * 使用默认的服务器配置
      -
        * 测试时间太短

- 2.应该建立将参数和结果文档化的规范，每一轮测试都必须进行详细记录
- 3.基准测试应该运行足够长的时间，需要在稳定状态下测试并观察
- 4.在执行基准测试时，需要尽可能多地收集被测试系统的信息
- 5.自动化基准测试可以防止测试人员偶尔遗漏某些步骤，或者误操作，另外也有助于归档整个测试过程，可以选择shell、php、perl等，要尽可能使所有测试过程都自动化，包括装载数据、系统预热、执行测试、记录结果等

### D.基准测试工具

- 1.集成式测试工具：

    - ab，测试HTTP服务器每秒最多可以处理多少请求
    - http_load，和ab类似，但更加灵活
    - jMeter，可以加载其他应用并测试其性能

- 2.单组件式测试工具

    - mysqlslap，可以模拟服务器的负载，并输出计时信息
    - MySQL Benchmark Suite(sql-bench)，单线程的，主要用于测试服务器执行查询的速度
    - Super Smack，提供压力测试和负载生成，是一个复杂而强大的工具，可以模拟多用户访问，可以加载测试数据到数据库，并支持使用随机数据填充测试表
    - Database Test Suite，类似某些工业标准测试的测试工具集

        - Percona's TPCC-MySQWL Tool

    - sysbench，多线程系统压测工具，可以根据影响数据库服务器性能的各种因素来评估系统的性能

## 三、服务器性能剖析

### A.性能优化简介

- 1.性能，为完成某件任务所需要的时间度量，性能即响应时间，这是非常重要的原则
- 2.如果目标是降低响应时间，就需要理解为什么服务器执行查询需要这么多时间，然后去减少或者消除那些对获得查询结果来说不必要的工作。无法测量就无法有效地优化
- 3.性能剖析（profiling）是测量和分析时间花费在哪里的主要方法，一般有两个步骤：测量任务所花费的时间，对结果进行统计和排序

### B.对应用程序进行性能剖析

- 1.性能瓶颈可能的影响因素：

    - 外部资源
    - 应用需要处理大量的数据
    - 在循环中执行昂贵的操作
    - 使用了低效的算法

- 2.PHP性能剖析工具：New Relic、xhprof、Ifp

### C.剖析MySQL查询

- 1.剖析服务器负载

    - 慢查询日志：5.1后long_query_time为0可以捕获所有的查询，查询的响应时间单位可以做到微秒级
    - 生成剖析报告：pt-query-digest

- 2.剖析单条查询：

    - SHOW PROFILES;
    - SHOW [GLOBAL] STATUS;，返回一些计数器

### D.诊断间歇性问题

- 1.尽量不要用试错的方式来解决问题，如果一时无法定位，可能是测量的方式不正确，或者测量的点选择有误，或者使用的工具不合适
- 2.确定单条查询问题还是服务器问题

    - 使用SHOW GLOBAL STATUS
    - 使用SHOW PROCESSLIST
    - 使用查询日志
    - 理解发现的问题：使得gnuplot或R，或其他绘图工具将结果绘制成图形

- 3.捕获诊断数据

    - 诊断触发器：在问题出现时能够捕获数据的基础，有两个常见问题可能导致无法达到预期的结果：误报（false positive）或者漏检（false
      negative）,pt-stalk工具
    - 收集数据：尽可能收集所有能收集的数据，但只在需要的时间段内收集，oprofile、strace、tcpdump、GDB堆栈跟踪、pt-collect、pt-stalk
    - 解释结果数据：pt-mysql-summary、pt-summary输出结果打包，pt-sift得到样本汇总信息，pt-pmp

### E.其他剖析工具

- 1.使用USER_STATISTICS表
- 2.使用strace，可以调查系统调用的情况

## 四、Schema与数据类型优化

### A.选择优化的数据类型

- 1.数据类型的选择原则：
    - 更小的通常更好
    - 简单就好
    - 尽量避免NULL

- 2.应该尽量只在对小数进行精确计算时才使用DECIMAL，使用int类型通过程序控制单位效果更好
- 3.使用VARCHAR合适的情况：字符串列的最大长度比平均长度大很多；列的更新很少，所以碎片不是问题；使用了像UTF-8这样复杂的字符集，每个字符都使用不同的字节数进行存储
- 4.CHAR适合存储很短的字符串，或者所有值都接近同一个长度；不容易产生碎片，在存储空间上更有效率
- 5.通常应该尽量使用TIMESTAMP，它比DATETIME空间效率更高

### B.MySQL schema设计中的陷阱

- 1.不好的设计：

    - 太多的列
    - 太多的关联
    - 全能的枚举
    - 变相的枚举
    - 非此发明（Not Invent Here）的NULL

### C.范式和反范式

- 1.范式的优点：

    - 范式化的更新操作通常比反范式化要快
    - 当数据较好地范式化时，就只有很少或者没有重复数据，所以只需要修改更少的数据
    - 范式化的表通常更小，可以更好地放在内存里，所以执行操作会更快
    - 很少有多余的数据意味着检索列表数据时更少需要DISTINCT或者GROUP BY语句

- 2.范式化设计的缺点是通常需要关联
- 3.反范式的优点：避免关联，避免了随机I/O，能使用更有效的索引策略

### D.缓存表和汇总表

- 1.有时提升性能最好的方法是同一张表中保存衍生的冗余数据，有时也需要创建一张完全独立的汇总表或缓存表
- 2.物化视图，MySQL并不原生支持，Flexviews
- 3.如果应用在表中保存计数器，则在更新计数器时可能踫到并发问题，创建一张独立的表存储计数器，可以帮助避免缓存失效

    - 解决独立表并发问题可以建多行，根据id随机更新，然后统计时sum()
    - 按天或小时可以单独建行，旧时间可定时任务合并到统一的一行

### E.加快ALTER TABLE操作的速度

- 1.两种方式：
- 一是在一台不提供服务的机器上执行ALTER TABLE操作，然后和提供服务的主库进行切换
- 二是通过“影子拷贝”，创建一张新表，然后通过重命名和删表操作交换两张表及里面的数据
- 2.快速创建MyISAM索引，先禁用索引，导入数据，然后重新启用索引

## 五、创建高性能的索引

### A.索引基础

- 1.索引可以包含一个或多个列的值，如果索引包含多个列，那么列的顺序也十分重要，因为MySQL只能高效地使用索引的最左前缀列
- 2.ORM工具能够产生符合逻辑的、合法的查询，除非只是生成非常基本的查询，否则它很难生成适合索引的查询
- 3.在MySQL中，索引是在存储引擎层而不是服务器层实现的，所以，并没有统一的索引标准：不同存储引擎的索引的工作方式并不一样，也不是所有的存储引擎都支持所有类型的索引
- 4.B-Tree意味着所有的值都是按顺序存储的，并且每一个叶子页到根的距离相同，能够加快访问数据的速度，从索引的根节点开始进行搜索，适用于全键值、键值范围或键前缀查找
- 5.B-Tree索引的限制：

    - 如果不是按照索引的最左列开始查找，则无法使用索引
    - 不能跳过索引中的列
    - 如果查询中有某个列的范围查询，则其右边所有列都无法使用索引优化查找

- 6.哈希索引（hash index）基于哈希表实现，只有精确匹配索引所有列的查询才有效，只有Memory引擎显式支持哈希索引
- 7.哈希索引的限制：

    - 哈希索引只包含哈希值和行指针，而不存储字段值，所以不能使用索引中的值来避免读取行
    - 哈希索引数据并不是按照索引值顺序存储的，所以也就无法用于排序
    - 哈希索引也不支持部分索引列匹配查找，因为哈希索引始终是使用索引列的全部内容来计算哈希值的
    - 只支持等值比较查询，不支持任何范围查询
    - 访问哈希索引的数据非常快，除非有很多哈希冲突
    - 如果哈希冲突很多的话，一些索引维护操作的代价也会很高

- 8.空间数据索引（R-Tree），MyISAM表支持空间索引，可以用作地理数据存储，开源数据库系统中对GIS的解决方案做得比较好的是PostgreSQL的PostGIS
- 9.全文索引，适用于MATCH AGAINST操作，而不是普通的WHERE条件操作

### B.索引的优点

- 1.三个优点：

    - 索引大大减少了服务器需要扫描的数据量
    - 索引可以帮助服务器避免排序和临时表
    - 索引可以将随机I/O变为顺序I/O

- 2.索引三星系统：

    - 索引将相关的记录放到一起则获得一星
    - 如果索引中的数据顺序和查找中的排序一致则获得二星
    - 如果索引中的列包含了查询中需要的全部列则获得三星

### C.高性能的索引策略

- 1.独立的列：如果查询中的列不是独立的，则MySQL不会使用索引。“独立的列”是指索引列不能是表达式的一部分，也不能是函数的参数
- 2.前缀索引和索引选择性

    - 通常可以索引开始的部分字符，可以大大节约索引空间，但也会降低索引的选择性
    - 索引的选择性是指，不重复的索引值（也称为基数，cardinality）和数据表的记录总数（#T）的比值，范围从1/#T到1之间，选择性越高则查询效率越高，因为选择性高的索引可以让MySQL在查找时过滤掉更多的行
    - MySQL无法使用前缀索引做ORDERY BY和GROUP BY，也无法做覆盖扫描

- 3.选择合适的索引列顺序

    - 正确的索引列顺序依赖于使用该索引的查询，并且同时需要考虑如何更好地满足排序和分组的需要
    - 在一个多列B-Tree索引中，索引列的顺序意味着索引首先按照最左列进行排序，其次是第二列
    - 将选择性最高的列放到索引最前列

- 4.聚簇索引：并不是一种单独的索引类型，而是一种数据存储方式

    - 最好避免随机的（不连续且值的分布范围非常大）聚簇索引，特别是对于I/O密集型的应用

- 5.覆盖索引：如果一个索引包含（或者说覆盖）所有需要查询的字段的值，就称为覆盖索引

    - 覆盖索引必须要存储索引列的值，

- 6.如果EXPLAIN出来的type列的值为“index”，则说明MySQL使用了索引扫描来做排序
- 7.压缩（前缀）索引，默认只压缩字符串，减少索引大小，对于CPU密集型应用，因为扫描需要随机查找，压缩索引在MyISAM上要慢好几倍
- 8.重复索引是指在相同的列上按照相同的顺序创建的相同类型的索引，应该避免这样创建重复索引
- 9.索引可以让查询锁定更少的行

### D.维护索引和表

- 1.CHECK TABLE检查表是否损坏，ALTER TABLE innodb_tb1 ENGINE=INNODB;修复表
- 2.records_in_range()通过向存储引擎传入两个边界值获取在这个范围大概有多少条记录，对于innodb不精确
- 3.info()返回各种类型的数据，包括索引的基数
- 4.可以使用SHOW INDEX FROM命令来查看索引的基数
- 5.B-Tree索引可能会碎片化，这会降低查询的效率

## 六、查询性能优化

### A.为什么查询速度会慢

- 1.如果要优化查询，实际上要优化其子任务，要么消除其中一些子任务，要么减少子任务的执行次数，要么让子任务运行得更快
- 2.查询的生命周期大致可以按照顺序来看：从客户端，到服务器，然后在服务器上进行解析，生成执行计划，执行，并返回结果给客户端

### B.慢查询基础：优化数据访问

- 1.两个分析步骤：

    - 确认应用程序是否在检索大量超过需要的数据
    - 确认MySQL服务器层是否在分析大量超过需要的数据行

- 2.是否向数据库请求了不需要的数据

    - 查询不需要的记录
    - 多表关联并返回全部列
    - 总是取出全部列
    - 重复查询相同的数据

- 3.MySQL是否在扫描额外的记录

    - 查询开销三个指标：响应时间、扫描的行数、返回的行数
    - 响应时间：服务时间和排队时间之和，“快速上限估计”法
    - 扫描的行数：较短的行的访问速度更快，内存中的行也比磁盘中的行的访问 速度要快得多
    - 访问类型：EXPLAIN中的type列反应了访问类型；通过增加合适的索引；
    - 三种方式应用WHERE条件：在索引中使用WHERE条件来过滤不匹配的记录；使用索引覆盖扫描（Extra中出现Using
      index）来返回记录，直接从索引中过滤不需要的记录并返回命中结果；从数据表中返回数据，然后过滤不满足条件的记录（Extra中出现Using
      Where）
    - 需要扫描大量数据但只返回少数的行的优化技巧：使用索引覆盖扫描，改变库表结构，重写复杂的查询

### C.重构查询的方式

- 1.MySQL从设计上让连接和断开连接都很轻量级，在返回一个小的查询结果方面很高效
- 2.切分查询，将大查询切分成小查询，每个查询功能完全一样，只完成一小部分，每次只返回一小部分查询结果，可以避免锁住很多数据、占满事务日志、耗尽系统资源、阻塞很多小的但重要的查询
- 3.分解关联查询优势：

    - 让缓存的效率更高
    - 将查询分解后，执行单个查询可以减少锁的竞争
    - 在应用层做关联，可以更容易对数据库进行拆分，更容易做到高性能和可扩展
    - 查询本身效率也可能会有所提升
    - 可以减少冗余记录的查询
    - 相当于在应用中实现了哈希关联，而不是使用MySQL的嵌套循环关联

- 4.分解关联查询的场景：

    - 当应用能够方便地缓存单个查询的结果的时候
    - 当可以将数据分布到不同的MySQL服务器上的时候
    - 当能够使用IN()的方式代替关联查询的时候
    - 当查询中使用同一个数据表的时候

### D.查询执行的基础

- 1.查询执行路径

    - 客户端发送一条查询给服务器
    - 服务器先检查查询缓存，如果命中则立刻返回，否则进入下一阶段
    - 服务器端进行SQL解析、预处理，再由优化器生成对应的执行计划
    - MySQL根据优化器生成的执行计划，调用存储引擎的API来执行查询
    - 将结果返回给客户端

- 2.MySQL客户端和服务器之间的通信协议是“半双工”的，无法将一个消息切成小块独立来发送，没法进行流量控制，一旦一端开始发生消息，另一端要接收完整个消息才能响应它
- 3.MySQL通常需要等所有的数据都已经发送给客户端才能释放这条查询所占用的资源，所以接收全部结果并缓存通常可以减少服务器的压力
- 4.查询状态，SHOW FULL PROCESSLIST命令查看：

    - Sleep，线程正在等待客户端发送新的请求
    - Query，线程正在执行查询或者正在将结果发送给客户端
    - Locked，在MySQL服务器层，该线程正在等待表锁
    - Analyzing and statistics，线程正在收集存储引擎的统计信息，并生成查询的执行计划
    - Copying to tmp table [on disk]，线程正在执行查询，并且将其结果集都复制到一个临时表中，要么是在做GROUP
      BY操作，要么是文件排序操作，或者是UNION操作
    - Sorting result，线程正在对结果集进行排序
    - Sending data，线程可能在多个状态之间传送数据，或者在生成结果集，或者在向客户端返回数据

- 5.语法解析器和预处理，通过关键字将SQL语句进行解析，并生成一棵对应的“解析树”，解析器将使用MySQL语法规则验证和解析查询，预处理器则根据一些MySQL规则进一步检查解析树是否合法
- 6.查询优化器，找到最好的执行计划，使用基本成本的优化器，将尝试预测一个查询使用某种执行计划时的成本，并选择其中成本最小的一个，使用SHOW
  STATUS LIKE 'Last_query_cost';查看需要多少个数据页的随机查找
- 7.导致MySQL查询优化器选择错误的原因：

    - 统计信息不准确，Innodb不能维护一个数据表的行数的精确统计信息
    - 执行计划中的成本估算不等同于实际执行的成本
    - MySQL的最优可能和你想的最优不一样
    - MySQL从不考虑其他并发执行的查询
    - MySQL也并不是任何时候都是基于成本的优化
    - MySQL不会考虑不受其控制的操作的成本
    - 优化器有时候无法去估算所有可能的执行计划

- 8.MySQL能处理的优化类型：

    - 重新定义关联表的顺序
    - 将外链接转化成内链接
    - 使用等价变换规则
    - 优化COUNT()、MIN()和MAX()，在EXPLAIN中可以看到“Select tables optimized away”
    - 预估并转化为常数表达式，当检测到一个表达式可以转化为常数的时候，就会一直把该表达式作为常数进行优化处理
    - 覆盖索引扫描，当索引中的列包含所有查询中需要使用的列的时候，就可以使用索引返回需要的数据，而无须查询对应的数据行
    - 子查询优化
    - 提前终止查询，在发现已经满足查询需求的时候，MySQL总是能够立刻终止查询
    - 等值传播，如果两个列的值通过等式关联，那么MySQL能够把其中一个列的WHERE条件传递到另一列上
    - 列表IN()的比较，MySQL将IN()列表中的数据先进行排序，然后通过二分查找的方式来确定列表中的值是否满足条件

- 9.在服务器层有查询优化器，却没有保存数据和索引的统计信息，统计信息由存储引擎实现，不同的存储引擎可能会存储不同的统计信息
- 10.在MySQL中，每一个查询，每一个片段（包括子查询，甚至基于单表的SELECT）都可能是关联
- 11.对于UNION查询，MySQL先将一系列的单个查询结果放到一个临时表中，然后再重新读出临时表数据来完成UNION查询
- 12.MySQL对任何关联都执行“嵌套循环关联”操作，即MySQL先在一个表中循环取出单条数据，然后再嵌套到下一个表中寻找匹配的行，依次下去，直到找到所有表中匹配的行为止
- 13.全外连接就无法通过嵌套循环和回溯的方式完成，当发现关联表中没有找到任何匹配行的时候，则可能是因为关联恰好从一个没有任何匹配的表开始，MySQL不支持全外连接
- 14.关联查询优化器，会尝试在所有的关联顺序中选择一个成本最小的来生成执行计划树，如果可能，优化器会遍历每一个表然后逐个做嵌套循环计算每一棵可能的执行树的成本，最后返回一个最优的执行计划
- 15.如果有超过n个表的关联，那么需要检查n的阶乘关联顺序，称为“搜索空间”，搜索空间的增长速度非常快
- 16.无论如何排序都是一个成本很高的操作，所以从性能角度考虑，应尽可能避免排序或者尽可能避免对大量数据进行排序
- 17.当不能使用索引生成排序结果的时候，MySQL需要自己进行排序，如果数据量小则在内存中进行，如果数据量大则需要使用磁盘，MySQL将这个过程称为文件排序（filesort），即使完全是内存排序不需要任何磁盘文件时也是如此

### E.MySQL查询优化器的局限性

- 1.关联子查询：MySQL的子查询实现得非常糟糕，最糟糕的一类查询是WHERE条件中包含IN()的子查询语句，使用GROUP_CONCAT()在IN()
  中构造一个由逗号分隔的列表，或者使用EXISTS()来改写
- 2.UNION的限制：有时，MySQL无法将限制条件从外层“下推”到内层，这使得原本能够限制部分返回结果的条件无法应用到内层查询的优化上
- 3.MySQL无法利用多核特性来并行执行查询
- 4.MySQL不支持哈希关联，MariaDB已经实现了哈希关联
- 5.MySQL不支持松散索引扫描，5.0后版本在分组查询中需要找到分组的最大值和最小值时可以使用松散索引扫描
- 6.对于MIN()和MAX()查询，MySQL的优化做得并不好

### F.查询优化器的提示（hint）

- 1.HIGH_PRIORITY和LOW_PRIORITY，当多个语句同时访问某一个表的时候，哪些语句的优先级相对高些、哪些语句的优先级相对低些
-
2.DELAYED，对INSERT和REPLACE有效，会将使用该提示的语句立即返回给客户端，并将插入的行数据放入到缓冲区，然后在表空闲时批量将数据写入，并不是所有的存储引擎都支持，并且该提示会导致函数LAST_INSERT_ID()
无法正常工作
- 3.STRAIGHT_JOIN，可以放置在SELECT语句的SELECT关键字之后，也可以放置在任何两个关联表的名字之间。第一个用法是让查询中所有的表按照在语句中出现的顺序进行关联，第二个用法则是固定其前后两个表的关联顺序
- 4.SQL_SMALL_RESULT和SQL_BIG_RESULT，只对SELECT语句有效，它们告诉优化器对GROUP BY或者DISTINCT查询如何使用临时表及排序
- 5.SQL_BUFFER_RESULT，告诉优化器将查询结果放入到一个临时表，然后尽可能快地释放表锁
- 6.SQL_CACHE和SQL_NO_CACHE，告诉MySQL这个结果集是否应该缓存在查询缓存中
-
7.SQL_CALC_FOUND_ROWS，会计算除去LIMIT子句后这个查询要返回的结果集的总数，而实际上只返回LIMIT要求的结果集，可以通过函数FOUND_ROW()
获得这个值
- 8.FOR UPDATE和LOCK IN SHARE MODE，主要控制SELECT语句的锁机制，但只对实现了行级锁的存储引擎有效，仅InnoDB支持
- 9.USE INDEX、IGNORE INDEX和FORCE INDEX，告诉优化器使用或者不使用哪些索引来查询记录
- 10.MySQL5.0后新增的用来控制优化器行为的参数：

    - optimizer_search_depth，控制优化器在穷举执行时的限度
    - optimizer_prune_level，让优化器会根据需要扫描的行数来决定是否跳过某些执行计划
    - optimizer_switch，包含了一些开启/关闭优化器特性的标志位

### G.优化特定类型的查询

- 1.优化COUNT()查询

    - COUNT()是一个特殊的函数，有两种非常不同的作用：可以统计某个列值的数量，也可以统计行数，在统计列值时要求列值是非空的（不统计NULL）
    - COUNT()并不是会像我们猜想的那样扩展成所有的列，实际上，它会忽略所有的列而直接统计所有的行数，当MySQL确认括号内的表达值不可能为空时，实际上就是在统计行数
    - MyISAM的COUNT()函数只有没有任何WHERE条件下的COUNT()才非常快
    - 使用近似值，如EXPLAIN出来的优化器估算行数
    - 使用索引覆盖
    - 使用汇总表
    - 使用外部缓存系统

- 2.优化关联查询

    - 确保ON或者USING子句中的列上有索引
    - 确保任何的GROUP BY和ORDER BY中的表达式只涉及到一个表中的列
    - 当升级MySQL的时候需要注意：关联语法、运算符优先级等其他可能会发生变化的地方

- 3.优化子查询：尽可能使用关联查询代替，如果使用MySQL5.6以上或MariaDB则可以忽略这个建议
- 4.优化GROUP BY和DISTINCT

    - 使用索引优化
    - 当无法使用索引时，GROUP BY使用两种策略来完成：使用临时表或者文件排序来做分组
    - 尽可能的将WITH ROLLUP（超级聚合）功能移动应用程序中处理

- 5.优化LIMIT分页

    - 最简单的办法是尽可能地使用索引覆盖扫描，而不是查询所有的列，然后根据需要做一次关联操作再返回所需的列，select
      id,name,…… from table innert join (select id from table order by xxx limit 5000,5) as table1 USING(id);
    - offset会导致MySQL扫描大量不需要的行然后再抛弃掉，如果可以记录上次取数据的位置，下次就可以直接从该记录的位置开始扫描，可以避免使用offset
    - 使用预先计算的汇总表，或者关联到一个冗余表

- 6.优化UNION查询

    - 通过创建并填充临时表的方式来执行UNION查询，因此很多优化策略在UNION查询中都没法很好地使用，经常需要手工地将WHERE、LIMIT、ORDER
      BY等子句下推到UNION的各个子查询中
    - 除非确实需要服务器消除重复的行，否则就一定要使用UNION ALL

## 七、MySQL高级特性

### A.分区表

- 1.对用户来说，分区表是一个独立的逻辑表，但是底层由多个物理子表组成，实际上是对一组底层表的句柄对象（Handler Object）的封装
- 2.适用场景：

    - 表非常大以至于无法全部都放在内存中，或者只在表的最后部分有热点数据，其他均是历史数据
    - 分区表的数据更容易维护
    - 分区表的数据可以分布在不同的物理设备上，从而高效地利用多个硬件设备
    - 可以使用分区表来避免某些特殊的瓶颈
    - 如果需要，还可以备份和恢复独立的分区

- 3.使用限制：

    - 一个表最多只能有1024个分区
    - 在MySQL5.1中，分区表达式必须是整数，或者是返回整数的表达式。在MySQL5.5中，某些场景中可以直接使用列来进行分区
    - 如果分区字段中有主键或者唯一索引的列，那么所有主键列和唯一索引列都必须包含进来
    - 分区表中无法使用外键约束

- 4.使用分区表

    - 在数据量超大的时候，B-Tree索引就无法起作用了，除非是索引覆盖查询，否则数据库服务器需要根据索引扫描的结果回表，查询所有符合条件的记录，如果数据量巨大，将产生大量随机I/O

- 5.保证大数据量的可扩展性两个策略：

    - 命题扫描数据，不要任何索引
    - 索引数据，并分离热点

- 6.分区策略的问题：

    - NULL值会使分区过滤无效
    - 分区列和索引列不匹配
    - 选择分区的成本可能很高
    - 打开并锁住所有底层表的成本可能很高
    - 维护分区的成本可能很高
    - 所有分区都必须使用相同的存储引擎
    - 分区函数中可以使用的函数和表达式也有一些限制
    - 某些存储引擎不支持分区
    - 对于MyISAM的分区表，不能再使用LOAD INDEX INTO CACHE操作
    - 对于MyISAM表，使用分区表时需要打开更多多的文件描述符

- 7.查询优化

    - 很重要的一点是要在WHERE条件中带入分区列
    - 只能在使用分区函数的列本身进行比较时才能过滤分区，而不能根据表达式的值去过滤分区，即使这个表达式是分区函数也不行

### B.视图

- 1.视图本身是一个虚拟表，不存放任何数据，返回的数据是MySQL从其他表中生成的
- 2.MySQL使用两种算法：合并算法（MERGE）和临时表算法（TEMPTABLE），会尽可能地使用合并算法
- 3.如果视图中包含GROUP BY、DISTINCT、任何聚合函数、UNION、子查询等，只要无法在原表记录和视图记录中建立一一映射的场景中，MySQL都将使用临时表算法来实现视图
- 4.可更新视图（updatable view）是指可以通过更新这个视图来更新视图涉及的相关表，CHECK
  OPTION表示任何通过视图更新的行，都必须符合视图本身的WHERE条件定义
- 5.在重构schema的时候可以使用视图，使得在修改视图底层表结构的时候，应用代码还可能继续不报错运行
- 6.MySQL中不支持物化视图（指将视图结果数据存放在一个可以查看的表中，并定期从原始表中刷新数据到这个表中）
- 7.不会保存视图定义的原始SQL语句

### C.外键约束

- 1.使用外键是有成本的，通常要求每次在修改数据时都要在另外一张表中多执行一次查找操作
- 2.如果想确保两个相关表始终有一致的数据，那么使用外键比在应用程序中检查一致性的性能要高得多，在相关数据的删除和更新上，也比在应用中维护要更高效
- 3.外键会带来很大的额外消耗

### D.在MySQL内部存储代码

- 1.MySQL允许通过触发器、存储过程、函数的形式来存储代码，从5.1开始还可以在定时任务中存放代码，这个定时任务也被称为“事件”。存储过程和存储函数都被统称为“存储程序”
- 2.存储代码的优点：

    - 它在服务器内部执行，离数据最近，另外在服务器上执行还可以节省带宽和网络延迟
    - 这是一种代码重用，可以方便地统一业务规则，保证某些行为总是一致，所以也可以为应用提供一定的安全性
    - 它可以简化代码的维护和版本更新
    - 可以帮助提升安全，比如提供更细粒度的权限控制
    - 服务器端可以缓存存储过程的执行计划，这对于需要反复调用的过程，会大大降低消耗
    - 因为是在服务器端部署的，所以备份、维护都可以在服务器端完成
    - 可以在应用开发和数据库开发人员之间更好地分工

- 3.存储代码的缺点：

    - MySQL本身没有提供好用的开发和调试工具
    - 较之应用程序的代码，存储代码效率要稍微差些
    - 存储代码可能会给应用程序代码的部署带来额外的复杂性
    - 因为存储程序都部署在服务器内，所以可能有安全隐患
    - 存储过程会给数据库服务器增加额外的压力，而数据库服务器的扩展性相比应用服务器要差很多
    - MySQL并没有什么选项可以控制存储程序的资源消耗，所以在存储过程中的一个小错误，可能直接把服务器拖死
    - 存储代码在MySQL中的实现也有很多限制——执行计划缓存是连接级别的，游标的物化和临时表相同，异常处理也非常困难
    - 调试MySQL的存储过程是一件很困难的事情
    - 它和基于语句的二进投影日志复制合作得并不好

- 4.存储过程和函数的限制：

    - 优化器无法使用关键字DETERMINISTIC来优化单个查询中多次调用存储函数的情况
    - 优化器无法评估存储函数的执行成本
    - 每个连接都有独立的存储过程的执行计划缓存
    - 存储程序和复制是一组诡异组合

-
5.触发器：可以让你在执行INSERT、UPDATE或者DELETE的时候，执行一些特定的操作，可以在MySQL中指定是在SQL语句执行前触发还是在执行后触发，可以使用触发器实现一些强制限制，或者某些业务逻辑，否则，就需要在应用程序中实现这些逻辑
- 6.触发器的注意和限制：

    - 对每一个表的每一个事件，最多只能定义一个触发器
    - 只支持“基于行的触发”，也就是说，触发器是针对一条记录的，而不是针对整个SQL语句的，如果变更的数据集非常大的话，效率会很低
    - 触发器可以掩盖服务器背后的工作
    - 触发器可以掩盖服务器背后的工作，一个简单的SQL语句背后可能包含了很多看不见的工作
    - 触发器的问题也很难排查，如果某个性能问题和触发器相关，会很难分析和定位
    - 触发器可能导致死锁和锁等待
    - 触发器并不能一定保证更新的原子性

- 7.触发器的用处：

    - 实现一些约束、系统维护任务，以及更新反范式化数据的时候
    - 记录数据变更日志

- 8.事件：类似于Linux的定时任务，指定MySQL在某个时候执行一段SQL代码，或者每隔一个时间间隔执行一段SQL代码

### E.游标

- 1.MySQL在服务器端提供提供只读的、单向的游标，而且只能在存储过程或者更底层的客户端API中使用，指向的对象都是存储在临时表中而不是实际查询到的数据，所以总是只读的
- 2.会带来额外的性能开销
- 3.不支持客户端的游标

### F.绑定变量

- 1.当创建一个绑定变量SQL时，客户端向服务器发送了一个SQL语句的原型。服务器端收到这个SQL语句框架后，解析并存储这个SQL语句的部分执行计划，返回给客户端一个SQL语句处理句柄。以后每次执行这类查询，客户端都指定使用这个句柄
- 2.可以更高效地执行大量的重复语句：

    - 在服务器端只需要解析一次SQL语句
    - 在服务器端某些优化项的工作只需要执行一次，因为它会缓存一部分的执行计划
    - 以二进制的方式只发送参数和句柄，比起每次都发送ASC2码文本效率更高
    - 仅仅是参数——而不是整个查询语句——需要发送到服务器端，所以网络开销会更小
    - MySQL在存储参数的时候，直接将其存放到缓存中，不再需要在内存中多次复制

- 3.绑定变量相对也更安全。无须在应用程序中处理转义，一则更简单了，二则也大大减少了SQL注入和攻击的风险
- 4.最主要的用途就是在存储过程中使用，构建并执行“动态”的SQL语句
- 5.绑定变量的限制：

    - 绑定变量是会话级别的，所以连接之间不能共用绑定变量句柄
    - 在5.1版本之前，绑定变量的SQL是不能使用查询缓存的
    - 并不是所有的时候使用绑定变量都能获得更好的性能
    - 如果总是忘记释放绑定变量资源，则在服务器端很容易发生资源“泄漏”
    - 有些操作，比如BEGIN，无法在绑定变量中完成

### G.用户自定义函数

- 1.用户自定义函数（UDF）必须事先编译好并动态链接到服务器上，这种平台相关性使得UDF在很多方面都很强大，但一个错误也很可能让服务器直接崩溃，甚至扰乱服务器的内存或者数据

### H.插件

- 1.插件可以在MySQL中新增启动选项和状态值，还可以新增INFORMATION_SCHEMA表，或者在MySQL的后台执行任务等等
- 2.在5.1后支持的插件接口：

    - 存储过程插件
    - 后台插件，可以让程序在MySQL中运行，可以实现自己的网络监听、执行自己的定期任务
    - INFORMATION_SCHEMA插件，提供一个新的内存INFORMATION_SCHEMA表
    - 全文解析插件，提供一种处理文本的功能，可以根据自己的需求来对一个文档进行分词
    - 审计插件，在查询执行的过程中的某些固定点被调用，可以记录MySQL的事件日志
    - 认证插件，既可可以在MySQL客户端也可在它的服务器端，可以使用这类插件来扩展MySQL的认证功能

### I.字符集和校对

- 1.字符集是一种从二进制编码到某类字符符号的映射，可以参考如何使用一个字节来表示英文字母。“校对”是指一组用于某个字符集的排序规则
- 2.每种字符集都可能有多种校对规则，并且都有一个默认的校对规则，每个校对规则都是针对某个特定的字符集的，和其他的字符集没有关系
- 3.MySQL有很多的选项用于控制字符集，这些选项和字符集很容易混淆，只有基于字符的值才真正的“有”字符集的概念
- 4.MySQL的两类设置：创建对象时的默认设置、服务器和客户端通信时的设置
- 5.如果比较的两个字符串的字符集不同，MySQL会先将其转成同一个字符集再进行比较
- 6.一些需要注意的地方：

    - 诡异的character_set_database设置，当改变默认数据库的时候，这个变量也会跟着变，所以当连接到MySQL实例上又没有指定要使用的数据库时，默认值会和character_set_server相同
    - LOAD DATA INFILE，当使用时，数据库总是将文件中的字符按照字符集character_set_database来解析
    - SELECT INTO OUTFILE，MySQL会将结果不做任何转码地写入文件
    - 嵌入式转义序列，MySQL会根据character_set_client的设置来解析转义序列

- 7.某些字符集和校对规则可能会需要更多的CPU操作，可能会消耗更多的内存和存储空间，甚至还会影响索引的正常使用

    - 不同的字符集和校对规则之间的转换可能会带来额外的系统开销
    - 只有排序查询要求的字符集与服务器数据的字符集相同的时候，才能使用索引进行排序
    - 为了能够适应各种字符集，包括客户端字符集、在查询中显式指定的字符集，MySQL会在需要的时候进行字符集转换

### J.全文索引

- 1.MyISAM的全文索引作用对象是一个“全文集合”，这可能是某个数据表的一列，也可能是多个列
- 2.可以根据WHERE子句中的MATCH AGAINST来区分查询是否使用全文索引
- 3.在使用全文索引进行排序的时候，MySQL无法再使用索引排序，如果不想使用文件排序的话，就不要在查询中使用ORDER BY子句
- 4.在布尔搜索中，用户可以在查询中自定义某个被搜索的词语的相关性，可能通过一些前缀修饰符来定制搜索
- 5.全文索引在INSERT、UPDATE、DELETE中的操作代价很大
- 6.全文索引会影响索引选择、WHERE子句、ORDER BY等：

    - 如果查询中使用了MATCH AGAINST子句，而对应列上又有可用的全文索引，那么MySQL就一定会使用这个全文索引
    - 全文索引只能用作全文搜索匹配
    - 全文索引不存储索引列的实际值，也就不可能用作索引覆盖扫描
    - 除了相关性排序，全文索引不能用作其他的排序

- 7.全文索引的配置和优化：

    - 经常使用OPTIMIZE TABLE来减少碎片，如果是I/O密集型的定期进行全文索引重建
    - 保证索引缓存足够大
    - 提供一个好的停用词表
    - 忽略一些太短的单词
    - 导入大量数据时，最好通过命令DISABLE KEYS来禁用全文索引，然后导入结束后使用ENABLE KEYS来建立全文索引
    - 如果数据集特别大，则需要对数据进行手动分区，然后将数据分布到不同的节点，再做并行的搜索

### K.分布式（XA）事务

- 1.XA事务中需要有一个事务协调器来保证所有的事务参与者都完成了准备工作。如果协调器收到所有的参与者都准备好的消息，就会告诉所有的事务可以提交了，MySQL在这个XA事务过程中扮演一个参与者的角色，而不是协调者
- 2.因为通信延迟和参与者本身可能失败，所以外部XA事务比内部消耗会更大

### L.查询缓存

- 1.MySQL查询缓存保存查询返回的完整结果，当查询命中该缓存，MySQL会立刻返回结果，跳过了解析、优化和执行阶段
- 2.MySQL判断缓存命中的方法很简单：缓存放在一个引用表中，通过一个哈希值引用，这个哈希值包括了如下因素，即查询本身、当前要查询的数据库、客户端协议的版本等一些其他可能会影响返回结果的信息
- 3.当判断缓存是否命中时，MySQL不会解析、“正规化”或者参数化查询语句，而是直接使用SQL语句和客户端发送过来的其他原始信息。任何字符上的不同，例如空格、注释——都会导致缓存的不命中
- 4.当查询语句中有一些不确定的数据时，则不会被缓存，例如包含函数NOW()或者CURRENT_DATE()
  的查询不会被缓存，只要包含任何用户自定义函数、存储函数、用户变量、临时表、mysql库中的系统表，或者任何包含列级别权限的表，都不会被缓存
- 5.打开查询缓存对读和写操作都会带来额外的消耗：

    - 读查询在开始之前必须先检查是否命中缓存
    - 如果这个读查询可以被缓存，那么当完成执行后，MySQL若发现查询缓存中没有这个查询，会将其结果存入查询缓存，这会带来额外的系统消耗
    - 当向某个表写入数据的时候，MySQL必须将对应表的所有缓存都设置失效，如果查询缓存非常大或者碎片很多，这个操作就可能会带来很大系统消耗

- 6.对于需要消耗大量资源的查询通常都是非常适合缓存的
- 7.缓存未命中：

    - 查询语句无法被缓存
    - MySQL从未处理这个查询
    - 查询缓存的内存用完了
    - 查询缓存还没有完成预热
    - 查询语句之前从未执行过
    - 缓存失效操作太多了

- 8.缓存参数配置：

    - query_cache_type，是否打开查询缓存
    - query_cache_size，查询缓存使用的总内存空间
    - query_cache_min_res_unit，在查询缓存中分配内存块时的最小单位，可以帮助减少由碎片导致的内存空间浪费
    - query_cache_limit，MySQL能够缓存的最大查询结果
    - query_cache_wlock_invalidate，如果某个数据表被其他的连接锁住，是否仍然从查询缓存中返回结果

- 9.InnoDB和查询缓存

    - 事务是否可以访问查询缓存取决于当前事务ID，以及对应的数据表上是否有锁
    - 如果表上有任何的锁，那么对这个表的任何查询语句都是无法被缓存的

- 10.通用查询缓存优化：

    - 用多个小表代替一个大表对查询缓存有好处
    - 批量写入时只需要做一次缓存失效，所以相比单条写入效率更好
    - 因为缓存空间太大，在过期操作的时候可能会导致服务器僵死，控制缓存空间的大小
    - 无法在数据库或者表级别控制查询缓存，但是可以通过SQL_CACHE和SQL_NO_CACHE来控制某个SELECT语句是否需要进行缓存
    - 对于 写密集型的应用来说，直接禁用查询缓存可能会提高系统的性能
    - 因为对互斥信号量的竞争，有时直接关闭查询缓存对读密集型的应用也会有好处

## 八、优化服务器设置

### A.MySQL配置的工作原理

- 1.任何打算长期使用的设置都应该写到全局配置文件，而不是在命令行特别指定
- 2.常用变量和动态修改它们的效果：

    - key_buffer_size，可以一次性为键缓冲区（key buffer，也叫键缓存key cache）分配所有指定的空间
    - table_cache_size，不会立即生效——会延迟到下次有线程打开表才有效果，如果值大于缓存中表的数量，线程可以把最新打开的表放入缓存，如果比缓存中的表数小，将从缓存中删除不常使用的表
    - thread_cache_size，不会立即生效——将在下次有连接被关闭时产生效果，检查缓存中是否还有空间来缓存线程，如果有空间，则缓存该线程以备下次连接征用，如果没空间，将销毁该线程而不再缓存
    - query_cache_size，一次性分配并初始化这块内存
    - read_buffer_size，只在有查询需要使用时才会为该缓存分配内存
    - read_rnd_buffer_size，只在有查询需要使用时才会为该缓存分配内存，并且只会分配需要的内存大小而不是全部指定的大小
    - sort_buffer_size，只会在有查询需要做排序时才会为该缓存分配内存

- 3.对于连接级别的设置，不要轻易地在全局级别增加它们的值，除非确认这样做是对的
- 4.设置变量时请小心，并不是值越大就越好，而且如果设置的值太高，可能更容易导致问题：可能会由于内存不足导致服务器内存交换，或者超过地址空间
- 5.不要期望通过建立一套基准测试方案，然后不断迭代地验证对配置项的修改来找到最佳配置方案，而要把时间花在检查备份、监控执行计划的变动之类的事情上，可能会更有意义

### B.什么不该做

- 1.不要根据一些“比率”来调优：例如缓存命中率跟缓存是否过大或过小没有关系2.不要使用调优脚本
- 3.不要相信很流行的内存消耗公式

### C.创建MySQL配置文件

- 1.MySQL编译的默认设置并不都是靠谱的，虽然其中大部分都比较合适
- 2.从一个比默认值大一点但不是大得很离谱的安全值开始是比较好的，MySQL的内存利用率并不总是可以预测的：它可能依赖很多的因素，例如查询的复杂性和并发性
- 3.配置服务器的首选途径：了解它内部做了什么，以及参数之间如何相互影响，然后再决定
- 4.open_files_limit，在Linux系统上设置得尽可能大，如果参数不够大，将会踫到24号错误“打开的文件太多（too many open files）”
- 5.每隔60秒查看状态变量的增量变化：mysqladmin extended-status ri60

### D.配置内存使用

- 1.配置MySQL正确地使用内存量对高性能是至关重要的，内存消耗分为两类：可以控制的内存和不可以控制的内存
- 2.配置内存：

    - 确定可以使用的内存上限
    - 确定每个连接MySQL需要使用多少内存
    - 确定操作系统需要多少内存才够用
    - 把剩下的内存全部给MySQL的缓存

- 3.MySQL保持一个连接（线程）只需要少量的内存，它还需要一个基本量的内存来执行任何给定查询，需要为高峰时期执行的大量查询预留好足够的内存，否则，查询执行可能因为缺乏内存而导致执行效率不佳或执行失败
- 4.跟查询一样，操作系统也需要保留足够的内存给它工作，如果没有虚拟内存正在交换（Paging）到磁盘，就是表明操作系统内存足够的最佳迹象
- 5.如果服务器只运行MySQL，所有不需要为操作系统以及查询处理保留的内存都可以用作MySQL缓存
- 6.大部分情况下最重要的缓存：

    - InnoDB缓冲池
    - InnoDB日志文件和MyISAM数据的操作系统缓存
    - MyISAM键缓存
    - 查询缓存
    - 无法手工配置的缓存，例如二进制日志和表定义文件的操作系统缓存

- 7.InnoDB缓冲池并不仅仅缓存索引：它还会缓存行的数据、自适应哈希索引、插入缓冲（Insert
  Buffer）、锁，以及其他内部数据结构，还使用缓冲池来帮助延迟写入，InnoDB严重依赖缓冲池
- 8.如果事先知道什么时候需要关闭InnoDB，可以在运行时修改innodb_max_dirty_pages_pct变量，将值改小，等待刷新纯种清理缓冲池，然后在脏页数量较少时关闭，可以监控the
  Innodb_buffer_pool_pages_dirty状态变量或者使用innotop来监控SHOW INNODB STATUS来观察脏页的刷新量
  -
  7.MyISAM的键缓存也被称为键缓冲，默认只有一个键缓存，但也可以创建多个，MyISAM自身只缓存索引，不缓存数据，最重要的配置项是key_buffer_size，不要超过索引的总大小，或者不超过操作系统缓存保留总内存的25%-50%，以更小的为准
- 8.了解MyISAM索引实际上占用多少磁盘空间，查询INFORMATION_SCHEMA表的INDEX_LENGTH字段，把它们的值相加，就可以得到索引存储占用空间
- 9.块大小也是很重要的（特别是写密集型负载），因为它影响了MyISAM、操作系统缓存，以及文件系统之间的交互，如果缓存块太小，可能会踫到写时读取
-
10.线程缓存保存那些当前没有与连接关联但是准备为后面新的连接服务的线程，当一个新的连接创建时，如果缓存中有线程存在，MySQL从缓存中删除一个线程，并且把它分配给这个新的连接，当连接关闭时，如果线程缓存还有空间的话，MySQL又会把线程放回缓存，如果没有空间的话，MySQL会销毁这个线程
- 11.thread_cache_size变量指定了MySQL可以保持在缓存中的线程数，一般不需要配置这个值，除非服务器会有很多连接请求
- 12.表缓存（Table
  Cache）和线程缓存的概念是相似的，但存储的对象代表的是表，缓存对象包含相关表.frm文件的解析结果，加上其他数据。表缓存可以重用资源，让服务器避免修改MyISAM文件头来标记表“正在使用中”，对InnoDB的重要性要小得多
- 12.表缓存的缺点是，当服务器有很多MyISAM表时，可能会导致关机时间较长，因为关机前索引块必须完成刷新，表都必须标记为不再打开
- 13.InnoDB数据字典（Data Dictionary），InnoDB自己的表缓存，当InnoDB打开一张表，就增加了一个对应的对象到数据字典
- 14.InnoDB没有将统计信息持久化，而是在每次打开表时重新计算，5.6以后可以打开innodb_use_sys_stats_table选项来持久化存储统计信息到磁盘
- 15.可以关闭InnoDB的innodb_stats_on_metadata选项来避免耗时的表统计信息刷新
- 16.如果可以，最好把innodb_open_files的值设置得足够大以使服务器可以保持所有的.ibd文件同时打开

### E.配置MySQL的I/O行为

- 1.InnoDB I/O配置

    - InnoDB不仅允许控制怎么恢复，还允许控制怎么打开和刷新数据（文件），这会对恢复和整体性能产生巨大的影响
    - 对于常见的应用，最重要的一小部分内容是InnoDB日志文件大小、InnoDB怎样刷新它的日志缓冲，以及InnoDB怎样执行I/O
    - 整体的日志文件大小受控于innodb_log_file_size和innodb_log_files_in_group两个参数，对写性能非常重要
    - 通常不需要把日志缓冲区设置得非常大，推荐的范围是1MB-8MB，除非要写很多相当大的BLOB记录
    - 可以通过检查SHOW INNODB
      STATUS的输出中LOG部分来监控InnoDB的日志和日志缓冲区的I/O性能，通过观察Innodb_os_log_written状态变量来查看InnodDB对日志文件写出了多少数据。日志文件的全部大小，应该足够容纳服务器一个小时的活动内容
    - 如果和持久相比更在乎性能，可以修改innodb_flush_log_at_trx_commit变量来控制日志缓冲刷新的频繁程度
    - 使用innodb_flush_method选项可以配置InnoDB如何跟文件系统相互作用
    - InnoDB用表空间并不只是存储表和索引，还保存了回滚日志、插入缓冲（Insert Buffer）、双写缓冲（Doublerite Buffer）及其他内部数据结构
    - 为了控制写入速度，可以设置innodb_max_purge_lag变量为一个大于0的值，这个值表示InnoDB开始延迟后面的语句更新数据之前，可以等待被清除的最大的事务数量
    -
    双写缓冲是表空间的一个特殊的保留区域，在一些连续的块中足够保存100个页，本质上是一个最近写回的页面的备份拷贝，当InnoDB从缓冲池刷新页面到磁盘时，首先把它们写（或者刷新）到双写缓冲，然后再把它们写到其所属的数据区域中，这可以保证每个页面的写入都是原子并且持久化的
    - 设置innodb_doublewrite为0来关闭双写缓冲
    - sync_binlog选项控制MySQL怎么刷新二进制日志到磁盘
    - 二进制日志，如果希望使用expire_logs_days选项来自动清理旧的二进制日志，就不要用rm命令去删

- 2.MyISAM的I/O配置

    - MyISAM通常每次写操作之后就把索引变更刷新磁盘，批量操作会更快一些
    - 通过设置delay_key_write变量，可以延迟索引的写入，修改的键缓冲块直到表被关闭才会刷新
    - myisam_recover选项控制MyISAM怎样寻找和修复错误
    - 内存映射使得MyISAM直接通过操作系统的页面缓存访问.MYD文件，避免系统调用的开销，5.1后可以通过myisam_use_mmap选项打开内存映射

### F.配置MySQL并发

- 1.InnoDB并发配置

    - InnoDB有自己的“线程调度器”控制线程怎么进入内核访问数据，以及它们在内核中一次可以做哪些事，最基本的限制并发的方式是使用innodb_thread_concurrency变量，它会限制一次性可以有多少线程进入内核
    - 并发值 = CPU数量 磁盘数量 2，在实践中使用更小的值会更好一点

- 2.MyISAM并发配置

    - 尽管MyISAM是表级锁，它依然可以一边读取，一边并发追加新行，这种情况下只能读取到查询开始时的所有数据，新插入的数据是不可见的，这样可以避免不一致读
    - 通过设置concurrent_insert这个变量，可以配置MyISAM打开并发插入
    - 让INSERT、REPLACE、DELETE、UPDATE语句的优先级比SELECT语句更低，设置low_priority_updates选项就可以

### G.基于工作负载的配置

- 1.当服务器满载情况下运行时，请尝试记录所有的查询语句，因为这是最好的方式来查看哪种类型的查询语句占用资源最多，同时创建processlist快照，通过state或者command字段来聚合它们
- 2.优化BLOB和TEXT场景

    - BLOB有几个限制使得服务器对它的处理跟其他类型不一样，不能在内存临时表中存储BLOB值，效率很低
    - 通过SUBSTRING()函数把值转换为VARCHAR
    - 让临时表更快一些：放在基于内存的文件系统
    - 如果使用的是InnoDB，也可以调大InnoDB日志缓冲大小
    - 大字段在InnoDB里可能浪费大量空间
    - 扩展存储禁用了自适应哈希，因为需要完整地比较列的整个长度，才能发现是不是正确的数据
    - 太长的值可能使得查询中作为WHERE条件不能使用索引
    - 如果一张表里有很多大字段，最好是把它们组合起来单独存到一个列里面
    - 有时候可以把大字段用COMPRESS()压缩后再存为BLOB，或者发送到MySQL前在应用程序中进行压缩

- 3.优化排序（Filesorts）：当MySQL必须排序BLOG或TEXT字段时，它只会使用前缀，然后忽略剩下部分的值

### H.完成基本配置

- 1.tmp_table_size和max_heap_table_size，这两个设置控制使得Memory引擎的内存临时表能使用多大的内存
- 2.max_connections，这个设置的作用就像一个紧急刹车，以保证服务器不会因应用程序激增的连接而不堪重负，设置得以容纳正常可能达到的负载，并且要足够安全，能保证允许你登录和管理服务器
- 3.thread_cache_size，可以通过观察服务器一段时间的活动，来计算一个有理有据的值，250的上限是一个不错的估算值
- 4.table_cache_size，应该被设置得足够大，以避免总是需要重新打开和重新解析表的定义，可能通过观察Open_tables的值及其在一段时间的变化来检查该变量

### I.安全和稳定的设置

- 1.expire_logs_days，如果启用了二进制日志，应该打开这个选项，可以让服务器在指定的天数之后清理旧的二进制日志
- 2.max_allowed_packet，防止服务器发送太大的包，也会控制多大的包可以被接收
- 3.max_connect_errors，如果知道服务器可以充分抵御蛮力攻击，可以把这个值设得非常大，以有效地禁用主机黑名单
- 4.skip_name_resolve，禁用了另一个网络相关和鉴权谁相关的陷阱：DNS查找
- 5.sql_mode，不建议修改
- 6.sysdate_is_now，可能导致与应用预期向后不兼容的选项
- 7.read_only，禁止没有特权的用户在备库做变更，只接受从主库传输过来的变更，不接受从应用来的变更，可以把备库设置为只读模式
- 8.skip_slave_start，阻止MySQL试图自动启动复制
- 9.slave_net_timeout，控制备库发现跟主库的连接已经失败并且需要重连之前等待的时间，设置为一分钟或更短
-
10.sync_master_info、sync_relay_log、sync_relay_log_info，5.5以后版本可用，解决了复制中备库长期存在的问题：不把它们的状态文件同步到磁盘，所以服务器崩溃后可能需要人来猜测复制的位置实际上在主库是哪个位置，并且可能在中继日志（Relay
Log）里有损坏

### J.高级InnoDB设置

- 1.innodb，如果设置为FORCE，只有在InnoDB可以启动时，服务器才会启动
- 2.innodb_autoinc_lock_mode，控制InnoDB如何生成自增主键值
- 3.innodb_buffer_pool_instances，在5.5以后，可以把缓冲池切分为多段，在高负载的多核机器上提升MySQL可扩展性的一个重要方式
- 4.innodb_io_capacity，有时需要把这个设置得相当高，才能稳定地刷新脏页
- 5.innodb_read_io_threads和innodb_write_io_threads，控制有多少后台线程可以被I/O操作使用
- 6.innodb_strict_mode，让MySQL在某些条件下把警告改成抛错，尤其是无效的或者可能有风险的CREATE TABLE选项
- 7.innodb_old_blocks_time，指定一个页面从LRU链表的“年轻”部分转移到“年老”部分之前必须经过的毫秒数，默认为0，设置为1000毫秒（1秒）非常有效

## 九、操作系统和硬件优化

### A.什么限制了MySQL的性能

- 1.当数据可以放在内存中或者可以从磁盘中以足够快的速度读取时，CPU可能出现瓶颈，把大量的数据集完全放到大容量的内存中，以现在的硬件条件完全是可行的
- 2.I/O瓶颈，一般发生在工作所需的数据远远超过有效内存容量的时候，如果应用程序是分布在网络上的，或者如果有大量的查询和低延迟的要求，瓶颈可能转移到网络上

### B.如何为MySQL选择CPU

- 1.可以通过检查CPU利用率来判断是否是CPU密集型的工作负载，还需要看看CPU使用率和大多数重要的查询的I/O之间的平衡，并注意CPU负载是否分配均匀
- 2.当遇到CPU密集型的工作时，MySQL通常可以从更快的CPU中获益，但还依赖于负载情况和CPU数量
- 3.MySQL复制也能在高速CPU下工作得非常好，而多CPU对复制的帮助却不大
- 4.多CPU在联机事务处理（OLTP）系统的场景中非常有用，在这样的环境中，并发可能成为瓶颈

### C.平衡内存和磁盘资源

- 1.配置大量内存最终目的是避免磁盘I/O，最关键的是平衡磁盘的大小、速度、成本和其他因素，以便为工作负载提供高性能的表现
- 2.设计良好的数据库缓存（如InnoDB缓冲池），其效率通常超过操作系统的缓存，因为操作系统缓存是为通用任务设计的
- 3.数据库服务器同时使用顺序和随机I/O，随机I/O从缓存从受益最多
- 4.每个应用程序都有一个数据的“工作集”——就是这个工作确实需要用到的数据
- 5.工作集包括数据和索引，所以应该采用缓存单位来计数，一个缓存单位是存储引擎工作的数据最小单位
- 6.找到一个良好的内存/磁盘比例最好的方式是通过试验和基准测试
- 7.硬盘选择考虑因素：存储容量、传输速度、访问时间、主轴转速、物理尺寸
- 8.MySQL如何扩展到多个磁盘上取决于存储引擎和工作负载，InnoDB能很好地扩展到多个硬盘驱动器，然而，MyISAM的表锁限制其写的可扩展性，因此写繁重的工作加在MyISAM上，可能无法从多个驱动器中收益

### D.固态存储

- 1.高质量闪存设备具备：

    - 相比硬盘有更好的随机读写性能
    - 相比硬盘有更好的顺序读写性能
    - 相比硬盘能更好地支持并发
    - 提升随机I/O和并发性

- 2.闪存的最重要特征是可以迅速完成多次小单位读取，但是写入更有挑战性。闪存不能在没有做擦除操作前改写一个单元（Cell），并且一次必须擦除一个大块。擦除周期是缓慢的，并且最终会磨损整个块
- 3.垃圾收集对理解闪存很重要。为了保持一些块是干净的并且可以被写入，设备需要回收脏块。这需要设备上有一些空闲空间
- 4.许多设备被填满后会开始变慢，速度下降是由于没有空闲块时必须等待擦写完成所造成的
- 5.固态存储最适合使用在任何有着大量随机I/O工作负载的场景下，随机I/O通常是由于数据大于服务器的内存导致的，闪存设备可能大大缓解这种问题
- 6.单线程工作负载也是另一个闪存的潜在应用场景
- 7.闪存也可以为服务器整合提供巨大的帮助
- 8.Flashcache，磁盘和内存技术的结合，适合以读为主的I/O密集型负载，并且工作集太大，用内存优化并不经济的情况
- 9.优化固态存储上的MySQL

    - 增加InnoDB的I/O容量
    - 让InnoDB日志文件更大
    - 把一些文件从闪存转移到RAID
    - 禁用预读
    - 配置InnoDB刷新算法
    - 禁用双写缓冲的可能
    - 限制插入缓冲大小，插入缓冲设计来用于减少当更新行时不在内存中的非唯一索引引起的随机I/O
    - InnoDB的页大小
    - 优化InnoDB页面校验（Checksum）的替代算法

### E.为备库选择硬件

- 1.通常需要跟主库差不多的配置

### F.RAID性能优化

- 1.RAID可以帮助做冗余、扩展存储容量、缓存，以及加速
- 2.RAID 0：如果只是简单的评估成本和性能，是成本最低和性能最高的RAID配置
- 3.RAID 1：在很多情况下提供很好的读性能，并且在不同的磁盘间冗余数据，所以有很好的冗余性，非常适合用来存放日志或者类似的工作
- 4.RAID
  5：通过分布奇偶校验把数据分散到多个磁盘，如果任何一个盘的数据失效，都可以从奇偶校验块中重建，但如果有两个磁盘失效了，则整个卷的数据无法恢复，最经济的冗余配置。随机写是昂贵的，存放数据或者日志是一种可接受的选择，或者是以读为主的业务
- 5.RAID 10：对数据存储是个非常好的选择，由分片的镜像组成，对读和写都有良好的扩展性
- 6.RAID 50：由条带化的RAID 5组成

### G.SAN和NAS

- 1.SAN（Storage Area Network）和NAS（Network-Attached Storage）是两个外部文件存储设备加载到服务器的方法，访问SAN设备时通过块接口，NAS设备通过基于文件的协议来访问
- 2.SAN允许服务器访问非常大量的硬盘驱动器，并且通常配置大容量智能高速缓存来缓冲写入
- 3.哪些工作放在SAN上不合适：执行大量的随机I/O的单线程任务
- 4.SAN的应用：
- 备份，可以只备份SAN
- 简化容量规划
- 存储整合还是服务器整合
- 高可用
- 服务器之间的交互
- 成本

### H.使用多磁盘卷

- 1.二进制日志和数据文件分离的真正的优势，是减少事故中同时丢失数据和日志文件的可能性
- 2.如果有很多磁盘，投入一些给事务日志可能会从中受益

### I.网络配置

- 1.在生产服务器上启用skip_name_resolve是个好主意，损坏或缓慢的DNS解析对许多应用程序都是个问题，对MySQL尤严重，如果启用skip_name_resolve选项，MySQL将不会做任何DNS查找的工作
- 2.可以通过MySQL的back_log选项控制MySQL的传入TCP连接队列的大小，在每秒有很多连接创建和销毁的环境中，默认值50是不够的
- 3.网络物理隔离也是很重要的因素，尽可能避免实时的跨数据中心的操作是明智的

### J.选择操作系统

- 1.一般企业级的MySQL部署在Windows上，但一般的企业级MySQL更多的还是部署在类UNIX操作系统上

### K.选择文件系统

- 1.如果可能，最好使用日志文件系统，如ext3、ext4、XFS、ZFS或者JFS
- 2.可以调整文件系统的预读行为，因为这可能也是多余的

### L.选择磁盘队列调度策略

- 1.在GUN/Linux上，队列调度决定了到块设备的请求实际上发送到底层设备的顺序，默认情况下使用cfq（Completely Fair
  Queueing，完全公平排队）策略，在MySQL的工作负载类型下，cfq会导致很差的响应时间，因为会在队列中延迟一些不必要的请求
- 2.cfq之外的两个选项都适合服务器级的硬件，noop调度适合没有自己的调度算法的设备，deadline则对RAID控制器和直接使用的磁盘都工作良好

### M.线程

- 1.MySQL每个连接使用一个线程，另外还有内部处理线程、特殊用途的线程，以及所有存储引擎创建的线程
- 2.MySQL确实需要内核级线程的支持，而不只是用户级线程，这样才能更有效地使用多个CPU，另外也需要有效的同步原子

### N.内存交换区

- 1.内存交换对MySQL性能影响是很糟糕的，它破坏了缓存在内存的目的，并且相对于使用很小的内存做缓存，使用交换区的性能更差
- 2.在GNU/Linux上，可以用vmstat来监控内存交换，最好查看si和so列报告的内存交换I/O活动，这比看swpd列报告的交换区利用率更重要，最佳为0
- 3.设置/proc/sys/vm/swappiness为一个很小的值
- 4.修改存储引擎怎么读取和写入数据，使用innodb_flush_method=0_DIRECT减轻I/O压力
- 5.使用MySQL的memlock配置项，可以把MySQL锁定在内存

### O.操作系统状态

- 1.vmstat

    - vmstat 5，每隔5秒刷新一次
    - procs，r列显示多少进程正在等待CPU，b列显示多少进程正在不可中断地休眠
    - memory，swpd列显示多少块被换出到了磁盘，剩下的三个列显示了多少块是空闲的、多少块正在被用作缓冲，以及多少正在被用作操作系统的缓存
    - swap，显示页面交换活动
    - io，显示有多少块从块设备读取（ bi）和写出（bo）
    - system，显示了每秒中断（in）和上下文切换（cs）的数量
    - cpu，显示所有的CPU时间花费在各类操作的百分比

- 2.iostat

    - iostats -dx 5，每5秒刷新
    - rrqm/s和wrqm/s，每秒合并的读和写请求，意味着操作系统从队列中拿出多个逻辑请求合并为一个请求到实际磁盘
    - r/s和w/s，每秒发送到设备的读和写请求
    - rsec/s和wsec/s，每秒读和写的扇区数
    - avgrq-sz，请求的扇区数
    - avgqu-sz，在设备队列中等待的请求数
    - await，磁盘排除上花费的毫秒数
    - svctm，服务请求花费的毫秒数，不包括排除时间
    - %util，至少有一个活跃请求所占时间的百分比

- 3.CPU密集型的机器，vmstat输出通常在us列会有一个很高的值，也可能在sy列有很高的值
- 4.I/O密集型工作负载下，vmstat会显示很多处理器在非中断休眠（b列）状态，并且wa这一列的值很高
- 5.发生内存交换的机器可能在swpd列有一个很高的值

## 十、复制

### A.复制概述

- 1.MySQL支持两种复制方式：基于行的复制和基于语句的复制，都是通过在主库上记录二进制日志、在备库重放日志的方式来实现异步的数据复制
- 2.复制通常不会增加主库的开销，主要是启用二进制日志带来的开销，但出于备份或及时从崩溃中恢复的目的，这点开销也是必要的
- 3.通过复制可以将读操作指向备库来获得更好的读扩展，但对于写操作，除非设计得当，否则并不适合通过写复制来扩展写操作
- 4.复制解决的问题：

    - 数据分布
    - 负载均衡
    - 备份
    - 高可用性和故障切换
    - MySQL升级测试

### B.配置复制

- 1.在每台服务器上创建复制帐号

    - 用来监控和管理复制的帐号需要REPLICATION CLIENT权限，并且针对这两种目的使用同一个帐号更加容易
    - 如果在主库上建立了帐号，然后从主库将数据克隆到备库时，备库也就设置好了——变成主库所需要的配置

- 2.配置主库和备库

    - 必须明确地指定一个唯一的服务器ID
    - 有时候只开启了二进制日志，但却没有开启log_slave_updates，可能会踫到一些奇怪的现象
    - 如果可能的话，最好使用read_only配置选项，会阻止任何没有特权权限的线程修改数据

- 3.通知备库连接到主库并从主库复制数据
- 4.推荐的复制配置

    - sync_binlog =1，在提交事务前会将二进制日志同步到磁盘上，保证在服务器崩溃时不会丢失事件
    - 如果无法容忍服务器崩溃导致表损坏，推荐使用InnoDB
    - 推荐明确指定二进制日志的名字，log_bin=/var/lib/mysql/mysql-bin
    - 在备库上为中继日志指定绝对路径，relay_log
    - 如果正在使用5.5并且不介意额外的fsync()导致的性能开销，最好设置：sync_master_info，sync_relay_log，sync_relay_log_info

### C.复制的原理

- 1.基于语句的复制

    - 5.0之前只支持基于语句的复制（也称为逻辑复制），主库会记录那些造成数据更改的查询，当备库读取并重放这些事件时，实际上只是把主库上执行过的SQL再执行一遍
    - 好处是实现相当简单，日志更加紧凑，不会占用太多带宽
    - 问题是基于语句的方式可能并不如其看起来那么便利，还存在一些无法被正确复制的SQL，更新必须是串行的这需要更多的锁

- 2.基于行的复制

    - 5.1开始支持，会将实际数据记录在二进制日志中，跟其他数据库的实现比较想像
    - 好处是可以正确地复制每一行，一些语句可以被更加有效地复制
    - 如果使用全表更新，则开销会很大，因为每一行的数据都会被记录到二进制日志中，这使得二进制日志事件非常庞大，并且会给主库上记录日志和复制增加额外的负载，更慢的日志记录则会降低并发度

- 3.基于行或基于语句：哪种更优

    - 基于语句的复制模式的优点：当主备的模式不同时，逻辑复制能够在多种情况下工作；基于语句的方式执行复制的过程基本上就是执行SQL语句
    - 基于语句的复制模式的缺点：很多情况下通过基于语句的模式无法正确复制，如果正在使用触发器或者存储过程，就不要使用基于语句的复制模式，除非能够清楚地确定不会踫到复制的问题
    - 基于行的复制模式的优点：几乎没有基于行的复制模式无法处理的场景；可能减少锁的使用，并不要求这种强串行化是可重复的；会记录数据变更；占用更少的CPU；能够帮助更快地找到并解决数据不致的情况
    - 基于行的复制模式的缺点：无法判断执行了哪些SQL；无法知道服务器在做什么；在某些情况下，例如找不到要修改的行时，基于行的复制可能会导致复制停止

- 4.复制文件

    - mysql-bin.index，二进制日志文件
    - mysql-relay-bin-index，中继日志的索引文件
    - master.info，保存备库连接到主库所需要的信息
    - relay-log.info，包含了当前备库复制的二进制日志和中继日志坐标

- 5.发送复制事件到其他备库：log_slave_updates，可以让备库变成其他服务器的主库
- 6.复制过滤选项

    - 在主库上过滤记录到二进制日志中的事件
    - 在备库上过滤记录到中继日志的事件

### D.复制拓扑

- 1.基本原则：

    - 一个MySQL备库实例只能有一个主库
    - 每个备库都必须有一个唯一的服务器ID
    - 一个主库可以有多个备库
    - 如果打开了log_slave_updates选项，一个备库可以把其主库上的数据变化传播到其他备库

- 2.一主库多备库
- 3.主动-主动模式下的主主复制：auto_increment_increment和auto_increment_offset可以让MySQL自动为INSERT语句选择不互相冲突的值
- 4.主动-被动模式下的主主复制：其中一台服务器是只读的被动服务器
- 5.拥有备库的主主结构：增加了冗余，能够消除站点单点失效的问题
- 6.环形复制：每个服务器都是在它之前的服务器的备库，是在它之后的服务器的主库
- 7.分发主库事实上也是一个备库，提取和提供主库的二进制日志
- 8.树或金字塔形：减轻了主库的负担，但中间层出现的任何错误都会影响到多个服务器
- 9.定制的复制方案

    - 选择性复制：配置replicate_wild_do_table
    - 分离功能：OLTP、OLAP
    - 数据归档：在备库上保留主库上删除过的数据
    - 将备库用作全文检索
    - 只读备库：read_only选项
    - 模拟多主库复制
    - 创建日志服务器：创建没有数据的日志服务器，更加容易重放并且/或者过滤二进制日志事件

### E.复制和容量规划

- 1.写操作通常是复制的瓶颈，并且很难使用复制来扩展写操作
- 2.在构建一个大型应用时，有意让服务器不被充分使用，这应该是一种聪明并且蔓延的方式，尤其在使用复制的时候，有多余容量的服务器可以更好地处理负载尖峰，也有更多能力处理慢速查询和维护工作，并且能够更好地跟上复制

### F.复制管理和维护

- 1.在主库上，可以使用SHOW MASTER STATUS命令来查看当前主库的二进制日志位置和配置
- 2.从库上，使用SHOW SLAVE STATUS

## 十一、可扩展的MySQL

### A.什么是可扩展性

- 1.可扩展性表明了当需要增加资源以执行更多工作时系统能够获得划算的等同提升（equal bang for the
  buck）的能力，缺乏扩展能力的系统在达到收益递减的转折点后，将无法进一步增长
- 2.可扩展性就是能够通过增加资源来提升容量的能力

### B.扩展MySQL

- 1.规划可扩展性最困难的部分是估算需要承担的负载到底有多少，还需要大致正确地估计日程表，需要知道底线在哪里
- 2.可以做的准备工作：优化性能、购买性能更强的硬件
- 3.向上扩展（垂直扩展）意味着购买更多性能强悍的硬件
- 4.向外扩展（横向扩展、水平扩展）：复制、拆分、数据分片

    - 按功能拆分（按职责拆分），不同的节点执行不同的任务
    - 数据分片，把数据分割成一小片，或者一小块，然后存储到不同的节点中
    - 选择分区键（partitioning key）
    - 多个分区键
    - 跨分片查询，使用C或Java编写一个辅助应用来执行查询并聚合结果集，也可以借助汇总表来执行
    - 分配数据、分片和节点

- 5.通过多实例扩展
- 6.通过集群扩展

    - MySQL Cluster（NDB Cluster）
    - Clustrix
    - ScaleBase
    - GenieDB
    - Akiban

- 7.向内扩展，对不再需要的数据进行归档和清理
- 8.保持活跃数据独立

### C.负载均衡

- 1.在一个服务器集群中尽可能地平均负载量，通常在服务器前端设置一个负载均衡器

## 十二、高可用性

### A.什么是高可用性

- 1.高可用性不是绝对的，只有相对更高的可用性，100%的可用性是不可能达到的
- 2.可用性每提高一点，所花费的成本都会远超之前，可用性的效果和开销的比例并不是线性的

### B.导致宕机的原因

- 1.运行环境问题，最普遍的问题是磁盘空间耗尽
- 2.性能问题，最普遍的原因是运行很糟糕的SQL，或服务器BUG或错误的行为
- 3.糟糕的Schema和索引设计
- 4.复制问题通常由于主备数据不一致导致
- 5.数据丢失通常由于DROP TABLE的误操作导致，并总是伴随着缺少可用备份的问题

### C.如何实现高可用性

- 1.可以通过同时进行以下两步来获得高可用性

    - 可以尝试避免导致宕机的原因来减少宕机时间
    - 尽量保证在发生宕机时能够快速恢复

- 2.提升平均失效时间（MTBF）

    - 对系统变更管理的缺失是所有导致宕机的事件中最普遍的原因
    - 缺少严格的评估
    - 没有正确地监控MySQL的相关信息

- 3.降低平均恢复时间（MTTR）

    - 所有的宕机事件都是由多方面的失效联合在一起导致的，可以通过利用合适的方法确保单点的安全来避免

### D.避免单点失效

- 1.系统中任何不冗余的部分都是一个可能失效的单点
- 2.可以采用两种方法来为系统增加冗余：增加空余容量和重复组件
- 3.共享存储或磁盘复制

    - 能够为数据库服务器和存储解耦合，通常使用的是SAN
    - 两个优点：可以避免除存储外的其他任何组件失效所引起的数据丢失，并为非存储组件建立冗余提供可能

- 4.MySQL同步复制

    - 当使用同步复制时，主库上的事务只有在至少一个备库上提交后才能认为其执行完成
    - 完成了两个目标：当服务器崩溃时没有提交的事务会丢失，并且至少有一个备库拥有实时的数据副本
    - MySQL Cluster
    - Percona XtraDB Cluster

- 5.基于复制的冗余

    - 复制管理器是使用标准MySQL复制来创建冗余的工具

### E.故障转移和故障恢复

- 1.冗余一点也不会增加可用性或减少宕机，和故障转移结合可以帮助更快地恢复，故障转移最重要的部分就是故障恢复
- 2.提升备库或切换角色
- 3.虚拟IP地址或IP接管
- 4.中间件解决方案，可以使用代理、端口转发、网络地址转换或者硬件负载均衡来实现故障转移和故障恢复
- 5.在应用中处理故障转移

## 十三、云端的MySQL

### A.云的优点、缺点和相关误解

- 1.优点：

    - 云是一种将基础设施外包出去无须自己管理的方法
    - 云一般是按照即用即付的方式支付
    - 随着供应商发布新的服务和成本降低，云提供的价值越来越大
    - 云能够帮助你轻松地准备好服务器和其他资源
    - 云代表了对基础设施的另一种思考方式——作为通过API来定义和控制的资源——支持更多的自动化操作

- 2.缺点：

    - 资源是共享并且不可预测的
    - 无法保证容量和可用性
    - 虚拟的共享资源导致排查故障更加困难

### B.MySQL在云端的经济价值

- 1.云托管比较适合尚处于初级阶段的企业，或者那些持续接触新概念并且本质上是以适用为主的企业
- 2.大量使用的策略是尽可能又快又便宜地开发和发布应用
- 3.运行不是很重要的基础设施

### C.云中的MySQL的可扩展性和高可用性

- 1.数据库通常是一个应用系统中主要或唯一的有状态并且持久化的组件
- 2.MySQL并不具备在一个无共享集群中的对等角色服务器之间迁移的能力

### D.四种基础资源

- 1.CPU通常少且慢
- 2.内在大小受限制
- 3.I/O的吞吐量、延迟以及一致性受到限制
- 4.网络性能还比较好

### E.MySQL在云主机上的性能

- 1.需要高并发的工作负载并不是非常适合云计算
- 2.那些需要大量I/O的工作负载在云中并不总是表现很好

### F.MySQL数据库即服务（DBaaS）

- 1.将数据库本身作为云资源

## 十四、应用层优化

### A.常见问题

- 1.什么东西在消耗系统中每台主机的CPU、磁盘、网络，以及内存资源？这些值是否合理？如果不合理，对应用程序做基本的检查，看什么占用了资源
- 2.应用真是需要所有获取到的数据吗？
- 3.应用在处理本应由数据库处理的事情吗，或者反过来？
- 4.应用执行了太多的查询？
- 5.应用执行的查询太少了？
- 6.应用创建了没必要的MySQL连接吗？
- 7.应用对一个MySQL实例创建连接的次数太多了吗？
- 8.应用做了太多的“垃圾”查询？
- 9.应用使用了连接池吗？这既可能是好事，也可能是坏事
- 10.应用是否使用长连接？
- 11.应用是否在不使用的时候还保持连接撕开？

### B.Web服务器问题

- 1.最常见的问题是保持它的进程的存活（alive）时间过长，或者在各种不同的用途下混合使用，而不是分别对不同类型的工作进行优化
- 2.如果用一个通用目的的Apache配置直接用于Web服务，最后很可能产生很多重量级的Apache进程
- 3.不要使用Apache来做静态内容服务，或者至少和动态服务使用不同的Apache实例
- 4.进程存活时间变短策略：

    - 不要让Apache填鸭式地服务客户端
    - 打开gzip压缩
    - 不要为用于长距离连接的Apache配置启用Keep-Alive选项

### C.缓存

- 1.被动缓存除了存储和返回数据外不做任何事情；主动缓存在访问未命中时做一些额外工作
- 2.应用可以缓存部分计算结果，所以应用层缓存可能比更低层次的缓存更有效，可以节省两方面的工作：获取数据以及基于这些数据进行计算，重点是缓存命中率可能更低，并且可能使用较多的内存
- 3.应用层缓存：

    - 本地缓存
    - 本地共享内存缓存
    - 分布式内存缓存
    - 磁盘上的缓存

- 4.缓存控制策略

    - TTL（time to live，存活时间）
    - 显式失效，如果不能接受脏数据，那么进程在更新原始数据时需要同时使缓存失效
    - 读时失效，在更改旧数据时，为了避免要同时失效派生出来的脏数据，可以在缓存中保存一些信息，当从缓存中读数据时可以利用这些信息判断数据是否已经失效

- 5.可以在后台预先请求一些页面，并将结果存为静态页面，好处：

    - 应用代码没有复杂的命中和未命中处理路径
    - 当未命中的处理路径慢得不可接受时，这种方案可以很好地工作
    - 预生成内容可以避免在缓存未命中时导致的雪崩效应

### D.MySQL的替代品

- 1.搜索：Lucene和Sphinx
- 2.简单的键值存储：Redis
- 3.结构化数据：Hadoop

## 十五、备份与恢复

### A.为什么要备份

- 1.灾难恢复
- 2.人们改变想法
- 3.审计
- 4.测试

### B.定义恢复需求

- 1.规划备份和恢复策略时，有两个重要的需求：恢复点目标（PRO）和恢复时间目标（RTO）

### C.设计MySQL备份方案

- 1.建议

    - 在生产实践中，对于大数据库来说，物理备份是必需的：逻辑备份太慢并受到资源限制，从逻辑备份中恢复需要很长时间
    - 保留多个备份集
    - 定期从逻辑备份（或者物理备份）中抽取数据进行恢复测试
    - 保存二进制日志以用于基于故障时间点的恢复
    - 完全不借助备份工具本身来监控备份和备份的过程
    - 通过演练整个恢复过程来测试备份和恢复
    - 对安全性要仔细考虑

- 2.如果可能，关闭MySQL做备份是最简单最安全的，需要考虑：锁时间、备份时间、备份负载、恢复时间
- 3.逻辑备份优点：

    - 可以用编辑器或像grep和sed之类的命令查看和操作的普通文件
    - 恢复非常简单
    - 可能通过网络来备份和恢复
    - 可以在类似Amazon RDS这样不能访问底层文件系统的系统中使用
    - 非常灵活
    - 与存储引擎无关
    - 有助于避免数据损坏

- 4.逻辑备份的缺点：

    - 必须由数据库服务器完成生成逻辑备份的工作
    - 逻辑备份在某些场景下比数据库文件本身更大
    - 无法保证导出后再还原出来的一定是同样的数据
    - 从逻辑备份中还原需要MySQL加载和解释语句

- 5.物理备份优点：

    - 基于文件的备份，只需要将需要的文件复制到其他地方即可
    - 恢复简单
    - InnoDB和MyISAM的物理备份非常容易跨平台

- 6.物理备份缺点：

    - InnoDB的原始文件通常比相应的逻辑备份要大得多
    - 物理备份不总是可以跨平台

- 7.除非经过测试，不要假定备份是正常的
- 8.建议混合使用物理和逻辑两种方式来做备份
- 9.MySQL备份需要考虑的几点：

    - 非显著数据
    - 代码
    - 复制配置
    - 服务器配置
    - 选定的操作系统

- 10.差异备份是对自上次全备份后所有改变的部分做备份，而增量备份则是自从任意类型的上次备份后所有修改做的备份
- 11.差异、增量备份的建议：

    - 使用Percona XtraBackup和MySQL Enterprise Backup中的增量备份特性
    - 备份二进制日志，每次备份后FLUSH LOGS
    - 不要备份没有改变的表
    - 不要备份没有改变的行
    - 某些数据根本不需要备份
    - 备份所有的数据，然后发送到一个有去重特性的目的地

- 12.数据一致性：当备份时，应该考虑是否需要数据在指定时间点一致
- 13.文件一致性：每个文件的内部一致性
- 14.从备库中备份最大的好处是可以不干扰主库，故意将一个备库延时一段时间对于某些灾难场景非常有用

### D.管理和备份二进制日志

- 1.expire_log_days变量MySQL定期清理日志

### E.备份数据

- 1.生成逻辑备份

    - SQL导出：mysqldump方式
    - 符号分隔文件备份：使用SELECT INTO OUTFILE以符号分隔文件格式创建数据的逻辑备份

- 2.文件系统快照

    - 支持快照的文件系统和设备包括FreeBSD的文件系统、ZFS文件系统、GNU/Linux的逻辑卷管理（LVM），以及许多的SAN系统和文件存储解决方案

### F.从备份中恢复

- 1.恢复步骤：

    - 停止MySQL服务器
    - 记录服务器的配置和文件权限
    - 将数据从备份中移到MySQL数据目录
    - 改变配置
    - 改变文件权限
    - 以限制访问模式重启服务器，等待完成启动
    - 载入逻辑备份文件
    - 检查和重放二进制日志
    - 检测已经还原的数据
    - 以完全权限重启服务器

### G.备份和恢复工具

- 1.MySQL Enterprise Backup
- 2.Percona XtraBackup
- 3.mylvmbackup
- 4.Zmanda Recovery Manager
- 5.mydunper
- 6.mysqldump

## 十六、MySQL用户工具

### A.接口工具

- 1.MySQL Workbench
- 2.SQLyog
- 3.phpMyAdmin
- 4.Adminer

### B.命令行工具集

- 1.Percona Toolkit
- 2.Maatkit and Aspersa
- 3.The openark kit
- 4.MySql workbench

### C.SQL实用集

- 1.common_schema
- 2.mysql-sr-lib
- 3.MySQL UDF仓库
- 4.MySQL Forge

### D.监测工具

- 1.开源的监控工具

    - Nagios
    - Zabbix
    - Zenoss
    - OpenNMS
    - Groundwork Open Source
    - MRTG
    - Cacti
    - Ganglia
    - Munin

- 2.商业监控系统

    - MySQL Enterprise Monitor
    - MONyog
    - New Relic
    - Circonus
    - Monitis
    - Splunk
    - Pingdom

- 3.Innotop的命令行监控

# MySQL-xmind

## MySQL

### select执行顺序

- from
- join on
- where
- group by
- 聚合函数

    - avg()：平均值忽略空值
    - count()：求总条数
    - max()：最大值
    - min()：最小值
    - sum()：求和忽略空值

- having筛选分组

    - having句子中的每一个元素必须存在于select中

- 计算所有表达式
- select
- distanct
- order by排序

    - asc 正序
    - desc倒序

### sql注入

- 举例

    - select * from stu where name="a" or "a" = "a"   本查询语句恒成立 让name失去意义

- 解决

    - 预编译语句？的方式"a" or "a" = "a"为一个整体参数
    - Mybatis中的mapper的#{}方式

### sql优化

- 1.在知道只有一条数据的时候用limit1，这样数据库在找到一条语句之后就会返回数据，不再继续查找
- 2.用 not exists 代替 not in
- 3.MyISAM 适合大量查询， InnoDB有事务功能在大量的写操作时比较优秀

### MySQL架构器中的各个模块

- 链接管理

    - 多个客户端连接一个服务器，服务器有一个线程池来管理

- 安全验证

    - 客户端连接服务的时候，需要验证用户名密码和主机信息等

- 解析器

    - 分析查询语句生成解析树，如果解析树存在于缓存中，就直接返回结果，不进行优化，如果缓存中的数据被修改，会清楚缓存@ 测试

- 优化器

    - 选择合适的索引
    - 数据的读取方式
    - 获取查询的开销信息
    - 统计信息

- 执行器

    - 执行查询语句
    - 返回查询结果
    - 生成执行计划
    - 于储存信息的一些处理

### 存储引擎

- InnoDB
- MyISAM
- MEMORY
- NDB
- Memory
- Archive
- Federated
- Maria

### MySQL事务

- 默认采取自动提交的方式，除非显示开始一个事务

    - SHOW VARIABLES LIKE  'AUTOCOMMIT'
    - 修改自动提交模式 0= off ，1 = on

        - set AUTOCOMMIT = off 或者set AUTOCOMMIT = 0

- 事务的四大特征

    - 原子性：事务内的操作，全部完成或者全部不完成
    - 一致性：事务开始前和开始后数据库的完整性约束没有被破坏
    - 隔离性：多个事务并发请求时，保证互相隔离，防止混淆。串行化或者有序化的请求，保证同一时间只有一个请求操作同一个数据
    - 持久性：事务结束后，事务对数据库的操作就持久的保存在数据库中，不会被回滚

- 四种隔离级别

    - 未提交读：脏读，可以读取其他事务未提交的数据
    - 已提交读：未提交其他事务不可读
    - 可重复读：保证同一个事务多次相同查询的结果一致
    - 可串行化：保证读取的范围内没有新数据插入

### 存储过程

- 如果有先删掉

    - drop proceduure if exists pr_add;

- 创建

    - create procedure pr_add

- 调用

    - call pr_add();

### 触发器

- 触发器的各个部分

    - trigger_name 触发器名称
    - trigger_time 触发器触发的时间

        - before和after

    - trigger_event 触发器触发的事件

        - 取值为 insert delete update

    - tbl_name 要操作的表名
    - trigger_stmt 触发器程序体

        - 可以是一个操作语句或者是begin end包裹的多个操作

- 六种触发器

    - 一个表最多有这六种触发器每个一个
    - after insert
    - after update
    - after delete
    - before insert
    - before update
    - before delete

- 例子

    - create trigger tri_1
    - after insert on student for each row
    - begin
    - declare a int
    - set a = (Select stuCount from class where classId = new classId)
    - update class set stuCount = a +1 where classId = new classId

- 查看触发器

    - show teigger [form_schema_name];

- 删除触发器

    - drop trigger [if exists] [schema_name.] trigger_name;

### sql语句优化

- 优化是多方面的，包括查询、更新、服务器等。
- 原则：减少系统瓶颈，减少资源占用，增加系统的反应速度。
- •SHOW STATUS LIKE 'value‘

    - • Slow_queries 慢查询次数
    - • Com_(CRUD) 操作的次数
    - • Uptime 上线时间

### status

- 查询返回的行数show status like '%innodb_rows_read%'
- 插入成功的行数show status like '%innodb_rows_inserted%'
- 更新成功的行数show status like '%innodb_rows_updated%'
- 删除成功的行数show status like '%innodb_rows_deleted%'
- 查看慢查询show status like '%Slow%'
- 查看运行时间show status like '%up%'
- 查看锁的时间分布show status like'%innodb_row_lock%';
- 执行select的计数show status like '%Com_select%'
- 执行insert的计数，批量插入算一次show status like '%Com_insert%'
- 执行更新操作的计数show status like '%Com_update%'
- 执行删除操作的计数show status like '%Com_delete%'
- 提交事务计数show status like '%Com_commit%'
- 回滚事务计数show status like '%Com_rollback%'
- 查看警告信息show warnings
- 查看版本信息select version（）

### explain

- id

    - 是用来顺序标识整个查询中SELELCT 语句的，通过上面这个简单的嵌套查询可以看到id越大的语句越先执行。该值可能为NULL

- select_type

    - SIMPLE

        - 最简单的SELECT查询，没有使用UNION或子查询。见Query-1。

    - PRIMARY

        - 在嵌套的查询中是最外层的SELECT语句，在UNION查询中是最前面的SELECT语句。见Query-2和Query-3。

    - UNION

        - UNION中第二个以及后面的SELECT语句。 见Query-3。

    - DERIVED

        - 派生表SELECT语句中FROM子句中的SELECT语句。见Query-2。

    - UNION RESULT

        - 一个UNION查询的结果。见Query-3。

    - DEPENDENT UNION

        - 顾名思义，首先需要满足UNION的条件，即UNION中第二个以及后面的SELECT语句，同时该语句依赖外部的查询。

### View

- 视图（view）是一种虚拟存在的表，是一个逻辑表，本身并不包含数据。作为一个select语句保存在数据字典中的。
- 通过视图，可以展现基表的部分数据；视图数据来自定义视图的查询中使用的表，使用视图动态生成。
- 基表：用来创建视图的表叫做基表base table
- 例子 @测试

    - 创建

        - create view v_F_players(编号,名字,性别,电话)   as
        - select PLAYERNO,NAME,SEX,PHONENO from PLAYERS where SEX='F'  with check option;

    - 查看

        - show create view hello1

    - 更改

        - create or replace view view_name as select语句;

    - 删除

        - DROP VIEW [IF EXISTS]    view_name [, view_name]

### 锁

- MyISAM和MEMORY存储引擎采用的是表级锁（table-level locking）。
- InnoDB存储引擎既支持行级锁（row-level locking），也支持表级锁，但默认情况下是采用行级锁。
- 表级锁：开销小，加锁快；不会出现死锁；锁定粒度大，发生锁冲突的概率最高,并发度最低。
- 行级锁：开销大，加锁慢；会出现死锁；锁定粒度最小，发生锁冲突的概率最低,并发度也最高。
- 页面锁：开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般。
- MyISAM在执行查询语句（SELECT）前，会自动给涉及的所有表加读锁，在执行更新操作（UPDATE、DELETE、INSERT等）前，会自动给涉及的表加写锁，这个过程并不需要用户干预，因此，用户一般不需要直接用LOCK
  TABLE命令给MyISAM表显式加锁
- InnoDB与MyISAM的最大不同有两点：一是支持事务（TRANSACTION）；二是采用了行级锁。行级锁与表级锁本来就有许多不同之处，另外，事务的引入也带来了一些新问题。下面我们先介绍一点背景知识，然后详细讨论InnoDB的锁问题。

### 命令

### 用户

- CREATE USER username IDENTIFIED BY 'password';
- GRANT ALL PRIVILEGES ON*.* TO 'username'@'localhost'IDENTIFIED BY 'password';

### 索引

### delete和truncate

- delete:直接删除行，truncate摧毁表再重建表
- delete：DML可以事物回滚，truncate：DDL不支持事物回滚
- delete：不会释放空间，truncate会释放空间
- delete：会产生碎片，truncate不会产生碎片

## verchar和verchar2 verchar是oracle增强的字符串，可变长度

## 查询时间

### MySQL :select sysdate(); select NOW(); select current_date;

### sql server :getdate():获取系统当前时间

### oracle :select sysdate from dual; select Current_date from dual;

- sysdate 系统变量函数还包括user等 dual 伪表

## 字符串连接

### MySQL ：select concat('123','456');

### sql server :select '123'+'456';

### oracle ：select '123'||'456' from dual;或者select concat('123','456') from dual;

