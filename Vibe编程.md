

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