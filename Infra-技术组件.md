---
title: 技术组件
i18n:
    en: technical components
synonym:[后端组件, 后端技术组件, 基础设施软件]
description: vault, etcd等等. 
---



# 技术组件

> 别名-synonym: 技术组件, 后端组件, Python技术组件, 后端技术组件, 基础设施软件





# Vault

> 类似产品: jumpserver, Teleport

## 参考链接

- [Vault中文手册](https://lonegunmanb.github.io/essential-vault/)

# Terraform



## 参考链接

- [Terraform入门教程-中文手册](https://lonegunmanb.github.io/introduction-terraform/)

## Introduction

### 多维解释

- 预配置系统





## 核心特性

Infrastructure as code(IAC) tool



### Provider





# Etcd

```shell
brew services start etcd
# To start etcd now and restart at login:
brew services start etcd
# if you don't want/need a background service you can just run:
/opt/homebrew/opt/etcd/bin/etcd
```

# Prometheus

![Prometheus architecture](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202312201731929.png)

![Prometheus](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202312081225298.svg)

![internal architecture](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202312081227866.svg)

## 参考资料

- [官网](https://prometheus.io)
- [Github](https://github.com/prometheus/prometheus)

## 简介-Introduction

From metrics to insight
——(从指标到洞察)

Power your metrics and alerting with the leading open-source monitoring solution.
——(利用领先的开源监控解决方案来支持你的指标和报警功能).



## 概念-Concepts

### 指标-metric

#### 多维解释

- 数值测量
- Metrics are numerical measurements in layperson terms. 

### 警报-alert

### 标签-label

### 时间序列-time series

## 设置(安装和配置)

### 方式一 docker

### 方式二 直接下载二进制文件

#### 使用 systemd 管理服务

[How to Install Prometheus on Ubuntu 22.04](https://www.cherryservers.com/blog/install-prometheus-ubuntu)

```shell
# 创建组和用户
sudo groupadd --system prometheus
sudo useradd -s /sbin/nologin --system -g prometheus prometheus


# 创建配置和资料目录
sudo mkdir /etc/prometheus
sudo mkdir /var/lib/prometheus

# 下载二进制文件 解压 移动 并修改权限
sudo mv prometheus /usr/local/bin
sudo mv promtool /usr/local/bin
sudo chown prometheus:prometheus /usr/local/bin/prometheus
sudo chown prometheus:prometheus /usr/local/bin/promtool

# 移动示例资料到相应配置和资料文件夹
sudo mv consoles /etc/prometheus
sudo mv console_libraries /etc/prometheus
sudo mv prometheus.yml /etc/prometheus

sudo chown prometheus:prometheus /etc/prometheus
sudo chown -R prometheus:prometheus /etc/prometheus/consoles
sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
sudo chown -R prometheus:prometheus /var/lib/prometheus


# 创建systemd服务
sudo vim /etc/systemd/system/prometheus.service
# 示例
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
    --config.file /etc/prometheus/prometheus.yml \
    --storage.tsdb.path /var/lib/prometheus/ \
    --web.console.templates=/etc/prometheus/consoles \
    --web.console.libraries=/etc/prometheus/console_libraries

[Install]
WantedBy=multi-user.target

# 加载服务
sudo systemctl daemon-reload

# 设置开机自动启动并启动服务
sudo systemctl enable prometheus
sudo systemctl start prometheus

# 检查服务状态
sudo systemctl status prometheus

# 端口控制(可选)
sudo ufw allow 9090/tcp
```



# Grafana

## 安装和配置

### [安装 on Debian](https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/)

```shell
# 前置软件安装
sudo apt-get install -y apt-transport-https software-properties-common wget

# 导入 GPG key
sudo mkdir -p /etc/apt/keyrings/
wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null

# 添加稳定版本到仓库
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list

# 更新apt list
sudo apt-get update


# 安装 promtail
sudo apt-get install promtail

# 修改配置 
# 将Clients的`localhost`修改为 `192.168.0.133

# 开机自启
systemctl enable promtail

# 启动或重启
systemctl start promtail
systemctl restart promtail

```

### 安装 on Radhat

[grafana/installation/redhat-rhel-fedora/](https://grafana.com/docs/grafana/latest/setup-grafana/installation/redhat-rhel-fedora/)

```shell
# 导入 GPG key
wget -q -O gpg.key https://rpm.grafana.com/gpg.key
sudo rpm --import gpg.key


```

创建`/etc/yum.repos.d/grafana.repo`文件, 用如下内容

```shell
[grafana]
name=grafana
baseurl=https://rpm.grafana.com
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://rpm.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt
exclude=*beta*
```

安装

```shell
sudo dnf install grafana
```



## LogQL

- [Grafana: LogQL参考](https://grafana.com/docs/loki/latest/query/)

# Loki

## send data

## Grafana Agent

## Promtail



```shell
```

### 解决权限问题

将 promtail 用户 添加到 syslog 和 adm 组 具体根据



# Alertmanager

```ini
[Unit]
Description=Alertmanager server
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
ExecStart=/usr/local/bin/alertmanager \
    --config.file /etc/alertmanager/alertmanager.yml \

[Install]
WantedBy=multi-user.target
```



# ~~Teleport~~

> 类似jumpserver
