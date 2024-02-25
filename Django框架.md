# Django框架

`Django`	`Web框架`	`服务器开发`	`后端框架`

类视图	中间件	

官方文档结构:

- [使用教程](https://docs.djangoproject.com/zh-hans/2.2/intro/): 实操一步一步教学如何创建一个Web应用, [快速入门](https://docs.djangoproject.com/zh-hans/2.2/#index-first-steps)
- [专题指南](https://docs.djangoproject.com/zh-hans/2.2/topics/): 关键主题和概念, 并提供有用的背景信息和解释
- [API参考](https://docs.djangoproject.com/zh-hans/2.2/ref/):  API接口 以及 运行机制方面的技术参考, 介绍Django是如何工作的
- [参考指南](https://docs.djangoproject.com/zh-hans/3.0/howto/): 如何做的相关问题
- [操作指南](https://docs.djangoproject.com/zh-hans/2.2/howto/): 关键问题和用例, 更加深入的话题

## 参考资料

- [设计理念](https://docs.djangoproject.com/zh-hans/4.2/misc/design-philosophies/)

## 学习方法

- 某一两个功能吃透
- 1.做过的业务上面实现了哪些功能,并且口头描述清楚,谁调用了谁,前端调用了哪些接口,因为有什么样的功能才需要接口存在,前端可能要发送什么样的数据 ,后端所对应的接口是干什么用的,做了什么事情,返回了什么样的数据,以及相对应的用户是怎么操作的
- 2.为了实现的业务逻辑里面,每个业务逻辑都提出了一种技术, 很多技术已经不再局限于框架的技术了  ,明确使用了什么技术, 使用了什么工具 基本思想 基本原理. 
- 用过的技术点中,解决了什么问题,它的原理是什么东西,有没有可选的方案, 面试中会被经常问到  
- 项目阶段 根据需求实现代码的思路和思想
- 几乎所有的需求都是由前端发起请求, 从后端拿取数据并返回
- [整体思路]多敲代码,两种思路的代码分离(跟着老师的代码, 然后尝试自己敲代码), 
- 如果遇到问题(尝试自己找bug 很锻炼人的能力和思维方式的),首先应该尝试,根据控制台的提示去解决问题, 当超过三分钟还未解决的话应该请教老师帮助
- 写的套路基本上都是差不多的

## 重要说明

- 先定义(创建应用)，并注册（关联安装），才能被使用，比如模型，视图
- 即插即用，注册的应用可以被不同的地方使用
- `name`参数的作用一般是方便被引用, url的name
- 在Django中没有转换器的概念
- 前后端分离特点: 前端发送到后端的所有数据都要进行**校验**  
- 前端传过来的数据必须要校验 防注入 

# Glossary

| EN       | CN     | DESC |
| -------- | ------ | ---- |
| queryset | 查询机 |      |
|          |        |      |
|          |        |      |

- queryset(查询集, 查询结果集):
    - An object representing some set of rows to be fetched from the database.
    - 一个对象: 从数据库中取到的某些行。

# 基础概念

## 说明简介

### 简介

**Django** 一个由Python编写的开源Web应用框架， 采用了MVT的软件设计模式(遵循MVC)，即模型Model，视图View和模板Template。最初被设计用于具有快速开发需求的新闻类站点，目的是要实现简单快捷的网站开发。Django的主要目标是使得开发复杂的、数据库驱动的网站变得简单。Django注重组件的**重用性**和“可插拔性=**即插即用**”，[敏捷开发](https://zh.wikipedia.org/wiki/敏捷开发)和[DRY法则](https://zh.wikipedia.org/wiki/一次且仅一次)（Don't Repeat Yourself）。

Django的**主要目的是简便、快速的开发数据库驱动的网站。**它强调代码复用，多个组件可以很方便的以"插件"形式服务于整个框架，Django有许多功能强大的第三方插件，你甚至可以很方便的开发出自己的工具包。这使得Django具有很强的可扩展性。它还强调快速开发和DRY(DoNotRepeatYourself)原则。

有一种程序设计模式叫**MVC**，其核心思想是**分工、解耦，让不同的代码块之间降低耦合，增强代码的可扩展性和可移植性，实现向后兼容**。

### 框架的作用：

- 用于搭建Web应用程序

- 免去不同Web应用相同代码部分的重复编写， 只需关心web应用核心的业务逻辑

### Web应用的本质

- 接收并解析HTTP请求，获取具体的请求信息
- 处理本次HTTP请求，即完成本次请求的业务逻辑处理
- 构造并返回处理结果——HTTP响应

## Web框架学习方法

- 如何搭建工程程序
  - 工程的组建
  - 工程的配置
  - 路由定义
  - 视图函数定义
- 如何获取请求数据（操作request对象）
- 如何构造响应数据（构造response对象）
- 如何使用中间层
- 框架提供的其他功能组件的使用
  - 数据库
  - 模板
  - 表单
  - admin



## Django运行机制

```shell
python manage.py runserver
```

项目入口文件 manage.py, 当python在执行该文件前会读取项目的包, 所以会首先进入包的 `__init__.py`文件, 

## **项目结构**

```shell
# 部署, 安装文件
# 工程目录
	# 应用目录
		
```



## 基础语义

### 一般用法

- 创建工程
- 创建子应用
  - 注册安装子应用
- 创建视图
  - 定义路由
  - 注册到总路由
- 配置文件

### 子应用的意义

在Web应用中，**通常有一些业务功能模块是在不同的项目中都可以复用的**，故在开发中通常将工程项目拆分为不同的子功能模块，各功能模块间可以保持相对的独立，在其他工程项目中需要用到某个特定功能模块时，可以将该模块代码整体复制过去，达到复用。

### 路由Route

#### 路由定义

Django的主要路由信息定义在工程同名目录下的urls.py文件中，该文件是Django解析路由的入口。

每个子应用为了保持相对独立，可以在各个子应用中定义属于自己的urls.py来保存该应用的路由。然后用主路由文件包含各应用的子路由数据。

除了上述方式外，也可将工程的全部路由信息都定义在主路由文件中，子应用不再设置urls.py。如：

```python
from django.conf.urls import url
from django.contrib import admin
import users.views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^users/index/$', users.views.index)
]
```

#### 路由解析顺序

Django在接收到一个请求时，从主路由文件中的urlpatterns列表中以由上至下的顺序查找对应路由规则，如果发现规则为include包含，则再进入被包含的urls中的urlpatterns列表由上至下进行查询。

值得关注的**由上至下**的顺序，有可能会使上面的路由屏蔽掉下面的路由，带来非预期结果。例如：

```python
urlpatterns = [
    url(r'^say', views.say),
    url(r'^sayhello', views.sayhello),
]
```

即使访问sayhello/路径，预期应该进入sayhello视图执行，但实际优先查找到了say路由规则也与sayhello/路径匹配，实际进入了say视图执行。

提示：

**需要注意定义路由的顺序，避免出现屏蔽效应。**

#### 路由命名

在定义路由的时候，可以为路由命名，方便查找特定视图的具体路径信息。

1) 在使用include函数定义路由时，可以使用namespace参数定义路由的命名空间，如

```python
url(r'^users/', include('users.urls', namespace='users')),
```

命名空间表示，凡是users.urls中定义的路由，均属于namespace指明的users名下。

**作用**: 表示在该应用下的 `name` 不同子应用间可能有相同的 `name`

2) 在定义普通路由时，可以使用name参数指明路由的名字，如

```python
urlpatterns = [
    url(r'^index/$', views.index, name='index'),
    url(r'^say', views.say, name='say'),
]
```

#### reverse反解析

**应用场景: ** 在视图函数中, 根据路由名称来返回具体的路径. 如：

```python
from django.core.urlresolvers import reverse  # 注意导包路径

def index(request):
    return HttpResponse("hello the world!")

def say(request):
    url = reverse('users:index')  # 返回 /users/index/
    print(url)
    return HttpResponse('say')
```

- 对于未指明namespace的，reverse(路由name)
- 对于指明namespace的，reverse(命名空间namespace:路由name)

#### 路径结尾斜线/的说明

Django中定义路由时，通常以斜线/结尾，其好处是用户访问不以斜线/结尾的相同路径时，Django会把用户重定向到以斜线/结尾的路径上，而不会返回404不存在。如

```python
urlpatterns = [
    url(r'^index/$', views.index, name='index'),
]
```

用户访问 **index 或者 index/ 网址，均能访问到index视图**。

**说明：**

虽然路由结尾带/能带来上述好处，但是却违背了HTTP中URL表示资源位置路径的设计理念。

是否结尾带/以所属公司定义风格为准。

## ORM

把数据库对象封装成python对象, 

核心思想: 面向对象的方式操作数据库的表，把类和数据库表做一个映射，根据定义的类自动生成数据库的表

优点: 只需要面向对象编程, 不需要面向数据库编写代码; 对数据库的操作都转化成对类属性和方法的操作, 不用编写各种数据库的sql语句; 实现了数据模型与数据库的解耦, 屏蔽了不同数据库操作上的差异, 通过简单的配置就可以轻松更换数据库, 而不需要修改代码

缺点: 相比直接使用SQL语句操作数据库,有性能上的损失



## 模型层Model



### 模型

模型准确且唯一的描述了数据。它包含您储存的数据的重要字段和行为。一般来说，每一个模型都**映射一张数据库表**。

**工作原理:**

根据字段信息为当前应用创建数据库架构(schema)(生成create table语句)

创建可以与 Question 和 Choice 对象(在数据库中对应为一张表table中的记录)进行交互的 Python 数据库API 

**基础：**

- 每个模型都是一个 Python 的类，这些类继承 [`django.db.models.Model`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/instances/#django.db.models.Model)
- 模型类的每个属性都相当于一个数据库的**字段**。
- 利用这些，Django 提供了一个自动生**成访问数据库的 API**；请参阅 [进行查询](https://docs.djangoproject.com/zh-hans/2.2/topics/db/queries/)。

### 定义模型

模型中最重要且唯一必要的是数据库的**字段fields**定义。字段在类属性中定义。定义字段名时应小心避免使用与 [模型 API](https://docs.djangoproject.com/zh-hans/2.2/ref/models/instances/) 冲突的名称， 如 `clean`, `save`, or `delete` 等。

这个样例定义了一个 `Person` 模型，拥有 `first_name` 和 `last_name`:

```python
from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
```

`first_name` 和 `last_name` 是模型的 [字段](https://docs.djangoproject.com/zh-hans/2.2/topics/db/models/#fields)。每个字段都被指定为一个类属性，并且每个属性映射为一个数据库列。

上面的 `Person` 模型会创建一个如下的数据库表：

```SQL
CREATE TABLE myapp_person (
    "id" serial NOT NULL PRIMARY KEY,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(30) NOT NULL
);
```

一些技术上的说明：

- 该表的名称 `myapp_person` 是自动从某些模型**元数据**(class Meta)中派生出来，但可以被改写。参阅 [Table names](https://docs.djangoproject.com/zh-hans/2.2/ref/models/options/#table-names) 获取更多信息。
- 一个 `id` 字段会被自动添加，但是这种行为可以被改写。请参阅 [自动设置主键](https://docs.djangoproject.com/zh-hans/2.2/topics/db/models/#automatic-primary-key-fields)。
- 本例子中 `创建数据表` 的语法是 PostgreSQL 格式的。值得注意的是，Django 依据你在 [配置文件](https://docs.djangoproject.com/zh-hans/2.2/topics/settings/) 中指定的数据库后端**生成对应的 SQL 语句**。

### 使用模型: 

本质上是在配置文件中注册APP应用, 在设置中添加包含该models.py文件的模块名称(创建的应用名)

```python
INSTALLED_APPS = [
    'users.apps.UsersConfig',
]

```

### 字段选项

每一种字段都需要指定一些特定的参数（参考 [模型字段](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#model-field-types) ）。 例如， [`CharField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.CharField) （以及它的子类）需要接收一个 [`max_length`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.CharField.max_length) 参数，用以指定数据库存储 `VARCHAR` 数据时用的字节数。

一些可选的参数是通用的，可以用于任何字段类型，详情请见 [参考](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#common-model-field-options) ，下面介绍一部分经常用到的通用参数：

- [`null`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.null)

  如果设置为 `True`，当该字段为空时，Django 会将数据库中该字段设置为 `NULL`。默认为 `False` 

- [`blank`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.blank)

  如果设置为 `True`，该字段允许为空。默认为 `False`。注意该选项与 `False` 不同， [`null`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.null) 选项仅仅是数据库层面的设置，然而 [`blank`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.blank) 是涉及表单验证方面。如果一个字段设置为 [`blank=True`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.blank) ，在进行表单验证时，接收的数据该字段值允许为空，而设置为 [`blank=False`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.blank) 时，不允许为空。

- [`choices`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.choices)

  一系列二元组，用作此字段的选项。如果提供了二元组，默认表单小部件是一个选择框，而不是标准文本字段，并将限制给出的选项。一个选项列表：

  ```python
  YEAR_IN_SCHOOL_CHOICES = [
      ('FR', 'Freshman'),
      ('SO', 'Sophomore'),
      ('JR', 'Junior'),
      ('SR', 'Senior'),
      ('GR', 'Graduate'),
  ]
  ```

  > **注解**: 每当 `choices` 的顺序变动时将会创建新的迁移。

  每个二元组的第一个值会储存在数据库中，而第二个值将只会用于在表单中显示。对于一个模型实例，要获取该字段二元组中相对应的第二个值，使用 [`get_FOO_display()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/instances/#django.db.models.Model.get_FOO_display) 方法。例如：

  ```python
  from django.db import models
  
  class Person(models.Model):
      SHIRT_SIZES = (
          ('S', 'Small'),
          ('M', 'Medium'),
          ('L', 'Large'),
      )
      name = models.CharField(max_length=60)
      shirt_size = models.CharField(max_length=1, choices=SHIRT_SIZES)
  ```

  ```python
  >>> p = Person(name="Fred Flintstone", shirt_size="L")
  >>> p.save()
  >>> p.shirt_size
  'L'
  >>> p.get_shirt_size_display()
  'Large'
  ```

- [`default`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.default)

  该字段的默认值。可以是一个值或者是个可调用的对象，如果是个可调用对象，每次实例化模型时都会调用该对象。

- [`help_text`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.help_text)

  额外的“帮助”文本，随表单控件一同显示。即便你的字段未用于表单，它对于生成文档也是很有用的。

- [`primary_key`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.primary_key)

  如果设置为 `True` ，将该字段设置为该模型的主键。在一个模型中，如果你没有对任何一个字段设置 [`primary_key=True`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.primary_key) 选项。 Django 会自动添加一个 [`IntegerField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.IntegerField) 字段，并设置为主键，因此除非你想重写 Django 默认的主键设置行为，你可以不手动设置主键。详情请见 [自动设置主键](https://docs.djangoproject.com/zh-hans/2.2/topics/db/models/#automatic-primary-key-fields) 。主键字段是只可读的，如果你修改一个模型实例的主键并保存，这等同于创建了一个新的模型实例。例如：

  ```python
  from django.db import models
  
  class Fruit(models.Model):
      name = models.CharField(max_length=100, primary_key=True)
  ```

  ```python
  >>> fruit = Fruit.objects.create(name='Apple')
  >>> fruit.name = 'Pear'
  >>> fruit.save()
  >>> Fruit.objects.values_list('name', flat=True)
  <QuerySet ['Apple', 'Pear']>
  ```

  

- [`unique`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.unique)

  如果设置为 `True`，这个字段的值必须在整个表中保持唯一。

再次声明，以上只是一些通用参数的简略描述。你可以在 [通用可选参数参考](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#common-model-field-options) 中找到完整的介绍。

### 字段备注名

除了 [`ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey)， [`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 和 [`OneToOneField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField)，任何字段类型都接收一个可选的位置参数 [`verbose_name`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.verbose_name)，如果未指定该参数值， Django 会自动使用字段的属性名作为该参数值，并且把下划线转换为空格。

在该例中：备注名为 `"person's first name"`:

```python
first_name = models.CharField("person's first name", max_length=30)
```

在该例中：备注名为 `"first name"`:

```python
first_name = models.CharField(max_length=30)
```

[`ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey), [`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) and [`OneToOneField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField) 接收的第一个参数为模型的类名，后面可以添加一个 [`verbose_name`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.verbose_name) 参数：

```python
poll = models.ForeignKey(
    Poll,
    on_delete=models.CASCADE,
    verbose_name="the related poll",
)
sites = models.ManyToManyField(Site, verbose_name="list of sites")
place = models.OneToOneField(
    Place,
    on_delete=models.CASCADE,
    verbose_name="related place",

```

惯例是不将 [`verbose_name`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.verbose_name) 的首字母大写，必要时 Djanog 会自动把首字母转换为大写

### 字段命名限制

Django对模型的字段名有一些限制: 

不能是python的保留字(关键字), 不能包含连续多个下划线, 不能以下划线结尾.

**原因**: Django查询语法的工作方式用到了连续下划线

**不推荐**: SQL保留字，例如 `join`， `where` 或 `select`， *是* 可以被用在模型字段名当中的，因为 Django 在对底层的 SQL 查询当中清洗了所有的数据库表名和字段名，通过使用特定数据库引擎的引用语法。

### Meta选项

使用内部 `Meta类` 来给模型赋予元数据，就像：

```
from django.db import models

class Ox(models.Model):
    horn_length = models.IntegerField()

    class Meta:
        ordering = ["horn_length"]
        verbose_name_plural = "oxen"
```

模型的元数据即“所有不是字段的东西”，比如排序选项（ [`ordering`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/options/#django.db.models.Options.ordering) ），数据库表名（ [`db_table`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/options/#django.db.models.Options.db_table) ），或是阅读友好的单复数名（ [`verbose_name`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/options/#django.db.models.Options.verbose_name) 和 [`verbose_name_plural`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/options/#django.db.models.Options.verbose_name_plural) ）。这些都不是必须的，并且在模型当中添加 `Meta类` 也完全是可选的。

在 [模型可选参数参考](https://docs.djangoproject.com/zh-hans/2.2/ref/models/options/) 中列出了 `Meta` 可使用的全部选项。

### 关联关系 TODO 

显然，关系型数据库的强大之处在于各表之间的关联关系。 Django 提供了定义三种最常见的数据库关联关系的方法：**多对一**，**多对多**，**一对一**。

#### 多对一关联 - ForeignKey

定义一个多对一的关联关系，使用 [`django.db.models.ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey) 类。就和其它 [`Field`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field) 字段类型一样，只需要在你模型中添加一个值为该类的属性。

[`ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey) 类需要添加一个位置参数，即你想要关联的模型类名。

例如，如果一个 `Car` 模型有一个制造者 `Manufacturer` --就是说一个 `Manufacturer` 制造许多辆车，但是每辆车都仅有一个制造者-- 那么使用下面的方法定义这个关系：

```
from django.db import models

class Manufacturer(models.Model):
    # ...
    pass

class Car(models.Model):
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
    # ...
```

你也可以创建 [自关联关系](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#recursive-relationships) （一个模型与它本身有多对一的关系）和 [与未定义的模型间的关联关系](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#lazy-relationships) ；详情请见 [模型字段参考](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#ref-foreignkey) 。

建议设置 [`ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey) 字段名（上例中的 `manufacturer` ）为想要关联的模型名，但是你也可以随意设置为你想要的名称，例如：

```
class Car(models.Model):
    company_that_makes_it = models.ForeignKey(
        Manufacturer,
        on_delete=models.CASCADE,
    )
    # ...
```

**参见**: 

[`ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey) 字段还可以接收一些其他的参数，详见 [模型字段参考](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#foreign-key-arguments) ，这些可选的参数可以更深入的规定关联关系的具体实现。

关于反向关联对象的细节，参见 [反向关联例子](https://docs.djangoproject.com/zh-hans/2.2/topics/db/queries/#backwards-related-objects)。

如要查看相关示例代码，详见 [模型多对一关联实例](https://docs.djangoproject.com/zh-hans/2.2/topics/db/examples/many_to_one/) 。

#### 多对多关联 - ManyToManyField

定义一个多对多的关联关系，使用 [`django.db.models.ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 类。就和其他 [`Field`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field) 字段类型一样，只需要在你模型中添加一个值为该类的属性。

[`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 类需要添加一个位置参数，即你想要关联的模型类名。

例如：如果 `Pizza` 含有多种 `Topping` （配料） -- 也就是一种 `Topping` 可能存在于多个 `Pizza` 中，并且每个 `Pizza` 含有多种 `Topping` --那么可以这样表示这种关系：

```
from django.db import models

class Topping(models.Model):
    # ...
    pass

class Pizza(models.Model):
    # ...
    toppings = models.ManyToManyField(Topping)
```

和 [`ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey) 类一样，你也可以创建 [自关联关系](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#recursive-relationships) （一个对象与他本身有着多对多的关系）和 [与未定义的模型的关系](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#lazy-relationships) 。

建议设置 [`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 字段名（上例中的 `toppings` ）为一个复数名词，表示所要光联的模型对象的集合。

对于多对多光联关系的两个模型，可以在任何一个模型中添加 [`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 字段，但只能选择一个模型设置该字段，即不能同时在两模型中添加该字段。

一般来讲，应该把 [`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 实例放到需要在表单中被编辑的对象中。在之前的例子中， `toppings` 被放在 `Pizza` 当中（而不是 `Topping` 中有指向 `pizzas` 的 [`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 实例 ）因为相较于配料被放在不同的披萨当中，披萨当中有很多种配料更加符合常理。按照先前说的，在编辑 `Pizza` 的表单时用户可以选择多种配料。

参见

如要查看完整示例代码，详见 [模型多对多关联实例](https://docs.djangoproject.com/zh-hans/2.2/topics/db/examples/many_to_many/)。

[`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 字段也接受一些 [模型字段参考](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#manytomany-arguments) 中介绍的参数。这些可选的参数可以更深入地规定关联关系的具体实现。

#### 一对一关联 - OneToOneField

使用 [`OneToOneField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField) 来定义一对一关系。就像使用其他类型的 `Field` 一样：在模型属性中包含它。

当一个对象以某种方式“继承”另一个对象时，这对该对象的主键非常有用。

[`OneToOneField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField) 需要一个位置参数：与模型相关的类。

例如，当你要建立一个有关“位置”信息的数据库时，你可能会包含通常的地址，电话等字段。接着，如果你想接着建立一个关于关于餐厅的数据库，除了将位置数据库当中的字段复制到 `Restaurant` 模型，你也可以将一个指向 `Place` [`OneToOneField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField) 放到 `Restaurant` 当中（因为餐厅“是一个”地点）；事实上，在处理这样的情况时最好使用 [模型继承](https://docs.djangoproject.com/zh-hans/2.2/topics/db/models/#model-inheritance) ，它隐含的包括了一个一对一关系。

和 [`ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey) 一样，可以创建 [自关联关系](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#recursive-relationships) 也可以创建 [与尚未定义的模型的关系](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#lazy-relationships) 。

> **参见**: 点击文档 [一对一关联模型实例](https://docs.djangoproject.com/zh-hans/2.2/topics/db/examples/one_to_one/) 来查看完整的例子。

[`OneToOneField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField) 字段还接受一个可选的 [`parent_link`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField.parent_link) 参数。

[`OneToOneField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField) 类通常自动的成为模型的主键，这条规则现在不再使用了（然而你可以手动指定 [`primary_key`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.Field.primary_key) 参数）。因此，现在可以在单个模型当中指定多个 [`OneToOneField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.OneToOneField) 字段。

## 执行查询

一旦创建 [数据模型](https://docs.djangoproject.com/zh-hans/2.2/topics/db/models/) 后，Django 自动给予你一套数据库抽象 API，允许你创建，检索，更新和删除对象。本页介绍如何使用这些 API。参考 [数据模型参考](https://docs.djangoproject.com/zh-hans/2.2/ref/models/) 获取所有查询选项的完整细节。

在本指南中（以及相关参考资料中），我们将引用以下模型，这些模型包含了一个 Webblog 应用：

```python
from django.db import models

class Blog(models.Model):  # 博客
    name = models.CharField(max_length=100)
    tagline = models.TextField()

    def __str__(self):
        return self.name

class Author(models.Model):  # 作者
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Entry(models.Model):  # 条目
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    headline = models.CharField(max_length=255)
    body_text = models.TextField()
    pub_date = models.DateField()
    mod_date = models.DateField()
    authors = models.ManyToManyField(Author)
    n_comments = models.IntegerField()
    n_pingbacks = models.IntegerField()
    rating = models.IntegerField()

    def __str__(self):
        return self.headline
```

### 创建对象 - **增**:insert 两种方法

为了用 Python 对象展示数据表对象，Django 使用了一套直观的系统：**一个模型类代表一张数据表，一个模型类的实例代表数据库表中的一行记录**。

#### 方法一

要创建一个对象，用关键字参数初始化它，然后调用 [`save()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/instances/#django.db.models.Model.save) 将其存入数据库。

假设模型都位于文件 `mysite/blog/models.py` 中，这是一个例子:

```
>>> from blog.models import Blog
>>> b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
>>> b.save()
```

这在幕后执行了 **`INSERT` SQL 语句**。Django 在你显式调用 [`save()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/instances/#django.db.models.Model.save) 才操作数据库。

[`save()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/instances/#django.db.models.Model.save) 方法没有返回值。

#### 方法二

要一步创建并保存一个对象，使用 [`create()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet.create) 方法。

```python
p = Person.objects.create(first_name="Bruce", last_name="Springsteen")

# 这和方法一的这种方式等价
p = Person(first_name="Bruce", last_name="Springsteen")
p.save(force_insert=True)
```

### 修改对象 - **改**: update

要将修改保存至数据库中已有的某个对象，使用 [`save()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/instances/#django.db.models.Model.save)。

有一个已被存入数据库中的 `Blog` 实例 `b5`，本例将其改名，并在数据库中更新其记录:

```
# 直接选择实例的属性进行修改
>>> b5.name = 'New name'
>>> b5.save()
```

这在幕后执行了 **`UPDATE` SQL 语句**。Django 在你显示调用 [`save()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/instances/#django.db.models.Model.save) 后才操作数据库。

### 保存 `ForeignKey` 和 `ManyToManyField` 字段 **更新外键和多对多**

更新 [`ForeignKey`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ForeignKey) 字段的方式与保存普通字段的方式相同——只需将正确类型的实例分配给相关字段。本例为 `Entry` 类的实例 `entry` 更新了 `blog` 属性，假设 `Entry` 和 `Blog` 的实例均已保存在数据库中（因此能在下面检索它们）:

```
>>> from blog.models import Blog, Entry
>>> entry = Entry.objects.get(pk=1)
>>> cheese_blog = Blog.objects.get(name="Cheddar Talk")
>>> entry.blog = cheese_blog
>>> entry.save()
```

更新 [`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 字段**有点不同**——在字段上使用 [`add()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/relations/#django.db.models.fields.related.RelatedManager.add) 方法为关联关系添加一条记录。本例将 `Author` 实例 `joe` 添加至 `entry` 对象:

```
>>> from blog.models import Author
>>> joe = Author.objects.create(name="Joe")
>>> entry.authors.add(joe)
```

要一次添加多行记录至 [`ManyToManyField`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/fields/#django.db.models.ManyToManyField) 字段，在一次调用 [`add()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/relations/#django.db.models.fields.related.RelatedManager.add) 时传入多个参数，像这样:

```
>>> john = Author.objects.create(name="John")
>>> paul = Author.objects.create(name="Paul")
>>> george = Author.objects.create(name="George")
>>> ringo = Author.objects.create(name="Ringo")
>>> entry.authors.add(john, paul, george, ringo)
```

Django 会在添加或指定错误类型的对象时报错。

### 检索对象 - **查**: select

要从数据库检索对象，要通过模型类的 [`Manager`](https://docs.djangoproject.com/zh-hans/2.2/topics/db/managers/#django.db.models.Manager) 构建一个 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) **查询集**。

一个 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 代表来自数据库中对象的一个集合。它可以有 0 个，1 个或者多个 *filters*. Filters，可以根据给定参数缩小查询结果量。

在 SQL 的层面上， **`QuerySet` 对应 `SELECT` 语句**，**而过滤器对应类似 `WHERE` 或 `LIMIT` 的限制子句。**

你能通过模型的 [`Manager`](https://docs.djangoproject.com/zh-hans/2.2/topics/db/managers/#django.db.models.Manager) 获取 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)。每个模型至少有一个 [`Manager`](https://docs.djangoproject.com/zh-hans/2.2/topics/db/managers/#django.db.models.Manager)，默认名称是 [`objects`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/class/#django.db.models.Model.objects)。像这样直接通过模型类使用它:

```python
>>> Blog.objects
<django.db.models.manager.Manager object at ...>
>>> b = Blog(name='Foo', tagline='Bar')
>>> b.objects
Traceback:
    ...
AttributeError: "Manager isn't accessible via Blog instances."
```

**注解**

`Managers` **只能通过模型类访问**，而不是通过模型实例，目的是强制分离 “表级” 操作和 “行级” 操作。

[`Manager`](https://docs.djangoproject.com/zh-hans/2.2/topics/db/managers/#django.db.models.Manager) 是模型的 `QuerySets` 主要来源。例如 `Blog.objects.all()` 返回了一个 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，后者包含了数据库中所有的 `Blog` 对象

### 检索全部对象

从数据库中检索对象最简单的方式就是检索全部。为此，在 [`Manager`](https://docs.djangoproject.com/zh-hans/2.2/topics/db/managers/#django.db.models.Manager) 上调用 [`all()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet.all) 方法:

```
>>> all_entries = Entry.objects.all()
```

方法 [`all()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet.all) 返回了一个包含数据库中所有对象的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 对象。

### 通过过滤器检索指定对象

[`all()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet.all) 返回的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 包含了数据表中所有的对象。虽然，大多数情况下，你只需要完整对象集合的一个子集。

要创建一个这样的子集，你需要通过添加过滤条件精炼原始 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)。两种最常见的精炼 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 的方式是：

- `filter(**kwargs)`

  返回一个新的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，包含的对象 **满足** 给定查询参数。

- `exclude(**kwargs)`

  返回一个新的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，包含的对象**不满足** 给定查询参数。

查询参数（`**kwargs`）应该符合下面的 [Field lookups](https://docs.djangoproject.com/zh-hans/2.2/topics/db/queries/#field-lookups) 的要求。

例如，要包含获取 2006 年的博客条目（entries blog）的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，像这样使用 [`filter()`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet.filter):

```python
Entry.objects.filter(pub_date__year=2006)
```

通过默认管理器类也一样:

```python
Entry.objects.all().filter(pub_date__year=2006)
```

### 链式过滤器

逐层筛选, 精炼 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 的结果本身还是一个 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，所以能串联精炼过程。例子:

```
>>> Entry.objects.filter(
...     headline__startswith='What'
... ).exclude(
...     pub_date__gte=datetime.date.today()
... ).filter(
...     pub_date__gte=datetime.date(2005, 1, 30)
... )
```

这个先获取包含数据库所有条目（entry）的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，然后排除一些，再进入另一个过滤器。最终的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 包含标题以 "What" 开头的，发布日期介于 2005 年 1 月 30 日与今天之间的所有条目。

### 每个 `QuerySet` 都是唯一的

每次精炼一个 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，你就会获得一个全新的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，后者与前者毫无关联。**每次精炼都会创建一个单独的、不同的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，能被存储，使用和复用。**

举例：

```
>>> q1 = Entry.objects.filter(headline__startswith="What")
>>> q2 = q1.exclude(pub_date__gte=datetime.date.today())
>>> q3 = q1.filter(pub_date__gte=datetime.date.today())
```

这三个 `QuerySets` 是独立的。第一个是基础 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)，包含了所有标题以 "What" 开头的条目。第二个是第一个的子集，带有额外条件，排除了 `pub_date` 是今天和今天之后的所有记录。第三个是第一个的子集，带有额外条件，只筛选 `pub_date` 是今天或未来的所有记录。最初的 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) (`q1`) 不受筛选操作影响。

#### `QuerySet` 是惰性的 - 不会立即执行

`QuerySet` 是惰性的 —— 创建 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 并不会引发任何数据库活动。你可以将一整天的过滤器都堆积在一起，Django 只会在 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 被 *计算* 时执行查询操作。来瞄一眼这个例子:

```
>>> q = Entry.objects.filter(headline__startswith="What")
>>> q = q.filter(pub_date__lte=datetime.date.today())
>>> q = q.exclude(body_text__icontains="food")
>>> print(q)
```

虽然这看起来像是三次数据库操作，实际上只在最后一行 (`print(q)`) 做了一次。一般来说， [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet) 的结果直到你 “要使用” 时才会从数据库中拿出。当你要用时，才通过数据库 *计算*出 [`QuerySet`](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#django.db.models.query.QuerySet)。关于何时才真的执行计算的更多细节，参考 [When QuerySets are evaluated](https://docs.djangoproject.com/zh-hans/2.2/ref/models/querysets/#when-querysets-are-evaluated)。

## 迁移 - Migrations

### [迁移概述](https://docs.djangoproject.com/zh-hans/2.2/topics/migrations/)

迁移的作用: 	迁移命令用于使你的模型类和实例对象的改动生效到数据库表中. 这个迁移过程被设计成自动生成的, 但是你应该知道, 当执行迁移命令时, 也许会遇见一些常见的问题. 

### 常用命令

- migrate: **执行迁移命令, 同步到数据库中**, 让应用和未应用的迁移生效, (生成和修改表纲目)
- makemigrations: **创建迁移命令, 生成迁移文件**,当更改模型类时, 该被用来创建新的迁移命令

## 地址URL

### 为URL添加命名空间 [[L](https://docs.djangoproject.com/zh-hans/3.0/intro/tutorial03/#namespacing-url-names)]

## 视图层View

Django 具有 “视图” 的概念，负责**处理用户的请求并返回响应**。

**作用: **

实现并处理业务逻辑

返回一个包含被请求页面内容的HttpResponse对象,或者抛出异常 比如http404.



## 模板层Template

模板层提供了一个对设计者友好的语法用于**渲染向用户呈现的信息**。

## 表单Form

Django 提供了一个丰富的框架来帮助创建表单和处理表单数据。

## 请求HttpRequest

### URL调度器

URLconf  - urls模块, 一个python模块 URL dispather , `URLconf` = 'url configuration '

#### URLconf查找机制

请求的URL被看做是一个普通的Python 字符串， URLconf在其上查找并匹配。进行匹配时将不包括GET或POST请求方式的参数以及域名。

例如， `https://www.example.com/myapp/` 请求中，URLconf 将查找 `myapp/`

在 `https://www.example.com/myapp/?page=3` 请求中，URLconf 仍将查找 `myapp/`。

URLconf 不检查使用了哪种请求方法。换句话讲，所有的请求方法 —— 即，对同一个URL的无论是 `POST请求` 、 `GET请求` 、或 `HEAD` 请求方法等等 —— 都将路由到相同的函数。

#### 指定视图参数的默认值

有一个方便的小技巧是指定视图参数的默认值。 下面是一个URLconf 和视图的示例：

```python
# URLconf
from django.urls import path

from . import views

urlpatterns = [
    path('blog/', views.page),
    path('blog/page<int:num>/', views.page),
]

# View (in blog/views.py)
def page(request, num=1):
    # Output the appropriate page of blog entries, according to num.
    ...
```

在上面的例子中, 两个URL模式均指向相同的视图 - `views.page`  , 但是第一个模式没有从URL中捕获任何参数, 如果第一个模式匹配了传入的URL, `page()` 函数将会调用默认的参数 `num=1`, 如果第二个模式匹配了传入的URL, `page()`函数将会使用 `num` 参数所捕获的值. 

#### 性能

每个在 `urlpatterns` 的正则表达式会在被存取时立即编译, 这使得系统响应非常的迅速

#### 错误处理

当django不能匹配请求的URL或者当一个异常抛出时, Django会调用一个 `error-handling` 视图

这些情况发生时使用的视图通过4个变量指定。它们的默认值应该满足大部分项目，但是通过赋值给它们以进一步的自定义也是可以的。

完整的细节请参见 [自定义错误视图](https://docs.djangoproject.com/zh-hans/2.2/topics/http/views/#customizing-error-views) 。

这些值得在你的根URLconf 中设置。在其它URLconf 中设置这些变量将不会生效果。

它们的值必须是可调用的或者是表示视图的Python 完整导入路径的字符串，可以方便地调用它们来处理错误情况。

这些值是：

- `handler400` -- 查看 [`django.conf.urls.handler400`](https://docs.djangoproject.com/zh-hans/2.2/ref/urls/#django.conf.urls.handler400).
- `handler403` -- 查看 [`django.conf.urls.handler403`](https://docs.djangoproject.com/zh-hans/2.2/ref/urls/#django.conf.urls.handler403).
- `handler404` -- 查看 [`django.conf.urls.handler404`](https://docs.djangoproject.com/zh-hans/2.2/ref/urls/#django.conf.urls.handler404).
- `handler500` -- 查看 [`django.conf.urls.handler500`](https://docs.djangoproject.com/zh-hans/2.2/ref/urls/#django.conf.urls.handler500).

#### 包含其它的URLconfs

在任何时候，你的 `urlpatterns` 都可以 "include" 其它URLconf 模块。这实际上将一部分URL 放置于其它URL 下面。

意思是让在该类规则到 被包含的模块中去匹配视图(进行两重匹配)

例如，下面是URLconf [Django website](https://www.djangoproject.com/) 自己的URLconf 中一个片段。它包含许多其它URLconf：

```python
from django.urls import include, path

urlpatterns = [
    # ... snip ...
    path('community/', include('aggregator.urls')),
    path('contact/', include('contact.urls')),
    # ... snip ...
]
```

无论何时Django遇到 `include()` 函数后, 它都会截取剩余的URL部分字符串去匹配 `include`中的URLconf 作进一步的匹配. 

另一种情形是, include函数中指定一个包含列表的 `path()` 实例. 如下:

```python
extra_patterns = [
    path('reports/', credit_views.report),
    path('reports/<int:id>/', credit_views.report),
    path('charge/', credit_views.charge),
]

urlpatterns = [
    path('', main_views.homepage),
    path('help/', include('apps.help.urls')),
    path('credit/', include(extra_patterns)),  # 指定列表

```

在这个例子中， `/credit/reports/` URL将被 `credit.views.report()` 这个Django 视图处理。

这种方法可以用来去除URLconf 中的冗余，其中某个模式前缀被重复使用。例如，考虑这个URLconf:

```
from django.urls import path
from . import views

urlpatterns = [
    path('<page_slug>-<page_id>/history/', views.history),
    path('<page_slug>-<page_id>/edit/', views.edit),
    path('<page_slug>-<page_id>/discuss/', views.discuss),
    path('<page_slug>-<page_id>/permissions/', views.permissions),
]
```

我们可以改进它，通过只声明共同的路径前缀一次并将后面的部分分组:

```
from django.urls import include, path
from . import views

urlpatterns = [
    path('<page_slug>-<page_id>/', include([
        path('history/', views.history),
        path('edit/', views.edit),
        path('discuss/', views.discuss),
        path('permissions/', views.permissions),
    ])),
]
```



### 捕获的参数

被包含的URLconf 会收到来自父URLconf 捕获的任何参数，所以下面的例子是合法的:

```python
# In settings/urls/main.py
from django.urls import include, path

urlpatterns = [
    path('<username>/blog/', include('foo.urls.blog')),
]

# In foo/urls/blog.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog.index),
    path('archive/', views.blog.archive),
]
```

在上面的例子中，捕获的 `"username"` 变量将被如期传递给include()指向的URLconf。

### 编写视图 - Writing views

A view function, or *view* for short, is simply a Python function that takes a Web request and returns a Web response. 

视图函数式一个用于拿到网络请求并返回网络响应的Python函数. 

## 响应HttpResponse



视图在接收请求并处理后，必须返回HttpResponse对象或子对象。

HttpRequest对象由Django创建，HttpResponse对象由开发人员创建。

## 类视图

解决应用场景: 一个视图对应的路径提供了多种不同HTTP请求方式的支持, 需要在一个函数中编写不同的业务逻辑

不同的请求方式以类中的不同方法来区别定义. 

**特点: **
代码可读性

类视图相对于函数视图有更高的复用性

## **中间件**-[Middleware](https://docs.djangoproject.com/en/3.2/ref/middleware/)

Middleware is a framework of hooks into Django's request/response processing. It's a light, low-level "plugin" system for globally altering Django's input or output.

Each middleware component is responsible for doing some specific function. For example, Django includes a middleware component, [`AuthenticationMiddleware`](https://docs.djangoproject.com/zh-hans/3.0/ref/middleware/#django.contrib.auth.middleware.AuthenticationMiddleware), that associates users with requests using sessions.

This document explains how middleware works, how you activate middleware, and how to write your own middleware. Django ships with some built-in middleware you can use right out of the box. They're documented in the [built-in middleware reference](https://docs.djangoproject.com/zh-hans/3.0/ref/middleware/).

Django中的中间件是一个轻量级、底层的插件系统，可以介入Django的请求和响应处理过程，修改Django的输入或输出。中间件的设计为开发者提供了一种无侵入式的开发方式，增强了Django框架的健壮性。

我们可以使用中间件，在Django处理视图的不同阶段对输入或输出进行干预。

#### 中间件的定义方法

定义一个中间件**工厂函数**，然后返回一个可以被调用的中间件。

中间件工厂函数需要接收一个可以调用的get_response对象。

返回的中间件也是一个可以被调用的对象，并且像视图一样需要接收一个request对象参数，返回一个response对象。

```python
def simple_middleware(get_response):
    # 此处编写的代码仅在Django第一次配置和初始化的时候执行一次。

    def middleware(request):
        # 此处编写的代码会在每个请求处理视图前被调用。

        response = get_response(request)

        # 此处编写的代码会在每个请求处理视图之后被调用。

        return response

    return middleware
```

例如，在users应用中新建一个middleware.py文件，

```python
def my_middleware(get_response):
    print('init 被调用')
    def middleware(request):
        print('before request 被调用')
        response = get_response(request)
        print('after response 被调用')
        return response
    return middleware
```

**定义好中间件后，需要在settings.py 文件中添加注册中间件**

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'users.middleware.my_middleware',  # 添加中间件
]
```

定义一个视图进行测试

```python
def demo_view(request):
    print('view 视图被调用')
    return HttpResponse('OK')
```

执行结果



**注意：Django运行在调试模式下，中间件init部分有可能被调用两次。**

### 多个中间件的执行顺序

- 在请求视图被处理**前**，中间件**由上至下**依次执行
- 在请求视图被处理**后**，中间件**由下至上**依次执行

示例：

定义两个中间件

```python
def my_middleware(get_response):
    print('init 被调用')
    def middleware(request):
        print('before request 被调用')
        response = get_response(request)
        print('after response 被调用')
        return response
    return middleware

def my_middleware2(get_response):
    print('init2 被调用')
    def middleware(request):
        print('before request 2 被调用')
        response = get_response(request)
        print('after response 2 被调用')
        return response
    return middleware
```

注册添加两个中间件

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'users.middleware.my_middleware',  # 添加
    'users.middleware.my_middleware2',  # 添加
]
```

执行结果

```python
init2 被调用
init 被调用
before request 被调用
before request 2 被调用
view 视图被调用
after response 2 被调用
after response 被调用
```

### 创建 / 修改模型

修改模型的三个步骤

- 编辑models.py文件, 改变模型
- 运行 `python manage.py makemigrations`  为模型的改变**生成**迁移文件
- 运行 `python manage.py migrate` 来**应用**数据库迁移

### 序列化器Serializers

基本功能和作用: ***序列化\*** —— 将程序中的一个数据结构类型转换为其他格式（字典、JSON、XML等），例如将Django中的模型类对象装换为JSON字符串，这个转换过程称为序列化。即后端数据转给前端。

1. 首先我们为什么需要把数据序列化？
   我们可能会有这样的需求：

- 把内存中的各种数据类型保存到本地进行数据持久化
- 把内存中的各种数据类型通过网络传送给其他机器或者客户端

<img src="https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426194244.png" alt="img" style="zoom: 33%;" />

数据序列化工具

序列化器允许复杂的数据(比如: 查询集QuerySet, 模型实例model instance)**转换**成本地的Python数据类型, 使其能被轻松地渲染成 `JSON` , `XML` , 或者其他内容类型. 

**作用**：A. 将非Python数据类型，**转换**为Python支持的**数据**类型. 为模型提供一个序列化器 B. **校验数据**

序列化器同时也提供反序列化， 在验证传入的数据后，允许被解析的数据转换回原来的复杂数据

> 数据转换 联想记忆 数据格式化

REST framework中的serializers与Django的`Form`和`ModelForm`类非常像。我们提供了一个`Serializer`类，提供了强大的通用方法来控制响应的输出，以及一个`ModelSerializer`类，它为用于创建处理模型实例和查询集的序列化程序提供了有用的快捷实现方式。

#### 声明Serializer

#### 创建Serializer对象

#### 序列化使用

基本逻辑：查询模型实例对象>>构造序列化对象>>获取序列化数据

### REST视图

**Request对象的数据是自动根据前端发送数据的格式进行解析之后的结果。**

**作用**: 无论前端发送的哪种格式的数据, 我们都可以以统一的读取数据 

### MVVM设计模式(前端)

MVVM 是 Model-View-ViewModel 的缩写.

Model: 代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。我们可以把Model称为数据层，因为它仅仅关注数据本身，不关心任何行为

View: 用户操作界面。当ViewModel对Model进行更新的时候，会通过数据绑定更新到View

ViewModel： 业务逻辑层，View需要什么数据，ViewModel要提供这个数据；View有某些操作，ViewModel就要响应这些操作，所以可以说它是Model for View.

**特点**:  MVVM模式简化了界面与业务的依赖，解决了数据频繁更新。MVVM 在使用当中，利用双向绑定技术，使得 Model 变化时，ViewModel 会自动更新，而 ViewModel 变化时，View 也会自动变化

MVVM是前端视图层的分层开发思想. VM是MVVM思想的核心, VM是V和M的调度者

## 请求

### 请求参数

利用HTTP协议向服务器传参的四种途径

- 提取URL的特定部分, 可以再服务器端的路由中用正则表达式截取(未命名参数和命名参数)
- 查询字符串(query string)
- 请求体(body)中发送的数据, 表单数据 / json / xml
- HTTP报文的请求头(header)

#### URL路径参数

在定义路由URL时，可以使用正则表达式提取参数的方法从URL中获取请求参数，Django会将提取的参数直接传递到视图的传入参数中。

**Django中直接以括号 `()` 标识符来提取数据**

**原理**: 直接根据正则表达式规则来提取数据

而不是Flask中的转换器convert

- **未命名参数** 按定义顺序传递

```python
url(r'^weather/([a-z]+)/(\d{4})/$', views.weather),

def weather(request, city, year):
    print('city=%s' % city)
    print('year=%s' % year)
    return HttpResponse('OK')
```

- **命名参数** 按名字传递

```python
url(r'^weather/(?P<city>[a-z]+)/(?P<year>\d{4})/$', views.weather),

def weather(request, year, city):
    print('city=%s' % city)
    print('year=%s' % year)
    return HttpResponse('OK')
```

#### QueryDict对象

**个人理解**: URL路径中的请求参数, GET方式发出的查询字符串参数,发送给服务器后,会封装成QueryDict对象, 供程序员调用

Django中独立封装的一个查询字符串对象, 好处是支持一个键对应多个值的情况(类似链表 | 一个键对应一个列表)

URL路径中的查询字符串参数通过request.GET 和request.POST方式均能访问

定义在django.http.QueryDict

HttpRequest对象的属性GET、POST都是QueryDict类型的对象

与python字典不同，QueryDict类型的对象用来处理同一个键带有多个值的情况

- 方法get()：根据键获取值

  如果一个键同时拥有多个值将获取最后一个值

  如果键不存在则返回None值，可以设置默认值进行后续处理

  ```python
  dict.get('键',默认值)
  可简写为
  dict['键']
  ```

- 方法getlist()：根据键获取值，值以列表返回，可以获取指定键的所有值

  如果键不存在则返回空列表[]，可以设置默认值进行后续处理

  ```python
  dict.getlist('键',默认值)
  ```

#### 查询字符串Query String

获取请求路径中的查询字符串参数（形如?k1=v1&k2=v2），可以通过request.GET属性获取，返回QueryDict对象。

```python
# /qs/?a=1&b=2&a=3

def qs(request):
    a = request.GET.get('a')
    b = request.GET.get('b')
    alist = request.GET.getlist('a')
    print(a)  # 3
    print(b)  # 2
    print(alist)  # ['1', '3']
    return HttpResponse('OK')
```

**重要：查询字符串不区分请求方式，即假使客户端进行POST方式的请求，依然可以通过request.GET获取请求中的查询字符串数据。**

#### 请求体

请求体数据格式不固定，可以是表单类型字符串(form)，可以是JSON字符串(js | ajax)，可以是XML字符串，应区别对待。

可以发送请求体数据的请求方式有**POST**、**PUT**、**PATCH**、**DELETE**。

**Django默认开启了CSRF防护**，会对上述请求方式进行CSRF防护验证，在测试时可以关闭CSRF防护机制，方法为在settings.py文件中**注释掉CSRF中间件**

##### 表单类型Form Data

前端发送的表单类型的请求体数据，可以通过request.POST属性获取，返回QueryDict对象。

```python
def get_body(request):
    a = request.POST.get('a')
    b = request.POST.get('b')
    alist = request.POST.getlist('a')
    print(a)
    print(b)
    print(alist)
    return HttpResponse('OK')
```

**重要：只要请求体的数据是表单类型，无论是哪种请求方式（POST、PUT、PATCH、DELETE），都是使用request.POST来获取请求体的表单数据。**

##### 非表单类型 Non-Form Data

非表单类型的请求体数据，**Django无法自动解析**，可以通过**request.body**属性获取最原始的请求体数据，自己按照请求体格式（JSON、XML等）进行解析。**request.body返回bytes类型。**

### 请求头

可以通过request.META属性获取请求头headers中的数据, request.META为字典类型

常见的请求头:

- `CONTENT_LENGTH` – The length of the request body (as a string).
- `CONTENT_TYPE` – The MIME type of the request body.
- `HTTP_ACCEPT` – Acceptable content types for the response.
- `HTTP_ACCEPT_ENCODING` – Acceptable encodings for the response.
- `HTTP_ACCEPT_LANGUAGE` – Acceptable languages for the response.
- `HTTP_HOST` – The HTTP Host header sent by the client.
- `HTTP_REFERER` – The referring page, if any.
- `HTTP_USER_AGENT` – The client’s user-agent string.
- `QUERY_STRING` – The query string, as a single (unparsed) string.
- `REMOTE_ADDR` – The IP address of the client.
- `REMOTE_HOST` – The hostname of the client.
- `REMOTE_USER` – The user authenticated by the Web server, if any.
- `REQUEST_METHOD` – A string such as `"GET"` or `"POST"`.
- `SERVER_NAME` – The hostname of the server.
- `SERVER_PORT` – The port of the server (as a string).

用法:

```python
def get_headers(request):
    print(request.META['CONTENT_TYPE'])
    return HttpResponse('OK')
```

### 其他常用HttpRequest对象属性

- **method**：一个字符串，表示请求使用的HTTP方法，常用值包括：'GET'、'POST'。
- **user：请求的用户对象。**
- path：一个字符串，表示请求的页面的完整路径，不包含域名和参数部分。
- encoding：一个字符串，表示提交的数据的编码方式。
  - 如果为None则表示使用浏览器的默认设置，一般为utf-8。
  - 这个属性是可写的，可以通过修改它来修改访问表单数据使用的编码，接下来对属性的任何访问将使用新的encoding值。

- FILES：一个类似于字典的对象，包含所有的上传文件。

## 响应

视图在接收请求并处理后, 必须返回HttpResponse对象或子对象. HttpRequest对象由Django创建,HttpResponse对象由开发人员创建. 

### HttpResponse

可以使用**django.http.HttpResponse**来构造响应对象。

```python
HttpResponse(content=响应体, content_type=响应体数据类型, status=状态码)
```

也可通过HttpResponse**对象属性方式**来设置响应体、响应体数据类型、状态码：

- content：表示返回的内容。
- status_code：返回的HTTP响应状态码。
- content_type：指定返回数据的的MIME类型。

响应头可以直接将HttpResponse对象当做字典进行响应头键值对的设置：

```python
response = HttpResponse()
response['Itcast'] = 'Python'  # 自定义响应头Itcast, 值为Python
```

根据HttpResponse的字典特性,可以使用如下的写法

```python
from django.http import HttpResponse

def demo_view(request):
    return HttpResponse('itcast python', status=400)
    或者
    response = HttpResponse('itcast python')
    response.status_code = 400
    response['Itcast'] = 'Python'
    return response
```

### HttpResponse子类

Django提供了一系列HttpResponse的子类，可以快速设置状态码

- HttpResponseRedirect 301
- HttpResponsePermanentRedirect 302
- HttpResponseNotModified 304
- HttpResponseBadRequest 400
- HttpResponseNotFound 404
- HttpResponseForbidden 403
- HttpResponseNotAllowed 405
- HttpResponseGone 410
- HttpResponseServerError 500

### JsonResponse

若要返回json数据，可以使用JsonResponse来构造响应对象，作用：

- 帮助我们**将数据转换为json字符串**
- 设置响应头**Content-Type**为 **application/json**

```python
from django.http import JsonResponse

def demo_view(request):
    return JsonResponse({'city': 'beijing', 'subject': 'python'})
```

### redirect重定向

```python
from django.shortcuts import redirect

def demo_view(request):
    return redirect('/index.html')
```

## Cookie

### 说明简介

Cookie，有时也用其复数形式Cookies，指某些网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（通常经过加密）。Cookie最早是网景公司的前雇员Lou Montulli在1993年3月的发明。

Cookie是由服务器端生成，发送给User-Agent（一般是浏览器），浏览器会将Cookie的key/value保存到某个目录下的文本文件内，下次请求同一网站时就发送该Cookie给服务器（前提是浏览器设置为启用cookie）。

Cookie名称和值可以由服务器端开发自己定义，这样服务器可以知道该用户是否是合法用户以及是否需要重新登录等。服务器可以利用Cookies包含信息的任意性来筛选并经常性维护这些信息，以判断在HTTP传输中的状态。Cookies最典型的应用是记住用户名。

**Cookie是存储在浏览器中的一段纯文本信息，建议不要存储敏感信息如密码，因为电脑上的浏览器可能被其它人使用。**

- 优点:
  - 简单易用
  - 浏览器负责发送数据
  - 浏览器自动管理不同站点(域名)的cookie
- 缺点
  - 文本存储数据, 安全性差
  - 存储数量有限30-50个
  - 配置最高级别, cookie会失效
  - 

### Cookie的特点

- Cookie以**键值对Key: Value**的格式进行信息的存储。
- Cookie基于域名安全，不同域名的Cookie是不能互相访问的，如访问`example.com`时向浏览器中写了Cookie信息，使用同一浏览器访问baidu.com时，无法访问到`example.com`写的Cookie信息。
- 当浏览器请求某网站时，会将浏览器存储的跟网站相关的所有Cookie信息提交给网站服务器。

### 应用场景

- 

### 设置Cookie

可以通过HttpResponse对象中的set_cookie方法来设置cookie

```python
HttpResponse.set_cookie(cookie名, value=cookie值, max_age=cookie有效期)
```

## Session

session / cookie 工作原理 协议 - 规定 在加载网页信息前 从 session/Cookie中获取相应的值

session可以从广义(机制) 和 狭义(数据)两个方面来理解

**广义**: 会话, 用于记录多次http请求之间的关系, 关系就是状态数据, 比如登录状态

**狭义**: 会话数据,记录的状态数据, 具体的session项, 比如user_id

cookie在Response中设置,  session在request中设置

cookie 和 session 都在服务端生成, cookie保存到浏览器需要用来Response发送, 



session生成后, 需要保存一份到session_id用请求对象+ session_id(通过标识) 来访问服务器上的session

session_id保存在cookie中, session_id 自动生成



### cookie / session区别 

- 保存位置
- 有效期: cookie的默认有效期关闭浏览器, session默认有效期14days
- cookie默认大小4k,session默认大小无限制
- 安全性:session安全, cookie不安全

[运行机制,工作原理](https://juejin.im/entry/5766c29d6be3ff006a31b84e)

### 启用Session

**Django项目默认启用Session。**

如需禁用session，将指定的中间件(中间层)注释掉即可。

### 存储方式

在settings.py文件中，可以设置session数据的存储方式，可以保存在数据库、本地缓存(内存)、文件、Redis等。

数据库中, python默认

文件系统

缓存, 推荐, 可以获得更好的性能

### 数据库

存储在数据库中，如下设置可以写，也可以不写，**这是默认存储方式**。

```python
SESSION_ENGINE='django.contrib.sessions.backends.db'
```

如果存储在数据库中TODO



## **类视图**-class-based view

> - https://docs.djangoproject.com/en/3.2/topics/class-based-views/

### as_view()方法

返回一个可调用视图(函数对象), 视图用于处理请求和返回







## 中间件

##

视图函数处理前从上往下, 处理后从下往上

中间件的本质是装饰器(闭包)

## 数据库

### ORM框架

ORM: Object Relation Mapping - 对象关系映射. 模型类对象和关系型数据之间的一种映射.

在ORM框架中, ORM帮我们把类和数据表进行了一个映射, 可以让我们 **通过类和类对象就能操作它所对应的表格中的数据**, 

ORM的另一个功能是 **根据我们设计的类自动帮我们生成数据库中的表格**, 省去了我们自己建表的过程. 

Django中内嵌了ORM框架, 不需要直接面向数据库编程, 而是定义模型类, 通过模型类和对象完成数据表的增删改查操作. 

使用django进行数据库开发的步骤如下:

配置数据库连接信息  >>  在models.py中定义模型类  >>  迁移  >>  通过类和对象完成数据增删改查操作

![ORM2](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426194316.png)

Django(程序)与MySQL是通过TCP网络连接的,通过TCP连接把SQL语句传送过去, 所以在配置数据库的时候,一定需要配置IP地址和端口.

ORM框架的作用: 将模型类的操作转换成SQL语句; 将结果转换为模型类对象

数据库驱动的作用: 连接数据库,并将sql语句通过TCP发送到mysql服务器中; 将mysql返回的结果传递给ORM框架

#### 字段类型

| 类型             | 说明                                                         |
| :--------------- | :----------------------------------------------------------- |
| AutoField        | 自动增长的IntegerField，通常不用指定，不指定时Django会自动创建属性名为id的自动增长属性 |
| BooleanField     | 布尔字段，值为True或False                                    |
| NullBooleanField | 支持Null、True、False三种值                                  |
| CharField        | 字符串，参数max_length表示最大字符个数                       |
| TextField        | 大文本字段，一般超过4000个字符时使用                         |
| IntegerField     | 整数                                                         |
| DecimalField     | 十进制浮点数， 参数max_digits表示总位数， 参数decimal_places表示小数位数 |
| FloatField       | 浮点数                                                       |
| DateField        | 日期， 参数auto_now表示每次保存对象时，自动设置该字段为当前时间，用于"最后一次修改"的时间戳，它总是使用当前日期，默认为False； 参数auto_now_add表示当对象第一次被创建时自动设置当前时间，用于创建的时间戳，它总是使用当前日期，默认为False; 参数auto_now_add和auto_now是相互排斥的，组合将会发生错误 |
| TimeField        | 时间，参数同DateField                                        |
| DateTimeField    | 日期时间，参数同DateField                                    |
| FileField        | 上传文件字段                                                 |
| ImageField       | 继承于FileField，对上传的内容进行校验，确保是有效的图片      |

#### 字段属性选项

| 选项        | 说明                                                         |
| :---------- | ------------------------------------------------------------ |
| null        | 如果为True，表示允许为空，默认值是False                      |
| blank       | 如果为True，则该字段允许为空白，默认值是False                |
| db_column   | 字段的名称，如果未指定，则使用属性的名称                     |
| db_index    | 若值为True, 则在表中会为此字段创建索引，默认值是False        |
| default     | 默认                                                         |
| primary_key | 若为True，则该字段会成为模型的主键字段，默认值是False，一般作为AutoField的选项使用 |
| unique      | 如果为True, 这个字段在表中必须有唯一值，默认值是False        |

---

# **核心思想**

视图, 模型, 路由, 模板, 接口



函数, 类, 装饰器, 钩子函数, 中间件, 应用,插件,模块, 包





# 开发流程

基本环节搭建: python django - mysqlclient

创建工程

创建应用 >> 注册应用

编写视图

映射到urls中

# 接口说明

path(name) name参数 表示 url地址的名称, 别名, 使用别名来表示该地址

# *主题文档





## 部署-Deployment

## 中间件-[Middleware](https://docs.djangoproject.com/en/3.2/topics/http/middleware/)

> 钩子函数, 用于全局改变输入或输出
>
> 中间件如何工作, 工作原理
>
> 如何使用/激活中间件
>
> 如何编写自己的中间件

django附带了一些开箱即用的内置中间件, [官方文档](https://docs.djangoproject.com/en/3.2/ref/middleware/)

## 配置Django实现数据库读写分离

[关于如何初始化配置:参考MySQL数据库文档](MySQL数据库.md)

### 在配置文件中增加slave数据库的配置

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'HOST': '10.211.55.5',
        'PORT': 3306,
        'USER': 'meiduo',
        'PASSWORD': 'meiduo',
        'NAME': 'meiduo_mall'
    },
    'slave': {
        'ENGINE': 'django.db.backends.mysql',
        'HOST': '10.211.55.5',
        'PORT': 8306,
        'USER': 'root',
        'PASSWORD': 'mysql',
        'NAME': 'meiduo_mall'
    }
}
```

### 创建数据库操作的路由分发类

在app/utils中创建db_router.py

```python
class MasterSlaveDBRouter(object):
    """数据库主从读写分离路由"""

    def db_for_read(self, model, **hints):
        """读数据库"""
        return "slave"

    def db_for_write(self, model, **hints):
        """写数据库"""
        return "default"

    def allow_relation(self, obj1, obj2, **hints):
        """是否运行关联操作"""
        return True
```

## 传入参数 

- HTTP协议向服务器传递参数的几种方式
  - URL部分
  - 查询字符串 : 
  - 请求体: 表单, json
    - *注*: 这种方式需要关闭CSRF验证
  - 头文件: Cookie

参数传递方式

### 1, POST()

### 2, Query Parameter

### 3, URL

*位置参数* : 

*关键字参数*

```python
# 位置参数
url(r'^(1)/(1000)')  # URLConf

def demo(request, age, score):  # View
    pass

# 关键字参数
url(r'^(?P<para1>\d+)/(?P<para2>\d+)') # URLConf
def demo(request, para1, para2):  # View
    pass

```



### 4, Cookie

## 参数取得

### json

html

```html
<!-- html -->
```

js

```js
// js
```

```python
# python django views



```









# 模板语法

[官方文档](https://docs.djangoproject.com/en/3.0/topics/templates/)

设计哲学

模板系统旨在展示内容, 而不是程序逻辑. 使用模板系统进行渲染, 而不是简单的将python嵌入html中.

Django的模板系统提供的标签, 其功能类似于一些编程结构 -- [`if`](https://docs.djangoproject.com/zh-hans/3.0/ref/templates/builtins/#std:templatetag-if) 标签用于布尔值测试, [`for`](https://docs.djangoproject.com/zh-hans/3.0/ref/templates/builtins/#std:templatetag-for) 标签用来做for循环, 等等.但这些都不是简单的执行相应的Python代码,模板系统不会执行任意的Python表达式. 通常情况下, 模板系统仅支持接下来列出的这些标签和过滤 (仅当需要时你可以添加 [你自己的扩展](https://docs.djangoproject.com/zh-hans/3.0/howto/custom-template-tags/) 到模板语法中).

## 技巧总结

- 在设置链接时可以直接 `<a href="?page={{ contacts}}">next</a>`

## 基础概念

### 模板继承

Django模板中最强大和最复杂的部分就是模板继承. 模板继承允许你建立一个基本的"骨架"模板, 它包含了你网站所有常见的元素,并定义了可以被子模板覆盖的 **块(blocks)** .

A template is a text file. It can generate any text-based format (HTML, XML, CSV, etc.).

*模板中包含的 **变量** 被替换为变量的值, **标签** 被替换为相应的模板控制逻辑.*

Below is a minimal template that illustrates a few basics. Each element will be explained later in this document.

```django
{% extends "base_generic.html" %}

{% block title %}{{ section.title }}{% endblock %}

{% block content %}
<h1>{{ section.title }}</h1>

{% for story in story_list %}
<h2>
  <a href="{{ story.get_absolute_url }}">
    {{ story.headline|upper }}
  </a>
</h2>
<p>{{ story.tease|truncatewords:"100" }}</p>
{% endfor %}
{% endblock %}
```

*设计哲学*

为什么要使用基于文本的模板,而不是基于XML语法的（如Zope的TAL）？ 我们希望Django的模板语言不止是 XML/HTML. 在网络世界,它可以不止被用在电子邮件,JavaScript和CSV中. 您可以在任何文本格式中使用它.

Oh, and one more thing: making humans edit XML is sadistic!





## 基础语义

### `{{ }}` - 变量 - Variables

### `{% %}` - 标签 - Tags

### `{# #}` - 注释 - Comments

### `tag` - 标签

## 内建标签

### extends - 模板继承

### block - 块

```django
{% block %}

{% endblock %}
```



### include - [模板导入](https://docs.djangoproject.com/zh-hans/3.0/ref/templates/builtins/#include)

```django
{% include "foo/bar.html" %}

{% include template_name %}  {# 模板变量 #}
```

### comment - 注释

### load - 加载

加载一个定制的模板标签集

Loads a custom template tag set.

### url - [链接](https://docs.djangoproject.com/zh-hans/3.0/ref/templates/builtins/#url)

可能有url name是一样的情况

```django
{% url 'some-url-name' v1 v2 %}
{% url 'some-url-name' arg1=v1 arg2=v2 %}
path('client/<int:id>/', app_views.client, name='app-views-client')
```

# **常用工具**

## [消息框架](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/messages/) - Messages framework

### 核心思想

### 应用场景

完成特定任务时, 发送消息, 通知给用户

### 解决方案

Django提供了基于Cookie或者会话的消息框架messages

## 模型和数据库 - Models and Databases

# 配置文档

## 管理[静态文件](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/)（比如图片、JavaScript、CSS）[¶](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/#managing-static-files-e-g-images-javascript-css)

网站通常需要提供类似图片，JavaScript 或 CSS 的额外文件服务。在 Django 中，我们将这些文件称为“静态文件”。Django 提供了 [`django.contrib.staticfiles`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#module-django.contrib.staticfiles) 帮你管理它们。

本页介绍如何为这些静态文件提供服务。



### 配置静态文件[¶](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/#configuring-static-files)

1. 确保 [`INSTALLED_APPS`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-INSTALLED_APPS) 包含了 `django.contrib.staticfiles`。

2. 在配置文件中，定义 [`STATIC_URL`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATIC_URL)，例子:

   ```
   STATIC_URL = '/static/'
   ```

3. 在模板中，用 [`static`](https://docs.djangoproject.com/zh-hans/3.0/ref/templates/builtins/#std:templatetag-static) 模板标签基于配置 [`STATICFILES_STORAGE`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATICFILES_STORAGE) 位给定的相对路径构建 URL。

   ```
   {% load static %}
   <img src="{% static "my_app/example.jpg" %}" alt="My image">
   ```

4. 将你的静态文件保存至程序中名为 `static` 的目录中。例如 `my_app/static/my_app/example.jpg`。

为这些文件提供服务

除了这些配置步骤外，你还需要实际地为这些文件提供服务。

开发时，使用 [`django.contrib.staticfiles`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#module-django.contrib.staticfiles)，这一般会在 [`DEBUG`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-DEBUG) is set to `True` 情况下由 [`runserver`](https://docs.djangoproject.com/zh-hans/3.0/ref/django-admin/#django-admin-runserver) 自动完成（参考 [`django.contrib.staticfiles.views.serve()`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#django.contrib.staticfiles.views.serve)）。

该方法 **极度低效** 且 **不怎么安全**，所以这 **不适合生产环境**。

参考 [部署静态文件](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/deployment/) 了解如何正确地在生产环境提供静态文件服务的策略。

你的工程可能包含未与任何应用绑定的静态资源。除了在 apps 中使用 `static/` 目录，你可以在配置文件中定义一个目录列表 ([`STATICFILES_DIRS`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATICFILES_DIRS)) ，Django 会从中寻找静态文件。例子:

```
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
    '/var/www/static/',
]
```

参考 [`STATICFILES_FINDERS`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATICFILES_FINDERS) 配置的文档了解 `staticfiles` 是如何找到你的文件的细节。

静态文件命名空间

Now we *might* be able to get away with putting our static files directly in `my_app/static/` (rather than creating another `my_app` subdirectory), but it would actually be a bad idea. Django will use the first static file it finds whose name matches, and if you had a static file with the same name in a *different* application, Django would be unable to distinguish between them. We need to be able to point Django at the right one, and the best way to ensure this is by *namespacing* them. That is, by putting those static files inside *another* directory named for the application itself.

You can namespace static assets in [`STATICFILES_DIRS`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATICFILES_DIRS) by specifying [prefixes](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#staticfiles-dirs-prefixes).

#### Prefixes (optional)[¶](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#prefixes-optional)

In case you want to refer to files in one of the locations with an additional namespace, you can **optionally** provide a prefix as `(prefix, path)` tuples, e.g.:

```python
STATICFILES_DIRS = [
    # ...
    ("downloads", "/opt/webfiles/stats"),  # /opt/webfiles/stats/downloads/
]
```

For example, assuming you have [`STATIC_URL`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATIC_URL) set to `'/static/'`, the [`collectstatic`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#django-admin-collectstatic) management command would collect the "stats" files in a `'downloads'` subdirectory of [`STATIC_ROOT`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATIC_ROOT).

This would allow you to refer to the local file `'/opt/webfiles/stats/polls_20101022.tar.gz'` with `'/static/downloads/polls_20101022.tar.gz'` in your templates, e.g.:

```django
<a href="{% static "downloads/polls_20101022.tar.gz" %}">
```



### 开发时提供静态文件服务[¶](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/#serving-static-files-during-development)

若你使用了前文所述的 [`django.contrib.staticfiles`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#module-django.contrib.staticfiles)， [`runserver`](https://docs.djangoproject.com/zh-hans/3.0/ref/django-admin/#django-admin-runserver) 会在 [`DEBUG`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-DEBUG) 为 `True` 时自动处理。若你未在 [`INSTALLED_APPS`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-INSTALLED_APPS) 中包含 `django.contrib.staticfiles`，你仍能手动通过 [`django.views.static.serve()`](https://docs.djangoproject.com/zh-hans/3.0/ref/views/#django.views.static.serve) 为静态文件提供服务。

这不适合生产环境！常见的部署策略请参考 [部署静态文件](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/deployment/)。

例如，若 [`STATIC_URL`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATIC_URL) 为 `/static/`，你能通过添加以下代码片段至 urls.py 完成目的:

```
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # ... the rest of your URLconf goes here ...
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

注解

该助手函数只能在 debug 模式下生效，且要求前缀是本地的（例如 `/static/`），不是一个 URL (例如 `http://static.example.com/`)。

当然，助手函数只为实际的 [`STATIC_ROOT`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATIC_ROOT) 目录提供服务；它不会像 [`django.contrib.staticfiles`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#module-django.contrib.staticfiles) 一样搜索静态文件。



### 开发期间保存用户上传的文件[¶](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/#serving-files-uploaded-by-a-user-during-development)

开发期间，你能用 [`django.views.static.serve()`](https://docs.djangoproject.com/zh-hans/3.0/ref/views/#django.views.static.serve) 视图为用户上传的媒体文件提供服务。

这不适合生产环境！常见的部署策略请参考 [部署静态文件](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/deployment/)。

例如，若 [`MEDIA_URL`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-MEDIA_URL) 定义为 `/media/`，你可以通过将以下代码片段加入 urls.py 实现目的:

```
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # ... the rest of your URLconf goes here ...
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

注解

该助手函数只能在 debug 模式下生效，且要求前缀是本地的（例如 `/static/`），不是一个 URL (例如 `http://media.example.com/`)。



### 测试[¶](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/#testing)

运行使用真实 HTTP 请求（而不是内置的测试客户端，即内置的 [`LiveServerTestCase`](https://docs.djangoproject.com/zh-hans/3.0/topics/testing/tools/#django.test.LiveServerTestCase)）的测试用例时，静态资源要与剩余内容分别提供服务，这样，测试环境才能尽量重现真实的问题。但 `LiveServerTestCase` 只拥有非常基本的为静态文件提供服务的能力：它并不知道 `staticfiles` 应用的查找功能，且总是假设静态内容已被收集至 [`STATIC_ROOT`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATIC_ROOT) 目录下。

因此， `staticfiles` 自带了 [`django.contrib.staticfiles.testing.StaticLiveServerTestCase`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#django.contrib.staticfiles.testing.StaticLiveServerTestCase)，这是一个内置子类，能够透明地以类似我们在开发阶段 `DEBUG = True` 时获得的方式为所有静态资源在测试期间提供服务。即无需先用 [`collectstatic`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#django-admin-collectstatic) 收集它们。



### 部署[¶](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/#deployment)

[`django.contrib.staticfiles`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#module-django.contrib.staticfiles) 提供了一个便利的管理命令，用于将静态文件收集至独立目录，方便你为它们提供服务。

1. 将 [`STATIC_ROOT`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATIC_ROOT) 配置成你喜欢的目录，在这个目录提供服务，例如:

   ```
   STATIC_ROOT = "/var/www/example.com/static/"
   ```

2. 运行 [`collectstatic`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#django-admin-collectstatic) 管理命令:

   ```
   $ python manage.py collectstatic
   ```

   这将会把静态目录下的所有文件拷贝至 [`STATIC_ROOT`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-STATIC_ROOT) 目录。

3. 选一个 Web 服务器为这些文件提供服务。 文档 [部署静态文件](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/deployment/) 介绍了静态文件的常见部署策略。



了解更多[¶](https://docs.djangoproject.com/zh-hans/3.0/howto/static-files/#learn-more)

本文档已覆盖基础和常见模式。对于所有配置项，命令，模板标签和其他包含在 [`django.contrib.staticfiles`](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/#module-django.contrib.staticfiles) 碎片的全部细节，参考 [静态文件参考](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/staticfiles/)。



# 前端方案

原生代码

vue组件化开发

模板语法

# 常见问题

应用部署, 环境安装, 数据库迁移, 

## web应用程序处理流程

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103816.png)



# 最佳实践

读写分离配置

多语言实现

添加路径到运行时

- redis连接对象django_redis.get_redis_connection , 通过该**连接对象执行redis指令**
- redirect重定向的业务逻辑一般由前端来实现, 所以 路由反解析的应用场景不多, 视图中`name=`参数一般不需要指定







# Django最佳实践

# django生态

## drf



## django-debug-toolbar

> [github](https://github.com/jazzband/django-debug-toolbar)
>
> document

# 问题处理



## 解决Vue与Django冲突

### 方法一 

[官方说明](https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#verbatim)

```django
{% verbatim %}
	{{ message }}
{% endverbatim %}
```

### 方法二 

[官方说明](https://cn.vuejs.org/v2/api/#delimiters)

```django
<div id='app'>
[[ message ]]
</div>
<script>
    var app = new Vue({
        el: '#app',
        delimiters: ['[[', ']]'] 
        data: {
        message: "Hello, 世界!"
    }
    })
</script>
```

```javascript
new Vue({
  delimiters: ['${', '}']
})

// 分隔符变成了  模板字符串的风格
```

## shell

```shell
django-admin shell -i python
```

## [测试工具](https://docs.djangoproject.com/zh-hans/3.0/topics/testing/tools/) - Test Tools

> 使用命令行查看 request 

```shell
>>> c = Client()
>>> response = c.post('/login/', {'username': 'john', 'password': 'smith'})
>>> response.status_code
200
>>> response = c.get('/customer/details/')
>>> response.content

```



## 使用httpx查看Request/Response

```python
import httpx
r = httpx.get('http://www.baidu.com')
r.headers

response = httpx.request('GET', 'https://www.baidu.com')
response.request
```

## 解决admin中中文末尾出现s

> verbose_name_plural='配置字典'





## django与vue.js整合

> - https://cloud.tencent.com/developer/article/1005607
> - https://docs.djangoproject.com/zh-hans/3.2/ref/class-based-views/base/#templateview

将html作为模板渲染, 同时需要注意静态文件目录

将静态文件放在 静态文件目录的`static`目录下可以使得相对目录与绝对目录保持一致



## 类视图中的类变量不应该依赖数据库中的数据

一次开发中, 将类变量 config=Config.objects.get(config_id=1). 结果在删除数据库, 重新生产迁移文件时, 出现了错误, 提示 notifications_config表不存在. 显然是 对models产生了依赖, 导致无法初始化该变量, 而导致了严重错误.

# 工程结构

> project structure

## 应用规划

### 什么是一个应用

- 实现的功能某种集合
- 博客系统
- 投票应用
- 数据库模型

# 返回响应

## 接口概览

```python
render_to_string(template_name, context=None, request=None, using=None)
```

# 模型和数据库

```python
from django.db import connection

with connection.cursor() as cursor:
    cursor.execute("select * from test")
```



# 官方指南



# 常见需求

## 官方指南

[官方文档](https://docs.djangoproject.com/zh-hans/3.2/howto/)

> howto, 操作指南

## 搜索

工具 : elasticsearch 

## 返回json的几种方法

[简书链接](https://www.jianshu.com/p/f97f73b96443)



## 开启事务



## 初始化数据

> [官方文档](https://docs.djangoproject.com/zh-hans/2.2/howto/initial-data/)[1](https://docs.djangoproject.com/zh-hans/2.2/howto/initial-data/)



项目初始化

# 常见问题

## 解决 django项目 python console 错误

```shell
File >> Settings >> Languages & Frameworks >> Django
```

# 视图接口 - Views

## request

## HttpResponse

## JsonResponse

## StreamingHttpResponse

流处理

The [`StreamingHttpResponse`](https://docs.djangoproject.com/en/3.0/ref/request-response/#django.http.StreamingHttpResponse) class is used to stream a response from Django to the browser. You might want to do this if generating the response takes too long or uses too much memory. For instance, it’s useful for [generating large CSV files](https://docs.djangoproject.com/en/3.0/howto/outputting-csv/#streaming-csv-files).

## `FileResponse`

*class* `FileResponse`(*open_file*, *as_attachment=False*, *filename=''*, ***kwargs*)[¶](https://docs.djangoproject.com/en/3.0/ref/request-response/#django.http.FileResponse)

```shell
>>> from django.http import FileResponse
>>> response = FileResponse(open('myfile.png', 'rb'))
```

## render()

```python
from django.shortcuts import render
```

## TemplateResponse - 一般不需要, render即可

[Templates and SimpleTemplateRespones](https://blog.csdn.net/boyun58/article/details/89500164)



# JSON交互

- [Django之AJAX传输JSON数据](https://www.cnblogs.com/open-yang/p/11222430.html)
- 

```js
// js
var myEvent = {id: calEvent.id, start: calEvent.start, end: calEvent.end,
               allDay: calEvent.allDay };
$.ajax({
    url: '/event/save-json/',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: $.toJSON(myEvent),
    dataType: 'text',
    success: function(result) {
        alert(result.Result);
    }
});
```

```python
# request.body

# request.raw_post_data
def save_events_json(request):
    if request.is_ajax():
        if request.method == 'POST':
            print 'Raw Data: "%s"' % request.body   
    return HttpResponse("OK")


# 
```



# 常见需求



### 秒杀系统



## 单点登录(single Sign On)

多个系统中, 只需要登录一次,就可以访问其他相互信任的系统.





### 相同域名下的单点登录

将cookie的域名设置为顶级的域名(域名相同), 在三个系统中共享session方案

### 登录认证

完成登录和密码验证后, session中标记登录状态为yes. 同时在浏览器中写入cookie, cookie 是用户的唯一标识.

### 不同域名下的单点登录

CAS流程 SSO登录系统



### 中心认证服务(Central Authentication Service, CAS)







# Django主题文档

> [官方文档](https://docs.djangoproject.com/en/3.2/topics/)

# 设置-Settings



```python
LANGUAGE_CODE = 'zh',
TIME_ZONE= 'Asia/Shanghai',
```



# 缓存-Cache

# 日志-Logging

[参看开发文档](Python开发笔记.md/)

[参考配置文件- ommanager3]



# 安全-Security

## 密码存储

hash, + salting + 加密算法

Django uses a strong, well-tested method to store passwords securely. It follows these steps:
Password Hashing:
When a user creates an account or changes their password, Django transforms the plain-text password entered by the user into a hashed version. This is not the same as encryption, as hashing is a one-way function and cannot be reversed to retrieve the original password.
Salting:
Django also applies a technique known as salting. A salt is a random value that is generated and added to the password before the hashing process. The salt is then stored with the hashed password in the database. This prevents two identical passwords from having the same hash and defends against certain types of attacks (like rainbow table attacks).
Algorithm:
Django uses PBKDF2 algorithm by default for password hashing, but it supports other algorithms such as Argon2, BCrypt, and others. It can also use multiple hashing algorithms together for extra security.
Hash Comparison:
When the user tries to log in, Django will take the password entered, add the salt stored with the user's hashed password, hash the result, and compare it to the stored hash. If they match, the password is correct and the user is authenticated.
It's important to note that even Django's developers do not have access to the actual password. Once it's hashed and stored, the original plaintext password is no longer accessible or retrievable.
Here's how to use Django's hash functions:

```python
from django.contrib.auth.hashers import make_password, check_password

hashed_pwd = make_password('mypassword')  # Hash a password
check_password('mypassword', hashed_pwd)  # Returns True if the password is correct
```

By handling passwords in this way, Django helps to keep your users' data secure.

# 优化-Optimization

# 序列化-Serializing

# 异步-Async

# 测试-Testing

# 权限管理

> 控制权限的粒度, 

用户 - 角色 -  组 -  权限

1. 用户：访问系统的主体；
2. 角色：分配权限的最小单元，通过角色给用户分配权限；
3. 权限菜单：权限的最小单元，一个角色配置多个权限菜单；

角色权限

指令权限

操作权限	

页面权限



使用角色/组来模拟一个权限控制抽象层



authentication 认证,

authorization: 授权

### 常见需求

- 权限设置

为model 设置权限, 

自定义权限

为用户添加权限, 为用户设置权限

- 权限绑定
    - 设置权限列表
    - 设置单个全新
- 使用分组设置权限
    - 将用户添加到组
- 权限验证
    - 装饰器 decorators中
    - has_perms



权限校验

### [快速上手](https://docs.djangoproject.com/zh-hans/3.0/topics/auth/)

### 安装 - installation

注册应用和中间件

Authentication support is bundled as a Django contrib module in `django.contrib.auth`. By default, the required configuration is already included in the `settings.py` generated by [`django-admin startproject`](https://docs.djangoproject.com/zh-hans/3.0/ref/django-admin/#django-admin-startproject), these consist of two items listed in your [`INSTALLED_APPS`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-INSTALLED_APPS) setting:

1. `'django.contrib.auth'` contains the core of the authentication framework, and its default models.
2. `'django.contrib.contenttypes'` is the Django [content type system](https://docs.djangoproject.com/zh-hans/3.0/ref/contrib/contenttypes/), which allows permissions to be associated with models you create.

and these items in your [`MIDDLEWARE`](https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-MIDDLEWARE) setting:

1. [`SessionMiddleware`](https://docs.djangoproject.com/zh-hans/3.0/ref/middleware/#django.contrib.sessions.middleware.SessionMiddleware) manages [sessions](https://docs.djangoproject.com/zh-hans/3.0/topics/http/sessions/) across requests.
2. [`AuthenticationMiddleware`](https://docs.djangoproject.com/zh-hans/3.0/ref/middleware/#django.contrib.auth.middleware.AuthenticationMiddleware) associates users with requests using sessions.

With these settings in place, running the command `manage.py migrate` creates the necessary database tables for auth related models and permissions for any models defined in your installed apps.



### 
