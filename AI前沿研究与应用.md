AI前沿研究与应用



https://research.nvidia.com/labs/toronto-ai/AlignYourSteps/

https://github.com/comfyanonymous/ComfyUI/commit/644a3ae58d426ffbbc02ef4104034c98e8fc6513 

omfyui: Align Your Steps

Comfyui 官方已经支持了 AlignYourSteps 节点 [Implement Align Your Steps as a AlignYourStepsScheduler node. · comfyanonymous/ComfyUI@644a3ae](https://github.com/comfyanonymous/ComfyUI/commit/644a3ae58d426ffbbc02ef4104034c98e8fc6513)。

AlignYourSteps (https://research.nvidia.com/labs/toronto-ai/AlignYourSteps/) 由英伟达开源，提升了低步数下的生成效果（效果显著），支持SD1.5/SDXL/SVD。



https://twitter.com/cubiq/status/1783214426608243106

LCM + ipadapter 换脸旋转动画

<video data-key="file_v3_00a9_3e82c612-9c48-485e-96e8-bcdfbbfc480g" data-middle-image="{&quot;key&quot;:&quot;middle:img_v3_02a9_7785ef84-336a-4881-bb3d-78000f67e3dg&quot;,&quot;urls&quot;:[],&quot;width&quot;:512,&quot;height&quot;:512,&quot;type&quot;:2,&quot;exifOrientation&quot;:0,&quot;crypto&quot;:&quot;CAESMgogeyI+iGmIg99fH4eyXBxbj2QOp82cdA7Yo9r9KhdeVIUSDHKJppMnO7LjPtryURoA&quot;,&quot;fsUnit&quot;:&quot;eu_nc-cdn&quot;}" data-crypto-token="img_v3_02a9_7785ef84-336a-4881-bb3d-78000f67e3dg" data-duration="7950" data-copy-id="7276292788890664964" data-lark-video-uri="imkey://file_v3_00a9_3e82c612-9c48-485e-96e8-bcdfbbfc480g?visit_info=%7B%22entityId%22%3A%227361800627657162753%22%2C%22sceneType%22%3A1%7D" data-lark-video-duration="7950" data-lark-video-height="512" data-lark-video-mime="video/mp4" data-lark-video-name="fc324a69-bf6f-4944-9131-b4deb67b6675.mp4" data-lark-video-size="197161" data-lark-video-width="512"></video>

IntrinsicAnything: Learning Diffusion Priors for Inverse Rendering Under Unknown Illumination

<video data-key="file_v3_00a9_a6ad7870-505f-442d-aa51-6ff05bc5b59g" data-middle-image="{&quot;key&quot;:&quot;middle:img_v3_02a9_10e9f539-12d1-4baa-bb38-67b4800f909g&quot;,&quot;urls&quot;:[],&quot;width&quot;:2436,&quot;height&quot;:720,&quot;type&quot;:2,&quot;exifOrientation&quot;:0,&quot;crypto&quot;:&quot;CAESMgogvYDE/1pVCcjPrswOo1gM8bPjr78hBtVxJh7KgTksqZ0SDD9nkE8V1U4LOyj7sxoA&quot;,&quot;fsUnit&quot;:&quot;eu_nc-cdn&quot;}" data-crypto-token="img_v3_02a9_10e9f539-12d1-4baa-bb38-67b4800f909g" data-duration="12680" data-copy-id="7276292788890664964" data-lark-video-uri="imkey://file_v3_00a9_a6ad7870-505f-442d-aa51-6ff05bc5b59g?visit_info=%7B%22entityId%22%3A%227361801638421790748%22%2C%22sceneType%22%3A1%7D" data-lark-video-duration="12680" data-lark-video-height="720" data-lark-video-mime="video/mp4" data-lark-video-name="ee8d838c-8092-44d3-8087-e6e1a5254e16.mp4" data-lark-video-size="3082559" data-lark-video-width="2436"></video>



https://zju3dv.github.io/IntrinsicAnything/

介绍了一种名为 IntrinsicAnything 的方法，该方法可以从任意图像中恢复物体材质，并支持单视图图像重光照。



可以实现，光照角度变化。

https://zju3dv.github.io/IntrinsicAnything/

zju3dv.github.io

zju3dv.github.io



---

网页转Markdown https://github.com/mendableai/firecrawl



---

Controlnet作者张吕敏刚刚公布了新项目IC-Light https://github.com/lllyasviel/IC-Light 包括两种类型的模型：文本条件重新光照模型和背景条件模型。两种类型都将前景图像作为输入。  图1的灯光阶段为例，来自“外观混合”和“光源混合”的两个图像是一致的（理想情况下，在 HDR 空间中数学上是等效的）。 在训练重新照明模型时，加强了这种一致性（在潜在空间中使用 MLP）。 因此，该模型能够产生高度一致的重新光照 - 如此一致，甚至可以将不同的重新光照合并为法线贴图！尽管事实上这些模型是潜在扩散的。

https://www.bilibili.com/opus/929092921849806865

在线测试地址https://huggingface.co/spaces/lllyasviel/IC-Light

---

![image-20241116105410961](/Users/wwfyde/Library/Application Support/typora-user-images/image-20241116105410961.png)

---

Deeplearning今日的一封Newsletter中，吴恩达教授分享了在复杂工程中该使用LLM达成目标效果的实验策略优先级👇🏻



在构建复杂的工作流程时，我看到开发人员通过此过程获得了良好的结果：



\- 编写快速、简单的提示，看看效果如何。

\- 根据输出不足的地方，迭代并充实提示词。这通常会导致更长、更详细的提示，甚至可能是超大型提示。

\- 如果这仍然不够，请考虑少样本或多样本学习（如果适用），或者不太频繁地进行微调。

\- 如果这仍然不能产生您需要的结果，请将任务分解为子任务并应用代理工作流程。



![img](native-resource://sdk/image?resource_type=image&key=img_v3_02au_3d036e88-a985-4925-9713-6793a98b861g_MIDDLE_WEBP&width=884&height=728&gif_optimize=true)

Grounding DINO 1.5: Advance the "Edge" of Open-Set Object Detection

内容: 本论文介绍了Grounding DINO 1.5,这是由IDEA Research开发的一套先进的开放集对象检测模型。该套件包括两个模型:Grounding DINO 1.5 Pro,是一个高性能模型,旨在提高在广泛场景下的泛化能力;Grounding DINO 1.5 Edge,是一个高效模型,优化了边缘部署所需的更快速度。Grounding DINO 1.5 Pro模型通过扩大模型架构、集成增强的视觉骨干网络以及扩展到超过2000万张带有标注的图像数据集来提升语义理解能力。Grounding DINO 1.5 Edge模型虽然设计更加高效,但通过在相同的综合数据集上训练,仍保持了强大的检测能力。实验结果表明,Grounding DINO 1.5在COCO检测基准上达到54.3 AP,在LVIS-minival零样本迁移基准上达到55.7 AP,刷新了开放集对象检测的新纪录。此外,优化后的Grounding DINO 1.5 Edge模型在TensorRT上可达到75.2 FPS的速度,同时在LVIS-minival基准上的零样本性能为36.2 AP,更适合于边缘计算场景。模型示例和API将在

https://github.com/IDEA-Research/Grounding-DINO-1.5-API

中发布。

结论: Grounding DINO 1.5是IDEA Research开发的一套先进的开放集对象检测模型套件,包括高性能的Grounding DINO 1.5 Pro和针对边缘计算场景优化的Grounding DINO 1.5 Edge,在多个基准测试中取得了突出的成绩。

\#Grounding DINO 1.5#open-set object detection#IDEA Research#Grounding DINO 1.5 Pro#Grounding DINO 1.5 Edge#edge computing#COCO#LVIS-minival





增强RAG效率 https://arxiv.org/abs/2404.12457



用多Agent协作的智能体，开发游戏，高难度高，纯手搓，起飞了 https://mp.weixin.qq.com/s/02-Cwnx2X-Gcvik6uBkrng



阿里开源的自动化视频剪辑工具，免费使用 https://mp.weixin.qq.com/s/b3x6hSvTDOE1lyvG_Q9KQw



https://www.sitepoint.com/retrieval-augmented-generation-revolution-overpromise/

RAG 实践与局限性 https://www.sitepoint.com/retrieval-augmented-generation-revolution-overpromise/

https://x.com/jerryjliu0/status/1798143499633836384  这里说明了上下文重要性



https://mixeval.github.io 一个快速+低成本评估 LLM 的方案



https://qdrant.tech/rag/

qdrant.tech

qdrant.tech

retrieval-augmented-generation - Qdrant

retrieval-augmented-generation

https://qdrant.tech/documentation/frameworks/llama-index/

qdrant.tech

qdrant.tech

LlamaIndex - Qdrant

Qdrant is an Open-Source Vector Database and Vector Search Engine written in Rust. It provides fast and scalable vector similarity search service with convenient API.

https://qdrant.tech/benchmarks/



香港大学和阿里蚂蚁联合公开了MimicBrush：通过参考模仿进行零样本图像编辑  https://xavierchen34.github.io/MimicBrush-Page/ 原理： MimicBrush的训练过程，首先，从视频序列中随机采样两帧作为参考图像和源图像。 然后对源图像进行屏蔽并通过数据增强进行应用。 然后，将源图像的噪声图像潜在、掩模、背景潜在和深度潜在输入到模拟 U-Net 中。 参考图像也被增强并发送到参考 U-Net。对双 U-Net 进行训练以恢复源图像的屏蔽区域。参考 U-Net 的注意键和值与模拟 U-Net 连接起来，以帮助合成屏蔽区域。



https://wbe2qcwjls.feishu.cn/docx/ZGLcdZt7coQM1YxVmrpcBvb0nhb?from=from_copylink

「Diffuseum」Stable Diffusion 3 测试



InstantX 刚刚又连续上传了 4 个 SD3 Medium 的 ControlNet 模型 Canny（1024）：[https://huggingface.co/InstantX/SD3-Controlnet-Canny](https://t.co/Mjd9zmhGyZ) Pose：[https://huggingface.co/InstantX/SD3-Controlnet-Pose](https://t.co/VQCfnRf2sj) Tile（还在上传）：[https://huggingface.co/InstantX/SD3-Controlnet-Tile](https://t.co/wV1byhT1WN) Inpainting（还在上传）：[https://huggingface.co/InstantX/SD3-Controlnet-Inpainting](https://t.co/CpjlXuQGzZ)
InstantX 刚刚又连续上传了 4 个 SD3 Medium 的 ControlNet 模型 Canny（1024）：[https:// huggingface.co/InstantX/SD3-Controlnet-Canny](https://t.co/Mjd9zmhGyZ) 姿势：[https:// huggingface.co/InstantX/SD3-Controlnet-Pose](https://t.co/VQCfnRf2sj) Tile（还在上传）：[https:// huggingface.co/InstantX/SD3-Controlnet-Tile](https://t.co/wV1byhT1WN) Inpainting（还在上传）：[https:// huggingface.co/InstantX/SD3-Controlnet-Inpainting](https://t.co/CpjlXuQGzZ)

一文详谈RAG优化方案与实践 https://mp.weixin.qq.com/s/HT9bjXpwoSszU_ru-e-9dw



Vector | Graph：蚂蚁首个开源Graph RAG框架设计解读 https://mp.weixin.qq.com/s/hd2FzO2p15ERbHe0w87J8Q



RAG 十二个痛点和解决方案    https://twitter.com/shao__meng/status/1805601464922128536



https://twitter.com/9hills/status/1803159879512891876 BM25+Embedding 混合检索



[杀疯了！阿里又开源图像编辑王炸模型MimicBrush](https://mp.weixin.qq.com/s/Lw2CxzgEfcST4gkJV6SVMA)

mp.weixin.qq.com

mp.weixin.qq.com

杀疯了！阿里又开源图像编辑王炸模型MimicBrush

阿里又又又开源！与香港大学合作王炸项目



腾讯发布 MimicMition 

使用参考图片和 openpose序列生成动画



https://tencent.github.io/MimicMotion/



李继刚等的prompt最佳实践 https://waytoagi.feishu.cn/wiki/JTjPweIUWiXjppkKGBwcu6QsnGd?from=from_copylink

gptpdf：使用GPT-4o解析 PDF 为 markdown，可完美地解析排版、数学公式、表格、图片、图表等 [gptpdf：使用GPT-4o解析 PDF 为 markdown，可完美地解析排版、数学公式、表格、图片、图表等，每页解析平均价格不到1毛钱_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1hb421E75t)



大模型产品化第一年：战术、运营与战略 [大模型产品化第一年：战术、运营与战略](https://mp.weixin.qq.com/s?__biz=MzU5ODY2MTk3Nw==&mid=2247494762&idx=1&sn=d4543e30efeba6239c731a0bf5afedaa&chksm=ffa830a3c770004f571f99c1426f6dec69bba87b6040e5f80627b9d17c8d725a7b6bb2a583eb&scene=0&xtrack=1)



https://mp.weixin.qq.com/s/7wgg4cIrK4wRX94vEH8qUw



https://twitter.com/karpathy/status/1808686307331428852





[Andrej Karpathy](https://twitter.com/karpathy) 使用多个 AI 工具创建了 傲慢与偏见 的视频



1、GPT-SoVITS（AI 卖货主播大模型Streamer-Sales销冠用的这款TTS模型，[https://x.com/aigclink/status/1805405022932681139…](https://twitter.com/aigclink/status/1805405022932681139)）

支持英语、日语和中文，零样本文本到语音（TTS），集成工具包

github：[https://github.com/RVC-Boss/GPT-SoVITS…](https://t.co/n1KYLyND7t)



2、Fish Speech v1.2

效果稳定非常好，支持克隆语音。经过 30 万小时的英语、中文和日语音频数据的训练。

模型：[https://huggingface.co/fishaudio/fish-speech-1.2…](https://t.co/JMZs1tet6T)

在线版：[https://fish.audio/zh-CN/](https://t.co/YDJKjr4KoH)



3、字节的Seed-TTS（不开源）

支持多种语言包括英语、中文，能够进行同语言生成和跨语言生成 

能处理各种文本，叙述性文本、情感表达、描述性文本等，能根据不同的情感和语境生成相应的语音

项目：[https://bytedancespeech.github.io/seedtts_tech_report/…](https://t.co/hEi2ODuDZg)



4、ChatTTS

对话式 TTS（可多人），支持中英文，韵律细腻

github：[https://github.com/2noise/ChatTTS](https://t.co/bp9C8pgF8y)

模型：[https://huggingface.co/2Noise/ChatTTS/tree/main…](https://t.co/iHfu1PvhAS)



5、HuggingFace的Parler-TTS

可以控制音调、速度、性别、噪音水平、情绪特征等等

github：[https://github.com/huggingface/parler-tts…](https://t.co/iI87b4giGy)

模型：[https://huggingface.co/parler-tts](https://t.co/tMsLF61vE3)



6、MetaVoice-1B

支持多语言，在英语处理上实现了情感语音节奏

github：[https://github.com/metavoiceio/metavoice-src…](https://t.co/H4Cl0UceyA)



7、MARS5-TTS

MARS5可以为体育解说、动漫等韵律复杂和多样化的场景生成语音

github：[https://github.com/Camb-ai/MARS5-TTS…](https://t.co/PkpHbykq1S)



8、OpenVoice

原生支持英语、西班牙语、法语、中文、日语和韩语，具有灵活的语音风格控制和零样本跨语言语音克隆能力。

github：[https://github.com/myshell-ai/OpenVoice…](https://t.co/5sfNP1WWNb)



9、EmotiVoice

支持中英文双语，包含2000多种不同的音色

github：[https://github.com/netease-youdao/EmotiVoice/blob/main/README.zh.md…](https://t.co/xkQdXXOJRF)



[怎样让LLM看懂你的接口？](https://mp.weixin.qq.com/s/3KphZswi1QPgZ6rIa93_gg)'



LiveProtrait 测试效果

https://twitter.com/toyxyz3/status/1809495564868022616



![img](native-resource://sdk/image?resource_type=image&key=img_v3_02ch_b3ce50c4-d8f9-48bb-a73c-4c2fdf4d893g_MIDDLE_WEBP&width=1106&height=926&gif_optimize=true)

https://twitter.com/krea_ai/status/1809154957440163879



KREA 的风格迁移，UI可以是我们的吗

[下一代 RAG 技术来了！微软正式开源 GraphRAG：大模型行业将迎来新的升级？](https://mp.weixin.qq.com/s/34EfzNivcxngakZzDweKOw)

mp.weixin.qq.com

mp.weixin.qq.com

下一代 RAG 技术来了！微软正式开源 GraphRAG：大模型行业将迎来新的升级？

“我认为这个工具绝对会带来颠覆性的改变



https://twitter.com/kimmonismus/status/1810260877997748376 使用runway做的实验形式广告片。



[ControlNet作者新项目爆火：仅一张图生成25秒绘画全过程！不到一天GitHub揽星600+](https://mp.weixin.qq.com/s/ssboe4kZL1RHMu_1hduf0Q)

mp.weixin.qq.com

mp.weixin.qq.com



结构化输出方法: https://www.boundaryml.com/blog/structured-output-from-llms

www.boundaryml.com

www.boundaryml.com





2024-07-10 ML-Summit AI Agent专题分享.pdf



[Reddit传疯的Claude 3.5 Artifacts 的核心系统提示词！Code效果猛增](https://mp.weixin.qq.com/s/3Vfx87dBjTlaw5t2SVf3kA)

mp.weixin.qq.com

mp.weixin.qq.com

Reddit传疯的Claude 3.5 Artifacts 的核心系统提示词！Code效果猛增



https://sspai.com/post/90665 GraphRAG 的简单介绍

https://twitter.com/dotey/status/1815260971197211026 可以偷学一下 Claude 怎么写提示词。

https://huggingface.co/spaces/lmsys/gpt-4o-mini_battles  可以直观看一下 GPT4omini 和其他模型对同一个问题的回答的对比



https://poloclub.github.io/transformer-explainer/ 可视化的 transformer 解释。



https://twitter.com/MartinNebelong/status/1822902721436926276  krea + runway + eleven labs 概念视频。



vercel 的编程助手的提示词  https://baoyu.io/blog/prompt-engineering/v0-dev-prompt 可以参考一下提示词结构。

https://x.com/LeptonAI/status/1820868523746312636  lepton 实现的实时语音生成。 可以调用 lepton的接口

https://openai.com/index/new-embedding-models-and-api-updates/

openai.com

openai.com

https://twitter.com/yadong_xie/status/1827942666941739458 Lepton AI 开源了 GPUd，一个专为 AI 设计的 GPU 管理工具，旨在减少 GPU 集群不可用时间，并自动化监控、诊断和问题识别。 Github 开源地址 [https://github.com/leptonai/gpud](https://t.co/MsmDM7Eso4)

https://huggingface.co/glif/how2draw

赵轩

*We will know, we must know*

https://www.youtube.com/watch?v=y80W3PjR0Gc invoke 新版本，支持 canvas 生成 @陆迪

这就是我要的功能！！

赵轩

*We will know, we must know*

https://x.com/AIatMeta/status/1838993953502515702  Llama3.2发布

![img](native-resource://sdk/image?resource_type=image&key=img_v3_02f3_0afab031-f252-40d1-956f-2ac6bd34250g_MIDDLE_WEBP&message_id=7418756261539381250&width=750&height=536&gif_optimize=true)

赵轩

*We will know, we must know*

![img](native-resource://sdk/image?resource_type=image&key=img_v3_02f3_f8b3b46f-e6ed-48ab-be5c-781f4978a1fg_MIDDLE_WEBP&width=900&height=537&gif_optimize=true)

新图像模型 blueberry

赵轩

*We will know, we must know*

https://x.com/lyson_ober/status/1843601390913904728 dify的应用，以及快速使用bolt 上线功能

林琚

[AI生成的抽象视频，正在“复活”短视频平台Vine](https://mp.weixin.qq.com/s/xjang4RkW_1bFB-RM7ccIA)

mp.weixin.qq.com

mp.weixin.qq.com

AI生成的抽象视频，正在“复活”短视频平台Vine

为什么这届网友会热衷用AI搞抽象？

赵轩

*We will know, we must know*

https://x.com/_akhaliq/status/1846034167160574058

![img](native-resource://sdk/image?resource_type=image&key=img_v3_02fm_566a4580-525d-46b0-8d7b-465a1daaf68g_MIDDLE_WEBP&message_id=7425996475328593922&width=737&height=619&gif_optimize=true)

赵轩

*We will know, we must know*

Claude 开源项目，可以借助 claude 分析excel，pdf生成图表

![img](native-resource://sdk/image?resource_type=image&key=img_v3_02fq_bd135f1d-94dd-461e-9762-1aafabcba80g_MIDDLE_WEBP&width=1840&height=1241&gif_optimize=true)

[anthropic-quickstarts/financial-data-analyst at main · anthropics/anthropic-quickstarts](https://github.com/anthropics/anthropic-quickstarts/blob/main/financial-data-analyst)

github.com

github.com

anthropic-quickstarts/financial-data-analyst at main · anthropics/anthropic-quickstarts

A collection of projects designed to help developers quickly get started with building deployable applications using the Anthropic API - anthropics/anthropic-quickstarts

吴方圆

[重磅更新：Dify v0.10.0 推出文件上传功能，轻松构建 NotebookLM AI 播客](https://mp.weixin.qq.com/s/QYjrT7JOVnES5lqNULy-dQ)

mp.weixin.qq.com

mp.weixin.qq.com

重磅更新：Dify v0.10.0 推出文件上传功能，轻松构建 NotebookLM AI 播客

开发者可以轻松构建能处理文档，图片、音视频的 AI 工作流，大幅提升应用的功能性和用户体验。

赵轩

*We will know, we must know*



*We will know, we must know*

![img](native-resource://sdk/image?resource_type=image&key=img_v3_02ft_6c64b318-3649-4895-bddc-021b3bd2185g_MIDDLE_WEBP&message_id=7428606504024260610&width=750&height=550&gif_optimize=true)

https://huggingface.co/stabilityai/stable-diffusion-3.5-large

赵轩

*We will know, we must know*

![img](native-resource://sdk/image?resource_type=image&key=img_v3_02ft_e531af54-a1a3-484b-90ca-da121f6fb66g_MIDDLE_WEBP&message_id=7428627119623651329&width=675&height=1500&gif_optimize=true)

赵轩

*We will know, we must know*

https://x.com/ideogram_ai/status/1848757699606983143  ideogram 正式发布他们的画布产品

赵轩

*We will know, we must know*

[IC-Light V2 (Flux-based IC-Light models) · lllyasviel/IC-Light · Discussion #98](https://github.com/lllyasviel/IC-Light/discussions/98)  flux版本 IC-light

github.com

github.com

IC-Light V2 (Flux-based IC-Light models) · lllyasviel/IC-Light · Discussion #98

Note that this post is a work in progress (wip). Maybe I will edit it a lot recently. IC-Light V2 is a series of Flux-based IC-Light models with 16ch VAE and native high resolution. We plan to have...

赵轩

*We will know, we must know*

[专访"Prompt之神"李继刚 - 我想用20年时间，给世界留一句话。](https://mp.weixin.qq.com/s/JT2oOG2SYw2pDYEHlEmcyQ)  提示词的一些理解

mp.weixin.qq.com

mp.weixin.qq.com

专访"Prompt之神"李继刚 - 我想用20年时间，给世界留一句话。

Read in. Prompt out.