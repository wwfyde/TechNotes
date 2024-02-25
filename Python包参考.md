# Python Packages

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



## typing-类型提示

> 相关提案: 
>
> - PEP-484: https://www.python.org/dev/peps/pep-0484/
>

## 索引

`type hints` `type annotations` `types intro`

`类型提示` `类型注解`

## 好处

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

带有参数类型的泛型

- dict
- list
- set
- tuple





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

## JSON

# **asyncio**(std)

## Links

- [Coroutines and Tasks](https://docs.python.org/3/library/asyncio-task.html)
- [Python并发编程](Python并发编程)

# typing



## Core



### TypedDict

```python
class Point2D(TypeDict):
  x: int
  y: int
  label: 
```



# ---



# pydantic

# dotenv

## 概述

可以使用pydantic提供的env特性

## 参考资料

- https://github.com/theskumar/python-dotenv
- https://saurabh-kumar.com/python-dotenv/



# **pytest**

# alembic

```shell
# 查看修订版本
alembic history

# 查看信息
alembic current

# 重置到初始化(downgrade back to nothing)
alembic downgrade base
```

# SQLAlchemy

## 参考资料

- [GitHub官方代码示例](https://github.com/sqlalchemy/sqlalchemy/tree/main/examples)
- [Data Manipulation with the ORM](https://docs.sqlalchemy.org/en/20/tutorial/orm_data_manipulation.html)
- [Session API](https://docs.sqlalchemy.org/en/20/orm/session_api.html)
- [](https://docs.sqlalchemy.org/en/20/orm/session_basics.html#id1)

## 基础增删改查



### 改

分为 ORM风格和Core风格

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





# mysql-connector-python

## 返回字典类型

## json字符串

# anyio

# httpx

# requests

# pandas

# numpy

# Pillow

# OpenCV



# celery

# channels

# apscheduler



# tenacity-重试库

# `backoff`-回退/重试

# watchdog

pathlib

# pyyaml

# dateutil

# Arrow

# **Cryptography**



# **memory_profiler**



# ---

# accelerate

# transformers

