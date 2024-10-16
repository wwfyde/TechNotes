# Python Packages

## tips

- 复制选择器
- 通过codegen 生成模版

# Python Standard Libraries



## os-操作系统

### 简介说明

[官方文档](https://docs.python.org/zh-cn/3/library/os.path.html#module-os.path)

annotations: 这official descriptions  on python document

注解: 中文翻译和理解

## os.path-常见路径操作

`path`: 路径	`name` : 名称	`dir`: 目录

`dirname`: 文件目录名

`path`: 路径(文件或目录所在路径)

`abspath`: 绝对路径

`relpath`: 相对路径

`filename`: 文件名

`basename`: 文件/文件夹基本名

`file_extension`: 文件扩展名, suffix



### os.getcwd():

**Annotations**: get current work dictionary 

**注解**: 查看当前所在路径

### os.path.abspath(path:str)

**Annotations**: Return a normalized absolutized version of the pathname `path`.

**注解**: 返回路径参数的绝对路径

### os.path.basename(path)

注解: 返回路径的基本名称(文件名/目录名)

## pathlib-面向对象的文件系统路径

## shutil

## sys-python系统工具

### sys.argv ->list

> 获取脚本名称
>
> 在 ipython / python 环境时 会返回空字符串, 这时候没有脚本名称

一个列表，其中包含了被传递给 Python 脚本的命令行参数。 `argv[0]` 为脚本的名称（是否是完整的路径名取决于操作系统）。如果是通过 Python 解释器的命令行参数 [`-c`](https://docs.python.org/zh-cn/3.7/using/cmdline.html#cmdoption-c) 来执行的， `argv[0]` 会被设置成字符串 `'-c'` 。如果没有脚本名被传递给 Python 解释器， `argv[0]` 为空字符串。



```python
import sys
print(sys.argv[0]) # 返回脚本的名称 linux中为相对路径
```



## subprocess-子进程管理

## queue模块

[官方文档](https://docs.python.org/zh-cn/3/library/queue.html#module-queue)

### 简要描述

### Queue

队列库，队列就是先进先出(First Input First Output)型的一种数据结构，但是这个库也可以表示栈，就是先进后出型(Last Input First Output)的数据结构，不仅如此，还有一种按优先级别的队列结构。

队列一般用于解决多线程问题，在生产者消费者模式中经常用到。队列操作是原子性的，队列是线程安全的，不能保证进程安全，`multiprocessing.Queue` 保证进程安全。

队列只支持浅拷贝，不支持深拷贝，如果想用深拷贝的话可以使用 heapq

或者用到 列表 也可以实现队列的功能，append 和 pop 函数

#### 它们分别的类是：

```python
Queue.Queue(maxsize=0)                    FIFO
Queue.LifoQueue(maxsize=0)                LIFO
Queue.PriorityQueue(maxsize=0)            优先级别队列
```

#### 这个库中的常用方法：（通用）

1. Queue.qsize()                                    返回队列已用大小

1. Queue.empty()                                    返回队列是否为空

1. Queue.full()                                     返回队列是否为满

1. Queue.put(item[,block[,timeout]])                往队列中加入数据

>block为False或者是True，表示是否为阻塞型，默认为True，timeout为如果阻塞最多等待时间，默认为None。
>阻塞型，如果队列为非空，如果为设定timeout，则阻塞进程等待空闲为止，如果设定了timeout，超时仍未空闲则报错。
>非阻塞型，如果队列为非空，则报错。
>
>5. Queue.put_nowait(item)                           往队列中写入数据
>     即 Queue.put()  非阻塞型
>6. Queue.get([block[,timeout]])                     从队列中取得数据
>     默认block为True,timeout为None
>7. Queue.get_nowait()                               从队列中取得数据
>     即 Queue.get()  非阻塞型
>8. Queue.join()                                     将队列加入主线程
>     将队列加入主线程之后，即主线程等该任务结束之后再进行下一个任务，阻塞线程的继续。

#### Queue

因为 Queue 是线程安全的，所以在多线程中用来同步数据。

- Queue.not_empty 和 Queue.empty() 严格来说是不一样的，前者是 `_threading.Condition` ，后者是计算 `Queue._qsize` 不过两者都可以用来判断队列是否已满，两者都是原子操作，线程安全的，not_empty 还是一个上下文管理器，可以作为一个线程锁来使用。
- Queue.task_done 在完成一项工作后，给队列计数器减一，如果不进行这项操作，从队列中取出数据队列仍不知，使用 join 则会永久阻塞进程，常用消费者线程中使用
- Queue.join 阻塞主线程，在队列结束后再继续执行。task_done 和 join 是一起使用的，只有使用 task_done 表示从队列中取出数据成功之后，join 阻塞主线程才知道结束，否则会一直阻塞不会结束。

```python
# -*- coding: utf-8 -*-

import time
import Queue
import threading


def write(q):
    for i in range(10):
        q.put(i)
        print 'put', i


def read(q):
    while 1:
        time.sleep(0.5)
        print 'get', q.get()
        # q.task_done()


if `__name__` == '`__main__`':
    q = Queue.Queue()
    threads = []
    threads.append(threading.Thread(target=write, args=(q, )))
    threads.append(threading.Thread(target=read, args=(q, )))
    for t in threads:
        t.setDaemon(True)
        t.start()
    q.join()
    print 'queue done. '
```

- 将消费者和生产者都设置为守护线程，为了消费者进程阻塞主进程结束
- 将消费者时间设置长一些，为了保证消费者不会提前导致队列为空，程序结束。

这样就可以看到 task_done 可以引导队列结束并终止主流程。

为什么不用

```
    while 1:
        time.sleep(0.5)
        if q.empty():
            break
        print 'get', q.get()
        # q.task_done()
```

或者

```
    while q.not_empty:
        time.sleep(0.5)
        print 'get', q.get()
        # q.task_done()

```

之类的结束消费者进程,因为消费者和生产者之间的耗时不一定，且 empty 的判断也不一定准确，可能在消费者快于生产者的情况下，队列有可能为空。

在消费者快于生产者的情况下，队列随时可能为空，如何准确的识别程序结束

1. 判断线程数，如果生产者线程全部结束，即可认为程序已经结束，或者几近结束 (不准确，忽略了消费者耗时)
2. 从队列中取数据设置超时时间，阻塞消费者。
3. 在消费者完成的最后添加一个特殊标志，不过需注意数量要匹配上消费者的数目

在以上三种方式中，都不再需要 task_done 和 join ，线程也最好是非守护线程。不过如果有这种需求，可以考虑使用消息队列的发布订阅模型，而不是队列的生产者消费者模型。

```
# -*- coding: utf-8 -*-

import time
import Queue
import threading


def write(q):
    for i in range(10):
        q.put(i)
        print 'put', i
        time.sleep(1)

    q.put(None)


def read(q):
    while 1:
    # while q.not_empty:
        time.sleep(0.5)
        # if q.empty():
        #     break
        item = q.get()
        print 'get', item
        if item == None:
            break
        # q.task_done()


if `__name__` == '`__main__`':
    q = Queue.Queue()
    threads = []
    threads.append(threading.Thread(target=write, args=(q, )))
    threads.append(threading.Thread(target=read, args=(q, )))
    for t in threads:
        # t.setDaemon(True)
        t.start()
    # q.join()

```

#### 一个小例子

```python

import Queue

#FIFO
a = Queue.Queue(4)
a.join()

for i in range(4):
	a.put(i)

for i in range(4):
	print a.get(),
	a.task_done()

print

b = Queue.LifoQueue(4)
b.join()

for i in range(4):
	b.put(i)

for i in range(4):
	print b.get(),
	b.task_done()
```


#### 队列的遍历

```
import Queue

t = Queue.Queue()
t.put({0:"0000"})
t.put({1:"0001"})
t.put({2:"0010"})

try:
    while not t.empty():
        print t.get()
except Exception,e:
    print e
```

运行结果

```
windard@windard:~/Desktop/python$ python test.py
{0: '0000'}
{1: '0001'}
{2: '0010'}

```


#### 分布式消息队列

queue_manager.py

```
# -*- coding: utf-8 -*-

import random
import Queue

from multiprocessing.managers import BaseManager


class QueueManager(BaseManager):
    pass


if `__name__` == '`__main__`':

    task_queue = Queue.Queue()
    result_queue = Queue.Queue()


    QueueManager.register('get_task_queue', callable=lambda :task_queue)
    QueueManager.register('get_result_queue', callable=lambda :result_queue)

    manager = QueueManager(address=('', 5000), authkey='abc')

    manager.start()


    task = manager.get_task_queue()
    result = manager.get_result_queue()

    for i in range(10):
        n = random.randrange(100)
        print 'put task %s ...' % n
        task.put(n)

    print 'try get result ...'

    for i in range(10):
        r = result.get(timeout=10)
        print 'result is %s' % r

    manager.shutdown()

```


queue_worker.py

```
# -*- coding: utf-8 -*-

import time
import Queue

from multiprocessing.managers import BaseManager


class QueueManager(BaseManager):
    pass


if `__name__` == '`__main__`':

    QueueManager.register('get_task_queue')
    QueueManager.register('get_result_queue')

    server_addr = ('127.0.0.1', 5000)

    print 'connect to server %s:%d ...' % server_addr

    m = QueueManager(address=server_addr, authkey='abc')
    m.connect()

    task = m.get_task_queue()
    result = m.get_result_queue()


    for i in range(10):
        try:
            n = task.get(timeout=1)
            print 'run task %d * %d' % (n, n)
            r = '%d * %d = %d' % (n, n, n * n)
            time.sleep(n * 0.1)
            result.put(r)
        except Queue.Empty:
            print 'task queue is empty'

    print 'worker exit.'

```


### 参考链接

[使用 Python 进行线程编程](https://www.ibm.com/developerworks/cn/aix/library/au-threadingpython/)



## **configparser**-[配置解析器](https://docs.python.org/3/library/configparser.html)

```python
#!/usr/bin/env python
# _*_coding:utf-8_*_

"""
使用官方库, 读取配置, 注意配置文件的编写标准
configpaser参考文档:
"""
import os.path
import sys
import platform
import configparser

config_path = os.path.dirname(`__file__`) + '/config.conf'
config_path2 = os.path.dirname(`__file__`) + '/config2.conf'
print(config_path)
# config_path_insert = os.path.dirname(os.path.dirname(`__file__`)) + '/etc/' + 'hisfep.conf'


def get_config():
    """
    获取配置信息
    :return: conf对象
    """
    # 初始化配置文件对象
    conf = configparser.ConfigParser()
    # 从文件中读取配置
    conf.read(config_path, encoding="utf-8")
    return conf


def read_config():
    """
    读取配置信息
    :return:
    """
    __conf = get_config()

    # 读取 单个值
    db_port = __conf.get('DB_ORACLE', 'db_port')
    print(db_port)

    # 读取为数值类型
    e = __conf.getint('APP', 'inst_id')
    print(e)

    # 读取所有的配置块
    sections = __conf.sections()
    items = __conf.items()
    for items in items:
        print(items)
    print(sections)

    # 读取单项配置的所有信息-并转化为字典
    app = dict(__conf['APP'])
    print(f'{app}')



# 写入配置到配置文件(覆盖 追加)
def write_config():
    """
    常见需求:
    1. 追加配置块(避免覆盖)
    2. 重写配置文件

    :return:
    """

    # 追加配置块
    config_write = configparser.ConfigParser()

    config_write['APP2'] = {"a": 1}
    config_write['APP2'] = {"b": 1}

    with open(config_path, 'w+') as config_file:
        config_write.write(config_file)
        pass


# 插入配置文件 使用字典追加的方式 update() 追加字典 setdefault

def modify_config_dict():

    config = configparser.ConfigParser()
    config.read(config_path)

    my_dict = {
        "c": '1',
        "d": '2'
    }

    # 增加 / 修改 / 删除
    config['APP'].update(my_dict)
    config['APP'].setdefault('e', '2')
    config['APP'].setdefault('e', '3')
    config['APP'].pop('ris_db_type')
    config.set('APP', 'b', '1')
    with open(config_path, 'w') as cfg:
        config.write(cfg)


def modify_config():
    """
    修改 / 增加 / 删除 配置信息
    实现思路:
    set函数(推荐)
    或者利用字典特性(参考modify_config_dict方法)
    :return:
    """
    config = configparser.ConfigParser()

    # 读取配置信息到 config流中
    config.read(config_path, encoding='utf-8')

    # 修改配置文件 (必须先读取配置文件)
    config.set('APP', 'db_type', '33')

    # 当字段未知时 添加字段
    config.set('APP', 'db_type2', '33')

    # 删除配置项
    config.remove_option('APP', 'db_type')

    # 删除配置块
    config.remove_section('MY_TEST')
    config.remove_section('APP2')

    # 增加配置块
    # config.has_section('APP')
    # config.add_section('MY_TEST')
    # config.set('MY_TEST', 'name', 'wwfyde')

    # 测试不先添加直接set (不通过)
    # config.set('MY_TEST2', 'age', '10')

    # 写入配置信息到 文件中
    with open(config_path, 'w+', encoding='utf-8') as f:
        config.write(f)


def write_config_from_file():

    conf = configparser.ConfigParser(interpolation=configparser.ExtendedInterpolation())
    conf.read_string(open('config.ini', 'r').read())
    with open(config_path2, 'w+') as f:
        conf.write(f)
    # print(conf)
    # conf.add_section('mytest')
    # conf.set('mytest', 'a', '2')
    # with open(config_path, 'w') as f:
    #     conf.write(f)


if `__name__` == '`__main__`':
    """
    测是
    """
    # a = __conf.get('APP', 'a')
    # print(a)
    # insert_config()
    # write_config2()

    # read_config()
    # with open('config.ini', 'r') as f:
    #     print(f.read())
    # 判断是否字典对象
    # modify_config()
    modify_config_dict()

```

## **argparser**-解析命令行

为了解析命令行选项，你首先要创建一个 `ArgumentParser` 实例， 并使用 `add_argument()` 方法声明你想要支持的选项。 在每个 `add_argument()` 调用中，`dest` 参数指定解析结果被指派给属性的名字。 `metavar` 参数被用来生成帮助信息。`action` 参数指定跟属性对应的处理逻辑， 通常的值为 `store` ,被用来存储某个值或将多个参数值收集到一个列表中。 下面的参数收集所有剩余的命令行参数到一个列表中。在本例中它被用来构造一个文件名列表：

```python
parser.add_argument(dest='filenames',metavar='filename', nargs='*')
```

下面的参数根据参数是否存在来设置一个 `Boolean` 标志：

```python
parser.add_argument('-v', dest='verbose', action='store_true',
                    help='verbose mode')
```

下面的参数接受一个单独值并将其存储为一个字符串：

```python
parser.add_argument('-o', dest='outfile', action='store',
                    help='output file')
```

下面的参数说明允许某个参数重复出现多次，并将它们追加到一个列表中去。 `required` 标志表示该参数至少要有一个。`-p` 和 `--pat` 表示两个参数名形式都可使用。

```python
parser.add_argument('-p', '--pat',metavar='pattern', required=True,
                    dest='patterns', action='append',
                    help='text pattern to search for')
```

最后，下面的参数说明接受一个值，但是会将其和可能的选择值做比较，以检测其合法性：

```
parser.add_argument('--speed', dest='speed', action='store',
                    choices={'slow','fast'}, default='slow',
                    help='search speed')
```

一旦参数选项被指定，你就可以执行 `parser.parse()` 方法了。 它会处理 `sys.argv` 的值并返回一个结果实例。 每个参数值会被设置成该实例中 `add_argument()` 方法的 `dest` 参数指定的属性值。

还很多种其他方法解析命令行选项。 例如，你可能会手动的处理 `sys.argv` 或者使用 `getopt` 模块。 但是，如果你采用本节的方式，将会减少很多冗余代码，底层细节 `argparse` 模块已经帮你处理了。 你可能还会碰到使用 `optparse` 库解析选项的代码。 尽管 `optparse` 和 `argparse` 很像，但是后者更先进，因此在新的程序中你应该使用它。



## threading.Thread-多线程

## collections

### deque(双端队列)

## **gc**-[垃圾回收](https://docs.python.org/zh-cn/3/library/gc.html)

> garbage collection 



## re-正则表达式

> 第三方模块 regex 值得学习 和 xpath

[官方参考文档](https://docs.python.org/zh-cn/3/library/re.html)

[相关笔记](网络基础.md#RE模块的高级使用)

> 出现双转义的原因是:正则表达式中的转义需要用到 `\` 同时正则表达式的特殊字符需要用到 `\`  python为了识别这个反斜杠时,会有限作为python转义字符使用, 因此会自动屏蔽一次反斜杠, 所以需要在加一个反斜杠才能表示正则表达式中的转义字符标识

正则表达式使用反斜杠（`'\'`）来表示特殊形式，或者把特殊字符转义成普通字符。 而反斜杠在普通的 Python 字符串里也有相同的作用，所以就产生了冲突。比如说，要匹配一个字面上的反斜杠，正则表达式模式不得不写成 `'\\\\'`，因为正则表达式里匹配一个反斜杠必须是 `\\` ，而每个反斜杠在普通的 Python 字符串里都要写成 `\\` 。

解决办法是对于正则表达式样式使用 Python 的原始字符串表示法；在带有 `'r'` 前缀的字符串字面值中，反斜杠不必做任何特殊处理。 因此 `r"\n"` 表示包含 `'\'` 和 `'n'` 两个字符的字符串，而 `"\n"` 则表示只包含一个换行符的字符串。 样式在 Python 代码中通常都会使用这种原始字符串表示法来表示。

### 正则字符串:`r'string'`

作用:r声明的字符串, 其中的`\`都不会被转义

```python
# 一般情况下
data_orig = '\\\w'
data_re = r'\\w'  # 这两种写法是一样的, 推荐使用正则字符串
```

### 原始字符记法

> 原始字符标记法同样支持 `\n` `\r` `\t`这些字符 

原始字符串记法 (`r"text"`) 保持正则表达式正常。否则，每个正则式里的反斜杠(`'\'`) 都必须前缀一个反斜杠来转义。比如，下面两行代码功能就是完全一致的

```
>>> re.match(r"\W(.)\1\W", " ff ")
<re.Match object; span=(0, 4), match=' ff '>
>>> re.match("\\W(.)\\1\\W", " ff ")
<re.Match object; span=(0, 4), match=' ff '>
```

当需要匹配一个字符反斜杠，它必须在正则表达式中转义。在原始字符串记法，就是 `r"\\"`。否则就必须用 `"\\\\"`，来表示同样的意思

```python
>>> re.match(r"\\", r"\\")
<re.Match object; span=(0, 1), match='\\'>
>>> re.match("\\\\", r"\\")
<re.Match object; span=(0, 1), match='\\'>
```

### 正则表达式语法

一个正则表达式（或RE）指定了一集与之匹配的字符串；模块内的函数可以	让你检查某个字符串是否跟给定的正则表达式匹配（或者一个正则表达式是否匹配到一个字符串，这两种说法含义相同）。

正则表达式可以拼接； 如果 *A* 和 *B* 都是正则表达式， 那么 *AB* 也是正则表达式。 通常， 如果字符串 *p* 匹配 *A* 并且另一个字符串 *q* 匹配 *B*, 那么 *pq* 可以匹配 AB。除非 *A* 或者 *B* 包含低优先级操作，*A* 和 *B* 存在边界条件；或者命名组引用。所以，复杂表达式可以很容易的从这里描述的简单源语表达式构建。



正则表达式可以包含普通或者特殊字符。绝大部分普通字符，比如 `'A'`, `'a'`, 或者 `'0'`，都是最简单的正则表达式。它们就匹配自身。你可以拼接普通字符，所以 `last` 匹配字符串 `'last'`.

有些字符，比如 `'|'` 或者 `'('`，属于特殊字符。 特殊字符既可以表示它的普通含义， 也可以影响它旁边的正则表达式的解释。

重复修饰符 (`*`, `+`, `?`, `{m,n}`, 等) 不能直接嵌套。这样避免了非贪婪后缀 `?` 修饰符，和其他实现中的修饰符产生的多义性。要应用一个内层重复嵌套，可以使用括号。 比如，表达式 `(?:a{6})*` 匹配6个 `'a'` 字符重复任意次数。

|       字符       |                             说明                             |
| :--------------: | :----------------------------------------------------------: |
|       `.`        |          (点) 在默认模式，匹配除了换行的任意字符。           |
|       `^`        |                 (插入符号) 匹配字符串的开头                  |
|       `$`        |              匹配字符串尾或者换行符的前一个字符              |
|       `*`        | 对它前面的正则式匹配0到任意次重复， 尽量多的匹配字符串。 `ab*` 会匹配 `'a'`， `'ab'`， 或者 `'a'``后面跟随任意个 ``'b'`。 |
|       `+`        | 对它前面的正则式匹配1到任意次重复。 `ab+` 会匹配 `'a'` 后面跟随1个以上到任意个 `'b'`，它不会匹配 `'a'`。 |
|       `?`        | 对它前面的正则式匹配0到1次重复。 `ab?` 会匹配 `'a'` 或者 `'ab'`。 |
| `*?`, `+?`, `??` | `'*'`, `'+'`，和 `'?'` 修饰符都是 *贪婪的*；它们在字符串进行尽可能多的匹配。有时候并不需要这种行为。如果正则式 `<.*>` 希望找到 `'<a> b <c>'`，它将会匹配整个字符串，而不仅是 `'<a>'`。在修饰符之后添加 `?` 将使样式以 *非贪婪或者最小* 方式进行匹配； 尽量 少 的字符将会被匹配。 使用正则式 `<.*?>` 将会仅仅匹配 `'<a>'`。 |
|      `{m}`       | 对其之前的正则式指定匹配 *m* 个重复；少于 *m* 的话就会导致匹配失败。比如， `a{6}` 将匹配6个 `'a'` , 但是不能是5个。 |
|     `{m,n}`      | 对正则式进行 *m* 到 *n* 次匹配，在 *m* 和 *n* 之间取尽量多。 |
|     `{m,n}?`     |      前一个修饰符的非贪婪模式，只匹配尽量少的字符次数。      |
|       `\`        | 转义特殊字符（允许你匹配 `'*'`, `'?'`, 或者此类其他），或者表示一个特殊序列； |
|       `[]`       |                     用于表示一个字符集合                     |
|       `|`        | `A|B`,*A* 和 *B* 可以是任意正则表达式，创建一个正则表达式，匹配 *A* 或者 *B*. 任意个正则表达式可以用 `|`连接 \| 管道的作用域是左边或者右边, 局部有效时需要用到组合 |
|     `(...)`      | （组合），匹配括号内的任意正则表达式，并标识出组合的开始和结尾 |
|    (?P<name>)    | （命名组合）类似正则组合，但是匹配到的子串组在外部是通过定义的 *name* 来获取的。引用方法(?P=quote) |
|                  | 反向引用一个命名组合；它匹配前面那个叫 *name* 的命名组中匹配到的串同样的字串。 |

```
re_test1 = '^wwfyde|asa[0-9]+$'
re_test2 = '^(wwfyde|asa)[0-9]+$'
```

#### []

用于表示一个字符集合。在一个集合中：

- 字符可以单独列出，比如 `[amk]` 匹配 `'a'`， `'m'`， 或者 `'k'`。

- 可以表示字符范围，通过用 `'-'` 将两个字符连起来。比如 `[a-z]` 将匹配任何小写ASCII字符， `[0-5][0-9]` 将匹配从 `00` 到 `59` 的两位数字， `[0-9A-Fa-f]` 将匹配任何十六进制数位。 如果 `-` 进行了转义 （比如 `[a\-z]`）或者它的位置在首位或者末尾（如 `[-a]` 或 `[a-]`），它就只表示普通字符 `'-'`。
- 特殊字符在集合中，失去它的特殊含义。比如 `[(+*)]` 只会匹配这几个文法字符 `'('`, `'+'`, `'*'`, or `')'`。

- 字符类如 `\w` 或者 `\S` (如下定义) 在集合内可以接受，它们可以匹配的字符由 [`ASCII`](https://docs.python.org/zh-cn/3/library/re.html#re.ASCII) 或者 [`LOCALE`](https://docs.python.org/zh-cn/3/library/re.html#re.LOCALE) 模式决定。

- 不在集合范围内的字符可以通过 *取反* 来进行匹配。如果集合首字符是 `'^'` ，所有 *不* 在集合内的字符将会被匹配，比如 `[^5]` 将匹配所有字符，除了 `'5'`， `[^^]` 将匹配所有字符，除了 `'^'`. `^` 如果不在集合首位，就没有特殊含义。
- 在集合内要匹配一个字符 `']'`，有两种方法，要么就在它之前加上反斜杠，要么就把它放到集合首位。比如， `[()[\]{}]` 和 `[]()[{}]` 都可以匹配括号。

- [Unicode Technical Standard #18](https://unicode.org/reports/tr18/) 里的嵌套集合和集合操作支持可能在未来添加。这将会改变语法，所以为了帮助这个改变，一个 [`FutureWarning`](https://docs.python.org/zh-cn/3/library/exceptions.html#FutureWarning) 将会在有多义的情况里被 `raise`，包含以下几种情况，集合由 `'['` 开始，或者包含下列字符序列 `'--'`, `'&&'`, `'~~'`, 和 `'||'`。为了避免警告，需要将它们用反斜杠转义。

#### \

如果你没有使用原始字符串（ `r'raw'` ）来表达样式，要牢记Python也使用反斜杠作为转义序列；如果转义序列不被Python的分析器识别，反斜杠和字符才能出现在字符串中。如果Python可以识别这个序列，那么反斜杠就应该重复两次。这将导致理解障碍，所以高度推荐，就算是最简单的表达式，也要使用原始字符串。

| 字符 | 使用说明                                                     |
| ---- | ------------------------------------------------------------ |
| \A   | 只匹配字符串开始。                                           |
| \b   | 匹配空字符串(边界)，但只在单词开始或结尾的位置。一个单词被定义为一个单词字符的序列。 |
| \B   | 匹配空字符串(边界)，但 *不* 能在词的开头或者结尾             |
| \d   | 匹配任何Unicode十进制数,这包括了 `[0-9]` ，和很多其他的数字字符。 |
| \D   | 匹配任何非十进制数字的字符                                   |
| \s   | 匹配任何空白字符 `[ \t\n\r\f\v]`                             |
| \S   | 匹配任何非空白字符。就是 `\s` 取非。                         |
| \w   | 匹配Unicode词语的字符，包含了可以构成词语的绝大部分字符，也包括数字和下划线。如果设置了 [`ASCII`](https://docs.python.org/zh-cn/3/library/re.html#re.ASCII) 标志，就只匹配 `[a-zA-Z0-9_]` 。 |
| \W   | 匹配任何非词语字符。是 `\w` 取非。如果设置了 [`ASCII`](https://docs.python.org/zh-cn/3/library/re.html#re.ASCII) 标记，就相当于 `[^a-zA-Z0-9_]` 。 |

绝大部分Python的标准转义字符也被正则表达式分析器支持。:

```
\a      \b      \f      \n
\r      \t      \u      \U
\v      \x      \\
```

### 模块内容

模块定义了几个函数，常量，和一个例外。有些函数是编译后的正则表达式方法的简化版本（少了一些特性）。绝大部分重要的应用，总是会先将正则表达式编译，之后在进行操作。

### re.compile(pattern,flags=0)

将正则表达式的样式编译为一个 [正则表达式对象](https://docs.python.org/zh-cn/3/library/re.html#re-objects) （[正则对象](#正则表达式对象)），可以用于匹配，通过这个对象的方法[`match()`](https://docs.python.org/zh-cn/3/library/re.html#re.Pattern.match), [`search()`](https://docs.python.org/zh-cn/3/library/re.html#re.Pattern.search) 以及其他如下描述。

这个表达式的行为可以通过指定**标记** 的值来改变。值可以是以下任意变量，可以通过位的OR操作来结合（ `|`操作符）。

标记位的作用:特殊需求比如忽略大小写, 以ASCII模式匹配

```python
# 这种方式会让程序执行效率更高,尤其是在正则表达式会被对此复用时
prog = re.compile(pattern)
result = prog.match(string)

# 等价于
result = re.match(pattern,string)
```

如果需要多次使用这个正则表达式的话，使用 [`re.compile()`](https://docs.python.org/zh-cn/3/library/re.html#re.compile) 和保存这个正则对象以便复用，可以让程序更加高效。

标记位的用法:

```
a = re.compile(r"""\d +  # the integral part
                   \.    # the decimal point
                   \d *  # some fractional digits""", re.X)
b = re.compile(r"\d+\.\d*")
```

### re.search(pattern, string, flags=0)  -> match object

扫描整个 **字符串** 找到匹配样式的第一个位置，并返回一个相应的 [匹配对象](https://docs.python.org/zh-cn/3/library/re.html#match-objects)。如果没有匹配，就返回一个 `None` ； 注意这和找到一个零长度匹配是不同的。

获取匹配到的值:

```python
import re

re_username = r"\b[a-z][a-z0-9]+"
data = '1WWf WWF 12334 Abc abc 1ab'

result = re.search(re_username, data)
if result:
    # result.group函数来获取匹配到的值
    print(result.group()) 
    print(result)
else:
    print("没有匹配到数据")

```

### re.match(pattern, string, flags=0) -> match object

如果 *string* **开始**的0或者多个字符匹配到了正则表达式样式，就返回一个相应的 [匹配对象](https://docs.python.org/zh-cn/3/library/re.html#match-objects) 。 如果没有匹配，就返回 `None` ；注意它跟零长度匹配是不同的。

注意即便是 [`MULTILINE`](https://docs.python.org/zh-cn/3/library/re.html#re.MULTILINE) 多行模式， [`re.match()`](https://docs.python.org/zh-cn/3/library/re.html#re.match) 也只匹配字符串的开始位置，而不匹配每行开始。

如果你想定位 *string* 的任何位置，使用 [`search()`](https://docs.python.org/zh-cn/3/library/re.html#re.search) 来替代

### re.fullmatch(pattern, string, flags=0) ->match object

如果**整个string** 匹配到正则表达式样式，就返回一个相应的 [匹配对象](https://docs.python.org/zh-cn/3/library/re.html#match-objects) 。 否则就返回一个 `None` ；注意这跟零长度匹配是不同的。



### re.split(pattern, string, maxsplit=0, flags=0)  -> list

用 *pattern* 分开 *string* , 返回的对象是列表。 **如果在 *pattern* 中捕获到括号，那么所有的组里的文字也会包含在列表里。**如果 *maxsplit* 非零， 最多进行 **maxsplit次分隔**， 剩下的字符全部返回到列表的最后一个元素。

```python
# python console中运行
re.split(r'\W+','Words, words, words.')
>>>['Words', 'words', 'words', '']

re.split(r'(\W+)', 'Words, words, words.')
>>>['Words', ', ', 'words', ', ', 'words', '.', '']

>>> re.split(r'\W+', 'Words, words, words.', 1)
['Words', 'words, words.']

>>>re.split('[a-f]+', '0a3B9', flags=re.IGNORECASE)
    ['0', '3', '9']
```

如果分隔符里有捕获组合，并且匹配到字符串的开始，那么结果将会以一个空字符串开始。对于结尾也是一样

```html
>>> re.split(r'(\W+)', '...words, words...')
['', '...', 'words', ', ', 'words', '...', '']
```

### re.findall(pattern, string, flags=0)   ->list

对 *string* 返回一个不重复的 *pattern* 的匹配列表， *string* 从左到右进行扫描，匹配按找到的顺序返回。如果样式里存在一到多个组，就返回一个组合列表；就是一个元组的列表（如果样式里有超过一个组合的话）。空匹	配也会包含在结果里。

### re.finditer(pattern, string, flags=0)  -> iterator

*pattern* 在 *string* 里所有的非重复匹配，返回为一个迭代器 [iterator](https://docs.python.org/zh-cn/3/glossary.html#term-iterator) 保存了 [匹配对象](https://docs.python.org/zh-cn/3/library/re.html#match-objects) 。 *string* 从左到右扫描，匹配按顺序排列。空匹配也包含在结果里。



### re.sub(pattern, repl, string, count=0,flags=0)   -> string

返回通过使用 repl :(replace) 替换在 *string* 最左边非重叠出现的 *pattern* 而获得的字符串。 如果样式没有找到，则不加改变地返回 *string*。 

repl 可以是**字符串或函数**；

如为字符串，则其中任何反斜杠转义序列都会被处理。

 也就是说，`\n` 会被转换为一个换行符，`\r` 会被转换为一个回车附，依此类推。 

**应用场景**: 将多个空白字符串替换为一个特殊字符(空格, 逗号, 分号) 已到达格式化字符串的目的, 方面进一步处理和展示



如果 *repl* 是一个函数，那它会对每个非重复的 *pattern* 的情况调用。这个函数只能有一个 [匹配对象](https://docs.python.org/zh-cn/3/library/re.html#match-objects) 参数，并返回一个替换后的字符串。



可选参数 *count* 是要替换的最大次数；*count* 必须是非负整数。如果忽略这个参数，或者设置为0，所有的匹配都会被替换。空匹配只在不相临连续的情况被更替，所以 `sub('x*', '-', 'abxd')` 返回 `'-a-b--d-'` 。

```python
import os
import re

data = f'wwfyde ,&asa?@1`\n\rboys \t*ting 1wwfyde,2w'

re_words = r'[^\w]+|[0-9]+\w*'

re_word = r'[a-zA-Z_]\w*'
re1 = r'\W+'
re2 = r'\b[a-zA-Z_]\w*'

if `__name__` == '`__main__`':
    print(os.listdir('.'))
    # print(os.path.basename('`__file__`'))
    print(re.findall(re_word, data))

    print(re.split(re_words, data))
    new_str = re.sub(re1, repl=' ', string=data)

    print('标示', new_str)
    new_list = new_str.split(' ')
    my_list = []
    for i in new_list:
        if re.match(r'[a-zA-z_]\w*', i):
            my_list.append(i)

    print(f'my_list:{my_list}')

    print(re.findall(re2, data))

```

### re,subn(pattern, repl, string, count=0, flags=0)  ->tuple

行为与 [`sub()`](https://docs.python.org/zh-cn/3/library/re.html#re.sub) 相同，但是返回一个元组 `(字符串, 替换次数)`, 会得到被**替换次数**的值

### re.escape(pattern)

转义 *pattern* 中的特殊字符。如果你想对任意可能包含正则表达式元字符的文本字符串进行匹配，它就是有用的。比如

```
>>> print(re.escape('python.exe'))
python\.exe
```

### re.purge()

清楚正则表达式缓存

### exception re.error(msg, pattern=None, pos=None)

`raise` 一个例外。当传递到函数的字符串不是一个有效正则表达式的时候（比如，包含一个不匹配的括号）或者其他错误在编译时或匹配时产生。如果字符串不包含样式匹配，是不会被视为错误的。错误实例有以下附加属性：

**msg**: 未格式化的错误消息

**pattern**: 正则表达式样式

**pos**: 编译失败的 *pattern* 的位置索引（可以是 `None` ）

### 标记-修饰符

多个标记值用什么分隔?

### re.A = re.ASCII

让 `\w`, `\W`, `\b`, `\B`, `\d`, `\D`, `\s` 和 `\S` 只匹配ASCII，而不是Unicode。这只对Unicode样式有效，会被byte样式忽略。相当于前面语法中的内联标志 `(?a)`

### re.I = re.IGNORECASE

进行忽略大小写匹配；表达式如 `[A-Z]` 也会匹配小写字符。

### re.S = re.DOTALL

让 `'.'` 特殊字符匹配任何字符，包括换行符；如果没有这个标记，`'.'` 就匹配 *除了* 换行符的其他任意字符。对应内联标记 `(?s)` 。

### re.X =  re.VERBOSE

这个标记允许你编写更具可读性更友好的正则表达式。通过分段和添加注释。空白符号会被忽略，**除非在一个字符集合当中或者由反斜杠转义**，或者在 `*?`, `(?:` or `(?P<…>` 分组之内。当一个行内有 `#` 不在字符集和转义序列，那么它之后的所有字符都是注释。对应内联标记 `(?x)` 。

意思就是下面两个正则表达式等价地匹配一个十进制数字：

```python
a = re.compile(r"""\d +  # the integral part
                   \.    # the decimal point
                   \d *  # some fractional digits""", re.X)
b = re.compile(r"\d+\.\d*")
```

### 正则表达式对象

> 用法和普通的re下的方法类似, 知识先编译成正则对象再进行匹配而已

(正则对象)

编译后的正则表达式对象支持一下方法和属性：

### pattern.search(string)

### 匹配对象

匹配对象总是有一个布尔值 `True`。如果没有匹配的话 [`match()`](https://docs.python.org/zh-cn/3/library/re.html#re.Pattern.match) 和 [`search()`](https://docs.python.org/zh-cn/3/library/re.html#re.Pattern.search) 返回 `None` 所以你可以简单的用 `if` 语句来判断是否匹配

```python
match = re.search(pattern, string)
if match:
    process(match)
```

匹配对象支持以下方法和属性：

### match.expand(template)

### match.group([group1,...])

返回一个或者多个匹配的子组。如果只有一个参数，结果就是一个字符串，如果有多个参数，结果就是一个元组（每个参数对应一个项），如果没有参数，组1默认到0（整个匹配都被返回）。 如果一个组N 参数值为 0，相应的返回值就是整个匹配字符串；如果它是一个范围 [1..99]，结果就是相应的括号组字符串。如果一个组号是负数，或者大于样式中定义的组数，一个 [`IndexError`](https://docs.python.org/zh-cn/3/library/exceptions.html#IndexError) 索引错误就 `raise`。如果一个组包含在样式的一部分，并被匹配多次，就返回最后一个匹配。:

```python
>>> m = re.match(r"(\w+) (\w+)", "Isaac Newton, physicist")
>>> m.group(0)       # The entire match全部对象
'Isaac Newton'
>>> m.group(1)       # The first parenthesized subgroup.
'Isaac'
>>> m.group(2)       # The second parenthesized subgroup.
'Newton'
>>> m.group(1, 2)    # Multiple arguments give us a tuple.
('Isaac', 'Newton')
```

如果正则表达式使用了 `(?P<name>…)` 语法， *groupN* 参数就也可能是命名组合的名字。如果一个字符串参数在样式中未定义为组合名，一个 [`IndexError`](https://docs.python.org/zh-cn/3/library/exceptions.html#IndexError) 就 `raise`。

一个相对复杂的例子

```
>>> m = re.match(r"(?P<first_name>\w+) (?P<last_name>\w+)", "Malcolm Reynolds")
>>> m.group('first_name')
'Malcolm'
>>> m.group('last_name')
'Reynolds'
```

命名组合同样可以通过索引值引用

```
>>> m.group(1)
'Malcolm'
>>> m.group(2)
'Reynolds'

```

如果一个组匹配成功多次，就只返回最后一个匹配

```
>>> m = re.match(r"(..)+", "a1b2c3")  # Matches 3 times.
>>> m.group(1)                        # Returns only th

```

### match.re

返回产生这个实例的 [正则对象](https://docs.python.org/zh-cn/3/library/re.html#re-objects), 这个实例是由正则对象的 match() 或 search() 方法产生的

### match.string

返回传递到 [`match()`](https://docs.python.org/zh-cn/3/library/re.html#re.Pattern.match) 或 [`search()`](https://docs.python.org/zh-cn/3/library/re.html#re.Pattern.search) 的字符串。

## random-随机数

### random.random()

生成一个0-1之间的随机浮点数

### random.uniform(a, b)

生成[a, b]之间的浮点数

### random.randint(a, b)

生成[a, b]之间的整数

### random.randrange(a, b, step):

在指定的集合[a, b)中, 以step为基数随机取一个数

### random.choice(sequence): 从特定序列中随机去一个元素, 这个序列可以是字符串,列表, 元组等

## time-时间

> 二者区别:
>
> datetime: 基本的日期和时间类型 --数据类型
>
> time: 时间的访问和转换 -- 通用操作系统服务

```python
# 快速上手

# 获取当前时间并格式化输出: 时分秒
time.strftime('%H:%M:%S', time.localtime(time.time()))
# datetime.datetime.now().strftime('%H:%M:%S')
```

## timeit-测试代码片段耗时

> Measure execution time of small code snippets





## select-等待I/O完成

>  Waiting for I/O completion



## datetime-

> 模块描述
>
> 作用 应用场景

```python
# 用法示例

# 格式化输出当前时间: 
datetime.datetime.now().strftime('%H:%M:%S')
# time.strftime('%H:%M:%S', time.localtime(time.time()))

```



## dis-反汇编

> [官方文档](https://docs.python.org/zh-cn/3/library/dis.html)

```shell
python -m dis demo.py
```



## urlib-

## pickle-

## base64-

每6位为一组 2^6^  = 64 个字母(

**Base64**是一种基于64个可打印字符来表示二进制数据的表示方法。由于2^6=64，所以每6个比特为一个单元，对应某个可打印字符。3个字节有24个比特，对应于4个Base64单元，即3个字节可由4个可打印字符来表示。在Base64中的可打印字符包括字母`A-Z`、`a-z`、数字`0-9`，这样共有62个字符，此外两个可打印符号在不同的系统中而不同。

Base64常用于在通常处理文本数据的场合，表示、传输、存储一些二进制数据，包括MIME的电子邮件及XML的一些复杂数据。

python标准库中提供了base64模块，用来进行转换

- base64.b64encode() 将bytes类型数据进行base64编码，返回编码后的bytes类型
- base64.b64deocde() 将base64编码的bytes类型进行解码，返回解码后的bytes类型

## socket-底层网络接口

## socketserver-网络服务框架

A framework for network servers

### 参考资料

- https://docs.python.org/3/library/socketserver.html

### 快速上手

是什么

定义

特点

作用

为什么

怎么用

### 请求处理对象

## tracback

- https://docs.python.org/zh-cn/3.12/library/traceback.html

## json

## secrets

> [!tip]
>
> 用位(bit)表示十六进制数字时, 一个十六进制数字(16=2**4)占4为(bit), 因此一个1字节可以存放两个十六进制数字

## inspect-检查对象

## traceback-打印或读取栈回溯信息

# Package Index

> [Python toolboox](https://piptrends.com/python-toolbox?utm_source=substack&utm_medium=email)

## Basic

- Dev 
    - **pre-commit**
    - pip-compile
    - coverage
    - mypy
    - poetry
    - tox
    - airflow
    - lxml
- Asynchronous Programming
    - trio
    - uvloop
    - asyncio
- Auth and crypto
    - oauthlib
    - python-jose
    - passlib[bcrypt]
    - cryptography
- Coding
    - isort
    - black
- Other
    - dataclasses
- Type Annotations: [typing-extensions](https://piptrends.com/package/typing-extensions)
- click
    - typer
    - fire
- rich
- https://github.com/pyca/cryptography
- [beautifulsoup](https://piptrends.com/package/beautifulsoup)
- Job Scheduler
    - airflow
    - apscheduler
    - schedule
- log
    - strcutlog
    - loguru
    - python-json-logger
- rpc
    - thrift
- zappa
- sh
- [django-taggit](https://piptrends.com/package/django-taggit)
- task queue: celery
- jinja
- boto3: third party api
- web crawling(爬虫)
    - [selenium](https://github.com/SeleniumHQ/selenium)
    - playwright
    - lxml
    - beautifulsoup4
    - xpath
    - pyperclip
- data/file processing
    - pandas
    - openpyxl
    - xlsxwriter

## Data Science

### matplotlib

### plotly



## AI

- [tiktoken](https://github.com/openai/tiktoken)



## data process and compute

### pandas

### polars

### dask

### ray

### latexify - 公式生成

## ploting

### matplotlib

### ploty



## mathematics

### scikit-learn

### numpy

### sympy

### scipy



### matplotlib

### pandas

## Tools

library, projects,

### poetry

### pipx

### coverage

### hatch

### rye

### pip-tools

```shell
pip install pip-tools

# The pip-compile command lets you compile a requirements.txt file from your dependencies, specified in either pyproject.toml, setup.cfg, setup.py, or requirements.in.


```

### tox



### pre-commit

### taskipy-

### art-ASCII文本

## Document

### markdown

> [!Note]
>
> 备选高性能 mistune

### pandoc

### python-docx

### pymupdf

### PyPDFLoader(Langchain)



### 

## 

# Utils

## tqdm

## beautifulsoup4

## requests

# more_itertools

# Rust

## pyo3

## polars

## rpds-py

## delta-rs

https://github.com/delta-io/delta-rs

## maturin

[maturin](https://github.com/PyO3/maturin)



# **asyncio**(std)

## Links

- [Coroutines and Tasks](https://docs.python.org/3/library/asyncio-task.html)
- [Python并发编程](Python并发编程)

# cryptography

# typing

## **typing**-类型提示

> 相关提案: 
>
> - PEP-484: https://www.python.org/dev/peps/pep-0484/

### 索引

`type hints` `type annotations` `types intro`

`类型提示` `类型注解`

### 好处

- 编辑器中增加了自动补全 `cmd + space`, 有了针对类型的方法提示
- 增加了编辑器对代码的错误检查能力
- 

## 类型声明-declaring types

### 简单类型

- str
- int
- float
- bool
- bytes

### 泛型generic type

> 泛型参数, 可以类似理解为函数参数, `[]` subscrpting 不是索引, 而是声明参数列表, 通常是按位置确定
>
> Generic[A, B, C] 表示泛型需要解释3个类型参数, 顺序和数量都有意义

带有参数类型的泛型, 泛型就是值类型是一个定义时未确定具体类型, 使用时才确定的类型, 是一种更宽泛的类型约束, 可以是自定义的类型

泛型可以增强类型安全和代码灵活性, 就是类型约束, 泛型可以使用自定义类型, 而不单单是内置类型

>  [!tip]
>
> AI修正描述
> **泛型** 是指在定义类、函数或数据结构时，不指定具体的数据类型，而是在使用时才指定具体的类型。它是一种更灵活和通用的类型约束，可以适用于各种自定义的类型以及内置类型。通过泛型，可以创建适用于多种类型的通用接口，从而提高代码的重用性和类型安全性。

- dict
- list
- set
- tuple

### Type

```python
# ModelType 是一个泛型类型变量，受限于继承自 Base 的类型。
ModelType = TypeVar("ModelType", bound=Base)  
# CreateSchemaType 和 UpdateSchemaType 是泛型类型变量，受限于继承自 BaseModel 的类型。
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)
```





## Links

- [mypy cheat sheet](https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html)

## Glossary

- 向前引用(Forward Reference): Deliberately using a name before it was defined in the module is called a forward reference.
    - [PEP563](https://peps.python.org/pep-0563/#forward-references)
    - 在定义之前引用

## Core



### TypedDict

```python
class Point2D(TypeDict):
  x: int
  y: int
  label: 
```

### NamedTuple

```python
from typing import NamedTuple

class Person(NamedTuple):
    name: str
    age: int
    email: str

def register_person(person: Person) -> None:
    ...

# 使用
register_person(Person("Alice", 30, "alice@example.com"))



from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    email: str

def register_person(person: Person) -> None:
    ...

# 使用
register_person(Person(name="Alice", age=30, email="alice@example.com"))




# ---

from typing import Tuple, Dict

def example_func(*args: Tuple[int, str], **kwargs: Dict[str, int]) -> None:
    for arg in args:
        print(arg)
    for key, value in kwargs.items():
        print(key, value)
```



### overload

# ---

## Protocol

# **pydantic**

data validate, data serialize

类似Go, Rust, C中的结构体(struct), 也类似Python中的数据类(dataclass), 主要用于数据验证(validate),序列化(serialize)和json schema 生成, 主要是数据类型转换, 通用抽象层, 通用模型.  

> In Pydantic, the term "validation" refers to the process of instantiating

## Schema

> [!Note]
>
> Dataclasses, TypedDicts, and more[¶](https://docs.pydantic.dev/latest/why/#dataclasses-typeddict-more)
>
> [Dataclasses, TypedDicts, and more](https://docs.pydantic.dev/latest/why/#dataclasses-typeddict-more)
>
> Pydantic provides four ways to create schemas and perform validation and serialization:
>
> 1. [`BaseModel`](https://docs.pydantic.dev/latest/concepts/models/) — Pydantic's own super class with many common utilities available via instance methods.
> 2. [Pydantic dataclasses](https://docs.pydantic.dev/latest/concepts/dataclasses/) — a wrapper around standard dataclasses with additional validation performed.
> 3. [`TypeAdapter`](https://docs.pydantic.dev/latest/api/type_adapter/#pydantic.type_adapter.TypeAdapter) — a general way to adapt any type for validation and serialization. This allows types like [`TypedDict`](https://docs.pydantic.dev/latest/api/standard_library_types/#typeddict) and [`NamedTuple`](https://docs.pydantic.dev/latest/api/standard_library_types/#typingnamedtuple) to be validated as well as simple types (like [`int`](https://docs.python.org/3/library/functions.html#int) or [`timedelta`](https://docs.python.org/3/library/datetime.html#datetime.timedelta)) — [all types](https://docs.pydantic.dev/latest/concepts/types/) supported can be used with [`TypeAdapter`](https://docs.pydantic.dev/latest/api/type_adapter/#pydantic.type_adapter.TypeAdapter).
> 4. [`validate_call`](https://docs.pydantic.dev/latest/concepts/validation_decorator/) — a decorator to perform validation when calling a function.







## 常见需求

### 参数验证装饰器

```python
from pydantic import ValidationError, validate_call


@validate_call
def repeat(s: str, count: int, *, separator: bytes = b'') -> bytes:
    b = s.encode()
    return separator.join(b for _ in range(count))


a = repeat('hello', 3)
print(a)
#> b'hellohellohello'

b = repeat('x', '4', separator=b' ')
print(b)
#> b'x x x x'

try:
    c = repeat('hello', 'wrong')
except ValidationError as exc:
    print(exc)
    """
    1 validation error for repeat
    1
      Input should be a valid integer, unable to parse string as an integer [type=int_parsing, input_value='wrong', input_type=str]
    """
```





### 字典通过pydantic来验证

```python
user = User(**external_dict)
```

### json schema 生成

### 验证pydantic model

```python
Demo.model_validate(data)
```



### 验证ORM(from_orm)

https://docs.pydantic.dev/dev/concepts/models/#arbitrary-class-instances

```python
from_attributes=True
from typing import List

from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import declarative_base
from typing_extensions import Annotated

from pydantic import BaseModel, ConfigDict, StringConstraints

Base = declarative_base()


class CompanyOrm(Base):
    __tablename__ = 'companies'

    id = Column(Integer, primary_key=True, nullable=False)
    public_key = Column(String(20), index=True, nullable=False, unique=True)
    name = Column(String(63), unique=True)
    domains = Column(ARRAY(String(255)))


class CompanyModel(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    public_key: Annotated[str, StringConstraints(max_length=20)]
    name: Annotated[str, StringConstraints(max_length=63)]
    domains: List[Annotated[str, StringConstraints(max_length=255)]]


co_orm = CompanyOrm(
    id=123,
    public_key='foobar',
    name='Testing',
    domains=['example.com', 'foobar.com'],
)
print(co_orm)
#> <__main__.CompanyOrm object at 0x0123456789ab>
co_model = CompanyModel.model_validate(co_orm)
print(co_model)
"""
id=123 public_key='foobar' name='Testing' domains=['example.com', 'foobar.com']
"""
```

### 定制序列化器

> [!Note]
>
> https://docs.pydantic.dev/latest/concepts/serialization/#custom-serializers
>
> Pydantic provides several [functional serializers](https://docs.pydantic.dev/latest/api/functional_serializers/#pydantic.functional_serializers) to customise how a model is serialized to a dictionary or JSON.
>
> - [`@field_serializer`](https://docs.pydantic.dev/latest/api/functional_serializers/#pydantic.functional_serializers.field_serializer)
> - [`@model_serializer`](https://docs.pydantic.dev/latest/api/functional_serializers/#pydantic.functional_serializers.model_serializer)
> - [`PlainSerializer`](https://docs.pydantic.dev/latest/api/functional_serializers/#pydantic.functional_serializers.PlainSerializer)
> - [`WrapSerializer`](https://docs.pydantic.dev/latest/api/functional_serializers/#pydantic.functional_serializers.WrapSerializer)
>
> Serialization can be customised on a field using the [`@field_serializer`](https://docs.pydantic.dev/latest/api/functional_serializers/#pydantic.functional_serializers.field_serializer) decorator, and on a model using the [`@model_serializer`](https://docs.pydantic.dev/latest/api/functional_serializers/#pydantic.functional_serializers.model_serializer) decorator.



# dotenv

## 概述

可以使用pydantic提供的env特性

## 参考资料

- https://github.com/theskumar/python-dotenv
- https://saurabh-kumar.com/python-dotenv/



# **pytest**

# alembic

> [!tip]
>
> 官方链接: https://alembic.sqlalchemy.org
>
> https://github.com/sqlalchemy/alembic
>
> https://pypi.python.org/pypi/alembic

```shell
# 查看修订版本
alembic history

# 查看信息
alembic current
# 回退一个版本
alembic downgrade -1

# 回退到指定版本
alembic downgrade c1fbd
# 重置到初始化(downgrade back to nothing)
alembic downgrade base

# 合并两个revision

# track update
alembic revision --autogenerate -m "init"

# 升级
alembic upgrade head


# 运行离线模式 head
alembic upgrade <revision_id> --sql > upgrade.sql
```

## 配置仅跟踪指定表

https://alembic.sqlalchemy.org/en/latest/autogenerate.html#omitting-table-names-from-the-autogenerate-process

```python
```

## SQL脚本生成(Offline Mode)

```shell
alembic upgrade head --sql
```

## 动态配置sqlalchemy.url

方式一: 从设置里面读取

```python
# alembic/env.py

def get_url() -> str:
    host = settings.postgres.host
    port = settings.postgres.port
    db = settings.postgres.db
    user = settings.postgres.user
    password = settings.postgres.password
    print(f"host: {host}, port: {port}, db: {db}, user: {user}, password: {password}")
    return f"postgresql+psycopg://{user}:{password}@{host}:{port}/{db}"
  
def run_migrations_offline():
    """Run migrations in 'offline' mode.

    This configures the context with just a URL
    and not an Engine, though an Engine is acceptable
    here as well.  By skipping the Engine creation
    we don't even need a DBAPI to be available.

    Calls to context.execute() here emit the given string to the
    script output.

    """
    url = get_url()
    context.configure(
        url=url, target_metadata=target_metadata, literal_binds=True, compare_type=True
    )

    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online():
    """Run migrations in 'online' mode.

    In this scenario we need to create an Engine
    and associate a connection with the context.

    """
    configuration = config.get_section(config.config_ini_section)
    configuration["sqlalchemy.url"] = get_url()
    connectable = engine_from_config(
        configuration,
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata, compare_type=True
        )

        with context.begin_transaction():
            context.run_migrations()


```





方式二: 从环境变量读取

```python
env_files = ['.env', '.env.local', '.env.prod']
for env_file in env_files:
    env_file = Path(__file__).resolve().parent.joinpath(env_file)
    print(env_file)
    load_dotenv(env_file, override=True)

section = config.config_ini_section


# config.set_section_option(section, "POSTGRES_DSN", os.environ.get("POSTGRES_DSN"))
# config.set_section_option(section, "MYSQL_DSN", os.environ.get("MYSQL_DSN"))
# config.set_section_option(section, "POSTGRES_DSN", os.environ.get("POSTGRES_DSN"))

def get_url():
    user = os.getenv("POSTGRES_USER", "postgres")
    password = os.getenv("POSTGRES_PASSWORD", "")
    server = os.getenv("POSTGRES_SERVER", "db")
    port = os.getenv("POSTGRES_PORT", "5432")
    db = os.getenv("POSTGRES_DB", "app")
    return f"postgresql+psycopg://{user}:{password}@{server}:{port}/{db}"

```





# **SQLAlchemy**

## 参考资料

- [GitHub官方代码示例](https://github.com/sqlalchemy/sqlalchemy/tree/main/examples)
- [SQLAlchemy ORM](https://docs.sqlalchemy.org/en/20/orm/index.html)
    - [ORM Mapped Class Configuration](https://docs.sqlalchemy.org/en/20/orm/mapper_config.html)
- [SQLAlchemy Unified Tutorial](https://docs.sqlalchemy.org/en/20/tutorial/index.html)
- [SQLAlchemy core](https://docs.sqlalchemy.org/en/20/core/index.html)
    - statement and expression
    - [The Type Hierarchy](https://docs.sqlalchemy.org/en/20/core/type_basics.html)



- [Data Manipulation with the ORM](https://docs.sqlalchemy.org/en/20/tutorial/orm_data_manipulation.html)
- [Session API](https://docs.sqlalchemy.org/en/20/orm/session_api.html)
- [](https://docs.sqlalchemy.org/en/20/orm/session_basics.html#id1)
- [tutorials](https://docs.sqlalchemy.org/en/20/tutorial/index.html)
- [sqlalchemy asyncio](https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html)
- [Insert, Updates, Deletes](https://docs.sqlalchemy.org/en/20/core/dml.html)
    增删改, 批量插入
- [2.0 Migration - ORM Usage -API对比](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html#migration-orm-usage)



## 模型声明

```python
# 字段别名 __name_pos位置参数或name
a = mapped_column(__type_pos, __name_pos, name='name_in_column')


# 类别名
aliased
from sqlalchemy.orm import aliased
user_cls = aliased(User, name="user_cls")


```

## 连接

### Links

- 多数据库连接
- [Working with Engines and Connections](https://docs.sqlalchemy.org/en/20/core/connections.html)

### 重点

## 会话

## 查询

- [ORM Query Guide](https://docs.sqlalchemy.org/en/20/orm/queryguide/index.html)


## 联合查询


```python

from sqlalchemy.orm import with_loader_criteria

stmt = select(User).options(
    selectinload(User.addresses),
    with_loader_criteria(Address, Address.email_address != 'foo'))
)
```

### 示例
```python
from datetime import datetime  
from typing import Optional  
  
from sqlalchemy import Integer, String, JSON, Boolean, DateTime, TIMESTAMP, func, Index, Text, Numeric, ForeignKey  
from sqlalchemy.dialects.mysql import MEDIUMTEXT  
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship  
  
  
class Base(DeclarativeBase):  
    pass  
  
  
class LLM(Base):  
    __tablename__ = 'llm'  
  
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)  
    name: Mapped[str] = mapped_column(String(64), nullable=False, unique=True, comment='模型名称')  
    description: Mapped[Optional[str]] = mapped_column(String(1024), nullable=True, comment='详细说明')  
    provider: Mapped[Optional[str]] = mapped_column(String(32), nullable=True, comment='供应商, 渠道名称')  
    provider_url: Mapped[Optional[str]] = mapped_column(String(100), nullable=True, comment='供应商URL')  
    sample: Mapped[Optional[str]] = mapped_column(MEDIUMTEXT, nullable=True, comment='案例图片')  
    base_url: Mapped[Optional[str]] = mapped_column(String(512), nullable=True, comment='基础URL')  
    api_key: Mapped[Optional[str]] = mapped_column(String(128), nullable=True, comment='API Key')  
    access_key: Mapped[Optional[str]] = mapped_column(String(128), nullable=True, comment='Access Key for AWS bedrock')  
    secret_key: Mapped[Optional[str]] = mapped_column(String(128), nullable=True, comment='Secret Key for AWS bedrock')  
    model: Mapped[Optional[str]] = mapped_column(String(64), nullable=True, comment='默认模型')  
    extra_model: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)  
    config: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True, comment='配置列表')  
    status: Mapped[Optional[bool]] = mapped_column(Boolean, nullable=True, comment='渠道状态')  
    is_deleted: Mapped[Optional[bool]] = mapped_column(Boolean, nullable=True, comment='是否删除')  
    expire_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True, comment='过期时间')  
    created_at: Mapped[datetime] = mapped_column(TIMESTAMP,  
                                                 default=func.now(),  
                                                 server_default=func.now(),  
                                                 comment='创建时间')  
    updated_at: Mapped[datetime] = mapped_column(TIMESTAMP,  
                                                 default=func.now(),  
                                                 server_default=func.now(),  
                                                 onupdate=func.now(), comment='更新时间')  
    llm_instructions: Mapped[list["LLMInstruction"]] = relationship('LLMInstruction', back_populates='llm',  
                                                                    primaryjoin='LLMInstruction.llm_id == LLM.id')  
  
  
class LLMInstruction(Base):  
    __tablename__ = 'llm_instructions'  
    __table_args__ = (  
        Index('idx_llm_id', 'llm_id'),  
        {'comment': '大语言模型的提示词表'}  
    )  
  
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)  
    llm_id: Mapped[Optional[int]] = mapped_column(ForeignKey("llm.id"), comment="对应LLM的id字段")  
    title: Mapped[Optional[str]] = mapped_column(String(200), nullable=True)  
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True, comment='描述')  
    tags: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)  
    user_id: Mapped[Optional[str]] = mapped_column(String(32), nullable=True)  
  
    system_prompt: Mapped[Optional[str]] = mapped_column(MEDIUMTEXT, nullable=True)  
    xml_format: Mapped[Optional[str]] = mapped_column(MEDIUMTEXT, nullable=True)  
    temperature: Mapped[Optional[float]] = mapped_column(Numeric(3, 2), default=0.70, nullable=True)  
    sample: Mapped[Optional[str]] = mapped_column(MEDIUMTEXT, nullable=True)  
    create_at: Mapped[Optional[datetime]] = mapped_column(DateTime,  
                                                          default=func.now(),  
                                                          server_default=func.now(),  
                                                          nullable=True)  
  
    update_at: Mapped[Optional[datetime]] = mapped_column(DateTime,  
                                                          default=func.now(),  
                                                          server_default=func.now(),  
                                                          onupdate=func.now(),  
                                                          nullable=True)  
    deleted: Mapped[Optional[bool]] = mapped_column(Integer, default=False, nullable=True)  
    llm: Mapped["LLM"] = relationship('LLM', back_populates='llm_instructions',  
                                      primaryjoin='LLMInstruction.llm_id == LLM.id')  
  
  
class Workflow(Base):  
    __tablename__ = "workflows"  
  
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)  
    name: Mapped[str] = mapped_column(String(50), nullable=True)  
    description: Mapped[str] = mapped_column(String(500), nullable=True, comment="详细说明", )  
    user_id: Mapped[int] = mapped_column(Integer, nullable=True, comment="上传用户")  
    workflow: Mapped[JSON] = mapped_column(JSON, nullable=True)  
    config: Mapped[JSON] = mapped_column(JSON, nullable=True)  
    task_type: Mapped[str] = mapped_column(String(50), nullable=True, comment="任务类型")  
    status: Mapped[int] = mapped_column(Integer, nullable=True, comment="是否激活")  
    sample: Mapped[str] = mapped_column(String(100), nullable=True, comment="案例图片")  
    create_time: Mapped[datetime] = mapped_column(DateTime, default=datetime.now, nullable=True)  
    update_time: Mapped[datetime] = mapped_column(DateTime, default=datetime.now, onupdate=datetime.now, nullable=True)  
    hashcode: Mapped[str] = mapped_column(String(64), nullable=True)  
    deleted: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)  
    workflow_layout: Mapped[JSON] = mapped_column(JSON, nullable=True)  
    misc: Mapped[JSON] = mapped_column(JSON, nullable=True)
```

```python
from typing import Annotated  
  
from fastapi import APIRouter, Depends, Query, HTTPException  
from sqlalchemy import select, delete, func, or_  
from sqlalchemy.ext.asyncio import AsyncSession  
from sqlalchemy.orm import joinedload  
  
from app.core.dependency import logger, get_current_active_user  
from app.db_molook_uat.session import get_db_molook_uat_python_async  
from app.models import User  
from app.models_python.model import LLM, LLMInstruction  
from app.schemas.llmconfig import LLMCreateSchema, LLMInstructionCreateSchema, LLMUpdateSchema, \  
    LLMInstructionUpdateSchema  
  
router = APIRouter()  
  
  
@router.get("/llms", summary="获取所有LLM配置")  
async def get_llm(  
        page: int = 1,  
        page_size: int = 10,  
        include_deleted: Annotated[bool, Query(description="是否包含已删除, 默认不包含")] = False,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
):  
    stmt = select(LLM)  
    if not include_deleted:  
        stmt = stmt.where(or_(LLM.is_deleted != True, LLM.is_deleted.is_(None)))  
  
    print(f"{stmt.whereclause=}")  
  
    result = await db.execute(select(func.count(LLM.id)).select_from(LLM))  
    if stmt.whereclause is not None:  
        result = await db.execute(select(func.count(LLM.id)).select_from(LLM).where(stmt.whereclause))  
    total_count = result.scalar()  
    total_pages = (total_count + page_size - 1) // page_size  
  
    stmt = stmt.limit(page_size).offset((page - 1) * page_size)  
  
    logger.debug(stmt.compile(compile_kwargs={"literal_binds": True}))  
  
    result = await db.execute(stmt)  
    items = result.scalars().all()  
    return {  
        "items": items,  
        "total_count": total_count,  
        "total_pages": total_pages,  
        "current_page": page,  
        "page_size": page_size,  
        "current_count": len(items),  
    }  
  
  
@router.get("/llms/{llm_id}", summary="按ID获取LLM配置")  
async def get_llm_by_id(  
        llm_id: int,  
        include_deleted: Annotated[bool, Query(description="是否包含已删除, 默认不包含")] = False,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
  
):  
    stmt = select(LLM).where(LLM.id == llm_id)  
    if not include_deleted:  
        stmt = stmt.where(or_(LLM.is_deleted != True, LLM.is_deleted.is_(None)))  
    logger.debug(stmt.compile(compile_kwargs={"literal_binds": True}))  
    result = await db.execute(stmt)  
    result = result.scalars().one_or_none()  
    print(result)  
    return result  
  
  
@router.get("/llm/search", deprecated=True)  
async def get_llm_by_name(  
        name: str,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
):  
    stmt = select(LLM).where(LLM.name == name)  
    result = await db.execute(stmt)  
    result = result.scalars().one_or_none()  
    print(result)  
    return result  
  
  
@router.delete("/llms/{llm_id}", summary="删除LLM配置")  
async def delete_llm_by_id(  
        llm_id: int,  
        hard_delete: Annotated[bool, Query(description="硬删除")] = False,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
  
):  
    if hard_delete:  
        stmt = delete(LLM).where(LLM.id == llm_id)  
        result = await db.execute(stmt)  
        await db.commit()  
        if result.rowcount == 0:  
            logger.warning(f"llm_id: {llm_id} not found")  
            return False  
        else:  
            logger.info(f"llm_id: {llm_id} deleted")  
            return True  
    else:  
        stmt = select(LLM).where(LLM.id == llm_id)  
        result = await db.execute(stmt)  
        result: LLM | None = result.scalars().one_or_none()  
        if result is None:  
            detail = f"llm_id: {llm_id} not found"            logger.warning(detail)  
            raise HTTPException(status_code=400, detail=detail)  
        else:  
            result.is_deleted = True  
            db.add(result)  
            await db.commit()  
            await db.refresh(result)  
            return True  
  
  
@router.post("/llms", summary="创建LLM配置")  
async def create_llm(  
        llm: LLMCreateSchema,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
  
):  
    llm_db = LLM()  
    for key, value in llm.model_dump(exclude_unset=True).items():  
        setattr(llm_db, key, value)  
    db.add(llm_db)  
    await db.commit()  
    await db.refresh(llm_db)  
    return llm_db  
  
  
@router.put("/llms/{llm_id}", summary="按ID更新LLM配置")  
async def update_llm(  
        llm_id: int,  
        llm: LLMUpdateSchema,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
):  
    stmt = select(LLM).where(LLM.id == llm_id)  
    result = await db.execute(stmt)  
    llm_db = result.scalars().one_or_none()  
    if llm_db is None:  
        detail = f"llm_id: {llm_id} not found"        logger.warning(detail)  
        raise HTTPException(status_code=400, detail=detail)  
    else:  
        for key, value in llm.model_dump(exclude_unset=True).items():  
            setattr(llm_db, key, value)  
        db.add(llm_db)  
        await db.commit()  
        await db.refresh(llm_db)  
        return llm_db  
  
  
@router.get("/llm_instructions", summary="获取LLM Instruction")  
async def get_llm_instructions(  
        page: int = 1,  
        page_size: int = 10,  
        include_deleted: Annotated[bool, Query(description="是否包含已删除, 默认不包含")] = False,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
  
):  
    s = "LLMInstruction, LLM.name, LLM.provider, LLM.description, LLM.model, LLM.base_url, LLM.config, LLM.api_key, LLM.status, LLM.metadata, LLM.access_key, LLM.secret_key, LLM.provider_url, LLM.sample"  
    stmt = select(LLMInstruction, LLM).options(joinedload(LLMInstruction.llm)).join(LLM,  
                                                                                    LLM.id == LLMInstruction.llm_id,  
                                                                                    isouter=True)  
    if not include_deleted:  
        stmt = stmt.where(or_(LLMInstruction.deleted != True, LLMInstruction.deleted.is_(None)))  
    result = await db.execute(  
        select(func.count(LLMInstruction.id)).select_from(LLMInstruction).where(stmt.whereclause))  
    if stmt.whereclause is None:  
        result = await db.execute(select(func.count(LLMInstruction.id)).select_from(LLMInstruction))  
    total_count = result.scalar()  
    total_pages = (total_count + page_size - 1) // page_size  
  
    stmt = stmt.limit(page_size).offset((page - 1) * page_size)  
    result = await db.execute(stmt)  
    items = result.scalars().all()  
    # return results  
    return {  
        "items": items,  
        "total_count": total_count,  
        "total_pages": total_pages,  
        "current_page": page,  
        "page_size": page_size,  
    }  
  
  
@router.get("/llm_instructions/{llm_instruction_id}", summary="按ID获取LLM Instruction")  
async def get_llm_instruction_by_id(  
        llm_instruction_id: int,  
        include_deleted: Annotated[bool, Query(description="是否包含已删除, 默认不包含, 可不传该参数")] = False,  
  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
  
):  
    stmt = select(LLMInstruction, LLM).options(  
        joinedload(LLMInstruction.llm)  
    ).join(LLM,  
           LLM.id == LLMInstruction.llm_id).where(  
        LLMInstruction.id == llm_instruction_id)  
  
    if not include_deleted:  
        stmt = stmt.where(or_(LLMInstruction.deleted != True, LLMInstruction.deleted.is_(None)))  
  
    print(stmt.compile(compile_kwargs={"literal_binds": True}))  
    result = await db.execute(stmt)  
    result = result.scalars().one_or_none()  
    print(result)  
    return result  
  
  
@router.delete("/llm_instructions/{llm_instruction_id}", summary="删除LLM Instruction")  
async def delete_llm_instruction_by_id(  
        llm_instruction_id: int,  
        hard_delete: Annotated[bool, Query(description="硬删除")] = False,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
  
):  
    """  
    支持软删除, 默认采用软删除  
    """    if not current_user:  
        logger.warning("用户未登录")  
        raise HTTPException(status_code=400, detail="用户未登录")  
    if hard_delete:  
        # 删除前,先检查是否存在切user_id 是否匹配  
        stmt = select(LLMInstruction).where(LLMInstruction.id == llm_instruction_id)  
        result = await db.execute(stmt)  
        result = result.scalars().one_or_none()  
        if result is None:  
            detail = f"llm_instruction_id: {llm_instruction_id} not found"            logger.warning(detail)  
            raise HTTPException(status_code=404, detail=detail)  
        else:  
            if str(current_user.id) != str(result.user_id):  
                detail = f"用户{current_user.id}无权限修改{result.user_id}的数据"  
                logger.warning(detail)  
                raise HTTPException(status_code=400, detail=detail)  
        stmt = delete(LLMInstruction).where(LLMInstruction.id == llm_instruction_id)  
        result = await db.execute(stmt)  
        await db.commit()  
        if result.rowcount == 0:  
            logger.warning(f"llm_instruction_id: {llm_instruction_id} not found")  
            return 0  
        else:  
            logger.info(f"llm_instruction_id: {llm_instruction_id} deleted")  
            return 1  
    else:  
        stmt = select(LLMInstruction).where(LLMInstruction.id == llm_instruction_id)  
        result = await db.execute(stmt)  
        result = result.scalars().one_or_none()  
        if result is None:  
            detail = f"llm_instruction_id: {llm_instruction_id} not found"            logger.warning(detail)  
            raise HTTPException(status_code=404, detail=detail)  
  
        else:  
            if str(current_user.id) != str(result.user_id):  
                detail = f"用户{current_user.id}无权限修改{result.user_id}的数据"  
                logger.warning(detail)  
                raise HTTPException(status_code=400, detail=detail)  
            result.deleted = True  
            db.add(result)  
            await db.commit()  
            await db.refresh(result)  
            return result  
  
  
@router.post("/llm_instructions", summary="创建LLM Instruction")  
async def create_llm_instruction(  
        llm_instruction: LLMInstructionCreateSchema,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
  
):  
    if not current_user:  
        logger.warning("用户未登录")  
        raise HTTPException(status_code=400, detail="用户未登录")  
  
    llm_instruction_db = LLMInstruction()  
    for key, value in llm_instruction.model_dump(exclude_unset=True).items():  
        setattr(llm_instruction_db, key, value)  
    llm_instruction_db.user_id = current_user.id  
    db.add(llm_instruction_db)  
    await db.commit()  
    await db.refresh(llm_instruction_db)  
    return llm_instruction_db  
  
  
@router.put("/llm_instructions/{llm_instruction_id}", summary="按ID更新LLM Instruction")  
async def update_llm_instruction(  
        llm_instruction_id: int,  
        llm_instruction: LLMInstructionUpdateSchema,  
        db: AsyncSession = Depends(get_db_molook_uat_python_async),  
        current_user: User = Depends(get_current_active_user)  
  
):  
    if not current_user:  
        logger.warning("用户未登录")  
        raise HTTPException(status_code=400, detail="用户未登录")  
  
    stmt = select(LLMInstruction).where(LLMInstruction.id == llm_instruction_id)  
    result = await db.execute(stmt)  
    result = result.scalars().one_or_none()  
    if result is None:  
        detail = f"llm_instruction_id: {llm_instruction_id} not found"        logger.warning(detail)  
        raise HTTPException(status_code=404, detail=detail)  
    else:  
        if str(current_user.id) != str(result.user_id):  
            detail = f"用户{current_user.id}无权限修改{result.user_id}的数据"  
            logger.warning(detail)  
            raise HTTPException(status_code=400, detail=detail)  
        for key, value in llm_instruction.model_dump(exclude_unset=True).items():  
            setattr(result, key, value)  
        db.add(result)  
        await db.commit()  
        await db.refresh(result)  
        return result
```
## 基础增删改查

- [Working wit data](https://docs.sqlalchemy.org/en/20/tutorial/data.html)



### 增

- [](https://docs.sqlalchemy.org/en/20/tutorial/data_insert.html#tutorial-core-insert)
- [批量插入-bulk](https://docs.sqlalchemy.org/en/20/tutorial/orm_data_manipulation.html#tutorial-orm-bulk)

```python

# 先初始化对象
user_1 = Use(a=1)
user_1.b = 2
session.add(user_1)
session.commit()
session.refresh(user_1)


# 通过 insert 语句
sku_data = {'name': 'Sample Product', 'price': 100}
stmt = insert(ProductSKU).values(sku_data)

# 将字典插入
# https://docs.sqlalchemy.org/en/20/core/connections.html#using-transactions
connection.execute(some_table.insert(), {"x": 7, "y": "this is some data"})

# 或者
with engine.connect() as conn:
...     result = conn.execute(
...         insert(user_table),
...         [
...             {"name": "sandy", "fullname": "Sandy Cheeks"},
...             {"name": "patrick", "fullname": "Patrick Star"},
...         ],
...     )
...     conn.commit()

# 或者
with engine.connect() as conn:
...     result = conn.execute(
...         insert(address_table).values(user_id=scalar_subq),
...         [
...             {
...                 "username": "spongebob",
...                 "email_address": "spongebob@sqlalchemy.org",
...             },
...             {"username": "sandy", "email_address": "sandy@sqlalchemy.org"},
...             {"username": "sandy", "email_address": "sandy@squirrelpower.org"},
...         ],
...     )
...     conn.commit()

# 通过orm  当数据源是dict时
product_sku = ProductSKU(**sku_data)  
product_sku = ProductSKU.model_validate(sku_data)  # 然后ProductSKU from_attribute=True
session.add(product_sku)

# 或者
logger.info(str(item))
for key, value in item.model_dump(exclude_unset=True).items():
    setattr(item_db, key, value)
    

# 批量插入
# https://docs.sqlalchemy.org/en/20/tutorial/orm_data_manipulation.html#tutorial-orm-bulk

```



### 改

更新

分为 ORM风格和Core风格

> [!Note]
>
> 更新时一定要先从数据库中查询再更新对象, 否则就是插入
>
> 或者使用execute

```python
from sqlalchemy import update

# use Session.add ORM 
user = db.get(User, user_id)
# 通过对象赋值或setattr的方式更新User
if user:
  user.name = ...
  user.fullname = ...
  db.add(user)
  db.commit()


# use update 
stmt = (update(User).where(User,name.in_(["squidward", "sandy"])).values(fullname="Name starts with S"))

db.execute(stmt)

```



```python
# query不推荐 legacy
session.query.update

session.obj.id = 1
session.update

session.add

# 使用update语句
from sqlalchemy import update

stmt = (
    update(user_table).
    where(user_table.c.id == 5).
    values(name='user #5')
)

db.execute(stmt)
```

```python

from sqlalchemy import bindparam
```



### 查

```python
# 现在首推 select


session.execute(
  select(User)
).scalars().all()

# or

session.scalars(
  select(User)
).all()


# ORM 风格
# 如果是 主键
Session.get

# select 也是orm 风格主推




```

### 删

```python

# ORM 风格
Session.delete()

# SQL 风格
```





```python 
# 旧版本迁移
# https://docs.sqlalchemy.org/en/20/changelog/migration_20.html#migration-20-query-usage

```

| [1.x style](https://docs.sqlalchemy.org/en/20/glossary.html#term-1.x-style) form | [2.0 style](https://docs.sqlalchemy.org/en/20/glossary.html#term-2.0-style) form | See Also                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `session.query(User).get(42)`                                | `session.get(User, 42)`                                      | [ORM Query - get() method moves to Session](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html#migration-20-get-to-session) |
| `session.query(User).all()`                                  | `session.execute(  select(User) ).scalars().all() # or session.scalars(  select(User) ).all()` | [ORM Query Unified with Core Select](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html#migration-20-unify-select)[`Session.scalars()`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session.scalars)[`Result.scalars()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result.scalars) |
| `session.query(User).\  filter_by(name="some user").\  one()` | `session.execute(  select(User).  filter_by(name="some user") ).scalar_one()` | [ORM Query Unified with Core Select](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html#migration-20-unify-select)[`Result.scalar_one()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result.scalar_one) |
| `session.query(User).\  filter_by(name="some user").\  first()` | `session.scalars(  select(User).  filter_by(name="some user").  limit(1) ).first()` | [ORM Query Unified with Core Select](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html#migration-20-unify-select)[`Result.first()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result.first) |
| `session.query(User).options(  joinedload(User.addresses) ).all()` | `session.scalars(  select(User).  options(    joinedload(User.addresses)  ) ).unique().all()` | [ORM Rows not uniquified by default](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html#joinedload-not-uniqued) |
| `session.query(User).\  join(Address).\  filter(    Address.email == "e@sa.us"  ).\  all()` | `session.execute(  select(User).  join(Address).  where(    Address.email == "e@sa.us"  ) ).scalars().all()` | [ORM Query Unified with Core Select](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html#migration-20-unify-select)[Joins](https://docs.sqlalchemy.org/en/20/orm/queryguide/select.html#orm-queryguide-joins) |
| `session.query(User).\  from_statement(    text("select * from users")  ).\  all()` | `session.scalars(  select(User).  from_statement(    text("select * from users")  ) ).all()` | [Getting ORM Results from Textual Statements](https://docs.sqlalchemy.org/en/20/orm/queryguide/select.html#orm-queryguide-selecting-text) |
| `session.query(User).\  join(User.addresses).\  options(    contains_eager(User.addresses)  ).\  populate_existing().all()` | `session.execute(  select(User)  .join(User.addresses)  .options(    contains_eager(User.addresses)  )  .execution_options(      populate_existing=True  ) ).scalars().all()` | [ORM Execution Options](https://docs.sqlalchemy.org/en/20/orm/queryguide/api.html#orm-queryguide-execution-options)[Populate Existing](https://docs.sqlalchemy.org/en/20/orm/queryguide/api.html#orm-queryguide-populate-existing) |
| `session.query(User).\  filter(User.name == "foo").\  update(    {"fullname": "Foo Bar"},    synchronize_session="evaluate"  )` | `session.execute(  update(User)  .where(User.name == "foo")  .values(fullname="Foo Bar")  .execution_options(    synchronize_session="evaluate"  ) )` | [ORM-Enabled INSERT, UPDATE, and DELETE statements](https://docs.sqlalchemy.org/en/20/orm/queryguide/dml.html#orm-expression-update-delete) |
| `session.query(User).count()`                                | `session.scalar(  select(func.count()).  select_from(User) ) # or session.scalar(  select(func.count(User.id)) )` | [`Session.scalar()`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session.scalar) |



## Transaction

### Links

- [Transactions and Connection Management[¶](https://docs.sqlalchemy.org/en/20/orm/session_transaction.html#transactions-and-connection-management)](https://docs.sqlalchemy.org/en/20/orm/session_transaction.html)

### 事务

> [!Tip]
>
> 将会话和事务写在一起

```python
# create session and add objects
with Session(engine) as session, session.begin():
    session.add(some_object)
    session.add(some_other_object)
# inner context calls session.commit(), if there were no exceptions
# outer context calls session.close()


```



##  asyncio

- [sqlalchemy asyncio](https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html)
- [ORM Session API Documentation](https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html#orm-session-api-documentation)

## constraint-约束

> [SQLAlchemy: Constraint-约束](https://docs.sqlalchemy.org/en/20/core/constraints.html)

### ForeignKey

```python
from sqlalchemy import ForeignKey, ForeignKeyConstraint

# on update, on delete
child = Table(
    "child",
    metadata_obj,
    Column(
        "id",
        Integer,
        ForeignKey("parent.id", onupdate="CASCADE", ondelete="CASCADE"),
        primary_key=True,
    ),
)

composite = Table(
    "composite",
    metadata_obj,
    Column("id", Integer, primary_key=True),
    Column("rev_id", Integer),
    Column("note_id", Integer),
    ForeignKeyConstraint(
        ["rev_id", "note_id"],
        ["revisions.id", "revisions.note_id"],
        onupdate="CASCADE",
        ondelete="SET NULL",
    ),
)
```



## relationship

[sqlalchemy:relationships](https://docs.sqlalchemy.org/en/20/orm/basic_relationships.html)

### many-to-many

[sqlalchemy:relationships#manyt-to-many](https://docs.sqlalchemy.org/en/20/orm/basic_relationships.html#many-to-many)

关联表命名惯例: 

方式一表名组合(user_course), 

方式二业务场景(appointment(预约), 病人(patient), 医生(doctor)) 



```python
from __future__ import annotations

from sqlalchemy import Column
from sqlalchemy import Table
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import relationship


class Base(DeclarativeBase):
    pass


association_table = Table(
    "association_table",
    Base.metadata,
    Column("left_id", ForeignKey("left_table.id"), primary_key=True),
    Column("right_id", ForeignKey("right_table.id"), primary_key=True),
)


class Parent(Base):
    __tablename__ = "left_table"

    id: Mapped[int] = mapped_column(primary_key=True)
    children: Mapped[List[Child]] = relationship(
        secondary=association_table, back_populates="parents"
    )


class Child(Base):
    __tablename__ = "right_table"

    id: Mapped[int] = mapped_column(primary_key=True)
    parents: Mapped[List[Parent]] = relationship(
        secondary=association_table, back_populates="children"
    )
```

## 

## Table 声明

> [!Note]
>
> Above, when Declarative processes each class attribute, each [`mapped_column()`](https://docs.sqlalchemy.org/en/20/orm/mapping_api.html#sqlalchemy.orm.mapped_column) will derive additional arguments from the corresponding [`Mapped`](https://docs.sqlalchemy.org/en/20/orm/internals.html#sqlalchemy.orm.Mapped) type annotation on the left side, if present. Additionally, Declarative will generate an empty [`mapped_column()`](https://docs.sqlalchemy.org/en/20/orm/mapping_api.html#sqlalchemy.orm.mapped_column) directive implicitly, whenever a [`Mapped`](https://docs.sqlalchemy.org/en/20/orm/internals.html#sqlalchemy.orm.Mapped) type annotation is encountered that does not have a value assigned to the attribute (this form is inspired by the similar style used in Python [dataclasses](https://docs.python.org/3/library/dataclasses.html)); this [`mapped_column()`](https://docs.sqlalchemy.org/en/20/orm/mapping_api.html#sqlalchemy.orm.mapped_column) construct proceeds to derive its configuration from the [`Mapped`](https://docs.sqlalchemy.org/en/20/orm/internals.html#sqlalchemy.orm.Mapped) annotation present.
> 上面，当 Declarative 处理每个类属性时，每个 `mapped_column()` 将从左侧相应的 `Mapped` 类型注释（如果存在）派生附加参数。此外，每当遇到没有为属性分配值的 `Mapped` 类型注释时，声明式都会隐式生成一个空的 `mapped_column()` 指令（这种形式的灵感来自于使用的类似样式）在 Python 数据类中）；此 `mapped_column()` 构造继续从存在的 `Mapped` 注释派生其配置。

### Links

- [Table Configuration with Declarative](https://docs.sqlalchemy.org/en/20/orm/declarative_tables.html#declarative-table-with-mapped-column)
- [ORM Mapped Class Configuration](https://docs.sqlalchemy.org/en/20/orm/mapper_config.html)

## 核心特性

### Relationship Attributes

- [sqlmodel relationship attribute](https://sqlmodel.tiangolo.com/tutorial/relationship-attributes/)

What Are These Relationship Attributes[¶](https://sqlmodel.tiangolo.com/tutorial/relationship-attributes/define-relationships-attributes/#what-are-these-relationship-attributes)



> [!tip]
>
> These new attributes are not the same as fields, they **don't represent a column** directly in the database, and their value is not a singular value like an integer. Their value is the actual **entire object** that is related.
>
> So, in the case of a `Hero` instance, if you call `hero.team`, you will get the entire `Team` instance object that this hero belongs to. ✨
>
> For example, you could check if a `hero` belongs to any `team` (if `.team` is not `None`) and then print the team's `name`:
>
> ```python
> if hero.team:
>     print(hero.team.name)
> ```
>
> 

高级配置接口, 用于方便直接从主对象操作或访问关联对象



## 常见需求

### 关于mysql 存储bool值, 选择Boolean即可, SQLAlchemy会自动将其映射为TINYINT(1)

```python
# 统计

session.scalar(
  select(func.count()).
  select_from(User).where(stmt.whereclause)
)

# 分页时 count 需要同步过滤 

# or

session.scalar(
  select(func.count(User.id))
)
```

### 多数据库binds

Session.binds

sessionmaker.binds

动态绑定

### 跨库查询

> 分多引擎跨库和单引擎跨库

### 字段过滤器

```python
def field_filter(model: Type[T], data: dict | list[dict]) -> list[dict]:
    """
    过滤字段, 仅当字段存在于表中才会保存
    """
    if isinstance(data, dict):
        data = [data]
    new_data = []
    for item in data:
        new_data.append({key: value for key, value in item.items() if key in model.__table__.columns})
    return new_data

    # return {key: value for key, value in data.items() if key in model.__table__.columns}

```



## 常见问题

### aiomysql循环异常关闭

```python
async def async_main():
    engine = create_async_engine(
        "mysql+aiomysql://root:toor@172.17.0.3/test",
        echo=False,
    )

    (...)
    await engine.dispose()


asyncio.run(async_main())
```



# redis

## 最佳实践



### 结果为str而不是bytes

decode_responses=True, 注意连接池



# pymongo



# pika

# aio_pika

# anyio

# httpx

# openai

## 配置代理

- [Configuring the HTTP client](https://github.com/openai/openai-python#configuring-the-http-client)

```python
client = OpenAI(
  http_client=httpx.Client(proxy)
)
```



# anthropic

# requests

# pandas

# numpy

# **Pillow**

# OpenCV

> [Guest Post: Four Ways To Quickly Display OpenCV Images During Debugging](https://blog.jetbrains.com/pycharm/2023/10/guest-post-four-ways-to-quickly-display-opencv-images-during-debugging/)



# celery

[Celery Docs](https://docs.celeryq.dev/)

## Overview

### What's Task Queue?

Task queues are used as a mechanism to distribute work across threads or machines.

A task queue's input is a unit of work, called a task, dedicated worker processes then constantly monitor the queue for new work to perform.

> [!note]
>
> 任务队列的输入是一个工作单元, 叫作任务, 专门的worker处理然后持续的监控队列以执行新的工作



# channels

# apscheduler



# tenacity-重试库

# `backoff`-回退/重试(Deprecated)

# watchdog

pathlib

# pyyaml

# **dateutil**

# Arrow

# **Cryptography**

https://github.com/pyca/cryptography



# **memory_profiler**



# websockets

> [!tip]
>
> 类似: websocket-client



# playwright

## Links

- [codegen](https://playwright.dev/python/docs/codegen)
- [鼠标事件-mouse](https://playwright.dev/python/docs/api/class-mouse)

### 必读

- [其他选择器: https://playwright.dev/python/docs/other-locators](https://playwright.dev/python/docs/other-locators)



### Articles/教程

- [playwright 持久化登录]https://mp.weixin.qq.com/s/Ndxw_pqxosMmT5KTdbIN8g

## features

## use-scenarios

- 文件下载
- 图片下载
- 截图

## Tips

- codegen
- chrome devtools 节点复制各种风格的选择器(xpath, js, css)
- 通过cookie, token等实现持久化登录



## quickstart

```shell
pip install playwright

playwright install



获取新的打开的页面
```

headless 模式, 允许无浏览器界面运行

### 调试模式

await page.pause()

> [!Note]
>
> ✨:robot: 在使用 Playwright 进行爬虫开发时，调试模式可以帮助你更方便地观察网页加载过程和调试代码。Playwright 提供了一些有用的功能来支持调试，包括无头模式、自动暂停以及浏览器开发工具。
>
> 以下是一些启用 Playwright 调试模式的技巧和方法：
>
> ### 1. 启用无头模式
>
> 无头模式（headless mode）是在没有图形界面的情况下运行浏览器。要禁用无头模式（即启用有头模式），可以设置 `headless=False`：
>
> ```
> python
> Copy code
> browser = await p.chromium.launch(headless=False)
> ```
>
> ### 2. 使用 `pause` 方法
>
> Playwright 提供了 `page.pause()` 方法，可以在脚本中暂停执行，并打开浏览器开发工具，允许你手动进行交互和调试。
>
> ```
> python
> Copy code
> await page.pause()
> ```
>
> ### 3. 调试时自动打开开发工具
>
> 你可以在启动浏览器时，自动打开开发工具：
>
> ```
> python
> Copy code
> browser = await p.chromium.launch(headless=False, devtools=True)
> ```
>
> ### 4. 使用 `DEBUG` 环境变量
>
> 通过设置 `DEBUG` 环境变量，你可以启用 Playwright 的调试日志输出。这在查看执行过程中发生的事件和步骤时非常有用。
>
> ```
> bash
> Copy code
> DEBUG=pw:api python your_script.py
> ```
>
> ### 示例脚本
>
> 下面是一个完整的示例脚本，展示了如何在调试模式下使用 Playwright：
>
> ```python
> python
> Copy code
> import asyncio
> from playwright.async_api import async_playwright
> 
> async def main():
>     async with async_playwright() as p:
>         # 启用有头模式并自动打开开发工具
>         browser = await p.chromium.launch(headless=False, devtools=True)
>         page = await browser.new_page()
> 
>         # 导航到目标网址
>         await page.goto('https://filatz.tmall.com')
> 
>         # 使用 pause 方法暂停执行
>         await page.pause()
> 
>         # 等待图片加载
>         await page.wait_for_selector('img')
> 
>         # 获取所有图片的 src 属性
>         img_elements = await page.query_selector_all('img')
>         img_urls = [await img.get_attribute('src') for img in img_elements if await img.get_attribute('src')]
> 
>         # 输出抓取到的图片 URL
>         for url in img_urls:
>             print(url)
> 
>         await browser.close()
> 
> # 异步运行主函数
> asyncio.run(main())
> ```
>
> ### 调试技巧
>
> 1. **逐步调试：** 使用 `await page.pause()` 在脚本执行过程中暂停，允许你在当前状态下手动检查页面元素和状态。
>
> 2. **查看日志：** 设置 `DEBUG` 环境变量，可以查看详细的执行日志。
>
> 3. **使用浏览器开发工具：** 启动有头模式并自动打开开发工具，可以方便地检查 DOM 结构，网络请求，控制台输出等。
>
> 4. **截图和 PDF：** 在关键步骤处截取页面截图或生成 PDF，以便离线查看页面状态。
>
>     ```
>     python
>     Copy code
>     await page.screenshot(path='screenshot.png')
>     await page.pdf(path='page.pdf')
>     ```
>
> 通过以上方法和技巧，你可以在开发和调试 Playwright 脚本时更加高效，快速找到并解决问题。如果有进一步的问题或需要更多的帮助，请随时告诉我。

### 选择新打开的页面

```python
with context.expect_page() as new_page_info:
	page.click("selector-for-link-or-button")

new_page = new_page_info.value
new_page.wait_for_load_state('load')
new_page.goto("https://example.com/new-page")  # 这是一个示例操作

```

### locator 迭代

```python
# 方法一 element_handles(推荐)
locators = await page.locator('css=your-selector').element_handles()
for locator in locators:
  ...

# 方法二 使用 locator.count() 和 locator.nth() 方法

	
```



## 元素操作与选择

## 核心API

goto-加载页面

### wait_for_load_state

#### load(Load)

dom css 样式这些均加载完成

#### domcontentloaded(DOMContentLoaded)



## 常见需求

### 拦截请求(Abort Request)

> https://playwright.dev/python/docs/network#abort-requests

> [!Tip]
>
> 可以同时对多个路由进行拦截
>
> 当路由范围过于广时可以通过正则表达式再次进行精确过滤, 如果希望对部分子路由进行放行则使用`route.continue_()`

### 拦截并记录请求



### 获取数据

#### 获取整个页面文档

```python
html_content = await page.content()
    print(f"HTML content: {html_content}")
```

#### 使用xpath等解析文档

beautifulsoup4

lxml

html.parse(标准库)

```python
  html = page.content()
  tree = etree.HTML(html)
  from lxml import etree


```



#### 文本数据: 通过text_cotent

locator.text_content()

```python
h1_text = await page.locator('h1').text_content()
    print(f"h1 text: {h1_text}")
```

#### 通过元素属性get_attribute

```python
    # 获取 a 元素的 href 属性
    href = await page.locator('a').get_attribute('href')
    print(f"href: {href}")
```

#### 通过evaluate方法执行js

```python
 # 使用 evaluate 方法执行 JavaScript 获取所有 a 元素的 href 属性
    hrefs = await page.evaluate('Array.from(document.querySelectorAll("a")).map(a => a.href)')
    print(f"hrefs: {hrefs}")
```

通过 `evaluate_all`获取一组数据

#### 通过API

### 爬取图片

#### handle_route

##### 内置的持久(复用playwright上下文)

##### route.fetch

#### page.on

### dom-url

通过 evaluate函数

httpx 



### 分页处理(pagination)

#### 主要思想

- 通过点击下一页
- 通过URL查询参数迭代 API
- 获取最大页数
    - 通过API
    - 通过页面元素

- 并发提取页面





### 屏幕滚动(scrolling)

[Scrolling](https://playwright.dev/python/docs/input#scrolling)

> 主要有三种思路
>
> page.scroll_into_view_if_needed()
>
> If you would like to control the scrolling more precisely, use [mouse.wheel()](https://playwright.dev/python/docs/api/class-mouse#mouse-wheel) or [locator.evaluate()](https://playwright.dev/python/docs/api/class-locator#locator-evaluate):

Most of the time, Playwright will automatically scroll for you before doing any actions. Therefore, you do not need to scroll explicitly.

```python
# Scrolls automatically so that button is visible
await page.get_by_role("button").click()
```



```python
# Scroll the footer into view, forcing an "infinite list" to load more content
await page.get_by_text("Footer text").scroll_into_view_if_needed()
```



```python
# Position the mouse and scroll with the mouse wheel
await page.get_by_test_id("scrolling-container").hover()
await page.mouse.wheel(0, 10)

# Alternatively, programmatically scroll a specific element
await page.get_by_test_id("scrolling-container").evaluate("e => e.scrollTop += 100")
```

### 保存状态信息(state)

> 主要通过
>
> [重用认证状态(Reuse Authentication State)](https://playwright.dev/python/docs/api-testing#reuse-authentication-state)
>
> [Reusing signed in state](https://playwright.dev/python/docs/auth#reusing-signed-in-state)

```python
request_context = playwright.request.new_context(http_credentials={"username": "test", "password": "test"})
request_context.get("https://api.example.com/login")
# Save storage state into a variable.
state = request_context.storage_state()

# Create a new context with the saved storage state.
context = browser.new_context(storage_state=state)
```



## 常见问题

- 并发问题;
- 懒加载, 拦截image,加载







# ---

# ploars

# accelerate

# transformers

