# Rust程序设计语言

## 参考资料(Links)

- https://www.rust-lang.org
- https://www.rust-lang.org/zh-CN/
- https://doc.rust-lang.org/stable/book/
- https://www.yuque.com/qyuhen/rust

## Quickstart

```shell
 # install
 curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
 
 # 查看文档
 rustup doc
 
 # cargo.toml
 cargo new project_name
 # if path exist
 cargo init
 
 # check
 cargo check
```

# 学习技巧

```shell
rustup doc
```



# 核心特性

> 核心思想、核心原理、核心特性、适用场景、核心概念

## trait

> [!important]
>
> 注意：*trait* 类似于其他语言中的常被称为 **接口**（*interfaces*）的功能，虽然有一些不同。

Rust does not have classes in the same way as object-oriented languages like Java or Python, but it uses structs and traits to achieve similar functionality. Structs define the data a type will contain, while traits define the behavior or methods that can be performed on these types. Here's a basic example:

```rust
struct Person {
    name: String,
    age: u8,
}

trait HasBirthday {
    fn birthday(&mut self);
}

impl HasBirthday for Person {
    fn birthday(&mut self) {
        self.age += 1;
    }
}

fn main() {
    let mut person = Person { name: String::from("Alice"), age: 30 };
    println!("Before: {}", person.age);
    person.birthday();
    println!("After: {}", person.age);
}
```





# Glossary

## List

- 宏-macro: 模式匹配, 按照替换规则, 编译时批处理

    - 宏定义

        ```rust
        macro_rules! swap {
            ($x:expr, $y:expr) => {
                {
                    let temp = $x;
                    $x = $y;
                    $y = temp;
                }
            };
        }
        
        ```

    - 宏调用
        ```rust
        let mut a = 5;
        let mut b = 10;
        swap!(a, b);
        ```

        

# Toolchain

## rustup

## cargo

```shell
cargo new project_name
cargo new --lib project_name
cargo build
cargo run 

cargo run --bin


```



## rustc



## rustover

| 功能          | 快捷键               | 英文                           | 描述         |
| ------------- | -------------------- | ------------------------------ | ------------ |
| 宏展开        | option+enter         | Macro Expansion                | Macro Expand |
| 查看定义      | cmd+B<br />cmd+click | Go to Declaration              |              |
| 查看类型信息  | ctrl+shift+P         | Get Type Info                  |              |
| 运行高亮命令  | cmd+enter            | Run Highlight comands in IDE   |              |
| Debug高亮命令 | cmd+shift+enter      | Debug Highlight comands in IDE |              |

