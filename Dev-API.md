# API

## 参考资料

### 规范

- Google Cloud API Design Guide
- Microsoft REST API Guidelines
- GitHub API 
- https://docs.github.com/en/rest?apiVersion=2022-11-28
- https://docs.github.com/en/rest/about-the-rest-api/api-versions?apiVersion=2022-11-28
- https://docs.github.com/zh/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28
- 资源, resources
- 资源嵌套(resource cross references, nested resources)

### Pictures

![D859272B-5D73-433E-B33F-3A47FFF56BED_1_102_o](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403181012708.jpeg)

## 设计原则



## Overview

- [how-to-improve-api-performance](https://blog.bytebytego.com/p/ep64-how-to-improve-api-performance#§how-to-improve-api-performance)



![No alternative text description for this image](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202312241525349.jpeg)



# Glossary

## API 

### API types

- open/internal api
- public api
- private api



### API types by architecture

- monolithic
- Microservice
- Composite 
- Unified 

### API protocols

- REST
- RPC
- GraphQL
- soap

# 参考规范

## GitHub

https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28

### [HTTP method](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28#http-method)

The HTTP method of an endpoint defines the type of action it performs on a given resource. Some common HTTP methods are `GET`, `POST`, `DELETE`, and `PATCH`. The REST API reference documentation provides the HTTP method for every endpoint.

For example, the HTTP method for the ["List repository issues" endpoint](https://docs.github.com/en/rest/issues/issues#list-repository-issues) is `GET`."

Where possible, the GitHub REST API strives to use an appropriate HTTP method for each action.

- `GET`: Used for retrieving resources.
- `POST`: Used for creating resources.
- `PATCH`: Used for updating properties of resources.
- `PUT`: Used for replacing resources or collections of resources.
- `DELETE`: Used for deleting resources.

## Microsoft

https://learn.microsoft.com/en-us/graph/use-the-api

### http methods

| **Method** | **Description**                                              |
| :--------- | :----------------------------------------------------------- |
| GET        | Read data from a resource.                                   |
| POST       | Create a new resource, or perform an action.                 |
| PATCH      | Update a resource with new values, or upsert a resource (create if resource doesn't exist, update otherwise). |
| PUT        | Replace a resource with a new one.                           |
| DELETE     | Remove a resource.                                           |

- For the CRUD methods `GET` and `DELETE`, no request body is required.
- The `POST`, `PATCH`, and `PUT` methods require a request body, usually specified in JSON format, that contains additional information, such as the values for properties of the resource.



# 性能优化

<video src="https://video.twimg.com/tweet_video/GCDAdBmbwAAuKXN.mp4"></video>



# 最佳实践



## 速率限制(Rate limits)

### 参考文档

- https://platform.openai.com/docs/guides/rate-limits?context=tier-free



# 示例

```jsonc
// 正确返回示例
{
  "status_code": 200,
  "message": "Request successful",
  "data": {
    // ...实际的响应数据...
  },
  "error": null,
  "metadata": {
    // ...额外的元数据，比如分页信息...
  }
}
```



```shell
// 错误返回示例
{
  "status_code": 404,
  "message": "Resource not found",
  "data": null,
  "error": {
    "error_code": "RESOURCE_NOT_FOUND",
    "error_message": "The requested resource does not exist"
  },
  "metadata": null
}

```

