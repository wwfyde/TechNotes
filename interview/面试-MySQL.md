# MySQL面试题

> [参考链接](https://zhuanlan.zhihu.com/p/140876416)

数据库三大范式

## MyISAM索引与InnoDB索引的区别？ 

- InnoDB索引是聚簇索引，MyISAM索引是非聚簇索引。
- InnoDB的主键索引的叶子节点存储着行数据，因此主键索引非常高效。
- MyISAM索引的叶子节点存储的是行数据地址，需要再寻址一次才能得到数据。
- InnoDB非主键索引的叶子节点存储的是主键和其他带索引的列数据，因此查询时做到覆盖索引会非常高效。

## InnoDB引擎的4大特性 

- 插入缓冲（insert buffer)
- 二次写(double write)
- 自适应哈希索引(ahi)
- 预读(read ahead)

## 什么是索引？ 

- 索引是一种特殊的文件(InnoDB数据表上的索引是表空间的一个组成部分)，它们包含着对数据表里所有记录的引用指针。
- 索引是一种数据结构。数据库索引，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中数据。索引的实现通常使用B数及其变种B+数。
- 更通俗的说，索引就相当于目录。为了方便查找书中的内容，通过对内容建立索引形成目录。索引是一个文件，它是要占据物理空间的。

## 索引有哪些优缺点？ 

- 索引的优点：可以大大加快数据的检索速度，这也是创建索引的最主要的原因。通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。
- 索引的缺点：时间方面：创建索引和维护索引要耗费时间，具体地，当对表中的数据进行增加、删除和修改的时候，索引也要动态的维护，会降低增/改/删的执行效率；空间方面：索引需要占物理空间。

## 索引有哪几种类型？ 

- 主键索引: 数据列不允许重复，不允许为NULL，一个表只能有一个主键。
- 唯一索引: 数据列不允许重复，允许为NULL值，一个表允许多个列创建唯一索引。可以通过 ALTER TABLE table_name ADD UNIQUE (column); 创建唯一索引可以通过 ALTER TABLE table_name ADD UNIQUE (column1,column2); 创建唯一组合索引
- 普通索引: 基本的索引类型，没有唯一性的限制，允许为NULL值。可以通过ALTER TABLE table_name ADD INDEX index_name (column);创建普通索引可以通过ALTER TABLE table_name ADD INDEX index_name(column1, column2, column3);创建组合索引。
    - hash 
    - btree

- 全文索引： 是目前搜索引擎使用的一种关键技术。可以通过ALTER TABLE table_name ADD FULLTEXT (column);创建全文索引



## 索引的数据结构（b树，hash）

索引的数据结构和具体存储引擎的实现有关，在MySQL中使用较多的索引有Hash索引，B+树索引等，而我们经常使用的InnoDB存储引擎的默认索引实现为：B+树索引。对于哈希索引来说，底层的数据结构就是哈希表，因此在绝大多数需求为单条记录查询的时候，可以选择哈希索引，查询性能最快；其余大部分场景，建议选择BTree索引。

- **1. B树索引**

mysql通过存储引擎取数据，基本上90%的人用的就是InnoDB了，按照实现方式分，InnoDB的索引类型目前只有两种：BTREE（B树）索引和HASH索引。B树索引是Mysql数据库中使用最频繁的索引类型，基本所有存储引擎都支持BTree索引。通常我们说的索引不出意外指的就是（B树）索引（实际是用B+树实现的，因为在查看表索引时，mysql一律打印BTREE，所以简称为B树索引）

- **2. B+tree性质**

n棵子tree的节点包含n个关键字，不用来保存数据而是保存数据的索引。
所有的叶子结点中包含了全部关键字的信息，即指向含这些关键字记录的指针，且叶子结点本身依关键字的大小自小而大顺序链接。
所有的非终端结点可以看成是索引部分，结点中仅含其子数中的最大（或最小）关键字。
B+ 树中，数据对象的插入和删除仅在叶节点上进行。
B+树有2个头指针，一个是树的根节点，一个是最小关键码的叶节点。

- **3. 哈希索引**

简要说下，类似于数据结构中简单实现的HASH表（散列表）一样，当我们在mysql中用哈希索引时，主要就是通过Hash算法（常见的Hash算法有直接定址法、平方取中法、折叠法、除数取余法、随机数法），将数据库字段数据转换成定长的Hash值，与这条数据的行指针一并存入Hash表的对应位置；如果发生Hash碰撞（两个不同关键字的Hash值相同），则在对应Hash键下以链表形式存储。当然这只是简略模拟图。

## 索引的基本原理

索引用来快速地寻找那些具有特定值的记录。如果没有索引，一般来说执行查询时遍历整张表。
索引的原理很简单，就是把无序的数据变成有序的查询把创建了索引的列的内容进行排序对排序结果生成倒排表在倒排表内容上拼上数据地址链在查询的时候，先拿到倒排表内容，再取出数据地址链，从而拿到具体数据

## 索引算法有哪些？

索引算法有 BTree算法和Hash算法

- **1. BTree算法**

BTree是最常用的mysql数据库索引算法，也是mysql默认的算法。因为它不仅可以被用在=,>,>=,<,<=和between这些比较操作符上，而且还可以用于like操作符，只要它的查询条件是一个不以通配符开头的常量。

- **2. Hash算法**

Hash Hash索引只能用于对等比较，例如=,<=>（相当于=）操作符。由于是一次定位数据，不像BTree索引需要从根节点到枝节点，最后才能访问到页节点这样多次IO访问，所以检索效率远高于BTree索引。

## 索引设计的原则？ 

- 适合索引的列是出现在where子句中的列，或者连接子句中指定的列。
- 基数较小的类，索引效果较差，没有必要在此列建立索引
- 使用短索引，如果对长字符串列进行索引，应该指定一个前缀长度，这样能够节省大量索引空间
- 不要过度索引。索引需要额外的磁盘空间，并降低写操作的性能。在修改表内容的时候，索引会进行更新甚至重构，索引列越多，这个时间就会越长。所以只保持需要的索引有利于查询即可。

## 创建索引的原则

索引虽好，但也不是无限制的使用，最好符合一下几个原则最左前缀匹配原则，组合索引非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，比如a = 1 and b = 2 and c > 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。较频繁作为查询条件的字段才去创建索引更新频繁字段不适合创建索引若是不能有效区分数据的列不适合做索引列(如性别，男女未知，最多也就三种，区分度实在太低)尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要加(a,b)的索引，那么只需要修改原来的索引即可。定义有外键的数据列一定要建立索引。对于那些查询中很少涉及的列，重复值比较多的列不要建立索引。对于定义为text、image和bit的数据类型的列不要建立索引。

## 创建索引时需要注意什么？ 

- 非空字段：应该指定列为NOT NULL，除非你想存储NULL。在mysql中，含有空值的列很难进行查询优化，因为它们使得索引、索引的统计信息以及比较运算更加复杂。你应该用0、一个特殊的值或者一个空串代替空值；
- 取值离散大的字段：（变量各个取值之间的差异程度）的列放到联合索引的前面，可以通过count()函数查看字段的差异值，返回值越大说明字段的唯一值越多字段的离散程度高；
- 索引字段越小越好：数据库的数据存储以页为单位一页存储的数据越多一次IO操作获取的数据越大效率越高。

## 使用索引查询一定能提高查询的性能吗？

通常，通过索引查询数据比全表扫描要快。但是我们也必须注意到它的代价。
索引需要空间来存储，也需要定期维护， 每当有记录在表中增减或索引列被修改时，索引本身也会被修改。 这意味着每条记录的INSERT，DELETE，UPDATE将为此多付出4，5 次的磁盘I/O。 因为索引需要额外的存储空间和处理，那些不必要的索引反而会使查询反应时间变慢。使用索引查询不一定能提高查询性能，索引范围查询(INDEX RANGE SCAN)适用于两种情况:

- 基于一个范围的检索，一般查询返回结果集小于表中记录数的30%
- 基于非唯一性索引的检索

## 百万级别或以上的数据如何删除？

关于索引：由于索引需要额外的维护成本，因为索引文件是单独存在的文件,所以当我们对数据的增加,修改,删除,都会产生额外的对索引文件的操作,这些操作需要消耗额外的IO,会降低增/改/删的执行效率。所以，在我们删除数据库百万级别数据的时候，查询MySQL官方手册得知删除数据的速度和创建的索引数量是成正比的。所以我们想要删除百万数据的时候可以先删除索引（此时大概耗时三分多钟）然后删除其中无用数据（此过程需要不到两分钟）删除完成后重新创建索引(此时数据较少了)创建索引也非常快，约十分钟左右。与之前的直接删除绝对是要快速很多，更别说万一删除中断,一切删除会回滚。那更是坑了。

## 什么是最左前缀原则？什么是最左匹配原则？

顾名思义，就是最左优先，在创建多列索引时，要根据业务需求，where子句中使用最频繁的一列放在最左边。
最左前缀匹配原则，非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，比如a = 1 and b = 2 and c > 3 and d = 4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。
=和in可以乱序，比如a = 1 and b = 2 and c = 3 建立(a,b,c)索引可以任意顺序，mysql的查询优化器会帮你优化成索引可以识别的形式

## B树和B+树的区别

在B树中，你可以将键和值存放在内部节点和叶子节点；但在B+树中，内部节点都是键，没有值，叶子节点同时存放键和值。
B+树的叶子节点有一条链相连，而B树的叶子节点各自独立。

## 使用B树的好处

B树可以在内部节点同时存储键和值，因此，把频繁访问的数据放在靠近根节点的地方将会大大提高热点数据的查询效率。这种特性使得B树在特定数据重复多次查询的场景中更加高效。

## 使用B+树的好处

由于B+树的内部节点只存放键，不存放值，因此，一次读取，可以在内存页中获取更多的键，有利于更快地缩小查找范围。 B+树的叶节点由一条链相连，因此，当需要进行一次全数据遍历的时候，B+树只需要使用O(logN)时间找到最小的一个节点，然后通过链进行O(N)的顺序遍历即可。而B树则需要对树的每一层进行遍历，这会需要更多的内存置换次数，因此也就需要花费更多的时间

## 什么是聚簇索引？何时使用聚簇索引与非聚簇索引？

聚簇索引：将数据存储与索引放到了一块，找到索引也就找到了数据
非聚簇索引：将数据存储于索引分开结构，索引结构的叶子节点指向了数据的对应行，myisam通过key_buffer把索引先缓存到内存中，当需要访问数据时（通过索引访问数据），在内存中直接搜索索引，然后通过索引找到磁盘相应数据，这也就是为什么索引不在key buffer命中时，速度慢的原因。

## 非聚簇索引一定会回表查询吗？

不一定，这涉及到查询语句所要求的字段是否全部命中了索引，如果全部命中了索引，那么就不必再进行回表查询。
举个简单的例子，假设我们在员工表的年龄上建立了索引，那么当进行select age from employee where age < 20的查询时，在索引的叶子节点上，已经包含了age信息，不会再次进行回表查询。

## 联合索引是什么？为什么需要注意联合索引中的顺序？

MySQL可以使用多个字段同时建立一个索引，叫做联合索引。在联合索引中，如果想要命中索引，需要按照建立索引时的字段顺序挨个使用，否则无法命中索引。
MySQL使用索引时需要索引有序，假设现在建立了"name，age，school"的联合索引，那么索引的排序为: 先按照name排序，如果name相同，则按照age排序，如果age的值也相等，则按照school进行排序。
当进行查询时，此时索引仅仅按照name严格有序，因此必须首先使用name字段进行等值查询，之后对于匹配到的列而言，其按照age字段严格有序，此时可以使用age字段用做索引查找，以此类推。因此在建立联合索引的时候应该注意索引列的顺序，一般情况下，将查询需求频繁或者字段选择性高的列放在前面。此外可以根据特例的查询或者表结构进行单独的调整。





# 事务



# 锁



# 常见面试题

## 悲观锁定(pessimistic)

> 
>
> 严格来讲叫悲观并发控制

### for update

```mysql
-- 开启事务
START TRANSACTION;

-- 查询商品信息，并获取排他锁
SELECT * FROM products WHERE id = 1 FOR UPDATE;

-- 修改商品信息
UPDATE products SET price = 100 WHERE id = 1;

-- 提交事务
COMMIT;
```

- 优化策略
  - 使用乐观锁来减少锁竞争。
  - 使用数据库分片来提高并发访问性能。
  - 使用缓存来减少数据库访问次数。

### consul  

## 乐观锁定(Optimistic locking)

> Optimistic concurrency control——乐观并发控制

# 分库分表