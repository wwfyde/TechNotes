---
title: AI人工智能基础
synonym: [人工智能, 人工智慧]
tag: [机器学习, 神经网络, 深度学习, 知识图谱]
---



# AI

## Resources

- 

## 应用前景

## Quickstart

### 核心概念

GPT是一种基于深度学习的自然语言处理技术，利用了大规模数据集进行预训练，以生成文本。它基于Transformer架构，这是一种专为处理序列数据（如文本）设计的深度学习模型架构。GPT的核心特性包括：

- **自注意力机制**：Transformer架构的关键，允许模型在处理每个词时考虑到整个文本序列，从而捕捉复杂的语言关系。
- **预训练与微调**：GPT先在大规模数据集上进行预训练，学习语言模式和知识，然后可以针对特定任务进行微调，以提高性能。
- **生成能力**：GPT能够基于给定的文本提示生成连贯、相关的文本，使其应用于各种场景，包括文本生成、摘要、翻译等。

**自注意力机制**





# Glossary

> 相关文档
>
> 

## Lists

- 神经网络(neural network):
    - 卷积神经网络

- 机器学习(Machine Learning): 
- **模型**(model)
    - [[Microsoft](https://learn.microsoft.com/zh-cn/windows/ai/windows-ml/what-is-a-machine-learning-model)]机器学习模型是一个文件，在经过训练后可以识别特定类型的模式。 你可以用一组数据训练模型，为它提供一种算法，模型利用该算法学习这些数据并进行推理。
    - 表示一个知识, 数据的结构
    - 模型是一种简化. 它是对现实时间的解释——把与解决问题密切相关的方面抽象出来, 而忽略无关的细节. 
- 参数
- 算法
- 训练(Train)
- 推理(infer/reasoning)
- 评估(Evaluate)
- 预测(Predict)
- 分类(classification, classify)
- 提示(Prompt): 提示词
- 思维链(Chain-of-Thought, CoT)
- 思维树(Tree-of-Thoughts, ToT)
- 标量(scalar)
- 向量(vector)
- 矩阵(matrix)
- 卷积(convolution)
- 
- transformer
- attention
- GPT(Generative Pre-trained Transformers):生成式预训练转换器
    - 生成式 预训练 自注意力转换器
- GenAI(Generative Artifical Intelligenc)—生成式人工智能
- AGI(Artificial General Intelligence)—通用人工智能
- 梯度(gradient


## Lingo

- Lora
  - LoRA（Low-Rank Adaptation）是一种用于大型神经网络模型的参数高效调整技术
    - 低秩适应

  - LoRA: Low-Rank Adaptation of Large Language Models
  - [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685)
  - 作用
    - 将生活中的角色和风格带入到AI中, 起到扩充的效果
    - However, if you have ever wanted to generate an image of a well-known character, concept, or using a specific style, you might've been disappointed with the results. **It's common that Stable Diffusion's powerful AI doesn't do a good job at bringing characters and styles to life by itself.** Luckily, LoRA models can help with this problem.

  - 参考资料
    - [Stable Diffusion: What Are LoRA Models and How to Use Them?](https://softwarekeep.com/help-center/how-to-use-stable-diffusion-lora-models)

- **VAE**(Variational Autoencoder)--变分自编码器

    - 学习数据分布的生成模型，适用于各种生成和重构任务。

- **RAG**(Retrieval-Augmented Generation): 检索增强生成
  
  - https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/
  - RAG is an AI framework for retrieving facts from an external knowledge base to ground large language models (LLMs) on the most accurate, up-to-date information and to give users insight into LLMs' generative process.——[IBM: What is retrieval-augmented generation?](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)
  - RAG is a technique for augmenting LLM knowledge with additional data.
  
- fine-tuning(微调)

- ONNX

- **CLIP**(Contrastive Language–Image Pre-training)-对比语言图像预训练

  - https://github.com/OpenAI/CLI
  - 理解图像和文本之间的关联, 适用于多模态学习任务
  - 用来打标
  - **unCLIP**

- **UNet**(Convolutional Networks for Biomedical Image Segmentation)

    - 主要用于图像分割任务, 语义分割
    - **U-Net**是[弗赖堡大学](https://zh.wikipedia.org/wiki/弗赖堡大学)计算机科学系为生物医学[图像分割](https://zh.wikipedia.org/wiki/图像分割)开发的[卷积神经网络](https://zh.wikipedia.org/wiki/卷积神经网络)。
    - 图像分割设计的有效网络

- Zero-shot Learning(零迁移学习)

- Generative Agents(生成式智能体)
  - https://mp.weixin.qq.com/s/y8_Q8X8Qn9ZTxq_R_YMLjg
  - https://arxiv.org/abs/2304.03442

- SAM(分割一切模型)

- GAN

- Transformer(自注意力模型)

- Sampler(采样器)

- step(步数)

- seed(种子)

  - 噪声种子
  - 起点

- latent diffusion model(潜在扩散模型)

- Latent Space(潜空间, **潜在空间**)

  - Manifold_hypothesis

- U-Net model()

- cfg scale(提示词 强度)

- Noise(噪音, 噪声)

- 前向扩散

- 逆向扩散

- 幻觉(hallucinate

    


## Items

### 知识图谱(knowledge graph)

#### 多维定义

- [华为云知识-人工智能知识图谱](https://www.huaweicloud.com/zhishi/smart-18528947.html): 知识图谱是一种用于组织和表示结构化知识的图形[ 数据库 ](https://www.huaweicloud.com/product/gaussdb.html)模型，它将现实世界中的事物、概念、关系等信息以图形的形式进行建模，并使用图形数据库技术来存储和查询这些数据。

### 机器学习

#### 多维定义

- 机器学习是从**数据**中**自动分析获得模型**，并利用**模型**对未知数据进行预测。(人工智能讲义)
- Most machine learning workflows involve working with data, creating models, optimizing model parameters, and saving the trained models. This tutorial introduces you to a complete ML workflow implemented in PyTorch, with links to learn more about each of these concepts.
  - 大多数机器学习工作流程涉及到数据处理, 模型创建, 模型参数微调和预训练模型保存.


### 张量Tensor

> Tensors are a specialized data structure that are very similar to arrays and matrices. In PyTorch, we use tensors to encode the inputs and outputs of a model, as well as the model’s parameters.
>
> Tensors are similar to [NumPy’s](https://numpy.org/) ndarrays, except that tensors can run on GPUs or other hardware accelerators. In fact, tensors and NumPy arrays can often share the same underlying memory, eliminating the need to copy data (see [Bridge with NumPy](https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html#bridge-to-np-label)). Tensors are also optimized for automatic differentiation (we’ll see more about that later in the [Autograd](https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html) section). If you’re familiar with ndarrays, you’ll be right at home with the Tensor API. If not, follow along!
>
> ```
> import torch
> import numpy as np
> ```

```text
Tensors are a specialized data structure that are very similar to arrays and matrices. In PyTorch, we use tensors to encode the inputs and outputs of a model, as well as the model’s parameters.
```



### Markov model

马尔科夫模型, 马尔科夫链(Markov Chain)

#### 应用场景

- 语音识别
- 预测

### 卷积神经网络

- Convolutional Neural Network (CNN) - Convolutional Neural Networks are Neural Networks that make the explicit assumption that the inputs are 1d, 2d or multi-dimensional arrays. This assumption allows us to simplify the neural network architecture and make it more efficient for applications in computer vision that use images or video.

### Token

[Microsoft: What are Tokens?](https://learn.microsoft.com/en-us/semantic-kernel/prompt-engineering/tokens)

#### 多维解释

- Tokens: basic units of text/code for LLM AI models to process/generate language.——
  Token: LLM AI模型中文本或代码的基础单元, token用于处理/生成语言. 

#### 附加概念

- Tokenization: splitting input/output texts into smaller units for LLM AI models.
  

## Prompt

[](AI-Prompt.md#Glossary)

- 思维链(chain of thought)

## Topics

### NLP

•自然语言处理（Natural Language Processing），以任务描述的研究领域大语言模型是一种特殊的自然语言处理模型



### GPT

进化之路 AI-NLP-LLM-GPT, 这个过程都涉及到机器学习

#### 多维解释

- 通过机器学习预测关键词出现概率
  - 
  - 示例: 对于`教室里___` 预测: 教室里有桌子, 教室里上课, ~~教室里打高尔夫~~.  明显高尔夫是不对的

## 词汇

- 嵌入(embed)
- 扩散(diffusion)
- 潜(latent diffusion)
- 蒸馏()
- Latent Consistency Models, LCM

## CV

### 参考资料

- https://blog.roboflow.com/glossary/
- https://encord.com/blog/computer-vision-terms/
- https://www.intel.com/content/www/us/en/developer/articles/technical/computer-vision-glossary-of-vocabulary-and-concepts.html

### 图像标注(image annotation)

也称image labeling



### 图像分割(image segmentation)

- https://www.tensorflow.org/tutorials/images/segmentation?hl=zh-cn

### 对象检测(data detection)



### 数据增强(data augmentation)

https://www.tensorflow.org/tutorials/images/data_augmentation?hl=zh-cn



### COCO



### YOLO

# Papers

## Generative Agents：Interactive Simulacra of Human Behavior

生成式智能体：人类行为的交互式模拟

### 参考资料

- [arxiv原文地址](https://arxiv.org/abs/2304.03442)



## Attention is All You Need

### 参考资料

- [公众号文章: Attention Is All You Need (Transformer) 论文精读](https://mp.weixin.qq.com/s/sU2uK2kQVJxzXeVNTmvfYg)
- 

# CV



# Stable Diffusion

## Extensions



# Object Detect



# NLP
