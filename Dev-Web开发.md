# Web开发

Dev-Web 

Web

web编程

该文档首要参考文档, MDN

- [web开发技术-MDN](https://developer.mozilla.org/zh-CN/docs/Web)
- https://developer.mozilla.org/en-US/docs/Web
- https://developer.mozilla.org/en-US/docs/Web/Guide



web开发技术-Google

# 核心思想

web级别:布局, 配置, 视图, 路由, 组件, 状态, 工具utils

工程级别: 应用application, 源码source, 构建build, 生成distribute



# Glossary

MFA



# 安全-Security



# Authentication and Authorization

## Links

- https://blog.bytebytego.com/p/password-session-cookie-token-jwt

## oAuth2(开放授权)



> keyword: jwt, bearer, Password(and hashing)
>
> 参考链接
>
> - https://auth0.com/intro-to-iam/what-is-oauth-2
> - https://datatracker.ietf.org/doc/html/rfc6749
> - [极客时间:141-OAuth2.0实践课](/Volumes/Backup/VideoTutorials/141-OAuth 2.0实战课)



Introduction

- 提问: 什么是OAuth2
- OAuth 2.0（开放授权）是一个授权框架，允许第三方应用程序在用户与资源拥有者（例如一个网站）之间进行安全的授权交互。它的设计旨在允许资源的拥有者可以将受保护的资源提供给第三方，而无需分享自己的凭证（用户名和密码）。
- OAuth 2.0（开放授权）是一个授权框架，允许第三方应用程序在用户与资源拥有者（例如一个网站）之间进行安全的授权交互。它的设计旨在允许资源的拥有者可以将受保护的资源提供给第三方，而无需分享自己的凭证（用户名和密码）。
- OAuth 2.0 定义了以下几个主要的角色：
    1. **资源拥有者**（Resource Owner）：通常是最终用户，他拥有受保护资源的访问权限。
    2. **客户端**（Client）：第三方应用程序，它想要访问受保护资源。它需要得到授权才能访问资源。
    3. **授权服务器**（Authorization Server）：负责验证资源拥有者的身份并颁发访问令牌给客户端。它通常是一个独立的服务。
    4. **资源服务器**（Resource Server）：存储受保护资源的服务器，负责对受保护资源进行访问控制。
    5. **访问令牌**（Access Token）：授权服务器颁发的令牌，用于访问受保护资源。
- OAuth 2.0 定义了四种授权方式：
    1. **授权码模式**（Authorization Code Flow）：适用于客户端能够安全保护授权码的情况，一般用于 Web 应用。

    1. **隐式授权模式**（Implicit Grant）：适用于一些客户端能够安全保护访问令牌的情况，一般用于前端单页应用。

    1. **密码模式**（Resource Owner Password Credentials Grant）：适用于受信任的应用程序，例如原生移动应用，可以直接使用资源拥有者的用户名和密码来获取访问令牌。

    1. **客户端凭证模式**（Client Credentials Grant）：适用于只有自己可以访问受保护资源的客户端，通常用于服务器间通信。

- OAuth 2.0 提供了一个灵活且安全的方式来授权第三方应用程序访问受保护资源，同时避免了资源拥有者直接与第三方应用分享凭证的安全隐患。这使得用户可以有选择性地授权应用程序，同时保护了他们的敏感信息。
- 需要注意的是，OAuth 2.0 本身只是一个授权框架，它并没有规定具体的实现细节。因此，不同的服务提供商（如Google、Facebook等）可能会有自己的实现方式，但它们都遵循了 OAuth 2.0 的基本原则。





### OAuth2 scopes

> In OAuth2 a "scope" is just a string that declares a specific permission required.
>
> It doesn't matter if it has other characters like `:` or if it is a URL.
>
> Those details are implementation specific.
>
> For OAuth2 they are just strings.
>
> scope(域)是一个用于声明特定必需权限的字符串. 它不关心这个字符串是`:`格式或是一个URL. 这些详情都有特定的实现, 对OAuth2来讲, 它们仅仅是字符串.



### identity provider(IdP)

> https://www.cloudflare.com/learning/access-management/what-is-an-identity-provider/

## jwt

jwt 是明文的, 但是他是签名的, 当收到自己签发出的token时, 可以核实该token是否为你签发的

## SQL injection

## TOP10

> https://owasp.org/Top10/zh_CN/A01_2021-Broken_Access_Control/

### 权限控制

### 加密机制

注入式攻击

不安全设计

安全设定缺陷

危险或过旧的组件

### 认证及验证机制

### 软件及资料完整性失效

### 安全记录及监控失效

### 服务端请求伪造

# SSO



# OAUTH2

# **RFC**

> [!Note]
>
> #### 什么是 RFC 7519？
>
> RFC 7519 定义了 JSON Web Token (JWT)，它是一种紧凑的、URL 安全的、用于在各方之间传输声明的方式。JWT 由三部分组成：头部 (Header)、载荷 (Payload) 和签名 (Signature)。
>
> #### JWT 的组成部分
>
> 1. **头部 (Header)**：
>
>     - 通常包含两个部分：令牌类型 (`typ`)，即 `JWT`，以及所使用的签名算法 (`alg`)，如 `HS256` 或 `RS256`。
>
>     - 示例：
>
>         ```
>         json
>         Copy code
>         {
>           "alg": "HS256",
>           "typ": "JWT"
>         }
>         ```
>
> 2. **载荷 (Payload)**：
>
>     - 包含声明 (Claims)。声明是关于实体 (通常是用户) 以及其他数据的陈述。
>
>     - 声明有三种类型：注册声明 (Registered Claims)、公开声明 (Public Claims) 和私有声明 (Private Claims)。
>
>     - 注册声明（可选但推荐使用）包括：
>
>         - `iss` (issuer)：发布者
>         - `sub` (subject)：主题
>         - `aud` (audience)：接收者
>         - `exp` (expiration time)：过期时间
>         - `nbf` (not before)：生效时间
>         - `iat` (issued at)：发布时间
>         - `jti` (JWT ID)：唯一标识符
>
>     - 示例：
>
>         ```
>         json
>         Copy code
>         {
>           "sub": "1234567890",
>           "name": "John Doe",
>           "admin": true
>         }
>         ```
>
> 3. **签名 (Signature)**：
>
>     - 为了生成签名，你需要对头部和载荷进行编码，然后使用指定的算法和密钥进行签名。
>
>     - 生成过程如下：
>
>         ```
>         plaintext
>         Copy code
>         HMACSHA256(
>           base64UrlEncode(header) + "." + base64UrlEncode(payload),
>           secret)
>         ```
>
> #### JWT 的工作原理
>
> 1. **生成 JWT**：
>     - 客户端使用头部、载荷和一个密钥生成 JWT。
>     - 头部和载荷被 Base64Url 编码，然后用密钥签名。
> 2. **传输 JWT**：
>     - JWT 通常在 HTTP 头部中传输，例如 `Authorization: Bearer <token>`。
>     - 也可以在 URL 参数或请求体中传输。
> 3. **验证 JWT**：
>     - 接收方使用相同的密钥和算法来验证 JWT 的签名是否正确。
>     - 如果签名正确且未过期，接收方将信任声明内容。
>
> #### 安全注意事项
>
> 1. **选择合适的算法**：
>     - 推荐使用 `HS256` 或 `RS256` 等安全算法。
>     - 避免使用不安全的算法或将算法设置为 `none`。
> 2. **保护签名密钥**：
>     - 确保签名密钥的安全，不被未授权方获取。
> 3. **验证所有声明**：
>     - 检查 `exp`、`nbf`、`iss`、`aud` 等声明，确保 JWT 的有效性和可信度。
>
> #### 示例代码
>
> 以下是一个使用 Python 生成和验证 JWT 的示例：
>
> ```python
> python
> Copy code
> import jwt
> import datetime
> 
> # 秘钥
> SECRET_KEY = "your_secret_key"
> 
> # 生成 JWT
> def create_jwt():
>     payload = {
>         "sub": "1234567890",
>         "name": "John Doe",
>         "iat": datetime.datetime.utcnow(),
>         "exp": datetime.datetime.utcnow() + datetime.timedelta(seconds=3600)
>     }
>     token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
>     return token
> 
> # 验证 JWT
> def verify_jwt(token):
>     try:
>         decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
>         return decoded
>     except jwt.ExpiredSignatureError:
>         return "Token has expired"
>     except jwt.InvalidTokenError:
>         return "Invalid token"
> 
> # 测试生成和验证 JWT
> token = create_jwt()
> print("Generated Token:", token)
> 
> decoded = verify_jwt(token)
> print("Decoded Token:", decoded)
> ```
>
> 通过以上概述和示例代码，您可以快速了解和使用 JWT 来实现安全的令牌认证机制。



# **最佳实践**

## https证书签发

### openssl

```shell
# 生成私钥
openssl genrsa -out private.key 2048
# 创建证书签名请求
openssl req -new -key private.key -out certificate.csr
# 使用私钥和csr生成自签名证书
openssl x509 -req -days 3600 -in certificate.csr -signkey private.key -out certificate.crt
# 验证证书
openssl x509 -text -noout -in certificate.crt


```

## https配置

要保证安全 必须保证 域名访问且为443

# WebHook

Webhook 是 Web 开发中的一种技术，用于将事件通知发送到其他应用程序或服务。Webhook 通常用于以下场景：

- 当用户在您的应用程序中执行某些操作时，通知其他应用程序或服务。例如，当用户在您的网站上创建新帐户时，您可以使用 Webhook 通知您的 CRM 系统。
- 当您的应用程序中的状态发生变化时，通知其他应用程序或服务。例如，当您的应用程序中的订单状态发生变化时，您可以使用 Webhook 通知您的支付处理器。
- 当您的应用程序中发生错误时，通知其他应用程序或服务。例如，当您的应用程序中的服务器发生故障时，您可以使用 Webhook 通知您的监控系统。

Webhook 的工作原理是：

1. 您的应用程序将 Webhook 的 URL 注册到另一个应用程序或服务。
2. 当您的应用程序中发生事件时，它将使用 HTTP POST 请求将事件数据发送到 Webhook 的 URL。
3. 另一个应用程序或服务将接收事件数据并采取相应的操作。

Webhook 可以使用各种技术来实现，例如 HTTP POST 请求、MQTT 消息或 WebHooks API。

在 Web 开发中，Webhook 可以用于以下场景：

- **通知用户事件。例如，当用户在您的网站上创建新文章时，您可以使用 Webhook 通知用户。**
- **集成第三方应用程序。例如，您可以使用 Webhook 将您的应用程序与 Slack 或 Twitter 集成。**
- **实现自动化。例如，您可以使用 Webhook 将您的应用程序与 CRM 系统或支付处理器集成。**



# **状态码**

HTTP Status Code

status_code

## 参考资料

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## quickstart

| code    | meaning            |                                                              |
| ------- | ------------------ | ------------------------------------------------------------ |
| 100     | Continue           |                                                              |
| 200     |                    |                                                              |
| 201     | Created            |                                                              |
| 204     |                    |                                                              |
| 307     | Temporary redirect | 临时重定向                                                   |
| **400** | bad_request        |                                                              |
| **401** | unauthorized       | key missing or invalid                                       |
| 403     | Forbidden          | permission_denied, 请求未经授权。这个状态码表示缺乏有效的凭据，通常用于需要登录的场景。**权限不足** |
| 404     | not_found          |                                                              |
| 422     | Validation Failed  | 实体/数据验证失败                                            |
| 405     | method_not_allowed | 禁用请求中指定的方法。                                       |
| **500** | server_error       | unexpected error occurred 内部服务器错误                     |
| 501     | Not Implemented    | 服务器不支持请求的功能，无法完成请求                         |
| 502     | bad gateway        | 服务器作为网关或代理，从上游服务器收到无效响应。             |

## 403

已认证, 知道对方身份, 但权限不足,

# DevTool

## 参考资料

- [Google Dev Tools](https://developer.chrome.com/docs/devtools)
- [Safari Web Inspector](https://webkit.org/web-inspector/)

# miniweb框架

## 学习目标

> 静态资源
> 动态资源
> web服务器的作用:web服务器主要是接收⽤户浏览器的请求,根据⽤户的资源请求返回不同的资源. 
> 路由的作用
> 浏览器从请求到显示动态页面的过程
> web开发一般使用成熟的开发框架
> 框架开发思路
> 模块开发思路

## 框架和WEB服务器的关系

前面已经学习过web服务器,我们知道web服务器主要是接收⽤户浏览器的请求,根据⽤户的资源请求返回不同的资源.

框架: 封装了很多工具类 ,利用这些工具包(框架)直接用会极大的提高开发效率, 减少重复干的事情

(Web应用程序 - 模板 - 数据库)模型

## 重要概念

### 静态资源

一旦准备好资源,**不再需要经常变化的资源**, 往往是固定不变的资源. 由于该资源不需要经常变化,所以可以提前准备. 比如png/jpg/css/js等文件

### 动态资源(生成资源)

　    和静态资源相反, 这种**资源会经常变化**.比如,我们要编写一个电商网站, 我们无法预测用户在浏览商品时选择什么样的条件.
　　根据用户选择条件不同, 我们给用户提供可供选择的商品就不同. 这种资源⽆法提前准备.

### 模板文件(结构 - 容器) 

​	在用户搜索各种商品的时候,大家是否发现 虽然大家的条件不同,但是显示商品的网页中除了那些商品信息 整个网页的结构/布局几乎是一模一样的.
　　而模板文件是网页中通用的结构构成的⼀个页面. 这个页面中不含有任何用户需要查看的数据,当用户查询数据的时候会将最终的结果放到模板中形成⽤户真正需要的页面. 
　　这就好比, 生活中⼀个毛坯房可以装饰上不同的风格. 		我们把模板文件转化为 用户真正看到的网页的过程就称为**模板替换**.

### 通信规范

服务器和浏览器之间通信使用HTTP协议

 框架和web服务器之间进行通信也需要一个协议

> 服务器的作用
> 接受客户端请求
> 响应客户端请求
> 调用应用框架获取
> 调用应用框架获取

## 基础框架构建

> 实现访问`.py` 文件 和访问 `.html` 访问不同的内容

## 路由列表(Django)

> 路由的作用
>
> 路由列表配置(路由字典)

根据不同的请求给出不同的响应

路由概念: web后台程序非常重要的一个特点. **路由根据用户的请求, 选择对应的函数来处理相应的请求.** 

## 装饰器路由(flask)

> 使用装饰器路由自动添加路径数据

装饰器路由: 使用装饰器工厂函数接收路径参数, 进而实现装饰器路由

## 模板替换

> 模板替换的具体步骤

使用正则表达式替换内容替换

## JWT - json web token

在用户注册或登录后, 我们想记录用户的登录状态, 或者为用户创建身份认证的凭证. 不推荐使用Session认证机制, 而是使用 Json Web Token 认证机制

涉及到前后端分离时, 一般不采用session / cookie机制, 采用token机制

cookie仅仅在浏览器中有效, APP不能使用cookie

### 什么是JWT

Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。



### token认证和session认证的区别

#### session认证

HTTP协议本事是一种无状态协议. 为了让应用识别出是哪个用户发出的请求, 只能在服务器存储一份用户登录的信息, 这份登录信息会在响应时传递给浏览器, 告诉其保存为cookie, 以便下次请求时发送给服务器应用, 这样就能识别请求来自哪个用户了, 这就是传统的基于session认证.

但是这种基于session的认证使应用本身很难得到扩展, 随着不同客户端用户的增加, 独立的服务器已无法承载更多的用户, 这时候基于session认证应用的问题就会暴露出来

#### session认证存在的问题

**Session**: 每个用户经过我们的应用认证之后，我们的应用都要在服务端做一次记录，以方便用户下次请求的鉴别，通常而言session都是保存在内存中，而随着认证用户的增多，服务端的开销会明显增大。

**扩展性**: 用户认证之后，服务端做认证记录，如果认证的记录被保存在内存中的话，这意味着用户下次请求还必须要请求在这台服务器上,这样才能拿到授权的资源，这样在分布式的应用上，相应的限制了负载均衡器的能力。这也意味着限制了应用的扩展能力。  **扩展性差,session数据如果存在某台服务器,下次访问还得再那台服务器上访问拿取数据, 因此分布式服务器采用Token机制认证**

**CSRF**: 因为是基于cookie来进行用户识别的, cookie如果被截获，用户就会很容易受到**跨站请求伪造**的攻击。

### 基于token的鉴权机制(类似协议)

基于token的鉴权机制类似于http协议也是无状态的，它不需要在服务端去保留用户的认证信息或者会话信息。这就意味着基于token认证机制的应用不需要去考虑用户在哪一台服务器登录了，这就为应用的扩展提供了便利。

流程上是这样的：

- 用户使用用户名密码来请求服务器
- 服务器进行验证用户的信息
- 服务器通过验证发送给用户一个token
- 客户端存储token，并在每次请求时附送上这个token值
- 服务端验证token值，并返回数据

这个token必须要在每次请求时传递给服务端，它应该保存在请求头里， 另外，服务端要支持CORS(跨来源资源共享)策略，一般我们在服务端这么做就可以了Access-Control-Allow-Origin: *。

那么我们现在回到JWT的主题上。

### JWT介绍

JWT是由三段信息构成的，将这三段信息文本用 `.` 链接一起就构成了JWT字符串。

第一部分我们称它为头部 - `header` , 第二部分我们称其为载荷 - `payload` ，第三部分是签证 `signature` .

#### **header**: 声明信息

头部承载两部分信息: 声明类型为 `JWT` , 声明加密的算法- algorithm, 通常直接使用 HMAC SHA256

```json
# 原生信息
{
	'type': 'JWT',
	'alg':'HS256',
}
# 加密后信息, 采用base64加密后, 构成了第一部分.
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9


```

#### **playload**

载荷就是存放有效信息的地方。这个名字像是特指飞机上承载的货品，这些有效信息包含三个部分

- 标准中注册的声明
- 公共的声明
- 私有的声明

**标准中注册的声明** (建议但不强制使用) ：

- **iss**: jwt签发者
- **sub**: jwt所面向的用户
- **aud**: 接收jwt的一方
- **exp**: jwt的过期时间，这个过期时间必须要大于签发时间
- **nbf**: 定义在什么时间之前，该jwt都是不可用的.
- **iat**: jwt的签发时间
- **jti**: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击。

**公共的声明** ： 公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密.

**私有的声明** ： 私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。

定义一个payload:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

然后将其进行base64加密，得到JWT的第二部分。

```
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
```

#### **signature**

JWT的第三部分是一个签证信息，这个签证信息由三部分组成：

- header (base64后的)
- payload (base64后的)
- secret

这个部分需要base64加密后的header和base64加密后的payload使用`.`连接组成的字符串，然后通过header中声明的加密方式进行**加盐**`secret`组合加密，然后就构成了jwt的第三部分。

```javascript
// javascript
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);

var signature = HMACSHA256(encodedString, 'secret'); // TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

将这三部分用`.`连接成一个完整的字符串,构成了最终的jwt:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

**注意：secret是保存在服务器端的，jwt的签发生成也是在服务器端的，secret就是用来进行jwt的签发和jwt的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个secret, 那就意味着客户端是可以自我签发jwt了。**

### 如何应用

一般是在请求头里加入`Authorization`，并加上`Bearer`标注：

```
fetch('api/user/1', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
})
```

服务端会验证token，如果验证通过就会返回相应的资源。整个流程就是这样的:

![jwt](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202309011806356.png)

服务端负责签发token和校验token, 服务端并不存储任何用户信息



验证原理:

```
拿取签名 中的 第一 第二个部分 + secret+ 进行计算 得到一个签名值(signature) 如果与 JWT 的签名值一样就验证通过 这意味着对JWT进行篡改是无意义的
```

djangorestframework-jwt 的作用: 帮助 签发 帮助验证, 但是用户名密码的校验不是由它完成的, 是由Django认证系统来完成的

### 总结

### JWT

- 一种token认证机制
- 也有过期时间
- 本质是包含3个部分用点式连接的的字符串
- 签发时间点: 注册完成后和登录时

#### 优点

- **跨语言支持**, 因为json的通用性，所以JWT是可以进行跨语言支持的，像JAVA,JavaScript,NodeJS,PHP等很多语言都可以使用。
- 因为有了payload部分，所以JWT可以在自身存储一些其他业务逻辑所必要的非敏感信息。
- **便于传输**，jwt的构成非常简单，字节占用很小，所以它是非常便于传输的。
- **易于扩展**, 它不需要在服务端保存会话信息, 所以它易于应用的扩展
- 浏览器不支持cookie, 网页, APP均可用, 更加安全

#### 安全相关

- 不应该在jwt的payload部分存放敏感信息，因为该部分是客户端可解密的部分(用户原始密码一定不能放)。
- 保护好secret私钥，该私钥非常重要。
- 如果可以，请使用https协议

### JWT使用

安装

pip install djangorestframework-jwt



## 分布式系统

> 应用场景: 分布式计算(distributed computation), 分布式存储(distributed storage)
>
> 相关概念: 主从同步, 集群, 负载均衡

### 说明简介

分布式系统是由一组通过网络进行通信、为了完成共同的任务而协调工作的计算机节点组成的系统。分布式系统的出现是为了用廉价的、普通的机器完成单个计算机无法完成的计算、存储任务。其目的是**利用更多的机器，处理更多的数据**。

### 作用特点

### 原理机制

# celery

参考商城项目 - 第二天 - [celery](file:///D:\python就业班19版\05-项目-美多商城-10天\02-北京Python就业班29期-美多商城项目-第02天\1-教学资料\celery\index.html)

### 说明简介

异步任务框架

生产者 - 消费者模型

任务(task) - 任务队列(broker) - **多**处理任务(worker)

# FastDFS - 分布式文件系统

FastDFS 分布式文件系统	

# GraphQL

QraphQL for Python

QraphQL for Django

# Kafka

Apache Kafka是一款开源的消息引擎系统(Messaging System消息队列, 消息中间件)

系统A发送消息给消息引擎系统，系统B从消息引擎系统中读取A发送的消息。

- 消息引擎传输的对象是消息；
- 如何传输消息属于消息引擎设计机制的一部分。

既然消息引擎是用于在不同系统之间传输消息的，那么如何设计待传输消息的格式从来都是一等一的大事。

Kafka的选择：它使用的是纯二进制的字节序列。当然消息还是结构化的，只是在使用之前都要将其转换成二进制的字节序列

消息设计出来之后还不够，消息引擎系统还要设定具体的传输协议，即我用什么方法把消息传输出去。常见
的有两种方法：

- 点对点模型：也叫消息队列模型。如果拿上面那个“民间版”的定义来说，那么系统A发送的消息只能被
    系统B接收，其他任何系统都不能读取A发送的消息。日常生活的例子比如电话客服就属于这种模型：同
    一个客户呼入电话只能被一位客服人员处理，第二个客服人员不能为该客户服务。
- 发布/订阅模型：与上面不同的是，它有一个主题（Topic）的概念，你可以理解成逻辑语义相近的消息容器。该模型也有发送方和接收方，只不过提法不同。发送方也称为发布者（Publisher），接收方称为订阅者（Subscriber）。和点对点模型不同的是，这个模型可能存在多个发布者向相同的主题发送消息，而订阅者也可能存在多个，它们都能接收到相同主题的消息。生活中的报纸订阅就是一种典型的发布/订阅模型

比较酷的是Kafka同时支持这两种消息引擎模型，专栏后面我会分享Kafka是如何做到这一点的。

(主从,不推荐master-slave)Leader-Follower





# HTML

[MDN-HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML)

## introduction

属于表示层, 主要用于创建网页的结构和内容.**主要负责结构**

- 职责：HTML是一种标记语言，用于创建网页的结构和内容。它包括文本、图片、链接以及其他元素。
- 设计思想：HTML的设计思想是提供一种结构化的内容，使得浏览器和其他设备可以理解并正确地显示内容。
- 模式：HTML使用了一种基于标签的模式，来描述文档的结构。
- 所属层：HTML属于表示层，也就是用户在浏览器中看到的部分。



## section

## aside

应用场景: aside通常表现为侧边栏、说明、提示、引用、附加注释、广告等。

`<aside>` 标签定义 `<article>` 标签外的内容。

aside 的内容应该与附近的内容相关。

- 两种用法:
  - 在`article`标签内使用
  - 在 `article` 标签外使用





## table	

```html
<table>
    <thead name="table-head"></thead>
    <tbody name="table-body"></tbody>
    <tfoot name="table-foot"></tfoot>
  <tr name="table-row">
    <th name="table-header-cell">Month</th>
    <th name="table-header-cell">Savings</th>
  </tr>
  <tr>
    <td name="table-data-cell">January</td>
    <td>$100</td>
  </tr>
</table>
```

## column-count

column-width



## button

### submit

提交表单, 默认值, 所以点击时会刷新页面

### button



## 专题 - [高阶文字排版](https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML/Advanced_text_formatting)

### 描述列表 description lists

文字描述
<dl>
  <dt>内心独白</dt><dd>戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。</dd>
  <dt>语言独白</dt>
    <dd>戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。</dd>
  <dt>旁白</dt>
    <dd>戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。</dd>
</dl>

### 概要 - summary

    <details>
        <summary>这是概要</summary>
        <p>这是详情这是详情</p>
   </details>

# Web存储

[Web Storage API -MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API)

Web Storage(Web 存储) 提供了一种方式, 可以让Web页面实现在客户端浏览器中以键值对的形式在本地存储数据. 

*作用*: 在客户端存储数据, 状态保持, 存储元信息, 传统方式采用 `Cookie`实现客户端存储

Web Storage 包含如下两种机制：

- `sessionStorage` 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。
- `localStorage` 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。

这两种机制是通过 [`Window.sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage) 和 [`Window.localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 属性使用（更确切的说，在支持的浏览器中 `Window` 对象实现了 `WindowLocalStorage` 和 `WindowSessionStorage` 对象并挂在其 `localStorage` 和 `sessionStorage` 属性下）—— 调用其中任一对象会创建 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象，通过 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象，可以设置、获取和移除数据项。对于每个源（origin）`sessionStorage` 和 `localStorage` 使用不同的 Storage 对象——独立运行和控制。

**注意：**从Firefox 45开始，当浏览器崩溃或重启时，每个源的存储大小将限制在10M，以避免因过度使用web storage引起的内存问题。

**注意：**若用户[禁用第三方cookie](https://support.mozilla.org/en-US/kb/disable-third-party-cookies)，那么将不允许来自第三方IFrames对Web Storage的访问。（从[Firefox 43](https://developer.mozilla.org/en-US/Firefox/Releases/43)版本开始实行）

**注意：**本地存储不同于mozStorage（Mozilla's XPCOM interfaces to SQLite）或[Session store API](https://developer.mozilla.org/en-US/docs/Session_store_API)（an [XPCOM](https://developer.mozilla.org/en-US/docs/XPCOM) storage utility for use by extensions）。

## localStorage

## sessionStorage



# CSS

CSS (Cascading Style Sheets)

- 职责：CSS是用于描述网页的布局和样式（颜色、字体、间距等）的语言。它允许开发者将样式和内容分离，使得网页更加易于维护和修改。
- 设计思想：CSS的设计思想是分离结构和样式，使得网页的内容可以独立于样式显示。这有助于提高页面的可读性和可访问性。
- 模式：CSS采用了一种声明式的设计模式，允许开发者指定元素的样式。
- 所属层：CSS也属于表示层，但是它更多地负责页面的样式和布局。

# CSS seletor

[MDN-CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

display: display 属性规定元素应该生成的框的类型。

盒子模型 - 传统布局

容器模型 - 新式布局, 基于盒子模型

## 重要说明

当一个两个规则具有相同的选择器时, 系统会按标签项tag重写旧有样式, 而不是整体覆盖, 是部分重写(override) 

```css
/* calss="ant-pro-page-header-wrap wide" */
.ant-pro-page-header-wrap.wide {
    max-width: 1200px;
    margin: 0 auto;
}

/* 添加并覆盖样式 */
        div {
            width: 400px;
            color: #FF0;
        }
        div {
            height: 400px;
        }
        div {
            color: white;
            background-color: black;
            margin: 0 auto;
        }
```



## CSS 优先级

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)



## display

## flex

## white-space - 空白处理方式

wrap 包裹到盒子里

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| normal   | 默认。空白会被浏览器忽略。                                   |
| pre      | 空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。    |
| nowrap   | 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 |
| pre-wrap | 保留空白符序列，但是正常地进行换行。                         |
| pre-line | 合并空白符序列，但是保留换行符。                             |
| inherit  | 规定应该从父元素继承 white-space 属性的值。                  |

## position

| 值                                                           | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [absolute](https://www.runoob.com/css/css-positioning.html#position-absolute) | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| [fixed](https://www.runoob.com/css/css-positioning.html#position-fixed) | 生成固定定位的元素，相对于*浏览器窗口*进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| [relative](https://www.runoob.com/css/css-positioning.html#position-relative) | 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
| [static](https://www.runoob.com/css/css-positioning.html#position-static) | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 |
| [sticky](https://www.runoob.com/css/css-positioning.html#position-sticky) | 粘性定位，该定位基于用户滚动的位置。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。**注意:** Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)。 |
| inherit                                                      | 规定应该从父元素继承 position 属性的值。                     |
| initial                                                      | 设置该属性为默认值，详情查看 [CSS initial 关键字](https://www.runoob.com/cssref/css-initial.html)。 |

### static - 默认, 没有定位, 正常的文档流中, 方向和z-index 无效

### relative - 相对于默认位置的定位, 偏移, 不会脱离文档流

### absolute - 相对于已有定位的父元素(除了static)

### fixed - 相对于浏览器窗口

相对于窗口居中, 

margin: auto;

margin: 0 auto; 左右居中

margin: auto 0; 上下居中

### sticky - 超出目标区域后, 使用固定定位



## float

## clear

*作用对象*: 浮动的对象

清除浮动, 使脱离的文档流, 回到文档流, 后面的元素就会排列到该元素的背后

单向清除浮动, 浮动内容的单向回到文档流, 单向空间可用

| 值      | 描述                                  |
| :------ | :------------------------------------ |
| left    | 在左侧不允许浮动元素。                |
| right   | 在右侧不允许浮动元素。                |
| both    | 在左右两侧均不允许浮动元素。          |
| none    | 默认值。允许浮动元素出现在两侧。      |
| inherit | 规定应该从父元素继承 clear 属性的值。 |

## 伪类与伪元素

### 伪类 - [L](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

CSS **伪类** 是添加到选择器的关键字，指定要选择的元素的特殊状态。例如，[`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 可被用于在用户将鼠标悬停在按钮上时改变按钮的颜色。

```css
/* 所有用户指针悬停的按钮 */
button:hover {
  color: blue;
}
```

伪类连同伪元素一起，他们允许你不仅仅是根据文档 DOM 树中的内容对元素应用样式，而且还允许你根据诸如像导航历史这样的外部因素来应用样式（例如 [`:visited`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited)），同样的，可以根据内容的状态（例如在一些表单元素上的 [`:checked`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)），或者鼠标的位置（例如 [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 让你知道是否鼠标在一个元素上悬浮）来应用样式。

**注意：** 与伪类相反，[`pseudo-elements`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pseudo-elements) 可被用于为一个元素的 *特定部分* 应用样式。

*一个是修饰元素, 一个是修饰类*

### 伪元素 - [L](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)

伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。下例中的 [`::first-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line) 伪元素可改变段落首行文字的样式。

```css
/* 每一个 <p> 元素的第一行。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

### 区别

伪类与伪元素，傻傻分不清楚。

### **伪类(pseudo-classes)**

官方定义:

> The pseudo-class concept is introduced to permit selection based on information that lies outside of the document tree or that cannot be expressed using the other simple selectors.

其核心就是用来选择那些不能够被普通选择器选择的文档之外的元素，比如:hover。

### **伪元素(Pseudo-elements)**

官方定义:

> Pseudo-elements create abstractions about the document tree beyond those specified by the document language. For instance, document languages do not offer mechanisms to access the first letter or first line of an element’s content. Pseudo-elements allow authors to refer to this otherwise inaccessible information. Pseudo-elements may also provide authors a way to refer to content that does not exist in the source document.

其核心就是需要创建通常不存在于文档中的元素，比如::before。

看了它们的定义应该对它们之间的异同有所了解了吧，呵呵 🙃🙃🙃...

### **伪类与伪元素的区别**

- 表示方法

  CSS2 中伪类、伪元素都是以单冒号`:`表示，CSS2.1 后规定伪类用单冒号表示，伪元素用双冒号`::`表示，浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first-line, :first-letter 等)的单冒号写法。对于 CSS2 之后所有新增的伪元素(如::selection)，应该采用双冒号的写法。但是因为兼容性问题，大部分还是用的单冒号。

- 定义不同

  **伪类即假的类，通常可以添加类来达到效果，伪元素即假元素，需要通过添加元素才能达到效果。**来看下面的例子

  **例 1:将一行字符串的首字母变成红色**

  现在不用伪元素应该如何实现？用 CSS slector 选择？想了一晚上也没想出来，既然没法选择也就没法添加一个类来改变首字母的颜色。

  ```
  <p>I am snow</p>
  复制代码
  ```

  添加元素试试，如下，创建一个元素 span 将首字母包裹起来，进而改变其颜色，成功了。这里，关键点在于我们创建了新的元素达到了`::first-letter`的作用，且不能通过添加其他类来实现这一效果，因此将`::first-letter`叫做伪元素而不是伪类。

  ```
    <p><span style={{ color: red }}>I<span/> am snow</p>
  复制代码
  ```

  **例 2: 如下要将 I am snow 这句话变为红色**

  很简单用`:first-child`，同样添加一个类试试，显然很容易达到同样效果，我们并没有创建新的元素只是添加了一个类`.red-line`，因此将`:first-child`叫做伪类而不是伪元素，尽管它和`::first-letter`在语义上十分相似。

  ```
  div:first-child {
   color: red;
  }
  或
  .red-line {
     color: red;
  }
  
  <div class='red-line'>
   <p>I am snow</p>
  <div>
  复制代码
  ```

### **结论**

- 伪类和伪元素都是用来表示文档树以外的"元素"。
- 伪类和伪元素分别用单冒号`:`和双冒号`::`来表示。
- 伪类和伪元素的区别，最关键的点在于如果没有伪元素(或伪类)，是否需要添加元素才能达到目的，如果是则是伪元素，反之则是伪类。

关于常用的伪类与伪元素选择器可以查看[CSS选择器](https://juejin.im/post/5c99d0eee51d4510df61601a)一文。


作者：林晨熙
链接：https://juejin.im/post/5ca19f176fb9a05e711b2132
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## `::before` - [伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)



CSS中，**`::before`** 创建一个[伪元素](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)，其将成为匹配选中的元素的第一个子元素。常通过 [`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content) 属性来为一个元素添加修饰性的内容。此元素默认为行内元素。

```
/* Add a heart before links */
a::before {
  content: "♥";
}
```

**注意:** 由`::before` 和`::after` 生成的伪元素 [包含在元素格式框内](https://www.w3.org/TR/CSS2/generate.html#before-after-content)， 因此不能应用在[替换元素上](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)， 比如[`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 或 [`<br>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br) 元素。

## :root - 根元素

**`:root`** 这个 CSS [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)匹配文档树的根元素。对于 HTML 来说，**`:root`** 表示 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html) 元素，除了[优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)更高之外，与 `html` 选择器相同。



## input

### autocomplete

`autocomplet="off"` 关闭表单历史记录

`autocomplete="on"` 默认, 打开表单记录



## box-sizing

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 中的 **`box-sizing`** 属性定义了 [user agent](https://developer.mozilla.org/zh-CN/docs/Glossary/User_agent) 应该如何计算一个元素的总宽度和总高度。

在 [CSS 盒子模型](https://developer.mozilla.org/en-US/docs/CSS/Box_model)的默认定义里，你对一个元素所设置的 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 与 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 只会应用到这个元素的内容区。如果这个元素有任何的 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 或 [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。

box-sizing 属性可以被用来调整这些表现:

- `content-box` 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- `border-box` 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

## font-size

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)

**`font-size`** [CSS](https://developer.mozilla.org/zh-CN/docs/CSS) 属性指定字体的大小。因为该属性的值会被用于计算em和ex长度单位，定义该值可能改变其他元素的大小。	

```css
/* <absolute-size>，绝对大小值 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* <relative-size>，相对大小值 */
font-size: larger;
font-size: smaller;

/* <length>，长度值 */
font-size: 12px;
font-size: 0.8em;

/* <percentage>，百分比值 */
font-size: 80%;

/* 继承父元素*/
font-size: inherit;
```



# CSS layout

## layout-布局

### 盒子模型

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

## 常见问题

盒子尺寸 : content + border + padding (不包含 margin)

### grid system 栅格

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103641.png)

## 工作原理

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

- 通过`row`在水平方向建立一组`column`（简写col）
- 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<a-col :span="8" />` 来创建
- 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列

### 



## 最佳实践

一般建议 1-4 个栅格即可

1, 1:1, 1:1:1 , 2:1, 1:3



### 传统布局

[参考链接](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

布局的传统解决方案, 基于 盒子模型 , 依赖 `display` + `position` + `float` 属性,

缺陷是无法满足 垂直居中等布局

### Flex 布局

> flexible box - 弹性布局 - 用来为盒状模型提供最大的灵活性。

该模型更加强调, 父子关系, 所以显得比传统布局更加灵活,  

[参考链接](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[A Complete Guide of Flexible](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[参考链接](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

```css
.container {
    display: flex;  // 将容器设置为行内布局
    display: -webkit-flex;  /* Safari 支持 */
    display: inline-flex;  //行内元素的 flex布局
}
```

**设置为弹性布局后, 子元素的 `float` `clear` 和 `vertical-align` 属性都将失效. **

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103654.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## 容器属性

以下6个属性设置在容器上。

- flex-direction: 
- flex-wrap: 
- flex-flow
- justify-content
- align-items
- align-content

### flex-direction属性

`flex-direction`属性决定主轴的方向（即项目的排列方向）。

> ```css
> .box {
> flex-direction: row | row-reverse | column | column-reverse;
> }
> ```

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

### flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103658.png)

> ```css
> .box{
> flex-wrap: nowrap | wrap | wrap-reverse;
> }
> ```

它可能取三个值。

（1）`nowrap`（默认）：不换行。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103725.png)

（2）`wrap`：换行，第一行在上方。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103716.jpg)

（3）`wrap-reverse`：换行，第一行在下方。

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103729.jpg)

### flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

> ```css
> .box {
> flex-flow: <flex-direction> || <flex-wrap>;
> }
> ```

### justify-content属性

`justify-content`属性定义了项目在主轴上的对齐方式。

> ```css
> .box {
> justify-content: flex-start | flex-end | center | space-between | space-around;
> }
> ```

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103734.png)

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

> - `flex-start`（默认值）：左对齐
> - `flex-end`：右对齐
> - `center`： 居中
> - `space-between`：两端对齐，项目之间的间隔都相等。
> - `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### align-items属性

align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。

**提示：**使用每个弹性对象元素的 align-self 属性可重写 align-items 属性。

`align-items`属性定义项目在交叉轴上如何对齐。

> ```css
> .box {
> align-items: flex-start | flex-end | center | baseline | stretch;
> }
> ```

| 值         | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| stretch    | 默认值。元素被拉伸以适应容器。如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。 |
| center     | 元素位于容器的中心。弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。 |
| flex-start | 元素位于容器的开头。弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。 |
| flex-end   | 元素位于容器的结尾。弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。 |
| baseline   | 元素位于容器的基线上。如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。 |
| initial    | 设置该属性为它的默认值。请参阅 [*initial*](https://www.runoob.com/cssref/css-initial.html)。 |
| inherit    | 从父元素继承该属性。请参阅 [*inherit*](https://www.runoob.com/cssref/css-inherit.html)。 |

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103740.png)

它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

> - `flex-start`：交叉轴的起点对齐。
> - `flex-end`：交叉轴的终点对齐。
> - `center`：交叉轴的中点对齐。
> - `baseline`: 项目的第一行文字的基线对齐。
> - `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### align-content属性

`align-content`属性定义了两根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

同时指定了宽度和高度才会生效, 解决垂直方向的对齐方式. 

默认是伸展(空白空间, 平均分配为间隔)

> ```css
> .box {
> align-content: flex-start | flex-end | center | space-between | space-around | stretch;
> }
> ```

| 值            | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| stretch       | 默认值。元素被拉伸以适应容器。各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸。 |
| center        | 元素位于容器的中心。各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。（如果剩下的空间是负数，则各行会向两个方向溢出的相等距离。） |
| flex-start    | 元素位于容器的开头。各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧靠住前面一行。 |
| flex-end      | 元素位于容器的结尾。各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧靠住前面一行。 |
| space-between | 元素位于各行之间留有空白的容器内。各行在弹性盒容器中平均分布。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'flex-start'。在其它情况下，第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等。 |
| space-around  | 元素位于各行之前、之间、之后都留有空白的容器内。各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'center'。在其它情况下，各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半。 |
| initial       | 设置该属性为它的默认值。请参阅 [*initial*](https://www.runoob.com/cssref/css-initial.html)。 |
| inherit       | 从父元素继承该属性。请参阅 [*inherit*](https://www.runoob.com/cssref/css-inherit.html)。 |

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103747.png)

该属性可能取6个值。

> - `flex-start`：与交叉轴的起点对齐。
> - `flex-end`：与交叉轴的终点对齐。
> - `center`：与交叉轴的中点对齐。
> - `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
> - `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
> - `stretch`（默认值）：轴线占满整个交叉轴。

## 项目属性 - item

以下6个属性设置在项目上。

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`

### order属性

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

控制item在容器中的排雷

> ```css
> .item {
> order: <integer>;
> }
> ```

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103752.png)

### flex-grow属性

放大属性, 填充剩余空间.

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

> ```css
> .item {
> flex-grow: <number>; /* default 0 */
> }
> ```

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103758.png)

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

### flex-shrink属性

> 如果空间不足, 缩小该item

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

> ```css
> .item {
> flex-shrink: <number>; /* default 1 */
> }
> ```

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103802.png)

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

### flex-basis属性

> 基础空间: 设置项目占用空间

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

> ```css
> .item {
> flex-basis: <length> | auto; /* default auto */
> }
> ```

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

### flex属性

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

> ```css
> .item {
> flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
> }
> ```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self属性

align-self 属性定义flex子项单独在侧轴（纵轴）方向上的对齐方式。

**注意：**align-self 属性可重写灵活容器的 align-items 属性。

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

> ```css
> .item {
> align-self: auto | flex-start | flex-end | center | baseline | stretch;
> }
> ```

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210427103807.jpg)

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。





# 响应式布局

> 参考 极客时间 - Vue开发实践 - 37丨实现一个可动态改变的页面布局

需求 : 

# 单位

[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)

[参考文档- 第三方](https://www.cnblogs.com/theblogs/p/10516098.html)

em : element

px : pixel

rem : root element



## px

px就是pixel像素的缩写，相对长度单位，网页设计常用的基本单位。像素px是相对于显示器屏幕分辨率而言的

## em

```html
em = 希望得到的像素大小 / 父元素字体像素大小
```

em是相对长度单位。相对于当前对象内文本的字体尺寸（**参考物是父元素的font-size**）

如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸

特点：

  　　1. em的值并不是固定的；

        　　2. em会继承父级元素的字体大小

## rem

**rem**

rem是CSS3新增的一个相对单位，rem是相对于HTML根元素的字体大小（font-size）来计算的长度单位

如果你没有设置html的字体大小，就会以浏览器默认字体大小，一般是16px

```
html{font-size: 62.5%}  /* 10 ÷ 16 × 100% = 62.5% */

body{font-size: 1.4rem;} /* 1.4 × 10px = 14px *//*在根元素中定义了一个基本字体大小为62.5%（也就是10px。设置这个值主要方便计算，如果没有设置，将是以“16px”为基准 ）*/
```

优点是，只需要设置根目录的大小就可以把整个页面的成比例的调好

rem兼容性：除了IE8及更早版本外，所有浏览器均已支持rem

em与rem的区别：

　　rem是相对于根元素（html）的字体大小，而em是相对于其父元素的字体大小

两者使用规则：

- 如果这个属性根据它的font-size进行测量，则使用em``
- 其他的一切事物属性均使用rem

## %

其他单位：

**%**（百分比）

一般来说就是相对于父元素

1、对于普通定位元素就是我们理解的父元素

2、对于position: absolute;的元素是相对于已定位的父元素

3、对于position: fixed;的元素是相对于ViewPort（可视窗口）

## **vw、vh**

vw、vh、vmax、vmin这四个单位都是基于视口

vw是相对视口（viewport）的宽度而定的，长度等于视口宽度的`1/100`

假如浏览器的宽度为200px，那么1vw就等于2px（200px/100）

vh是相对视口（viewport）的高度而定的，长度等于视口高度的`1/100`

假如浏览器的高度为500px，那么1vh就等于5px（500px/100）

vmin和`vmax`是相对于视口的高度和宽度两者之间的`最小值`或`最大值`

```
/*
如果浏览器的高为300px、宽为500px，那么1vmin就是3px，1vmax就是5px；如果浏览器的高为800px，宽为1080px，那么1vmin也是8px，1vmax也是10.8px
*/
```

## **vm**

css3新单位，相对于视口的宽度或高度中较小的那个

其中最小的那个被均分为100单位的vm

比如：浏览器高度900px，宽度1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px

缺点：兼容性差

## 常见问题

1、假如使用em来设置文字大小要注意什么？

注意父元素的字体大小，因为em是根据父元素的大小来设置的。

比如同样是1.5em，要是父元素是20，那1.5em就是30px.要是父元素是30px,1.5em就是45px（特别是在多重div嵌套里面更要注意）

2、pc pt ch一般用在什么场景？

这些我们网页设计基本上用不到，在排版上会有用处

3、如何使 1rem=10px

在设置HTML{font-size：62.5%；}即可

4、如果父元素没有指定高度，那么子元素的百分比的高度是多少？

会按照子元素的实际高度，设置百分比则没有效果

# CSS - 最佳实践

> - 阿里技术 - [CSS布局技巧](https://mp.weixin.qq.com/s/9f4UaZWzYSJB_ZdwhS3A3A)

# DOM

# HTTP

[MDN-HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)

## GET or POST

使用 `POST` 的情况

无法使用缓存文件(更新服务器上的文件或数据库)

向服务器发送大量数据(POST没有数据量限制)

发送包含未知字符的用户输入时, `POST` 比 `GET` 更稳定也更可靠

PUT具有幂等性, 通常用于更新

POST则不具备

# JavaScript

JavaScript：

- 职责：JavaScript是一种脚本语言，用于在浏览器端执行，使得网页具有动态和交互功能。它可以用于响应用户操作、动态更新页面内容、发送异步请求等。
- 设计思想：JavaScript的设计思想是使得网页具有交互性和动态性，增强用户体验。
- 模式：JavaScript采用了面向对象的设计模式，允许开发者创建和使用对象。
- 所属层：JavaScript属于模型-视图-控制器（MVC）架构的模型层和视图层，因为它既能够操作数据（模型），也能够更新页面（视图）。

## Ajax/axios

运行原理: Ajax 相当于浏览器发送请求与接收响应的代理人，以实现在不影响用户浏览页面的情况下，局部更新页面数据，从而提高用户体验。

在真实的项目中，服务器端大多数情况下会以 JSON 对象作为响应数据的格式。当客户端拿到响应数据时，要将 JSON 数据和 HTML 字符串进行拼接，然后将拼接的结果展示在页面中。

### 应用场景

1.页面上拉加载更多数据

2.列表数据无刷新分页

3.表单项离开焦点数据验证

4.搜索框提示文字下拉列表

## 常用接口

setInterval()

setTimeout()



# MathML

https://developer.mozilla.org/en-US/docs/Web/MathML



# Nodejs