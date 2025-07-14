# PyTorch

## Links

- [Distributed Data Parallel](https://pytorch.org/docs/stable/notes/ddp.html)

## Mac

- [Mac: MPS accelerate](https://developer.apple.com/metal/pytorch/)
- [PyTorch MPS](https://pytorch.org/docs/main/notes/mps.html)

## quickstart

张量（Tensor）操作：创建、索引、切片、变形、广播等。

自动微分（Autograd）：requires_grad、backward()、grad。

神经网络模块（torch.nn）：Linear、Conv2d、ReLU 等。

优化器（torch.optim）：SGD、Adam 等。

损失函数（torch.nn.functional）：MSE、CrossEntropyLoss 等。

> The NVIDIA CUDA® Deep Neural Network library (cuDNN) is a GPU-accelerated library of primitives for [deep neural networks](https://developer.nvidia.com/deep-learning). cuDNN provides highly tuned implementations for standard routines such as forward and backward convolution, attention, matmul, pooling, and normalization.
> NVIDIA CUDA®深度神经网络库（cuDNN）是一个用于深度神经网络的 GPU 加速库。cuDNN 提供了针对标准例程（如正向和反向卷积、注意力、矩阵乘法、池化和归一化）的高度优化的实现。


## 源码重点阅读

- torch.nn
- torch.optim
- torch.autograd

# Glossary

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





## Index

- DDP
- pytorch Lightning
- 数据处理
  - 准备
  - 预处理

- 推理优化技术
  - 量化
  - 剪枝
  - 知识蒸馏
  - 数据蒸馏

- 模型定制化
- 训练
  - 分布式训练
  - 大规模并行计算
  - 优化算法
    - 学习率调整
    - AdamW

- 计算优化
  - 算子融合

- 训练优化
- 显存优化
- 加速
  - ONNX
  - TensorRT
  - **量化 (Quantization):** 降低模型精度以换取更快的推理速度。


## tools

### pytorch

### deepspeed

### vllm

## 岗位



**数据工程师（Data Engineer）**

- 负责数据采集、数据清洗、数据标注与数据管道建设。
- 需求：熟悉 SQL/NoSQL、ETL 工具及大数据处理技术。

**机器学习工程师（Machine Learning Engineer）**

- 负责预训练、微调及模型部署；优化模型性能与资源占用。
- 需求：精通深度学习框架（如 PyTorch、TensorFlow）、分布式训练、超参数调优等技术。

**深度学习研究员（Deep Learning Researcher/Scientist）**

- 负责新模型架构探索、优化算法研究以及前沿技术应用。
- 需求：扎实的理论基础与创新能力，熟悉最新的研究进展与论文。

**MLOps 工程师（MLOps Engineer）**

- 负责模型从开发到生产环境的自动化部署、监控与维护。
- 需求：熟悉容器化（Docker/Kubernetes）、CI/CD 工具、监控与日志分析系统。

**推理优化工程师（Inference Optimization Engineer）**

- 专注于模型在生产环境下的推理速度、延迟和资源消耗优化。
- 需求：了解模型量化、剪枝、知识蒸馏等优化方法，熟悉 GPU 加速技术。

**系统架构师（System Architect）**

- 设计并整合数据、模型训练与推理的全链路系统架构，确保系统稳定性与可扩展性。
- 需求：深刻理解分布式系统、云服务和大规模并行计算。

**数据科学家（Data Scientist）**

- 分析模型效果、设计评估指标，并从数据中挖掘改进方向。
- 需求：统计分析、数据可视化及相关建模工具的熟练应用。

**AI 安全与伦理专家（AI Safety & Ethics Specialist）**

- 监控模型的安全性、伦理合规性，确保模型输出符合社会规范。
- 需求：跨学科知识背景，理解法律、伦理及数据隐私相关要求。

**产品经理（Product Manager）**

- 协调技术团队与业务需求，定义模型功能与发展路线。
- 需求：良好的沟通协调能力，了解人工智能产品全生命周期管理。

## 技术方案

- 蒸馏
- 微调(fine-tune)
  - 微调开源模型
  - Adaptor
  - LoRA
- 优化
- 调优
- RAG
  - 数据需要实时更新
- Agent

## 核心需求

## 核心需求（Core Requirements）

- **技术深度:**
  - 理论知识：统计学习、深度学习理论与算法；
  - 实践经验：大规模分布式训练、模型调优及性能优化；
  - 编程能力：优先使用 Python、熟悉框架（如 Hugging Face Transformers、PyTorch/TensorFlow）。
- **工具与平台:**
  - 分布式训练工具：如 Horovod、DeepSpeed、Megatron-LM；
  - 数据库及数据处理：首选 PostgreSQL 与 SQLAlchemy（对于 Python）；
  - 容器化与部署工具：Docker、Kubernetes；
  - 监控工具：Prometheus、Grafana 等。
- **跨团队协作:**
  - 与数据、产品、运维等多方紧密合作，保证项目从数据到部署的顺畅对接。
- **持续学习与创新:**
  - 跟踪前沿研究，结合最新技术不断优化模型架构和算法，提升模型性能与应用价值。



## Tensor



二维矩阵(batch, feature)

三维矩阵(batch/sample, sequence, feature/embeding)



# 最佳实践

- [Andrej Karpathy: A Recipe for Training Neural Networks](https://karpathy.github.io/2019/04/25/recipe/)



# Solutions

## Items

### 分布式训练

- https://pytorch.org/tutorials/beginner/ddp_series_theory.html
- https://pytorch.org/tutorials/intermediate/ddp_tutorial.html
- https://www.youtube.com/watch?v=-K3bZYHYHEA&ab_channel=PyTorch
  Part 1: Welcome to the Distributed Data Parallel (DDP) Tutorial Series
- https://www.youtube.com/watch?v=Cvdhwx-OBBo&t=177s&ab_channel=PyTorch
- 

#### pytorch DDP

nccl(默认无需配置)

torchrun



```shell
# 使用torchrun 启动分布式训练
import torch.distributed as dist  # 该模块已经预先实现了所有需要
# 对于使用者来说, 多个节点的训练就像是在单机训练一样
```



#### pytorch Lightning

