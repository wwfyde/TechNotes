# 技术合辑

# CSS

# **CSS**

> 层叠样式表

## 参考资料

- [MDN: CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)

## Glossary

- 视口(viewport)
- 空白(blank, white space): 空白包括空格(spac), 制表符(tabs)和换行符(new lines)

## CheatSheet

```css
/*@-Rules @规则 */
/*
@规则的作用
模块化: 通过@import引入多个样式文件，提高代码的可维护性。
响应式设计: 使用@media根据不同设备和屏幕尺寸应用不同的样式。
自定义字体: 导入自定义字体，丰富网页的视觉效果。
动画效果: 使用@keyframes创建各种动画效果。
条件样式: 使用@supports检查浏览器支持情况，避免兼容性问题。
打印样式: 为打印输出定义特殊的样式。

@规则是CSS中一个强大的工具，它扩展了CSS的表达能力，使得我们可以创建更加灵活和复杂的样式。通过了解不同的@规则及其用法，你可以更好地控制网页的样式，实现各种各样的视觉效果。

@media: 根据不同的媒体类型（如屏幕、打印机）应用不同的样式。

*/

/* 绝对单位 */
px    /* 像素 */
pt    /* 点 */
cm    /* 厘米 */
mm    /* 毫米 */
in    /* 英寸 */

/* 相对单位 */
em    /* 相对于父元素字体大小 */
rem   /* 相对于根元素字体大小 */
%     /* 百分比 */
vw    /* 视口宽度的1% */
vh    /* 视口高度的1% */

/* 单行或多行注释 */

/*
  多行
  注释
  示例
*/

/* 颜色函数 */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);

/* 计算函数 */
width: calc(100% - 20px);
width: min(100%, 500px);
width: max(50%, 300px);
width: clamp(300px, 50%, 500px);

/* 变换函数 */
transform: translate(50px, 100px);
transform: rotate(45deg);
transform: scale(1.5);

/* 渐变函数 */
background: linear-gradient(to right, red, blue);
background: radial-gradient(circle, red, blue);


/* 定义变量 */
:root {
  --primary-color: #007bff;
  --spacing: 1rem;
}

/* 使用变量 */
.element {
  color: var(--primary-color);
  margin: var(--spacing);
  /* 带默认值 */
  padding: var(--padding, 1rem);
}
```



## CSS概述

为了让网页元素的样式更加丰富，也为了让网页的内容和样式能拆分开，CSS由此思想而诞生，CSS是 Cascading Style Sheets
的首字母缩写，意思是层叠样式表。有了CSS，html中大部分表现样式的标签就废弃不用了，CSS负责页面的样式和表现逻辑，html文档变得更加简洁。

CSS基本语法

选择器{属性: 值; 属性: 值; 属性: 值;}

选择器是将样式和页面元素关联起来的名称，属性是希望设置的样式属性，每个属性有一个或多个值。属性和值之间用冒号，一个属性和值与下一个属性和值之间用分号，最后一个分号可以省略。

键值对的存放顺序没有任何影响

- CSS嵌入式

- CSS外链式

- CSS行内式/内联式

### 语法

```css
/* 只有这一种注释方式 */
/* -------------------------------------------------------------------------------------------- */
selector {
  property: value;
  ...
}
...
selector {
  property: value;
  ...
}
```



### 三种样式说明

[CSS的组成](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_is_structured)

**用法选择**:   外链式是最常用方式, 电商网站首选嵌入式, 行内式基本不用

**优先级**:   行内式(内联样式) > 嵌入式(内部样式) > 外链式(外部样式)

Priority(hight to low): inline style > id selector > class selector > element selector

```html
<!-- 行内式 -->
<div style='color:blue;font-size:46px;'> 行内式</div>

<!-- 嵌入式 -->
<style type='text/css'>
</style>

<!-- 外链式 -->
<link type="text/css" rel="stylesheet" href="要引入的css文件的路径"/>
```

### 选择器

> 同级选择器用逗号标识隔开
>
> 层级选择器用空格标识隔开
>
> *号用来表示全局,但执行效率会降低

- 标签选择器: html / div / p
- 类选择器(class):  class 用'. + 名称 '如`.className`的格式标记 先定义后使用
- 层级选择器:  应用在标签嵌套的结构中， 用空格声明
- 同级选择器：表示共同享有该样式，用逗号声明
- 身份选择器(ID):   只能被使用一次 ID选择器, 经常被用来查找标签做数据交互用的
- 伪类选择器(pseudo-class):   `a:hover` 向选择器(状态)添加效果,主要用于超链接(link, visited,hover,active)，用冒号声明
- 伪元素选择器(pseudo-element selector): `a::afer`

**其他特点：**

工作中一般只用 a{} a:hover{} 两个

选择器会出现装饰覆盖，后面的覆盖前面的， 高优先级覆盖低优先级

ID选择器的装饰不会被覆盖

```css

```

### 优先级

CSS 语言有一些规则来控制在发生冲突的情况下哪个选择器更强大。这些规则被称为**层叠**（cascade）和**优先级**（specificity）。在下面的代码块中，我们为 `p` 选择器定义了两条规则，但段落文本将是蓝色的。这是因为将段落文本设置为蓝色的声明在样式表的后面出现。后面的样式会替换样式表中较早出现的冲突样式。这就是**层叠**规则。

```css
p {
  color: red;
}

p {
  color: blue;
}
```

然而，在我们下面的例子中，类选择器和元素选择器之间存在冲突，类选择器占了上风，使段落文本变成了红色。即使冲突的样式在样式表的后面出现，这怎么可能发生呢？一个类被认为是更具体的，因此它比元素选择器**优先级**更高，所以它取消了其他冲突的样式声明。

```css
.special {
  color: red;
}

p {
  color: blue;
}
```



### 盒子模型

元素在页面显示成一个方块,类似盒子

**盒子内容不包括外边距**

#### 盒子属性

| 中文         | 属性                   |
| ------------ | ---------------------- |
| 宽度         | width                  |
| 高度         | height                 |
| 边框         | border                 |
| 外边距       | margin                 |
| 内边框       | padding                |
| 背景         | background             |
| 盒子内减模式 | box-sizing:border-box; |
|              |                        |
|              |                        |

#### 盒子居中

margin : 0 auto

#### 盒子真实尺寸

盒子宽度 = width + padding左右 + border左右

盒子高度= height + padding上下 + bordershANGXIAomei

### CSS初始化

常见初始化属性

链接

边距

字体

高度

```css
.ant-layout {
	min-height: 100vh;
}
```

### 居中问题

#### 文字居中

水平居中: text-align: center;

垂直居中: line-height: 盒子高度;

#### 版心居中

> 版心:
>
> 有效内容居中
> 所有网站有效内容都输居中

margin: 0 auto;

### 显示隐藏

不占位隐藏

display: none;

不占位隐藏

visibility: hidden;

### 溢出

> 解决内容超出的显示问题

overflow: hidden;

overflow: auto;

overflow: scroll;

### 浮动

**作用**:   让换行的标签在一行显示

float: none;不浮动

float: left;(所有标签左对齐)

?退出浮动

### 定位

作用: 让标签堆叠

> 相对位置:相对当前文件位置 同级 上级
>
> 前端范围, 绝对路径是绝对不允许使用的路径形式

**相对定位**:   relative position

position: relative;left:100px;top: 200px;

**绝对定位**:   absolute position

position: absolute;left:100px;top: 200px;

不具备换行标签的特点

**固定定位**:   fixed position

相对浏览器来讲的, 不滚动

不占位

**静态定位**(默认值)

### 定位的灵活应用

#### 方块堆叠顺序:z-index

z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。

改变标签的显示级别: 取值是整数, 取值越大显示级别越靠上;

z-index: 1;

#### 不透明度:opacity

内容和背景色一起透明

仅仅让背景半透明的方法: background: rgba0(153,0,91,0.5)

### 页面的嵌套

#### 框架:iframe

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        iframe {
            width: 1024px;
            height: 700px;
        }
    </style>
</head>
<body>
<!-- 使用target属性绑定 -->
<a href="https://www.baidu.com" target="mainiframe">百度一下</a>
<br>
<br>
<!-- 通过name标记该frame框架 -->
<iframe src="./定位的灵活应用.html" frameborder="0" name="mainiframe"></iframe>
</body>
</html>
```

#### 框架集

框架集需要删除body标签

将页面分为多个显示区域

### [重点]表单

> 表单标签 <form action='提交地址', method = 'post'> 登录 </form>
> 本质作用是数据交互,提交
>
> 表单控件
>
> <input type= 'text' placeholder='用户名'>

表单用于搜集不同类型的用户输入，表单由不同类型的标签组成

`<form>`标签 定义整体的表单区域

- action属性 定义表单数据提交地址
- method属性 定义表单提交的方式，一般有“get”方式和“post”方式

`<label>`标签 为表单元素定义文字标注

`<input>`标签 定义通用的表单元素

- type属性
  - type="text" 定义单行文本输入框
  - type="password" 定义密码输入框
  - type="radio" 定义单选框
  - type="checkbox" 定义复选框
  - type="file" 定义上传文件
  - type="submit" 定义提交按钮
  - type="reset" 定义重置按钮
  - type="button" 定义一个普通按钮
- value属性 定义表单元素的值
- name属性 定义表单元素的名称，此名称是提交数据时的键名

`<textarea>`标签 定义多行文本输入框

`<select>`标签 定义下拉表单元素

`<option>`标签 与`<select>`标签配合，定义下拉表单元素中的选项

**placeholder 设置input输入框的默认提示文字**

### CSS属性高级

- 文本对齐text-align:center;
- 显示方式display: block;
- 元素溢出overflow: auto;

### 定位position

**文档流**
文档流，是指盒子按照html标签编写的顺序依次从上到下，从左到右排列，块元素占一行，行内元素在一行之内从左到右排列，先写的先排列，后写的排在后面，每个盒子都占据自己的位置。

- relative 生成相对定位元素，一般是将父级设置相对定位，子级设置绝对定位，子级就以父级作为参照来定位，否则子级相对于body来定位。
- absolute 生成绝对定位元素，元素脱离文档流，不占据文档流的位置，可以理解为漂浮在文档流的上方，相对于上一个设置了定位的父级元素来进行定位，如果找不到，则相对于body元素进行定位。
- fixed 生成固定定位元素，元素脱离文档流，不占据文档流的位置，可以理解为漂浮在文档流的上方，相对于浏览器窗口进行定位。

**定位元素的偏移**
定位的元素还需要用left、right、top或者bottom来设置相对于参照元素的偏移值。

**定位元素层级**
定位元素是浮动的正常的文档流之上的，可以用z-index属性来设置元素的层级

## **选择器**

| 选择器                                                       | 名称 | 例子                  | 例子描述                                            |
| :----------------------------------------------------------- | ---- | :-------------------- | :-------------------------------------------------- |
| [.*class*](https://www.w3school.com.cn/cssref/selector_class.asp) | 类   | .intro                | 选择 class="intro" 的所有元素。                     |
| [#*id*](https://www.w3school.com.cn/cssref/selector_id.asp)  | ID   | #firstname            | 选择 id="firstname" 的所有元素。                    |
| [*](https://www.w3school.com.cn/cssref/selector_all.asp)     | 所有 | *                     | 选择所有元素。                                      |
| [*element*](https://www.w3school.com.cn/cssref/selector_element.asp) | 标签 | p                     | 选择所有 <p> 元素。                                 |
| [*element*,*element*](https://www.w3school.com.cn/cssref/selector_element_comma.asp) |      | div,p                 | 选择所有 <div> 元素和所有 <p> 元素。                |
| [*element* *element*](https://www.w3school.com.cn/cssref/selector_element_element.asp) |      | div p                 | 选择 <div> 元素内部的所有 <p> 元素。                |
| [*element*>*element*](https://www.w3school.com.cn/cssref/selector_element_gt.asp) |      | div>p                 | 选择父元素为 <div> 元素的所有 <p> 元素。            |
| [*element*+*element*](https://www.w3school.com.cn/cssref/selector_element_plus.asp) |      | div+p                 | 选择紧接在 <div> 元素之后的所有 <p> 元素。          |
| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) |      | [target]              | 选择带有 target 属性所有元素。                      |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) |      | [target=_blank]       | 选择 target="_blank" 的所有元素。                   |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) |      | [title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素。       |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) |      | [lang\|=en]           | 选择 lang 属性值以 "en" 开头的所有元素。            |
| [:link](https://www.w3school.com.cn/cssref/selector_link.asp) | 伪类 | a:link                | 选择所有未被访问的链接。                            |
| [:visited](https://www.w3school.com.cn/cssref/selector_visited.asp) |      | a:visited             | 选择所有已被访问的链接。                            |
| [:active](https://www.w3school.com.cn/cssref/selector_active.asp) |      | a:active              | 选择活动链接。                                      |
| [:hover](https://www.w3school.com.cn/cssref/selector_hover.asp) |      | a:hover               | 选择鼠标指针位于其上的链接。                        |
| [:focus](https://www.w3school.com.cn/cssref/selector_focus.asp) |      | input:focus           | 选择获得焦点的 input 元素。                         |
| [:first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp) |      | p:first-letter        | 选择每个 <p> 元素的首字母。                         |
| [:first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp) |      | p:first-line          | 选择每个 <p> 元素的首行。                           |
| [:first-child](https://www.w3school.com.cn/cssref/selector_first-child.asp) |      | p:first-child         | 选择属于父元素的第一个子元素的每个 <p> 元素。       |
| [:before](https://www.w3school.com.cn/cssref/selector_before.asp) |      | p:before              | 在每个 <p> 元素的内容之前插入内容。                 |
| [:after](https://www.w3school.com.cn/cssref/selector_after.asp) |      | p:after               | 在每个 <p> 元素的内容之后插入内容。                 |
| [:lang(*language*)](https://www.w3school.com.cn/cssref/selector_lang.asp) |      | p:lang(it)            | 选择带有以 "it" 开头的 lang 属性值的每个 <p> 元素。 |
| [*element1*~*element2*](https://www.w3school.com.cn/cssref/selector_gen_sibling.asp) |      | p~ul                  | 选择前面有 <p> 元素的每个 <ul> 元素。               |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) |      | a[src^="https"]       | 选择其 src 属性值以 "https" 开头的每个 <a> 元素。   |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) |      | a[src$=".pdf"]        | 选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。      |
| [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) |      | a[src*="abc"]         | 选择其 src 属性中包含 "abc" 子串的每个 <a> 元素。   |
| [:first-of-type](https://www.w3school.com.cn/cssref/selector_first-of-type.asp) |      | p:first-of-type       | 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。    |
| [:last-of-type](https://www.w3school.com.cn/cssref/selector_last-of-type.asp) |      | p:last-of-type        | 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。    |
| [:only-of-type](https://www.w3school.com.cn/cssref/selector_only-of-type.asp) |      | p:only-of-type        | 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。    |
| [:only-child](https://www.w3school.com.cn/cssref/selector_only-child.asp) |      | p:only-child          | 选择属于其父元素的唯一子元素的每个 <p> 元素。       |
| [:nth-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-child.asp) |      | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个 <p> 元素。     |
| [:nth-last-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-child.asp) |      | p:nth-last-child(2)   | 同上，从最后一个子元素开始计数。                    |
| [:nth-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-of-type.asp) |      | p:nth-of-type(2)      | 选择属于其父元素第二个 <p> 元素的每个 <p> 元素。    |
| [:nth-last-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp) |      | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。                |
| [:last-child](https://www.w3school.com.cn/cssref/selector_last-child.asp) |      | p:last-child          | 选择属于其父元素最后一个子元素每个 <p> 元素。       |
| [:root](https://www.w3school.com.cn/cssref/selector_root.asp) |      | :root                 | 选择文档的根元素。                                  |
| [:empty](https://www.w3school.com.cn/cssref/selector_empty.asp) |      | p:empty               | 选择没有子元素的每个 <p> 元素（包括文本节点）。     |
| [:target](https://www.w3school.com.cn/cssref/selector_target.asp) |      | #news:target          | 选择当前活动的 #news 元素。                         |
| [:enabled](https://www.w3school.com.cn/cssref/selector_enabled.asp) |      | input:enabled         | 选择每个启用的 <input> 元素。                       |
| [:disabled](https://www.w3school.com.cn/cssref/selector_disabled.asp) |      | input:disabled        | 选择每个禁用的 <input> 元素                         |
| [:checked](https://www.w3school.com.cn/cssref/selector_checked.asp) |      | input:checked         | 选择每个被选中的 <input> 元素。                     |
| [:not(*selector*)](https://www.w3school.com.cn/cssref/selector_not.asp) |      | :not(p)               | 选择非 <p> 元素的每个元素。                         |
| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp) |      | ::selection           | 选择被用户选取的元素部分。                          |

### 类别

- 伪类(pseudo-class)选择器
- class

## 媒体对象

媒体查询

@media

## 盒模型

[](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

## 布局模式

[布局模式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_mode)

盒模型

### 弹性盒布局-flex

### 网格布局-grid



### 流式布局(旧)-Flow

>  浮动模型(旧)Float, 定位模型(旧)-Position, 层模型=Layer, 有些不规范的叫法是层模型
>
>  绝对定位(absolute)、相对定位(relative)、固定定位(fixed)

流式布局也成正常流(Normal Flow), 流式布局既可能是块(block)模式也可能是内联m(inline)模式, 但不可能同时使用它们.

### 布局手册

#### 参考手册

- [CSS布局手册(中)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_cookbook)

#### 黏性页脚

特点: 当内容不足以填满视口时，页脚粘附在视口底部。如果页面内容超过视口底部，页脚会正常地位于内容下方。

```css
.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

```html
<div class="wrapper">
  <header class="page-header">This is the header</header>
  <article class="page-body">
    <p>Main page content here, add more if you want to see the footer push down.</p>
  </article>
  <footer class="page-footer">Sticky footer</footer>
</div>
```



# Tailwind

## Links

- [Tailwindcss V4 Offical Blog](https://tailwindcss.com/blog/tailwindcss-v4)

## 核心

- 实用优先(utility-first)
- 高度可定制化
- 约束即自由
- 按需生成(Just-in-Time, JIT)
- 响应式设计
- 主题系统(Theme System)

### 设计哲学

## 配置

https://tailwindcss.com/blog/tailwindcss-v4#css-first-configuration

```shell
npx @tailwindcss/cli init
```

