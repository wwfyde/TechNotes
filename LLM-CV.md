# CV

> [!note]
>
> 计算机视觉, Computer Vision
>
> AI Vision

# Glossary

## Items

- LoRA(Low Rank Adaptation of Large Language Models)
  - 这是一种应用于大规模语言模型的技术，旨在通过添加一层低秩变换来适应新的下游任务。
  - 传统的预训练语言模型通常是针对大规模无标注文本数据进行预训练，从而学习到通用的语言表达能力。然而，在实际应用中，我们往往需要让这些预训练模型适应具体的下游任务。在这种情况下，LoRA 变得非常有用，因为它能够有效地引入任务相关的知识而不会破坏原始预训练模型学到的知识。
  - 具体来说，LoRA 通过对原始预训练模型的最后一层添加一层低秩变换来调整权重。这样做的好处在于：一方面可以避免直接微调整个模型带来的过大计算开销；另一方面也能够在保持预训练模型性能的同时更好地适应新任务。 因此，简单地说，“LoRA”就是指一种应用于大规模语言模型的技术，通过添加一层低秩变换来使其更适应新的下游任务。
  - **作用**: 改善大模型的质量和效率, 以使其更适合特定任务或需求
- VAE
- checkpoint(检查点)
- embedding
- confusion model-扩散模型
- face restoration——面部修复, 人脸复原

## Domain

### image style

- realistic-写实的



# 领域知识

## 平台

- 创客帖
- 美图设计室

## 应用

换装-clothes changer, outfit change



## 图像处理与应用

### 图像分割

#### SAM2

### DeepLabv3+

### 图像生成

### 图像提示与控制

#### IP-Adapter

#### ControlNet

#### OpenPose

### 图像修复(inpaint)

### 图像超分辨率(super-resolution)









# Prompt Engineering

## Reference Links

- 



# SXDL



# DALL·E3

DALL·E 2 is an AI system that can create realistic images and art from a description in natural language.

## 参考资料

- https://openai.com/dall-e-3
- https://cdn.openai.com/papers/dall-e-3.pdf



# codeformer

# GFPGAN

# 人脸修复

[综合的人脸修复, 相关的论文](https://github.com/TaoWangzj/Awesome-Face-Restoration)



# AnimateDiff



# SAM2





# facefusion

https://github.com/facefusion/facefusion

# ComfyUI

## Links

- https://comfy.org
- [ComfyUI Wiki速查手册](https://comfyui-wiki.com/zh/workflows/img2img)
- [[ComfyUI_examples](https://comfyanonymous.github.io/ComfyUI_examples/)](https://comfyanonymous.github.io/ComfyUI_examples/)
- AGI空间站 https://agispace.feishu.cn/wiki/QlvMww0qriUX0qkZVJlcv0qHnbh
- 通往AGI之路 https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e

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

Environment="HF_ENDPOINT=https://hf-mirror.com"profile.d/conda.sh 

#启动 ComfyUI 的命令，加上 --listen 以监听所有接口
ExecStart=bash -c "source .venv/bin/activate; python main.py --listen 0.0.0.0 --cuda-device 0 --port 48188"
ExecStart=bash -c "source $HOME/miniconda3/etc/profile.d/conda.sh; conda activate; python main.py --listen 0.0.0.0 --cuda-device 0 --port 48188"
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



```markdown
ComfyUI's power lies in its flexible node-based system, and the community has developed a wide range of custom nodes and extensions to enhance its functionality. Below is a list of top recommended nodes and extensions for ComfyUI, based on their popularity, utility, and ability to streamline workflows or unlock advanced features as of February 21, 2025. These recommendations cater to both beginners and advanced users looking to optimize their AI image generation experience.

1. ComfyUI Manager
Why It’s Recommended: This is the cornerstone of custom node management in ComfyUI. It acts as an "app store" for discovering, installing, and updating other nodes and extensions effortlessly. It also helps troubleshoot missing nodes in workflows.
Key Features: Installs custom nodes via a simple interface, manages updates, and resolves dependency issues.
Best For: Everyone—it's the first extension you should install.
2. WAS Node Suite
Why It’s Recommended: One of the most comprehensive and widely used node packs, offering over 100 nodes for advanced workflows. It’s a Swiss Army knife for image processing, text manipulation, and more.
Key Features: Includes nodes for image generation, gradient mapping, blending modes, text processing, and math operations. Highly versatile for creative and technical tasks.
Best For: Users who want extensive tools for complex workflows without needing multiple extensions.
3. ComfyUI Impact Pack
Why It’s Recommended: Focused on image enhancement, this pack excels at tasks like face detailing, object detection, and segmentation. It’s a go-to for refining generated images.
Key Features: Face detection, detail enhancement, upscaling, and integration with tools like ADetailer (similar to Automatic1111’s WebUI).
Best For: Artists and creators aiming for polished, high-quality outputs.
4. Efficiency Nodes for ComfyUI
Why It’s Recommended: Simplifies workflows by combining multiple nodes into single, efficient ones. It reduces clutter and improves usability.
Key Features: Exposes inputs as outputs for seamless graphing, built-in preview options, and workflow optimization tools.
Best For: Beginners and users who prefer clean, streamlined workflows without sacrificing functionality.
5. rgthree’s ComfyUI Nodes
Why It’s Recommended: Enhances workflow efficiency with quality-of-life improvements and optimization features. It’s great for keeping graphs organized and speeding up execution.
Key Features: Progress bars, advanced reroute nodes, seed control, and context nodes for better flow management.
Best For: Users who want a smoother, faster ComfyUI experience with cleaner graphs.
6. ComfyUI Ultimate SD Upscale
Why It’s Recommended: A must-have for upscaling images to high resolutions with excellent detail preservation, adapted from Automatic1111’s equivalent.
Key Features: Upscaling with ControlNet tile options for massive, detailed outputs.
Best For: Anyone needing high-resolution images for print or detailed artwork.
7. tinyterraNodes
Why It’s Recommended: Adds practical utility nodes that integrate seamlessly with Stable Diffusion workflows, enhancing usability and creativity.
Key Features: Autocomplete for embedding filenames, dynamic widgets, and nodes like BLIP Analyze Image for captions or image interrogation.
Best For: Users who value convenience and want to streamline text and image handling.
8. ComfyUI-AnimateDiff-Evolved
Why It’s Recommended: Extends ComfyUI into animation territory, enabling the creation of smooth AI-generated animations.
Key Features: Motion modeling and frame generation based on Stable Diffusion outputs.
Best For: Animators or creators experimenting with video and motion graphics.
9. ComfyUI-ControlNet Extensions
Why It’s Recommended: Integrates ControlNet functionality (e.g., canny edge, depth maps) into ComfyUI, offering precise control over image generation.
Key Features: Preprocessors (e.g., Canny, OpenPose) and model loading for guided generation.
Best For: Advanced users who need fine-tuned control over composition and style.
10. ComfyUI_IPAdapter_Plus
Why It’s Recommended: Enhances image-to-image workflows by adapting reference images into the generation process with precision.
Key Features: IPAdapter models for style transfer and image conditioning, plus quality-of-life nodes like image resizing and cropping.
Best For: Users focused on style blending or consistent character design.
Installation Tips
Using ComfyUI Manager: Install it first, then use its interface to search for and install these nodes/extensions. Restart ComfyUI after each installation.
Manual Installation: Clone the GitHub repository into the ComfyUI/custom_nodes directory (e.g., git clone <repository_url>), then restart ComfyUI.
Dependencies: Ensure you have Git installed and check each extension’s documentation for additional requirements.
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
  - 吸附到网格snap to grid

- cg-use-everywhere
  -将节点放置在任何位置
- ComfyUI-Detail-Daemon (细节恶魔)： 专注于增强图像细节，并能有效去除不需要的模糊或背景。它支持多种模型，包括 SDXL 和 SD 1.5。
- WAS Node Suite (WAS 节点套件)： 包含 100 多个节点，涵盖图像处理、文本处理、数学、视频、GIF 等多个领域。是一个功能非常全面的工具包。
- https://github.com/chrisgoringe/cg-use-everywhere
- https://github.com/Tenney95/ComfyUI-NodeAligner
  - 节点对齐
- KJ-Nodes


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

# SD

## Links

- 

## 配置

https://www.skycaiji.com/aigc/ai22820.html
VAE模型



```markdown
Stable Diffusion模型（ckpt)。
全称：checkpoint检查点，是AI生图的重要依据。
别称：是AI生图的基础模型，文件比较大，文件通常在几个GB级别，又称为大模型、底模型或者主模型；必须有大模型的情况下才能进行图像扩散。
文件后缀：【.ckpt】文件一般为几个GB大小、【.safetensors】一般低于1GB，占用空间小。
存放的路径：模型下载完存放【Stable Diffusion\models\Stable-diffusion】路径下。
模型的作用：大模型决定了生成图像的画风、风格；模型里面没有的元素则是无法生成的。
模型的选择：可以根据自己需要的风格类型来选择底模（即大模型、主模型）。

2、VAE：中文名是变分自编码器，是一种基于深度学习的生成模型。
作用：在SD（Stable Diffusion）模型中扮演着重要的角色；主要负责决定图片的色调及小细节，通过增加图片的饱和度降低灰度，使得生成的图片更加丰富多彩；相当于滤镜和微调。
存放的路径：模型下载完存放【Stable Diffusion\models\VAE】
基于本地部署需要进行设置：【设置 → 用户界面 → 快捷设置列表 → 勾选 sd_vae保存设置，重启WebUI】；现有大模型也会自带【VAE模型】，可根据用户需要进行添加【VAE模型】。

3、CLIP跳过层数：Clip skip是一种语言理解模型，总共有12个参数；数值越低，越能理解我们输入的提示词；数值越高，生成的图和提词的相关性越低，按照自己的想法去扩散生成图像；一般安全数值范围在2~4之间，出图效果最佳。
4、采样方法（sample）：Sampling Method影响的不仅是图片的扩散过程，还能影响整个图片的色彩、构图等。
常用的采样器有：
DPM++2M Karras
DPM++SDE Karras
DPM++2M SDE Exponential
DPM++2M SDE Karras
Euler a
Euler
LMS
Heun
DPM2
DPM2 a
......
作用：更高效的扩散图像。

5.采样迭代步数（steps)：Sampling Steps就是图像扩散的步数，也可理解为AI绘画的笔数。迭代步数的设置要根据具体的采样器而决定，一般在20~50之间。
6、提示词引导系数：CFG Scale（提示词相关性），影响的是我们输入提示词的权重； 这里的权重不同于提示词语法权重，而是整个图片扩散过程提示词与其它参数占比的总权重；提示词权重在7~15之间是比较安全的。
7、面部修复/Restore faces：识别人像后进行局部重绘；模型尺寸一般是512*512，点击面部修复会生成两个人物。
8、高清放大/Hires.fix：增加噪点扩散放大；高清修复有一个放大算法，就是对于图片放大重绘的基础算法，不是单纯的放大图片；一般采用4X/6B的高清算法。
9、平铺图/Tiling：顾名思义就是可以进行平铺。
10、Seed：噪声图，也叫种子图；随机种子数与差异种子数值越大构图影响越大，反之越少；差异种子参数控制的是随机种子数与差异种子数之间的噪声图的变化。
Seed的最大种子数：18446744073709550591

以下是推荐的几个下载模型的网站：
抱脸 →
https://huggingface.co/models?pipeline_tag=text-to-image&sort=downloads 【需要魔法】

Cyberes.github → https://cyberes.github.io/stable-diffusion-models

Rentry → https://rentry.co/sdmodels 【需要魔法】

海艺 → https://www.seaart.ai/zhCN 【需要魔法】

L站 → https://www.liblib.art/

吐司 → https://tusiart.com/

C站 → https://civitai.com/ 【需要魔法】

来源：https://blog.csdn.net/kat_raja/article/details/141677844

总结

### 文章总结：《Stable Diffusion学习笔记TOP03——SD通用基本参数详解》
#### 关键内容梳理：
1. **Stable Diffusion模型（ckpt）**
- **定义**：checkpoint检查点，AI生成图像的基础。
- **别称**：大模型、底模型、主模型，文件大（通常以GB计），决定着图像的画风和风格。
- **文件格式**：.ckpt（几GB大小），.safetensors（小于1GB）。
- **存放路径**：Stable Diffusion\models\Stable-diffusion。
- **作用**：决定图像的基本风格，无法生成模型中不存在的元素。
- **选择**：根据所需风格进行选择。
2. **VAE（变分自编码器）**
- **作用**：在SD模型中决定图片的色调和小细节，增加图片的色彩丰富度，类似滤镜效果。
- **存放路径**：Stable Diffusion\models\VAE。
- **设置**：本地部署需进行设置，大模型通常自带VAE，可按需添加。
3. **CLIP跳过层数**
- **解释**：影响语言理解模型对提示词的理解程度。
- **参数**：共12个参数，数值越低理解度越高，安全性推荐2~4之间。
4. **采样方法（sample）**
- **常用采样器**：DPM++系列、Euler、LMS等，影响图像扩散效率和整体效果。
5. **采样迭代步数（steps）**
- **定义**：图像扩散的步数，类似AI绘画的笔数。
- **设置**：根据采样器决定，通常20~50步之间。
6. **提示词引导系数（CFG Scale）**
- **作用**：控制输入提示词在整个图像扩散过程中的权重。
- **推荐值**：7~15之间较安全。
7. **面部修复/Restore faces**
- **功能**：识别人像后局部重绘，生成更细致的人像图像。
8. **高清放大/Hires.fix**
- **作用**：基于噪点扩散算法进行高清放大修复，非简单放大图片。
- **算法**：常用4X/6B算法。
9. **平铺图/Tiling**
- **功能**：支持图片平铺，用于生成连续性或重复性的图像效果。
10. **Seed**
- **定义**：噪声图/种子图，影响构图变化和随机性。
- **最大种子数**：18446744073709550591。
#### 推荐模型下载网站：
- 抱脸：[https://huggingface.co/models?pipeline_tag=text-to-image&sort=downloads] （需特殊访问方式）
- Cyberes.github：[https://cyberes.github.io/stable-diffusion-models]
- Rentry：[https://rentry.co/sdmodels] （需特殊访问方式）
- 海艺：[https://www.seaart.ai/zhCN] （需特殊访问方式）
- L站：[https://www.liblib.art/]
- 吐司：[https://tusiart.com/]
- C站：[https://civitai.com/] （需特殊访问方式）
```



## sd-webui-prompt-all-in-one

https://github.com/Physton/sd-webui-prompt-all-in-one



## ultimate-upscale-for-automatic1111



## sd-webui-infinite-image-browsing



## sd-webui-wd14-tagger

## sd-webui-controlnet

## stable-diffusion-webui-localization-zh_CN

## multidiffusion-upscaler-for-automatic1111

## a1111-sd-webui-tagcomplete

## sd-dynamic-thresholding(动态阈值)

## sd-extension-system-info(系统信息)

## nsfw

## zmodel-keyword

# 即梦

# 可灵

# 海螺

