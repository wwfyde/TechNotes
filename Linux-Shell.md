# Shell脚本语言

> 现代计算机原理,对象实现功能和方法.
>
> 所以不要经常想着什么都来自己原生的设计
>
> 使用框架/软件/模块(工具,方法)进行开发可以大大提高开发效率

## 参考资料

- [学习的6个层级](https://www.infoq.cn/article/Xvlq27eG_GHazRHsOTU2)

- 极客时间 - 趣谈Linux操作系统

- 《Linux Command Line and Shell Scripting》(Books existing)
- 《Linux命令行与Shell脚本编程大全》(Books existing)

# Glossary

### FHS（Filesystem Hierarchy Standard）

# 原则和技巧

学习到开发 理论到时间

- 合理使用软链接（设置别名）

# Linux基础


## 操作系统  Operation System, OS

### 操作系统概念
### 人机交互原理

* 用户
* 应用程序
    * 系统调用
    * 终端命令
    * 图形窗口
*  操作系统
    *  没有操作系统的裸机 ,就必须用机器语言(machine language) 机器码(machine code)书写程序
        *  机器码:CPU可以直接解读的数据
        *  机器语言是用二进制代码表示的计算机能直接识别和执行的一种机器指令系统令的集合。
        *  一条指令就是机器语言的一个语句,它是一组有意义二进制代码
    *  如果计算机上安装了操作系统,就可以在操作系统上安装支持的高级语言环境,用高级语言开发程序
* 计算机硬件
    * CPU
    * 内存
    * 硬盘
    * 外设


### 属性(property)
> attribute(特性), nature(本质),property(一般属性,基本属性)

* 直接跟硬件打交道(用户-->程序-->操作系统-->硬件)(硬件只能识别机器语言)
* 将所有的操作(操作硬件的代码)封装成一个又一个的 **系统调用**  (方法 / 封装)
* 程序直接调用操作的**系统调用** 来完成某项任务,而不用直接跟硬件打交道,达到简化程序员工作的目的


>而python呢是更高级的语言: 源程序-->(交互界面)-->虚拟机-->操作系统-->硬件  是更高级的封装

## 服务器操作系统
服务器:一台电脑,没有人机交互的电脑 一般放置于机房中
维护服务器:远程登录服务器,对服务器进行维护和日常管理
* Linux:  安全, 稳定, 免费,使用方便(配套软件多)
## 嵌入式操作系统

* 嵌入式开发的应用场景:开发智能硬件,智能机器人智能家居等等
* linux:内核小,开源,可以更具自己的需要自行的定制

## 移动设备操作系统

## 虚拟机(Virtual Machine)

* 虚拟机指通过软件模拟(间接再间接操纵硬件)具有完整硬件系统功能的,运行在一个完全隔离环境中的完整计算机系统
* 本质上就是一个应用程序
* 虚拟系统通过生成现有操作系统的全新虚拟镜像,具有真实操作系统完全一样的功能(嵌套的感觉)
* 进入虚拟系统后,所有操作都是在这个全新的独立的虚拟系统里面进行,可以独立安装运行软件,保存数据,拥有自己的独立桌面,不会对真正的系统产生任何影响
* 而且能够在现有系统与虚拟镜像之间灵活切换的一类操作系统
## Linux 内核及发行版
人机交互原理:人-->终端命令-->系统调用-->硬件
统一标准可以提升效率

* **内核(kernel)** 是系统的心脏, 是运行程序和管理硬件的核心程序,它提供了一个在裸设备与应用程序间的抽象层(**linux内核只有一个**)
* Linux内核版本又分为 **稳定版** 和 **开发板**, 两种版本是互相关联和循环的

发行版本:
ubuntu 
centos
redhat

## Linux文件和目录结构

* ubuntu没有盘符的概念,只有一个根目录 `/ `, 所有文件都在它下面
#### windows 和 Linux 文件系统区别
关于斜杠 ` / ` 和反斜杠`\\` 的区别(需要两个斜杠进行转义)

windws 习惯于用反斜杠表示文件路径 但也可以使用斜杠路径
linux则所有场景下都使用斜杠

## 常用linux命令的基本使用

## 学习linux终端命令的原因

* Linux刚面世时并没有图形界面,所有的操作全靠命令完成, 如 **磁盘操作**, **文件存取**,**目录操作**, **进程管理**, **文件权限**, 设定等
* 在职场中, 大量的 **服务器维护工作** 都是在 **远程** 通过 **SSH客户端** 来完成的,并没有图形界面, 所有的维护工作都需要命令来完成.
* 在职场中,作为后端程序员,必须要或多或少的掌握一些Linux常用终端命令
* Linux发行版的命令 大概有200个,但是常用的命令只有10 多个而已

> **学习终端命令的技巧:**
> 不要死记硬背,对于常用命令,用的多了, 自然就记住了
> 不要尝试一次学会所有的命令, 有些命令是非常不常用的,临时遇到,临时百度就可以

## 专业术语

tty : teletypewriter : 显示出连接到当前标准输入的终端设备文件名。Print the file name of the terminal connected to standard input. 

# Linux特性

linux 不允许 同一目录下存在相同的路径名和文件名, 当存在名称为 `Asa` 的文件后, 就不能存在 名称为 `Asa` 的目录名.

# **Linux命令**1

## Linux 命令查找顺序

优先 从当前目录 .bin/目录下

## COMMANDS

```shell
-- 一般命令
command [options] [args]
--扩展命令
APP CMD [flags] [args]
noun verb adverb obj
```



## 常用Linux命令的基本使用


| 命令          | 对应英文             | 作用                         |
| ------------- | -------------------- | ---------------------------- |
| ls            | list                 | 查看当前文件夹下的内容       |
| pwd           | print work directory | 查看当前所在文件夹(工作路径) |
| cd[目录名]    | change directory     | 切换文件夹                   |
| touch[文件名] | touch                | 如果文件不存在,新建文件      |
| mkdir[目录名] | make directory       | 创建目录                     |
| rm[文件名]    | remove               | 删除指定的文件名             |
| clear         | clear                | 清屏                         |

> **小技巧**
> Ctrl + Shift + = **放大** 终端窗口的字体显示
> Ctrl + - **缩小** 终端窗口的字体显示

## 自动补全

* 在敲出 `文件 / 目录 / 命令`的前几个字母之后, 按下 `tab` 键
    * 如果输入的没有歧义,系统会自动补全

## Linux 终端命令格式

## 终端命令格式
```
command [-options] [parameter]
```
>command:命令名, 相应功能的英文单词或单词的缩写
>[-options]选项,可以用来对命令进行控制, 也可以省略
>parameter:传给命令的参数, 可以是 **零个**, **一个**, **多个**

## 查询命令帮助信息
> **提示**
> 现阶段只需要 **知道** 通过以下两种方式可以查询命令的帮助信息
> 先学习 **常用命令** 及 **常用选项**的使用即可, 工作中如果遇到问题可以借助 **网络搜索**

### --help
command --help
显示 command 命令的帮助信息
### 2. man command(cd, pwd)
查阅 command命令的使用手册
man = manual 是Linux提供的一个手册, 包含了绝大部分的命令, 函数的详细使用说明
使用 man 时的操作键

| 操作键  | 英文        | 功能                 |
| ------- | ----------- | -------------------- |
| 空格键  | whitespace  | 显示手册的下一屏     |
| enter键 | return      | 一次滚动手册页的一行 |
| b       | back        | 回滚一屏             |
| f       | forward     | 前滚一屏             |
| q       | quit        | 退出                 |
| /word   | search word | 搜索 **word** 字符串 |

## 文件和目录的常用命令


| Command | Name             | Descriptions   |
| ------- | ---------------- | -------------- |
| ls      | list             | 查看目录内容   |
| cd      | change directory | 切换目录       |
| touch   | touch            | 创建文件       |
| rm      | remove           | 移除文件或目录 |
| mkdir   | make directory   | 创建目录       |
| cp      | copy             | 拷贝文件或目录 |
| mv      | move             | 移动文件或目录 |

 其他命令
 查看文件内容: cat  / more / grep
 echo 

 管道: |

ls命令说明

*  ls 是英文单词list的简写,其功能为列出目录的内容, 是用户最常用的命令之一, 类似于DOS下的dir命令

* 以 . 开头的文件为隐藏文件, 需要用 -a 参数才能显示
* Linux文件或者目录名称最长可以有256个字符

### ls 常用选项 

| 参数 | 含义                                        |
| ---- | ------------------------------------------- |
| -a   | 显示指定目录下所有子目录与文件,包括隐藏文件 |
| -l   | 以列表方式显示文件的详细信息                |
| -h   | 配合-l以人性化的方式显示**文件大小**        |

> -h -human -readable 人性化可读方式显示文件打下
> -a -all 显示所有文件和目录 包括隐藏文件
> -l -h -a 可以写成 -lha


ls ~/Desktop   # 查看目标路径的内容列表

**计算机中文件大小的表示方式**
| 单位   | 英文         | 含义                                         |
| ------ | ------------ | -------------------------------------------- |
| 位     | Bit          | 二进制位数                                   |
| 字节   | B(Byte)      | 在计算机中作为一个数字单元,一般为8位二进制数 |
| 千字节 | KB(Kibibyte) | 1KB=1024B,千字节(2\*\*10)                    |
| 兆     | MB(Mebibyte) | 1MB=1024KB,一兆                              |
| G      | GB(Gigabyte) | 1GB=1024MB,千兆                              |
| 太T    | T(Terabyte)  | 1TB = 1024GB,太字节                          |

### ls 通配符的使用

| 通配符 | 含义                               |
| ------ | ---------------------------------- |
| *      | 代表任意个数个字符                 |
| ?      | 代表任意一个字符, 至少1个          |
| []     | 表示可以匹配**字符组**中的任意一个 |
| [abc]  | 匹配a, b, c中任意一个              |
| [a-f]  | 匹配从a到f范围内的任意一个字符     |

### cd 切换目录
cd 是英文单词change directory 的简写,其功能为更改当前的工作目录, 也是最常用的命令之一
> **注意**: Linux所有的目录和文件都是对大小写敏感的

* cd 切换到当前用户的主目录(/home/user)
* cd / 切换到根目录
* cd ~ 切换到当前用户的主目录(/home/asa)
* cd . 保持在当前目录不变
* cd .. 切换到上级目录
* cd - 可以在最近两次工作目录之间来回切换
### 相对路径和绝对路径

* **相对路径** 在输入路径时, 最前面不是 / 或者~, 表示相对 **当前目录**所在的目录位置
* **绝对路径** 在输入路径时, 最前面是 / 或者~, 表示从根**目录/家目录**开始的具体目录位置

### 创建和删除操作

### touch 创建文件
**创建文件或修改文件时间**

* 如果文件不存在, 可以创建一个空白文件
* 如果文件存在, 可以修改文件的**末次修改日期**

### mkdir 创建新目录
-p选项 可以递归创建目录
> **新建目录的名称**不能与当前目录中 **已有的目录或文件** 同名

### rm 删除文件或目录
> 使用 rm 命令要**小心**, 因为文件**删除后不可恢复**

| 参数 | 含义 |]]
| -- | -- |
| -f | 强制删除, 忽略不存在的文件, 无需提示 |
| -r | 递归地删除目录下的内容, **删除文件夹**时必须加此参数 |
> 不使用 -r 选项时 会提示不能删除 参数 因为该参数表示一个目录

用通配符的方式删除多个文件  `rm *1.txt` 

### cp / mv 拷贝和移动文件

*  cp 源文件 目标文件 copy  //复制文件或者目录
    *  默认会覆盖目标文件或目录
    *  -i 覆盖文件前提示    y  /  n
    *  -r 递归复制该目录下的所有子目录和文件, 目标文件必须为一个目录名   //复制时可以修改目录 额外添加一个目录名
*  mv 源文件 目标文件 move  //移动/重命名文件或者目录
    *  -i 覆盖文件前提示 y / n
    *  移动目录时  如果目录不存在会重命名该目录 如果目录存在会移动到该目录下

## 查看文件内容(远程查看) 

| 命令                 | 对应英文    | 作用                                                 |
| -------------------- | ----------- | ---------------------------------------------------- |
| cat 文件名           | concatenate | 查看文件内容, 创建文件, 文件合并, 追加文件内容等功能 |
| more 文件名          | more        | 分屏显示文件内容                                     |
| grep 搜索文本 文件名 | grep        | 搜索文本文件内容                                     |

### cat 查看文件内容

* -b 对非空输出行编号
* -n 对输出的所有行编号
> Linux 中还有一个nl 的命令 和 cat -b 的效果等价

### more 单屏方式查看内容 (手册形式查看)

*  more 命令可以分欧诺个显示文件内容, 每次只显示以页内容
*  适合于 **查看内容较多** 的文本文件

使用 more 的操作键:
类似手册的查看方式
| 操作键  | 功能                 |
| ------- | -------------------- |
| 空格键  | 显示手册页的下一屏   |
| Enter键 | 一次滚动手册页的一行 |
| b       | 回滚一屏             |
| f       | 前滚一屏             |
| q       | 退出                 |
| /word   | 搜索 word 字符串     |

### grep内容查找

* Linux 系统中 grep 命令是一种强大的文本搜索工具
* grep 允许对文本文件进行 **模式**查找, 所谓模式查找, 又被称为正则表达式, 在就业班会详细讲解


| 选项 | 含义                                   |
| ---- | -------------------------------------- |
| -n   | 显示匹配行及行号                       |
| -v   | 显示不包含匹配文本的所有行(相当于求反) |
| -i   | 忽略大小写                             |

* -n matches  line number
* -v --invert -match invert the sense of matching, to select non-matching lines
* -i ignore case distinctions
> **搜索含有空格的字符串时应该使用引号表示为一个字符串**

**常用的两种模式查找**

| 参数 | 含义                   |
| ---- | ---------------------- |
| ^a   | 行首, 搜寻以a开头的行  |
| ke$  | 行尾, 搜寻以ke结束的行 |

### echo 文字内容

* echo 会在终端中显示参数指定的文字, 通常会和 **重定向** 联合使用 
* 增加内容到文件 >  覆盖  >> 追加

 ### 重定向 >和 <  >>

* > 指定和覆盖到文件 
* >> 追加到文件
*  Linux 允许将命令执行结果 **重定向** 到一个 **文件**
   
    *  将文本显示在 **终端上的内容** **输出 / 追加** 到 **指定文件中**

```
echo wwfyde >> a.txt
echo 内容参数 >> 要追加的文件内容
```
### 管道命令 |

管道符: `|` 

作用: 管道一般用于 "过滤"

语法: 命令A | 命令B. 命令A的正确输出作为命令B的操作对象

说明: 管道符不能单独使用, 必须配合其他命令来一起使用.

* Linux 允许将 **一个命令的输出** 可以 **通过管道** 作为 **另一个人命令的输入**
* 对输出结果 进行处理
* 可以理解成现实生活中的管子, 管子的一头塞东西进去,另一头取出来,这里 | 的左右分为两端,左端塞东西(写), 右端取东西(读)

常用的管道命令有:

* more: 分屏显示内容
* grep: 在命令执行结果的基础上查询指定的文本   // 过滤输出结果  
```
ls -lha ~ | more
ls -lha ~ | grep Do
```

## 用户权限相关命令
学习目标

* 用户和权限的基本概念
* 用户管理 终端命令
* 组管理 终端命令
* 修改权限 终端命令

## 用户和权限的基本概念
### 用户
* 用户是 Linux系统中最重要的一环,用户管理包括 用户 与 组 管理
* 在linux系统中, 不论是由本机或是远程登录系统,每个系统都必须拥有一个账号,
并且对于不同的系统资源拥有一个账号,并且对于不同的系统资源拥有不同的使用权限

* 对 **文件 / 目录** 的权限包括
### 组

* 为了方便用户管理, 提出了 **组** 的概念
* 在实际应用中, 可以预先针对 **组** 设置好权限, 然后 将不同的用户添加到对应的组中, 从而 **不用依次为每一个用户设置权限**

| 权限   | 英文    | 缩写 | 数字代号 |
| ------ | ------- | ---- | -------- |
| 读     | read    | r    | 4        |
| 写     | write   | w    | 2        |
| 执行   | execute | x    | 1        |
| 无权限 |         | -    | 0        |
execute在终端中可执行权限  单击 也是执行
* 在 Linux中, 可以指定 **每一个用户** 针对 **不同的文件或者目录** 的 **不同权限**

## ls -l 扩展

* ls -l 可以查看文件夹下文件的详细详细, 从左到右依次是:
    * **权限**, 第1个字符如果是 d 表示目录
    * **硬链接数**, 通俗地讲, 就是有多少种方式, 可以访问到当前目录 / 文件  子目录  相对路径 绝 对路径
    * **拥有者** , 家目录下文件 / 目录 的拥有者通常都是当前用户
    * **组**, 在Linux中,很多时候, 会出现组名和用户名相同的情况
    * 大小
    * 时间
    * 名称

## chmod 简单使用(重要)

* chmod 可以修改 **用户/组** 对 **文件/目录** 的权限

```
chmod -ugoa +/-rwx 文件名|目录名
```
> 提示:以上方式会一次性修改 拥有者/组 权限

## 超级用户

* Linux系统中的root账号通常 **用于系统的维护和管理**, 对操作系统的所有资源 **具有所有访问权限**
* 在大多数版本的Linux中,都不推荐直接登录root账号登录系统
* 在Linux安装的过程中, 系统会自动创建一个用户账号, 而这个默认的用户就称为**标准用户**

```shell
# 切换到超级管理员模式
sudo -s
sudo su
```



* su 是 substitute user 的缩写, 表示 **使用另一个用户的身份**
* sudo 命令用来以其他身份来执行命令, 预设的身份为root
* 用户使用 sudo 时, 必须先输入密码, 之后又 **5分钟的有效期**, 超过期限则必须重新输入密码
> 若其未经授权的用户企图使用sudo, 则会发出警告邮件给管理员

## 组管理 终端命令
> 提示: 创建组/删除组 的终端命令都需要通过 sudo 执行


| 命令                      | 作用                      |
| ------------------------- | ------------------------- |
| groupadd 组名             | 添加组                    |
| groupdel 组名             | 删除组                    |
| cat /etc/group            | 确认组信息                |
| chgrp -R 组名 文件/目录名 | 递归修改文件/目录的所属组 |
> 提示:
> 组信息保存在/etc/group
> /etc 目录是专门用来保存 **系统配置信息** 的目录

* 在实际应用中,可以预先针对 **组** 设置好权限, 然后 **将不同的用户添加到对应的组中**, 从而 **不用依次为每一个用户设置权限**

## 用户管理终端命令
> 提示: **创建用户/删除用户/修改其他用户密码** 的终端命令都需要通过sudo执行

### 创建用户 / 设置密码 /删除用户
> 用户可以添加到不同的组中 使其具有不同组(adm,sudo,)的权限

| 命令                          | 作用         | 说明                                                         |
| ----------------------------- | ------------ | ------------------------------------------------------------ |
| useradd -m -g 组 新建用户名   | 添加新用户   | -m 自动建立用户家目录; -g 指定用户所在组,否则会建立一个和同名的组 |
| passwd 用户名                 | 设置用户密码 | 如果是普通用户,直接用passwd可以修改自己的账户密码            |
| userdel -r 用户名             | 删除用户     | -r 选项会自动删除用户家目录                                  |
| cat /etc/passwd \| grep用户名 | 确认用户信息 | 新建用户后, 用户信息会保存在 /etc/passwd 文件中              |

> 提示：创建用户时，如果忘记添加 -m 选项指定新用户的家目录 —— 最简单的方法就是删除用户，重新创建
> 创建用户时，默认会创建一个和用户名同名的组名
> 用户信息保存在 /etc/passwd 文件中


#### passwd 文件

`/etc/passwd` 文件存放的是用户的信息，由 6 个分号组成的 7 个信息，分别是

1. 用户名
2. 密码（x，表示加密的密码）
3. UID（用户标识）
4. GID（组标识）
5. 用户全名或本地帐号
6. 家目录
7. 登录使用的 Shell，就是登录之后，使用的终端命令，`ubuntu` 默认是 `dash`

#### usermod 文件
modify a user account

* usermod 可以用来设置 **用户** 的 **主组** / **附加组** 和 **登录shell**
* **主组**: 通常在新建用户时指定, 在 etc/passwd 的第4列 **GID 对应的组**
* **附加组**: 在 etc/group 中最后一列表示该组的用户列表, 用于指定**用户的附加权限**
```
asa@ubuntu:~$ cat -n /etc/group | grep asa
# 行号 组名 加密 GID 用户列表
     5	adm:x:4:syslog,asa
    18	cdrom:x:24:asa
    21	sudo:x:27:asa
    23	dip:x:30:asa
    35	plugdev:x:46:asa
    57	lpadmin:x:118:asa
    68	asa:x:1000:
    69	sambashare:x:129:asa
```
> 提示: 设置了用户的附加组之后,需要重新登录才能生效
```
# 修改用户的主组（passwd 中的 GID）
usermod -g 组 用户名

# 修改用户的附加组
usermod -G 组 用户名

# 修改用户登录 Shell
usermod -s /bin/bash 用户名
```
-g -gid 主组修改
-G -groups 附加组修改 添加用户到附加组
-s -shell 登录shell修改

注意：默认使用 useradd 添加的用户是没有权限使用 sudo 以 root 身份执行命令的，可以使用以下命令，将用户添加到 sudo 附加组中
`usermod -G sudo 用户名`

### which(重要)
> 提示
>
> * /etc/passwd 是用于保存用户信息的文件 (文件)
> * /usr/bin/passw 是用于修改用户密码的程序  (命令)
* which 命令可以查看执行命令所在位置,
```
which ls

# 输出
# /bin/ls

which useradd

# 输出
# /usr/sbin/useradd

```
##### bin` 和 `sbin

* 在 `Linux` 中，绝大多数可执行文件都是保存在 `/bin`、`/sbin`、`/usr/bin`、`/usr/sbin`
* `/bin`（`binary`）是二进制执行文件目录，主要用于具体应用
* `/sbin`（`system binary`）是系统管理员专用的二进制代码存放目录，主要用于系统管理
* `/usr/bin`（`user commands for applications`）后期安装的一些软件
* `/usr/sbin`（`super user commands for applications`）超级用户的一些管理程序

> 提示：
>
> * `cd` 这个终端命令是内置在系统内核中的，没有独立的文件，因此用 `which` 无法找到 `cd` 命令的位置

## 切换用户

| 命令        | 作用                                     | 说明                                   |
| ----------- | ---------------------------------------- | -------------------------------------- |
| su - 用户名 | 切换用户,并且切换目录(减号两边都有空格)) | -可以切换到用户家目录,否则保存位置不变 |
| exit        | 退出当前登录用户                         | 默认是退出shell terminal               |

sudo -s 切换到超级管理员

**sudo 是一个组 root 是一个最高权限的超级用户**

## 修改文件权限

| 命令  | 作用       |
| ----- | ---------- |
| chown | 修改拥有者 |
| chgrp | 修改组     |
| chmod | 修改权限   |

* 命令格式如下:

```shell
# 传统方法(默认修改所有用户权限)u-user g-group o-other a-all
chmod +/-rwx 文件名|目录名

# 修改t.txt的用户的读写执行权限
chmod -u -rwx t.txt

# 修改文件|目录的拥有者
chown 用户名 文件名|目录名
chown 用户名:组名 文件名|目录名

# 递归修改文件|目录的组
chgrp -R 组名 文件名|目录名

# 递归修改文件权限
chmod -R 755 文件名|目录名
```

* `chmod` 在设置权限时，可以简单地使用三个数字分别对应 **拥有者** ／ **组** 和 **其他** 用户的权限

常见数字组合有
最高权限: 777 ===> u = rwx , g = rwx , o = rwx
目录默认权限: 755 ===> u = rwx , g =rx , o = rx
文件默认权限: 644 ===> u = rw , g =r , o = r

## 系统信息相关命令

* 本节内容主要是为了方便通过远程终端维护服务器时, 查看服务器上当前**系统日期和时间/磁盘空间/占用情况/程序执行情况**
* 本小结学习的终端命令基本都是查询命令, 通过这些命令对系统资源的使用情况有个了解

## 时间和日期
cal     calendar    查看日历 -y 选项可以查看一年的日历
date    date    查看系统时间
## 磁盘信息
df -h   disk free 显示磁盘剩余空间
du -h [目录名]     disk usage 显示目录下的文件大小

## 进程信息

* 所谓 **进程**, 通俗地说就是 **当前正在执行的一个程序**

| 命令               | 作用                                    |
| ------------------ | --------------------------------------- |
| ps aux             | process status 查看进程的详细状况       |
| top                | 动态显示运行中的进程并且排序            |
| kill [-9] 进程代号 | 终止指定代号(PID)的进程, -9表示强行终止 |
> ps 默认只会当前用户通过终端启动的 应用程序
> PID process ID 进程

* ps 选项功能说明

    * a    显示终端上的所有进程,包括其他用户的进程
    * u    显示进程的详细状态
    * x    显示没有控制终端的进程

> 提示: 使用kill命令时, 最好只终止由当前用户开启的进程, 而不要终止 root 身份开启的进程, 否则可能导致系统崩溃

## 软件管理

> 源码安装 PIP安装 apt安装 =推荐使用apt 安装deb 文件

## APT包管理

```shell
apt update
apt upgrade
apt install 包名
apt remove 包名
apt autoremove -f
```



## RPM包管理

> RPM全名是[RedHat Package Manager，是由Red Hat公司开发出来，由于非常好用，目前被很多linux发行版使用。
>
> 特点：
>
> 1. 由于已经编译打包完毕，所以软件传输与安装很方便
> 2. 查询、升级方便

### 1. RPM软件包常用命令

| 命令                  | 作用                    |
| --------------------- | ----------------------- |
| rpm -ivh filename.rpm | 安装软件                |
| rpm -Uvh filename.rpm | 升级软件                |
| rpm -e filename.rpm   | 卸载软件                |
| rpm -qpi filename.rpm | 查询软件的描述信息      |
| rpm -qa               | 查询系统中所有的rpm软件 |

### 2. 案例

```shell
# 查看系统中是否已经安装了firefox
[root@itcast ~]# rpm -qa | grep firefox
firefox-24.5.0-1.el7.centos.x86_64

# 如果安装先进行卸载
[root@itcast ~]# rpm -e firefox

# 进入系统镜像中的Packages目录
[root@itcast Packages]# rpm -ivh firefox-24.5.0-1.el7.centos.x86_64.rpm
准备中...                          ################################# [100%]
正在升级/安装...
   1:firefox-24.5.0-1.el7.centos      ################################# [100%]
```

RPM虽然能够使软件安装变得方便，但是在安装软件的时候依赖关系仍然需要自己解决，有些大型软件需要十多个依赖包，安装会变得复杂。这时候有进一步简化RPM管理软件的方式yum安装。

## yum软件管理

> yum软件管理是为了进一步简化RPM管理软件难度而设计的，yum能够根据用户的需求分析出所需软件包及相关依赖关系，自动从服务器下载软件包并安装到系统。
>
> yum软件仓库：yum在下载软件时存放软件包的远程服务器

### 1. yum常用命令

| 命令                        | 作用                                   |
| --------------------------- | -------------------------------------- |
| yum remove 软件包           | 移除软件包                             |
| yum [-y] install 软件包名称 | 安装软件包(加y在安装时候不用输入y确认) |
| yum update 软件包名称       | 升级软件包                             |
| yum list installed          | 查看已安装软件包                       |

### 2. 案例

```shell
# 查看是否安装了firefox
[root@itcast Packages]# yum list installed | grep firefox
firefox.x86_64                         24.5.0-1.el7.centos             @anaconda

[root@itcast Packages]# yum remove firefox
移除  1 软件包

安装大小：87 M
是否继续？[y/N]：				//此处输入y

[root@itcast Packages]# yum install firefox
```



## 源码包管理

> 源码包，提供了源代码需要进行配置编译才能进行操作的一种软件包形式
>
> 特点：
>
> 1. 安装比较麻烦，需要配置编译等过程才能安装
> 2. 升级、卸载不方便
> 3. 需要手工解决依赖关系
> 4. 用户可以修改软件代码

### 1. 源码包的安装步骤

1. **./configure**

   创建Makefile文件，该文件记录了原始码如何编译的详细信息。编译前的准备工作。

   

2. **make clean**

   读取makefile关于clean的工作。这个步骤不一定会有，但是建议执行一下，因为我们不确定源码里有没有包含上次编译过的目标文件。

3. **make**

   make会根据makefile中的预设工作进行编译行为。编译就是进行gcc将源码便以为可执行文件

4.  **make test**

   测试编译是否正确, 检测编译过程是否存在异常.

5. **make install**

   将编译好的的数据安装到预定的目录中，完成安装。

### 2. 案例

安装ntp时间服务器

```shell
[root@itcast ~]# tar -zxvf ntp-4.2.8p13.tar.gz
[root@itcast ~]# cd ntp-4.2.8p13/
[root@itcast ntp-4.2.8p13]# ./configure --prefix=/usr/local/ntp    //--prefix指出安装目录
[root@itcast ntp-4.2.8p13]# make
[root@itcast ntp-4.2.8p13]# meke install
```

注意：

```shell
# 在执行./configure --prefix=/usr/local/ntp，碰到以下情况，使用后面的指令安装gcc和cc
[root@localhost ntp-4.2.8p13]# ./configure --prefix=/usr/local/ntp
checking for a BSD-compatible install... /usr/bin/install -c
checking whether build environment is sane... yes
checking for a thread-safe mkdir -p... /usr/bin/mkdir -p
checking for gawk... gawk
checking whether make sets $(MAKE)... yes
checking whether make supports nested variables... yes
checking whether make supports nested variables... (cached) yes
checking build system type... x86_64-unknown-linux-gnu
checking host system type... x86_64-unknown-linux-gnu
checking for style of include used by make... GNU
checking for cc... no
checking for gcc... no
configure: error: in `/root/ntp-4.2.8p13':
configure: error: no acceptable C compiler found in $PATH
See `config.log' for more details


# 安装gcc 和 cc
[root@localhost ntp-4.2.8p13]# yum -y install gcc cc
```



## 其他命令

## 查找文件

* find 命令功能非常强大, 通常用来在**特定的目录下** **搜索** 符合条件的文件
* find [路径] -name "\*.py"    查找指定路径下扩展名是 .py 的文件, 包括子目录
* 如果省略路径, 表示在当前目录  下查找
* 之前学习的通配符, 在使用 find 命令时同时可用

## 软链接
ln -s 被链接的源文件 链接文件      建立文件的软链接, 用通俗的方式讲类似于 windows下的快捷方式

```shell
ln -s <源文件> <软链接>
ln -s path/to/file_or_directory path/to/symlink 

```



* 注意:
* 1. 没有 -s 选项建立的是一个硬链接文件
  
    * 两个文件占用相同大小的硬盘空间, 工作中几乎不会建立文件的硬链接
* 2. **源文件要使用绝对路径**, 不能使用相对路径, 这样可以方便移动链接文件后, 仍然能够正常使用
##  硬链接

* 在使用 ln 创建链接时, 如果没有 -s 选项, 会创建一个硬链接, 而不是软链接

在 Linux中, **文件名** 和 **文件的数据** 是分开存储的
提示：

* 在 Linux 中，只有文件的 `硬链接数 == 0` 才会被删除
* 使用 `ls -l` 可以查看一个文件的硬链接的数量
* 在日常工作中，几乎不会建立文件的硬链接，知道即可

### 硬链接特性

- 修改硬链接文件,源文件也会被修改
- 删除源文件, 硬链接依然有效

## 硬链接和软链接的区别

**软链接**：文件A(软链接)指向文件B的文件名，文件B的inode"链接数"不会因此发生变化。

**硬链接**: 文件A(硬链接)是指向文件B的inode号码，

## 打包/解包

### tar

* `tar` 是 Linux 中最常用的 **备份**工具，此命令可以 **把一系列文件** 打包到 **一个大文件中**，也可以把一个 **打包的大文件恢复成一系列文件**
* 打包并不会对文件包进行压缩
* `tar` 的命令格式如下：

```shell
# 打包文件
tar -cavf 打包文件.tar 被打包的文件／路径...

# 解包文件
tar -xavf 打包文件.tar -C directory
```

tar 选项说明
| 选项 | 含义                                                         |
| ---- | ------------------------------------------------------------ |
| c    | --create 生成档案文件，创建打包文件                          |
| x    | --extract解开档案文件                                        |
| v    | --verbose列出归档解档的详细过程，显示进度                    |
| f    | --file 指定档案文件名称，f 后面一定是 .tar 文件，所以必须放选项最后 |

> 注意：f 选项必须放在最后，其他选项顺序可以随意

## 压缩/解压缩

### gzip

* `tar` 与 `gzip` 命令结合可以使用实现文件 **打包和压缩**
  * `tar` 只负责打包文件，但不压缩
  * 用 `gzip` 压缩 `tar` 打包后的文件，其扩展名一般用 `xxx.tar.gz`

> 在 `Linux` 中，最常见的压缩文件格式就是 `xxx.tar.gz`

* 在 `tar` 命令中有一个选项 **-z** 可以调用 `gzip`，从而可以方便的实现压缩和解压缩的功能
* 命令格式如下：
```
# 压缩文件
tar -zcvf 打包文件.tar.gz 被压缩的文件／路径...

# 解压缩文件
tar -zxvf 打包文件.tar.gz

# 解压缩到指定路径
tar -zxvf 打包文件.tar.gz -C 目标路径
```
| 选项 | 含义                                           |
| ---- | ---------------------------------------------- |
| -C   | 解压缩到指定目录，注意：要解压缩的目录必须存在 |

### zip 

* zip 压缩

zip -r xxx.zip 目录

* unzip 解压缩
* unzip xxx.zip  # 解压到当前目录
* 

## 软件安装
### Ubuntu常见的软件安装方式

* make install 源代码安装包(也称: tarball)
* deb 安装包
    * 优点: 安装包直接运行安装
    * 缺点: 存在包依赖问题 - 安装时需要手动下载很多安装包
        * 搜狗输入法安装, 依赖fcitx框架环境
* apt-get
    * 优点:最简单方便的安装方式, 只要一条指令, 系统就可以自动下载并安装所有的包
    * 缺点:必须要有软件源(联网或者搭建软件源)

### 通过apt安装/卸载软件

* apt-get方式安装软件(网络下载-必须要配置软件源)
    * 配置软件源   修改 /etc/apt/source.list   通过软件设置软件源
    * 更新软件源    sudo apt-get update
    * 安装软件:　sudo apt-get install 软件包名称
    * 卸载软件： sudo apt-get remove 软件包名称
* apt 是 `Advanced Packaging Tool`，是 Linux 下的一款安装包管理工具
* 可以在终端中方便的 **安装**／**卸载**／**更新软件包**
卸载 用remove
``` bash
# 1. 安装软件
$ sudo apt-get install 软件包

# 2. 卸载软件
$ sudo apt-get remove 软件名

# 3. 更新已安装的包
$ sudo apt-get upgrade 
# 4. 更新软件列表
$ sudo apt-get update
```



## Terminal终端使用技巧

* **复制粘贴**: Ctrl + Shift + C |  Ctrl + Shift + V
* **同时创建多个文件** touch a  b  c  //中间用 两个空格隔开
* **清除屏幕**: clear
* **退出**: quit /exit | Ctrl + D 
* **自动补全**: Tab
* **用过的命令**: 上下方向键 up 和 down
* **退出选择**:  Ctrl + C
* **当前目录**: ./
* **上级目录**: ../  
> 用法提示:  上上级目录 ../../

### 方法 
## commands usage
### 整体说明
查询命令用法  直接输入该命令
* "~" = "/home/user"
* pwd  查看当前目录
* "/" = 根目录
* bin  二进制指令
* usr 软件安装
* lib =library
* cd ./Desktop    进入当前目录下的目录
* 非系统用户都自/home目录下
* Ubuntu大部分软件的安装/更新都是利用apt命令,从Ubuntu的服务器直接安装
* 终端:terminal计算机网络中处于网络最外围的设备，主要用于用户信息的输入以及处理结果的输出等。信息输入与输出的载体,并能进行一定的运算和处理,实现部分系统功能
* 通常Linux的用户使用终端命令的频率非常高,所以会把终端添加到启动栏
* 通过最上方的搜索按钮可以搜索并启动需要使用额程序
## 使用apt终端命令更新和升级系统软件
* apt:advanced Packaging tool 高级安装工具,是ubuntu下的安装包管理工具
* 大部分的软件安装(install)/更新(update)升级(upgrade)/卸载(remove)都是利用apt命令来实现的
* 软件更新和升级:通常安装完成ubuntu之后,可以先使用upgrade更新一下当前系统中可以升级的软件包
* sudo apt update 更新本地软件列表  
* sudo apt upgrade 升级软件





# vim

## 参考资料

- 

## 概述

## 快速上手(自顶向下)

> [!tip]
>
> :help 界面 通过 `ctrl+]` 跳转链接(jump to subject) 通过 `ctrl+O`返回(jump back)

## 示例

## Options

## config

## Usage

### 光标移动

- 使用方向键或 `h`, `j`, `k`, `l` 键来分别向左、下、上、右移动光标。
- 使用 `w` 和 `b` 键以单词为单位向前或向后移动光标。
- 使用 `^` 键将光标移动到当前行的第一个非空字符。
- 使用 `$` 键将光标移动到当前行的末尾。
- 使用 `gg` 和 `G` 键分别将光标移动到文件的第一行和最后一行。
- 使用 `{` 和 `}` 键以段落为单位向前或向后移动光标。

### 跳转

- 使用 `Ctrl + f` 和 `Ctrl + b` 键进行向前和向后翻页。
    - **f** 代表“forward”的意思。
    - **b** 代表“backward”的意思。

- 使用 `Ctrl + d` 和 `Ctrl + u` 键进行向下和向上滚动半页。
    - `Ctrl + d` 中的 **d** 可以记为“down”（向下），表示向下滚动。
    - `Ctrl + u` 中的 **u** 可以记为“up”（向上），表示向上滚动。

- 使用 `Ctrl + e` 和 `Ctrl + y` 键分别向上和向下滚动一行。
    - **y** 代表“yank”或“yet another line”，表示向上移动或再多一行。
    - **e** 代表“extend”或“extra line”，表示向下扩展或多一行。

- 使用 `H`, `M`, `L` 键将光标移动到当前屏幕的顶部、中部和底部。



# curl



## **curl**-transfer a URL

> **curl** is a tool for transferring data from or to a server. It supports  these protocols: DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS,   IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTMPS, RTSP, SCP,  SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP, WS and WSS. The command is  designed to work without user interaction.
>
> curl offers a busload of useful tricks like proxy support, user authentication, FTP upload, HTTP post, SSL connections, cookies, file transfer resume and more. As you will see below, the number of features will make your head spin.

curl是一个从服务器传输数据或传输数据到服务器的工具, 支持 HTTP/HTTPS, WS/WSS, FTPS等协议. 该命令的设计是为了在无用户交互模式下运行. 

资源传输工具, 数据传输工具

工作原理: 当命令执行后, 工具执行请求到指定URL,并将服务器的响应显示在终端上或将其保存到文件中

```shell
curl --help 
curl --help all  # recommend
man curl
# GET url resources
curl http://localhost:8080/demo

`curl [options] [URL]

# POST to url
curl http://localhost/demo \
    --include \
    --header "Content-Type: application/json" \
    --request "POST" \
    --data '{"id": "4","title": "The Modern Sound of Betty Carter","artist": "Betty Carter","price": 49.99}'

### 下载文件

# 指定文件名
curl <URL> -o file.ext 

# 根据远程文件名自动名字
curl --remote-name <URL>
curl -O <url> # 推荐
curl -OsSL https://github.com/prometheus/alertmanager/releases/download/v0.26.0/alertmanager-0.26.0.linux-amd64.tar.gz

# 安装
sh -c "$(curl -fsSL https://install.ohmyz.sh/)"

# 将内容打印到标准输出 测试代理是否正常
curl -fsSL https://install.ohmyz.sh/
curl -fsSL https://www.google.com

# 上传文件使用 /application/x-www-form-urlencoded格式
# -d 将会根据filename extension 自动选择conten-type
curl -d @filename <url> 
curl -d @path/to/file <url>
# 上传文件使用 multipart/form-data 格式
curl -F logo=@filename [URL]


#静默输出, 忽略提示
curl -s https://api.chucknorris.io/jokes/random | jq

# 流式输出 
#  -N, --no-buffer   Disable buffering of the output stream
curl --no-buffer http://127.0.0.1:8004/stream
curl -N http://127.0.0.1:8004/stream

# curl 似乎默认支持流式输出
curl -X 'GET' \
  'http://0.0.0.0:8000/stream' \
  -H 'accept: application/json'

```

Options or Arguments 

|                           |             |                                                              |
| ------------------------- | ----------- | ------------------------------------------------------------ |
|                           | 下载        | 下载文件                                                     |
| -H, --header              | 表头        |                                                              |
| -F, --form <name=content> | 表单/上传   |                                                              |
| -X, --request             | 请求类型    |                                                              |
| -d, --data                | 发送数据    |                                                              |
| --data-urlencode          | 编码非ASCII | 将非ASCII码如空格编码成%20                                   |
| -f, --fail                |             | 如果出现错误HTTP状态码, 则停止下载并返回非零的退出码         |
| -l, --url                 |             | 根据地址自动识别协议, 一般不需要                             |
| -o, --output <filepath\>  |             | Write to file instead of stdout                              |
| -O, --remote-name         |             | Write output to a file named as the remote file              |
| --remote-name             |             | 根据远程文件名称保存文件                                     |
| -L, -- location           |             | 自动重定向HTTP地址                                           |
| --continue-at             |             | 断点续传                                                     |
| --json <data>             |             |                                                              |
| -i, --include             |             | 输出时包括响应Headers<br />Include the HTTP response headers in the output. |
| -T, --upload-file <file>  | 上传文件    |                                                              |
| -k, --insecure            | 忽略证书    |                                                              |
| -u username:password      | 认证        |                                                              |
| -v, --verbose             |             |                                                              |
| -s, --silent              | 静默模式    |                                                              |
| -S, --show-error          |             |                                                              |
| -N                        |             |                                                              |

## 上传文件

```shell
# 相对路径
curl -F "file=@uploads/document.txt" http://example.com/upload

# 绝对路径
curl -F "file=@/home/username/uploads/document.txt" http://example.com/upload


```



# ssh

## 参考资料

- man ssh
- man ssh_config

## 常见需求

```shell
# password automation
# https://www.redhat.com/sysadmin/ssh-automation-sshpass
# SSH password automation in Linux with sshpass
sshpass -p 'your_password' ssh | rsync | scp
# basic 
ssh user@host

# connect with private key(specfic identity)
ssh -i /path/to/key_file user@host

# connect a remote server using a specfic port
ssh username@remote_host -p 2222

# - Run a command on a remote server with a [t]ty allocation allowing interaction with the remote command:
# 执行远程命令
ssh username@remote_host -t command command_arguments

# 动态端口转发


# ssh 使用代理

ssh -o ProxyCommand='nc -x localhost:7890 %h %p' user@host


### 端口转发

# 本地端口转发(将本地端口请求转发到远程端口, 将远程端口映射到本地)
ssh -L [本地端口]:[远程地址]:[远程端口] [用户]@[SSH服务器]

ssh -L 8188:192.168.0.138:8188 jump
#- SSH tunneling: Forward a specific port (`localhost:9999` to `example.org:80`) along with disabling pseudo-[T]ty allocation and executio[N] of remote commands:
ssh -L 9999:example.org:80 -N -T username@remote_host


# 远程端口转发(将本地端口映射到公网端口)
ssh -R [公网服务器端口]:localhost:[本地端口] [公网服务器用户]@[公网服务器地址]

# 通过jump/bastion server 访问
#     ssh -J username@jump_host username@remote_host
ssh -J jump 181
# 远程服务器配置
vim /etc/ssh/sshd_config
cat EOF>>  /etc/ssh/sshd_config
GatewayPorts yes
AllowTcpForwarding yes

# 图形界面
# 注意需要本地主机安装相关X11支持服务
ssh -X jump

# 忽略代理
ssh -o ProxyCommand=none 

```

### keepalive

ssh -o ServerAliveInterval=60



-o ServerAliveConutMax=2

> [!tip]
>
> 也可以通过`top` `ping` 等来让会话保活

## ssh_config

基本路径`~/.ssh/config` 和 `/etc/ssh/ssh_config`

```shell
```



# zsh



```shell
clear # clear the screen
```



## 插件

### git

### screen

```shell

screen -DR
```



### tmux

### jq

```shell

git clone https://github.com/reegnz/jq-zsh-plugin.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/jq

jq
```

### chroma

styles: [github, xcode, colorful, emacs], dark:[github-dark]

### ripgrep

https://github.com/BurntSushi/ripgrep

### zoxide

brew install zoxide

### <s>starship</s>

### colored-man-pages

### `powerlevel10k`

# **命令参考**

> 看懂linux 帮助文档(help), 看懂linux手册(man)
>
> [速查表](https://gnulinux.guru)
>
> > linux[工具快速教程](https://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html)

## 参考资料

- linux[工具快速教程](https://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html)
- [速查表: https://gnulinux.guru](https://gnulinux.guru)

### 帮助文档手册使用说明

> linux可选参数是根据, 全写可选参数排序的, 所以会看到 -d 后面会有 --e相关的参数

\[OPTIONS\]: 可选项

|   Symbo   | Meaning | Description    |
| :-------: | :-----: | :------------- |
|           |         |                |
|    Tab    |         | 自动补全       |
| Up / Down |         | 历史命令       |
|     -     |         | 简写可选参数   |
|    --     |         | 全写可选参数   |
| [option]  |         | 约束和可选参数 |
|     ,     |         | 同级,可替代    |
|     .     |   dot   |                |
|           |         |                |
|           |         |                |



## 效率技巧

[官方文档man-pages](https://www.kernel.org/doc/man-pages/)

### cmd --help

一般含义中文文档 

```shell
man --help

```



### man

[官方文档](https://man7.org/linux/man-pages/man1/man.1.html)

The Linux *man-pages* project documents the [Linux](https://en.wikipedia.org/wiki/Linux) [kernel](https://www.kernel.org/pub/linux/kernel) and C library interfaces that are employed by user-space programs. With respect to the C library, the primary focus is the [GNU](https://www.gnu.org/) C library ([glibc](https://www.gnu.org/software/libc/)), although, where known, documentation of variations in other C libraries available for Linux is also included. The project provides manual pages in the following sections:

- [1: *User commands*](https://man7.org/linux/man-pages/dir_section_1.html); *man-pages* includes a small number of Section 1 pages that document programs supplied by the GNU C library.
- [2: *System calls*](https://man7.org/linux/man-pages/dir_section_2.html) documents the [system calls](https://man7.org/linux/man-pages/man2/syscalls.2.html) provided by the Linux kernel.
- [3: *Library functions*](https://man7.org/linux/man-pages/dir_section_3.html) documents the functions provided by the standard C library.
- [4: *Devices*](https://man7.org/linux/man-pages/dir_section_4.html) documents details of various devices, most of which reside in /dev.
- [5: *Files*](https://man7.org/linux/man-pages/dir_section_5.html) describes various file formats and filesystems, and includes [proc(5)](https://man7.org/linux/man-pages/man5/proc.5.html), which documents the /proc file system.
- [7: *Overviews, conventions, and miscellaneous*](https://man7.org/linux/man-pages/dir_section_7.html).
- [8: *Superuser and system administration commands*](https://man7.org/linux/man-pages/dir_section_8.html); *man-pages* includes a small number of Section 8 pages that document programs supplied by the GNU C library.

man - an interface to the system reference manuals

系统参考手册

The table below shows the section numbers of the manual followed
       by the types of pages they contain.

1   Executable programs or shell commands
2   System calls (functions provided by the kernel)
3   Library calls (functions within program libraries)

### whatis-快速理解命令用途

### help

### whereis



## builtin-

> shell script management; shell脚本管理, shell builtin
>
> 内置命令

man builtin

[Bourne Shell Builtins](https://www.gnu.org/software/bash/manual/bash.html#Shell-Builtin-Commands)

### :

### .

### set

This is a shell builtin command used to set shell attributes. In this case, it's used to modify how the shell behaves.

`set -eu` is a commonly used command in shell scripting. It's used to set specific options for how the shell interprets commands. 

Using set -eu at the beginning of a shell script is a good practice as it helps catch errors early and makes scripts more robust.



```shell
set -eu

set -eux

set -x 
# The -x option enables "debug mode" or "trace mode". When this option is set, Bash will print each command to the terminal before executing it. This is useful for debugging scripts to see exactly what commands are being run.

```

### unset

```shell
unset http_proxy
unset https_proxy

```



### bindkey-绑定快捷键

### read

## **系统管理**

### 参考资料

- [系统管理员指南-监控和自动化](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/part-monitoring_and_automation)

```shell
system_profiler SPDisplaysDataType

```

### sudo

### ps

```shell
ps -eLf | grep 'pid' # 查看所有线程

ps aux | grep python

ps -o pid,ppid,cmd --ppid [父PID]

# -o 输出格式

pstree -p 80419

# 输出行数
pstree -p 80419 | grep -o '([0-9]\+)' | wc -l

pstree -p 80419 | wc -l


```



### top

### free

### **lsblk**-Block Device

```shell
# 判断是否为固态硬盘
lsblk -d --output NAME,TYPE,ROTA

lsblk -o NAME,ROTA

```



blkid



### findmnt

### df

### **fdisk**

### du



### 硬件信息

### lspci

### lsusb

### lscpu

### **lshw** - 硬件信息列表

### rsyslog

### addgroup

```shell
addgroup -S <groupname>
addgroup --system <groupname>
```



### adduser

```shell
adduser -S --ingroup <groupname> <username>

# Docker中使用用户 和增加密码
USER <username> 
RUN echo "vscode:password" | chpasswd

# 创建密码
chpasswd
user:password
ctrl+D
# 创建用户
sudo addgroup --system --gid 5001 kayn
sudo adduser --system --uid 5001 --gid 5001 --home /home/kayn --shell /bin/bash kayn

# kayn is not in the sudoers file.  This incident will be reported.

```

### timedatectl-时区控制

```shell
timedatectl status

timedatectl list-timezones

sudo timedatectl set-timezone Asia/Shanghai


#容器中修改时区
sudo apt-get update
sudo apt-get install tzdata
```

### localectl-本地化

```shell
```



### watch

### apt

> apt与apt-get区别:
>
> apt 兼容 apt-get apt-cache apt-search

```shell
apt clean 清理缓存
apt autoclean
apt autoremove 移出不再使用的软件包

# 查看package依赖
apt-cache depends ufw
apt depends ufw
apt-cache showpkg ufw


# 保留版本 禁用更新 
apt-mark hold nvidia-compute-utils-535 nvidia-kernel-common-535
apt-mark hold nvidia-driver-535
sudo apt-mark hold kubelet kubeadm kubectl

# 包搜索

# 包信息详情
apt show redis-server

# 第三ppa
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.12

# Golang ppa
sudo add-apt-repository ppa:longsleep/golang-backports

# 配置代理

sudo vim /etc/apt/apt.conf.d/02proxy
sudo vim /etc/apt/apt.conf

Acquire::http::Proxy "http://10.31.0.181:7890";
Acquire::https::Proxy "http://10.31.0.181:7890";

# 或者
Acquire {
  HTTP::proxy "http://proxy.example.com:port";
  HTTPS::proxy "https://proxy.example.com:port";
  FTP::proxy "ftp://proxy.example.com:port";
}


# 临时代理
sudo apt-get -o Acquire::http::proxy="http://proxy.example.com:port" update


```



### dpkg

```shell
dpkg-query -W
```



### chroot

```shell
sudo chroot /target/root /bin/bash
```



### update-alternatives

> 修改软件命令

> 仅适用于Debian/Ubuntu操作系统
>
> 该方法和软链接命令类似 `ln -s /usr/bin/python /usr/bin/python3.7

#### 用法usage

```shell
# 添加命令链接  link:命令位置 name:命令名 path:要链接的命令 priority:优先级
update-alternatives --install [link] [name] [path] [priority]
update-alternatives --install /usr/bin/python python /usr/bin/python3 1

# 删除命令
update-alternatives --remove [name] [link]
update-alternatives --remove python /usr/bin/python2


# 设置命令
update-alternatives --set [name] [link]

```



### yum

> centos redhat / fedora

```shell
  Package management utility for RHEL, Feodra, and CentOS (for older versions). 
                                                                                
- Synchronize list of packages and versions available. This should be run first, before running subsequent yum commands:
                                                                                
  yum update                                                                    
                                                                                
- Install a new package:                                                        
                                                                                
  yum install package                                                           
                                                                                
- Install a new package and assume yes to all questions (also works with update, great for automated updates):
                                                                                
  yum -y install package                                                        
                                                                                
- Find the package that provides a particular command:                          
                                                                                
  yum provides command                                                          
                                                                                
- Remove a package:                                                             
                                                                                
  yum remove package                                                            
                                                                                
- Upgrade installed packages to newest available versions:                      
                                                                                
  yum upgrade 
  
  
  
```

```shell
# 离线下载
yum install yum-plugin-downloadonly

# 下载安装包
yum install --downloadonly --downloaddir=path/ libaio

# 本地安装
yum localinstall *.rpm
```





### dnf

## 安全管理

用户和权限管理

### usermod

```shell
# Add your user to the docker group
# 修改用户资料, 将用户添加到Docker组
sudo usermod -aG docker $USER
```



### chmod

### chgrp

### umask

### chpasswd

```shell
# 交互式
chpasswd
#交互式输入 然后Ctrl+D
user:password

# echo "user:password" | chpasswd
```



## 性能监控

运维管理

性能问题排查工具

inux程序常用的调试工具：

vmstat、**iostat**、 mpstat、**netstat**、 sar 、**top**：查看系统、程序信息等

gprof、perf、perf top：定位到具体函数、调用等

strace、ltrace：系统调用、函数调用、库函数调用等

pstack、ptree、pmap：堆栈信息

dmesg：系统log信息

对于go程序，如果遇到高负载等性能问题推荐使用：perf top、pprof快速定位问题。

### iostat

### strace

### nvidia-smi

### vmstat

### iostat

### dstat

### mpstat

### sar

### pidstat

### sysstat

### dmesg-开机信息, 系统故障

### locate-数据库查找

### date

### watch

```shell
# 最低0.1s
watch -n 0.1 nvidia-smi
watch -n 1 -d
watch -n 0.1 -d -t nvidia-smi

● -c : 解析 ANSI 颜色和样式。
● -d : 高亮变化的部分。
● -e : 如果命令错误（no-zero exit）则退出。
● -n : 刷新间隔时间。（默认 2 秒）
● -t : 不显示标题。
```

### strace

### ltrace

## 系统信息

```shell
# 查看CPU核心
sysctl -n hw.ncpu
sysctl hw.logicalcpu
sysctl hw.physicalcpu
```

### date

### locale

### env

### set

### printenv

```shell
printenv LANG
```

### uname

### **getent**-名称服务

查看系统数据信息

get entries from Name Service Switch libraries

get entries from Name Service Switch libraries

```shell
getent group syslog

# 查看服务端口信息
getent services 

# 查看主机信息
```

### getconf-

Query system configuration variables

## 配置管理

### hostname-

```shell
hostname

```



### hostnamectl

```shell
sudo hostnamectl hostname <servername>
sudo hostnamectl set-hostname <servername>
```



## **进程管理**

> 进程管理 内存管理 CPU管理 系统管理
>
> 进程和服务管理
>
> systemd: daemon of system, 守护进程





### [使用 systemd](https://wiki.metacubex.one/startup/service/#systemd)[¶](https://wiki.metacubex.one/startup/service/#systemd)

- 下载二进制可执行文件 [releases](https://github.com/MetaCubeX/mihomo/releases)
- 将下载的二进制可执行文件重名名为 `mihomo` 并移动到 `/usr/local/bin/`
- 以守护进程的方式，运行 mihomo。

使用以下命令将 Clash 二进制文件复制到 /usr/local/bin, 配置文件复制到 /etc/mihomo:

```
cp mihomo /usr/local/bin
cp config.yaml /etc/mihomo
```

创建 systemd 配置文件 `/etc/systemd/system/mihomo.service`:

```
[Unit]
Description=mihomo Daemon, Another Clash Kernel.
After=network.target NetworkManager.service systemd-networkd.service iwd.service

[Service]
Type=simple
LimitNPROC=500
LimitNOFILE=1000000
CapabilityBoundingSet=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH CAP_DAC_OVERRIDE
AmbientCapabilities=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE CAP_SYS_TIME CAP_SYS_PTRACE CAP_DAC_READ_SEARCH CAP_DAC_OVERRIDE
Restart=always
ExecStartPre=/usr/bin/sleep 1s
ExecStart=/usr/local/bin/mihomo -d /etc/mihomo
ExecReload=/bin/kill -HUP $MAINPID

[Install]
WantedBy=multi-user.target
```

使用以下命令重新加载 systemd:

```
systemctl daemon-reload
```

启用 mihomo 服务：

```
systemctl enable mihomo
```

使用以下命令立即启动 mihomo:

```
systemctl start mihomo
```

使用以下命令使 mihomo 重新加载：

```
systemctl reload mihomo
```

使用以下命令检查 mihomo 的运行状况：

```
systemctl status mihomo
```

使用以下命令检查 mihomo 的运行日志：

```
journalctl -u mihomo -o cat -e
```

或

```
journalctl -u mihomo -o cat -f
```

### systemctl

#### 参考资料

- man systemd.service 
- [Managing Services with systemd](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/chap-managing_services_with_systemd)
- [systemd-github](https://github.com/systemd/systemd)



### journalctl-Query the systemd journal

查询系统日志

- [深入理解journalctl日志分析利器：生产级别十大用法总结及实践](https://cloud.tencent.com/developer/article/2295875)

```shell

# 查看最后启动的终端错误日志
journalctl -b 0 -n 100

# 查看内核日志
journalctl -l

# 按标识符过滤
journalctl -t "your_string"

# 查看某个服务并实时跟踪
# 注意u应该在最后面
journalctl -fu removebg
journalctl -f -u removebg
journalctl -f -u removebg.service

# 按格式输出
journalctl -o verbose
journalctl -o json

# -x添加解释性帮助日志
# 显示完整的日志条目，包括日志条目的文本描述。
journalctl -xeu nginx.service

# 查看当天日志
journalctl --since today

# 按日期范围显示过滤日志
journalctl --since "2023-01-01" --until "2023-01-09"

# 查看内核消息
journalctl -k

# 导出日志为JSON 
journalctl -b -u service-name.service -o json
journalctl -b -u service-name.service -o json-pretty

# 

# 按优先级显示日志 0..3 emerge, alert, crit error
journalctl -p err 
journalcrl -p 0..3

### 按设备筛选日志
#systemd-journald会按照不同设备对日志分门别类，最常见的设备有：
# 
# kernel：内核产生的日志消息。
# user：与用户操作和登录相关的日志消息。
# mail：与邮件系统相关的日志消息。
# auth：与身份验证和授权相关的日志消息。
# syslog：由 syslog 守护程序生成的日志消息。
# lpr：与打印系统相关的日志消息。
# news：与新闻服务器相关的日志消息。
# uucp：与 UUCP（Unix to Unix Copy）系统相关的日志消息。
# cron：与定时任务（cron）相关的日志消息。
# authpriv：与身份验证和授权的私有信息相关的日志消息。
# ftp：与文件传输协议（FTP）服务器相关的日志消息。
# ntp：与网络时间协议（NTP）服务器相关的日志消息。
journalctl --facility=auth

# 根据进程ID过滤日志


# 禁止截断输出
--no-pager

# 查看某命令输出的错误
journalctl /usr/bin/python3
```

```shell
```





 ```shell
 ### Options
 
 # 显示完整的日志条目，包括日志条目的文本描述。
 -x
 
 # 跳到页尾
 -e, --pager-end
 
 # 显示最近多少行
 -n, --lines=
 
 # 实时日志
  -f, --follow
            Show only the most recent journal entries, and continuously print new entries as they are appended to the journal.
            
 # 反向显示日志
 -r
 
 # 
 -S 
 -U
 ```



#### Example

```ini

[Service]
WorkDirectory=/home/pwd


```



### launchd(macos)

### system info 

```shell
/etc/cpuinfo

# os version, linux version
uname -a
cat /etc/os-release

# nvidia gpu info
nvidia-smi

```



### sysctl-(get or set kernel state)

```shell
# 查看虚拟内存
sysctl vm.swapusage

sysctl -A
```





### lsb_release -a

```shell
# 查看系统版本
lsb_release -a
cat /etc/os-release

----
"No LSB modules are available.\
Distributor ID:	Ubuntu \
Description:	Ubuntu 19.10 \
Release:	19.10 \
Codename:	eoan"

# 查看系统内核
cat /proc/version

----
"Linux version 5.3.0-19-generic (buildd@lgw01-amd64-053) (gcc version 9.2.1 20191008 (Ubuntu 9.2.1-9ubuntu2)) #20-Ubuntu SMP Fri Oct 18 09:04:39 UTC 2019"


# Centos
cat /etc/os-release
cat  /etc/redhat-release
cat /redhat

```

### bash

```shell
- Start interactive shell:
bash
- Execute a command:
bash -c "command"

- Run commands from a file:
bash file.sh

- Run commands from a file, logging all commands executed to the terminal:
bash -x file.sh

- Run commands from a file, stopping at the first error:
  bash -e file.sh

- Run commands from `stdin`:

  bash -s < test.txt

- Print the version information of bash (use `echo $BASH_VERSION` to show just the version string):

  bash --version
```



### ps

```shell
# 查看进程时显示页头

# List all running process
ps aux | grep -e USER -e v2ray 


USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND                                                root      1406  0.0  1.5 118764 15308 ?        Ssl  10:06   0:00 /usr/bin/v2ray/v2ray -config /etc/v2ray/config.json    
root      1741  0.0  0.0   9164   912 pts/1    S+   10:16   0:00 grep --color=auto -e USER -e v2ray  
```

### pstree

### top - 系统信息查看

### kill

pkill, killall

### htop

### crontab - 定时任务

[语义快速解释](https://crontab.guru/)

[官方文档](http://man7.org/linux/man-pages/man5/crontab.5.html)

[中文说明](https://blog.csdn.net/u013967628/article/details/83504839)

[书籍文档-推荐](https://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/crontab.html)



```shell
# 查看日志
cat /var/log/cron
```



|         * | any value            |
| --------: | -------------------- |
|         , | value list separator |
|         - | range of values      |
|         / | step values          |
|   @yearly | (non-standard)       |
| @annually | (non-standard)       |
|  @monthly | (non-standard)       |
|   @weekly | (non-standard)       |
|    @daily | (non-standard)       |
|   @hourly | (non-standard)       |
|   @reboot | (non-standard)       |

 `\w` 空格 : 命令分割

`,` 逗号, 罗列

`-` 连字符: 连续

`/` 斜杠: 间隔

cron file Examples

```shell
 # use /bin/sh to run commands, no matter what /etc/passwd says
       SHELL=/bin/sh
       # mail any output to `paul', no matter whose crontab this is
       MAILTO=paul
       #
       CRON_TZ=Japan
       
       # run five minutes after midnight, every day 
       [Minute, hour, day, month, week]
    
       5 0 * * *       $HOME/bin/daily.job >> $HOME/tmp/out 2>&1
       # run at 2:15pm on the first of every month -- output mailed to paul
       15 14 1 * *     $HOME/bin/monthly
       # run at 10 pm on weekdays, annoy Joe
       0 22 * * 1-5    mail -s "It's 10pm" joe%Joe,%%Where are your kids?%
       23 0-23/2 * * * echo "run 23 minutes after midn, 2am, 4am ..., everyday"
       5 4 * * sun     echo "run at 5 after 4 every sunday"
```



定时任务文件

定时任务规则详解

```shell
# 每30 秒执行一次 用两条命令来实现
* * * * * /scripts/script.sh  # 每分钟执行一次 
  * * * * *  sleep 30; /scripts/script.sh  # 延迟30s
  
# day of week 0-7 (0 or 7 is Sun, or use names)
# 另外的
/	step values
@yearly	(non-standard)  # @yearly Run once a year, “0 0 1 1 *”.
@monthly	(non-standard)
@weekly	(non-standard)
@daily	(non-standard)
@hourly	(non-standard)
@reboot	(non-standard)  # @reboot Run once, at startup.
```



### lsmod

### jobs

### sar - 不推荐

使用前需要先安装sysstat

```shell
sudo apt install sysstat
```

### nohup-忽略挂起

保证终端关闭后程序依然能够继续运行

### &-后台运行



### nice&renice-进程优先级

## **文件和磁盘管理**

> 磁盘管理

### Links

- [Logical Volume Management, or LVM](https://www.digitalocean.com/community/tutorials/how-to-use-lvm-to-manage-storage-devices-on-ubuntu-18-04)

### 最佳实践

```shell

```



### ls - 列出文件信息

> 默认是按文件名排序

可选参数

```shell
-a # 所有包括隐藏文件
-h # 人类可读模式显示(b, kb, mb, gb)
-l # 长格式
-t # 按时间排序
-S # 按大小排序

```



```shell



# 按时间排序(最新/最旧)
ls -lt
ls -ltr

# 按类型排序
ls -lX

# 按大小排序
ls -lS

# 按名称排序 name default
ls -l
ls -lr

# 按访问时间 access time
ls -tlu

# 按创建时间
ls -lU
```

### systemctl-Control the systemd system and service manager

```ini
Group=grafana
Type=notify
Restart=on-failure
WorkingDirectory=/usr/share/grafana
RuntimeDirectory=grafana
RuntimeDirectoryMode=0750
ExecStart=/usr/share/grafana/bin/grafana server                                     \
                            --config=${CONF_FILE}                                   \
                            --pidfile=${PID_FILE_DIR}/grafana-server.pid            \
                            --packaging=rpm                                         \
                            cfg:default.paths.logs=${LOG_DIR}                       \
                            cfg:default.paths.data=${DATA_DIR}                      \
                            cfg:default.paths.plugins=${PLUGINS_DIR}                \
                            cfg:default.paths.provisioning=${PROVISIONING_CFG_DIR}

LimitNOFILE=10000
TimeoutStopSec=20
CapabilityBoundingSet=
DeviceAllow=
LockPersonality=true
MemoryDenyWriteExecute=false
NoNewPrivileges=true
PrivateDevices=true
PrivateTmp=true
ProtectClock=true
ProtectControlGroups=true
ProtectHome=true
ProtectHostname=true
ProtectKernelLogs=true
ProtectKernelModules=true
ProtectKernelTunables=true
ProtectProc=invisible
ProtectSystem=full
RemoveIPC=true
RestrictAddressFamilies=AF_INET AF_INET6 AF_UNIX
RestrictNamespaces=true
RestrictRealtime=true
RestrictSUIDSGID=true
SystemCallArchitectures=native
UMask=0027

[Install]
WantedBy=multi-user.target
```



### journal-Query the systemd journal

### **lsof**-列出标准输出文件信息及其打开进程

> lists on its standard output file information about files opened by processes for the following UNIX dialects:
>
> ​	Apple Darwin 9 and Mac OS X 10.[567]
>
> ​      FreeBSD 8.[234], 9.0 and 1[012].0 for AMD64-based systems
>
> ​      Linux 2.1.72 and above for x86-based systems
>
> ​      Solaris 9, 10 and 11

```shell
# 查看文件占用, 已打开文件
lsof | grep -e "beacon" -e "USER"

# MAC 跟踪文件系统
sudo fs_usage 

# 查看占用
lsof /dev/sdc

```

### fs_usage-

report system calls and page faults related to filesystem activity in real-time

file monitor 

```shell
sudo fs_usage -w -f filesys 央视影音
```



### tree - 以树的形式输出

```shell
# 显式中文字符, 让字符串以原来的方式显示
tree -N

# 显式深度
tree -L num

# 仅显示目录, 深度为2
tree -d -L 2

# 显式所有并携带颜色
tree -a -C

# 忽略指定内容
tree -I 'directory_name1|directory_name2'

```





### **df** - 查看磁盘占用信息

```shell
# 查看磁盘信息并显示文件系统
df -hT
```

### lsblk

```shell
# 
sudo lsblk
```



### **du** - 查看文件和目录信息

用量统计

```shell
du -h test.txt


du -sh * # 查看当前目录空间的内存占用

du -ch **/*.jpg  # 当前目录下所有jpg文件占用统计

du -h -d 1 # 深度层级为1下(当前目录下)的所有目录统计

du -ah 

```

### dd

convert and copy a file

```shell
if= input file
of=output file
bs=block size
dd if=/home/molook/models/checkpoints/无用师-亚洲融合_v4.0.ckpt of=/dev/null bs=1M count=3000

```

### hdparm

get/set SATA/IDE device parameters

```shell
# 查看磁盘的缓存和缓存读取速度
sudo hdparm -Tt /dev/nvme0n1
```





### file - 查看文件类型

> Determine type of FILEs.
>
> 确定文件的类型



### stat - 显示文件或文件系统状态

```shell
stat [file]
```

### tar - 解压缩

```shell
# 重要参数

# 压缩算法
-z, -j, -J, --lzma  Compress archive with gzip/bzip2/xz/lzma

# 典型示例
Create: tar -c [options] [<file> | <dir> | @<archive> | -C <dir> ]
tar -cavf archive.tar.gz [file|directory]
tar -czvf

Extract: tar -x [options] [<patterns>]
tar -xavf 
tar -xzvf
```



### zip-压缩

```shell
```

### unzip-解压

```shell
# 解压到当前目录
unzip file.zip

# 解压到指定目录
unzip file.zip -d ~/demo
```



### **find** - 查找文件 目录

这一节，我们从 格式详解、命令实践 两个方面来学习。

按照 名称 , 权限, 类型 查找

**快速上手**

```shell
# 从给定的目录递归查找文件或目录
# Find files or directories under the given directory tree, recursively.                                                     

# 通过关键词查找
find . | grep ext 

#Find files by extension:                                                  
find root_path -name '*.ext'

# Find files by matching multiple patterns:
find root_path -name '*pattern_1*' -or -name '*pattern_2*'

# Find directories matching a given name, in case-insensitive mode:
find root_path -type d -iname *lib*

# Find files matching a path pattern:
find root_path -path '**/lib/**/*.ext'

# Find files matching a given pattern, excluding specific paths:
find root_path -name '*.py' -not -path '*/site-packages/*'

# Find files matching a given size range:
find root_path -size +500k -size -10M

# Run a command for each file (use `{}` within the command to access the filename):
find root_path -name '*.ext' -exec wc -l {} \;

# Find files modified in the last 7 days, and delete them:
find root_path -mtime -7 -delete
```

```shell
# 文件查找
find $(pwd) -name '*top*'
```



**格式详解**

命令格式：

find [路径] [参数] [关键字] [动作]

参数详解

-name 按照文件名查找文件。

-user 按照文件属主来查找文件。

-group 按照文件所属的组来查找文件。

-type 查找某一类型的文件，

诸如：

b - 块设备文件    d - 目录         c - 字符设备文件

p - 管道文件      l - 符号链接文件   f - 普通文件。

-size n(K|M|G)：[c]     查找文件长度为n块的文件，带有c时表示文件长度以字节计。

-perm (/|-)权限   按照文件权限来查找文件。   /表示有一个权限匹配即可，-表示相反权限匹配才可

-mtime (-|+)n    查找n天数(内|外)修改的文件

-ctime (-|+)n    查找n天数(内|外)改变的文件

-atime (-|+)n    查找n天数(内|外)访问的文件

-depth          在查找文件时，首先查找当前目录中的文件，然后再在其子目录中查找。

-mindepth n     在查找文件时，查找当前目录中的第n层目录的文件，然后再在其子目录中查找。

-path "子目录"    在指定目录的子目录下查找，一般与-prune使用

-prune          在查找文件时，忽略指定的内容，不能和-depth共用，否则会自动忽视prune

-newer          查找比指定文件新的文件

! : 表示取反

 

动作详解

动作就表示，我们对查找出来的文件做进一步的操作，主要都动作有三个

-print          默认选项，显示名称，-o -print 表示不仅仅显示目录名，还显示目录里面的文件名

   -ls             显示文件属性

   -exec 命令 {} \;  使用命令对查找结果处理，查找结果使用"{}"来表示

### locate

### which

### whatis

### md5sum - md5和校验

文件校验, 文件对比

```shell
md5sum file name >> 判断值

# mac sha256sum 
shasum -a 256 <file>

# linux
sha256sum
shasum -a 256

```

### md5

### shasum

### mktemp-make temporary file name (unique)

创建临时文件和文件夹

```shell
mktemp

mktemp -d

export TEMPDIR=$(mktemp -d)
```

### mkdir

```shell
mkdir
mkdir -p  # 递归创建目录, a/b/c, 不用关心父目录是否存在

- Create specific directories:
    mkdir path/to/directory1 path/to/directory2 ...

- Create specific directories and their [p]arents if needed:
    mkdir -p path/to/directory1 path/to/directory2 ...

- Create directories with specific permissions:
    mkdir -m rwxrw-r-- path/to/directory1 path/to/directory2 ...
```

### ftp

```shell
ftp [-P <port>] user@host
```



### sftp

### basename

### dirname

### eject-eject removable media

## 文本管理

> Work with file content

### grep-文本模式查找器

file pattern searcher

`grep` prints lines that contain a match for one or more patterns.

```shell
# 显示进程查询首行
 ps aux | grep -e USER -e sshd
 
docker ps -a | grep -e 4b66edbad2fe -e 95bcadb01c10  -e CON

# Find all occurrences of the pattern ‘demo’ in a file:
grep demo demo.txt

# A or B 
grep -e <pattern> -e <pattern2>
grep --regexp=<pattern>

# 扩展模型       
-E, --extended-regexp
grep -E "<pattern>|<pattern2>"

# A and B 双重过滤
grep "*A*B*"
grep A | grep B 

# 显式行号
grep -n pattern /path/to/file
grep --line-number

# 忽略大小写
grep -i
grep --ignore-case

# 反向匹配
grep -v

# 统计
grep -c
grep --count

# 单词查找(而不是包含)
grep -w
grep --word-regexp

# 禁用正则表达式
-F, --fixed-strings

# 扩展表达式, 不必要转义
# 
# .：匹配任意单个字符。
# ^：匹配行的开头。
# $：匹配行的结尾。
# *：匹配前一个字符零次或多次。
# +：匹配前一个字符一次或多次。
# ?：匹配前一个字符零次或一次。
# [ ]：用于字符集合，匹配括号内的任何一个字符。
# |：用于或逻辑，表示或的关系。
# ( 和 )：用于捕获分组，可以对表达式进行分组匹配。
grep -E
grep 

# 忽略二进制


```

```shell
### Options
--extended-regexp -E, --extended-regexp
              Interpret PATTERNS as extended regular expressions (EREs, see below).

       -F, --fixed-strings
              Interpret PATTERNS as fixed strings, not regular expressions.

       -G, --basic-regexp
              Interpret PATTERNS as basic regular expressions (BREs, see below).  This is the default.

       -P, --perl-regexp
              Interpret I<PATTERNS> as Perl-compatible regular expressions (PCREs).  This option is experimental when  combined  with  the  -z  (--null-data)
              option, and grep -P may warn of unimplemented features.

# 
-r, --recursive 


```



### echo

```shell
#Enable interpretation of backslash escapes (special characters):
# 允许输入逃逸符号
echo -e "Column 1\tColumn 2"
```



### cat

### head

### tail

```shell

tail -f filename  # 即时输出文件变化后追加的数据。
```



### nl - line numbering filter

### more

recommend use less to replace more

### **less**- 文本查看

当标准输出存在较多信息时, 使用less 会非常好用, 推荐

```
history 0 | less
```

### diff - 比较

```shell
NAME
        diff - compare files line by line
SYNOPSIS
       diff [OPTION]... FILES
DESCRIPTION
       Compare FILES line by line.

       Mandatory arguments to long options are mandatory for short options
       too.



-c, -C NUM, --context[=NUM]	output NUM (default 3) lines of copied context

-u, -U NUM, --unified[=NUM]	output NUM (default 3) lines of unified context

-y, --side-by-side	output in two columns

# Compare files (lists changes to turn old_file into new_file):
diff {{old_file}} {{new_file}}

# Compare files, ignoring white spaces:
# 忽略空行
diff -w {{old_file}} {{new_file}}

# Compare files, showing the differences side by side:
# 输出为两列, 进行文件对比
diff -y {{old_file}} {{new_file}}

Compare files, showing the differences in unified format (as used by git diff):
diff -u {{old_file}} {{new_file}}

Compare directories recursively (shows names for differing files/directories as well as changes made to files):
diff -r {{old_directory}} {{new_directory}}

Compare directories, only showing the names of files that differ:
diff -rq {{old_directory}} {{new_directory}}

# FILES are 'FILE1 FILE2' or 'DIR1 DIR2' or 'DIR FILE' or 'FILE DIR'.If --from-file or --to-file is given, there are no restrictions on FILE(s).  If a FILE is '-', read standard input.  Exit status is 0 if inputs are the same, 1 if different, 2 if trouble.
```

```shell
# 如何读懂 更多 参考man diff

c - change - 改变
a - append - 附加 
a - delete - 删除
```





###  wc - 文本统计工具

> **wc** – word, line, character, and byte count

### awk-定向模式扫描和处理

pattern-directed scanning and processing language

> Awk scans each input file for lines that match any of a set of patterns specified literally in prog or in one or more files specified as **-f** progfile. With each pattern there can be an associated action that
>
> ​    will be performed when a line of a file matches the pattern. Each line
>
> ​    is matched against the pattern portion of every pattern-action
>
> ​    statement; the associated action is performed for each matched pattern.
>
> ​    The file name **-** means the standard input. Any file of the form
>
> ​    var=value is treated as an assignment, not a filename, and is executed
>
> ​    at the time it would have been opened if it were a filename. The
>
> ​    option **-v** followed by var=value is an assignment to be done before prog
>
> ​    is executed; any number of **-v** options may be present. The **-F** fs option
>
> ​    defines the input field separator to be the regular expression fs.

awk按行扫描每个输入文件, 匹配任何指定模式的行, 支持按照字面意思在一个或多个文件中查找. 每种匹配模式可以关联操作

```shell
# 打印11~最后一列
awk '{for (i=11; i<=NF; i++) printf $i "\t"; print ""}'

# Print the fifth column (a.k.a. field) in a space-separated file:
# 打印空格分隔文件中的第五列
awk '{print $5}' path/to/file

# Print the second column of the lines containing "foo" in a space-separated file:
# 打印行中包含foo内容的行的第二列
awk '/foo/ {print $2}' path/to/file

# Print the last column of each line in a file, using a comma (instead of space) as a field separator:
# 打印文件每行的最后一列, 使用逗号(,)(代替空格)作为字段分隔符
awk -F ',' '{print $NF}' path/to/file

# Sum the values in the first column of a file and print the total:
# 求文件中第一列的值的和并打印求和后的总计值
awk '{s+=$1} END {print s}' path/to/file

# Print every third line starting from the first line:
# 从第一行起每隔3行打印该行
awk 'NR%3==1' path/to/file

# Print different values based on conditions:
    awk '{if ($1 == "foo") print "Exact match foo"; else if ($1 ~ "bar") print "Partial match bar"; else print "Baz"}' path/to/file

- Print all lines where the 10th column value equals the specified value:
    awk '($10 == value)'

- Print all the lines which the 10th column value is between a min and a max:
    awk '($10 >= min_value && $10 <= max_value)'
```



### **sed**-串流编辑器(stream editor)

> https://keith.github.io/xcode-man-pages/sed.1.html
>
> https://linux.die.net/man/1/sed
>
> https://www.gnu.org/software/sed/manual/sed.html

文本流编辑器

**!注意**: sed 文本文件时默认只是修改的输出流, 并不会修改源文件, 如果要就地修改文件则需要加上`-i`参数

#### overview

Normally `sed` is invoked like this:

```shell
sed SCRIPT INPUTFILE...
```

For example, to replace all occurrences of ‘hello’ to ‘world’ in the file input.txt:

```shell
sed 's/hello/world/' input.txt > output.txt
```



If you do not specify INPUTFILE, or if INPUTFILE is -, `sed` filters the contents of the standard input. The following commands are equivalent:

```
sed 's/hello/world/' input.txt > output.txt
sed 's/hello/world/' < input.txt > output.txt
cat input.txt | sed 's/hello/world/' - > output.txt
```



`sed` writes output to standard output. Use -i to edit files in-place instead of printing to standard output. See also the `W` and `s///w` commands for writing output to other files. The following command modifies file.txt and does not produce any output:

```
sed -i 's/hello/world/' file.txt
```



By default `sed` prints all processed input (except input that has been modified/deleted by commands such as `d`). Use -n to suppress output, and the `p` command to print specific lines. The following command prints only line 45 of the input file:

```
sed -n '45p' file.txt
```



`sed` treats multiple input files as one long stream. The following example prints the first line of the first file (one.txt) and the last line of the last file (three.txt). Use -s to reverse this behavior.

```
sed -n  '1p ; $p' one.txt two.txt three.txt
```



Without -e or -f options, `sed` uses the first non-option parameter as the script, and the following non-option parameters as input files. If -e or -f options are used to specify a script, all non-option parameters are taken as input files. Options -e and -f can be combined, and can appear multiple times (in which case the final effective script will be concatenation of all the individual scripts).

The following examples are equivalent:

```shell
sed 's/hello/world/' input.txt > output.txt

sed -e 's/hello/world/' input.txt > output.txt
sed --expression='s/hello/world/' input.txt > output.txt

echo 's/hello/world/' > myscript.sed
sed -f myscript.sed input.txt > output.txt
sed --file=myscript.sed input.txt > output.txt
```

------

#### examples

```shell
# 打印, 使用-n参数抑制默认输出, 表示只输出匹配的行(line)
sed -n '3,6p' file.txt

# 打印, 第三行多打印一次, 默认打印所有行
sed '3p' 

# (!)置换
sed 's/regexp/replacement/flags'

# 删除
sed '2d'

# 插入行
sed '3i\
text_to_insert' file.txt

# 追加行,$表示last line
sed '5a\
hello'
```

#### commands

##### p-print-打印

##### s-substitution-置换

##### d-delete-删除

##### i-insert-插入

##### a-append-追加

### tr- translate characters

字符串替换

```shell
echo $PATH | tr ':' '\n'
```



### join 

### sort

### tsort

### paste

### fold

### fmt

### history

history [line]

```shell
history
# 查看所有命令
history 0 | less 

```

### tee-重复标准输出

duplicate standard input



```shell

echo "hello, 世界!\n" | tee ~/demo.md > /dev/null


# docker engine install 
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


#  将 标准输入 追加到文件
tee -a "$HOME/.bashrc" << 'EOF'
...contents of here-document here...
EOF


tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://kfp63jaj.mirror.aliyuncs.com"]
}
EOF

# Copy `stdin` to each file, and also to `stdout`:
    echo "example" | tee path/to/file

# Append to the given files, do not overwrite:
    echo "example" | tee -a path/to/file

- Print `stdin` to the terminal, and also pipe it into another program for further processing:
    echo "example" | tee /dev/tty | xargs printf "[%s]"

- Create a directory called "example", count the number of characters in "example" and write "example" to the terminal:
    echo "example" | tee >(xargs mkdir) >(wc -c)

```





### json_pp

## **网络管理**

>  防火墙	firewall

查看网络地址

```shell
ifconfig

ip addr show
ip address show
```



### ping

```shell
 ping                                                                                                                                             
                                                                                                                                                   
  Send ICMP ECHO_REQUEST packets to network hosts.                                                                                                 
                                                                                                                                                   
- Ping host:                                                                                                                                       
                                                                                                                                                   
  ping host                                                                                                                                        
                                                                                                                                                   
- Ping a host only a specific number of times:                                                                                                     
                                                                                                                                                   
  ping -c count host                                                                                                                               
                                                                                                                                                   
- Ping host, specifying the interval in seconds between requests (default is 1 second):                                                            
                                                                                                                                                   
  ping -i seconds host                                                                                                                             
                                                                                                                                                   
- Ping host without trying to lookup symbolic names for addresses:                                                                                 
                                                                                                                                                   
  ping -n host                                                                                                                                     
                                                                                                                                                   
- Ping host and ring the bell when a packet is received (if your terminal supports it):                                        
  ping -a host                                                      
- Also display a message if no response was received:
ping -O host       
```

### ip

ifconfig 替代工具

```shell
ip addr

ip link

# 查看路由
ip route show
```



### ifconfig

### telnet-nc

`telnet 192.168.0.10 5173` == `curl 192.168.0.10:5173`

```shell
# telnet
  Connect to a specified port of a host using the telnet protocol.               
- Telnet to the default port of a host:                                         
  telnet host                
- Telnet to a specific port of a host:                              
  telnet ip_address port                                                     
- Exit a telnet session:                                                
  quit                                                      
- Emit the default escape character combination for terminating the session:
Ctrl + ]
- Start telnet with "x" as the session termination character:
telnet -e x ip_address port     
```



### ufw-防火墙

```shell
# 防火墙状态
ufw status
# 设置为开机启动/禁用
ufw enable | disable

# 默认阻止所有端口
ufw default allow | deny

# 重置所有规则
ufw reset

# 查看端口防火墙状态
ufw status [verbose | numberd]

# 设置允许ssh访问
ufw allow ssh

# 设置允许被访问的端口
ufw allow 22

# 允许来自ip的连接
ufw allow from 192.168.33.71
```

### iptables

```shell
sudo apt install iptables-persistent


sudo iptables -t nat -A PREROUTING -p tcp --dport 43045 -j DNAT --to-destination 192.168.0.104:43045

sudo iptables -t nat -A POSTROUTING -p tcp -d 192.168.0.104 --dport 43045 -j MASQUERADE

sudo iptables-save
sudo netfilter-persistent save

# 允许ip转发 
sudo vim /etc/sysctl.conf
net.ipv4.ip_forward = 1
net.ipv6.conf.all.forwarding = 1

# 生效
sudo sysctl -p

# 查看 c'd
```



### lsof

```shell
# 列出被打开的文件列表
lsof -i 
lsof -i :6379

# for mac 
lsof -i -P | grep LISTEN | grep :$PORT

# TLDR
lsof
Lists open files and the corresponding processes.Note: Root privileges (or sudo) is required to list files opened by others.

 - Find the processes that have a given file open:
   lsof {{path/to/file}}

 - Find the process that opened a local internet port:
   lsof -i :{{port}}

 - Only output the process ID (PID):
   lsof -t {{path/to/file}}

 - List files opened by the given user:
   lsof -u {{username}}

 - List files opened by the given command or process:
   lsof -c {{process_or_command_name}}

 - List files opened by a specific process, given its PID:
   lsof -p {{PID}}

 - List open files in a directory:
   lsof +D {{path/to/directory}}

 - Find the process that is listening on a local TCP port:
   lsof -iTCP:{{port}} -sTCP:LISTEN

```

### netstat - 查看端口

```shell
# 查看端口
lsof -i
lsof -i:21
# 查看网络端口占用(部分系统进程可能需要root权限以显示进程信息)
netstat -nltp 
lsof -i:22

# 查看监听端口
netstat -tulnp

# 
netstat -n -p TCP | grep SYN_RECV

# 查看 网络流量接口, 路由表
netstat -nr  

# for Mac  
netstat -an | grep -e 'state' -e 'LISTEN'




### Options

-l, --listening			display listening server sockets
-p, --programs			display PID/Program name for sockets
```

### ss

> [!note]
>
> another utility to investigate sockets

用法和netstat类似, 是netstat的现代替代版本

```shell
ss -tuln

```



### **nc**

> [!tip]
>
> arbitrary TCP and UDP connections and listens
>
> Netcat is a featured networking utility which reads and writes data across network connections, using the TCP/IP protocol.
> It is designed to be a reliable "back-end" tool that can be used directly or easily driven by other programs and scripts. At the same time, it is a feature-rich network debugging and exploration tool, since it can create almost any kind of connection you would need and has several interesting built-in capabilities.
>
> It provides access to the following main features:
>
> - Outbound and inbound connections, TCP or UDP, to or from any ports.
> - Featured **tunneling mode** which allows also special tunneling such as UDP to TCP, with the possibility of specifying all network parameters (source port/interface, listening port/interface, and the remote host allowed to connect to the tunnel.
> - Built-in port-scanning capabilities, with randomizer.
> - Advanced usage options, such as buffered send-mode (one line every N seconds), and hexdump (to stderr or to a specified file) of trasmitted and received data.
> - Optional RFC854 telnet codes parser and responder.

https://netcat.sourceforge.net/

> nc, netcat

telnet alternative 

```shell
### Options
-v      Have nc give more verbose output.
-z      Specifies that nc should just scan for listening daemons, without sending any data to them.  It is an error to use this option in conjunction with
             the -l option.
```

```shell
# 使用代理连接端口测试
nc -x localhost:7890 -zv google.com 443
```



```shell


# check if port 9200 
nc -zv localhost 9200




# Open a TCP connection to port 42 of host.example.com, using port 31337 as the source port, with a timeout of 5 seconds:

$ nc -p 31337 -w 5 host.example.com 42

# Open a UDP connection to port 53 of host.example.com:

$ nc -u host.example.com 53

 # Open a TCP connection to port 42 of host.example.com using 10.1.2.3 as the IP for the local end of the connection:

$ nc -s 10.1.2.3 host.example.com 42

# Create and listen on a Unix Domain Socket:

$ nc -lU /var/tmp/dsocket

# Connect to port 42 of host.example.com via an HTTP proxy at 10.2.3.4, port 8080.  This example could also be used by ssh(1); see the ProxyCommand directive in ssh_config(5) for more information.

$ nc -x10.2.3.4:8080 -Xconnect host.example.com 42
```



### nload



### **iftop**

```shell
sudo iftop -n
192.168.0.130                                                       
=> 153.37.164.74                                                       26.7Mb  26.5Mb  26.4Mb
                                                                    
                 <=                                                          433Kb   463Kb   457Kb

三个值分别2s（最近2秒平均）、10s（最近10秒平均）、40s（最近40秒平均）。

sudo iftop -Bn
```

### wget

### **tcpdump**

网络数据采集, 分析抓包工具, wireshark替代工具, 

tcpdump is a powerful command-line packet analyzer that can capture and display network traffic on a macOS system. 

```shell
sudo tcpdump -i any

sudo tcpdump -i any -w capture.pcap

# 
    tcpdump -D

# 分析站点
# Capture the traffic from or to a host:

#     tcpdump host www.example.com
tcpdump host www.google.com


# ip
tcpdump ip
```

| options |      |      |
| ------- | ---- | ---- |
|         |      |      |
| -nn     |      |      |
|         |      |      |



### system-networkd

### NetworkManager

### netplan

### resolvectl

```shell
resolvectl status
```



### **nmcli**

```shell
# 查看网络接口配置
nmcli device show enp4s0

nmcli connection modify | show

# 应用配置
sudo nmcli connection up 'Wired connection 1'  
```

### ethtool-

```shell
sudo apt install ethtool

# 查看ethtool
ethtool <接口名>

# 启用或禁用 wake-on 
# 支持pumbg
# g 表示魔术包
sudo ethtool -s <接口名> wol g
sudo ethtool -s enp4s0 wol g
```



### nslookup-DNS查询

```shell
- Query your system's default name server for an IP address (A record) of the domain:
    nslookup example.com

- Query a given name server for a NS record of the domain:
    nslookup -type=NS example.com 8.8.8.8

- Query for a reverse lookup (PTR record) of an IP address:
    nslookup -type=PTR 54.240.162.118

- Query for ANY available records using TCP protocol:
    nslookup -vc -type=ANY example.com

- Query a given name server for the whole zone file (zone transfer) of the domain using TCP protocol:
    nslookup -vc -type=AXFR example.com name_server

- Query for a mail server (MX record) of the domain, showing details of the transaction:
    nslookup -type=MX -debug example.com

- Query a given name server on a specific port number for a TXT record of the domain:
    nslookup -port=port_number -type=TXT example.com name_server

```

### dig-DNS解析路径



### proxychains-代理链



### traceroute

### tracepath

### **mac**

### networkQuality(mac)

### dscacheutil-刷新缓存

```shell
sudo dscacheutil -flushcahe
```



## **远程管理**

### ssh

```shell
# 登录

# 端口转发


# ssh 别名 alias
vim ~/.ssh/config

# 示例
```

### screen(deprecated)

[Screen User's Manual](https://www.gnu.org/software/screen/manual/screen.html)

```shell
# 安装
sudo apt install screen

# 新建会话
screen
ctrl + a c

# 退出会话(分离, 挂起会话)
ctrl + a d

# 切换会话
ctrl+a n/p

# 查看所有窗口列表
ctrl + a " 
ctrl + a (shift+')
screen -ls

# 重连会话
screen -r [会话id]
```

### tmux

> [!tip]
>
> `tmux` 是一个终端复用器，可以让你在一个终端会话中运行多个终端。它允许你在会话之间切换、分离和重新连接，非常适合远程工作和长时间运行的任务。以下是 `tmux` 的快速上手指南和常用命令。
>
> ### 安装 tmux
>
> 在大多数 Linux 发行版上，你可以使用包管理器安装 `tmux`：
>
> ```shell
> # Debian/Ubuntu
> sudo apt-get install tmux
> 
> # CentOS/RHEL
> sudo yum install tmux
> 
> # macOS
> brew install tmux
> ```
>
> ### 启动 tmux
>
> 启动 `tmux` 会话：
>
> ```shell
> tmux
> ```
>
> 启动一个命名的 `tmux` 会话：
>
> ```shell
> tmux new -s mysession
> ```
>
> ### 分离和重新连接会话
>
> **分离会话**（保持会话运行，自己退出）：
>
> ```
> bash
> Copy code
> Ctrl-b d
> ```
>
> **重新连接到会话**：
>
> 列出当前的 `tmux` 会话：
>
> ```
> 
> tmux ls
> ```
>
> 重新连接到命名的 `tmux` 会话：
>
> ```shell
> tmux  # 也会直接到挂起的回话
> tmux attch # 连接到默认
> tmux attach -t mysession
> ```
>
> ### 常用 tmux 快捷键
>
> `tmux` 的默认快捷键前缀是 `Ctrl-b`，下面的命令都是在按下 `Ctrl-b` 后执行的。
>
> #### 会话管理
>
> - `d`：分离会话
> - `:`：进入命令模式
> - `s`：选择会话
>
> #### 窗口管理
>
> - `c`：新建窗口
> - `w`：列出所有窗口
> - `,`：重命名当前窗口
> - `&`：关闭当前窗口
> - `n`：切换到下一个窗口
> - `p`：切换到上一个窗口
> - 数字键（如 `0`, `1`, `2`...）：切换到指定编号的窗口
>
> #### 面板管理(pane)
>
> - `%`：垂直分割面板
> - `"`：水平分割面板
> - `x`：关闭当前面板
> - `o`：切换到下一个面板
> - `!`:  将当前面板置于新窗口
> - `Ctrl-方向键`：调整面板大小
> - `q` : 显示面板编号
>
> #### 滚动与复制模式
>
> - `[`：进入滚动和复制模式
> - `Space`：开始选择文本
> - `Enter`：复制选定的文本
> - `]`：粘贴复制的文本
>
> ### 配置文件示例
>
> 你可以通过编辑 `~/.tmux.conf` 文件来自定义 `tmux` 配置。以下是一个简单的配置示例：
>
> ```
> bash
> Copy code
> # 设置前缀键为 Ctrl-a
> unbind C-b
> set-option -g prefix C-a
> bind-key C-a send-prefix
> 
> # 启用鼠标支持
> set-option -g mouse on
> 
> # 设置分割面板的快捷键
> bind-key | split-window -h
> bind-key - split-window -v
> 
> # 设置状态栏样式
> set-option -g status-bg colour235
> set-option -g status-fg white
> set-option -g status-interval 5
> ```
>
> ### 实用技巧
>
> 1. **持久会话**：使用 `tmux` 保持远程会话，即使网络连接断开也不影响正在进行的任务。
> 2. **多任务并行**：在一个 `tmux` 会话中管理多个窗口和面板，提高工作效率。
> 3. **自定义配置**：根据个人习惯自定义 `tmux` 配置文件，提升使用体验。
>
> ### 小结
>
> `tmux` 是一个功能强大的终端复用器，适合在远程工作和多任务环境中使用。通过掌握常用命令和快捷键，你可以大大提高终端操作的效率。尝试配置文件来个性化你的 `tmux` 使用体验，让它更符合你的工作习惯。

```shell
# 新建会话
- Start a new session:
tmux

# 新建命名会话
# Start a new named session:
    tmux new -s name

# 查看已经存在的会话
- List existing sessions:
    tmux ls

# 连接到最新会话
# Attach to the most recently used session:
    tmux attach

- Detach from the current session (inside a tmux session):
    <Ctrl>-B d

- Create a new window (inside a tmux session):
    <Ctrl>-B c

- Switch between sessions and windows (inside a tmux session):
    <Ctrl>-B w

- Kill a session by name:
    tmux kill-session -t name
    
# 重命名窗口
tmux rename-session -t oldname newname
ctrl + b + ,

# 重命名会话
tmux rename -t
tmux rename-session -t oldname newname

```



### ssh-copy-id

### scp

```shell
scp -P 
```



### rsync

```shell
# 同步本地文件到远程,archive, verbose and compress
rsync -avz /path/to/origin/ user@host:/path/to/destination/



# 这里 -avz 是三个选项的组合，分别代表：
# -a 或 --archive：归档模式，它保持符号链接、权限、时间戳、组和所有权信息，并且递归地复制目录。这基本上是保持文件系统属性的完整复制。
# -v, --verbose：详细模式，输出更多的信息到控制台，这样用户可以看到正在传输的文件的详细信息。
# -z, --compress：压缩模式，在传输数据时进行压缩，可以加快传输速度，尤其是当网络带宽较低或传输大量小文件时。
# 所以，rsync -avz 命令组合了这三个选项，提供了一种高效、保持文件属性、详细输出且压缩传输数据的方式，通常用于备份、镜像和同步文件或目录。
# -n, --dry-run: 试运行

# --delete 以源目录为准, 删除目标目录存在但源目录不存在的文件

# 显示速度-P 



```



### sz / rz

> 文件传输 

rz，sz是Linux/Unix同Windows进行ZModem文件传输的命令行工具。
优点就是不用再开一个sftp工具登录上去上传下载文件。

sz：将选定的文件发送（send）到本地机器
rz：运行该命令会弹出一个文件选择窗口，从本地选择文件上传到Linux服务器

 ```shell
# 安装
yum install lrzsz

# 从服务器下载到本地
sz filename

# 从客户端上传文件到服务端：
rz 
 ```

cureCRT设置默认路径：

Options -> Session Options -> Terminal -> Xmodem/Zmodem ->Directories

Xshell设置默认路径：

右键会话 -> 属性 -> ZMODEM -> 接收文件夹



## gcc

[快速上手](https://tldr.ostera.io/gcc)

[官方文档](https://gcc.gnu.org/)

```shell
# Compile multiple source files into executable:
# 将源文件编译成可执行文件, 二进制文件
gcc {{source1.c}} {{source2.c}} -o {{executable}}
gcc my_c.c -o myc
gcc -o myc my_c.c

# Allow warnings, debug symbols in output:
gcc {{source.c}} -Wall -Og -o {{executable}}

# Include libraries from a different path:
# 允许包含不同的头文件和库文件
gcc {{source.c}} -o {{executable}} -I{{header_path}} -L{{library_path}} -l{{library_name}}

Compile source code into Assembler instructions:
gcc -S {{source.c}}

Compile source code without linking:
gcc -c {{source.c}}
```

## 运维命令

```shell
# 负载查看
uptime
# 09:33:34 up 9 days, 20:58,  1 user,  load average: 1.23, 0.95, 0.89
# 服务时间 - 运行时长 - 用户数 - 负载均衡: 1min, 5min, 15min

top/htop

cat /etc/mtab
```

### 后台执行脚本

脚本后台运行

`./test.sh &` 直接后台执行脚本, 退出终端会断掉

`nohup ./test.sh &` **不中断的在后台运行test.sh**



# Mac命令

## lauchctl

```shell
# 设置全局环境变量
launchctl setenv LANG en_US.UTF-8
```



## diskutil



## scutil

```shell
sudo scutil --set HostName "kayn" 

scutil --get HostName

scutil --get ComputerName

scutil --get LocalHostName
```



# 桌面管理



```shell
# 通过命令行设置代理模式
gsettings set org.gnome.system.proxy mode 'manual'
gsettings set org.gnome.system.proxy.http port 7890
gsettings set org.gnome.system.proxy.http host '127.0.0.1'
gsettings set org.gnome.system.proxy.socks port 7891
gsettings set org.gnome.system.proxy.socks host '127.0.0.1'
gsettings set org.gnome.system.proxy ignore-hosts "['localhost', '127.0.0.0/8', '::1']"

# 等同于通过 Settings|Network|Proxy|Manual
```

## gnome-remote-desktop

```shell
systemctl --user status gnome-remote-desktop.service 
```



# 第三方工具

## Cockpit

- https://cockpit-project.org/guide/latest/cockpit.conf.5.html
- [插件](https://cockpit-project.org/applications.html)
- [Cockpit systemd Socket 通过Nginx](https://cockpit-project.org/guide/latest/listen.html#listen-systemd)
- https://zhile.io/2023/12/30/cockpit-configuration.html#more-614
- [Running Cockpit-Ubuntu](https://cockpit-project.org/running.html#ubuntu)



### 安装和配置

```shell
. /etc/os-release
sudo apt install -t ${VERSION_CODENAME}-backports cockpit
```

```shell
sudo systemctl enable cockpit.socket
sudo systemctl start cockpit.socket
```



## jq

```shell 
 https://api.chucknorris.io/jokes/random
 curl  https://api.chucknorris.io/jokes/random | pp_json
```

pygmentize 

## jc

## bat(cat)

## fd(find)

## ripgrep(grep)

## watchman

## proxychains

## inotify

## **vsftpd**

[Digital Ocean: How To Set Up vsftpd for a User's Directory on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-vsftpd-for-a-user-s-directory-on-ubuntu-20-04)

[官网: vsftpd conf](https://security.appspot.com/vsftpd/vsftpd_conf.html)

### 核心配置

```shell
# 配置文件路径 /etc/vsftpd.conf

# 允许写入
write_enable=YES

# 允许utf-8字符
utf8_filesystem=YES

# 配置为允许写入和允许ftp根目录为~用户home目录而不系统/目录
chroot_local_user=YES
allow_writeable_chroot=YES
local_root=/home/molook/code
# local_root=/home/$USER/code

# 将FTP根目录映射用户家目录(采用多用户时禁用该二者选项)
#chroot_local_user=YES
#allow_writeable_chroot=YES

# 如果仅使用单用户时(如本地系统用户) 可以直接修改root目录
#user_sub_token=$USER
#local_root=/home/$USER/ftp


# 通过用户配置目录为每个用户配置root目录
user_config_dir=/etc/vsftpd/user_configs
```



### 常见需求

### 配置ssl 登录

必须设置为passive模式

同时需要将数据端口转发出去 20002和20003 21

past_address地址设置为公网IP即可

```shell
rsa_cert_file=/etc/vsftpd/ftp.molook.cn.pem
rsa_private_key_file=/etc/vsftpd/ftp.molook.cn.key
ssl_enable=YES
force_local_data_ssl=YES
force_local_logins_ssl=YES
pasv_enable=YES
pasv_min_port=20003
pasv_max_port=20003
pasv_address=39.174.67.232


# 暂时禁用
#rsa_cert_file=/etc/vsftpd/ftp.molook.cn.pem
#rsa_private_key_file=/etc/vsftpd/ftp.molook.cn.key
#ssl_enable=YES
#force_local_data_ssl=YES
#force_local_logins_ssl=YES
#pasv_enable=YES
#pasv_min_port=20002
#pasv_max_port=20003
#pasv_address=39.174.67.232

# 匿名登录 

allow_anon_ssl=YES
force_anon_logins_ssl=YES
force_anon_data_ssl=YES

# 可选项

ssl_tlsv1=YES
ssl_sslv2=NO
ssl_sslv3=NO
require_ssl_reuse=no


```

### 禁止删除目录

```shell
chown root:root /path/to/your/directory
chmod 755 /path/to/your/directory
```



### 多用户登录

#### 使用系统用户

```shell
# 创建ftp用户
sudo adduser --disabled-login ftpuser 
# --home /mnt/mnt 
```



#### 使用虚拟用户(推荐)

```shell
# 前置配置/etc/vsftpd.conf
# 用户配置目录
user_config_dir=/etc/vsftpd/user_configs


# 
# If enabled, virtual users will use the same privileges as local users. By default, virtual users will use the same privileges as anonymous users, which tends to be more restrictive (especially in terms of write access).
virtual_use_local_privs=YES


# 允许虚拟用户登录
guest_enable=YES
# 需要时一个已存在的系统用户 This setting is the real username which guest users are mapped to. 
# 默认就是vsftpd
guest_username=vsftpd

# 启用pam 认证 对应 /etc/pam.d/目录下的文件
pam_service_name=vsftpd
```



```shell


# 安装db-util Berkeley DB
sudo apt-get install db-util

# 修改/etc/pam.d/vsftpd 文件(添加到末尾)
auth required pam_userdb.so db=/etc/vsftpd/virtual_users
account required pam_userdb.so db=/etc/vsftpd/virtual_users

# 生成 Berkeley DB 文件
sudo db_load -T -t hash -f /etc/vsftpd/virtual_users.txt /etc/vsftpd/virtual_users.db
sudo chmod 600 /etc/vsftpd/virtual_users.db


# 设置用户配置文件
sudo vim /etc/vsftpd/user_configs/huangrui

local_root=/home/molook/huangrui

```





#### 使用匿名用户登录

#### 使用用户配置文件

### 配置示例

```ini
# Example config file /etc/vsftpd.conf
#
# The default compiled in settings are fairly paranoid. This sample file
# loosens things up a bit, to make the ftp daemon more usable.
# Please see vsftpd.conf.5 for all compiled in defaults.
#
# READ THIS: This example file is NOT an exhaustive list of vsftpd options.
# Please read the vsftpd.conf.5 manual page to get a full idea of vsftpd's
# capabilities.
#
#
# Run standalone?  vsftpd can run either from an inetd or as a standalone
# daemon started from an initscript.
listen=NO
#
# This directive enables listening on IPv6 sockets. By default, listening
# on the IPv6 "any" address (::) will accept connections from both IPv6
# and IPv4 clients. It is not necessary to listen on *both* IPv4 and IPv6
# sockets. If you want that (perhaps because you want to listen on specific
# addresses) then you must run two copies of vsftpd with two configuration
# files.
listen_ipv6=YES
#
# Allow anonymous FTP? (Disabled by default).
# anonymous_enable=NO
#
# Uncomment this to allow local users to log in.
# 允许本地用户登录
local_enable=YES
#
# Uncomment this to enable any form of FTP write command.
# 允许FTP写入
write_enable=YES
#
# Default umask for local users is 077. You may wish to change this to 022,
# if your users expect that (022 is used by most other ftpd's)
#local_umask=022
#
# Uncomment this to allow the anonymous FTP user to upload files. This only
# has an effect if the above global write enable is activated. Also, you will
# obviously need to create a directory writable by the FTP user.
# anon_upload_enable=YES
#
# Uncomment this if you want the anonymous FTP user to be able to create
# new directories.
# anon_mkdir_write_enable=YES
#
# Activate directory messages - messages given to remote users when they
# go into a certain directory.
dirmessage_enable=YES
#
# If enabled, vsftpd will display directory listings with the time
# in  your  local  time  zone.  The default is to display GMT. The
# times returned by the MDTM FTP command are also affected by this
# option.
use_localtime=YES
#
# Activate logging of uploads/downloads.
xferlog_enable=YES
#
# Make sure PORT transfer connections originate from port 20 (ftp-data).
connect_from_port_20=YES
#
# If you want, you can arrange for uploaded anonymous files to be owned by
# a different user. Note! Using "root" for uploaded files is not
# recommended!
#chown_uploads=YES
#chown_username=whoever
#
# You may override where the log file goes if you like. The default is shown
# below.
#xferlog_file=/var/log/vsftpd.log
#
# If you want, you can have your log file in standard ftpd xferlog format.
# Note that the default log file location is /var/log/xferlog in this case.
#xferlog_std_format=YES
#
# You may change the default value for timing out an idle session.
#idle_session_timeout=600
#
# You may change the default value for timing out a data connection.
#data_connection_timeout=120
#
# It is recommended that you define on your system a unique user which the
# ftp server can use as a totally isolated and unprivileged user.
#nopriv_user=ftpsecure
#
# Enable this and the server will recognise asynchronous ABOR requests. Not
# recommended for security (the code is non-trivial). Not enabling it,
# however, may confuse older FTP clients.
#async_abor_enable=YES
#
# By default the server will pretend to allow ASCII mode but in fact ignore
# the request. Turn on the below options to have the server actually do ASCII
# mangling on files when in ASCII mode.
# Beware that on some FTP servers, ASCII support allows a denial of service
# attack (DoS) via the command "SIZE /big/file" in ASCII mode. vsftpd
# predicted this attack and has always been safe, reporting the size of the
# raw file.
# ASCII mangling is a horrible feature of the protocol.
#ascii_upload_enable=YES
#ascii_download_enable=YES
#
# You may fully customise the login banner string:
#ftpd_banner=Welcome to blah FTP service.
#
# You may specify a file of disallowed anonymous e-mail addresses. Apparently
# useful for combatting certain DoS attacks.
#deny_email_enable=YES
# (default follows)
#banned_email_file=/etc/vsftpd.banned_emails
#
# You may restrict local users to their home directories.  See the FAQ for
# the possible risks in this before using chroot_local_user or
# chroot_list_enable below.
# 将HOME目录映射出来而不是整个目录
chroot_local_user=YES
allow_writeable_chroot=YES
#
# You may specify an explicit list of local users to chroot() to their home
# directory. If chroot_local_user is YES, then this list becomes a list of
# users to NOT chroot().
# (Warning! chroot'ing can be very dangerous. If using chroot, make sure that
# the user does not have write access to the top level directory within the
# chroot)
# chroot_local_user=YES
# chroot_list_enable=YES
# (default follows)
# chroot_list_file=/etc/vsftpd.chroot_list
#
# You may activate the "-R" option to the builtin ls. This is disabled by
# default to avoid remote users being able to cause excessive I/O on large
# sites. However, some broken FTP clients such as "ncftp" and "mirror" assume
# the presence of the "-R" option, so there is a strong case for enabling it.
#ls_recurse_enable=YES
#
# Customization
#
# Some of vsftpd's settings don't fit the filesystem layout by
# default.
#
# This option should be the name of a directory which is empty.  Also, the
# directory should not be writable by the ftp user. This directory is used
# as a secure chroot() jail at times vsftpd does not require filesystem
# access.
secure_chroot_dir=/var/run/vsftpd/empty
#
# This string is the name of the PAM service vsftpd will use.
pam_service_name=vsftpd
#
# This option specifies the location of the RSA certificate to use for SSL
# encrypted connections.
rsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
rsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key
ssl_enable=NO

#
# Uncomment this to indicate that vsftpd use a utf8 filesystem.
# 允许UTF-8文件
utf8_filesystem=YES


# 修改默认根目录
#user_sub_token=$USER
#local_root=/home/$USER/ftp



# 用户配置目录
user_config_dir=/etc/vsftpd/user_configs


# 
# If enabled, virtual users will use the same privileges as local users. By default, virtual users will use the same privileges as anonymous users, which tends to be more restrictive (especially in terms of write access).
virtual_use_local_privs=YES


# 允许虚拟用户登录
guest_enable=YES
guest_username=molook

# 可选
local_umask=022


```

## testdisk 文件恢复



## 宝塔面板

## certbot

## ncdu-(文件删除)
## dua/dust(du替代)

## ~~xrdp(不推荐)~~

https://zhuanlan.zhihu.com/p/519648451

https://github.com/neutrinolabs/xrdp/issues/1483

https://blog.csdn.net/wu_weijie/article/details/116158271

```shell
sudo vim /etc/xrdp/startwm.sh

# 添加配置
unset DBUS_SESSION_BUS_ADDRESS
unset XDG_RUNTIME_DIR

sudo systemctl restart xrdp

# 桌面优化
vim ~/.xsessionrc

export GNOME_SHELL_SESSION_MODE=ubuntu
export XDG_CURRENT_DESKTOP=ubuntu:GNOME
export XDG_CONFIG_DIRS=/etc/xdg/xdg-ubuntu:/etc/xdg

sudo systemctl restart xrdp


ss -lnm sport 3389

sudo vim /etc/sysctl.conf

sudo sysctl -w net.core.wmem_max=8388608 
sudo sysctl -w net.core.rmem_max=8388608 

sudo sysctl -p

sudo vim /etc/xrdp/xrdp.ini

tcp_send_buffer_bytes=3276800
tcp_recv_buffer_bytes=3276800


sudo apt install dbus-x11
```



## gnome-remote-desktop(推荐)

https://help.ubuntu.com/stable/ubuntu-help/sharing-desktop.html



```shell
systemctl --user restart gnome-remote-desktop.service
```

## syncthing



> [!Tip]
>
> [Ubuntu Official Instsall](https://apt.syncthing.net/) 

```shell
# mac

To start syncthing now and restart at login:
  brew services start syncthing
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/syncthing/bin/syncthing -no-browser -no-restart

```

```shell
# ubuntu 
# https://apt.syncthing.net/
```



## flakpak

## thincast

## certbot(Let's Encrypt)

```shell
# Ubuntu 安装 certbot：
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
# 生成证书 & 修改 Nginx 配置
sudo certbot --nginx
# 根据指示进行操作
# 重启 Nginx
sudo service nginx restart
```

## cloc-代码统计

# 系统配置

## 语言

```shell
# 语言 方式一
sudo dpkg-reconfigure locales
sudo localectl set-locale LANG=zh_CN.UTF-8 LC_CTYPE=zh_CN.UTF-8
sudo localectl set-locale LC_CTYPE=zh_CN.UTF-8
sudo localectl list-locales
sudo apt-get install language-pack-zh-hans
vim /etc/default/locale
source /etc/default/locale

# 方式二边界/etc/locale.gen或 locale-gen命令

sudo vim /etc/default/locale

locale 
locale -a
locale-gen zh_CN.UTF-8
update-locale  
# update-locale  LANG=zh_CN.UTF-8   # 如果不需要设置为中文为默认不需要
locale -a 

# 时区
timedatectl list-timezones
timedatectl set-timezone Asia/Shanghai

```

# 环境变量

```shell
### 相关命令

### 推荐配置
LANG=zh_CN.UTF-8
LC_CTYPE=zh_CN.UTF-8

# ubuntu 安装后配置(亦可)
LANG=C.UTF-8
LC_CTYPE=C.UTF-8

# 以下设置 似乎中文会乱码
# LC_CTYPE=en_US.UTF-8
# LC_CTYPE=UTF-8

# 关于 C C.UTF-8 等变量值含义, C语言环境

### ubuntu 中文环境时的/etc/default/locale
#  File generated by update-locale
LANG=zh_CN.UTF-8
LANGUAGE="zh_CN:zh"
LC_CTYPE=zh_CN.UTF-8

# 优先级
LC_ALL > LC_* >LANG

# 语言控制 /etc/default/locale
# LC_CTYPE规定了系统内有效的字符以及这些字符的分类和编码转换
# 如vim/ls等显式字符时
LC_CTYPE=en_US.UTF-8
LC_CTYPE=zh_CN.UTF-8

# 
LC_ALL=en_US.UTF-8
LC_ALL=C

# 系统默认语言环境, 
# 主要控制界面显式和消息显示
LANG=zh_CN.UTF-8

# 多语言 用冒号:区隔 可能覆盖LANG 用于Ubuntu等系统中
LANGUAGE=en_US:zh_CN

# 立即生效, 也可重新登录终端
source /etc/default/locale
# 或者
sudo localectl set-locale LANG=zh_CN.UTF-8
sudo locale-gen
sudo update-locale

# 安装中文语言
sudo apt-get install language-pack-zh-hans



```

```shell
# 代理相关
http_proxy
https_proxy
all_proxy
ftp_proxy

# 主动设置某些无需代理
no_proxy

```

```shell
# ld : linker
LD_LIBRARY_PATH

# 添加到LD库
export LD_LIBRARY_PATH=/path/to/lib:$LD_LIBRARY_PATH
```


# Linux文件系统

[参考文档](https://man7.org/linux/man-pages/dir_section_5.html)

[](https://blog.bytebytego.com/p/ep63-linux-file-system-explained)

![chart, radar chart](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306161001599.jpeg)

```shell
# 配置文件
# 系统预留端口
/etc/services
# hosts
/etc/hosts

### 用户程序和数据
/usr
# 用户二进制文件, 可执行文件
/usr/bin
#库文件
/usr/lib
# 用户安装的软件和数据目录
/usr/local
# 用户二进制
/usr/local/bin
# 用户库文件
/usr/local/lib
# 用户头文件
/usr/local/include
# 用户share
/usr/local/share

# 用户源码
/usr/local/src

# 多版本
/usr/local/python-3.8
/usr/local/python-3.9


### 变量文件(variable files)
/var
# 日志
/var/log
# 数据存储-lib
/var/lib

### 可选第三方软件
```



# **最佳实践**

常见需求

## 环境变量

bashrc文件: 为每一个运行bash shell的用户执行此文件.当bash shell被打开时,该文件被读取.

profile文件:此文件为系统的每个**用户**设置环境信息,当用户第一次登录时,该文件被执行.并从/etc/profile.d目录的配置文件中搜集shell的设置. 

~/.bash_profile:每个用户都可使用该文件输入专用于自己使用的shell信息,当用户登录时,该文件仅仅执行一次!默认情况下,他设置一些环境变量,执行用户的.bashrc文件.

此文件类似于/etc/profile，也是需要需要重启才会生效，/etc/profile对所有用户生效，~/.bash_profile只对当前用户生效。

~/.bashrc:该文件包含专用于你的bash shell的bash信息,当登录时以及每次打开新的shell时,该文件被读取.（每个用户都有一个.bashrc文件，在用户目录下）

此文件类似于/etc/bashrc，不需要重启生效，重新打开一个bash即可生效，  /etc/bashrc对所有用户新打开的bash都生效，但~/.bashrc只对当前用户新打开的bash生效。

 ~/.bash_logout:当每次退出系统(退出bash shell)时,执行该文件. 

另外,/etc/profile中设定的变量(全局)的可以作用于任何用户,而~/**.bashrc**等中设定的变量(局部)只能继承/etc/profile中的变量,他们是"父子"关系. 

### 查看

```shell
env

echo $PATH
cat /etc/environment
cat /etc/profile

cat /etc/bashrc


```



### 修改

```shell
# 为所有用户 修改 /etc/environment文件
code /etc/environment
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/home/wwfyde/myapp/instantclient_18_5"

# 增加环境变量
# /etc/profile 永久 所有用户
export 
```

### 清除

```shell
unset $PASSWORD
```

实例JAVA_HOME

```shell
/etc/profile

export JAVA_HOME=

# 验证
echo $JAVA_HOME

```



## 语言变更

```shell
# 首先，确保你的系统已经安装了中文语言包。使用以下命令安装中文语言包：
sudo apt update
sudo apt install language-pack-zh-hans language-pack-gnome-zh-hans

# 更新语言设置
sudo update-locale LANG=zh_CN.UTF-8
```



## 实现开机启动

编辑 `/etc/rc.local` 实现启动时读取命令和配置文件

添加一个开机启动服务

## 清空日志内容

```shell
ehco '' > filename
> filename
```

## 日志管理

函数执行日志输出

`django_install >> /tmp/ommanager_install.log 2>>/tmp/ommanager_install_err.log`

### 日志查看

```shell
# tail -f 

# less

# grep 筛选

# awk sed 高级文本处理
```



### mac

mac `Unified Logging System` `os_log` 管理日志

### logrotate-日志轮转

### 重要日志文件

#### /var/log/messages

记录了系统的通用日志信息，包括系统启动、运行和错误消息等。这是检查系统活动和诊断系统问题的一个关键日志文件。

#### /var/log/auth.log

比如与sudo 相关信息

/var/log/secure

这个文件专门记录与认证和授权相关的信息，如用户登录、sudo命令使用、sshd登录尝试等。

#### /var/log/syslog

在某些Linux发行版中，几乎所有系统活动日志都记录在这个文件中，尤其是那些不包含`/var/log/messages`的系统。

#### /var/log/kern.log

专门记录内核产生的消息和错误。这对于诊断与硬件、驱动程序或内核模块相关的问题非常有用。

#### /var/log/dmesg

包含系统启动时内核检测到的硬件和驱动程序的消息。这对于了解启动过程中发生了什么以及诊断与硬件相关的问题很有帮助。

#### /var/log/boot.log

记录了系统启动过程中的各种消息，包括启动脚本的执行情况。

#### /var/log/cron

记录了cron守护进程的活动，包括计划任务（cron jobs）的执行情况。

### /var/crash

### 日志目录

/var/log

/var/tmp

/tmp

project/logs



## 磁盘管理



```shell
# 取消挂载分区
# 查看分区信息, 找到指定磁盘Disk 开头
sudo fdisk -l

# 取消挂载分区上的所有挂载点
umount /dev/sda2

# 分区操作
sudo fdisk /dev/sda


```



## 逻辑卷扩容

```shell
# 安装硬盘

# 查看disk
sudo fdisk -l
# 通过lsblk 确认 挂载的磁盘
sudo lsblk

# prepare  取消挂载
# 清除分区表
sudo wipefs -a /dev/nvme0n1

# 创建物理卷
sudo pvcreate /dev/nvme0n1p2

# 将其加入卷组
sudo vgextend ubuntu-vg /dev/nvme0n1p2      

# 查看逻辑卷路径
df -h 
# 扩展逻辑卷
# sudo /dev/mapper/ubuntu--vg-ubuntu--lv
sudo lvextend -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv

# 扩展文件系统
sudo resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv

```



## DDNS(Cloudflare)

https://zhile.io/2023/09/04/copy-jetbra-in.html

https://ednovas.xyz/2022/02/09/cfddns/

ddns-go 

注意手动添加 要解析的域名列表

domains  同时注意TTL  阿里云10分钟可能不支持

### 避免 自动307 http->https

```shell
 chrome://net-internals/#hsts
```



## 远程挂载

```shell
sudo apt install 
sudo apt-get install sshfs
# 未避免密码输入 需要将 本地的公钥复制到挂载源服务器
ssh-keygen -t rsa -b 4096 -C '142'

ssh-copy-id molook@192.168.0.130


# 临时挂载
sudo sshfs -o allow_other molook@192.168.0.130:/mnt/molook /home/molook/crawler



### 持久化挂载

# dump 0, 1 是否需要备份
# pass 0, 1 是否需要文件系统检查
# options  挂载选项
# type  文件系统类型
# file system		源文件系统标识
# mount point  目标挂载点
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
molook@192.168.0.130:/mnt/molook /home/molook/crawler fuse.sshfs defaults,_netdev,allow_other 0 0
```

## nfs

```shell
# server
sudo apt install nfs-kernel-server
# 修改配置
sudo vim /etc/exports
/mnt/molook 192.168.0.0/24(rw,sync,no_subtree_check)

# 保存并关闭文件，然后运行以下命令应用新的 NFS 配置：
sudo exportfs -ra

sudo systemctl start nfs-kernel-server
sudo systemctl enable nfs-kernel-server

# 验证
sudo exportfs -v

# macos
sudo mount -t nfs 130:/home/molook/crawler /Users/wwfyde/crawler
```



## 远程管理



## 服务管理

```ini
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
    --config.file=/etc/prometheus/prometheus.yml \
    --storage.tsdb.path=/var/lib/prometheus/ \
    --web.console.templates=/etc/prometheus/consoles \
    --web.console.libraries=/etc/prometheus/console_libraries
Restart = on-failure

[Install]
WantedBy=multi-user.target
```

```ini
[Unit]
Description=Promtail service
After=network.target

[Service]
Type=simple
User=promtail
ExecStart=/usr/bin/promtail -config.file /etc/promtail/config.yml
# Give a reasonable amount of time for promtail to start up/shut down
TimeoutSec = 60
Restart = on-failure
RestartSec = 2

[Install]

```



## shutdown 

- 
- shoutdown命令可以**安全 关闭** 或者 **重新启动系统**
- -r 选项 可以重新启动

> **提示**:
> **不指定选项和参数**, 默认表示1分钟之后 关闭电脑
> 远程维护服务器时, 最好不要关闭系统,而应该重新启动系统

```shell
shutdown -r now # 立即重新启动
shutdown -c 取消立即启动
showdown  # 默认一分钟之后关闭电脑
```

```shell
# 重新启动操作系统，其中 now 表示现在
$ shutdown -r now
$ reboot  # 经常选用该命令

# 立刻关机，其中 now 表示现在
$ shutdown -h now / 0

# 延迟1分钟关机
$ shutdown -h 1 

# 系统在今天的 20:25 会关机
$ shutdown  20:25

# 系统再过十分钟后自动关机
$ shutdown  +10

# 取消之前指定的关机计划
$ shutdown -c
```

## 查看或配置网卡信息

| 命令        | 对应英文                      | 作用                              |
| ----------- | ----------------------------- | --------------------------------- |
| ifconfig    | configure a network interface | 查看/配置计算机当前的网卡配置信息 |
| ping ip地址 | ping                          | 检测到目标ip地址是否正常          |

### 应用管理常用命令

```shell
# 查看已安装应用
apt -l | grep ssh

```



### 网卡和ip地址

#### 网卡

- 网卡是一个专门负责网络通讯的硬件设备
- IP地址 是设置在网卡上的地址信息

> 我们可以把电脑比作电话, 网卡 相当于 SIM卡, IP地址 相当于电话号码

#### IP地址

- 每台联网的电脑上都有 IP地址,是保证电脑之间正常通讯的重要设置

> 注意: 每台电脑的IP地址不能相同, 否则会出现Ip地址冲突,并且没有办法正常通讯

#### ifconfig

- ifconfig 可以查看/配置计算机当前网卡配置信息
  ifconfig | grep inet  # 查看网卡对应的IP 地址

> 提示: 一台计算机中有可能会有一个物理网卡和多个虚拟网卡, 在Linux中物理网卡的名字通常以 ensXX 表示
>
> - 127.0.0.1 被称为本地环回地址 可以用来测试本机网卡是否正常工作

#### ping

```
# 检测到目标主机是否连接正常
$ ping IP地址

# 检测本地网卡工作正常
$ ping 127.0.0.1

```

- ping 一般用于检测当前计算机到目标计算机之间的网络 **是否通畅,数值越大,速度越慢**

> ping 的工作原理与潜水艇的声纳相似, ping这个命令就是取自 **声纳的声音**
> 网络管理员之间也常将 ping 用作动词 -- ping 一下计算机 X 看他是否开着

原理:网络上的机器都有唯一确定的ip地址, 我们给目标ip地址发送数据包,对方就要返回一个数据包, 根据返回的数据包以及时间, 我们可以确定目标主机的存在

> 提示:在Linux中,想要终止一个终端程序的执行, 绝大多数都可以使用 Ctrl + C

## 远程登录和复制文件

**学习目标**

- 能够使用 ssh 进行远程连接

| 命令                                           | 对应英文     | 作用          |
| ---------------------------------------------- | ------------ | ------------- |
| ssh 用户名 @ip                                 | secure shell | 关机/重新启动 |
| scp 用户名@ip:文件或路径 用户名@ipp:文件或路径 | secure copy  | 远程复制文件  |

## SSH基础

SSH: secure shell 的缩写
在Linux 中 SSH是非常常用的工具, 通过SSH客户端 我们可以连接到运行了 SSH 客户端 我们可以连接到 **SSH服务器** 的远程机器上

- **安装ssh服务器**

```shell
sudo apt-get install openssh-server
```

- **客户端登录**

数据传输是加密的, 可以防止信息泄露
数据传输是压缩的, 可以提高传输速度

- SSH 客户端 是一种使用 Secure Shell(SSH) 协议连接到远程计算机的软件程序
- SSH是目前较可靠, **专为远程登录会话和其他网络服务** 提供安全性的协议
  - 利用 SSH 协议 可以有效防止远程管理过程中的信息泄露
  - 通过 SSH 协议 可以对所有传输的数据进行加密, 也能够防止DNS欺骗和IP欺骗
- SSH 的另一项优点是传输的数据可以是经过压缩的, 所以可以加快传输的速度

### 域名 和端口号

#### 域名

- 由一串 **用点分隔**的名字组成, 例如: www.itcast.cn
- 是 IP地址的别名,方便用户记忆

#### 端口号 

- IP地址: 通过IP地址 找到网络上的计算机
- 端口号: 通过端口号可以找到计算机上运行的应用程序
  - SSH服务器的默认端口号是22, 如果是默认端口号, 在连接的时候, 可以省略
- 常见服务端口号列表

| 服务      | 端口号 |
| --------- | ------ |
| SSH服务器 | 22     |
| Web服务器 | 80     |
| HTTPS     | 443    |
| FTP服务器 | 21     |

### SSH客户端的简单使用

```shell
ssh [-p port] user@remote
# 通过ip地址找的远程服务器和设备, 通过端口找到应用程序
```

user 是在远程机器上的用户名,如果不指定的话默认为当前用户
remote 是远程机器的地址, 可以是 IP / 域名, 或者是 后面提到的别名
port 是 SSH Server监听的端口, 如果不指定, 就为默认值 22

> 提示:
> 使用 exit 退出当前用户的登录
>
> 注意:
> ssh这个终端命令智能在Linux 或者 Unix 系统下使用
> 如果在 windows 系统中, 可以安装 putty 或者xshell客户端软件即可

在工作中, SSH服务器的端口号很可能不是22, 如果遇到这种情况就需要使用 -p 选项, 指定正确的端口号, 否则无法正确连接到服务器

## SSH 高级

- 免密码登录
- 配置别名

> 提示: 有关 SSH配置信息都保存在用户家目录下的 .ssh 目录下

### 免密码登录

步骤

- 配置公钥
  - 执行 ssh-keygen 即可生成SSH钥匙, 一路回车即可
- 上传公钥到服务器
  - 执行 ssh-copy-id -p port user@remote , 可以让远程服务器记住我们的公钥

非对称加密算法

- 使用 公钥 加密的数据, 需要使用 私钥 解密
- 使用 私钥 加密的数据, 需要使用公钥解密

### 配置别名

 在 ~/.ssh/config里面追加以下示例内容 

```
Host mac[任何名称 ]
    Hostname ip地址
    User itheima
    Port 22
```

保存之后,即可用 ssh mac 实现远程登录了, scp 同样可以使用

## scp

- scp 就是 secure copy , 是一个在Linux下用来进行 远程拷贝文件 的命令
- 它的地址格式与 ssh基本使用,需要注意的是, 在指定端口时用的是大写的 **-P** 而不是小写的

```shell
# 把本地当前目录下的 01.py 文件 复制到 远程 家目录下的 Desktop/01.py
scp [options] file_source file_target
# 注意：`:` 后面的路径如果不是绝对路径，则以用户的家目录作为参照路径
scp -P port 01.py user@remote:Desktop/01.py

# 把远程 家目录下的 Desktop/01.py 文件 复制到 本地当前目录下的 01.py
scp -P port user@remote:Desktop/01.py 01.py

# 加上 -r 选项可以传送文件夹
# 把当前目录下的 demo 文件夹 复制到 远程 家目录下的 Desktop
scp -r demo user@remote:Desktop

# 把远程 家目录下的 Desktop 复制到 当前目录下的 demo 文件夹
scp -r user@remote:Desktop demo
```

```shell
scp -P 22 01.py asaman@192.168.33.42:Desktop/
```

### 使用scp拷贝windows文件

```shell
# 连接到windows

# scp windows文件 当前主机目录 两种格式
scp wwfyde@192.168.30.190:c:/get-pip.py ./Downloads/
scp wwfyde@192.168.30.190:/c/get-pip.py ./Downloads/

# scp 当前主机文件到 windows
scp get-pip.py wwfyde@192.168.30.190:c:/
```



| 选项 | 含义                                                       |
| ---- | ---------------------------------------------------------- |
| -r   | 递归目录                                                   |
| -P   | 若远程SSH服务器端口不是22, 需要使用大写字母-P 选项指定端口 |

- FileZilla 在传输文件时, 使用的FTP 服务 而不是SSH服务, 因此端口号应该设置为 21

## 

# 系统服务

## abrt

## systemd

## syslog

## crontab



# supervisor

作用:除了 supervisorctl 之外，还可以配置 supervisrod 启动 web 管理界面，这个 web 后台使用 Basic Auth 的方式进行身份认证。

除了单个进程的控制，还可以配置 group，进行分组管理。

经常查看日志文件，包括 supervisord 的日志和各个 pragram 的日志文件，程序 crash 或抛出异常的信息一半会输出到 stderr，可以查看相应的日志文件来查找问题。

Supervisor 有很丰富的功能，还有其他很多项配置，

该命令 需要事先安装 supervisor 工具

## 安装

[官方文档](http://supervisord.org/)

[参考教程](https://blog.csdn.net/weixin_35838504/article/details/81160880)

[参考教程2](https://segmentfault.com/a/1190000014591673)

```shell
sudo apt install supervisor
sudo pip install supervisor  # 推荐 一般用于系统管理, 应该使用root用户安装
```



```shell
supervisorctl

#  Supervisor is a client/server system that allows its users to control a number of processes on UNIX-like operating systems.
#  Supervisorctl is the command-line client piece of the supervisor which provides a shell-like interface.
#  More information: <http://supervisord.org>.

# Start/stop/restart a process:(单个进程管理)

  supervisorctl start|stop|restart process_name

# Start/stop/restart all processes in a group:(停止进程组)

  supervisorctl start|stop|restart group_name:*

# Show last 100 **bytes** of process `stderr`:( 查看标准错误内容 信息)

  supervisorctl tail -100 process_name stderr

# Keep displaying `stdout` of a process:(持续显示进程的标准输出)

  supervisorctl tail -f process_name stdout

# Reload process config file to add/remove processes as necessary:(更新配置文件)

  supervisorctl update
  
  

#  Supervisor is a client/server system for controlling some processes on UNIX-like operating systems.
#  Supervisord is the server part of supervisor; it is primarily managed via a configuration file.

# Start supervisord with specified configuration file:  从配置文件中启动文件                             
  supervisord -c path/to/file
  
# Run supervisord in the foreground:  让进程在前台显示                                                   
  supervisord -n   
```

```shell
# 添加配置文件到配置列表
/etc/supervisor/conf.d/

# 重新扫描配置过的文件(跟踪新添加的文件)
supervisorctl reread

# 重启 配置修改过的程序 -- 会自动启动加载的配置
supervisorctl update

# 重启所有被跟踪的进程(一般不需要这一步, 会重启所有服务)
supervisorctl reload

```

program - 配置文件 - 控制应用

```ini
command=python /home/hisfep/tools/hisfep_report_new.py
autorstart=true
redirect_stderr=true
stdout_logfile=/home/hisfep/log/supervisord_hisfep_report_new.log
directory=/tmp
user=hisfep
environment=HOME=/home/hisfep,USER=hisfep,LD_LIBRARY_PATH=/opt/app/oracle/product/11.2.0/db_1/lib,ORACLE_HOME=/opt/app/oracle/product/11.2.0/db_1,NLS_LANG=AMERICAN_AMERICA.AL32UTF8
priority=3

```

supervisord的配置文件

```ini
[root@his08520025 supervisor]# cat supervisord.conf 
; supervisor config file

[unix_http_server]
file=/var/run/supervisor.sock   ; (the path to the socket file)
chmod=0700                       ; sockef file mode (default 0700)

[inet_http_server]
port=127.0.0.1:9001


[supervisord]
logfile=/var/log/supervisord.log ; (main log file;default $CWD/supervisord.log)
pidfile=/var/run/supervisord.pid ; (supervisord pidfile;default supervisord.pid)
childlogdir=/var/log/         ; ('AUTO' child log dir, default $TEMP)

; the below section must remain in the config file for RPC
; (supervisorctl/web interface) to work, additional interfaces may be
; added by defining them in separate rpcinterface: sections
[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

[supervisorctl]
serverurl=unix:///var/run/supervisor.sock ; use a unix:// URL  for a unix socket

; The [include] section can just contain the "files" setting.  This
; setting can list multiple files (separated by whitespace or
; newlines).  It can also contain wildcards.  The filenames are
; interpreted as relative to this file.  Included files *cannot*
; include files themselves.

[include]
files = /etc/supervisor/conf.d/*.conf

```

### 分组问题

# 系统管理

## 防火墙

### ufw

ubuntu默认安装

### firewall



### selinux

### iptables



## 远程开发

远程 ssh / container / wsl 开发

使用 Vscode 进行远程开发的问题

配置好远程连接主机

ssh端口转发

```shell
# 本地端口转发 实现访问本地端口即是远程端口
# 就是将发送到本地端口port的请求，转发到目标端口hostport。
# 注意host 是相对于远程主机的 比如直接远程主机本机的端口则直接host=127.0.0.1
# 本地端口作为侦听端口 
# 使用本地端口侦听远程端口
ssh -L [bind_address:]port:host:hostport user@<remotehost> -N

# 示例 将远程主机上的8188端口 转发到本地的8187端口
# 将本地8187的请求转发到远程主机上的8188上
ssh -L 8187:127.0.0.1:8188 wwfyde@122.51.38.230 -N


# 远程端口转发
# 将发送到远程端口的请求，转发到目标端口
# 转发端口为侦听端口, 目标端口为接收端口
ssh -R localhost:8189:localhost:8188 wwfyde@122.51.38.230 -N


# 内网穿透
将本地端口 映射到公网IP, 实现第三人通过公网IP+端口访问 本地的文件


```



## 性能优化

### 网络优化

安装tcp_bbr



# SHELL开发技术

> linux基础 [参考文档](Linux基础-高级)

[官方文档](https://www.gnu.org/software/bash/manual/bash.html)

[bash参考手册: bash reference manual](https://tiswww.case.edu/php/chet/bash/bashref.html)

[Linux文档工程: the linux document project](https://www.tldp.org)

[bash脚本指南: bash scripting guide](https://www.tldp.org/LDP/abs/html/index.html)

## Shell 特性

对空格严格, 谨慎使用空格

## shell脚本

### 使用方式

shell使用方式主要有两种：手工和脚本

手工方式:

手工敲击键盘,在shell的命令行输入命令,按Enter后,执行通过键盘输入的命令,然后shell返回并显示命令执行的结果.

重点：**逐行输入命令、逐行进行确认执行**

 

脚本方式:

就是说我们把手工执行的命令a，写到一个脚本文件b中，然后通过执行脚本b，达到执行命令a的效果.

当可执行的Linux命令或语句不在命令行状态下执行，而是通过一个文件执行时，我们称文件为shell脚本。

重点：shell脚本就是linux命令的组合

### 创建脚本

#### 创建方式

和一般的文档创建方式一模一样 常见的编辑器是 vi/vim

#### 脚本命名

shell脚本的命名简单来说就是要**有意义**，方便我们通过脚本名，来知道这个文件是干什么用的。

#### 命名风格

python命名风格一样, 小写字母, 下划线连接

#### 脚本内容

可以执行各种命令

#### 注释内容

**单行注释**

除了首行的#不是注释外，其他所有行内容，只要首个字符是#,那么就表示该行是注释

```shell
#!/bin/bash

echo '1'
# echo '2'                     # 这一行就表示注释
echo '3'
```

**多行注释**

多行注释有两种方法：`:<<! ... !`  和 `:<<字符 ... 字符`

```shell
#!/bin/bash
echo '1'

:<<! echo '2'
echo '3'
echo '4'
!

echo '5'
```

### 使用脚本

> 运行脚本方式

```shell
# 方式一: 无论是否具有可执行权限都会执行
/bin/bash test.sh
/usr/bin/bash test.sh
bash=/usr/bin/bash
bash test.sh

# 方式二: 需要具有可执行权限
./test.sh
test.sh
```

## **脚本开发规范**

1、脚本命名要有意义，文件后缀是.sh

2、脚本文件首行**是而且必须是**脚本解释器

\#!/bin/bash

3、脚本文件解释器后面要有脚本的基本信息等内容

脚本文件中尽量不用中文注释;

​         尽量用英文注释，防止本机或切换系统环境后中文乱码的困扰

常见的注释信息：脚本名称、脚本功能描述、脚本版本、脚本作者、联系方式等

4、脚本文件常见执行方式：bash 脚本名

5、脚本内容执行：从上到下，依次执行

6、代码书写优秀习惯;

​    1）成对内容的一次性写出来,**防止遗漏**。

如：()、{}、[]、''、``、""

​    2）[]中括号两端要有空格,书写时即可留出空格[    ],然后再退格书写内容。

​    3）流程控制语句一次性书写完，再添加内容

7、通过缩进让代码易读;(即该有空格的地方就要有空格)

 



# **SHELL语法**

> 变量(variable)
>
> 命令(command)
>
> 字符串(string)
>
> 表达式(expression)
>
> 一般默认当命令处理, 而不会进行变量解析, 变量解析需要以 `$` 符号进行变量置换
>
> 命令解析需要以  `` ` 符号进行命令置换 variable1=`cat test.txt`
>
> 参考文档
>
> - https://gnulinux.guru
> - [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
> - [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/index.html)

快速读懂shell脚本



## 特殊符号含义(special-characters)

[参考文档](https://www.tldp.org/LDP/abs/html/special-chars.html)

| 符号     |                        | 含义                                                         | 说明                          |
| -------- | ---------------------- | ------------------------------------------------------------ | ----------------------------- |
| #        | comments               | 注释声明                                                     |                               |
| ~        | home directory         | 家目录                                                       |                               |
| /        | root directory         | 目录 根目录                                                  |                               |
| ;        | command separator      | 命令分隔符                                                   |                               |
| \        | escape                 | 取消别名 转义特殊字符 连接下一行                             |                               |
| "        | partial quoting        | 局部引用, (命令解析)partial quoting<br />`$`, \`, `\`除外    |                               |
| '        |                        | 全引用full quoting                                           |                               |
| !        | reverse                | 取反 反逻辑                                                  |                               |
| ?        | test oparator          | 测试操作符                                                   |                               |
| `[]`     | test                   | 测试 [ expression]                                           |                               |
| *        |                        | 匹配任意个元字符                                             |                               |
| -        | option, prefix         | Option flag for a command or filter. Prefix for an operator.<br />可选标记, 操作符前缀 |                               |
| -        | redirect               | redirect from/to stdin/stdout [dash]                         |                               |
| --       |                        | The *double-dash* `--` prefixes *long* (verbatim) options to commands. |                               |
| --       |                        | 位置参数标记, `--`后的参数视为操作数而不是options            |                               |
| =        | assignment operator    | 赋值操作符(*no space before and after*)                      |                               |
| `` `     | command substitution   | 命令声明, 命令置换, 命令解析, 旧                             |                               |
| `$`      | variable substitution  | 变量声明, 变量置换, 变量解析, 变量展开                       |                               |
| `${}`    | parameter substitution | 参数声明, 参数置换, 变量展开${para}<br/>                     | 显式定界 `$NAMEs`和`${NAME}s` |
|          |                        | 设置默认值: ${demo:-1334}                                    |                               |
| `$()`    |                        | 命令声明, 变量展开,*推荐*, 新.  = `(``)`                     |                               |
| `$#`     |                        | 返回变量返回值的长度                                         | ${#HOME}                      |
| `()`     | command group          | 命令组                                                       | (a=hello; echo $a)            |
| command  |                        | 普通单词表示命令和参数                                       |                               |
| `>`      | redirection            | 覆盖原有文件                                                 |                               |
| `&>`     |                        | 重定向stdout和stderr                                         |                               |
| `>&`     |                        | >&2重定向stdout到stderr                                      |                               |
| `>>`     |                        | 追加文件                                                     |                               |
| `{a, b}` | Brace expansion        | 分组; 代码块                                                 |                               |
| {}       | Block of code          | 代码块                                                       |                               |
| `|`      | pipe                   | 将左边的输出作为右边的输入使用<br />one's output piped as another's input |                               |
|          |                        |                                                              |                               |
|          |                        |                                                              |                               |
|          |                        |                                                              |                               |

## 参数



## 变量

> 变量定位 变量包括两部分: 变量名 =  变量值 一般所说的变量是指 **变量名**
>
> 因为bash变量是无类型的 默认都是 字符串(character strings) , 而是根据上下文判断变量

**bash 变量是无类型的**  -- **bash variables are untyped**

bash变量是字符串, 但是取决于上下文, bash变量还运行进行算术操作和比较操作

```shell
# Unlike many other programming languages, Bash does not segregate its variables by "type." Essentially, Bash variables are character strings, but, depending on context, Bash permits arithmetic operations and comparisons on variables. The determining factor is whether the value of a variable contains only digits.
```



### 变量分类

> shell 中变量分为三大类: 本地变量, 全局变量, 内置变量

### 本地变量

> 本地变量 分为 普通变量 和 命令变量

**定义**: 手工方式定义的作用范围小的变量, 在当前系统的**某个环境**(代码级)下才能生效,包含: **普通变量** 和 **命令变量**

**普通变量**的定义方式:

```shell
# 变量值必须是一个整体, 中间没有特数值(比如空格会被解释为两个命令或参数)
$ 变量名=变量值 # 变量值并不会被解析 看末尾例子

# 完整输出原生字符串, 
$ 变量名='变量值'

# 如果变量值范围内有可以解析的变量A, 那么首先解析变量A, 将A的结果和其他内容组合新赋值给变量B
$ 变量名="变量值"

$ my='wwfyde'
$ a=my
$ echo $a
my # 这说明,my并不会被解析,而是直接当做一个字符串赋值给了a

$ b="$my name is Asa"
$ echo $b
wwfyde name is Asa  # 这就是双引号的好处, 会进行变量和命令解析

# 使用let 
let a=12+5
```

**习惯**: 数字不加引号, 其他变量值默认加双引号



**命令变量**的定义方式: 

```shell
# 方式一
变量名=`命令`

# 推荐第二种方式
变量名=$(命令)
```

执行原理: 先执行`或者$()范围内的命令,然后将命令执行后的结果, 赋值给新变量名A

### 全局变量

> 全局命令, 查看命令, 定义方式

**定义**: 手工 | 默认方式定义作用范围大的变量, 当前系统的所有环境下都能生效的变量

查看方式

```shell
env
env | grep SHELL
```

定义全局变量

```shell
export 变量=值
```

### 查看&删除-variable expansion

变量展开

```shell
# 方式一: 快捷方法但是不安全
$VAR  
$SHELL
$LANG

# 方式二: 使用频率较高
${变量名}
echo "aa abc ${变量名} f"

# 方式三: 标准使用方法
"${变量名}"

# 删除变量
unset 变量名

```

```shell
name=Asa echo $name
```



### 内置变量(Special Parameters) 

[special-parameters](https://www.gnu.org/software/bash/manual/bash.html#Special-Parameters)

> 特殊变量, SHELL变量

**定义**: bash命令中自带的一些参数变量

- `$0` :获取脚本的名称(文件名)
    - `$(dirname $0)`: 获取脚本目录

- `$n` : 获取当前脚本传入的第n个位置的参数
- `$#`: 获取当前脚本传入参数的数量
- `$?`: 获取文件执行或者命令执行的返回状态值
- `$USER`: 当前用户的用户名
- `$RANDOM`: 生成随机数

- `$0`, `${0}` – name of script/executable
- `$1` to `$`9, `${1}` to `${255}` – positional command line parameters
- `PAR=${1:?"Missing parameter"}` – error when `${1}` is not set
- `PAR=${1:-default}` – when `${1}` is not set, use *default* value
- `$#` – number of command line parameters (argc)
- `$$` - ($$) Expands to the process ID of the shell. In a subshell, it expands to the process ID of the invoking shell, not the subshell.
- `$!` - ($!) Expands to the process ID of the job most recently placed into the background, whether executed as an asynchronous command or using the bg builtin (see Job Control Builtins).
- `${!#}` – the last command line parameter
- `$*` – expand all parameters, `"$*"` = `"$1 $2 $3…"`
- `$@` – expand all parameters, `"$``@"` = `"$1" "$2" "$3"…`
- `$_` – last parameter of previous command
- `shift` – rename arguments, `$2` to `$1`, `$3` to `$2`, etc.; lower counter `$``#`
- `xargs *command*` – read stdin and put it as parameters of *command*



### 变量展开(Variables Expansion)

https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html

```text
Table of Contents
· Introduction
· 1. ${parameter:-word}
· 2. ${parameter-word}
· 3. ${parameter:=word}
· 4. ${parameter=word}
· 5. ${parameter:?word}
· 6. ${parameter?word}
· 7. ${parameter:+word}
· 8. ${parameter+word}
· Conclusion
```





## 表达式

#### 测试语句

测试表达式 - 返回 true false

**应用场景**: Shell环境根据命令执行后的返回状态值($?)来判断是否执行成功,当返回值为0,表示成功,值为其他时,表示失败。使用专门的测试工具---test命令，可以对特定条件进行测试，并根据返回值来判断条件是否成立（返回值0为成立）

**语句格式**: 

```shell
# 方式一
test 条件表达式

# 方式二: 推荐
[ 条件表达式 ]
```

说明: 以上两种方法的作用完全一样, 后者为常用. 方括` [  ]` 与条件表达式之间至少有一个空格. **条件成立, 状态返回值为0, 条件不成立, 状态返回值为1.**

两侧没有空格会报错, 因为shell会将表达式和 `]` 一起解析 所以相当于没有写方括号

#### [条件表达式](https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html) - Conditional expression

> 逻辑表达式, 文件表达式, 数值表达式, 字符串表达式

```shell
# 判断文件是否存在
-a file  # True if file exists.

-b file
True if file exists and is a block special file.

-c file
True if file exists and is a character special file.

-d file  # True if file exists and is a directory.

-e file  # True if file exists.

-f file  # True if file exists and is a regular file.

-g file
True if file exists and its set-group-id bit is set.

-h file
True if file exists and is a symbolic link.

-k file
True if file exists and its "sticky" bit is set.

-p file  # True if file exists and is a named pipe (FIFO).

-r file  # True if file exists and is readable.

-s file  # True if file exists and has a size greater than zero.

-t fd  # True if file descriptor fd is open and refers to a terminal.

-u file
True if file exists and its set-user-id bit is set.

-w file  # True if file exists and is writable.

-x file  # True if file exists and is executable.

-G file
True if file exists and is owned by the effective group id.

-L file
True if file exists and is a symbolic link.

-N file  # True if file exists and has been modified since it was last read.

-O file
True if file exists and is owned by the effective user id.

-S file
True if file exists and is a socket.

file1 -ef file2
True if file1 and file2 refer to the same device and inode numbers.

file1 -nt file2
True if file1 is newer (according to modification date) than file2, or if file1 exists and file2 does not.

file1 -ot file2
True if file1 is older than file2, or if file2 exists and file1 does not.

-o optname
True if the shell option optname is enabled. The list of options appears in the description of the -o option to the set builtin (see The Set Builtin).

-v varname
True if the shell variable varname is set (has been assigned a value).

-R varname
True if the shell variable varname is set and is a name reference.

# ----------------------------------------------

-z string
True if the length of string is zero.

-n string
string
True if the length of string is non-zero.

string1 == string2
string1 = string2
True if the strings are equal. When used with the [[ command, this performs pattern matching as described above (see Conditional Constructs).

‘=’ should be used with the test command for POSIX conformance.

string1 != string2
True if the strings are not equal.

string1 < string2
True if string1 sorts before string2 lexicographically.

string1 > string2
True if string1 sorts after string2 lexicographically.

arg1 OP arg2
OP is one of ‘-eq’, ‘-ne’, ‘-lt’, ‘-le’, ‘-gt’, or ‘-ge’. These arithmetic binary operators return true if arg1 is equal to, not equal to, less than, less than or equal to, greater than, or greater than or equal to arg2, respectively. Arg1 and arg2 may be positive or negative integers. When used with the [[ command, Arg1 and Arg2 are evaluated as arithmetic expressions (see Shell Arithmetic).
```



#### **逻辑表达式**

逻辑表达式一般用于判断多个条件之间的依赖关系。

常见的逻辑表达式有：      &&  和  ||

 

##### &&    逻辑且   

​      命令1  &&  命令2

​            如果命令1执行成功，那么我才执行命令2            -- 夫唱妇随

​            如果命令1执行失败，那么命令2也不执行

​      示例：

```shell
# [ 1 = 1 ] && echo "条件成立"

条件成立

# [ 1 = 2 ] && echo "条件成立"

```

##### ||    逻辑或

​      命令1 || 命令2

​            如果命令1执行成功，那么命令2不执行               -- 对着干

​            如果命令1执行失败，那么命令2执行                        

​      示例：

```shell
# [ 1 = 2 ] || echo "条件不成立"

条件不成立

# [ 1 = 1 ] || echo "条件不成立"

#
```

#### 文件表达式

-f		判断输入内容是否一个文件

```shell
# [ -f weizhi.sh ] && echo "是一个文件"
是一个文件
# [ -f weizhi.sddh ] || echo "不是一个文件"
不是一个文件
```



-d 判断输入内容是否是一个目录

```shell
[ -d shell ] && echo "是一个目录"
是一个目录
[ -d mytest.sh ] || echo "不是一个目录"

```

-x 		判断输入内容是否可执行

```shell
# [ -x age.sh ] || echo "文件没有执行权限"
文件没有执行权限
# [ -x test.sh ] && echo "文件有执行权限"
文件有执行权限

```

#### 数值操作符

主要根据给定的两个值，判断第一个与第二个数的关系，如是否大于、小于、等于第二个数。常见选项如下：

```shell
n1 -eq n2            # 相等

n1 -gt n2            # 大于

n1 -lt n2            # 小于

n1 -ne n2            # 不等于
```

#### 字符串比较

```shell
str1 == str2			# str1和str2字符串内容一致
str1 != str2			# str1和str2字符串内容不一致，!表示相反的意思

[ a==a ]
echo $?

[ a != a ]
echo $?
```

### 计算表达式

#### 使用场景 / 作用

计算表达式, 简单来说就是对具体的内容进行算数计算

#### 语法格式

方式一: `$(())`	$(( 计算表达式 ))

方式二: `let` 		let 计算表达式

> 注意: `$(())`中只能用 + - * / 和()运算符, 并且只能做整数运算, 不能整除的去掉小数部分

```shell
# 方式一
echo $((100/6))
16
# 方式二
i=1
let i =i+7
echo $i
8
```

### 数组操作

#### 说明简介

bash支持一维数组(不支持多维数组), 并且没有限定数组的大小. 数组元素的下标由0开始编号. 获取数组中的元素要利用下标, 下标可以是整数或算数表达式, 其值应大于或等于0

#### 语法格式

在Shell中，用括号来表示数组，数组元素用“**空格**”符号分割开。

```shell
# 单行定义
array_name=(value0 value1 value2)

# 多行定义
array_name=(
value0
value1
value2
)

# 单元素定义
array_name[0]=value0
array_name[1]=value1
array_name[2]=value2

# 单元素定义的时候，可以不使用连续的下标，而且下标的范围没有限制。
# 命令定义就是value的值以命令方式来获取
file_array=($(ls /tmp/))
file_array=($(ls ~))
dir= ($(ls ~))
```

#### 数组读取

**基于索引查找**

读取数组元素值可以根据元素的下标值来获取

- 获取具体的元素内容，指定其下标值，从0开始

- 获取所有的元素内容，下标位置写"@"或者"*"

```shell
${array_name[index]}
```

**基于内容查找**

在找内容的时候，有时候不知道数组的索引都有哪些，我们可以基于如下方式来获取，数组的所有索引：

  `  ${!array_name[index]}`

获取所有的元素内容，下标位置写"@"或者"*"

```shell
echo ${!array_name[@]}

echo ${!array_name[*]}
```



**获取长度**

获取数组长度的方法与获取字符串长度的方法相同

获取具体的元素长度，指定其下标值，从0开始

获取所有的元素个数，下标位置写"@"或者"*"

```shell
echo ${#array_name[1]}
echo ${#array_name[@]}
echo ${#array_name[*]}
```

#### 数组元素操作

**获取元素**

数组元素的获取，有单元素获取，和元素部分内容获取。

单元素获取格式：

${array_name[index]}

元素部分内容的获取类似于字符串截取，格式如下：

${array_name[index]:pos:length}

代码示例

echo ${array_name[1]}

echo ${array_name[2]:0:2}

 

**更改元素**

数组元素的改其实就是定义数组时候的单元素定义，主要包含两种，元素替换，元素部分内容替换，格式如下

元素内容替换：

array_name[index]=值

注意：

在修改元素的时候，index的值一定要保持准确

元素部分内容替换，可以参考字符串替换格式：

${array_name[index]/原内容/新内容}

注意：

默认是演示效果，原数组未被修改，如果真要更改需要结合单元素内容替换

代码示例

array_name[1]=444

echo ${array_name[2]/va/hahhah}

 

**删除数组**

将shell中的数组删除，可以使用unset来实现，主要有两种情况：删除单元素，删除整个数组。

```shell
#删除单元素
unset array_name[index]

#删除整个数组
unset array_name

#代码示例
unset array_name[1]
unset array_name
```



## 流程控制

### 循环结构looping construct

```shell

# until
until test-commands; do consequent-commands; done

# while
while test-commands; do consequent-commands; done

# for
for name [ [in [words …] ] ; ] do commands; done
for (( expr1 ; expr2 ; expr3 )) ; do commands ; done

```



### 条件结构conditional construct

```shell

# if
if test-commands; then
  consequent-commands;
[elif more-test-commands; then
  more-consequents;]
[else alternate-consequents;]
fi


# case
case word in
    [ [(] pattern [| pattern]…) command-list ;;]…
esac


# select
select name [in words …]; do commands; done


```





### if语句

语法格式

```shell
if [ 条件 ]
then
  	指令1
elif [ 条件2 ]
then
 	指令2
else
 	指令3
fi
```



```shell
#!/bin/bash
# 多if语句的使用场景
if [ "$1" == "nan" ]
then
   echo "您的性别是 男"
elif [ "$1" == "nv" ]
then
   echo "您的性别是 女"
else
   echo "您的性别，我不知道"
fi

if [ -d "/usr/bin" ]
then
	echo "哈哈"
fi
```

**多分支应用**

  需求：

要求脚本执行需要有参数，通过传入参数来实现不同的功能。

参数和功能详情如下：

```shell
参数         执行效果
start        服务启动中...
stop         服务关闭中...
restart      服务重启中...
*           脚本 X.sh 使用方式 X.sh [ start|stop|restart ]
```

脚本内容

```shell
admin-1@ubuntu:/data/scripts/python-n# cat if.sh 

#!/bin/bash

# 多if语句的使用场景

if [ "$1" == "start" ]
then
   echo "服务启动中..."
elif [ "$1" == "stop" ]
then
   echo "服务关闭中..."
elif [ "$1" == "restart" ]
then
   echo "服务重启中..."
else
   echo "$0 脚本的使用方式： $0 [ start | stop | restart ]"
fi

```

### case语句

#### 语法格式

```shell
case 变量名 in
   值1)
      指令1
         ;;
   ...
   值n)
 	   指令n
         ;;
esac
```

注意:

- 首行关键字是case，末行关键字esac
- 选择项后面都有 )
- 每个选择的执行语句结尾都有两个分号;

#### 应用场景

场景：在多if语句的基础上对脚本进行升级

   需求：

要求脚本执行需要有参数，通过传入参数来实现不同的功能。

 

参数和功能详情如下：

参数         执行效果

​      start        服务启动中...

​      stop         服务关闭中...

​      restart      服务重启中...

​         \*           脚本 X.sh 使用方式 X.sh [ start|stop|restart ]

 

脚本内容：

```shell
# cat case.sh 
#!/bin/bash
# case语句使用场景
case "$1" in                    
"start")                    
    echo "服务启动中..."                 
    ;;                  
"stop")                 
    echo "服务关闭中..."                 
    ;;                          
"restart")                  
    echo "服务重启中..."                 
    ;;                  
*)                  
    echo "$0 脚本的使用方式： $0 [ start | stop | restart ]"       
    ;;                  
esac
```

### for语句

#### 语法格式

```shell
for 值 in 列表
do
   执行语句
done
```

### while语句-条件为真时循环

```shell
while 条件
do
   执行语句
done
```

注意：

条件的类型：命令、[[ 字符串表达式 ]]、(( 数字表达式 ))

场景：**只要条件满足，就一直循环下去**

语句示例脚本内容

```shell
#!/bin/bash
# while的示例
a=1
while [ "${a}" -lt 5 ] 
do
   echo "${a}"
   a=$((a+1))
done
```

### until语句-条件为假时循环

语法格式

```shell
until 条件
do
   执行语句
done
```



注意：

条件的类型：命令、[[ 字符串表达式 ]]、(( 数字表达式 ))

场景：**只要条件不满足，就一直循环下去**

until语句示例 脚本内容

```shell
#!/bin/bash
# until的示例
a=1
until [ "${a}" -eq 5 ] 
do
   echo "${a}"
   a=$((a+1))
done
```



### 循环退出

我们从 退出简介、break示例、break n示例、continue示例、exit示例 五个方面来学习。

 

**退出简介**

对于某些循环情况，我们需要在特定的条件下退出，主要有以下指令来实现：break、break n、continue

指令详解：

break     跳出所有循环

break n   跳出第n个循环(由内向外)

continue  跳出当前循环

exit      退出程序

 

**break示例**

需求：

脚本进入死循环直至用户输入数字大于5

代码示例：

```shell
\#!/bin/bash

while :
do
    echo -n "输入你的数字，最好在 1 ~ 5: "
    read aNum
    case $aNum in
        1|2|3|4|5)
          echo "你的数字是 $aNum!"
        ;;
        *)
          echo "你选择的数字没在 1 ~ 5, 退出!"
          break
        ;;
    esac
done

---
效果示例：
~]# /bin/bash while.sh 
输入你的数字，最好在 1 ~ 5: 1
你的数字是 1!
输入你的数字，最好在 1 ~ 5: 6
你选择的数字没在 1 ~ 5, 退出!
```

**break n**

需求：

在嵌套循环中，break 命令后面还可以跟一个整数，表示跳出第几层循环

如果 var1 等于 2，并且 var2 等于 0，就跳出循环

代码示例：

```shell
#!/bin/bash
for var1 in {1..5}
do
   for var2 in {0..4}
   do
      if [ $var1 -eq 2 -a $var2 -eq 0 ]
      then
         break 2
      else
         echo "$var1 $var2"
      fi
   done
done
```



**continue命令**

需求：

continue命令与break命令类似，只有一点差别，它不会跳出所有循环，仅仅跳出当前循环。

 

代码示例：

```shell
#!/bin/bash
while :
do
    echo -n "输入你的数字，最好在 1 ~ 5: "
    read aNum
    case $aNum in
        1|2|3|4|5)
          echo "你的数字是 $aNum!"
        ;;
        *)
          echo "你选择的数字没在 1 ~ 5, 退出!"
          continue
        ;;
    esac
done
```



效果显示：

~]# /bin/bash while.sh 

输入你的数字，最好在 1 ~ 5: 6

你选择的数字没在 1 ~ 5, 退出!

输入你的数字，最好在 1 ~ 5:

 

**exit示例**

需求

在嵌套循环中，exit 命令表示退出当前程序

如果 var1 等于 2，并且 var2 等于 0，就跳出循环

代码实践

```shell
\#!/bin/bash
for var1 in {1..5}
do
   for var2 in {0..4}
   do
      if [ $var1 -eq 2 -a $var2 -eq 0 ]
      then
         exit
      else
         echo "$var1 $var2"
      fi
   done
done
```







## **函数**



#### 函数定义

函数就是将某些命令组合起来实现某一特殊功能的方式，是脚本编写中非常重要的一部分。

#### 简单函数

简单函数格式：              

```shell
# 定义函数
函数名(){
}

# 调用函数
函数名
```

#### 传参函数:

```shell
# 定义函数
函数名(){
	函数体 $n
}

#调用函数
函数名 参数名
```



### 函数实践

**简单函数定义和调用示例**

```shell
#!/bin/bash
# 函数使用场景一：执行频繁的命令
dayin(){
  echo "wo de mingzi shi  111"
}
dayin
```

**函数传参和函数体内调用参数示例**

```shell
#!/bin/bash
# 函数的使用场景二
dayin(){
  echo "wo de mingzi shi $1"
}
dayin 111
```

**脚本传参** **函数调用**

```shell
#!/bin/bash
# 函数传参演示
# 定义传参数函数
dayin(){
  echo "wode mignzi shi $1"
}
# 函数传参
dayin $1
```



**脚本传参，函数调用(生产用)**

```shell
#!/bin/bash
# 函数的使用场景二
canshu = "$1"
dayin(){
  echo "wo de mingzi shi $1"
}
dayin "${canshu}"
```

# 最佳实践

> 常见需求

```bash
set -eux
```

## 参考资料

- [Use Bash Strict Mode](http://redsymbol.net/articles/unofficial-bash-strict-mode/)

## y



## `$`符号作用

> When you add a `$` sign before a command in a shell code fence, you're indicating that this is a command that you would type into a command-line interface.

In Markdown, code fences are used to denote blocks of code. These fences can be used for various programming languages, including shell commands. When you add a `$` sign before a command in a shell code fence, you're indicating that this is a command that you would type into a command-line interface.

Here are a few reasons why you might add a `$` sign before a command in a shell code fence in Markdown:

1. **Convention for Command-line Examples**:

   - In many technical documentation and tutorials, it's a convention to use a `$` sign to represent the command prompt in Unix-like systems (Linux, macOS, etc.). For example, if you see:

     ```
     $ ls
     ```

     It's implying that you should type `ls` at the command prompt.

2. **Clarity for the Reader**:

   - Adding a `$` sign makes it clear that what's written is a command, not just text. It helps differentiate between actual commands and descriptions or explanations.

3. **Easy Identification**:

   - When scanning through documentation, seeing a `$` sign before a line of code quickly signals that it's a command to be executed in a terminal.

4. **Copy-Pasting Convenience**:

   - Users can easily copy the command, including the `$` sign, and paste it directly into their terminal for execution.

5. **Platform Independence**:

   - Using `$` as the command prompt is a convention that is widely understood and platform-independent. Whether you're working on Linux, macOS, or using a command-line interface on Windows like Git Bash, you'll recognize it as a command prompt.

Keep in mind that this is a convention and not a strict requirement. You can choose to omit the `$` sign if you prefer, especially if you're writing in a context where it's not necessary to explicitly indicate a command prompt. However, using it is generally considered good practice in technical documentation and tutorials.

## strict mode

```shell
set -euo 
set -euo pipefail
IFS=$'\n\t'
```



# VI/VIM

> 参考文档
>
> - https://gnulinux.guru/?ViM
