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
    - CNN 图像识别
    - RNN NLP领域
    
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

- **CLIP**(Contrastive Language–Image Pretraining)-对比语言图像预训练

  - https://github.com/OpenAI/CLIP
  - 理解图像和文本之间的关联, 适用于多模态学习任务
  - 用来打标
  - 是一种神经网络
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

### 回归

> [!tip]
>
> 在人工智能和机器学习领域，回归问题（Regression）是一类主要任务，旨在预测一个连续数值变量的输出。回归问题与分类问题相对，分类问题预测的是离散标签或类别，而回归问题预测的是连续的数值。以下是对回归问题的详解：
>
> ## 回归问题的定义
>
> 回归问题指的是给定一组输入变量 \( X \) 和一个连续输出变量 \( y \)，学习一个映射函数 \( f \)，使得对新的输入数据 \( X' \) 能够准确预测对应的输出 \( y' \)。换句话说，回归问题旨在寻找输入变量与连续目标变量之间的关系。
>
> ## 常见的回归算法
>
> ### 1. 线性回归（Linear Regression）
> 线性回归是最简单的回归算法之一，假设目标变量 \( y \) 与输入变量 \( X \) 之间是线性关系。其模型形式为：
>
> \[ y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_n x_n + \epsilon \]
>
> 其中，\( \beta_0, \beta_1, \cdots, \beta_n \) 是模型的参数，\( \epsilon \) 是误差项。
>
> ### 2. 多项式回归（Polynomial Regression）
> 多项式回归是线性回归的扩展，通过增加输入变量的多项式项来捕捉非线性关系。例如，二次多项式回归的形式为：
>
> \[ y = \beta_0 + \beta_1 x + \beta_2 x^2 + \epsilon \]
>
> ### 3. 决策树回归（Decision Tree Regression）
> 决策树回归使用树状结构对数据进行分割，通过逐层分割输入空间来进行预测。每个叶节点代表一个预测值。
>
> ### 4. 支持向量回归（Support Vector Regression, SVR）
> 支持向量回归基于支持向量机（SVM）的概念，通过最大化间隔来找到一个平滑的预测函数。
>
> ### 5. 神经网络回归（Neural Network Regression）
> 神经网络回归通过多个神经元和层的非线性组合来捕捉复杂的输入与输出关系。
>
> ## 回归问题的应用场景
>
> - **房价预测**：根据房子的特征（面积、位置、房间数量等）预测房子的价格。
> - **股票价格预测**：基于历史数据和其他相关因素预测股票的未来价格。
> - **销售预测**：根据历史销售数据和市场趋势预测未来的销售额。
> - **气温预测**：根据历史气象数据预测未来的气温变化。
>
> ## 回归问题的评价指标
>
> 为了评估回归模型的性能，常用以下评价指标：
>
> - **均方误差（Mean Squared Error, MSE）**：衡量预测值与真实值之间差异的平方和的平均值。
>
> \[ MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 \]
>
> $$R2=1−∑i=1n(yi−yˉ)2∑i=1n(yi−y^i)2$$
>
> 
>
> - **均方根误差（Root Mean Squared Error, RMSE）**：MSE 的平方根，保持与原始数据相同的量纲。
>
> \[ RMSE = \sqrt{MSE} \]
>
> - **平均绝对误差（Mean Absolute Error, MAE）**：衡量预测值与真实值之间绝对差异的平均值。
>
> \[ MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i| \]
>
> - **R²（决定系数）**：反映模型解释变量方差的比例，值在 0 到 1 之间，越接近 1 表示模型越好。
>
> \[ R^2 = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2} \]
>
> ## 实际示例（使用 Python 和 scikit-learn）
>
> 以下是一个使用线性回归进行房价预测的简单示例：
>
> ```python
> import numpy as np
> import pandas as pd
> from sklearn.model_selection import train_test_split
> from sklearn.linear_model import LinearRegression
> from sklearn.metrics import mean_squared_error, r2_score
> 
> # 加载数据集
> data = pd.read_csv('housing.csv')
> X = data[['size', 'bedrooms', 'age']]  # 假设这三个特征
> y = data['price']
> 
> # 划分训练集和测试集
> X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
> 
> # 初始化线性回归模型
> model = LinearRegression()
> 
> # 训练模型
> model.fit(X_train, y_train)
> 
> # 预测
> y_pred = model.predict(X_test)
> 
> # 评估模型
> mse = mean_squared_error(y_test, y_pred)
> r2 = r2_score(y_test, y_pred)
> 
> print(f'Mean Squared Error: {mse}')
> print(f'R² Score: {r2}')
> ```
>
> ### 总结
>
> 回归问题在机器学习中是一类重要的任务，用于预测连续的数值输出。理解回归问题的核心概念和常见算法有助于在实际应用中选择和实现合适的模型，以解决各种实际问题。通过选择合适的评价指标，可以有效地评估模型的性能并进行优化。



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

## Vector

### KNN

> 相关概念 `相似度检索` `相似度算法` `近似度检索`

- [IBM: What is KNN](https://www.ibm.com/topics/knn)

The k-nearest neighbors (KNN) algorithm is a non-parametric, supervised learning classifier, which uses proximity to make classifications or predictions about the grouping of an individual data point. It is one of the popular and simplest classification and regression classifiers used in machine learning today.

相关

> [!tip]
>
> K-nearest neighbors (KNN) 是一种简单且常用的监督学习算法，广泛应用于分类和回归问题中。以下是对 KNN 算法的详解：
>
> ## 核心概念
>
> ### 1. 基本原理
>
> KNN 算法基于“相似的对象具有相似的特性”的假设。它通过查找训练样本中与待分类（或回归）样本最相似的 K 个实例，利用这些实例的标签进行预测。具体步骤如下：
>
> 1. 计算待预测样本与训练样本集中每个样本的距离。
> 2. 按照距离升序排列，选择距离最近的 K 个样本。
> 3. 对于分类问题，采用这 K 个样本的标签进行投票，选择票数最多的标签作为预测结果。对于回归问题，计算这 K 个样本的平均值作为预测结果。
>
> ### 2. 距离度量
>
> KNN 算法通常使用以下几种距离度量方法：
>
> - 欧氏距离（Euclidean Distance）
> - 曼哈顿距离（Manhattan Distance）
> - 闵可夫斯基距离（Minkowski Distance）
> - 余弦相似度（Cosine Similarity）
>
> ### 3. 参数选择
>
> - K 值的选择：K 值过小可能导致过拟合，过大可能导致欠拟合。常用的方法是通过交叉验证选择最优的 K 值。
> - 距离度量的选择：不同的距离度量对结果有不同的影响，根据具体问题选择适当的距离度量。
>
> ### 4. 优缺点
>
> - 优点：简单易实现，不需要训练过程，对少量数据和低维数据效果较好。
> - 缺点：计算复杂度高，对大规模数据和高维数据不适用，易受噪声影响。





## 词汇

- 嵌入(embed)
- 扩散(diffusion)
- 潜(latent diffusion)
- 蒸馏()
- Latent Consistency Models, LCM
- 回归(Regression)
    - 人工智能和机器学习领域，回归问题（Regression）是一类主要任务，旨在预测一个连续数值变量的输出。回归问题与分类问题相对，分类问题预测的是离散标签或类别，而回归问题预测的是连续的数值。以下是对回归问题的详解：

- 分类()

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



# Topics

## CLIP

![CLIP.png:https://github.com/openai/CLIP/blob/main/CLIP.png?raw=true](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202408051456193.png)

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



# Vector



# RAG

## 最佳实践



## 常见问题

### RAG效果不佳

增加上下文`context`窗口, 提升`TOP-K`值

