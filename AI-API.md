# API

## Links

- [AWS Bedrock Price](https://aws.amazon.com/bedrock/pricing/)
- [OpenAI Price]()

## Azure

## Bedrock

# OpenAI

## Links

- [API结构化输出示例——Introducing Structured Outputs in the API](https://openai.com/index/introducing-structured-outputs-in-the-api/)
- [OpenAI: 结构化输出Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs/introduction?lang=python)
- [语音转文本Whisper——(Speech to text)](https://platform.openai.com/docs/guides/speech-to-text/speech-to-text)

### 各家API

- [OpenAI ChatGPT](https://platform.openai.com/docs/guides/gpt/chat-completions-api)
  - https://platform.openai.com/docs/guides/rate-limits/usage-tiers?context=tier-free
- [Azure OpenAI API](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference)
  - https://learn.microsoft.com/zh-CN/azure/ai-services/openai/quotas-limits
  - https://learn.microsoft.com/zh-CN/azure/ai-services/openai/how-to/quota?tabs=rest
- [Anthropic Claude](https://anthropic.com/)
  - https://docs.anthropic.com/claude/reference/rate-limits
- [Google Gemini ](https://developers.generativeai.google/)
  - https://ai.google.dev/models/gemini?hl=zh-cn
- [智谱 ChatGLM](https://bigmodel.cn/)
  - https://maas.aminer.cn/dev/howuse/rate-limits/level?tab=0
- [Moonshot AI](https://platform.moonshot.cn/)
  - https://platform.moonshot.cn/docs/pricing#%E5%85%85%E5%80%BC%E4%B8%8E%E9%99%90%E9%80%9F

## 结构化输出(Structured Output)

## 最佳实践

- https://github.com/atomic14/command_line_chatgpt

> [!note]
>
> 平台对API调用请求没有设置速率限制，但会受到模型官方的速率限制。

## Embeddings

> [Embeddings](https://platform.openai.com/docs/guides/embeddings)

```python
from openai import OpenAI
client = OpenAI()

response = client.embeddings.create(
    input="Your text string goes here",
    model="text-embedding-3-small"
)

print(response.data[0].embedding)
```

## OpenAI

### message

#### system message

Typically, a conversation will start with a system message that tells the assistant how to behave, followed by alternating user and assistant messages, but you are not required to follow this format.

## Azure

- https://learn.microsoft.com/en-us/azure/ai-services/openai/reference
