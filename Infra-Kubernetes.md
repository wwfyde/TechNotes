# Kubernetes

生产级别的容器编排系统

## 参考资料

- [Offical Site](https://kubernetes.io/)
- [中文官网](https://kubernetes.io/zh-cn/)
- [极客时间:深入剖析Kubernetes](https://time.geekbang.org/column/intro/116)

[![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202310270016077.jpeg)](https://github.com/ByteByteGoHq/system-design-101/blob/main/images/k8s.jpeg)



![Kubernetes技能图谱](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202310150949376.jpeg)



## 多维解释

> 多维定义, 技术认知

- Kubernetes项目已然称为容器技术的事实标准, 重新定义了基础设施领域对应用编排与管理的种种可能.
- 编排永远都是容器云项目的灵魂所在, 也是Kubernetes社区持久生命力的源泉.
- 容器, 类似沙盒的概念, 使用`Cgroups` 和 `Namespace`概念股将应用进程隔离起来了

## 快速上手





## 问题引导

> 多维思考, 多角度剖析

1. 为什么容器里只能跑"跑一个进程"?

## Introduction

Kubernetes也称为K8s，是用于自动部署、扩缩和管理容器化应用程序的开源系统。

### 基本思路

创建kubernetes集群->

## 核心理念

- 以开发者为核心，构建一个相对民主和开放的容器生态

## Key Features

#### [自动化上线和回滚](https://kubernetes.io/zh-cn/docs/concepts/workloads/controllers/deployment/)

Kubernetes 会分步骤地将针对应用或其配置的更改上线，同时监视应用程序运行状况以确保你不会同时终止所有实例。如果出现问题，Kubernetes 会为你回滚所作更改。你应该充分利用不断成长的部署方案生态系统。

#### [服务发现与负载均衡](https://kubernetes.io/zh-cn/docs/concepts/services-networking/service/)

你无需修改应用来使用陌生的服务发现机制。Kubernetes 为每个 Pod 提供了自己的 IP 地址并为一组 Pod 提供一个 DNS 名称，并且可以在它们之间实现负载均衡。

#### [自我修复](https://kubernetes.io/zh-cn/docs/concepts/workloads/controllers/replicaset/#replicationcontroller-如何工作)

重新启动失败的容器，在节点死亡时替换并重新调度容器， 杀死不响应用户定义的健康检查的容器， 并且在它们准备好服务之前不会将它们公布给客户端。

#### [存储编排](https://kubernetes.io/zh-cn/docs/concepts/storage/persistent-volumes/)

自动挂载所选存储系统，包括本地存储、公有云提供商所提供的存储或者诸如 iSCSI 或 NFS 这类网络存储系统。

#### [Secret 和配置管理](https://kubernetes.io/zh-cn/docs/concepts/configuration/secret/)

部署和更新 Secret 和应用程序的配置而不必重新构建容器镜像， 且不必将软件堆栈配置中的秘密信息暴露出来。

#### [自动装箱](https://kubernetes.io/zh-cn/docs/concepts/configuration/manage-resources-containers/)

根据资源需求和其他限制自动放置容器，同时避免影响可用性。 将关键性的和尽力而为性质的工作负载进行混合放置，以提高资源利用率并节省更多资源。

#### [批量执行](https://kubernetes.io/zh-cn/docs/concepts/workloads/controllers/job/)

除了服务之外，Kubernetes 还可以管理你的批处理和 CI 工作负载，在期望时替换掉失效的容器。

#### [IPv4/IPv6 双协议栈](https://kubernetes.io/zh-cn/docs/concepts/services-networking/dual-stack/)

为 Pod 和 Service 分配 IPv4 和 IPv6 地址

#### [水平扩缩](https://kubernetes.io/zh-cn/docs/tasks/run-application/horizontal-pod-autoscale/)

使用一个简单的命令、一个 UI 或基于 CPU 使用情况自动对应用程序进行扩缩。

#### [为扩展性设计](https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/)

无需更改上游源码即可扩展你的 Kubernetes 集群。

## 基本认知

### Kubernetes是干什么用的, 具有哪些功能, 使用场景式什么?



### 为什么要用Kubernetes?



### 如何使用?

## **安装配置**

### 参考资料

- 

### Linux

https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/

```shell
sudo apt-get update
# apt-transport-https 可以是一个虚拟包；如果是这样，你可以跳过这个包
sudo apt-get install -y apt-transport-https ca-certificates curl
```

### 自动补全

#### zsh

```shell
source <(kubectl completion zsh)
```

### 安装容器运行时

#### docker engine

#### containerd

### 集群管理工具

#### 本地测试-minikube

```shell
```



#### 生产端-kubeadmin

```shell
```



### 包管理工具-Helm

### (备选)包管理工具-Kustomize

## 命令行

```shell
# 查看集群信息 
# 验证 kubectl 配置 
kubectl cluster-info
```



# 核心概念

## MISC

> miscellaneous, 杂项

### Linux进程模型

### "控制器"模式

## Namesapce(命名空间)

## cgroup(控制组, control group)

## Container

## Pod(豌豆荚)

> - https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/

Pod是Kubernetes中最小的可部署单元，通常包含一个或多个相关容器，它们共享同一网络命名空间、存储卷和其他资源。

**Pod** 是可以在 Kubernetes 中创建和管理的、最小的可部署的计算单元。

**Pod**（就像在鲸鱼荚或者豌豆荚中）是一组（一个或多个） [容器](https://kubernetes.io/zh-cn/docs/concepts/overview/what-is-kubernetes/#why-containers)； 这些容器共享存储、网络、以及怎样运行这些容器的声明。 Pod 中的内容总是并置（colocated）的并且一同调度，在共享的上下文中运行。 Pod 所建模的是特定于应用的 “逻辑主机”，其中包含一个或多个应用容器， 这些容器相对紧密地耦合在一起。 在非云环境中，在相同的物理机或虚拟机上运行的应用类似于在同一逻辑主机上运行的云应用。

除了应用容器，Pod 还可以包含在 Pod 启动期间运行的 [Init 容器](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/init-containers/)。 你也可以在集群支持[临时性容器](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/ephemeral-containers/)的情况下， 为调试的目的注入临时性容器。



> [!Note]
>
> Deployment（部署）：是Kubernetes中的一个对象，用于描述应用的期望状态，包括应用运行的副本数。Deployment负责创建和更新Pod。





## Paint(污点)

污点是一种核心对象，包含三个必需的属性：key、value 和 effect。 污点会阻止在[节点](https://kubernetes.io/zh-cn/docs/concepts/architecture/nodes/)或节点组上调度 [Pod](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/)。

污点和[容忍度](https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/taint-and-toleration/)一起工作， 以确保不会将 Pod 调度到不适合的节点上。 同一[节点](https://kubernetes.io/zh-cn/docs/concepts/architecture/nodes/)上可标记一个或多个污点。 节点应该仅调度那些带着能与污点相匹配容忍度的 Pod。

## Toleration(容忍度)

容忍度是一种核心对象，包含三个必需的属性：key、value 和 effect。容忍度允许将 Pod 调度到具有对应[污点](https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/taint-and-toleration/)的节点或节点组上。

容忍度和[污点](https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/taint-and-toleration/)共同作用可以确保不会将 Pod 调度在不适合的节点上。在同一 [Pod](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/) 上可以设置一个或者多个容忍度。 容忍度表示在包含对应[污点](https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/taint-and-toleration/)的节点或节点组上调度 [Pod](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/)是允许的（但并非必需）。

## 控制器(Controller)

## 控制平面(control plane)

## 数据平面(data plane)

## 资源(Resources)

> pod | service | ingress 等等

## 对象(Objects)



## 服务(Service)

- 将运行在一个或一组 [Pod](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/) 上的网络应用程序公开为网络服务的方法。

- 服务所针对的 Pod 集（通常）由[选择算符](https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/labels/)确定。 如果有 Pod 被添加或被删除，则与选择算符匹配的 Pod 集合将发生变化。 服务确保可以将网络流量定向到该工作负载的当前 Pod 集合。

    Kubernetes Service 要么使用 IP 网络（IPv4、IPv6 或两者），要么引用位于域名系统 (DNS) 中的外部名称。

    Service 的抽象可以实现其他机制，如 Ingress 和 Gateway。

- *解释*：服务定义了一组Pod的访问规则，使得应用程序可以通过服务名访问这些Pod，而不需要关心它们的具体位置。
- *Go角度*：Go开发者可以使用K8s提供的客户端库来创建、配置和管理服务。





# Glossary

## Lists

- Container(容器):
    - 容器只是一种特殊的进程
    - 一个正在运行的 Docker 容器，其实就是一个启用了多个 Linux Namespace 的应用进程，而这个进程能够使用的资源量，则受 Cgroups 配置的限制。
    - **一个“容器”，实际上是一个由 Linux Namespace、Linux Cgroups 和 rootfs 三种技术构建出来的进程的隔离环境。**
    - **容器是一个“单进程”模型。**

- Orchestrate(编排):
    - Container Orchestration(容器编排)
- OCI(Open Container Initiative)---开放容器倡议
    - OCI的提出, 将容器运行时和镜像的实现从Docker项目中完全剥离出来.
- CNCF(Cloud Native Computing Foundation)
- NameSpace
    - NameSpace的作用隔离, 它让应用进程只能看到该 Namespace 内的“世界”

- Cgroups(Control Groups):
    - Cgroups的作用是限制, 它给这个“世界”围上了一圈看不见的墙。
    - Linux Cgroups 的全称是 Linux Control Group。它最主要的作用，就是限制一个进程组能够使用的资源上限，包括 CPU、内存、磁盘、网络带宽等等。
- rootfs文件系统
- 镜像
    - **一个进程，可以选择加入到某个进程已有的 Namespace 当中，从而达到“进入”这个进程所在容器的目的，这正是 docker exec 的实现原理。**

- Dockerfile



# 组件工具

(component tools)

## kubelet

## kube-scripts

## istio

## Operator





# 网路组件

## ingress

# 存储



# Kubeflow

# 监控

## Prometheus

## Grafana

## AlertManager

## Loki

# Node

# Pod

# 容器

# 工作负载

# Service

## 参考资料

- https://kubernetes.io/docs/concepts/services-networking/service/

# Storage

## 

# 最佳实践

## kubectl

```shell

# 查看所有pods
kubectl get pods

# 查看所有资源类型
kubectl api-resources


# List information about a resource with more details:
kubectl get pod|service|deployment|ingress|... -o wide

- Update specified pod with the label 'unhealthy' and the value 'true':
    kubectl label pods name unhealthy=true

- List all resources with different types:
    kubectl get all

- Display resource (CPU/Memory/Storage) usage of nodes or pods:
    kubectl top pod|node

- Print the address of the master and cluster services:
    kubectl cluster-info

- Display an explanation of a specific field:
    kubectl explain pods.spec.containers

- Print the logs for a container in a pod or specified resource:
    kubectl logs pod_name

- Run command in an existing pod:
    kubectl exec pod_name -- ls /
```



# 常见问题

## Kubernetes客户端

访问Kubernetes Daemon的终端, kuberctl, API, 其他工具



# 《深入剖析Kubernetes》

## 背景

- PaaS之所以能够帮助用户大规模部署应用到集群力, 是因为它提供了一套应用打包功能.
- 容器技术的兴起源于 PaaS 技术的普及；
- 容器本身没有价值，有价值的是“容器编排”。
- 容器其实是一种沙盒技术。顾名思义，沙盒就是能够像一个集装箱一样，把你的应用“装”起来的技术。这样，应用与应用之间，就因为有了边界而不至于相互干扰；而被装进集装箱的应用，也可以被方便地搬来搬去，这不就是 PaaS 最理想的状态嘛。



## 进程

> 假如，现在你要写一个计算加法的小程序，这个程序需要的输入来自于一个文件，计算完成后的结果则输出到另一个文件中。
>
> 由于计算机只认识 0 和 1，所以无论用哪种语言编写这段代码，最后都需要通过某种方式翻译成二进制文件，才能在计算机操作系统中运行起来。
>
> 而为了能够让这些代码正常运行，我们往往还要给它提供数据，比如我们这个加法程序所需要的输入文件。这些数据加上代码本身的二进制文件，放在磁盘上，就是我们平常所说的一个“程序”，也叫代码的可执行镜像（executable image）。
>
> 然后，我们就可以在计算机上运行这个“程序”了。
>
> 首先，操作系统从“程序”中发现输入数据保存在一个文件中，所以这些数据就被会加载到内存中待命。同时，操作系统又读取到了计算加法的指令，这时，它就需要指示 CPU 完成加法操作。而 CPU 与内存协作进行加法计算，又会使用寄存器存放数值、内存堆栈保存执行的命令和变量。同时，计算机里还有被打开的文件，以及各种各样的 I/O 设备在不断地调用中修改自己的状态。
>
> 就这样，一旦“程序”被执行起来，它就从磁盘上的二进制文件，变成了计算机内存中的数据、寄存器里的值、堆栈中的指令、被打开的文件，以及各种设备的状态信息的一个集合。**像这样一个程序运起来后的计算机执行环境的总和，就是我们今天的主角：进程。**
>
> 所以，对于进程来说，它的静态表现就是程序，平常都安安静静地待在磁盘上；而一旦运行起来，它就变成了计算机里的数据和状态的总和，这就是它的动态表现。
>
> 而**容器技术的核心功能，就是通过约束和修改进程的动态表现，从而为其创造出一个“边界”。**
>
> 对于 Docker 等大多数 Linux 容器来说，**Cgroups 技术**是用来制造约束的主要手段，而**Namespace 技术**则是用来修改进程视图的主要方法。
>
> **容器:就是一种特殊的进程而已**
>
> 在理解了 Namespace 的工作方式之后，你就会明白，跟真实存在的虚拟机不同，在使用 Docker 的时候，并没有一个真正的“Docker 容器”运行在宿主机里面。Docker 项目帮助用户启动的，还是原来的应用进程，只不过在创建这些进程时，Docker 为它们加上了各种各样的 Namespace 参数。
>
> 这时，这些进程就会觉得自己是各自 PID Namespace 里的第 1 号进程，只能看到各自 Mount Namespace 里挂载的目录和文件，只能访问到各自 Network Namespace 里的网络设备，就仿佛运行在一个个“容器”里面，与世隔绝。

## Kubernetes的本质



一个“容器”，实际上是一个由 Linux Namespace、Linux Cgroups 和 rootfs 三种技术构建出来的进程的隔离环境。

从这个结构中我们不难看出，一个正在运行的 Linux 容器，其实可以被“一分为二”地看待：

1. 一组联合挂载在 /var/lib/docker/aufs/mnt 上的 rootfs，这一部分我们称为“容器镜像”（Container Image），是容器的静态视图；
2. 一个由 Namespace+Cgroups 构成的隔离环境，这一部分我们称为“容器运行时”（Container Runtime），是容器的动态视图。

更进一步地说，作为一名开发者，我并不关心容器运行时的差异。因为，在整个“开发 - 测试 - 发布”的流程中，真正承载着容器信息进行传递的，是容器镜像，而不是容器运行时。

这个重要假设，正是容器技术圈在 Docker 项目成功后不久，就迅速走向了“容器编排”这个“上层建筑”的主要原因：作为一家云服务商或者基础设施提供商，我只要能够将用户提交的 Docker 镜像以容器的方式运行起来，就能成为这个非常热闹的容器生态图上的一个承载点，从而将整个容器技术栈上的价值，沉淀在我的这个节点上。



更重要的是，只要从我这个承载点向 Docker 镜像制作者和使用者方向回溯，整条路径上的各个服务节点，比如 CI/CD、监控、安全、网络、存储等等，都有我可以发挥和盈利的余地。这个逻辑，正是所有云计算提供商如此热衷于容器技术的重要原因：通过容器镜像，它们可以和潜在用户（即，开发者）直接关联起来。

从一个开发者和单一的容器镜像，到无数开发者和庞大的容器集群，容器技术实现了从“容器”到“容器云”的飞跃，标志着它真正得到了市场和生态的认可。

这样，**容器就从一个开发者手里的小工具，一跃成为了云计算领域的绝对主角；而能够定义容器组织和管理规范的“容器编排”技术，则当仁不让地坐上了容器技术领域的“头把交椅”。**



<mark>首先，Kubernetes 项目要解决的问题是什么？</mark>

编排？调度？容器云？还是集群管理？

实际上，这个问题到目前为止都没有固定的答案。因为在不同的发展阶段，Kubernetes 需要着重解决的问题是不同的。

但是，对于大多数用户来说，他们希望 Kubernetes 项目带来的体验是确定的：现在我有了应用的容器镜像，请帮我在一个给定的集群上把这个应用运行起来。

更进一步地说，我还希望 Kubernetes 能给我提供路由网关、水平扩展、监控、备份、灾难恢复等一系列运维能力。

等一下，这些功能听起来好像有些耳熟？这不就是经典 PaaS（比如，Cloud Foundry）项目的能力吗？

而且，有了 Docker 之后，我根本不需要什么 Kubernetes、PaaS，只要使用 Docker 公司的 Compose+Swarm 项目，就完全可以很方便地 DIY 出这些功能了！

所以说，如果 Kubernetes 项目只是停留在拉取用户镜像、运行容器，以及提供常见的运维功能的话，那么别说跟“原生”的 Docker Swarm 项目竞争了，哪怕跟经典的 PaaS 项目相比也难有什么优势可言。

而实际上，在定义核心功能的过程中，Kubernetes 项目正是依托着 Borg 项目的理论优势，才在短短几个月内迅速站稳了脚跟，进而确定了一个如下图所示的全局架构：

![Kubernetes架构](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202310151024830.jpeg)

**Kubernetes 项目最主要的设计思想是，从更宏观的角度，以统一的方式来定义任务之间的各种关系，并且为将来支持更多种类的关系留有余地。**
