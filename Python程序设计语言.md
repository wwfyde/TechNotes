# Python程序设计语言

基础概念, 接口文档, 演示学习, 实践学习

基于官方文档 编写

语法 语义 高级应用 实践 自下而上

## 一般语法

- 参数列表`,`后面可以直接换行
- 字符串可以用`\`换行, 默认自动添加
- 象 意象 形象 形状 抽象 象征 表征 养足 象是对特征的抽取 可描述的东西



## 官方手册使用说明

<a id='py-notation' href='计算机科学.md#ebnf'>参见: 计算机科学EBNF</a>

[官方文档](https://docs.python.org/3/reference/introduction.html#notation)

BNF grammar notation

syntax diagram

|   符号   |     含义      | 备注                                                 |
| :------: | :-----------: | ---------------------------------------------------- |
| ` ::= `  |  definition   | 手册的标注语法标识符, python中用 ` : ` 来标识        |
|  ` | `   |  alternation  | 用来分割可选项, 表示 或(or) 的意思                   |
|  ` * `   |  repetition   | 表示对前一项(N次重复/非负次重复)                     |
|  ` + `   |  at-list-one  | 表示对前一项非零次重复                               |
| ` [ ] `  |   optional    | 表示 可选项                                          |
| ` < > `  |   mandatory   | 表示必须/强制参数rule name                           |
| ` ( ) `  |   grouping    | 表示分组 括号内元素必须同时(成组)出现                |
|  ` {} `  |  alternation  | 至少一个 repetition one mutually exclusive arguments |
| ` name ` |  identifier   | 表示标识符(常量, 变量, 关键字) rule name             |
| ` " " `  |    literal    | 表示字面量                                           |
| ` ' ' `  | single quotes | 表示 固定字符串                                      |



```
语法示例
name      ::=  lc_letter (lc_letter | "_")*
lc_letter ::=  "a"..."z"
```



```text
每条规则的开头是一个名称 (即该规则所定义的名称) 加上 ::=

每条规则通常为一行；有许多个可选项的规则可能会以竖线为界分为多行。

由三个点号(...)分隔的两个本义字符表示在指定 (开) 区间范围内的任意单个 ASCII 字符。

由尖括号 (<...>) 括起来的内容是对于所定义符号的非正式描述；即可以在必要时用来说明 '控制字符' 的意图。

虽然所用的标注方式几乎相同，但是词法定义和句法定义是存在很大区别的: 词法定义作用于输入源中单独的字符，而句法定义则作用于由词法分析所生成的形符流。在下一章节 ("词法分析") 中使用的 BNF 全部都是词法定义；在之后的章节中使用的则是句法定义。
```



# 专业术语

> Glossary 核心概念	基础概念 术语对照表
>
> 参考链接
>
> - [Glossary](https://docs.python.org/3/glossary.html)
> - [术语对照表](https://docs.python.org/zh-cn/3/glossary.html)

## Python之禅: Zen of Python

列出 Python 设计的原则与哲学，有助于理解与使用这种语言。查看其具体内容可在交互模式提示符中输入 "`import this`"。

* Beautiful is better than ugly.
	
	* 优美胜于丑陋（Python 以编写优美的代码为目标）
	* Asa: 写出优雅的代码没有什么不好
* Explicit is better than implicit.
		* 明了胜于晦涩（优美的代码应当是明了的，命名规范，风格相似）
	* Asa: 显性好于隐性
* Simple is better than complex.
		* 简洁胜于复杂（优美的代码应当是简洁的，不要有复杂的内部实现）
* Complex is better than complicated.
	* 复杂胜于凌乱（如果复杂不可避免，那代码间也不能有难懂的关系，要保持接口简洁）
* Flat is better than nested.
		* 扁平胜于嵌套（优美的代码应当是扁平的，不能有太多的嵌套）
* Sparse is better than dense.
		* 间隔胜于紧凑（优美的代码有适当的间隔，不要奢望一行代码解决问题）
* Readability counts.
	* 可读性很重要（优美的代码是可读的）
* Special cases aren't special enough to break the rules.
   * 特殊情况不足以打破规则
* Although practicality beats purity.
	* 即便假借特例的实用性之名，也不可违背这些规则（这些规则至高无上）
* Errors should never pass silently.
   * 错误不应该被忽视
* Unless explicitly silenced.
	* 除非确实需要忽视
	* 不要包容所有错误，除非你确定需要这样做（精准地捕获异常，不写except:pass风格的代码）
* In the face of ambiguity, refuse the temptation to guess.
	* 当存在多种可能，不要尝试去猜测(避免歧义, 保持确定性, 避免副作用)
* There should be one-- and preferably only one --obvious way to do it.
	* 使用单一方法
	* 而是尽量找一种，最好是唯一一种明显的解决方案（如果不确定，就用穷举法）
* Although that way may not be obvious at first unless you're Dutch.
	* 虽然这并不容易，因为你不是 Python 之父（这里的 Dutch 是指 Guido）
* Now is better than never. 
   * 如果不行动将没有任何收获, 立即行动吧!
* Although never is often better than *right* now.
	* 只做有必要的事情, 行动之前思考必要性.
	* 只在实际需要时行动, 不要预见自己需要.
	* 做也许好过不做，但不假思索就动手还不如不做（动手之前要细思量）
* If the implementation is hard to explain, it's a bad idea.
   * 如果实现方式很难去解释和说明, 这是个不好的注意.
* If the implementation is easy to explain, it may be a good idea.
	* 如果你无法向人描述你的方案，那肯定不是一个好方案；反之亦然（方案测评标准）
* Namespaces are one honking great idea -- let's do more of those!
	* 命名空间是一种绝妙的理念，我们应当多加利用（倡导与号召）

## 术语列表

<dl>
    	<dt>terms</dt>
    <dd>Descriptions</dd>
        <dt>terms</dt>
    <dd>Descriptions</dd>
    	<dt>terms</dt>
    <dd>Descriptions</dd>
</dl>
term1
:describe






## 实参: argument

在调用函数时传给 [function](https://docs.python.org/zh-cn/3/glossary.html#term-function) （或 [method](https://docs.python.org/zh-cn/3/glossary.html#term-method) ）的值。参数分为两种：

- *关键字参数*: 在函数调用中前面带有标识符（例如 `name=`）或者作为包含在前面带有 `**` 的字典里的值传入。举例来说，`3` 和 `5` 在以下对 [`complex()`](https://docs.python.org/zh-cn/3/library/functions.html#complex) 的调用中均属于关键字参数:

  ```
  complex(real=3, imag=5)
  complex(**{'real': 3, 'imag': 5})
  ```

- *位置参数*: 不属于关键字参数的参数。位置参数可出现于参数列表的开头以及/或者作为前面带有 `*` 的 [iterable](https://docs.python.org/zh-cn/3/glossary.html#term-iterable) 里的元素被传入。举例来说，`3` 和 `5` 在以下调用中均属于位置参数:

  ```
  complex(3, 5)
  complex(*(3, 5))
  ```

参数会被赋值给函数体中对应的局部变量。有关赋值规则参见 [调用](https://docs.python.org/zh-cn/3/reference/expressions.html#calls) 一节。根据语法，任何表达式都可用来表示一个参数；最终算出的值会被赋给对应的局部变量。

## 形参: parameter

[function](https://docs.python.org/zh-cn/3/glossary.html#term-function) （或方法）定义中的命名实体，它指定函数可以接受的一个 [argument](https://docs.python.org/zh-cn/3/glossary.html#term-argument) （或在某些情况下，多个实参）。有五种形参：

- *positional-or-keyword*：位置或关键字，指定一个可以作为 [位置参数](https://docs.python.org/zh-cn/3/glossary.html#term-argument) 传入也可以作为 [关键字参数](https://docs.python.org/zh-cn/3/glossary.html#term-argument) 传入的实参。这是默认的形参类型，例如下面的 *foo* 和 *bar*:

  ```
  def func(foo, bar=None): ...
  ```

- *positional-only*：仅限位置，指定一个只能按位置传入的参数。Python 中没有定义仅限位置形参的语法。但是一些内置函数有仅限位置形参（比如 [`abs()`](https://docs.python.org/zh-cn/3/library/functions.html#abs)）。

- *keyword-only*：仅限关键字，指定一个只能通过关键字传入的参数。仅限关键字形参可通过在函数定义的形参列表中包含单个可变位置形参或者在多个可变位置形参之前放一个 `*` 来定义，例如下面的 *kw_only1* 和 *kw_only2*:

  ```
  def func(arg, *, kw_only1, kw_only2): ...
  ```

- *var-positional*：可变位置，指定可以提供由一个任意数量的位置参数构成的序列（附加在其他形参已接受的位置参数之后）。这种形参可通过在形参名称前加缀 `*` 来定义，例如下面的 *args*:

  ```
  def func(*args, **kwargs): ...
  ```

- *var-keyword*：可变关键字，指定可以提供任意数量的关键字参数（附加在其他形参已接受的关键字参数之后）。这种形参可通过在形参名称前加缀 `**` 来定义，例如上面的 *kwargs*。

形参可以同时指定可选和必选参数，也可以为某些可选参数指定默认值。

另参见 [argument](https://docs.python.org/zh-cn/3/glossary.html#term-argument) 术语表条目、[参数与形参的区别](https://docs.python.org/zh-cn/3/faq/programming.html#faq-argument-vs-parameter) 中的常见问题、[`inspect.Parameter`](https://docs.python.org/zh-cn/3/library/inspect.html#inspect.Parameter) 类、[函数定义](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#function) 一节以及 [**PEP 362**](https://www.python.org/dev/peps/pep-0362)。

## 表达式: expression

可以求出某个值的语法单元。 换句话说，一个表达式就是表达元素例如字面值、名称、属性访问、运算符或函数调用的汇总，它们最终都会返回一个值。 与许多其他语言不同，并非所有语言构件都是表达式。 还存在不能被用作表达式的 [statement](https://docs.python.org/zh-cn/3/glossary.html#term-statement)，例如 [`while`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#while)。 赋值也是属于语句而非表达式。

## 语句: statement

语句是程序段（一个代码“块”）的组成单位。一条语句可以是一个 [expression](https://docs.python.org/zh-cn/3/glossary.html#term-expression) 或某个带有关键字的结构，例如 [`if`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#if)、[`while`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#while) 或 [`for`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#for)。

## 属性: attribute

> nature property

关联到一个对象的值，可以使用点号表达式通过其名称来引用。例如，如果一个对象 *o* 具有一个属性 *a*，就可以用 *o.a* 来引用它。

## 类型: type

类型决定一个 Python 对象属于什么种类；每个对象都具有一种类型。要知道对象的类型，可以访问它的 [__class__](https://docs.python.org/zh-cn/3/library/stdtypes.html#instance.__class__) 属性，或是通过 `type(obj)` 来获取。

## 二进制文件: binary file

[file object](https://docs.python.org/zh-cn/3/glossary.html#term-file-object) 能够读写 [类字节对象](https://docs.python.org/zh-cn/3/glossary.html#term-bytes-like-object)。二进制文件的例子包括以二进制模式（`'rb'`, `'wb'` or `'rb+'`）打开的文件、`sys.stdin.buffer`、`sys.stdout.buffer` 以及 [`io.BytesIO`](https://docs.python.org/zh-cn/3/library/io.html#io.BytesIO) 和 [`gzip.GzipFile`](https://docs.python.org/zh-cn/3/library/gzip.html#gzip.GzipFile) 的实例。

## 通用换行: universal newlines

一种解读文本流的方式，将以下所有符号都识别为行结束标志：Unix 的行结束约定 `'\n'`、Windows 的约定 `'\r\n'`  windows下的'\n' 按Shift + Enter 产生

## 字节码: bytecode

Python 源代码会被编译为字节码，即 CPython 解释器中表示 Python 程序的内部代码。字节码还会缓存在 `.pyc` 文件中，这样第二次执行同一文件时速度更快（可以免去将源码重新编译为字节码）。这种 "中间语言" 运行在根据字节码执行相应机器码的 [virtual machine](https://docs.python.org/zh-cn/3/glossary.html#term-virtual-machine) 之上。请注意不同 Python 虚拟机上的字节码不一定通用，也不一定能在不同 Python 版本上兼容。

## 类: class

用来创建用户定义对象的模板。类定义通常包含对该类的实例进行操作的方法定义。

## 协程: coroutine

协程是子例程的更一般形式。子例程可以在某一点进入并在另一点退出。协程则可以在许多不同的点上进入、退出和恢复。它们可通过 [`async def`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-def) 语句来实现。

## 协程函数:coroutine function

返回一个 [coroutine](https://docs.python.org/zh-cn/3/glossary.html#term-coroutine) 对象的函数。协程函数可通过 [`async def`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-def)语句来定义，并可能包含 [`await`](https://docs.python.org/zh-cn/3/reference/expressions.html#await)、[`async for`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-for) 和 [`async with`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-with) 关键字。

## 装饰器:decorator

> 装饰器, 装饰函数, 实现对函数的功能的扩展
>
> > 理论基础1: 函数是可调用对象, 可以当做参数传入类或函数
> >
> > 理论基础2: 函数内德科定义函数
> >
> > 理论基础3: 命名空间, 闭包空间 

**返回值为另一个函数的函数**，通常使用 `@wrapper` 语法形式来进行函数变换。 装饰器的常见例子包括 [`classmethod()`](https://docs.python.org/zh-cn/3/library/functions.html#classmethod) 和 [`staticmethod()`](https://docs.python.org/zh-cn/3/library/functions.html#staticmethod)。

装饰器语法只是一种语法糖，以下两个函数定义在语义上完全等价:

```python
def f(para):
    ...
f = staticmethod(f) # 总会返回f 对象

f()

@staticmethod
def f(para):
    ...
```

## 描述器: descriptor

> 描述器(类, 对象) 描述符(描述器的方法和属性)
>
> 描述器 property属性 (函数模式, 装饰,配色)

任何定义了 [`__get__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__get__), [`__set__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__set__) 或 [`__delete__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__delete__) 方法的对象。当一个类属性为描述器时，它的特殊绑定行为就会在属性查找时被触发。通常情况下，使用 *a.b* 来获取、设置或删除一个属性时会在 *a* 的类字典中查找名称为 *b* 的对象，但如果 *b* 是一个描述器，则会调用对应的描述器方法。理解描述器的概念是更深层次理解 Python 的关键，因为这是许多重要特性的基础，包括函数、方法、属性、类方法、静态方法以及对超类的引用等等。

## 函数: function

可以向调用者返回某个值的一组语句。还可以向其传入零个或多个 [参数](https://docs.python.org/zh-cn/3/glossary.html#term-argument) 并在函数体执行中被使用。另见 [parameter](https://docs.python.org/zh-cn/3/glossary.html#term-parameter), [method](https://docs.python.org/zh-cn/3/glossary.html#term-method) 和 [函数定义](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#function) 等节。

## 方法: method

在**类内部定义**的函数。如果作为该类的实例的一个属性来调用，方法将会获取实例对象作为其第一个 [argument](https://docs.python.org/zh-cn/3/glossary.html#term-argument) (通常命名为 `self`)。参见 [function](https://docs.python.org/zh-cn/3/glossary.html#term-function) 和 [nested scope](https://docs.python.org/zh-cn/3/glossary.html#term-nested-scope)。

## 垃圾回收: garbage collection 

释放不再被使用的内存空间的过程。Python 是通过引用计数和一个能够检测和打破循环引用的循环垃圾回收器来执行垃圾回收的。可以使用 [`gc`](https://docs.python.org/zh-cn/3/library/gc.html#module-gc) 模块来控制垃圾回收器。

## 生成器: generator

生成器是一类用来简化编写迭代器工作的特殊函数。普通的函数计算并返回一个值，而生成器返回一个能返回数据流的迭代器。*[ 迭代器有点像一个指针, 是一个结果集, 具备可迭代效果 ]*



作用 : 就是用来创建迭代器的, 按需创建合适的迭代器

返回一个 [generator iterator](https://docs.python.org/zh-cn/3/glossary.html#term-generator-iterator) 的函数。它看起来很像普通函数，不同点在于其包含 [`yield`](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#yield) 表达式以便产生一系列值供给 for-循环使用或是通过 [`next()`](https://docs.python.org/zh-cn/3/library/functions.html#next) 函数逐一获取。

通常是指生成器函数，但在某些情况下也可能是指 *生成器迭代器*。如果需要清楚表达具体含义，请使用全称以避免歧义。

## 生成器迭代器: generator iterator

[generator](https://docs.python.org/zh-cn/3/glossary.html#term-generator) 函数所创建的对象。

每个 [`yield`](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#yield) 会临时暂停处理，记住当前位置执行状态（包括局部变量和挂起的 try 语句）。当该 *生成器迭代器* 恢复时，它会从离开位置继续执行（这与每次调用都从新开始的普通函数差别很大）。

## 生成器表达式: generator expression

返回一个迭代器的表达式。 它看起来很像普通表达式后面带有定义了一个循环变量、范围的 `for` 子句，以及一个可选的 `if` 子句。 以下复合表达式会为外层函数生成一系列值:

```python
sum(i*i for i in range(10))         # sum of squares 0, 1, 4, ... 81
285
```

## 模块: module

此对象是 Python 代码的一种组织单位。各模块具有独立的命名空间，可包含任意 Python 对象。模块可通过 [importing](https://docs.python.org/zh-cn/3/glossary.html#term-importing) 操作被加载到 Python 中。

## 包: package

一种可包含子模块或递归地包含子包的 Python [module](https://docs.python.org/zh-cn/3/glossary.html#term-module)。从技术上说，包是带有 `__path__` 属性的 Python 模块。

包是一种模块, 包通常以文件夹的形式存在

### 常规包: regular package

传统型的 [package](https://docs.python.org/zh-cn/3/glossary.html#term-package)，例如包含有一个 `__init__.py` 文件的目录。

### 命名空间包: namespace package

[**PEP 420**](https://www.python.org/dev/peps/pep-0420) 所引入的一种仅被用作子包的容器的 [package](https://docs.python.org/zh-cn/3/glossary.html#term-package)，命名空间包可以没有实体表示物，其描述方式与 [regular package](https://docs.python.org/zh-cn/3/glossary.html#term-regular-package) 不同，因为它们没有 `__init__.py` 文件。



## 特殊方法: special method

一种由 Python 隐式调用的方法，用来对某个类型执行特定操作(例如相加等等)。这种方法的名称的首尾都为双下划线。特殊方法的文档参见 [特殊方法名称](https://docs.python.org/zh-cn/3/reference/datamodel.html#specialnames)。

## 对象: object

任何具有状态（属性或值）以及预定义行为（方法）的数据。object 也是任何 [new-style class](https://docs.python.org/zh-cn/3/glossary.html#term-new-style-class)的最顶层基类名。

## 命名空间: namespace

命名空间是存放变量的场所。命名空间有局部、全局和内置的，**还有对象中的嵌套命名空间**（在方法之内）。命名空间通过防止命名冲突来支持模块化。例如，函数 [`builtins.open`](https://docs.python.org/zh-cn/3/library/functions.html#open) 与 [`os.open()`](https://docs.python.org/zh-cn/3/library/os.html#os.open) 可通过各自的命名空间来区分。命名空间还通过明确哪个模块实现那个函数来帮助提高可读性和可维护性。例如，[`random.seed()`](https://docs.python.org/zh-cn/3/library/random.html#random.seed) 或 [`itertools.islice()`](https://docs.python.org/zh-cn/3/library/itertools.html#itertools.islice) 这种写法明确了这些函数是由 [`random`](https://docs.python.org/zh-cn/3/library/random.html#module-random) 与 [`itertools`](https://docs.python.org/zh-cn/3/library/itertools.html#module-itertools) 模块分别实现的。

### 命名空间的概念

Python使用叫做命名空间的东西来记录变量的轨迹. 命名空间是一个字典(dictionary), key = 变量名, value = 变量值

A *namespace* is a mapping from names to objects. Most namespaces are currently implemented as Python dictionaries。

在一个 Python 程序中的任何一个地方，都存在几个可用的命名空间。

1. 每个**函数**都有着自已的命名空间，叫做**局部命名空间**，它记录了函数的变量，包括函数的参数和局部定义的变量。
2. 每个**模块**拥有它自已的命名空间，叫做**全局命名空间**，它记录了模块的变量，包括函数、类、其它导入的模块、模块级的变量和常量。
3. 还有就是**内置命名空间**，**任何模块**均**可访问**它，它存放着**内置的函数和异常**。

### 命名空间查找顺序

当一行代码要使用变量 x 的值时，Python 会到所有可用的名字空间去查找变量，按照如下顺序：

1. 局部命名空间：特指当前函数或类的方法。如果函数定义了一个局部变量 x，或一个参数 x，Python 将使用它，然后停止搜索。
2. 全局命名空间：特指当前的模块。如果模块定义了一个名为 x 的变量，函数或类，Python 将使用它然后停止搜索。
3. 内置命名空间：对每个模块都是全局的。作为最后的尝试，Python 将假设 x 是内置函数或变量。
4. 如果 Python 在这些名字空间找不到 x，它将放弃查找并引发一个 NameError 异常，如，NameError: name 'aa' is not defined。

嵌套函数的情况：

1. 先在当前 (嵌套的或 lambda) 函数的命名空间中搜索
2. 然后是在父函数的命名空间中搜索
3. 接着是模块命名空间中搜索
4. 最后在内置命名空间中搜索

```python
info = "Adress : "
def func_father(country):
    def func_son(area):
        city= "Shanghai " #此处的city变量，覆盖了父函数的city变量
        print(info + country + city + area)
    city = " Beijing "
    #调用内部函数
    func_son("ChaoYang ");
 
func_father("China ")
# 输出：Adress : China Shanghai ChaoYang

# 以上示例中，info 在全局命名空间中，country 在父函数的命名空间中，city、area 在自己函数的命名空间中
```

### 命名空间的生命周期

不同的命名空间在不同的时刻创建，有不同的生存期。

1. 内置命名空间在 Python 解释器启动时创建，会一直保留，不被删除。
2. 模块的全局命名空间在模块定义被读入时创建，通常模块命名空间也会一直保存到解释器退出。
3. 当函数被调用时创建一个局部命名空间，当函数返回结果 或 抛出异常时，被删除。每一个递归调用的函数都拥有自己的命名空间。

Python 的一个特别之处在于其赋值操作总是在最里层的作用域。赋值不会复制数据——只是将命名绑定到对象。删除也是如此："del y" 只是从局部作用域的命名空间中删除命名 y 。事实上，所有引入新命名的操作都作用于局部作用域。

```python
i=1
def func2():
    global i
    i = i+1

 
func2();
# 错误：UnboundLocalError: local variable 'i' referenced before assignment
```

 由于创建命名空间时，python 会检查代码并填充局部命名空间。在 python 运行那行代码之前，就发现了对 i 的赋值，并把它添加到局部命名空间中。当函数执行时，python 解释器认为 i 在局部命名空间中但没有值，所以会产生错误。

### 命名空间的访问

- **局部命名空间的访问**

使用`locals()` 函数可以访问, 返回结果是一个**名字/值**对的字典,这个字典的键是字符串形式的变量名字, 字典的值是变量的实际值



- **全局命名空间的访问**

使用`globals()`函数来访问

```python
import copy
from copy import deepcopy
 
gstr = "global string"
 
def func1(i, info):
    x = 12345
    print(locals())
 
func1(1 , "first")
 
if __name__ == "__main__":
    print("the current scope's global variables:")
    dictionary=globals()
    print(dictionary)
# 输出结果:

# {'i': 1, 'info': 'first', 'x': 12345}
# the current scope's global variables:
# {
#     '__name__': '__main__', 
#     '__doc__': None, 
#     '__package__': None, 
#     '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x0000013F9EE71CF8>, 
#     '__spec__': None, 
#     '__annotations__': {}, 
#     '__builtins__': <module 'builtins' (built-in)>, 
#     '__file__': 'C:/Users/wwfyde/PycharmProjects/untitled/正则表达.py', 
#     '__cached__': None, 
#     'copy': <module 'copy' from 'C:\\Program Files\\Python37\\lib\\copy.py'>, 
#     'deepcopy': <function deepcopy at 0x0000013FA0CDE2F0>, 
#     'gstr': 'global string', 
#     'func1': <function func1 at 0x0000013FA099C1E0>, 
#     'dictionary': {...}
# }
```



### 总结

1. 模块的名字空间不仅仅包含模块级的变量和常量，还包括所有在模块中定义的函数和类。除此以外，它还包括了任何被导入到模块中的东西。
2. 我们看到，内置命名也同样被包含在一个模块中，它被称作 __builtin__。
3. from module import 和 import module 之间的**不同**。

使用 import module，模块自身被导入，但是它**保持着自已的名字空间**，这就是为什么您需要使用模块名来访问它的函数或属性：module.function 的原因。

但是使用 from module import function，实际上是从另一个模块中将指定的函数和属性导入到您自己的名字空间，这就是为什么您可以直接访问它们却不需要引用它们所来源的模块。

使用 globals 函数，您会真切地看到这一切的发生，见上面的红色输出语句。

**locals 与 globals 之间的一个重要的区别**

locals 是只读的，globals 不是

locals 实际上没有返回局部名字空间，它返回的是一个拷贝。所以对它进行改变对局部名字空间中的变量值并无影响。

globals 返回实际的全局名字空间，而不是一个拷贝。所以对 globals 所返回的 dictionary 的任何的改动都会直接影响到全局变量。

## 模型: Model

数据(Data)是描述事物的符号记录,模型(Model)是对**现实世界的抽象**;

数据模型从抽象层次上描述了系统的静态特征、动态行为和约束条件，为数据库系统的信息表示与操作提供了一个抽象的框架。

数据模型所描述的内容有三部分：数据结构、数据操作和数据约束。

在软件工程中，**数据模型**是定义数据如何输入和与输出的一种模型。其主要作用是为信息系统提供数据的定义和格式。数据模型是数据库系统的核心和基础，现有的数据库系统都是基于某种数据模型而创建起来的。

### 要求

1. 比较直观地模拟现实世界
2. 容易为人理解
3. 便于计算机实现

### 三要素

1. 数据结构：储存在数据库中对象类型的集合，作用是描述数据库组成对象以及对象之间的联系。
2. 数据操作：指对数据库中各种对象实例允许执行的操作的集合，包括操作及其相关的操作规则。
3. 数据完整性约束条件：指在给定的数据模型中，数据及其联系所遵守的一组通用的完整性规则，它能保证数据的正确性和一致性。

## 内置函数: built-in

# **教程·Tutorials**

# **语言参考**

> 参考链接

# 词法分析

Python 程序由一个 *解析器* 读取。输入到解析器的是一个由 *词法分析器* 所生成的 *形符* 流，本章将描述词法分析器是如何将一个文件拆分为一个个形符的。

Python 会将读取的程序文本转为 Unicode 码点；源文件的文本编码可由编码声明指定，默认为 UTF-8，详情见 [**PEP 3120**](https://www.python.org/dev/peps/pep-3120)。如果源文件无法被解码，将会引发 [`SyntaxError`](https://docs.python.org/zh-cn/3/library/exceptions.html#SyntaxError)。

## 2.1 行结构

一个 Python 程序可分为许多 *逻辑行*。



### 2.1.1. 逻辑行

逻辑行的结束是以 NEWLINE 形符表示的。语句不能跨越逻辑行的边界，除非其语法允许包含 NEWLINE (例如复合语句可由多行子语句组成)。一个逻辑行可由一个或多个 *物理行* 按照明确或隐含的 *行拼接* 规则构成。



### 2.1.2. 物理行

物理行是以一个行终止序列结束的字符序列。在源文件和字符串中，可以使用任何标准平台上的行终止序列 - Unix 所用的 ASCII 字符 LF (换行), Windows 所用的 ASCII 字符序列 CR LF (回车加换行), 或者旧 Macintosh 所用的 ASCII 字符 CR (回车)。所有这些形式均可使用，无论具体平台。输入的结束也会被作为最后一个物理行的隐含终止标志。

当嵌入 Python 时，源码字符串传入 Python API 应使用标准 C 的传统换行符 (即 `\n`，表示 ASCII 字符 LF 作为行终止标志)。



### 2.1.3. 注释

一条注释以不包含在字符串字面值内的井号 (`#`) 开头，并在物理行的末尾结束。 一条注释标志着逻辑行的结束，除非存在隐含的行拼接规则。 注释在语法分析中会被忽略。



### 2.1.4. 编码声明

如果一条注释位于 Python 脚本的第一或第二行，并且匹配正则表达式 `coding[=:]\s*([-\w.]+)`，这条注释会被作为编码声明来处理；上述表达式的第一组指定了源码文件的编码。编码声明必须独占一行。如果它是在第二行，则第一行也必须是注释。推荐的编码声明形式如下

```
# -*- coding: <encoding-name> -*-
```

这也是 GNU Emacs 认可的形式，以及

```
# vim:fileencoding=<encoding-name>
```

这是 Bram Moolenaar 的 VIM 认可的形式。

如果没有编码声明，则默认编码为 UTF-8。此外，如果文件的首字节为 UTF-8 字节顺序标志 (`b'\xef\xbb\xbf'`)，文件编码也声明为 UTF-8 (这是 Microsoft 的 **notepad** 等软件支持的形式)。

编码声明指定的编码名称必须是 Python 所认可的编码。所有词法分析将使用此编码，包括语义字符串、注释和标识符。



### 2.1.5. 显式的行拼接

两个或更多个物理行可使用反斜杠字符 (`\`) 拼接为一个逻辑行，规则如下: 当一个物理行以一个不在字符串或注释内的反斜杠结尾时，它将与下一行拼接构成一个单独的逻辑行，反斜杠及其后的换行符会被删除。例如:

```
if 1900 < year < 2100 and 1 <= month <= 12 \
   and 1 <= day <= 31 and 0 <= hour < 24 \
   and 0 <= minute < 60 and 0 <= second < 60:   # Looks like a valid date
        return 1
```

以反斜杠结束的行不能带有注释。反斜杠不能用来拼接注释。反斜杠不能用来拼接形符，字符串除外 (即原文字符串以外的形符不能用反斜杠分隔到两个物理行)。不允许有原文字符串以外的反斜杠存在于物理行的其他位置。



### 2.1.6. 隐式的行拼接

圆括号、方括号或花括号以内的表达式允许分成多个物理行，无需使用反斜杠。例如:

```
month_names = ['Januari', 'Februari', 'Maart',      # These are the
               'April',   'Mei',      'Juni',       # Dutch names
               'Juli',    'Augustus', 'September',  # for the months
               'Oktober', 'November', 'December']   # of the year
```

隐式的行拼接可以带有注释。后续行的缩进不影响程序结构。后续行也允许为空白行。隐式拼接的行之间不会有 NEWLINE 形符。隐式拼接的行也可以出现于三引号字符串中 (见下)；此情况下这些行不允许带有注释。



### 2.1.7. 空白行

一个只包含空格符，制表符，进纸符或者注释的逻辑行会被忽略 (即不生成 NEWLINE 形符)。在交互模式输入语句时，对空白行的处理可能会因读取-求值-打印循环的具体实现方式而存在差异。在标准交互模式解释器中，一个完全空白的逻辑行 (即连空格或注释都没有) 将会结束一条多行复合语句。



### 2.1.8. 缩进

一个逻辑行开头处的空白 (空格符和制表符) 被用来计算该行的缩进等级，以决定语句段落的组织结构。

制表符会被 (从左至右) 替换为一至八个空格，这样缩进的空格总数为八的倍数 (这是为了与 Unix 所用的规则一致)。首个非空白字符之前的空格总数将确定该行的缩进层次。一个缩进不可使用反斜杠进行多行拼接；首个反斜杠之前的空格将确定缩进层次。

在一个源文件中如果混合使用制表符和空格符缩进，并使得确定缩进层次需要依赖于制表符对应的空格数量设置，则被视为不合规则；此情况将会引发 [`TabError`](https://docs.python.org/zh-cn/3/library/exceptions.html#TabError)。

**跨平台兼容性注释:** 由于非 UNIX 平台上文本编辑器本身的特性，在一个源文件中混合使用制表符和空格符是不明智的。另外也要注意不同平台还可能会显式地限制最大缩进层级。

行首有时可能会有一个进纸符；它在上述缩进层级计算中会被忽略。处于行首空格内其他位置的进纸符的效果未定义 (例如它可能导致空格计数重置为零)。

多个连续行各自的缩进层级将会被放入一个堆栈用来生成 INDENT 和 DEDENT 形符，具体说明如下。

在读取文件的第一行之前，先向堆栈推入一个零值；它将不再被弹出。被推入栈的层级数值从底至顶持续增加。每个逻辑行开头的行缩进层级将与栈顶行比较。如果相同，则不做处理。如果新行层级较高，则会被推入栈顶，并生成一个 INDENT 形符。如果新行层级较低，则 *应当* 是栈中的层级数值之一；栈中高于该层级的所有数值都将被弹出，每弹出一级数值生成一个 DEDENT 形符。在文件末尾，栈中剩余的每个大于零的数值生成一个 DEDENT 形符。

这是一个正确 (但令人迷惑) 的Python 代码缩进示例:

```
def perm(l):
        # Compute the list of all permutations of l
    if len(l) <= 1:
                  return [l]
    r = []
    for i in range(len(l)):
             s = l[:i] + l[i+1:]
             p = perm(s)
             for x in p:
              r.append(l[i:i+1] + x)
    return r
```

以下示例显示了各种缩进错误:

```
 def perm(l):                       # error: first line indented
for i in range(len(l)):             # error: not indented
    s = l[:i] + l[i+1:]
        p = perm(l[:i] + l[i+1:])   # error: unexpected indent
        for x in p:
                r.append(l[i:i+1] + x)
            return r                # error: inconsistent dedent
```

(实际上，前三个错误会被解析器发现；只有最后一个错误是由词法分析器发现的 --- `return r` 的缩进无法匹配弹出栈的缩进层级。)



### 2.1.9. 形符之间的空白

除非是在逻辑行的开头或字符串内，空格符、制表符和进纸符等空白符都同样可以用来分隔形符。如果两个形符彼此相连会被解析为一个不同的形符，则需要使用空白来分隔 (例如 ab 是一个形符，而 a b 是两个形符)。



## 2.2. 其他形符

除了 NEWLINE, INDENT 和 DEDENT，还存在以下类别的形符: *标识符*, *关键字*, *字面值*, *运算符* 以及 *分隔符*。 空白字符 (之前讨论过的行终止符除外) 不属于形符，而是用来分隔形符。如果存在二义性，将从左至右读取尽可能长的合法字符串组成一个形符。



## 2.3. 标识符和关键字

标识符 (或者叫做 *名称*) 由以下词法定义进行描述。

Python 中的标识符语法是基于 Unicode 标准附件 UAX-31，并加入了下文所定义的细化与修改；更多细节还可参见 [**PEP 3131**](https://www.python.org/dev/peps/pep-3131) 。

在 ASCII 范围内 (U+0001..U+007F)，可用于标识符的字符与 Python 2.x 一致: 大写和小写字母 `A` 至 `Z`，下划线 `_` 以及数字 `0` 至 `9`，但不可以数字打头。

Python 3.0 引入了 ASCII 范围以外的额外字符 (见 [**PEP 3131**](https://www.python.org/dev/peps/pep-3131))。这些字符的分类使用包含于 [`unicodedata`](https://docs.python.org/zh-cn/3/library/unicodedata.html#module-unicodedata) 模块中的 Unicode 字符数据库版本。

标识符的长度没有限制。对大小写敏感。

```
identifier   ::=  xid_start xid_continue*
id_start     ::=  <all characters in general categories Lu, Ll, Lt, Lm, Lo, Nl, the underscore, and characters with the Other_ID_Start property>
id_continue  ::=  <all characters in id_start, plus characters in the categories Mn, Mc, Nd, Pc and others with the Other_ID_Continue property>
xid_start    ::=  <all characters in id_start whose NFKC normalization is in "id_start xid_continue*">
xid_continue ::=  <all characters in id_continue whose NFKC normalization is in "id_continue*">
```

上文所用 Unicode 类别码的含义:

- *Lu* - 大写字母
- *Ll* - 小写字母
- *Lt* - 词首大写字母
- *Lm* - 修饰字母
- *Lo* - 其他字母
- *Nl* - 字母数字
- *Mn* - 非空白标识
- *Mc* - 含空白标识
- *Nd* - 十进制数字
- *Pc* - 连接标点
- *Other_ID_Start* - 由 [PropList.txt](http://www.unicode.org/Public/12.1.0/ucd/PropList.txt) 定义的显式字符列表，用来支持向下兼容
- *Other_ID_Continue* - 同上

所有标识符在解析时会被转换为规范形式 NFKC；标识符的比较都是基于 NFKC。

Unicode 4.1 中的所有可用标识符字符列表参见以下非规范 HTML 文件链接 https://www.dcl.hpi.uni-potsdam.de/home/loewis/table-3131.html



### 2.3.1. 关键字

以下标识符被作为语言的保留字或称 *关键字*，不可被用作普通标识符。关键字的拼写必须与这里列出的完全一致。

```
False      await      else       import     pass
None       break      except     in         raise
True       class      finally    is         return
and        continue   for        lambda     try
as         def        from       nonlocal   while
assert     del        global     not        with
async      elif       if         or         yield
```



### 2.3.2. 保留的标识符类

某些标识符类 (除了关键字) 具有特殊的含义。这些标识符类的命名模式是以下划线字符打头和结尾:

- `_*`

    不会被 `from module import *` 导入。特殊标识符 `_` 在交互式解释器中被用来存放最近一次求值结果；它保存在 [`builtins`](https://docs.python.org/zh-cn/3/library/builtins.html#module-builtins) 模块中。当不处于交互模式时，`_` 无特殊含义也没有预定义。参见 [import 语句](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#import)。注解 `_` 作为名称常用于连接国际化文本；请参看 [`gettext`](https://docs.python.org/zh-cn/3/library/gettext.html#module-gettext) 模块文档了解有关此约定的详情。

- `__*__`

    System-defined names, informally known as "dunder" names. These names are defined by the interpreter and its implementation (including the standard library). Current system names are discussed in the [特殊方法名称](https://docs.python.org/zh-cn/3/reference/datamodel.html#specialnames) section and elsewhere. More will likely be defined in future versions of Python. *Any* use of `__*__` names, in any context, that does not follow explicitly documented use, is subject to breakage without warning.

- `__*`

    类的私有名称。这种名称在类定义中使用时，会以一种混合形式重写以避免在基类及派生类的 "私有" 属性之间出现名称冲突。参见 [标识符（名称）](https://docs.python.org/zh-cn/3/reference/expressions.html#atom-identifiers)。



## 2.4. 字面值

字面值用于表示一些内置类型的常量。

字符串 | 字节串 | f字符串 | r字符串 | u字符串 | rf字符串 | 

数字字面值 := 整数 | 浮点数 | 虚数

### 2.4.1. 字符串和字节串字面值

字符串字面值由以下词法定义进行描述:

```
stringliteral   ::=  [stringprefix](shortstring | longstring)
stringprefix    ::=  "r" | "u" | "R" | "U" | "f" | "F"
                     | "fr" | "Fr" | "fR" | "FR" | "rf" | "rF" | "Rf" | "RF"
shortstring     ::=  "'" shortstringitem* "'" | '"' shortstringitem* '"'
longstring      ::=  "'''" longstringitem* "'''" | '"""' longstringitem* '"""'
shortstringitem ::=  shortstringchar | stringescapeseq
longstringitem  ::=  longstringchar | stringescapeseq
shortstringchar ::=  <any source character except "\" or newline or the quote>
longstringchar  ::=  <any source character except "\">
stringescapeseq ::=  "\" <any source character>
bytesliteral   ::=  bytesprefix(shortbytes | longbytes)
bytesprefix    ::=  "b" | "B" | "br" | "Br" | "bR" | "BR" | "rb" | "rB" | "Rb" | "RB"
shortbytes     ::=  "'" shortbytesitem* "'" | '"' shortbytesitem* '"'
longbytes      ::=  "'''" longbytesitem* "'''" | '"""' longbytesitem* '"""'
shortbytesitem ::=  shortbyteschar | bytesescapeseq
longbytesitem  ::=  longbyteschar | bytesescapeseq
shortbyteschar ::=  <any ASCII character except "\" or newline or the quote>
longbyteschar  ::=  <any ASCII character except "\">
bytesescapeseq ::=  "\" <any ASCII character>
```

这些条目中未提及的一个语法限制是 [`stringprefix`](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#grammar-token-stringprefix) 或 [`bytesprefix`](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#grammar-token-bytesprefix) 与字面值的剩余部分之间不允许有空白。源字符集是由编码声明定义的；如果源文件中没有编码声明则默认为 UTF-8；参见 [编码声明](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#encodings)。

自然语言描述: 两种字面值都可以用成对单引号 (`'`) 或双引号 (`"`) 来标示首尾。它们也可以用成对的连续三个单引号或双引号来标示首尾 (这通常被称为 *三引号字符串*)。反斜杠 (`\`) 字符被用来对特殊含义的字符进行转义，例如换行，反斜杠本身或是引号等字符。

字节串字面值总是带有前缀 `'b'` 或 `'B'`；它们生成 [`bytes`](https://docs.python.org/zh-cn/3/library/stdtypes.html#bytes) 类型而非 [`str`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str) 类型的实例。它们只能包含 ASCII 字符；字节对应数值在128及以上必须以转义形式来表示。

字符串和字节串字面值都可以带有前缀 `'r'` 或 `'R'`；这种字符串被称为 *原始字符串* 其中的反斜杠会被当作其本身的字面字符来处理。因此在原始字符串字面值中，`'\U'` 和 `'\u'` 转义形式不会被特殊对待。由于 Python 2.x 的原始统一码字面值的特性与 Python 3.x 不一致，`'ur'` 语法已不再被支持。

*3.3 新版功能:* 新加入了表示原始字节串的 `'rb'` 前缀，与 `'br'` 的意义相同。

*3.3 新版功能:* 对旧式统一码字面值 (`u'value'`) 的支持被重新引入以简化 Python 2.x 和 3.x 代码库的同步维护。详情见 [**PEP 414**](https://www.python.org/dev/peps/pep-0414)。

包含 `'f'` 或 `'F'` 前缀的字符串字面值称为 *格式化字符串字面值*；参见 [格式化字符串字面值](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#f-strings)。`'f'` 可与 `'r'` 连用，但不能与 `'b'` 或 `'u'` 连用，因此存在原始格式化字符串，但不存在格式化字节串字面值。

在三引号字面值中，允许存在未经转义的换行和引号 (并原样保留)，除非是未经转义的连续三引号，这标示着字面值的结束。 ("引号" 是用来标示字面值的字符，即 `'` 或 `"`。)

除非带有 `'r'` 或 `'R'` 前缀，字符串和字节串字面值中的转义序列会基于类似标准 C 中的转义规则来解读。可用的转义序列如下:

| 转义序列   | 意义                       | 注释  |
| :--------- | :------------------------- | :---- |
| `\newline` | 反斜杠加换行全被忽略       |       |
| `\\`       | 反斜杠 (`\`)               |       |
| `\'`       | 单引号 (`'`)               |       |
| `\"`       | 双引号 (`"`)               |       |
| `\a`       | ASCII 响铃 (BEL)           |       |
| `\b`       | ASCII 退格 (BS)            |       |
| `\f`       | ASCII 进纸 (FF)            |       |
| `\n`       | ASCII 换行 (LF)            |       |
| `\r`       | ASCII 回车 (CR)            |       |
| `\t`       | ASCII 水平制表 (TAB)       |       |
| `\v`       | ASCII 垂直制表 (VT)        |       |
| `\ooo`     | 八进制数 *ooo* 码位的字符  | (1,3) |
| `\xhh`     | 十六进制数 *hh* 码位的字符 | (2,3) |

仅在字符串字面值中可用的转义序列如下:

| 转义序列     | 意义                                 | 注释 |
| :----------- | :----------------------------------- | :--- |
| `\N{name}`   | Unicode 数据库中名称为 *name* 的字符 | (4)  |
| `\uxxxx`     | 16位十六进制数 *xxxx* 码位的字符     | (5)  |
| `\Uxxxxxxxx` | 32位16进制数 *xxxxxxxx* 码位的字符   | (6)  |

注释:

1. 与标准 C 一致，接受最多三个八进制数码。
2. 与标准 C 不同，要求必须为两个十六进制数码。
3. 在字节串字面值中，十六进制数和八进制数转义码以相应数值代表每个字节。在字符串字面值中，这些转义码以相应数值代表每个 Unicode 字符。
4. *在 3.3 版更改:* 加入了对别名 [1](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#id13) 的支持。
5. 要求必须为四个十六进制数码。
6. 此方式可用来表示任意 Unicode 字符。要求必须为八个十六进制数码。

与标准 C 不同，所有无法识别的转义序列将原样保留在字符串中，也就是说，*反斜杠会在结果中保留*。(这种方式在调试时很有用: 如果输错了一个转义序列，更容易在输出结果中识别错误。) 另外要注意的一个关键点是：专用于字符串字面值中的转义序列如果在字节串字面值中出现，会被归类为无法识别的转义序列。

> *在 3.6 版更改:* 无法识别的转义序列将引发 [`DeprecationWarning`](https://docs.python.org/zh-cn/3/library/exceptions.html#DeprecationWarning)。 在某个未来的 Python 版本中它们将引发 [`SyntaxWarning`](https://docs.python.org/zh-cn/3/library/exceptions.html#SyntaxWarning) 并最终将改为引发 [`SyntaxError`](https://docs.python.org/zh-cn/3/library/exceptions.html#SyntaxError)。

即使在原始字面值中，引号也可以加上反斜杠转义符，但反斜杠会保留在输出结果中；例如 `r"\""` 是一个有效的字符串字面值，包含两个字符: 一个反斜杠和一个双引号；而 `r"\"` 不是一个有效的字符串字面值 (即便是原始字符串也不能以奇数个反斜杠结束)。特别地，*一个原始字面值不能以单个反斜杠结束* (因为此反斜杠会转义其后的引号字符)。还要注意一个反斜杠加一个换行在字面值中会被解释为两个字符，而 *不是* 一个连续行。



### 2.4.2. 字符串字面值拼接

多个相邻的字符串或字节串字面值 (以空白符分隔)，所用的引号可以彼此不同，其含义等同于全部拼接为一体。因此， `"hello" 'world'` 等同于 `"helloworld"`。此特性可以减少反斜杠的使用，以方便地将很长的字符串分成多个物理行，甚至每部分字符串还可分别加注释，例如:

```
re.compile("[A-Za-z_]"       # letter or underscore
           "[A-Za-z0-9_]*"   # letter, digit or underscore
          )
```

注意此特性是在句法层面定义的，但是在编译时实现。在运行时拼接字符串表达式必须使用 '+' 运算符。还要注意字面值拼接时每个部分可以使用不同的引号风格 (甚至混合使用原始字符串和三引号字符串)，格式化字符串字面值也可与普通字符串字面值拼接。



### 2.4.3. 格式化字符串字面值

*3.6 新版功能.*

*格式化字符串字面值* 或称 *f-string* 是带有 `'f'` 或 `'F'` 前缀的字符串字面值。这种字符串可包含替换字段，即以 `{}` 标示的表达式。而其他字符串字面值总是一个常量，格式化字符串字面值实际上是会在运行时被求值的表达式。

转义序列会像在普通字符串字面值中一样被解码 (除非字面值还被标示为原始字符串)。解码之后，字符串内容所用的语法如下:

```
f_string          ::=  (literal_char | "{{" | "}}" | replacement_field)*
replacement_field ::=  "{" f_expression ["!" conversion] [":" format_spec] "}"
f_expression      ::=  (conditional_expression | "*" or_expr)
                         ("," conditional_expression | "," "*" or_expr)* [","]
                       | yield_expression
conversion        ::=  "s" | "r" | "a"
format_spec       ::=  (literal_char | NULL | replacement_field)*
literal_char      ::=  <any code point except "{", "}" or NULL>
```

字符串在花括号以外的部分按其字面值处理，除了双重花括号 `'{{'` 或 `'}}'` 会被替换为相应的单个花括号。单个左花括号 `'{'` 标示一个替换字段，它以一个 Python 表达式打头，表达式之后可能有一个以叹号 `'!'` 标示的转换字段。之后还可能带有一个以冒号 `':'` 标示的格式说明符。替换字段以一个右花括号 `'}'` 作为结束。

格式化字符串字面值中的表达式会被当作包含在圆括号中的普通 Python 表达式一样处理，但有少数例外。 空表达式不被允许，[`lambda`](https://docs.python.org/zh-cn/3/reference/expressions.html#lambda) 和赋值表达式 `:=` 必须显式地加上圆括号。 替换表达式可以包含换行（例如在三重引号字符串中），但是不能包含注释。 每个表达式会在格式化字符串字面值所包含的位置按照从左至右的顺序被求值。

*在 3.7 版更改:* 在 Python 3.7 之前， [`await`](https://docs.python.org/zh-cn/3/reference/expressions.html#await) 表达式包含 [`async for`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#async-for) 子句的推导式不允许在格式化字符串字面值表达式中使用，这是因为具体实现存在一个问题。

如果指定了转换符，表达式的求值结果会先转换再格式化。转换符 `'!s'` 即对结果调用 [`str()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str)，`'!r'` 为调用 [`repr()`](https://docs.python.org/zh-cn/3/library/functions.html#repr)，而 `'!a'` 为调用 [`ascii()`](https://docs.python.org/zh-cn/3/library/functions.html#ascii)。

在此之后结果会使用 [`format()`](https://docs.python.org/zh-cn/3/library/functions.html#format) 协议进行格式化。格式说明符会被传入表达式或转换结果的 [`__format__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__format__) 方法。如果省略格式说明符则会传入一个空字符串。然后格式化结果会包含在整个字符串最终的值当中。

顶层的格式说明符可以包含有嵌套的替换字段。这些嵌套字段也可以包含有自己的转换字段和 [格式说明符](https://docs.python.org/zh-cn/3/library/string.html#formatspec)，但不可再包含更深层嵌套的替换字段。这里的 [格式说明符微型语言](https://docs.python.org/zh-cn/3/library/string.html#formatspec) 与字符串 .format() 方法所使用的相同。

格式化字符串字面值可以拼接，但是一个替换字段不能拆分到多个字面值。

一些格式化字符串字面值的示例:

\>>>

```
>>> name = "Fred"
>>> f"He said his name is {name!r}."
"He said his name is 'Fred'."
>>> f"He said his name is {repr(name)}."  # repr() is equivalent to !r
"He said his name is 'Fred'."
>>> width = 10
>>> precision = 4
>>> value = decimal.Decimal("12.34567")
>>> f"result: {value:{width}.{precision}}"  # nested fields
'result:      12.35'
>>> today = datetime(year=2017, month=1, day=27)
>>> f"{today:%B %d, %Y}"  # using date format specifier
'January 27, 2017'
>>> number = 1024
>>> f"{number:#0x}"  # using integer format specifier
'0x400'
```

与正常字符串字面值采用相同语法导致的一个结果就是替换字段中的字符不能与外部的格式化字符串字面值所用的引号相冲突:

```
f"abc {a["x"]} def"    # error: outer string literal ended prematurely
f"abc {a['x']} def"    # workaround: use different quoting
```

格式表达式中不允许有反斜杠，这会引发错误:

```
f"newline: {ord('\n')}"  # raises SyntaxError
```

想包含需要用反斜杠转义的值，可以创建一个临时变量。

\>>>

```
>>> newline = ord('\n')
>>> f"newline: {newline}"
'newline: 10'
```

格式化字符串字面值不可用作文档字符串，即便其中没有包含表达式。

\>>>

```
>>> def foo():
...     f"Not a docstring"
...
>>> foo.__doc__ is None
True
```

另请参见 [**PEP 498**](https://www.python.org/dev/peps/pep-0498) 了解加入格式化字符串字面值的提议，以及使用了相关的格式字符串机制的 [`str.format()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.format)。



### 2.4.4. 数字字面值

数字字面值有三种类型: 整型数、浮点数和虚数。没有专门的复数字面值 (复数可由一个实数加一个虚数合成)。

注意数字字面值并不包含正负号；`-1` 这样的负数实际上是由单目运算符 '`-`' 和字面值 `1` 合成的。



### 2.4.5. 整型数字面值

整型数字面值由以下词法定义进行描述:

```
integer      ::=  decinteger | bininteger | octinteger | hexinteger
decinteger   ::=  nonzerodigit (["_"] digit)* | "0"+ (["_"] "0")*
bininteger   ::=  "0" ("b" | "B") (["_"] bindigit)+
octinteger   ::=  "0" ("o" | "O") (["_"] octdigit)+
hexinteger   ::=  "0" ("x" | "X") (["_"] hexdigit)+
nonzerodigit ::=  "1"..."9"
digit        ::=  "0"..."9"
bindigit     ::=  "0" | "1"
octdigit     ::=  "0"..."7"
hexdigit     ::=  digit | "a"..."f" | "A"..."F"
```

整型数字面值的长度没有限制，能一直大到占满可用内存。

在确定数字大小时字面值中的下划线会被忽略。它们可用来将数码分组以提高可读性。一个下划线可放在数码之间，也可放在基数说明符例如 `0x` 之后。

注意非零的十进制数开头不允许有额外的零。这是为了避免与 Python 在版本 3.0 之前所使用的 C 风格八进制字面值相混淆。

一些整型数字面值的示例如下:

```
7     2147483647                        0o177    0b100110111
3     79228162514264337593543950336     0o377    0xdeadbeef
      100_000_000_000                   0b_1110_0101
```

*在 3.6 版更改:* 允许在字面值中使用下划线进行分组。



### 2.4.6. 浮点数字面值

浮点数字面值由以下词法定义进行描述:

```
floatnumber   ::=  pointfloat | exponentfloat
pointfloat    ::=  [digitpart] fraction | digitpart "."
exponentfloat ::=  (digitpart | pointfloat) exponent
digitpart     ::=  digit (["_"] digit)*
fraction      ::=  "." digitpart
exponent      ::=  ("e" | "E") ["+" | "-"] digitpart
```

注意整型数部分和指数部分在解析时总是以 10 为基数。例如，`077e010` 是合法的，且表示的数值与 `77e10` 相同。浮点数字面值允许的范围依赖于具体实现。对于整型数字面值，支持以下划线进行分组。

一些浮点数字面值的示例如下:

```
3.14    10.    .001    1e100    3.14e-10    0e0    3.14_15_93
```

*在 3.6 版更改:* 允许在字面值中使用下划线进行分组。



### 2.4.7. 虚数字面值

虚数字面值由以下词法定义进行描述:

```
imagnumber ::=  (floatnumber | digitpart) ("j" | "J")
```

一个虚数字面值将生成一个实部为 0.0 的复数。复数是以一对浮点数来表示的，它们的取值范围相同。要创建一个实部不为零的复数，就加上一个浮点数，例如 `(3+4j)`。一些虚数字面值的示例如下:

```
3.14j   10.j    10j     .001j   1e100j   3.14e-10j   3.14_15_93j
```



## 2.5. 运算符

以下形符属于运算符:

```
+       -       *       **      /       //      %      @
<<      >>      &       |       ^       ~       :=
<       >       <=      >=      ==      !=
```



## 2.6. 分隔符

以下形符在语法中归类为分隔符:

```
(       )       [       ]       {       }
,       :       .       ;       @       =       ->
+=      -=      *=      /=      //=     %=      @=
&=      |=      ^=      >>=     <<=     **=
```

句点也可出现于浮点数和虚数字面值中。连续三个句点有表示一个省略符的特殊含义。以上列表的后半部分为增强赋值操作符，在词法中作为分隔符，但也起到运算作用。

以下可打印 ASCII 字符作为其他形符的组成部分时具有特殊含义，或是对词法分析器有重要意义:

```
'       "       #       \
```

以下可打印 ASCII 字符不在 Python 词法中使用。如果出现于字符串字面值和注释之外将无条件地引发错误:

```
$       ?       `
```





# 关键字-keyword

## def

声明一个函数对象, 但是并没有执行

## del

垃圾回收

> 垃圾回收是针对 内存中的Python对象的销毁问题, 销毁

python中的垃圾回收采用的算法是引用计数, 计数Python管理的内存对象被引用的次数



删除是递归定义的，与赋值的定义方式非常类似。 此处不再详细说明，只给出一些提示。

目标列表的删除将从左至右递归地删除每一个目标。

名称的删除将从局部`local`或全局`global`命名空间中移除该名称的绑定，具体作用域的确定是看该名称是否有在同一代码块的 [`global`](https://docs.python.org/zh-cn/3/reference/simple_stmts.html?highlight=del#global) 语句中出现。 如果该名称未被绑定，将会引发 [`NameError`](https://docs.python.org/zh-cn/3/library/exceptions.html#NameError)。

属性引用、抽取和切片的删除会被传递给相应的原型对象；删除一个切片基本等价于赋值为一个右侧类型的空切片（但即便这一点也是由切片对象决定的）。

Deletion is recursively defined very similar to the way assignment is defined. Rather that spelling it out in full details, here are some hints.

Deletion of a target list recursively deletes each target, from left to right.

Deletion of a name removes the binding of that name (which must exist) from the local or global namespace, depending on whether the name occurs in a `global` statement in the same code block.

Deletion of attribute references, subscriptions and slicings is passed to the primary object involved; 

deletion of a slicing is in general equivalent to assignment of an empty slice of the right type (but even this is determined by the sliced object).



## await

可等待对象, 在async函数中, 将会等待代码执行完毕, 即挂起协程(当前线程依然可以继续其他任务), 完成后继续执行函数

# 函数-function

## 函数

- 所谓 **函数**, 就是把 **具有独立功能的代码块** 组织为一个小模块 , 在需要的时候 **调用**

- 函数是一个对象. Python程序中的所有数据都是由对象或对象之间的关系来表示的

- 一个提前准备好的功能(别人或自己写的代码), 可以直接使用,而不用规定内部细节

- 函数的使用包含两个步骤:
  1. 定义函数 -- **封装** 独立的功能
  2. 调用函数 --享受 **封装** 的成果
  
- **函数的作用** , 在开发程序时, 使用函数可以 **提高 编写 的效率** 以及代码的 **重用**
  - 函数的作用1: 执行函数中封装的命令(
  - 函数的作用2: 返回一个新的对象, 写可以返回自己
  
- <u>函数的特性</u> 

  - 函数是对象

  - 函数可存储在数据结构中

  - 函数可以传递给其他函数

  - 函数可以嵌套

  - 函数可以捕捉局部状态

    - 封闭作用于(enclosing scope) 词法闭包(lexical closure)

    - 函数不仅可以返回行为, 还可以**预先配置**这些行为 只能通过`()`调用进行预先配置不能通过`.`式调用

      ```python
      def make_adder(n):
          def add(x):
              return x + n
          return add
      plus_3 = make_adder(3)  # 这相当于预先配置了函数的封闭作用域
      
      plus_3(4)
      ```

      

  - 对象也可以作为函数使用 : 为对象添加__call__方法使其具备函数的功能

## 函数作用深入理解

- 处理任务
- 函数是python的头等对象. 可以把函数分给变量, 存储在数据结构中, 作为参数传递给其他函数, 甚至可以作为其他函数的返回值. 装饰器就是利用了函数的这一特性. 
- 抽象和封装的基本方法
- 惰性执行的一串语句
- 返回值  值可以是任何对象
- 返回的值可以进行拆包(元组)
- 函数本身也是一个对象(一块内存地址的引用)

## 函数的的基本使用

### 函数使用基本原则

- 命名合理
- 用另一个标识符来调用同一个函数或类
- 具有单一功能
- 包含文档注释
- **返回一个值**
- 代码不超过50行?
- 幂等性, 尽可能是纯函数?(相同的调用总是相同的值, 不管调用多少次, 总是返回相同的结果, 函数在运行时, 不应该有任何副作用)

### 命名技巧

动词

### 定义函数

语法如下:

```
def 函数名():
    函数封装的代码
    ......
```

1. `def` 是英文 `define` 的缩写
2. **函数名称** 应该能够表达 **函数封装代码** 的功能, 方便后续的调用
3. **函数名称** 的命名应该 **符合** **标识符的命名规则**
   - 可以由 **字母** , **数字** 和 **下划线** 组成
   - 不能以数字开头
   - 不能与关键字重名

### 调用函数

- 调用函数很简单的 , 通过 **函数名()** 即可完成对函数的调用
- 定义好函数之后, 只表示这个函数封装了一段代码而已
- 如果不主动调用函数, 函数是不会主动执行的

> 函数定义应该放在代码顶部,至少应该在函数调用之前
> 因为在 **使用函数名** 调用函数之前，必须要保证 Python 已经知道函数的存在

### 函数的文档注释

- 在开发中 , 如果希望给函数添加注释 , 应该在 **定义函数** 的**上方和下方** , 使用 **连续的三对引号**
- 在 **连续的三对引号** 之间编写对函数的说明文字
- 在 **函数调用** 位置 , 使用快捷键 `Ctrl + Q` 可以查看函数的说明信息

```python
def say_hello():    
    """打印函数打招呼]
    册数
    1233455"""
    print("hello " * 3)
say_hello()


```

> 注意: 因为 **函数体相对比较独立, 函数定义的上方和下方** , **应该和其他代码 (包括注释)** 保留 **两个空行**

## 函数的参数

### 函数参数的使用

- 在函数名的后面的小括号内部填写 **参数** 
- 多个参数之间使用 , 分隔

### 参数的作用

- 函数, 把 **具有独立功能让那个的代码块** 组织为一个小模块 , 在需要的时候 **调用**
- **函数的参数** ,增加函数的 **通用性**, 针对 **相同的数据处理逻辑** , 能够 **适应更多的数据** 
  1. 在函数 **内部** , 把参数当做 **变量** 使用 , 进行需要的数据处理
  2. 函数调用时 , 按照函数定义的 **参数顺序** , 把 **希望在函数内部处理的数据 , 通过参数** 传递 

### 形参和实参

- 形参: **定义** 函数时 , 小括号中的参数 , 是用来接收参数的 , 在函数内部 **作为变量使用**
- 实参: **调用** 函数时 , 小括号中的参数 , 是用来吧数据传递到 **函数内部** 用的

## 函数的返回值

- 在程序开发中 , 有时候 ,会希望 **一个函数执行结束后, 告诉调用者一个结果** , 以便调用者针对具体的结果做后续的处理
- **返回值** 是函数 **完成工作** 后 , **最后** 给调用者的 **一个结果**
- 在函数中使用 `return` 关键字可以返回结果
- 调用函数一方, 可以 **使用变量** 来 **接收** 函数的返回结果

> return 表示返回 ,**后续的代码都不会被执行**
> return 返回的结果是值

## 函数的嵌套使用

- 一个函数里面 **又调用** 了 **另外一个函数** , 这就是 **函数嵌套调用**
- 如果函数 test2 中 , 调用了另外一个函数 test1 
  - 那么执行到 调用函数时,会把函数 test1 中任务都执行完
  - 才会回到 test2 中调用函数 test1 的位置 , 继续执行后续的代码

> 工作中 **需求是多变的** 

## 使用模块中的函数

> **模块是 Python 程序架构的一个核心概念**
> **模块** 可以让**曾经编写过的代码** 方便的被 **复用**

### 模块的用法说明

- 可以 在一个 Python 文件 中 定义 **变量** 或者 **函数**
- 然后在 另外一个文件中 使用 import 导入这个模块
- 导入之后，就可以使用 **模块名.变量** / **模块名.函数** 的方式，使用这个模块中定义的变量或者函数

- 模块 就好比是 **工具包** ,要想使用这个工具包中的工具, 就需要 **导入 import** 这个模块
- 每一个以扩展名 py 结尾的 Python 源代码文件都是一个 **模块**
- 在模块中定义的 **全局变量 、 函数** 都是模块能够提供给外界直接使用的工具

### 模块名也是一个标识符

> 注意: 如果在给 Python 文件起名时, 以数字开头的文件 是无法在 pycharm 中通过导入这个模块的

### pyc文件 :编译(compiled)过的文件

> 为了节省编译时间,第一解释该文件时,会产生.pyc文件,以后的执行过程中会减少该文件的编译环节
> 这个 pyc 文件是由 Python 解释器将 **模块的源码** 转换为 **字节码**
> Python 这样保存 **字节码** 是作为一种启动 **速度的优化**

### 字节码

- Python 在解释源程序时是分成两个步骤的
- 首先处理源代码，编译 生成一个二进制 字节码
- 再对 字节码 进行处理，才会生成 CPU 能够识别的 机器码
- 有了模块的字节码文件之后，下一次运行程序时，如果在 上次保存字节码之后 没有修改过源代码，Python 将会加载 .pyc 文件并跳过编译这个步骤
- 当 Python 重编译时，它会自动检查源文件和字节码文件的时间戳
- 如果你又修改了源代码，下次程序运行时，字节码将自动重新创建

> 提示：
> 有关模块以及模块的其他导入方式，后续课程还会逐渐展开！
> **模块是 Python 程序架构的一个核心概念**

------



## 函数参数和返回值的作用

参数:  外界希望在函数内部处理的数据

返回值:  向外界报告函数的执行结果

### 无参数, 无返回值的应用场景:

1. 只是单纯地做一件事, 例如 **显示菜单**
2. 在函数内部 **针对全局变量进行操作**, 例如: **新建名片**, 最终结果 **记录在全局变量** 中 新建ID

> **注意**:
> 如果全局变量的数据类型是一个 **可变类型** , 在函数内部可以使用 **方法** 修改全局变量的内容
> -- 使用**方法**的方式修改变量时,  **变量的引用不会改变** 
> 在函数内部, **使用赋值语句**  才会修改变量的引用

### 无参数, 有返回值的应用场景

- 采集数据, 例如 **温度计** , 返回结果就是当前的温度, 而不需要传递任何的参数

### 有参数 , 无返回值的应用场景

- 函数内部的代码保持不变, 针对 **不同的参数 处理 不同的数据**
- 例如 **名片管理系统** 针对 **找到的名片** 做 **修改, 删除** 操作

### 有参数, 有返回值的应用场景

- 函数内部的代码保持不变, 针对 **不同的参数** **处理** **不同的数据** , 并且 **返回期望的处理结果**
- 例如 **名片管理系统** 使用 **字典默认值** 和 **提示信息** 提示用户输入内容
  - 如果输入, 返回输入内容
  - 如果没有输入, 返回字典默认值

### 函数的返回值

- 在程序开发中, 有时候, 会希望 **一个函数执行结束后, 告诉调用者一个结果**, 以便调用者针对具体的结果做后续的处理
- **返回值** 是函数 **完成工作** 后, **最后** 给调用者的 **一个结果**
- 在函数中使用 `return` 关键字可以返回结果
- 调用函数一方, 可以 **使用变量** 来 **接收** 函数的返回结果(返回结果可以被变量接收)

> **问题**:
> 一个函数执行后能否返回多个结果?

--使用元组的形式返回...

- 在 Python 中 , 可以 **将一个元组** 使用 **赋值语句** 同时赋值给 **多个变量**
- 注意: 变量的数量需要和元组中的元素数量保持一致

交换两个变量的地址(值)

------



## 函数的参数进阶 

### 不可变和可变的参数

- 无论传递的参数是 **可变** 还是 **不可变**
  - 只要 **针对参数** 使用 赋值语句 , 会在 **函数内部** 修改 **局部变量的引用** , **不会影响到 外部变量的引用**    
  - 外部变量的地址不会被改变, 除非进行全局变量声明等特殊方式
- 如果传递的参数 是 **可变类型** , 在函数内部, 使用 **方法** 修改了数据的内容 , **同样会影响到外部的数据**
- 在 python 中 , 列表变量调用 += 本质上是在执行列表变量的 extend 方法 , 不会修改变量的引用,但是会修改变量的数据

## 缺省参数

- 定义函数时, 可以给 **某个参数** 指定一个 **默认值** , 具有默认值的参数就叫 **缺省参数**
- 调用函数时, 如果没有 传入 **缺省参数** 的值, 则在函数内部使用定义函数时指定的 **参数默认值**
- 函数的缺省参数, **将常见的值设置为参数的缺省值**, 从而简化函数的调用

**指定函数的缺省参数**

- 使用方法: 在参数后使用赋值语句,可以指定参数的缺省值

> **提示**
>
> 1. 缺省参数, 需要使用 **最常见的值** 作为默认值!
> 2. 如果一个参数的值 **不能确定** , 则不应该设置默认值, 具体的数值在调用函数时,由外界传递!

### 缺省参数的注意事项

#### **缺省参数的定义位置**

- **必须保证 带有默认值的缺省参数 在参数列表末尾**
- **调用带有多个缺省参数的函数**时, 如果 **包含有多个缺省参数**, 传递参数需要 **指定参数名**

## 多值参数 

**定义支持多值参数的函数**

- 有时可能需要 **一个函数** 能够处理的参数 **个数** 是不确定的, 这个时候, 就可以使用 **多值参数**
- python 中有 **两种** 多值参数
  - *args  可以接收 元组
  - **kwargs    可以接收 字典

args = arguments 争论/参数  kw  = keyword  kwargs 可以记忆 **键值对参数**

> 提示: **多值参数** 的应用会经常出现在网络上一些大牛开发的看框架中, 知道多值参数 , **有利于我们能够读懂大牛的代码** 

```
def sum_numbers(*args):

    num = 0
    # 遍历 args 元组顺序求和
    for n in args:
        num += n

    return num

print(sum_numbers(1, 2, 3))
```

**元组和字典的拆包**
需求:
如果希望 将一个元组/变量  直接传递给 args  kwargs
**拆包** 简化参数的传递, **拆包** 的方式: 

- 在 **元组/字典变量前**, 增加 **一/两个** *
- 为什么叫拆包:  拆开之后 传进去  
- 拆包的意义 :可以再加额外的

```
print(*args,**kwargs)
print(1,2,3,4,name="wwfyde")
```

```python
def demo(*args, **kwargs):

    print(args)
    print(kwargs)


# 需要将一个元组变量/字典变量传递给函数对应的参数
gl_nums = (1, 2, 3)
gl_xiaoming = {"name": "小明", "age": 18}

# 会把 num_tuple 和 xiaoming 作为元组传递个 args
# demo(gl_nums, gl_xiaoming)
demo(*gl_nums, **gl_xiaoming)
```

## 函数的递归

> 函数调用自身的 **编程技巧** 称为递归

### 递归函数的特点

特点 :

- 一个函数 内部 调用自己
  - 函数内部可以调用其他函数, 当然在函数内部也可以调用自己
- 递归出口 

**代码特点**

1. 函数内部的 **代码** 是相同的, 只是针对 **参数** 不同 , **处理结果不同**
2. 当 **参数满足一个条件** 时 , 函数不再执行
   - **这个非常重要** 通常被称为递归的出口, 否则 **会出现死循环** !

> 递归函数模型理解  递归 前后 还可以处理其他数据
> 执行 等待  执行着5个函数
> 一进一出 用递归
> 递归会比循环更快的解决问题
> 递归对内存的要求比较大  ,多个函数同时运行循环只有一个进程在运行
> 没有办法才去考虑用递归  栈 溢出
> 快速排序



```python
def sum_numbers(num):

    print(num)
    
    # 递归的出口很重要，否则会出现死循环
    if num == 1:
        return

    sum_numbers(num - 1)  # 循环条件  
    
sum_numbers(3)

```

> **提示**:
> 递归是一个 **编程技巧** , 在处理 **不确定的循环时** , 格外的有用 , 例如 : **遍历整个文件的目录结构**
> 递归可以理解为 赋值运算符的高级应用   (至少我现在应用的层面是这样的)    
> n +=n -1

```python
i = 100  
result = 0
while i <= 100:
    result += result-i
    i -= 1
    if i == 1:
        break
```



# 类-class

> [官方文档](https://docs.python.org/zh-cn/3/tutorial/classes.html)
>
> [Class](https://docs.python.org/3/tutorial/classes.html)

## Glossary

| 英文              |   中文   | 描述                                                         |
| ----------------- | :------: | ------------------------------------------------------------ |
| object            |   对象   |                                                              |
| class             |    类    |                                                              |
| instance          |   实例   | class instance                                               |
| instantiation     |  实例化  |                                                              |
| method            |   方法   |                                                              |
| field             |   字段   | class attribute                                              |
| namespace         | 命名空间 |                                                              |
| scope             |  作用域  |                                                              |
| attribute         |   属性   | class.attribute通过`.`访问类的属性                           |
| class attribute   |  类属性  |                                                              |
| instance variable | 实例变量 | 优先查找实例变量再查找类变量(命名空间)                       |
| class method      |  类方法  | 普通方法, 也是实例方法, 二者共享                             |
| classmethod       |  类方法  | 类的方法,未实例化也能调用, 不能依赖实例变量, 可以直接通过类和实例访问, |
| staticmethod      | 静态方法 | 没有任何依赖的方法, 可以被类和实例调用,也可以在类中被调用    |
| instance method   | 实例方法 |                                                              |
| class method      |  类变量  | 类变量包括 类方法和类属性                                    |
|                   |   继承   |                                                              |
|                   |   封装   |                                                              |
|                   |   多态   |                                                              |
| private variables | 私有变量 |                                                              |



## 定义

类把数据与功能绑定在一起。创建新类就是创建新的 对象类型(class, type of object)，从而创建该类型的新 实例(instance, class instance) 。类实例支持维持自身状态的属性，还支持（由类定义的）修改自身状态的方法。

和其他编程语言相比，Python 的类只使用了很少的新语法和语义。Python 的类有点类似于 C++ 和 Modula-3 中类的结合体，而且支持面向对象编程（OOP）的所有标准特性：

- 类的继承机制支持多个基类、

- 派生的类能覆盖基类的方法、

- 类的方法能调用基类中的同名方法。

对象(class)可包含任意数量和类型的数据。和模块一样，类也支持 Python 动态特性：在运行时创建，创建后还可以修改。

如果用 C++ 术语来描述的话，类成员（包括数据成员）通常为 public （例外的情况见下文 私有变量），所有成员函数都是 virtual。与在 Modula-3 中一样，没有用于从对象的方法中引用对象成员的简写形式：方法函数在声明时，有一个显式的参数代表本对象，该参数由调用隐式提供。 与在 Smalltalk 中一样，Python 的类也是对象，这为导入和重命名提供了语义支持。与 C++ 和 Modula-3 不同，Python 的内置类型可以用作基类，供用户扩展。 此外，与 C++ 一样，算术运算符、下标等具有特殊语法的内置运算符都可以为类实例而重新定义。

# **数据模型**

> [官方文档](https://docs.python.org//zh-cn/3/reference/datamodel.html)

## 对象, 值与类型

对象是python中对数据的抽象. Python程序中的所有数据都是由对象或对象间关系来表示的. (从某种意义上讲, 按照冯诺依曼的"存储程序计算机"模型, 代码本身也是由对象来表示的.)



每个对象都有各自的 标识号(identity), 类型(type) 和 值(value) . 一个对象被创建后, 它的 标识号 就不会改变; 你可以将其理解为该对象在内存中的地址. `is`运算符可以比较两个独享的标识号是否相同; `id()`函数能返回一个代表其标识号的整型数.

CPython实现细节: 在CPython中, `id(x)`就是存放对象`x`的内存地址.

对象的类型决定该对象所支持的操作并且定义了该类型的对象可能的取值. `type()`函数能返回一个对象的类型(类型本身也是对象). 与编号一样, 一个对象的类型也是不可改变的.



对象绝不会被显式地销毁; 然而, 当无法访问时它们可能被作为垃圾回收. 允许具体的实现推迟垃圾回收或完全省略此机制 —— 如何实现垃圾回收是实现的质量问题, 只要可访问对象不会被回收即可.



有些对象包含对其他对象的引用; 它们被称为 **容器**(containers) . 容器的例子有元组、列表和字典等。这些引用是容器对象值的组成部分。在多数情况下，当谈论一个容器的值时，我们是指所包含对象的值而不是其编号(identities)；但是，当我们谈论一个容器的可变性时，则仅指其直接包含的对象的编号。因此，如果一个不可变容器 (例如元组) 包含对一个可变对象的引用，则当该可变对象被改变时容器的值也会改变。

## 标准类型层级结构



## 特殊方法名称

> 特殊方法(special method), 推荐叫法
>
> 魔术方法(magic method)

### 基础

### `__new__`

### `__init__`

### `__del__`

### `__repr__`

### `__str__`

### `__bytes__`

### `__format__`

### `__hash__`

### `__bool__`

### 属性访问

### 自定义类

### `__name__`:对象的名称

> **这是对象的名称, 而不是标识符的名称**
>
> `object.__name__`

```python
# 当前脚本的名称 __name__ 是 命名空间的一个变量, 只有在调用是 __name__才是 __main__ 默认情况下都是 脚本的实际名称
if __name__ == '__main__':
    pass
```

### `__next__`:从容器中返回下一项

> `iterator.__next__()`

### 模拟可调用对象

### `__call__`: 

### 模拟容器类型

### 模拟数字类型

### with context manager

### 定制类模式匹配中的位置参数

### 特殊方法查找

## 协程



# **执行模型**

# 导入系统

[导入系统](https://docs.python.org/zh-cn/3/reference/import.html)

[import语句](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#the-import-statement)



# 运算符-Operator

| **运算符**   | **Python 表达式**     | **结果**                     | **描述**       | **支持的数据类型**       |
| ------------ | --------------------- | ---------------------------- | -------------- | ------------------------ |
| +            | [1, 2] + [3, 4]       | [1, 2, 3, 4]                 | 合并           | 字符串、列表、元组       |
| *            | ["Hi!"] * 4           | ['Hi!', 'Hi!', 'Hi!', 'Hi!'] | 重复           | 字符串、列表、元组       |
| in           | 3 in (1, 2, 3)        | True                         | 元素是否存在   | 字符串、列表、元组、字典 |
| not in       | 4 not in (1, 2, 3)    | True                         | 元素是否不存在 | 字符串、列表、元组、字典 |
| > >= == < <= | (1, 2, 3) < (2, 2, 3) | True                         | 元素比较       | 字符串、列表、元组       |

**注意**

- in 在对 **字典** 操作时，判断的是 **字典的键**
- in 和 not in 被称为 **成员运算符**
- **元组 会 产生一个新的元组**
- \+ 和 extend 的区别 一个是产生新的列表 , 另一个是 对原来的列表进行更新
- " a " in "abc " 判断小的字符串 是否包含在大的列表 = True



## 数值运算符

## **目标**

- 算数运算符
- 比较（关系）运算符
- 逻辑运算符
- 赋值运算符
- 运算符的优先级

数学符号表链接：[链接](https://zh.wikipedia.org/wiki/数学符号表)

**运算符的优先级**

- ***\***
- *** / %**
- \+ , -
- |, ^, &, <<, >>

## **算数运算符**

- 是完成基本的算术运算使用的符号，用来处理四则运算

| **运算符** | **描述** | **实例**                                   |
| ---------- | -------- | ------------------------------------------ |
| +          | 加       | 10 + 20 = 30                               |
| -          | 减       | 10 - 20 = -10                              |
| *          | 乘       | 10 * 20 = 200                              |
| /          | 除       | 10 / 20 = 0.5                              |
| //         | 取整除   | 返回除法的整数部分（商） 9 // 2 输出结果 4 |
| %          | 取余数   | 返回除法的余数 9 % 2 = 1                   |
| **         | 幂       | 又称次方、乘方，2 ** 3 = 8                 |

- 在 Python 中 * 运算符还可以用于字符串，计算结果就是字符串重复指定次数的结果

  ```
  In [1]: "-" * 50
  
  Out[1]: '----------------------------------------'
  ```

  

## 比较（关系）运算符

| **运算符** | **描述**                                                     |
| ---------- | ------------------------------------------------------------ |
| ==         | 检查两个操作数的值是否 **相等**，如果是，则条件成立，返回 True |
| !=         | 检查两个操作数的值是否 **不相等**，如果是，则条件成立，返回 True |
| >          | 检查左操作数的值是否 **大于** 右操作数的值，如果是，则条件成立，返回 True |
| <          | 检查左操作数的值是否 **小于** 右操作数的值，如果是，则条件成立，返回 True |
| >=         | 检查左操作数的值是否 **大于或等于** 右操作数的值，如果是，则条件成立，返回 True |
| <=         | 检查左操作数的值是否 **小于或等于** 右操作数的值，如果是，则条件成立，返回 True |

## 逻辑运算符

| **运算符** | **逻辑表达式** | **描述**                                                     |
| ---------- | -------------- | ------------------------------------------------------------ |
| and        | x and y        | 只有 x 和 y 的值都为 True，才会返回 True 否则只要 x 或者 y 有一个值为 False，就返回 False |
| or         | x or y         | 只要 x 或者 y 有一个值为 True，就返回 True 只有 x 和 y 的值都为 False，才会返回 False |
| not        | not x          | 如果 x 为 True，返回 False 如果 x 为 False，返回 True        |

## 赋值运算符

- 在 Python 中，使用 = 可以给变量赋值
- 在算术运算时，为了简化代码的编写，Python 还提供了一系列的 与 **算术运算符** 对应的 **赋值运算符**
- 注意：**赋值运算符中间不能使用空格**

| **运算符** | **描述**                   | **实例**                              |
| ---------- | -------------------------- | ------------------------------------- |
| =          | 简单的赋值运算符           | c = a + b 将 a + b 的运算结果赋值为 c |
| +=         | 加法赋值运算符             | c += a 等效于 c = c + a               |
| -=         | 减法赋值运算符             | c -= a 等效于 c = c - a               |
| *=         | 乘法赋值运算符             | c *= a 等效于 c = c * a               |
| /=         | 除法赋值运算符             | c /= a 等效于 c = c / a               |
| //=        | 取整除赋值运算符           | c //= a 等效于 c = c // a             |
| %=         | 取 **模** (余数)赋值运算符 | c %= a 等效于 c = c % a               |
| **=        | 幂赋值运算符               | c **= a 等效于 c = c\*\* a            |

## 位运算符

移位运算, 二元位运算



### 性质

- 位运算符只适用于整数

### 位运算符

-   取反(NOT) 
    -   运算符 `~`
    -   bitwise not
-   或运算(OR)
    -   运算符: `|`
    -   bitwise or
    -   只要有一个为真则为真
-   与运算(AND)
    -   运算符: `&`
    -   只要有一个为假则为假
-   异或运算(是否不同) exclusive or 互斥或
    -   运算符: `^`
        -   半加运算
    -   对应位如果互斥则为1, 如果相同则为0
    -   exclusive 独有的, 互斥的
    -   互斥, A∩B=∅
    -   bitwise xor
    -   如果相同则为0, 如果不同则为1
    -   如果不同则为真, 相同则为假, 
    -   不同表示互斥, 判断是否互斥
    -   互斥则为真, 不互斥则为假
    -   只要不同则为真
    -   对称差运算符 `^` 返回两个集合中不重叠的元素，即返回属于其中一个集合但不属于两个集合交集的元素

## 规则

值计算, 集合计算, 默认0为正, 1为负

```
# 按位与&
0 & 0 = 0
0 & 1 = 0 
1 & 0 = 0
1 & 1 = 1

# 按位或|
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1

# 按位异或(是否不同) 对应位是否互斥
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0 

# 按位取反(加上符号, 0为正, 1为负)
# x = -(x + 1)
~ 0 = -1
~ 1 = 


```



### 原理

基本运算原理是将整数转换为二进制表示形式, 按最低位对齐, 短的高位补零, 然后进行位运算



## 成员运算符

- in    
- not in

成员运算符用于 **测试** 序列中是否包含指定的 **成员**

| **运算符** | **描述**                                              | **实例**                      |
| ---------- | ----------------------------------------------------- | ----------------------------- |
| in         | 如果在指定的序列中找到值返回 True，否则返回 False     | 3 in (1, 2, 3) 返回 True      |
| not in     | 如果在指定的序列中没有找到值返回 True，否则返回 False | 3 not in (1, 2, 3) 返回 False |

注意：在对 **字典** 操作时，判断的是 **字典的键**

通过 in 判断 ,减少 循环的

## [运算符的优先级](https://docs.python.org/zh-cn/3/reference/expressions.html#operator-precedence)

> operator precedence 

> [!Note]
>
> [运算符优先级](https://docs.python.org/3/reference/expressions.html#operator-precedence)
>
> 

| Operator                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `(expressions...)`,`[expressions...]`, `{key: value...}`,`{expressions...}` | Binding or parenthesized expression, list display, dictionary display, set display |
| `x[index]`, `x[index:index]`,`x(arguments...)`, `x.attribute` | Subscription, slicing, call, attribute reference             |
| [`await x`](https://docs.python.org/3/reference/expressions.html#await) | Await expression                                             |
| `**`                                                         | Exponentiation [[5\]](https://docs.python.org/3/reference/expressions.html#id21) |
| `+x`, `-x`, `~x`                                             | Positive, negative, bitwise NOT                              |
| `*`, `@`, `/`, `//`, `%`                                     | Multiplication, matrix multiplication, division, floor division, remainder [[6\]](https://docs.python.org/3/reference/expressions.html#id22) |
| `+`, `-`                                                     | Addition and subtraction                                     |
| `<<`, `>>`                                                   | Shifts                                                       |
| `&`                                                          | Bitwise AND                                                  |
| `^`                                                          | Bitwise XOR                                                  |
| `|`                                                          | Bitwise OR                                                   |
| [`in`](https://docs.python.org/3/reference/expressions.html#in), [`not in`](https://docs.python.org/3/reference/expressions.html#not-in), [`is`](https://docs.python.org/3/reference/expressions.html#is), [`is not`](https://docs.python.org/3/reference/expressions.html#is-not), `<`, `<=`, `>`, `>=`, `!=`, `==` | Comparisons, including membership tests and identity tests   |
| [`not x`](https://docs.python.org/3/reference/expressions.html#not) | Boolean NOT                                                  |
| [`and`](https://docs.python.org/3/reference/expressions.html#and) | Boolean AND                                                  |
| [`or`](https://docs.python.org/3/reference/expressions.html#or) | Boolean OR                                                   |
| [`if`](https://docs.python.org/3/reference/expressions.html#if-expr) – `else` | Conditional expression                                       |
| [`lambda`](https://docs.python.org/3/reference/expressions.html#lambda) | Lambda expression                                            |
| `:=`                                                         | Assignment expression                                        |

下表对 Python 中运算符的优先顺序进行了总结，从最低优先级（最后绑定）到最高优先级（最先绑定）。 相同单元格内的运算符具有相同优先级。 除非句法显式地给出，否则运算符均指二元运算。 相同单元格内的运算符均从左至右分组（除了幂运算是从右至左分组）。

请注意比较、成员检测和标识号检测均为相同优先级，并具有如 [比较运算](https://docs.python.org/zh-cn/3/reference/expressions.html#comparisons) 一节所描述的从左至右串连特性。

*从低到高*

| 运算符                                                       | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `:=`                                                         | 赋值表达式                                                   |
| [`lambda`](https://docs.python.org/zh-cn/3/reference/expressions.html#lambda) | lambda 表达式                                                |
| [`if`](https://docs.python.org/zh-cn/3/reference/expressions.html#if-expr) -- `else` | 条件表达式                                                   |
| [`or`](https://docs.python.org/zh-cn/3/reference/expressions.html#or) | 布尔逻辑或 OR                                                |
| [`and`](https://docs.python.org/zh-cn/3/reference/expressions.html#and) | 布尔逻辑与 AND                                               |
| [`not`](https://docs.python.org/zh-cn/3/reference/expressions.html#not) `x` | 布尔逻辑非 NOT                                               |
| [`in`](https://docs.python.org/zh-cn/3/reference/expressions.html#in), [`not in`](https://docs.python.org/zh-cn/3/reference/expressions.html#not-in), [`is`](https://docs.python.org/zh-cn/3/reference/expressions.html#is), [`is not`](https://docs.python.org/zh-cn/3/reference/expressions.html#is-not), `<`, `<=`, `>`, `>=`, `!=`, `==` | 比较运算，包括成员检测和标识号检测                           |
| `|`                                                          | 按位或 OR                                                    |
| `^`                                                          | 按位异或 XOR                                                 |
| `&`                                                          | 按位与 AND                                                   |
| `<<`, `>>`                                                   | 移位                                                         |
| `+`, `-`                                                     | 加和减                                                       |
| `*`, `@`, `/`, `//`, `%`                                     | 乘，矩阵乘，除，整除，取余 [5](https://docs.python.org/zh-cn/3/reference/expressions.html#id21) |
| `+x`, `-x`, `~x`                                             | 正，负，按位非 NOT                                           |
| `**`                                                         | 乘方 [6](https://docs.python.org/zh-cn/3/reference/expressions.html#id22) |
| [`await`](https://docs.python.org/zh-cn/3/reference/expressions.html#await) `x` | await 表达式                                                 |
| `x[index]`, `x[index:index]`, `x(arguments...)`, `x.attribute` | 抽取，切片，调用，属性引用                                   |
| `(expressions...)`,`[expressions...]`, `{key: value...}`, `{expressions...}` | 绑定或加圆括号的表达式，列表显示，字典显示，集合显示         |

虽然 `abs(x%y) < abs(y)` 在数学中必为真，但对于浮点数而言，由于舍入的存在，其在数值上未必为真。 例如，假设在某个平台上的 Python 浮点数为一个 IEEE 754 双精度数值，为了使 `-1e-100 % 1e100` 具有与 `1e100` 相同的正负性，计算结果将是 `-1e-100 + 1e100`，这在数值上正好等于 `1e100`。 函数 [`math.fmod()`](https://docs.python.org/zh-cn/3/library/math.html#math.fmod) 返回的结果则会具有与第一个参数相同的正负性，因此在这种情况下将返回 `-1e-100`。 何种方式更适宜取决于具体的应用。

[2](https://docs.python.org/zh-cn/3/reference/expressions.html#id10)

如果 x 恰好非常接近于 y 的整数倍，则由于舍入的存在 `x//y` 可能会比 `(x-x%y)//y` 大。 在这种情况下，Python 会返回后一个结果，以便保持令 `divmod(x,y)[0] * y + x % y` 尽量接近 `x`.

[3](https://docs.python.org/zh-cn/3/reference/expressions.html#id12)

Unicode 标准明确区分 *码位* (例如 U+0041) 和 *抽象字符* (例如 "大写拉丁字母 A")。 虽然 Unicode 中的大多数抽象字符都只用一个码位来代表，但也存在一些抽象字符可使用由多个码位组成的序列来表示。 例如，抽象字符 "带有下加符的大写拉丁字母 C" 可以用 U+00C7 码位上的单个 *预设字符* 来表示，也可以用一个 U+0043 码位上的 *基础字符* (大写拉丁字母 C) 加上一个 U+0327 码位上的 *组合字符* (组合下加符) 组成的序列来表示。

对于字符串，比较运算符会按 Unicode 码位级别进行比较。 这可能会违反人类的直觉。 例如，`"\u00C7" == "\u0043\u0327"` 为 `False`，虽然两个字符串都代表同一个抽象字符 "带有下加符的大写拉丁字母 C"。

要按抽象字符级别（即对人类来说更直观的方式）对字符串进行比较，应使用 [`unicodedata.normalize()`](https://docs.python.org/zh-cn/3/library/unicodedata.html#unicodedata.normalize)。

[4](https://docs.python.org/zh-cn/3/reference/expressions.html#id13)由于存在自动垃圾收集、空闲列表以及描述器的动态特性，你可能会注意到在特定情况下使用 [`is`](https://docs.python.org/zh-cn/3/reference/expressions.html#is) 运算符会出现看似不正常的行为，例如涉及到实例方法或常量之间的比较时就是如此。 更多信息请查看有关它们的文档。

[5](https://docs.python.org/zh-cn/3/reference/expressions.html#id15)`%` 运算符也被用于字符串格式化；在此场合下会使用同样的优先级。

[6](https://docs.python.org/zh-cn/3/reference/expressions.html#id16)幂运算符 `**` 绑定的紧密程度低于在其右侧的算术或按位一元运算符，也就是说 `2**-1` 为 `0.5`。









# 表达式-expression

>  **表达式（expression）**是值、变量和运算符的组合 .  表达式则一定会传回评估后的**结果**
>
>  `is`  `in` `is not` `not in` 都是运算符  和 `==` 
>
>  `=` 是分隔符 赋值操作符  赋值语句(`a = 1`) 与赋值表达式 (`a := 1`) [查看官方文档](https://www.python.org/dev/peps/pep-0572/#differences-between-assignment-expressions-and-assignment-statements)
>
>  **语句（statement）**是一个会产生影响的代码单元，例如新建一个变量或显示某个值。  一个语句是指令式编程语言中最小的独立元素，表达程序要运行的一些动作。 

 在措辞中经常出现这样的区别：一个语句是被“运行”(execute)，而一个表达式是被“评估”或对其“求值”(evaluate)。一些语言中具备了exec和eval函数：比如在Python中，`exec`应用于语句，而`eval`应用于表达式。 

## 原子(atom)

### 标识符(identifiers) = 名称(names)

### 字面值(literals)

## 原型(primary)

### 切片(slicings)

切片就是在序列对象（字符串、元组或列表）中选择某个范围内的项。 切片可被用作表达式以及赋值或 [`del`](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#del) 语句的目标。 切片的句法如下:

```
slicing      ::=  primary "[" slice_list "]"
slice_list   ::=  slice_item ("," slice_item)* [","]
slice_item   ::=  expression | proper_slice
proper_slice ::=  [lower_bound] ":" [upper_bound] [ ":" [stride] ]
lower_bound  ::=  expression
upper_bound  ::=  expression
stride       ::=  expression
```

此处的正式句法中存在一点歧义：任何形似表达式列表的东西同样也会形似切片列表，因此任何抽取操作也可以被解析为切片。 为了不使句法更加复杂，于是通过定义将此情况解析为抽取优先于解析为切片来消除这种歧义（切片列表未包含正确的切片就属于此情况）。

切片的语义如下所述。 元型通过一个根据下面的切片列表来构造的键进行索引（与普通抽取一样使用 [`__getitem__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__getitem__) 方法）。 如果切片列表包含至少一个逗号，则键将是一个包含切片项转换的元组；否则的话，键将是单个切片项的转换。 切片项如为一个表达式，则其转换就是该表达式。 一个正确切片的转换就是一个切片对象（参见 [标准类型层级结构](https://docs.python.org/zh-cn/3/reference/datamodel.html#types) 一节），该对象的 `start`, `stop` 和 `step` 属性将分别为表达式所给出的下界、上界和步长值，省略的表达式将用 `None` 来替换。

[0:len(a):1]

[start : end : step]

[:]  = [start_index: stop_index]

[:5] = 

| **描述** | **Python 表达式**  | **结果** | **支持的数据类型** |
| -------- | ------------------ | -------- | ------------------ |
| 切片     | "0123456789"[::-2] | "97531"  | 字符串、列表、元组 |

- **切片** 使用 **索引值** 来限定范围，从一个大的 **字符串** 中 **切出** 小的 **字符串**
- **列表** 和 **元组** 都是 **有序** 的集合，都能够 **通过索引值** 获取到对应的数据
- **字典** 是一个 **无序** 的集合，是使用 **键值对** 保存数据

\#不能针对字典进行切片  没有索引的概念  所以无法进行切片

<u>切片会返回一个新的对象</u>

```python
#模式[start:end:step] [0:len(o):1)
"""
    其中，第一个数字start表示切片开始位置，默认为0；
    第二个数字end表示切片截止（但不包含）位置（默认为列表长度）；
    第三个数字step表示切片的步长（默认为1）。
    当start为0时可以省略，当end为列表长度时可以省略，
    当step为1时可以省略，并且省略步长时可以同时省略最后一个冒号。
    另外，当step为负整数时，表示反向切片，这时start应该比end的值要大才行。
"""
aList = [3, 4, 5, 6, 7, 9, 11, 13, 15, 17]
print (aList[::])  # 返回包含原列表中所有元素的新列表
print (aList[::-1])  # 返回包含原列表中所有元素的逆序列表
print (aList[::2])  # 隔一个取一个，获取偶数位置的元素
print (aList[1::2])  # 隔一个取一个，获取奇数位置的元素
print (aList[3:6])  # 指定切片的开始和结束位置
aList[0:100]  # 切片结束位置大于列表长度时，从列表尾部截断
aList[100:]  # 切片开始位置大于列表长度时，返回空列表

aList[len(aList):] = [9]  # 在列表尾部增加元素
aList[:0] = [1, 2]  # 在列表头部插入元素
aList[3:3] = [4]  # 在列表中间位置插入元素
aList[:3] = [1, 2]  # 替换列表元素，等号两边的列表长度相等
aList[3:] = [4, 5, 6]  # 等号两边的列表长度也可以不相等
aList[::2] = [0] * 3  # 隔一个修改一个
print (aList)
aList[::2] = ['a', 'b', 'c']  # 隔一个修改一个
aList[::2] = [1,2]  # 左侧切片不连续，等号两边列表长度必须相等
aList[:3] = []  # 删除列表中前3个元素

del aList[:3]  # 切片元素连续
del aList[::2]  # 切片元素不连续，隔一个删一个
```



## lambda表达式

> 关键字 声明, 语句
>
> 理解为该语句返回一个函数对象, 调用该函数时返回函数中表达式的表达式的值, 相当于是简单函数的一个变体写法.

### 语法格式

lambda 参数 :  表达式

```
lambda_expr        ::=  "lambda" [parameter_list] ":" expression
lambda_expr_nocond ::=  "lambda" [parameter_list] ":" expression_nocond
lambda param_list : expression

def <lambda>(parameter):
	return expression
```



### 用法示例

```python
# 函数式编程, 构造函数
add = lambda x, y : x + y + 10
add(3, 5)

# 用于闭包
def func1(a, b):
    return lambda x : a * x + b

func1(1, 2)(3)

```

## yield表达式

> [官方文档](https://docs.python.org/zh-cn/3/reference/expressions.html#yieldexpr)
>
> 在语句内部执行, 必然有返回值, 返回一个生成器对象

```
yield_atom       ::=  "(" yield_expression ")"
yield_expression ::=  "yield" [expression_list | "from" expression]
```



当一个生成器函数被调用的时候，它返回一个迭代器，称为生成器。然后这个生成器来控制生成器函数的执行。当这个生成器的某一个方法被调用的时候，生成器函数开始执行。这时会一直执行到第一个 yield 表达式，在此执行再次被挂起，给生成器的调用者返回 [`expression_list`](https://docs.python.org/zh-cn/3/reference/expressions.html#grammar-token-expression-list) 的值。挂起后，我们说所有局部状态都被保留下来，包括局部变量的当前绑定，指令指针，内部求值栈和任何异常处理的状态。通过调用生成器的某一个方法，生成器函数继续执行。此时函数的运行就和 yield 表达式只是一个外部函数调用的情况完全一致。恢复后 yield 表达式的值取决于调用的哪个方法来恢复执行。 如果用的是 [`__next__()`](https://docs.python.org/zh-cn/3/reference/expressions.html#generator.__next__) (通常通过语言内置的 [`for`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#for) 或是 [`next()`](https://docs.python.org/zh-cn/3/library/functions.html#next) 来调用) 那么结果就是 [`None`](https://docs.python.org/zh-cn/3/library/constants.html#None). 否则，如果用 [`send()`](https://docs.python.org/zh-cn/3/reference/expressions.html#generator.send), 那么结果就是传递给send方法的值。

所有这些使生成器函数与协程非常相似；它们 yield 多次，它们具有多个入口点，并且它们的执行可以被挂起。唯一的区别是生成器函数不能控制在它在 yield 后交给哪里继续执行；控制权总是转移到生成器的调用者。

在 [`try`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#try) 结构中的任何位置都允许yield表达式。如果生成器在(因为引用计数到零或是因为被垃圾回收)销毁之前没有恢复执行，将调用生成器-迭代器的 [`close()`](https://docs.python.org/zh-cn/3/reference/expressions.html#generator.close) 方法. close 方法允许任何挂起的 [`finally`](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#finally) 子句执行。

当使用 `yield from ` 时，它会将所提供的表达式视为一个子迭代器。 这个子迭代器产生的所有值都直接被传递给当前生成器方法的调用者。 通过 [`send()`](https://docs.python.org/zh-cn/3/reference/expressions.html#generator.send) 传入的任何值以及通过 [`throw()`](https://docs.python.org/zh-cn/3/reference/expressions.html#generator.throw) 传入的任何异常如果有适当的方法则会被传给下层迭代器。 如果不是这种情况，那么 [`send()`](https://docs.python.org/zh-cn/3/reference/expressions.html#generator.send) 将引发 [`AttributeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#AttributeError) 或 [`TypeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#TypeError)，而 [`throw()`](https://docs.python.org/zh-cn/3/reference/expressions.html#generator.throw) 将立即引发所传入的异常。

当下层迭代器完成时，被引发的 [`StopIteration`](https://docs.python.org/zh-cn/3/library/exceptions.html#StopIteration) 实例的 `value` 属性会成为 yield 表达式的值。 它可以在引发 [`StopIteration`](https://docs.python.org/zh-cn/3/library/exceptions.html#StopIteration) 时被显式地设置，也可以在子迭代器是一个生成器时自动地设置（通过从子生成器返回一个值）。

# 语句(statement)

 简单语句由一个单独的逻辑行构成。 多条简单语句可以存在于同一行内并**以分号分隔**。 

if :后面的共同组成语句

分为简单语句和复合语句



## 作用

用于计算和创建对象和



## Python控制语句

> 学习目标:顺序语句 条件语句 循环语句

## if 条件语句

> 根据条件确定执行什么任务,不执行什么任务

### 判断的定义

- 如果 **条件满足** ,才能做某件事情
- 如果 **条件不满足** ,就做另外一件事情,或者什么也不做

> 正因为有了判断,才使得程序世界丰富多彩, 充满变化!
> **判断语句** 又被称为 "分支语句" , 正是因为有了判断, 才让程序有了很多的分支

### if语句体验

#### if语句的基本语法

在 Python 中, **if语句** 就是用来进行判断的,格式如下:

```
if 要判断的条件 :
    条件成立时, 要做的事情
    if 条件2 :
        条件2成立时,执行任务
    elif 条件2_1 :
        条件2_1成立时,执行任务
    elif 条件2_2 :
        条件2_2成立时,执行任务
    else :
        执行任务
else :
    条件不成立时,执行另外一件事情
```

> 注意: 代码的缩进为一个tab键,或者4个空格 --**python官方建议使用空格**
>
> - 在 Python开发中,tab和空格不要混用!!
> - 意思是tab 和空格不要连着用  并且  一个程序项目要么通篇用tab 要么通篇用"**4个空格**"

> if 和 else 语句以及各自的缩进部分共同是一个 **完整的代码块**

## for 语句



- 在 Python 中完整的 for 循环 的语法如下：

for 变量 in 集合:

循环体代码

else:

没有通过 break 退出循环，循环结束后，会执行的代码

#### 应用场景

- 在 **迭代遍历** 嵌套的数据类型时，例如 **一个列表包含了多个字典**
- break else 下方的代码就不会执行 一旦遍历完成 就会执行else语句
- 如果
- 需求：要判断 某一个字典中 是否存在 指定的 值
- - 如果 **存在**，提示并且退出循环
  - 如果 **不存在**，在 **循环整体结束** 后，希望 **得到一个统一的提示**

```python
students = [
    {"name": "阿土", "age": 20, "gender": True, "height": 1.7, "weight": 75.0},
    {"name": "小美", "age": 19, "gender": False, "height": 1.6, "weight": 45.0}]
find_name = "阿土"
for stu_dict in students:
    print(stu_dict)
    # 判断当前遍历的字典中姓名是否为find_name
    
    if stu_dict["name"] == find_name:
        print("找到了")
        # 如果已经找到，直接退出循环，就不需要再对后续的数据进行比较
        break
    else:
        print("没有找到")
        print("循环结束")
```



## 逻辑运算

- 在程序开发中，通常 在判断条件时，会需要同时判断多个条件
- 只有多个条件都满足，才能够执行后续代码，这个时候需要使用到 逻辑运算符
- **逻辑运算符** 可以把 多个条件 按照 逻辑 进行 连接，变成 更复杂的条件
- Python 中的逻辑运算符 包括：与 and／或 or／非 not 三种

##### and

- 与/并且
- 两个条件同时满足,返回 True
- 只要有一个不满足, 就返回 False

##### or

- 或/或者
- 两个条件只要有一个满足,返回 True
- 两个条件都不满足,返回 False

##### not

- 非/不是
- 条件成立的反面是不成立
- 条件不成立的反面是成立

> **注意:**
> 逻辑判断的用法 

```
if A :
    print("真")
else :
    print("假")
    *** 
    if not A :
    print("真")
else :
    print("假")
```

### if语句进阶

#### elif

> 应用场景

- 开发中,使用if 可以 **判断条件**
- 使用else, 可以处理 **条件不成立**的情况
- 但是, 如果希望 **再增加一些条件,条件不同,需要执行的代码也不同时** 时,就可以使用 elif
- 语法格式如下:

```
if case1 :
    case1's code
elif case2 :
    case2's code
elif case3 :
    case3's code
else :
    last code
```

##### 注意

1. elif 和 else 都必须和 if 联合使用, 而不能单独使用
2. 可以将 if / elif / else 以及各自缩进的代码, 看成一个完整 **完整的代码块 ,**

### if的嵌套

> **elif** 的应用场景是: 同时 **判断** 多个条件 , 所有条件是 **评级** 的

- 在开发中,使用 if 进行条件判断,如果希望 **在条件成立的执行语句中** 再 **增加条件判断** ,久可以使用 **if的嵌套**
- **if的嵌套** 的应用场景是: **在之前条件满足的前提下, 再增加额外的判断**
- **if的嵌套**的语法格式, **除了缩进之外** 和之前没有区别
- 语法格式如下:

```
if case1:
    case1's code
    if case1.case1:
        case1.case1's code
    else case1.case2:
        case1.case2's code
 elif case2:
```

> 应该避免分支 冗余 减少过多判断条件

### 随机数的处理

```
import random
```

- 导入模块后, 可以直接在 **模块名称** 后面敲一个`.` 然后敲击`Tab`
- random.randint(1,3), 返回[1,3] 之间的整数,包含 a 和 b

## 异或

计算机符号 : `xor `

运算符 : `^`

数学符号 : `⊕`

集合运算  中的异或 : 并集 - 交集  = 不同值的集合 (或集中不同的值)

数值运算  根据二进制, 不同值取 1  对每个为=位置进行 异或运算 (是否不同)

逻辑运算 相同为0, 不同为1  

### 异或运算的性质

满足交换率

------

## 运算符

> 算术运算符
> 比较(关系)运算符
> 逻辑运算符
> 赋值运算符
> 运算符的优先级

### 比较(关系)运算符

- ==  (不同于"=" 等号是用于赋值的)

- !=

- \> 

- <

- \> =

- <=

### 代码块的概念

> 如何理解代码块
> `if `和 `else` 语句以及各自的缩进部分共同是一个 完整的代码块

### 逻辑运算符

- and
  - **与/并且**
  - ∩
- or
  - **或/或者**
  - ∪
- not
  - **非/不是**
  - 取反

### 赋值运算符

- c = a + b
- c += a    -- c = c + a
- c -= a

> 赋值运算符的优先级是最的
> ^(异或)不同于  比较运算?

## 程序的三大流程

- 顺序
- 分支
- 循环
  - 条件(判断 计数器 是否达到 目标次数)

## 循环

### 循环基本使用

> (for不是循环,是遍历--递归是循环的一种特殊形式)

- 循环的作用就是让 **指定的代码** 重复的执行
- while 循环最常用的应用场景就是 **让执行的代码** 按照
  - 循环的 基本语法
    - 变量初始化
    - 循环条件
    - 条件执行
    - 计数器
  - 难点 循环的嵌套

```
初始条件
while 循环条件(判断 计数器 是否达到目标次数):
    条件满足时,执行任务 case1
    条件满足时,执行任务 case2
    
    处理条件(计数器+1)

```

## Python中的计数方法

常见的计数方法有两种,可以分别称为:

- 自然界计数法(从 `1` 开始) --更符合人类的习惯
- 程序计数法(从 `0` 开始) --几乎所有的程序语言都选择从0开始计数

> 推荐
>
> 因此，大家在编写程序时，应该尽量养成习惯：除非需求的特殊要求，否则 循环 的计数都从 0 开始

## 循环计算

> 程序开发中,通常会遇到 **利用循环 重复计算** 的需求

## break

- 在循环过程中,如果 某一个条件满足后,不再希望循环继续执行,可以使用break退出循环
- break 只针对当前所在循环有效
- break:跳出循环,终止循环
- 程序执行原理:逐行执行**顺序** **分支** **循环**

## continue

- 停下正在干的事情, 继续执行循环
- 跳过continue后面的语句, 直接进入下一个循环



## 循环嵌套

> 重点, 难点
> col  row  的关系可以有多重
> 嵌套循环理解:矩阵思维   (列行置换--不要光想着行就是行, )
> 千万不要忘了 **计数器** !!!,否则会出现死循环
> 三循环嵌套?? 矩阵的举证 拆解

print()函数的扩展:

- print()函数在输出内容之后,会自动在内容末尾增加换行,,面对不需要换行的需求场景时 使用格式 `print("" , end = "\n")`

- end 的作用
  - 处理输出完成内容之后的格式场景
  - `print("测试内容: %d" % name, end = "\t\t")`

print("") 等同于 print("" , end = "\n")  --这相当于是输出换行的作用

## yield语句

```
yield_stmt ::=  yield_expression
```

[`yield`](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#yield) 语句在语义上等同于 [yield 表达式](https://docs.python.org/zh-cn/3/reference/expressions.html#yieldexpr)。 yield 语句可用来省略在使用等效的 yield 表达式语句时所必须的圆括号。 例如，以下 yield 语句

```
# 这是yield语句
yield <expr>
yield from <expr>

# 这是yield表达式语句
(yield <expr>)
(yield from <expr>)
```

yield 表达式和语句仅在定义 [generator](https://docs.python.org/zh-cn/3/glossary.html#term-generator) 函数时使用，并且仅被用于生成器函数的函数体内部。 在函数定义中使用 yield 就足以使得该定义创建的是生成器函数而非普通函数。

# 异常(exception)

## 异常的概念

- 程序在运行时, 如果 `Python 解释器` 遇到一个错误, **会停止程序的执行,并且提示一些错误信息**, 这就是 **报错**
- **程序停止执行并且提示错误信息** 这个动作, 我们通常称之为: **抛出(raise)异常**   //经常沟通时为 **报错**

> 程序开发时, 很难将 **所有的特殊情况** 都处理到面面俱到, 通过 **异常捕获** 可以针对突发事件做集中处理, 从而保证程序的 **稳定性和健壮性**
> 程序开发中,我们需要,**针对业务需求,编写不同的代码**,在用户使用该程序时,应该给出合理的执行**提示信息**, 当接收到异常后做 **针对性的处理**

程序开发中,面对异常时,不能让程序退出运行,就应该 在接收到异常后做一些针对性处理(格式化输入)

## 捕获异常

### 简单的捕获异常语法

- 在程序开发中, 如果 **对某些代码的执行不能确定是否正确**, 可以增加 `try(尝试)` 来捕获异常
- 捕获异常最简单的语法格式:

```
try:
    尝试执行的代码
except:
    出现错误的处理
    
```

- `try` :**尝试**, 下方编写要尝试代码, 不确定是否能够正常执行的代码
- `except` **如果不是**, 下方编写尝试失败后执行的代码

> **无论是否正确执行,都会执行后续的代码**
>
> **程序不会因为报错而退出**

### 错误类型捕获

- 在程序执行时, 可能会遇到 **不同类型的异常**, 并且需要 **针对不同类型的异常, 做出不同的响应**, 这个时候, 就需要捕获错误类型了
- 示例代码

```
try:
    # 尝试执行的代码
    pass
except 错误类型1 as result:
    # 针对错误类型1, 对应的代码处理
    print(result)
    pass
except (错误类型2, 错误类型3):
    # 针对错误类型1, 对应的代码处理
    pass
except Exception as result:  # 捕获系统提示错误
    print(result)

    
```



#### 捕获未知的错误

- 在开发中, **要预先判断所有可能出现的错误**, 还是又一定的难度的
- 如果 希望程序 **无理论出现任何错误**, 都不会因为 `python` 解释器 **抛出异常而终止**,可以再增加一个`except`
- 语法 如下

```
except Exception as result:
	print('未知错误: %s' % result)
```



```
try:
    num = int(input("请输入一个整数"))
    result = 8 / num
    print("result is %.2f" % result)
except ValueError:
    # 传入数据类型错误
    print("传入的数据类型有误!")
except ZeroDivisionError:
    # 除数为0错误
    print("除0错误!")
except Exception as result:  # 其他未知错误类型,捕获系统报错信息并打印出来
    # 未知错误类型
    print("其他错误类型 %s" % result)
else:
    # 未发现异常
    print("未有异常,才会执行的代码")
finally:
    # 无论是否有异常都会执行的代码
    print("程序执行完毕")
```

## 异常捕获的完整语法

在实际开发中, 为了能够处理复杂的异常的情况,完整的异常语法如下:

> **提示**:
>
> - 有关完整语法的应用场景,在后续学习中, **结合实际的案例会**更好理解

```python
def demo1():
    return int(input("请输入一个整数"))


def demo2():
    demo1()

try:
    print(demo2())
except ValueError:
    print("ValueError")
except Exception as result:
    print("错误类型 %s " % result)
else:
    print("未发现异常")
finally:
    print("程序执行完毕")
print("-" * 50)
```

**将异常处理置于主程序中,因为 异常具有传递性  解释器会寻获到异常的原因**

## 异常的传递

- **异常的传递** -- 当 **函数/方法** 执行 **出现异常** , 会 **将异常传递** 给 函数/方法 的 **调用一方**
- 如果 **传递到主程序**, 仍然 **没有异常处理**, 程序才会被终止

> **提示:**
> 在开发中, 可以在主函数中增加 **异常捕获**
> 而在主函数中调用的其他函数,只要出现异常, 都会传递 到主函数的 **异常捕获** 中
> 这样就不需要在代码中, 增加大量的 **异常捕获**, 能够保证代码的整洁



## 主动抛出异常

抛出raise

异常exception

**主动抛出异常,程序会被终止** 

这也叫做用户自定义异常

#### 应用场景

- 在开发中,除了 **代码执行出错** `Python` 解释器会 **抛出** 异常之外
- 还可以根据 **应用程序** **特有的业务需求 主动抛出异常**

#### 注意

- 当前函数 **只负责** 提示用户输入密码, 如果 **密码长度不正确**, **需要其他的函数进行额外处理**
- 因此可以 **抛出异常**, 由其他需要处理的函数 **捕获异常**

### 抛出异常

- `python`  中提供了一个 `Exception`  **异常类**
- 在开发时, 如果满足 **特定业务需求时**, 希望 **抛出异常**, 可以:

1. 创建 一个 `Exception` 的对象
2. 使用 `raise` **关键字** 抛出 **异常对象**
3. 触发异常后,后面的代码就不会执行

语法如下  :创建对象是 将错误描述信息作为参数传递

```python
def input_password():
    password = input("请输入密码")    
    if len(password) >= 8:        
        return password    
    ex = Exception("密码长度不够")    
    raise ex
    # raise Exception('密码长度不够')
try:    
    input_password()
except Exception as result:    
    print(result)


```





# **标准库**

> [The Python Standard Library](https://docs.python.org/3/library/index.html)

## 内置常量

### Ellipsis(...)

```python
Ellipsis=...
```

与省略号字面值 "..." 相同。 该特殊值主要是与用户定义的容器数据类型的扩展切片语法结合使用。 Ellipsis 是 types.EllipsisType 类型的唯一实例。

用法一: 占位符

用法二: 必须参数(用在类型提示中)



# 数据类型

## 变量 - Variable

java/C++中变量是个容器, 有数据类型, 有大小. 预先声明了的一个数据对象

python的变量实质上是一个**指针**, 指针对象本身的大小是固定的, 但是变量指向的值 str, int 是不固定, 就是一个引用, 一个内存地址, 变量指向一块内存地址

`a = 1` 的python解释, 在内存中声明一个对象1, 然后将对象1的内存地址赋值给a

a可以指向任何对象, 变量本身没有固定的类型(指针), 当说到类型时,其实是变量指向的对象的数据类型

### 变量定义:

- 在 Python 中，每个变量 在使用前都必须赋值，变量 赋值以后 该变量 才会被创建
- 变量名 = 值
- 变量可以被多次引用,值可以被覆盖, 本质是C的一个指针对象

### 变量类型: 

- Python 中 **数据类型** 分为 **数字型** 和**非数字型**
- **数字型**
  - 整型(int) integer
  - 浮点型(float)
  - 布尔型(bool)
    - 字符串
      - 真 True 非空字符串 **空格也是真**  --非空即真
      - 假 False 空字符串 **非空格**
    - 数字
      - 真 True 非0数  --非零即真
      - 假 False 0
  - 复数型(complex)
    - 实部加虚部
    - 向量
- 非数字型
  - 字符串
  - 列表
  - 元组
  - 字典
- **python中不需要为变量指定数据类型**
- **Python 可以根据 = 等号右边的值,python解释器自动推导出变量中存储数据的类型**
- 在内存中创建一个变量，会包括：
  - 变量的名称
  - 变量保存的数据  (**变量的本质是引用  存储着数据的地址 不包含数据**)
  - 变量存储数据的类型
  - 变量的地址（标示id）

### 变量的命名:

- 标识符(名称): 标示符就是程序员定义的变量名、函数名
  - 标识符由数字、字母和下划线组成
  - 不能以数字开头
  - 标识符不能与关键字重名
- 关键字（keyword）
  - python内部已经使用的标识符
  - 关键字具有特殊的功能和含义（as  in  for  if which import ）
- **Python中的变量命名规则**
  - 命名规则 可以被视为一种 惯例，并无绝对与强制 目的是为了 增加代码的识别和可读性
  - python中,标识符是区分大小的
  - 下划线命名模式:qq_word(python中的常用方法)
  - (大小)驼峰模式:userName    UserName

### 变量的基本使用

- 变量的格式化输出
  - %格式化操作符   包含%的字符串被称为格式化字符串
  - %s字符串    %d十进制整数    %f浮点数  %%:输出%
  - %06d表示输出的整数显示位数,不足的地方使用0补全
  - %.2f  表示小数点保留两位
  - %.2f%%输出%
  - 小数转比例"%.02f%%"% (scale * 100)
  - print("苹果单价:%.2f元/斤,购买了:%.2f斤,需要支付:%.2f元"% (price, weight, money_new))
  - print("您购买的评估"+"测试")  这种格式是合理的 (嵌套+拼接)
- 在 Python 中可以使用 print 函数将信息输出到控制台
- 如果希望输出文字信息的同时，一起输出 数据，就需要使用到 格式化操作符
- % 被称为 格式化操作符，专门用于处理字符串中的格式
  - 包含 % 的字符串，被称为 格式化字符串
  - % 和不同的 字符 连用，不同类型的数据 需要使用 不同的格式化字符



### 高级变量类型

> 在python中,所有 **非数字型变量** 都支持以下特点:

1. 都是一个 **序列** sequence , 也可以理解为 **容器**
2. **取值** [ ]
3. **遍历** for in
4. **计算长度** , **最大/最小值** , **比较** , **删除**
5. **链接** +  和   **重复** *
6. **切片**

### 变量进阶

### 变量的引用

- python中 变量引用 而不是其他的变量传递  所所以一般的单个数据只有一个地址
- 变量和 数据都是保存在内存中的
- 在 Python 中 **函数 的 参数传递** 以及 **返回值** 都是靠 **引用** 传递的
- python中，只有函数引用 没有函数传递

### 引用的概念

在 `python` 中

- **变量** 和 **数据** 是分开存储的
- **数据** 保存在内存中的一个位置
- **变量** 中保存着数据在内存中的地址
- **变量** 中 **记录数据的地址**,就叫做 **引用**
- 使用 `id()` 函数可以查看变量中保存数据所在的 **内存地址**

> **注意**: 如果变量已经被定义,当给一个变量赋值的时候,本质上是 **修改了数据的引用**
>
> - 变量 **不再** 对之前的数据引用
> - 变量 **改为** 对新赋值的数据引用

### 函数的参数和返回值的传递

在 `Python` 中, 函数的 **实参/返回值** 都是靠 **引用** 来传递的

### 可变和不可变类型

- **不可变类型** ,内存中的数据不允许被修改:
  - 数字类型
  - 字符串
  - 元组
- **可变类型** , 内存这种的数据可以被修改:
  - 列表 list
  - 字典 dict 

> 注意:
> 字典的 key 只能使用不可变类型的数据 

**注意**

1. **可变类型** 的数据变化, 是通过**方法** 来实现的
2. 如果给一个可变类型的变量, 辅助一个新的数据, **引用会修改**  会更改内存地址
   - 变量不再对之前的数据引用
   - 变量改为对新赋值的数据引用

**哈希**(hash)

- python 中内置有一个名字叫做 hash(o) 的函数
  - 接收一个 **不可变类型** 的数据作为 **参数**
  - 返回结果是一个整数
- 哈希 是一种 **算法** , 其作用就是提取数据的 **特征码** **(指纹)**
  - **相同的内容** 得到 **相同的结果**
  - **不同的内容** 得到 **不同的结果**
- 在 python 中 , 设置字典的 **键值对** 时 , 会首先对 key 进行 hash 以决定如何在内存中保存字典的数据, 以方便 **后续** 对字典的操作 :**增, 删, 改, 查**

### 局部变量和全局变量

- 局部变量 是在函数内部定义的变量 只能在函数内部使用
- **全局变量** 只能通过**方法修改** 不能对其进行运算 即使是可变类型
- 全局变量 是在函数外部定义的变量 (没有定义在某一函数内), 所有函数 内部都可以使用这个变量

> 提示:在其他发的开发语言中, 大多 **不推荐使用全局变量** --可变范围太大, 导致程序不好维护!

理解 命名空间 域名空间  

### 局部变量 

- **局部变量** 是在 **函数内部** 定义的变量, 只能在函数内部使用
- 函数执行结束后, 函数内部的局部变量, 会被系统回收
- 不同的函数, 可以定义相同的名字的局部变量, 但是 但是彼此级之间不会产生影响

#### 局部变量的作用

- 在函数内部使用, 临时 保存 函数内部需要使用的数据

#### 局部变量的生命周期

- 所谓 **生命周期** 就是变量从 **被创建** 到 **被系统回收** 的过程
- 局部变量 在函数被执行时 才会被创建
- 函数执行结束后 局部变量 被系统回收
- **局部变量在生命周期** 内, 可以用来存储 **函数内部临时使用到的数据**

### 全局变量

- **全局变量** 是在 **函数外部定义**的变量, 所有函数内部都可以使用这个变量 

```
# 定义一个全局变量
num = 10


def demo1():

    print(num)


def demo2():

    print(num)

demo1()
demo2()

print("over")
```

**注意**: 函数执行时, **需要处理变量时** 会:(先局部变量,再全局变量)

1. **首先** 查找 **函数内部** 是否存在 **指定名称** 的局部 变量,如果有 ,直接使用
2. 如果没有, 查找 **函数外部** 是否存在 **指定名称** 的全局变量, 如果有, 直接使用
3. 如果 还没有,程序报错!

#### 函数不能直接修改 全局变量的引用

#### 但是可以使用全局变量的标识符,因为函数会优先使用全局变量

#### 在函数内部修改全局变量的值

a = 20 
def modification():
    global  a 
    a = 100
    
modification()
print(a)
![4e396a57f2be37dc605aa8f360abc636.png](en-resource://database/1422:1)



#### 修改全局变量的应用场景,   

- 如果需要在函数中修改全局变量, 需要使用 global 进行声明

代码示例:

```
num = 10

def demo1():

    print("demo1" + "-" * 50)

    # global 关键字，告诉 Python 解释器 num 是一个全局变量
    global num
    # 只是定义了一个局部变量，不会修改到全局变量，只是变量名相同而已
    num = 100
    print(num)


def demo2():

    print("demo2" + "-" * 50)
    print(num)

demo1()
demo2()
print("over")
```

#### 代码结构

import模块
全局变量
函数定义
执行代码

#### 全局变量命名的建议

- 为了避免局部变量和全局变量出现混淆，在定义全局变量时，有些公司会有一些开发要求，例如：
- 全局变量名前应该增加 g_ 或者 gl_ 的前缀

> - 提示：具体的要求格式，各公司要求可能会有些差异



## 对象 - Object

对象是 Python 中对数据的抽象。Python 程序中的所有数据都是由对象或对象间关系来表示的。

**每个对象都有各自的编号、类型和值**。一个对象被创建后，它的 **编号** 就绝不会改变；你可以将其理解为该对象在**内存中的地址**。 '[`is`](https://docs.python.org/zh-cn/3.7/reference/expressions.html#is)' 运算符可以比较两个对象的编号是否相同；[`id()`](https://docs.python.org/zh-cn/3.7/library/functions.html#id) 函数能返回一个代表其编号的整型数。

编号: 身份 内存地址 唯一标识

- python程序中保存的所有数据都是围绕对象的概念展开的
- python是属性强类型的语言

在 CPython 中，`id(x)` 就是存放 `x` 的内存的地址。

对象的类型决定该对象所支持的操作 , 并且定义了该类型的对象可能的取值。

[`type()`](https://docs.python.org/zh-cn/3.7/library/functions.html#type) 函数能返回一个对象的类型 (类型本身也是对象)。与编号一样，**一个对象的类型也是不可改变的**, 可以强制转换-会产生新的对象. 

有些对象的**值**可以改变。值可以改变的对象被称为 **可变的**；值不可以改变的对象就被称为 *不可变的*。(一个不可变**容器对象**如果包含对可变对象的引用，当后者的值改变时，前者的值也会改变；但是该容器仍属于不可变对象，因为它所包含的对象集是不会改变的。因此，**不可变并不严格等同于值不能改变**，实际含义要更微妙。) 一个对象的可变性是由其类型决定的；例如，数字、字符串和元组是不可变的，而字典和列表是可变的。

对象绝不会被显式地销毁；然而，当**无法访问时**它们可能会被作为垃圾回收。允许具体的实现推迟垃圾回收或完全省略此机制 --- 如何实现垃圾回收是实现的质量问题，只要可访问的对象不会被回收即可。

注意：使用实现的跟踪或调试功能可能令正常情况下会被回收的对象继续存活。还要注意通过 '[`try`](https://docs.python.org/zh-cn/3.7/reference/compound_stmts.html#try)...[`except`](https://docs.python.org/zh-cn/3.7/reference/compound_stmts.html#except)' 语句捕捉异常也可能令对象保持存活。

有些对象包含对 "外部" 资源的引用，例如打开文件或窗口。当对象被作为垃圾回收时这些资源也应该会被释放，但由于垃圾回收并不确保发生，这些对象还提供了明确地释放外部资源的操作，通常为一个 `close()` 方法。强烈推荐在程序中显式关闭此类对象。'[`try`](https://docs.python.org/zh-cn/3.7/reference/compound_stmts.html#try)...[`finally`](https://docs.python.org/zh-cn/3.7/reference/compound_stmts.html#finally)' 语句和 '[`with`](https://docs.python.org/zh-cn/3.7/reference/compound_stmts.html#with)' 语句提供了进行此种操作的更便捷方式。



有些**对象包含对其他对象的引用**；它们被称为 **容器**。容器的例子有元组、列表和字典等。这些引用是容器对象值的组成部分。在多数情况下，当谈论一个容器的值时，我们是指所包含对象的值而不是其编号；但是，当我们谈论一个容器的**可变性**时，则仅指其直接包含的对象的**编号**。因此，如果一个不可变容器 (例如元组) 包含对一个可变对象的引用，则当该可变对象被改变时容器的值也会改变。

注意 `c = d = []` 则是将同一个对象赋值给 `c` 和 `d`

一般的赋值 是指的编号绑定

**对象属性**:某些对象有属性、值或相关联的执行代码。python用句点（.）标记法来访问属性。属性包括相应对象的名字。最常用的属性是函数和方法

### 对象标准类型层级结构



- Numeric对象
  - bool
  - integer
  - float
  - complex
- Sequence对象 --序列
  - String
  - Byte string
  - List
  - Tuple
- Fundamental对象
- Mapping对象
  - Dict
- Internal对象
  - function
  - code
  - frame
  - module
  - method
- 其他类型对象
  - None
  - 文件
  - 模块
  - 类
  - 内置函数
  - 内置方法
  - **协程函数** async def



## 列表 - List

### 列表的定义

```
a = [1, 2, 4, 5, 6, 6, 8]
print(a[0])
len(a)   --得出字符串a 的长度
```

- list (**列表**) 是 `Python` 中使用 **最频繁** 的数据类型 , 在其他语言中通常叫做 **数组**
- 专门用于存储 **一串  信息**
- 列表 用 [ ] 定义, **数据** 之间使用 , 分隔
- 列表的 **索引** 从 0 开始
  - **索引** 就是数据在 **列表** 中的位置编号, **索引** 又可以被称为 **下标**

> 注意
> 从列表中取值时, 如果 **超出索引范围** , 程序会报错

```
# 示例
name_list = ["zhangshan", "lisi", "wangwu"]
```

### 列表的常用操作

- **列表** 的定义方法 name_list = [1, 2, 3, 4, 5]
- 输入 name_list. 按下 `TAB` 键, ipython 会提示 **列表** 能够使用的 **方法** 如下:

| 参数    | 作用                        | 用法示例                         |
| ------- | --------------------------- | -------------------------------- |
| append  | 末尾增加数据                | list.append(1)                   |
| extend  | 将列表2追加到列表           | list.extend(list2)               |
| insert  | 在指定位置插入一个元素      | list.insert(1,3)                 |
| remove  | 删除列表中值为x的第一个元素 | list.remove(x)                   |
| pop     | 删除指定位置的值,并返回     | list.pop(2) list.pop()删除末尾值 |
| clear   | 移除列表中的所有项          | list.clear()=del list[:]         |
| del     | 删除指定索引的数据          | del list[1]                      |
| count   | 返回 x 在列表中出现的次数   | list.count(x)                    |
| sort    | 对列表中的元素进行排序      | list.sort()                      |
| index   | 返回列表中第一个x的索引     | index(x)                         |
| reverse | 倒排列表中的元素            | list.reverse()                   |
| index   | 元素第一次出现的索引        | list.index(x)                    |

> 增加: append  insert extend
> 删除: pop  remove del
> del 关键字本质上是用来将一个变量从内存中删除的
> 无法再调用该变量,但是可以重新定义
> 日常开发中,要从列表删除数据,建议使用列表提供的方法
> 查看: list[0]  index 查询列表中第0个元素
> 修改: list[0] = 111
> 排序: sort  reverse
> list 查询列中中的所有元素
> 列表的降序排序  list.sort(reverse = True)
> 注意  操作的返回值的问题

> **del 理解**

- 由于python都是引用，而python有GC机制，所以，del语句作用在变量上，而不是数据对象上。
- del 删除的是变量,不是数据, 解除了变量和数据的联系

> **注意**：
> 类似 insert, remove, reverse 或 sort 等修改列表的方法没有返回值。

### 关键字, 函数和方法

- **关键字** 是 `Python` 内置的, 具有特殊意义的标识符
- **函数** 封装了独立功能, 可以直接调用
- **方法** 和函数类似, 同样是封装了独立的功能
- **方法** 需要通过 **对象** 来调用, 表示针对这个 **对象** 要做的操作

```
对象.方法(参数)

```

> 在变量后面输入 `.` ,然后选择方法来执行操作

### 迭代遍历

> python中 可以遍历所有非数字类型的的变量: **列表** , **元组** , **字典** , 以及 **字符串**

- **遍历** 就是 **从头到尾** **依次** 从 **列表** 中 获取 数据
  - 在 **循环体内部** 针对 **每一个元素**, 执行相同的操作
- 在 Python 中, 可以使用 for 遍历 所有非数字型类型的变量 : 列表 , 元组 , 字典 以及 字符串
- 在 **Python** 中为了提高列表的遍历效率, 专门提供了 **迭代 iteration 遍历**
- iterate 迭代器   
- 迭代可以理解为重复
- iterable 可迭代
- 使用 `for` 就能够实现迭代遍历
- 迭代遍历  重复  -反馈(执行))
  - 顺序地从列表中一次获取数据, 每一次循环过程中, 数据都会保存在 指定的(i)这个变量中,在循环体内部可以访问到当前这一次获取到的数据

```
name_list = [1, 2, 3, 4, 5]
i = 0 
while i < len (name_list):
    print("我的名字叫 %s" % name_list[i])
    i += 1
```

> for  一直在调用 next() 函数
> enumerate()

- while循环必须指定循环体的长度和次数

> **列表** 中可以 **存储不同类型的数据** 但是在开发中,更多的应用场景是存储相同的数据

### 关键字 , 函数 和 方法

- **关键字** 是 Python 内置的 , 具有特殊意义的标识符
  - 关键字后面不需要使用括号
- **函数** 封装了独立功能, 可以直接调用
- **方法** 和函数类似 , 同样是封装了独立的功能
- **方法** 需要通过 **对象** 来调用 , 表示针对这个 **对象** 要做的操作

> 在变量后面输入 `.` 然后选择需要执行的操作, 记忆起来比函数简单得多

### 列表的应用场景

- **列表**使用频率最高的数据类型
  - 列表存储相同类型的数据
  - 通过 **迭代遍历** 在循环体内部, 针对列表中的每一项元素, 执行相同的操作

> 列表允许存储不同的数据类型
> %s  不可以可以输出 整型  格式化输出   但是类型是会失真

牛逼  的话 问题少  所以一定要工整 和规范  
程序员 会跟bug 较量 

## 元组 - Tuple

### 元组的定义

- 元组定义方法 tuple()
  - 元组中的元素不能被修改
  - 元组通常在python中保存不同的数据类型
  - **元组** 在 python 开发中, 有特定的应用场景

**元组** 中 **只包含一个元素时**, 需要 **在元素后面添加逗号**
    > 显然的 当不加逗号是 a(2) 容易产生歧义,不那么规范
    

### 元组的常用操作

| 参数  | 说明             | 用法            |
| ----- | ---------------- | --------------- |
| count | 某元素出现的次数 | tuple1.count(x) |
| index | 根据索引返回参数 | tuple1.index(1) |

### 元组的应用场景

- 函数的 参数 和返回值, 一个函数可以接收 任意多个参数, 或者 一次返回多个数据
- 格式字符串, 格式化字符串后面的 () 本质上就是一个元组
  - % 后面的() 是元组 科二以用变量定义
  - 
- **将列表转换成元组** 让列表不可以被修改, 以保护数据安全

#### 元组的迭代遍历--在实际开发中,需求量并不多

#### 元组和列表之间的强制转换

list(元组)   tuple(列表)
字符串可以转化成列表  

接元组的值
a =  (1,2)
b, c =  a  
能够得到 b   =  1  ,  c  =  2



------

## 字典 - Dict

> [!Note]
>
> defaultdict, OrderdDict
>
> pydantic
>
> box
>
> dpath
>
> [python-benedict](https://github.com/fabiocaccamo/python-benedict)

### 字典的定义

- dictionary (字典) 是 **除列表以外** Python 之中 最灵活 的数据类型
- 字典同样可以用来 **存储多个数据**
  - 通常用于存储 **描述一个 物体 的相关信息**
- 和列表的区别
  - 列表 是 有序 的对象集合
  - 字典 是 无序 的对象集合

- **字典的值(values)是无法操作的**

- 字典用 {} 定义
- 字典使用 **键值对** 存储数据, 键值对之间使用 `,` 分隔; 键和值之间用 `:` 分隔开
  - **键** key 是 索引  
  - **值** value 是 数据
  - **键必须是唯一的**,同一个字典中,键不被允许第二次出现
  - **值** 可以取任何数据类型, 但 **键** 只能使用 **字符串** , **数字** 或 **元组**
  - **键** 必须是不可变的, 所以列表类型不能用作键

```
xiaoming = {"name": "小明",
            "age": 18,
            "gender": True,
            "height": 1.75}
```

> 使用print输出字典时,输出的顺序和定义的顺序是不一致的,因为字典是无序的数据集合
> 记录对象相关的信息  字典是一个对象的信息集合

### 字典的常用操作

| 参数              | 说明                                   | 用法                       |
| ----------------- | -------------------------------------- | -------------------------- |
| len               | 计算字典的键值对数量                   | len(dict)                  |
| str               | 将字典转化为字符串                     | str(dict)                  |
| dict[]            | 从字典中取值,key 不存在会报错          | dict[key]                  |
| dict.get()        | 从字典中取值,key不存在时 **不会** 报错 | dict.get(key)              |
| dict[]            | **修改/新建**键值对                    | dict[key] = value          |
| dict.setdefault() | **不修改/新建**键值对                  | dict.setdefault(key,value) |
| update            | 将字典2的数据合并到字典                | dict.update(dict2)         |
| clear             | 清除字典中的所有内容                   | dict.clear()               |
| items/keys/values | 输出字典的数据                         | dict.items()               |
| del               | 根据键删除字典中的键值对               | del dict["name"]           |
| copy              | 返回字典的浅赋值                       | dict.copy()                |
| key in dict       | 判断键是否在字典中 结果为布尔值        | "name" in dict             |
| fromkeys          | 从序列(元组))中新建一个字典            | dict.fromkeys(seq,values)  |
| pop               | 根据键删除item                         | dict.pop(key)              |
| popitem           | 随机删除一个键值对                     | dict.popitem()             |

```
seq = ('name', 'age', 'sex')

dict = dict.fromkeys(seq)
print ("新的字典为 : %s" %  str(dict))

dict = dict.fromkeys(seq, 10)
print ("新的字典为 : %s" %  str(dict))
```

**查询**
dict[key0]
dict[values]
dict[item]]

**增加/修改**
修改: dict[key0] = "value1"
增加: dict[key_new] = "values_new"
追加:dict.update(dict2)  如果出现 **键冲突**,将以后面的结果为准  会覆盖原有键值对

**删除**
del dict[key0]  删除指定键值对 
dict.pop["key0"]
如果指定的键 不存在, 则会报错
dict.popitem()  :随机删除一个键值对

**字典的值 无法被操作    通过 key 操作 **
**字典的key 值 应该是 hash 值不可变的   而不是 不可变量类型**

### 循环遍历应用场景

```
a = {1:"a".2:"b":3:"c"}
for i in a:
   print("%s - %s " % (k,a[k]) )

```

- 使用 **多个键值对**, 存储 **描述一个物体的相关信息** --描述更复杂的数据信息
- 将 **多个字典** 放在 **一个列表** 中, 再进行遍历, 在循环体内部针对每一个字典进行 **相同的处理**

### 字典列表组合的应用场景

- 使用 **多个键值对**, 存储 **描述一个**
- - *

## 字符串 - String

### 字符串的定义

- **字符串** 就是 **一串字符** , 是编程语言中表示文本的数据类型

- 在python 中可以使用 **一对双引号 "** 或者  **一对单引号 '** 定义一个字符串

  - 虽然可以使用 \" 或者 \' 做字符串的转义，但是在实际开发中：
  - 如果字符串内部需要使用 "，可以使用 ' 定义字符串
  - 如果字符串内部需要使用 '，可以使用 " 定义字符串

- 可以使用 **索引** 获取一个字符串中 **指定位置的字符**, 索引计数 从 0 开始

- 也可以使用 for **循环遍历** 字符串中的每一个字符

  > 大多数编程语言都是用 " " 来定义字符串

```
a = "wwfyde"
# 获取字符串的第一个字符
a[0] 
for item in a:
    print(item)
```

### 字符串特性

- **字符串** 比较符合以下规则： "0" < "A" < "a"
- 字典 是 对 字典的 键 (keys) 进行比较 而不是 值(values)
- 字典和字典不能比较大小 因为是无序的
- 字符串 的比较 用 比较运算符

### 字符串的常用操作

> 

### 字符串的常用操作

> **提示**
> 对于字符串 python内置的常用操作足够多,才使得在开发时, 能够针对字符串进行更加灵活的操作!应用更多的开发需求

### 字符串的切片

- **切片** 方法适用于 **字符串** , **列表** , **元组**
  - **切片** 使用 **索引值** 来限定范围 , 从一个大的字符串 中切出小的字符串

字符串[开始索引:结束索引:步长]

**字符串在使用方法操作的过程中,并不会修改原数据**

尽量使用 decimal判断

### 判断类型

|                    | **方法**              | **说明**                                                     |
| ------------------ | --------------------- | ------------------------------------------------------------ |
| space              | [x]string.isspace()   | 如果 string 中只包含空格，则返回 True                        |
| alnum  字母和数字  | [x]string.isalnum()   | 如果 string 至少有一个字符并且所有字符都是字母或数字则返回 True |
| alpha 是否只有字母 | [x]string.isalpha()   | 如果 string 至少有一个字符并且所有字符都是字母则返回 True    |
|                    | [x]string.isdecimal() | 如果 string 只包含数字则返回 True，全角数字                  |
|                    | string.isdigit()      | 如果 string 只包含数字则返回 True，全角数字、⑴、\u00b2       |
|                    | string.isnumeric()    | 如果 string 只包含数字则返回 True，全角数字，汉字数字        |
|                    | [x]string.istitle()   | 如果 string 是标题化的(每个单词的首字母大写)则返回 True      |
|                    | [x]string.islower()   | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是小写，则返回 True |
|                    | [x]string.isupper()   | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是大写，则返回 True |

### 查找和替换

| **方法**                                                     | **说明**                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| string.startswith(substr)                                    | 检查字符串是否是以 str 开头，是则返回 True                   |
| string.endswith(substr)                                      | 检查字符串是否是以 str 结束，是则返回 True                   |
| string.find(str, start=0, end=len(string))优先选择该函数  因为 不存在时  不会报错 | 检测 str 是否包含在 string 中，如果 start 和 end 指定范围，则检查是否包含在指定范围内，如果是返回开始的索引值，否则返回 -1 |
| string.rfind(str, start=0, end=len(string))                  | 类似于 find()，不过是从右边开始查找                          |
| string.index(str, start=0, end=len(string))                  | 跟 find() 方法类似，不过如果 str 不在 string 会报错          |
| string.rindex(str, start=0, end=len(string))                 | 类似于 index()，不过是从右边开始                             |
| string.replace(old_str, new_str , num=string.count(old))  会返回一个新的字符串,不会修改原有字符串的内容 | 把 string 中的 old_str 替换成 new_str，如果 num 指定，则替换不超过 num 次 |

### 大小写转换

| **方法**               | **说明**                         |
| ---------------------- | -------------------------------- |
| string.capitalize()[x] | 把字符串的第一个字符大写         |
| string.title()[x]      | 把字符串的每个单词首字母大写     |
| string.lower()[x]      | 转换 string 中所有大写字符为小写 |
| string.upper()[x]      | 转换 string 中的小写字母为大写   |
| string.swapcase()[]    | 翻转 string 中的大小写           |

### 文本对齐

| **方法**             | **说明**                                                     |
| -------------------- | ------------------------------------------------------------ |
| string.ljust(width)  | 返回一个原字符串左对齐，并使用空格填充至长度 width 的新字符串 |
| string.rjust(width)  | 返回一个原字符串右对齐，并使用空格填充至长度 width 的新字符串 |
| string.center(width) | 返回一个原字符串居中，并使用空格填充至长度 width 的新字符串  |

### 去除空白字符   --数据清洗 

| **方法**          | **说明**                           |
| ----------------- | ---------------------------------- |
| string.lstrip()   | 截掉 string 左边（开始）的空白字符 |
| string.rstrip()   | 截掉 string 右边（末尾）的空白字符 |
| string.strip()[x] | 截掉 string 左右两边的空白字符     |

### 拆分和连接

| **方法**                  | **说明**                                                     |
| ------------------------- | ------------------------------------------------------------ |
| string.partition(str)     | 把字符串 string 分成一个 3 元素的元组 (str前面, str, str后面) |
| string.rpartition(str)    | 类似于 partition() 方法，不过是从右边开始查找                |
| string.split(str="", num) | 以 str 为分隔符拆分 string，如果 num 有指定值，则仅分隔 num + 1 个子字符串，str 默认包含 '\r', '\t', '\n' 和空格 |
| string.splitlines()       | 按照行('\r', '\n', '\r\n')分隔，返回一个包含各行作为元素的列表 |
| string.join(seq)          | 以 string 作为分隔符，将 seq 中所有的元素（的字符串表示）合并为一个新的字符串 |

### 切片

- **切片** 方法适用于 **字符串**、**列表**、**元组**
- **切片** 使用 **索引值** 来限定范围，从一个大的 **字符串** 中 **切出** 小的 **字符串**
- *列表** 和 **元组** 都是 **有序** 的集合，都能够 **通过索引值** 获取到对应的数据
- **字典** 是一个 **无序** 的集合，是使用 **键值对** 保存数据

字符串[开始索引:结束索引:步长]

**注意**：

1. 指定的区间属于 **左闭右开** 型 [开始索引, 结束索引) => 开始索引 >= 范围 < 结束索引
2. 从 起始 位开始，到 **结束****位的前一位** 结束（**不包含结束位本身**)
3. 从头开始，**开始索引** **数字可以省略，冒号不能省略**
4. 到末尾结束，**结束索引** **数字可以省略，冒号不能省略**
5. 步长默认为 1，如果连续切片，**数字和冒号都可以省略**

### 索引的顺序和倒序

- 在 Python 中不仅支持 **顺序索引**，同时还支持 **倒序索引**
- 所谓倒序索引就是 **从右向左** 计算索引
- 最右边的索引值是 **-1**，依次递减

# 数据结构

> 参考资料
>
> Python cookbook

## deque

## heapq

## 优先级队列

## defaultdict

OrderedDict

# 文件处理

## 操作文件的套路

在 **计算机** 中 要操作文件的套路非常固定, 一共包含 **三个步骤** :

1. 打开文件
2. 读, 写文件
   - **读** 将文件内容读入内存
   - **写** 将内存内容写入文件
3. 关闭文件

## 操作文件的函数/方法

- 在 `python` 中要操作文件需要记住1个函数 和3个方法

| 函数/方法 | 说明                          |
| --------- | ----------------------------- |
| open      | 打开文件,并且返回文件操作对象 |
| read      | 将文件内容读取到内存          |
| write     | 将指定内容写入文件            |
| close     | 关闭文件                      |

- `open` 函数负责打开文件, 并且返回文件对象
- `read` / `write` / `close` 三个方法都需要通过 **文件对象** 来调用

## read方法 --读取文件

- `open` 函数的第一个参数是要打开的文件名(文件名区分大小写)
  - 如果文件 **存在**, 返回 **文件操作对象**
  - 如果文件 **不存在**, 会 **抛出异常**
- `read` 方法可以一次性 **读入** 并 **返回** 文件的 **所有内容**
- `close` 方法负责 **关闭文件**
  - 如果忘记关闭文件,会造成系统资源消耗, 

## 文件指针

- **文件指针** 标记 **从哪个位置开始读取数据**
- **第一次打开** 文件时, 通常 **文件指针会指向文件的开始位置**
- 当执行了 `read` 方法后, **文件指针** 会移动到 **读取内容的末尾**
  - 默认情况下回移动到文件末尾

## 打开文件的方式

- `open` 函数默认以**只读方式**打开,并且**返回文件对象**

```python
# 这是伪代码
file = open("文件名", "访问方式")
```

| 访问方式 | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| r        | 以**只读**方式打开文件. 文件的指针将会放在文件的开头,这是**默认模式** . |
| w        | 以**只写** 方式打开文件. 如果文件存在会被覆盖. 如果文件不存在, 创建新的文件 |
| a        | 以**追加**的方式打开文件. 如果该文件已存在,文件指针将会放在文件的结尾. 如果文件不存在,创建新文件进行写入 |
| r+       | 以**读写**方式打开文件. 文件的指针将会放在文件的开头. 如果文件不存在,抛出异常 |
| w+       | 以**读写**方式打开文件. 如果文件存在会被覆盖.  如果文件不存在,创建新文件 |
| a+       | 以**读写**方式打开文件. 如果文件已存在,文件指针将会放在文件的结尾.  如果文件不存在,创建新文件 |

> **提示**

- 频繁的移动文件指针, **会影响文件的读写效率**, 开发中更多的时候会以 **只读**, **只写** 的方式来操作文件

## 按行读取文件内容

- `read` 方法默认会把文件的 **所有内容 一次性读取到内存**
- 如果文件太大, 对内存的占用会非常严重

**readline方法**

- `readline` 方法可以一次读取一行内容
- 方法执行后,会把 **文件指针** 移动到下一行, 准备再次读取

读取大文件的正确姿势

```
file = open("wwfyde", "r", encoding="UTF-8")

while True:
    # 读取一行内容
    text = file.readline()
    # 判断是否读取到内容
    if not text:
        break
    # 在读取每一行时末尾已经有了"\n"
    print(text, end="")
# 关闭文件
file.close()

```

## 文件读写案例 --复制文件

**小文件复制**

- 打开一个已有文件,读取完整内容,并写入到另外一个文件

```
# 打开文件对象
file_read = open("wwfyde", encoding="UTF-8")
file_write = open("wwfyde_copy", "w", encoding="UTF-8")
# 读, 写
text = file_read.read()
file_write.write(text)
# 关闭文件
file_read.close()
file_write.close()

```

**大文件复制 --逐行读取和写入**

```
file_read = open("wwfyde", encoding="UTF-8")
file_write = open("wwfyde_copy2", "a", encoding="UTF-8")

while True :
    text = file_read.readline()
    if not text:
        break
    file_write.write(text)

# close file
file_read.close()
file_write.close()

```

## 文件/目录的常用管理和操作

- 在 **终端 / 文件浏览器**, 中可以执行常规的 **文件 / 目录** 管理操作, 例如:
  - 创建, 重命名, 删除, 改变路径, 查看目录内容, ...
- 在 `Python` 中, 如果希望通过程序实现上述功能, 需要导入 `os` 模块

**文件操作**

| 方法名 | 说明       | 示例                            |
| ------ | ---------- | ------------------------------- |
| rename | 重命名文件 | os.rename(源文件名, 目标文件名) |
| remove | 删除文件   | os.remove(文件名)               |

**目录操作**

| 方法名     | 说明         | 示例                    |
| ---------- | ------------ | ----------------------- |
| listdir    | 目录列表     | os.listdir(目录名)      |
| mkdir      | 创建目录     | os.mkdir(目录名)        |
| rmdir      | 删除目录     | os.rmdir(目录名)        |
| getcwd     | 获取当前目录 | os.getcwd()             |
| chdir      | 修改工作目录 | os.chdir(目标目录)      |
| path.isdir | 判断是否目录 | os.path.isdir(文件路径) |

> **提示**: 文件 / 目录 操作都支持 **相对路径** 和 **绝对路径**

## 文件的编码格式

**ASCII码**

- 计算机中 只有 256 个 ASCII 字符
- 一个 ASCII 在内存中占用 1个字节 的空间
- 1byte 字节 = 8 bit 比特

**UTF-8**

- 计算机中使用1-6个字节辣表示一个 UTF-8 字符,



# 模块和包

## 模块 - module

### 定义与特性

> **模块 是 Python 程序架构的一个核心概念**
>
> [官方文档](https://docs.python.org/3/tutorial/modules.html)

- **模块**: 以扩展名py结尾的源代码文件
- 模块中的定义可以导入到其他模块或 主模块
- 主模块: 在顶层和计算器模式下, 执行脚本中可访问的变量集
- 在模块内部, 通过全局变量__name__获取模块名
- *Python程序/脚本的一种组织结构*
    - 一个模块可由多个文件组成
- 脚本(script): 一个可解释(interpreted)执行(executable)的单文件
    - `python script.py`
    - 模块(module): `python -m module`
- **模块名** 同样也是一个 **标识符** , 需要符合标识符的命名规则
- 在模块中定义的 **全局变量**, **函数** **类** 都是提供给外界直接使用的 **工具**
- **模块** 就好比是 **工具包** , 要想使用这个工具包中的工具, 就需要先 **导入** 这个模块



### 特性

- 模块包含可执行语句及函数定义. 这些语句用于初始化模块, 且仅在import语句 "第一次" 遇到模块名使执行
    - 文件作为脚本运行时, 也会执行这些语句
    - 实际上，函数定义也是“可执行”的“语句”；执行模块级函数定义时，函数名将被导入到模块的全局符号表。
- 模块有自己的私有符号表(*命名空间*)
- 可以把其他模块导入模块.
    - 按照惯例, 所有 import语句都放在模块(或脚本)开头, 但是这不是必须的. 导入的模块名存在了模块的全局符号表里
    - 有条件导入时(if, try), 不需要把import语句放在模块开头.

### 应用场景



## 模块导入

```
import fibo
import fibo as fib
from fibo import fib as fibonacci
from fibo import *
```



### import 导入

```
import 模块名1
import 模块名2 
```

- **导入之后**
  - 通过 `模块名.` 使用 **模块提供的工具 --全局变量, 函数, 类**
- 使用 as 指定模块的别名

> **如果模块的名字太长** 可以使用 as 指定模块的名称, 以方便在代码中的使用

`import 模块名1 as 模块别名`

#### 注意: 模块别名 应该符合 大驼峰命名法

模块别名的作用域为当前文件中

### from ... import 导入

- 如果希望 **从一个模块** 中, 导入**部分**工具 久可以使用这种方式
- import 模块名 是一次性把模块中 **所有工具全部导入** , 并且通过 **模块名/别名** 访问

```
# 从模块 导入 某一个工具
from 模块名1 import 工具名
```

> 导入之后
> **不需要**通过模块名.
> 可以直接使用**模块提供的工具** --**全局变量, 函数, 类**

> **注意**
> 如果 **两个模块**, 存在 **同名的函数**, 那么 **后导入模块的函数** 会 **覆盖掉先导入的函数**

  开发时 import 代码应该统一写在代码的顶部,更容易及时发现冲突
  一旦发现冲突,可以使用 as 关键字 **给其中一个工具起一个别名**

### from ... import * 全部导入

- 这种方式不推荐使用, 因为函数重名并没有任何的提示, 出现问题不好排查 
- 这种方式会导入所有不以下划线（`_`）开头的名称。
- 大多数情况下，不要用这个功能，这种方式向解释器导入了一批未知的名称，可能会覆盖已经定义的名称。
- 注意，一般情况下，不建议从模块或包内导入 `*`， 因为，这项操作经常让代码变得难以理解。不过，为了在交互式编译器中少打几个字，这么用也没问题。



## 相对导入与绝对导入

相对导入相对于包导入, 相对导入只能出现在包中

绝对导入相对于当前模块(当前文件)导入

> [官方原文](https://docs.python.org/zh-cn/3/tutorial/modules.html#intra-package-references): **请注意，相对导入是基于当前模块的名称进行导入的。由于主模块的名称总是 `"__main__"` ，因此用作Python应用程序主模块的模块必须始终使用绝对导入。**
>
> 也就是说, 当文件以脚本方式运行时, 该文件中不能出现相对导入`from . import`, 该导入只能存在于模块中, 即以模块方式运行, 才运行出现相对导入.

## 以脚本方式执行模块

```shell
python fibo.py <arguments>
```



```
# 该语句在以脚本方式执行时生效, 作为模块导入时不会执行
# 这种操作常用于为模块提供便捷用户接口，或用于测试（把模块当作执行测试套件的脚本运行）。
if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))
```



## 模块的搜索路径

   python 的解释器在 **导入模块** 时, 会:

1. 搜索 **当前目录** 指定模块的文件, **如果有就直接导入**
2. 如果没有, 再搜索 **系统目录**

> 在开发时,给文件起名, 不要和 **系统的模块文件 重名**
> Python 的解释器会 **加载当前目录** 下的 `random.py` 而不会加载 **系统的** random 模块

- `Python` 中每一个模块都有一个内置属性 __file__ 可以 **查看模块** 的 **完整路径**
- print(random.__file__)

### 原则 --每一个文件都应该是可以被导入的

- 一个 **独立的** python **文件** 就是一个 **模块**
- 在导入文件时, 文件中 **所有没有任何缩进的代码** 都会被执行一遍
- 这样的内容不能被称为工具

需求 文件被导入时 能够直接执行的代码不需要被执行! --测试代码

- **实际开发场景**
- 在实际开发中, 每一个模块都是独立开发的, 大多都有专人负责
- **开发人员** 通常会在 **模块下方** **增加一些测试代码**

__name__ 属性

- __name__ 属性可以做到, 测试模块的代码 **只在测试情况下被运行**, 而在 **被导入不会被执行!**
- __name__ 是 python 的一个内置属性, 记录着一个 **字符串**
- 如果 **是被其他文件导入的**, __name__ 就是 **模块名**
- 如果 **是当前执行的程序** __name__ 是 __main__

```
# 测试模块 start
def main():
    # 测试内容
    pass
if __name__ == "__main__":    
   main()
# 测试模块 end
# 这样做的目的是,只能在测试时被使用,被导入时不会被执行

```

> 注意: 全局变量 函数 类 直接执行的代码不是向外界提供的工具!

## 包 - package

> 包的本质就是一个包含 `__init__.py` 文件的目录, 支持被导入

- 包是一种特殊的模块
- 为包添加`__main__.py`文件, 使得包可执行
- 将多个包进行打包
- 包是一个 **包含多个模块** 的 **特殊目录**
- 目录下有一个 **特殊的文件** __init__.py
- 包名的 **命名方式** 和变量名一致

> 创建包的方式
> 好处

使用 `import 包名` 可以一次性导入 **包** 中 **所有的模块**

__init__.py

- 要在外界使用 **包** 中的模块, 需要在 __init__.py 中指定 **对外界提供的模块列表**

```
# 从当前目录 导入 模块列表
from . import send_message
from . import receive_message
```

包是一种用“点式模块名”构造 Python 模块命名空间的方法。例如，模块名 `A.B` 表示包 `A` 中名为 `B` 的子模块。正如模块可以区分不同模块之间的全局变量名称一样，点式模块名可以区分 NumPy 或 Pillow 等不同多模块包之间的模块名称。

假设要为统一处理声音文件与声音数据设计一个模块集（“包”）。声音文件的格式很多（通常以扩展名来识别，例如：`.wav`， `.aiff`， `.au`），因此，为了不同文件格式之间的转换，需要创建和维护一个不断增长的模块集合。为了实现对声音数据的不同处理（例如，混声、添加回声、均衡器功能、创造人工立体声效果），还要编写无穷无尽的模块流。下图以分级文件系统形式展示这个包的架构：

```shell
sound/                          Top-level package
      __init__.py               Initialize the sound package
      formats/                  Subpackage for file format conversions
              __init__.py
              wavread.py
              wavwrite.py
              aiffread.py
              aiffwrite.py
              auread.py
              auwrite.py
              ...
      effects/                  Subpackage for sound effects
              __init__.py
              echo.py
              surround.py
              reverse.py
              ...
      filters/                  Subpackage for filters
              __init__.py
              equalizer.py
              vocoder.py
              karaoke.py
              ...
```

导入包时，Python 搜索 `sys.path` 里的目录，查找包的子目录。

Python 只把含 `__init__.py` 文件的目录当成包。这样可以防止以 `string` 等通用名称命名的目录，无意中屏蔽出现在后方模块搜索路径中的有效模块。 最简情况下，`__init__.py` 只是一个空文件，但该文件也可以执行包的初始化代码，或设置 __all__ 变量，详见下文。

还可以从包中导入单个模块，例如：

```
import sound.effects.echo
```

这段代码加载子模块 `sound.effects.echo` ，但引用时必须使用子模块的全名：

```
sound.effects.echo.echofilter(input, output, delay=0.7, atten=4)
```

另一种导入子模块的方法是 ：

```
from sound.effects import echo
```

这段代码还可以加载子模块 `echo` ，并且不加包前缀也可以使用。因此，可以按如下方式使用：

```
echo.echofilter(input, output, delay=0.7, atten=4)
```

另一种变体是直接导入所需的函数或变量：

```
from sound.effects.echo import echofilter
```

同样，这样也会加载子模块 `echo`，但可以直接使用函数 `echofilter()`：

```
echofilter(input, output, delay=0.7, atten=4)
```

注意，使用 `from package import item` 时，item 可以是包的子模块（或子包），也可以是包中定义的函数、类或变量等其他名称。`import` 语句首先测试包中是否定义了 item；如果未在包中定义，则假定 item 是模块，并尝试加载。如果找不到 item，则触发 [`ImportError`](https://docs.python.org/zh-cn/3/library/exceptions.html#ImportError) 异常。

相反，使用 `import item.subitem.subsubitem` 句法时，除最后一项外，每个 item 都必须是包；最后一项可以是模块或包，但不能是上一项中定义的类、函数或变量。

### 从包中导入 *

使用 `from sound.effects import *` 时会发生什么？理想情况下，该语句在文件系统查找并导入包的所有子模块。这项操作花费的时间较长，并且导入子模块可能会产生不必要的副作用，这种副作用只有在显式导入子模块时才会发生。

唯一的解决方案是提供包的显式索引。[`import`](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#import) 语句使用如下惯例：如果包的 `__init__.py` 代码定义了列表 __all__，运行 `from package import *` 时，它就是用于导入的模块名列表。发布包的新版本时，包的作者应更新此列表。如果包的作者认为没有必要在包中执行导入 * 操作，也可以不提供此列表。例如，`sound/effects/__init__.py` 文件包含以下代码：

```
__all__ = ["echo", "surround", "reverse"]
```

即，`from sound.effects import *` 将导入 `sound` 包中的这三个命名子模块。

如果没有定义 __all__，`from sound.effects import *` 语句 *不会* 把包 `sound.effects` 中所有子模块都导入到当前命名空间；该语句只确保导入包 `sound.effects` （可能还会运行 `__init__.py` 中的初始化代码），然后，再导入包中定义的名称。这些名称包括 `__init__.py` 中定义的任何名称（以及显式加载的子模块），还包括之前 [`import`](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#import) 语句显式加载的包里的子模块。请看以下代码：

```
import sound.effects.echo
import sound.effects.surround
from sound.effects import *
```

本例中，执行 `from...import` 语句时，将把 `echo` 和 `surround` 模块导入至当前命名空间，因为，它们是在 `sound.effects` 包里定义的。（该导入操作在定义了 __all__ 时也有效。）

虽然，可以把模块设计为用 `import *` 时只导出遵循指定模式的名称，但仍不提倡在生产代码中使用这种做法。

记住，使用 `from package import specific_submodule` 没有任何问题！ 实际上，除了导入模块使用不同包的同名子模块之外，这种方式是推荐用法。

### 6.4.2. 子包参考

包中含有多个子包时（与示例中的 `sound` 包一样），可以使用绝对导入引用兄弟包中的子模块。例如，要在模块 `sound.filters.vocoder` 中使用 `sound.effects` 包的 `echo` 模块时，可以用 `from sound.effects import echo` 导入。

还可以用 import 语句的 `from module import name` 形式执行相对导入。这些导入语句使用前导句点表示相对导入中的当前包和父包。例如，相对于 `surround` 模块，可以使用：

```
from . import echo
from .. import formats
from ..filters import equalizer
```

<u>注意，相对导入基于当前模块名。因为主模块名是 `"__main__"` ，所以 Python 程序的主模块必须始终使用绝对导入。</u>

### 6.4.3. 多目录中的包

包还支持特殊属性 [__path__](https://docs.python.org/zh-cn/3/reference/import.html#__path__)。该属性初始化为在包的 `__init__.py` 文件中的代码执行前所在的目录名列表。这个变量可以修改，但这样做会影响将来搜索包中模块和子包的操作。

这个功能虽然不常用，但可用于扩展包中的模块集。

# 内置函数

| 函数      | 描述               | 备注                      |
| --------- | ------------------ | ------------------------- |
| len(item) | 计算容器中元素个数 |                           |
| del(item) | 删除变量           | del 有两种方式            |
| max(item) | 返回容器中最大的值 | 如果是字典, 只针对key比较 |
| min(item) | 返回容器中最小的值 | 如果是字典, 只针对key比较 |

> **注意**
> **字符串** 比较符合以下规则: "0" < "A" < "a"

字符串 列表 字典元组 都能使用 的方法

返回 最大的值

del 关键字 del() 函数



## format-格式化函数

基本语法是:用`{}` 和 `:` 来代替以前的 `%`

`{}` 表示占位符 

`:` 表示字典参数方式

```python
# 不指定时,按照默认顺序排序
print("婷的英文名字是{}, 年龄是{}".format('Ting',18))
# 指定顺序时, 按照指定的顺序显示
print("婷的英文名字是{1}, 年龄是{0}".format('Ting',18))
# 字典方式传递参数
site = {"name": 'Ting', "age": 18}
print('婷的英文名字是{name}, 年龄是{age}'.format(**site))
# 列表方式传递参数
site2 = [1,3,4,5]
site22 = [1,3,4,5]
print('{0[0]},{0[1]},{1[3]}'.format(site2,site22))
# 元组方式传递参数
site3 =(1,2)
print('{},{}'.format(*site3))

```



## map()

`map`(*function*, *iterable*, *...*)

返回一个将 *function* 应用于 *iterable* 中每一项并输出其结果的迭代器。 如果传入了额外的 *iterable* 参数，*function* 必须接受相同个数的实参并被应用于从所有可迭代对象中并行获取的项。 当有多个可迭代对象时，最短的可迭代对象耗尽则整个迭代就将结束。 对于函数的输入已经是参数元组的情况，请参阅 [`itertools.starmap()`](https://docs.python.org/zh-cn/3/library/itertools.html#itertools.starmap)。

```
map(lambda:
```





### range()

高级用法

```python
# 实现逆序
range(9, -1, -1)
```

### round(num, [int])

返回unm 的小数点位数



### any(iterable)

`any`(*iterable*)

如果 *iterable* 的任一元素为真则返回 `True`。 如果迭代器为空，返回 `False`。 等价于:

```
def any(iterable):
    for element in iterable:
        if element:
            return True
    return False
```

### all(iterable)

`all`(*iterable*)

如果 *iterable* 的所有元素为真（或迭代器为空），返回 `True` 。等价于:

```
def all(iterable):
    for element in iterable:
        if not element:
            return False
    return True
```

### zip(*iterable)

`zip`(**iterables*)

创建一个聚合了来自每个可迭代对象中的元素的迭代器。

返回一个元组的迭代器，其中的第 *i* 个元组包含来自每个参数序列或可迭代对象的第 *i* 个元素。 当所输入可迭代对象中最短的一个被耗尽时，迭代器将停止迭代。 当只有一个可迭代对象参数时，它将返回一个单元组的迭代器。 不带参数时，它将返回一个空迭代器。 相当于:

```
def zip(*iterables):
    # zip('ABCD', 'xy') --> Ax By
    sentinel = object()
    iterators = [iter(it) for it in iterables]
    while iterators:
        result = []
        for it in iterators:
            elem = next(it, sentinel)
            if elem is sentinel:
                return
            result.append(elem)
        yield tuple(result)
```

函数会保证可迭代对象按从左至右的顺序被求值。 使得可以通过 `zip(*[iter(s)]*n)` 这样的惯用形式将一系列数据聚类为长度为 n 的分组。 这将重复 *同样的* 迭代器 `n` 次，以便每个输出的元组具有第 `n` 次调用该迭代器的结果。 它的作用效果就是将输入拆分为长度为 n 的数据块。

当你不用关心较长可迭代对象末尾不匹配的值时，则 [`zip()`](https://docs.python.org/zh-cn/3/library/functions.html#zip) 只须使用长度不相等的输入即可。 如果那些值很重要，则应改用 [`itertools.zip_longest()`](https://docs.python.org/zh-cn/3/library/itertools.html#itertools.zip_longest)。

[`zip()`](https://docs.python.org/zh-cn/3/library/functions.html#zip) 与 `*` 运算符相结合可以用来拆解一个列表:

\>>>

```
>>> x = [1, 2, 3]
>>> y = [4, 5, 6]
>>> zipped = zip(x, y)
>>> list(zipped)
[(1, 4), (2, 5), (3, 6)]
>>> x2, y2 = zip(*zip(x, y))
>>> x == list(x2) and y == list(y2)
True
```

### dict - 关键字参数转字典



```text
In[2]: demo_dict = dict(a=1, b=2, c=3)
In[4]: demo_dict
Out[4]: {'a': 1, 'b': 2, 'c': 3}
```



## hasattr() 判断是否具有某种属性和方法

实际应用场景中 一般使用 `isinstance()` 去判断对象是什么类型的



## dir([object])-返回局部作用域的名称列表

> It gives you a directory of all attributes of an object.
>
> This is not a directory as used in file systems, but the standard usage: a listing of names or data.

Without arguments, return the list of names in the current local scope. With an argument, attempt to return a list of valid attributes for that object.

如果没有实参，则返回当前本地作用域中的名称列表。如果有实参，它会尝试返回该对象的有效属性列表。

## eval(expression[, globals[, locals]]) [ψ](https://docs.python.org/zh-cn/3/library/functions.html#eval)

实参是一个字符串，以及可选的 globals 和 locals。*globals* 实参必须是一个字典。*locals* 可以是任何映射对象。

*expression* 参数会作为一个 Python 表达式（从技术上说是一个条件列表）被解析并求值，并使用 *globals* 和 *locals* 字典作为全局和局部命名空间。 

```python
x = 1
eval('x*y', {'y':1})
```



## `repr`(*object*)[¶](https://docs.python.org/zh-cn/3/library/functions.html#repr)

返回包含一个对象的可打印表示形式的字符串。 对于许多类型来说，该函数会尝试返回的字符串将会与该对象被传递给 [`eval()`](https://docs.python.org/zh-cn/3/library/functions.html#eval) 时所生成的对象具有相同的值，在其他情况下表示形式会是一个括在尖括号中的字符串，其中包含对象类型的名称与通常包括对象名称和地址的附加信息。 类可以通过定义 [`__repr__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__repr__) 方法来控制此函数为它的实例所返回的内容。

```shell
print()
repr(f"a\nb")
Out[46]: "'a\\nb'"
repr 在Python中的表示


eval(repr('a\nb'))
```



## type

> type(object) -> the object's type
>
> type(name, bases, dict, **kwds) -> a new type

type有两种用法, 一种是返回对象的类型, 另一种则是生成一个新的类型



# Python配置和用法

> https://docs.python.org/3/using/index.html

## command line

```shell
python

python -i

python -c

python -m

python -X dev 


```



# **Topics**

> HOWTO



## What's New

### 3.8

赋值表达式

```python
if (a:=len(x)) > 0
```

仅位置参数

```python
def name(positional_or_keyword_parameters, /, keyword_only_parameters):
```

仅关键字参数

```python
def name(positional_only_parameters, /, positional_or_keyword_parameters,
         *, keyword_only_parameters):
```



## 诊断学-Diagnostics

- [Debugging and Profiling](https://docs.python.org/3/library/debug.html)
- [调试和分析](https://docs.python.org/zh-cn/3/library/debug.html)



### cProfile



### profile



### pdb

### pydevd



### trace



### memory_profiler

### pyperformance

- https://pyperformance.readthedocs.io/usage.html#run-benchmarks

## 底层原理

- Python



方法解析次序(Method Resolution Order, MRO)

C3 Linearization(C3线性化算法), 所谓的线性化就是将多重继承的树状结构继承关系实现线性化, 生成一个线性序列.

通过Class.mro()方法来验证继承关系



## yield

`yield`是Python中的一个关键字，用于从一个函数返回一个值而不结束这个函数的执行。使用`yield`的函数被称为生成器（generator）。当函数执行到一个`yield`语句时，它会暂时将执行权交给调用者，同时保存当前的执行状态，以便之后可以从它离开的地方继续执行。这种机制使得`yield`在处理大数据集、实现协程和简化代码中非常有用。

`yield`是Python中非常强大的一个特性，它允许函数在保持当前状态的情况下暂停执行并在需要时恢复，这为处理大数据集、实现协程以及简化某些类型的迭代逻辑提供了很大的便利。通过上述示例，我们可以看到`yield`在实际应用中是如何发挥作用的。



- 特性
    - yield 只能出现在函数中

```python
```







