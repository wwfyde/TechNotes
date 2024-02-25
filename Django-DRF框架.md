# DRF框架

# 说明简介

Django REST framework

序列化器  视图 是重点  理解好 活用

# 快速开始

```shell
编写模型 |

编写序列化器 | 
	> 继承自序列化器类型
	> 序列化字段
		> 只读, 是否必须, 最大长度, 默认值等
	> 设置元数据
		> 指定要序列化的对象
		> 指定序列化的字段
编写视图集 | 
编写URLs 
	> 创建路由器对象
	> 注册路由映射
	> 将rest_framework总路由添加到urlconf

编写设置 
	> rest_framework设置项
	> 注册rest_framework
```



```text
The world can only really be changed one piece at a time. The art is picking that piece.
世界只能一块一块的改变, 最重要的是挑选那块

Good programming practices include comments.
好的编程实践包括注释
```

# 快速开始2

## 应用场景

> 选择理由

```text
The Web browsable API is a huge usability win for your developers.
Authentication policies including packages for OAuth1a and OAuth2.
Serialization that supports both ORM and non-ORM data sources.
Customizable all the way down - just use regular function-based views if you don't need the more powerful features.
Extensive documentation, and great community support.
Used and trusted by internationally recognised companies including Mozilla, Red Hat, Heroku, and Eventbrite.

```



- 创建可浏览Web API(Web Browsable API)
- 额外的认证方法
- 基于 DRM 和 no-DRM 的**序列化**支持
- 所有的方式都可以定制——如果不想使用更多特性可以使用惯用的**函数视图(@api_view)**
- 大量的文档, 广泛的社区支持.

## 序列化器的作用

- 进行数据的校验

- 对数据对象进行转换
- 使用定义好的序列化器类对象, 序列化实例, 返回一个序列化器, 通过serializer.data得到序列化后的数据(类似于dump)
- 反序列化类似于load

## 定义序列化器

被序列化对象, 原序列化模型

```python
class BookInfo(models.Model):
    btitle = models.CharField(max_length=20, verbose_name='名称')
    bpub_date = models.DateField(verbose_name='发布日期', null=True)
    bread = models.IntegerField(default=0, verbose_name='阅读量')
    bcomment = models.IntegerField(default=0, verbose_name='评论量')
    image = models.ImageField(upload_to='booktest', verbose_name='图片', null=True)
```



```python
# 导入序列化对象
from rest_framework import serializers

# 定义序列化类, 继承自 serializers.Serializer
class BookInfoSerializer(serializers.Serializer):
    """图书数据序列化器"""
    id = serializers.IntegerField(label='ID', read_only=True)
    btitle = serializers.CharField(label='名称', max_length=20)
    bpub_date = serializers.DateField(label='发布日期', required=False)
    bread = serializers.IntegerField(label='阅读量', required=False)
    bcomment = serializers.IntegerField(label='评论量', required=False)
    image = serializers.ImageField(label='图片', required=False)

```

**注意：serializer不是只能为数据库模型类定义，也可以为非数据库模型类的数据定义。**serializer是独立于数据库之外的存在。

## 序列化器的字段与选项

### **常用字段类型**：

| 字段                    | 字段构造方式                                                 |
| ----------------------- | ------------------------------------------------------------ |
| **BooleanField**        | BooleanField()                                               |
| **NullBooleanField**    | NullBooleanField()                                           |
| **CharField**           | CharField(max_length=None, min_length=None, allow_blank=False, trim_whitespace=True) |
| **EmailField**          | EmailField(max_length=None, min_length=None, allow_blank=False) |
| **RegexField**          | RegexField(regex, max_length=None, min_length=None, allow_blank=False) |
| **SlugField**           | SlugField(max*length=50, min_length=None, allow_blank=False) 正则字段，验证正则模式 [a-zA-Z0-9*-]+ |
| **URLField**            | URLField(max_length=200, min_length=None, allow_blank=False) |
| **UUIDField**           | UUIDField(format='hex_verbose') format: 1) `'hex_verbose'` 如`"5ce0e9a5-5ffa-654b-cee0-1238041fb31a"` 2） `'hex'` 如 `"5ce0e9a55ffa654bcee01238041fb31a"` 3）`'int'` - 如: `"123456789012312313134124512351145145114"` 4）`'urn'` 如: `"urn:uuid:5ce0e9a5-5ffa-654b-cee0-1238041fb31a"` |
| **IPAddressField**      | IPAddressField(protocol='both', unpack_ipv4=False, **options) |
| **IntegerField**        | IntegerField(max_value=None, min_value=None)                 |
| **FloatField**          | FloatField(max_value=None, min_value=None)                   |
| **DecimalField**        | DecimalField(max_digits, decimal_places, coerce_to_string=None, max_value=None, min_value=None) max_digits: 最多位数 decimal_palces: 小数点位置 |
| **DateTimeField**       | DateTimeField(format=api_settings.DATETIME_FORMAT, input_formats=None) |
| **DateField**           | DateField(format=api_settings.DATE_FORMAT, input_formats=None) |
| **TimeField**           | TimeField(format=api_settings.TIME_FORMAT, input_formats=None) |
| **DurationField**       | DurationField()                                              |
| **ChoiceField**         | ChoiceField(choices) choices与Django的用法相同               |
| **MultipleChoiceField** | MultipleChoiceField(choices)                                 |
| **FileField**           | FileField(max_length=None, allow_empty_file=False, use_url=UPLOADED_FILES_USE_URL) |
| **ImageField**          | ImageField(max_length=None, allow_empty_file=False, use_url=UPLOADED_FILES_USE_URL) |
| **ListField**           | ListField(child=, min_length=None, max_length=None)          |
| **DictField**           | DictField(child=)                                            |

### **选项参数：**

| 参数名称            | 作用             |
| ------------------- | ---------------- |
| **max_length**      | 最大长度         |
| **min_lenght**      | 最小长度         |
| **allow_blank**     | 是否允许为空     |
| **trim_whitespace** | 是否截断空白字符 |
| **max_value**       | 最小值           |
| **min_value**       | 最大值           |

### 通用参数：

| 参数名称           | 说明                                          |
| ------------------ | --------------------------------------------- |
| **read_only**      | 表明该字段仅用于序列化输出，默认False         |
| **write_only**     | 表明该字段仅用于反序列化输入，默认False       |
| **required**       | 表明该字段在反序列化时必须输入，默认True      |
| **default**        | 反序列化时使用的默认值                        |
| **allow_null**     | 表明该字段是否允许传入None，默认False         |
| **validators**     | 该字段使用的验证器                            |
| **error_messages** | 包含错误编号与错误信息的字典                  |
| **label**          | 用于HTML展示API页面时，显示的字段名称         |
| **help_text**      | 用于HTML展示API页面时，显示的字段帮助提示信息 |

## 创建Serializer对象

定义好Serializer类后，就可以创建Serializer对象了。

Serializer的构造方法为：

```python
Serializer(instance=None, data=empty, **kwarg) -> object
```

说明：

1）用于序列化时，将模型类对象传入**instance**参数

2）用于反序列化时，将要被反序列化的数据传入**data**参数

3）除了instance和data参数外，在构造Serializer对象时，还可通过**context**参数额外添加数据，如

```python
serializer = AccountSerializer(account, context={'request': request})
```

**通过context参数附加的数据，可以通过Serializer对象的context属性获取。**

## 序列化的使用

```python
# 获取一个实例
from demo.models import BookInfo
book = BookInfo.objects.get(id=2)
```

我们在django shell中来学习序列化器的使用。

```shell
python manage.py shell
```

### 基本使用

1） 先查询出一个图书对象

```python
from booktest.models import BookInfo

book = BookInfo.objects.get(id=2)
```

2） 构造序列化器对象

```python
from booktest.serializers import BookInfoSerializer

serializer = BookInfoSerializer(book)
```

3）获取序列化数据

通过data属性可以获取序列化后的数据

```python
serializer.data
# {'id': 2, 'btitle': '天龙八部', 'bpub_date': '1986-07-24', 'bread': 36, 'bcomment': 40, 'image': None}
```

4）如果要被序列化的是包含多条数据的查询集QuerySet，可以通过添加**many=True**参数补充说明

```python
book_qs = BookInfo.objects.all()
serializer = BookInfoSerializer(book_qs, many=True)
serializer.data
# [OrderedDict([('id', 2), ('btitle', '天龙八部'), ('bpub_date', '1986-07-24'), ('bread', 36), ('bcomment', 40), ('image', N]), OrderedDict([('id', 3), ('btitle', '笑傲江湖'), ('bpub_date', '1995-12-24'), ('bread', 20), ('bcomment', 80), ('image'ne)]), OrderedDict([('id', 4), ('btitle', '雪山飞狐'), ('bpub_date', '1987-11-11'), ('bread', 58), ('bcomment', 24), ('ima None)]), OrderedDict([('id', 5), ('btitle', '西游记'), ('bpub_date', '1988-01-01'), ('bread', 10), ('bcomment', 10), ('im', 'booktest/xiyouji.png')])]
```

### 关联对象嵌套序列化

如果需要序列化的数据中包含有其他关联对象，则对关联对象数据的序列化需要指明。

例如，在定义英雄数据的序列化器时，外键hbook（即所属的图书）字段如何序列化？

我们先定义HeroInfoSerialzier除外键字段外的其他部分：

```python
class HeroInfoSerializer(serializers.Serializer):
    """英雄数据序列化器"""
    GENDER_CHOICES = (
        (0, 'male'),
        (1, 'female')
    )
    id = serializers.IntegerField(label='ID', read_only=True)
    hname = serializers.CharField(label='名字', max_length=20)
    hgender = serializers.ChoiceField(choices=GENDER_CHOICES, label='性别', required=False)
    hcomment = serializers.CharField(label='描述信息', max_length=200, required=False, allow_null=True)
```

对于关联字段，可以采用以下几种方式：

#### 1） PrimaryKeyRelatedField

此字段将被序列化为关联对象的主键。

```python
hbook = serializers.PrimaryKeyRelatedField(label='图书', read_only=True)
```

指明字段时需要包含read_only=True或者queryset参数：

- 包含read_only=True参数时，该字段将不能用作反序列化使用

使用效果：

```python
from booktest.serializers import HeroInfoSerializer
from booktest.models import HeroInfo
hero = HeroInfo.objects.get(id=6)
serializer = HeroInfoSerializer(hero)
serializer.data
# {'id': 6, 'hname': '乔峰', 'hgender': 1, 'hcomment': '降龙十八掌', 'hbook': 2}
```

#### 2) StringRelatedField

此字段将被序列化为关联对象的字符串表示方式（即__str__方法的返回值）

```python
hbook = serializers.StringRelatedField(label='图书')
```

使用效果

```python
{'id': 6, 'hname': '乔峰', 'hgender': 1, 'hcomment': '降龙十八掌', 'hbook': '天龙八部'}
```

#### 3）使用关联对象的序列化器

```python
hbook = BookInfoSerializer()
```

使用效果

```python
{'id': 6, 'hname': '乔峰', 'hgender': 1, 'hcomment': '降龙十八掌', 'hbook': OrderedDict([('id', 2), ('btitle', '天龙八部')te', '1986-07-24'), ('bread', 36), ('bcomment', 40), ('image', None)])}
```

#### many参数

如果关联的对象数据不是只有一个，而是包含多个数据，如想序列化图书BookInfo数据，每个BookInfo对象关联的英雄HeroInfo对象可能有多个，此时关联字段类型的指明仍可使用上述几种方式，只是在声明关联字段时，多补充一个many=True参数即可。

此处仅拿PrimaryKeyRelatedField类型来举例，其他相同。

在BookInfoSerializer中添加关联字段：

```python
class BookInfoSerializer(serializers.Serializer):
    """图书数据序列化器"""
    id = serializers.IntegerField(label='ID', read_only=True)
    btitle = serializers.CharField(label='名称', max_length=20)
    bpub_date = serializers.DateField(label='发布日期', required=False)
    bread = serializers.IntegerField(label='阅读量', required=False)
    bcomment = serializers.IntegerField(label='评论量', required=False)
    image = serializers.ImageField(label='图片', required=False)
    heroinfo_set = serializers.PrimaryKeyRelatedField(read_only=True, many=True)  # 新增
```

使用效果：

```python
from booktest.serializers import BookInfoSerializer
from booktest.models import BookInfo
book = BookInfo.objects.get(id=2)
serializer = BookInfoSerializer(book)
serializer.data
# {'id': 2, 'btitle': '天龙八部', 'bpub_date': '1986-07-24', 'bread': 36, 'bcomment': 40, 'image': None, 'heroinfo_set': [6,8, 9]}
```

## 反序列化的使用



# **基础语义**

## 序列化-Serialization

> - https://www.django-rest-framework.org/tutorial/1-serialization/

**序列化**（serialization）在计算机科学的资料处理中，是指将数据结构或物件状态转换成可取用格式（例如存成档案，存于缓冲，或经由网络中传送），以留待后续在相同或另一台计算机环境中，能恢复原先状态的过程。

依照序列化格式重新获取字节的结果时，可以利用它来产生与原始物件相同语义的副本。对于许多物件，像是使用大量参照的复杂物件，这种序列化重建的过程并不容易。

面向对象中的物件序列化，并不概括之前原始物件所关联的函式。这种过程也称为物件编组（marshalling）。从一系列字节提取数据结构的反向操作，是反序列化（也称为解编组, deserialization, unmarshalling）。

**序列化**在计算机科学中通常有以下定义:

在数据储存与传送的部分是指将一个[对象](https://zh.wikipedia.org/wiki/对象_(计算机科学))存储至一个[储存媒介](https://zh.wikipedia.org/w/index.php?title=儲存媒介&action=edit&redlink=1)，例如[档案](https://zh.wikipedia.org/wiki/檔案)或是[记亿体缓冲](https://zh.wikipedia.org/w/index.php?title=記億體緩衝&action=edit&redlink=1)等，或者透过网络传送资料时进行编码的过程，可以是[字节](https://zh.wikipedia.org/wiki/字节)或是[XML](https://zh.wikipedia.org/wiki/XML)等格式。而[字节](https://zh.wikipedia.org/wiki/字节)的或[XML](https://zh.wikipedia.org/wiki/XML)编码格式可以还原完全相等的[对象](https://zh.wikipedia.org/wiki/对象_(计算机科学))。这程序被应用在不同[应用程序](https://zh.wikipedia.org/wiki/應用程式)之间传送[对象](https://zh.wikipedia.org/wiki/对象_(计算机科学))，以及服务器将[对象](https://zh.wikipedia.org/wiki/对象_(计算机科学))储存到[档案](https://zh.wikipedia.org/wiki/檔案)或[数据库](https://zh.wikipedia.org/wiki/資料庫)。相反的过程又称为[**反序列化**](https://zh.wikipedia.org/w/index.php?title=反序列化&action=edit&redlink=1)。

简而言之，我们可以将**序列化**理解为：

**将程序中的一个数据结构类型转换为其他格式（字典、JSON、XML等），例如将Django中的模型类对象装换为JSON字符串，这个转换过程我们称为序列化。**

如：

```python
queryset = BookInfo.objects.all()
book_list = []
# 序列化
for book in queryset:
    book_list.append({
        'id': book.id,
        'btitle': book.btitle,
        'bpub_date': book.bpub_date,
        'bread': book.bread,
        'bcomment': book.bcomment,
        'image': book.image.url if book.image else ''
    })
return JsonResponse(book_list, safe=False)
```

**反之，将其他格式（字典、JSON、XML等）转换为程序中的数据，例如将JSON字符串转换为Django中的模型类对象，这个过程我们称为反序列化。**

如：

```python
json_bytes = request.body
json_str = json_bytes.decode()

# 反序列化
book_dict = json.loads(json_str)
book = BookInfo.objects.create(
    btitle=book_dict.get('btitle'),
    bpub_date=datetime.strptime(book_dict.get('bpub_date'), '%Y-%m-%d').date()
)
```

我们可以看到，**在开发REST API时，视图中要频繁的进行序列化与反序列化的编写。**

#### 总结

在开发REST API接口时，我们在**视图**中需要做的最核心的事是：

- **将数据库数据序列化为前端所需要的格式，并返回；**
- **将前端发送的数据反序列化为模型类对象，并保存到数据库中。**



## [viewset](https://www.django-rest-framework.org/api-guide/viewsets/)-视图集

> 模型(model)到视图(view)的映射, MVC
>
> 是对传统view的写法的替代, 通过视图集来提供视图

> - https://www.django-rest-framework.org/api-guide/viewsets/

```text
After routing has determined which controller to use for a request, your controller is responsible for making sense of the request and producing the appropriate output.
当路由为请求确定控制器后, 控制器响应被解析的请求并产生一个适当的输出.

A ViewSet class is simply a type of class-based View, that does not provide any method handlers such as .get() or .post(), and instead provides actions such as .list() and .create().
视图集是一种基于类的视图类型, 视图集不提供任何操作(handler), 比如get或post, 转而提供了行为(action), 比如列出或创建. 

The method handlers for a ViewSet are only bound to the corresponding actions at the point of finalizing the view, using the .as_view() method.
视图集的方法处理程序仅在视图结束时(最终), 使用.as_view()方法绑定到视图的相应操作。(为视图提供新的方法, 相当于是视图实例的父类)

Typically, rather than explicitly registering the views in a viewset in the urlconf, you'll register the viewset with a router class, that automatically determines the urlconf for you.
典型, 视图集被注册到路由类中并自动决定urlconf, 而不是显式地在注册视图集中的视图到urlconf.


```

```text
Rather than write multiple views we're grouping together all the common behavior into classes called ViewSets.
不必再写多个视图, 我们将视图的所有普通行为组织在一起成为一个类, 这样的类叫作视图集(ViewSets).
(将视图的所有行为写到一个视图集中)

We can easily break these down into individual views if we need to, but using viewsets keeps the view logic nicely organized as well as being very concise.
(使用函数视图)我们可以轻松的将这些细节分解为单个视图, 但是使用视图集可以让视图逻辑组织更好且更简介.

```



### Django REST framework

Django REST framework 框架是一个用于构建Web API 的强大而又灵活的工具。

通常简称为DRF框架 或 REST framework。

DRF框架是建立在Django框架基础之上，由Tom Christie大牛二次开发的开源项目。

#### 特点

- 提供了定义序列化器Serializer的方法，可以快速根据 Django ORM 或者其它库自动序列化/反序列化；
- 提供了丰富的类视图、Mixin扩展类，简化视图的编写；
- 丰富的定制层级：函数视图、类视图、视图集合到自动生成 API，满足各种需要；
- 多种身份认证和权限认证方式的支持；
- 内置了限流系统(throttling)；
- 直观的 API web 界面；
- 可扩展性，插件丰富

资料：

- [官方文档](http://www.django-rest-framework.org/)
- [Github源码](https://github.com/encode/django-rest-framework/tree/master)



# API Guide







# Web应用模式

### 前后端不分离: Flask

> 前端看到的效果由后端决定

在前后端不分离的应用模式中，前端页面看到的效果都是由后端控制，由后端渲染页面或重定向，也就是后端需要控制前端的展示，前端与后端的耦合度很高。

这种应用模式比较适合纯网页应用，但是当后端对接App时，App可能并不需要后端返回一个HTML网页，而仅仅是数据本身，所以后端原本返回网页的接口不再适用于前端App应用，为了对接App后端还需再开发一套接口。

### 前后端分离: Django

> 后端的主要作用是返回静态文件, 和动态数据

在前后端分离的应用模式中，后端仅返回前端所需的数据，不再渲染HTML页面，不再控制前端的效果。至于前端用户看到什么效果，从后端请求的数据如何加载到前端中，都由前端自己决定，网页有网页的处理方式，App有App的处理方式，但无论哪种前端，所需的数据基本相同，后端仅需**开发一套逻辑对外提供数据**即可。

在前后端分离的应用模式中 ，前端与后端的耦合度相对较低。

在前后端分离的应用模式中，我们通常将后端开发的每个视图都称为一个**接口**，或者**API**，前端通过访问接口来对数据进行增删改查。

# RESTful 设计风格

**RESTful是一种开发理念**。维基百科说：**REST是设计风格而不是标准**。 REST描述的是在网络中client和server的一种交互形式；REST本身不实用，实用的是如何设计 RESTful API（REST风格的网络接口）,一种万维网软件架构风格。

我们先来具体看下RESTful风格的url,比如我要查询商品信息，那么

> 非REST的url：`http://.../queryGoods?id=1001&type=t01`
>
> REST的url: `http://.../t01/goods/1001`

可以看出**REST特点：url简洁，将参数通过url传到服务器，**而传统的url比较啰嗦，而且现实中浏览器地址栏会拼接一大串字符，想必你们都见过吧。但是采用REST的风格就会好很多，现在很多的网站已经采用这种风格了，这也是潮流方向，典型的就是url的短化转换。

**那么，到底什么是RESTFul架构： 如果一个架构符合REST原则，就称它为RESTful架构。**

要理解RESTful架构，理解Representational State Transfer这三个单词的意思。

- **具象的**，就是指表现层，要表现的对象也就是“资源”，什么是资源呢？网站就是资源共享的东西，客户端（浏览器）访问web服务器，所获取的就叫资源。比如html，txt，json，图片，视频等等。

- **表现**，比如，文本可以用txt格式表现，也可以用HTML格式、XML格式、JSON格式表现，甚至可以采用二进制格式；图片可以用JPG格式表现，也可以用PNG格式表现。

  浏览器通过URL确定一个资源，但是如何确定它的具体表现形式呢？应该在HTTP请求的头信息中用Accept和Content-Type字段指定，这两个字段才是对"表现层"的描述。

- **状态转换，** 就是客户端和服务器互动的一个过程，在这个过程中, 势必涉及到数据和状态的变化, 这种变化叫做状态转换。

  互联网通信协议HTTP协议，客户端访问必然使用HTTP协议**，如果客户端想要操作服务器，必须通过某种手段，让服务器端发生"状态转化"（State Transfer）。**

  HTTP协议实际上含有4个表示操作方式的动词，分别是 GET,POST,PUT,DELETE,他们分别对应四种操作。GET用于获取资源，POST用于新建资源，PUT用于更新资源，DElETE用于删除资源。GET和POST是表单提交的两种基本方式，比较常见，而PUT和DElETE不太常用。

  而且HTTP协议是一种无状态协议，这样就必须把所有的状态都保存在服务器端**。**因此，如果客户端想要操作服务器，必须通过某种手段，让服务器端发生"状态转化"（State Transfer）

##  REST风格总结

**综合上面的解释，RESTful架构就是：**

- **每一个URL代表一种资源；**
- **客户端和服务器之间，传递这种资源的某种表现层；**
- **客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"。



# RESTful设计方法

### 1. 域名

应该尽量将API部署在专用域名之下。

```http
https://api.example.com
```

如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。

```http
https://example.org/api/
```

### 2. 版本（Version）

应该将API的版本号放入URL。

```http
http://www.example.com/app/1.0/foo

http://www.example.com/app/1.1/foo

http://www.example.com/app/2.0/foo
```

另一种做法是，将版本号放在HTTP头信息中，但不如放入URL方便和直观。[Github](https://developer.github.com/v3/media/#request-specific-version)采用这种做法。

因为不同的版本，可以理解成同一种资源的不同表现形式，所以应该采用同一个URL。版本号可以在HTTP请求头信息的Accept字段中进行区分（参见[Versioning REST Services](http://www.informit.com/articles/article.aspx?p=1566460)）：

```http
Accept: vnd.example-com.foo+json; version=1.0

Accept: vnd.example-com.foo+json; version=1.1

Accept: vnd.example-com.foo+json; version=2.0
```

### 3. 路径（Endpoint）

路径又称"终点"（endpoint），表示API的具体网址，每个网址代表一种资源（resource）

**(1) 资源作为网址，只能有名词，不能有动词，而且所用的名词往往与数据库的表名对应。**

举例来说，以下是不好的例子:

```http
/getProducts
/listOrders
/retreiveClientByOrder?orderId=1
```

对于一个简洁结构，你应该始终用名词。 此外，利用的HTTP方法可以分离网址中的资源名称的操作。

```http
GET /products ：将返回所有产品清单
POST /products ：将产品新建到集合
GET /products/4 ：将获取产品 4
PATCH（或）PUT /products/4 ：将更新产品 4
```

**(2) API中的名词应该使用复数。无论子资源或者所有资源。**

举例来说，获取产品的API可以这样定义

```http
获取单个产品：http://127.0.0.1:8080/AppName/rest/products/1
获取所有产品: http://127.0.0.1:8080/AppName/rest/products
```

### 4. HTTP动词

对于资源的具体操作类型，由HTTP动词表示。

常用的HTTP动词有下面四个（括号里是对应的SQL命令）。

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- DELETE（DELETE）：从服务器删除资源。

还有三个不常用的HTTP动词。

- PATCH（UPDATE）：在服务器更新(更新)资源（客户端提供改变的属性）。
- HEAD：获取资源的元数据。
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

下面是一些例子。

```http
GET /zoos：列出所有动物园
POST /zoos：新建一个动物园（上传文件）
GET /zoos/ID：获取某个指定动物园的信息
PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
DELETE /zoos/ID：删除某个动物园
GET /zoos/ID/animals：列出某个指定动物园的所有动物
DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物
```

### 5. 过滤信息（Filtering）

如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。

下面是一些常见的参数。

```http
?limit=10：指定返回记录的数量
?offset=10：指定返回记录的开始位置。
?page=2&per_page=100：指定第几页，以及每页的记录数。
?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
?animal_type_id=1：指定筛选条件
```

参数的设计允许存在冗余，即允许API路径和URL参数偶尔有重复。比如，GET /zoos/ID/animals 与 GET /animals?zoo_id=ID 的含义是相同的。

### 6. 状态码（Status Codes）

服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）。

> - 200 OK - [GET]：服务器成功返回用户请求的数据
> - 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
> - 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
> - 204 NO CONTENT - [DELETE]：用户删除数据成功。
> - 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作
> - 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
> - 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
> - 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
> - 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
> - 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
> - 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
> - 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。

状态码的完全列表参见[这里](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)或[这里](https://zh.wikipedia.org/wiki/HTTP状态码)。

### 7. 错误处理（Error handling）

如果状态码是4xx，服务器就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。

```json
{
  error: "Invalid API key"
}
```

### 8. 返回结果

针对不同操作，服务器向用户返回的结果应该符合以下规范。

- GET /collection：返回资源对象的列表（数组）
- GET /collection/resource：返回单个资源对象
- POST /collection：返回新生成的资源对象
- PUT /collection/resource：返回完整的资源对象
- PATCH /collection/resource：返回完整的资源对象
- DELETE /collection/resource：返回一个空文档

### 9. 超媒体（Hypermedia API）

RESTful API最好做到Hypermedia（即返回结果中提供链接，连向其他API方法），使得用户不查文档，也知道下一步应该做什么。

比如，Github的API就是这种设计，访问[api.github.com](https://api.github.com/)会得到一个所有可用API的网址列表。

```json
{
  "current_user_url": "https://api.github.com/user",
  "authorizations_url": "https://api.github.com/authorizations",
  // ...
}
```

从上面可以看到，如果想获取当前用户的信息，应该去访问[api.github.com/user](https://api.github.com/user)，然后就得到了下面结果。

```json
{
  "message": "Requires authentication",
  "documentation_url": "https://developer.github.com/v3"
}
```

上面代码表示，服务器给出了提示信息，以及文档的网址。

### 10. 其他

服务器返回的数据格式，应该尽量使用JSON，避免使用XML。



# REST接口开发的核心任务

### 视图 - 接口 - API 中主要做的事情

- 将请求的数据(JSON)转换为模型类对象
- 操作数据库
- 将模型类对象转换为响应的数据(JSON)
- 在开发REST API接口时，我们在**视图**中需要做的最核心的事是
- **将数据库数据序列化为前端所需要的格式，并返回；**
- **将前端发送的数据反序列化为模型类对象，并保存到数据库中。**



# 反序列化使用

### 验证

使用序列化器进行反序列化时，需要对数据进行验证后，才能获取验证成功的数据或保存成模型类对象。

在获取反序列化的数据前，必须调用**is_valid()**方法进行验证，验证成功返回True，否则返回False。

验证失败，可以通过序列化器对象的**errors**属性获取错误信息，返回字典，包含了字段和字段的错误。如果是非字段错误，可以通过修改REST framework配置中的**NON_FIELD_ERRORS_KEY**来控制错误字典中的键名。

验证成功，可以通过序列化器对象的**validated_data**属性获取数据。

在定义序列化器时，指明每个字段的序列化类型和选项参数，本身就是一种验证行为。

如我们前面定义过的BookInfoSerializer

```
class BookInfoSerializer(serializers.Serializer):
    """图书数据序列化器"""
    id = serializers.IntegerField(label='ID', read_only=True)
    btitle = serializers.CharField(label='名称', max_length=20)
    bpub_date = serializers.DateField(label='发布日期', required=False)
    bread = serializers.IntegerField(label='阅读量', required=False)
    bcomment = serializers.IntegerField(label='评论量', required=False)
    image = serializers.ImageField(label='图片', required=False)
```

通过构造序列化器对象，并将要反序列化的数据传递给data构造参数，进而进行验证

### 保存

如果在验证成功后，想要基于validated_data完成数据对象的创建，可以通过实现create()和update()两个方法来实现。

```python
class BookInfoSerializer(serializers.Serializer):
    """图书数据序列化器"""
    ...

    def create(self, validated_data):
        """新建"""
        return BookInfo(**validated_data)

    def update(self, instance, validated_data):
        """更新，instance为要更新的对象实例"""
        instance.btitle = validated_data.get('btitle', instance.btitle)
        instance.bpub_date = validated_data.get('bpub_date', instance.bpub_date)
        instance.bread = validated_data.get('bread', instance.bread)
        instance.bcomment = validated_data.get('bcomment', instance.bcomment)
        return instance
```

如果需要在返回数据对象的时候，也将数据保存到数据库中，则可以进行如下修改

```python
class BookInfoSerializer(serializers.Serializer):
    """图书数据序列化器"""
    ...

    def create(self, validated_data):
        """新建"""
        return BookInfo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """更新，instance为要更新的对象实例"""
        instance.btitle = validated_data.get('btitle', instance.btitle)
        instance.bpub_date = validated_data.get('bpub_date', instance.bpub_date)
        instance.bread = validated_data.get('bread', instance.bread)
        instance.bcomment = validated_data.get('bcomment', instance.bcomment)
        instance.save()
        return instance
```

实现了上述两个方法后，在反序列化数据的时候，就可以通过save()方法返回一个数据对象实例了

```python
book = serializer.save()
```

如果创建序列化器对象的时候，没有传递instance实例，则调用save()方法的时候，create()被调用，相反，如果传递了instance实例，则调用save()方法的时候，update()被调用。

```python
from db.serializers import BookInfoSerializer
data = {'btitle': '封神演义'}
serializer = BookInfoSerializer(data=data)
serializer.is_valid()  # True
serializer.save()  # <BookInfo: 封神演义>

from db.models import BookInfo
book = BookInfo.objects.get(id=2)
data = {'btitle': '倚天剑'}
serializer = BookInfoSerializer(book, data=data)
serializer.is_valid()  # True
serializer.save()  # <BookInfo: 倚天剑>
book.btitle  # '倚天剑'
```

#### 两点说明：

1） 在对序列化器进行save()保存时，可以额外传递数据，这些数据可以在create()和update()中的validated_data参数获取到

```python
serializer.save(owner=request.user)
```

2）默认序列化器必须传递所有required的字段，否则会抛出验证异常。但是我们可以使用partial参数来允许部分字段更新

```python
# Update `comment` with partial data
serializer = CommentSerializer(comment, data={'content': u'foo bar'}, partial=True)
```

