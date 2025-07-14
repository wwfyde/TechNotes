# **Agent**

> LLM Agents

- [Claude: 无框架高效构建Agent](https://www.anthropic.com/engineering/building-effective-agents)
- [Claude Agent Solutions](https://www.anthropic.com/solutions/agents)
- [AWS Bedrock Agents](https://aws.amazon.com/bedrock/agents/)
- [What Are Agentic Workflows?](https://weaviate.io/blog/what-are-agentic-workflows)



> [!Note]
>
> **工具建议**：作者推荐新手使用n8n+streamlit入门智能体搭建；复杂的智能体应用作者会使用[langchain](https://zhida.zhihu.com/search?content_id=726761919&content_type=Answer&match_order=1&q=langchain&zhida_source=entity)，而涉及多Agent则更多考虑[crewAI](https://zhida.zhihu.com/search?content_id=726761919&content_type=Answer&match_order=1&q=crewAI&zhida_source=entity)；使用[pinecone](https://zhida.zhihu.com/search?content_id=726761919&content_type=Answer&match_order=1&q=pinecone&zhida_source=entity)作为向量数据库；后端使用[fast api](https://zhida.zhihu.com/search?content_id=726761919&content_type=Answer&match_order=1&q=fast+api&zhida_source=entity)，前端使用next js；[Azure](https://zhida.zhihu.com/search?content_id=726761919&content_type=Answer&match_order=1&q=Azure&zhida_source=entity)进行云端部署。



## Link

### 博客

- [如何评价当前的 AI Agent 落地效果普遍不佳的问题？](https://www.zhihu.com/question/13476251758)
- [公众号::智东西::Agent综述论文火了，10大技术路径一文看尽](https://mp.weixin.qq.com/s/ilLpFYkhVEZHEHmUopwGxg)
- [Bilibili::沧海九粟::12要素智能体]()
- [Bilibili::沧海九粟::什么是Agentic工作](https://www.bilibili.com/video/BV1nj5MzyE73)
  -  a **workflow** is a series of connected steps designed to achieve a specific task or goal. 

## projects

### OpenManus

[Github::FoundationAgents::OpenManus](https://github.com/FoundationAgents/OpenManus)

## 观点

- 构建Agent的目标是解决特定问题
- Tool Use, in which an LLM is given functions it can request to call for gathering information, taking action, or manipulating data, is a key design pattern of AI agentic workflows. --Andrew.Ng
- prompt as function(提示即函数)

## 资料

- LightRAG
- StructRAG
- GraphRAG
- agno

##  原理

>  [!Tip]
>
>  - [Function Calling - 智能体Agent的实现基础](https://mp.weixin.qq.com/s/2Z2DnbCXangUpFx2dLfogg)
>  - https://www.53ai.com/news/zhinengkefu/2024072276502.html



## 个人总结

- 构建Agent的多种模式
  - 无框架模式
    - openai, qwen, 
  - 框架 
    -  UI-TARS
    - agno

- models
  - doubao, qwen, openai

- UI
  - ag-ui
  - copilotkit

- Agent模式
  - ReAct
    - thought -> action -> observation
    - 思考 -> 行动 -> 观察

  - function call 
  - MCP 
  - A2A


# Glossary

## 概念

意图-intent

实体-entity



# F&Q

> 常见问题

- 如何触发工具调用:
  - Prompt显式引导, call tool create_image
  - LLM判断, 需要注意tool name 和 description

# 最佳实践





## 局限

- function call 不支持 文件作为输入, 只能使用 url string, base64 string, 这是有json schema 限制的
