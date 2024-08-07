# 业务开发



参考文档 : 

[python cookbook - O'Reilly](https://python3-cookbook.readthedocs.io/zh_CN/latest/)

# 整体思路

## 语法语义

### 类型注解

> `类型标注`	`类型注解`	`variable annotations`	`type annotations`

[类型标注语法](https://www.python.org/dev/peps/pep-0526/)

[类型标注支持-typing](https://docs.python.org/zh-cn/3/library/typing.html)

```python
# 这三种方法是等同的
Redis: int = None # 推荐
Redis:int; Redis = None
# 这是注解(comments)方式标注类型
Redis = None  # type: int
```

[PEP 484](https://www.python.org/dev/peps/pep-0484) introduced type hints, a.k.a. type annotations. While its main focus was function annotations, it also introduced the notion of type comments to annotate variables:

```python
# 'primes' is a list of integers
primes = []  # type: List[int]

# 'captain' is a string (Note: initial value is a problem)
captain = ...  # type: str

class Starship:
    # 'stats' is a class variable
    stats = {}  # type: Dict[str, int]
```

This PEP aims at adding syntax to Python for annotating the types of variables (including class variables and instance variables), instead of expressing them through comments:

代替用注解的方式标注类型

```python
primes: List[int] = []

captain: str  # Note: no initial value!

class Starship:
    stats: ClassVar[Dict[str, int]] = {}
```

```python
# 变量未初始化 (变量声明)
some_number: int           # variable without initial value
# 变量初始化
some_list: List[int] = []  # variable with initial value
```

函数返回值注解 `->`

# 零散记录

## FTP

```python
from ftplib import FTP
ftp = FTP()
ftp.connect("192.168.0.237", "21")
ftp.login("pacsftp", "ftp123456,")
```

## 解决unicode escape

```python
print(f"resolve: {chunk.encode('utf-8').decode('unicode_escape')}")

```



## 重写内部方法

`__len__` 用 `len()` 方法重写

`__reverse__` 用 `reverse()` 方法重写

## 模块功能说明

```python
# pyinotify >>  python 文件监听工具, 监测文件系统变化
```

## 接口API

在python中接口的本质是一个封装的函数或类, 当传入指定的参数时, 显式或隐式的作出反应

接口内可以封装任何有意义的指令

可以是执行某个任务, 







## 文件夹的循环读取

递归

## 图像识别

## 简易shell词汇分析工具

作用 : 将一段字符串拆分为命令,  Unix shell

```python
import shlex
rtn = shlex.split('echo wwfyde')  # -> 字符串
```



## UUID 通用唯一识别码

> 生成UUID

#### 理论

Universally Unique Identifier

## 判断数据类型使用typing模块

```python
import typing

print(isinstance([1, 2, 3], typing.Generator))
# 返回结果为False
```



[最佳实践: 1]( https://www.cnblogs.com/zhaoyingjie/category/895785.html )

插入当前时间到mysql数据库中

## 不定量传参思路

```python
# args参数是一个元组, kwargs参数是一个字典
def my_func(*args, **kwargs):
    print(f"{kwargs['name']}的年龄是{kwargs['age']}")
    print(type(args))


def main():
    my_func('a', 'b',name='wwfyde', age=24)


if __name__ == '__main__':
    main()
```

## 遍历文件和文件夹

核心思路, 先确定一个底层文件, 然后使用特定方法进行遍历

```python
# 遍历文件夹
def walkFile(file):
    for root, dirs, files in os.walk(file):
 
         # root 表示当前正在访问的文件夹路径
         # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            print(os.path.join(root, f))

        # 遍历所有的文件夹
        for d in dirs:
            print(os.path.join(root, d))
```



## 配置存储办法

- ~~配置文件(ini / conf, py)~~
- 存到数据库表中 (通过表 来读取到数据)
- 存到字典中 (python数据类型, 所有读取到的配置信息都建议以这种方式进行, **优于列表或元组结构**)
- 保持到redis, etcd, vault, consul, nats
- 
- 保存到json / xml文件

## 获取环境变量值

```python
import os
os.environ.get('$SHEL L')
```

## 多位置参数传入

  传入多个参数kw, 可以用 当字典处理来接入参数kw['db_config']   

## 密码安全

### 解决方案

[使用secrets 模块](https://docs.python.org/zh-cn/3.7/library/secrets.html)

[官方加密服务文档](https://docs.python.org/zh-cn/3.7/library/crypto.html)

[博客参考文档]( http://zhuoqiang.me/password-storage-and-python-example.html )

### 原理解析

密码经过非对称加密后再存储

密码的安全性等同于私钥的安全性。密码明文经过公钥加密。要还原密码明文，必须要相应的私钥才行。因此只要保证私钥的安全，密码明文就安全。私钥可以由某个受信任的人或机构来掌管，身份验证只需要用公钥就可以了

实际上，这也是 HTTPS/SSL 的理论基础。这里的关键是 **私钥的安全** ，如果私钥泄露，那密码明文就危险了。

当你忘了用户密码后，网站可以很贴心地通过你注册的 email 提醒你原来的密码是什么，那它肯定就是用了上面的某种方法了。这时候你就得小心了：既然网站能知道密码明文，那网站的工作人员就有可能知道，攻入这个网站的黑客也有了还原你密码明文的可能。

所以密码最好是以不可还原明文的方式来保存。通常利用哈希算法的单向性来保证明文以 **不可还原的有损方式** 进行存储。

这类方法的各个具体操作方式按安全性由低到高依次为：

1. 使用自己独创的哈希算法对密码进行哈希，存储哈希过的值

   哈希算法复杂，独创对理论要求很高。一般独创的哈希算法肯定没有公开经过时间检验的算法质量高，天才另算

2. 使用 MD5 或 SHA-1 哈希算法

   MD5 和 SHA-1 已破解。虽不能还原明文，但很容易找到能生成相同哈希值的替代明文。而且这两个算法速度较快，暴力破解相对省时，建议不要使用它们。

3. 使用更安全的 SHA-256 等成熟算法

   更加复杂的算法增加了暴力破解的难度。但如果遇到简单密码，用彩虹字典的暴力破解法，很快就能得到密码原文

4. 加入随机 salt 的哈希算法

   密码原文（或经过 hash 后的值）和随机生成的 salt 字符串混淆，然后再进行 hash，最后把 hash 值和 salt 值一起存储。验证密码的时候只要用 salt 再与密码原文做一次相同步骤的运算，比较结果与存储的 hash 值就可以了。这样一来哪怕是简单的密码，在进过 salt 混淆后产生的也是很不常见的字符串，根本不会出现在彩虹字典中。salt 越长暴力破解的难度越大

   具体的 hash 过程也可以进行若干次叠代，虽然 hash 叠代会增加碰撞率，但也增加暴力破解的资源消耗。就算真被破解了，黑客掌握的也只是这个随机 salt 混淆过的密码，用户原始密码依然安全，不用担心其它使用相同密码的应用。

上面这几种方法都不可能得到密码的明文，就算是系统管理员也没办法。对于那些真的忘了密码的用户，网站只能提供重置密码的功能了。

下面的 python 程序演示了如何使用 salt 加 hash 来单向转换密码明文

```python
import os
from hashlib import sha256
from hmac import HMAC

def encrypt_password(password, salt=None):
    """Hash password on the fly."""
    if salt is None:
        salt = os.urandom(8) # 64 bits.

    assert 8 == len(salt)
    assert isinstance(salt, str)

    if isinstance(password, unicode):
        password = password.encode('UTF-8')

    assert isinstance(password, str)

    result = password
    for i in range(10):
        result = HMAC(result, salt, sha256).digest()

    return salt + result
```

这里先随机生成 64 bits 的 salt，再选择 SHA-256 算法使用 `HMAC` 对密码和 salt 进行 10 次叠代混淆，最后将 salt 和 hash 结果一起返回。

使用的方法很简单：

```
hashed = encrypt_password('secret password')
```

下面是验证函数，它直接使用 encrypt_password 来对密码进行相同的单向转换并比较

```
def validate_password(hashed, input_password):
    return hashed == encrypt_password(input_password, salt=hashed[:8])

assert validate_password(hashed, 'secret password')
```

虽然只有简短几行，但借助 python 标准库帮助，这已经是一个可用于生产环境的高安全密码加密验证算法了。

总结一下用户密码的存储：

- 上善不战而屈人之兵。如果可能不要存任何密码信息 让别人（OpenID）来帮你做事，避开这个问题
- 如果非要自己认证，也只能存 **不可逆的有损密码信息** 。通过单向 hash 和 salt 来保证只有用户知道密码明文
- **绝对不能存可还原密码原文的信息** 。如果因为种种原因一定要可还原密码原文，请使用非对称加密，并保管好私钥

说完了密码的存储，后面有空会接着聊聊 [密码的传输](http://zhuoqiang.me/password-transport.html)

### 脚本shebang

```python
#!/usr/bin/python相当于写死了python路径;
#!/usr/bin/env python会去环境设置寻找python目录,推荐这种写法

```

## 从配置文件读取配置信息

configparser模块, 默认都是读取为字符串格式



## 字符转换

技术背景: python2的文档默认是 `ASCII`, python3的默认文档则是 `Unicode`

```python
# bytes to str  -> decode
a = b'wwfyde'
a.decode('utf-8')
# str to bytes
a = '霸气'
a_bytes = a.encode()

```

## XML处理

第三方库 : xmltodict, suds



## 图片上传/媒体上传

如果使用json文档类型, 需要将图像转换成base64



# 爬虫

## 绕过爬虫策略

### 伪装浏览器

如果使用 httpx, curl 时需要携带一些额外信息, Authorization, Cookie等

- User-Agent
- Referer
- Cookie
- Accept-Language

### 使用代理池

免费和付费代理, 旋转代理

### 避免过于频繁的访问和请求

### 使用动态加载技术

#### 1. **等待特定元素加载**

使用 `wait_for_selector` 等待页面上的特定元素加载完成：

```python
page.wait_for_selector("css=selector")
```

#### 2. **处理异步请求**

有时，数据通过异步请求加载，可以拦截网络请求来获取数据：

```python

def handle_route(route):
    if "api-endpoint" in route.request.url:
        route.continue_()

page.route("**/*", handle_route)
page.goto("https://example.com")
```

#### **执行自定义 JavaScript**

在页面上执行自定义 JavaScript 代码来获取动态数据：

```python
data = page.evaluate('''() => {
    return document.querySelector("selector-for-dynamic-content").innerText;
}''')
print(data)
```



#### **等待网络请求完成**

等待特定的网络请求完成：

```

```

```python
with page.expect_response("https://example.com/api-endpoint") as response_info:
    page.goto("https://example.com")
response = response_info.value
print(response.json())
```



### 处理验证码

### 分布式爬虫

### 模拟人类行为

### 使用缓存

## 爬取图片方案



 获取url 后直接下载, 

# 编程技巧

## 获取文件的路径

```python
import os.path
base_dir = os.path.dirname(os.path.abspath(__file__))
```



## 字典合并

```python
dict_a = dict(a=1, b=2)

dict_b = dict(c=3, d=4, b=3)

# 允许相同的键存在, 当值不同时, 默认取新的值
dict_merged = {**dict_a, **dict_b} 

d = {}
d.update(dict_a)
d.update(dict_b)

```

## 检查对象的内存使用情况

```python
import sys
x = 1
print(sys.getsizeof(x))
```



## 枚举变量

批量定义多个变量, 使用循环定义多个变量 

使用字典来缓存变量

其实需要用到字典映射来实现

```python
import threading


def demo(i):
    print(f"Hello Thread {i}")


if __name__ == '__main__':
    a = 5
    m = {}
    for i in range(a):
        t = threading.Thread(target=demo, args=[i])
        m[f"a_{i}"] = t

        t.start()

    for key, value in m.items():
        value.join()
        print(key)

```



## 使用模版变量

```python
from string import Template

t = Template("hello, ${name}, your order number is $order_id.")
s = t.substitute(name='hello', order_id=23)
print(s)
```

使用string.format

```shell
# 使用string.format
t = "hello, {name}."
s = t.format(name='世界')
```



# 不定长参数传递

参考 mysql.connector 的返回对象的 .connect()

## 核心思路

定义 config 函数来将配置添加到可能的值中, 同时针对不可能的值抛出错误或不作为



# 常见问题

## Python2 env问题记录

virtualenv 创建虚拟环境时 activate记录的是绝对地址 所以 当目录变更后 

`source venv/bin/activate`会失效

## 内存泄露

### 原因

python开发程序，内存泄露的几个基本原因：

1、存在循环引用，gc不能释放；

2、存在全局对象，该对象不断的变大，占据内存；

3、使用了c或者c++扩展，扩展内存溢出了；

真是麻烦...



### 解决方案

使用内存分析工具

```shell
pip install -U memory_profiler
```



## 内存占用

# 数据结构和算法

## 将序列分解为单独的变量

### 核心思路

利用, 元组, 列表自动拆包的特性

```python
l_meta = [1, 2, 3]
a, b, c = l_meta
t_meta = (1, 2)
e, f = t_meta
# 多重解包
l_meta_multi = [1, 2, (3, 4)]
g, h, (i, j) = l_meta_multi
```

## 从任意长度的可迭代对象中分解元素

### 核心思路

使用 `*表达式`

### 问题

需要从某个可迭代对象中分解成N个元素, 但是这个可迭代对象的长度可能超过N, 这会导致出现"分解的值过多(too many values to unpack)"的异常

```python
def drop_first_last(grades):
    first, *middle, last = grades
    return middle # middle的数据类型是 list

drop_first_last(1, 2, 3, 4, 5, 6)
# return [2, 3, 4, 5] -> list

```

## 保存最后N个元素

# *开发过程记录*

## 明确问题和需求

从视图中获取报告数据到数据库, 实时取, 并将所有的报告取过来, 从对方的数据接口中查询 

获取条件: 1, 根据根据检查数据; 2, 

## 设计程序



## 编写代码

# 接口文档示例

> 这是描述文档信息

## 报告主动上传接口

### 请求说明

| 请求地址     | /baidu.com            |
| ------------ | --------------------- |
| 中文数据编码 | UTF 8                 |
| 请求方式     | HTTPS                 |
| 调用方法     | completeReport Upload |

### 参数列表

| 参数       | 类型   | 是否必填 | 最大长度 | 描述                                                         | 示例值                                                    |
| :--------- | :----- | :------- | :------- | :----------------------------------------------------------- | :-------------------------------------------------------- |
| app_id     | String | 是       | 32       | 支付宝分配给开发者的应用ID                                   | 2014072300007148                                          |
| method     | String | 是       | 128      | 接口名称                                                     | alipay.trade.create                                       |
| format     | String | 否       | 40       | 仅支持JSON                                                   | JSON                                                      |
| charset    | String | 是       | 10       | 请求使用的编码格式，如utf-8,gbk,gb2312等                     | utf-8                                                     |
| sign_type  | String | 是       | 10       | 商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2 | RSA2                                                      |
| sign       | String | 是       | 344      | 商户请求参数的签名串，详见[签名](https://docs.open.alipay.com/291/105974) | 详见示例                                                  |
| timestamp  | String | 是       | 19       | 发送请求的时间，格式"yyyy-MM-dd HH:mm:ss"                    | 2014-07-24 03:07:50                                       |
| version    | String | 是       | 3        | 调用的接口版本，固定为：1.0                                  | 1.0                                                       |
| notify_url | String | 否       | 256      | 支付宝服务器主动通知商户服务器里指定的页面http/https路径。   | http://api.test.alipay.net/atinterface/receive_notify.htm |

### 响应参数

| 参数     | 类型   | 是否必填 | 最大长度 | 描述                                                         | 示例值                                                       |
| :------- | :----- | :------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| code     | String | 是       | -        | 网关返回码,[详见文档](https://docs.open.alipay.com/common/105806) | 40004                                                        |
| msg      | String | 是       | -        | 网关返回码描述,[详见文档](https://docs.open.alipay.com/common/105806) | Business Failed                                              |
| sub_code | String | 否       | -        | 业务返回码，参见具体的API接口文档                            | ACQ.TRADE_HAS_SUCCESS                                        |
| sub_msg  | String | 否       | -        | 业务返回码描述，参见具体的API接口文档                        | 交易已被支付                                                 |
| sign     | String | 是       | -        | 签名,[详见文档](https://docs.open.alipay.com/291/106074)     | DZXh8eeTuAHoYE3w1J+POiPhfDxOYBfU<br />Nn1lkeT/V7P4zJdyojWEa6IZs6Hz0yDW5Cp/v<br />iufUb5I0/V5WENS3OYR8zRedqo6D+fUTdLHdc+EFy<br />CkiQhBxIzgngPdPdfp1PIS7BdhhzrsZHbRqb7o4k3Dxc<br />+AAnFauu4V6Zdwczo= |

### 请求示例

```json
{
    "type": "voice",
    "receiver_id": 1902538057,
    "sender_id": 2489518277,
    "created_at": "Mon Jul 16 18:09:20 +0800 2012",
    "text": "发了一个语音消息",
    "data": {
        "vfid": 821804459,    // 发送者用此ID查看语音
        "tovfid": 821804469  // 接收者用此ID查看语音
    }
}
```



# Discord

## Links

- https://discord.com/developers/applications
- https://discord.com/developers/docs/intro
