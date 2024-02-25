# RabbitMQ

- 官方文档https://www.rabbitmq.com/tutorials/tutorial-one-python.html

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210802140907.png)

Producer sends messages to the "hello" queue. The consumer receives messages from that queue.

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

## AMQP

![Publish path from publisher to consumer via exchange and queue](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210820155336.png)

# 最佳实践

## 消息确认与重试机制

## 消息持久化

## 监控和日志记录

## 消息处理顺序性