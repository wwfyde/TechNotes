# JavaScript最佳实践

## 安装配置

### nvm

```shell
brew install nvm


You should create NVM's working directory if it doesn't exist:
  mkdir ~/.nvm

Add the following to your shell profile e.g. ~/.profile or ~/.zshrc:
  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion


nvm use

nvm alias default 20

nvm which 20 

# 支持的长期版本
nvm ls-remote --lts

# 已安装
nvm ls

# 系统版本
nvm use system
nvm run system --version

# 不同环境中使用不同node 通过.nvmrc 然后nvm use
.nvmrc
#然后
nvm use
```



# npm

配置

```shell
### 镜像加速
# 查看当前配置
npm config get refistry

# 淘宝镜像
npm config set registry https://registry.npmmirror.com

# 腾讯镜像
npm config set registry http://mirrors.cloud.tencent.com/npm/

# 华为镜像
npm config set registry https://mirrors.huaweicloud.com/repository/npm/

```



# 调试技巧
