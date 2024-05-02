# 最佳实践

## Lists

- 用户二进制文件存放目录
    - ~/.local/bin

## 用户代码存放目录

```shell
projects
code
opt
```

## 

## 挂载远程目录

### mount nfs(linux)


### sshfs 挂载

### cifs 挂载(windows)

```shell
man mount
```

## NFS共享

- [参考资料](https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/8/html/managing_file_systems/mounting-nfs-shares_managing-file-systems#doc-wrapper)
- [阿里云OSS挂载访问](https://help.aliyun.com/zh/nas/user-guide/file-system-mounting/)

### 服务端配置

```shell
# 安装NFS服务端
sudo apt update
sudo apt install nfs-kernel-server

# 创建或确定要共享的目录, 并设置好权限
sudo chown nobody:nogroup /home/demo/target
sudo chmod 777 /home/demo/target

# 编辑 /etc/exports 文件 添加共享目录和允许访问的客户端吧
/home/demo/target client_ip(rw,sync,no_subtree_check,fsid=0,crossmnt,nohide,insecure)

# 应用exports文件并重启NFS服务器
sudo exportfs -arv
# sudo systemctl restart nfs-kernel-server
sudo systemctl restart nfs-server.service 

# 防火墙设置(可选)
sudo ufw allow from client_ip to any port nfs
sudo ufw allow from client_ip to any port mountd
sudo ufw allow from client_ip to any port rpc-bind
sudo ufw reload


```

### 客户端配置

```shell
# 安装NFS客户端
sudo apt update
sudo apt install nfs-common

# 创建本地挂载点
mkdir ~/models

# 挂载共享目录
# 注意服务端地址设置为/ 根目录
sudo mount -t  nfs4 192.168.0.138:/ /home/molook/models
sudo mount -t  nfs4 192.168.0.138:/home/molook/code/ComfyUI/models/ /home/molook/models

# 自动挂载
server_ip:/ /path/to/local_mount_point nfs4 nfsvers=4,proto=tcp,timeo=600 0 0

```



## 公网IP端口映射



## ubuntu22安装python3.11

### 方式一

```shell
# 安装deadsnakes ppa
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa

# 安装python3.11
sudo apt update
sudo apt install python3.11 python3.11-venv binfmt-support

# 查看python 版本
python3.11 --version

```

### 方式二 miniconda



### 方式三 pyenv

注意依赖

```shell
# zlib
sudo apt install zlib1g zlib1g-dev libssl-dev libbz2-dev libsqlite3-dev



```





### 方式四 源码

## 将磁盘格式化为ext4文件系统

```shell
# 查看磁盘设备路径
sudo fdisk -l

# 重新格式化为ext4文件系统
sudo m

```

## 重新分配内存

```shell
# 关闭交换文件(虚拟内存)
sudo swapoff /swapfile

# 查看状态
free -h

# 增加
sudo truncate -s 32G /swapfile  

# 分配内存
sudo fallocate -l 32G /swapfile

# 
sudo mkswap /swapfile

sudo swapon /swapfile

 free -h
```



# Glossary

## AWS

### items

### lists

- AWS EKS Cluster, EKS(Amazon Elastic Kubernetes Service, EKS)
    - 是一个托管服务，使用户可以在AWS上轻松运行Kubernetes应用程序。这项服务负责自动部署、管理、扩展、以及维护Kubernetes控制平面服务器，从而简化了用户对Kubernetes环境的管理。以下是与AWS EKS相关的一些关键术语及其解释



# Topics



## AWS



# 宝塔Linux面板

## 参考资料

- [宝塔BT](https://www.bt.cn/new/index.html)
