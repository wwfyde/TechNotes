# Python最佳实践



[软件工程](软件工程.md)

一般开发流程:

设计

## 参考资料

- the-12-factor-app
- [Python Official Tutorials](https://docs.python.org/3/tutorial/index.html)
- [Python HOWTOs](https://docs.python.org/3/howto/index.html)
- [Python FAQs](https://docs.python.org/3/faq/index.html)

# 环境配置

## pip

[阿里巴巴镜像站](https://developer.aliyun.com/mirror/pypi)

[清华大学镜像: 推荐](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)

可以直接修改配置文件, 也可通过命令生效, 也可以在安装时指定index-url

```shell
# pip config set global.index-url https://mirrors.aliyun.com/pypi/simple
pip config set global.index-url https://mirror.nju.edu.cn/pypi/web/simple

pip config set global.index-url https://mirror.sjtu.edu.cn/pypi/web/simple

pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  # 不推荐

# pip config set install.trusted-host mirrors.aliyun.com

# 配置路径
# ~/.config/pip/pip.conf

# 查看配置
pip config list
```

```shell
[global]
index-url=https://mirrors.cloud.aliyuncs.com/pypi/simple/

[install]
trusted-host=mirrors.cloud.aliyuncs.com
```

```shell
pip install <package_name> -i <url> 
pip install --index-url <url> <package_name>


pip install --extra-index-url
```

```shell

# 离线安装和下载
pip download -d /path/to/directory somepackage
pip install --no-index --find-links=pip-packages somepackage

```



## pipx

[github: pipx](https://github.com/pypa/pipx)

```shell
python3 -m pip install --user pipx
python3 -m pipx ensurepath
```

```shell
brew install pipx

pipx ensurepath 
pipx completions
```

```shell
# 为虚拟环境增加额外的pip包
pipx runpip ipython list
```



## poetry

```shell
poetry show --tree

poetry show --latest
```





# 异常处理

## 参考资料

- https://docs.python.org/3/tutorial/errors.html
- https://docs.python.org/zh-cn/3/tutorial/errors.html

## 技术原理

- 异常传递
    - 逐层向上传递
- 异常类
    - 使用父类(基类)异常类型, 来捕获更大范围的错误
- 通用异常
    - 其他无法检测或待识别的错误提示则采用Except

## 自定义异常

## 示例: 

```python
import sys

try:
    f = open('myfile.txt')
    s = f.readline()
    i = int(s.strip())
except OSError as err:
    print("OS error:", err)
except ValueError:
    print("Could not convert data to an integer.")
except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")
    raise
```



## 示例: 数据库

```python
try:
    # 数据库操作
    pass
except mysql.connector.IntegrityError as e:
    # 处理完整性错误
    print(f"Integrity error: {e}")
except mysql.connector.DataError as e:
    # 处理数据错误
    print(f"Data error: {e}")
except mysql.connector.OperationalError as e:
    # 处理操作错误
    print(f"Operational error: {e}")
except mysql.connector.ProgrammingError as e:
    # 处理编程错误
    print(f"Programming error: {e}")
except mysql.connector.Error as e:
    # 处理其他数据库错误
    print(f"Database error: {e}")
except Exception as e:
    # 处理非数据库相关的其他错误
    print(f"Error: {e}")
```

# 调试分析

## 时间追踪

```python
time.time()
timeit
time.perf_counter()  # 高精度时间计算

datetime.datetime.now()
```



# 性能优化

# 安全

# 测试

# 持续集成

# 版本控制

# 箴言

- 一切皆对象, 一切皆协议, 一切皆类型



# cli应用

```python
#!/Users/wwfyde/Projects/MoLook/comfyui-api/venv/bin/python
# -*- coding: utf-8 -*-
import re
import sys
from uvicorn.main import main
if __name__ == "__main__":
    sys.argv[0] = re.sub(r"(-script\.pyw|\.exe)?$", "", sys.argv[0])
    sys.exit(main())
```



# 命名规范

| type    |                |      |
| ------- | -------------- | ---- |
| folder  | foo-bar        |      |
| package | foo_bar/foobar |      |
|         |                |      |



# 命名风格

| 英文名             |                  | 中文名         | 应用                                                     |
| ------------------ | ---------------- | -------------- | -------------------------------------------------------- |
| helloworld         |                  |                | 直接连接                                                 |
| kebab-case         | kebab-case       | 短横线分隔命名 |                                                          |
| PascalCase         |                  | 首字母大写命名 | 帕斯卡命名法, 大驼峰命名                                 |
| camelCase          | lowerCamelCase   | 小驼峰命名     | 驼峰命名                                                 |
| CamelCase          | UpperCamelCase   | 大驼峰命名     |                                                          |
| aHungarianNotation |                  | 匈牙利命名     | 变量名=属性+类型+对象描述<br>小写字母前缀,然后首字母大写 |
| snake_case         | lower_snake_case | 下划线命名     |                                                          |
| UPPER_SNAKE_CASE   |                  | 大写下划线     |                                                          |



| Formatting  |                     Name(s)                     |
| :---------: | :---------------------------------------------: |
| `twowords`  |                    flat case                    |
| `TWOWORDS`  |                 upper flat case                 |
| `twoWords`  |        (lower) camelCase, dromedaryCase         |
| `TwoWords`  |     PascalCase,Upper Camel Case,StudlyCase      |
| `two_words` |            snake_case, pothole_case             |
| `TWO_WORDS` | SCREAMING_SNAKE_CASE, MACRO_CASE, CONSTANT_CASE |
| `two_Words` |                camel_Snake_Case                 |
| `Two_Words` |                Pascal_Snake_Case                |
| `two-words` |        kebab-case, dash-case, lisp-case         |
| `two|words` |                   doner\|case                   |
| `TWO-WORDS` |  TRAIN-CASE, COBOL-CASE, SCREAMING-KEBAB-CASE   |
| `Two-Words` |           Train-Case,HTTP-Header-Case           |

## Python



## 变量类型标识

- 列表: 使用名词的复数形式 plural `name => names` `line => lines`
- SQL: 直接写在execute语句里



# **命名规范**

> naming convention

[参考文档](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/FrameworkImpl.html#//apple_ref/doc/uid/20001286-BAJIBFHD)

[关于命名的20条建议](http://bensmith.io/20-tips-for-better-naming)



[参考wiki](https://en.wikipedia.org/wiki/Naming_convention_(programming))

variable 变量名, 

method 方法名

## 命名技巧

- 关于缩写(abbreviation, abbr)
    - 有道词典中有单词的响应的abbr, 可以作为总要参考
    - abbr网站
    - 直接Google
- 常见缩写方式
    - 取前几个字母
        - request: req
        - response: resp

## 意义与目的

好的命名能够让代码的概念清晰, 增加代码可读性; 增强阅读时思维的连贯性, 避免分散有限的注意力. 

"起一个好名字很难, 因为一个好名字要把要以浓缩在一到两个词中. "

"无名天地之始, 有名万物之母."  ——道德经

减少阅读和理解源代码所需要的工作量;

允许代码评审关注于更重要的问题而非语法和命名标准

让标识符提供额外的附加信息

满足规范化期望, 具有基本的命名范式, 保持团队一致性. 

减少重构工具或搜索工具出现错误的可能性

在可能含糊不清的情况下提高清晰度

提升作品产品的美感和专业外观;

帮助避免在组合不同组织的工作产品时可能发生的“命名冲突”, 维护命名空间;

提供有意义的数据，以便在需要提交程序源代码及所有相关文件的项目移交时使用;

以便更好地理解代码在长时间间隔后的重用情况。

让命名有意义,能明确表述, 所标识对象的基本功能要义等.

满足程序语言要求的命名风格;

通常是为了提高源代码的易读性、易认性、程序效率以及可维护性。 



## 变量命名-Variables

变量名应该是名词, 能够正确地描述业务, 有表达能力. 

## 类型注解

```python
# 涉及到多个变量时, 增加类型标注
obj_str
obj_json
obj_dict
obj_int
```



## OBJ出方法命名-Method

### 参考资料

- https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingMethods.html
- https://microsoft.github.io/objc-guide/

### 操作方法

> 对于表示对象采取的操作/动作的方法, 名称以动词开始
>
> For methods that represent actions an object takes, start the name with a verb:

以一个动词开始, 但是不要用 do/does 因为它们经常作为辅助动词出现



### 存取器方法-Accessor Methods 访问器方法

> If the method returns an attribute of the receiver, name the method after the attribute. The use of “get” is unnecessary, unless one or more values are returned indirectly.
>
> 如果方法用于返回接收方的属性, 以对象.属性的方式命名. 动词是不需要, 除非间接返回一个或多个值
>
> 正确示例: cell_size cellSize
>
> 错误示例: getCellSize 

### 代理方法(Collection Methods)

### 采集方法(Collection Methods)

### 私有方法(Private Methods)

## 功能命名-Function

## 属性和数据类型-Property and data Type

命名约定(Naming conventions) 声明: 属性, 实例变量, 常量, 错误处理器等

## 缩写和首字母缩略词 - acronym

## 使用前缀 - Prefix





# **编程风格**



### 通用

## 版本生命周期

版本号, version, software release life cycle

[CSDN](https://blog.csdn.net/lishuoboy/article/details/104634774)

```shell
X.YaN   # Alpha release - 内侧版,α, 最早版本, 内部测试版本
X.YbN   # Beta release - 公测版, β, 会增加一些新功能, 同优质用户联调
X.YrcN  # Release Candidate - 候选版 , 主要进行bug修复
X.Y		# Stable - 稳定版
X.Y     # Final release - 最终版 通常也是稳定版

# Trial 试用版本
# Unregister 未注册的
# Demo 演示版本
# Full 完整版
# Enhanced 增强版
# Free 自由版, 免费版
# Release 发行版, 有时间限制
# Upgrade 升级版
# Retail 零售版
# Preview 预览版
# Standard 标准版
# Mini
# Premium 贵价版 高价版
# Professional 专业版 Pro
```



```shell
# 3.5.2a1 内测版第一版
# 3.5.2b2 公测版第二版
# 3.5.2rc1 释放版, 进行少量bug修复
# 3.5.2 正式版
```



## Python

- 

## Go

## Java

## C/C++



# 项目布局

[structuring your project](https://docs.python-guide.org/writing/structure/)

[开发规范/项目结构](#项目结构)

project-layout

src/

app_name/(src)

tools/

docs/

examples/

scrips/

configs

bin/

tests/

/data/

## 目录包

一般比如 utils包, 通常还会有一个 utils.py作为主要入口, 也包括了`__init__.py`

## project

## application

### fastapi

## library





# 文档规范

> 文档推荐视图 .md 文件

## 函数接口文档

## API文档模板

[github上的模板](https://gist.github.com/iros/3426278)



# **代码注释**(docstring)

## 参考资料

- [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)
    - [Comments and Docstrings](https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings)
- [Numpy Style Guide](https://numpydoc.readthedocs.io/en/latest/format.html)
- PyCharm Style

## 原则

- 模块注释
- 函数和方法
- 类注释



## 示例

```python
```

```python
# PyCharm 风格

"""
# TODO 修改工作流
:param description:
:param workflow_id:
:param name:
:param workflow:
:param db:
:return:
"""
```



# 经验总结

- 一定要仔细查看错误提示, 英文理解水平决定了自己解决问题的能力!
- 优先查看官方文档, 避免错误坑
- <u>一定要注意优化逻辑处理, 避免编写大量重复代码, 可读性差</u>
    - 优先准备数据
    - 然后处理逻辑
- 不要执着于个人的观点和需求, 应该以官方的为准, 不同的工具实现的功能不一样, 不要期望, 两者的优势都能拥有
- 使用引用(reference)完成代码复用和保证单一化.
- 概念(解释, 特点, 作用, 用法, 属性(方法), 原理, 定义)
- 一切编程的目的都是对现实的模拟,能用 编程模拟也就能够对其用图表等其他方式进行模拟
    - 抽象层与具体层 使用协议(编译器/解释器)进行一一映射
    - 结构化就能图表化, 就可以对其简化表示. 对其模型化, 可以对其更好的抽象
- 明确编程的目标是: 实现功能, 解决问题和需求, 尤其是需要多次处理时, 编程才有意义
- 解决方法应该尽量是唯一的但是触发条件 引用方法可以是任意的完成的某个功能,可以被无限引用
- 问题拆解, 明确思路. 
    - 问题拆分, 就是对其进行进一步的抽象, 同时增加复杂度
- 合理的使用 *注释*(comments) 和 *注解*(annotations)
- 代码封装(package), 以完成单元(cell)化
- 通过快速模板, 简化重复思考, 减少推理的时间, 副作用是, 可能养成偷懒的习惯, 而忽略了一些错误.
- 开发人员之间使用代码交流, 和非开发人员使用文档, 和用户使用图表和文档. 
- 不要吝啬于使用别人编写的代码, 这样可以极大的加快开发进度, 优先选择官方的代码, 以避免代码隐患.
    - 遇到问题时, 不一定要从零开始, 要充分利用别人的智慧.
    - <u>人本来就是相互依赖, 我们都站在巨人的肩膀上, 我们总是在别人的帮助下活着.</u>
- 设计和编写分开, 思考和行动分开
    - 工作和生活分开, 学习是无时无刻的
- *明确思考层级*, *分离和明确关注点*,不要越级思考,处于什么层级就考虑什么问题, 
    - 深入浅出, 以终为始, 强烈的目标感, 同时享受过程
- 使用 *事务*(transaction) 来解决 单元操作问题, 涉及到到不可逆操作时, 应该放在最后操作
- 人生80%的问题, 早就被人回答过, 只要搜索就好, 剩下20%才需要研究. 

# 工程管理

## 基础定义

- *项目*：为达到特定的目的，使用一定的资源，在确定的期间内，为特定发起人提供独特的产
    品、服务或成功而进行的一系列相互关联的活动的集合。
- *项目管理*：指在项目活动中综合运用知识、技能、工具和技术在一定时间、成本、质量等要求
    下来实现项目的成果性目标的一系列行为。



# **核心思想**

生态, 共同语言, 开放, 

## 工程化

- 文档化
- 流程化
- 虚拟化
- 层级化
- 概念化
- 原则化
- 连贯性, 连续性
- 结构化
- 编程范式

## 模块化

> 模块化, 组件化

模块化方法: 函数, 模块, 



## 虚拟化

现实到计算机的模拟, 对现实问题的完整模拟

## 层级化

对现实的多层描述

# <u>面向对象</u>方法论

软件开发的核心问题是复杂性控制

主要包括结构化分析、 结构化设计和结构化程序设计, ，结构化分析，主要介绍了结构化分析 的模型和分析过程，

# 开发流程

程序设计流程 





## 核心思想

### 基本步骤

- *分析* - 明确程序目标
- *设计* - 
- *实现* - 
- 调试 - 
- 组装 - 
- 测试 -
- 优化 - 
    - 错误处理
    - 扩展性
    - 代码格式
    - 健壮性
    - 性能瓶颈
    - 人性化
- 文档 -  
- 发布 - 



### 基本思想

模块化, 流程化, 层级化(数据层, 模型层, 控制层)



# 分析思路



# 编程范式

> Programming paradigm
>
> style, ful
>
> 沿着某种方式: 变化, 转变, 转化, 改变, 进化, 成长, 演变
>
> 转化思想
>
> 规范, 范例, 方式
>
> 中文: 熵增式语言

## 代码层

- 指令式
- 逻辑式
- 过程式
- 函数式
- 对象式
- 结构式 - structured
    - Block-structured
    - Object-oriented
    - Recursive
- 堆叠式 - stack-based
- 格式化
- 序列化
- 嵌套式
- 关联化
- 服务式

## 面向过程

面向过程就是分析出解决问题所需要的步骤

## 面向对象

面向对象是把构成问题事务分解成各个对象



## 分离关注点 - by separation of concerns

> 分离关注点, 点化, 单元化



- Aspect-oriented ： 方面
- Role-oriented ： 角色
- Subject-oriented ： 主题

## 优先级

## 单元化

## 嵌套化 / 层级化

# 程序设计的多维理解

程序设计 = 数据结构 + 算法





# 架构模式

架构模式

## 三层架构

三层架构(3-tier-architecture): 数据访问层(Data Access Layer), 业务逻辑层(Business Logic Layer), 表示层(User Interface Layer)



![cb8065380cd79123c72ab2f0aa345982b3b7806f](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202310251654885.jpg)

目的和核心思想: 高内聚, 低耦合; 降低层与层之间的依赖, 标准化; 系统架构复杂, 不适合小型项目



## MVC

### MVVM

### MVT

## 自顶向下

## 渐进式, 增量开发

## 模块化/层级化/单元化

### Repository Pattern(数据访问层, 仓储层)

例层（或称为Interactors层）和实体层之

通常用ABC来定义接口

## Clean Architecture

Entity-实体-领域模型-业务

## DDD

:":







# 核心原则

> 成长方法论

## 学习原则

- 多看好书, 经典书籍
- 多理解业务, 理解用户量大的业务
- 多找第三方开源, 界定好问题
- 尽量选择官方库实现, 或者选择优秀的第三方库
- 多看源码
- 实际的应用场景, 进行技术实践

## 思维方式

认知升级: 认知升级是连接, 连接优秀的思维方式, 连接解决问题的最短路径, 连接一切优秀的方法。

 



### 你的编程能力从什么时候开始突飞猛进?

#### <u>设计</u>

逻辑设计, 数据结构设计

# 编程思想

>  编程思想 重要概念 程序开发 编程技巧	编程风格	开发流程	整体文档说明
>
>  迁移印象笔记中的笔记
>
>  自上而下 : 从 业务 到 技术 到 原理



## 结构化编程

structured programming

[参考文档](https://en.wikipedia.org/wiki/Structured_programming)

目标: 提升程序清晰度clarity, 提升质量quality, 节约开发时间development

三种基本结构

顺序结构sequence structure, 选择结构selection structure, 循环结构 loop structure.

选择selection: if/else/then

重复repetition: while and for

语句块block structure:code block

子程序subroutine



### 控制结构

```text
"Sequence"; ordered statements or subroutines executed in sequence.

"Selection"; one or a number of statements is executed depending on the state of the program. This is usually expressed with keywords such as if..then..else..endif. The conditional statement should have at least one true condition and each condition should have one exit point at max.

"Iteration"; a statement or block is executed until the program reaches a certain state, or operations have been applied to every element of a collection. This is usually expressed with keywords such as while, repeat, for or do..until. Often it is recommended that each loop should only have one entry point (and in the original structural programming, also only one exit point, and a few languages enforce this).

"Recursion"; a statement is executed by repeatedly calling itself until termination conditions are met. While similar in practice to iterative loops, recursive loops may be more computationally efficient and are implemented differently as a cascading stack.
```







## 学习提高

和大神待在一起,网上多交流,看文章

阅读优秀的源码, 懂原理

面试, 多做项目

学习思路: 功能 >>原理 >>应用案例

## 学习资源

[Python Examples](https://github.com/geekcomputers/Python)

### 常见问题和需求

- 看懂优秀的库和框架的源码
- 进一步优化自己的代码
- asyncio aiohttp tornado等异步框架的原理
- python代码灵活, 背后的设计原理
- 对生成器的理解
- 看懂抛出的异常



## 软件开发过程

- 需求分析
- 原型图(表现逻辑)
- 梳理业务逻辑
    - 文档模式
    - xmind模式
    - 流程图模式
- 接口设计
- 代码实现
- 额外逻辑补充

## 错误自检

> 代码审查	错误检查



- 出现错误的行,**首先检测拼写是否错误**
- **理解和需求**应该相统一, 不要理解错了, 代码肯定会出问题

## 错误类型

### 语法错误

### 拼写错误

### 配置错误



# **开发规范**

> 尽可能让命名有意义



## 项目结构

> project
>
> 文档结构

#### 文件夹

应用 - apps

配置 - configs

静态文件 - static

文档 - docs

资料 - data

脚本 - scripts

项目 - project

资源 - src

示例 - examples

工具集 - utils

日志 - logs

暂存 - tmp

测试 - tests

第三方-third_party

#### 文件

安装 - setup.py

说明 - README.md

忽略 - .gitignore

环境变量 - .env

## 



## 包/库结构

直接flat, 平铺, 将所有代码用文件组织, 避免过于复杂的结构, 一个文件就是一个包



## 文档注释

> PEP8 PEP2575

- [*文档注释*]
    - *代码注释* 为代码维护者编写的注释 `# 这是函数说明`, 帮助显示清晰的文档结构
    - *接口注释* 为接口调用编写的注释 : `__doc__`
    - *变量注释*
    - *返回注释* : 返回值说明

## 文档结构

```python
# 模块注释
"""
这是模块注释, 相当于 __doc__ = [注释内容]
"""

# 模块级命令
__auther__ = '作者'
__version__ = '1.0'

# 标准库导入 import 模块 (应该分开写)
import os
import sys

# 第三方库导入
import requests

# 本地库导入
import config

# from import 模块(建议用逗号分隔)
from utils import log, db_driver, DBManager

# 使用 分隔符 缩进 对齐
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# 或者额外增加一个缩进以保持对齐
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)
    
    
# 两个函数或类之间用两个空行分隔


```

## 风格规范

代码编写规范, 代码风格规范

- 两个函数或类之间用两个空行分隔, 但是在类中的方法用一个空行分隔即可
- 继续的内容在换行时应该用换行对齐
- 需要换行时, 在二元运算符 `+` `-` 前面换行
- python中 单引号 `'` 和双引号 `"` 等价
- 二元运算符 ` + ` `-` `*` `/` `=` 两边加上空格
- 关键字参数 `=` 两边不应该加空格
- 为 **参数** 和 **返回值** 做 **类型注解** 

### 入口文件

```python
# 入口文件
# 应该注意: 添加项目根目录到sys.path,, 尤其是入口文件不在项目顶层环境时
```

### Makefile

常用方法 一般实现 python方法库

> 参考文档 PEP-8 编码规范

## 命名规范

### 关于单词缩写

> 命名应当尽量使用全拼写的单词, 缩写的情况有如下两种
> 1.常用的缩写 xml id 
> 2.命名中含有长单词,对某个单词进行缩写.这时使用约定成俗的缩写方式
> function    --   fn
> text          --  txt
> object      -- obj
> count       -- cnt
> number    -- num

### 项目命名

* 项目命名规则:数字编号,01_Python基础/02_分支/03_判断和循环


### 文件夹命名

* hm_001_描述信息.py    --python官网建议
* 建议只使用:**小写字母**, **数字** 和 **下划线**
* 文件名不建议以数字开始

### 文件命名

* hm_001_描述信息.py    --python官网建议
* 建议只使用:**小写字母**, **数字** 和 **下划线**
* 全小写
* 文件名不建议以数字开始

### 变量命名

####  **标识符** 和 **关键字**


> 标识符指的是 **变量名**, **函数名**
> 标识符可以由 **字母**, **下划线** 和 **数字** 组成
> **不能以数字开头**
> **不能与关键字重名**
> Python 中的 **标识符** 是 **区分大小写的**
> 但是**尽量小写** , 官方建议使用 **下划线连接法** 

#### **关键字** 是 `Python` 内部已经使用的标识符

另外 需要避免内部函数

    > **关键字** 具有特殊的功能和含义 
    > 开发者 **不允许定义和关键字相同的名字的标识符**

```
# 查看Python 关键之的命令
import keyword
print(keyword.kwlist)

```


#### 变量名的命名方式说明

* **下划线连接法**   --官方建议
    * 示例: first_name , last_name , qq_number , qq_password
* **驼峰命名法**
    * 示例: firstName , lastName , learningWay ,productName

### 模块命名(module)

* 模块尽量使用小写命名, 首字母保持小写,尽量不要用下划线(除非多个单词,且数量不多的情况)
* 正确示例: import decoder    import html_parser
* 不推荐示例: Decoder

### 类名命名(class)

* 类名使用 **大驼峰命名风格** (CamelCase), **首字母大写**, 私有类可用一个下划线开头
    * 将相关的类和顶级函数放在同一个模块里. 不像java, 没必要限制一个类一个模块.

### 函数命名 (function)

* 函数名 **一律小写** 
* 多个单词用 **下划线风格** , 以增加易读性
* 示例: name, print, prod_name, vend_id, 

### 常量命名 (constant)

* 常量命名时, **所有字母大写** , 由 **下划线连接** 各个单词
* 示例:MAX_OVERFLOW , TOTAL

* * *

## 代码风格

### 文件编码 : utf-8

>如无特殊情况, 文件头部必须加入#--coding:utf-8--标识


### 缩进

> python中缩进决定了代码的作用域范围,类似思维导图的层级,界定代码范围(相当于其他语言的"{}"),相同缩进级别的代码表示一个代码块(":" 表示隶属于)

### 代码注释

* 块注释"#"后一定要空一格,段落间用空行分开时同样需要 "#"号
* 行注释 后面至少要用两个空格和语句分开
* 建议
    * 代码的关键部分,能写注释的要尽量写注释; 
    * 比较重要的注释段, 使用多个等号隔开, 可以更加醒目,突出重要性
* 同行注释时 建议在代码后面先**增加两个空格** 再输入"**# 要标注的信息**"


### 空格

* 两元运算符两边各空一格
* 函数的参数列表中,","之后要有空格
* 函数的参数列表中,默认值等号两边不要添加空格
* 左括号之后,右括号之前不要加多余的空格
    * 正确写法: ((a + b) * 2)
* 字典对象,函数左括号之前不要多余的空格
    * 正确写法: print() dict[a, b, c]

* 不要为对齐赋值语句而使用额外的空格

### 换行

* Python 支持括号内的换行.这是有两种情况
    * 第二行缩进到括号的起始处
    * 第二行缩进 4个空格 ,适用于起始括号就换行的情形

* 使用反斜杠 \ 换行,二元运算符+ .等应出现在行末；长字符串也可以用此法换行
* 禁止复合语句,即一行中包含多个语句:
* if / for /while 一定要换行  -- :后的代码块

## 变量命名

### 命名风格

[参考文档](https://zh-google-styleguide.readthedocs.io/en/latest/google-python-styleguide/contents/)

> 1. 所谓”内部(Internal)”表示仅模块内可用, 或者, 在类内是保护或私有的. 

模块, 包, 函数, 方法, 参数, 全局/类变量, 实例变量, 本地变量: 均采用**下划线小写**方式: `lower_with_under`

全局常量 这采用 下划线大写 方式: `CAPS_WITH_UNDER`

类和异常 采用 大驼峰 方式: `CapWords`

(模块私有)内部变量或函数用 **单下划线** 标识 `_lower_with_unbder`

(类私有)内部变量或函数用 **双下划线** 标识: `__lower_with_under`



```python
# 用zip组合键和值来创建字典。好的代码：
keys = ['1001', '1002', '1003']
values = ['骆昊', '王大锤', '白元芳']
d = dict(zip(keys, values))
print(d)
```



函数, 参数, 模块, 类, 方法, 常量

规范(动词开始)

### 语法

- **使用源码命名风格**
- *关于缩写* : 取前半部分, 根据词发音取缩写, 
- **使用封闭空间** 函数内
- **采用有意义的命名**(meaningful names). 变量的名字必须准确反映他的含义和内容
- 借用辅助工具
- 
- **使用有意义的方法参数命名**, 这样做可以在没有文档的情况下尽量做到"自解释(documentate itself)"

参数命名规范(

### 语义

普通变量名称 : 属性(进程, 颜色, 进程号) 状态(是否完成 标记)

函数名称 : 函数功能和作用的描述 (基础集成传输 形容词 + 名称 + 动词 / 动词 / 动词 + 名词)

## 函数编写

> 参数细节, 

传入参数可以 当在调用时,作为传入参数使用

```python
# 传入参数, 加深理解, 传入参数 - 在函数内部当做变量,随意使用, 及时是在函数内部调用函数
def print_result(name, age):
    print(name, age)


def come_in_param(name, age, sex='M'):
    print('SEX:', sex)

    print_result(name, age)

    return name, age


come_in_param('wwfyde', 24, 'M')

```

# 工具模块

## 常见需求

python工具版本控制:

自动补全:

虚拟环境:

写测试:

使用: SQL /NoSQL

调试器: debugger

运行和调试: 远程代码

代码重构: refactorissue trackers

错误提示: code linting

类型提示: type hintings

持续集成工具: continuous integrations

代码覆盖: code coverage

代码分析器: python profiler

## 请求处理

httpx requests urllib xpath BeautifulSoup

aiohttp

2019年度框架

HTTPX / starLette / **FASTAPI** / immutables / Pyodide / Modin / Streamlit / Transformers / Detectron2 / MetaFlow

### HTML处理

BeautifulSoup	

lxml



## 测试框架

## 文件管理

## 文本处理

yaml

## 时间日期

## 配置读取

config

ConfigParser

## 配置管理

### 参考项目

- [配置管理dynaconf](https://github.com/rochacbruno/dynaconf)
- 使用 环境变量 `os.getenv`
- 
- 使用 模块 module  `dev.py `
- 使用 文件 YAML
- 使用 文件 JSON
- 使用 文件 INI configparser
- 使用 对象 object
- 使用 对象 dict  
- 使用pydantic 中的 BaseSettings
- 使用 configmanager
    - pip install configmanager


## 命令行开发

fire

## 验证管理

## 队列

celery, queue

## 并发和并行



# **设计思想**

> 底层思想 核心思想 底层原理 设计思想 Python思维与方法

## 核心概念

一切接对象

装饰器

生成器	

鸭子类型

对象的三大特性: 类型(type) 身份(identifier) 值(literal),,检出方法 type(),isinstance, id() print() 

### 类型检查

对于中大型项目推荐增加使用伪静态类型特性(:int ->int),同时还可以使用官方推荐模块 `mypy` , 来进行类型检查

## 语言特性

[参考链接-知乎](https://zhuanlan.zhihu.com/p/58623565)

[参考链接-CSDN](https://blog.csdn.net/u013510614/article/details/50751017)

一切皆对象(object), 一切皆协议(protocol). 

对象的三大特征: 类型(type), 值(value), 身份(identify). 

属性(property)调用, 方法(method)调用, 导入(import)调用. 



### 动态语言

变量指向重复引用 指向内存 ; 可以复用

运行时才能发现错误, 依赖工具 进行静态检查

### 基于协议

python是基于协议来进行编程的, python语言基于协议实现的

### 上下文管理器

### 推导式

类型推导式
列表/字典/集合推导式

### 装饰器

### 生成器

### 描述符

### 序列类

# 编程思想

[逻辑编程](https://zh.wikipedia.org/wiki/%E9%82%8F%E8%BC%AF%E7%B7%A8%E7%A8%8B)

数据类型实现 : 元类 > 基类 > 自定义类 	= 内部对象

高级对象实现 : 接口(自定义元类Mixin) > 类 > 实例 = 对象

## 编程技巧

- 切片, 系统对象, 推导式
- 控制复杂性是软件开发的根本
- 平时应该注重编程风格和编程思想的培养, 编写注释和参考文档
- 自顶向下设计 vs 渐进式设计
- 官方文档 >> 第三方实现 >> 网络 >> 个人实现
- 一切皆对象, 一切皆协议, 一切皆文件(linux)
- 实现配置的几种方式：配置文件['ini', 'conf', 'yaml']， 数据库， json, 字典, 环境变量
- 程序一般处理的对象(交互): 网络请求对象, 文件对象, 数据库对象, 套接字对象, 数据对象,json对象. 程序就是一个加工厂 : 按照协议处理问题, 输入 - 处理 - 输出
- 增加<u>功能</u>灵活度的核心是**参数**, 增加<u>代码</u>灵活度的核心是**变量**. 
- 一切编程的目的都是对现实的模拟,能用编程模拟也就能够对其用图表等其他方式进行模拟
- ZenofPython:简洁,优雅,风格化,结构化
- 编程的目标是**:**实现功能和高效解决问题
- 需求/问题 -->分析:抽象和拆解 -->模式认知 -->设计算法
- 尽量避免信息冗余 :一一对应,重复引用,
- 编写出通用的代码，做出通用的编程，以适应需求的不断变化
- 封装/模块思维

## 语言优势

python优势: 可读性强, 易于维护, 快速交付和产品迭代, 特别适合中小型项目, 可MVP开发, 可扩展性强, 开源,轻松按需修改源码 大量的强大的库可以使用, 

明确需求 - 知道怎么做 - 寻找解决方案

### 封装思想

通过各种协议来进行封装, 自定的协议, 通用发的协议

不同的封装形式, 会产生不同的效果

*不同层次的封装,可以增加复杂度, 同时也产生了更多的功能, 通过协议来进行封装*

### 解决方案库

- 不可能所有问题都能分析全, 当遇到问题时, 再添加进去
- 合理 **利用变量**, 提升代码的 **灵活性**
- 通过导包, 导入函数来实现某一功能. 利用热门常用的库来提供一些高级的功能, 就像使用标准库一样.
- 多次用到的功能可以封装会一个可复用的函数(装饰器也是这样)
    - 如果一次分解无法实现某一功能, 那就多次分解
        - 比如:IPv4 还是IPv6 直接设计一个功能使其 不用关心网络连接方式
- 程序是一些命令, 当发送正确的指令就会触发响应的响应(计算, 返回. 逻辑判断)

**用户思维和开发者思维**: 考虑用户的方便和开发者的方便

**安全和测试**: 防止被攻击和保证服务器稳定

解决问题时应该注重使用以前的解决方案或者别人的解决方案, 并重复使用他们

### 命令思想

指令思想, 控制代码

### 面向对象思想

### 接口思想

### 转换思想

### 从属思想

### 结构化编程

### 逻辑化思想

### 构造思想

### 抽象编程

现实 - 分解 - 封装 抽象  重组 建立不会出错的联合对偶, 实现完全准确的表征
行为抽象 数据抽象定义:抽象编程是通过抽象的方法来减少编程工作量或有效地减轻编程难度称为抽象编程将问题通过功能分解，各个击破的编程方法（过程化编程） 是一种以行为抽象为主的抽象编程将问题通过实体分析，分层分类地实现抽象数据类型，从而进行简单应用编程（基于对象编程）是一种以数据抽象为主的抽象编程

特点: 通过数据类型复用，方便编程，方便维护和扩展，其效果比过程化编程更好编程语言中没有许多具体的数据类型

## 编程思维

### 分解问题

### 模式认知



### 抽象思维

### 算法设计

## 需求分析思维

### 发现和明确问题

- 7W2H法

### 分析问题

- 问题拆解
- 简化思维
- 需求分析

### 寻找解决方案

- 选择合理的策略/技巧/方法
- 选择合理工具
- 建立框架,项目准备
- 设计方案

### 执行和落地

- 问题-解决
- 需求-满足

## 3w

### 是什么

### 为什么

### 怎么办

### 编程思维

如何处理现实问题
**问题分解**分解思维是将一个大问题拆解成许多小的部分。这些小部分更容易理解，让问题更加容易解决。

顺序结构(路径结构)

树形结构(分支结构)

层级结构(嵌套结构)

循环结构(重复执行)

**抽象问题**抽象化是关注关键信息，忽略不必要细节的过程。**流程化思维,模块化思维,数字化思维

**模式识别**模式识别是识别不同问题中的模式和趋势（共同点）的过程。你能从以往的经验中得到规律并且举一反三将它运用到其他的问题中。**数据库设计, 模型设计

**设计算法**算法是一步步解决问题的过程

学习编程思想

1.框架思维写一个软件，需要搭架构；

写一段程序，需要有一个大体框架。如同建一栋楼，需要首先搭脚手架。显然，框架思维不是程序员独有的。

拆解思维一个复杂的问题，看起来千头万绪没有思路，这时需要将复杂的问题拆解成一个个简单的问题，再各个击破。显然，拆解思维也不是程序员独有的。

函数思维。许多会被重复使用到的运算过程被储存为标准化的函数，下次再有需要就直接调用，只需要改动输入的自变量即可。这就是函数思维，但这也不是程序员的专利。工厂里的流水生产线往往被划分成若干个工位，每一个工位执行标准化、程序化的动作，这不就是工业生产中的函数思维（或者说自动化思维）吗？

# **问题解决**



需求/问题分析, >> 明确问题 

模块规划

需求分散 >> 概要设计 >> 详细设计 >> 编码 >>单元测试 >>集成测试 >> 系统测试 >> 交付



> **解决问题的思路 : 严佳华**
>
> 问题和需求 - 转换为 中文 然后翻译为 英文 在github上面找 然后 一个一个找 code resp. 变量名 和 函数 的命名, 生成意义 函数 对象 仓库 项目名. 数据 和 服务 上云 

使用Github 搜索相关的函数名 解决 问题的思路 

向保松的代码编写思路: 需求分析, 业务流程图, 数据流程图, 对象和接口设计, 核心逻辑实现, 伪代码编写, 代码编写, 测试和调试代码, 打断点调试



> **解决问题的思路 : 向保松**
>
> 真理 万物归一 
>
> 编程技术 总结: 把自己当架构师培养, 创业, 独立开发者. 
>
> 现在: 高级工程师技术栈固定 网络编程 操作系统 编译原理 SHELL 数据库引擎 设计模式 和架构能力  
>
> 自我定位 :  跟着市场走, 把自己当做优秀的工程师来培养 高并发服务 图像处理 + 深度学习
>
> 市场调研 用户分析 背景



需求分析 : 多角度 验证

拿到   需求的人  认识问题, 理解清楚和透彻, 不然方向都搞错, 认识 和用户 确认需求, 和用户讨论, 引导, 优化(多角度 优化) 理清业务背景 问题搞清楚, 然后 : 把 **业务流程图** 数据流程图 搞出来  需求分析阶段, 认识 比提出问题的人 优化   

比较难的需求 , 领域知识, 新的词汇  : 原理 搞透彻  这个时候 

**数据流程图** -->  开发 

程序设计阶段: 流程设计 架构设计 MVC Recator架构 

分模块架构  日志 通信 数据库 工具库 业务  每个模块: 都是独立的进程

**开发**

**调试**

**测试**

**部署** 

考虑 维护要方便  发现有问题 不好调试,  疯狂打日志

部署方便  : Docker / 用动态库部署

数据表 存储 文件 

宏观  到 微观的认识

开发   如果需要 关键技术  

SVN / git 代码管理

C++ 

面向对象编程语言 :  面向对象设计  设计模式  程序的构架  

**程序时序图**  代码运行逻辑 表示清楚了 

然后就可以敲代码  

实际上手 开发

如何自己测试 让测试工程师来测试  考虑测试 问题  构造

 demo



**解决问题的思路 : 欧阳子臻**

百度 + 问人 : 百度学习: 利用



# 编程范式

A programming paradigm is a fundamental style of computer programming, serving as a way of building the structure and elements of computer programs.

Programming paradigms that are often distinguished include imperative, declarative, functional, object-oriented, procedural, logic and symbolic programming.

编程典范, 程序设计法, 编程风格

## 声明式编程

## 命令式编程

## **过程式编程**

## 逻辑编程



## **模块化编程**

**逻辑编程**（**逻辑程序设计**）是种[编程典范](https://zh.wikipedia.org/wiki/編程典範)，它设置答案须符合的规则来解决问题，而非设置步骤来解决问题。过程是



不同的方法，可以看[Inductive logic programming](https://zh.wikipedia.org/w/index.php?title=Inductive_logic_programming&action=edit&redlink=1)。

逻辑编程的要点是将正规的[逻辑](https://zh.wikipedia.org/wiki/邏輯)风格带入计算机程序设计之中。数学家和哲学家发现逻辑是有效的理论分析工具。很多问题可以自然地表示成一个理论。说需要解答一个问题，通常与解答一个新的假设是否跟现在的理论无冲突等价。逻辑提供了一个证明问题是真还是假的方法。创建证明的方法是人所皆知的，故逻辑是解答问题的可靠方法。逻辑编程系统则自动化了这个程序。[人工智能](https://zh.wikipedia.org/wiki/人工智能)在逻辑编程的发展中发挥了重要的影响。

[猴子和香蕉问题](https://zh.wikipedia.org/w/index.php?title=猴子和香蕉問題&action=edit&redlink=1)是逻辑编程社群的著名问题。电脑须自行找出令猴子接触香蕉的可行方法，取代程序员指定猴子接触香蕉的路径和方法。

**逻辑编程创建了描述一个问题里的世界的逻辑模型**。逻辑编程的目标是对它的模型创建新的陈述。世界上知识不断澎涨。传统来说，我们会将**一个问题陈述成单一的假设**。逻辑编程的程序透过证明这个假设在模型里是否为真来解决问题。

一些经常用到逻辑编程工具的范畴：

- [专家系统](https://zh.wikipedia.org/wiki/專家系統)，程序从一个巨大的模型中产生一个建议或答案。
- [自动化证明定理](https://zh.wikipedia.org/w/index.php?title=自動化證明定理&action=edit&redlink=1)，程序产生一些新定理来扩展现有的理论。

## **函数式编程**

> 不能有副作用

#### 定义

函数式编程是种编程方式，它将电脑运算视为**函数计算**。函数编程语言最重要的基础是λ演算（lambda calculus），而且λ演算的函数可以接受函数当作输入（参数）和输出（返回值）。

它将计算机运算视为 **函数运算**，并且避免使用程序状态以及易变对象。其中，[λ演算](https://zh.wikipedia.org/wiki/Λ演算)（lambda calculus）为该语言最重要的基础。而且，λ演算的函数可以接受函数当作输入（引数）和输出（传出值）。

比起[指令式编程](https://zh.wikipedia.org/wiki/指令式編程)，函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而不是设计一个复杂的执行过程。

**核心思想**: 把运算过程写成嵌套函数调用(引用,计算,返回, 调用 )

和指令式编程相比，函数式编程强调函数的计算比指令的执行重要。

和过程化编程相比，函数式编程里函数的计算可随时调用。

**惰性计算**(延迟计算): 表达式不是在引用变量时立即计算,而是在求值程序需要产生表达式的值时进行计算

**函数也是一种数据类型**

#### 特点

**只用"表达式"，不用"语句"**

"表达式"（expression）是一个单纯的运算过程，总是有返回值；"语句"（statement）是执行某种操作，没有返回值。函数式编程要求，只使用表达式，不使用语句。也就是说，每一步都是单纯的运算，而且都有返回值。

原因是函数式编程的开发动机，一开始就是为了处理运算（computation），不考虑系统的读写（I/O）。"语句"属于对系统的读写操作，所以就被排斥在外。

当然，实际应用中，不做I/O是不可能的。因此，编程过程中，函数式编程只要求把I/O限制到最小，不要有不必要的读写行为，保持计算过程的单纯性。

**没有"副作用"** -- 结果确定且唯一

所谓"副作用"（side effect），指的是函数内部与外部互动（最典型的情况，就是修改全局变量的值），产生运算以外的其他结果。

函数式编程强调没有"副作用"，意味着函数要保持独立，所有功能就是返回一个新的值，没有其他行为，尤其是不得修改外部变量的值。

**不修改状态**

上一点已经提到，函数式编程只是返回新的值，不修改系统变量。因此，不修改变量，也是它的一个重要特点。

在其他类型的语言中，变量往往用来保存"状态"（state）。不修改变量，意味着状态不能保存在变量中。函数式编程使用参数保存状态，最好的例子就是递归。下面的代码是一个将字符串逆序排列的函数，它演示了不同的参数如何决定了运算所处的"状态"。

**引用透明性**

函数程序通常还加强*引用透明性*，即如果提供同样的输入，那么函数总是返回同样的结果。就是说，表达式的值不依赖于可以改变值的全局状态。这使您可以从形式上推断程序行为，因为表达式的意义只取决于其子表达式而不是计算顺序或者其他表达式的副作用。这有助于验证正确性、简化算法，甚至有助于找出优化它的方法。

#### 优点

**代码简介, 开发快速**

**接近自然语言, 易于理解**

**更方便的代码管理**

函数式编程不依赖、也不会改变外界的状态，只要给定输入参数，返回的结果必定相同。因此，每一个函数都可以被看做独立单元，很有利于进行单元测试（unit testing）和除错（debugging），以及模块化组合。

(封装成独立单元, 状态恒定)

**易于并发编程**

函数式编程不需要考虑"死锁"（deadlock），因为它不修改变量，所以根本不存在"锁"线程的问题。不必担心一个线程的数据，被另一个线程修改，所以可以很放心地把工作分摊到多个线程，部署"并发编程"（concurrency）。

**代码的热升级**

函数式编程没有副作用，只要保证接口不变，内部实现是与外部无关的。所以，可以在运行状态下直接升级代码，不需要重启，也不需要停机。

## **面向对象编程**

对数据和功能的封装, 

**面向过程**: 强调的是功能行为, 关注的是解决问题需要哪些步骤 
**面向对象**: 将功能封装进对象, 强调具备了功能的对象关注的是解决问题需要哪些对象 

## **结构化编程**

> 不能跳转, 不能使用goto

#### 原则

自顶向下，逐步细化；

清晰第一，效率第二；

书写规范，缩进格式；

基本结构，组合而成。

## 泛型编程

# **开发原则**

> 标签: `遇到的问题`	`问题汇总` 	`python`	`效率技巧`	`开发原则`	
>
> 原则和技巧的区别: 
>
> 原则是宏观上的考量, 从方向和根本上避免解决问题
>
> 技巧是细节上的考量, 从细节和思想上提高生产效率
>
> 两者都可以提高效率, 和避免问题的发生,二者都是对最佳实践的总结, 只是思路不一样而已. 

[Pycharm使用技巧](软件使用技巧.md)

## 快速开发

理解, 分解, 重构

解决问题思路: 分析理解问题和需求, 寻找找解决方案,获得启发, 

直面问题和需求, 

寻找实例(github, Stack Overflow, google, baidu, csdn, cnblogs),  

流程分析, 

代码和逻辑实现

优化代码, 增加代码

## 编程原则

[原文链接](https://www.infoq.cn/article/VEgR7xkNIYUsSWP9Ohc3?utm_source=7d_hot&utm_medium=article)

- 不要纠结于开发工具 : 库, 编程语言, 平台. <u>尽可能使用原生库</u>.
- 一定要注意优化逻辑处理, 避免编写大量重复代码, 可读性差.
- 代码编写是给同事和以后的自己看的. <u>尽可能为代码注解</u>
- 优秀的软件是协作开发的结果. <u>高效沟通, 信任他人</u>
- <u>分而治之</u>. 为分离的关注点开发单独的低耦合模块. 进行单独的模块测试和集成测试.
- 安全性是分层的. 从 用户体验,安全性, 性能. 三个关注点考虑问题
- 在寻找解决方案时，请按照这样的优先级进行决策：安全性 > 可用性（可访问性和用户体验）> 可维护性 > 简单性（开发者体验）> 简洁性（代码量）> 性能。
- <u>处理异常</u>
- <u>审查粘贴的代码</u>
- <u>走出舒适区, 每天都要学习</u>. 把学到的东西分享出来。如果你以大师自居，就不是在学习。接触更多的编程语言、技术、文化，保持一颗好奇心。
- 好代码不需要注释，而优秀的代码提供了良好的注释，可以让任何一个原先没有参与代码演进、试错和需求过程的人更容易阅读、修改它。
- 使用纯函数，它们更容易测试和诊断，否则的话就使用类。实现不同功能的函数要使用不同的名字。避免 重载, 继承 和隐式的智能特性
- <u>在彻底了解问题之前不要急着写代码</u>。花在倾听和了解问题上的时间通常比花在写代码上的时间要多。在写代码之前要先了解问题域。问题就像迷宫一样，你要循序渐进，反复进行“编码 - 测试 - 改进”，直到把问题解决为止。
- <u>不要尝试去解决不存在的问题</u>。不要进行投机性编程。只有在确定代码确实需要具备扩展性之后才让代码具备可扩展性。通常情况下，当代码被扩展之后，你会发现问题会变得与原先认为的不一样了。
- <u>大家一起开发软件会更加有趣</u>。建立可持续发展的社区。倾听，激发灵感，学习，分享。

## 一般性原则

-   满足基本的条件才能处理
-   不要急着写代码, 搞清楚问题更重要
-   首选参考**官方文档**
-   寻找解决方案, 尽可能选择**二次开发**方案
-   合理使用帮助文档
-   注重**理论与实践**的平衡
-   注重**细节与实现**的平衡
-   注意总结反思
-   开发封闭原则
-   注意软件的健壮性(错误处理, 代码灵活性, 可维护性, 扩展性)
-   在寻找解决方案时，请按照这样的优先级进行决策：安全性 > 可用性（可访问性和用户体验）> 可维护性 > 简单性（开发者体验）> 简洁性（代码量）> 性能。但不能盲目照搬，而是要根据产品的特点进行取舍。你积累的经验越多，就越是能够在这些因素之间做出权衡。例如，在设计游戏引擎时，性能享有最高的优先级，但在开发银行应用程序时，安全性则最为重要。
-   不要只顾着写正常的代码，处理异常的代码也要好好写。让人们明白为什么会发生异常、如何检测到的以及怎样解决。对所有的系统输入（包括用户输入）进行验证：尽早失败，并尽可能从错误中恢复。我们要假设用户手里握着一把枪：你努力让用户输入一些其他的东西，而不是让他们的子弹射在你的脑门上。
-   在彻底了解问题之前不要急着写代码。花在倾听和了解问题上的时间通常比花在写代码上的时间要多。在写代码之前要先了解问题域。问题就像迷宫一样，你要循序渐进，反复进行“编码 - 测试 - 改进”，直到把问题解决为止。
-   大家一起开发软件会更加有趣。建立可持续发展的社区。倾听，激发灵感，学习，分享。



## 开发设计应该考虑的因素

- 复用性
- 可迭代
- 可扩展
- 单一性
- 节省性能
- 简洁
- 结构化
- 高效率
- 节省(用户)资源(时间,物质,精力)
- 封装性
- 节省用户精力

# **开发技巧**

> 程序开发使用 `pycharm`, 服务器则使用 `vscode`, 奇技淫巧, 编程技巧

充分利用: github, stackoverflow, offilal site, 等站点, 

## 搜索官方中文文档

> 官方中文文档搜索中文无效问题

```shell
# 示例
类型标注 site:docs.python.org/zh-cn
```



## 使用新的桌面开启虚拟机

四指切换

## 打印变量到日志文件或Debugger

调试 / 和排查问题

## 模块注释

文档开始处用`"""`实现, 相当于`__doc__=`

## 小技巧

- 查看IP地址: https://ifconfig.me/ip
- 先理清思路(画图),再写代码
- 避免全局变量(用作常量,不变)
- 查看python官方文档用谷歌搜索

## 查看模块/函数帮助文档和信息

> 使用ipython help() -> 	
>
> 标签: `模块路径` `模块信息`

### 方法一

```shell
# 进入 ipython
ipython
help()
# 或者help('modules')
modules
flask
# 查看模块信息
# 查看模块路径


```

### 方法二

```python
import abc
print(abc)
```

### 方法三

```python
import random
random?
random.randint?
```



## 一行搞定

```python
# 改进前
if alpha > 7:
    beta = 999
elif alpha == 7:
    beta = 99
else:
    beta =0

# 改进后
beta = 999 if alpha > 7 else 99 if alpha == 7 else 0
```



## 关于 PIL模块 python3没没有

[参考网上文档](https://jingyan.baidu.com/article/fea4511a20d98af7ba912551.html)

## 查看对象的命名空间dir()

## 架构设计的常见需求

- 分析可能用到的技术点
- 前后端是否分离
- 前端使用哪些框架
- 后端使用哪些框架
- 选择什么数据库
- 如何实现缓存
- 是否搭建分布式服务
- 如何管理源代码

# 常见需求

调试日志打印

错误处理

条件判断

提示反馈信息

### 数据库读写分离

(数据库主从同步): 冷备份, 热备份

要在主的配置文件中开启二进制日志文件, 主的职责是写入数据库

查询是从slave查询, 读取主的二进制日志文件, 执行操作, 获得最新数据

主服务器: 负责增删改(写)

从服务器: 负责查询(读)

读写分离依赖于主从同步

数据库冷备份:停止服务器, 通过SQL语句同步数据

数据库热备份: 

## 获取 文件MD5值 

官方 hashlib 库

## 数值转换

字符串转数值

数值之间的表示方式转换

```python
# 10进制转其他方式
bin(1024) 转换为二进制
hex(1024) 转换为16进制
oct(1024) 转换为8进制

int('99') = int('', base=10) 
int('', 0) # 根据字面值转换为十进制 0xFF, 0b10101, 0o777
int('0xFF', 16)  # 将16进制转换为十进制
```

## 编码转换

```python
ord(1000)
chr('34')
```





## 接口设计思路

核心目标是返回数据就行了，不用管前端如何处理

### 理清业务逻辑(流程)

### 接口设计一般思路

接收参数 校验参数(是否传输正确)

#### 请求方式

#### URL路径定义

#### 前端传递的数据及格式

明确 传递方法 - 数据内容 - 数据格式 明确了才知道怎么操作

#### 返回给前端的数据及数据格式

由前端的需求决定的, 不用考虑数据应该如何处理, 更多应该的是考虑 **数据保存** 和 **返回数据** 两项任务

## 校验&异常&错误逻辑

### 常见需求

- 是否正确传输
- 数据是否正确

## 前后端分离

前后端职责分离, 前后端依赖分离, 前端的任何数据都需要进行检查和校验

## [敏捷开发](https://zh.wikipedia.org/wiki/敏捷开发)

## RESTful风格

## **微服务** - Microservice

> 微服务	微服务架构

微服务是一种以**业务功能**为主的服务设计概念，每一个服务都具有自主运行的业务功能，对外开放不受语言限制的 API (最常用的是 HTTP)，应用程序则是由一个或多个微服务组成。

微服务是指提供单个业务功能的服务，从技术角度看就是一种小而独立的处理过程，类似流程概念，能够自行单独启动或销毁，拥有自己独立的数据库。

一个复杂软件架构是由很多这样小而独立运行(有自己的端口)微服务组成，这些独立处理组件之间通讯是通过与语言无关的API进行，简单协议有同步性质的RMI/RPC和 RESTful Web Services，异步的消息推送和Reactive方式。

微服务运用了以业务功能的设计概念，应用程序在设计时就能先以业务功能或流程设计先行分割，将各个业务功能都独立实现成一个能自主运行的个体服务，然后再利用相同的协议将所有应用程序需要的服务都组合起来，形成一个应用程序。若需要针对特定业务功能进行扩展时，只要对该业务功能的服务进行扩展就好，不需要整个应用程序都扩展，同时，由于微服务是以业务功能导向的实现，因此不会受到应用程序的干扰，微服务的管理员可以视运算资源的需要来配置微服务到不同的运算资源内，或是布建新的运算资源并将它配置进去。

虽然使用一般的[服务器虚拟化](https://zh.wikipedia.org/w/index.php?title=伺服器虛擬化&action=edit&redlink=1)技术就能应用于微服务的管理，但容器技术 (Container Technology) 如 [Docker](https://zh.wikipedia.org/wiki/Docker) 会更加地适合发展微服务的运算资源管理技术。

### 微服务事务特征与界定

**小** - Small services: 粒度小, 且专注一件事情

**独** - own process: 单独的进程

**轻** - Lightweight mechanisms: 轻量级通讯机制, 通常是HTTP / REST接口

**松** - Independently deployable: 松耦合, 可独立部署

### Chris Richardson提出的微服务三维扩展模型

X轴 - 服务实例水平扩展, 保证可靠性与性能;

Y轴 - 功能的扩展, 服务单一职责, 功能独立;

Z轴 - 数据分区, 数据独立, 可靠性保证;

### 优点

**交付周期** - 每个服务可以独立开发, 测试和交付, 降低周期;

**快速沟通** - 小团队开发，降低代码耦合度导致的沟通成本；业务按服务拆分，新人不需要了解整体架构，上手快；

**定制化** - 可以根据市场需求，灵活多变的组合出新的业务场景；

**隔离性** - 进程隔离方式, 故障范围有效控制;

**技术栈** - 可以根据需求按服务选择不同技术栈;

**演进优化** - 可以按照服务粒度进行演进优化；

### 微服务架构总体技术体系

接入成

网关层

业务服务层: 聚合服务, 基础服务

支撑服务





## 其他需求

- 用SSH部署到服务器	
- 公司的代码通常放在gitlab私有服务器中
- **明确需求  分析需求 实现需求**
- 设计和实现 应该分开  表现和逻辑应该分开
- 浏览器会自动加载 src属性的资源
- **先理清业务逻辑, 再敲代码**
- 不建议使用新版本  可能遇见未知错误



# **调试分析**

> debuging and profiling
>
> [官方文档](https://docs.python.org/zh-cn/3/library/debug.html)

## Productivity Tips

- 可以直接修改变量后继续运行, 而不用修改源码
- **条件断点**

## debug

## profile

> 使用 pycharm > run > profile file



## timeit-测量小代码片段的执行时间



## trace - 跟踪Python语句执行





# **单元测试**

## 核心概念

- test case
- test suite:
    - 测试用例的集合

> [!tip]
>
> 需要实践才能理解
>
> 应该需要编写高质量, 可测试的代码
>
> pytest(46%), unittest(32%)
>
> 测试函数单元, 功能单元, 模块单元
>
> *编写单元测试*的习惯
>
> 重要性:
>
> - 保证研发质量
> - 提高项目的稳定性
> - 提高开发速度

## 单元测试

### 目的

编写高质量和可维护的代码

一般认为，单元测试有四种作用：
（1）使代码可以放心修改和重构；
（2）迫使程序员从调用者而不是实现者的角度设计软件模块；
（3）迫使程序员将软件模块写得易于测试和调用，从而有利于解耦；
（4）测试本身可作为被测代码的用法说明，从而替代了一部分文档功能。

### 零散记录

单元测试:

　　单元测试是对单独的代码块分别进行测试, 以确保它们的正确性, 单元测试主要还是由开发人员来做, 其余的集成测试和系统测试由专业的测试人员来做. python的单元测试代码编写主要记住以下几点:

  　　1. 需要导入 unittest模块

        　　2. 需要继承自 unittest.TestCase 类

              　　3. 单元测试的代码函数名必须以test开头(其他语言也是如此)

​    4. 单元测试里由 setUp 和 tearDown 两个勾子函数

 

 以下为代码实现举例:

```python
import unittest

 

class TestClass(unittest.TestCase):

    def setUp(self):
        # 该方法会首先执行,相当于测试前的准备工作
        pass 
    def tearDown(self):
        # 该方法会在测试完成后执行, 相当于测试的扫尾工作
        pass

    def test_app(self):
        # 该方法为测试测试代码
        pass
```



单元测试经常用到的断言方法:

　　assertEqual       # 如果两个值相等, 则pass

　　assertNotEqual    # 如果两个值不相等, 则pass

　　assertTrue       # 如果bool值为True, 则pass

　　assertFalse       # 如果bool值为false, 则pass

　　assertIsNone      # 如果不存在,则pass

　　assertIsNotNone   # 存在,则pass

## 集成测试



# 常见问题

## Python2中文乱码

```python
#-*-coding:utf-8-*-
# encoding=utf-8
import sys

reload(sys)
sys.setdefaultencoding('utf-8')
```

`0x` 与 `\x` 的区别

[参考链接](https://stackoverflow.com/questions/16903192/meaning-of-0x-and-x-in-python-hex-strings)

`0x` 表示操作符的字面值: literal numbers; -16位

`\x` 表示操作符的整数值

## 相对导包错误 TODO

[官方文档解释](https://docs.python.org/zh-cn/3/tutorial/modules.html#intra-package-references)

注意，相对导入基于当前模块名。因为主模块名是 `"__main__"` ，所以 Python 程序的主模块必须始终使用绝对导入。

运行脚本时, 不应该使用相对导入

相对导入 在脚本中是没有意义的,在项目中才有意义(包才可以相对导入), 脚本的执行入口就是顶级环境



### 6.4.2. 子包参考

**当包被构造成子包时**（与示例中的 `sound` 包一样），你可以使用绝对导入来引用兄弟包的子模块。例如，如果模块 `sound.filters.vocoder` 需要在 `sound.effects` 包中使用 `echo` 模块，它可以使用 `from sound.effects import echo` 。

你还可以使用import语句的 `from module import name` 形式编写相对导入。这些导入使用前导点来指示相对导入中涉及的当前包和父包。例如，从 `surround` 模块，你可以使用:

```python
from . import echo
from .. import formats
from ..filters import equalizer
```

**请注意，相对导入是基于当前模块的名称进行导入的。由于主模块的名称总是 `"__main__"` ，因此用作Python应用程序主模块的模块必须始终使用绝对导入。**

[已解决](https://blog.csdn.net/nigelyq/article/details/78930330)

 **在使用相对导入的时候一定要注意包路径和包的查找路径。要在最顶层的目录添加到 sys.path 中，或者 在最顶层运行脚本。** 

```shell

```



导包原理 从sys.path中路径逐行搜寻, 所以如果出现相对导包错误时

```shell
ImportError: attempted relative import with no known parent package
```

### python  和 python -m 区别

一个是运行脚本 一个是运行模块

## pycharm同级目录没问题却报错

> 为什么用pycharm在同目录下import，pycharm会报错，但是实际可以运行？

解决方案:

 pycharm不会将当前文件目录自动加入自己的sourse_path。右键make_directory as-->sources path将当前工作的文件夹加入source_path就可以了。 



### **同级目录导包**

```python
# 使用
import my_a
from my_a import my_func

# 而不是 
from . import my_a
```

### 安装包出现错误x86_64-linux-gnu-gcc

[参考文档](https://stackoverflow.com/questions/26053982/setup-script-exited-with-error-command-x86-64-linux-gnu-gcc-failed-with-exit)

```shell
sudo apt install python3-dev python3.7-dev python3.8-dev 
```

### 2 to 3 常见区别

`Except, e`  vs `Except as e`

print 由关键字 转为 函数

## 从数据库中查询字符串数据

在python中返回的数据类型

# 设计模式

基础语义

*构造函数*: 构造函数 即  `__init__`函数，是一种特殊的方法。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。特别的一个类可以有多个构造函数 ，可根据其参数个数的不同或参数类型的不同来区分它们 即构造函数的重载(重写)。

class的一个成员函数, 为类`class`创建成员变量, 初始化.

*高聚合*: 能被单一描述比如一个需求, 一个功能, 实现方法

*低耦合*: 单一职责, 相互独立. 

*抽象*--abstraction: 模式化, 将复杂的现实世界, 用**底层逻辑**模拟出来

## 重要观点

- 程序是指令的集合
- 底层逻辑和结构思维和抽象思维
- 控制复杂度是计算机编程的本质
- **计算机科学中的所有问题都可以通过抽象来解决**



## 设计模式简介

面向对象的设计原理

理解面向对象编程;

面向对象的设计原则

理解设计模式的概念及其分类和背景

讨论动态语言的设计模式

设计模式分类: 创建型模式, 结构型模式, 行为型模式. 

### 理解面向对象编程

面向对象: Object-oriented Programming, OOP

对象包含了字段(类属性),方法. 

类包含了 `data` = fields 和 `code` = methods

对象包含了数据成员(data members)和方法成员(function members)

Python中, 一切皆对象(身份,内存地址). 

每个类的实例或变量都有它自己的内存地址或身份. 

对象就是类的实例, 应用开发就是通过让对象交互来实现目的的过程. 

为了理解面向对象程序设计的核心概念, 需要深入理解对象, 类和方法

#### 对象 -- Object

- 对象表示开发程序中的实体
- 实体之间可以通过交互来解决现实世界的问题

### 类 -- Class

- 类可以定义对象的属性和行为. 属性由字段表示,行为由方法表示.
- 类包含了构造函数(特殊方法), 作用是为对象提供初始状态.
- 类就像模板一样, 非常易于重复. 

### 方法 -- Method

- 方法(功能)表示对象的行为(行为,动作的集合)
- 方法可以对属性(实例属性, 类属性)进行处理, 从而实现对现实所需功能()的模拟



## 面向对象编程的主要概念

把一组数据结构和处理它们的方法组成对象（object），把相同行为的对象归纳为类（class），通过类的封装（encapsulation）隐藏内部细节，通过继承（inheritance）实现类的特化（specialization）和泛化（generalization），通过多态（polymorphism）实现基于对象类型的动态分派。

在面向对象编程的世界中，一切皆为对象，对象都有属性和行为，每个对象都是独一无二的，而且对象一定属于某个类（型）。

当我们把一大堆拥有共同特征的对象的静态特征（属性）和动态特征（行为）都抽取出来后，就可以定义出一个叫做“类”的东西。

### 封装性  -- Encapsulation

- 对象方法的具体运行步骤被隐藏, 方法被调用或执行时取而代之的是通过消息传递机制发送消息
- 隐藏一切可以隐藏的实现细节，只向外界暴露（提供）简单的编程接口
- 我们在类中定义的方法其实就是把数据和对数据的操作封装起来了，在我们创建了对象之后，只需要给对象发送一个消息（调用方法）就可以执行方法中的代码，也就是说我们只需要知道方法的名字和传入的参数（方法的外部视图），而不需要知道方法内部的实现细节（方法的内部视图）。
- 对象是对属性和方法进行的一系列封装, 对象之间相互独立和信息隐藏, 只能通过属性和方法(标识符)的方式对其进行访问和操作
- 封装的特性是私有化(单独的作用域), 封装的成员的从属于该对象, 访问成员的方式也只能是`对象.属性` 或`对象.方法`
- 通过简单的属性和方法的访问可以实现一系列复杂的过程(功能)

### 继承性 -- Inheritance

- 子类(派生类)会继承父类(基类)的(私有除外)属性和方法
- 子类重用父类定义的成员,并根据需求可以对父类进行扩展和重载
- 实现代码重用

### 多态性 -- Polymorphism

- 让不同对象对相同的方法执行不同的响应
- 继承会产生相关但不同的类, 方法的重写会让对象对同一消息会做出不同的响应.
- 多态给予了面向对象系统极大的**灵活性**，对象可以用该对象应该用的方式来执行动作，如果没有面向对象，这种灵活性很难实现。

### 抽象性 -- Abstraction

- [抽象](https://zh.wikipedia.org/wiki/抽象化_(計算機科學))(Abstraction)是简化复杂的**现实问题**的途径，它可以为具体问题找到最恰当的类定义，并且可以在最恰当的继承级别解释问题。
- 为对象提供接口,抽象让访问对象的方式变得简单



## 面向对象的设计原则(待完善)

> SOLID是面向对象编程和面向对象设计的五个基本原则。
>
> 通常也是**类设计**的基本原则
>
> **目标**是让一个程序员开发一个容易进行软件维护和扩展的系统变得更加可能。
>
> SOLID所包含的原则是通过引发编程者进行软件[源代码](https://zh.wikipedia.org/wiki/源代码)的[代码重构](https://zh.wikipedia.org/wiki/代码重构)进行软件的[代码异味](https://zh.wikipedia.org/wiki/代码异味)清扫，从而使得软件清晰可读以及可扩展时可以应用的指南。SOLID是[敏捷开发](https://zh.wikipedia.org/wiki/敏捷开发)以及[自适应软件开发](https://zh.wikipedia.org/w/index.php?title=Adaptive_programming&action=edit&redlink=1)的基本原则的重要组成部分。

### 单一职责原则(S)

**Single Responsibility Principle**

定义: 对象的职责应该单一, 对象应该仅具有一种单一的功能。

当我们开发类时, 应该为特定的功能服务. 如果一个类实现了两个功能, 那么最好将他们分开. **功能才是开发类或对象的理由**

**特点: **每当一个功能发生改变时, 除了特定的类需要改变外, 其他类无需改动. 同时应该尽量避免多个功能依赖于同一个类的情况, 否则会造成多次修改的情况

### 开放/封闭原则(O)

**Open Close Principle**

**定义: ** 软件体应该是对于扩展开放的，但是对于修改封闭的

类或对象及其方法对于扩展来说, 应该是开放的, 但是对于修改来说, 应该是封闭的

开发软件应用的时候, 应该确保以通用的方式来编写类或模块, 以便每当需要扩展类或对象行为的时候不必修改类本身. 

Software entities should be open for extension,but closed for modification

模块应对扩展开放，而对修改关闭。模块应尽量在不修改原有代码的情况下进行扩展。

该原则有助于保持以前代码的向后兼容性. 

### 里氏代换原则(L)

**Liskov Substitution Principle**

**定义:** 程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换的

派生类必须能够完全替代基类.这是继承复用的基石

如果调用的是父类的话，那么换成子类也完全可以运行。

开发人员编写派生类时, 应该尽量考虑扩展基类. 此外, 建议派生类应该尽可能对基类封闭(不重载), 以至于派生类本身可以替换基类, 而不需要修改任何代码

### 接口隔离原则(I)

**Iterface Segregation Principle**

**定义: **多个特定客户端接口要好于一个宽泛用途的接口

使用多个隔离的接口，比使用单个接口要好. 降低类之间的耦合度,降低依赖度. 

特点: 让方法与接口相关, 避免冗余(高聚合,低耦合)

### 依赖反转原则(D)

**Dependency Inversion Principle**

**定义: **一个方法应该遵从“依赖于**抽象**而不是一个实例”

针对**接口编程**, 依赖于抽象而不依赖于具体. 

指在软件里面，把父类都替换成它的子类，程序的行为没有变化。简单的说，[子类型](https://baike.baidu.com/item/子类型)能够替换掉它们的父类型。依赖性[倒转](https://baike.baidu.com/item/倒转)其实可以说是[面向对象设计](https://baike.baidu.com/item/面向对象设计)的标志，用哪种语言编程并不是很重要。

该原则建议任何两个模块都不应该以紧密方式相互依赖. 事实上, 基本模块和从属模块应当在他们之间提供一个 **抽象层** 来耦合. 这个原则还建议, 类的细节 (而不是实现细节) 应该描绘抽象.

**特点: **削弱了模块间的耦合, 因此消除了系统中的复杂性 / 刚性. 由于在依赖模块之间有一个明确的抽象层(由钩子或参数提供), 因此便于通过更好的方式处理模块之间的依赖关系. 

### 避免重复原则(DRY)

Don't Repeat Yourself

**定义：**系统中的每一部分，都必须有一个单一的、明确的、权威的代表。

当DRY原则被成功应用时，一个系统中任何单个元素的修改都不需要与其逻辑无关的其他元素发生改变。此外，与之逻辑上相关的其他元素的变化均为可预见的、均匀的，并如此保持同步。

### 保持简约原则(KISS)

Keep It Simple, Stupid

保持简单， 避免复杂性产生





## 设计模式的概念

设计模式: Design Patterns

### 定义

**解决特定问题的解决方案**

设计模式本身是一种发现, 而不是一种发明

### 应用场景

分析和设计阶段非常重要, 形成固定的风格和模式对开发阶段也非常有用. 

### 特点

- 让问题可以再架构级别得到解决
- 应用场景广泛,是对开发实践的总结和提炼
- 有效性经过了很好的验证和证明, 是开发人员经验的总结
- 具有可靠性和依赖性

------

设计模式类型

目的准则 和范围准则

创建型(Creational)与对象的创建有关

结构型(Structural)处理类或对象的组合

行为型(Behavioral)对类会或对象怎样交互和怎样分配职责进行描述

适用(范围)于类的设计模式: 工厂方法模式, 适配器模式, 解释器模式, 模板方法模式

类模式处理类和子类之间的关系, 这些关系通过继承来建立, 是静态的, 在编译时刻便确定下来了.

对象模式处理对象间的关系, 这些关系在运行时刻是可以变化的, 更具动态性. 

从某种意义上来说, 几乎所有模式都使用继承机制, 所以"类模式"只指那些集中于处理类间关系的模式, 而大部分模式都属于对象模式的范畴. 

创建型类模式将对象的部分创建工作延迟到子类, 而创建型对象模式则将它延迟到另一个对象中. 

结构型类模式使用继承机制来组合类, 而结构性对象模式则描述了对象的组装方式. 

行为型类模式使用继承描述算法和控制流,而行为型对象模式则描述一组对象怎样协作完成单个对象所无法完成的任务

------



## 抽象工厂模式

### 定义

Abstract Factory: 提供一个创建一系列相关或相互依赖对象的接口, 而无需指定他们具体的类

## 建造者模式 

### 定义

Builder: 将一个复杂对象的构建与它的表示分离, 使得同样的构建过程可以创建不同的表示

## 工厂方法模式

### 定义

Factory Method: 定义一个用于创建对象的接口, 让子类决定将哪一格类实例化. Factory Method使一个类的实例化延迟到其子类

## 原型模式

### 定义

Prototype: 用原型实例指定创建对象的种类, 并且通过拷贝这个原型来创建新的对象

## 单例模式

### 定义

Singleton: 保证一个类仅有一个实例, 并提供一个访问它的全局访问点. 

------



## 适配器模式

### 定义

Adapter: 将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

## 桥接模式

### 定义

Bridge: 将抽象部分与它的实现部分分离，使它们都可以独立地变化。

## 组合模式

### 定义

Composite（[组合模式](https://baike.baidu.com/item/组合模式)）：将对象组合成树形结构以表示“部分-整体”的层次结构。它使得客户对单个对象和复合对象的使用具有一致性。

## 装饰器模式

### 定义

Decorator（[装饰模式](https://baike.baidu.com/item/装饰模式)）：动态地给一个对象添加一些额外的职责。就扩展功能而言， 它比生成子类方式更为灵活。

## 外观模式

### 定义

Facade（[外观模式](https://baike.baidu.com/item/外观模式)）：为子系统中的一组接口提供一个一致的界面，Facade模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。

## 享元模式

Flyweight（[享元模式](https://baike.baidu.com/item/享元模式)）：运用共享技术有效地支持大量细粒度的对象。

## 代理模式

Proxy（[代理模式](https://baike.baidu.com/item/代理模式)）：为其他对象提供一个代理以控制对这个对象的访问。

------



## 责任链模式

Chain of Responsibility（[责任链模式](https://baike.baidu.com/item/责任链模式)）：为解除请求的发送者和接收者之间耦合，而使多个对象都有机会处理这个请求。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它。

## 命令模式

Command（[命令模式](https://baike.baidu.com/item/命令模式)）：将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可取消的操作。

## 解释器模式

Interpreter（解释器模式）：给定一个语言, 定义它的文法的一种表示，并定义一个解释器, 该解释器使用该表示来解释语言中的句子。

## 迭代器模式

Iterator（[迭代器模式](https://baike.baidu.com/item/迭代器模式)）：提供一种方法顺序访问一个聚合对象中各个元素，而又不需暴露该对象的内部表示。

## 中介模式

Mediator（[中介模式](https://baike.baidu.com/item/中介模式)）：用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。

## 备忘录模式

Memento（[备忘录模式](https://baike.baidu.com/item/备忘录模式)）：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到保存的状态。

## 观察者模式

Observer（[观察者模式](https://baike.baidu.com/item/观察者模式)）：定义对象间的一种一对多的依赖关系,以便当一个对象的状态发生改变时,所有依赖于它的对象都得到通知并自动刷新。

## 状态模式

State（[状态模式](https://baike.baidu.com/item/状态模式)）：允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它所属的类。

## 策略模式

Strategy（[策略模式](https://baike.baidu.com/item/策略模式)）：定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。本模式使得算法的变化可独立于使用它的客户。

## 模板方法模式

[Template Method](https://baike.baidu.com/item/Template Method)（模板方法模式）：定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。Template Method使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。

## 访问者模式

Visitor（[访问者模式](https://baike.baidu.com/item/访问者模式)）：表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作。



# 脚本编程

## 命令行参数

> 实现命令行参数 运行不一样的结果 适合于 工具开发
>
> 核心思路
>
> 1. sys.argv  >> 基于程序入口的相对路径
> 2. getopt
> 3. **argparse**

[argparse模块](https://docs.python.org/zh-cn/3/howto/argparse.html)

[标准库](https://docs.python.org/zh-cn/3/library/argparse.html)

[菜鸟指引](https://www.runoob.com/python/python-command-line-arguments.html)



# 网络编程

网络编程:使用*套接字*来达到进程间通信

, WEB开发

[官方指南](https://docs.python.org/zh-cn/3/howto/sockets.html)	

## Socket - 套接字

### 快速上手

思路, 常见函数的意义及用法

```python
"""
创建TCP服务器"""

# 创建服务器套接字
# 套接字与地址绑定
# 监听连接
# 服务器无限循环
# 接受客户端连接
# 通信循环
# 对话(recv/send)
# 关闭客户端套接字
# 关闭服务器套接字 # (可选)

```



```python
"""
创建TCP客户端"""

# 创建客户端套接字
# 尝试连接客户端
# 通信循环
# 对话(recv/send)
# 关闭客户端套接字
```

```python
"""
socketserver模块"""

# 创建 socketserver TCP服务器
```



### 理论原理

客户端/服务器架构: C/S架构

C/S架构网络编程思想: 服务器响应客户端请求之前, 必须进行一些初步的设置流程来为之后的工作做准备. 

服务器任务: 首先会创建多个**通信端点**, 它能够使服务器监听请求(无限重复侦听). 

客户端任务: 创建客户端的单一**通信端点**, 然后建立到服务器的连接. 

套接字: 通信端点

#### socket 概念

**表示方法**: IP地址: 端口号
**连接方式**: 通过传输层进行数据通信

TCP用主机的IP地址加上主机上的端口号作为TCP连接的端点，这种端点就叫做套接字（socket）或插口。

Socket是网络通信过程中端点的抽象表示，包含进行网络通信必需的五种信息：**连接使用的协议**，**本地主机的IP地址**，**本地进程的协议端口**，**远地主机的IP地址**，**远地进程的协议端口**。

网络上的两个程序通过一个双向的通信连接实现数据的交换，这个连接的一端称为一个socket。

建立网络通信连接至少要一对端口号(socket)。
socket本质是编程接口(API)，对TCP/IP的封装，TCP/IP也要提供可供程序员做网络开发所用的接口，这就是Socket编程接口；
HTTP是轿车，提供了封装或者显示数据的具体形式；Socket是发动机，提供了网络通信的能力。

socket通常也称作"套接字"，用于描述IP地址和端口，是一个通信链的句柄，可以用来实现不同虚拟机或不同计算机之间的通信。
在Internet上的主机一般运行了多个服务软件，同时提供几种服务。
每种服务都打开一个Socket，并绑定到一个端口上，不同的端口对应于不同的服务。
Socket正如其英文原义那样，像一个多孔插座。
一台主机犹如布满各种插座的房间，每个插座有一个编号，有的插座提供220伏交流电， 有的提供110伏交流电，有的则提供有线电视节目。 客户软件将插头插到不同编号的插座，就可以得到不同的服务。

#### socket 作用

**实现不同主机之间的进程间通信**

#### 不同电脑上的进程之间如何通信

**PID**: 进程号(Progress ID) 
**进程**: 运行的程序以及运行时用到的资源这个整体称之为进程

电脑上通过进程号(PID)来唯一标识一个进程

其实TCP/IP协议族已经帮我们解决了这个问题，网络层的“ip地址”可以唯一标识网络中的主机，而传输层的“协议+端口”可以唯一标识主机中的应用进程（进程）。
这样利用**ip地址，协议，端口**就可以标识网络的进程了，网络中的进程通信就可以利用这个标志与其它进程进行交互

> AF: address family 地址家族

端口对端口间通信: 网络端口, 进程端口. 

套接字: 计算机网络数据结构, 有两种类型的套接字:基于文件和面向网络的. 

进程间通信一般基于文件(*AF_LOCAL*), 主机间通信基于网络(*AF_INET*), AF_INET目前使用最为广泛.

套接字地址: *主机端口对*来实现唯一对象



创建套接字对象 >> 使用套接字传输数据 >>关闭套接字

**面向连接套接字** - *流套接字 / 虚拟电路*

> 特点说明: 通信之前必须先建立连接

这类连接类型的主要协议是 **传输控制协议:TCP**

通常需要配合IP协议进行网络主机, 所以这一部分一般被叫做 TCP/IP协议. 

为了创建TCP套接字, 必须使用 `SOCK_STREAM` 作为套接字类型. 

 **无连接套接字** - *数据报*

为了创建UDP套接字, 必须使用 `SOCK_DGRAM` 作为



# 文件处理

```python

```

# Python工匠

https://github.com/piglei/one-python-craftsman/tree/master

https://www.piglei.com

[//]: # (TODO 可以看看)


## 1.Python 工匠：善用变量来改善代码质量

## 变量和代码质量

作为『Python 工匠』系列文章的第一篇，我想先谈谈 『变量（Variables）』。因为如何定义和使用变量，一直都是学习任何一门编程语言最先要掌握的技能之一。

变量用的好或不好，和代码质量有着非常重要的联系。在关于变量的诸多问题中，为变量起一个好名字尤其重要。

### 内容目录

* [如何为变量起名](#如何为变量起名)
    * [1. 变量名要有描述性，不能太宽泛](#1-变量名要有描述性不能太宽泛)
    * [2. 变量名最好让人能猜出类型](#2-变量名最好让人能猜出类型)
        * [『什么样的名字会被当成 bool 类型？』](#什么样的名字会被当成-bool-类型)
        * [『什么样的名字会被当成 int/float 类型？』](#什么样的名字会被当成-intfloat-类型)
        * [其他类型](#其他类型)
    * [3. 适当使用『匈牙利命名法』](#3-适当使用匈牙利命名法)
    * [4. 变量名尽量短，但是绝对不要太短](#4-变量名尽量短但是绝对不要太短)
        * [使用短名字的例外情况](#使用短名字的例外情况)
    * [5. 其他注意事项](#5-其他注意事项)
* [更好的使用变量](#更好的使用变量)
    * [1. 保持一致性](#1-保持一致性)
    * [2. 尽量不要用 globals()/locals()](#2-尽量不要用-globalslocals)
    * [3. 变量定义尽量靠近使用](#3-变量定义尽量靠近使用)
    * [4. 合理使用 namedtuple/dict 来让函数返回多个值](#4-合理使用-namedtupledict-来让函数返回多个值)
    * [5. 控制单个函数内的变量数量](#5-控制单个函数内的变量数量)
    * [6. 及时删掉那些没用的变量](#6-及时删掉那些没用的变量)
    * [7. 能不定义变量就不定义](#7-能不定义变量就不定义)
* [结语](#结语)

## 如何为变量起名

在计算机科学领域，有一句著名的格言（俏皮话）：

> There are only two hard things in Computer Science: cache invalidation and naming things.
> 在计算机科学领域只有两件难事：缓存过期 和 给东西起名字
>
> -- Phil Karlton

第一个『缓存过期问题』的难度不用多说，任何用过缓存的人都会懂。至于第二个『给东西起名字』这事的难度，我也是深有体会。在我的职业生涯里，度过的最为黑暗的下午之一，就是坐在显示器前抓耳挠腮为一个新项目起一个合适的名字。

编程时起的最多的名字，还数各种变量。给变量起一个好名字很重要，**因为好的变量命名可以极大提高代码的整体可读性。**

下面几点，是我总结的为变量起名时，最好遵守的基本原则。

### 1. 变量名要有描述性，不能太宽泛

在**可接受的长度范围内**，变量名能把它所指向的内容描述的越精确越好。所以，尽量不要用那些过于宽泛的词来作为你的变量名：

- **BAD**: `day`, `host`, `cards`, `temp`
- **GOOD**:  `day_of_week`, `hosts_to_reboot`, `expired_cards`

### 2. 变量名最好让人能猜出类型

所有学习 Python 的人都知道，Python 是一门动态类型语言，它（至少在 [PEP 484](https://www.python.org/dev/peps/pep-0484/) 出现前）没有变量类型声明。所以当你看到一个变量时，除了通过上下文猜测，没法轻易知道它是什么类型。

不过，人们对于变量名和变量类型的关系，通常会有一些直觉上的约定，我把它们总结在了下面。

#### 『什么样的名字会被当成 bool 类型？』

布尔类型变量的最大特点是：它只存在两个可能的值**『是』** 或 **『不是』**。所以，用 `is`、`has` 等非黑即白的词修饰的变量名，会是个不错的选择。原则就是：**让读到变量名的人觉得这个变量只会有『是』或『不是』两种值**。

下面是几个不错的示例：

- `is_superuser`：『是否超级用户』，只会有两种值：是/不是
- `has_error`：『有没有错误』，只会有两种值：有/没有
- `allow_vip`：『是否允许 VIP』，只会有两种值：允许/不允许
- `use_msgpack`：『是否使用 msgpack』，只会有两种值：使用/不使用
- `debug`：『是否开启调试模式』，被当做 bool 主要是因为约定俗成

#### 『什么样的名字会被当成 int/float 类型？』

人们看到和数字相关的名字，都会默认他们是 int/float 类型，下面这些是比较常见的：

- 释义为数字的所有单词，比如：`port（端口号）`、`age（年龄）`、`radius（半径）` 等等
- 使用 _id 结尾的单词，比如：`user_id`、`host_id`
- 使用 length/count 开头或者结尾的单词，比如： `length_of_username`、`max_length`、`users_count`

**注意：**不要使用普通的复数来表示一个 int 类型变量，比如 `apples`、`trips`，最好用 `number_of_apples`、`trips_count` 来替代。

#### 其他类型

对于 str、list、tuple、dict 这些复杂类型，很难有一个统一的规则让我们可以通过名字去猜测变量类型。比如 `headers`，既可能是一个头信息列表，也可能是包含头信息的 dict。

对于这些类型的变量名，最推荐的方式，就是编写规范的文档，在函数和方法的 document string 中，使用 sphinx 格式（[Python 官方文档使用的文档工具](http://www.sphinx-doc.org/en/stable/)）来标注所有变量的类型。 

### 3. 适当使用『匈牙利命名法』

第一次知道『[匈牙利命名法](https://en.wikipedia.org/wiki/Hungarian_notation)』，是在 [Joel on Software 的一篇博文](http://www.joelonsoftware.com/articles/Wrong.html)中。简而言之，匈牙利命名法就是把变量的『类型』缩写，放到变量名的最前面。

关键在于，这里说的变量『类型』，并非指传统意义上的 int/str/list 这种类型，而是指那些和你的代码业务逻辑相关的类型。

比如，在你的代码中有两个变量：`students` 和 `teachers`，他们指向的内容都是一个包含 Person 对象的 list 。使用『匈牙利命名法』后，可以把这两个名字改写成这样：

students -> `pl_students`
teachers -> `pl_teachers`

其中 pl 是 **person list** 的首字母缩写。当变量名被加上前缀后，如果你看到以 `pl_` 打头的变量，就能知道它所指向的值类型了。

很多情况下，使用『匈牙利命名法』是个不错的主意，因为它可以改善你的代码可读性，尤其在那些变量众多、同一类型多次出现时。注意不要滥用就好。

### 4. 变量名尽量短，但是绝对不要太短

在前面，我们提到要让变量名有描述性。如果不给这条原则加上任何限制，那么你很有可能写出这种描述性极强的变量名：`how_much_points_need_for_level2`。如果代码中充斥着这种过长的变量名，对于代码可读性来说是个灾难。

一个好的变量名，长度应该控制在 **两到三个单词左右**。比如上面的名字，可以缩写为 `points_level2`。

**绝大多数情况下，都应该避免使用那些只有一两个字母的短名字**，比如数组索引三剑客 `i`、`j`、`k`，用有明确含义的名字，比如 person_index 来代替它们总是会更好一些。

#### 使用短名字的例外情况

有时，上面的原则也存在一些例外。当一些意义明确但是较长的变量名重复出现时，为了让代码更简洁，使用短名字缩写是完全可以的。但是为了降低理解成本，同一段代码内最好不要使用太多这种短名字。

比如在 Python 中导入模块时，就会经常用到短名字作为别名，像 Django i18n 翻译时常用的 `gettext` 方法通常会被缩写成 `_` 来使用*（from django.utils.translation import ugettext as _）*

### 5. 其他注意事项

其他一些给变量命名的注意事项：

- 同一段代码内不要使用过于相似的变量名，比如同时出现 `users`、`users1`、 `user3` 这种序列
- 不要使用带否定含义的变量名，用 `is_special` 代替 `is_not_normal`

## 更好的使用变量

前面讲了如何为变量取一个好名字，下面我们谈谈在日常使用变量时，应该注意的一些小细节。

### 1. 保持一致性

如果你在一个方法内里面把图片变量叫做 `photo`，在其他的地方就不要把它改成 `image`，这样只会让代码的阅读者困惑：『`image` 和 `photo` 到底是不是同一个东西？』

另外，虽然 Python 是动态类型语言，但那也不意味着你可以用同一个变量名一会表示 str 类型，过会又换成 list。**同一个变量名指代的变量类型，也需要保持一致性。**

### 2. 尽量不要用 globals()/locals()

也许你第一次发现 globals()/locals() 这对内建函数时很兴奋，迫不及待的写下下面这种极端『简洁』的代码：

```python
def render_trip_page(request, user_id, trip_id):
    user = User.objects.get(id=user_id)
    trip = get_object_or_404(Trip, pk=trip_id)
    is_suggested = is_suggested(user, trip)
    # 利用 locals() 节约了三行代码，我是个天才！
    return render(request, 'trip.html', locals())
​```

千万不要这么做，这样只会让读到这段代码的人（包括三个月后的你自己）痛恨你，因为他需要记住这个函数内定义的所有变量（想想这个函数增长到两百行会怎么样？），更别提 locals() 还会把一些不必要的变量传递出去。

更何况， [The Zen of Python（Python 之禅）](https://www.python.org/dev/peps/pep-0020/) 说的清清楚楚：**Explicit is better than implicit.（显式优于隐式）**。所以，还是老老实实把代码写成这样吧：

​```python
    return render(request, 'trip.html', {
        'user': user,
        'trip': trip,
        'is_suggested': is_suggested
    })
```

### 3. 变量定义尽量靠近使用

这个原则属于老生常谈了。很多人（包括我）在刚开始学习编程时，会有一个习惯。就是把所有的变量定义写在一起，放在函数或方法的最前面。

```python
def generate_trip_png(trip):
    path = []
    markers = []
    photo_markers = []
    text_markers = []
    marker_count = 0
    point_count = 0
    ... ...
​```

这样做只会让你的代码『看上去很整洁』，但是对提高代码可读性没有任何帮助。

更好的做法是，**让变量定义尽量靠近使用**。那样当你阅读代码时，可以更好的理解代码的逻辑，而不是费劲的去想这个变量到底是什么、哪里定义的？

### 4. 合理使用 namedtuple/dict 来让函数返回多个值

Python 的函数可以返回多个值：

​```python
def latlon_to_address(lat, lon):
    return country, province, city

# 利用多返回值一次解包定义多个变量
country, province, city = latlon_to_address(lat, lon)
```

但是，这样的用法会产生一个小问题：如果某一天， `latlon_to_address` 函数需要返回『城区（District）』时怎么办？

如果是上面这种写法，你需要找到所有调用 `latlon_to_address` 的地方，补上多出来的这个变量，否则 *ValueError: too many values to unpack* 就会找上你：

```python
country, province, city, district = latlon_to_address(lat, lon)
# 或者使用 _ 忽略多出来的返回值
country, province, city, _ = latlon_to_address(lat, lon)
```

对于这种可能变动的多返回值函数，使用 namedtuple/dict 会更方便一些。当你新增返回值时，不会对之前的函数调用产生任何破坏性的影响：

```python
# 1. 使用 dict
def latlon_to_address(lat, lon):
    return {
        'country': country,
        'province': province,
        'city': city
    }

addr_dict = latlon_to_address(lat, lon)

# 2. 使用 namedtuple
from collections import namedtuple

Address = namedtuple("Address", ['country', 'province', 'city'])

def latlon_to_address(lat, lon):
    return Address(
        country=country,
        province=province,
        city=city
    )

addr = latlon_to_address(lat, lon)
​```

不过这样做也有坏处，因为代码对变更的兼容性虽然变好了，但是你不能继续用之前 `x, y = f()` 的方式一次解包定义多个变量了。取舍在于你自己。

### 5. 控制单个函数内的变量数量

人脑的能力是有限的，研究表明，人类的短期记忆只能同时记住不超过十个名字。所以，当你的某个函数过长（一般来说，超过一屏的的函数就会被认为有点过长了），包含了太多变量时。请及时把它拆分为多个小函数吧。

### 6. 及时删掉那些没用的变量

这条原则非常简单，也很容易做到。但是如果没有遵守，那它对你的代码质量的打击是毁灭级的。会让阅读你代码的人有一种被愚弄的感觉。

​```python
def fancy_func():
    # 读者心理：嗯，这里定义了一个 fancy_vars
    fancy_vars = get_fancy()
    ... ...（一大堆代码过后）

    # 读者心理：这里就结束了？之前的 fancy_vars 去哪了？被猫吃了吗？
    return result
```

所以，请打开 IDE 的智能提示，及时清理掉那些定义了但是没有使用的变量吧。

### 7. 能不定义变量就不定义

有时候，我们定义变量时的心理活动是这样的：『嗯，这个值未来说不定会修改/二次使用』，让我们先把它定义成变量吧！

```python
def get_best_trip_by_user_id(user_id):
    user = get_user(user_id)
    trip = get_best_trip(user_id)
    result = {
        'user': user,
        'trip': trip
    }
    return result
```

其实，你所想的『未来』永远不会来，这段代码里的三个临时变量完全可以去掉，变成这样：

```python
def get_best_trip_by_user_id(user_id):
    return {
        'user': get_user(user_id),
        'trip': get_best_trip(user_id)
    }
```

没有必要为了那些可能出现的变动，牺牲代码当前的可读性。如果以后有定义变量的需求，那就以后再加吧。

## 结语

碎碎念了一大堆，不知道有多少人能够坚持到最后。变量作为程序语言的重要组成部分，值得我们在定义和使用它时，多花一丁点时间思考一下，那样会让你的代码变得更优秀。

这是『Python 工匠』系列文章的第一篇，不知道看完文章的你，有没有什么想吐槽的？请留言告诉我吧。

[>>>下一篇【2.编写条件分支代码的技巧】](2-if-else-block-secrets.md)

> 文章更新记录：
>
> - 2018.04.09：根据 @onlyice 的建议，添加了 namedtuple 部分

# 日志-Logging

> 相关文档:
>
> logging官方模块
>
> Python编程思想
>
> django主题文档

[标准库]( https://docs.python.org/zh-cn/3/library/logging.html )

[日志开发手册](https://docs.python.org/zh-cn/3.7/howto/logging-cookbook.html#logging-cookbook)

[日志基础教程](https://docs.python.org/zh-cn/3/howto/logging.html#logging-basic-tutorial)

[日志进阶教程](https://docs.python.org/zh-cn/3/howto/logging.html#advanced-logging-tutorial)

[掘金优质教程](https://juejin.im/post/5bc2bd3a5188255c94465d31#heading-6)

## 基本概念

日志库采用模块化方法，并提供几类组件：记录器、处理程序、过滤器和格式化程序。

### 记录器 - Logger

### 处理程序 - Handler

### 过滤器 - Filter

### 格式化程序 - Formatter

### 记录流程

记录器和处理程序中的日志事件信息流程如下图所示。

![](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202310132136726.png)

[LogRecd属性](https://docs.python.org/zh-cn/3.8/library/logging.html#logrecord-attributes)

| 属性名称        | 格式                  | 描述                                                         |
| :-------------- | :-------------------- | :----------------------------------------------------------- |
| args            | 不需要格式化。        | The tuple of arguments merged into `msg` to produce `message`, or a dict whose values are used for the merge (when there is only one argument, and it is a dictionary). |
| asctime         | `%(asctime)s`         | Human-readable time when the [`LogRecord`](https://docs.python.org/zh-cn/3.8/library/logging.html#logging.LogRecord) was created. By default this is of the form '2003-07-08 16:49:45,896' (the numbers after the comma are millisecond portion of the time). |
| created         | `%(created)f`         | Time when the [`LogRecord`](https://docs.python.org/zh-cn/3.8/library/logging.html#logging.LogRecord) was created (as returned by [`time.time()`](https://docs.python.org/zh-cn/3.8/library/time.html#time.time)). |
| exc_info        | 不需要格式化。        | Exception tuple (à la `sys.exc_info`) or, if no exception has occurred, `None`. |
| filename        | `%(filename)s`        | Filename portion of `pathname`.                              |
| funcName        | `%(funcName)s`        | Name of function containing the logging call.                |
| levelname       | `%(levelname)s`       | Text logging level for the message (`'DEBUG'`, `'INFO'`, `'WARNING'`, `'ERROR'`, `'CRITICAL'`). |
| levelno         | `%(levelno)s`         | Numeric logging level for the message (`DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`). 行数 |
| lineno          | `%(lineno)d`          | Source line number where the logging call was issued (if available). |
| message         | `%(message)s`         | The logged message, computed as `msg % args`. This is set when [`Formatter.format()`](https://docs.python.org/zh-cn/3.8/library/logging.html#logging.Formatter.format) is invoked. |
| module          | `%(module)s`          | 模块 (`filename` 的名称部分)。                               |
| msecs           | `%(msecs)d`           | Millisecond portion of the time when the [`LogRecord`](https://docs.python.org/zh-cn/3.8/library/logging.html#logging.LogRecord) was created. |
| msg             | 不需要格式化。        | The format string passed in the original logging call. Merged with `args` to produce `message`, or an arbitrary object (see [使用任意对象作为消息](https://docs.python.org/zh-cn/3.8/howto/logging.html#arbitrary-object-messages)). |
| name            | `%(name)s`            | Name of the logger used to log the call.                     |
| pathname        | `%(pathname)s`        | Full pathname of the source file where the logging call was issued (if available). |
| process         | `%(process)d`         | 进程ID（如果可用）                                           |
| processName     | `%(processName)s`     | 进程名（如果可用）                                           |
| relativeCreated | `%(relativeCreated)d` | Time in milliseconds when the LogRecord was created, relative to the time the logging module was loaded. |
| stack_info      | 不需要格式化。        | Stack frame information (where available) from the bottom of the stack in the current thread, up to and including the stack frame of the logging call which resulted in the creation of this record. |
| thread          | `%(thread)d`          | 线程ID（如果可用）                                           |
| threadName      | `%(threadName)s`      | 线程名（如果可用）                                           |

### 配置日志记录

## 日志级别

| 级别       | 数值 |
| :--------- | :--- |
| `CRITICAL` | 50   |
| `ERROR`    | 40   |
| `WARNING`  | 30   |
| `INFO`     | 20   |
| `DEBUG`    | 10   |
| `NOTSET`   | 0    |

| 级别       | 何时使用                                                     |
| :--------- | :----------------------------------------------------------- |
| `DEBUG`    | 细节信息，仅当诊断问题时适用。                               |
| `INFO`     | 确认程序按预期运行                                           |
| `WARNING`  | 表明有已经或即将发生的意外（例如：磁盘空间不足）。程序仍按预期进行 |
| `ERROR`    | 由于严重的问题，程序的某些功能已经不能正常执行               |
| `CRITICAL` | 严重的错误，表明程序已不能继续执行                           |

## 基础配置

```shell
# 日志格式

# 记录到文件

# 显示时间日期


```



#### 扩展示例

```python
import logging

class Log(object):
    def __init__(self, log_file, rotate_flag = 1):
       self.logger = logging.getLogger()
       #self.logger.setLevel(logging.DEBUG)
       self.logger.setLevel(logging.INFO)
       fmt = logging.Formatter("%(thread)020d %(asctime)-15s %(levelname)-8s %(filename)s[%(lineno)d]\
                                 \n\t%(message)s")
       if rotate_flag == 1:
           fh = TimedRotatingFileHandler(log_file, "midnight")
       else:
           fh = logging.FileHandler(log_file)
       fh.setFormatter(fmt)
       self.logger.addHandler(fh)

    def getLogger(self):
        return self.logger

log = Log(app_root_dir + '/log/' + app_name + ".log", 1).getLogger()
```







# 实现配置容器的几种方式

> 实现配置对象的几种方式
>
> 实现配置文件的几种方式

## ConfigManager

> 配置管理器



## 多配置读取

> 实现一种机制, 优先从文件,等地方读取

## 数据库对象

> 数据字典的形式

## 文件

### `ini`文件中

### `json`文件中

### `yaml`文件中 推荐



## python对象

> 存在于python对象中, 通过机制修改Python对象中的值:
>
> 涉及到几种场景: 
>
> 暂时修改
>
> 运行时有效
>
> 持久化修改

### 变量对象

> 直接存放于模块中

### 字典对象

### 元组对象

### 列表对象



## 内存对象

### 运行时对象

### redis对象

## 环境变量

> 动态的值, 会影响系统运行状态的值, 在系统运行开始时到结束前(运行时)有效.
>
> 对于不同的运行时来讲, 环境变量的值可能是不同的. 环境变量可以被运行时进程读取和修改, 以影响程序的运行状态. 
>
> python环境变量会依赖于系统变量
>
> os依赖于sys
>
> 

```python
import os

# 获取系统环境变量
env = os.environ  # 返回一个字典
env = os.environb  # 字节串的字典

# 获取单个系统环境变量
value = os.getenv('name')

# 设置环境变量
env['key'] = value
os.environ['key'] = value
os.putenv('name', 'value')


```





# 代码组织技巧

> 代码逻辑结构

## 自上而下

> 先实现主干流程, 再实现枝叶流程
>
> 主流程, 子流程

```python
def main():
    data = read_input_file('data.csv')
    report = generate_report(data)
    write_report(report)

def write_report(report):
    pass

def generate_report(data):
    pass

def read_input_file(filename):
    pass

# Application entry point -> call main()
if __name__ == '__main__':
	main()
```





## 自下而上

> 先实现具体细节, 在组装成完整作品

```python
def read_input_file(filename):
    pass

def generate_report(data):
    pass

def write_report(report):
    pass
def main ()
	data = read_input_file('data.csv')
	report = generate_report(data)
	write_report(report)

# Application entry point -> call main()
if __name__ == '__main__':
	main()
```



# 面向对象核心思想

## 类的应用场景



# REST API最佳实践

# 错误处理

> except Exception

## 参考资料

- [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)
- [错误和异常](https://docs.python.org/zh-cn/3/tutorial/errors.html)
- 首选err
- 次选exc

```python
# 获取错误类型
try:
    a = 5/0
except Exception as exc:
    print(f"{repr(exc)}")  # 使用repr函数
    print(f"{type(exc)}")  # 使用type
```

# 加密和签名

# 踩坑记录



## 20230710 递归导入错误(recursion import)

可能是因为, 文件名与包名相同导致的, 这会将文件名加入导入路径