# Rust最佳实践

## 必看

- [crates.io](https://crates.io)
- [docs.rs](https://docs.rs/)
- [强烈推荐elements-of-rust](https://github.com/ferrous-systems/elements-of-rust)

- [Rust Ecosystem](https://blessed.rs/crates)
- [curated crates libraries](lib.rs)
- [rust trends 趋势](https://rust-trends.com/)

<img src="https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202506131608991.png" style="zoom: 25%;" />



## 应用场景

- CLI tools (2024-40%, )
- System Programming(2024-38%, )
- Web Development(2024-38%)

## references

- Towards an "Easy" Rust

## roadmap

syntax, type system, standard library, ecosystem

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
- rust类型系统, ADT(algebra data type),  基于struct+enum的组合
- rust 中有很多基于表达式的代码, 一切皆表达式
- 迭代器 
  - 组合式 API（map/filter/collect）
  - 惰性计算
  - 零开销链式调用

- 链式调用(每次调用后返回对象本身)
- **包/Crate/模块**：
  - crate（编译单元）
  - module（文件/子模块）
  - package（多个 crate）
- **路径**：self、super、crate


## Rust开发者心智模型

所有权, 生命周期, 数据流向, 显式优于隐式, 借用检查器(borrow checker)

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

> 理念

- **一切皆明确（explicit is better than implicit）**
- 零成本抽象（zero-cost abstraction）
- 显式优于隐式(explicit over implicit)

## Python To Rust

> - [corrode::blog::python-to-rust](https://corrode.dev/learn/migration-guides/python-to-rust)

指针处理与装箱(Pointer handling and boxing)

Rust 的“指针”不等于 C 语言的原生指针（*T），更强调**安全和所有权**。常见的指针类型有：



- **引用指针**

  - &T（不可变引用）：指向某个值但**不拥有**它。编译器保证生命周期安全，不会悬垂。
  - &mut T（可变引用）：可修改所指对象，但同一时间只有一个可变引用。

- **裸指针**

  - *const T, *mut T（裸指针）：和 C 类似，极少直接用。用于 FFI（C交互）、底层开发。

- **智能指针**

  - `Box<T>`：堆分配，独占所有权，最常用的“装箱指针”。
  - `Rc<T>` / `Arc<T>`：引用计数/原子引用计数，允许多所有者共享所有权（但不可变/线程安全）。
  - RefCell<T> / Mutex<T>：内部可变性/线程同步的指针封装。

  

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



### GPT

## 项目布局

### web

```shell
src/
├── main.rs          # 应用入口
├── lib.rs           # 核心模块导出（可选）
├── config/          # 配置管理
│   ├── mod.rs       # 配置结构体、加载逻辑
│   └── env.rs       # 环境变量处理
├── routes/          # 路由定义
│   ├── mod.rs       # 聚合所有子路由（v1, v2, admin...）
│   ├── health.rs    # 健康检查路由
│   └── users.rs     # 用户相关路由
├── handlers/        # 请求处理函数（Controller层）
│   ├── mod.rs       # 处理器聚合
│   ├── health.rs    # 健康检查逻辑
│   └── users.rs     # 用户相关逻辑
├── services/        # 业务逻辑（Service层）
│   ├── mod.rs       # 服务聚合
│   └── users.rs     # 用户服务
├── models/          # 数据结构（DTO/实体）
│   ├── mod.rs       # 模型聚合
│   ├── user.rs      # 用户模型
│   └── error.rs     # 统一错误类型（推荐用 thiserror）
├── repositories/    # 数据访问层（Repository/DAO）
│   ├── mod.rs       # 数据库操作聚合
│   └── user.rs      # 用户数据访问
├── middleware/      # 自定义中间件
│   ├── mod.rs       # 中间件聚合
│   └── auth.rs      # 认证中间件
├── state/           # 全局应用状态（AppState）
│   └── mod.rs       # 状态定义与初始化
└── utils/           # 工具类（日志、加密等）
    └── mod.rs       # 工具函数聚合
```

# 语法速记

```rust
// 原子引用计数(Atomic Reference Counted, Arc)

// Arc比Rc有更大的运行时开销
// The key difference between them is that Arc is thread safe, while Rc isn’t. Arc uses atomic operations to manage the reference count, which gives it a higher runtime cost but makes it safe to share between threads. If you’re only working in a single thread, then Rc is the faster alternative.

// 需要保证所引用的底层数据不可变
// The last important fact about Rc and Arc is that they only allow you to get immutable references to the underlying data.[2] Since they fundamentally represent shared data, allowing mutable references would violate Rust’s safety guarantees by allowing for data races and use-after-free errors.

```

# 心智模型

> 语言特性

- Rust强调**类型安全**, 类型检查需要**显式转换**
- 所有权系统
  ownership system
  - 所有数据只有一个所有者
  - 数据同一时间只能有一个所有者
  - 所有者离开作用域时, 值(数据)被销毁
  - 数据的所有权在创建时确定归属, 可以通过移动转移所有权, 但就是不能没有归属(owner)
    - 变量绑定时确定归属
    - 函数调用时, 借用和转移所有权
    - 赋值时转移所有权
    - 返回值时转移所有权(其实也是赋值给新的变量, 绑定到新的数据)
  
  - 数据状态
    - owned拥有状态
    - moved移动
      - 不可访问状态
  
    - borrowed: 
      - Immutably Borrowed (不可变借用: 可多次借用), 
      - Mutably Borrowed (可变借用:独占借用)
  
    - partial moved: 结构体部分字段被移动
    - Uninitialized (未初始化): 已声明但未赋值
  
- 引用和借用
  reference and borrow
- 生命周期
  lifecycle
- Rust中变量默认是不可变的
  Variables in Rust are immutable by default
- rust中mod才是语言级别命名空间和组织单元, 

## 关注点

- 类型系统
- 所有权
- 生命周期
- 并发

## 语言哲学

> **“安全、明确、可组合的系统级语言 —— 不牺牲性能，也不放弃表达力。”**

- 显式优于隐式(**Explicit over Implicit**)

## Core Concepts

- 闭包(closure): 闭包会**自动根据使用方式**捕获外部变量，优先级：&T → &mut T → T（move）

### 变量

- 属性
  - 所有权
  - 作用域
  - 存储位置

### 引用

- 属性
  - 生命周期
  - 作用域
  - 所有者: 引用的数据来源

### 生命周期(lifetime)

- 定义: 也就是引用保持有效的作用域
- 作用: 一种机制用于追踪**引用**有效性,描述了保持**引用**有效的代码范围; 
  - 防止悬垂引用(dangling reference);
  - 保证内存安全
  - 让编译器知道变量合适销毁, 什么时候结束, 活到什么时候
  - 复合数据类型, 如结构体实例, 可能会被多个地方引用, 
- 性质: 编译时概念, 不影响运行时性能; 每个引用都有生命周期
- 理解(多视角理解): 
  - 变量的生命周期的开始与结束, 通过调用决定
  - 生命周期约束, 是一种**引用约束**; 变量拥有数据, 引用借用数据
  - 生命周期是引用的属性
  - 从类型系统看, 引用类型具有生命周期
  - 从代码层面看, 生命周期是参数
- 规则:
  - 引用的生命周期不能超过数据的生命周期本身

- 陷阱
  - 试图返回局部变量的引用
    - 解决方案: 返回对象的所有权而不是引用
    - 解决方案: 接受输入参数

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



## HowTo

> what is rust
>
> A  language ro empowering everyone to build reliable and efficient software
>
> modern system programming language
>
> ---
>
> why is rust
>
> performance reliabilty productivity
>
> ---
>
> misleading  a high-level language
>
> ---
>
> RUst's ease of use

# **开发规范**

> rust coding guidelines

## Links

- [★Rust API Guidelines](https://rust-lang.github.io/api-guidelines/naming.html)
- [官方命名规范](https://rust-lang.github.io/api-guidelines/naming.html)
  <img src="https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20251018155105448.png" alt="image-20251018155105196" style="zoom:25%;" />

## Tips

- 不要在行末添加注释, 一般位于上方
  - `√` `/// a \nlet a = 12;`
  - `×` `let a = 12;  // a`

# 项目管理

## Tips

- 使用common编写workspace共享依赖
  - [codex-common](https://github.com/openai/codex/tree/main/codex-rs/common): This crate is designed for utilities that need to be shared across other crates in the workspace, but should not go in `core`.

# Cargo

Cargo is Rust's build system and package manager.

> 一个`cargo.toml`对应一个包 用 `-p, --package`执行
>
> [Cargo Book](https://doc.rust-lang.org/cargo/)



```shell
cargo new project_name
cargo new --lib project_name
cargo build

### run
cargo run 

cargo run --bin

# 通过workscpace package运行
cargo run --package chat # default-run
cargo run --package chat --bin chat 
cargo run -p chat 
cargo run --pakcage chat

# 进入package运行
cd examples/chat && cargo run

# 直接运行任意package 从仓库任意位置用 manifest 路径运行
cargo run --manifest-path examples/chat/Cargo.toml

# rustrover 单机文件运行
cargo run --color=always --bin example-chat --profile dev --manifest-path /Users/wwfyde/projects-refs/axum/examples/chat/Cargo.toml


# 构建后运行

# 安装后运行

### package/dependency管理

# package/dependency管理
cargo add serde_json
cargo remve serde_json

# 运行 examples目录中的文件
cargo run --example 


cargo doc --open

# run
cargo run --release


# 安装package到目录
cargo install --path . --root ~/.local
cargo install --path .  # cargo.toml 指定install.root = " ~/.local"


# create workspace package
cargo new —lib



```



| 命令              | 作用                                  | 示例                            |
| ----------------- | ------------------------------------- | ------------------------------- |
| `cargo new`       | 创建一个新的 Rust 项目                | `cargo new my_project`          |
| `cargo build`     | 编译项目和其依赖                      | `cargo build --release`         |
| `cargo run`       | 编译并运行 Rust 项目                  | `cargo run`                     |
| `cargo test`      | 运行项目的测试                        | `cargo test`                    |
| `cargo doc`       | 为项目的依赖生成文档                  | `cargo doc --open`              |
| `cargo update`    | 更新 `Cargo.lock` 文件中的依赖版本    | `cargo update`                  |
| `cargo check`     | 快速检查代码能否编译                  | `cargo check`                   |
| `cargo clean`     | 清除编译生成的文件                    | `cargo clean`                   |
| `cargo publish`   | 将包发布到 crates.io                  | `cargo publish`                 |
| `cargo bench`     | 运行基准测试                          | `cargo bench`                   |
| `cargo fetch`     | 下载项目依赖的 crate，但不进行编译    | `cargo fetch`                   |
| `cargo install`   | 安装和管理 Rust 二进制文件            | `cargo install [crate_name]`    |
| `cargo uninstall` | 卸载通过 Cargo 安装的 Rust 二进制文件 | `cargo uninstall [crate_name]`  |
| `cargo package`   | 准备一个本地 crate 以便发布           | `cargo package`                 |
| `cargo search`    | 在 crates.io 上搜索 crate             | `cargo search [search_query]`   |
| `cargo login`     | 使用 API token 登录 crates.io         | `cargo login [token]`           |
| `cargo owner`     | 管理 crate 的所有者                   | `cargo owner --add [username]`  |
| `cargo init`      | 在现有目录中初始化新的 Rust 项目      | `cargo init my_project`         |
| `cargo version`   | 显示 Cargo 的版本信息                 | `cargo version`                 |
| `cargo vendor`    | 将所有依赖复制到本地目录              | `cargo vendor`                  |
| `cargo metadata`  | 输出 JSON 格式的项目元数据            | `cargo metadata`                |
| `cargo tree`      | 显示项目依赖树                        | `cargo tree`                    |
| `cargo fix`       | 自动修复 Rust 代码中的警告            | `cargo fix`                     |
| `cargo audit`     | 审核 Cargo.lock 以查找不安全的依赖    | `cargo audit`                   |
| `cargo rustc`     | 提供对 rustc 编译器参数的访问         | `cargo rustc -- [options]`      |
| `cargo rustdoc`   | 为项目运行 rustdoc 工具               | `cargo rustdoc -- [options]`    |
| `cargo clippy`    | 运行 clippy 来进行代码审查            | `cargo clippy`                  |
| `cargo fmt`       | 使用 rustfmt 格式化代码               | `cargo fmt`                     |
| `cargo miri`      | 运行 miri 以执行内存安全检查          | `cargo miri test`               |
| `cargo outdated`  | 检查过时的依赖                        | `cargo outdated`                |
| `cargo release`   | 自动化 crate 发布流程                 | `cargo release`                 |
| `cargo add`       | 向 Cargo.toml 添加新依赖              | `cargo add [crate_name]`        |
| `cargo rm`        | 从 Cargo.toml 中移除依赖              | `cargo rm [crate_name]`         |
| `cargo upgrade`   | 升级 Cargo.toml 的依赖版本            | `cargo upgrade -p [crate_name]` |

请注意，一些命令如 `cargo audit`, `cargo clippy`, `cargo fmt`, `cargo miri`, `cargo outdated`, `cargo release`, `cargo add`, `cargo rm`, 和 `cargo upgrade` 实际上是由第三方提供的 Cargo 扩展（也称为 "cargo 子命令"），并可能需要单独安装。

## commands



### run

```shell




```



## third-party

- cargo-nextest
- cargo-edit
- cargo-watch

## examples

- examples目录是外部二进制, 不能直接`use crate::some_function`, 应该使用`use your_create_name::some_function`
- tests 也是外部二进制, 默认不再crate命名空间中

# Topics

## 智能指针(smart pointer)

### `Box<T>`堆分配



### `Rc<T>`-

### `Arc<T>`

### `RefCell<T>`-内部可变

### `Mutex<T>`

### RwLock<T>

### Arc<Mutex<T>>



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
- [mast axum](https://masteringbackend.com/posts/axum-framework)
- [★arewewebyet](https://www.arewewebyet.org)
- [**★**loco: Rust单人框架，适用于副项目和初创企业](https://github.com/loco-rs/loco)
- [一个适合新手学习使用的 Rust API 快速开发脚手架](https://github.com/shenghui0779/api-tpl-rs)
  - https://github.com/wohy/Rust_Learning
  - https://github.com/kwseeker/rust-template
- [](https://github.com/lniche/aphrodite-rs)
- [★realworld-axum-api](https://github.com/0xshadow-dev/realworld-axum-api)
- rust-todo-skeleton
- [bili-sync rust项目](https://github.com/amtoaer/bili-sync)
- [text-embeddings-inference](https://github.com/huggingface/text-embeddings-inference)

## Tips

- tx = transaction

## Concepts&Principles

- 全局共享状态优先使用State
  - ~~全局共享状态(Extension)~~

- 

# 原型设计

`prototyping in rust`

`pdb!`, `todo!`

>  I find that Rust works great for data-heavy prototypes, where it’s mostly about the “shape” of data and how to compose it.
>
> 我发现Rust非常适合处理数据密集型的原型，这主要涉及到数据的“形状”以及如何组合它。

使用rust进行原型设计, 尤其是数据密集型应用, 得益于rust强大的类型系统和强大的表达能力

## Links

- [prototype, prototyping in rust](https://corrode.dev/blog/prototyping/)
- [](https://lobste.rs/s/atglkw/prototyping_rust)

## Tips

- 避免与借用检查器做斗争, 使用shared owenership

# Rustic

## 借用检查器

使用 共享所有权(shared ownership)

Maybe you’re prototyping and don’t yet want to tackle ownership and lifetimes in a more concrete way.

# 常见问题

## 加速构建



```shell
sudo spctl developer-mode enable-terminal
```

