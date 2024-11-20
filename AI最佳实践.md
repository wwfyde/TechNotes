---
title: AI人工智能基础
synonym: [人工智能, 人工智慧]
tag: [机器学习, 神经网络, 深度学习, 知识图谱]

---



# AI

## Resources

- 

# Links

> 相关链接: AI技术原理

## Papers



## Blog

- [Methods for adapting large language models](https://ai.meta.com/blog/adapting-large-language-models-llms/)
- https://ai.meta.com/blog/how-to-fine-tune-llms-peft-dataset-curation/

# Glossary

> 相关文档
>
> 更多参考 AI

## Lists

- 神经网络(neural network):
    - [AWS 什么是神经网络](https://aws.amazon.com/cn/what-is/neural-network/)
    - [YouTube 什么是神经网络](https://www.youtube.com/watch?v=aircAruvnKk)
        - 为何人脑能够将不一样的(3), 但相似的视觉信号识别为相同的东西, 但是有能区别不同的视觉信号, 模式识别
        - 当程序中要对模式识别的信息(3)进行视觉表示时该如何处理
        - 神经元更像是一个函数
        - ReLU(线性整流函数)
    - 神经元
    - 节点(知识/材料/概念), 连接(联系):
    - 生物学
        - 人脑：神经网络可以比作人脑，其中节点代表神经元，连接代表突触连接。
        - 神经元: 节点可以形象化为神经元，接收来自其他神经元的信号，并将其传递给下一个神经元
        - 突触：连接可以形象化为突触，是神经元之间传递信号的桥梁。
    - **计算类比:**
        - 函数：神经网络可以比作一个函数，将输入数据映射到输出数据。
        - 节点：节点可以形象化为函数中的计算单元，执行加减乘除等运算。
        - 连接：连接可以形象化为函数中的参数，控制计算过程。
    - 形象标识
    - 抽象表示: 节点是一个向量, 包含该的属性, 例如激活值(activation), 权重(weight)等; 连接是一个矩阵, 代表不同节点连接之间的连接权重; 层: 可以比作神经网络中的不同功能模块，例如输入层、隐藏层和输出层。
        - **权重:** 可以比作连接两个神经元的突触的强度，决定了信号传递的强度。
        - **激活函数:** 可以比作神经元的兴奋程度，决定了神经元是否会将信号传递给下一个神经元。
        - **偏置(bias):** 可以比作神经元的阈值，决定了神经元需要多少信号才会被激活. **偏置实际上是对神经元激活状态的控制**。。
        - **训练:** 可以比作训练一个运动员，通过不断地练习和调整，提高神经网络的性能。
        - **神经元:** 可以比作一个生物细胞，接收来自其他神经元的信号，并将其传递给下一个神经元。
        - 权重矩阵*向量偏置就
    - Python(PyTorch)中的表示: 节点(nn.Module), 连接(nn.Parameter)
- 强化学习
- 卷积神经网络
- 递归神经网络
- 深度神经网络
- 机器学习(Machine Learning): 
  - 机器学习的三个核心概念: 数据、模型和学习
  - ![机器学习的核心概念](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202311211634305.png)
- **模型**(model)
  - [[Microsoft](https://learn.microsoft.com/zh-cn/windows/ai/windows-ml/what-is-a-machine-learning-model)]机器学习模型是一个文件，在经过训练后可以识别特定类型的模式。 你可以用一组数据训练模型，为它提供一种算法，模型利用该算法学习这些数据并进行推理。
  - 表示一个知识, 数据的结构
  - 模型是一种简化. 它是对现实时间的解释——把与解决问题密切相关的方面抽象出来, 而忽略无关的细节.
  - "数据"是学习的前提, 机器学习的第一步就是要进行数据的收集、预处理和特征提取; 而模型就是通过数据来学习算法; 学习则是一个循环过程, 一个自动在数据中寻找模式, 并不停调优模型参数逇过程. ——《极客时间·重学线性代数》
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
- transformer
- attention

## Lingo

- Lora
- VAE
- RAG(Retrieval-Augment Generation): 检索增强生成
  - https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/
  - RAG is an AI framework for retrieving facts from an external knowledge base to ground large language models (LLMs) on the most accurate, up-to-date information and to give users insight into LLMs' generative process.——[IBM: What is retrieval-augmented generation?](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)
- fine-tuning(微调)
- ONNX
- KNN(K-Nearest Neighbor, 最近邻分类算法)
- 姿态控制(pose control)
  - 姿态检查(pose detect)
- it/s(iterations per second, 每秒完成的迭代次数)
  - 迭代是机器学习和深度学习过程中的一个重要概念，通常涉及到对数据集的单次完整处理或模型的一次更新步骤。
  - **迭代过程**：在训练或生成过程中，模型会逐步调整其参数以优化特定的任务（例如图像生成）。每一次的调整过程被称为一次迭代。
  - **性能指标**：it/s 表示每秒钟模型能够完成多少次这样的迭代。这个指标可以用来衡量模型运行的速度。较高的值通常表示模型处理速度快，可以更快地完成任务。
  - **应用场景**：在生成图像的过程中，每次迭代可能涉及到对图像的一次修改、调整或改进。迭代次数可能与最终图像的质量和生成速度有关。
- In-context learning(ICL, 上下文学习, 语境学习)



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
> 
> ```



Tensors are a specialized data structure that are very similar to arrays and matrices. In PyTorch, we use tensors to encode the inputs and outputs of a model, as well as the model’s parameters.




- 

马尔科夫模型, 马尔科夫链(Markov Chain)

#### 应用场景(最新应用)

- 语音识别

- 预测

- AI备忘录

- AI助教

### Token

[Microsoft: What are Tokens?](https://learn.microsoft.com/en-us/semantic-kernel/prompt-engineering/tokens)

#### 多维解释

- Tokens: basic units of text/code for LLM AI models to process/generate language.——
  Token: LLM AI模型中文本或代码的基础单元, token用于处理/生成语言.
- 在大语言模型（LLM）中，"Token"指的是文本被分解成的基本单位，用于模型处理和理解。这些Token可能是单词、字符或子词片段。Token的数量是衡量模型训练数据规模的一个关键指标，影响模型的理解能力和生成能力。一个模型处理的Token足够多，意味着它被训练在更广泛的文本上，理论上能更好地理解语言的复杂性，提高在自然语言处理任务上的表现。
  - 原提问: 大语言模型(LLM)中常常会提到多少Token 当中的Token含义是, 该指标有何种意义 
  - 模型可理解的最小基本单位


#### 附加概念

- Tokenization: splitting input/output texts into smaller units for LLM AI models.

## Topics

### NVidia

- CUDA (Compute Unified Device Architecture): CUDA是NVIDIA推出的一个并行计算平台和编程模型，它允许开发者利用NVIDIA的GPU进行通用计算。通过CUDA，开发者可以使用NVIDIA的GPU来加速科学计算、数据分析、金融建模等需要大量计算的任务。
- CUDNN(Compute Unified Device Architecture Deep Neural Network): CUDNN是NVIDIA提供的一套深度神经网络库，专门为深度学习应用程序优化。它提供了自动 Differentiation 和性能优化，使得开发者可以更容易、更快地在NVIDIA GPU上实现和训练深度学习模型。
- TensorRT: TensorRT是一个高性能深度学习推理（inference）引擎，它可以让开发者在不牺牲准确性的情况下，提高深度学习应用的推理速度。TensorRT通过优化深度学习模型，减少内存占用，并利用NVIDIA GPU和DPU进行高效推理。
- PyTorch: PyTorch是一个开源的机器学习库，广泛用于应用如计算机视觉和自然语言处理等领域的深度学习。PyTorch提供了灵活的动态计算图（称为张量），并支持CUDA，这使得在NVIDIA GPU上进行深度学习研究和开发变得非常方便。
- Conda: Conda是一个开源的包管理和环境管理系统，由Anaconda公司开发。Conda可以简化Python环境的配置和管理，支持多种编程语言的包，包括PyTorch、TensorFlow等深度学习框架。
- NVIDIA GPU: 即图形处理单元，NVIDIA公司生产的高性能处理器，广泛用于图形渲染、游戏和深度学习等。
- NVIDIA DPU (Data Processing Unit): 数据处理单元，是NVIDIA推出的新型计算架构，专注于数据处理和高性能计算。
- cuDNN: 这是CUDA Deep Neural Network的缩写，是用于深度学习应用的CUDA库的子集，专门针对深度神经网络进行优化。

## Misc

### **LLMOps**

[什么是LLMOps](https://docs.dify.ai/v/zh-hans/learn-more/extended-reading/what-is-llmops)



# 认知建立

> [!Note]
>
> CNN 主要用于图像处理和计算机视觉任务。
>
> RNN 和 Transformer 适用于序列数据和自然语言处理。
>
> GAN 主要用于生成任务。
>
> GNN 适用于图结构数据。
>
> 自编码器常用于降维和特征学习。
>
> 强化学习架构用于决策和控制问题。

# Nvidia

## Nvidia Driver(可选)

如果需要安装cuda可以直接通过cuda安装Nvidia Driver

## CUDA toolkit

```shell
# 安装必要构建依赖
sudo apt-get update
sudo apt-get install build-essential pkg-config

# 

# Add  CUDA to PATH
# CUDA PATH
export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:${LD_LIBRARY_PATH}}
```



## CuDNN

- https://developer.nvidia.com/cudnn

CUDA Deep Neural Network library（CuDNN）是由NVIDIA开发的一个开源库，专门为深度学习应用程序设计，以提高GPU加速的效率。CuDNN提供了经过优化的数学运算，例如卷积、池化和归一化，这些运算对于训练和推理深度神经网络至关重要。它紧密集成了CUDA Toolkit和NVIDIA驱动程序，利用了GPU的并行处理能力，从而显著提高了深度学习任务的性能。

CuDNN广泛应用于深度学习领域，包括：
图像识别和分类
物体检测和分割
自然语言处理
强化学习
计算机视觉研究



# CUDA



# Conda

## 参考资料

- https://docs.conda.io

## 安装

- [Miniconda install](https://docs.anaconda.com/free/miniconda/)

### Linux

```shell
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh


# 生效
~/miniconda3/bin/conda init 
~/miniconda3/bin/conda init zsh

# 取消激活(可选)
```





## config

[conda config](https://docs.conda.io/projects/conda/en/latest/commands/config.html#)

```shell
conda config --set auto_activate_base false
conda config --add channels conda-forge  # 添加社区版频道(推荐)
conda config --show
conda config --show-sources
```

## 最佳实践

```shell
# no package install 
conda create -n env-name python=3.x

# default packages
conda create -n env-name

# 查看虚拟环境中的package list
conda list

# 激活虚拟环境
source /path/to/conda/etc/profile.d/conda.sh
source ~/miniconda/etc/profile.d/conda.sh
source ~/anaconda/etc/profile.d/conda.sh

conda activate


# conda 的虚拟环境如果要使用pip(不推荐)
# https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#using-pip-in-an-environment
conda install -n myenv pip
conda activate myenv
pip <pip_subcommand>

# 导出已安装包
conda env export > environment.yml


# 移除某个包
conda remove 
conda remove -n myenv --all

# 从environment.yml文件中创建虚拟环境
conda env create -f environment.yml
conda remove -n myenv --all

# 移除某个环境
conda env remove -n gan
conda env remove --name gan


```

## 常见问题

### zsh或terminal默认不启动base

```shell
auto_activate_base: bool
```





### 如果`conda create -n env`时, `which pip`,`which python`并没有在env目录

这是正确的, 这和venv等方式创建的虚拟环境不同, conda是默认不会安装pip/python的,因为conda有自己的包管理和环境管理方式: `conda list|create|install`. 一般不建议pip和conda同时使用, 可能会发生冲突 参见: [Using pip in an environment](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#id12)[](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#using-pip-in-an-environment) .

如果需要通过conda创建pip/python虚拟环境有两种方法可以做到

```shell
# 方法一 创建环境时指定python版本
conda create -n env python=3.12  # 该方法下conda会默认安装pip和python到env目录中

# 方法二 通过conda安装pip
conda create -n env
conda install pip 

# 方法三 通过配置文件.condarc中的create_default_packages变量
```

### 在脚本中激活虚拟环境



```shell
source /path/to/conda/etc/profile.d/conda.sh

conda activate
```



# PyTorch

## Glossary

- 构建快(building blocks)
    - Tensor
    - Autograd Module
    - **Neural Network Module** 
    - **Optimizers**
    - **Data Loading and Processing**
    - **UDA Support for GPU Computing**:

```shell
# 创建模型, 也是一个神经网络节点
torch.nn.Module

# 利用多个GPU
CUDA_VISBLE_DEVICE=0,1 python train.py # 使用0，1两
```

# 加速

## tensorRT

## Deepspeed

## Accelerate



# Docker

> links:
>
> [cuda-Dockerfile](https://gitlab.com/nvidia/container-images/cuda/blob/master/dist/12.6.1/ubuntu2404/devel/cudnn/Dockerfile)
>
> [gpus usage](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/docker-specialized.html)

```shell
docker pull nvidia/cuda:12.6.1-cudnn-devel-ubuntu24.04

# 推荐
docker pull nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04

docker run --gpus all --name comfyui -it nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04

# 使用其中一个GPU
nvidia-smi -L  # 查看可用
docker run --gpus all --rm -it nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04 /bin/bash 
docker run --gpus device=0 --rm -it nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04 /bin/bash 
docker run --gpus 2 --rm -it nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04 /bin/bash  # 指定数量
docker run --gpus '"device=0,1"' --rm -it nvidia/cuda:12.4.1-cudnn-devel-ubuntu22.04 /bin/bash 
```



# jupyter

将远程端口映射到本地端口 以实现连接访问

```shell
# Safari 浏览器中支持SF Mono
ui-monospace, 'SF Mono'
```



# **奇技淫巧**



## Items 

### 个性化推荐

### 学习

- 费曼学习法, 中英文提问和回答

# **微调(Fine Tune)**

- 

# 机器学习服务器和应用部署

## 参考资料

- [NVIDIA Container Toolkit](https://github.com/NVIDIA/nvidia-container-toolkit)
    - [安装指南](https://docs.nvidia.com/ngc/container-toolkit/install-guide.html)
    - https://github.com/NVIDIA/nvidia-container-toolkit

- [NVIDIA GPU Cloud (NGC)](https://www.nvidia.com/en-us/gpu-cloud/)
- [AWS Deep Learning Containers](https://github.com/aws/deep-learning-containers)
- [Nvidia NGC catalog](https://catalog.ngc.nvidia.com/containers)
- nvcr.io/nvidia
- [Nvidia 容器镜像库](https://gitlab.com/nvidia/container-images)
- [NGC Catalog User Guide](https://docs.nvidia.com/ngc/gpu-cloud/ngc-catalog-user-guide/index.html)
- [ngc-catalog-user-guide](https://docs.nvidia.com/ngc/gpu-cloud/ngc-catalog-user-guide/index.html)
- [Official: Nvidia NIM](https://docs.nvidia.com/nim/index.html)
- 

### 其他资料

- [打造深度学习的云端实验室](https://developer.aliyun.com/article/75293)
- [GPU资源的监控和报警，支撑高效深度学习的利器](https://developer.aliyun.com/article/86634)
- [利用TFRecord和HDFS准备TensorFlow训练数据](https://developer.aliyun.com/article/89315)



## 概述

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202401231030127.png)







## 基本思路

### 使用OSS作为数据盘

[使用ossfs将OSS Bucket挂载到Linux系统的本地目录](https://help.aliyun.com/zh/oss/developer-reference/use-ossfs-to-mount-an-oss-bucket-to-the-local-directories-of-an-ecs-instance/?spm=a2c4g.11186623.0.i1)



### 使用



### nvcr

docker login nvcr.io



### 容器支持

```shell
sudo apt-get install -y docker nvidia-container-toolkit
```

构建包含特定环境的容器

## ML服务器创建

### AWS

- g4dn
- ssh 登录
- sudo apt-get update
- sudo apt-get install build-essential
- 安装cuda (包含驱动, 也可先安装驱动)
- 安装**

## NVCR

## 构建机器学习容器

### 安装docker container toolkit

### 拉取基础容器

- https://hub.docker.com/r/nvidia/cuda

### 创建Dockerfile

```shell
```

### 保存镜像



### 在其他服务器运行镜像

## 用法

```shell
docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi

docker run --rm --runtime=nvidia --gpus all nvidia/cuda:12.3.1-runtime-ubuntu22.04 nvidia-smi


docker run -it --rm --gpus all nvcr.io/nvidia/pytorch:23.12-py3 /bin/bash
# 机器学习容器pytorch
# https://catalog.ngc.nvidia.com/orgs/nvidia/containers/pytorch
FROM  nvcr.io/nvidia/pytorch:23.12-py3 as base
```

```dockerfile
FROM  nvcr.io/nvidia/pytorch:23.12-py3 as base
ENV TZ=Asia/Shanghai
```



### 通过NFS或其他方式共享网络文件夹

分布式存储解决方案



## 数据盘/共享NFS

### 概述

### 步骤

参考 Linux

```shell

```





# 常见需求

## 分布式训练



## MoLook

### 利用云服务器(阿里云)进行机器学习训练



### 分割一切SAM

- https://paperswithcode.com/task/semantic-segmentation
- https://segment-anything.com/
- https://github.com/xenova/transformers.js
- [演示地址之一](https://github.com/xenova/transformers.js/releases/tag/2.14.0)

# LLM

## 创意玩法

### 阅读文章/视频

一句话, 摘要, 全文

### AI备忘录

remind.ai

### AI助教

学科辅导, 课程辅导



## 翻译

- Bard
- GPT4
- Claude
- DeepL



## LLaMA2

## disco diffusion

## dall·e3

## stable diffusion 



# Agent

Design pattern 

reflection-反思

- ﻿﻿Self-Refine: Iterative Refinement with Self-Feedback, Madaan et al. (2023)
- ﻿﻿Reflexion: Language Agents with Verbal Reinforcement Learning, Shinn et al., (2023)

tool use-使用工具

GMIRACT: Proming Mail Tor emit Mason and Alita, Yang et al. (2023)



planning -规划

Hugging i: Soring A Task wit ason and as Fiend an Hugging - We, stal, a, 2023)

multiagent collaboration-多智能体协作



# GPT

## 用法景观

### 代码助手

#### 参考资料

[AI Assistants Features](https://www.jetbrains.com/lp/devecosystem-2023/#ai_assistants)

### 角色扮演

### 翻译助手

### 阅读助手

## 特性

- Asking general questions about software development in natural languages

- Generating code
- Generating code comments or code documentation
- Explaining bugs and offering fixes for them
- Explaining the code
- Generating tests
- Search in natural language queries for code fragments
- Performing code review
- Summarizing recent code changes to understand what happened more quickly
- Refactoring code
- Generating CLI commands by natural language description
- Generating commit messages



## Agent-智能体

约会话题-智谱AI

# GPTs

Web browser

### 

# Workflow

> chatflow

用户意图(intention)识别

## Links

- [Dify 工作流](https://docs.dify.ai/v/zh-hans/guides/workflow)

# CV

# **YOLO**

# Huggingface

## SAM(segment anything model)

使用 transformer.js 库 v2.14

# LangChain

## Links

- https://aws.amazon.com/cn/what-is/langchain/
- https://github.com/chatchat-space/Langchain-Chatchat



### pictures

![image-20240318155433522](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403181554628.png)

![LangChain Universe v0.1.0](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403181619767.jpeg)

![Image](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403181631760.jpeg)

![LangSmith Platform Overview v0.2.0](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403182107864.jpeg)

![langchain_stack](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202403181617468.svg)

## Core Concepts

### 链(Chain)

### LangSmith-Observe

控制中心

### LangServe-deploy

# midjourney

conj

Dynamic Wang

过拟合

awportrait

lightportrait

AI 局部修改视频

UGC状态

runway

robotic @google

AI 足球解说员



Midjourney是如何处理提示的

## Links

- [Midjourney Latest Updates](https://www.midjourney.com/updates)
- [Midjourney/Getting Startted/Prompts](https://docs.midjourney.com/docs/prompts)
- [Midjourney/Writing-Prompts/Prompts](https://docs.midjourney.com/docs/prompts-2)

 

## Introduction

文生图, 图生图

### Feature

训练数据包含了大量已有作品

图像质量高, 可以生成各种风格的图像

### 对比Stability AI 



### 用法

主要通过指令进行图像生成、调整和优化, 支持提示词,参数

## Prompts

|                                  |          |      |
| -------------------------------- | -------- | ---- |
| flat view                        | 平铺视图 |      |
| clear colors                     | 颜色清洗 |      |
| in the style of seamless pattern | 无缝图案 |      |
| high resolution                  | 高分辨率 |      |
| detailed details                 | 细节详尽 |      |



### Word Choice

### Plural words and Collective Nouns

### Prompt Length and Details

## Commands

### imagine

### describe

### settings

### blend(混合)

图像编写提示词





## Parameter



|                     |                                 |                                   |                               |
| ------------------- | ------------------------------- | --------------------------------- | ----------------------------- |
|                     |                                 |                                   |                               |
| no                  | --no item1, item2, item3        | what not to include in your image | 不应该包含某些                |
| ar                  | --ar<br />--aspect ratio        |                                   | 宽高比                        |
| chaos               | --chaos 0<br />--chaos 30       |                                   | 混乱度, 创造性                |
| tile                |                                 |                                   | 无缝<br />tile 模式下无法放大 |
| stylize             | --stylize 100<br />--stylize 50 |                                   | 风格化                        |
| quality             | --q 1                           |                                   | 精细度                        |
| style_reference     | --sref <br />--sw 0-1000(100)   |                                   | 风格引用                      |
|                     |                                 |                                   |                               |
| character_reference | --cref <br />--sw 0-100(100)    |                                   | 特征应用                      |





### funning

```shell
# imagine prompt
illustration with a solid color backgorund , the subject a about the 17 on dragon ball --chaos 40 
```

## 风格

## 描画, 

## 文心一格

## 多模态搜索

### 光厂

## Trik





# Stable Diffusion

## 杂记

缺点: 质感比较差, 模糊, 油腻感

## Extensions





# WebUI

```shell
./webui.sh --listen --api --ckpt-dir ~/code/ComfyUI/models/checkpoints
```



systemd

```ini
[Unit]
Description=Stable Diffusion Web UI Service
After=network.target

[Service]
User=molook
WorkingDirectory=/home/molook/code/stable-diffusion-webui
ExecStart=bash webui.sh --listen --api --ckpt-dir ~/code/ComfyUI/models/checkpoints
Restart=always

[Install]
WantedBy=multi-user.target
```



# ComfyUI



## Productivity Tips

- drag a image that generated by comfyui will automatically load the workflow.
    拖拽ComfyUI生成的图片到界面将会自动加载Workflow
- comfyui只支持单GPU, 一个进程不支持多CPU

# Magnific AI

https://magnific.ai/

# **Claude**

# NLP



# 训练

## Links

- [civitai: quickstart-guide-to-flux-1](https://education.civitai.com/quickstart-guide-to-flux-1/)

## Glossary

### 微调（fine tuning）



指训练模型并微调其性能。具体含义因用法而异，但在 Stable Diffusion 中，狭义的微调是指使用图像和caption进行训练模型。DreamBooth 可视为狭义微调的一种特殊方法。广义的微调包括 LoRA、Textual Inversion、Hypernetworks 等，包括训练模型的所有内容。

### 步骤（step）



粗略地说，每次在训练数据上进行一次计算即为一步。具体来说，“将训练数据的caption传递给当前模型，将生成的图像与训练数据的图像进行比较，稍微更改模型，以使其更接近训练数据”即为一步。

### 批次大小（batch size）



批次大小指定每个步骤要计算多少数据。批次计算可以提高速度。一般来说，批次大小越大，精度也越高。

“批次大小×步数”是用于训练的数据数量。因此，建议减少步数以增加批次大小。

（但是，例如，“批次大小为 1，步数为 1600”和“批次大小为 4，步数为 400”将不会产生相同的结果。如果使用相同的学习速率，通常后者会导致模型欠拟合。请尝试增加学习率（例如 `2e-6`），将步数设置为 500 等。）

批次大小越大，GPU 内存消耗就越大。如果内存不足，将导致错误，或者在边缘时将导致训练速度降低。建议在任务管理器或 `nvidia-smi` 命令中检查使用的内存量进行调整。

注意，一个批次是指“一个数据单位”。

### 学习率



学习率指的是每个步骤中改变的程度。如果指定一个大的值，学习速度就会加快，但是可能会出现变化太大导致模型崩溃或无法达到最佳状态的情况。如果指定一个小的值，学习速度会变慢，同时可能无法达到最佳状态。

在fine tuning、DreamBooth、LoRA等过程中，学习率会有很大的差异，并且也会受到训练数据、所需训练的模型、批次大小和步骤数等因素的影响。建议从通常值开始，观察训练状态并逐渐调整。

默认情况下，整个训练过程中学习率是固定的。但是可以通过调度程序指定学习率如何变化，因此结果也会有所不同。

### Epoch



Epoch指的是训练数据被完整训练一遍（即数据已经迭代一轮）。如果指定了重复次数，则在重复后的数据迭代一轮后，为1个epoch。

1个epoch的步骤数通常为“数据量÷批次大小”，但如果使用Aspect Ratio Bucketing，则略微增加（由于不同bucket的数据不能在同一个批次中，因此步骤数会增加）。

### 长宽比分桶（Aspect Ratio Bucketing）



Stable Diffusion 的 v1 是以 512*512 的分辨率进行训练的，但同时也可以在其他分辨率下进行训练，例如 256*1024 和 384*640。这样可以减少裁剪的部分，希望更准确地学习图像和标题之间的关系。

此外，由于可以在任意分辨率下进行训练，因此不再需要事先统一图像数据的长宽比。

此值可以被设定，其在此之前的配置文件示例中已被启用（设置为 `true`）。

只要不超过作为参数给出的分辨率区域（= 内存使用量），就可以按 64 像素的增量（默认值，可更改）在垂直和水平方向上调整和创建训练分辨率。

在机器学习中，通常需要将所有输入大小统一，但实际上只要在同一批次中统一即可。 NovelAI 所说的分桶(bucketing) 指的是，预先将训练数据按照长宽比分类到每个学习分辨率下，并通过使用每个 bucket 内的图像创建批次来统一批次图像大小。





## LoRA训练

[kohyaSD-](https://github.com/kohya-ss/sd-scripts/blob/main/docs/train_README-zh.md)

> kohya发音:  **こーや**（kohya）: [koːʝa] 或 [koːja]



## 参数



- train_batch_size: 增加会让训练epoch变多, 时间变长
- num_repeats: 从目录中拿取, 除非 增加数据集
- epoch: 



# Flux

cuda >= 12.4 + torch >=2.4.0