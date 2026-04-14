# llm



## 图像工具

- 即梦
- 元宝
- 千问
- Gemini
- Nano Banana

## gemini

## seedream

- [火山引擎::图片生成 API](https://www.volcengine.com/docs/82379/1541523?lang=zh)

### 图片传入限制

- 传入图片需要满足以下条件：

- 图片格式：jpeg、png（doubao-seedream-5.0-lite/4.5/4.0 模型新增支持 webp、bmp、tiff、gif 格式**new**）

- 宽高比（宽/高）范围：

- [1/16, 16] (适用模型：doubao-seedream-5.0-lite/4.5/4.0）

- [1/3, 3] (适用模型：doubao-seedream-3.0-t2i/seededit-3.0-i2i）

- 宽高长度（px） > 14

- 大小：不超过 10MB

- 总像素：不超过 6000x6000=36000000 px （对单张图宽度和高度的像素乘积限制，而不是对宽度或高度的单独值进行限制）

- doubao-seedream-5.0-lite/4.5/4.0 最多支持传入 14 张参考图。

