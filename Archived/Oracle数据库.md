

# Oracle数据库

基本学习思路

数据库的组成, 工作过程与原理

基础模型与概念

数据库的管理机制

# 基本常识

> 基本问答 基本特性 注意事项



- [ ] oracle默认端口号: 1521
- [ ] <u>执行更新语句不提交时, 相关的表会锁住, 占用很长时间</u>
- [ ] oracle 字段不区分大小写, 系统默认会解析为大写存储
- [ ] 查询字段名称和表时(相当于变量),, 而数据是需要单引号的
- [ ] **单引号**代表的是**字符串**。而**双引号**之中的表示**字段或者表名**, 一般不需要双引号。
- [x] **关键字**(如select from) 和 **表名** (dual等) 这些是不区分大小写的。 
- [ ] oracle中 `''` 和 `null` 等价, 绑定变量时, 绑定空值, 使用 `''` 

## 相关软件

### PL / SQL

 PL/SQL Developer是一个[集成开发环境](https://baike.baidu.com/item/集成开发环境/298524)，专门开发面向Oracle数据库的应用。[PL/SQL](https://baike.baidu.com/item/PL%2FSQL)也是一种程序语言，叫做过程化SQL语言（Procedural Language/SQL）。PL/SQL是Oracle数据库对SQL语句的扩展。在普通SQL语句的使用上增加了编程语言的特点，所以PL/SQL把数据操作和查询语句组织在PL/SQL代码的过程性单元中，通过逻辑判断、循环等操作实现复杂的功能或者计算。MySQL 不支持 PL/SQL 

### sql developer

  SQL Developer 不能用于创建Oracle数据库，只能用来连接已经创建的数据库，数据库的建立要通过Database Configuration Assistant（DBCA）来完成。 

### oracle database 11g client instance 

### oracle database 18c express edition -- XE 快捷版

> 本地服务器



快捷版



# 常见问题

### 连接排错

快捷连接 sqlplus

tnsping 数据库服务器  :测试数据库是否能ping

简易连接语法

```shell
sqlplus [db_name]/[password]@[host]:[port]/[server_name]
```

### 字符集问题

[通过修改注册表 - 推荐](https://www.cnblogs.com/lyl6796910/p/3536342.html)

通过修改环境变量





### ORA-12560: TNS: 协议适配器错误 

系统环境变量添加

`oracle_sid=XE`

### ORA-12162: TNS:net service name is incorrectly specified

TNS服务器未指定

需要创建 tnsnames.ora

```shell
https://download.oracle.com/otn/linux/oracle18c/xe/oracle-database-xe-18c-1.0-1.x86_64.rpm
```



从sqlplus执行插入数据命令, 需要提交

这不同于mysql



### ORA-12541: TNS: No Listener无监听程序

1. 要从远程位置连接Oracle 数据库, 必须配置Oracle Net监听程序

2. 根本没这样一个监听接口, 接口不存在, 查看 数据库是否 能tnsping通





ORA- 12569



## 配置文件 

> 三者分别的作用

### listener.ora



sqlnet.ora



### tnsnames.ora

> Oracle中TNS的完整定义：transparence Network Substrate透明网络底层，监听服务是它重要的一部分，不是全部，不要把TNS当作只是监听器。
>
> TNS是Oracle Net的一部分，专门用来管理和配置Oracle数据库和客户端连接的一个工具，在大多数情况下客户端和数据库要通讯，必须配置TNS，当然在少数情况下，不用配置TNS也可以连接Oracle数据库，比如通过JDBC。如果通过TNS连接Oracle，那么客户端必须安装Oracle client程序。

**重点  别名设置 主机 端口 实例名**

 配置文件名一般为：tnsnames.ora，默认路径:%ORACLE_HOME%\network\admin\tnsnames.ora 

在当前文件中可以设置多个别名(多台目标服务器)



# 系统工具

sqlldr sql loader

# 原理解析

> 关系	模型	字段	记录	键	主键	唯一键	外键		E-R模型	实体	属性

### oracle 整体知识记录

事务参数  空间(10%)

char 固定长度 

varchar2 可变长度



表中字段命名长度不能超过20个字节



分区 (医院 | 日期 | 哈希)  -- 管理



临时表 -- 各自的数据不想干扰 



### 索引

 -- (主键 , 外键 需要建立索引)   --建立索引 upload_flag

在OLTP系统中, 少用位图索引, 对于更新频繁的表, 少用位图索引

buffer 

keep池

### sequence - 序列



### 数据字典

### LOB大对象

 clob  / blob



### SQL开发规范

连接查询

in  or  使用区别   in 的性能好的

`>=` 替换 `>` 

select * from where hospital_db = 05720022

- [x] **避免数据类型转换**  数值 默认使用 数值 不需要加引号
- [ ] 

### PL / SQL 

goto语句

异常处理

### 暂存区

关系型数据库是建立在关系模型基础上的数据库, 借助于集合代数等数学概念和方法来处理数据库中的数据, 现实世界中的**各种实体**以及**实体间关系**均用关系模型来表示

关系模型以二维表来描述数据

字段 - 记录

数组



主键

唯一键

外键

数据字典

E - R模型

实体和属性

联系

数据库设计三范式

数据组的的每个属性只可以包含一个值



### TNS

### SID

### Instance - 实例

**书籍定义**:实例是指一组Oracle后台进程以及在服务器中分配的共享内存区域;

## Database - 数据库

**书籍定义**: 数据库是由基于磁盘的数据文件, 控制文件, 日志文件, 参数文件和归档日志文件等组成的物理文件集合

对象: data - record - table - database

常见需求: 操作一条记录, 操作一条记录中的数据, 安装规律,逐行操作 记录中的数据

## Database Server - 数据库服务器

**数据库服务器**: 数据库服务器是指管理数据库的各种软件工具(sqlplus oem)和实例及数据库三个部分.

**实例用于管理和控制数据库, 数据库为实例提供数据**

**一个数据库可以被多个实例装载和打开, 一个实例在其生命周期内智能装载和打开一个数据库.** 

### 逻辑存储结构

### 物理存储结构

## 连接 - connect

是事务性质的

连接对象需要关闭, 需要提交

## 游标 - cursor

>  数据缓冲区, 查询结果集(result set)
>
> 指针, 一种控制结构, 光标
>
> 类似一个迭代器
>
> 

游标(cursor)是一个存储在DBMS服务器上的数据库查询, 它不是一条select语句, 而是被该语句检索出来的**结果集**. 在存储了游标之后, 应用程序可以根据需要滚动或浏览其中的数据

execute方法会将结果从数据库拿到本地

#### 维基定义

**数据指针**(Data Cursor) 或称光标，是在数据库引擎 (Database Engine)中，让开发人员或数据库管理员可以遍历、浏览检索结果的数据列(称为数据查询结果集, Result set)，是主要用于在结果集中移动到某一数据列(row)的控制结构。**光标可以被看作是指向一组列中，代表某一列的指针。光标一次只能引用一列，但可以根据需要移动到结果集的其他列。**

光标有助于随检索之后的数据处理与遍历相结合，如添加和删除记录。它能遍历数据查询结果集的特性，类似于编程语言的[迭代器](https://zh.wikipedia.org/wiki/迭代器)概念。开发程序人员通常依需求而使用光标，来处理由数据库系统查询返回的整个结果集。在这种情况下，光标可使结果集中的数据列依照次序处理。在SQL程序中，使用光标可以定义检索集（多行数据列的条件选取组合）并逐行运行数据处理的逻辑。通过相同的机制，SQL程序也可将结果集直接返回给调用者或客户端应用程序。



#### 作用

> 任何一个操作, 只能在行间操作

 A cursor lets you name the work area, access the information, and process the rows individually. 

当执行SQL语句时均会返回一个游标对象, 

连接池 - connect pool

## 基础用法

使用sqlplus登录  官方默认oracle管理工具

系统默认用户 sys system / aqadm scott

## 视图对象 - view

学习目标//: 什么是视图,怎样工作,何时使用它们;还将讲述如何利用视图简化SQL操作.

> 只读视图, 无法对基础表进行修改

**官方定义**: 视图是一个虚拟表, 它由**存储的查询**构成, 可以将它的输出看作是一个表

**个人理解**:

**视图特性**: 

- 视图同真实表一样, 也可以包含一系列带有名称的列和行数据. 但是, 视图并不在数据中存储数据值, 其数据值来自定义视图查询语句所引用的表, 数据库自在**数据字典**中存储视图的定义信息. 
- 视图建立在关系表上, **也可以建立在其他视图上**, 或同时建立在两者之上.
- 视图看上去非像想数据库中的表, 甚至可以在视图中进行 `insert` `update` 和 `delete` 操作. 
- 通过视图修改数据时, 实际上就是在修改基本表中的数据
- 改变基本表中的数据也会反映到由该表组成的视图中

#### **创建视图**

创建视图是使用 `create view` 语句完成的. 

为了在当前用户模式中创建视图, 要求数据库用户必须具有 `create view` 系统权限

```plsql
create [or replace] view <view_name> 
[ (alias[,alias]...)] --用于指定视图列的别名
as <subquery> --用于指定视图对应的子查询语句
[with check option] [constraint constraint_name] --该子句用于指定在视图上定义的check约束
[with read only] --该子句用于定义只读视图
```

在创建视图时, **如果不提供视图列别名, Oracle会自动使用子查询的列名或列别名**. 

用户可以通过 `select` 语句像查询普通的数据表一样查询视图的信息

## 数据字典

类似于字典 其实是  一个单行的表 一个字段 只映射一个值

系统表 

## 视图 - view

在 SQL 中，视图是基于 SQL 语句的结果集的可视化的表。

视图包含行和列，就像一个真实的表。视图中的字段就是来自一个或多个数据库中的真实的表中的字段。我们可以向视图添加 SQL 函数、WHERE 以及 JOIN 语句，我们也可以提交数据，就像这些来自于某个单一的表。

**注释：**数据库的设计和结构不会受到视图中的函数、where 或 join 语句的影响。

```sql
create view [view] as 
select *
from [table]
where [条件];

-- 从视图中查询
select * from [view]
```

### 使用视图的好处

- 简化复杂的SQL操作. 在编写查询后, 可以方便的**重用** 它而不必知道其基本查询细节. 
- 使用表的一部分而不是整个表
- 保护数据, 可以授予用户访问表的特定部分权限, 而不是整个表的访问权限. 
- **更改数据格式和表示**. 视图可以返回 与基础表的表示和格式不同的数据. 

### 视图的特点

- 本事不包含数据, 返回的数据是从其他表中检索出来的. 

- 视图仅仅是用来查看存储在别处数据的一种设施. 

- 在添加或更改依赖的基础表中的数据时, 视图将返回改变过的数据

### 开发注意事项

- 视图名 应该唯一, 并且不与基础表冲突
- 对于可以创建的视图数目没有限制
- 创建视图, 必须具有足够的访问权限
- 视图可以使用嵌套, 可以利用从其他视图中检索的查询来构造视图
- 视图不能索引, 也不能有关联的触发器或默认值
- **只读视图**: 只可以从视图中检索数据, 但不能将数据写回基础表中

### 建立只读视图



## 存储过程 - procedure

> 什么是存储过程, 为什么要使用存储过程, 如何使用存储过程, 以及创建和使用存储过程的基本语法

### 最佳实践

- [ ] end结束标识符 存储过程名可以省略
- [ ] 传入参数 用 `,` 逗号分隔, 内部变量定义用 `;` 分号分隔, 语句结束需要 `;` 分号. 

### 基础语义

**简单来说**, 存储过程就是为以后使用而保存的一条或多条SQL语句. 可将其视为批文件, 虽然特闷的作用不仅限于批处理

oracle 存储过程 是一中命名的**PL/SQL程序块**, 它既可以没有参数, 也可以有若干个输入, 输出参数, 甚至可以有多个既作输入又作输出的参数, 但它通常没有返回值. 

存储过程被保存在数据库中, **它不可以被SQL语句直接执行或调用**, 只能通过 **`execute` 命令执行或在PL/SQL程序块内部被调用**

由于存储过程是已经编译好的代码, 所以在被调用或引用时, 其执行效率非常高

使用存储过程的三个好处: 简单, 安全, 高性能

**作用**: 

1. 通过把处理封装在一个医用的单元中, 可以简化复杂的操作
2. 不要求反复建立一系列处理步骤, 因而保证了数据的一致性. 如果所有开发人员和应用程序都使用同一存储过程, 则所使用的代码都是相同的
3. 简化对变动的管理
4. 因为存储过程通常以编译过的形式存储, 所以提高了性能
5. 存储过程可以用来编写功能更强更灵活的代码

**作用2**:

为了一个特定的业务功能, 会想数据库进行多次连接和关闭, 需要对数据库进行多次I/O读写, 性能比较低. 如果把这些业务放到PL/SQL中, 在应用程序中只需要调用PLSQL就可以做到连接关闭一次数据库 就可以实现业务功能, 可以大大提高效率

ORACLE官方建议: 能够让数据库操作的不要放在程序中. 在数据库中实现基本上不会出现错误, 在程序中操作可能会存在错误. (如果在数据库中操作数据, 可以有一定的**日志恢复**等功能)

**存储过程的传入参数**:

**参数**: 是一种想程序单元输入和输出的机制



### 创建存储过程

plsql >> open >> program window >> procedure

```plsql
create or replace procedure <pro_name>  --存储过程名, or replace覆盖已经存在的存储过程
[(para1[,para2]...]  --存储过程的参数. 若是输入参数, 则需要在其后指定in关键字; 若是输出参数, 则需要在其后指定out关键字
is | as
begin
  plsql_sentences;  --plsql语句, 他是存储过程功能实现的主体.
  [exception]
  [dowith_sentences;] --异常处理语句, plsql语句, 可选项
null;
end [pro_name];
```

**注意: para1是存储过程被调用/执行时用到的参数, 而不是存储过程内定义的内部变量, 内部变量要在is 关键字后面定义, 并使用分号 (;) 结束**

### 调用存储过程

存储过程的的执行远比编写要频繁的得多, 执行存储过程的sql语句很简单: `execute` . 

`execute` 接受存储过程名和需要传递给他的任何参数. 

#### plsql语句中

```plsql
-- 执行存储过程 (应该测试执行)
execute proc_name('para1', 'para2', 'para3'); --有点像执行一个函数

--实例: 创建存储过程
create procedure MailingListCount(  --参数列表
    PatientsName IN VARCHAR2,  --传入参
    ListCount out integer  --从存储过程返回一个值而不是传递值到存储过程
    
) 
is
v_rows integer;
begin  --接下来是执行语句
	select count(*) into v_rows
	from customers
	where not cust_email is null;
	listcount := v_rows;
end;

-- 调用存储过程
var returnvalue number  --声明变量用来保存存储过程返回的的任何值
execute MailingListCount(:ReturnValue);  --执行存储过程
select returnvalue;  --显示返回的值


```

### 异常处理

> 

The DUP_VAL_ON_INDEX Exception (ORA-00001) occurs when a program attempts to store a duplicate value or values in a database column that is constrained by a unique index.

#### python实现

```python
conn.cur.callproc('存储过程对象',<list>)  # 需要传入的参数
```

## 同义词 - synonym

[同义词](https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_7001.htm)

```test
Use the CREATE SYNONYM statement to create a synonym, which is an alternative name for a table, view, sequence, procedure, stored function, package, materialized view, Java class schema object, user-defined object type, or another synonym.

Synonyms provide both data independence and location transparency. Synonyms permit applications to function without modification regardless of which user owns the table or view and regardless of which database holds the table or view. However, synonyms are not a substitute for privileges on database objects. Appropriate privileges must be granted to a user before the user can use the synonym.

You can refer to synonyms in the following DML statements: SELECT, INSERT, UPDATE, DELETE, FLASHBACK TABLE, EXPLAIN PLAN, and LOCK TABLE.

You can refer to synonyms in the following DDL statements: AUDIT, NOAUDIT, GRANT, REVOKE, and COMMENT.
```





## 会话 - session



## 联结表

学习目标//:什么是联结,为什么使用联结,如何编写联结结构SELECT语句

### 联结的作用:

SQL最强大的功能之一就是能在数据查询中执行联结(join)表,(join 参加,结合,联结)

### 关系表

避免同一数据存储多次, 这也是关系型数据库的设计基础

结构化数据,优化逻辑理清对应关系

### **优势**

1. 减少信息重复和节省存储空间
2. 信息记录具备唯一性,便于修改,防止出现不一致性;因为没有重复信息,当数据出现变动时,只需修改一个地方即可,极大的增加了数据库性能
3. 输入数据时,简便快捷;当数据出现不一致性时,引用时很容易出现错误.
4. 总之相同的数据出现多次绝不是一件好事,这是关系型数据设计的基础.
5. 因为我们需要对数据进行维护和增删改查,,逻辑结构越清晰越不容易出现错误
6. 可伸缩(scale):能够适应不断增加的工作量而不失败. 设计良好的数据库或应用程序称为可伸缩性好(scale well)

### 为什么使用联结 

应用场景:如果数据存储在多个表中,怎样用一条SELECT语句就检索出来呢?

答案是使用联结.如何理解? 

**联结是一种机制,用来在一条select语句中关联表,因此称为联结.**

使用特殊语法,可以联结多个表返回一组输出,联结在运行时关联表中正确的行.



### 创建联结

思路:指定要联结的所有表以及关联他们的方式即可.

充的列在前面,,,将两个表的相关性进行匹配A:C,,,C:D,,,---A:D

```plsql
select vend_name, prod_name, prod_price
from vendors, products
where Vendors.vend_id=products.vend_id  --将 A 与B 进行配对
;
```

☆这里一定要完全限定列名,相对于数据库(TABLE.Column_n)



where子句的重要性

在一条select语句中联结几个表时,相应的关系是在运行中构造.DBMS本身没有指示如何对表进行联结.

联结两个表时,我们需要做的是将第一个表中的每一行与第二个表中的每一行配对



☆笛卡尔积(Cartesian product)

当表关系没有指定联结条件时,返回的结果为笛卡尔积:检索出的行的数目为A*B

☆不要忘了where子句

为了保证结果的正确输出,请不要忘记使用where子句过滤条件.同理,不正确的过滤条件会导致DBMS返回不正确的数据.



### 内联结



前面使用的联结也被成为等值联结(equijoin),它基于两个表之间的相等测试.

这种联结也被称为内联结(inner join),只是使用了不同的语法(换种方式解决实际问题)

用例如下:

```plsql
select vend_name, prod_name, prod_price

from Vendors inner join Products

on vendors.vend_id=products.vend_id

-- order by vend_name, prod_name

;
```







### 联结多个表

☆出于性能，不要联结不必要的表，因为这很耗费资源。



多实践，执行一定的任务，一般的SQL操作不止一种方法。

但是使用时应该考虑性能，查询速度等因素

联结是SQL中一个最重要、最强大的特性。有效地使用联结需要对数据库设计有基本的了解



# cx_Oracle文档

> 根据官方文档结构来编写笔记
>
> Oracle官方文档 关于 Python 连接 Oracle

[官方英文文档](https://cx-oracle.readthedocs.io/en/latest/)

[6.4.1版本文档](https://cx-oracle.readthedocs.io/en/6.4.1/)

[安装方法查看](软件使用技巧.md)

## 注意事项

- [ ] 语句末尾不要加分号, 一般只能执行一条语句

## 获取记录

[查询接口](https://cx-oracle.readthedocs.io/en/latest/user_guide/sql_execution.html#fetch-methods)

### 查询字段元数据

cur.description(name, type, display_size, internal_size, precision, scale, null_ok) 

## Connecting to Oracle Database



## Connection Pool

> 缓冲区(非实时处理, 或者延迟处理, 单是考虑到连接的资源消耗, 这种方式, 更加有效),  而不是直接到远处去拿
>
> 实现思路: 数据库连接的复用

### 基础语义

**定义**



**特点**

**作用**



### 原理解析

连接池 帮助应用创建和维护一个链接到数据库的连接池, 内部实现使用了 `session pool technology`. 通常情况下, 一个 `Connection Pool` 对应一个 `Oracle Session` . 

> 最小维持连接数量(应该通过配置文件, 增加代码灵活性)
>
> 创建 -> 
>
> 创建连接对象(可以被多次创建和关闭)

应用初始化时,通过调用 `SessionPool()` 实现连接池的**创建连接池**, 通过调用 `aquire()` 函数实现 **创建连接对象** (从连接池中获取 `Connections`) . 连接的初始化通过创建连接池时的最大值和最小值来指定. 当连接池需要扩大(grow)时, 新的连接将会自动创建. 当连接不再使用时, 进程池可以缩小(shrink)为最小值. 

当连接对象不再使用时, 需要**关闭连接对象**, 对其进行关闭(close)或释放(release)会连接池.  实现方式是主动调用 `SessionPool.release()` 或者 `Connection.close()` , 否者, 连接对象将在没有变量引用该连接时自动释放. 使用 `Sessionpool.close()` 实现 **关闭连接池** . 



### 语法示例

> 创建连接池 -> 获取连接对象 -> 使用连接 -> 释放连接 -> 关闭连接池 

```python
# Create the session pool
pool = cx_Oracle.SessionPool("hr", userpwd,
        "dbhost.example.com/orclpdb1", min=2, max=5, increment=1, encoding="UTF-8")

# Acquire a connection from the pool
connection = pool.acquire()

# Use the pooled connection
cursor = connection.cursor()
for result in cursor.execute("select * from mytab"):
    print(result)

# Release the connection to the pool
pool.release(connection)

# Close the pool
pool.close()
```

多线程版连接池

 Applications that are using connections concurrently in multiple threads should set the `threaded` parameter to True when creating a connection pool: 

```python
# Create the session pool
pool = cx_Oracle.SessionPool("hr", userpwd, "dbhost.example.com/orclpdb1",
              min=2, max=5, increment=1, threaded=True, encoding="UTF-8")
```

 See [Threads.py](https://github.com/oracle/python-cx_Oracle/tree/master/samples/Threads.py) for an example. 

 The Oracle Real-World Performance Group’s general recommendation for connection pools is use a fixed sized pool. The values of min and max should be the same (and increment equal to zero). the firewall, [resource manager](https://www.oracle.com/pls/topic/lookup?ctx=dblatest&id=GUID-2BEF5482-CF97-4A85-BD90-9195E41E74EF) or user profile [IDLE_TIME](https://www.oracle.com/pls/topic/lookup?ctx=dblatest&id=GUID-ABC7AE4D-64A8-4EA9-857D-BEF7300B64C3) should not expire idle sessions. This avoids connection storms which can decrease throughput. See [Guideline for Preventing Connection Storms: Use Static Pools](https://www.oracle.com/pls/topic/lookup?ctx=dblatest&id=GUID-7DFBA826-7CC0-4D16-B19C-31D168069B54), which contains details about sizing of pools. 

oracle 官方推荐使用固定大小的进程池: **静态连接池**.

## Connect Object



## Cursor Object



## SQL Execution

## PL/SQL Execution

## Using Binding Variables

> 占位符(placeholder) 标记 应用被应用和返回

[绑定变量](https://cx-oracle.readthedocs.io/en/latest/user_guide/bind.html#bind)

官方文档:

```plsql
-- 这是绑定变量
-- a colon-prefixed identifier or numeral. 
:name
:1
```





### 使用说明

- 只能绑定数据, 而不能绑定,表名等其他数据
- 既可以传入参数, 也可以传出参数
- 支持以关键字和位置的方式绑定
- 绑定变量可以多次引用, 使用字典或者关键字参数时
- 读取到的是什么类型, 传入的就是什么类型

f-strings  : 绑定

缺点是: 调试代码时 不那么方便, 优点是 sql 防止注入, 和提高运行性能, 

### 原理解析

方法一

```python
sql = """insert into departments (department_id, department_name)
          values (:dept_id, :dept_name)"""
cursor.execute(sql, [280, "Facility"])
```

方法二: [不推荐 ] 

使用可解析字符串  这种方式会严重消耗性能

```python
did = 280
dnm = "Facility"

# !! Never do this !!
sql = f"""insert into departments (department_id, department_name)
          values ({did}, {dnm})"""
cursor.execute(sql)
```



### 使用示例

```python
# 通过位置参数, 或者默认值参数(binding by name or position)
cursor.execute("""
        insert into departments (department_id, department_name)
        values (:dept_id, :dept_name)""", dept_id=280,
        dept_name="Facility")

# alternatively, the parameters can be passed as a dictionary instead of as keyword parameters
# 可以使用字典的方式, 代替默认值参数
data = { dept_id=280, dept_name="Facility" }
cursor.execute("""
        insert into departments (department_id, department_name)
        values (:dept_id, :dept_name)""", data)

# 传出参数示例 outval
outVal = cursor.var(int)
cursor.execute("""
        begin
            :outVal := :inBindVar1 + :inBindVar2;
        end;""", outVal=outVal, inBindVar1=8, inBindVar2=7)
print(outVal.getvalue())        # will print 15

# In cx_Oracle, null values are represented by the Python singleton None.
# python中用 None 表示空值, oracle中用null表示空值
cursor.execute("""
        insert into departments (department_id, department_name)
        values (:dept_id, :dept_name)""", dept_id=280, dept_name=None)

# binding ROWID values 绑定伪列值

# fetch the row
cursor.execute("""
        select rowid, manager_id
        from departments
        where department_id = :dept_id""", dept_id=280)
rowid, manager_id = cursor.fetchone()

# update the row by binding ROWID
cursor.execute("""
        update departments set
            manager_id = :manager_id
        where rowid = :rid""", manager_id=205, rid=rowid)

# REF Cursor Bind Variables 引用游标绑定变量
# 引用游标, 被引用的游标对象变量, 数据类型


# 绑定列和表名 binding Column and Table Names
# 字符串拼接的思路
# 应用场景, 由开发者选择查询哪一列的数据
tableWhiteList = ['employees', 'departments']
tableName = getTableName() #  get the table name from user input
if tableName not in tableWhiteList:
    raise Exception('Invalid table name')
sql = 'select * from ' + tableName


# Binding Multiple Values to a SQL WHERE IN Clause
# 在 in 语句中绑定多重值

# 当参数只有在运行时才能知道时, 使用 python语句来实现
```



## Exception Handling



```python
try:
    cursor.execute("insert into customer values (101, 'Customer A')")
except cx_Oracle.IntegrityError:
    print("Customer ID already exists")
else:
    print("Customer added")
```

[错误类型](https://cx-oracle.readthedocs.io/en/latest/api_manual/module.html#exceptions)

```python
try:
    cursor.execute("insert into customer values (101, 'Customer A')")
except cx_Oracle.IntegrityError as e:
    errorObj, = e.args
    print("Customer ID already exists")
    print("Error Code:", errorObj.code)
    print("Error Message:", errorObj.message)
else:
    print("Customer added")
```

## JSON Type

[cx_Oracle参考文档](https://cx-oracle.readthedocs.io/en/latest/user_guide/json_data_type.html)

[官方参考文档2](https://docs.oracle.com/en/database/oracle/oracle-database/19/adjsn/intro-to-json-data-and-oracle-database.html#GUID-17642E43-7D87-4590-8870-06E9FDE9A6E9)



# cx_Oracle samples

```python
# 创建事务并返回错误
# create transaction and generate a recoverable error
pool = cx_Oracle.SessionPool(SampleEnv.MAIN_USER, SampleEnv.MAIN_PASSWORD,
        CONNECT_STRING, SESSION_MIN, SESSION_MAX, SESSION_INCR)
connection = pool.acquire()
cursor = connection.cursor()
cursor.execute("""
        delete from TestTempTable
        where IntCol = 1""")
cursor.execute("""
        insert into TestTempTable
        values (1, null)""")
input("Please kill %s session now. Press ENTER when complete." % \
        SampleEnv.MAIN_USER)
try:
    connection.commit() # this should fail
    sys.exit("Session was not killed. Terminating.")
except cx_Oracle.DatabaseError as e:
    errorObj, = e.args
    if not errorObj.isrecoverable:
        sys.exit("Session is not recoverable. Terminating.")
ltxid = connection.ltxid
if not ltxid:
    sys.exit("Logical transaction not available. Terminating.")
pool.drop(connection)
```





# **数据类型**

> sql 和pl/sql 在数据类型上有着细微的区别

**数据类型**: 数据类型本质上是一种 用于描述数据存储的内存结构, 用它来决定变量中存储数据的类型

**变量**: 本质上是一种用名称进行识别的标识符号, 它可以存储不同类型的数据

## 数值类型

### number(precision,scale)

precision: 精度,  scale: 刻度

| Input Data   | Specified As   | Stored As                         |
| :----------- | :------------- | :-------------------------------- |
| 7,456,123.89 | `NUMBER`       | 7456123.89                        |
| 7,456,123.89 | `NUMBER(*,1)`  | 7456123.9                         |
| 7,456,123.89 | `NUMBER(9)`    | 7456124                           |
| 7,456,123.89 | `NUMBER(9,2)`  | 7456123.89                        |
| 7,456,123.89 | `NUMBER(9,1)`  | 7456123.9                         |
| 7,456,123.89 | `NUMBER(6)`    | (not accepted, exceeds precision) |
| 7,456,123.89 | `NUMBER(7,-2)` | 7456100                           |

## 字符类型

> 重点是 `varchar2` 和 `char` 
>
> char 优势: **查询效率高**
> varchar2优势: **占用空间小**;

###  VARCHAR2(maxlength) 

**作用**: 用于存储**可变长度**的字符串

最大长度必须指定(最大长度可以是32767, 但数据库类型是4000), 因为 `varchar2` 没有默认长度

### CHAR(maxlength)

**作用**: 用于存储**指定长度**的字符串

(最大长度可以是32767, 但数据库类型是2000)

### 重点问题：定长类型和变长类型和什么区别？

回答：
两者主要的区别体现在存储上和查询效率上。
首先讲char——定长类型。
如将姓名列指定为char(8)。当保存“张三”时，数据库还会自动保存4个空格；保存“张三丰”时，数据库还会自动保存2个空格，这样每个人的姓名长度都为8，长度是固定的，所以叫做“定长”。明显，在保存信息时，定长会因为保存了很空格而多占用了磁盘空间。
数据库保存这些“多余”的空格有什么作用？
那就是查询时，在取到字段的长度以后，不再需要判断每一个姓名的实际长度，就可以取到数据。这样查询效率大大提高了。

下面再讲varchar2——变长类型。
如将姓名列指定为varchar2(8)。当保存“张三”和保存“张三丰”时，数据库都只保存数据的本身，不会自动添加空格。两个人姓名的长度分别为4和6，长度是变化的，所以叫做“变长”。这样没有多占用任何磁盘空间。
但是在查询时，每个人的姓名的长度都不同，必须先判断后取数据，所以查询效率比char类型要低。

### varchar / varchar2 区别

varchar  -- 存放定長的字符数据，最长2000個字符；

varchar2 -- 存放可变长字符数据，最大长度为4000字符。 

 

目前没有本质的区别 
但是：varchar2是oracle提供的独特的数据类型oracle保证在任何版本中该数据类型向上和向下兼容但不保证varchar，这是因为varchar是标准sql提供的数据类型有可能随着sql标准的变化而改变 char对于不够位数的用空格添补，varchar2不用。

可以试着比较一下。 varchar2把所有字符都占两字节处理(一般情况下)，varchar只对汉字和全角等字符占两字节，数字，英文字符等都是一个字节； VARCHAR2把空串等同于null处理，而varchar仍按照空串处理； VARCHAR2字符要用几个字节存储，要看数据库使用的字符集， 
varchar2和varchar的目前没有区别,不过ocacle以后的版本就不支持varchar类型,如果想新版本的数据库兼容就不要用varchar,如果想和其它数据库兼容就不要用varchar2 大部分情况下建议使用varchar2类型，可以保证更好的兼容性。

## 日期类型

> Date
>
> sysdate
>
> to_char
>
> to_date
>
> extract

日期转换

| Format                        | Result                         |
| ----------------------------- | ------------------------------ |
| YYYY-MM-DD                    | 2015/6/15                      |
| YYYY-MON-DD                   | 2015-JUN-15                    |
| YYYY-MM-DD HH24:MI:SS FF3     | 2015-06-15 13:18:10 700        |
| YYYY-MM-DD HH24:MI:SS FF3 TZR | 2015-06-15 13:18:10 700 +08:00 |
| DS                            | 6/15/2015                      |
| DL                            | Monday, June 15, 2015          |
| TS                            | 1:18:10 PM                     |

```plsql
-- 日期转字符串
to_char(sysdate, 'YYYY-MM-DD HH24:MI:SS')

-- 字符串转日期
to_date('2019-11-18 13:06:33', 'YYYY-MM-DD HH24:MI:SS')

--系统日期格式化 -- 显示的时候还是会以日期的格式显示
to_date(to_char(sysdate, 'YYYY'), 'YYYY')

-- 修改会话
ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD HH24:MI:SS';

-- 显示星期
select to_char(sysdate, 'day','NLS_DATE_LANGUAGE=AMERICAN') from dual;
select (case to_char(sysdate-1,'day','NLS_DATE_LANGUAGE=AMERICAN')
  when 'monday' then 1 
  when 'tuesday' then 2
  when 'wednesday' then 3
  when 'thursday' then 4
  when 'friday' then 5
  when 'saturday' then 6
  when 'sunday' then 7 
  else 0
 end
) dayth from dual;

-- 显示时间
select extract(month from sysdate) from dual;

```



## 特殊数据类型

为了提高用户的编程效率和解决复杂的业务逻辑需求，PL/SQL语言除了可以使用Oracle规定的基本数据类型外，还提供了3种特殊的数据类型，但这3种类型仍然是建立在基本数据类型基础之上的。

### %TYPE

**作用**: 使用％TYPE关键字可以声明一个与指定列相同的数据类型，它通常紧跟在指定列名的后面。

**好处**: 不必去查询表中各个列的数据类型, 就可以确保所定义的变量能够存储检索的数据. 如果对已有列的数据类型进行修改, 定义变量中的数据类型也会跟着调整

```plsql
    DbPatientPhone T_IMAGEREPORT.HPATIENTPHONE%TYPE;
    --该句的作用是直接把 t_imagereport.hpatientphone的数据类型绑定给当前变量
```



### RECORD

### %ROWTYPE

## 变量和常量

**变量**: 变量是指其值在程序运行过程中可以改变的数据存储结构, 定义变量必须的元素就是**变量名**和**数据类型**, 另外还有可选择的**初始值**.

**常量**: 	常量是指其值在程序运行过程中不可改变的数据存储结构，定义常量必需的元素包括常量名、数据类型、常量值和constant关键字

> 对于一些固定的数值，比如圆周率、光速等，为了防止其不慎被改变，最好定义成常量。

**变量初始化**: PL/SQL中, 未初始化变量应该被赋值为 `NULL`

```plsql
<变量名> <数据类型>[(长度):=<初始值>];  --标准语法格式

var_countryname varchar2(50):='中国';


<常量名> constant <数据类型>:=<常量值>; 
con_day constant number:=365;
```



# 基础语义

:  占位符 绑定变量( 一般不需要)

:  只会在python_oracle_sql语句中(用于绑定变量)

[绑定变量bind variables](https://cx-oracle.readthedocs.io/en/latest/user_guide/bind.html#bind)

db_name

instance_id(SID):

oracle_sid: 操作系统环境变量

service_name: 数据库服务名, 与数据库名相同

# 常见需求 和 解决方案

当插入的值为空,而有不能是空值是, 使用 `default` 关键字代替

### 存储过程, 声明变量 获取数据时

```plsql
声明变量后 获取值
select 数据1
into 变量
from 表
where 约束;
```

## 空字段的解决方案

null 无法建立索引, 但是 `''` 空字符串可以

mysql 中 null 和 `''` 是不一样的, 但是 oracle 中是一样的

```plsql
数值类型 : null
字符串类型: '' > null 优先使用空字符串
null 无法建立索引, 但是 空字符串可以
默认值关键字替代: default
```

## 多表关联更新

两种思路 : 联表更新 , 使用plsql游标遍历

[参考链接](https://blog.csdn.net/zhangzhongzhong/article/details/51272586)

### 使用 游标法

### 合并法 merge合并 已验证  推荐

```plsql
MERGE INTO  t_study a
   USING  t_imagereport b
 ON ( a.hospital_id=b.hospital_id and a.study_pk=b.study_pk and a.ACCESSIONNUMBER=b.HACCESSIONNUMBER )
 WHEN MATCHED THEN
  UPDATE SET a.PATIENT_HOSID = b.HPATIENTID  where  b.SERVICEMODALITIES = 'RF'
        ;

```

## 统计 不同值

```plsql
select sum(decode(upload_flag,2,1,0)) 已上传,
 sum(decode(upload_flag,0,1,0)) 未上传
 from t_image where HOSPITAL_ID='04550005';
```



# CMD语句操作



```sql
--help

-- desc 
desc table; --查看表结构

show 

show all
show parameters para [para]

show parameter processs; --查看所有进程

-- 设置系统环境变量
set oracle_sid = ??

-- 系统表查询  一般用户没有查询权限
desc obj$;
```



```sql
-- 查看所有数据库
select * from v$database;


-- 删除表中的所有数据;
delete from t_imagereport;
commit;

-- 查看所有用户
select * from all_users;

-- 保存数据库
save
save file_name;  --保存缓存区语句到文件



```

## 高级查询

> 同时存在 sql语句中高级查询

```plsql
select dump('') from dual;


```



# SQL语句操作

> 本次工作 不那么在意性能 先注重实现

## 语法区别

限制行数 -- 筛选

子查询  

## 数据库管理

```plsql
-- 登录到数据库服务器 
sqlplus /as sysdba
sqlplus sys/<password> as sysdba;

--scott模式登录远程数据库 也可以使用别名登录 需要配置tnsnames
sqlplus <db_user>/<db_password>@host:port/db_name
sqlplus db_user/db_password@orcl


--已经进入sql环境
connect db_user/db_password@host:port/db_name

sqlplus
sys as sysdba;
>>> enter password:
<password> 


-- 创建用户   -- 注意用户名和密码应该是 普通变量形式
create user wwfyde identified by ******;

-- 设置权限

-- 刷新权限
flush privileges;

-- 创建表


```

创建用户实战

```sql
create user wwfyde identified by wawawa;
```



## 表管理

```sql
-- 查看示例名称
show parameter service_name

----------查看数据库名
show parameter db_name

----------查看所有表
SELECT TABLE_NAME FROM USER_TABLES
-- 查看表结构
desc wwfyde;

--统计字段列数
select count(*) from user_tab_columns where table_name=upper('t_imagereport');--表名

-- 添加表字段
ALTER TABLE 表明 ADD ( 字段 数据类型 [DEFAULT '_'] [null/ not null]);
alter table t_imagereport add (HSHOOTDOCTOR varchar2(36));
alter table t_imagereport add (HEXAMINE_METHOD varchar2(150));
comment on column t_imagereport.hexamine_method is '检查方法';
commit;

-- 为表格和字段增加注解
comment on table T_STUDY is "基础检查表"
comment on column T_STUDY.ZEXPANDED is '保留字段'

```

## 高级查询

> 同时存在 sql语句中高级查询

```plsql

-- 序列对象
-- 检查序列是否有效
select REPORT_SEQ.nextval from dual;
```



## 查询 - select



```sql
-- 限制查询行数
select * 
from <table> 
where rownum < 3;    
```



## 更新 - update

```sql
/* 更新数据 */

update <table> set ename= '西方' where empno= 9527;

--替换字段  如果为空  set  inpatient_id = inpatient_zyh

```

## 增加 - insert

```plsql
insert into <table or view> values('a', 1234, '用户名', default);
```





## 删除  - delete

```plsql
delete from <table or view> where <id='10086'>;


delete from <table>;  --这会删除表中的所有数据

-- 示例场景
delete from t_imagereport where servicemodalities is null;
commit;
```



## 提交 - commit

系统在执行 `create view` 语句创建视图时, 只是将视图的定义信息存入**数据字典**, 并不会执行其中的 `select` 语句. 

在对视图进行查询时, 系统才会根据视图的定义从基础表中获取数据

由于select是使用最广泛, 最灵活的语句, 通过它可以构造一些复杂的查询, 从而构造一个复杂的视图. 

```plsql
--scott模式下
commit

--sql语句中
commit;


--python中
conn.cur.commit()
```

## 过滤 - where



## 高级语法

for update

[官方文档解读](https://docs.oracle.com/javadb/10.8.3.0/ref/rrefsqlj31783.html)

```plsql
--select 语句时, 游标对象默认是只读的, 
```



```sql
-- 从t_study中获取的字段, 使用过程内变量存储
select study_pk, study_instanceuid, modality
into vStudyPk, vStudyInstanceuid, vModality
from t_study
where hospital_id = in_hospital_id
      and accessionnumber = in_accession_number
      and rownum = 1
      for update;--悲观锁, 行级锁, 只允许被当前语句更改操作, 别的连接对象可以查询, 但是不能更新(阻塞)
```



## dual表查询

 Dual 是 Oracle中的一个实际存在的表，任何用户均可读取，常用在没有目标表的Select语句块中 

```plsql
-- 查看当前连接用户
select user from dual;



-- 查看系统当前时间 日期
select sysdate from dual;
select to_char(sysdate,'day YYYY - MM - DD HH24: MI: SS' ) from dual;
-- day 星期几
--YYYY year
--MM month
--DD 天
--HH hour
--MI minute
--SS second

```



# PL/SQL语法

PL/SQL - Procedural Language/SQL 是Oracle在数据库中引入的一种过程化编程语言. 构建于SQL之上, 可以用来编写包含SQL语句的程序

## 说明简介

### 特点

PL/SQL（Procedural Language/SQL）是一种过程化语言，**在PL/SQL中可以通过IF语句或LOOP语句实现控制程序的执行流程，甚至可以定义变量，以便在语句之间传递数据信息**，这样PL/SQL语言就能够实现**操控程序处理的细节过程**，不像普通的SQL语句（如DML语句、DQL语句）那样没有流程控制，也不存在变量，因此使用PL/SQL语言可以实现比较复杂的业务逻辑。

PL/SQL是Oracle的专用语言，它是对标准SQL语言的扩展，它允许在其内部嵌套普通的SQL语句，这样就将SQL语句的数据操纵能力、数据查询能力和PL/SQL的过程处理能力结合在一起，达到取长补短的目的。

### 块结构

PL/SQL程序都是以块（BLOCK）为基本单位，整个PL/SQL块分三部分：声明部分（用DECLARE开头）、执行部分（以BEGIN开头）和异常处理部分（以EXCEPTION开头）。其中执行部分是必须的，其他两个部分可选。无论PL/SQL程序段的代码量有多大，其基本结构都是由这三部分组成。标准PL/SQL块的语法格式如下：

```plsql
--这是一个PL/SQL程序块

[declare]
--声明部分, 可选
--声明程序块中所用到的变量, 常量和游标等
--声明的内容只能在当前块中使用

begin
--执行部分, 程序的主体, 主要的逻辑控制和运算都在这部分完成, 在执行部分可以包含多个个PL/SQL语句和SQL语句

[Exception]
--异常处理部分, 可选

end

```

## 语法规范

- 每一条语句都必须以分号结束, 每条SQL语句可以写成多行的形式, 但同样必须使用分号结束
- 一行中可以有多条SQL语句, 但是他们之间必须以分号分隔
- 单行注释 `--这是单行注释` , 多行注释 `/* 这是多行注释 */` . 

### **标识符**(identifier)

一行一个变量, 变量最大长度为30字符, 不要使用Oracle关键字作为变量. 

| 符号 | 意义           |
| ---- | -------------- |
| :    | 绑定变量指示符 |
| %    | 属性指示符     |
| :=   | 赋值操作符     |
| ,    | 项目分隔符     |
| ..   | 范围操作符     |
|      |                |

### 文本

- 数字文本: 不要添加引号
- 字符文本: 是以 `'` **单引号** 引住的**单个字符**
- 字符串文本: 必须用 `'` **单引号** 引住
- 日期文本: 必须与日期格式和日期语言匹配

### 数据类型



### 关键字

```plsql
and or in 
```

```plsql
if <表达式> then
执行语句

```



## 流程控制语句

结构控制语句是所有过程性程序设计语言的关键，因为只有能够进行结构控制才能灵活地实现各种操作和功能

若要在PL/SQL中实现控制程序的执行流程和实现复杂的业务逻辑计算，就必须使用流程控制语句，因为只有能够进行结构控制才能灵活地实现各种复杂操作和功能，PL/SQL中的流程控制语句主要包括**选择语句**、**循环语句**两大类，下面将对这两种控制语句进行详细讲解。

### 选择语句

### IF -- THEN -- ELSIF -- ELSE语句

```plsql
if <condition_expression> then
plsql_sentence1

elsif <condition_expression> then
plsql_sentence2

else
plsql_sentence3

end if;
```



### CASE语句

> 语法几乎与if语句一直, 对 **变量值** 进行判定

```plsql
case < selector>  --一个变量值, 被检测的值, 通常称为选择器
when <expression_1> then plsql_sentence_1;  --表示的值
when <expression_2> then plsql_sentence_2;

end case;
```



### 循环语句

当程序需要反复执行某一操作时，就必须使用循环结构。PL/SQL中的循环语句主要包括

- LOOP语句
- WHILE语句
- FOR语句

### LOOP语句

LOOP语句会先执行一次循环体，然后再判断“EXIT WHEN”关键字后面的条件表达式的值是true还是false，如果是true，则程序会退出循环体，否则程序将再次执行循环体，这样就使得程序至少能够执行一次循环体

```plsql
loop

plsql_sentce;
exit when <end_condition_expression> --循环结束条件表达式

end loop;

/* 这是示例 */
declare
i int:=0
sum_i int:=0
begin
loop
i :=i + 1;
sum_i := sum_i + i;
exit when i=100;
end loop;
dbms_output.put_line('前100个自然数的和是:'||sum_i)
end;
```

### WHILE语句

```plsql
while condition_expression loop  --条件表达式, 结果为真就一直循环, 为假就退出
plsql_sentence;
end loop;
```

### FOR语句

```plsql
for variable_counter_name in [reverse] lover_limit..upper_limit loop
plsql_sentence;
end loop;
```

### GOTO语句[可选]

无条件转向语句

```plsql
goto goto_mark;
```

## EXISTS and NOT EXISTS

根据*子语句*是否有返回值来确定是否执行*主语句*

```plsql

```



## PL/SQL游标

# Oracle函数

over

## [chr](https://docs.oracle.com/cd/B19306_01/server.102/b14200/functions019.htm) - 将数字转化为 varchar2 字符

`CHR` returns the character having the binary equivalent to `n` as a `VARCHAR2` value in either the database character set or, if you specify `USING` `NCHAR_CS`, the national character set.

```plsql
SELECT CHR(67)||CHR(65)||CHR(84) Dog FROM DUAL;

Dog
---
CAT
```

## max - 最大

## replace - 普通替换

```plsql

```



## regexp_replace - [正则替换](https://docs.oracle.com/database/121/SQLRF/functions163.htm#SQLRF06302)

> 支持多重替换

regexp_replace[source_string,pattern,replace_str, position,occurrence,modifier]

modifier: 修饰

```plsql
select regexp_replace('1233;；123445562', '[;；]', '') from dual;

SELECT
  REGEXP_REPLACE(phone_number,
                 '([[:digit:]]{3})\.([[:digit:]]{3})\.([[:digit:]]{4})',
                 '(\1) \2-\3') "REGEXP_REPLACE"
  FROM employees
  ORDER BY "REGEXP_REPLACE";
```



## regexp_instr - 

## trunc - 日期截取

```plsql

```



## to_date - 转换为日期



## to_char - 转换为字符串

`TO_CHAR(BirthDate,'YYYYMMDD')`

```plsql

select Medi_id, His_request_id, Examine_id, Accession_number, Patient_id,
Inpatient_id, Bed_id, Patient_name, Patient_sex, Patient_age,
TO_CHAR(BirthDate,'YYYYMMDD'), Address, Mobile_phoe, Card_type,Id_card_no,
Modality, Examine_items, Examine_body, Diagnosis_type, Request_dept,
Request_doc, Cinical_diagnosis, Patient_history, TO_CHAR(Regtime, 'YYYY/MM/DD HH24:MI:SS'),
TO_CHAR(Report_time, 'YYYY/MM/DD HH24:MI:SS'),
report_doc, Audit_time, audit_doc,
Revise_time, revise_doc,
image_evidences, image_diagnosis, masculine_flag, report_status_code, report_status,
print_flag, TO_CHAR(Stduy_time, 'YYYY/MM/DD HH24:MI:SS'), image_path, study_uuid, '{}'
from Reportinfoview where Accession_number = '{}' and
Report_status_code in ('50','60','90')
```



## nextval - 下一个序列



## listagg - 合并查询结果

> mysql中使用 group_concat()函数

```plsql
select LISTAGG(SERIES_PK, ',')
        within group(order by SERIES_PK) series
from T_SERIES where STUDY_PK = 86643;
```



## pivot - 行转列

## count - 统计

统计不为空的行数

count(*) 统计行数

count(patient_id) 统计不为空的数据

```plsql

```

## over - *分析函数*

> 也叫开窗函数, 区别于聚合函数 

分析函数用于计算基于组的某种聚合值，它和聚合函数的不同之处是：对于每个组返回多行，而聚合函数对于每个组只返回一行。

**聚合函数每个组返回一行，而开窗函数返回多行。所有有些时候使用开窗函数时需要去重。**

*[ 对被分组的数据进行再开窗和 ]*

over() 的三个子句 `partition by` , `order by` , `rows`

   开窗函数指定了分析函数工作的数据窗口大小，这个数据窗口大小可能会随着行的变化而变化，举例如下：

```plsql
slect count(*) over(pat) from 
```



## 字符统计 - length

## 字节统计 - lengthb

## 字符截取 - substr

## 字节截取 - substrb



# 事务-Transaction

```plsql

```

```python
# cx_oracle 事务示例
```



