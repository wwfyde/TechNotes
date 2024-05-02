# **Prompt**

> *Prompt engineering is the art of communicating with a generative large language model.
> 提示工程是与生成式大型语言模型通信的艺术。*

## 引子-启发-涌现-提示-引导-牵引-扩展-扩散-门道-模式-模范-钥匙-方法论-智能-自我意识-思路-学习-精髓-原理-规范-抽象-激发-产生-指南

角色设定, 样本学习



提示词原理, 提示词论文

Prompt框架 : https://waytoagi.feishu.cn/wiki/Q5mXww4rriujFFkFQOzc8uIsnah?from=from_copylink

guide

trend: 发展趋势,技术其实

best practices 

user experience-用户经验

productivity tips-生产力提示, 效率提示, 效能提示

共识-consensus

参考-reference-参考资料

应用场景

底层原理(如何工作)-**Underlying Principles** (底层原理)

特性-features

how does something work? 

**Design Patterns** (设计模式)

代码审查-code review

重构-refactor

**Architectural Patterns** (架构模式)

**Modularity** (模块化)

**onvention Over Configuration** (约定优于配置)

**ependency Injection** (依赖注入)

**mutable Infrastructure** (不可变基础设施

行业标准

行业术语

推荐做法

### **Optimize Workflow**

- **解释**：指通过改进工作流程来提高工作效率和产品质量的过程。
- **应用**：采用持续集成/持续部署（CI/CD）、自动化测试、代码审查流程等。

### **Dry Principle**

- **解释**：Don't Repeat Yourself（不要重复自己）。强调在代码中避免重复，通过抽象化来减少冗余。
- **应用**：通过函数、类和模块等代码结构，确保每个知识片断只在代码库中有一个明确的、权威的表示。

### **YAGNI**

- **解释**：You Aren't Gonna Need It（你不会需要它）。一个原则，提倡在明确需要之前，不要添加功能。
- **应用**：避免过度设计，专注于当前需求，以减少未来的维护负担。

###  **Agile Development**

- **解释**：敏捷开发。一种迭代和增量的软件开发方法论。
- **应用**：敏捷开发鼓励快速和灵活的响应变化，包括持续反馈、自适应规划、早期交付和持续改进。

###  **Refactoring**

- **解释**：重构。不改变软件外在行为的前提下，对代码结构进行修改以提高其可读性、降低其复杂度。
- **应用**：定期重构代码可以提高软件的可维护性和扩展性。

### **Technical Debt**

- **解释**：技术债务。指为了快速推进开发而采取的非理想技术方案所积累的成本。
- **应用**：管理技术债务是软件开发中的重要组成部分，需要定期进行评估和偿还。

### 设计原则

### **Clean Code**

- **简介**：清晰、简洁的代码不仅易于理解和维护，还能提高开发效率。学习如何编写干净的代码是每个开发者的必修课。
- **关键点**：变量命名、函数划分、代码结构等。

###  **SOLID Principles**

- **简介**：五大面向对象设计原则，旨在促进软件的可维护性、灵活性和可扩展性。
- **关键点**：单一职责、开闭原则、里氏替换、接口隔离和依赖倒置。

###  **Design Patterns**

### **Code Review**

### **Mental Models**

- **简介**：心智模型帮助我们理解世界，是解决问题和决策的内部框架。
- **关键点**：反馈循环、第一原则思考、成本效益分析。



- 

## Links

- https://aws.amazon.com/what-is/prompt-engineering/
- https://fork-way.feishu.cn/sheets/shtcn1IbUR0wZeRydb3DOuBfJle?from=from_copylink
- https://github.com/dair-ai/Prompt-Engineering-Guide
- https://github.com/f/awesome-chatgpt-prompts
- https://github.com/PlexPt/awesome-chatgpt-prompts-zh

## 指南-Guideline

- https://docs.vectorshift.ai/vectorshift/platform/pipelines/large-language-models-llms#prompt-engineering-guidelines

- The tone you want the model to use (e.g., Respond in a professional manner).

## 技巧

### 最佳实践

- 使用变量`{{variable}}`, `[topic]` , `topic`(反引号)
    - topic: result
    - topic= result
    - result
- 

### tips

- formula
    - components: [task, context, exemplar, persona, format, tone]
- 



### Prompt核心技巧与实践

[](/Users/wwfyde/Desktop/Materials/Prompt 核心技巧与实战.pdf)

- 角色设定: 擅于使用 System 给GPT设定角色和任务，如“哲学大师”;
    - system /user role
- 指令注入: 在 System 中注入常驻任务指令，如“主题创作”;
- 问题拆解: 将复杂问题拆解成的子问题，分步骤执行，如:Debug 和多任务;
- 分层设计: 创作长篇内容，分层提问，先概览再章节，最后补充细节，如:小说生成;
- 编程思维: 将prompt当做编程语言，主动设计变量、模板和正文，如:评估模型输出质量;
- Few-Shot: 基于样例的prompt设计，规范推理路径和输出样式，如:构造训练数据;

### 模式语言

- 任务Task, 角色Role, 格式Format
    - 通过这样的模板给GPT指令：
        现在你要充当（**角色**） 
        执行（**任务**）
        以这种（**格式**）显示
- 模版Template
- 角色上设定专家角色



### 用法层级

•选择大模型——**直接使用 或 调用接口**

•测试原生能力——**提示词工程（Prompt Engineer）**

•链接外部知识的AI——**检索增强生成(RAG)——**AI备忘录/企业知识库

•训练外部知识的AI——**调整训练（Finetune）——**微调大模型/垂直大模型

- 角色指令, 角色提示词, 



## 引导词汇

概述, 综述(overview)

快速上手(quickstart), 应用场景, 效率技巧, 生产力技巧(productivity tips)

解释,详解,用法

底层原理, 核心概念, 原则

## 问句

- How do search engines work?
- What are some best practices in storing password security in python?

## examples

```text
"system": You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. Write your output in json with a single key called "css_code".
user: Blue sky at dusk

```



## 角色扮演

角色扮演, 角色设定

### 提问格式

- 你是一个`Python`专家
    - 请充当`[Python]`专家角色
- Act as a {Python Interpreter}
    - 

### Python

### 计算机图形学

### Rust

### Go

### JavaScript

## 奇技淫巧

## 创意玩法

- 程序命令
- 创意
    - imagine
- 创意生成
- 信息汇总
- 角色扮演
- 程序助手
- 文案
- 图像描述(describe)
- 图像标注(label)

## 常见需求

### 结构化输出(structured outut)



# syntax

主题-[]

# Glossary

### 系统提示(System prompts)

[anthropic/what-is-a-system-prompt](https://docs.anthropic.com/claude/docs/system-prompts#what-is-a-system-prompt)

> [!tip]
>
> A system prompt is a way to provide **context**, **instructions**, and **guidelines** to Claude before presenting it with a question or task. By using a system prompt, you can set the stage for the conversation, specifying Claude's role, personality, tone, or any other relevant information that will help it better understand and respond to the user's input.
>
> **系统提示(system-prompt)**是一种在向LLM出问题或任务之前向LLM提供 **context-上下文**, **instrutions-指令** 和 **guidelines—指导** 的方式. 使用系统提示可以设置谈话的步骤, 指定Assistant角色, 个性, 语气或任何其他可以帮助理解和应答用户输入的相关信息.
>
> System prompts can include:
>
> - Task instructions and objectives
>     任务指令和目标
> - Personality traits, roles, and tone guidelines
>     个性特征,角色和语气指导
> - Contextual information for the user input
>     用户输入的上下文信息
> - Creativity constraints and style guidance
>     创意约束和风格指导
> - External knowledge, data, or reference material
>     外部知识, 数据或参考资料
> - Rules, guidelines, and guardrails
>     规则, 指南和护栏
> - Output verification standards and requirements
>     输出验证标准和要求



系统提示可以包括:

- 

# 原则-principle

## 直奔主题



##  受众意图(角色设定)

the audience is a expert in the field——受众是领域专家

## 任务分解

## 肯定胜过否定



# Case

## im



The dialogue sent to Gemini as a user, where {{text}} represents the text content of the paragraph, {{from}} represents the language of the paragraph, and {{to}} represents the target langua