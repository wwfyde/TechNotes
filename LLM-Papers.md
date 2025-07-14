# Papers

## llya 30

[llya 30u30](https://arc.net/folder/D0472A20-9C20-4D3F-B145-D2865C0A9FEE)

## 多模态

### 具身智能经典：PaLM-E，基于图文VLM的具身VQA任务推理模型

### PaLM-E: An Embodied Multimodal Language Model

> [!tip]
>
> [具身智能经典：PaLM-E，基于图文VLM的具身VQA任务推理模型](https://mp.weixin.qq.com/s/zQ9h59t5H5HLfZ0WmVRE4A)

### Spectral Torical Band Inequalities and Generalizations of the Schoen-Yau Black Hole Existence Theorem

https://arxiv.org/abs/2301.08270

### Language Is Not All You Need: Aligning Perception with Language Models

https://arxiv.org/abs/2302.14045

# Attention is All You Need
## quickstart

### concepts
- attention mechanism
- self-attention
- multi-headed sel-attention(多头自注意力机制)
- encoder-dcoder 多头输入, 逐个输出
- auto-regressive(自回归): 过去时刻的输出可以作为当前时刻的输入
- positional encoding(位置编码)
- $LayerNorm(x + Sublayer(x))$

## Architecture
encoder-decoder architecture



二维矩阵(batch, feature)

三维矩阵(batch, sequence, feature)

$X=[x1,x2,...,xn]$, 为 $ \mu = \frac{1}{n} \sum_{i=1}^n x_i $，标准化后的值变为 $ x_i' = x_i - \mu $。

通过除以数据的标准差（方差的平方根），将数据的分散程度缩放到1。这样可以消除不同数据尺度（单位或范围）的差异。

标准差 $ \sigma = \sqrt{\frac{1}{n} \sum_{i=1}^n (x_i - \mu)^2} $，标准化后的值变为 $ x_i'' = \frac{x_i'}{\sigma} = \frac{x_i - \mu}{\sigma} $。
