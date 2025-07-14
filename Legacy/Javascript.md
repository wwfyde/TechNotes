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

| 语法                             | 描述                                           |
| :------------------------------- | :--------------------------------------------- |
| $(this)                          | 当前获取的 HTML 元素                           |
| $("p")                           | 所有 \<p> 元素                                 |
| $('p').eq(0)                     | p元素中的第一个元素 -1 倒数第一$('li:eq(0)')   |
| $("p .intro")                    | 所有 class="intro" 的 \<p> 元素                |
| $("#intro")                      | id="intro" 的元素                              |
| $('div').has('p')                | 选择包含p元素的div元素(选中父级)               |
| $('div').find('p')               | 选择包含div元素下的p元素(选中子集)             |
| $('div').not('.cls)              | 选择class不等于cls的div元素                    |
| $("ul li:first")                 | 每个 \<ul> 的第一个 \<li> 元素 最后一个last    |
| $('li').eq(index)=\$('li:eq(0)') | 列表中索引值为 `index` 的元素 **支持倒数(-1)** |
| $('li[class=box]')               | 列表中属性class的值为box 的元素                |
| $('[herf]')                      | 选取所有带有 href 属性的元素                   |

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

| **名称**                                                     | **说明**                                                     | **举例**                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------- |
| **[#id](http://docs.jquery.com/Selectors/id#id)**            | 根据元素Id选择                                               | $("divId") 选择ID为divId的元素         |
| **[element](http://docs.jquery.com/Selectors/element#element)** | 根据元素的名称选择,                                          | $("a") 选择所有<a>元素                 |
| **[.class](http://docs.jquery.com/Selectors/class#class)**   | 根据元素的css类选择                                          | $(".bgRed") 选择所用CSS类为bgRed的元素 |
| **[\*](http://docs.jquery.com/Selectors/all)**               | 选择所有元素                                                 | $("*")选择页面所有元素                 |
| **[selector1,  selector2,  selectorN](http://docs.jquery.com/Selectors/multiple#selector1selector2selectorN)** | 可以将几个选择器用","分隔开然后再拼成一个选择器字符串.会同时选中这几个选择器匹配的内容. | $("#divId, a, .bgRed")                 |

### 2.层次选择器 **Hierarchy**

| **名称**                                                     | **说明**                                                     | **举例**                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **[ancestor descendant](http://docs.jquery.com/Selectors/descendant#ancestordescendant)** | 使用"form input"的形式选中form中的所有input元素.即ancestor(祖先)为from, descendant(子孙)为input. | $(".bgRed div") 选择CSS类为bgRed的元素中的所有<div>元素.     |
| **[parent > child](http://docs.jquery.com/Selectors/child#parentchild)** | 选择parent的直接子节点child. child必须包含在parent中并且父类是parent元素. | $(".myList>li") 选择CSS类为myList元素中的直接子节点<li>对象. |
| **[prev + next](http://docs.jquery.com/Selectors/next#prevnext)** | prev和next是两个同级别的元素. 选中在prev元素后面的next元素.  | $("#hibiscus+img")选在id为hibiscus元素后面的img对象.         |
| **[prev ~ siblings](http://docs.jquery.com/Selectors/siblings#prevsiblings)** | 选择prev后面的根据siblings过滤的元素  注:siblings是过滤器    | $("#someDiv~[title]")选择id为someDiv的对象后面所有带有title属性的元素 |

### 3.基本过滤器 **Basic Filters**

| **名称**                                                     | **说明**                                                  | **举例**                                                     |
| ------------------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------ |
| **[:first](http://docs.jquery.com/Selectors/first)**         | 匹配找到的第一个元素                                      | 查找表格的第一行:$("tr:first")                               |
| **[:last](http://docs.jquery.com/Selectors/last)**           | 匹配找到的最后一个元素                                    | 查找表格的最后一行:$("tr:last")                              |
| **[:not(selector)](http://docs.jquery.com/Selectors/not#selector)** | 去除所有与给定选择器匹配的元素                            | 查找所有未选中的 input 元素: $("input:not(:checked)")        |
| **[:even](http://docs.jquery.com/Selectors/even)**           | 匹配所有索引值为偶数的元素，从 0 开始计数                 | 查找表格的1、3、5...行:$("tr:even")                          |
| **[:odd](http://docs.jquery.com/Selectors/odd)**             | 匹配所有索引值为奇数的元素，从 0 开始计数                 | 查找表格的2、4、6行:$("tr:odd")                              |
| **[:eq(index)](http://docs.jquery.com/Selectors/eq#index)**  | 匹配一个给定索引值的元素  注:index从 0 开始计数           | 查找第二行:$("tr:eq(1)")                                     |
| **[:gt(index)](http://docs.jquery.com/Selectors/gt#index)**  | 匹配所有大于给定索引值的元素  注:index从 0 开始计数       | 查找第二第三行，即索引值是1和2，也就是比0大:$("tr:gt(0)")    |
| **[:lt(index)](http://docs.jquery.com/Selectors/lt#index)**  | 选择结果集中索引小于 N 的 elements  注:index从 0 开始计数 | 查找第一第二行，即索引值是0和1，也就是比2小:$("tr:lt(2)")    |
| **[:header](http://docs.jquery.com/Selectors/header)**       | 选择所有h1,h2,h3一类的header标签.                         | 给页面内所有标题加上背景色: $(":header").css("background", "#EEE"); |
| **[:animated](http://docs.jquery.com/Selectors/animated)**   | 匹配所有正在执行动画效果的元素                            | 只有对不在执行动画效果的元素执行一个动画特效:$("#run").click(function(){   $("div:not(:animated)").animate({ left: "+=20" }, 1000);  }); |

### 4. 内容过滤器 Content Filters

| **名称**                                                     | **说明**                             | **举例**                                                     |
| ------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------ |
| **[:contains(text)](http://docs.jquery.com/Selectors/contains#text)** | 匹配包含给定文本的元素               | 查找所有包含 "John" 的 div 元素:$("div:contains('John')")    |
| **[:empty](http://docs.jquery.com/Selectors/empty)**         | 匹配所有不包含子元素或者文本的空元素 | 查找所有不包含子元素或者文本的空元素:$("td:empty")           |
| **[:has(selector)](http://docs.jquery.com/Selectors/has#selector)** | 匹配含有选择器所匹配的元素的元素     | 给所有包含 p 元素的 div 元素添加一个 text 类: $("div:has(p)").addClass("test"); |
| **[:parent](http://docs.jquery.com/Selectors/parent)**       | 匹配含有子元素或者文本的元素         | 查找所有含有子元素或者文本的 td 元素:$("td:parent")          |

### 5.可见性过滤器 **Visibility Filters**

| **名称**                                                 | **说明**                                                     | **举例**                                |
| -------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------- |
| **[:hidden](http://docs.jquery.com/Selectors/hidden)**   | 匹配所有的不可见元素注:在1.3.2版本中, hidden匹配自身或者父类在文档中不占用空间的元素.如果使用CSS visibility属性让其不显示但是占位,则不输入hidden. | 查找所有不可见的 tr 元素:$("tr:hidden") |
| **[:visible](http://docs.jquery.com/Selectors/visible)** | 匹配所有的可见元素                                           | 查找所有可见的 tr 元素:$("tr:visible")  |

### 6.属性过滤器 **Attribute Filters**

| **名称**                                                     | **说明**                                     | **举例**                                                     |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| **[[attribute\]](http://docs.jquery.com/Selectors/attributeHas#attribute)** | 匹配包含给定属性的元素                       | 查找所有含有 id 属性的 div 元素:  $("div[id]")               |
| **[[attribute=value\]](http://docs.jquery.com/Selectors/attributeEquals#attributevalue)** | 匹配给定的属性是某个特定值的元素             | 查找所有 name 属性是 newsletter 的 input 元素: $("input[name='newsletter']").attr("checked", true); |
| **[[attribute!=value\]](http://docs.jquery.com/Selectors/attributeNotEqual#attributevalue)** | 匹配给定的属性是不包含某个特定值的元素       | 查找所有 name 属性不是 newsletter 的 input 元素:  $("input[name!='newsletter']").attr("checked", true); |
| **[[attribute^=value\]](http://docs.jquery.com/Selectors/attributeStartsWith#attributevalue)** | 匹配给定的属性是以某些值开始的元素           | $("input[name^='news']")                                     |
| **[[attribute$=value\]](http://docs.jquery.com/Selectors/attributeEndsWith#attributevalue)** | 匹配给定的属性是以某些值结尾的元素           | 查找所有 name 以 'letter' 结尾的 input 元素:  $("input[name$='letter']") |
| **[[attribute\*=value\]](http://docs.jquery.com/Selectors/attributeContains#attributevalue)** | 匹配给定的属性是以包含某些值的元素           | 查找所有 name 包含 'man' 的 input 元素:  $("input[name*='man']") |
| **[[attributeFilter1\][attributeFilter2][attributeFilterN]](http://docs.jquery.com/Selectors/attributeMultiple#attributeFilter1attributeFilter2attributeFilterN)** | 复合属性选择器，需要同时满足多个条件时使用。 | 找到所有含有 id 属性，并且它的 name 属性是以 man 结尾的:  $("input[id][name$='man']") |

### **7.子元素过滤器 \**Child Filters\****

| **名称**                                                     | **说明**                                                     | **举例**                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------- |
| **[:nth-child(index/even/odd/equation)](http://docs.jquery.com/Selectors/nthChild#index)** | 匹配其父元素下的第N个子或奇偶元素':eq(index)' 只匹配一个元素，而这个将为每一个父元素匹配子元素。:nth-child从1开始的，而:eq()是从0算起的！可以使用:  nth-child(even)  :nth-child(odd)  :nth-child(3n)  :nth-child(2)  :nth-child(3n+1)  :nth-child(3n+2) | 在每个 ul 查找第 2 个li:  $("ul li:nth-child(2)")     |
| **[:first-child](http://docs.jquery.com/Selectors/firstChild)** | 匹配第一个子元素':first' 只匹配一个元素，而此选择符将为每个父元素匹配一个子元素 | 在每个 ul 中查找第一个 li:  $("ul li:first-child")    |
| **[:last-child](http://docs.jquery.com/Selectors/lastChild)** | 匹配最后一个子元素':last'只匹配一个元素，而此选择符将为每个父元素匹配一个子元素 | 在每个 ul 中查找最后一个 li:  $("ul li:last-child")   |
| **[:only-child](http://docs.jquery.com/Selectors/onlyChild)** | 如果某个元素是父元素中唯一的子元素，那将会被匹配如果父元素中含有其他元素，那将不会被匹配。 | 在 ul 中查找是唯一子元素的 li:  $("ul li:only-child") |

### 8.表单选择器 Forms

| **名称**                                                   | **说明**                                        | **解释**                          |
| ---------------------------------------------------------- | ----------------------------------------------- | --------------------------------- |
| **[:input](http://docs.jquery.com/Selectors/input)**       | 匹配所有 input, textarea, select 和 button 元素 | 查找所有的input元素:  $(":input") |
| **[:text](http://docs.jquery.com/Selectors/text)**         | 匹配所有的文本框                                | 查找所有文本框:  $(":text")       |
| **[:password](http://docs.jquery.com/Selectors/password)** | 匹配所有密码框                                  | 查找所有密码框:  $(":password")   |
| **[:radio](http://docs.jquery.com/Selectors/radio)**       | 匹配所有单选按钮                                | 查找所有单选按钮                  |
| **[:checkbox](http://docs.jquery.com/Selectors/checkbox)** | 匹配所有复选框                                  | 查找所有复选框:  $(":checkbox")   |
| **[:submit](http://docs.jquery.com/Selectors/submit)**     | 匹配所有提交按钮                                | 查找所有提交按钮:  $(":submit")   |
| **[:image](http://docs.jquery.com/Selectors/image)**       | 匹配所有图像域                                  | 匹配所有图像域:  $(":image")      |
| **[:reset](http://docs.jquery.com/Selectors/reset)**       | 匹配所有重置按钮                                | 查找所有重置按钮:  $(":reset")    |
| **[:button](http://docs.jquery.com/Selectors/button)**     | 匹配所有按钮                                    | 查找所有按钮:  $(":button")       |
| **[:file](http://docs.jquery.com/Selectors/file)**         | 匹配所有文件域                                  | 查找所有文件域:  $(":file")       |

### **9.表单过滤器 \**Form Filters\****

| **名称**                                                   | **说明**                                                     | **解释**                                             |
| ---------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| **[:enabled](http://docs.jquery.com/Selectors/enabled)**   | 匹配所有可用元素                                             | 查找所有可用的input元素:  $("input:enabled")         |
| **[:disabled](http://docs.jquery.com/Selectors/disabled)** | 匹配所有不可用元素                                           | 查找所有不可用的input元素:  $("input:disabled")      |
| **[:checked](http://docs.jquery.com/Selectors/checked)**   | 匹配所有选中的被选中元素(复选框、单选框等，不包括select中的option) | 查找所有选中的复选框元素:  $("input:checked")        |
| **[:selected](http://docs.jquery.com/Selectors/selected)** | 匹配所有选中的option元素                                     | 查找所有选中的选项元素:  $("select option:selected") |

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

| 方法          | 作用                   |
| ------------- | ---------------------- |
| fadeOut()     | 淡出                   |
| fadeToggle()  | 切换淡入淡出           |
| hide()        | 隐藏元素               |
| show()        | 显示元素               |
| toggle()      | 切换元素的可见状态     |
| slideDown()   | 向下展开               |
| slideUp()     | 向上卷起               |
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

| 方法     | 说明                                         |
| -------- | -------------------------------------------- |
| blur()   | 元素失去焦点                                 |
| focus()  | 元素获得焦点                                 |
| click()  | 鼠标单击                                     |
| hover()  | 同时为mouseenter和mouseleave事件指定处理函数 |
| ready()  | DOM加载完成                                  |
| submit() | 用户递交表单                                 |

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

| 参数         | 说明                                                       |
| ------------ | ---------------------------------------------------------- |
| url          | 请求地址                                                   |
| type         | 请求方式，默认是'GET'，常用的还有'POST'                    |
| dataType     | 设置返回的数据格式，常用的是'json'格式，也可以设置为'html' |
| data         | 设置发送给服务器的数据                                     |
| success/done | 设置请求成功后的回调函数                                   |
| error/fail   | 设置请求失败后的回调函数                                   |
| async        | 设置是否异步，默认值是'true'，表示异步                     |

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