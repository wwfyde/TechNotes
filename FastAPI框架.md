# FastAPI框架

> Web Framework | Web框架

## Links

- https://github.com/zhanymkanov/fastapi-best-practices
- https://github.com/Kludex/fastapi-tips
- https://deepwiki.com/zhanymkanov/fastapi-best-practices

### 参考项目

- [langflow](https://github.com/langflow-ai/langflow)
- [bisheng](https://github.com/dataelement/bisheng)
- [langchain-extract](https://github.com/langchain-ai/langchain-extract)
- [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix)

#### DDD架构参考

- https://github.com/NEONKID/fastapi-ddd-example

### 文章记录

- [rate-limit: 限流, Rate limiting using Python and Redis](https://dev.to/astagi/rate-limiting-using-python-and-redis-58gk)

## 技巧

- 交互式API文档
    - http://127.0.0.1:8000/docs
    - 类似于django的DRF框架




FastAPI stands on the shoulders of giants:

- [Starlette](https://www.starlette.io/) for the web parts.
- [Pydantic](https://docs.pydantic.dev/) for the data parts.



## 概览

> - Background tasks for long-running processes
> -  Rate limiting using libraries like slowapi
> - Real-time features with WebSockets
> - Writing automated tests using Pytest and HTTPX
> - Integrating caching with Redis
> - Adding middleware and custom exception handlers
> - Logging and application monitoring



# 核心概念

## 概要

- schema: 整个API纲要, 架构
- endpoint/route: 路由, 单一的API
- operation: 操作, http methods 比如 `GET`, `POST` 
- path operations decorator: 路径操作装饰器
- path operations function: **路径操作函数**: 用于响应路由
    - 端点函数(endpoint function)
    - 视图函数
    - 路由处理函数
    - API函数
    - 请求处理函数
    - 操作函数
    - controller
    - endpoints的集合是 routers, 换句话说, 通过routers来组织endpoint
    
- path parameter: 路径参数, url中的路径的参数
- query parameter: 查询参数, 路径操作函数中的参数中的非路径参数, 默认是查询参数





## ORM

> [参考连接](https://fastapi.tiangolo.com/tutorial/sql-databases/#orms)

> **FastAPI** works with any database and any style of library to talk to the database.
>
> A common pattern is to use an "ORM": an "object-relational mapping" library.
>
> An ORM has tools to convert ("*map*") between *objects* in code and database tables ("*relations*").
>
> With an ORM, you normally create a class that represents a table in a SQL database, each attribute of the class represents a column, with a name and a type.
>
> For example a class `Pet` could represent a SQL table `pets`.
>
> And each *instance* object of that class represents a row in the database.
>
> For example an object `orion_cat` (an instance of `Pet`) could have an attribute `orion_cat.type`, for the column `type`. And the value of that attribute could be, e.g. `"cat"`.
>
> These ORMs also have tools to make the connections or relations between tables or entities.
>
> This way, you could also have an attribute `orion_cat.owner` and the owner would contain the data for this pet's owner, taken from the table *owners*.
>
> So, `orion_cat.owner.name` could be the name (from the `name` column in the `owners` table) of this pet's owner.
>
> It could have a value like `"Arquilian"`.
>
> And the ORM will do all the work to get the information from the corresponding table *owners*when you try to access it from your pet object.
>
> Common ORMs are for example: Django-ORM (part of the Django framework) and SQLAlchemy ORM (part of SQLAlchemy, independent of framework), among others.

FastAPI可以和任何数据库(mysql)以及库依赖(mysqlclient,pymysql)一起工作.

常见的工作模式是 ORM: 对象关系映射库.

ORM工具可以转换/映射 代码中的**对象(objects)**和数据库中的**表(relations)**.

使用ORM, 你创建一个**类(class)**来代表数Ï据库中的一张**表(table)**, 每个**类属性(attribute)**代表了一个**字段(filed)/列(colum)**, 类属性包含了 **字段名称(name)** 和 **字段类型(type)**.

每个类的**实例(instance)**对象代表了数据库中的一**行(row)**/一条**数据(data)**



ORM同时提供了方法用于在表(table)/实体(entity)之间建立连接(connection)/关系(relation).

> 可以通过属性访问的方式访问表之间的关系
>
> 宠物对象, 主人对象, 通过宠物访问宠物的主人.

常见的ORM有Django-ORM和SQLAlchemy.



## 用法



```shell
.
└── sql_app  # 数据库模块
    ├── __init__.py  
    ├── crud.py  # 增删改查
    ├── database.py  # 数据库交互
    ├── main.py  # 操作实例
    ├── models.py  # 模型库
    └── schemas.py  # 

```



1. `database.py`中创建数据库 引擎(连接), 创建会话并绑定引擎, 实例化基础对象;
2. `models.py`中创建数据库模型;
3. `schema.py`中创建数据库模式, 用于数据验证;
4. `main.py`中将所有模型绑定到引擎中;
5. `main.py`中声明数据库连接会话

#### 

## 常见问题

- 同步函数



# 参数

## 路径参数

## 查询参数

## 请求体

## 表单字段

## 请求头

## Cookie参数

## 文件上传

## 依赖注入



# Topics

## on_event

```python
@app.on_event('startup')
```

## 响应



### server-sent events-SSE-text/event-stream

# 基本用法

## read

```python
# with first
with Session(engine) as session:
  statment = select(Hero).where(Hero.age <= 35)
  results = session.exec(statment)
  # 使用 for loop
  for hero in results:
    print(hero)
  # 使用first
  hero = results.first()
	print("Hero:", hero)
  # first or None
  
  

  
```

### where

### get

当出现None data get依然不会报错, 则会返回None

```python
# Code above omitted 👆

def select_heroes():
    with Session(engine) as session:
        hero = session.get(Hero, 1)
        print("Hero:", hero)

# Code below omitted 👇
```



## LIMIT and OFFSET

## Update-更新

raw sql :

```sql
update here set age = 16 where name = "Spider-Boy"
```

use with add and commit and refresh

```shell
# Code above omitted 👆

def update_heroes():
    with Session(engine) as session:
        statement = select(Hero).where(Hero.name == "Spider-Boy")
        results = session.exec(statement)
        hero = results.one()
        print("Hero:", hero)
				
				# set field value
        hero.age = 16
        session.add(hero)
        session.commit()
        session.refresh(hero)

# Code below omitted 👇
```

multiple update

```shell
# Code above omitted 👆

def update_heroes():
    with Session(engine) as session:
        statement = select(Hero).where(Hero.name == "Spider-Boy")  
        results = session.exec(statement)  
        hero_1 = results.one()  
        print("Hero 1:", hero_1)  

        statement = select(Hero).where(Hero.name == "Captain North America")  
        results = session.exec(statement)  
        hero_2 = results.one()  
        print("Hero 2:", hero_2)  

        hero_1.age = 16  
        hero_1.name = "Spider-Youngster"  
        session.add(hero_1)  

        hero_2.name = "Captain North America Except Canada"  
        hero_2.age = 110  
        session.add(hero_2)  

        session.commit()  
        session.refresh(hero_1)  
        session.refresh(hero_2)  

        print("Updated hero 1:", hero_1)  
        print("Updated hero 2:", hero_2)  
    

# Code below omitted 👇
```

## delete

```python
from typing import Optional

from sqlmodel import Field, Session, SQLModel, create_engine, select


class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    secret_name: str
    age: Optional[int] = Field(default=None, index=True)


sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def create_heroes():
    hero_1 = Hero(name="Deadpond", secret_name="Dive Wilson")
    hero_2 = Hero(name="Spider-Boy", secret_name="Pedro Parqueador")
    hero_3 = Hero(name="Rusty-Man", secret_name="Tommy Sharp", age=48)
    hero_4 = Hero(name="Tarantula", secret_name="Natalia Roman-on", age=32)
    hero_5 = Hero(name="Black Lion", secret_name="Trevor Challa", age=35)
    hero_6 = Hero(name="Dr. Weird", secret_name="Steve Weird", age=36)
    hero_7 = Hero(name="Captain North America", secret_name="Esteban Rogelios", age=93)

    with Session(engine) as session:
        session.add(hero_1)
        session.add(hero_2)
        session.add(hero_3)
        session.add(hero_4)
        session.add(hero_5)
        session.add(hero_6)
        session.add(hero_7)

        session.commit()


def update_heroes():
    with Session(engine) as session:
        statement = select(Hero).where(Hero.name == "Spider-Boy")
        results = session.exec(statement)
        hero_1 = results.one()
        print("Hero 1:", hero_1)

        statement = select(Hero).where(Hero.name == "Captain North America")
        results = session.exec(statement)
        hero_2 = results.one()
        print("Hero 2:", hero_2)

        hero_1.age = 16
        hero_1.name = "Spider-Youngster"
        session.add(hero_1)

        hero_2.name = "Captain North America Except Canada"
        hero_2.age = 110
        session.add(hero_2)

        session.commit()
        session.refresh(hero_1)
        session.refresh(hero_2)

        print("Updated hero 1:", hero_1)
        print("Updated hero 2:", hero_2)


def delete_heroes():
    with Session(engine) as session:
        statement = select(Hero).where(Hero.name == "Spider-Youngster")  
        results = session.exec(statement)  
        hero = results.one()  
        print("Hero: ", hero)  

        session.delete(hero)  
        session.commit()  

        print("Deleted hero:", hero)  

        statement = select(Hero).where(Hero.name == "Spider-Youngster")  
        results = session.exec(statement)  
        hero = results.first()  

        if hero is None:  
            print("There's no hero named Spider-Youngster")  
    


def main():
    create_db_and_tables()
    create_heroes()
    update_heroes()
    delete_heroes()


if __name__ == "__main__":
    main()
```

## join





# Middleware

8. Implement a Pure ASGI Middleware instead of `BaseHTTPMiddleware`

> The [`BaseHTTPMiddleware`](https://www.starlette.io/middleware/#basehttpmiddleware) is the simplest way to create a middleware in FastAPI.



> [!Note]
>
> The `@app.middleware("http")` decorator is a wrapper around the `BaseHTTPMiddleware`.

> There were some issues with the `BaseHTTPMiddleware`, but most of the issues were fixed in the latest versions. That said, there's still a performance penalty when using it.

> To avoid the performance penalty, you can implement a [Pure ASGI middleware](https://www.starlette.io/middleware/#pure-asgi-middleware). The downside is that it's more complex to implement.

> Check the Starlette's documentation to learn how to implement a [Pure ASGI middleware](https://www.starlette.io/middleware/#pure-asgi-middleware).

[advanced-middleware](https://fastapi.tiangolo.com/advanced/middleware/)

# 依赖注入



> FastAPI的依赖注入 主要可以用于 注入 服务层对象, 数据库连接等等
>
> Other common terms for this same idea of "dependency injection" are:
> 其他表示“依赖注入”这一相同概念的常见术语有：
>
> - resources
> - providers
> - services
> - injectables
> - components

## 依赖注入的类型注解原理

### 问题：返回类实例时，Annotated 如何注解？

当使用依赖注入时，经常会遇到这样的疑问：依赖函数的返回类型应该注解为 `ChatService()` 还是 `ChatService`？

**简短答案：应该使用 `ChatService`（类型），而不是 `ChatService()`（实例）**

### 原理解释

#### 1. 依赖函数的返回类型注解

```python
# 全局服务实例
chat_service = ChatService()
canvas_service = CanvasService()

# 依赖函数 - 返回类型注解应该使用类型（ChatService），而不是实例（ChatService()）
def get_chat_service() -> ChatService:  # ✅ 正确：使用类型
    return chat_service

def get_canvas_service() -> CanvasService:  # ✅ 正确：使用类型
    return canvas_service
```

**为什么是 `ChatService` 而不是 `ChatService()`？**

- `ChatService` 是一个**类型（Type）**，表示这个函数返回的对象是 ChatService 类的实例
- `ChatService()` 是一个**调用表达式**，会立即创建一个新实例，这不是类型注解的语法
- Python 的类型注解系统（PEP 484）要求使用类型，而不是值

#### 2. 路由函数中的参数注解

```python
from typing import Annotated
from fastapi import Depends

@router.get("/chat_session/{session_id}")
async def get_chat_session(
    session_id: str,
    chat_service: Annotated[ChatService, Depends(get_chat_service)]  # ✅ 正确
):
    return await chat_service.get_chat_history(session_id=session_id)
```

**`Annotated[ChatService, Depends(get_chat_service)]` 的含义：**

- `ChatService`：这是**类型注解**，告诉类型检查器和 IDE 这个参数的类型是 ChatService
- `Depends(get_chat_service)`：这是**元数据**，告诉 FastAPI 如何获取这个参数的值
  - FastAPI 会调用 `get_chat_service()` 函数
  - 将返回的实例注入到 `chat_service` 参数中

#### 3. 完整示例对比

```python
from typing import Annotated
from fastapi import APIRouter, Depends

# ========== 服务类定义 ==========
class ChatService:
    def __init__(self):
        self.sessions = {}
    
    async def get_chat_history(self, session_id: str):
        return self.sessions.get(session_id, [])

class CanvasService:
    def __init__(self):
        self.canvases = {}
    
    async def get_canvas(self, canvas_id: str):
        return self.canvases.get(canvas_id)

# ========== 全局实例（单例模式）==========
chat_service = ChatService()
canvas_service = CanvasService()

# ========== 依赖函数 ==========
# ✅ 正确：返回类型注解使用类型
def get_chat_service() -> ChatService:
    """返回全局 ChatService 实例"""
    return chat_service

def get_canvas_service() -> CanvasService:
    """返回全局 CanvasService 实例"""
    return canvas_service

# ❌ 错误示例：不要这样写
# def get_chat_service() -> ChatService():  # 语法错误！
#     return chat_service

# ========== 路由函数 ==========
router = APIRouter()

@router.get("/chat_session/{session_id}")
async def get_chat_session(
    session_id: str,
    # chat_service 参数的类型是 ChatService
    # FastAPI 会调用 get_chat_service() 获取实例并注入
    chat_service: Annotated[ChatService, Depends(get_chat_service)]
):
    """
    Annotated 的两个参数：
    1. ChatService - 类型注解，用于类型检查
    2. Depends(get_chat_service) - 告诉 FastAPI 如何获取实例
    """
    return await chat_service.get_chat_history(session_id=session_id)

@router.get("/canvas/{canvas_id}")
async def get_canvas(
    canvas_id: str,
    canvas_service: Annotated[CanvasService, Depends(get_canvas_service)]
):
    return await canvas_service.get_canvas(canvas_id=canvas_id)
```

#### 4. 工作流程

当请求到达时，FastAPI 的依赖注入系统按以下步骤工作：

1. **解析注解**：FastAPI 看到 `Annotated[ChatService, Depends(get_chat_service)]`
2. **识别依赖**：发现 `Depends(get_chat_service)`，知道需要调用 `get_chat_service` 函数
3. **调用依赖函数**：执行 `get_chat_service()`，获得 ChatService 实例
4. **类型验证**：验证返回的实例是否符合 `ChatService` 类型
5. **参数注入**：将实例注入到路由函数的 `chat_service` 参数中
6. **执行路由**：使用注入的实例执行路由函数逻辑

#### 5. 其他注解方式（向后兼容）

```python
# 方式 1：使用 Annotated（推荐，Python 3.9+）
async def endpoint1(
    chat_service: Annotated[ChatService, Depends(get_chat_service)]
):
    pass

# 方式 2：使用默认值（旧式写法，仍然支持）
async def endpoint2(
    chat_service: ChatService = Depends(get_chat_service)
):
    pass

# 两种方式功能相同，但 Annotated 方式更符合现代 Python 类型注解标准
```

### 总结

| 位置 | 正确写法 | 错误写法 | 说明 |
|------|---------|---------|------|
| 依赖函数返回类型 | `-> ChatService` | `-> ChatService()` | 使用类型，不是实例 |
| 路由函数参数类型 | `chat_service: Annotated[ChatService, ...]` | `chat_service: Annotated[ChatService(), ...]` | 第一个参数是类型 |
| 依赖函数返回值 | `return chat_service` | - | 返回实例对象 |

**核心原则：**
- 类型注解位置使用**类型**（`ChatService`）
- 函数返回和赋值使用**实例**（`chat_service` 变量或 `ChatService()` 调用）
- `Annotated` 的第一个参数永远是类型，第二个参数是 FastAPI 的元数据（如 `Depends`）

# 全局共享状态

> 全局服务, 全局状态, 
>
> 全局共享状态 与 多worker问题, 通常应该为每个worker 维护一个全局对象, 否则应使用Redis等分布式方案

# 初始化



创建APP的时候初始化服务层对象, 以方便

# 高级用法

## 直接使用Request

```shell
```

## lifespan

- https://www.starlette.io/lifespan/
- https://asgi.readthedocs.io/en/latest/specs/lifespan.html
- https://fastapi.tiangolo.com/advanced/events/



## (全局异常处理)Install custom exception handlers

- [Install custom exception handlers](https://fastapi.tiangolo.com/tutorial/handling-errors/#install-custom-exception-handlers)
- [handling-errors](https://fastapi.tiangolo.com/tutorial/handling-errors/)

基本思路是捕获特定类型的异常, 然后针对异常作出特定的响应

```python
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse


class UnicornException(Exception):
    def __init__(self, name: str):
        self.name = name


app = FastAPI()


@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request: Request, exc: UnicornException):
    return JSONResponse(
        status_code=418,
        content={"message": f"Oops! {exc.name} did something. There goes a rainbow..."},
    )


@app.get("/unicorns/{name}")
async def read_unicorn(name: str):
    if name == "yolo":
        raise UnicornException(name=name)
    return {"unicorn_name": name}
```



# Model设计

## Many-to-Many

```python

# Declare Classes / Tables
class BookAuthor(Base):
    __tablename__ = 'book_authors'
    book_id = Column(ForeignKey('books.id'), primary_key=True)
    author_id = Column(ForeignKey('authors.id'), primary_key=True)
    blurb = Column(String, nullable=False)
    book = relationship("Book", back_populates="authors")
    author = relationship("Author", back_populates="books")

class Book(Base):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    authors = relationship("BookAuthor", back_populates="book")

class Author(Base):
    __tablename__ = 'authors'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    books = relationship("BookAuthor", back_populates="author")

```



方式二

```python
book_authors = Table('book_authors', Base.metadata,
    Column('book_id', ForeignKey('books.id'), primary_key=True),
    Column('author_id', ForeignKey('authors.id'), primary_key=True)
)

class Book(Base):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    authors = relationship("Author", secondary="book_authors", back_populates='books')

class Author(Base):
    __tablename__ = 'authors'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    books = relationship("Book", secondary="book_authors", back_populates='authors')

```



# project-layout

```shell
app/
├── api/              # Web相关模块（路由、依赖、错误处理）
│   ├── dependencies/ – 路由依赖定义
│   ├── errors/       – 全局错误处理
│   └── routes/       – API路由定义
├── core/             # 应用核心配置（配置文件、启动事件、日志）
├── db/               # 数据库相关（迁移脚本、CRUD仓库）
│   ├── migrations/   – Alembic 数据库迁移
│   └── repositories/ – 封装所有数据库CRUD操作
├── models/           # Pydantic模型定义
│   ├── domain/       – 核心领域模型（内部使用）
│   └── schemas/      – 用于接口的模式（输入/输出Schema）
├── resources/        # 资源文件（如响应消息模板）
├── services/         # 业务服务（非简单CRUD的业务逻辑）
└── main.py           # 应用入口，创建 FastAPI 实例并配置 [oai_citation:5‡github.com](https://github.com/nsidnev/fastapi-realworld-example-app#:~:text=Project%20structure) [oai_citation:6‡github.com](https://github.com/nsidnev/fastapi-realworld-example-app#:~:text=%E2%94%82%C2%A0%C2%A0%20%E2%94%9C%E2%94%80%E2%94%80%20migrations%20%20,FastAPI%20application%20creation%20and%20configuration)
```



# 最佳实践



- 使用root-path 为路由添加额外的路径` uvicorn  --root-path /api/v1`
  - https://fastapi.tiangolo.com/advanced/behind-a-proxy/#checking-the-current-root_path
- 全局依赖

# Tips

```shell
pip install uvloop httptools # fastapi[all] 默认已安装
```



# 常见需求

## 流量控制(rate control)

限流, 节流, throttling



## 请求数据库接口

## search API 

- [[fastapi_query_utils.py](https://gist.github.com/ghandic/21c27470f6797dd856208a2c68f3e43a)](https://gist.github.com/ghandic/21c27470f6797dd856208a2c68f3e43a)
- https://www.taniarascia.com/rest-api-sorting-filtering-pagination/#filtering
- [REST API: Sorting, Filtering, and Pagination](https://www.taniarascia.com/rest-api-sorting-filtering-pagination/#filtering)
- [Pagination, Filtering, and Sorting](https://specs.openstack.org/openstack/api-wg/guidelines/pagination_filter_sort.html)
- 分页token

## 请求API接口

```python
from fastapi import FastAPI, HTTPException
import httpx

app = FastAPI()

@app.get("/your-endpoint")
async def call_external_api():
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get("http://external-api.com/data")
            response.raise_for_status()
            return response.json()
        except httpx.HTTPStatusError as e:
            # 处理来自外部API的HTTP错误
            raise HTTPException(status_code=e.response.status_code, detail=str(e))
        except httpx.RequestError as e:
            # 处理请求错误（如网络问题）
            raise HTTPException(status_code=500, detail="External API request failed.")
```

## https

```shell
uvicorn main:app --host 0.0.0.0 --port 43044 --ssl-keyfile jumpserver.molook.cn.key --ssl-certfile jumpserver.molook.cn.pem 

```



## 异常处理

- [Handling Errors](https://fastapi.tiangolo.com/tutorial/handling-errors/)

```shell
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse


class UnicornException(Exception):
    def __init__(self, name: str):
        self.name = name


app = FastAPI()


@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request: Request, exc: UnicornException):
    return JSONResponse(
        status_code=418,
        content={"message": f"Oops! {exc.name} did something. There goes a rainbow..."},
    )


@app.get("/unicorns/{name}")
async def read_unicorn(name: str):
    if name == "yolo":
        raise UnicornException(name=name)
    return {"unicorn_name": name}
```



## 分页-Pagination



```python
@router.get('/textures')
async def read_textures(
        *,
        page: Annotated[int | None, Query(gt=0, )] = 1,
        size: Annotated[int | None, Query(gt=0)] = 20,
        sort_by: str | None = None,
        filter: str | None = None,
        db: Session = Depends(get_db_molook_uat),
):
    offset = (page - 1) * size
    stmt = select(Texture).offset(offset).limit(size)
    textures = db.scalars(stmt).all()
    total = db.query(Texture).count()
    pages = -(-total // size)

    return dict(items=textures,
                page=page,
                size=size,
                pages=pages,
                total=total
                )
```



# starlette



# pydantic

> 移步[Python包参考](Python包参考)

# alembic

```shell
```



# SQLAlchemy

# fastapi-cache

https://github.com/long2ice/fastapi-cache
