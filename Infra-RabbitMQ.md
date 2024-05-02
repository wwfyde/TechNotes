# RabbitMQ

- 官方文档https://www.rabbitmq.com/tutorials/tutorial-one-python.html

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210802140907.png)

Producer sends messages to the "hello" queue. The consumer receives messages from that queue.

# Overview

## quickstart

## 应用场景

### 消息队列

### 工作队列

### 发布订阅





# 基础语义

- AMQP(高级消息队列协议): 
    - 一个网络协议: 客户端应用与消息中间件代理者之间进行通信
    - 消息代理（message brokers）从发布者（publishers）亦称生产者（producers）那儿接收消息，并根据既定的路由规则把接收到的消息发送给处理消息的消费者（consumers）。
    - 由于AMQP是一个网络协议，所以这个过程中的发布者，消费者，消息代理 可以存在于不同的设备上。
- broker: 代理者
- publisher: 发布者
- producer: 生产者
- consumer: 消费者
- worker: 执行者
- channel: 通道
- queue: 队列
- exchange: 交换机
    - 一个消息分发中心, 交换机的类型决定了路由行为

- entity/实体: 队列，交换机和绑定统称为AMQP实体（AMQP entities）。



## Items

### 消息队列(Message Queue)

#### 多维解释

- 消息队列的本质功能是在分布式系统中进行异步通信，它允许应用程序通过队列发送和接收消息。
- 消息队列的主要功能包括： 
    -  异步处理：消息队列允许用户把一个任务放入队列，然后不必实时等待结果就可以继续执行其他任务。
    - 解耦：消息队列可以在系统的各个组成部分之间提供一个解耦的接口。这意味着发送和接收消息的应用程序不需要同时进行。
    - 削峰填谷：在高流量的系统中，消息队列可以作为一个缓冲，帮助系统应对瞬时的大流量。
    - 可靠性：如果一个处理消息的进程失败，消息队列可以保证消息不会丢失，当进程恢复后可以继续处理。

## AMQP

![Publish path from publisher to consumer via exchange and queue](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210820155336.png)

# 最佳实践

## 消息确认与重试机制

## 消息持久化

## 监控和日志记录

## 消息处理顺序性