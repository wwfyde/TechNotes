# PostgreSQL

> psql

## Links

- []()
- Postgres Docs
- [Postgres Tutorials](https://www.postgresqltutorial.com)
- [Postgres Python](https://www.postgresqltutorial.com/postgresql-python/)

## quickstart

PostgreSQL is pronounced Post-Gres-Q-L. (For those curious about how to say "PostgreSQL", an [audio file](http://www.postgresql.org/files/postgresql.mp3) is available.)

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

# Administration



[](https://www.postgresqltutorial.com/postgresql-administration/)



## 备份恢复

## ROLES & PRIVILEGES

## BACKUP & RESTORE



## ADMINISTRATION TIPS
