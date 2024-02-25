# FastAPI框架

> Web Framework | Web框架

## 学习资源

### 文章记录

- [rate-limit: 限流, Rate limiting using Python and Redis](https://dev.to/astagi/rate-limiting-using-python-and-redis-58gk)

## 技巧

- 交互式API文档
    - http://127.0.0.1:8000/docs
    - 类似于django的DRF框架





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



# 常见需求

## 流量控制(rate control)

限流, 节流, throttling



## 请求数据库接口

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
uvicorn main:app --host 0.0.0.0 --port 443 --ssl-keyfile jumpserver.molook.cn.key --ssl-certfile jumpserver.molook.cn.pem 

```



# starlette



# pydantic

> 移步[Python包参考](Python包参考)

# alembic

```shell
```



# SQLAlchemy
