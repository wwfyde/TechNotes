# ComfyUI

## Links

- https://comfy.org
- [ComfyUI Wiki速查手册](https://comfyui-wiki.com/zh/workflows/img2img)
- [[ComfyUI_examples](https://comfyanonymous.github.io/ComfyUI_examples/)](https://comfyanonymous.github.io/ComfyUI_examples/)

## systemd

```toml

[Unit]
Description=ComfyUI Server Service
After=network.target

[Service]
# 运行 ComfyUI 的用户
#User=root

# ComfyUI 的安装目录
WorkingDirectory=/root/wwfyde/ComfyUI

Environment="HF_ENDPOINT=https://hf-mirror.com"

#启动 ComfyUI 的命令，加上 --listen 以监听所有接口
ExecStart=bash -c "source .venv/bin/activate; python main.py --listen 0.0.0.0 --cuda-device 0 --port 48188"
#总是重启服务
Restart=always

#重启前等待 5 秒
RestartSec=5s

#标准输出日志文件
#StandardOutput=file:/var/log/comfyui.log

#错误日志文件
#StandardError=file:/var/log/comfyui_error.log

[Install]
WantedBy=multi-user.target



```







# Node

```shell
节点备份

cg-use-everywhere              ComfyUI_ExtraModels            comfyui-lama-remover           comfyui-various
ComfyMath                      ComfyUI_FaceAnalysis           ComfyUI-layerdiffusion         ComfyUI-VideoHelperSuite
comfy_mtb                      comfyui_facetools              ComfyUI_LayerStyle             comfyui-workspace-manager
ComfyUI-Advanced-ControlNet    ComfyUI_Fill-Nodes             comfyui-liveportrait           efficiency-nodes-comfyui
ComfyUI-AdvancedLivePortrait   ComfyUI_Florence2SAM2          ComfyUI-LivePortraitKJ         example_node.py.example
ComfyUI_AdvancedRefluxControl  ComfyUI-Frame-Interpolation    ComfyUI-Logic                  human-parser-comfyui-node
ComfyUI_ADV_CLIP_emb           ComfyUI-GGUF                   ComfyUI-Manager[√]             masquerade-nodes-comfyui
ComfyUI-AnimateDiff-Evolved    ComfyUI-HakuImg                ComfyUI-Portrait-Maker         mikey_nodes
ComfyUI-Anyline                ComfyUI-IC-Light               ComfyUI-post-processing-nodes  molook-nodes
comfyui-art-venture            ComfyUI-IC-Light-Native        comfyui-reactor-node           molook_split
ComfyUI-BiRefNet               ComfyUI-IC-Light-Wrapper       ComfyUI-SAM2                   pinkscales_was_here_dis_is_a_lock_btw
ComfyUI-BrushNet-Wrapper       ComfyUI-Impact-Pack            comfyui_segment_anything       PuLID_ComfyUI
ComfyUI_Comfyroll_CustomNodes  ComfyUI-Impact-Subpack         ComfyUI-segment-anything-2     __pycache__
comfyui_controlnet_aux         ComfyUI-Inpaint-CropAndStitch  ComfyUI_SimpleTiles            rgthree-comfy
ComfyUI-Crystools              comfyui-inpaint-nodes          ComfyUI-SUPIR                  SeargeSDXL
ComfyUI-Crystools-save         ComfyUI-Inspire-Pack           comfyui-tensorops              steerable-motion
ComfyUI-Custom-Scripts         ComfyUI_InstantID              ComfyUI_TGate                  test_zzl
ComfyUI-Easy-Use[√]            comfyui-instantId-faceswap     ComfyUI-TiledDiffusion         was-node-suite-comfyui
ComfyUI-ELLA                   ComfyUI_IPAdapter_plus         ComfyUI_TiledKSampler          websocket_image_save.py
ComfyUI_essentials             ComfyUI-KJNodes                ComfyUI_UltimateSDUpscale


```

## 配置

- extension
  - 开启 snap to grid
- theme
  - 可选 obsidian Dark, 

## 效率与UI

- ComfyUI-Manager
- https://github.com/rgthree/rgthree-comfy
  - UI 美化

- ComfyUI-Easy-Use
- ComfyUI-Crystools
  资源监视器
  - https://github.com/crystian/ComfyUI-Crystools
  - 现实每个节点的执行时间
- custom
  - 吸附到网格

- cg-use-everywhere
  -将节点放置在任何位置
- ComfyUI-Detail-Daemon (细节恶魔)： 专注于增强图像细节，并能有效去除不需要的模糊或背景。它支持多种模型，包括 SDXL 和 SD 1.5。
- WAS Node Suite (WAS 节点套件)： 包含 100 多个节点，涵盖图像处理、文本处理、数学、视频、GIF 等多个领域。是一个功能非常全面的工具包。
- https://github.com/chrisgoringe/cg-use-everywhere
- https://github.com/Tenney95/ComfyUI-NodeAligner
  - 节点对齐


## 图像编辑

https://github.com/chflame163/ComfyUI_LayerStyle



## 输入相关

- art-venture

## 调试预览相关

## easy-use

Could not find efficiency nodes
Could not find ControlNetPreprocessors nodes
Could not find AdvancedControlNet nodes
Could not find AnimateDiff nodes
Could not find IPAdapter nodes
Could not find VideoHelperSuite nodes
Could not load ImpactPack nodes Could not find ImpactPack nodes




## 视频相关

- ComfyUI-AnimateDiff-Evolved
- 

