# python高级编程

<!--TODO -->

TODO 最后整理成 概念化的知识, 将笔记整理一波

建立对偶 高级理解 重新加深认识 从多个层面多个维度来理解同一个思维 层级 

一个 层面 分多个层级 

一个维度 是指的 使用另一种看待事物的方式

# Glossary

## Lists

- 非线程安全
    - 在Python中处理非线程安全（Not Thread Safe）的对象时，需要格外小心，以避免出现数据竞争、状态不一致、程序崩溃等问题。非线程安全对象在多线程环境下共享时，如果没有适当的同步机制，可能会导致不可预测的结果。以下是一些注意事项和建议，帮助你安全地使用这些对象：
    - 解决方案
        - 使用锁和信号量

# **一切皆对象**

## 2.1 python中一切皆是对象

- 讲解动态语言和静态语言的区别
- 函数和类也是对象，属于python的一等公民

  - 1. 赋值给一个变量
  - 2. 可以添加到集合对象中 
  - 3. 可以作为参数传递给函数
  - 4. 可以当做函数的返回值

## 2.2 type、object和class的关系

#### type

作用: 生成类对象, 返回对象的类型(父类)

type可以生成类和返回对象的类型

type也是一种类

一般的类时由type这个类来生成的

一般的对象则是由类对象来生成的



type -> int -> 1

type -> class -> object

#### object

object是所有类都要继承的基础类

object是最顶层的基类,object是有type来实现的

`__bases__`  和  `__base__`可以用来检查类对象的基类

```python
int.__bases__
type.__bases__  
```

**Type是一个类,也是一个对象**

**object是最顶层基类**

**object是type的实例，而type又继承自object**

**type既是自身的实例又是object的实例**

Type是object类的实例

Type是继承自object类的

type -> object

object -> type

```python
# type由object实现, object由type实现
type(object)
Out[26]: type

type.`__base__`
Out[27]: object
    
type(type)	
Out[28]: type
object.`__base__`


```



## 2.3 python中的常见内置类型

- 对象的三个特征

  - 身份 : identify
  - 类型 : type
  - 值 : value

- None(全局只有一个)
- 数值

  - int
  - float
  - complex（复数）
  - bool

- 迭代类型
- 序列类型

  - list
  - bytes、bytearray、memoryview（二进制序列）
  - range
  - tuple
  - str
  - array

- 映射(dict)
- 集合

  - set
  - frozenset

- 上下文管理类型（with）
- 其他

  - 模块类型
  - class和实例
  - 函数类型
  - 方法类型
  - 代码类型
  - object对象
  - type类型
  - ellipsis类型
  - notimplemented类型

## 2.4 本章小节

# 魔法函数

## 3.1 什么是魔法函数

## 3.2 python的数据模型以及数据模型对python的影响

## 3.3 魔法函数一览

- 3.3.1 非数学运算

  - 字符串表示

    - `__repr__` : reputation 对象的声誉 
    - `__str__` : 对象的描述

  - 集合、序列相关

    - `__len__`
    - `__getitem__`
    - `__setitem__`
    - `__delitem__`
    - `__contains__`

  - 迭代相关

    - `__iter__`
    - `__next__`

  - 可调用

    - `__call__`

  - with上下文管理器

    - `__enter__`
    - `__exit__`

  - 数值转换

    - `__abs__`
    - `__bool__`
    - `__int__`
    - `__float__`
    - `__hash__`
    - `__index__`

  - 元类相关

    - `__new__`
    - `__init__`

  - 属性相关

    - `__getattr__`、 `__setattr__`
    - `__getattribute__`、setattribute__
    - `__dir__`

  - 属性描述符

    - `__get__`、`__set__`、 `__delete__`

  - 协程

    - `__await__`、`__aiter__`、`__anext__`、`__aenter__`、`__aexit__`

- 3.3.2 数学运算
- 一元运算符
  
  - `__neg__`（-）、`__pos__`（+）、`__abs__`
  
- 二元运算符
  
  - `__lt__`(<)、 `__le__` <= 、 `__eq__` == 、 `__ne__` != 、 `__gt__` > 、 `__ge__` >=
  
- 算术运算符
  
  - `__add__` + 、 `__sub__` - 、 `__mul__` * 、 `__truediv__` / 、 `__floordiv__` // 、 __
      mod__ % 、 `__divmod__` divmod() 、 `__pow__` ** 或 pow() 、 `__round__` round()
  
- 反向算术运算符
  
  - `__radd__` 、 `__rsub__` 、 `__rmul__` 、 `__rtruediv__` 、 `__rfloordiv__` 、 `__rmod__` 、
      `__rdivmod__` 、 `__rpow__`
  
- 增量赋值算术运算符
  
  - `__iadd__` 、 `__isub__` 、 `__imul__` 、 `__itruediv__` 、 `__ifloordiv__` 、 `__imod__` 、
      `__ipow__`
  
- 位运算符
  
  - `__invert__` ~ 、 `__lshift__` << 、 `__rshift__` >> 、 `__and__` & 、 `__or__` | 、 __
      xor__ ^
  
- 反向位运算符
  
  - `__rlshift__` 、 `__rrshift__` 、 `__rand__` 、 `__rxor__` 、 `__ror__`
  
- 增量赋值位运算符
  
  - `__ilshift__` 、 `__irshift__` 、 `__iand__` 、 `__ixor__` 、 `__ior__`

## 3.4 随便举个例子说明魔法函数的重要性(len函数)

## 3.5 本章小节

# 深入类和对象

## 4.1 鸭子类型和多态duck typing

名称索引 : 鸭子类型, duck typing

基础语义 : 调用不同子类 产生不同的行为

python中 多态是天然的 直接用魔法方法 和方法就可以实现

所有类都实现了同一个方法, 则这些类可以同时都调用该方法来实现相似的效果从而实现多态

**特性表征** : 一种动态类型风格, 一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由"当前方法和属性的集合"决定。注的不是对象的类型本身，而是它是如何使用的。

**应用场景** : 实现多态, 不同的对象实现了同一个方法, 实现统一调用

## 4.2 抽象基类(abc模块)

abstract base class

python中变量是可以指向任何数据类型的对象, 从语言层面上就已经支持多态了

动态语言不需要去显式的指明变量的类型, 动态语言也就少了一个编译时检查错误的过程, 运行时才会知道错误

**作用** : 可以实现静态检查

一个类是什么类型有什么特性, 是由它的魔法函数决定的 这种特性 **在Python也叫满足了某个协议** 编程的时候需要劲量的遵循Python的协议

定义 概念 : 类中设定好了一些方法 所有的继承这个基类的类和实例都会覆盖这个抽象基类的类和方法, 抽象基类无法用来实例化的

理解表征 : 类似java中的接口

特点 : 不能实例化 

所有的抽象基类都metaclass都必须是 ABCMeta

---

**应用场景** : 

检查某个类是否具有某种方法, 判断某个对象的类型

强制某个子类必须实现某个方法,设计一个抽象基类 必须实现某种方法(接口), 如果不定义好这些接口的话, 用户就需要切换到源代码中取修改

*[ 定义一类对象的协议, 使其满足相同的语义 ]*

abc 必须实现某种方法 不然会报错 必须重载方法, 强制子类必须去实现某种方法

*[ 运行时抛出异常, 初始化时抛出异常 ]*

**通用抽象基类** : 

作用 帮助我们去了解 某种数据结构的接口

## 4.3 使用isintance而不是type

type(B) 会指向 B的模板对象

而isinstance(B), 还会指向被继承的父对象, 所以 更加准确和

## 4.4 类变量和对象变量

类变量 字段 fileds class variables

**类变量是可变的 可以修改的, 相应的实例变量也会产生改变**

**但是修改实例变量的类变量时, 类变量不变, **

**这说明二者是独立的内存空间, 只不过是根据类派生出来的而已**

当对实例对象的类变量进行赋值时会形成新的内存空间, 这个时候再修改类变量时, 修改过的实例的类变量不会改变, 而其他未修改过的实例的类变量会发生变化

对象变量 实例变量 instance variables

self, 传入的参数 是 类的实例, 表示实例本身

先查找实例变量, 再查找类变量, 逐层向上查询

## 4.5 类属性和实例属性以及查找顺序

一般情况都是自下而上的查找顺序

但是多继承场景下呢, python3默认是C3算法(菱形继承 举例)

C3算法 解决菱形继承的时候的查找顺序问题 判断 父类是否还有子类 如果有子类 就跳过当前父类, 寻找下一个父类还有子类

原则是, 当前类 不能有子类 的条件下 的 深度 - 广度 (优先子类)

经典类MRO算法 是采取深度优先算法





## 4.6 静态方法、类方法以及对象方法

静态方法 

好处 : 将命名空间放到类里面来了, 类似于一个通用的工具库, 方便多次使用, 静态方法不需要传递实例本身, 

应用场景 : 

不好的地方是: 当类名称改了时, 静态方法中 需要跟着改, 

```python
@staticmethod
def date_from_string(data_string):
    year, month, day = tuple(date_string.split('-'))
    return Date(int(year), int(month), int(day))
```



类方法 class method

cls 表示 : 类本身, 传递类对象, 可以避免硬编码的方式, 具有更高的灵活性

和实例方法的区别 : 是传递的类对象cls,(规范, 占位符) 

应用场景 : 

```python
@classmethod
def from_string(cls,data_str):
     year, month, day = tuple(date_string.split('-'))
    return cls(int(year), int(month), int(day))  # 这样用法有效
```



实例方法 : 普通的方法都是实例方法 

`new_day.tomorrow()` 会被python自动转换成 `tomorrow(new_day)` 实例方法会把自己传递进去

## 4.7 数据封装和私有属性

数据封装 : 

私有属性 : 双下划线 `__` | 私有属性 只能通过内部方法进行访问, 不能通过外部访问

双下划线 实质上内部被转化成 `instance._classname__attr` 例如 `user._User__birthday` **并非绝对的私有属性, 并非绝对安全, java也是** 这种做法的是让代码更加规范, 可以通过某种机制 访问私有属性的值, 这种变形机制可以有效的访问数据

``` python
class User:
    def __init__(self, birthday):
        self.__birthday = birthday
    
    def get_age():
        return 2020 - self.__birthday
    

user = User(2010)

print(user.__birthday)  # 这种方式无法访问
print(user._User__birthday)
```



## 4.8 python对象的自省机制

自省是 通过一定的机制查询到对象的内部结构

**计算机编程中，自省是指这种能力：检查某些事物以确定它是什么、它知道什么以及它能做什么。自省向程序员提供了极大的灵活性和控制力**。

说的更简单直白一点：**自省就是面向对象的语言所写的程序在运行时，能够知道对象的类型。简单一句就是，运行时能够获知对象的类型**。

函数用法 : `dir()` - `type()` - `hasattr()` - `isinstance()`

属性 自省 `__dict__	`

可以通过 `user.__dict__['name'] = 'Asa'` 给 user对象赋值

## 4.9 super函数

一般理解 调用 父类 

其实是利用 mro顺序 向上查找

重写了构造函数, 为什么还要调用super ?

super函数的执行顺序>? 

作用 : 重用代码

示例 : `super.__init__(name=name)`

本质是利用了 `mro` 查找顺序 并不是严格的调用父类  表示向上查找

## 4.10 django rest framework中对多继承使用的经验

java 只能继承一个类 可以继承多个接口

python可以继承多个类

使用多继承进行编码 实际上在python中我们编码不推荐大家使用多继承, 多继承如果设计的不好的话容易造成多继承的混乱

python中 有一种推荐的做法 叫 `mixin` 的 混合模式 

**mixin模式特点**: 

1. mixin类的功能单一 只定义了有一个接口(函数) ; 

2. 可以理解为 java中的接口 **不和基类关联, 可以和任意基类组合**, 基类可以不和mixin关联就能初始化成功
3. 在mixin中不要使用 `super` 方法 
4. 类的名称尽量以 Mixin来结尾

mixin 降低了程序的复杂的 把 一个方法转换成了一个类来使用, 然后通过组合来实现强大的功能

这样一个类 像是一个接口一样 可以灵活的 组合多种接口

## 4.11 python中的with语

上下文管理器的本质 是一种协议 : 语法 - 语义 - 时序(顺序)

协议的好处是 python能够对其按照某种规则对其进行理解 实现再认

常见需求

1. 定义上下文管理器(类和对象)
2. 用 try...finally代替上下文管理器
3. 使用with语句实现调用上下文管理器对象
4. 使用contextlib简化上下文管理器 原生方式

```python
# 对return结果的存储 使用的栈的结构
try:
    pass
	return 1
except:
    pass
	return 2
else:
    pass
finally:
    pass
	return 4
```

目的就是为了 简化 try...finally结构的



with 实现的上下文管理器的特点 : 任何一个对象 都会 首先 调用 `__enter__`函数以 **获取资源** 进入上下文环境, 然后调用被调用的函数 最终调用 `__exit__	`函数以 **释放资源** 这是python的约定成俗的一种协议

## 4.12 contextlib实现上下文管理器

将上下文管理器进行简化 

```python
import contextlib

@contextlib.contextmanager
def file_open(file_name):
    print ("file open")
    yield {}
    print ("file end")

with file_open("bobby.txt") as f_opened:
    print ("file processing")
"""
执行结果 
file open 
yield--
file processing
file end
"""
```



## 4.13 本章小结

# 自定义序列类

序列类 : python中非常重要的一种协议. Python是基于协议来编程的

属于一种抽象基类  python中最基本的数据类型和对象	

**学习目标** : 

1. 将类变为一个序列类
2. python的内置结构中,那些是序列类的
3. 序列类型的协议和功能

## 5.1 序列类型的分类

数据类型实现 : 元类 > 基类 > 自定义类

高级对象实现 : 接口(自定义元类Mixin) > 类

python中 某种数据类型 具备某种特性, 其实就是具备某种协议 具备某种方法

### 容器序列

可以接收任意类型的数据 

- list、tuple、deque

### 扁平序列

- str、bytes、bytearray、array.array

### 可变序列

- list， deque，bytearray、array

### 不可变序列

- str、tuple、bytes

## 5.2 序列的abc继承关系

## 5.3 序列的+、+=和extend的区别

`+` 会判断元素的类型, 会创建一个新的对象

`+=` 的实际运行机制是 `__iadd__` 来实现的 其实是调用了 extend函数 使用的for 循环 可以与序列相加, 将数据中的值, 一个一个的append到list里面去

`extend`

**序列类型都是可迭代的**

注意 append 和 extend 的区别 append 直接把对象添加到原来的序列 而不会对其进行迭代

```python
a = [1, 2]
c = a + (3, 4)  # 会报错 __add__
a += (3, 4)  # 这种方式这不会报错, 其实是将序列(可迭代的)中的值遍历放置到 a 中
a.extend(range(3))  # 没有返回值, 其实是修改 a 这个序列
```



## 5.4 实现可切片的对象

> 核心思路 是 实现一个类 类中包含了一个属性 数据类型是可切片的 比如 列表 然后 重写一些方法来实现 这个类切片的时候  其实是切片 这个属性

一切皆对象, 一切皆协议. 对象的三大特征: 类型, 值, 名称. 属性调用, 方法调用. 先导入, 后使用. 

实现一个强大的对象可切片

必须的协议和方法

切片的主要方式 是用来取值, 其实切片方法还可以用来 **赋值**

列表尾部增加元素 `my_list[len(my_list):] = [1001]`

实现可切片对象, 就是实现相应的 方法 `__getitem__` `__reverse__` 

不可变序列 : Sequence << [Reverse, Collection]

Collection << [Sized, Iterable, Container]

可变序列 : MutableSequence << Sequence

`__setitem__`, `__delitem__`

重点实现 `__getitem__` 方法, 

如果要实现 切片之后, 还是当前的对象类型  则需要 queryset

初始化 slice对象, 交给`__getitem__` 方法, 这个是有Python解释器内部实现的.

传入`__getitem__`方法中的 item值, 其实是 [0] [:2] 分别表示整数时取值, [:2]时切片

```python
# 重写方法时, 依然可以利用原生的方法来实现一些功能, 比如魔术方法, 系统函数等, 这并不会影响, 整体的功能, 这些方法和函数已经被python内部函数实现了的
def __getitem__(self, item):
        cls = type(self)
        if isinstance(item, slice):
            # item 其实是[:2] [0] 数字中的值
            # 返回 一个实例对象, 实例对象
            return cls(group_name=self.group_name, company_name=self.company_name, staffs=self.staffs[item])
        elif isinstance(item, numbers.Integral):
            print(self.staffs[item])
            return cls(group_name=self.group_name, company_name=self.company_name, staffs=[self.staffs[item]])  # 注意这里的返回值 应该是个列表, self.staffs[0]是一个字符串
        pass
def __len__(self):
    return len(self.staffs)
def __iter__(self):
    return iter(self.staffs)
def __contains__(self, item):  # 这个时候是 in 的时候调用了in之前的对象
    if item in self.status:
        return True
    return False
```





## 5.5 bisect管理可排序序列

作用: 处理已排序序列的查找模块 

特点: 维持一个排序好的序列, 同时二分查找性能非常高

场景: 

[bisect](https://docs.python.org/zh-cn/3.8/library/bisect.html#module-bisect) --- 数组二分查找算法

bisect.bisect(a, x) -> insertion



## 5.6 什么时候我们不该用列表

array deque

`array` 的效率和性能会比 `list`高很多 但是只能放一种类型的数据

```python
# array, deque
# 数组
import array
#array和list的一个重要区别， array只能存放指定的数据类型
my_array = array.array("i") # 指定数据类型
my_array.append(1) 
my_array.append("abc")

```



## 5.7 列表推导式、生成器表达式、字典推导式

列表推导式 [ express itterable  condition ]

列表生成式 **性能高于** 列表操作

result = [ i for i in range(1,21) if i % 2 == 1] 

生成器表达式 ( express itterable  condition )

**生成器表达式可以直接转化为列表**

result = list(( i for i in range(1,21) if i % 2 == 1))

生成器比迭代器多了哪些方法呢?

字典推导式

a = ["a", "b", "c"]

b = [1, 2, 3]

my_dict = dict(zip(a, b))

反转 new_dict = {key: value for value, key in orig_dict.items()}

```python
#用简介的方式去遍历可迭代对象生成需要格式的列表
int_list = [1,2,3,4,5]

qu_list = [item * item for item in int_list]
print (type(qu_list))
int_list = [1,2,-3,4,5]

qu_list = [item if item > 0 else abs(item) for item in int_list]

#笛卡尔积
int_list1 = [1,2]
int_list2 = [3,4]

qu_list = [(first, second) for first in int_list1 for second in int_list2]

my_dict = {
    "key1":"bobby1",
    "key2":"bobby2"
}

# qu_list = [(key, value) for key, value in my_dict.items()]
#
# qu_list2 = list(((key, value) for key, value in my_dict.items()))
#
# for item in qu_list2:
#     print (item)

int_list = [1,2,3,4,5]

def process_item(item):
    return str(item)

int_dict = {process_item(item):item for item in int_list}
#列表生成式，第一：能用尽量用， 因为效率高
print (int_dict)


```

# 深入python的set和dict

## 6.1 先来看看collections中的abc

dict 是一种map类型  >> MutableMapping

## 6.2 dict的常见用法

```python
# 创建字典的方法
orig_dict = {'name': 'Asa', 'age', '25'}

orig_dict = dict(name='Asa', age=25, gender='M')

orig_dict = dict(zip(a, b))

items = [(1, 2), (3, 4),(5, 6)]
orig_dict = dict(items)

{key: value for value, key in items}
# get 
orig_dict.get('name', '')  # 如果没有则返回空值, 不会报错

# update
orig_dict.update(name_as='wwfyde')  # 关键词方式, 也可以传入字典

# setdefault
orig_dict.setdefault()
```

## 6.3 dict的子类

UserDict

- UserDict -- 推荐
- defaultdict
- `__missing__`方法 去设置默认值
- Counter
- 不要去继承内置类型， 有可能会失败比如update方法

## 6.4 set和frozenset

可变的 mutable 不可变的 frozen 

set 性能很高 都是用的hash数据结构 时间复杂度为1

```python
# 创建set的方式
orig_set = set('aasdfdsefg')
orig_set = {'a', 'b', 'd', 'c'}

# frozenset
s = frozenset('abcdesfgg')  # 应用 场景, 可以作为dict的key来使用


# 创建方法 
# difference 两个集合的差集, 返回一个新的集合


# 集合的常运算  '|' union联合  '&' 交集 '-' 差集 
#向set添加数据
another_set = set("cef")
re_set = s.difference(another_set)
re_set = s - another_set
re_set = s & another_set
re_set = s | another_set

#set性能很高
# | & -  #集合运算
print(re_set)

print (s.issubset(re_set))
# if "c" in re_set:
#     print ("i am in set")

```



## 6.5 dict和set实现原理

dict 性能 远远高于 list

实现原理 : 哈希表, 散列表 

哈希表的存储逻辑, 连续的数组, 向内侧申请连续的空间, 才可以有偏移量的情况, 一个哈希表的空间是固定的, 而且是不可能填满的, 当数据量>1/3的时候 会重新申请一个更大的空间, 将原来的数据复制到新的空间中去

array的时间复杂度为1

将一个值存储到hash中的步骤 , 计算key的哈希值,这个数值颗粒理解为 数组中的偏移量

哈希表查找步骤  有两个逻辑判断过程, 表元是否存在值, 键值是否相等, 不等则再重新查找

\#1. dict的key或者set的值 都必须是可以hash的

\#不可变对象 都是可hash的， str， fronzenset， tuple，自己实现的类 __hash__

\#2. dict的内存花销大，但是查询速度快， 自定义的对象 或者python内部的对象都是用dict包装的

\# 3. dict的存储顺序和元素添加顺序有关

\# 4. 添加数据有可能改变已有数据的顺序

## 6.6 本章小结

# 对象引用、可变性和垃圾回收

## 7.1 python变量到底是什么

java中变量是个容器, 有数据类型, 有大小. 预先声明了的

python的变量实质上是一个**指针**, 指针对象本身的大小是固定的, 但是变量指向的值 str, int 是不固定, 就是一个引用, 一个内存地址, 变量指向一块内存地址

`a = 1` 的python解释, 在内存中声明一个对象1, 然后将对象1的内存地址赋值给a

a可以指向任何对象, 变量本身没有固定的类型, 当说到类型时,其实是变量指向的对象的数据类型

## 7.2 ==和is的区别

== 判断值, is 判断指向的内存地址是否为同一个地址

## 7.3 del语句和垃圾回收

> 垃圾回收是针对 内存中的Python对象的销毁问题, 销毁

python中的垃圾回收采用的算法是引用计数, 计数Python管理的内存对象被引用的次数

del, 在删除对象时, 不一定会真正删除数据本身, 

内部实现是调用 对象的 `__del__`魔法函数, 可以通过对该方法进行重写实现, 删除前后, 的一些特定方

Deletion of a name removes the binding of that name (which must exist) from the local or global namespace, depending on whether the name occurs in a `global` statement in the same code block.

## 7.4 一个经典的错误

参数传递的时候, 指针引用, 确定对对象操作时, 需要考虑数据的类型是可变的还是不可变的, 因为对于不可变的数据类型, 在对其进行操作时可能会产生一个对象. 

`Company.__init__.__defaults__` 是 类的实例变量的默认值, 当未对该值进行初始化时, 该类的实例默认指向类的该实例变量的默认值(), 类在实例化的时候并没有重新赋值一份默认值出来.

**核心的问题是, 类的实例化机制, 类的方法的参数为实例化**

# 第八章 元类编程

>  控制类的实例化过程

类的定义由三个部分组成: class name、dictionary、base class. 

## 元类metaclass定义

"一种用于创建类的类。类定义包含类名、类字典和基类列表。元类负责接受上述三个参数并创建相应的类。大部分面向对象的编程语言都会提供一个默认实现。Python 的特别之处在于可以创建自定义元类。大部分用户永远不需要这个工具，但当需要出现时，元类可提供强大而优雅的解决方案。它们已被用于记录属性访问日志、添加线程安全性、跟踪对象创建、实现单例，以及其他许多任务。更多详情参见 [元类](https://docs.python.org/zh-cn/3/reference/datamodel.html#metaclasses)。"

"The class of a class. Class definitions create a class name, a class dictionary, and a list of base classes. The metaclass is responsible for taking those three arguments and creating the class. Most object oriented programming languages provide a default implementation. What makes Python special is that it is possible to create custom metaclasses. Most users never need this tool, but when the need arises, metaclasses can provide powerful, elegant solutions. They have been used for logging attribute access, adding thread-safety, tracking object creation, implementing singletons, and many other tasks.

More information can be found in Metaclasses."



## 8.1 property动态属性

> 计算属性

应用场景: 参数属性化

```text
对象属性查找顺序:

1.对象内部默认属性
2.
```

 

```python
# 计算年龄, 一般由出生日期计算得出
# 调用方法?

# 属性调用 
Xiao.age
```

## 8.2 `__getattr__`、`__getattribute__`魔法方法

>  订制属性访问(customizing attribute access)

### `__getattr__` : 查找不到属性时调用

返回计算属性或抛出`AttributeError`异常

当默认属性获取失败时, 该方法被调用.

### `__getattribute__`: 任何属性查找都会调用该方法

## 8.3 属性描述符和属性查找过程

类中实现 `__get__`、`__set__`、`__delete__`任意一方法都是属性描述符



重写 `__set__`方法可以做到对对象进行复制时, 进行数值检查



先查找实例中的属性, 然后查找类中的属性

user.age 等价于 getattr(user, 'age'), 首先调用`__getattribute__`. 如果定义了`__getattr__`



如果user是某个类的实例，那么user.age（以及等价的getattr(user,’age’)）

首先调用`__getattribute__`。如果类定义了`__getattr__`方法，

那么在`__getattribute__`抛出 AttributeError 的时候就会调用到`__getattr__`，

而对于描述符(`__get__`）的调用，则是发生在`__getattribute__`内部的。

user = User(), 那么user.age 顺序如下：



（1）如果“age”是出现在User或其基类的`__dict__`中， 且age是data descriptor， 那么调用其`__get__`方法, 否则



（2）如果“age”出现在user的`__dict__`中， 那么直接返回 obj.`__dict__`[‘age’]， 否则



（3）如果“age”出现在User或其基类的`__dict__`中



（3.1）如果age是non-data descriptor，那么调用其`__get__`方法， 否则



（3.2）返回 `__dict__`[‘age’]



（4）如果User有`__getattr__`方法，调用`__getattr__`方法，否则



（5）抛出AttributeError

## 8.4 `__new__`和`__init__`的区别

## 8.5 自定义元类

## 8.6 元类实现简单的orm

## 8.7 本章小结

# 第九章 迭代器和生成器

## 9.1 python的迭代协议

> 一种数据类型

用来访问集合类元素的一种方式, 用来遍历数据

\#迭代器和以下标的访问方式不一样， 迭代器是不能返回的, 迭代器提供了一种惰性方式数据的方式

list 是 `Iterable`类型, 但不是 `Iterator`



## 9.2 什么是迭代器和可迭代对象

## 9.3 生成器函数使用

## 9.4 生成器的原理

## 9.5 通过UserList来看生成器的应用

## 9.6 生成器实现大文件读取

## 9.7 本章小结

# 第十章 python socket编程

不使用应用层协议直接与TCP/UDP传输层和网络层 打交道

socket由操作系统提供

不需要与应用层协议打交道, 直接利用操作系统提供的socket与传输层协议(TCP/UDP)打交道

## 10.1 弄懂HTTP、Socket、TCP这几个概念

## 10.2 client和server实现通信

- 服务端
- 客户端
- socket发送http请求

  - 写类模拟urllib类

- urllib和socket区别

  - urllib支持client，但是socket支持server、client等等
  - urllib支持http、ftp等协议属于应用层是包装过socket的
  - 学习socket的目的不是为了让大家在任何时候都用socket去编程，而是要知道底层后期理解协程容易、以及具体问题在解决的时候首先能想到还有socket底层可以用

## 10.3 socket实现聊天和多用户连接

## 10.4 socket模拟http请求

## 10.5 本章小结

# 第十一章 多线程、多进程和线程池编程

## 11.1 python中的GIL

## 11.2 python多线程编程

> 核心是熟悉python的特性, 选择和合适的编程和技术选型方案 





对于I/O操作来说, 多线程和多进程编程的性能差别不大



主线程结束时kill 子线程, 选择使用setdaemon



主要有两种方法进行多线程编程,  第一类是使用 传入函数对象,  第二类是继承threading.Thread类, 进行方法重载.



当涉及到线程池编写的时候, 传入对象的方式将会更加简单

## 11.3 线程间通信-Queue

## 11.4 线程同步（Lock、RLock、Semaphores、Condition）

## 11.5 concurrent线程池编码

## 11.6 多进程编程-multiprocessing

## 11.7 进程间通信

## 11.8 本章小结

# 第十二章 协程和异步io

## 12.1 并发、并行、同步、异步、阻塞、非阻塞

## 12.2 C10K问题和io多路复用(select、poll、epoll)

## 12.3 epoll+回调+事件循环方式url

## 12.4 回调之痛

## 12.5 C10M问题和协程

## 12.6 生成器的send和yield from

## 12.7 生成器如何变成协程？

## 12.8 async和await原生协程

## 12.9 本章小结

# 第十三章 asyncio并发编程

> 包含各种特定系统实现的模块化事件循环
> 传输和协议抽象
> 对TCP、UDP、SSL、子进程、延时调用以及其他的具体支持
> 模仿futures模块但适用于事件循环使用的Future类
> 基于yield from的协议和任务，可以让你用顺序的方式编写并发代码必须使用一个将产生阻塞IO的调用时，有接口可以把这个事件转移到线程池
> 模仿threading模块中的同步原语、可以用在单线程内的协程之间

## 13.1 事件循环

## 13.2 协程嵌套

## 13.3 call_soon、call_later、call_at、call_soon_threadsafe

## 13.4 ThreadPoolExecutor+asyncio

## 13.5 asyncio模拟http请求

## 13.6 future和task

## 13.7 asyncio同步和通信

## 13.8 aiohttp实现高并发爬虫

## 13.9 本章小结

# 第十四章 课程总结





# ---

# PEP

## 544-Protocols: Structural subtyping (static duck typing)

> 抽象类, 接口, 协议(协议在此次的含义和接口类似)





# Python语法高级





# 装饰器-decorator

> 概念 + 特性 + 作用(是什么, 为什么) 用法 + 应用场景(怎么用 + 实践)
>
> 装饰器的应用场景, 
> 装饰器相较于闭包的明显特点
>
> 装饰器的语法格式
>
> PEP-318:https://peps.python.org/pep-0318/

匿名函数: 标识符 + 变量 : 表达式 lambda x : x + 1  



## 装饰器概念

装饰器的本质是在不修改函数的前提下为其提供新的功能	

**装饰器  **: 返回值为另一个函数的函数, 通常使用 `@wrapper` 语法(`@函数名`)形式进行函数变换. 

- 装饰器就是通过闭包来给原有函数增加新功能
- 装饰器是一个可调用的对象, 其参数是另一个函数(被装饰的函数); 装饰器可能会处理被装饰的函数, 然后把它返回, **或者将其替换成另一个函数或可调用对象**. 

函数装饰器用于在源码中"标记"函数, 以某种方式增强函数的行为. 这种功能利用了闭包的特性

面向对象中不用考虑`nonlocal`的问题, 但是涉及到闭包是需要考虑到这一关键字

<u>特性</u> 调用可调用对象 并返回可调用对象

带参数的装饰器 特性  先将参数传递给外函数 再将函数对象传递给这个返回了装饰器的装饰器中

装饰器具备<u>函数</u>/ <u>类</u> 特性， 所以可以对装饰器进行多重调用，甚至可以 多重装饰器调用。一定要理清楚调用顺序。尤其是在 调用 被修饰的函数时，被修饰的函数的调用 应该是最后完成的。 但是 在装饰器内部 先执行什么 后执行什么并不确定 装饰了什么由装饰器 定义

被修饰的函数 是 先被传入 最好 才调用该函数

个人理解: 装饰器原理:两次调用 第一次将被装饰的函数对象(含传入的参数)传入装饰器中, 并在内 

```python
# 以下两种方法在语义上完全等价
def f(...):
	...
f = staticmethod(f)  # 调用装饰器对象, 但是这样的写法 只会调用一次
# 执行原理 : 执行函数对象前, 先先执行装饰器函数 也就是说使用装饰器函数其实是调用装饰器, 会触发装饰器函数中的命令

f()  # 调用函数
# 带有装饰器的函数的执行原理是: 执行被装饰函数前, 现将该函数对象传入装饰器函数, 然后再执行返回的灵一个函数, 最后再再执行被装饰的函数 
# --- 分割线 ---

@staticmethod
def f(...):
	...
    
@staticmethod(a)
def f(b):
    pass

# 当调用上述变量时, 先执行装饰器中的内容和变量, 在将被装饰的函数和变量
```

**装饰器的作用**: 在不改变函数的代码前提下, 给函数添加新的功能, 能很好的提高开发效率

**装饰器使用前提**:

1. 存在闭包(用于扩展新的功能)
2. 待扩展的普通函数(目的是不改变该函数, 还增加新的功能)

开放封闭原则:同样适用于函数式编程. 它固定已经实现的功能代码不允许被修改, 但可以被扩展（不修改源代码的情况下，引用源代码来扩展目标函数的功能）

- 封闭: 已实现的功能代码块
- 开放: 对扩展开发

## 装饰器的应用场景

1. 引入日志
2. 函数执行时间统计
3. 执行函数前预备处理
4. 执行函数后清理功能
5. 权限校验等场景
6. 缓存

## 闭包

> 说出函数名复制给一个变量的作用
>
> 闭包的特点

### 函数概念的引用

```Python
def test():
    print('haha')
test1 =test

test1()
print(id(test))
print(id(test1))
```

说明:

函数名是一个特殊的变量(函数对象),是对定义函数(代码空间)的引用,因此也可以用其他变量进行引用

函数名()调用函数,让程序执行函数内的代码

## 闭包: closure 

> 一种数据结构, 函数和其环境变量

#### 概念

**闭包** 就是能够读取其他函数内部变量的函数. 在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

闭包 是 **函数式编程** 的重要的语法结构,   Python也支持这一特性

**在一个外函数中定义了一个内函数**,   内函数里运用了外函数的临时变量,**并且外函数的返回值是内函数的引用**.   这样就构成了一个闭包(内函数+ 临时变量).   

一般情况下，在我们认知当中，如果一个函数结束，函数的内部所有东西都会释放掉，还给内存，局部变量都会消失。但是闭包是一种特殊情况，如果外函数在结束的时候发现有自己的临时(局部)变量将来会在内部函数中用到，就把这个临时(局部)变量绑定给了内部函数，然后自己再结束。

> 维基百科中关于闭包的概念:   在一些语言中,   在函数中可以定义(嵌套)另一个函数时, 如果内部的函数引用了外部额的函数的变量,   可能产生闭包. 闭包可以用来在一个函数与一组"私有"变量之间创建关联关系.   在给定函数被多次调用的过程中, 这些私有变量能够保持其持久性. 

#### 闭包的特性

- 必须有一个内嵌函数(函数里定义的函数) -- 这对应函数之间的嵌套
- 内嵌函数必须引用一个定义在闭合范围内(外部函数里)的变量 -- 内部函数引用外部变量
- 外部函数必须返回内嵌函数 -- 必须返回那个内部函数对象

#### 变量的作用 和应用场景

- 闭包具有提⾼代码可复⽤性的作⽤(两次分别调用)

- 保护局部(临时)变量的安全:不会被垃圾回收机制回收, 外部无法访问该变量(起到私有变量的作用). 

- 调用的本质就是就执行代码

- 传递参数的本质就是修改代码

- 变量的本质就是存储和引用代码
- **回调式异步编程和函数式编程风格的基础**



#### 简单闭包的实现

```python
def outer(b=10):
    a = 1

    def inner():
        sum = a + b
        return sum

    # 外函数的返回值是内函数的内存地址(函数对象)
    return inner

# 这是方法一: 函数调用再调用
print(outer(22)())

# 这是方法二: 对获取到的函数对象定义复制给变量,然后对变量进行应用
result = outer(22)
print(result())

```

#### 闭包中的变量问题

```python
def line_conf(a, b):

    def line(x):

        return a*x + b
    return line
line1 = line_conf(1, 1)
line2 = line_conf(4, 5)
print(line1(5))
# 通过两次调用实现代码复用
print(line2(5))
print(line2(8))
print(line2(128))
```

通过两次调用实现代码复用, 由于闭包引用了外部函数的局部变量,此时外函数的局部变量不会及时释放. 

#### 修改外部函数中的变量



当内函数定义了变量后,将不会再访问外函数中的临时变量

如果此时需要访问外部变量需要声明nonlocal a(但这种方法意义不大)

## 关于闭包的总结

- 函数名只是函数代码空间的引用, 当函数名赋值给一个对象(新的变量)的时候, 就是引用传递
- 函数名只是一个对象, 和普通对象一样, 这个对象可以引用其他函数的代码. 
- 闭包就是一个嵌套定义函数, 在外层函数运行时才开始内层函数的定义 然后将内部函数的引用(函数对象)传递给外函数
- **内部函数和使用的外部函数提供的变量构成的整体称为闭包**

## 简单函数用作装饰器无法构成闭包

```shell
  # 这种方式, 没有实现闭包, 虽然有装饰器的形式, 但是却无法完成特定功能
def wrapper(func):
    print('decorator contents')

    return func


@wrapper  # 调用装饰器函数时, 应该会形成一个闭包(理解为闭包函数)才有意义
def my_func(a=1, b=2, c=3):
    print(f'result is :{a + b + c}')


# my_func = wrapper(my_func)

if `__name__` == '`__main__`':
    my_func(2, 3, 6)
    my_func(3, 3, 7)

```



## 装饰有参数的函数(指定参数)

```python
# 装饰有参数的函数

# 这是通过闭包实现装饰函数
def function_out(func):
    print('执行顺序')  # 只会执行一次

    def function_in(b):
        print(b)

        print('正在进行验证 ..., a = ',b)
        func(b)

    return function_in

# function_out(login)(a)
# 为函数添加装饰器
@function_out
def login(a):

    print('--开始登录--, a = ', a)

# 将 装饰器下方的函数对象传递进
login(10)
print('--- 分割线 ---')

# 等同于下方函数
a =function_out(login)
a(10)

# 同时等同于这样
function_out(login)(10)
```

调用装饰器函数(装饰器)仅仅会返回一个函数对象, 而调用被装饰器装饰的函数则会执行前面的函数对象	

## 装饰有多个不定长参数的函数

```python
# 需求:装饰有不定长参数的函数
# 这是通过闭包实现装饰函数
def function_out(func):
    print('执行顺序')

    def function_in(*args,**kwargs):
        print('正在进行验证 ... ')

        print('正在进行验证 ...', args,kwargs)
        func(*args,**kwargs)

    return function_in
# function_out(login)(a)
# 为函数添加装饰器
@function_out
def login(*args, **kwargs):
    print('--开始登录--, a = ', args, kwargs)


login(10, 20, c = 100)
```

#### 装饰的函数有返回值

```python
def function_out(func):

    def function_in(a, b):
        print(a * b)

        print('正在进行验证　．．．　')
        return func (a, b)
    return function_in


@function_out
def login(a, b):

    print('这是被装饰的函数',a,b)
    return a ** 2, b ** 3


login(2,2)
print(login(2, 2))

```

## 在原装饰器上设置外部变量

```python
# 定义装饰器函数 采用三层嵌套

def test_arg(s='hello'):

    # 闭包函数 function_out 为外层
    def function_out(func):

        # function_in为内层函数
        def function_in(a):
            print('正在进行验证 ... , a = ', a , s)
            return func(a)
        return function_in
    return function_out

# 将外部变量传递参数放置于此,使用三层函数
@test_arg('wwfyde')
def login(a):

    print('这点被修饰的函数', '传入的参数a = ', a)
    sum = a * a
    return sum


@test_arg('register')
def register(a):
    print('这是传入的参数a = ',a)


login(100)
print(login(100))
print('--- 分割线 ---')
register('Ting')
```

## 多重装饰器

> 多个装饰器装饰同一个函数
>
> 装饰器入参必然是一个函数

```python
# 模拟实现文字加粗的装饰器
def makeBlod(func):
    def wrapped():
        return '<b>' + func() + '</b>'

    return wrapped


# 模拟实现文字倾斜的装饰器

def makeItalic(func):
    def wrapped():
        return '<i>' + func() + '</i>'

    return wrapped


# 使用makeBold装饰器装饰
@makeBlod
def test1():
    return 'hello world -1'


# 使用makeItalic装饰器装饰
@makeItalic
def test2():

    return 'hello world -2'


# 使用双重装饰器
@makeBlod
@makeItalic
def test3():
    return 'hello world -3'

f = makeBlod(test3)
g = makeItalic(f)()


print(test1())
print(test2())
print('--- 分割线 ---')
print(g)

```

## wraps装饰器

```python
```



## **类装饰器**

装饰器函数其实是这样一个接口约束, 它必须接受一个callable对象作为参数, 然后返回一个callable对象. 在Python中一般callable对象都是函数, 但也有例外. 只要某个对象重写了 ``__call__`()` 方法, 那么这个对象就是callable的. 

```python
# 创建可调用对象

class CallableObject():
    def `__call__`(self):

        print('call me')

# 创建实例化对象
t = CallableObject()
t()
# 运行结果
# call me
```

类装饰器demo

```python
# 创建类装饰器
# 类装饰器的作用是 实例化可以传入对象参数的一个对象
class Test():

    def __init__(self, func):
        print('--- 初始化 ---')
        print('function name is %s' % func.`__name__`)
        self.__func = func


    def __call__(self, *args, **kwargs):
        print('---装饰器中的功能---')
        self.__func(*args, **kwargs)


@Test
def test():
    print('---test---')


test()
print(test)
```

调用 其实就是执行对象中的` `__call__`` 方法, 定义函数对象时, 会默认包含 `__call__` 方法

```python
def test():
    print('这是执行代码')


# 以下两中调用方式是一样的
test()
test.`__call__`()

```



## 装饰器总结

- 装饰器函数只有一个参数就是被装饰函数的应用
- 装饰器能够将一个函数的功能在不修改代码的情况下进行扩展
- 在函数定义的上方@装饰器函数名 即可直接使用装饰器对下面的函数进行装饰

## 闭包装饰器对比

闭包先执行外函数, 再执行内函数, 装饰器则是限制性装饰器函数,在执行被装饰的函数





# dataclass-数据类

# *GIL*: 全局解释器锁

> Global Interpreter Lock
>
> GIL的作用
>
> GIL对多线程执行的影响

Python中的一个线程, 对应于C语言中的一个线程

GIL使得同一时刻只有一个线程在一个CPU上执行, 无法将多个线程运行到多个CPU上

每执行一定字节码行数以及时间片后释放GIL锁, 遇到I/O操作的时候也会释放. *定期阻塞, 陷阱或者中断*

GIL还会在遇到IO操作时主动释放GIL

## GIL锁引入

死循环会出现CPU占用过高的问题

但多线程死循环却并没有出现CPU占用过高的情况,这是有GIL锁的机制导致的

## 概念及影响

#### GIL全局解释器锁

多线程任务实际上是一种'伪并发的多线程', 因为线程执行的时候会有一个GIL锁, 

**GIL锁规定: 保证同一时刻只有一个线程可以用到CPU**

#### GIL锁定义

GIL锁: Global Interpreter Lock, 又称: 全局解释器锁

> 任何Python线程执行前, 必须先获得GIL锁, 然后, 每执行100条字节码, 解释器就自动释放GIL锁, 让别的线程有机会执行. 这个GIL全局锁实际上把所有线程的执行代码都给上了锁, 所以, 多线程在Python中只能交替执行, 即使100个线程跑在100核CPU上, 也只能用到1个核. 

#### GIL不是Python特性

GIL是Python解释器(CPython)引入的概念, 在JPython, PyPy中没有GIL. GIL并不是Python的语言缺陷. 是解释器层级的锁, 跟Python语言特性无关.

> 言外之意, 就是全局解释器就是为了锁定整个内部的全局资源, 每个线程想要运行首先获取GIL, 而GIL本身又是一把互斥锁, 造成所有线程只能一个一个one-by-one并发交替执行.

## GIL存在的原因

早期计算机都是单核设计

CPython在执行多线程的时候并不是线程安全的, 所以为了程序的稳定性, 所以为了程序的稳定性, 加一把全局解释锁, 能够确保任何时候都只有一个python线程执行. 

> GIL产生的背景 在CPython解释器内部运行多个线程的时候, 每个线程都需要解释器内部申请相应的全局资源, 由于C语言本身比较底层造成CPython在管理所有全局资源的时候并不能应对所有线程同时的资源请求, 因此未来防止资源竞争而发生错误, 对所有线程申请全局资源增加了限制 - 全局解释器锁. 

## GIL的弊端

- GIL对计算密集型的程序会产生影响. 因为计算密集型的程序, 需要占用系统资源. 
- GIL的存在, 相当于始终在进行单线程运算, 这样自然就慢了. 
- IO密集型影响不大的原因在于, IO, input / output, 这两个词就表明程序的瓶颈在于输入所耗费的时间, 线程大部分时间在等待, 所以它们是多个一起等(多线程)还是单个等(单线程), 都是无所谓的. 

## GIL锁什么时候释放

- 在当前线程执行超时后会自动释放
- 在当前线程执行阻塞操作时会自动释放
- 当前执行完成时

## 线程间通讯

共享变量, 队列

## GIL面试题

> 描述Python GIL的概念, 以及它对python多线程的影响? 编写一个多线程抓取网页的程序, 并阐明多线程抓取程序是否可比单线程性能有提升, 并解释原因

- Python语言和GIL没有半毛钱关系. 仅仅是由于历史原因在CPython虚拟机(解释器), 难以移出GIL. 
- GIL: 全局解释器锁. 每个线程在执行的过程都需要先获取GIL, 保证同一时刻只有一个线程可以执行代码.
- 线程释放GIL锁的情况: 
  - 在IO操作等可能会引起阻塞的system call之前, 可以暂时释放GIL, 但在执行完毕后, 必须重新获取GIL
  - 程序执行超时后会释放
  - Python使用多进程是可以利用多核的CPU资源的
  - 多线程爬取比单线程性能有提升, 因为遇到IO阻塞会自动释放GIL锁

## GIL锁解决方案

因为GIL锁的存在, 多线程并不能很好的利用CPU的资源

Python官方推荐使用进程池模型和多进程编程模型

## 总结

- GIL锁 称为 全局解释器锁, 是CPython解释器中的锁机制, 也是历史遗留问题
- 要提升多线程执行效率, 解决方案:
  - 更换解释器
  - 改为进程替换多线程
  - 子线程使用C语言实现(绕过GIL锁)
- 必须要知道的是:
  - CPU密集型不太适合多线程
  - I / O密集型适合多线程(GIL锁会释放)









# Python中的可变和不可变

## 可变与不可变

可变不可变, 是指内存中的那块内容(value)是否可以被改变(不可变类型在对其进行操作时,必须在内存中新申请一块区域(原内容不可变); 如果是可变类型,则可以直接在原内存地址对其进行修改,不需要再申请内存(但区域会变长或者变短). 不可变类型在地址中只能存在一份

- 可变类型(mutable), 创建后可以继续修改对象的内容(值)

> 字典, 列表

- 不可变类型(unmutable), 一旦创建就不可修改的对象(值)

> 数字, 字符串, 元组

## 可变类型深, 浅拷贝

为保证数据的独立性, 在开发中我们希望两个变量值一样, 而且互不影响, 这就需要使用到拷贝技术. 

pthon中的copy模块, 可以实现拷贝功能

#### 浅拷贝

引用(地址)拷贝, 并没有产生新的空间. 如果拷贝的是对象, 原对象和copy对象都指向同一个内存空间, 只拷贝父对象, 不会拷贝对象内部的子对象. 用法: ` copy.copy(变量) `

引用(地址)拷贝， 并没有产生新的空间. 如果拷贝的是对象, 原对象和copy对象都指向同一个内存空间, 只拷贝父对象, 不会拷贝对象的内部的子对象. 用法: 

#### 深拷贝

会产生新的空间. 如果拷贝的是对象, 原对象和copy对象都指向不同的内存空间, 会拷贝对象及其子对象(会产生新的空间). 用法: ` copy.deepcopy(变量) `

#### 拷贝的作用

以后再做数据的清洗, 修改或者入库的时候, 对原数据进行复制一份, 以防数据修改之后, 找不到原数据. 

## 深浅拷贝具体代码实现

#### 简单可变类型的深浅拷贝

针对可变类型, 浅拷贝, 深拷贝都会产生一个新的空间

- copy()浅拷贝, 产生新的空间, 能够保证数据的独立性

```python
import copy
list1 = [1, 2]
print('list1的内存地址: %d' % id(list1))
list2 = copy.copy(list1)
list2.append(22)
print('list2的内存地址: %d' % id(list2))
```

- deepcopy()深拷贝, 产生新的空间, 能够保持数据的独立性

```python
import copy
list1 = [1, 2]
print('list1的内存地址: %d' % id(list1))
list2 = copy.deepcopy(list1)
list2.append(22)
print('list2的内存地址: %d' % id(list2))
print(list1)
print(list2)

```

## 复杂可变类型的深浅拷贝

- 复杂可变类型的浅拷贝, 事件是引用拷贝, 无法保持独立性

```python
import copy
A = [1,2]
B = [3,4]
C = [A,B]
print("A的地址: %x" % id(A))
print("B的地址: %x" % id(B))
print("C[0]的地址: %x" % id(C[0]))
print("C[1]的地址: %x" % id(C[1]))
print("--" * 20)
D = copy.copy(C)
print("A的地址: %x" % id(A))
print("C[0]的地址: %x" % id(C[0]))
print("D[0]的地址: %x" % id(D[0]))
print('C 的地址是: %d' % id(C))
print('D 的地址是: %d' % id(D))
```

说明: 对C拷贝时会产生新的内存空间, 但是 列表内容是对列表的引用,浅拷贝的依然是列表的引用 因此C[0] = D[0] = A  也就是说: **浅拷贝只复制最顶层数据**

- 复杂可变类型的深拷贝, 此时会产生新的内存空间

```python
import copy
A = [1,2]
B = [3,4]
C = [A,B]
print("A的地址: %x" % id(A))
print("B的地址: %x" % id(B))
print("C[0]的地址: %x" % id(C[0]))
print("C[1]的地址: %x" % id(C[1]))
print("--" * 20)
D = copy.deepcopy(C)
print("A的地址: %x" % id(A))
print("C[0]的地址: %x" % id(C[0]))
print("D[0]的地址: %x" % id(D[0]))
print('C 的地址是: %d' % id(C))
print('D 的地址是: %d' % id(D))
```

结论:**深贝会递归把里面的数据也重新创建空间**

1. 赋值是将一个对象的地址复制给一个变量， 让变量指向该地址
2. 浅拷贝是在另一块地址中创建一个新的变量或容器, 但是容器内的元素的地址均是对源对象的元素的地址的拷贝. 也就是说新的容器指向了旧的元素. 
3. 深拷贝是在另一块地址中创建一个新的变量或容器, 同时容器内的元素的地址也是新开辟的, 仅仅是值相同而已, 是完全的副本. 

## 不可变类型的深浅拷贝

#### 简单 不可变类型的深浅拷贝

不可变类型, **不管深拷贝还是浅拷贝, 都不会开辟新的空间**, 而是直接饮用了被拷贝的数据的地址

```python
import copy
a = 1
b = 1
e = copy.copy(a)
f = copy.deepcopy(a)
print(id(a))
print(id(b))
print(id(e))
print(id(f))

# 运行结果
# 9079008
# 9079008
# 9079008
# 9079008
```



#### 嵌套 不可变类型的深浅拷贝

- 不可变, 嵌套类型的, 浅拷贝

只关心最外层的数据类型是什么, 如果是不可变类型, 直接引用, 没办法办证数据的独立性

- 不可变, 嵌套类型, 深拷贝

这个数据是否有可变的数据类型, 如果有, 就会开辟多个空间存储数据和地址, 能够保持数据的独立性(完全的副本)

```python
import copy
A = [1, 2]
B = [3, 4]

C = (A, B)
D = copy.copy(C)
E = copy.deepcopy(C)
print('C的内存地址',id(C))
print('浅拷贝D的内存地址',id(D))
print('深拷贝E的内存地址',id(E))
# 运行结果

# C的内存地址 139645783165896
# 浅拷贝D的内存地址 139645783165896
# 深拷贝E的内存地址 139645783165320
```

切片拷贝

字典拷贝

# import导入模块

> 导入指定目录下的模

## import搜索路径

```python
import sys
print(sys.path)
'''
输出结果: 
['/home/wwfyde', # 优先从当前路径搜索模块  首行一般是当前路径
 '/usr/lib/python37.zip',
 '/usr/lib/python3.7',
 '/usr/lib/python3.7/lib-dynload',
 '',
 '/home/wwfyde/.local/lib/python3.7/site-packages',
 '/usr/local/lib/python3.7/dist-packages',
 '/usr/lib/python3/dist-packages',
 '/usr/local/lib/python3.7/dist-packages/IPython/extensions',
 '/home/wwfyde/.ipython']
'''
```

- 从上面列出的目录里依次查找要导入的模块文件
- '' 表示当前路径
- 列表中路径的先后顺序代表了python解释器在搜索模块时的先后顺序

## 程序执行时添加新的模块路径

```python
# 导入只对当前程序有效,而非永久更改
import sys
sys.path.append('/home/itcast/xxx')
# 插入列表首位以确保优先搜索该路径
sys.path.insert(0, '/home/wwfyde/xxx')  
```

## 重新导入模块

> 重新导入模块的作用: 模块被导⼊后， import module 不能重新导⼊模块，重新导⼊需
> ⽤ reload 重新加载模块代码创建模块对象
>
> 发现问题： 模块已经修改，但调用时显示的是修改前的内容，这是为什么呢？
> 模块一旦道瑞，test() 就被导入当前文件，随后开始执行，期间如果模块修改，需要重新加载模块文件才能生效

```python
from importlib import reload
reload(模块名)
```

## from ... import 的私有化问题

_age = 18 方式命名的变量为私有变量 

**注意: 使用from ... import * 方式导入该类私有将不起作用**

但是使用 from ... import _age 却能导入该变量



## import 和 from ... import * 的区别

from ... import * 实际上是将 ... 中的**内容拷贝一份到当前程序中**,相当于是**快速创建全局变量或定义函数**

**而 import 是对模块的引用** **所有相同模块只会被导入一次** ,即使是模块中的模块, 

导入模块递归的执行可执行语句

导入**模块**到全局命名空间中 存储的是模块的内存地址,

全局引用就会导入到全局命名空间中,局部引用就会导入到局部命名空间中

加载到内存空间

# 拆包

## 拆包引入

拆包: 对于函数中的多个返回数据,去掉元组,列表或者字典, 直接获取里面数据的过程

语法: 调用时 func(*args, **kwargs) 加上\* 号表示对传入的参数(包参数)进行拆包处理

\* 表示 拆包标识符

```python
def func(*args, **kwargs):
    print(args)
    print(kwargs)
    
    
# 传入参数(1,2,3) {'name':'ting','age':18}    
func((1,2,3),{'name':'ting','age':18})
# 使用拆包
func(*(1,2,3),**{'name':'ting','age':18})
# 对字典采用一维拆包
func(*(1,2,3),*{'name':'ting','age':18})

# 拆包的扩展
def test(a:list):
    print(*a, sep='\n')


test([1,2,3,4])
'''
输出结果
1
2
3
4

'''
```

## 组包?



# 单继承中的super()

> 学习目标
>
> 单继承中的super()使用注意

super()方法的作用是调用父类中的方法

```python
class Parent():
    def `__init__`(self,name):
        self.name = name
        print('parent的init被调用结束')


class Son1(Parent):
    def __init__(self, name, age):
        self.age = age
        super().__init__(name)
        print('Son1的init被调用结束')


class Grandson(Son1):
    def `__init__`(self, name, age, gender):
        self.gender = gender
        super().`__init__`(name,age)
        print('Grandson的init被调用结束')


gs = Grandson('Grandson', 12,'女')
# print(Grandson.`__mro__`)
# print('姓名: ',gs.name)
# print('年龄: ',gs.age)
# print('性别: ',gs.gender)
```

# 多继承以及MRO顺序

> 多继承的特征
>
> MRO顺序的作用
>
> super 的 作用

多继承: 一个子类同时继承自多个父类

## 单独调用父类的方法

```python
class Parent():
    def `__init__`(self,name):
        print('parent的init开始被调用')
        self.name = name
        print('parent的init被调用结束')


class Son1(Parent):
    def `__init__`(self, name, age):
        print('Son1的init开始被调用')
        self.age = age
        Parent.`__init__`(self, name)
        print('Son1的init被调用结束')


class Son2(Parent):
    def `__init__`(self, gender=None, name=None):
        print('Son2的init开始被调用')
        self.gender = gender
        Parent.`__init__`(self,  name)
        print('Son2的init结束被调用')


class Grandson(Son1,Son2):
    def `__init__`(self, name, age, gender):
        print('Grandson的init开始被调用')
        Son1.`__init__`(self, name, age)
        Son2.`__init__`(self, name,gender)
        print('Grandson的init被调用结束')


gs = Grandson('Grandson', 12,'男')
print(Grandson.`__mro__`)
print('姓名: ',gs.name)
print('年龄: ',gs.age)
print('性别: ',gs.gender)
Son1.`__init__`(Parent,'wwfyde',18)
```

> 从代码运行结果看, Grandson被初始化一次,  而Parent类中的初始化方法被多次调用(递归调用), 这显然不合理, 我们可以使用super()来调用父类的方法

## 使用super()调用父类方法

```python
class Parent():
    def `__init__`(self,name, *args, **kwargs):
        # print('parent的init开始被调用')
        self.name = name
        print('parent的init被调用结束')


class Son1(Parent):
    def `__init__`(self, name, age, *args,**kwargs):
        # print('Son1的init开始被调用')
        self.age = age
        super().`__init__`(name,*args,**kwargs)
        print('Son1的init被调用结束')


class Son2(Parent):
    def `__init__`(self, name, gender):
        self.gender = gender
        super().`__init__`(name)
        print('Son2的init结束被调用')




class Grandson(Son1,Son2):
    def `__init__`(self, name, age, gender):
        super().`__init__`(name, age, gender)
        print('Grandson的init被调用结束')


gs = Grandson('Grandson', 12,'女')
print(Grandson.`__mro__`)
print(gs.age)
print(gs.name)
print(gs.gender)
```

> 为什么使用super()后, parent只被调用了1次呢? 这是因为一旦使用了super()后, 调用顺序不是按照继承顺序, 而是遵守MRO顺序

## MRO顺序

查看MRO顺序方法: `类名.mro()`  或者 `类名.`__init__`` , 然后打印出来

## 多继承中super调用所有父类的被重写的方法

- super本质上就是使用MRO这个顺序去调用 当前类在MRO顺序中下一个类. 
- `super().`__init__`()` 则调用了下一个类的初始化方法进行构造(也就是父类方法的第一个)

## 总结

1. MRO保证了对继承情况 每个类只出现一次(super的寻址是根据MRO顺序来的)
2. `super().`__init__`` 相对于`类名.`__init__` `, 在单继承上用法基本无差别
3. 但在多继承上有区别, super方法能保证每个父类的方法只会执行一次
4. 多继承时, 使用super方法, 对父类的传参数, 应该是由于python中super的算法导致的原因, 必须把参数全部传递, 否则会报错
5. 多继承时, 相对于使用`类名.`__init__``方法, 要把每个父类全部写一遍, 而实用super方法, 只需一句话便**执行了全部父类的方法**, 这也是为何多继承需要全部参数的一个原因

# property(属性对象) 类属性 和装饰器属性

> 使用property属性的好处

调用普通的有返回值方法

```python
class Foo():
    def `__init__`(self):
        self.num = 100

    def prop(self):
        return self.num


f = Foo()
print(f.prop())
```

使用@property装饰的方法

```python
class Foo():
    def `__init__`(self):
        self.num = 100

    @property
    def prop(self):
        return self.num


f = Foo()
print(f.prop) # 表示prop对象为属性值(int)

```

```python
class Person(object):

    def `__init__`(self, name, age):
        self._name = name
        self._age = age

    # 访问器 - getter方法
    @property
    def name(self):
        return self._name

    # 访问器 - getter方法
    @property
    def age(self):
        return self._age

    # 修改器 - setter方法
    @age.setter
        def age(self, age):
        self._age = age

    def play(self):
        if self._age <= 16:
        print('%s正在玩飞行棋.' % self._name)
        else:
        print('%s正在玩斗地主.' % self._name)


    def main():
        person = Person('王大锤', 12)
        person.play()
        person.age = 22
        person.play()
    # person.name = '白元芳' # AttributeError: can't set attribute


if `__name__` == '`__main__`':
	main()
```



property属性的定义和调用要注意:

- 定义时, 在实例方法的基础上添加@property 装饰器; 并且仅有一个self参数
- 调用时, 无需括号

Asa: property的作用是使用方法构造属性

Property装饰器的功能是: property属性内部进行一些列的逻辑计算, 最终将计算结果返回. 

由此可见, **property的作用就是将一个属性的操作方法封装为一个属性, 用户用起来就和操作普通属性完全一致, 非常简单.** 

## Python新式类与经典类

概括: 

- 新式类的继承顺序采用**广度优先**(先横向查找, 再纵向查找)
- 经典类的继承顺序采用**深度优先**(先纵向查找, 再横向查找)

## property属性的两种方法

- 装饰器 即: 在方法上应用装饰器
- 类属性 即: 在类中定义值为property对象的类属性

## 装饰器方式

python3中默认所有类为新式类

#### 经典类, 具有一种@property装饰器

```python
class Goods():
    @property
    def price(self):
        return 'laowang'
obj = Goods()
result = obj.price
print(result)
```

#### 新式类, 具有三种@property装饰器

```python
class Goods():

    @property
    def price(self):
        print('@property')

    @price.setter
    def price(self,value):
        print('@price.setter')

    @price.deleter
    def price(self):
        print('@price.deleter')


f = Goods()
# print(f.prop)  # 表示prop对象为属性值(int)
# ---  调用方法 ---
f.price  # 自动执行@property修饰的price方法 并获取返回值
f.price = 123  # 自动执行@price.setter修饰的price方法, 并将123赋值给方法的参数
del f.price  # 自动执行@price.deleter 修饰的price 方法

```

## 注意和总结

新式类中的属性有三种访问⽅式，并分别对应了三个被@property、@⽅法名.setter、@⽅法名.deleter修饰的⽅法

由于新式类中具有三种访问⽅式，我们可以根据它们⼏个属性的访问特点，分别将三个⽅法定义为对同一个属性：获取、修改、删除

```python
class Goods():
    def `__init__`(self):
        self.original_price = 100
        self.discount = 0.8

    @property
    def price(self):
        val = self.original_price * self.discount
        return val
		# 对 price赋值时 会调用该函数
    @price.setter
    def price(self,value):
        self.original_price = value

    @price.deleter
    def price(self):
        del self.original_price



f = Goods()
# print(f.prop)  # 表示prop对象为属性值(int)
# ---  调用方法 ---
print(f.price)  # 自动执行@property修饰的price方法 并获取返回值
f.price = 123  # 自动执行@price.setter修饰的price方法, 并将123赋值给方法的参数
print(f.price)
del f.price  # 自动执行@price.deleter 修饰的price 方法
# print(f.price)  # 调用时会发现属性值被删除了

```

## 类属性方式, 创建值为property对象的类属性

- 当使用类属性的方式创建property属性时, `经典类` 和 `新式类` 无区别

```python
class Foo():
	def get_bar(self):
	return 'laowang'
	BAR = property(get_bar) # property()类的实例化可以用来构造属性值
    
    
f = Foo()
result = f.BAR  # 自动调用get_bar方法, 并获取方法的返回值
print(result)
```

property()类的实例化 可以用来构造属性值

property方法中有四个参数:

- 第⼀个参数是⽅法名，调⽤ 对象.属性 时⾃动触发执行方法
- 第⼆个参数是⽅法名，调⽤ 对象.属性 ＝ XXX 时⾃动触发执行方法
- 第三个参数是⽅法名，调⽤ del 对象.属性 时⾃动触发执⾏⽅法
- 第四个参数是字符串，调⽤ `类.属性.`__doc__` `，此参数是该属性的描述信息

```python
class Foo(object):
    def get_bar(self):
        return 'laowang'

    def set_bar(self, value):
        """必须两个参数"""
        return value

    def del_bar(self):
        return 'laowang'

    BAR = property(get_bar, set_bar, del_bar, '这是描述文档')


f = Foo()
result = f.BAR  # 自动调用get_bar方法, 并获取方法的返回值
f.BAR = 'Shabi'
result1 = f.BAR = 'shabi'
desc = Foo.BAR.`__doc__`  # 注意调用的是类的属性的`__doc__`属性
print(desc)
print(result)
print(result1)
```

实例

```python
class Goods:

    def `__init__`(self):
        self.original_price = 100
        self.discount = 0.8

    def get_price(self):
        new_price = self.original_price * self.discount
        return new_price

    def set_price(self,value):
        self.original_price = value

    def del_price(self):
        del self.original_price

    PRICE = property(get_price, set_price, del_price,'This is Descriptions')


f = Goods()
print(f.PRICE)
f.PRICE = 123
print(f.PRICE)
del f.PRICE
print(f.PRICE)
```



## 总结

定义property属性共有两种方式, 分别是 `装饰器` 和`类属性` , 而 `装饰器` 放回寺针对经典类和新式类又有所不同

通过使用property属性, 能够简化调用者在获取数据的流程

- x = property(get_x,set_x,def_x, "doc")





# with 与 '上下文管理器'

> 使用with的好处
>
> 正确的使用with打开文件, 使用文件
>
> 上下文管理器 本质是一种协议 约定成俗的python风格
>
> 具有某种魔法函数就具备某种协议 
>
> 具备上下文管理器协议的对象 可以直接被with调用 
>
> 自定义对象 使其满足上下文管理器协议 

## 普通实现

```python
try:
    f = open('somefile')
    for line in f:
        print(line)
except Exception as e:
    print(e)
finally:
    f.close()
```



## with(翻译为 用 执行)

`with`语句用于封装带有`使用上下文管理器定义的方法`的代码块的执行。

带有项目的with语句的执行过程: 

1. 执行带有with的表达式 (with item [as name]:)求值以获得一个上下文管理器对象
2. 载入上下文管理器 `__exit__`以便后续使用
3. 发起调用上下文管理器的 `__enter__` 方法
4. 如果 `with` 语句中包含一个目标, 来自 `__enter__`()` 方法返回时未发生错误, 则 ``__exit__`将总是被调用. 
5. 执行语句体
6. 发起调用上下文管理器的 ``__exit__`()` 方法. 

如果有多个项目, 则会视作存在多个with语句嵌套来处理多个上下文管理器

```python
with A() as a, B() as b:
	suite
	
# 等价于
with A() as a:
    with B() as b:
        suite
```



#### with的作用

自动调用上下文管理器对象的 `__exit__`方法 实现清理内存中的文件

## with方法操作文件

Python中引入了 `with` 语句自动帮我们调用 `close()`方法

```python
try:
    with open('1.txt','r',encoding='utf-8') as f:
        print(f.read())

except:
    print('文件操作出错')
```

这和前⾯的 try ... finally 是⼀样的，但是代码更佳简洁，并且不必调⽤ f.close() ⽅法。



## 上下文(context)概念

context

执行 环境 / 上下文

## 上下文管理器(对象 / 类型)

上下文管理器本质就是能够支持with操作

任何实现了 `__enter__` 和 `__exit__` 方法的对象都可以称之为上下文件管理, 上下文管理器对象可以使用with关键字. 显然, 文件(file)对象也实现了上下文管理器协议

上下文管理器的典型用法包括

- 保存和恢复各种全局状态，
- 锁定和解锁资源，
- 关闭打开的文件等等。

**上下文管理器** 是一个对象，它定义了在执行 `with` 语句时要建立的运行时上下文。 上下文管理器处理进入和退出所需运行时上下文以执行代码块。 通常使用 `with` 语句，但是也可以通过直接调用它们的方法来使用。

```python
# 创建上下文管理器类
class File():
    def `__init__`(self, filename, mode):
        self.filename = filename
        self.mode = mode

    def `__enter__`(self):
        print('entering')
        self.f = open(self.filename, self.mode)
        return self.f
    def `__exit__`(self,*args):
        print('will exit')
        self.f.close()

# 实例化 和 用上下文管理器
with File('1.txt', 'w') as f:
    print('writing')
    f.write('wwfyde')
```

## 装饰器实现上下文管理器

```python
# 创建上下文管理器类
from contextlib import contextmanager
@contextmanager
def my_open(path, mode):
    f = open(path, mode)
    yield f
    f.close()
# 调用
with my_open('out.txt', 'w') as f:
	f.write("hello , the simplest context manager")
```



## with 上下文管理器 总结

> Python 提供了 with 语法⽤于简化资源操作的后续清除操作，实现原理建⽴在上下⽂管理器协议(实现`__enter__`和`__exit__`)之上
> with使⽤代码中如果在打开过程中发生异常，需要使⽤try-except进⾏捕获
> Python 还提供了⼀个 contextmanager 装饰器，更进⼀步简化上下管理器的实现⽅式。

## 异步上下文管理器

# 格式化字符串的三种方式

**遇到的问题**:

对数值进行格式化时, `:#06d` 的`:`和`#`之间**不要有空格!**

## %-formatting  string.Template

这种格式受限于类型支持， 仅仅整数，字符串和小数可以被格式化， 其他不支持的类型或无法转化为这三种形式的类型无法被转换。 并且只能是单一的值可以被输出。

```python
a = 18
b = 'Ting'
print('%s\'s age is %d' % (b, a))
# 输出元组会报错, 
```



## str.format()

> 

不需要指定类型,但是需要引用字符串

用法详解

```python
a = 'The value is {}.'.format(value)
print(a)
>>> 'The value is 80.'/'/
# {:04}四位数, 用0填充
# {:4}大于等于4位数, 用空格填充
#通过位置
'{0},{1}'.format('chuhao',20)
>>> chuhao,20
print '{},{}'.format('chuhao',20)  # 默认位置参数
print '{1},{0},{1}'.format('chuhao',20) # 序列
 
#通过关键字参数
print '{name},{age}'.format(age=18,name='chuhao')
class Person:
    def __init__(self,name,age):
        self.name = name
        self.age = age
 
    def __str__(self):
        return 'This guy is {self.name},is {self.age} old'.format(self=self)
 
print str(Person('chuhao',18))
 
#通过映射 list
a_list = ['chuhao',20,'china']
print 'my name is {0[0]},from {0[2]},age is {0[1]}'.format(a_list)
#my name is chuhao,from china,age is 20
 
#通过映射 dict
b_dict = {'name':'chuhao','age':20,'province':'shanxi'}
print 'my name is {name}, age is {age},from {province}'.format(**b_dict)
#my name is chuhao, age is 20,from shanxi
 
#填充与对齐
print '{:>8}'.format('189')
#     189
print '{:0>8}'.format('189')
#00000189
print '{:a>8}'.format('189')
#aaaaa189
 
#精度与类型f
#保留两位小数
print '{:.2f}'.format(321.33345)
#321.33
 
#用来做金额的千位分隔符
print '{:,}'.format(1234567890)
#1,234,567,890
 
#其他类型 主要就是进制了，b、d、o、x分别是二进制、十进制、八进制、十六进制。
print '{:b}'.format(18) #二进制 10010
print '{:d}'.format(18) #十进制 18
print '{:o}'.format(18) #八进制 22
print '{:x}'.format(18) #十六进制12
```

## F-strings (推荐)

[PEP-0498](https://www.python.org/dev/peps/pep-0498/)

`f-strings`	`格式化字符串`

```python
>>> f'The value is {value}.'
'The value is 80.'
>>> value = 1234
>>> f'input={value:06x}' # 注释时: 后面一定不要加空格
'input=0x04d2'
>>> date = datetime.date(1991, 10, 12)
>>> f'{date} was on a {date:%A}'
'1991-10-12 was on a Saturday'

>>> width = 10
>>> precision = 4
>>> value = decimal.Decimal('12.34567')
>>> f'result: {value:{width}.{precision}}'
'result:      12.35'
```

对于字符串中的表达式的值，F-strings 提供了一个简明，可读性强的方式。

语法与`str.format（）`使用的语法类似，但较少细节啰嗦。大写字母F也有效

`{}`用来声明**任意表达式**或变量, 甚至可以调用函数

表达式可以在运行时进行渲染，然后使用`__format__`协议进行格式化。

特点: 好用,支持将表达式放入变量, 性能更高，支持将**特殊的类型**转换为字符串, 可以控制如何转换字符串(整数转16进制),甚至输出无法转化为字符串的类型

## **需要注意的细节**

#### 引号

可以在表达式中使用各种类型的引号。只要确保在表达式中使用的f-字符串外部没有使用相同类型的引号即可。当字符串既存在单引号又存在双引号时，推荐在外部使用**三引号**

```

```



#### 反斜杠

可以在f字符串的字符串部分使用反斜杠转义符。但不能使用反斜杠在f字符串的表达式部分中进行转义

```
f"这是{Ting's boyfriend}"
f"\"这是{Ting's boyfriend}"
```

#### 字典

说到引号，注意你在使用字典的时候。如果要为字典的键使用单引号，请记住确保对包含键的f字符串使用双引号。

```python
comedian = {'name': 'Eric Idle', 'age': 74}
f"The comedian is {comedian['name']}, aged {comedian['age']}."
```

7. 

# Python高级理解

## [__main__](https://docs.python.org/zh-cn/3/library/.html#module-) --- [顶层脚本环境](https://docs.python.org/3/library/__main__.html)

------

`'__main__'` 是顶层代码执行的作用域的名称。模块的 __name__ 在通过标准输入、脚本文件或是交互式命令读入的时候会等于 `'__main__'`。

模块可以通过检查自己的 __name__ 来得知是否运行在 main 作用域中，这使得模块可以在作为脚本或是通过 `python -m` 运行时条件性地执行一些代码，而在被 import 时不会执行。

```
if __name__ == "__main__":
    # execute only if run as a script
    main()
```

对软件包来说，通过加入 `__main__.py` 模块可以达到同样的效果，当使用 `-m` 运行模块时，其中的代码会被执行。

## Python相关概念

abstract 抽象 理论 概念 语义 基本原理 工作机制

## 散列表

散列表（Hash table，也叫哈希表），是根据键（Key）而直接访问在内存存储位置的数据结构。也就是说，它通过计算一个关于键值的函数，将所需查询的数据映射到表中一个位置来访问记录，这加快了查找速度。这个映射函数称做散列函数，存放记录的数组称做散列表。

*哈希表: 哈希值与key的一一对应, key必须是可哈希的*

通过散列 列可以快速获取磁盘文件指针

对于 Python 的内建类型来说，只要是创建之后无法修改的(immutable)类型都是 hashable 如字符串，可变动的都是 unhashable的比如：列表、字典、集合，**他们在改变值的同时却没有改变id,无法由地址定位值的唯一性,因而无法哈希**。我们自定义的类的实例对象默认也是可哈希的（hashable），而hash值也就是它们的id()。

> An object is *hashable* if it has a hash value which never changes during its lifetime (it needs a __hash__() method), and can be compared to other objects (it needs an __ eq__() or __cmp__(). Hashable objects which compare equal must have the same hash value.

一个对象能被称为 hashable ， 它必须有个 hash 值，这个值在整个生命周期都不会变化，而且必须可以进行相等比较，所以一个对象可哈希，它必须实现__hash__() 与 __eq__() 方法。

Python 的某些链接库在内部需要使用hash值，例如往集合中添加对象时会用__hash__() 方法来获取hash值，看它是否与集合中现有对象的hash值相同，如果相同则会舍去不加入，如果不同，则使用__eq__() 方法比较是否相等，以确定是否需要加入其中。

对于 Python 的内建类型来说，只要是创建之后无法修改的(immutable)类型都是 hashable 如字符串，可变动的都是 unhashable的比如：列表、字典、集合，**他们在改变值的同时却没有改变id,无法由地址定位值的唯一性,因而无法哈希**。我们自定义的类的实例对象默认也是可哈希的（hashable），而hash值也就是它们的id()。

## Hash

### 概念定义



Hash: 散列 / 哈希     就是把任意长度的输入通过散列算法变换成固定长度的输出，该输出就是散列值。

这种转换是一种压缩映射，也就是，散列值的空间通常远小于输入的空间，不同的输入可能会散列成相同的输出，所以不可能从散列值来确定唯一的输入值。

简单的说就是一种将任意长度的消息压缩到某一固定长度的消息摘要的函数。

什么是哈希表？
哈希表（Hash table，也叫散列表），是根据关键码值(Key value)而直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。

哈希表hashtable(key，value) 的做法其实很简单，就是把Key通过一个固定的算法函数既所谓的哈希函数转换成一个整型数字，然后就将该数字对数组长度进行取余，取余结果就当作数组的下标，将value存储在以该数字为下标的数组空间里。
而当使用哈希表进行查询的时候，就是再次使用哈希函数将key转换为对应的数组下标，并定位到该空间获取value，如此一来，就可以充分利用到数组的定位性能进行数据定位（文章第二、三部分，会针对Hash表详细阐述）。

### 特点

- 算法是公开的
- 对相同数据运算,得到的结果是一样的
- 对不用数据运算,如MD5得到的结果都是32个字符长度的字符串
- **没法逆运算**

### 语法

### 用法

### 应用场景

#### 1. 登录密码加密

开发过程中首次登录需要向服务器发送用户密码进行账户验证. 但是用户的密码是非常隐私的信息. 所以一定要使用加密保护

##### 直接使用HASH

目前最优的解决方案就是使用密码的Hash值进行验证

**客户端**

直接将用户输入的密码进行Hash运算, 得到结果发送给服务器验证. 因为Hash算法无法逆运算, 所以就算Hash值泄露, 真实密码也不会泄露

**服务端**

需要服务器配合, 在用户注册的时候, 服务端的数据库中保存的就是用户密码的Hash值, 而不是密码本身(根据Hash的特点, 对相同的数据加密结果是一样的). 这样就算服务器被攻克, 用户的隐私信息也能起到一定的保护

也就是现在为什么各类产品只提供 **重置密码**的功能, 而不再有 **找回密码** 的功能了. 因为服务端本身也不知道用户的真实密码. 

> **特别说明:**用户的密码属于非常隐私的信息.因为大多数用户有一个特点.密码喜欢使用重复的.如果你的APP泄露了用户的密码.那么很有可能,黑客利用用户的手机号码加上密码,可以套出用户的支付信息.这种后果是非常严重的!

#### 2. 版权&文件识别

当然Hash的作用除了用于登录密码加密以外.还有版权的运用.
	 比如如何识别一段视频或者一段音频,这种数字文件是正版的.这个时候,我们使用肉眼是没法判断的.因为翻录的视频和音频文件几乎看不出来.但是,文件的二进制不一样,它的Hash值是不会欺骗群众的.所以类似YouTube这样的网站,在你上传视频的时候,它会将文件的Hash值保存.当其他的网站上传这个视频,那么看是否是正版,就是对比文件的Hash值.
 既然可以识别文件.那么还有一个非常广泛运用的就是像百度云这样的云端服务.举个例子:
 很多小伙伴保留的视频,经常被"和谐".有的人将视频的名称全部改为葫芦兄弟,黑猫警长但是还是被和谐了.
 百度识别你的视频文件,和你的文件名称,以及文件后缀(有人改成.txt)没有半毛钱关系.它只会看这个文件的Hash值.那么如果想要逃脱.你唯一的出路就是改变文件原有的二进制.(翻录\视频格式转换).

> 那么最简单的,就是一个压缩包,全部搞定.

## 单例模式

### 概念

实例化对象时, 永远只有一个对象

### 作用



## 接口:interface

个人理解:  数据入口, 通过该入口可以拿到相应的数据, 需要明确使用规则,并编写接口文档来实现接口两端的交流

接口规范和参数名的确定 一般由后端人员确定并提供给前端(也可以由前端设计)

接口其实就是方法名， 调用接口就是调用方法

### 接口规范

### 参数名的确定

## 随机码生成

需要使用python标准库中的 base64模块

作用: 提供了将二进制数据编码为可打印的 ASCII 字符以及将这些编码解码回二进制数据的函数。

编码的目的: 是使得二进制数据可以作为电子邮件的内容正确地发送，用作 URL 的一部分，或者作为 HTTP POST 请求的一部分。其中的编码算法和 uuencode 程序是不同的。

用法:

```python
import base64
# s 为字节码(bytes-like object) 将返回一个编码后的字节码b''
s='1234'
encoded_result = base64.b64encode(s)

# 解码
decoded_result = base64.b64decode(encoded_result)
```

------



`os.urandom(size)`

Return a string of *size* random bytes suitable for cryptographic use.

返回一个字节码: 根据参数size 大小的产生随机字节码, 一般适用于加密场景

该功能返回一个随机字节码,返回的数据应该是十分的不可预测的, 尽管最终的结果由操作系统实现. 



------

`os.getrandom(size)`

获取size位的字节码

# 类型提示



# 泛型Generic

核心知识

泛型变量, 泛型类, 泛型函数

协变, 逆变

泛型与继承

## 泛型变量

## 泛型类



# 正则表达式RE



## 正则表达式概述

Regular Expression 也称规则表达式过滤  匹配

**正则表达式**是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个 “规则字符串”，这个“规则字符串” 用来表达对字符串的一种过滤逻辑。模糊匹配, 

### 正则表达式的作用

1. 测试字符串的某个模式，即**验证数据有效性**
2. 实现按照某种规则替换文本
3. 根据模式匹配从字符串中提取⼀个子字符串（爬虫）



给定一个正则表达式和另一个字符串，我们可以达到如下的目的：

1. 给定的字符串是否符合正则表达式的**过滤逻辑**（称作 “匹配”）：
2. 可以通过正则表达式，从字符串中获取我们想要的特定部分。

### 正则表达式的构成

**原⼦**（普通字符，如英⽂字符）
**元字符**（有特殊功⽤的字符）
以及模式修正字符组成。
注意：⼀个正则表达式中⾄少包含⼀个原⼦。

## 正则表达式测试工具

使用`RegexBuddy`进行正则验证

## 普通字符



## 匹配单个字符

| 字符 | 功能                                     | 描述                                |
| ---- | ---------------------------------------- | ----------------------------------- |
| .    | 匹配任意1个字符（除了\n）                | 通配字符                            |
| [ ]  | 匹配[ ]中列举的字符                      | [ar] 匹配a 和r [a-z]白名单 单个字符 |
| \d   | 匹配数字，即0-9                          | 数字0-9                             |
| \D   | 匹配⾮数字，即不是数字                   |                                     |
| \s   | 匹配空⽩，即空格，\t -tab键 \n-换⾏space | 空格,制表符,换行符                  |
| \S   | 匹配⾮空⽩                               |                                     |
| \w   | 匹配单词字符，即a-z、A-Z、0-9、_         | 字母,  数组, 下划线                 |
| \W   | 匹配⾮单词字符                           |                                     |
|      | 直接输入该字符                           |                                     |

大写取反

数字:digital  0-9

单词字符: word 字母,  数组, 下划线

空格: whitespace

退格: backspace

## 匹配多个字符

正则表达式能够匹配多个字符

配合单个字符使用

| 字符  | 功能                                                |
| ----- | --------------------------------------------------- |
| *     | 匹配前⼀个字符出现0次或者⽆限次，即可有可⽆         |
| +     | 匹配前⼀个字符出现1次或者⽆限次，即⾄少有1次        |
| ?     | 匹配前⼀个字符出现1次或者0次，即要么有1次，要么没有 |
| {m}   | 匹配前⼀个字符出现m次                               |
| {m,n} | 匹配前⼀个字符出现从m到n次                          |

\* 匹配首字母大写的: \[A-Z][a-z]*

+匹配变量名是否有效 [A-Z_a-z]+

? 匹配出0-99的数字[0-9]?[0-9]

## 匹配开头结尾

正则表达式能够匹配开头和结尾

| 字符功能 |                                                            |
| -------- | ---------------------------------------------------------- |
| ^尖括号  | 匹配字符串开头，注意^[4-7]和 [\^4-7]的区别\^表示取反[\^23] |
| $        | 匹配字符串结尾                                             |

## 匹配分组

|     字符     | 功能                             |
| :----------: | :------------------------------- |
|      \|      | 匹配左右任意一个表达式           |
|     (ab)     | 将括号中 ]0                      |
|    `\num`    | /+*****                          |
| `(?P<name>)` | 分组起别名                       |
|  (?P=name)   | 引用别名为name分组匹配到的字符串 |

## RE表达式

`()`标记的区间为表示字符串 为表达式标记参数的方法:
开始处写上`?P<name>` 并以 `?P=name` 应用

## RE模块操作

在Python中需要通过正则表达式对字符串进行匹配的时候，可以使用一个模块，名字为re

> 目标 
>
> re.match 
>
> group()

### re模块的使用过程

```python
# 导入re模块
import re
# 使用match方法进行匹配操作
result = re.match(正则表达式,要匹配的字符串)

# 如果上一步匹配到数据的话，可以使用group方法来提取数据
result.group()
```

### re模块示例(匹配以itcast开头的语句)

```python
#coding=utf-8

import re

result = re.match("itcast","itcast.cn")

result.group()
```

#### 说明

- re.match() 能够匹配出以xxx开头的字符串
- re.match() 能够匹配出 itcast.cn 字符串中开头部分的 itcast

### 匹配单个字符

| 字符 |               功能               |
| :--: | :------------------------------: |
|  .   |    匹配任意1个字符（除了\n）     |
| [ ]  |       匹配[ ]中列举的字符        |
|  \d  |         匹配数字，即0-9          |
|  \D  |      匹配非数字，即不是数字      |
|  \s  |     匹配空白，即 空格，tab键     |
|  \S  |            匹配非空白            |
|  \w  | 匹配单词字符，即a-z、A-Z、0-9、_ |
|  \W  |          匹配非单词字符          |

### 匹配多个字符

| 字符  |                        功能                         |
| :---: | :-------------------------------------------------: |
|   *   |     匹配前一个字符出现0次或者无限次，即可有可无     |
|   +   |    匹配前一个字符出现1次或者无限次，即至少有1次     |
|   ?   | 匹配前一个字符出现1次或者0次，即要么有1次，要么没有 |
|  {m}  |                匹配前一个字符出现m次                |
| {m,n} |             匹配前一个字符出现从m到n次              |

### 匹配开头结尾

| 字符 |      功能      |
| :--: | :------------: |
|  ^   | 匹配字符串开头 |
|  $   | 匹配字符串结尾 |

## RE模块的高级使用

### 搜索匹配: search

re.search函数会在字符串内查找模式匹配,只要找到第⼀个匹配然后返回，如果字符串没有匹配，则返回None。

只会从开始处匹配

格式：re.search(pattern, string, flags=0)
需求：匹配出⽂章阅读的次数

```python
import re
ret = re.search(r"\d+", "阅读次数为 9999,分享次数: 1124")
print(ret.group())
# 运⾏结果：
# '9999'
```



### 查找所有:[findall](#header-1)

**查找所有符合的数据并 返回列表**

[t](#header-1)

```python
import re
result = re.findall('\d+','阅读次数: 9999, 点赞次数: 333, 赞赏次数: 125')
if result:
    print('匹配成功')
    print(result)
else:
    print('匹配失败')
# 输出结果
# 匹配成功
# ['9999', '333', '125']
```

### 查找替换: sub  

**将匹配到的数据进行替换 返回修改后的数据**

使⽤re替换string中每⼀个匹配的⼦串后返回替换后的字符串。
格式：re.sub(pattern, repl, string, count)
需求：将匹配到的阅读次数加1

```python
import re
ret = re.sub(r"\d+", "10000", "阅读次数:9999次,转发次数:883次,评论次数:3次")
print(ret)
# 运行结果
# 阅读次数:10000次,转发次数:10000次,评论次数:10000次
```

### 切割数据: split



**根据匹配进⾏切割字符串，并返回⼀个列表**

按照能够匹配的⼦串将string分割后返回列表。
可以使⽤re.split来分割字符串，如：re.split(r'\s+', text)；将字符串按空格分割成⼀个单词列表。
格式：re.split(pattern, string[, maxsplit])
需求：切割字符串“info:xiaoZhang 33 shandong”

```python
import re
result = re.split(':| ','info:hello@163.com zhangsan lisi')
if result:
    print('匹配成功')
    print(result)
else:
    print('匹配失败')
```

## 贪婪和非贪婪

贪婪: 总尝试匹配尽可能多的字符;

非贪婪: 总是尝试匹配尽可能少的字符

[RE模块的高级使用](#RE模块的高级使用)

单位 数字 贪婪

在"*","?","+","{m,n}"后面加上？，使贪婪变成非贪婪。

## r的作用和用法

> Python 中在正则字符串前面(字符串外部)加上 'r' 表示
>
> 
>
> 让正则中的'\\'不再具有转义功能(默认为转义), 就是表示原生字含义:一个斜杠\\
>
> 类似的还有 b 声明为字节码字符串, f声明为格式化字符串

作用: 声明该字符串为正则表达式字符串

类似

原来写法

```python
import re
# 匹配html标签
result = re.match('<([A-Za-z0-9]+)>.*</\\1>', '<html>helloworld</html>')
# 判断是否可以匹配成功
if result:
	# 匹配成功, 返回匹配结果
	print(result.group())
else:
	print('匹配失败!')
```

使用 r 的写法

```python
import re
# 匹配html标签
result = re.match(r'<([A-Za-z0-9]+)>.*</\1>', '<html>helloworld</html>')
# 判断是否可以匹配成功
if result:
	# 匹配成功, 返回匹配结果
	print(result.group())
else:
	print('匹配失败!')
```

说明
    　　与⼤多数编程语⾔相同， 正则表达式⾥使⽤"\"作为转义字符 ，这就可能造成反斜杠困扰。假如你需要匹配⽂本中的字符  "\\"，那么使⽤编程语⾔表示的正则表达式⾥将需要4个反斜杠"\\"：前两个和后两
    个分别⽤于在编程语⾔⾥转义成反斜杠，转换成两个反斜杠后再在正则表达式⾥转义成⼀个反斜杠。
    　　Python⾥的原生字符串很好地解决了这个问题，有了原生字符串，你再也不⽤担⼼是不是漏写了反斜杠，写出来的表达式也更直观





# Python第三方模块

```shell
# 常用第三方模块
youtube-dl
ffmpeg
pydicom
requests

```



## matplotlib

## nump

## pandas

## requests

## fire

### 快速开始

```python
import fire


    def hello(name='世界'):

        return f'hello, {name}!'


if `__name__` == '`__main__`':
    fire.Fire(hello)

```



## bs4

> beautifulsoup4

descriptions xml解析工具



## memory_profiler-[内存分析工具](https://github.com/pythonprofilers/memory_profiler)

### line-by-line memory usage

The line-by-line memory usage mode is used much in the same way of the [line_profiler](https://pypi.python.org/pypi/line_profiler/): first decorate the function you would like to profile with `@profile` and then run the script with a special script (in this case with specific arguments to the Python interpreter).

In the following example, we create a simple function `my_func` that allocates lists `a`, `b` and then deletes `b`:

```python
@profile
def my_func():
    a = [1] * (10 ** 6)
    b = [2] * (2 * 10 ** 7)
    del b
    return a

if __name__ == '__main__':
    my_func()
```

Execute the code passing the option `-m memory_profiler` to the python interpreter to load the memory_profiler module and print to stdout the line-by-line analysis. If the file name was example.py, this would result in:

```shell
python -m memory_profiler example.py
mprof run <script> 
mprof run --include-children <script>
```

Output will follow:

```
Line #    Mem usage  Increment   Line Contents
==============================================
     3                           @profile
     4      5.97 MB    0.00 MB   def my_func():
     5     13.61 MB    7.64 MB       a = [1] * (10 ** 6)
     6    166.20 MB  152.59 MB       b = [2] * (2 * 10 ** 7)
     7     13.61 MB -152.59 MB       del b
     8     13.61 MB    0.00 MB       return a
```

The first column represents the line number of the code that has been profiled, the second column (*Mem usage*) the memory usage of the Python interpreter after that line has been executed. The third column (*Increment*) represents the difference in memory of the current line with respect to the last one. The last column (*Line Contents*) prints the code that has been profiled.

