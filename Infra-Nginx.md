# Nginx

> [官方文档 https://docs.nginx.com](https://docs.nginx.com)
>
> [官方文档 https://nginx.org/en/docs/](https://nginx.org/en/docs/)

## Installation

- [](https://nginx.org/en/linux_packages.html#Ubuntu)

```shell
sudo apt install nginx

# 开机自启
sudo systemctl enable nginx

# 启动
sudo systemctl start nginx
```

## Configuration

# Topics

## 反向代理(Reverse Proxy)

正向代理是 将所有的请求交给某个端口处理

反向代理是将 某个请求交给 代理服务器处理, 由其来确定使用哪一台服务器



```ini
server {
    listen 80;
    server_name www.example.com example.com;

    location /app {
       proxy_pass http://127.0.0.1:8080;
    }
    
    location / {
    proxy_set_header Host $host;
    proxy_set_header Accept-Encoding "";
    proxy_pass http://localhost:3000;
}
}
```



## 负载均衡(load balance)



```ini
http {
    upstream backend {
        server backend1.example.com weight=5;
        server backend2.example.com;
        server 192.0.0.1 backup;
    }
}

server {
    location / {
        proxy_pass http://backend;
    }
}
```

# 实用命令

```shell
# 配置文件错误：检查是否有语法错误。可以使用 nginx -t 命令来测试配置文件的正确性。
nginx -t 

# 日志错误
# 错误日志：查看 Nginx 的错误日志（通常位于 /var/log/nginx/error.log），这可以提供更多关于为什么请求失败的信息。
```



# 配置详解

## 综合

```nginx
server {
  listen 443 ssl http2;
  server_name		sub.domain.com;  # 域名或IP地址
  ssl_certificate		sslkey/xxx.crt;  # 证书
  ssl_certificate_key		sslkey/xxx,key;		# 证书秘钥
  client_max_body_size		4096M;  # 文件上传大小限制
}
```



## gzip

```shell
		gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";
```



## 预检请求



## proxy_set_header

```nginx
# None
Host = localhost:8004, 0.0.0.0:8004; 
proxy_set_header Host $http_host;
```



# 常见问题

## 13 permission denied

解释: www-data用户权限不足, 而一般的目录则是自定义用户. 通过`ps aux | grep -e "nginx" -e "PID"`可以查看` nginx: worker process`相关的进程用户是以www-data用户启动的

### 解决

修改`sudo vim /etc/nginx/nginx.conf`的`user www-data;` 为 `user root;`或与静态文件目录所有权一致的用户 以保证权限

## 单页应用/login路由提示为404



```nginx
# 逐个尝试 查找路由和文件
# 这个配置通常用于前端单页应用（SPA）的路由配置
try_files $uri $uri/ /index.html =404;
```

## 307 Temporary Redirect

