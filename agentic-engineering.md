---
title: Agentic Engineering
description:  Agentic Engineering(aka. agentic coding)
tags:
    - architecture
keywords: 
    - vibe coding
    - agentic coding
    - context engineering
    - harness engineering
---

# Agentic Engineering



## Principle

- Parallel agent conversation
- 从技术转向了对审美和创意的关注
- transfer

## concerns

- 测试
- 文档
- 质量
- 评估
- 错误处理
- 调试
- 功能
- 审美和创意(aesthetic and creative)



## Optional Rules

- 总是使用中文作答
- 显示展示你解决问题的思路

## Agentic Coding最佳实践

> AI提效手册, 思维方式迁移







# Claude Code



## Claude.md

aspect

```markdown

- project overview
- architecture
- project structure
- code style
- api convention
- workflow
- commands

- important notes
```

example

```

## Important Notes

- NEVER commit .env files
- The Stripe webhook handler in /app/api/webhooks/stripe must validate signatures
- Product images are stored in Cloudinary, not locally
- See @docs/authentication.md for auth flow details
```



# Codex

## AGENTS.md

# Vibe编程



# Case



##  编写爬虫爬取aiwind.org的提示词

> 使用工具 antigravity, 时间: 2025-12-01

```markdown
帮我编写一个python爬虫, 根目录新开一个项目 爬取 https://www.aiwind.org/ 上面的所有提示词库, 保存文件到本地, 用json 保存数据 prompt结构: title, images, tags, prompt chinese, prompt english, source
```

### 核心思路解析

```markdown
# AiWind Crawler Implementation Plan

## Goal Description
Create a Python crawler to scrape prompt data from `https://www.aiwind.org/` and save it as a JSON file.

## Proposed Changes
### Project Structure
Create a new directory `aiwind_crawler` in the workspace root.

### Files
#### [NEW] [crawler.py](file:///Users/wwfyde/projects/ai-playground/aiwind_crawler/crawler.py)
- Main script to handle crawling logic.
- Uses `requests` and `BeautifulSoup` (or `playwright` if needed).
- Extracts: `title`, `images`, `tags`, `prompt chinese`, `prompt english`, `source`.
- Saves to `prompts.json`.

#### [NEW] [requirements.txt](file:///Users/wwfyde/projects/ai-playground/aiwind_crawler/requirements.txt)
- Dependencies: `requests`, `beautifulsoup4`, `lxml` (or others as determined by analysis).

## Verification Plan
### Automated Tests
- Run the script and check for `prompts.json` creation.
- Validate JSON structure against requirements.

```

### 关键分析

这次爬虫核心关键在于从js 中间中提取数值, 数据是直接卸载js中的, 不需要从服务器拿数据







