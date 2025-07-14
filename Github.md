# Github

```text
GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.
```
## 参考资料
- [](参考手册.md/#Github)

## 拉取请求(pull request)

### PR 提交流程

1. Fork 本仓库
2. 在提交 PR 之前，请先创建 issue 讨论你想要做的修改
3. 为你的修改创建一个新的分支
4. 请为你的修改添加相应的测试
5. 确保你的代码能通过现有的测试
6. 请在 PR 描述中关联相关 issue，格式为 `fixes #<issue编号>`
7. 等待合并！****

## 贡献(Contribution)

## Accounts

[测试 SSH 连接](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)



## Repos

### libraries/frameworks

例如：openai-python, redis-py, requests

最佳实践：

使用 src 布局

包含详细的 README.md

提供完整的文档

包含测试目录

使用 setup.py 或 pyproject.toml 进行包配置

目录结构：

```shell
project_name/
├── src/
│   └── project_name/
│       ├── __init__.py
│       └── core.py
├── tests/
├── docs/
├── README.md
├── LICENSE
├── setup.py 或 pyproject.toml
└── requirements.txt
```



### tools(推荐)

例如：logfire, black, flake8

最佳实践：

提供命令行接口

包含使用示例

考虑添加配置文件支持

目录结构：

```shell
tool_name/
├── tool_name/
│   ├── __init__.py
│   ├── cli.py
│   └── core.py
├── tests/
├── README.md
├── LICENSE
├── setup.py 或 pyproject.toml
└── requirements.txt
```



### applications

例如：web 应用、桌面应用

最佳实践：

使用适当的框架（如 Flask, Django, PyQt）

包含配置文件

提供部署说明

目录结构：

```shell
app_name/
├── app_name/
│   ├── __init__.py
│   ├── main.py
│   ├── models.py
│   ├── views.py
│   └── templates/
├── tests/
├── config/
├── README.md
├── requirements.txt
└── Dockerfile (如果适用)
```



### projects(机器学习项目)

例如：scikit-learn, pandas

最佳实践：

包含数据处理脚本

提供模型训练和评估代码

考虑添加 Jupyter notebooks

目录结构：

```python
project_name/
├── data/
├── notebooks/
├── src/
│   ├── __init__.py
│   ├── data_processing.py
│   ├── model.py
│   └── evaluation.py
├── tests/
├── README.md
└── requirements.txt
```



### scripts

```python
script_collection/
├── scripts/
│   ├── script1.py
│   └── script2.py
├── utils/
│   └── common.py
├── README.md
└── requirements.txt
```



### plugins/extensions

## 布局风格概述

- rust cargo 主要采用src布局, 大型项目可能使用modular布局
- python 主要 也有src布局, modular布局, flat布局
- Go 主要采用flat布局, 大型项目可能使用modular布局


### 布局风格-flat-structure

### 布局风格-src布局

> Python采用次布局
> Rust Cargo采用此布局
> 


Python:
传统上使用 Flat Layout
现代项目越来越多地采用 Src Layout
大型项目可能使用 Modular Layout

### 布局风格-modular-strucure 

### 布局风格-layered-structure

pytorch 等大型项目

### 布局风格—namespace-structure

Java/C# 主要采用此布局, 不做研究




# Search

## Regular Expression

```shell
/axum\s*=\s*\{\s*version\s*=\s*"0\.8/ /sea-orm/ path:**/cargo.toml
```



## qualifier-修饰语

> https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories

saved:

多`topic`搜索:

```shell
topic:python topic:machine-learning
```



# Actions

## 概述

### 多维解释

- CI/CD 持续集成, 持续部署

### 应用场景

### 核心概念

工作流(workflow), 由一系列步骤或操作组成的自动化过程, 它可以被事件触发

事件(event)

操作(operation)

作业(job)

步骤()



## 快速上手

## 效率技巧



# comfyui

# dify



## 配置代理

```shell
```

## 新建账号

````shell
## 账号

```shell
docker exec -it docker-api-1 /bin/bash


flask create-user
flask create-tenant

```
````

