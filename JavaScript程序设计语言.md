# JavaScript程序设计语言

## 参考资料:

- 《JavaScript权威指南》- 京东读书
- [Mozilla **JavaScript参考与指南**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## 整体概述

> 计算机好多方面都是加粗的

| 文档类型 | 功能描述 |           | 作用                       |
| -------- | -------- | --------- | -------------------------- |
| HTML     | 结构标准 | Structure | 结构  内容                 |
| CSS      | 样式标准 | Stye      | 效果 动作 结构             |
| JS       | 行为标准 |           | 行为动作 数据交互 表单验证 |

布局技巧:   先分行, 后分列.

```css
/*中文需要用引号引起来  */
font-family: SimHei,

'宋体'
;
```

标签的嵌套

## DOM : 文档对象模型

document object model

定义: 文档对象类型, 定义了HTML和XML的标准编程接口

作用: HTML DOM 定义了访问和操作 HTML 文档的标准。

常见特征

方法 属性 访问(节点: 元素, 属性)方法 修改方法 事件 操作元素

**节点**

在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。 文档 , HTML元素 , 元素内文本 , 属性 , 注释

**作用**:  HTML DOM 来增强网站的动态交互性。操作 HTML 元素以响应不同的场景。

### 基础语义

### 编程接口

可通过 JavaScript （以及其他编程语言）对 HTML DOM 进行访问。

所有 HTML 元素被定义为对象，而编程接口则是对象方法和对象属性。

方法是您能够执行的动作（比如添加或修改元素）。

属性是您能够获取或设置的值（比如节点的名称或内容）。

## 常见需求

修改CSS

修改文本信息

响应事件: 点击时,触发某种功能

## 核心思想

# Glossary



xpath: XPath（XML Path Language）是一种在 XML 文档中查找信息的语言。它是一种选择器语言，广泛应用于解析和导航 XML 文档。XPath 也可以用于 HTML 文档，因为 HTML 是 XML 的一种应用。Playwright 和其他自动化工具支持 XPath 选择器，以便用户能够查找和操作 HTML 页面上的元素。

# 生态工具

## 动画

animate.css

- 在 CSS 过渡和动画中自动应用 class
- 可以配合使用第三方 CSS 动画库，如 Animate.css
- 在过渡钩子函数中使用 JavaScript 直接操作 DOM
- 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

# HTML

> 超文本标记语言

## 基础知识

### HTML定义

HTML是 HyperText Mark-up Language
的首字母简写，意思是超文本标记语言，超文本指的是超链接，标记指的是标签，是一种用来制作网页的语言，这种语言由一个个的标签组成，用这种语言制作的文件保存的是一个文本文件，文件的扩展名为html或者htm。

### HTML基本结构

| 标识                | 中文     | 说明                |
|-------------------|--------|-------------------|
| `<!DOCTYPE html>` | 文档声明   | 确定以那种格式解析文档       |
| html              | 整个网页文档 |                   |
| head              | 头文档    | 头文档, 不用做显示,用作文档声明 |
| body              | 主体     | 用于编写网页上显示的内容      |
| title             | 网页标题   |                   |
| meta              | 元数据    |                   |

### HTML标签属性

```html
<!-- html标签支持多个键值对属性, 属性之间用空格分隔开, 没有特定顺序之分 -->
<img src='image.jpg' alt='这是图片的提示文本信息'>
```

### HTML特性

HTML文档的本质 就是**纯文本** 是字符串的集合

多个连续的空格, 默认会解析为一个空格

**正则表达式只能对字符串进行操作**, 无法识别字符的类型

- html默认不会解析换行符

### HTML标签语法

- 文档由标签和文本元素组层
- 标签属性间**用空格分隔**
- 每一个标签属性都采用  `key = 'value'` 的格式进行
- 标签分为块标签(block elements)和行标签(span elements)
- 其他特殊标签`<br>`    `&nbsp`   ` <`  表示 `&lt;`, `>`表示 `&gt;`

```html
<!--这是注释:支持行注释和块注释-->
<h1>这是标题一:支持1-6</h1>
<img src="images/pic.jpg" alt="图片">
<section style="color:#e04;text-align:center">样式编辑测试</section>
```

### 网页布局原理

标签在网页中会显示成一个个的方块，先按照行的方式，把网页划分成多个行，再到行里面划分列，也就是在表示行的标签中再嵌套标签来表示列，标签的嵌套产生叠加效果。

### 表单_form

深入理解表单 和表单提交

**表单定义**: 包含表单元素的区域,

*表单特性*:允许用户在表单中输入内容, 提交信息

**表单的作用**: 用于收集已收集的信息, 提交你网站的后台(或者服务器). HTML表单是一个包含表单元素的区域,
表单元素是允许用户在表单中(文本域, 下拉列表, 单选框, 复选框)输入信息的元素

**表单提交原理**: 一般表单有登录名、密码，`<form></form>`、`<input>`，表单所有信息用`<form></form>`包裹。用`<form>`
包裹所有`<input>`输入框，当点击提交后，将会把`<form>`所包裹得所有`<input>`输入框的信息提交给后台的一个地址上。

示例:

```html

<form action="/user/wwfyde" method='get'>
    <input type='text' name='username'>
    <input type='text' name='mobile'>
    <input type='password' name='password'>
    <input type='submit' value='提交'>
    <!-- <input type='button' value='提交'> -->
</form>
```

**action**: 把数据提交到后台的地址(路由, url)

**method**: 提交数据的方式

**name**: 传递数据时的参数名, 输入的值会自动绑定到该标签的value上

#### 表单元素

| 标签       | 说明         | 备注 |
|----------|------------|----|
| input    | 输入         |    |
| textarea | 文本域        |    |
| button   | 按钮         |    |
| select   | 定义了下拉选项列表  |    |
| label    |            |    |
| option   | 定义下拉列表中的选项 |    |
| optgroup |            |    |
| fieldset |            |    |

#### 表单属性

#### input类型

## HTML5

默认编码采用 `utf-8`

### 内容类型

内嵌 :  添加其他类型的内容 `audio`, `video`, `canvas`, `iframe`等.

## 常见需求

跳转实现 , 跳转到位置, 锚点

```html
<a href='#id_value'>跳转链接, html网页中 </a>
[跳转链接, Typora中](#demo)
<a id='demo'>被跳转的位置, HTML中</a>
<a name='demo'> 被跳转的位置, Typora中</a>
```

## HTML对象

## Browser

## DOM_[文档对象模型](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)

document object model

[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)

*MDN*: 文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM
将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。

一个web页面是一个文档。这个文档可以在浏览器窗口或作为HTML源码显示出来。但上述两个情况中都是同一份文档。文档对象模型（DOM）提供了对同一份文档的另一种表现，存储和操作的方式。
DOM是web页面的完全的面向对象表述，它能够使用如 JavaScript等脚本语言进行修改。

---

*百度百科* :
DOM提供了对整个文档的访问模型，将文档作为一个树形结构，树的每个节点表示了一个HTML标签或标签内的文本项。DOM树结构精确地描述了HTML文档中标签间的相互关联性。将HTML或XML文档转化为DOM树的过程称为解析(
parse)。HTML文档被解析后，转化为DOM树，因此对HTML文档的处理可以通过对DOM树的操作实现。DOM模型不仅描述了文档的结构，还定义了节点对象的行为，利用对象的方法和属性，可以方便地访问、修改、添加和删除DOM树的节点和内容。

### 结构_Structure

Document -> html(root) -> body

### 元素_Element

### 属性_Attribute

### 节点_Node

## Layout_布局

```html
<!-- HTML5实现的布局 -->
```

## Grid_栅格

# **CSS**

> 层叠样式表

## 参考资料

- [MDN: CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)

## Glossary

- 视口(viewport)
- 空白(blank, white space): 空白包括空格(spac), 制表符(tabs)和换行符(new lines)

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

| 中文     | 属性                     |
|--------|------------------------|
| 宽度     | width                  |
| 高度     | height                 |
| 边框     | border                 |
| 外边距    | margin                 |
| 内边框    | padding                |
| 背景     | background             |
| 盒子内减模式 | box-sizing:border-box; |
|        |                        |
|        |                        |

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

| 选择器                                                                                                | 例子                    | 例子描述                               |
|:---------------------------------------------------------------------------------------------------|:----------------------|:-----------------------------------|
| [.*class*](https://www.w3school.com.cn/cssref/selector_class.asp)                                  | .intro                | 选择 class="intro" 的所有元素。            |
| [#*id*](https://www.w3school.com.cn/cssref/selector_id.asp)                                        | #firstname            | 选择 id="firstname" 的所有元素。           |
| [*](https://www.w3school.com.cn/cssref/selector_all.asp)                                           | *                     | 选择所有元素。                            |
| [*element*](https://www.w3school.com.cn/cssref/selector_element.asp)                               | p                     | 选择所有 <p> 元素。                       |
| [*element*,*element*](https://www.w3school.com.cn/cssref/selector_element_comma.asp)               | div,p                 | 选择所有 <div> 元素和所有 <p> 元素。           |
| [*element* *element*](https://www.w3school.com.cn/cssref/selector_element_element.asp)             | div p                 | 选择 <div> 元素内部的所有 <p> 元素。           |
| [*element*>*element*](https://www.w3school.com.cn/cssref/selector_element_gt.asp)                  | div>p                 | 选择父元素为 <div> 元素的所有 <p> 元素。         |
| [*element*+*element*](https://www.w3school.com.cn/cssref/selector_element_plus.asp)                | div+p                 | 选择紧接在 <div> 元素之后的所有 <p> 元素。        |
| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp)                        | [target]              | 选择带有 target 属性所有元素。                |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp)          | [target=_blank]       | 选择 target="_blank" 的所有元素。          |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | [title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素。    |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp)  | [lang\|=en]           | 选择 lang 属性值以 "en" 开头的所有元素。         |
| [:link](https://www.w3school.com.cn/cssref/selector_link.asp)                                      | a:link                | 选择所有未被访问的链接。                       |
| [:visited](https://www.w3school.com.cn/cssref/selector_visited.asp)                                | a:visited             | 选择所有已被访问的链接。                       |
| [:active](https://www.w3school.com.cn/cssref/selector_active.asp)                                  | a:active              | 选择活动链接。                            |
| [:hover](https://www.w3school.com.cn/cssref/selector_hover.asp)                                    | a:hover               | 选择鼠标指针位于其上的链接。                     |
| [:focus](https://www.w3school.com.cn/cssref/selector_focus.asp)                                    | input:focus           | 选择获得焦点的 input 元素。                  |
| [:first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp)                      | p:first-letter        | 选择每个 <p> 元素的首字母。                   |
| [:first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp)                          | p:first-line          | 选择每个 <p> 元素的首行。                    |
| [:first-child](https://www.w3school.com.cn/cssref/selector_first-child.asp)                        | p:first-child         | 选择属于父元素的第一个子元素的每个 <p> 元素。          |
| [:before](https://www.w3school.com.cn/cssref/selector_before.asp)                                  | p:before              | 在每个 <p> 元素的内容之前插入内容。               |
| [:after](https://www.w3school.com.cn/cssref/selector_after.asp)                                    | p:after               | 在每个 <p> 元素的内容之后插入内容。               |
| [:lang(*language*)](https://www.w3school.com.cn/cssref/selector_lang.asp)                          | p:lang(it)            | 选择带有以 "it" 开头的 lang 属性值的每个 <p> 元素。 |
| [*element1*~*element2*](https://www.w3school.com.cn/cssref/selector_gen_sibling.asp)               | p~ul                  | 选择前面有 <p> 元素的每个 <ul> 元素。           |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp)              | a[src^="https"]       | 选择其 src 属性值以 "https" 开头的每个 <a> 元素。 |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp)                | a[src$=".pdf"]        | 选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。   |
| [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp)            | a[src*="abc"]         | 选择其 src 属性中包含 "abc" 子串的每个 <a> 元素。  |
| [:first-of-type](https://www.w3school.com.cn/cssref/selector_first-of-type.asp)                    | p:first-of-type       | 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。      |
| [:last-of-type](https://www.w3school.com.cn/cssref/selector_last-of-type.asp)                      | p:last-of-type        | 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。      |
| [:only-of-type](https://www.w3school.com.cn/cssref/selector_only-of-type.asp)                      | p:only-of-type        | 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。      |
| [:only-child](https://www.w3school.com.cn/cssref/selector_only-child.asp)                          | p:only-child          | 选择属于其父元素的唯一子元素的每个 <p> 元素。          |
| [:nth-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-child.asp)                       | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个 <p> 元素。         |
| [:nth-last-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-child.asp)             | p:nth-last-child(2)   | 同上，从最后一个子元素开始计数。                   |
| [:nth-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-of-type.asp)                   | p:nth-of-type(2)      | 选择属于其父元素第二个 <p> 元素的每个 <p> 元素。      |
| [:nth-last-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp)         | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。                 |
| [:last-child](https://www.w3school.com.cn/cssref/selector_last-child.asp)                          | p:last-child          | 选择属于其父元素最后一个子元素每个 <p> 元素。          |
| [:root](https://www.w3school.com.cn/cssref/selector_root.asp)                                      | :root                 | 选择文档的根元素。                          |
| [:empty](https://www.w3school.com.cn/cssref/selector_empty.asp)                                    | p:empty               | 选择没有子元素的每个 <p> 元素（包括文本节点）。         |
| [:target](https://www.w3school.com.cn/cssref/selector_target.asp)                                  | #news:target          | 选择当前活动的 #news 元素。                  |
| [:enabled](https://www.w3school.com.cn/cssref/selector_enabled.asp)                                | input:enabled         | 选择每个启用的 <input> 元素。                |
| [:disabled](https://www.w3school.com.cn/cssref/selector_disabled.asp)                              | input:disabled        | 选择每个禁用的 <input> 元素                 |
| [:checked](https://www.w3school.com.cn/cssref/selector_checked.asp)                                | input:checked         | 选择每个被选中的 <input> 元素。               |
| [:not(*selector*)](https://www.w3school.com.cn/cssref/selector_not.asp)                            | :not(p)               | 选择非 <p> 元素的每个元素。                   |
| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp)                           | ::selection           | 选择被用户选取的元素部分。                      |

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
> 绝对定位(absolute)、相对定位(relative)、固定定位(fixed)

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





# 事件_Event

事件是您在编程时系统内发生的动作或者发生的事情，系统响应事件后，如果需要，您可以某种方式对事件做出回应。例如：如果用户在网页上单击一个按钮，您可能想通过显示一个信息框来响应这个动作。在这篇文章中，我们将讨论一些关于事件的重要概念，并且观察它们在浏览器上如何运行。这篇文章不会面面俱到，仅聚焦于您现阶段需要掌握的知识。

| 前提: | 基本电脑知识, 对HTML和CSS的基本了解,及 [JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps). |
|:----|---------------------------------------------------------------------------------------------------------------------------|
| 目标: | 了解事件的基本理论，它们怎么在浏览器上运行的，以及在不同的编程环境下事件有何不同。                                                                                 |

在Web中, 事件在浏览器窗口中被触发并且通常被绑定到窗口内部的特定部分 — 可能是一个元素、一系列元素、被加载到这个窗口的 HTML
代码或者是整个浏览器窗口。举几个可能发生的不同事件：

- 用户在某个元素上点击鼠标或悬停光标。
- 用户在键盘中按下某个按键。
- 用户调整浏览器的大小或者关闭浏览器窗口。
- 一个网页停止加载。
- 提交表单。
- 播放、暂停、关闭视频。
- 发生错误。

每个可用的事件都会有一个**事件处理器**，也就是事件触发时会运行的代码块。当我们定义了一个用来回应事件被激发的代码块的时候，我们说我们
**注册了一个事件处理器**。注意事件处理器有时候被叫做**事件监听器**
——从我们的用意来看这两个名字是相同的，尽管严格地来说这块代码既监听也处理事件。监听器留意事件是否发生，然后处理器就是对事件发生做出的回应。

**注：** 网络事件不是 JavaScript 语言的核心——它们被定义成内置于浏览器的JavaScript APIs。

## 事件参考-Events

[Events](https://developer.mozilla.org/zh-CN/docs/Web/Events)

DOM
事件被发送用于通知代码相关的事情已经发生了。每个事件都是继承自[`Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)
类的对象，可以包括自定义的成员属性及函数用于获取事件发生时相关的更多信息。事件可以表示从基本用户交互到渲染模型中发生的事件的自动通知的所有内容。

# **快速上手**

> js选择器 条件 -- 触发

JavaScript是运行在浏览器端的脚本语言，JavaScript主要解决的是前端与用户交互的问题，包括动作交互与数据交互。

程序员的核心是思路, 然后才是写代码

不同的语言, 语法是不一样的

**作用:** 页面行为：部分动画效果、页面与用户的交互、页面功能

## JavaScript学习目标

- 控制CSS
- 变量
- 数据类型
- 函数
- 条件判断
- 事件

## JS使用技巧

由JS的作用我们知道, JS用来控制标签, 根据标签来做出一些响应, 在写任何一条js语句时,我们第一步要做的就是**获取html标签**,

## JS的作用和应用场景

开发场景需求: 运行在浏览器端的脚本语言, 不需要服务器的配合也能独立运行. 最开始的研发需求是为了在浏览器端完成表单验证

**行为动作** **数据交互** **表单验证**

## 基本语法规范

- JavaScript 是一种弱类型语言，javascript的变量类型由它的值来决定。
- JS中需要先定义后会用 定义变量需要用关键字 'var'
- JavaScript语句加不加分号都可以,Asa 的习惯是不加(但是应该换行写,采用python风格)
- 实际工作中, **如果将两条语句放在同一行, 必须要加分号**
- 注释方式: 单行注释用 `// 这是单行注释` , 多行注释用 `/* 这是多行注释 */`

#### 变量, 函数, 属性, 函数, 参数(标识符)命名规范

- 区分大小写
- 可以使用的字符: [a-zA-Z0-9_$] 字母, 数字, 下划线, 美元符号
- 第一个字符必须是字母, 下划线`_` 或者美元符号`$`
- 其他字符可以是字母, 下划线,美元符或数字
- 小驼峰命名法
- 应该让命名更有意义:   满足规则的前提下,加入数据类型的体现
    - js中变量存的是标签 标签都是数据类型为对象型object

#### 匈牙利命名风格

- 对象o Object 比如：oDiv
- 数组a Array 比如：aItems
- 字符串s String 比如：sUserName
- 整数i Integer 比如：iItemCount
- 布尔值b Boolean 比如：bIsComplete
- 浮点数f Float 比如：fPrice
- 函数fn Function 比如：fnHandler
- 正则表达式re RegExp 比如：reEmailCheck
- css样式用连接线时换为小驼峰命名法

## JavaScript嵌入页面的方式

1、行间事件（主要用于事件）

**行内式js要求: 必须是事件的格式**

**事件: 需要特定的触发条件才执行的命令**

**格式: 命令=**

```
<input type="button" name="" onclick="alert('ok！');">
```

2、页面script标签嵌入

```
<script type="text/javascript">        
    alert('ok！');
</script>
```

3、外部引入

```
<script type="text/javascript" src="js/index.js"></script>
```

#### 书写方法

嵌入式, 外链式, 行内式

行内式 Key = 'Value';

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src='my.js'></script>
</head>
<body>
<!-- 行内式js要求: 必须是事件的格式     事件:  -->
<!-- 这是行内式的用法示例 -->
<div onclick="alert('test')">测试行内式js</div>
</body>
</html>
```

## 常用技巧

- 改变JS代码执行顺序: window.onload = fn
- 弹窗提示: alert()会阻塞代码执行
- 打印到控制台: consol.log()

## JS控制标签内容

```html

<script>
    window.onload = function () {
        var Odiv = document.getElementById('test')
        Odiv.innerHTML = '<p>修改标签内容</p>'
    }
</script>
```

## JS控制CSS样式

**以行内式的形势展现**

.style方式控制的标签CSS会以行内式的形式展示在网页中, 查看渲染解析后的代码可以查看具体效果

```html

<script>
    window.onload = function () {
        var oBox = document.getElementById('box')
        // 控制单个样式
        Odiv.color = '#e14'
        //控制单个样式时, css中的 `font-size`  在 js 中 `fontSize` 小驼峰的形式表示

        //同时控制多个样式, 仍然使用中划线风格
        oBox.style.cssText = 'color:#fff; background:#ccc;font-size:50px'
    }
</script>
```

## 数据类型

typeof():查看变量的数据类型

如果JS中变量存的是标签, **标签的数据类型是对象型:object**

在JavaScript中一共有5中数据类型

在JS中只有**数值型**, 不区分整形和浮点型

- 数值型: number
- 字符串型: string
- 布尔型: boolean
- 未定义型: undiefined
- 函数型: function
- 对象型: object
    - 空对象: null 通过typeof类型检查是object类型

## 注释

```js
<script type="text/javascript">
    // 单行注释
    var iNum = 123;
    /*
    多行注释
    1、...
    2、...
    */
    var sTr = 'abc123';
</script>
```

## 函数: function

封装函数的意义在意,惰性使用, 先定义, 再调用, 可以重复使用

语法格式: function 名字(参数){命令};

**花括号**: {命令}  **括号**: (参数 条件)   尖括号<>

在JS中, 可以先调用,在定义, 顺序不受影响

数组:array()

```js
// 定义函数
function fnAlert() {
    alert('自定义函数的弹窗')
}

//调用函数
fnAlert()
```

## 变量与函数预解析

JavaScript解析过程分为两个阶段，**先是编译阶段，然后执行阶段**，在编译阶段会将function定义的函数提前，并且将var定义的变量声明提前，将它赋值为undefined。

预解析功能:可以使得后面的数值也可以被调用, 不用担心起声明的位置,

**但是变量依然得先定义后使用**

```js
//将函数定义置于调用后面依然会被正确执行
<script type="text/javascript">
    fnAlert(); // 弹出 hello！
    alert(iNum); // 弹出 undefined
    function fnAlert(){
    alert('hello!');
}
    var iNum = 123;
</script>
```

## 函数传递参数

```js
<script type="text/javascript">
    function fnAlert(a){
    alert(a);
}
    fnAlert(12345);
</script>
```

## 函数'return'关键字

函数中'return'关键字的作用：
返回函数中的值或者对象

用一个变量来接函数执行后的值

 结束函数的运行

```js
<script type="text/javascript">
    function fnAdd(iNum01,iNum02){
    var iRs = iNum01 + iNum02;
    return iRs;
    alert('here!');
}
    var iCount = fnAdd(3,4);
    alert(iCount); //弹出7
</script>
```

## 条件语句

语法: if(条件){命令}else if(条件){命令}else{命令}

条件运算符

== 、===、>、>=、<、<=、!=、&&(而且)、||(或者)、!(否)

与 `&&`, 或 `||` , 非 `!` 不同于Python(and, or not),其他的都差不多

```html
<!-- 基本语法给则if(条件){命令}else{命令} -->
<script>
    var age = 14
    if (age > 24) {
        alert('可以上网了')
    } else if (age > 16) {
        alert('你是小学生吗?')
    } else {
        alert('年龄太小了,不能上网')
    }
</script>
```

```js
<!-- -->

```

## 事件属性

元素上除了有样式，id等属性外，还有事件属性，常用的事件属性有鼠标点击事件属性(onclick)，鼠标移入事件属性(mouseover)
,鼠标移出事件属性(mouseout),将函数名称赋值给元素事件属性，可以将事件和函数关联起来。

button按钮默认没有太多功能, 功能需要使用JS来赋予

js 事件 onclick

jq 事件 click

```html

<script>
    window.onload = function () {
        var oBtn1 = document.getElementById('btn1')
        var oBtn2 = document.getElementById('btn2')
        var oBtn3 = document.getElementById('btn3')
        // 匿名函数: 就是没有名字的函数  function(){}
        // 事件语法: 事件发生在谁身上(变量).事件属性 = 匿名函数
        // 对象.属性(事件) = 匿名函数(命令)
        oBtn1.onclick = function () {
            alert('单击成功')
        }
        oBtn2.onmouseover = function () {
            alert('鼠标滑过')
        }
        oBtn3.onmouseout = function () {
            alert('鼠标移出')
        }
    }
</script>
<body>
<button id="btn1">单击</button>
<br>
<button id="btn2">鼠标滑过</button>
<br>
<button id="btn3">鼠标离开</button>
</body>
```

## 操作元素属性

获取的页面元素，就可以对页面元素的属性进行操作，属性的操作包括属性的读和写。

**语法**

var 变量 = 元素.属性名 -- **读取属性**
元素.属性名 = 新属性值-- **改写属性**

## 属性名在JS中的写法

html的属性和js里面属性写法一样
"class"属性写成 “className”
"style"属性里面的属性，有横杠的改成驼峰式，

比如：**"font-size"，改成"style.fontSize"**

同时修改多个样式: style.cssText="color:#FFF;background:#CCC;"

**innerHTML**: innerHTML可以读取或者写入标签包裹的内容

## 匿名函数

定义的函数可以**不给名称**，这个叫做**匿名函数**，可以**将匿名函数的定义直接赋值**给**元素的事件属性**
来完成事件和函数的关联，这样可以减少函数命名，并且简化代码。函数如果做公共函数，就可以写成匿名函数的形式。

```js
<script>
    window.onload = function(){
    var oBtn = document.getElementById('btn1')
    oBtn.onclick = myalert
    function myalert(){
    alert('OK!')
}
}
</script>
```

## 数组及操作方法

数组就是一组数据的集合，javascript中，数组里面的数据可以是不同类型的。

**作用:** 存储数据 几乎等同于python中的**列表**

**两种定义数组的方法**

```javascript
// 先声明, 后使用
var arr1 = new Array(10, 20, 30)
var arr2 = [10, 20, 30, 40, 'abc']  //推荐

// splice() 在数组中增加或删除成员
var aList = [1, 2, 3, 4];
aList.splice(2, 1, 7, 8, 9); //从第2个元素开始，删除1个元素，然后在此位置增加'7,8,9'三个元素
alert(aList); //弹出 1,2,7,8,9,4

//多维数组
var aList = [[1, 2, 3], ['a', 'b', 'c']];

alert(aList[0][1]); //弹出2;
```

### 数组的操作方法

| 方法    | 用法示例                                      | 说明              |
| ------- | --------------------------------------------- | ----------------- |
| pop     | arr.pop()                                     | 删除末位数据      |
| [0]     | arr[0]                                        | 获取下标为0的数据 |
| push    | arr.push()                                    | 结尾添加数据      |
|         | arr.length                                    | 获取数组长度      |
| splice  | arr.splice(**index**,**delete_count**,insert) | 插入和删除数据    |
| reverse | arr.reverse()                                 | 反转数据          |
| join    | arr.join('分隔符')                            | 数据              |
| indexOf | arr.indexOf(数据)                             | 返回下标          |

#### 数组去重

```html

<script>
    var arr = [10, 20, 30, 20, 10, 50, 30, 40]
    var newArr = []
    // 看数组的所有数据for，如果是没有重复的if(没重复)，  放到newArr中（数组结尾添加）
    for (var i = 0; i < arr.length; i++) {
        // 什么数据是没有重复的？   arr.indexof的下标 == 遍历的下标 i
        // indexOf(10)  0  0
        // indexOf(20)  1  1
        // indexOf(30)  2  2
        // indexOf(20)  1  3
        if (arr.indexOf(arr[i]) == i) {
            newArr.push(arr[i])
        }
    }
    alert(newArr)
</script>
```

## 字符串操作方法

字符串可以做加法 可以加数字

| 方法                     | 作用                     |
|------------------------|------------------------|
| +                      | 字符串的合并操作               |
| parseInt()             | 字符串转化为整数               |
| parseFloat()           | 字符串转化为小数               |
| substring(start=,end=) | 截取字符串(不包含结束)           |
| split('symbol')        | 字符串分割成数组(symbol='分隔符') |
| indexOf()              | 查看字符串索引                |
| reverse()              | 反转数组                   |
| join('symbol')         | 合并数组中的字符串              |

```JavaScript
// 字符串反转
var str = 'asdfj12jlsdkf098';
var str2 = str.split('').reverse().join('');

alert(str2);
```

## 循环

**while**

初始值; while(条件){命令;增量}

[推荐]**for**

for(初始值;条件;增量){命令}

```js
<script>
    window.onload= function(){
    var oMyul = document.getElementById('myul')
    var arr = ['侏罗纪世纪','侏罗纪世纪1','侏罗纪世纪2']
    var str = ''
    for(var i=0;i<arr.length;i++){
    str += '<li>' + arr[i] + '</li>'
}
    oMyul.innerHTML = str
}
</script>
```

## 判断相等

python是弱类型语言, 因此JavaScript的语言类型比python还弱

```html

<script>
    var sNum = '1'
    var iNum = 1
    alert(sNum == iNum)  //第一个值为true
    alert(sNum === iNum)  //第二个值为false
</script>
```

## 调试程序方法bug

1. alert : 原理: 到该行是否正常执行
2. console.log
3. document.title 会修改网页标题: 这种方式及其**不推荐**

获得错误提示反馈 F12 --> console   **控制台会有报错信息提示**: 会有提示错误类型和位置行号

BUG调试原理: 遇到错误就不会继续执行 获得提示即表示正常运行到该行代码

是否正常执行反馈

如果该行能正确执行,console.log()**打印到调试台**

alert()弹出提示框, 尤其是自动触发时,但是缺点是会**阻塞代码**的运行

js打断点, js断点调试

F12 >> sources >> 选中指定的js文件或代码块 >> 行号

选择行号后即被打上了一个断点, 按下F10 就会开始调试(step over)单步执行

## 定时器

作用: 通过延迟时间控制命令是否重复执行

隔一段时间执行一次命令的就是定时器操作, 淘宝海报图片自动切换用到了定时器的方法

JS 定时器有两个方法:

- oTimer = setInterval(命令,间隔时间ms): 按照指定的周期 (以毫秒计) 来调用函数或计算表达式. 方法会不停地调用函数,
  直到clearInterval()被调用或窗口被关闭.

- setTimeout(命令,间隔时间ms: 在指定的毫秒数后调用函数或计算表达式.

  定时器的两个参数的用法

  参数1: 命令: 1. 匿名函数形式. 2. 函数名形式
  参数2: 延迟时间, 以毫秒为单位
- clearInterval(定时器名oTimer): 关闭定时器

```JavaScript
/*
    定时器：
    setTimeout  只执行一次的定时器 
    clearTimeout 关闭只执行一次的定时器
    setInterval  反复执行的定时器
    clearInterval 关闭反复执行的定时器

*/

var time1 = setTimeout(myalert, 2000);
var time2 = setInterval(myalert, 2000);

/*
clearTimeout(time1);
clearInterval(time2);
*/
function myalert() {
    alert('ok!');
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        // 获取元素对象
        window.onload = function () {
            var oBtn1 = document.getElementById('btn1')
            var oBtn2 = document.getElementById('btn2')
            var oBtn3 = document.getElementById('btn3')
            var oTimer = null
            // 绑定单击事件
            // 单次 setTimeout()
            // setInterval(handler处理器(处理内容), timeout间隔(毫秒))
            // 都有相同的两个参数
            // 参数1: 命令: 1. 匿名函数形式. 2. 函数名形式
            // 参数2: 延迟时间,   以毫秒为单位

            oBtn1.onclick = function () {
                setTimeout(function () {
                    alert('单次')
                }, 500)

            }

            oBtn2.onclick = function () {

                // setInterval(oBtn2.,2)
                oTimer = setInterval(aa, 3500)
            }

            function aa() {
                alert('多次')
            }

            oBtn3.onclick = function () {
                clearInterval(oTimer)
                // 释放浏览器缓存
                oTimer = null
            }
        }
    </script>
</head>
<body>

<button id="btn1">单一计时器</button>
<button id="btn2">重复计时器</button>
<button id="btn3">关闭定时器</button>
</body>
</html>
```

## 标签位移原理

语法: 文档.ID.属性

document.getElementById().value 获取值表单的值

## 无缝滚动

## 变量的作用域

**全局变量**：在函数之外定义的变量，为整个页面公用，函数内部外部都可以访问。
**局部变量**：在函数内部定义的变量，只能在定义该变量的函数内部访问，外部无法访问。

- 在JS中声明变量可以不加'var', 不加var是全局变量; 在函数体定义局部变量时,   **强烈建议一定要加var**
- 函数内部使用全局变量, 不需要global, 直接变量赋值
- **函数中可以直接修改全局变量**

## 封闭函数

封闭函数是javascript中匿名函数的另外一种写法，创建一个一开始就执行而不用命名的函数。

也叫封闭空间,代码整合时避免冲突(同事合作时避免冲突)

一般情况, 当函数名一样时,两个函数只有一份被执行,后者覆盖新的.(由预解析原理)

**作用:**

封闭函数可以创造一个独立的空间，在封闭函数内定义的变量和函数不会影响外部同名的函数和变量，**可以避免命名冲突**

解决协同配合工作时的问题

```js
//写法一
(function () {
    alert('hello!');
})();

//写法二
!function () {
    alert('hello!');
}()


```

需求: **封闭空间**: 当函数名冲突的时候怎么保证命令都要执行

- 方法1: `(冲突代码块)()`
- 方法2: `!代码块()`
- 方法3: `~代码块()`

# 语言特性

## MDN_JavaScript 

[简介](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

**JavaScript (** **JS** ) 是一种具有[函数优先](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)
的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web
页面的脚本语言而出名的，但是它也被用到了很多[非浏览器环境](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages)
中，例如 [Node.js](https://nodejs.org/)、 [Apache CouchDB](https://couchdb.apache.org/)
和 [Adobe Acrobat](http://www.adobe.com/devnet/acrobat/javascript.html)。JavaScript
是一种[基于原型编程](https://developer.mozilla.org/zh-CN/docs/Glossary/Prototype-based_programming)
、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。了解更多[ JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/About_JavaScript)。

<u>**原型编程** 是一种 面向对象编程 的风格。在这种风格中，我们不会显式地定义类
，而会通过向其它类的实例（对象）中添加属性和方法来创建类，甚至偶尔使用空对象创建类。简单来说，这种风格是在不定义 `class`
的情况下创建一个 `object` 。</u>

本部分将专注于 JavaScript
语言本身，而非局限于网页或其他限制环境。想要了解网页有关的 [APIs](https://developer.mozilla.org/zh-CN/docs/Glossary/API)
，请参考 [Web APIs](https://developer.mozilla.org/zh-CN/docs/Web/API)
以及 [DOM](https://developer.mozilla.org/zh-CN/docs/Glossary/DOM)。

JavaScript 的标准是 [ECMAScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Resources) 。截至 2012
年，所有的[现代浏览器](https://kangax.github.io/compat-table/es5/)都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持
ECMAScript 3 标准。2015年6月17日，[ECMA国际组织](https://www.ecma-international.org/)发布了 ECMAScript 的第六版，该版本正式名称为
ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6。自此，ECMAScript 每年发布一次新标准。本文档目前覆盖了最新 ECMAScript
的草案，也就是 [ECMAScript2020](https://tc39.github.io/ecma262/)。

典型的面向对象编程语言（比如C++和Java），存在“类”（class）这个概念。所谓“类”就是对象的模板，对象就是“类”的实例。但是,
在JavaScript语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）。

## 为什么选择它?

- Web浏览器的语言
- 浏览器的API和文档对象模型(DOM)相当糟糕, 连累JavaScript遭到不公平的指责. 在任何语言中处理DOM都是一件痛苦的事情,
  它的规范制定地很拙劣并且实现互不一致
- 一门弱类型的语言, 所以JavaScript编译器不能检测出类型错误. 弱类型是自由的, 无须建立复杂的类层次
- JavaScript有非常强大到的对象字面量表示法. 通过列出对象的组成部分，它们就能简单地被创建出来。这种表示法是JSON的灵感来源，它现在已经成为流行的数据交换格式。
    - 通过字面量, 知晓对象的数据类型
- JavaScript依赖于全局变量来进行连接。所有编译单元的所有顶级变量被撮合到一个被称为全局对象（the global
  object）的公共命名空间中。这是一件糟糕的事情，因为全局变量是魔鬼，但它们在JavaScript中却是基础。幸好，我们接下来会看到，JavaScript也给我们提供了缓解这个问题的处理方法。

# **底层原理**

## 作用域_scoped

当前作用域, 如果没有查找`parent`作用域

## 上下文_Context

词法环境,

变量环境

# ES6语法

- 参考文档
    - MDN
    - [新特性说明](https://www.jianshu.com/p/ac1787f6c50f)
    - [ES6 English](https://babeljs.io/docs/en/learn)
    - [ES6教程中文](https://es6.ruanyifeng.com/)

ES6是**JavaScript语言的新版本**
，它也可以叫做ES2015，之前学习的JavaScript属于ES5，ES6在它的基础上增加了一些语法，ES6是未来JavaScript的趋势，而且vue组件开发中会使用很多的ES6的语法，所以掌握这些常用的ES6语法是必须的。

## 变量声明let和const

(constant常量)

```js
// 使用 let 声明局部变量
let x = 5
// “let” as in “let x be equal to 5”.
//让 x = 5
```

let和const是新增的声明变量的开头的关键字，在这之前，变量声明是用var关键字，这两个关键字和var的区别是，**它们声明的变量没有预解析
**，let和const的区别是，let声明的是一般变量，const申明的常量 ，不可修改。

新语法中,变量未定义时会直接报错

const应用场景: 类似原则, 不应该不修改的值

```js
alert(iNum01) // 弹出undefined
// alert(iNum02); 报错，let关键字定义变量没有变量预解析
// alert(iNum03); 报错，const关键字定义变量没有变量预解析

var iNum01 = 6;
// 使用let关键字定义变量
let iNum02 = 12;
// 使用const关键字定义变量
const iNum03 = 24;

alert(iNum01); // 弹出6
alert(iNum02); // 弹出12
alert(iNum03); // 弹出24

iNum01 = 7;
iNum02 = 13;
//iNum03 = 25; // 报错,const定义的变量不可修改,const定义的变量是常量

alert(iNum01)
alert(iNum02);
alert(iNum03);
```

let 和 var的区别

let: block scope 块作用域

var: function scope 函数作用域

*在函数体声明变量: 一定要用var 不然该变量会被成为全局变量而产生混乱!*

## **箭头函数**_arrow function

[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

**箭头函数表达式**
的语法比[函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
更简洁，并且没有自己的`this`，`arguments`，`super`或`new.target`。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

匿名函数可以理解为一个对象, 可以被引用

**可以把箭头函数理解成匿名函数的第二种写法**，箭头函数的作用是可以在对象中**绑定this**，解决了JavaScript中this指定混乱的问题。

*作用*: **引入箭头函数有两个方面的作用：更简短的函数并且不绑定`this`**

什么样的函数可以改写成箭头函数? 匿名函数可以改写成箭头函数

普通函数修改为箭头函数

```js
//这是原函数
function fn1() {
    alert(1)
}

fn1()
//这是第二种方式
var fn2 = function () {
    alert(2)
}
fn2() / 这样就可以达到带命名参数函数的效果了

//箭头函数形式
var fn2 = (a, b) => {
    alert(a + b);
};
fn2(2)
```

### 语法

```js
(param1, param2, …,
paramN
) =>
{
    statements
}
(param1, param2, …,
paramN
) =>
expression
    //相当于：(param1, param2, …, paramN) =>{ return expression; }

    // 当只有一个参数时，圆括号是可选的：
    (singleParam)
=>
{
    statements
}
singleParam => {
    statements
}

// 没有参数的函数应该写成一对圆括号。
() => {
    statements
}

//加括号的函数体返回对象字面量表达式：
params => ({foo: bar})

    /*高级语法*/

    //支持剩余参数和默认参数
    (param1, param2, ...rest)
=>
{
    statements
}
(param1 = defaultValue1, param2, …,
paramN = defaultValueN
) =>
{
    statements
}

//同样支持参数列表解构
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6
```

```js
(参数1, 参数2, …,
参数N
) =>
{
    函数体
}

//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
(参数1, 参数2, …,
参数N
) =>
表达式（单一）

// 当只有一个参数时，圆括号是可选的：
(单一参数) => {
    函数体
}
单一参数 => {
    函数体
}

// 没有参数的函数应该写成一对圆括号。
() => {
    函数体
}
```

### 函数体

箭头函数可以有一个“简写体”或常见的“块体”。

在一个简写体中，只需要一个表达式，并附加一个隐式的返回值。在块体中，必须使用明确的`return`语句。

```js
var func = x => x * x;
// 简写函数 省略return

var func = (x, y) => {
    return x + y;
};
//常规编写 明确的返回值
```

```js
// 定义函数的一般方式
/*
function fnRs(a,b){
    var rs = a + b;
    alert(rs);
}
fnRs(1,2);        
*/

// 通过匿名函数赋值来定义函数
/*
var fnRs = function(a,b){
    var rs = a + b;
    alert(rs);
}
fnRs(1,2);
*/

// 通过箭头函数的写法定义
var fnRs = (a, b) => {
    var rs = a + b;
    alert(rs);
}
// fnRs(1,2);

// 一个参数可以省略小括号
var fnRs2 = a => {
    alert(a);
}
fnRs2('haha!');


// 箭头函数的作用，可以绑定对象中的this
var person = {
    name: 'tom',
    age: 18,
    showName: function () {
        setTimeout(() => {
            alert(this.name);
        }, 1000)
    }
}
person.showName();
```

### 箭头函数理解和作用

> 更短的函数和不绑定this

箭头函数不会创建自己的`this,它只会从自己的作用域链的上一层继承this`。因此，在下面的代码中，传递给`setInterval`
的函数内的`this`与封闭函数中的`this`值相同：

```js
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| 正确地指向 p 实例
    }, 1000);
}

var p = new Person();
```

### 没有单独的`this`

在箭头函数出现之前，每一个新函数根据它是被如何调用的来定义这个函数的this值：

- 如果是该函数是一个构造函数，this指针指向一个新的对象
- 在严格模式下的函数调用下，this指向undefined
- 如果是该函数是一个对象的方法，则它的this指针指向这个对象
- 等等

`This`被证明是令人厌烦的面向对象风格的编程。

```js
function Person() {
    // Person() 构造函数定义 `this`作为它自己的实例.
    this.age = 0;

    setInterval(function growUp() {
        // 在非严格模式, growUp()函数定义 `this`作为全局对象, 
        // 与在 Person()构造函数中定义的 `this`并不相同.
        this.age++;
    }, 1000);
}

var p = new Person();
```

在ECMAScript 3/5中，通过将`this`值分配给封闭的变量，可以解决`this`问题。

```
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    //  回调引用的是`that`变量, 其值是预期的对象. 
    that.age++;
  }, 1000);
}
```

或者，可以创建[绑定函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
，以便将预先分配的`this`值传递到绑定的目标函数（上述示例中的`growUp()`函数）。

箭头函数不会创建自己的`this,它只会从自己的作用域链的上一层继承this`。因此，在下面的代码中，传递给`setInterval`
的函数内的`this`与封闭函数中的`this`值相同：

```js
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| 正确地指向 p 实例
    }, 1000);
}

var p = new Person();
```

### 箭头函数在对象中的使用方法

```js
var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

elements.map(function (element) {
    return element.length;
}); // 返回数组：[8, 6, 7, 9]

// 上面的普通函数可以改写成如下的箭头函数
elements.map((element) => {
    return element.length;
}); // [8, 6, 7, 9]

// 当箭头函数只有一个参数时，可以省略参数的圆括号
elements.map(element => {
    return element.length;
}); // [8, 6, 7, 9]

// 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
elements.map(element => element.length); // [8, 6, 7, 9]

// 在这个例子中，因为我们只需要 `length` 属性，所以可以使用参数解构
// 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称，而 `lengthFooBArX` 则只是个变量名，
// 可以替换成任意合法的变量名
elements.map(({"length": lengthFooBArX}) => lengthFooBArX); // [8, 6, 7, 9]
```

```js
    <script>
    //需求: 人对象: 具有属性和方法 属性:(人), 方法:(说自己的名字(每个一秒钟说一次))
    var oPerson = {
    name: "TOM",
    showName: function(){
    //匿名函数方法会出问题
    setInterval(
    // function(){
    //     alert(this)  //this指向出问题了
    //     alert(oPerson.name) //常规解决方案}

    //使用箭头函数改写
    () => {alert(this.name)}
    ,1000)
}
}
    oPerson.showName()
```

### 对象新简写方式

对象中如果键和值的标识符是一样的可以简写成只留一个单词

HTML5新增语法也可以这样写

```html

<script>
    var names = 'TOM'
    var age = 20
    var aa = {
        // 如果key和v的值相同，只留一个单词
        names,
        age: age,
        showName: function () {
            alert(this.names)
            alert(this.age)
        }
    }
    aa.showName()
</script>
```

## 模块导入import和导出export

[MDN import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

javascript之前是没有模块的功能的，之前做js模块化开发，是用的一些js库来模拟实现的，在ES6中加入了模块的功能，和python语言一样，python中一个文件就是一个模块，ES6中，一个js文件就是一个模块，
**不同的是，js文件中需要先导出(export)后，才能被其他js文件导入(import)**

```js
// model.js文件中导出
var person = {name: 'tom', age: 18}
export default {person}  // 支持被导入

// index.js文件夹中导入
import person from 'js/model.js'

// index.js中使用模块
person.name
person.age

/*
上面导出时使用了default关键字，如果不使用这个关键字，导入时需要加大括号：
import {person} from 'js/model.js'
*/
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
```

目前ES6的模块功能需要在服务器环境下才可以运行。

```js
// 导出
```





## 对象的简写

javascript对象在ES6中可以做一些简写形式，了解这些简写形式，才能方便我们读懂一些在javascript代码中简写的对象。

```javascript
let name = '李思';
let age = 18;

/*
var person = {
    name:name,
    age:age,
    showname:function(){
        alert(this.name);
    },
    showage:function(){
        alert(this.age);
    }
}
*/

// 简写成下面的形式
var person = {
    name,
    age,
    showname() {
        console.log(this.name)
    },
    showage() {
        console.log(this.age)
    }
}

person.showname();
person.showage();
```

# TypeScript



## 概述

JavaScript的超集, 在JS的基础上增加了一些额外特性: 类型系统, 接口

## ChatGPT快速上手

avaScript (JS) 和 TypeScript (TS) 都是流行的编程语言，它们用于构建Web和服务器端应用程序。TypeScript 是 JavaScript 的一个超集，这意味着所有有效的 JavaScript 代码也是有效的 TypeScript 代码。但 TypeScript 在 JavaScript 的基础上增加了一些额外的功能和概念，主要集中在类型系统上。以下是 JavaScript 和 TypeScript 之间的主要语法区别：

1. **类型注解（Type Annotations）**:

   - **JavaScript**: 不具备类型注解。所有变量的类型在运行时动态确定。

   - TypeScript

     : 支持类型注解，允许在代码编写时指定变量、函数参数和返回值的类型。

     ```
     typescriptCopy code
     let num: number = 5;
     function add(a: number, b: number): number {
       return a + b;
     }
     ```

2. **接口（Interfaces）**:

   - **JavaScript**: 不支持接口。

   - TypeScript

     : 支持接口，用于定义对象的形状或类的公共合同。

     ```
     typescriptCopy code
     interface IUser {
       name: string;
       age: number;
     }
     ```

3. **类与成员的可见性（Class & Member Visibility）**:

   - **JavaScript**: ES6 引入了类，但不支持成员（属性和方法）的可见性关键字（如 `private`, `protected`）。

   - TypeScript

     : 支持类成员的可见性关键字，允许更细致地控制类的封装。

     ```
     typescriptCopy code
     class Person {
       private name: string;
     
       constructor(name: string) {
         this.name = name;
       }
     }
     ```

4. **枚举（Enums）**:

   - **JavaScript**: 不原生支持枚举。

   - TypeScript

     : 支持枚举，用于定义一组命名常量。

     ```
     typescriptCopy code
     enum Color {
       Red,
       Green,
       Blue
     }
     ```

5. **泛型（Generics）**:

   - **JavaScript**: 不支持泛型。

   - TypeScript

     : 支持泛型，提供一种方法来创建可重用的组件，同时保持类型的一致性。

     ```
     typescriptCopy code
     function identity<T>(arg: T): T {
       return arg;
     }
     ```

6. **编译时类型检查**:

   - **JavaScript**: 是一种动态类型语言，类型错误只能在运行时被发现。
   - **TypeScript**: 提供编译时类型检查，能够在代码运行之前发现潜在的类型错误。

7. **命名空间（Namespaces）**:

   - **JavaScript**: 不支持命名空间，但可以使用模块。
   - **TypeScript**: 支持命名空间，用于组织代码并避免全局作用域的污染。

8. **类型推断（Type Inference）**:

   - **JavaScript**: 有限的类型推断。
   - **TypeScript**: 更强大的类型推断机制。

9. **装饰器（Decorators）**:

   - **JavaScript**: 尚未原生支持装饰器，尽管有提案。
   - **TypeScript**: 支持装饰器，用于修改类、方法、访问器、属性和参数的行为。

TypeScript 旨在提供更严格的类型系统和额外的编程特性，有助于开发大型应用程序和提高代码的可读性和可维护性。对于那些熟悉静态类型语言（如 C# 或 Java）的开发者来说，TypeScript 可能更容易上手。然而，它也增加了额外的学习曲线，尤其是对于那些只熟悉 JavaScript 的开发者。

## 类型系统

```js
let helloWorld: string = "hello, world"
```



## 接口-Interface

用于定义对象的schema, 比如具有哪些属性和方法

```typescript
interface User {
	name: string,
  id: number, 
}

const user: User = {
  name: "Hayes",
  id: 0, 
}

// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:
// 通过类型和面向对象来实例化对象
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);

// You can use interfaces to annotate parameters and return values to functions:
// 通过接口为函数参数和返回值注解
function deleteUser(user: User) {
  // ...
}
 
function getAdminUser(): User {
  //...
}
```

## 组合类型

### 联合

### 泛型

# 基本概念

## 文档对象模型_DOM, Document Object Model

DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML文档交互的API。DOM
是载入到浏览器中的文档模型，以节点树的形式来表现文档，每个节点代表文档的构成部分（例如:页面元素、字符串或注释等等）。

DOM 是万维网上使用最为广泛的API之一，因为它允许运行在浏览器中的代码访问文件中的节点并与之交互。节点可以被创建，移动或修改。事件监听器可以被添加到节点上并在给定事件发生时触发。

## 构造函数

> python中, 构造函数是指特殊方法 `__init__`

[参考链接](https://juejin.im/entry/584a1c98ac502e006c5d63b8)

定义: 如果函数用来初始化(使用new运算符)一个新建的对象, 我们称这种函数为构造函数(constructor).

作用: 构造函数定义了一类(class)对象---由构造函数初始化的对象组成的集合.

作用: 通过定义自己的构造函数来定义需要的类.

前面说过，“对象”是单个实物的抽象。通常需要一个模板，表示某一类实物的共同特征，然后“对象”根据这个模板生成。

js语言中使用构造函数（constructor）作为对象的模板。所谓构造函数，就是提供一个生成对象的模板，并描述对象的基本结构的函数。一个构造函数，可以生成多个对象，每个对象都有相同的结构。

看一下构造函数的基本结构。

```js
var Keith = function () {
    this.height = 180;
};

//两种写法相同。
function Keith() {
    this.height = 180;
}
```

上面代码中，`Keith`就是构造函数，它提供模板，用来生成对象实例。为了与普通函数区别，构造函数名字的第一个字母通常大写。

构造函数的三大特点：

**a：构造函数的函数名的第一个字母通常大写。**

**b：函数体内使用this关键字，代表所要生成的对象实例。**

**c：生成对象的时候，必须使用new命令来调用构造函数。**

## 变量提升_[Hoisting](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)

**JavaScript 仅提升声明，而不提升初始化**。如果你先使用的变量，再声明并初始化它，变量的值将是 undefined。以下两个示例演示了相同的行为。

变量提升（Hoisting）被认为是， Javascript中执行上下文
（特别是创建和执行阶段）工作方式的一种认识。在 [ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/index.html)
之前的JavaScript文档中找不到变量提升（Hoisting）这个词。不过，需要注意的是，开始时，这个概念可能比较难理解，甚至恼人。

例如，从概念的字面意义上说，“变量提升”意味着变量和函数的声明会在物理层面移动到代码的最前面，但这么说并不准确。实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。

即使我们在定义这个函数之前调用它，函数仍然可以工作。这是因为在 JavaScript 中**执行上下文**的工作方式造成的。

变量提升也适用于其他数据类型和变量。变量可以在声明之前进行初始化和使用。但是如果没有初始化，就不能使用它们。

译者注： 函数和变量相比，会被优先提升。这意味着函数会被提升到更靠前的位置。

JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the
value will be undefined. For example:

```js
console.log(num); // Returns undefined 
var num;
num = 6;
```

If you declare the variable after it is used, but initialize it beforehand, it will return the value:

```js
num = 6;
console.log(num); // returns 6
var num;
```

**JavaScript 仅提升声明，而不提升初始化**。如果你先使用的变量，再声明并初始化它，变量的值将是 undefined。以下两个示例演示了相同的行为。

```js
// Example 1_only y is hoisted
var x = 1;                 // 声明 + 初始化 x
console.log(x + " " + y);  // '1 undefined'
var y = 2;                 // 声明 + 初始化 y

// Example 2_Hoists
var num1 = 3;                   // Declare and initialize num1
num2 = 4;                       // Initialize num2
console.log(num1 + " " + num2); //'3 4'
var num2;                       // Declare num2 for hoisting

// Example 3_Hoists
a = 'Cran';              // Initialize a
b = 'berry';             // Initialize b
console.log(a + "" + b); // 'Cranberry'
var a, b;                // Declare both a & b for hoisting
```

# 核心概念

## 模块_[module](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)

应用场景: 大型项目中进行代码组织和命名空间对命名进行的封装,防止命名冲突.

Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量
Javascript
脚本的复杂程序，还有一些被用在其他环境（例如 [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)）。

因此，近年来，有必要开始考虑提供一种*将 JavaScript 程序拆分为可按需导入的单独模块的机制*。Node.js 已经提供这个能力很长时间了，还有很多的
Javascript 库和框架 已经开始了模块的使用（例如最新的 [Webpack](https://webpack.github.io/)
和 [Babel](https://babeljs.io/)）。

好消息是，最新的浏览器开始原生支持模块功能了，这是本文要重点讲述的。这会是一个好事情 —
浏览器能够最优化加载模块，使它比使用库更有效率：使用库通常需要做额外的客户端处理。

## 原型编程_[Wikipedia](https://en.wikipedia.org/wiki/Prototype-based_programming)

**Prototype-based programming** is a style
of [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) in which behaviour reuse (
known as [inheritance](https://en.wikipedia.org/wiki/Inheritance_(programming))) is performed via a process of reusing
existing [objects](https://en.wikipedia.org/wiki/Object_(programming)) that serve
as [prototypes](https://en.wikipedia.org/wiki/Prototype). This model can also be known as *prototypal*,
*prototype-oriented,* *classless*, or *instance-based* programming.

Prototype-based programming uses generalized objects, which can then be cloned and extended. Using fruit as an example,
a "fruit" object would represent the properties and functionality of fruit in general. A "banana" object would be cloned
from the "fruit" object and general properties specific to bananas would be appended. Each individual "banana" object
would be cloned from the generic "banana" object. Compare to
the [class-based](https://en.wikipedia.org/wiki/Class-based_programming) paradigm, where a "fruit" *class* would be
extended by a "banana" *class*.

## 原型_[prototype](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)

对象原型

*学习目标*:  理解 JavaScript 对象原型、原型链如何工作、如何向 `prototype` 属性添加新的方法。

通过原型这种机制，JavaScript
中的对象从其他对象继承功能特性；这种继承机制与经典的面向对象编程语言的继承机制不同。本文将探讨这些差别，解释原型链如何工作，并了解如何通过 `prototype`
属性向已有的构造器添加方法。

### 基于原型的语言？

JavaScript 常被描述为一种**基于原型的语言 (prototype-based language)**——每个对象拥有一个**原型对象**
，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为*
*原型链 (prototype chain)**，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。

准确地说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的`prototype`属性上，而非对象实例本身。

在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript
中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是`__proto__` 属性，是从构造函数的 `prototype`
属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。

**注意:** 理解对象的原型（可以通过`Object.getPrototypeOf(obj)`或者已被弃用的`__proto__`属性获得）与构造函数的`prototype`
属性之间的区别是很重要的。前者是每个实例上都有的属性，后者是构造函数的属性。也就是说，`Object.getPrototypeOf(new Foobar())`
和`Foobar.prototype`指向着同一个对象。

以上描述很抽象；我们先看一个例子。

### 使用Javascript中的原型

在javascript中，函数可以有属性。 每个函数都有一个特殊的属性叫作`原型（prototype）`
，正如下面所展示的。请注意，下面的代码是独立的一段(在网页中没有其他代码的情况下，这段代码是安全的)
。为了最好的学习体验，你最好打开一个控制台 (在Chrome和Firefox中，可以按Ctrl+Shift+I来打开)切换到"控制台" 选项卡,
复制粘贴下面的JavaScript代码，然后按回车来运行.

```javascript
function doSomething() {
}

console.log(doSomething.prototype);
// It does not matter how you declare the function, a
//  function in javascript will always have a default
//  prototype property.
var doSomething = function () {
};
console.log(doSomething.prototype);
```

正如上面所看到的, `doSomething` 函数有一个默认的原型属性，它在控制台上面呈现了出来. 运行这段代码之后，控制台上面应该出现了像这样的一个对象.

```js
{
    constructor: ƒ
    doSomething(),
        __proto__
:
    {
        constructor: ƒ
        Object(),
            hasOwnProperty
    :
        ƒ
        hasOwnProperty(),
            isPrototypeOf
    :
        ƒ
        isPrototypeOf(),
            propertyIsEnumerable
    :
        ƒ
        propertyIsEnumerable(),
            toLocaleString
    :
        ƒ
        toLocaleString(),
            toString
    :
        ƒ
        toString(),
            valueOf
    :
        ƒ
        valueOf()
    }
}
```

现在，我们可以添加一些属性到 doSomething 的原型上面，如下所示.

```js
function doSomething() {
}

doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

结果:

```js
{
    foo: "bar",
        constructor
:
    ƒ
    doSomething(),
        __proto__
:
    {
        constructor: ƒ
        Object(),
            hasOwnProperty
    :
        ƒ
        hasOwnProperty(),
            isPrototypeOf
    :
        ƒ
        isPrototypeOf(),
            propertyIsEnumerable
    :
        ƒ
        propertyIsEnumerable(),
            toLocaleString
    :
        ƒ
        toLocaleString(),
            toString
    :
        ƒ
        toString(),
            valueOf
    :
        ƒ
        valueOf()
    }
}
```

原型链_prototype chain

## [继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

对于使用过基于类的语言 (如 Java 或 C++) 的开发人员来说，JavaScript 有点令人困惑，因为它是动态的，并且本身不提供一个 `class`
实现。（在 ES2015/ES6 中引入了 `class` 关键字，但那只是语法糖，JavaScript 仍然是基于原型的）。

当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（
**prototype** ）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 `null`。根据定义，`null`
没有原型，并作为这个**原型链**中的最后一个环节。

几乎所有 JavaScript
中的对象都是位于原型链顶端的 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
的实例。

尽管这种原型继承通常被认为是 JavaScript 的弱点之一，但是原型继承模型本身实际上比经典模型更强大。例如，在原型模型的基础上构建经典模型相当简单。

## 属性_property

## 属性访问

属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点号和方括号。

```js
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// expected output: "Mario"

const person2 = {
    firstname: 'John',
    lastname: 'Doe'
};

console.log(person2['lastname']);
// expected output: "Doe"

```

## 构造器_[constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)

类似于 python中的`__init__`函数, 使用于类中, 但是语法上会有不同

```js
constructor([arguments])
{ ...
}
```

The `constructor` method is a special method for creating and initializing an object created within
a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class).

```js
class Polygon {
    constructor() {
        this.name = 'Polygon';
    }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"

```

## 使用对象

JavaScript 的设计是一个简单的基于对象的范式。**一个对象就是一系列属性的集合，一个属性包含一个名和一个值。**
一个属性的值可以是函数，这种情况下属性也被称为*方法*。除了浏览器里面预定义的那些对象之外，你也可以定义你自己的对象。本章节讲述了怎么使用对象、属性、函数和方法，怎样实现自定义对象。

<u>对象的属性可以是值,也可以是方法</u>

### 对象概述

javascript 中的对象(物体)，和其它编程语言中的对象一样，可以比照现实生活中的对象(物体)来理解它。 javascript 中对象(物体)
的概念可以比照着现实生活中实实在在的物体来理解。

在javascript中，一个对象可以是一个单独的拥有属性和类型的实体。我们拿它和一个杯子做下类比。一个杯子是一个对象(物体)
，拥有属性。杯子有颜色，图案，重量，由什么材质构成等等。同样，javascript对象也有属性来定义它的特征。

### 对象和属性

一个 javascript 对象有很多属性。一个对象的属性可以被解释成一个附加到对象上的变量。对象的属性和普通的 javascript
变量基本没什么区别，仅仅是属性属于某个对象。属性定义了对象的特征(译注：动态语言面向对象的鸭子类型)。你可以通过点符号来访问一个对象的属性。

```js
objectName.propertyName
```

和其他 javascript 变量一样，对象的名字(可以是普通的变量)
和属性的名字都是大小写敏感的。你可以在定义一个属性的时候就给它赋值。例如，我们创建一个myCar的对象然后给他三个属性，make，model，year。具体如下所示：

```js
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969; 
```

对象中未赋值的属性的值为[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)
（而不是[`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)）。

```js
myCar.noProperty; // undefined
```

JavaScript
对象的属性也可以通过方括号访问或者设置（更多信息查看 [property accessors](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors)）.
对象有时也被叫作关联数组, 因为每个属性都有一个用于访问它的字符串值。例如，你可以按如下方式访问 `myCar `对象的属性：

```js
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

一个对象的属性名可以是任何有效的 JavaScript 字符串，或者可以被转换为字符串的任何类型，包括空字符串。然而，一个属性的名称如果不是一个有效的
JavaScript 标识符（例如，一个由空格或连字符，或者以数字开头的属性名），就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用。例如：

```
// 同时创建四个变量，用逗号分隔
var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);
```

请注意，方括号中的所有键都将转换为字符串类型，因为JavaScript中的对象只能使用String类型作为键类型。
例如，在上面的代码中，当将键obj添加到myObj时，JavaScript将调用obj.toString()方法，并将此结果字符串用作新键。

你也可以通过存储在变量中的字符串来访问属性：

```js
var propertyName = "make";
myCar[propertyName] = "Ford";

propertyName = "model";
myCar[propertyName] = "Mustang";
```

你可以在 [for...in](https://developer.mozilla.org/zh-CN/docs/JavaScript/Guide/Statements#for...in_Statement)
语句中使用方括号标记以枚举一个对象的所有属性。为了展示它如何工作，下面的函数当你将对象及其名称作为参数传入时，显示对象的属性：

```js
function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return result;
}
```

因而，对于函数调用 `showProps(myCar, "myCar")` 将返回以下值：

```js
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

## 创建对象

# 基础语义

`->` 箭头函数

`...`_Spread_展开语法

`''` | `""` String_字符串

`[]` Array

`{}` Object

`()` Method

`//` Comments

`/**/` Comments

`/ab+c/` RegExp

`$(``)`_Template模板直接量

# 标准对象-Global Objects

[标准对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)-Global Objects

> global built-in objects

本章介绍和说明了 JavaScript 中所有的标准的内置对象、以及它们的方法和属性。

**全局的对象**（ global objects ）或称标准内置对象，不要和 **"全局对象**（global object）**"** 混淆。这里说的全局的对象是说在*
*全局作用域里的对象**。

“全局对象 （global
object）”可以在全局作用域里，通过[`this`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
访问（但只有在 ECMAScript 5
的非严格模式下才可以，在严格模式下得到的是 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)
）。实际上，**全局作用域**包含了全局对象的属性，还有它可能继承来的属性。

全局作用域中的其他对象则可[由用户的脚本创建](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects)
，或由宿主程序提供。浏览器作为最常见的宿主程序，其所提供的宿主对象的说明可以在这里找到：[API 参考](https://developer.mozilla.org/zh-CN/docs/Web/API)。

关于 [DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)
和核心 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
之间的区别，可参阅 [JavaScript 技术概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)
来了解更详细的信息。

## JSON_

[N](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)

**`JSON`**对象包含两个方法:
用于解析 [JavaScript Object Notation](http://json.org/) ([JSON](https://developer.mozilla.org/zh-CN/docs/Glossary/JSON))
的 `parse()` 方法，以及将对象/值转换为 JSON字符串的 `stringify()` 方法。除了这两个方法,
JSON这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。

# 语句-**statement**

## 控制流-Control Flow

## 声明 Declarations

### var_上下文变量

**`var` 声明语句**声明一个变量，并可选地将其初始化为一个值。

```js
// 声明一个var 变量
var x = 1;

if (x === 1) {
    var x = 2;  //可以修改

    console.log(x);
    // expected output: 2
}

console.log(x);
// expected output: 2

let

const
```

#### 语法

```js
var varname1
[= value1] [, varname2 [= value2]
...
[, varnameN [= valueN]]
]
;
```

- `varnameN`

  变量名。变量名可以定义为任何合法标识符。

- `valueN`

  变量的初始化值。该值可以是任何合法的表达式。默认值为 `undefined`。

#### 描述

变量声明，无论发生在何处，都在执行任何代码之前进行处理。**用 `var`
声明的变量的作用域是它当前的执行上下文，它可以是嵌套的函数，或者对于声明在任何函数外的变量来说是全局。**如果你重新声明一个
JavaScript 变量，它将不会丢失其值。

当赋值给未声明的变量, 则执行赋值后, 该变量会被隐式地创建为全局变量（它将成为全局对象的属性）。

声明和未声明变量之间的差异是：

\1. 声明变量的作用域限制在其声明位置的上下文中，而非声明变量总是全局的。

```js
function x() {
    y = 1;   // 在严格模式（strict mode）下会抛出 ReferenceError 异常
    var z = 2;
}

x();

console.log(y); // 打印 "1"
console.log(z); // 抛出 ReferenceError: z 未在 x 外部声明
```

\2. 声明变量在任何代码执行前创建，而非声明变量只有在执行赋值操作的时候才会被创建。

```js
console.log(a);                // 抛出ReferenceError。
console.log('still going...'); // 打印"still going..."。
var a;
console.log(a);                // 打印"undefined"或""（不同浏览器实现不同）。
console.log('still going...'); // 打印"still going..."。
```

\3. 声明变量是它所在上下文环境的不可配置属性，非声明变量是可配置的（如非声明变量可以被删除）。

```js
var a = 1;
b = 2;

delete this.a; // 在严格模式（strict mode）下抛出TypeError，其他情况下执行失败并无任何提示。
delete this.b;

console.log(a, b); // 抛出ReferenceError。
// 'b'属性已经被删除。
```

由于这三个差异，未能声明变量将很可能导致意想不到的结果。因此，**建议始终声明变量，无论它们是在函数还是全局作用域内**。 而且，在
ECMAScript 5 [严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，分配给未声明的变量会引发错误。

### let_块级作用域变量

以块为生声明周期, 而不是以函数为声明周期    `{}`

作用域 for, if, 等语句, 而var声明的变量在其后面的所有

#### 应用场景

for循环中

## `for...in`_[N](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)

> 不建议用于迭代数组, 迭代数组应该使用 `Array.prototype.forEach()`

**`for...in`语句**
以任意顺序遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性。

## `for...of`-N

> 功能非常类似python 中的 for in

## forEach-N

> array.prototype.forEach()

```js
arr.forEach(callback(currentValue [, index [, array
]])
[, thisArg]
)
```

## try...catch


## throw

throw 语句用来抛出一个用户自定义的异常。当前函数的执行将被停止（throw 之后的语句将不会执行），并且控制将被传递到调用堆栈中的第一个 catch 块。如果调用者函数中没有 catch 块，程序将会终止。


# 表达式-**expression**

# 运算符

[运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators)-**operator**

## `...`_Spread_[展开语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## 运算符优先级

[运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E8%BF%90%E7%AE%97%E7%AC%A6%E4%BC%98%E5%85%88%E7%BA%A7)

运算符的优先级，用于确定一个表达式的计算顺序。在你不能确定优先级时，可以通过使用括号显式声明运算符的优先级。

下表列出了描述符的优先级，从最高到最低。

**运算符优先级**

| Operator type          | Individual operators                 |
|:-----------------------|:-------------------------------------|
| member                 | `. []`                               |
| call / create instance | `() new`                             |
| negation/increment     | `! ~_+ ++ -- typeof void delete`     |
| multiply/divide        | `* / %`                              |
| addition/subtraction   | `+ -`                                |
| bitwise shift          | `<< >> >>>`                          |
| relational             | `< <= > >= in instanceof`            |
| equality               | `== != === !==`                      |
| bitwise-and            | `&`                                  |
| bitwise-xor            | `^`                                  |
| bitwise-or             | `                                    |`                                      |
| logical-and            | `&&`                                 |
| logical-or             | `                                    ||`                                     |
| conditional            | `?:`                                 |
| assignment             | `= += -= *= /= %= <<= >>= >>>= &= ^= |=` |
| comma                  | `,`                                  |

上表有一个更详细的版本，它包含了各操作符更详细的说明，可在 [JavaScript 参考手册](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Operators/Operator_Precedence#Table)
中找到。

## 运算符优先级_[详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

# **语法特性**

## [解构赋值-Destructuring assignment](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```js
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // parentheses are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
```



```js
function drawES2015Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, cords, radius);
    // do some chart drawing
}

drawES2015Chart({
    cords: {x: 18, y: 30},
    radius: 30
});
```

# 函数-function

## 函数特性

javaScript的函数是(主要)基于词法作用域(lexical scoping)的顶级对象

## 基础语义

> Lambda, Lisp, Scheme

**函数声明**定义一个具有指定参数的函数。

你还可以使用  [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Function) 构造函数和
一个[`function expression`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function) 定义函数。

### 典型说明

```js
// 函数声明
function name() {
};

// 函数表达式

var name = function () {
};  // 这样的变量相当于是普通的变量, 必须先声明后使用.


// 区别: 函数声明会被提升到当前作用域的顶部, 函数表达式则不会

```

### 语法

```js
function name([param, [, param, [..., param]]]) {
    [statements]
}

// name: 函数名
// param: 要传递给函数的参数的名称。不同引擎中的最大参数数量不同。
// statements: 包含函数体的语句。
```

### 描述

一个被函数声明创建的函数是一个 Function 对象，具有 Function
对象的所有属性、方法和行为。查看 [Function](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function)
以获取 function 的详细信息。

函数也可以被表达式创建（ [function expression](https://developer.mozilla.org/en/JavaScript/Reference/Operators/function) ）

函数可以被有条件来声明，这意味着，在一个 if
语句里，函数声明是可以嵌套的。有的浏览器会将这种有条件的声明看成是无条件的声明，无论这里的条件是true还是false，浏览器都会创建函数。因此，它们不应该被使用。

默认情况下，函数是返回 undefined
的。想要返回一个其他的值，函数必须通过一个 [return](https://developer.mozilla.org/en/JavaScript/Reference/Statements/return)
语句指定返回值。

### 有条件的创建函数

函数可以被有条件来声明，这意味着，函数声明可能出现在一个 if
语句里，但是，这种声明方式在不同的浏览器里可能有不同的效果。因此，不应该在生成环境代码中使用这种声明方式，应该使用函数表达式来代替。

```js
var hoisted = "foo" in this;
console.log(`'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`);
if (false) {
    function foo() {
        return 1;
    }
}

// 在Chrome里: 
// 'foo' 变量名被提升，但是 typeof foo 为 undefined
// 
// 在Firefox里:
// 'foo' 变量名被提升. 但是 typeof foo 为 undefined
//
// 在Edge里:
// 'foo' 变量名未被提升. 而且 typeof foo 为 undefined
// 
// 在Safari里:
// 'foo' 变量名被提升. 而且 typeof foo 为 function
```

注意，即使把上面代码中的 if(false) 改为 if(true)，结果也是一样的

```js
var hoisted = "foo" in this;
console.log(`'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`);
if (true) {
    function foo() {
        return 1;
    }
}

// 在Chrome里: 
// 'foo' 变量名被提升，但是 typeof foo 为 undefined 
// 
// 在Firefox里: 
// 'foo' 变量名被提升. 但是 typeof foo 为 undefined 
// 
// 在Edge里: 
// 'foo' 变量名未被提升. 而且 typeof foo 为 undefined 
// 
// 在Safari里: 
// 'foo' 变量名被提升. 而且 typeof foo 为 function
```

### 函数声明提升

JavaScript 中的**函数声明**被提升到了**函数定义**。你可以在函数声明之前使用该函数:

```js
hoisted(); // "foo"

function hoisted() {
    console.log("foo");
}


/* equal to*/
var hoisted;

hoisted = function () {
    console.log("foo");
}
hoisted();
// "foo" 
```

注意 :**函数表达式
**[`function expressions`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
不会被提升:

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
    console.log("bar");
};
```

# 构造函数_Function

每个 JavaScript 函数实际上都是一个 `Function` 对象。运行 `(function(){}).constructor === Function // true` 便可以得到这个结论。

## 定义

**`Function` 构造函数**创建一个新的 `Function` **对象**
。直接调用此构造函数可用动态创建函数，但会遇到和 [`eval`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/eval)
类似的的安全问题和(相对较小的)性能问题。然而，与 `eval` 不同的是，`Function` 创建的函数只能在全局作用域中运行。

## 语法

```js
new Function([arg1[, arg2[, ...argN]
],]
functionBody
)

// arg1, arg2, ... argN  :
#
被函数使用的参数的名称必须是合法命名的。参数名称是一个有效的JavaScript标识符的字符串，或者一个用逗号分隔的有效字符串的列表;
例如“×”，“theValue”，或“a, b”。

// functionBody : 
#
一个含有包括函数定义的
JavaScript
语句的字符串。

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8
```

## 函数声明

## [函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)

相当于是一个事件, 一个行为, 一个动作. 调用该函数变量时, 就会执行一条命令

**`function`** 关键字可以用来在一个表达式中定义一个函数。

你也可以使用 [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)
构造函数和一个[函数声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function)来定义函数。

# 对象_Object

 JavaScript的简单数据类型包括数字、字符串、布尔值（true和false）、null值和undefined值。其他所有的值都是对象。数字、字符串和布尔值“貌似”对象，因为它们拥有方法，但它们是不可变的。

JavaScript中的对象是可变的键控集合（keyed collections）。在JavaScript中，数组是对象，函数是对象，正则表达式是对象，当然，对象自然也是对象。

**对象是属性的容器，其中每个属性都拥有名字和值。**属性的名字可以是包括空字符串在内的任意字符串。属性值可以是除undefined值之外的任何值。
JavaScript里的对象是无类型（class-free）的。它对新属性的名字和属性的值没有限制。对象适合用于汇集和管理数据。对象可以包含其他对象，所以它们可以容易地表示成树状或图形结构。
JavaScript包含一种原型链的特性，允许对象继承另一个对象的属性。正确地使用它能减少对象初始化时消耗的时间和内存。

## 对象字面量Object Literals

对象字面量提供了一种非常方便地创建新对象值的表示法。一个对象字面量就是包围在一对花括号中的零或多个“名/值”对。对象字面量可以出现在任何允许表达式出现的地方。

    var empty_object = {};
    
    var stooge = {
       "first-name": "Jerome",
       "last-name": "Howard"
    };

**属性名可以是包括空字符串在内的任何字符串。**
在对象字面量中，如果属性名是一个合法的JavaScript标识符且不是保留字，则并不强制要求用引号括住属性名。所以用引号括住"
first-name"是必需的，但是否括住first_name则是可选的(1)。逗号用来分隔多个“名/值”对。
属性的值可以从包括另一个对象字面量在内的任意表达式中获得。对象是可嵌套的：

    var flight = {
       airline: "Oceanic",
       number: 815,
       departure: {
          IATA: "SYD",
          time: "2004-09-22 14:55",
          city: "Sydney"
       },
       arrival: {
          IATA: "LAX",
          time: "2004-09-23 10:42",
          city: "Los Angeles"
       }
    };

# **数组**_Array

[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

数组遍历_[forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## 常见需求

### 数组去重

在ES6的时代，有个非常快速且简单的方法，使用new Set()以及Array.from()或者展开运算符(...)

```js
// 核心思路, 集合去重, 然后使用...展开, 或者Array.from添加到新的
var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"]

// 方法一
var uniqueFruits = Array.from(new Set(fruits))

// 方法二
var uniqueFruits2 = [...new Set(fruits)]
```

### 数组替换

日常开发中经常需要替换或者删除一些指定的数据，遇到这种场景时一定要联想到Array.protoType.splice这个方法。

传参时稍微复杂点，第一个参数是开始的索引，第二个参数是需要删除的数量，剩下的就是需要添加的值（可以是一个或者多个）。

```js
var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"]

// 修改原数组, 返回被替换的数据, args为添加(插入)的n个参数自, 
fruits.splice(0, 2, 'potato', 'tomato')
```

### 数组遍历

```js
var friends = [
    {name: 'John', age: 22},
    {name: 'Peter', age: 23},
    {name: 'Mark', age: 24},
    {name: 'Maria', age: 22},
    {name: 'Monica', age: 21},
    {name: 'Martha', age: 19},
]
// 方法一 Array.from
var friendsNames = Array.from(friends, ({name}) => name)
console.log(friendsNames)

// 方法二 forEach

// 方法三 for

// 方法四 map循环

// 方法五 for...of 支持响应break, continue, return
```

### 数组清空

有时我们需要清空一个数组，比如用户点击了清空购物车。

可以一条一条地删除，但是很少有这么可爱的程序员，哈哈。

其实一行代码就能搞定，那就是直接将之length设置成0

```js
var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"]

// 方法一(推荐)
fruits.length = 0

// 方法二 (性能最差)
fruits = []


// 方法三
fruits.splice(0)
```

### 数组转对象

有时候需要将数组转换成对象的形式，使用.map()一类的迭代方法能达到目的。

这里还有个更快的方法，前提是你正好希望对象的key就是数组的索引

```js
var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"]

// ...展开运算符推荐
var fruitsObj = {...fruits}

// Array.map() 方法
let obj = {}
let arr = ['a', 'b', 'c']
arr.map((x, i) => obj[i] = x)
```

### 数组填充

```js
let arr = new Array(10).fill(1)
```

### 数组合并

```js
var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"]
var meats = ["poultry", "beef", "fish"];
var vegetables = ["potato", "tomato", "cucumber"]


// 方法一 推荐
let foods = [...fruits, ...meats, ...vegetables]

// 方法二
let foods = fruits.concat(meats).concat(vegetables)
```

### 数组交集

```js


var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];
var duplicatedValues = […new Set(numOne)
].
filter(item => numTwo.includes(item));
console.log(duplicatedValues);
```

### 其他需求

```js
// 去除价值
var mixedArr = [0, “blue”, “”,
NaN, 9, true, undefined, “white”,
false
]
;
var trueArr = mixedArr.filter(Boolean);
console.log(trueArr); // returns [“blue”, 9, true, “white”]

//随机值
colors = ["blue", "white", "green", "navy", "pink", "purple", "orange", "yellow", "black", "brown"]
var randomColor = colors[(Math.floor(Math.random() * (colors.length)))]

//倒序
colors = ["blue", "white", "green", "navy", "pink", "purple", "orange", "yellow", "black", "brown"]
var reversedColors = colors.reverse();

//是否存在于数组中
var nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
var lastIndex = nums.lastIndexOf(5);
nums.includes(13)  // 推荐
var nums
.
indexOf(13) // 如果不存在, 返回-1, 存在返回索引

//数组求和
var nums = [1, 5, 2, 6];
var sum = nums.reduce((x, y) => x + y);
console.log(sum); // returns 14
```

# 关键字_Keyword

## new

**`new` 运算符**创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。**`new`** 关键字会进行如下的操作：

1. 创建一个空的简单JavaScript对象（即`**{}**`）；
2. 链接该对象（即设置该对象的构造函数）到另一个对象 ； <u>将空对象的原型指向了构造函数的prototype属性。</u>
3. 将步骤1新创建的对象作为`this`的上下文 ；
4. 如果该函数没有返回对象，则返回`this`。

[参考链接](https://juejin.im/entry/584a1c98ac502e006c5d63b8)

**.new 命令**

**3.1：基本原理**

new命令的作用，就是执行一个构造函数，并且返回一个对象实例。使用`new`命令时，它后面的函数调用就不是正常的调用，而是依次执行下面的步骤。

**a：创建一个空对象，作为将要返回的对象实例。**

**b：将空对象的原型指向了构造函数的prototype属性。**

**c：将空对象赋值给构造函数内部的this关键字。**

**d：开始执行构造函数内部的代码。**

也就是说，构造函数内部，this指向的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上。构造函数之所谓构造函数，意思是这个函数的目的就是操作一个空对象（即this对象），将其构造为需要的样子。

以上是new命令的基本原理，这个很重要。以下会用具体实例来验证该原理的过程。

**3.2：基本用法**

new命令的作用，就是调用一个构造函数，并且返回一个对象实例。

```
1     function Keith() {
2         this.height = 180;
3     }
4 
5     var boy = new Keith();
6     console.log(boy.height);　　//180
```

上面代码中通过new命令，让构造函数Keith生成一个对象实例，并赋值给全局变量boy。这个新生成的对象实例，从构造函数Keith中继承了height属性。也就说明了这个对象实例是没有height属性的。在new命令执行时，就代表了新生成的对象实例boy。`this.height`
表示对象实例有一个`height`属性，它的值是180。

使用`new`命令时，根据需要，构造函数也可以接受参数。

```
 1     function Person(name, height) {
 2         this.name = name;
 3         this.height = height;
 4     }
 5 
 6     var boy = new Person('Keith', 180);
 7     console.log(boy.name); //'Keith'
 8     console.log(boy.height); //180
 9 
10     var girl = new Person('Samsara', 160);
11     console.log(girl.name); //'Samsara'
12     console.log(girl.height); //160
```

用以上的一个例子，来对构造函数的特点和new基本原理进行一个梳理。

上面代码中，首先，我们创建了一个构造函数Person，传入了两个参数name和height。构造函数Person内部使用了this关键字来指向将要生成的对象实例。

然后，我们使用new命令来创建了两个对象实例boy和girl。

当我们使用new来调用构造函数时，new命令会创建一个空对象boy，作为将要返回的实例对象。接着，这个空对象的原型会指向构造函数Person的prototype属性。也就是boy.prototype===Person.prototype的。要注意的是空对象指向构造函数Person的prototype属性，而不是指向构造函数本身。然后，我们将这个空对象赋值给构造函数内部的this关键字。也就是说，让构造函数内部的this关键字指向一个对象实例。最后，开始执行构造函数内部代码。

因为对象实例boy和girl是没有name和height属性的，所以对象实例中的两个属性都是继承自构造函数Person中的。这也就说明了构造函数是生成对象的函数，是给对象提供模板的函数。

一个问题，如果我们忘记使用new命令来调用构造函数，直接调用构造函数了，会发生什么？

这种情况下，构造函数就变成了普通函数，并不会生成实例对象。而且由于后面会说到的原因，`this`这时代表全局对象，将造成一些意想不到的结果。

```
1     function Keith() {
2         this.height = 180;
3     }
4 
5     var person = Keith();
6     console.log(person.height); //TypeError: person is undefined
7     console.log(window.height); //180
```

上面代码中，当在调用构造函数Keith时，忘记加上new命令。结果是this指向了全局作用域，height也就变成了全局变量。而变量person变成了undefined。

因此，应该非常小心，避免出现不使用`new`命令、直接调用构造函数的情况。

为了保证构造函数必须与`new`命令一起使用，一个解决办法是，在构造函数内部使用严格模式，即第一行加上`use strict`。

```
1     function Person(name, height) {
2         'use strict';
3         this.name = name;
4         this.height = height;
5     }
6     var boy = Person();
7     console.log(boy) //TypeError: name is undefined
```

上面代码的`Person`为构造函数，`use strict`命令保证了该函数在严格模式下运行。由于在严格模式中，函数内部的`this`
不能指向全局对象。如果指向了全局，this默认等于`undefined`，导致不加`new`调用会报错（JavaScript不允许对`undefined`添加属性）。

另一个解决办法，是在构造函数内部判断是否使用`new`命令，如果发现没有使用，则直接返回一个实例对象。

```
1     function Person(name, height) {
2     if (!(this instanceof Person)) {
3             return new Person(name, height);
4         }
5         this.name = name;
6         this.height = height;
7     }
8     var boy = Person('Keith');
9     console.log(boy.name) //'Keith'
```

上面代码中的构造函数，不管加不加`new`命令，都会得到同样的结果。

如果构造函数内部有`return`语句，而且`return`后面跟着一个复杂数据类型（对象，数组等），`new`命令会返回`return`
语句指定的对象；如果return语句后面跟着一个简单数据类型（字符串，布尔值，数字等），则会忽略return语句，返回this对象。

```
 1     function Keith() {
 2         this.height = 180;
 3         return {
 4             height: 200
 5         };
 6     }
 7     var boy = new Keith();
 8     console.log(boy.height); //200
 9 
10     function Keith() {
11         this.height = 100;
12         return 200;
13     }
14     var boy = new Keith();
15     console.log(boy.height); //100
```

另一方面，如果对普通函数（内部没有`this`关键字的函数）使用`new`命令，则会返回一个空对象。

```
1     function Keith() {
2         return 'this is a message';
3     }
4     var boy = new Keith();
5     console.log(boy); // Keith {}
```

上面代码中，对普通函数Keith使用new命令，会创建一个空对象。这是因为`new`命令总是返回一个对象，要么是实例对象，要么是`return`
语句指定的对象或数组。本例中，`return`语句返回的是字符串，所以`new`命令就忽略了该语句。

## let

> 同一个作用域中, 只能被声明一次, 但是可以被多次修改, 但是仅在 当前作用域有效

## const

> 只能被引用, 不能被赋值, 不能被重新声明.

常量是块级作用域，很像使用 [let](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)
语句定义的变量。常量的值不能通过重新赋值来改变，并且不能重新声明。

```js
const number = 42;

try {
    number = 99;
} catch (err) {
    console.log(err);
    // expected output: TypeError: invalid assignment to const `number'
    // Note_error messages will vary depending on browser
}

console.log(number);
// expected output: 42

```

### syntax

```js
const name1 = value1 [, name2 = value2 [, ...
[, nameN = valueN]
]]
;
```

- `nameN`

  常量名称，可以是任意合法的[标识符](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)。

- `valueN`

  常量值，可以是任意合法的[表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)。

### 描述_Description

此声明创建一个常量，其作用域可以是全局或本地声明的块。 与`var`
变量不同，全局常量不会变为窗口对象的属性。需要一个常数的初始化器；也就是说，您必须在声明的同一语句中指定它的值（这是有道理的，因为以后不能更改）。

<u>常量在声明的时候, 必须初始化</u>

**`const`** **声明**创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。例如，在引用内容是对象的情况下，这意味着可以改变对象的内容（例如，其参数）。

关于“[暂存死区](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)
”的所有讨论都适用于`let`和`const`。

一个常量不能和它所在作用域内的其他变量或函数拥有相同的名称。

### 示例_Examples

下面的例子演示了常量的特性。在浏览器的控制台试一下这个例子。

```js
// 注意: 常量在声明的时候可以使用大小写，但通常情况下全部用大写字母。 

// 定义常量MY_FAV并赋值7
const MY_FAV = 7;

// 报错
MY_FAV = 20;

// 输出 7
console.log("my favorite number is: " + MY_FAV);

// 尝试重新声明会报错 
const MY_FAV = 20;

//  MY_FAV 保留给上面的常量，这个操作会失败
var MY_FAV = 20;

// 也会报错
let MY_FAV = 20;

// 注意块范围的性质很重要
if (MY_FAV === 7) {
    // 没问题，并且创建了一个块作用域变量 MY_FAV
    // (works equally well with let to declare a block scoped non const variable)
    let MY_FAV = 20;

    // MY_FAV 现在为 20
    console.log('my favorite number is ' + MY_FAV);

    // 这被提升到全局上下文并引发错误
    var MY_FAV = 20;
}

// MY_FAV 依旧为7
console.log("my favorite number is " + MY_FAV);

// 常量要求一个初始值
const FOO; // SyntaxError: missing = in const declaration

// 常量可以定义成对象
const MY_OBJECT = {"key": "value"};

// 重写对象和上面一样会失败
MY_OBJECT = {"OTHER_KEY": "value"};

// 对象属性并不在保护的范围内，下面这个声明会成功执行
MY_OBJECT.key = "otherValue";

// 也可以用来定义数组
const MY_ARRAY = [];
// It's possible to push items into the array
// 可以向数组填充数据
MY_ARRAY.push('A'); // ["A"]
// 但是，将一个新数组赋给变量会引发错误
MY_ARRAY = ['B']
```

## [export](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)_导出

> 相当于是定义了一个可导出的模块

在创建JavaScript模块时，`export`
语句用于从模块中导出实时绑定的函数、对象或原始值，以便其他程序可以通过 [`import`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
语句使用它们。被导出的绑定值依然可以在本地进行修改。在使用import进行导入时，这些绑定值只能被导入模块所读取，但在export导出模块中对这些绑定值进行修改，所修改的值也会实时地更新。

无论您是否声明，导出的模块都处于[`严格模式`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)。
export语句不能用在嵌入式脚本中。

### 语法

存在两种 exports 导出方式：

1. 命名导出（每个模块包含任意数量）
2. 默认导出（每个模块包含一个）

## [import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)_

静态的`import`
语句用于导入由另一个模块导出的绑定。无论是否声明了 [`strict mode`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
，导入的模块都运行在严格模式下。在浏览器中，`import` 语句只能在声明了 `type="module"` 的 `script` 的标签中使用。

此外，还有一个类似函数的动态 `import()`，它不需要依赖 `type="module"` 的script标签。

在 [script](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script) 标签中使用 `nomodule` 属性，可以确保向后兼容。

在您希望按照一定的条件或者按需加载模块的时候，动态 `import()` 是非常有用的。而静态型的 `import`
是初始化加载依赖项的最优选择，使用静态 `import`
更容易从代码静态分析工具和 [tree shaking](https://developer.mozilla.org/zh-CN/docs/Glossary/Tree_shaking) 中受益。

### 语法

```js
import defaultExport from "module-name";
import * as name from "module-name";
import {export} from "module-name";
import {export as alias} from "module-name";
import {export1, export2} from "module-name";
import {foo, bar} from "module-name/path/to/specific/un-exported/file";
import {export1, export2 as alias2,

[...]
}
from
"module-name";
import defaultExport, {

export
[, [...]]
}
from
"module-name";
import defaultExport, * as name from "module-name";
import "module-name";

var promise = import("module-name");//这是一个处于第三阶段的提案。
```

- `defaultExport`

  导入模块的默认导出接口的引用名。

- `module-name`

  要导入的模块。通常是包含目标模块的`.js`文件的相对或绝对路径名，可以不包括`.js`
  扩展名。某些特定的打包工具可能允许或需要使用扩展或依赖文件，它会检查比对你的运行环境。只允许单引号和双引号的字符串。

- `name`

  导入模块对象整体的别名，在引用导入模块时，它将作为一个命名空间来使用。

- `export, exportN`

  被导入模块的导出接口的名称。

- `alias, aliasN`

  将引用指定的导入的名称。

## this_[指针](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

与其他语言相比，**函数的 `this` 关键字**在 JavaScript
中的表现略有不同，此外，在[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
和非严格模式之间也会有一些差别。

在绝大多数情况下，函数的调用方式决定了`this`的值。`this`不能在执行期间被赋值，并且在每次函数被调用时`this`
的值也可能会不同。ES5引入了[bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
方法来设置函数的`this`值，而不用考虑函数如何被调用的，ES2015 引入了支持`this`
词法解析的箭头函数（它在闭合的执行环境内设置`this`的值）。

### 语法

```
this
```

#### 值

**当前执行代码的环境对象**，在非严格模式下，总是指向一个对象，在严格模式下可以是任意值

### 全局环境

无论是否在严格模式下，在全局执行环境中（在任何函数体外部）`this` 都指向全局对象。

```js
// 在浏览器中, window 对象同时也是全局对象：
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

**Note:**
你可以使用 [`globalThis`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
获取全局对象，无论你的代码是否在当前上下文运行。

### 函数（运行内）环境

在函数内部，`this`的值取决于函数被调用的方式。

### 简单调用

因为下面的代码不在严格模式下，且 `this` 的值不是由该调用设置的，所以 `this` 的值默认指向全局对象。

```js
function f1() {
    return this;
}

//在浏览器中：
f1() === window;   //在浏览器中，全局对象是window

//在Node中：
f1() === global;   
```

然而，在严格模式下，`this`将保持他进入执行环境时的值，所以下面的`this`将会默认为`undefined`。

```js
function f2() {
    "use strict"; // 这里是严格模式
    return this;
}

f2() === undefined; // true
```

所以，在**严格模式**下，如果 `this` 没有被执行环境（execution context）定义，那它将保持为 `undefined`。

在第二个例子中，`this`的确应该是[undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined)，因为`f2`
是被直接调用的，而不是作为对象的属性或方法调用的（如 `window.f2()`
）。有一些浏览器最初在支持[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
时没有正确实现这个功能，于是它们错误地返回了`window`对象。

如果要想把 `this` 的值从一个环境传到另一个，就要用 `call` 或者`apply` 方法。

```js
// 将一个对象作为call和apply的第一个参数，this会被绑定到这个对象。
var obj = {a: 'Custom'};

// 这个属性是在global对象定义的。
var a = 'Global';

function whatsThis(arg) {
    return this.a;  // this的值取决于函数的调用方式
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'
```

当一个函数在其主体中使用 `this` 关键字时，可以通过使用函数继承自`Function.prototype` 的 `call` 或 `apply` 方法将 `this`
值绑定到调用中的特定对象。

```js
function add(c, d) {
    return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// 第一个参数是作为‘this’使用的对象
// 后续参数作为参数传递给函数调用
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// 第一个参数也是作为‘this’使用的对象
// 第二个参数是一个数组，数组里的元素用作函数调用中的参数
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

使用 `call` 和 `apply` 函数的时候要注意，如果传递给 `this` 的值不是一个对象，JavaScript 会尝试使用内部 `ToObject`
操作将其转换为对象。因此，如果传递的值是一个原始值比如 `7` 或 `'foo'`
，那么就会使用相关构造函数将它转换为对象，所以原始值 `7` 会被转换为对象，像 `new Number(7)` 这样，而字符串 `'foo'`
转化成 `new String('foo')` 这样，例如：

```js
function bar() {
    console.log(Object.prototype.toString.call(this));
}

//原始值 7 被隐式转换为对象
bar.call(7); // [object Number]
bar.call('foo'); // [object String]
```

### `bind`方法

ECMAScript 5
引入了 [`Function.prototype.bind()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
。调用`f.bind(someObject)`会创建一个与`f`具有相同函数体和作用域的函数，但是在这个新函数中，`this`将永久地被绑定到了`bind`
的第一个参数，无论这个函数是如何被调用的。

```js
function f() {
    return this.a;
}

var g = f.bind({a: "azerty"});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind只生效一次！
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

### 箭头函数

在[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)中，`this`
与封闭词法环境的`this`保持一致。在全局代码中，它将被设置为全局对象：

```js
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

注意：如果将`this`传递给`call`、`bind`、或者`apply`
来调用箭头函数，它将被忽略。不过你仍然可以为调用添加参数，不过第一个参数（`thisArg`）应该设置为`null`。

```js
// 接着上面的代码
// 作为对象的一个方法调用
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true

// 尝试使用call来设定this
console.log(foo.call(obj) === globalObject); // true

// 尝试使用bind来设定this
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

无论如何，`foo` 的 `this`
被设置为他被创建时的环境（在上面的例子中，就是全局对象）。这同样适用于在其他函数内创建的箭头函数：这些箭头函数的`this`
被设置为封闭的词法环境的。

```js
// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
    bar: function () {
        var x = (() => this);
        return x;
    }
};

// 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
// 将返回的函数的引用赋值给fn。
var fn = obj.bar();

// 直接调用fn而不设置this，
// 通常(即不使用箭头函数的情况)默认为全局对象
// 若在严格模式则为undefined
console.log(fn() === obj); // true

// 但是注意，如果你只是引用obj的方法，
// 而没有调用它
var fn2 = obj.bar;
// 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
console.log(fn2()() == window); // true
```

在上面的例子中，一个赋值给了 `obj.bar`的函数（称为匿名函数 A），返回了另一个箭头函数（称为匿名函数 B）。因此，在 `A`
调用时，函数B的`this`被永久设置为obj.bar（函数A）的`this`。当返回的函数（函数B）被调用时，它`this`
始终是最初设置的。在上面的代码示例中，函数B的`this`被设置为函数A的`this`
，即obj，所以即使被调用的方式通常将其设置为 `undefined` 或全局对象（或者如前面示例中的其他全局执行环境中的方法），它的 `this`
也仍然是 `obj` 。

### 作为对象的方法

当函数作为对象里的方法被调用时，它们的 `this` 是调用该函数的对象。

下面的例子中，当 `o.f()`被调用时，函数内的`this`将绑定到`o`对象。

```js
var o = {
    prop: 37,
    f: function () {
        return this.prop;
    }
};

console.log(o.f()); // 37
```

请注意，这样的行为，根本不受函数定义方式或位置的影响。在前面的例子中，我们在定义对象`o`的同时，将函数内联定义为成员 `f`
。但是，我们也可以先定义函数，然后再将其附属到`o.f`。这样做会导致相同的行为：

```js
var o = {prop: 37};

function independent() {
    return this.prop;
}

o.f = independent;

console.log(o.f()); // 37
```

这表明函数是从`o`的`f`成员调用的才是重点。

同样，`this` 的绑定只受最靠近的成员引用的影响。在下面的这个例子中，我们把一个方法`g`当作对象`o.b`
的函数调用。在这次执行期间，函数中的`this`将指向`o.b`。事实证明，这与他是对象 `o` 的成员没有多大关系，最靠近的引用才是最重要的。

```
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42
```

#### 原型链中的 `**this**`

对于在对象原型链上某处定义的方法，同样的概念也适用。如果该方法存在于一个对象的原型链上，那么`this`
指向的是调用这个方法的对象，就像该方法在对象上一样。

```js
var o = {
    f: function () {
        return this.a + this.b;
    }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

在这个例子中，对象`p`没有属于它自己的`f`属性，它的f属性继承自它的原型。虽然在对 `f` 的查找过程中，最终是在 `o` 中找到 `f`
属性的，这并没有关系；查找过程首先从 `p.f` 的引用开始，所以函数中的 `this` 指向`p`。也就是说，因为`f`是作为`p`
的方法调用的，所以它的`this`指向了`p`。这是 JavaScript 的原型继承中的一个有趣的特性。

#### getter 与 setter 中的 `this`

再次，相同的概念也适用于当函数在一个 `getter` 或者 `setter` 中被调用。用作 `getter` 或 `setter` 的函数都会把 `this`
绑定到设置或获取属性的对象。

```js
function sum() {
    return this.a + this.b + this.c;
}

var o = {
    a: 1,
    b: 2,
    c: 3,
    get average() {
        return (this.a + this.b + this.c) / 3;
    }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable: true, configurable: true
});

console.log(o.average, o.sum); // logs 2, 6
```

### 作为构造函数

当一个函数用作构造函数时（使用[new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
关键字），它的`this`被绑定到正在构造的新对象。

虽然构造器返回的默认值是`this`所指的那个对象，但它仍可以手动返回其他的对象（如果返回值不是一个对象，则返回`this`对象）。

```js
/*
 * 构造函数这样工作:
 *
 * function MyConstructor(){
 *   // 函数实体写在这里
 *   // 根据需要在this上创建属性，然后赋值给它们，比如：
 *   this.fum = "nom";
 *   // 等等...
 *
 *   // 如果函数具有返回对象的return语句，
 *   // 则该对象将是 new 表达式的结果。 
 *   // 否则，表达式的结果是当前绑定到 this 的对象。
 *   //（即通常看到的常见情况）。
 * }
 */

function C() {
    this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2() {
    this.a = 37;
    return {a: 38};
}

o = new C2();
console.log(o.a); // logs 38
```

在刚刚的例子中（`C2`），因为在调用构造函数的过程中，手动的设置了返回对象，与`this`
绑定的默认对象被丢弃了。（这基本上使得语句 “`this.a = 37;`”成了“僵尸”代码，实际上并不是真正的“僵尸”，这条语句执行了，但是对于外部没有任何影响，因此完全可以忽略它）。

### 作为一个DOM事件处理函数

当函数被用作事件处理函数时，它的`this`指向触发事件的元素（一些浏览器在使用非`addEventListener`的函数动态添加监听函数时不遵守这个约定）。

```js
// 被调用时，将关联的元素变成蓝色
function bluify(e) {
    console.log(this === e.currentTarget); // 总是 true

    // 当 currentTarget 和 target 是同一个对象时为 true
    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName('*');

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', bluify, false);
}
```

### 作为一个内联事件处理函数

当代码被内联[on-event 处理函数](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Event_handlers)
调用时，它的`this`指向监听器所在的DOM元素：

```html

<button onclick="alert(this.tagName.toLowerCase());">
    Show this
</button>
```

上面的 alert 会显示`button`。注意只有外层代码中的`this`是这样设置的：

```html

<button onclick="alert((function(){return this})());">
    Show inner this
</button>
```

在这种情况下，没有设置内部函数的`this`，所以它指向 global/window 对象（即非严格模式下调用的函数未设置`this`时指向的默认对象）。

# 词法文法_Lexical

# 直接量_Literal

> 字面值,字面量, 直接量



# **最佳实践**

- 代码块内容和对象字面量的缩进(indent)采用 `4个空格`
- `if` 和 `()` 中间添加空格, 
- 每行最多放一条语句, 一行里放多条语句可能会被误读
- 如果一个语句一行放不下，我会在一个冒号或二元运算符后拆开它，这将更好地防止自动插入分号的机制掩盖复制/粘贴的错误
- 把{放在一行的结尾而不是下一行的开头，因为它会避免JavaScript的return语句中的一个可怕的设计错误。
- **对一个脚本应用或工具库，我只用唯一一个全局变量。每个对象都有它自己的命名空间，所以我很容易使用对象去管理代码。使用闭包能提供进一步的信息隐藏，增强我的模块的健壮性**
- 不要使用 `var` 声明, 变量声明使用 `let` 和 `const`. 



## 静态服务器

```shell
npm install -g http-server
npm install -g serve
python -m http.server
```



# 常见需求

```js
// 设置属性值, 修改属性值
window.location = "http://www.baidu.com"  // 执行到该代码时, 跳转到链接

// 属性获取

// 获取元素, 执行相应的代码和功能
$() // jquery快速选择器 

// 设置变量
var timestamp = document.getElementById("timestap")


```

# 常见问题

## 开发中遇到的问题

- html中文件引入时, 需要注意顺序
    - 比如 element 依赖 vue, 需要先引入vue 再引入element

## JavaScript面试题

- 描述以下变量的区别：`null`, `undefined` 和 `undeclared`
    - `null` : *没有对象*, 空值. 即该处不应该有值，转为数值时为0。典型用法是：
        - 作为函数的参数，表示该函数的参数不是对象。
        - 作为对象原型链的终点。
    - `undefined`: *变量未定义*, 缺少值. 就是此处应该有一个值，但是还没有定义，转为数值时为NaN。典型用法是：
        - （1）变量被声明了，但没有赋值时，就等于undefined。
        - （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
        - （3）对象没有赋值的属性，该属性的值为undefined。
        - （4）函数没有返回值时，默认返回undefined。
    - `undeclared`: 变量未声明, js语法错误，没有声明直接使用，js无法找到对应的上下文。
- 异常捕获
    - 当出现未捕获的异常时, 和Python一样, 程序会中断执行.
    - 同层级的其它代码块则不受影响.

# **API接口**

## Browser

window navigator Screen HISTORY, Location

## Window

```js
window //窗口自身
window.self //引用本窗户window=window.self
window.name //为窗口命名
window.defaultStatus //设定窗户状态栏信息
window.location //URL地址，配备布置这个属性可以打开新的页面

对象方法
window.alert("text") //提示信息会话框
window.confirm("text") //确认会话框
window.prompt("text") //要求键盘输入会话框
window.setIntervel("action", time) //每一隔指定的时间(毫秒)就执行一次操作
window.clearInterval() //清除时间配备布置作用就是终止轮回
window.setTimeout(action, time) //隔了指定的时间(毫秒)执行一次操作
window.open() //打开新的窗口
window.close() //关闭窗口

成员对象
window.event
window.document //见document对象详解
window.history
window.screen
window.navigator
window.external
---------------------------------------------------------------------
    window.history对象
window.history.length //浏览过的页面数
history.back() //后退
history.forward() //前进
history.go(i) //前进或后退到历史记录的第i个页面
//i>0进步,i<0 后退
--------------------------------------------------------------------
    window.screen对象
window.screen.width //屏幕宽度
window.screen.height //屏幕高度
window.screen.colorDepth //屏幕色深
window.screen.availWidth //可用宽度
window.screen.availHeight //可用高度(除去任务栏的高度)
---------------------------------------------------------------------
    window.external对象
window.external.AddFavorite("地址", "标题") //把网站新增到保藏夹
---------------------------------------------------------------------
    window.navigator对象
window.navigator.appCodeName //浏览器代码名
window.navigator.appName //浏览器应用程序名
window.navigator.appMinorVersion //浏览器补丁版本
window.navigator.cpuClass //cpu类型 x86
window.navigator.platform //操作体系类型 win32
window.navigator.plugins
window.navigator.opsProfile
window.navigator.userProfile
window.navigator.systemLanguage //客户体系语言 zh-cn简体中文
window.navigator.userLanguage //用户语言,同上
window.navigator.appVersion //浏览器版本
window.navigator.userAgent
window.navigator.onLine //用户否在线
window.navigator.cookieEnabled //浏览器是否撑持cookie
window.navigator.mimeTypes
```

## DOM / document

document, element, attribute, event

文档, 元素, 属性, 事件

```js
document.title                 //设置文档标题等价于HTML的<title>标签
document.bgColor               //设置页面背景色
document.fgColor               //设置前景色(文本颜色)
document.linkColor             //未点击过的链接颜色
document.alinkColor            //激活链接(焦点在此链接上)的颜色
document.vlinkColor            //已点击过的链接颜色
document.URL                   //设置URL属性从而在同一窗口打开另一网页
document.fileCreatedDate       //文件建立日期，只读属性
document.fileModifiedDate      //文件修改日期，只读属性
document.fileSize              //文件大小，只读属性
document.cookie                //设置和读出cookie
document.charset               //设置字符集 简体中文:gb2312

常用对象方法
document.write()                      //动态向页面写入内容
document.createElement(Tag)           //创建一个html标签对象
document.getElementById(ID)           //获得指定ID值的对象
document.getElementsByName(Name)      //获得指定Name值的对象
document.body.appendChild(oTag)
body - 主体子对象
document.body                   //指定文档主体的开始和结束等价于<body></body>
document.body.bgColor           //设置或获取对象后面的背景颜色
document.body.link              //未点击过的链接颜色
document.body.alink             //激活链接(焦点在此链接上)的颜色
document.body.vlink             //已点击过的链接颜色
document.body.text              //文本色
document.body.innerText         //设置<body>...</body>之间的文本
document.body.innerHTML         //设置<body>...</body>之间的HTML代码
document.body.topMargin         //页面上边距
document.body.leftMargin        //页面左边距
document.body.rightMargin       //页面右边距
document.body.bottomMargin      //页面下边距
document.body.background        //背景图片
document.body.appendChild(oTag) //动态生成一个HTML对象
常用对象事件
document.body.οnclick = "func()"              //鼠标指针单击对象是触发
document.body.οnmοuseοver = "func()"          //鼠标指针移到对象时触发
document.body.οnmοuseοut = "func()"           //鼠标指针移出对象时触发
location - 位置子对象
document.location.hash          // #号后的部分
document.location.host          // 域名+端口号
document.location.hostname      // 域名
document.location.href          // 完整URL
document.location.pathname      // 目录部分
document.location.port          // 端口号
document.location.protocol      // 网络协议(http:)
document.location.search        // ?号后的部分

常用对象事件
documeny.location.reload()          //刷新网页
document.location.reload(URL)       //打开新的网页
document.location.assign(URL)       //打开新的网页
document.location.replace(URL)      //打开新的网页
=== === === === === === === === === === === === === === === === === === === === === === === ===
selection - 选区子对象
document.selection
=== === === === === === === === === === === === === === === === === === === === === === === ===
images集合(页面中的图象)
:
----------------------------
    a
)
通过集合引用
document.images                 //对应页面上的<img>标签
document.images.length          //对应页面上<img>标签的个数
document.images[0]              //第1个<img>标签           
document.images[i]              //第i-1个<img>标签
----------------------------
    b
)
通过nane属性直接引用
< img
name = "oImage" >
    document.images.oImage          //document.images.name属性
----------------------------
    c
)
引用图片的src属性
document.images.oImage.src      //document.images.name属性.src
```

### Element-元素

### Event_事件

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。

事件通常与函数结合使用，函数不会在事件发生前被执行！

| 属性                                                                     | 此事件发生在何时...        |
|:-----------------------------------------------------------------------|:-------------------|
| [onabort](https://www.w3school.com.cn/jsref/event_onabort.asp)         | 图像的加载被中断。          |
| [*onblur*](https://www.w3school.com.cn/jsref/event_onblur.asp)         | 元素失去焦点。            |
| [onchange](https://www.w3school.com.cn/jsref/event_onchange.asp)       | 域的内容被改变。           |
| [*onclick*](https://www.w3school.com.cn/jsref/event_onclick.asp)       | 当用户点击某个对象时调用的事件句柄。 |
| [ondblclick](https://www.w3school.com.cn/jsref/event_ondblclick.asp)   | 当用户双击某个对象时调用的事件句柄。 |
| [onerror](https://www.w3school.com.cn/jsref/event_onerror.asp)         | 在加载文档或图像时发生错误。     |
| [onfocus](https://www.w3school.com.cn/jsref/event_onfocus.asp)         | 元素获得焦点。            |
| [onkeydown](https://www.w3school.com.cn/jsref/event_onkeydown.asp)     | 某个键盘按键被按下。         |
| [onkeypress](https://www.w3school.com.cn/jsref/event_onkeypress.asp)   | 某个键盘按键被按下并松开。      |
| [onkeyup](https://www.w3school.com.cn/jsref/event_onkeyup.asp)         | 某个键盘按键被松开。         |
| [onload](https://www.w3school.com.cn/jsref/event_onload.asp)           | 一张页面或一幅图像完成加载。     |
| [onmousedown](https://www.w3school.com.cn/jsref/event_onmousedown.asp) | 鼠标按钮被按下。           |
| [onmousemove](https://www.w3school.com.cn/jsref/event_onmousemove.asp) | 鼠标被移动。             |
| [onmouseout](https://www.w3school.com.cn/jsref/event_onmouseout.asp)   | 鼠标从某元素移开。          |
| [onmouseover](https://www.w3school.com.cn/jsref/event_onmouseover.asp) | 鼠标移到某元素之上。         |
| [onmouseup](https://www.w3school.com.cn/jsref/event_onmouseup.asp)     | 鼠标按键被松开。           |
| onreset                                                                | 重置按钮被点击。           |
| onresize                                                               | 窗口或框架被重新调整大小。      |
| onselect                                                               | 文本被选中。             |
| [onsubmit](https://www.w3school.com.cn/jsref/event_onsubmit.asp)       | 确认按钮被点击。           |
| [onunload](https://www.w3school.com.cn/jsref/event_onunload.asp)       | 用户退出页面。            |

## 鼠标 / 键盘属性

| 属性                                                                         | 描述                        |
|:---------------------------------------------------------------------------|:--------------------------|
| [altKey](https://www.w3school.com.cn/jsref/event_altkey.asp)               | 返回当事件被触发时，"ALT" 是否被按下。    |
| [button](https://www.w3school.com.cn/jsref/event_button.asp)               | 返回当事件被触发时，哪个鼠标按钮被点击。      |
| [clientX](https://www.w3school.com.cn/jsref/event_clientx.asp)             | 返回当事件被触发时，鼠标指针的水平坐标。      |
| [clientY](https://www.w3school.com.cn/jsref/event_clienty.asp)             | 返回当事件被触发时，鼠标指针的垂直坐标。      |
| [ctrlKey](https://www.w3school.com.cn/jsref/event_ctrlkey.asp)             | 返回当事件被触发时，"CTRL" 键是否被按下。  |
| [metaKey](https://www.w3school.com.cn/jsref/event_metakey.asp)             | 返回当事件被触发时，"meta" 键是否被按下。  |
| [relatedTarget](https://www.w3school.com.cn/jsref/event_relatedtarget.asp) | 返回与事件的目标节点相关的节点。          |
| [screenX](https://www.w3school.com.cn/jsref/event_screenx.asp)             | 返回当某个事件被触发时，鼠标指针的水平坐标。    |
| [screenY](https://www.w3school.com.cn/jsref/event_screeny.asp)             | 返回当某个事件被触发时，鼠标指针的垂直坐标。    |
| [shiftKey](https://www.w3school.com.cn/jsref/event_shiftkey.asp)           | 返回当事件被触发时，"SHIFT" 键是否被按下。 |



## Fetch API

```js


async function logMovies() {
  const response = await fetch("http://127.0.0.1:8002/info");
  const movies = await response.json();
  console.log(movies);
}
```



## HTML

html对象,一些标签

## CSS

# xpath

XPath（XML Path Language）是一种在 XML 文档中查找信息的语言。它是一种选择器语言，广泛应用于解析和导航 XML 文档。XPath 也可以用于 HTML 文档，因为 HTML 是 XML 的一种应用。Playwright 和其他自动化工具支持 XPath 选择器，以便用户能够查找和操作 HTML 页面上的元素。

### XPath 基本概念

XPath 使用路径表达式在 XML 或 HTML 文档中选择节点。节点可以是元素、属性、文本、处理指令、命名空间等。

### XPath 语法示例

- **绝对路径**： 绝对路径从根节点开始。例如：

    ```
    /html/body/div
    ```
    
- **相对路径**： 相对路径相对于当前节点。例如：

    ```
    
    //div[@class='example']
    ```
    
- **使用条件**： 可以使用方括号 `[]` 来指定条件。例如：

    ```shell
    # //tagname[@attribute='value']: 选择具有特定属性值的所有 tagname 元素。
    //input[@name='username']
    ```
    
- **文本匹配**： 可以使用 `text()` 函数来匹配文本内容。例如：

    ```
    xpath
    Copy code
    //button[text()='Submit']
    ```

- **包含匹配**： 使用 `contains()` 函数来匹配包含特定文本的节点。例如：

    ```
    xpath
    Copy code
    //button[contains(text(), 'Submit')]
    ```

### 使用 XPath 选择器的示例

以下是一些使用 XPath 选择器的示例，这些示例展示了如何在 Playwright 中使用 XPath 选择器来查找和操作页面元素。

#### 示例 1：使用绝对路径

```
python
Copy code
# 选择根节点下的某个 div 元素
page.locator("/html/body/div").click()
```

#### 示例 2：使用相对路径

```
python
Copy code
# 选择具有特定 class 属性的 div 元素
page.locator("//div[@class='example']").click()
```

#### 示例 3：使用属性选择器

```
python
Copy code
# 选择具有特定 name 属性的 input 元素
page.locator("//input[@name='username']").click()
```

#### 示例 4：使用文本匹配

```
python
Copy code
# 选择文本内容为 'Submit' 的按钮元素
page.locator("//button[text()='Submit']").click()
```

#### 示例 5：使用包含匹配

```
python
Copy code
# 选择文本内容包含 'Submit' 的按钮元素
page.locator("//button[contains(text(), 'Submit')]").click()
```

### Playwright 中使用 XPath

在 Playwright 中，可以使用 `locator` 方法与 XPath 选择器一起使用。下面是一个完整的示例，展示如何在 Playwright 中使用 XPath 选择器：

```
python
Copy code
import asyncio
from playwright.async_api import async_playwright

async def run(playwright):
    browser = await playwright.chromium.launch(headless=False)
    context = await browser.new_context()
    page = await context.new_page()

    await page.goto('https://example.com')

    # 使用 XPath 选择器选择并点击元素
    await page.locator("//input[@name='username']").click()
    await page.locator("//button[contains(text(), 'Submit')]").click()

    await browser.close()

async def main():
    async with async_playwright() as playwright:
        await run(playwright)

if __name__ == "__main__":
    asyncio.run(main())
```

### 解释

1. **XPath 选择器**：
    - 使用 `//input[@name='username']` 来选择具有 `name` 属性为 `username` 的 `input` 元素。
    - 使用 `//button[contains(text(), 'Submit')]` 来选择文本内容包含 `Submit` 的按钮元素。
2. **Playwright `locator` 方法**：
    - 使用 `page.locator(xpath_expression)` 来定位元素并执行操作。

通过这种方式，你可以在 Playwright 中灵活地使用 XPath 选择器来查找和操作页面元素。

# JQuery

> 用法 入口函数 如何控制CSS + HTML + JS 选择器 获取索引值
>
> 介绍jquery的加载、jquery选择器、jquery的样式操作、jquery的click事件、jquery动画。

`$` == `Jquery`, 是一个函数

## 基础知识

### 简介

JQuery:  A JavaScript Library JS**函数库** JavaScript框架 也叫JavaScript代码库

jquery其实就是一个外链式的单独的js文件而已

注意: slim 版本不包含ajax和一些效果

写得少做的多, 效果更好, 支持链式编程/链式调用

国内更多用 JQ1.0

js 又叫原生js, 实际工作场景中需要代码量越简单越好, 逻辑思路越清晰越好

```shell
jQuery is a fast, small, and feature-rich JavaScript library. 
It makes things like HTML document 
traversal and manipulation,   # 遍历和操纵
event handling,  # 事件处理
animation,   # 动画
and Ajax 
much simpler with an easy-to-use API that works across a multitude of browsers.
```

jQuery 是一个开放源代码的JavaScript程序库, 简化了HTML文档(更准确地说是文档对象模型 Document Object Model, DOM)
与JavaScript之间的交互. 具体地说, jQuery简化了HTML文档遍历和操纵、浏览器事件处理、DOM动画、Ajax交互和跨浏览器JavaScript开发

工作场景下, 我们一定希望**逻辑越简单越好**, **代码量越少越好**, 开发效率!!

真正的工作岗位下, 做 **行为动作**,**数据交互**, **表单验证** 都不用原生JS,

为什么频繁换语言, 由基础到高级的不断封装

jq 和vue.js 直接就把函数给封装好了, 需要什么功能, 直接**调用**就行了!

**常见作用及应用场景**

- 快速获取页面元素
- 提供漂亮的页面动态效果
- **创建ajax无刷新网页**
- 提供对JavaScript语言的增强
- 增强的事件处理
- 更改网页内容

### JQ用法

一对标签完成一个功能, 所以要分开写

```html
<!-- 使用jquery前需要先引入该jquery函数库 -->

<script src="./js/jquery-3.4.1.slim.js"></script>
<script>
    //自己的jquery代码
</script>
```



### JQ入口函数

**作用**: 保证先执行标签, 再执行Jquery!

**语法**: 选择器.事件属性(匿名函数)

将获取元素的语句写到页面头部，会因为元素还没有加载而出错.

**jquery提供了ready方法解决这个问题，它的速度比原生的 window.onload 更快。**

入口函数: jq的选择函数: 查找功能

$ : 表示 selector 选择器

**jq选择函数:  $()   作用: 查找功能**  类似于document.getElementByID()

作用是保证先执行标签 再执行jquery代码里的内容
一旦dom结构渲染完毕即可执行内部代码

`$(document).ready(function(){})`

$可以理解为是一个函数, ready也是一个方法 : window.onload=function(){}

这表示: 网页文档准备好之后要执行...命令

`$(function(){})`
这是第二种方法

```html
    <!-- 自己的页面找到函数库  .js -->
<script src="jQuery/jquery-1.12.4.min.js"></script>
<script>
    // 自己的jq
    // ? 入口函数  $(目标) -- jq的选择函数：查找功能
    // 当网页文档准备好之后要执行...命令
    $(document).ready(function () {  // 完整写法
        alert(1)
    })   // -- jq事件的语法: 目标.事件属性(匿名函数)

    // 化简 工作中常用的写法  $(匿名函数)
    $(function () {
        alert(2)
    })
</script>
```

### 对比JS和JQ

需求:按钮单击控制隐藏 可以使用hide(time)函数 toggle()  show()

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/jquery-3.4.1.js"></script>
    <script>
        $(function () {
            // $(选择器)   jq选择器包括: 和css一样的选择器,以及jq自己新增的选择器
            $('#btn1').click(function () {
                $('#box').css('display', 'none')

            })
        })
    </script>
    <!-- 通过JS的形式实现 -->
    <!-- <script>
        window.onload = function(){
            var oBtn1 = document.getElementById('btn1')
            var oBox = document.getElementById('box')
            oBtn1.onclick = function(){
                oBox.style.display = 'none'
            }
        }
    </script> -->

</head>
<body>
<!-- <div>这是测试文档</div> -->
<button id="btn1">按钮</button>
<div id='box' style='width:400px;height:80px;border:1px solid #e14;'>这是要被控制的元素</div>
</body>
</html>
```

### JQ控制 HTML 和 CSS

内容html() 写参数表示修改, 不写参数访问元素, 写引号表示删除内容

 $('div').html('aaaa')

样式css css() -- 单属性操作 和 多属性操作

 $('div').css('color','red')

$('div').css({'color':'#e04','font-size':'60px'})

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./jquery-3.4.1.min.js"></script>
    <script>
        $(function () {
                    //内容html() 写参数表示修改, 不写参数访问元素
                    $('div').html('aaaa')
                    // css css() -- 单属性操作 和 多属性操作
                    // 1. 单属性: 控制 和 访问
                    // 2. 多属性: 一次性控制多个css键值对 字典的形式, 字典不是字符串形式
                    $('div').css('color', 'red')
                    alert($('div').css('color'))
                    // 两种方式都可以  font-size = fontSize
                    $('div').css({'color': '#e04', 'font-size': '60px'})
                }
        )
    </script>
</head>
<body>
<div>测试jq</div>
</body>
</html>
```

## 核心思想

- (通过CSS选择器)寻找一些元素, (通过jQuery方法)对其进行某些处理.
  - 

## 核心知识

```js
/*      
1. 选择网页元素
    1.1 css选择器
       _$(document)//选择整个文档
       _$("#myId")//选择ID为myId的网页元素
       _$('div.myClass')//选择class为myClass的div元素
    1.2 jQuery特有的表达式
        -$('a:first')//选择网页中第一个a元素
        -$('tr:odd')//选择表格的奇数行
        -$('div:visible')//选择可见的div元
2. 方法函数化
    1.1 原生的
        -window.onload
        -innerHTML
        -onclick
    1.2 jquery的
        -$()
        -html()
        -click()
3. 原生与jquery的关系
    3.1 原生、jq可以共存
        -$("#div1").html()
        -oDiv.innerHTML
    3.2 原生、jq不能混用
        -$("#div1").innerHTML
        -ODIV.html()
4. 改变结果集
    4.1 强大的过滤器
    -$('div').has('p');//选择包含p标签的div标签
    -$('div').not('.myClass');//选择class不等于myClass的div元素
    -$('div').filter('.myClass');//选择class等于myClass的div元素
4.2 相邻元素查找
    -$('div').next('p');//选择div元素后面的第一个p元素
    -$('div').parent();//选择div元素的父元素
    -$('div').children();//选择div的所有子元素
5. 链式操作
    $('div').find('h3').eq(2).html('hello');
    --找到div元素，选择其中的h3元素，选择第3个h3元素，将它的内容改为Hello

    jQuery还提供了.end()方法，使得结果集可以后退一步
    ------>这个就使得我们可以用一个链式操作，写完一整个效果都没有问题。
6. 取值与赋值合体
    $('h1').html();//html()没有参数，表示取出h1的值
    $('h1').html('hello');//html()没有参数Hello,表示对h1进行赋值

    .val()
    .attr()
    .width()

	取值是一组中的 第一个元素，赋值是所有的元素
7. 元素移形换位
    7.1 直接移动该元素
    -$('div').insertAfter($('p'));//把div元素移动到 p元素后面
    -$('div').appendTo($('p'));//把div元素剪切到p元素的后面
    7.2 移动其他元素
    -$('p').after($('div'));//把p元素加到div元素前边
    -$('div').append($('p'));//把p元素插入到div的里边
    区别：操作的元素不同
8. 强大的创建
    $('#ul').append('<li>aaaa</li>');
    ===
    var oLi  = $('<li>');
    oLi.html('aaaa');
    $("#ul").append(oLi);

    clone()
9. 工具方法（重点）
    9.1 构造函数上的方法
    -$.each([],function(){})
    -$.trim($('div').attr('class'))--去掉class属性的前后空格

    解释：$.方法：添加到构造函数，静态方法
    9.2 原型上的方法
    -$('div').each(function(index,elements){})
    index--索引
    elements--当前所有元素中正在操作的

    demo:
    function $(){
    $.each = function(){
    //构造函数下面的方法:$.each()
    }
    $.prototype.each = function(){
    //原型下面的方法：$('div').each()
    }
    }
10. 事件操作
    10.1 独立事件
   _click()
   _mouseover()
    10.2 通用事件
   _bind();//同一个对象上，可绑定多个事件
   _one();//绑定的事件只可以执行一次
    -unbind();//取消
   _e:event对象
   _pageX等;//鼠标相对于屏幕的坐标，原生中是clientX
   _阻止默认与冒泡;//return false--既可以阻止冒泡又可以阻止默认事件

    demo:toggle--循环执行，后面可以接多个函数
    $('input').toggle(function(){},function(){},function(){})
    hover--$('div').hover(function(){},function(){})
11. 运动效果
    11.1 常见效果
    -.fadeIn();//淡入
    -.fadeOut();//淡出
    -.slideDown();//向下展开
    -.slideUp();//向上卷起
    11.2 复杂效果
    -.animate();//运动
    -.stop();//阻止前面的运动效果，执行当前的运动事件
12. 插件机制(plugins)--demo
	在JQ的源码上进行拓展，一个个做好的应用
13. UI组件（jQuery UI）
    JQ官方提供的功能效果和UI样式
14. 手机、社区、论坛
*/

```

## JQ选择器

jquery选择器可以快速地选择元素，选择规则和css样式相同，使用length属性判断是否选择成功。

**JQ使用思想一: 选择(获取)某个网页元素, 然后对他进行某种操作(事件,函数)**_事件

**jquery用法思想二: 同一个函数的属性完成取值和赋值 **_赋值

获取样式, 设置样式值

jQuery 元素选择器和属性选择器允许您通过标签名、属性名或内容对 HTML 元素进行选择。

选择器允许您对 HTML 元素组或单个元素进行操作。

**特别注意**
选择器获取的多个元素，获取信息获取的是第一个，比如：$("div").css("width")，获取的是第一个div的width。

`ul>li{文字$}*8`

### **选择器转移**

**eq(index)**

prev()迁移

next()下一个元素

nextAll()

find() 查找

| 语法                               | 描述                               |
|:---------------------------------|:---------------------------------|
| $(this)                          | 当前获取的 HTML 元素                    |
| $("p")                           | 所有 \<p> 元素                       |
| $('p').eq(0)                     | p元素中的第一个元素 -1 倒数第一$('li:eq(0)')  |
| $("p .intro")                    | 所有 class="intro" 的 \<p> 元素       |
| $("#intro")                      | id="intro" 的元素                   |
| $('div').has('p')                | 选择包含p元素的div元素(选中父级)              |
| $('div').find('p')               | 选择包含div元素下的p元素(选中子集)             |
| $('div').not('.cls)              | 选择class不等于cls的div元素              |
| $("ul li:first")                 | 每个 \<ul> 的第一个 \<li> 元素 最后一个last  |
| $('li').eq(index)=\$('li:eq(0)') | 列表中索引值为 `index` 的元素 **支持倒数(-1)** |
| $('li[class=box]')               | 列表中属性class的值为box 的元素             |
| $('[herf]')                      | 选取所有带有 href 属性的元素                |

```js
// 定义jquery变量,获取元素$('#div1')
var $div1 = $('#div1');
var $div2 = $('#div2');
alert($div1.length); // 弹出1
alert($div2.length); // 弹出0
......
<div id="div1">这是一个div</div>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./jquery-3.4.1.min.js"></script>
    <script>
        $(function () {
            // $('ul').css('background','#E04')
            // $('li[id=box]').css('background','#E04')
            $('li#box').css('background', '#E04')
            // $('li:last').css('background','#E04')
            // $('li').not('.box').css('background','#E04')
            $('li').eq(1).css('background', '#E04')
            // $('li').eq(-1).css('background','#E04')
            // $('li:eq(0)').eq(-1).css('background','#E04')
            $('.box1').has('p').css('background', '#E04')  //选中父级
            $('.box2').find('p').css('background', '#E04')  //选中子级
        })
    </script>
</head>
<body>
<ul>
    <li>文字1</li>
    <li>文字2</li>
    <li class="box">文字3</li>
    <li>文字4</li>
    <li id="box">文字5</li>
    <li>文字6</li>
    <li>文字7</li>
    <li>文字8</li>
</ul>
<div class="box1"><p>box1 p</p></div>
<div class="box1"><p>box2 p</p></div>
</body>
</html>
```

### 兄弟选择器siblings()

除了自己的同级选择器(嵌套层级button,也包括其他标签比如div)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./jquery-3.4.1.min.js"></script>
    <script>
        $(function () {
            $('button').click(function () {
                // 链式编程, 链式调用 -- 
                $(this).css('background', 'green').siblings().css('background', '')
            })
        })
    </script>
</head>
<body>
<!-- 兄弟选择器  排他思想:  -->
<!-- 很多按钮 点谁谁变绿 -->
<button>按钮</button>
<button>按钮</button>
<button>按钮</button>
<button>按钮</button>
<div style='background:#e04;color:#90d;'>婷 Asa</div>
</body>
</html>
```

### 父级选择器 -- parent()

```html
<!--点击X 关闭父级元素 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        p {
            width: 40px;
            height: 80px;
            background: #E04;

        }
    </style>
    <script src="./jquery-3.4.1.min.js"></script>
    <script>
        $(function () {
            $('.tings').click(function () {
                $('p').parent().css("background", '#fa4')
            })
        })
    </script>
</head>
<body>
<div class='ting'>

    <p class="tings">X</p>
</div>
<div>
    <p>X</p>
</div>
</body>
</html>
```

### 子级选择器 -- children([elem])

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .nav {
            width: 300px;
            margin: 100px auto;
        }

        .nav li {
            width: 100px;
            height: 40px;
            line-height: 40px;
            float: left;
            text-align: center;
        }

        .nav li a {
            display: block;
            height: 40px;
            text-decoration: none;
            color: #333;
            background: #ccc;
        }

        .nav li a:hover {
            background: pink;
        }

        .nav li ul {
            display: none;
        }
    </style>
    <script src="./jquery-3.4.1.min.js"></script>
    <script>
        $(function () {
            // 清楚动画排队机制: 在形成动画函数之前加stop( )
            // 鼠标经过() 二级菜单显示
            //子级选择器后面可以加入子级项
            $('.nav li').mouseover(function () {
                $(this).children('ul').stop().show(500)  //children()方法可以加参数
            })
            $('.nav li').mouseout(function () {
                $(this).children('ul').stop().hide(500)
            })

        })
    </script>
</head>
<body>
<div class="nav">
    <ul>
        <li>
            <a href="###">男星</a>
            <ul>
                <li><a href="###">王宝强</a></li>
                <li><a href="###">陈羽凡</a></li>
                <li><a href="###">.....</a></li>
            </ul>
        </li>
        <li>
            <a href="###">女星</a>
            <ul>
                <li><a href="###">杨幂</a></li>
                <li><a href="###">柳岩</a></li>
                <li><a href="###">赵丽颖</a></li>
            </ul>
        </li>
        <li>
            <a href="###">导演</a>
            <ul>
                <li><a href="###">冯小刚</a></li>
                <li><a href="###">张艺谋</a></li>
                <li><a href="###">丁黑</a></li>
            </ul>
        </li>
    </ul>

</div>
</body>
</html>
```

#### index方法

```html

<script>
    $(function () {
        $('li').click(function () {
            alert($(this).index())
        })
    })
</script>
```

#### 操作样式名_添加删除类

```js
$("#div1").addClass("divClass2") //为id为div1的对象追加样式divClass2
$("#div1").removeClass("divClass")  //移除id为div1的对象的class名为divClass的样式
//不指定参数时移出所有值
$("#div1").removeClass("divClass divClass2") //移除多个样式
$("#div1").toggleClass("anotherClass") //重复切换anotherClass样式
```

#### [重点]tab选项卡

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .tab_con {
            width: 500px;
            height: 350px;
            margin: 50px auto 0;
        }

        .tab_btns {
            height: 50px;
        }

        .tab_btns input {
            width: 100px;
            height: 50px;
            background: #ddd;
            border: 0px;
            outline: none;
        }

        .tab_btns .active {
            background: gold;
        }

        .tab_cons {
            height: 300px;
            background: gold;
        }

        .tab_cons div {
            height: 300px;
            line-height: 300px;
            text-align: center;
            display: none;
            font-size: 30px;
        }

        .tab_cons .current {
            display: block;
        }
    </style>
    <script src='jquery-3.4.1.min.js'></script>
    <script>
        $(function () {
            $('input').mouseover(function () {
                // $(this).addClass('active')
                // $(this).siblings().removeClass()
                $(this).addClass('active').siblings().removeClass()
                // 得到按钮鼠标滑过的下标，从3个内容div中选中和这个下标相等的内容显示
                var num = $(this).index()
                // alert(num)
                // $('.tab_cons div').eq(num).addClass('current')
                // $('.tab_cons div').eq(num).siblings().removeClass()
                $('.tab_cons div').eq(num).addClass('current').siblings().removeClass()
            })
        })
    </script>
</head>

<body>
<div class="tab_con">
    <div class="tab_btns">
        <input type="button" value="按钮一" class="active">
        <input type="button" value="按钮二">
        <input type="button" value="按钮三">
    </div>
    <div class="tab_cons">
        <div class="current">按钮一对应的内容</div>
        <div>按钮二对应的内容</div>
        <div>按钮三对应的内容</div>
    </div>
</div>
</body>
</html>
```

#### 选择集转移

```js
$('#box').prev(); //选择id是box的元素前面紧挨的同辈元素
$('#box').prevAll(); //选择id是box的元素之前所有的同辈元素
$('#box').next(); //选择id是box的元素后面紧挨的同辈元素
$('#box').nextAll(); //选择id是box的元素后面所有的同辈元素
$('#box').parent(); //选择id是box的元素的父元素
$('#box').children(); //选择id是box的元素的所有子元素
$('#box').siblings(); //选择id是box的元素的同级元素
$('#box').find('.myClass'); //选择id是box的元素内的class等于myClass的元素
```

### 1. 基础选择器 **Basics**

| **名称**                                                                                                         | **说明**                                         | **举例**                        |
|----------------------------------------------------------------------------------------------------------------|------------------------------------------------|-------------------------------|
| **[#id](http://docs.jquery.com/Selectors/id#id)**                                                              | 根据元素Id选择                                       | $("divId") 选择ID为divId的元素      |
| **[element](http://docs.jquery.com/Selectors/element#element)**                                                | 根据元素的名称选择,                                     | $("a") 选择所有<a>元素              |
| **[.class](http://docs.jquery.com/Selectors/class#class)**                                                     | 根据元素的css类选择                                    | $(".bgRed") 选择所用CSS类为bgRed的元素 |
| **[\*](http://docs.jquery.com/Selectors/all)**                                                                 | 选择所有元素                                         | $("*")选择页面所有元素                |
| **[selector1,  selector2,  selectorN](http://docs.jquery.com/Selectors/multiple#selector1selector2selectorN)** | 可以将几个选择器用","分隔开然后再拼成一个选择器字符串.会同时选中这几个选择器匹配的内容. | $("#divId, a, .bgRed")        |

### 2.层次选择器 **Hierarchy**

| **名称**                                                                                    | **说明**                                                                       | **举例**                                               |
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------|
| **[ancestor descendant](http://docs.jquery.com/Selectors/descendant#ancestordescendant)** | 使用"form input"的形式选中form中的所有input元素.即ancestor(祖先)为from, descendant(子孙)为input. | $(".bgRed div") 选择CSS类为bgRed的元素中的所有<div>元素.          |
| **[parent > child](http://docs.jquery.com/Selectors/child#parentchild)**                  | 选择parent的直接子节点child. child必须包含在parent中并且父类是parent元素.                         | $(".myList>li") 选择CSS类为myList元素中的直接子节点<li>对象.        |
| **[prev + next](http://docs.jquery.com/Selectors/next#prevnext)**                         | prev和next是两个同级别的元素. 选中在prev元素后面的next元素.                                      | $("#hibiscus+img")选在id为hibiscus元素后面的img对象.           |
| **[prev ~ siblings](http://docs.jquery.com/Selectors/siblings#prevsiblings)**             | 选择prev后面的根据siblings过滤的元素  注:siblings是过滤器                                     | $("#someDiv~[title]")选择id为someDiv的对象后面所有带有title属性的元素 |

### 3.基本过滤器 **Basic Filters**

| **名称**                                                              | **说明**                                   | **举例**                                                                                                             |
|---------------------------------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **[:first](http://docs.jquery.com/Selectors/first)**                | 匹配找到的第一个元素                               | 查找表格的第一行:$("tr:first")                                                                                             |
| **[:last](http://docs.jquery.com/Selectors/last)**                  | 匹配找到的最后一个元素                              | 查找表格的最后一行:$("tr:last")                                                                                             |
| **[:not(selector)](http://docs.jquery.com/Selectors/not#selector)** | 去除所有与给定选择器匹配的元素                          | 查找所有未选中的 input 元素: $("input:not(:checked)")                                                                        |
| **[:even](http://docs.jquery.com/Selectors/even)**                  | 匹配所有索引值为偶数的元素，从 0 开始计数                   | 查找表格的1、3、5...行:$("tr:even")                                                                                        |
| **[:odd](http://docs.jquery.com/Selectors/odd)**                    | 匹配所有索引值为奇数的元素，从 0 开始计数                   | 查找表格的2、4、6行:$("tr:odd")                                                                                            |
| **[:eq(index)](http://docs.jquery.com/Selectors/eq#index)**         | 匹配一个给定索引值的元素  注:index从 0 开始计数            | 查找第二行:$("tr:eq(1)")                                                                                                |
| **[:gt(index)](http://docs.jquery.com/Selectors/gt#index)**         | 匹配所有大于给定索引值的元素  注:index从 0 开始计数          | 查找第二第三行，即索引值是1和2，也就是比0大:$("tr:gt(0)")                                                                              |
| **[:lt(index)](http://docs.jquery.com/Selectors/lt#index)**         | 选择结果集中索引小于 N 的 elements  注:index从 0 开始计数 | 查找第一第二行，即索引值是0和1，也就是比2小:$("tr:lt(2)")                                                                              |
| **[:header](http://docs.jquery.com/Selectors/header)**              | 选择所有h1,h2,h3一类的header标签.                 | 给页面内所有标题加上背景色: $(":header").css("background", "#EEE");                                                             |
| **[:animated](http://docs.jquery.com/Selectors/animated)**          | 匹配所有正在执行动画效果的元素                          | 只有对不在执行动画效果的元素执行一个动画特效:$("#run").click(function(){   $("div:not(:animated)").animate({ left: "+=20" }, 1000);  }); |

### 4. 内容过滤器 Content Filters

| **名称**                                                                | **说明**             | **举例**                                                           |
|-----------------------------------------------------------------------|--------------------|------------------------------------------------------------------|
| **[:contains(text)](http://docs.jquery.com/Selectors/contains#text)** | 匹配包含给定文本的元素        | 查找所有包含 "John" 的 div 元素:$("div:contains('John')")                 |
| **[:empty](http://docs.jquery.com/Selectors/empty)**                  | 匹配所有不包含子元素或者文本的空元素 | 查找所有不包含子元素或者文本的空元素:$("td:empty")                                 |
| **[:has(selector)](http://docs.jquery.com/Selectors/has#selector)**   | 匹配含有选择器所匹配的元素的元素   | 给所有包含 p 元素的 div 元素添加一个 text 类: $("div:has(p)").addClass("test"); |
| **[:parent](http://docs.jquery.com/Selectors/parent)**                | 匹配含有子元素或者文本的元素     | 查找所有含有子元素或者文本的 td 元素:$("td:parent")                              |

### 5.可见性过滤器 **Visibility Filters**

| **名称**                                                   | **说明**                                                                                      | **举例**                        |
|----------------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------------------|
| **[:hidden](http://docs.jquery.com/Selectors/hidden)**   | 匹配所有的不可见元素注:在1.3.2版本中, hidden匹配自身或者父类在文档中不占用空间的元素.如果使用CSS visibility属性让其不显示但是占位,则不输入hidden. | 查找所有不可见的 tr 元素:$("tr:hidden") |
| **[:visible](http://docs.jquery.com/Selectors/visible)** | 匹配所有的可见元素                                                                                   | 查找所有可见的 tr 元素:$("tr:visible") |

### 6.属性过滤器 **Attribute Filters**

| **名称**                                                                                                                                                             | **说明**                 | **举例**                                                                                       |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|----------------------------------------------------------------------------------------------|
| **[[attribute\]](http://docs.jquery.com/Selectors/attributeHas#attribute)**                                                                                        | 匹配包含给定属性的元素            | 查找所有含有 id 属性的 div 元素:  $("div[id]")                                                          |
| **[[attribute=value\]](http://docs.jquery.com/Selectors/attributeEquals#attributevalue)**                                                                          | 匹配给定的属性是某个特定值的元素       | 查找所有 name 属性是 newsletter 的 input 元素: $("input[name='newsletter']").attr("checked", true);    |
| **[[attribute!=value\]](http://docs.jquery.com/Selectors/attributeNotEqual#attributevalue)**                                                                       | 匹配给定的属性是不包含某个特定值的元素    | 查找所有 name 属性不是 newsletter 的 input 元素:  $("input[name!='newsletter']").attr("checked", true); |
| **[[attribute^=value\]](http://docs.jquery.com/Selectors/attributeStartsWith#attributevalue)**                                                                     | 匹配给定的属性是以某些值开始的元素      | $("input[name^='news']")                                                                     |
| **[[attribute$=value\]](http://docs.jquery.com/Selectors/attributeEndsWith#attributevalue)**                                                                       | 匹配给定的属性是以某些值结尾的元素      | 查找所有 name 以 'letter' 结尾的 input 元素:  $("input[name$='letter']")                               |
| **[[attribute\*=value\]](http://docs.jquery.com/Selectors/attributeContains#attributevalue)**                                                                      | 匹配给定的属性是以包含某些值的元素      | 查找所有 name 包含 'man' 的 input 元素:  $("input[name*='man']")                                      |
| **[[attributeFilter1\][attributeFilter2][attributeFilterN]](http://docs.jquery.com/Selectors/attributeMultiple#attributeFilter1attributeFilter2attributeFilterN)** | 复合属性选择器，需要同时满足多个条件时使用。 | 找到所有含有 id 属性，并且它的 name 属性是以 man 结尾的:  $("input[id][name$='man']")                            |

### **7.子元素过滤器 \**Child Filters\****

| **名称**                                                                                     | **说明**                                                                                                                                                                                         | **举例**                                     |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| **[:nth-child(index/even/odd/equation)](http://docs.jquery.com/Selectors/nthChild#index)** | 匹配其父元素下的第N个子或奇偶元素':eq(index)' 只匹配一个元素，而这个将为每一个父元素匹配子元素。:nth-child从1开始的，而:eq()是从0算起的！可以使用:  nth-child(even)  :nth-child(odd)  :nth-child(3n)  :nth-child(2)  :nth-child(3n+1)  :nth-child(3n+2) | 在每个 ul 查找第 2 个li:  $("ul li:nth-child(2)") |
| **[:first-child](http://docs.jquery.com/Selectors/firstChild)**                            | 匹配第一个子元素':first' 只匹配一个元素，而此选择符将为每个父元素匹配一个子元素                                                                                                                                                   | 在每个 ul 中查找第一个 li:  $("ul li:first-child")  |
| **[:last-child](http://docs.jquery.com/Selectors/lastChild)**                              | 匹配最后一个子元素':last'只匹配一个元素，而此选择符将为每个父元素匹配一个子元素                                                                                                                                                    | 在每个 ul 中查找最后一个 li:  $("ul li:last-child")  |
| **[:only-child](http://docs.jquery.com/Selectors/onlyChild)**                              | 如果某个元素是父元素中唯一的子元素，那将会被匹配如果父元素中含有其他元素，那将不会被匹配。                                                                                                                                                  | 在 ul 中查找是唯一子元素的 li:  $("ul li:only-child") |

### 8.表单选择器 Forms

| **名称**                                                     | **说明**                                   | **解释**                     |
|------------------------------------------------------------|------------------------------------------|----------------------------|
| **[:input](http://docs.jquery.com/Selectors/input)**       | 匹配所有 input, textarea, select 和 button 元素 | 查找所有的input元素:  $(":input") |
| **[:text](http://docs.jquery.com/Selectors/text)**         | 匹配所有的文本框                                 | 查找所有文本框:  $(":text")       |
| **[:password](http://docs.jquery.com/Selectors/password)** | 匹配所有密码框                                  | 查找所有密码框:  $(":password")   |
| **[:radio](http://docs.jquery.com/Selectors/radio)**       | 匹配所有单选按钮                                 | 查找所有单选按钮                   |
| **[:checkbox](http://docs.jquery.com/Selectors/checkbox)** | 匹配所有复选框                                  | 查找所有复选框:  $(":checkbox")   |
| **[:submit](http://docs.jquery.com/Selectors/submit)**     | 匹配所有提交按钮                                 | 查找所有提交按钮:  $(":submit")    |
| **[:image](http://docs.jquery.com/Selectors/image)**       | 匹配所有图像域                                  | 匹配所有图像域:  $(":image")      |
| **[:reset](http://docs.jquery.com/Selectors/reset)**       | 匹配所有重置按钮                                 | 查找所有重置按钮:  $(":reset")     |
| **[:button](http://docs.jquery.com/Selectors/button)**     | 匹配所有按钮                                   | 查找所有按钮:  $(":button")      |
| **[:file](http://docs.jquery.com/Selectors/file)**         | 匹配所有文件域                                  | 查找所有文件域:  $(":file")       |

### **9.表单过滤器 \**Form Filters\****

| **名称**                                                     | **说明**                                   | **解释**                                    |
|------------------------------------------------------------|------------------------------------------|-------------------------------------------|
| **[:enabled](http://docs.jquery.com/Selectors/enabled)**   | 匹配所有可用元素                                 | 查找所有可用的input元素:  $("input:enabled")       |
| **[:disabled](http://docs.jquery.com/Selectors/disabled)** | 匹配所有不可用元素                                | 查找所有不可用的input元素:  $("input:disabled")     |
| **[:checked](http://docs.jquery.com/Selectors/checked)**   | 匹配所有选中的被选中元素(复选框、单选框等，不包括select中的option) | 查找所有选中的复选框元素:  $("input:checked")         |
| **[:selected](http://docs.jquery.com/Selectors/selected)** | 匹配所有选中的option元素                          | 查找所有选中的选项元素:  $("select option:selected") |

### CSS样式操作

[官方链接](https://api.jquery.com/css/)

jquery用法思想二: 同一个函数完成取值和赋值

**应用场景**: 取值然后对其进行校验

操作行间样式

```js
//获取div的样式
$("div").css("width")
$("div").css("color")

//设置div的样式
$("div").css("width", "30px")  // 完成取值并赋值, 并不是传统的=号赋值,而是通过字典或者二元组的形式
$('img').prop('src', 'icon4.jpg')
$("div").css({fontSize: "30px", color: "red"})

< script
src = "js/jquery-3.4.1.js" > < /script>
<script>
    $(function(){
    $('input').blur(function () {
            alert($(this).val())  //不写参数表示访问, 写了参数表示修改, 引号表示清空
        }
    )
})
</script>
```

**特别注意**

选择器获取的多个元素，获取信息获取的是第一个，比如：$("div").css("width")，获取的是**第一个div的width**。

**操作样式类名**

```js
$("#div1").addClass("divClass2") //为id为div1的对象追加样式divClass2
$("#div1").removeClass("divClass")  //移除id为div1的对象的class名为divClass的样式
$("#div1").removeClass("divClass divClass2") //移除多个样式
$("#div1").toggleClass("anotherClass") //重复切换anotherClass样式
```

### 绑定click事件

```js
$('#btn1').click(function () {
    //内部的this指的是原生对象
    //使用jquery对象用$(this)
})
```

**获取元素的索引值**
有时候需要获得匹配元素相对于其同胞元素的索引位置，此时可以用index()方法获取

```js
var $li = $('.list li').eq(1);
alert($li.index()); // 弹出1
......
<ul class="list">
    <li>1</li>
    <li>2</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>
```

### 动画:animate

通过animate方法可以设置元素某属性值上的动画，可以设置一个或多个属性值，动画执行完成后会执行一个函数。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 60px;
            margin-bottom: 10px;
            background: #e04;
        }

    </style>
    <script src="./jquery-3.4.1.min.js"></script>
    <script>
        $(function () {
            // 作用: 自定义动画函数
            // $('div').animate(字典的形式写css键值对, 时间,运动曲线,回调函数(动画完成了再执行本命令))
            //css键值对:{k:v,...}
            // 以毫秒为单位. 默认值是600
            //运动曲线: swing  linear -- 工作中不用
            // 回调函数: 函数或匿名函数, 表示动画完成之后要执行的命令
            // animate方法不支持变色 需要用插件
            $('div').eq(0).animate({width: 600}, 2000, 'linear', fnAlert)

            function fnAlert() {
                alert('婷')
            }

            $('div').eq(1).animate({width: 600, border-radius
        :
            300
        },
            2000, 'swing'
        )
        })
    </script>
</head>
<body>
<div class='div1'></div>
<div class='div2'></div>

</body>
</html>
```

### jquery特殊效果

| 方法            | 作用          |
|---------------|-------------|
| fadeOut()     | 淡出          |
| fadeToggle()  | 切换淡入淡出      |
| hide()        | 隐藏元素        |
| show()        | 显示元素        |
| toggle()      | 切换元素的可见状态   |
| slideDown()   | 向下展开        |
| slideUp()     | 向上卷起        |
| slideToggle() | 依次展开或卷起某个元素 |

### 层级菜单

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>层级菜单</title>
    <style type="text/css">
        body {
            font-family: 'Microsoft Yahei';
        }

        body, ul {
            margin: 0px;
            padding: 0px;
        }

        ul {
            list-style: none;
        }


        .menu {
            width: 200px;
            margin: 20px auto 0;
        }

        .menu .level1, .menu li ul a {
            display: block;
            width: 200px;
            height: 30px;
            line-height: 30px;
            text-decoration: none;
            background-color: #3366cc;
            color: #fff;
            font-size: 16px;
            text-indent: 10px;
        }

        .menu .level1 {
            border-bottom: 1px solid #afc6f6;

        }

        .menu li ul a {
            font-size: 14px;
            text-indent: 20px;
            background-color: #7aa1ef;

        }

        .menu li ul li {
            border-bottom: 1px solid #afc6f6;
        }


        .menu li ul {
            display: none;
        }

        .menu li ul.current {
            display: block;
        }

        .menu li ul li a:hover {
            background-color: #f6b544;
        }


    </style>

    <script src="js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript">
        $(function () {
            // 单击一级菜单，显示隐藏 滑动 二级菜单
            $('.level1').click(function () {
                $(this).next().slideDown().parent().siblings().children('ul').slideUp()
            })
        })
    </script>
</head>
<body>
<ul class="menu">
    <li>
        <a href="#" class="level1">手机</a>
        <ul class="current">
            <li><a href="#">iPhone X 256G</a></li>
            <li><a href="#">红米4A 全网通</a></li>
            <li><a href="#">HUAWEI Mate10</a></li>
            <li><a href="#">vivo X20A 4GB</a></li>
        </ul>
    </li>
    <li>
        <a href="#" class="level1">笔记本</a>
        <ul>
            <li><a href="#">MacBook Pro</a></li>
            <li><a href="#">ThinkPad</a></li>
            <li><a href="#">外星人(Alienware)</a></li>
            <li><a href="#">惠普(HP)薄锐ENVY</a></li>
        </ul>
    </li>
    <li>
        <a href="#" class="level1">电视</a>
        <ul>
            <li><a href="#">海信(hisense)</a></li>
            <li><a href="#">长虹(CHANGHONG)</a></li>
            <li><a href="#">TCL彩电L65E5800A</a></li>
        </ul>
    </li>
    <li>
        <a href="#" class="level1">鞋子</a>
        <ul>
            <li><a href="#">新百伦</a></li>
            <li><a href="#">adidas</a></li>
            <li><a href="#">特步</a></li>
            <li><a href="#">安踏</a></li>
        </ul>
    </li>
    <li>
        <a href="#" class="level1">玩具</a>
        <ul>
            <li><a href="#">乐高</a></li>
            <li><a href="#">费雪</a></li>
            <li><a href="#">铭塔</a></li>
            <li><a href="#">贝恩斯</a></li>
        </ul>
    </li>

</ul>
</body>
</html>
```

## Jquery进阶

### JQ控制HTML属性

prop = property属性 val = value值

访问和设置属性$(this).prop('src','icon4.jpg')

val() = html() 用法完全相同 (value = 标签的value属性)

**html() 取出或设置html内容**

**prop() 取出或设置某个属性的值**

```js
// 取出图片的地址
var $src = $('#img1').prop('src');
// 设置图片的地址和alt属性
$('#img1').prop({src: "test.jpg", alt: "Test Image"});
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src='jquery-3.4.1.min.js'></script>
    <script>
        // 入口函数
        $(function () {
            // alert($('input').prop('value'))  // 获取html属性的值 用于表单提交验证的
            // $('input').val('婷')  // 修改文本内容
            alert($('input').val())  // 获取文本内容
        })
    </script>
</head>
<body>
<input type="text" value='123445'>
</body>
</html>
```

**字符串拼接实现变量功能**

`str = '<div class="atalk"><span>A说：'+ vals +'</span></div>'`

报错后不执行后面的内容 用return

### Jquery循环

语法: **$('li').each()**

event表示下标参数 each()函数自带形参,这个形参就是标签(循环对象)的索引值
$('li').each(function(event){alert(event)})})  // 形参表示的就是标签的索引值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- jq循环重复执行alert功能 弹出li的下标 -->
    <script src='jquery-3.4.1.min.js'></script>
    <script>
        $(function () {
            $('li').each(function (event) {
                // 形参表示的就是标签的索引值
                alert(event)
                // alert($(this).index())
            })
        })
    </script>
</head>
<body>
<ul>
    <li>文字1</li>
    <li>文字2</li>
    <li>文字3</li>
    <li>文字4</li>
    <li>文字5</li>
    <li>文字6</li>
    <li>文字7</li>
    <li>文字8</li>
</ul>
</body>
</html>
```

### JQ事件

| 方法       | 说明                               |
|----------|----------------------------------|
| blur()   | 元素失去焦点                           |
| focus()  | 元素获得焦点                           |
| click()  | 鼠标单击                             |
| hover()  | 同时为mouseenter和mouseleave事件指定处理函数 |
| ready()  | DOM加载完成                          |
| submit() | 用户递交表单                           |

#### 鼠标移入和离开

```html

<script>
    $(function () {
        $('div').hover(function () {
            // 鼠标移入的命令
            $(this).animate({'margin-top': '150px'})
        }, function () {
            // 鼠标离开的命令
            $(this).animate({'margin-top': 0})
        })
    })
</script>
```

#### submit事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src='jquery-3.4.1.min.js'></script>
    <script>
        $(function () {
            $('#myform').submit(function () {
                // 工作中需要先条件判断,再提交
                if () {
                } else {
                    //  不能提交数据/组织表单默认提交行为
                    return false  //工作中常用
                }
            })
        })

    </script>

</head>
<body>
<!-- <表单提交不会直接 -->
<form id='myform' action="">
    <input type="text">
    <input type="submit">
</form>
</body>
</html>
```

## 表单验证

**$ 用来标识是在JQ中的变量对象(区别是在JS中还是JQ中)**

**o开头的标识是js变量对象**

**表单验证**: 核心方法是使用正则表达式

**正则表达式**:能让计算机读懂的字符串匹配规则

**正则使用方法**: 对获取到的数据进行正则匹配

使用语法: 正则规则变量.test(被检测的数据) -- 验证数据是否合法,有返回值

jquery中并没有额外封装正则表达式的方法, 沿用了js的正则表达式方法

使用: 正则变量.test(数据) -- 验证数据是否合法

```js
//语法规则
var re = new RegExp('规则', '可选参数')
var re = /规则/
参数

// var re02 =  /规则/参数
var re03 = /a/
var re04 = /a/i  //i参数表示忽略大小写
```

### 正则表达式规则

#### 普通字符匹配：

如：/a/ 匹配字符 ‘a’，/a,b/ 匹配字符 ‘a,b’

#### 转义字符匹配：

\d 匹配一个数字，即0-9
\D 匹配一个非数字，即除了0-9
\w 匹配一个单词字符（字母、数字、下划线）
\W 匹配任何非单词字符。等价于\[^A-Za-z0-9_]
\s 匹配一个空白符
\S 匹配一个非空白符
\b 匹配单词边界
\B 匹配非单词边界
. 匹配一个任意字符

```js
var sTr01 = '123456asdf';  //被验证的表达式
var re01 = /\d+/;  //正则规则
//匹配纯数字字符串
var re02 = /^\d+$/;
// 使用语法: 正则规则变量.test(被检测的数据) -- 验证数据是否合法,有返回值
alert(re01.test(sTr01)); //弹出true
alert(re02.test(sTr01)); //弹出false
```

#### 量词: 对左边的匹配字符定义个数

? 出现零次或一次（最多出现一次）
\+ 出现一次或多次（至少出现一次）
\* 出现零次或多次（任意次）
{n} 出现n次
{n,m} 出现n到m次
{n,} 至少出现n次

#### 任意一个或者范围

[abc123] : 匹配‘abc123’中的任意一个字符
[a-z0-9] : 匹配a到z或者0到9中的任意一个字符

#### 限制开头结尾

^ 以**紧挨**的元素开头(右边的元素开头)
$ 以**紧挨**的元素结尾(左边的元素结尾)

#### 修饰参数

g： global，全文搜索，默认搜索到第一个结果接停止
i： ingore case，忽略大小写，默认大小写敏感

#### 常用函数

test
用法：正则.test(字符串) 匹配成功，就返回真，否则就返回假

#### 正则默认规则

匹配成功就结束，不会继续匹配，区分大小写

#### 常用正则规则

工作场景中, 直接去网上搜索复制下来即可

```js
//用户名验证：(数字字母或下划线6到20位)
var reUser = /^\w{6,20}$/;

//邮箱验证：        
var reMail = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i;

//密码验证：
var rePass = /^[\w!@#$%^&*]{6,20}$/;

//手机号码验证：
var rePhone = /^1[34578]\d{9}$/;
```

**外链式js一开始也需要声明入口函数**

校验js是否被正确调用使用alert弹窗测试

**使用return跳出函数**

**养成定义函数_然后调用的习惯**

工作中应该养成注释的习惯,指明函数的功能是什么

表单标记思想, 标记完成!默认值设置为true

## Jquery高级

### 事件冒泡

**什么是事件冒泡**
在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或者事件返回true，那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次的最顶层，即document对象（有些浏览器是window）。

**事件冒泡的作用** (单击子级也会触发父级, 只需将事件写在父级上)
事件冒泡**允许多个操作被集中处理**（把事件处理器添加到一个父级元素上，避免把事件处理器添加到多个子级元素上），它还可以让*
*你在对象层的不同级别捕获事件**。

**阻止事件冒泡**
事件冒泡机制有时候是不需要的，需要阻止掉，通过 event.stopPropagation() 来阻止

这种问题出现于父子集的标签中: 父子级标签都绑定相同的事件, 触发子级命令的时候会逐层向父级传递

阻止事件冒泡的方法：

想在哪里停止事件冒泡,就在哪里阻止就行了

```js
    $box3.click(function (event) {
    alert('grandson');

    return false //这是方法一
    event.stopPropagation(); // 这种方法工作中几乎不用

});
```

```html

<script type="text/javascript">
    $(function () {
        $('#btn01').click(function () {
            $('#pop').show()
            return false
        })
        $('#shutoff').click(function () {
            $('#pop').hide()
        })

        $(document).click(function () {
            $('#pop').hide()
        })

        $('.pop_con').click(function () {
            // 不需要执行其他的命令，不隐藏即可 -- 不冒泡到document就可以了
            return false
        })
    })
</script>
```

### 事件委托/事件代理

事件委托就是利用冒泡的原理，把**事件加到父级上**，通过判断事件来源的子集，执行相应的操作，**事件委托首先可以极大减少事件绑定次数，提高性能
**；其次可以**让新加入的子元素也可以拥有相同的操作**。

**作用**: 提高代码的执行效率, 可以给未来元素绑定命令

> 默认委托给该标签的父标签来执行, 这样可以极大的减少计算机的查找次数

**事件委托写法**

语法: $(父级标签).delegate(真实发生目标事件,事件属性,匿名函数)

匿名函数用于存放命令!

```html
$(function(){
$list = $('#list');
$list.delegate('li', 'click', function() {
$(this).css({background:'red'});
});
})
...
<ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

### 节点操作

节点 是 (标签 + 标签属性 + 标签的内容) 集合

标签==元素\==标记 < 节点

DOM: document object model文档对象模型

这个概念来自于JS内置: 内置的一个结构化表现手法, 通过这个结构化表现手法把所有的标签实现了一个倒置的树状结构图,
顶层是document,意为网页文档

**网页文档的根标签是HTML**

目的:是精确的针对性的找到任何一个标签,从而去控制该标签

作用说简单 了就是查找标签用的

#### 1. DOM操作

**元素节点操作**指的是改变html的标签结构，它有两种情况：

1. 移动现有标签的位置

2. 将新创建的标签**插入_增加_追加**到现有的标签中

3. 删除节点(的内容,本身?)

#### 2. 声明节点变量 (创建新标签),

作用: 保存节点标签数据

`var $span = $('<span>这是一个span元素</span>')`

#### 3. 移动或者插入标签的方法

(没有的新增,有的移动)

作用: 使用追加函数将节点变量追加到相应的位置

1、**子集末尾追加**append()和appendTo()：在现存元素的内部，从后面放入元素

```html
var $span = $('<span>这是一个span元素</span>');
$('#div1').append($span);
......
<div id="div1"></div>
```

2、**子集开头追加** prepend()和prependTo()：在现存元素的内部，从前面放入元素

```js
 $('ul').appent($li)
在什么位置添加标签
$li.appendTo($('ul'))
将标签添加到目标位置
```

3、**同级末尾追加** after()和insertAfter()：在现存元素的外部，从后面放入元素

4、**同级开头追加** before()和insertBefore()：在现存元素的外部，从前面放入元素

#### 4. 删除标签

```js
$('#div1').remove();  //删除标签本身
$('ul').empty(); // 清除里面的标签
```

### JavaScript对象

> 相当于是python中的字典,严格意义上js中没有类
>
> python中的列表 = JS中的数组
>
> 数据交互  >> ajax >> js对象

javascript中的对象，可以理解成是一个键值对的集合，键是调用每个值的名称，值可以是基本变量，还可以是函数和对象。

创建javascript对象有两种方法，一种是通过顶级Object类来实例化一个对象，然后在对象上面添加属性和方法：

```js
// 创建对象
var person = new Object()

//添加属性
person.name = 'laowang'
person.age = '25'

//添加方法
person.say = function () {
    alert(person.name)
    alert(this.name)  //this表示当前对象
}
//调用属性
alert(person.name)

// 调用方法
person.say()

```

通过直接创建对象

```JavaScript
var xiaoming = {
    name: 'xiaoming',
    age: 10,
    say: function () {
        alert(this.age)
    }
}
// 调用属性和方法
alert(xiaoming.name)
xiaoming.say()
```

ajax会用到js对象的使用方法

vue会用到js对象的创建方法

## **[数据交互](https://api.jquery.com/jquery.ajax/)**: ajax

> Perform an asynchronous Http(Ajax) request
>
> 执行异步HTTP请求

### 实现步骤

1. 交互/触发事件: 触发方法
2. 编写韩ajax方法的代码

#### ajax原理

1. 创建XMLHttpRequest对象

2. 向服务器发送请求
    1. `open(method, url, async)`
    2. `send([string])`
3. 监听状态变化
4. 接收返回的数据
5.

### JSON: 数据格式

json: JavaScript对象表示法(JavaScript Object Notation)一种数据格式,意思是json是一种类似于JavaScript对象的一种数据格式对象

json数据对象类似于JavaScript中的对象，但是它的键对应的值里面是**没有函数方法**的，值可以是普通变量，不支持undefined，值还可以是数组或者json对象。

与JavaScript对象写法不同的是，json对象的属性名称和字符串值需要用**双引号**引起来，用单引号或者不用引号会导致读取数据错误。

本质上是一个字典 `{ }`, json必须使用双引号

ajax: 对象的实用方法
vue: 对象的创建方法
ajax技术的目的是让JavaScript发送http请求, 与后台通信, 获取数据和信息.

```json
// json格式的数据
{
  "name": "tom",
  "age": 18
}
// 值可以是数组
[
  "tom",
  18,
  "programmer"
]

// 复杂的数据结构
{
  "name": "jack",
  "age": 29,
  "hobby": [
    "reading",
    "travel",
    "photography"
  ]
  "school": {
    "name": "Merrimack College",
    "location": 'North Andover, MA'
  }
}
```

### AJAX简介

ajax技术的目的是让javascript发送http请求，与后台通信，获取数据和信息。ajax技术的原理是实例化xmlhttp对象，使用此对象与后台通信。ajax通信的过程不会影响后续javascript的执行，从而实现异步。

##### 局部刷新和无刷新

ajax可以实现局部刷新，也叫做无刷新，无刷新指的是整个页面不刷新，只是局部刷新，ajax可以自己发送http请求，不用通过浏览器的地址栏，所以页面整体不会刷新，ajax获取到后台数据，更新页面显示数据的部分，就做到了页面局部刷新。

##### 数据接口

数据接口是后台程序提供的，它是一个url地址，访问这个地址，会对数据进行增、删、改、查的操作，最终会返回json格式的数据或者操作信息，格式也可以是text、xml等。

### 好处

ajax支持异步传输数据
ajax默认支持局部刷新
ajax不支持操作本地 不支持连接操作数据库（安全）

#### ajax使用方法

| 参数           | 说明                                  |
|--------------|-------------------------------------|
| url          | 请求地址                                |
| type         | 请求方式，默认是'GET'，常用的还有'POST'           |
| dataType     | 设置返回的数据格式，常用的是'json'格式，也可以设置为'html' |
| data         | 设置发送给服务器的数据                         |
| success/done | 设置请求成功后的回调函数                        |
| error/fail   | 设置请求失败后的回调函数                        |
| async        | 设置是否异步，默认值是'true'，表示异步              |

```js
// 连接ajax
$.ajax({
    url: '/change_data',
    type: 'GET',
    dataType: 'json',
    data: {'code': 300268}
    success: function (dat) {
        // 取数据 显示
        console.log(dat)

    }
})
    .done(function (dat) {
        alert(dat.name);
    })
    .fail(function () {
        alert('服务器超时，请重试！');
    });
```

**新式方法**(推荐)

```js
$.ajax({
    url: '/change_data',
    type: 'GET',
    dataType: 'json',
    data: {'code': 300268}
})
    .done(function (dat) {
        alert(dat.name);
    })
    .fail(function () {
        alert('服务器超时，请重试！');
    });
```

#### AJAX简写方法

```js
// $.请求方法(请求路径, 请求数据,成功后的回调函数)
$.get("/change_data", {'code': 300268},
    function (dat) {
        alert(dat.name);
    });

$.post("/change_data", {'code': 300268},
    function (dat) {
        alert(dat.name);
    });
```

##### 同源策略

ajax请求的页面或资源只能是同一个域下面的资源，不能是其他域的资源，这是在设计ajax时基于安全的考虑。特征报错提示：

```
XMLHttpRequest cannot load https://www.baidu.com/. No  
'Access-Control-Allow-Origin' header is present on the requested resource.  
Origin 'null' is therefore not allowed access.
```

#### ajax请求流程

不能直接请求数据库

ajax通过数据接口（框架 自己开发）来访问数据库

接口文档

ajax不能直接连接操作数据库,所以需要找第三方对象来完成交互,这个第三方交互就是python程序写出来的数据接口,
ajax通过HTTP请求请求接口(路由,视图函数)来返回json数据

后面会直接使用框架来开发接口, 框架是更强大的封装(一套体系化的解决方案), 比函数库更加强大, 需要更少的代码量

ajax请求 python程序开发接口 接口返回数据库

前后端分离

ajax最重要的是请求成功之后的**回调函数**: (得到数据(json),默认成功后的回调函数的第一个参数(dat,data)可以自定义名称

回调函数思路: console.log(dat)查看数据格式, 取数据, 然后放数据(显示数据, 拼接数据)

JS对象的属性访问方法 对象.属性

**HTML允许自定义熟悉以完成自己想要的功能**  -- 自定义一个html属性: 获取股票代码

当返回的数据类型声明错误后, jq将无法获取到该值

## API

### $().serialize()_[序列化](https://api.jquery.com/serialize/)

# Bootstrap

类似框架: LayUI / EasyUI

[快速上手](https://gitbook.cn/books/5af3a7f58857aa0bdae293ee/index.html)

## 核心思想

栅格系统 | 组件化

## 栅格系统

Bootstrap
提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的[预定义类](https://v3.bootcss.com/css/#grid-example-basic)
，还有强大的[mixin 用于生成更具语义的布局](https://v3.bootcss.com/css/#grid-less)。

![2e2eb9389b504fc2e4a5d665e4dde71191ef6dd3](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426193819.png)

### 简介

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。下面就介绍一下
Bootstrap 栅格系统的工作原理：

- “行（row）”必须包含在 `.container` （固定宽度）或 `.container-fluid` （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
- 通过“行（row）”在水平方向创建一组“列（column）”。
- 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
- 类似 `.row` 和 `.col-xs-4` 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
- 通过为“列（column）”设置 `padding` 属性，从而创建列与列之间的间隔（gutter）。通过为 `.row` 元素设置负值 `margin`
  从而抵消掉为 `.container` 元素设置的 `padding`，也就间接为“行（row）”所包含的“列（column）”抵消掉了`padding`。
- 负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
- 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 `.col-xs-4` 来创建。
- 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
- 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 `.col-md-*`
  栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 `.col-lg-*`不存在，
  也影响大屏幕设备。

通过研究后面的实例，可以将这些原理应用到你的代码中。

# Node.js

从开发的角度来看, Electron application 本质上是一个 **Node. js 应用程序**。 与 Node.js
模块相同，应用的入口是 `package.json` 文件。

## 快速开始

安装 Electron

```shell
npm install --save-dev electron	--verbose
```

Electron apps 使用JavaScript开发，其工作原理和方法与Node.js 开发相同。 `electron`
模块包含了Electron提供的所有API和功能，引入方法和普通Node.js模块一样：

```javascript
const electron = require('electron')
```

## API

### require() 函数

