# AWS

# Glossary

EBS(Elastic Block Store)







# 最佳实践

## 登录 

免密面公钥文件登录

将id_rsa.pub的内容复制到AWS主机上的 `~/.ssh/authorized_keys` 中即可

使用aws

```shell
# 先配置AK json
aws configure

# 验证是否配置成功
aws s3 ls      

aws ec2-instance-connect ssh --instance-id i-000d4d418d6391408


# 
cat /etc/hosts.allow


```

## 查看单个实例产生费用

- [创建成本和使用情况报告(cost and usage reports)](https://docs.aws.amazon.com/zh_cn/cur/latest/userguide/cur-create.html)
- [What are AWS Cost and Usage Reports?]()
- [使用 AWS 成本分配标签](https://docs.aws.amazon.com/zh_cn/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html)
    - 



## 扩展文件系统



### 参考资料

- [AWS EBS 扩展文件系统](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html)

### 概述

```shell
sudo growpart /dev/nvme0n1 1

# 生效扩展
sudo resize2fs /dev/nvme0n1p1
```

