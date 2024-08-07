# LLM

> 大语言模型(Large Language Model, LLM)
>
> GPT

## 参考资料

- [AI大模型应用开发实战营大纲](https://u.geekbang.org/subject/llm)
- [AI大模型微调训练营](https://u.geekbang.org/subject/finetuning)
- [AI Glossary](AI.md#Glossary)
- 官方文档和博客
  - [Overview](https://platform.openai.com/docs/overview)
  - [Guide for Prompt Enginerring](https://platform.openai.com/docs/guides/prompt-engineering)

## 多维解释

- 问答机器人, AI助手
- 材料撰写
- 全语种润色
- 策略制定, 录入资料
- 超级个体, 复杂专家的能力
- 演化路径: AI-NLP-LLM-GPT

## Features

- 自然语言检索，真正开始理解文本内容
- 多模态兼容，支持图像、音频、视频等

- 交互式问答，根据使用者水平个性化调整
- 有常识，像“人”一样理解其他数据库、工具
- 大模型本质是概率模型，易出现严重的“幻觉”
- 大模型的回答极“自信”，难分辨**



# 索引

- ChatGPT奇技淫巧
  - 视频总结
- Prompt框架
- 结构化提示词
  - 综合
  - 引导
  - LLM Agent
  - AI Agent : 具有独立思考的
  - 模版
  - 知识库
- ChatGPT效率技巧
- 逆向
- 提示词网站
- 官网
- 提示学习(Prompt Learning)
  - 思维链（Chain-of-Thought, CoT）：开山之作
  - 自洽性（Self-Consistency）：多路径推理
    - 前后一致性, 逻辑冲突
    - 流程, 规则, 本身应该是有一定的模式化
  - 思维树（Tree-of-Thoughts, ToT）：续写佳话
- Agent, 模式
- 流程化, 最佳实践
- **指令**
  - syntax
    - [模版]

# 核心模式-架构思想

- 选择大模型——直接使用
- 测试原生能力——提示词工程
- 链接外部知识的AI——检索增强生成(RAG)——AI备忘录/企业知识库
  - 更适合自然语言处理
- 训练外部知识的AI——训练调优(fine-tuning)——微调大模型/垂直大模型
  - 非自然语言的理解部分, 比如图像
- 理解大模型的工作原理



# 核心原理

注意力机制

# Tuning-微调

微调

## Adapter

## Prefix



## Prompt

- 业务-领域知识, 工程知识, 多维(多角度)解释, 自动化

- 角色(高级/专家)-任务-格式(模版/模式/抽象, 结构-约束-关系)
  - 市场领域专家

- 上下文提及
- 输入-输出
- 输入-上下文, 关键词, 负面词
- 输出模式约束-设定目标
- 自动化
- 思维链(chain of thought, COT)
  - 策略: 将复杂的任务拆分为简单的任务
- 自洽性
- 多角色扮演
- 自我迭代
- GPT
- 提示词高阶技巧
- (驱动索引)
- kayn-领域知识内聚
- 思考路径
- ChatGPT指令模式-instruction 
- GPT builder
- gpts
- 麦肯锡分析方法

## 技巧

- `explain ...`: 解释代码
- `generate comment`: 生成注释
- `generate unittest`: 生成单元测试
- 结构化提示

  - (意义)相近的内容放在一起
  - 解释说明, 声明是语言
  - 需要按照一定的格式
  - 总分总, 列表, 层次, 
  - 人名术语表 `David bohm -> 大卫·玻姆`

  https://www.google.com/search?client=safari&rls=en&q=anthropic&ie=UTF-8&oe=UTF-8

  anthropic

- 使用模版, 关键部分

- 如何写提示词

  - GPT4, claude, 

- API接口

- 

### 用途示例



- 阅读
- 翻译
  - 语句润色

- 提示语
- 延迟更新
- 错误提示, 
- 领域专业术语, 名词解释
  - 定义
  - 用法示例
  - 特性
  - 多维解释
  - 背景提及, 追问
  - 写代码
  - ...如何做
- 专业领域知识库, 行业专家, 上帝模式, 写材料
- 读论文
  - 传递文档进去
  - 传递资源/文件进去
- how-to 指南
- 新技术学习, 助手 Assistant
- 场景模拟

### 负面词

隐藏角色

## P-Tuning



## LoRA



# Agent-智能体

# OpenAI



## Links

### Articles

- [introduction_to_gpt4o](https://cookbook.openai.com/examples/gpt4o/introduction_to_gpt4o)

## Usage

GPT-4, including its optimized variant GPT-4O, is a powerful and versatile language model developed by OpenAI. Here are some key capabilities of GPT-4O:



​	1.	**Natural Language Understanding and Generation**:

​	•	Understands and generates human-like text based on the input it receives.

​	•	Can carry out conversations, answer questions, and provide detailed explanations on a wide range of topics.

​	2.	**Text Completion and Summarization**:

​	•	Completes partial text inputs coherently.

​	•	Summarizes long texts into concise summaries.

​	3.	**Translation and Multilingual Support**:

​	•	Translates text between multiple languages.

​	•	Understands and responds in various languages.

​	4.	**Creative Writing and Content Creation**:

​	•	Generates creative content such as stories, poems, and essays.

​	•	Assists in writing tasks including blog posts, articles, and social media content.

​	5.	**Programming and Technical Assistance**:

​	•	Generates and explains code in multiple programming languages.

​	•	Provides technical guidance, troubleshooting, and debugging assistance.

​	6.	**Data Analysis and Visualization**:

​	•	Analyzes data and generates insights.

​	•	Creates data visualizations to represent information graphically.

​	7.	**Educational and Tutoring Support**:

​	•	Assists with learning and tutoring in various subjects.

​	•	Provides explanations and answers to academic questions.

​	8.	**Information Retrieval and Research**:

​	•	Retrieves and synthesizes information from a wide range of sources.

​	•	Conducts research on specific topics and provides summarized results.

​	9.	**Conversational AI and Customer Support**:

​	•	Acts as a conversational agent for customer service.

​	•	Handles inquiries, complaints, and provides support in customer interaction scenarios.

​	10.	**Image and Document Analysis**:

​	•	Describes and analyzes the content of images and documents.

​	•	Extracts and interprets textual and visual information from provided media.

​	11.	**Customization and Personalization**:

​	•	Adapts responses based on user preferences and context.

​	•	Remembers user-specific details to provide personalized assistance.

​	12.	**Advanced Reasoning and Problem Solving**:

​	•	Engages in complex reasoning tasks.

​	•	Solves problems that require logical thinking and multi-step processes.



These capabilities make GPT-4O a versatile tool for various applications, from casual conversation and creative writing to technical support and data analysis.

