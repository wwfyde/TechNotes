# MinIO

install

```shell
mkdir -p ~/docker/minio/data

docker run \
   -p 9000:9000 \
   -p 9001:9001 \
   --name minio \
   -e TZ=Asia/Shanghai \
   -v ~/docker/minio/data:/data \
   -e "MINIO_ROOT_USER=minioadmin" \
   -e "MINIO_ROOT_PASSWORD=minioadmin" \
   -dit quay.io/minio/minio server /data --console-address ":9001"
```

