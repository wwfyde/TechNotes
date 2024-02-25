Mssql数据库

[官方教程](https://docs.microsoft.com/zh-cn/sql/ssms/tutorials/connect-query-sql-server?view=sql-server-2017)

[官方函数](https://docs.microsoft.com/zh-cn/sql/t-sql/functions/functions?view=sql-server-ver19)

## 常见问题

### 安装和连接

[安装ssms](https://docs.microsoft.com/zh-cn/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)

[安装sqlcmd](https://docs.microsoft.com/zh-cn/sql/tools/sqlcmd-utility?view=sql-server-ver15)

```shell
# 连接数据库
127.0.0.1,1433\my_database
localhost,port\instance
user
password


# 切换数据库实例 左上角 需要切换手动切换


# 查看存储过程
对象浏览器 - Database - 可编程性 - 存储过程
```

### 换行符的问题

制表符： CHAR(9)
换行符： CHAR(10)
回车符： CHAR(13)

## 常见语句操作

数据库管理

```mssql
--创建数据库
create database student；
```

## 常见操作

```mssql
-- 查看系统数据库
select * from sysdatabases;
select * from sys.databases;

```



mac os 安装 odbc driver

[参考文档](https://www.mytecbits.com/internet/python/connect-sql-server-from-python-on-macos)

```shell
brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release
brew update
HOMEBREW_NO_ENV_FILTERING=1 ACCEPT_EULA=Y brew install msodbcsql17 mssql-tools
```



```mssql
--限制行数 查询数据库 top 
select top 5  * from reportinfoview ;

--使用条件语句
CASE
WHEN <条件表达式/代码块> THEN <返回值>
ELSE <返回值> 
END

```

### CONVERT函数

[官方文档](https://docs.microsoft.com/zh-cn/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver15)	[第三方文档](https://www.w3school.com.cn/sql/func_convert.asp)

常见形式对照表

```mssql
-- CAST Syntax:  
CAST ( expression AS data_type [ ( length ) ] )  
  
-- CONVERT Syntax:  
CONVERT ( data_type [ ( length ) ] , expression [ , style ] )

-- 用法 示例
CONVERT(varchar(100), BirthDate, 112)
CONVERT(varchar(100), Report_time, 20)

-- 常见
```

### DATEDIFF函数

[官方文档](https://docs.microsoft.com/zh-cn/sql/t-sql/functions/datediff-transact-sql?view=sql-server-ver15)

```mssql
-- 语法
DATEDIFF ( datepart , startdate , enddate ) 


```

*datepart*
DATEDIFF 用于报告 startdate 与 enddate 之间差异的单位。 常用 datepart 单位包括 `month` 或 `second`。

datepart 值不能在变量中指定，也不能指定为带引号的字符串，如 `'month'`。

下表列出了所有有效的 datepart 值 。 DATEDIFF 接受 datepart 的全名或任何列出的全名缩写形式。

| datepart 名称 | datepart 缩写 |
| :------------ | :------------ |
| **year**      | **yy, yyyy**  |
| quarter       | **qq, q**     |
| month         | **mm, m**     |
| dayofyear     | **dy, y**     |
| day           | **dd, d**     |
| week          | **wk, ww**    |
| hour          | **hh**        |
| minute        | **mi, n**     |
| second        | **ss, s**     |
| millisecond   | ms            |
| microsecond   | mcs           |
| nanosecond    | ns            |
|               |               |

 备注

每个特定的 datepart 名称及其相应名称的缩写将返回相同的值 。

*startdate*
可解析为下列值之一的表达式：

- **date**
- **datetime**
- **datetimeoffset**
- **datetime2**
- **smalldatetime**
- **time**

使用四位数年份可避免含糊不清。 有关两位数年份值的信息，请参阅[配置两位数年份截止服务器配置选项](https://docs.microsoft.com/zh-cn/sql/database-engine/configure-windows/configure-the-two-digit-year-cutoff-server-configuration-option?view=sql-server-ver15)。

enddate
请参阅 startdate 。

## 返回类型

**int**

## 返回值

startdate 与 enddate 之间的 int 差异，以 datepart 设置的边界表示 。

例如，`SELECT DATEDIFF(day, '2036-03-01', '2036-02-28');` 返回 -2，提示 2036 必须为闰年。 这种情况意味着如果从 *startdate* '2036-03-01' 开始，然后计数 -2 天，则会得到 *enddate* '2036-02-28'。

若 bigint 的返回值超出范围（-2,147,483,648 到 +2,147,483,647），`DATEDIFF` 返回错误 。 对于 millisecond，startdate 和 enddate 之间的最大差值为 24 天 20 小时 31 分钟 23.647 秒 。 对于 second，最大差值为 68 年 19 天 3 小时 14 分 7 秒 。

如果为 startdate 和 enddate 都只指定了时间值，并且 datepart 不是时间 datepart，则 `DATEDIFF` 返回 0 。

`DATEDIFF` 使用 startdate 或 enddate 的时区偏移部分来计算返回值。

由于 [smalldatetime](https://docs.microsoft.com/zh-cn/sql/t-sql/data-types/smalldatetime-transact-sql?view=sql-server-ver15) 仅精确到分钟，因此在 startdate 或 enddate 具有 smalldatetime 值时，返回值中的秒和毫秒将始终设置为 0 。

如果只为某个日期数据类型变量指定时间值，`DATEDIFF` 会将所缺日期部分的值设置为默认值：`1900-01-01`。 如果只为某个时间或日期数据类型的变量指定日期值，`DATEDIFF` 会将所缺时间部分的值设置为默认值：`00:00:00`。 如果 startdate 和 enddate 中有一个只含时间部分，另一个只含日期部分，`DATEDIFF` 会将所缺时间和日期部分设置为各自的默认值 。

如果 startdate 和 enddate 具有不同的日期数据类型，并且其中一个的时间部分或秒小数部分精度比另一个高，`DATEDIFF,` 会将另一个的所缺部分设置为 0 。

# 核心概念

- 实例, instance: 数据库
- DSN, Data Source Name: 请求连接数据库的配置文件, 配置了
    - [官方文档](https://docs.microsoft.com/en-us/sql/connect/odbc/dsn-connection-string-attribute?view=sql-server-2017)
    - Server
    - Driver
    - Database 
- ODBC, Open Database Connectivity: 数据库连接协议与驱动

# Mssql函数

## datepart 边界

以下语句具有相同的 startdate 和 enddate 值 。 这些日期是相邻的，它们在时间上相差一百纳秒（0.0000001 秒）。 每个语句中 startdate 与 enddate 之间的差跨其 datepart 的一个日历或时间边界 。 每个语句都返回 1。

SQL复制

```sql
SELECT DATEDIFF(year,        '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(quarter,     '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(month,       '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(dayofyear,   '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(day,         '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(week,        '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(hour,        '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(minute,      '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(second,      '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(millisecond, '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
SELECT DATEDIFF(microsecond, '2005-12-31 23:59:59.9999999', '2006-01-01 00:00:00.0000000');
```

如果 startdate 和 enddate 的年份值不同，但它们的日历周值相同，`DATEDIFF` 将对 datepart week 返回 0 。

## dateadd



# pyodbc文档

[连接到来自windows的sql server](https://github.com/mkleehammer/pyodbc/wiki/Connecting-to-SQL-Server-from-Windows)

[使用centos-7连接mssql](https://github.com/mkleehammer/pyodbc/wiki/Connecting-to-SQL-Server-from-RHEL-6-or-Centos-7)



最核心的区别是, 需要额外安装odbc驱动

```python
pyodbc.connect("Driver={ODBC Driver 11 for SQL Server};Server=myServerName,myPortNumber;Database=myDataBase;UID=myUsername;PWD=myPassword;Trusted_Connection=yes;")
```





## ODBC

[参考文档](https://www.connectionstrings.com/sql-server-2005/)

[安装说明11](https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-driver-manager?view=sql-server-ver15#installing-the-driver-manager-for-microsoft-odbc-driver-11-for-sql-server)

### MacOS

[官方文档](https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/install-microsoft-odbc-driver-sql-server-macos?view=sql-server-ver15)

### Linux

### CentOS



```shell
# msodbcsql17  
# centos redhat

sudo su
#Red Hat Enterprise Server 7 and Oracle Linux 7
curl https://packages.microsoft.com/config/rhel/7/prod.repo > /etc/yum.repos.d/mssql-release.repo

exit
sudo yum remove unixODBC-utf16 unixODBC-utf16-devel #to avoid conflicts
sudo ACCEPT_EULA=Y yum install -y msodbcsql17



```



```

```



## FreeTDS

tds_version : 7.2

### sample

```python

```

| Product                                           | TDS Version | Comment                                                      |
| ------------------------------------------------- | ----------- | ------------------------------------------------------------ |
| Sybase before System 10, Microsoft SQL Server 6.x | 4.2         | Still works with all products, subject to its limitations.   |
| Sybase System 10 and above                        | 5.0         | Still the most current protocol used by Sybase.              |
| Sybase System SQL Anywhere                        | 5.0 *only*  | Originally Watcom SQL Server, a completely separate codebase. Our best information is that SQL Anywhere first supported TDS in version 5.5.03 using the OpenServer Gateway (OSG), and native TDS 5.0 support arrived with version 6.0. |
| Microsoft SQL Server 7.0                          | 7.0         | Includes support for the extended datatypes in SQL Server 7.0 (such as char/varchar fields of more than 255 characters), and support for Unicode. |
| Microsoft SQL Server 2000                         | 7.1         | Include support for bigint (64 bit integers), variant and collation on all fields. Collation is not widely used. |
| Microsoft SQL Server 2005                         | 7.2         | Includes support for varchar(max), varbinary(max), xml datatypes and MARS[[a\]](http://www.freetds.org/userguide/ChoosingTdsProtocol.html#ftn.idm66965456). |
| Microsoft SQL Server 2008                         | 7.3         | Includes support for time, date, datetime2, datetimeoffset.  |
| Microsoft SQL Server 2012 or 2014                 | 7.4         | Includes support for session recovery.                       |

## 核心问题



- 选择合适的odbc驱动
- 安装odbc驱动
- 设置



## 重大说明

- 不要使用FreeTDS, 推荐使用ODBC

# pymssql文档(推荐)

> 经测试 macOS对freetds支持不友好

[官方文档](https://pymssql.readthedocs.io/en/latest/index.html)



