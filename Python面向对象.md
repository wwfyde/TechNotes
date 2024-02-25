# Python面向对象

## 参考资料

- [Python-教程: 类](https://docs.python.org/zh-cn/3/tutorial/classes.html)
- [Python Tutorials Class]()

## 类的设计思想

> 使用面向对象开发前 , 应该首先分析需求 , 确定一下 , 程序中需要包含哪些类 !



> 一切皆对象, 一切皆协议. 对象的三大特征: 类型, 值, 名称.



在 程序开发中 , 要设计一个类 ,通常需要满足一下三个要素:

1. **类名** : 这类事物的名字 , **满足大驼峰命名法**
2. **属性** : 这类事物具有什么样的 **特征**    --变量
3. **方法** : 这类事物具有什么样的 **行为**    --函数

### 类的多维解释

- 类是用来组织**结构(structure)**和**行为(behavior)**的
- 类的作用是封装**数据(data)**和**操作(operation)**
- 类具有**属性(attribute)**和**方法(method)**, 类具有**字段(field)**和**方法(method)**
- 类包括**变量**和**函数**
- 类是对意象的抽象, 这个**意象**既可以是现实世界存在的, 也可以是虚构出来的.
- 类在Go语言中是用**结构体**(struct)来抽象和组织的
- 类提供了把**数据**和**功能**绑定在一起的方法。创建新类时创建了新的对象 **类型**，从而能够创建该类型的新 **实例**。实例具有能维持自身状态的属性，还具有能修改自身状态的方法（由其所属的类来定义）。

## 对象的多维解释

- 对象是类的实例, 通过初始化构造器创建

### 类名的确定

**名词提炼法** 分析 **整个业务流程** , 出现的 **名词** , 通常就是找到的类(归类)

类就是 描述的提炼





### 属性和方法的确定

- 对 **对象的特征描述** , 通常可以定义成 **属性**  -- 名词 
- **对象具有的行为** (动词) , 通常可以定义成 **方法** --动词

> 提示:
> 需求中没有涉及的属性或者方法在设计类时, **不需要考虑**

## 

## 特殊方法

一个类可以通过定义具有**特殊名称的方法**来实现由特殊语法所引发的特定操作 (例如算术运算或下标与切片)。这是 Python 实现 *操作符重载* 的方式，允许每个类自行定义基于操作符的特定行为。

将一个特殊方法设为 `None` 表示对应的操作不可用。例如，如果一个类将 `__iter__()` 设为 `None`，则该类就是不可迭代的，因此对其实例调用 [`iter()`](https://docs.python.org/zh-cn/3.7/library/functions.html#iter) 将引发一个 [`TypeError`](https://docs.python.org/zh-cn/3.7/library/exceptions.html#TypeError) (而不会回退至 `__getitem__()`). 

在实现模拟任何内置类型的类时，很重要的一点是模拟的实现程度对于被模拟对象来说应当是有意义的。例如，提取单个元素的操作对于某些序列来说是适宜的，但提取切片可能就没有意义。

### 基本定制

#### object.`__new__`(cls)

区别:`__new__`()方法创建新实例, `__init__`()初始化新实例

**作用**: 创建类的新实例

调用以创建一个 *cls* 类的新实例。`__new__()` 是一个静态方法 (因为是特例所以你不需要显式地声明)，它会将所请求实例所属的类作为第一个参数。其余的参数会被传递给对象构造器表达式 (对类的调用)。`__new__()` 的返回值应为新对象实例 (通常是 *cls* 的实例)。

典型的实现会附带适宜的参数使用 `super().`__new__`(cls[, ...])`，通过超类的 [``__new__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__new__`) 方法来创建一个类的新实例，然后根据需要修改新创建的实例再将其返回。

如果 [`__new__()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 返回一个 *cls* 的实例，则新实例的 [`__init__()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 方法会在之后被执行，例如 `__init__(self[,...])`，其中 *self* 为新实例，其余的参数与被传递给 [__new__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 的相同。

如果 [`__new__()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 未返回一个 *cls* 的实例，则新实例的 [`__init__()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 方法就不会被执行。

[`__new__()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 的目的主要是允许不可变类型的子类 (例如 int, str 或 tuple) 定制实例创建过程。它也常会在自定义元类(歌曲播放)中被重载以便定制类创建过程。(默认让对象中只能产生一份地址)

#### object.`__init__`(self)

在实例 (通过 [``__new__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__new__`)) 被创建之后，返回调用者之前调用。其参数与传递给类构造器表达式的参数相同。一个基类如果有 [``__init__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 方法，则其所派生的类如果也有 [``__init__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__init__`) 方法，就必须显式地调用它以确保实例基类部分的正确初始化；例如: `super().`__init__`([args...])`.

因为对象是由 [``__new__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__new__`) 和 [``__init__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 协作构造完成的 (由 [``__new__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__new__`) 创建，并由 [``__init__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 定制)，

所以 [``__init__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__init__`) 返回的值**只能是** `None`，否则会在运行时引发 [`TypeError`](https://docs.python.org/zh-cn/3.7/library/exceptions.html#TypeError)。

#### object.`__del__`(self)

**在实例将被销毁时调用**。这还会调用终结器或析构器 (不适当)。如果一个基类具有 [``__del__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__del__`) 方法，则其所派生的类如果也有 [``__del__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.) 方法，就必须显式地调用它以确保实例基类部分的正确清除。

当解释器退出时不会确保为仍然存在的对象调用 [``__del__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__del__`) 方法。

**说明**: `del x` 并不直接调用 `x.`__del__`()` --- 前者会将 `x` 的引用计数减一，而后者仅会在 `x` 的引用计数变为零时被调用。

#### object.repr()

由 [`repr()`](https://docs.python.org/zh-cn/3.7/library/functions.html#repr) 内置函数调用以输出一个对象的“官方”字符串表示。如果可能，这应类似一个有效的 Python 表达式，能被用来重建具有相同取值的对象（只要有适当的环境）。如果这不可能，则应返回形式如 `<...someuseful description...>` 的字符串。返回值必须是一个字符串对象。如果一个类定义了 [``__repr__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__repr__`) 但未定义 [``__str__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.)，则在需要该类的实例的“非正式”字符串表示时也会使用 [``__repr__`()`](https://docs.python.org/zh-cn/3.7/reference/datamodel.html#object.`__repr__`)。

此方法通常被用于调试，因此确保其表示的内容包含丰富信息且无歧义是很重要的。

## 用dir()内置函数,查看对象内的 **所有属性及方法**

- 在 Python 中 **对象几乎是无所不在的** , 我们之前学习的 **变量** , **数据** , **函数** ,**模块** 都是对象,一切皆为对象

在 Python 中可以使用以下两个方法验证: 

```
1. 在 **标识符** / **数据** 后输入一个 `.` , 然后按下 `TAB`,ipython 会提示该对象能够调用的 **方法列表**
2. 使用内置函数 dir 传入 **标识符** / **数据** , 可以查看对象内的 **所有属性及方法**
```

**提示**:  __方法名__ 格式的方法是 `Python` 提供的 **内置方法 / 属性** 
用法示例: 

```
def demo():
    """这是一个测试函数"""
    print("打印内容")
dir(demo)
demo.`__doc__`

```

| **方法名   | **作用**                                    |
| ---------- | ------------------------------------------- |
| `__new__`  | **创建对象**时, 会被 **自动调用**           |
| `__init__` | **对象被初始化**时, 会被 **自动调用**       |
| `__del__`  | **对象被从内存中销毁**前, 会被 **自动调用** |
| `__str__`  | 返回**对象的描述信息**, print 函数输出使用  |

## 定义简单的类

> **面向对象** 是 **更大** 的 **封装** , 在 **一个类中 封装 多个方法** , 这样 **通过这个类创建出来的对象 , 就可以直接调用这些方法了!**
> 伪代码:

```
class 类名:

    def 方法1(self, 参数列表):
        pass
        
    def 方法2(self, 参数列表):
        pass
```

- **方法** 的定义格式和之前学习过的 **函数** 几乎一样
- 

### 创建对象

- 当一个类定义完成之后 , 要使用这个类来创建对象 , 语法格式如下:
- 产生新的对象: 类的实例化    创建对象的时候 

```
对象变量 = 类名()
```

### 理解类和对象   类是模型样式 ,对象是具体化的个体 类的对象是以对多

### 第一个面向对象程序 

第一步:需求 - 分析
需求 :

- 小猫 爱 吃 鱼 , 小猫 要 喝 水

分析

1. 定义一个猫类 Cat
2. 猫的行为 吃 喝

### 引用概念的强调

> 在面向对象开发中, **引用** 概念是同样适用的!

- 在 `Python` 中 适用类 **创建对象之后**, `tom` 变量中 仍然记录的是 **对象在内存中的地址**
- 也就是 `tom` 变量 **引用** 了 **新建的猫的对象**
- 使用 **print** 输出 对象变量, 默认情况下, 是能够输出这个变量的 **引用的对象** 是 **由哪一个类创建的对象**, 以及 **在内存中的地址(十六进制表示)**

> 提示:在计算机中, 通常使用**十六进制** 表示 **内存地址**
> **十进制** 和 **十六进制** 都是用来表达数字的, 只是表示的方式不一样
> %d  十进制  5x 十六进制



## 方法中的 `self` 参数

### 给对象增加属性

- 在  python  中 要 **给对象设置属性** , 非常的容易, **但是不推荐使用**
    - 因为: 对象属性的封装应该封装在内部
- 只需要在 **类的外部的代码** 中直接通过 `.` 设置一个属性即可

### 使用 `self` 在方法内部输出每一只猫的名字

> 由 **哪一个对象** 调用的方法. 方法内的 `self` 就是 **哪一个对象的引用**
> 使用`self` 有助于引用属性

- 在类封装的方法内部, `self` 就表示 **当前调用方法的对象自己**
- **调用方法时**, 程序员不需要传递 `self` 参数
- 在方法内部
    - 可以通过 `self.`  **访问对象的属性**
    - 也可以通过 `self.`  **调用其他的对象方法**
    - 在

## `__init__`初始化方法

作用 简化对象的创建  由外部传递参数

## `__del__`方法:自动调用

## 士兵突击案例

### 需求  一个对象的属性 可以是另一个类创建的对象

## 开心就完事了

[士兵] 类:
类名:  Soldier
属性: *gun* name
方法: fire() ,`__init__`(self)
[枪] 类:
类名:  *gun*
属性:  model , bullet-count
方法: shoot() , 

## 私有属性和私有方法

### 应用场景

- 在实际开发中,**对象** 的 **某些属性或方法**

私有属性可以通过方法访问私有属性的 因为是在内部使用的该私有属性

## 私有属性和私有方法的处理方式

> 提示: 在

```math
e^{i\pi} + 1 = 0
```

日常开发中, **不要使用这种方式, 访问对象的私有属性或私有方法**
python 中,并么有 **真正意义** 的 **私有**

- 在给 **属性** , **方法** 命名时, 实际是对 **名称** 做了一些特殊处理, 使得外界无法访问到
- **处理方式** : 在 **名称** 前面加上 _类名 => _类名__名称
- 

```
# 私有属性，外部不能直接访问到
print(xiaofang._Women__age)

# 私有方法，外部不能直接调用
xiaofang._Women__secret()

```

------

## 继承

> 私有属性和私有方法无法被继承

## 面向对象的三大特性

1. **封装** 根据 **职责** 将 **属性** 和 **方法** **封装** 到一个抽象的 **类** 中
2. **继承** :  **实现代码的重用** , 相同的代码不需要重复的编写
3. **多态** 

### 继承的概念 , 语法和特点

**继承的概念: 子类 拥有父类的所有方法和属性**

#### 语法

```
class 类名(父类名):
    pass
    
```

- **子类** 继承自 **父类** , 可以直接 **享受** 父类中已经封装好的方法, 不需要再次开发
- **子类** 中应该根据 **职责** 封装 **子类** 特有的属性和方法

子类 继承 父类    父类 派生 子类 

### 方法的重写

- **子类** 拥有 **父类** 的所有 **方法** 和 **属性**
- **子类** 继承自 **父类** , 可以直接**享受**父类中已经封装好的方法, 不需要再次开发

应用场景

- 当父类的方法实现不能满足子类需求时,可以对但方法进行 **重写(override)**

重写 父类方法 有两种情况:

1. 覆盖父类的方法
    只会调用子类,而不是父类封装的方法
2. 对父类方法进行扩展

- 如果在开发中, **子类的方法实现** 中 **包含 父类中的方法实现**
    - **父类原本封装的方法实现** 是 **子类方法的一部分**
- 就可以使用 **扩展** 的方式
    1. **在子类中 重写** 父类的方法
    2. 在需要的位置使用 super().父类方法 来调用父类方法的执行
    3. 代码其他的位置针对子类的需求, 编写 **子类特有的代码实现**

**关于 super()**

- 在 Python 中 super 是一个**特殊的类**
- super() 就是使用 super 类创建出来的对象
- **最常** 使用的场景就是在 **重写父类方法时**, 调用 **在父类中的方法实现**

**提示**

- 如果使用 **当前子类名** 调用方法, 会形成递归的调用 , **出现死循环**

### 父类的私有属性 和私有方法

**子类对象** **不能** 在自己的方法内部, **直接** 访问 父类的 **私有属性** 或 **私有方法**
**子类对象** 可以通过**父类**的 **公有方法** **间接** 访问到 **私有属性** 或 **私有方法 **

```
* 私有属性, 方法 是对象的隐私, 不对外公开, 外界 以及 子类 都不能直接访问
* 私有属性, 方法 通常用于做一些内部的事情
```

### 多继承

- **子类** 可以拥有 **多个父类**, 并且具有 **所有父类** 的 **属性** 和 **方法**
- 例如: 孩子会继承自己付清和母亲的特性

```
class 子类名(父类名1, 父类名2 ...):
    pass

```

#### 多继承的使用注意事项

**问题的提出**

- 如果 不同的父类 中存在 同名的方法，子类对象 在调用方法时，会调用 哪一个父类中的方法呢？

> 提示：开发时，应该尽量避免这种容易产生混淆的情况！ —— 如果 父类之间 存在 同名的属性或者方法，应该 尽量避免 使用多继承

**Python 中的 MRO —— 方法搜索顺序**

- Python 中针对 类 提供了一个 内置属性 `__mro__` 可以查看 方法 搜索顺序
- MRO 是 method resolution order，主要用于 在多继承时判断 方法、属性 的调用 路径

```
print(C.`__mro__`)

# 结果
(<class '`__main__`.C'>, <class '`__main__`.A'>, <class '`__main__`.B'>, <class 'object'>)
```

- 在搜索方法时，是按照 `__mro__` 的输出结果 从左至右 的顺序查找
- 的如果在当前类中 找到方法，就直接执行，不再搜索
- 如果 没有找到，就查找下一个类 中是否有对应的方法，如果找到，就直接执行，不再搜索
- 如果找到最后一个类，还没有找到方法，程序报错

### 继承的传递性(间接继承)



## 多态

一个方法 产生不同结果,继承才有多态(以示例对象为参数传递)

- 以 **继承** 和 **重写父类方法** 为前提
- 是调用方法的技巧, 不会影响到类的内部设计
- 一个对象 因为调入的对象不同 而产生了不同的状态   
- 这种方法不用关心传递的是什么对象(利用的继承 和 重写父类 原理)

# 基本概念

- **类**(class): 一群具有相同 **特征** 或者 **行为** 的事物的一个统称. 是抽象的 , 不能直接使用
    - **特征** 被称为 **属性**, **数据**
    - **行为** 被称为 **方法**
    - **类** 是 **负责创建对象的**
    - 类是一个抽象概念,类是不存在的(属性 方法  //  行为 特征)
        - 相当于制造飞机是的 **图纸** , 是一个 **模板** 

- **对象**(object): 是 **由类创建出来的一个具体存在** , 可以直接使用
- 类与对象的关系
    - 类相当于是模板, 用以定义对象的结构
    - 对象由类产生, 是类的实例
    - 类是模板 , 对象 是根据 类 这个模板创建出来的, 应该 先有类, 再有对象
    - 类只有一个, 而对象可以有很多个
        - 不同的对象 之间 属性 可能会各不相同
    - 类 中定义了什么 属性和方法 , 对象 中就有什么属性和方法, 不可能多,也不可能少
- 面相对象(OOP)
    - 面向对象编程（OOP）的所有标准特性：类的继承机制支持多个基类、派生的类能覆盖基类的方法、类的方法能调用基类中的同名方法。对象可包含任意数量和类型的数据。和模块一样，类也支持 Python 动态特性：在运行时创建，创建后还可以修改。

- 抽象类(abstract class): 不能用于实例化的类
- 方法(method)
- 属性(attribute)
- 字段(fields): 一般指类变量/类属性(class attribute), 也称数据成员(data member)
    -  A `field` is defined as a class variable that has a [type annotation](https://docs.python.org/3/glossary.html#term-variable-annotation). 

# 特殊方法

> (魔术方法) 属性

具有特殊含义的属性和方法

## `__doc__`

作用: 表示类的描述信息

用法: `类名.`__doc__`` , `对象.test.`__doc__``

```python
class Test:
    """This is descriptions."""
    def start(self):
        """Ting"""
        pass


t = Test()
print(t.`__doc__`)
print(Test.`__doc__`)
print(t.start.`__doc__`)
```

## `__module__`

作用: `__module__` 表示当前操作的对象在哪个模块

方法

```python
from time import ctime
ctime()
print(ctime.`__module__`)
```

## `__class__`

作用: `__class__` 表示当前操作的对象的类是什么

方法

```python
class Goddess():
    def __init__(self):
        self.name = 'Ting'


Ting = Goddess()

print(Ting.__class__)
```

## `__init__`

作用: 初始化, 通过类创建对象时, 自动触发执行

用法

```python
class Goddess():
    def __init__(self, name):
        self.name = name
        self.age = 18


Ting = Goddess('Ting')
print(Ting.name)
print(Ting.age)
```

## `__del__`

作用:当对象在内存中被释放时, 自动触发执行

用法: 程序说Bye-bye时可以赋予一些功能

```python
class Goddess():
    def __init__(self, name):
        self.name = name
        self.age = 18

    def __del__(self):
        print('结束时将执行该代码')


Ting = Goddess('Ting')
print(Ting.name)
print(Ting.age)
```

## `__call__`

作用: 对象后面加括号, 触发执行. `call` 的意思是 `调用`

用法

```python
class Goddess():
    def `__init__`(self, name):
        self.name = name
        self.age = 18

    def `__del__`(self):
        print('结束时将执行该代码')

    def `__call__`(self, *args, **kwargs):
        print('调用对象时会调用该方法')


Ting = Goddess('Ting')
Ting()
```

## `__dict__`

作用: 类或对象中的所有属性

类的实例属性属于对象, 类中的类属性和方法属于类

用法

```python
class Goddess():
    def __init__(self, name):
        self.name = name
        self.age = 18

    def __del__(self):
        print('结束时将执行该代码')

    def __call__(self, *args, **kwargs):
        print('调用对象时会调用该方法')

    def test(self):
        pass


Ting = Goddess('Ting')
Ting.test()
print(Ting.__dict__)
print(Goddess.__dict__)

```

## `__str__`

作用: 如果一个类中定义了`__str__`方法, 那么在打印 对象 时, 默认输出该方法的返回值

```python
class Goddess():
    def `__init__`(self, name):
        self.name = name
        self.age = 18

    def `__str__`(self):
        return 'Ting' + ' '+ 'Asa'


Ting = Goddess('Ting')
print(Ting)
```

## `__getitem__`, `__setitem__` , `__delitem__`

作用: 用于索引操作, 如指点, 以上分别表示: 获取, 设置, 删除 数据

用法

```python
class Goddess():
    def `__init__`(self, name):
        self.name = name
        self.age = 18

    def `__getitem__`(self, item):
        print('`__getitem__`', item)

    def `__setitem__`(self, key, value):
        print('`__getitem__`', key, value)

    def `__delitem__`(self, item):
        print('`__getitem__`', item)



Ting = Goddess('Ting')
result = Ting['k1']  # 自动触发
Ting['k2'] = 'Ting'
del Ting['k1']
```





# 面向对象高级

## 基础概念

- 面向对象分析(Object-Oriented Analysis, OOA)
- 面向对象设计(object-oriented design, OOD)
- 面向对象编程(object-oriented programming, OOP)
- 面向过程(Process-Oriented Programming, POP)
- 类(class):
- 对象(object):
- 抽象类(Abstract class): 没有实例的类, 一般不用于实例化. 
    - 应用场景: 大型系统中设计大型功能单元, 为组件的不同实现提供通用的接口, 提升组件的兼容性
- 抽象方法(Abstract method): 只声明返回的数据类型, 方法名称和所需要的参数, 而不需要具体操作逻辑的方法, 相当于给方法统一的模型



## 面向对象特性

对象

- 面向过程: 注重 **步骤与过程** , 不注重职责分工
- 面向对象: 注重 **对象和职责** , 不同的对象承担不同的职责, 
    - 面向过程的进阶
    - 相比较函数, **面向对象**是**更大**的**封装** , 根据**职责**在一个对象中**封装**多个方法
- 类是对象的抽象, 对象是类的具象.
- 面向对象分析设计编程,其实是将现实生活中的对象经过抽象, 映射为程序中的对象



## 重要专题

### self

### super()

### overload

```python
```



## 特殊方法



## 使用步骤

> 分析 => 设计 => 编程 => 使用

明确问题, 归纳需求, 状态分析, 行为分析, 设计对象, 类 实例化并顺序调用实例方法



## 典型案例



# 数据类

- [数据类](https://docs.python.org/zh-cn/3/library/dataclasses.html#module-dataclasses)
- [](https://docs.python.org/zh-cn/3/tutorial/classes.html#odds-and-ends)

## 示例

```python
from dataclasses import dataclass

@dataclass
class Employee:
  name: str
  dept: str
  salary: int

# 实例化
john =Employee('john', 'computer lab', 1000)
print(john.name)
print(hohn.salary)
```

# 设计原则

## 组合胜过继承

Composition over Inheritance

### Mixin

### 定义接口和抽象基类

使用接口或抽象基类来定义公共API，然后通过组合不同的实现来增强类的功能，也是一种常见做法



# 使用类实现内存对象

> 参考jumpserver