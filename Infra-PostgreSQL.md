# PostgreSQL

> psql

## Links

- []()
- Postgres Docs
- [★Postgres Tutorials(Neon) ](https://neon.tech/postgresql/tutorial)
- [Postgres 基本语句](https://neon.tech/postgresql/postgresql-getting-started)
- [Postgres Tutorials - 已跳转至Neon](https://www.postgresqltutorial.com)
- [Postgres Python](https://www.postgresqltutorial.com/postgresql-python/)

## 学习目标

MVCC 多版本控制

## quickstart

PostgreSQL is pronounced Post-Gres-Q-L. (For those curious about how to say "PostgreSQL", an [audio file](http://www.postgresql.org/files/postgresql.mp3) is available.)

## 安装与配置



## 初始配置

By default, PostgreSQL only allows connections from the local machine using Unix domain sockets or TCP/IP connections. Other machines will not be able to connect unless you modify listen_addresses in the postgresql.conf file, enable host-based authentication by modifying the $PGDATA/pg_hba.conf file, and restart the database server.

默认情况下，PostgreSQL 仅允许使用 Unix 域套接字或 TCP/IP 连接从本地计算机进行连接。除非您修改 postgresql.conf 文件中的listen_addresses，通过修改 $​PGDATA/pg_hba.conf 文件启用基于主机的身份验证，然后重新启动数据库服务器，否则其他计算机将无法连接。

```postgresql


sudo -i -u postgres
psql

# 设置密码
ALTER USER postgres PASSWORD 'newpassword';

-- 修改listen_address 配置
listen_address='*'

-- 修改权限 /etc/postgres/pg_hba.conf
# TYPE  DATABASE        USER            ADDRESS                 METHOD
host    all             all             192.168.0.0/16          scram-sha-256
```

## 性能优化

#### Query Changes 查询更改

This involves modifying queries to obtain better performance:
这涉及修改查询以获得更好的性能：

- Creation of indexes, including expression and partial indexes
    创建索引，包括表达式索引和部分索引
- Use of COPY instead of multiple INSERTs
    使用 COPY 而不是多个 INSERT
- Grouping of multiple statements into a single transaction to reduce commit overhead
    将多个语句分组到单个事务中，以减少提交开销
- Use of CLUSTER when retrieving many rows from an index
    从索引中检索多行时使用 CLUSTER
- Use of LIMIT for returning a subset of a query's output
    使用 LIMIT 返回查询输出的子集
- Use of Prepared queries
    使用准备好的查询
- Use of ANALYZE to maintain accurate optimizer statistics
    使用 ANALYZE 维护准确的优化器统计信息
- Regular use of VACUUM or pg_autovacuum
    经常使用 VACUUM 或 pg_autovacuum
- Dropping of indexes during large data changes
    在大型数据更改期间删除索引

#### Server Configuration 服务器配置

A number of postgresql.conf settings affect performance. For more details, see Administration Guide/Server Run-time Environment/Run-time Configuration.
许多 postgresql.conf 设置会影响性能。有关详细信息，请参阅管理指南/服务器运行时环境/运行时配置。

## 日志和错误

https://www.postgresql.org/docs/current/runtime-config-logging.html

# 数据库设计

## 规约

> 参考自(阿里巴巴Java开发手册(泰山版).pdf)

- 【强制】 表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。

  - 说明：任何字段如果为非负数，必须是 unsigned。
  - 注意：POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在<resultMap>设置从 is_xxx 到Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx 的命名方式是为了明确其取值含义与取值范围。
  - 正例：表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除。

- 【强制】表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。

  - 说明：MySQL 在 Windows 下不区分大小写，但在 Linux 下默认是区分大小写。因此，数据库名、表名、字段名，都不允许出现任何大写字母，避免节外生枝。
  - 正例：aliyun_admin，rdc_config，level3_name
  - 反例：AliyunAdmin，rdcConfig，level_3_name

- 【强制】表名不使用复数名词。

  说明：表名应该仅仅表示表里面的实体内容，不应该表示实体数量，对应于 DO 类名也是单数形式，符合

  表达习惯。

- 【强制】禁用保留字，如 desc、range、match、delayed 等，请参考 MySQL 官方保留字。

- 【强制】主键索引名为 `pk_字段名`；唯一索引名为 uk字段名；普通索引名则为 `idx_字段名`

  - 说明：pk_ 即 primary key；uk_ 即 unique key；idx_ 即 index 的简称。

- 【强制】小数类型为 decimal，禁止使用 float 和 double。

  - 说明：在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数并分开存储。

- 【强制】如果存储的字符串长度几乎相等，使用 char 定长字符串类型。

- 【强制】varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引效率。

- 【强制】表必备三字段：id, gmt_create, gmt_modified。

  - 说明：其中 id 必为主键，类型为 bigint unsigned、单表时自增、步长为 1。gmt_create, gmt_modified的类型均为 datetime 类型，前者现在时表示主动式创建，后者过去分词表示被动式更新。

## 主键

- INT 大部分场景可用
- UUID v7> v4 和INT一样的检索性能

推荐

```sql
-- 推荐新项目采用 GENERATED [ALWAYS|BY DEFAULT] AS IDENTITY 语法，符合 SQL 标准，迁移性好、权限更细粒度。
CREATE TABLE orders (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ...
);
```



## relationship

一对多(one-to-many):  一个父表的**一行**可以对应子表的**多行**, 在子表中添加一个外键(Foreign Key, FK) 指向父表

```sql
```



```python
# 使用SQLAlchemy

```



# psql

[psql commands](https://www.postgresqltutorial.com/postgresql-administration/psql-commands/)

```postgresql
-- login psql
psql -U postgrs -d dify -W -- entering and then typing password

-- connect to database
psql -d database -U  user -W
psql -h host -d database -U user -W
-- In case you want to use SSL mode for the connection, just specify it as shown in the following command:

psql -U user -h host "dbname=db sslmode=require"




-- Commands
\dt  -- show tables
\l -- list databases   psql -l
\? -- help

-- To describe a table such as a column, type, or modifiers of columns, you use the following command:
\d table_name 

--9) List users and their roles

\du



psql -U postgres -W wawawa
\c dbname -- 切换数据库
\c dbname username

\x -- toggle expanded  output, display result vertically



--6) List available schema

\dn

7) List available functions
\df

-- 10) Execute the previous command
\g

--11) Command history
\s


\h ALTER TABLE



--14) Turn on query execution time
\timing


--15) Edit command in your editor
\e

--6) Switch output options
psql supports some types of output format and allows you to customize how the output is formatted on the fly.

 \a command switches from aligned to non-aligned column output.
 \H command formats the output to HTML format.

--17) Quit psql
\q

```

```postgresql
-- add account and password

-- create user
CREATE ROLE newuser;
CREATE ROLE unify LOGIN PASSWORD 'password';

-- create password
ALTER ROLE newuser WITH PASSWORD 'newpassword';

-- grant permission
ALTER ROLE newuser CREATEDB;
ALTER ROLE newuser LOGIN;

GRANT ALL PRIVILEGES ON DATABASE 数据库名 TO 角色名;
GRANT ALL ON SCHEMA public TO dify;
GRANT ALL ON ALL TABLES IN SCHEMA public TO dify;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO dify;


-- raise to superuser
ALTER ROLE 角色名 WITH SUPERUSER;

```

```postgresql
-- 查看活动连接
SELECT * FROM pg_stat_activity;

-- 查看空间使用情况
SELECT *, pg_size_pretty(pg_total_relation_size(relid)) AS size FROM pg_catalog.pg_statio_user_tables ORDER BY pg_total_relation_size(relid) DESC;

```

## 配置查看

```postgresql

\echo :AUTOCOMMIT

SHOW autocommit;

```



# Data Type

integer > serial



# Topics

## Index

### partial index

# Extensions

# Features

## 外部数据源(`Foreign Data Wrappers`（FDW）)

## 并行查询

# Administration



[](https://www.postgresqltutorial.com/postgresql-administration/)

## 用户和权限管理

```postgresql
-- 创建用户
CREATE USER username WITH PASSWORD 'password';

-- 赋予权限
GRANT ALL PRIVILEGES ON DATABASE dbname TO username;
```



## 备份恢复

```postgresql
-- 备份
pg_dump dbname > dbname.sql

-- 恢复
psql dbname < dbname.sql

-- 迁移
pgloader
aws dms
-- Aliyun DTS(Data Transmission Servicem, 数据传输服务)
```

备份脚本

```shell
#!/bin/bash

# Set variables for database connection
PGUSER=your_username
PGDATABASE=your_database_name

# Set the path where you want to store the backup files
BACKUP_DIR=/path/to/backup/directory

# Get current date and time
datestamp=$(date +'%Y-%m-%d')
timestamp=$(date +'%H%M')

# Execute pg_dump command to dump the database
pg_dump -U "$PGUSER" -d "$PGDATABASE" > "$BACKUP_DIR/$PGDATABASE"_"$datestamp"_"$timestamp".sql

```





## 性能优化

```postgresql
-- 使用EXPLAIN分析查询性能：
EXPLAIN SELECT column1, column2 FROM tablename WHERE condition;
-- 调整PostgreSQL配置参数以优化性能。

-- 查询优化
EXPLAIN ANALYZE
```



## ROLES & PRIVILEGES

## BACKUP & RESTORE



```shell
# 备份/转存
pg_dump

# 恢复
pg_restore
```





## ADMINISTRATION TIPS

# Performance Tips

> 官方性能调优指南



## Links

- [Postgres: Performance Tips](https://www.postgresql.org/docs/current/performance-tips.html)

# 语句

## select

```postgresql
select * from customer;
select first_name || ' ' ||last_name full_name, email from customer;

-- 表达式 + column 别名
select first_name || ' ' ||last_name full_name, email from customer;

select now();

-- 这样是计算联合唯一的数据
select distinct column1, column2 from table_name
```

## filter

## create

## insert

## join

## group

# tools

## neon

## citus

# 最佳实践



## 并发控制与锁机制

> Postgres使用MVCC来处理并发事务，与MySQL的InnoDB引擎的实现方式不同，尤其是在并发高的时候要注意事务的隔离级别和锁机制。



## 高可用与集群

[High Availability, Load Balancing, and Replication](https://www.postgresql.org/docs/current/high-availability.html)

**高可用性与集群**：学习PostgreSQL的`Streaming Replication`、`Patroni`等高可用性解决方案。



## 数据库扩展与分片

> scaling, sharding, partioning

https://mp.weixin.qq.com/s/0h2IzFvulZQCLulPuWnNhw



# 案例

## 历史版本revision

image, image_version  one-to-many

