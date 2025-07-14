# Rust最佳实践

## 必看

- [crates.io](https://crates.io)
- [docs.rs](https://docs.rs/)
- [强烈推荐elements-of-rust](https://github.com/ferrous-systems/elements-of-rust)

- [Rust Ecosystem](https://blessed.rs/crates)
- [curated crates libraries](lib.rs)
- [rust trends 趋势](https://rust-trends.com/)

![](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202506131608991.png)

## 观点

- Rust开发者应该如何思考, 设计和实现代码时, 应该考虑哪些问题, 应该如何建立心智模型
- crate标识的crate root模块, main.rs通常是crate root, 但是bin/some.rs 中 crate root 是bin/some.rs
- 枚举也是类型系统的一部分, 本质是类型声明——wwfyde
- 使用智能指针实现多所有权
- trait:特征: 指定类型的能力和行为
  - ..的, Printable
  - 某种特性
  - 动词
  - 描述特性的名称
  - 某种行为的执行者(不太久)


## Rust开发者心智模型

所有权, 生命周期, 数据流向, 显式优于隐式

**函数/方法签名**:

- **参数传递**:
  - 传递所有权 (value: T)?
  - 不可变借用 (value: &T)?
  - 可变借用 (value: &mut T)?
  - 对于字符串，是 &str (通用，高效) 还是 String (需要所有权)？对于集合，是 &[T] 还是 Vec<T>?
- **返回值**:
  - 返回所有权 (-> T)?
  - 返回借用 (-> &T 或 -> &mut T)? 如果是，生命周期参数是什么？
- **错误处理**: 使用 Result<T, E> 还是 Option<T>? panic! 应该只用于不可恢复的错误

## 设计哲学与语言特性

- **一切皆明确（explicit is better than implicit）**
- 零成本抽象（zero-cost abstraction）
- 显式优于隐式(explicit over implicit)

## Project Layout

- [How to organize large Rust codebases](https://kerkour.com/rust-how-to-organize-large-workspaces)
- [rust-web-services-axum-sqlx-postgresql](https://kerkour.com/rust-web-services-axum-sqlx-postgresql)
- 主要推荐使用DDD+ 分层架构, 而不是Clean架构
- [[rust-axum-postgres-api](https://github.com/wpcodevo/rust-axum-postgres-api)](https://github.com/wpcodevo/rust-axum-postgres-api)



### 布局

[Gemini](https://gemini.google.com/app/780a5faf3c065668?utm_source=chrome_omnibox&utm_medium=owned&utm_campaign=gemini_shortcut)

```shell
my_axum_project/
├── Cargo.toml
├── .env           # 环境变量 (可选, 用于本地开发)
├── config/        # 配置文件目录 (可选, 例如使用 config-rs)
│   ├── default.toml
│   ├── production.toml
│   └── ...
├── src/
│   ├── main.rs        # 程序入口: 初始化配置、数据库、状态、路由、启动服务器
│   ├── config.rs      # 配置加载与解析逻辑
│   ├── errors.rs      # 自定义错误类型及 IntoResponse 实现
│   ├── state.rs       # 定义应用共享状态 (AppState)
│   │
│   ├── routes/        # 路由定义模块
│   │   ├── mod.rs     # 组织和导出所有路由模块，创建主 Router
│   │   ├── health.rs  # 健康检查路由 (示例)
│   │   ├── users.rs   # 用户相关路由
│   │   └── products.rs # 产品相关路由
│   │   └── middleware.rs # (可选) 自定义中间件
│   │
│   ├── handlers/      # 请求处理函数 (Handler Functions)
│   │   ├── mod.rs
│   │   ├── health_handler.rs
│   │   ├── user_handler.rs
│   │   └── product_handler.rs
│   │
│   ├── services/      # 业务逻辑层 (Business Logic)
│   │   ├── mod.rs
│   │   ├── user_service.rs
│   │   └── product_service.rs
│   │
│   ├── repositories/  # 数据访问层 (Data Access Layer / DAL)
│   │   ├── mod.rs
│   │   ├── database.rs # 数据库连接池设置 (例如使用 sqlx, sea-orm)
│   │   ├── user_repo.rs
│   │   └── product_repo.rs
│   │
│   ├── models/        # 数据模型 (Data Models) 或领域对象 (Domain Objects)
│   │   ├── mod.rs
│   │   ├── user.rs    # 可能包含请求/响应体结构、数据库实体等
│   │   └── product.rs
│   │
│   └── utils/         # 通用工具函数 (可选)
│       ├── mod.rs
│       └── ...
│
├── tests/             # 集成测试目录
│   ├── common/        # 测试辅助模块 (可选)
│   │   └── mod.rs
│   ├── health_check.rs
│   └── user_tests.rs
│
└── migrations/        # 数据库迁移文件 (如果使用如 sqlx-cli 或 sea-orm-cli)
```

**各部分说明:**

1. **`src/main.rs`**:

   - 程序的入口点。
   - 负责初始化：日志、配置 (`config.rs`)、数据库连接池 (`repositories/database.rs`)、应用状态 (`state.rs`)。
   - 构建主路由 (`routes/mod.rs`)。
   - 将状态注入到 Axum 的 `Extension` 层或作为 `State`。
   - 启动 HTTP 服务器。

2. **`src/config.rs`**:

   - 定义配置结构体。
   - 实现从文件（如 `config/` 目录下的 TOML/YAML 文件）或环境变量加载配置的逻辑。可以使用 `config-rs`, `dotenvy` 等库。

3. **`src/errors.rs`**:

   - 定义整个应用程序统一的错误类型（例如一个 `enum AppError`）。
   - 为这个错误类型实现 `axum::response::IntoResponse` trait，以便在 Handler 返回错误时能自动转换为合适的 HTTP 响应（状态码、错误信息）。这有助于保持 Handler 的简洁。

4. **`src/state.rs`**:

   - 定义 `AppState` 结构体，包含需要在整个应用中共享的状态，如数据库连接池 (`sqlx::PgPool`, `sea_orm::DatabaseConnection`)、配置实例等。
   - 通常需要 `#[derive(Clone)]`，因为 Axum 的 Handler 和 State Extractor 需要 `Clone` trait。内部共享状态（如连接池）通常使用 `Arc` 包裹。

5. **`src/routes/`**:

   - **`mod.rs`**: 聚合所有子模块（`users.rs`, `products.rs` 等）定义的路由，并创建一个顶层的 `axum::Router`。可以 在这里应用全局中间件。

   - `users.rs`, `products.rs`, ...

     : 按功能或资源划分路由。每个文件通常定义一个函数，该函数返回一个 

     ```
     axum::Router
     ```

     ，其中包含该功能相关的所有路由（GET, POST, PUT, DELETE 等）。这些子路由可以应用特定的中间件。例如：

     Rust

     ```
     // src/routes/users.rs
     use axum::{routing::{get, post}, Router};
     use crate::handlers::user_handler;
     use crate::state::AppState;
     
     pub fn create_user_routes() -> Router<AppState> { // 或者 Router<()> 如果状态通过 Extension 传递
         Router::new()
             .route("/", post(user_handler::create_user))
             .route("/:id", get(user_handler::get_user))
             // ... 其他用户相关路由
     }
     ```

   - **`middleware.rs` (可选)**: 定义自定义的 Axum 中间件函数或 `tower::Layer` 实现。

6. **`src/handlers/`**:

   - 包含实际处理 HTTP 请求的异步函数。
   - 职责：
     - 从请求中提取数据（路径参数、查询参数、请求体 `Json<Payload>` 等）。
     - 调用 `services` 层来执行业务逻辑。
     - 根据 `services` 层的结果构建并返回响应（通常是 `Result<impl IntoResponse, AppError>`）。
   - 应保持 **轻量级**，避免包含复杂的业务逻辑。

7. **`src/services/`**:

   - 封装核心业务逻辑。
   - 不直接依赖 Axum 的特定类型（如 `Json`, `Path` 等），使其更易于测试和复用。
   - 接收从 Handler 传递过来的数据（通常是 `models` 中定义的结构体）。
   - 与 `repositories` 层交互以获取或修改数据。
   - 返回结果或自定义的业务错误（可以映射到 `AppError`）。

8. **`src/repositories/`**:

   - 负责与数据存储（数据库、缓存、外部 API 等）进行交互。
   - **`database.rs`**: 设置和管理数据库连接池。
   - **`user_repo.rs`, `product_repo.rs`, ...**: 实现具体的数据库操作（CRUD）。例如，使用 `sqlx` 执行 SQL 查询，或使用 `sea-orm` 的 Active Model / Entity。
   - 通常返回 `Result<ModelType, DbError>`，其中 `DbError` 可以是 `sqlx::Error`, `sea_orm::DbErr` 等，并在 Service 层转换为 `AppError`。

9. **`src/models/`**:

   - 定义数据结构：
     - API 请求/响应体（可能使用 `serde::{Serialize, Deserialize}`）。
     - 数据库实体/模型（如果使用 ORM，如 `sea-orm` 的 Entity；如果使用 `sqlx`，可能是简单的 struct）。
     - 领域对象。

10. **`src/utils/` (可选)**:

    - 存放不属于特定模块的通用辅助函数，例如日期时间处理、加密、字符串操作等。

11. **`tests/`**:

    - 存放集成测试。这些测试通常会启动一个测试服务器，并模拟 HTTP 请求来验证路由、中间件和整个请求处理流程。可以使用 `axum::TestClient` 或 `reqwest`。

### qwen

```shell
my_axum_project/
├── Cargo.toml
├── src/
│   ├── main.rs
│   ├── app/
│   │   ├── mod.rs
│   │   ├── routes/
│   │   │   ├── mod.rs
│   │   │   ├── user_routes.rs
│   │   │   ├── auth_routes.rs
│   │   │   └── health_routes.rs
│   │   ├── handlers/
│   │   │   ├── mod.rs
│   │   │   ├── user_handlers.rs
│   │   │   ├── auth_handlers.rs
│   │   │   └── health_handlers.rs
│   │   ├── models/
│   │   │   ├── mod.rs
│   │   │   ├── user_model.rs
│   │   │   └── auth_model.rs
│   │   ├── services/
│   │   │   ├── mod.rs
│   │   │   ├── user_service.rs
│   │   │   ├── auth_service.rs
│   │   │   └── db_service.rs
│   │   ├── middleware/
│   │   │   ├── mod.rs
│   │   │   ├── auth_middleware.rs
│   │   │   └── logging_middleware.rs
│   │   └── config/
│   │       ├── mod.rs
│   │       └── settings.rs
│   └── utils/
│       ├── mod.rs
│       ├── error.rs
│       └── logging.rs
├── migrations/ (if using a database)
├── tests/
│   ├── integration/
│   └── unit/
└── README.md
```

# 语法速记

```rust
// 原子引用计数(Atomic Reference Counted, Arc)
```

# 心智模型

- Rust强调**类型安全**, 类型检查需要**显式转换**
- 所有权系统
- 借用
- 生命周期

## 类型系统

**单元结构体**：用于自定义类型但无需数据。

```rust      
// 单元结构体(unit struct)
struct Name
```

**单元类型**：用于表示“无值”或“无返回”。 

```rust     
fn some() ->() {
    let world = "世界";
    println!("hello,{}", world);
    ()
}
```



# tools

## suttle

# Clap

> uv, ruff, bat 等都是用的derive API

## Links

- [Derive API](https://docs.rs/clap/latest/clap/_derive/index.html)
- [Clap Tutorials](https://docs.rs/clap/latest/clap/_derive/_tutorial/index.html)
- [Clap Examples](https://github.com/clap-rs/clap/tree/master/examples)

# Axum

## Links

- [docs.rs](https://github.com/rust-lang/docs.rs)
- [★arewewebyet](https://www.arewewebyet.org)
- [**★**loco: Rust单人框架，适用于副项目和初创企业](https://github.com/loco-rs/loco)
- [一个适合新手学习使用的 Rust API 快速开发脚手架](https://github.com/shenghui0779/api-tpl-rs)
  - https://github.com/wohy/Rust_Learning
  - https://github.com/kwseeker/rust-template
- [](https://github.com/lniche/aphrodite-rs)
- 
- [bili-sync rust项目](https://github.com/amtoaer/bili-sync)
