# FastAPI框架

> Web Framework | Web框架

## Links

- https://github.com/zhanymkanov/fastapi-best-practices
- https://github.com/Kludex/fastapi-tips

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



## 



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
