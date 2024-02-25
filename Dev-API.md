# API

## 参考资料

### 规范

- Google Cloud API Design Guide
- Microsoft REST API Guidelines
- GitHub API 

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

