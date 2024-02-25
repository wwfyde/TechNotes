# Kafka&RabbitMQ

## 参考资料

- [40 道精选 Kafka 面试题](https://javabetter.cn/interview/kafka-40.html#_1、kafka-的设计)
- [ByteByteGo](https://www.youtube.com/watch?v=UNUz1-msbOM)





## Kafka性能高的原因

> Kafka为什么高性能

顺序I/O, 

零拷贝---Read Without zero copy

Kafka 的高性能主要依赖于以下几个关键因素:

1. **分布式架构**:Kafka 采用分布式集群架构,可以水平扩展到上万个节点,支持每秒处理百万级消息。
2. **持久化存储**:Kafka 使用文件系统持久化存储消息,避免了[数据库](https://cloud.tencent.com/solution/database?from_column=20065&from=20065)成为性能瓶颈,大大提高了吞吐量。
3. **顺序读写**:Kafka 的消息和文件都是顺序读写的,不需要频繁的随机寻址,这种顺序写入的方式非常高效。
4. **零拷贝**:Kafka 使用 SendFile 技术,可以直接将文件映射到内核空间和网络空间,避免用户空间和内核空间之间的拷贝,提高网络吞吐量。
5. **批量处理**:Kafka 会将多个消息批量写入,避免了频繁的网络传输和磁盘寻址,提高了整体吞吐量。
6. **页高速缓存**:Kafka 利用页高速缓存来加速读写,最近访问的页会留在高速缓存,不需要每次都读磁盘。
7. **消息压缩**:Kafka 支持消息压缩,可以减少网络流量和磁盘空间占用,提高系统吞吐量。
8. **高效订阅**:Kafka 的消费组通过订阅 topic 实现[负载均衡](https://cloud.tencent.com/product/clb?from_column=20065&from=20065),简化了消费端设计,也提高了总体吞吐量。

以上这些技术设计使 Kafka 既可以作为高吞吐的[消息队列](https://cloud.tencent.com/product/cmq?from_column=20065&from=20065),也可以作为低延迟的发布-订阅系统,性能非常优异。





# RabbitMQ

## 如何保证消息不丢失



### producer

发送端确认机制

### broker

持久化消息

### consumer

ack机制, 发送方确认机制