# Git参考文档

> Git:开源分布式版本控制系统
>
> 使用git同步代码到远程 github 服务器

## 参考文档

- [官方文档](https://git-scm.com/docs)
- [github-git-cheat-sheet](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)
- [图表化理解git git-cheat-sheet](https://ndpsoftware.com/git-cheatsheet.html#loc=index;)
- [如何阅读官方文档](https://github.com/git/git/blob/master/Documentation/CodingGuidelines)

## 一图胜千言

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202305031129962.png)

![image-20220407092219221](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202204070922505.png)

![img](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202204070924908.png)

## 遇到的问题

问题: git默认不会推送空文件夹至远程服务器
解决: 需要在该文件夹中新建一个空文件

### **拒绝合并两个完全不相关的分支**

> 核心解决方法是 只初始化一次仓库,

```
refusing to merge unrelated histories. 
```

#### 方法一

当出现这种问题的解决方案时, 需要先克隆远程仓库到本地, 在进行推送(之前工作区的文件需要手动复制过来并跟踪这些文件)

**总之, 从远程新建仓库的方法似乎没有意义, 应该是非法的, 即使出现这种情况了, 也应该将远程仓库克隆到本地,在进行项目的进行
**

**建议, 从本地开始新建创建仓库, 然后关联远程的空仓库**

#### 方法二

当从本地新建仓库推送到远程时, 远程仓库不应该被初始化, 仅仅需要新建一个仓库(create repository)即可 ,
然后使用 `git remote add origin` 来将本地仓库关联到远程 , 并推送到远程

## 简介

**Git** 是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。

项目中集成git

将项目推送到码云

git源代码管理 --多人协同管理一个项目(实现代码互通)

版本管理 分布式版本控制系统

#### 作用

方便多人协同开发

方便版本控制

#### Git管理源代码特点

.git隐藏文件夹, 作为本地代码仓库

git add . 提交到暂存区

git commit 提交到本地仓库区

git push 推送到远程服务器

push 将本地仓库 推到远程

工作区和暂存区和本地仓库区

版本库(.git): 暂存区, 仓库区(产生版本)

## 常见需求和问题

A. 远程git代码到本地

B.本地新建仓库到远程(代码托管平台)

TODO 当 Git 存储库变大时，你可以选择将历史提交记录压缩为单个提交。

## 安装

[官方地址](https://git-scm.com/)

[参考文档](https://git-scm.com/book/zh/v2)

要点: 编辑器选择 vs code

## 基础语法规则

典型的bash /terminal /shell终端 命令行 风格

git command [parameter]

| 命令     | 中文说明            |
|--------|-----------------|
| git    | 命令关键字           |
| status | 查看仓库状态          |
| init   | 初始化仓库  --       |
| clone  | 从远程克隆代码到本地      |
| add    | 添加内容到索引 `.`表示所有 |
| commit | 记录改变项到本地仓库      |
| push   | 推送至远程服务器        |
| pull   | 拉取资源到本地仓库       |
| log    | 查看版本提交日志        |
| tag    | 为提交版本打标签        |
|        |                 |

![prompted](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426194900.png)



# 专业术语-Glossary

## 参考资料

- https://git-scm.com/docs/gitglossary



## 速查表-CheatSheet

|         英文          |    中文    | 备注             |
|:-------------------:|:--------:|----------------|
|        stash        |   存档库    |                |
|       branch        |    分支    | 提交索引           |
|      workspace      |   工作区    | working tree   |
|        index        | (暂存区/索引) | staged         |
|  local repository   |  本地版本库   | 仓库区, committed |
| upstream repository |  上游版本库   |                |
|        main         |   默认分支   | default branch |

## workspace

- 工作区(working tree): 本地的物理文件夹, 所有git操作入口
    - 别称: 工作树,目录树,
    - tree

## index

- 暂存区(index, staging): 索引文档, 标记了被追踪的文档
- 为文件或目录添加索引, 以为这该文件被跟踪, git会检查该文件被修改, 删除, 重命名等操作

## tree



## repository

- 仓库区(, commited, repo):
    - 提交区, 提交树, 已提交,.git repository
    - 本地仓库
    - 远程仓库

## branch

```text
A branch in Git is simply a lightweight movable pointer to one of these commits. The default branch name in Git is master. As you start making commits, you’re given a master branch that points to the last commit you made. Every time you commit, the master branch pointer moves forward automatically.
```

分支(branch): 一个轻型可移动的 commit 指针

## main

默认分支 默认分支名称可以通过git-config配置

## HEAD

```text
HEAD: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using git switch

In Git, this is a pointer to the local branch you’re currently on. 
To switch to an existing branch, you run the git checkout command. Let’s switch to the new testing branch:git checkout testing

This moves HEAD to point to the testing branch.
```

- **HEAD**: 代表你当前的工作目录。使用`git checkout` 可移动 HEAD 指针到不同的分支、标记(tags)或提交
    - Usually the HEAD file is a symbolic reference to the branch you’re currently on.
    - `cat .git/HEAD`
    - ref: refs/heads/main
    - HEAD指向当前分支最近的提交(latest commit/最新提交)
    - 本质上表示工作目录的当前提交(It essentially represents the "current" commit in your working directory.)

## refs

- refs, references:
    - 可以理解为指针


## origin-已跟踪版本库

其实也可以使用其他名称, 只是一种(约定成俗的-idiomatic)命名, 当跟踪多个版本库时, 则需要使用额外的名称来引用它

## working tree

The tree of actual checked out files. The working tree normally contains the contents of the [HEAD](https://git-scm.com/docs/gitglossary#def_HEAD)commit’s tree, plus any local changes that you have made but not yet committed.

工作目录包含HEAD tree + 任何变更,也就是说工作目录就是当前分支的最近提交

# 官方文档

## 直接记录快照，而非差异比较

传统版本控制系统:将它们保存的信息看作是一组基本文件和每个文件随时间逐步累积的差异,存储每个文件与初始版本的差异.。

Git 不按照以上方式对待或保存数据。 反之，Git 更像是把数据看作是对小型文件系统的一组快照。 每次你提交更新，或在 Git
中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引为了高效，如果文件没有修改，Git
不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待数据更像是一个 **快照流**。

![快照](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426194906.png)

关于**快照**(snapshot)[特定时间点的一个状态]:
当删除一个文件后，文件原来所占的磁盘空间并不是被清空，而是被文件系统标记为“已废弃，可修改”的状态，快照的作用就相当于将旧文件所占的空间保留下来，并且保存一个引用，而新文件中会继续使用与旧文件内容相同部分的磁盘空间，不同部分则写入新的磁盘空间。总的来说git其实也算是保存diff的方式，只不过是在文件系统层次上实现的。”

## 近乎所有操作都是本地执行

在 Git 中的绝大多数操作都只需要访问本地文件和资源，一般不需要来自网络上其它计算机的信息。 如果你习惯于所有操作都有网络延时开销的集中式版本控制系统，Git
在这方面会让你感到速度之神赐给了 Git 超凡的能量。 因为你在本地磁盘上就有项目的完整历史，所以大部分操作看起来瞬间完成。

## Git 保证完整性

Git 中所有数据在存储前都计算校验和，然后以校验和来引用。 这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。 这个功能建构在
Git 底层，是构成 Git 哲学不可或缺的部分。 若你在传送过程中丢失信息或损坏文件，Git 就能发现。

Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）。 这是一个由 40 个十六进制字符（0-9 和 a-f）组成的字符串，基于 Git
中文件的内容或目录结构计算出来。 SHA-1 哈希看起来是这样：

```
24b9da6552252987aa493b52f8696cd6d3b00373
```

实际上，**Git 数据库中保存的信息都是以文件内容的哈希值来索引**，而不是文件名。

## Git 一般只添加数据

你执行的 Git 操作，几乎只往 Git 数据库中增加数据。 很难让 Git 执行任何不可逆操作，或者让它以任何方式清除数据。 同别的 VCS
一样，未提交更新时有可能丢失或弄乱修改的内容；但是一旦你提交快照到 Git 中，就难以再丢失数据，特别是如果你定期的推送数据库到其它仓库的话。

这使得我们使用 Git 成为一个安心愉悦的过程，因为我们深知可以尽情做各种尝试，而没有把事情弄糟的危险。 更深度探讨 Git
如何保存数据及恢复丢失数据的话题，请参考[撤消操作](https://git-scm.com/book/zh/v2/ch00/r_undoing)。

## 三种状态

> be committed 索引区, 暂存区
>
> commit 版本库

Git 有三种状态，你的文件可能处于其中之一：已提交（committed）、已修改（modified）和已暂存（staged）。

- **Committed** means that the data is safely stored in your local database. 已提交表示数据已经安全的保存在本地数据库中
- **Modified** means that you have changed the file but have not committed it to your database yet.
  已修改表示修改了文件，但还没保存到数据库中。

- **Staged** means that you have marked a modified file in its current version to go into your next commit snapshot.
  已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。



> This leads us to the three main sections of a Git project: the working tree, the staging area, and the Git directory.

这为我们引入了Git 项目的三个主要部分: 工作区(the working tree), 暂存区(the staging area, index, cache)和Git目录(Git directory, Repository仓库区)

> [!tip]
>
> 暂存区只是一个索引文件, 通常位于 .git目录的index文件中(这是一个二进制文件, 不是目录)

![三个工作区](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426194911.png)

Git 仓库(.git directory)目录是 Git 用来保存项目的元数据(metadata)和对象(object)数据库的地方。 这是 Git
中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据。

工作目录(working directory)是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。

暂存区域(staging area)是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 有时候也被称作`‘索引’`
，不过一般说法还是叫暂存区域。 -- 暂存区是一个抽象层的区域

基本的 Git 工作流程如下：

1. 在工作目录中修改文件。
2. 暂存文件，将文件的快照放入暂存区域。
3. 提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。

如果 Git 目录中保存着特定版本的文件，就属于已提交状态。 如果作了修改并已放入暂存区域，就属于已暂存状态。
如果自上次取出后，作了修改但还没有放到暂存区域，就是已修改状态。
在[Git 基础](https://git-scm.com/book/zh/v2/ch00/ch02-git-basics)一章，你会进一步了解这些状态的细节，并学会如何根据文件状态实施后续操作，以及怎样跳过暂存直接提交。

## 文件状态

### Untracked

### Unmodified

### Modified

### Staged

### Deleted

### Renamed

### ignored

## 用户信息

当安装完 Git 应该做的第一件事就是设置你的用户名称与邮件地址。 这样做很重要，因为每一个 Git
的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改：

```console
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

**再次强调**，如果使用了 `--global` 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。
当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 `--global` 选项的命令来配置。

## 文本编辑器

/etc/gitconfig 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果使用带有 --system 选项的 git config 时，它会从此文件读写配置变量。

既然用户信息已经设置完毕，你可以配置默认文本编辑器了，当 Git 需要你输入信息时会调用它。 如果未配置，Git 会使用操作系统默认的文本编辑器，通常是
Vim。 如果你想使用不同的文本编辑器，例如 Emacs，可以这样做：

```shell
$ git config --global core.editor code
```

检查配置信息
如果想要检查你的配置，可以使用 `git config --list` 命令来列出所有 Git 当时能找到的配置。

## 记录每次更新到仓库

请记住，你工作目录下的每一个文件都不外乎这两种状态：已跟踪或未跟踪。
已跟踪的文件是指那些被纳入了版本控制的文件，在上一次快照中有它们的记录，在工作一段时间后，它们的状态可能处于未修改，已修改或已放入暂存区。
工作目录中除已跟踪文件以外的所有其它文件都属于未跟踪文件，它们既不存在于上次快照的记录中，也没有放入暂存区。
初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态。

编辑过某些文件之后，由于自上次提交后你对它们做了修改，Git 将它们标记为已修改文件。
我们逐步将这些修改过的文件放入暂存区，然后提交所有暂存了的修改，如此反复。所以使用 Git 时文件的生命周期如下：

![文件状态的变化周期](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/20210426194916.png)

## 检查当前文件状态

要查看哪些文件处于什么状态，可以用 `git status` 命令。 如果在克隆仓库后立即使用此命令，会看到类似这样的输出：

```console
$ git status
On branch main
nothing to commit, working directory clean
```

这说明你现在的工作目录相当干净。换句话说，所有已跟踪文件在上次提交后都未被更改过。 此外，上面的信息还表明，当前目录下没有出现任何处于未跟踪状态的新文件，否则
Git 会在这里列出来。 最后，该命令还显示了当前所在分支，并告诉你这个分支同远程服务器上对应的分支没有偏离。 现在，分支名是
“main”,这是默认的分支名。 我们在 [Git 分支](https://git-scm.com/book/zh/v2/ch00/ch03-git-branching) 会详细讨论分支和引用。

## 忽略文件

一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。
在这种情况下，我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式。

文件 `.gitignore` 的格式规范如下：

- 所有空行或者以 `＃` 开头的行都会被 Git 忽略。
- 可以使用标准的 glob 模式匹配。
- 匹配模式可以以（`/`）开头防止递归。
- 匹配模式可以以（`/`）结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（`!`）取反。

## 工作区/暂存区/版本库

工作区: workspace

暂存区: stage index

版本库(仓库区):

main :

目录树: tree

# 常用命令

| 说明     | 命令              |
|--------|-----------------|
| 查看帮助信息 | git git --help  |
|        |                 |
| 状态查询   | git status      |
| 初始化仓库  | git init        |
| 添加到暂存区 | git add .       |
| 提交到仓库区 | git commit      |
| 查看日志   | git log /reflog |

> git reflog 可以查看所有分支的所有操作记录（包括commit和reset的操作），包括已经被删除的commit记录，git log
> 则不能察看已经删除了的commit记录

# index-索引

## HEAD

- HEAD 表示当前最新版本(相对)
- HEAD^表示当前最新版本的前一个版本
- HEAD^^表示当前最新版本的前两个版本
- HEAD~1 表示当前最新版本的前一个版本
- HEAD~10 表示当前最新版本的前10个版本

## hash

## Tag

## main

## branch

# log-日志



```shell
# 美化日志
git log --all --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative

# 显示路径
git log --graph
```



## reflog-引用日志

# status-状态

> 查看目录git状态

查看

当前所在分支,

关联的远程分支,

检测工作区未跟踪的文件, *对比暂存区*

检测提交状态, 是否有文件提交到仓库区

```shell
$ git status
On branch dev
Your branch is up to date with 'origin/dev'.

nothing to commit, working tree clean

```

# **config**-配置

https://git-scm.com/docs/git-config

[官方文档](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

```shell
# 查看配置文件
git config -l
git config --global -l

# 查看某项配置
git config --global user.name

# 清除某项配置
git config --global --unset

# 配置邮箱
git config --global user.email 'wwfyde@gmail.com'

# 配置用户名
git config --global user.name 'wwfyde'

# 配置默认编辑器
git config --global core.editor code
git config --global core.editor /usr/bin/vim

# 配置中文路径显示问题 
git config --global core.quotePath false


# 启用有帮助的彩色命令行输出(默认启用)
git config --global color.ui auto

# 提交时将CRLF转换为LF
git config --global core.autocrlf input

# 设置初始化时默认分支名
git config --global init.defaultBranch main
 
# 配置代理
git config --global https.proxy http://192.168.0.133:7890 
git config --global http.proxy http://192.168.0.133:7890
git config --global all.proxy socks5://192.168.0.133:7890
git config --global --get http.proxy  # 获取配置
git config --global --unset http.proxy # 恢复到默认

```

# Guides

# gitignore

> [官方文档: https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)





如果在创建.gitignore文件之前就已经add或者commit了，那么即使在.gitignore文件中写入新的规则，这些规则也不会起作用。
因为.gitignore文件只能作用于未被跟踪的文件（Untracked Files），也就是那些从来没有被Git记录过的文件（自添加以后，从未 add 及
commit 过的文件）。如果文件曾经被 Git 记录过，那么.gitignore就对它们完全无效。
这时可以先把本地缓存删除（改变成未track状态），然后再提交：

```
1 git rm -r --cached .
2 
3 git add .
4 
5 git commit -m 'update .gitignore'
```

> 文件夹强烈建议末尾加上 `/` 标识符

```shell
# 这是pycharm idea 配置文件 不需要同步
.idea/

# 这是vscode配置文件
.vscode/

#其他配置文件
*.pyc
__pycache__/


# 测试是否生效
*.mytest

# 匹配root下的所以foo文件或目录
# 以下两种方式等同
foo
**/foo

# 仅匹配目录
foo/

# 仅匹配根目录
/foo

```

## PATTERN FORMAT

- A blank line matches no files, so it can serve as a separator for readability.
    - 空行不匹配文件, 因此空行可以用作分隔符以提升可读性
- A line starting with # serves as a comment. Put a backslash ("`\`") in front of the first hash for patterns that begin with a hash.
    - 以"#"开头的行表示注释. 以反斜杠`\`符号开头
- Trailing spaces are ignored unless they are quoted with backslash ("`\`").
    - 
- An optional prefix "`!`" which negates the pattern; any matching file excluded by a previous pattern will become included again. It is not possible to re-include a file if a parent directory of that file is excluded. Git doesn’t list excluded directories for performance reasons, so any patterns on contained files have no effect, no matter where they are defined. Put a backslash ("`\`") in front of the first "`!`" for patterns that begin with a literal "`!`", for example, "`\!important!.txt`".
- The slash */* is used as the directory separator. Separators may occur at the beginning, middle or end of the `.gitignore` search pattern.
- If there is a separator at the beginning or middle (or both) of the pattern, then the pattern is relative to the directory level of the particular `.gitignore` file itself. Otherwise the pattern may also match at any level below the `.gitignore` level.
- If there is a separator at the end of the pattern then the pattern will only match directories, otherwise the pattern can match both files and directories.
- For example, a pattern `doc/frotz/` matches `doc/frotz` directory, but not `a/doc/frotz`directory; however `frotz/` matches `frotz` and `a/frotz` that is a directory (all paths are relative from the `.gitignore` file).
- An asterisk "`*`" matches anything except a slash. The character "`?`" matches any one character except "`/`". The range notation, e.g. `[a-zA-Z]`, can be used to match one of the characters in a range. See fnmatch(3) and the FNM_PATHNAME flag for a more detailed description.

Two consecutive asterisks ("`**`") in patterns matched against full pathname may have special meaning:

- A leading "`**`" followed by a slash means match in all directories. For example, "`**/foo`" matches file or directory "`foo`" anywhere, the same as pattern "`foo`". "`**/foo/bar`" matches file or directory "`bar`" anywhere that is directly under directory "`foo`".
- A trailing "`/**`" matches everything inside. For example, "`abc/**`" matches all files inside directory "`abc`", relative to the location of the `.gitignore` file, with infinite depth.
- A slash followed by two consecutive asterisks then a slash matches zero or more directories. For example, "`a/**/b`" matches "`a/b`", "`a/x/b`", "`a/x/y/b`" and so on.
- Other consecutive asterisks are considered regular asterisks and will match according to the previous rules.

## 语法详解

## git check-ignore

> - Debug gitignore / exclude files
> - Debug 排除文件
> - [官方文档](https://git-scm.com/docs/git-check-ignore)
>

# Getting and Creating Projects

## init

## clone

# Basic Snapshotting

## add

```shell
# 
git add .

# 添加所有 unversioned files 未跟踪的
# 添加所有 修改/增加/删除 的文件到暂存区(包括未跟踪的文件)
git add --all
git add -A


```

> Notes: `git add .` 和 `git add --all` 均会忽略`.gitignore`中的规则. 初始化时二者均没问题

## status

## mv-移动

# diff-对比

查看尚未暂存的文件更新了哪些部分,

**不加参数直接输入`git diff`**

此命令比较的是工作目录中当前文件和暂存区域快照之间的差异， 也就是修改之后还没有暂存起来的变化内容。

**若要查看已暂存的将要添加到下次提交里的内容**，可以用 `git diff --cached` 命令。还允许使用 `git diff --staged`(
暂存区和本地仓库)

```shell
# Changes in the working tree not yet staged for the next commit.
git diff  # 比较 工作区 与暂存区 

# Changes between the index and your last commit
git diff --cached [<commit>]  # 比较暂存区与最近的一次提交

# Changes in the working tree since your last commit;
git diff HEAD  # 对比工作区与仓库区

# 对比不同分支的文件 
git diff man dev -- <file>
```

**若要查看已暂存的将要添加到下次提交里的内容**，可以用 `git diff --cached` 命令。还允许使用 `git diff --staged`(
暂存区和本地仓库)

请注意，git diff 本身**只显示尚未暂存的改动**，而不是自上次提交以来所做的所有改动。
所以有时候你一下子暂存了所有更新过的文件后，运行 `git diff` 后却什么也没有，就是这个原因。

像之前说的，暂存 `CONTRIBUTING.md` 后再编辑，运行 `git status` 会看到暂存前后的两个版本。 如果我们的环境（终端输出）看起来如下：

对比版本库与工作区

```
git diff HEAD --login.py
git diff 版本库 --工作区
```

对比当前版本 和上个版本

```
git diff HEAD HEAD^ --login.py
```

# commit-提交

## 官方文档

git-commit - Record changes to the repository

将改变记录到仓库

```shell
git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend]
	   [--dry-run] [(-c | -C | --squash) <commit> | --fixup [(amend|reword):]<commit>)]
	   [-F <file> | -m <msg>] [--reset-author] [--allow-empty]
	   [--allow-empty-message] [--no-verify] [-e] [--author=<author>]
	   [--date=<date>] [--cleanup=<mode>] [--[no-]status]
	   [-i | -o] [--pathspec-from-file=<file> [--pathspec-file-nul]]
	   [(--trailer <token>[(=|:)<value>])…​] [-S[<keyid>]]
	   [--] [<pathspec>…​]
```

注意提交时的首行, 其是github上面的文件/文件夹的提交描述, 当需要更复杂的描述信息时, 应当用首行当做标题或概要,
然后再以列表的形式添加额外的描述形式

```shell
git commit -a


# store index in a new commit with a log message
git commit -m "初始化提交"


# Modify the last commit with the current index changes.
git commit --amend -m "New commit message."  # 修订/覆盖

# 增加额外的描述, 提交时一般推荐小写字母开头, 个人更喜欢小写字母开头K
# 更多参考golang/go
git commit -m "title" -m "Description\n..."
git commit -m "slices:" -m "Description\n..."  # 包改动声明

# 通过编辑器模式添加remark
git commit
echo "该命令会启动默认编辑器, 然后在编辑器末尾添加两行内容 用空行分隔, 分别表示概要和详细描述"

```



# rm-移除

git-rm - Remove files from the working tree and from the index

```shell
# 确定删除
rm 文件名

# 删除文件, 并取消跟踪
git rm 文件名


# 取消文件跟踪, 不删除本地文件
# 从暂存区删除文件, 工作区不变
git rm --cached <file>
```

# reset-重置

> 从版本库中回退, HEAD其实只是一个指针cursor
>
> 作用是: 回退版本, 也可以选择回退工作区代码

git-reset - Reset current HEAD to the specified state

- HEAD 表示当前最新版本(相对)
- HEAD^表示当前最新版本的前一个版本
- HEAD^^表示当前最新版本的前两个版本
- HEAD~1 表示当前最新版本的前一个版本
- HEAD~10 表示当前最新版本的前10个版本

### 大纲概要 - Synopsis

```shell
git reset [-q] [<tree-ish>] [--] <pathspec>…​
git reset [-q] [--pathspec-from-file=<file> [--pathspec-file-nul]] [<tree-ish>]
git reset (--patch | -p) [<tree-ish>] [--] [<pathspec>…​]
git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]


```

```shell
# 回退到指定版本号
git reset [--mixed] 版本号  # 回退commit 和index


# revert commit
git reset --hard 版本号  # 同时会回退工作区
git checkout

# undo commit
# 可以用以合并提交
git reset --soft 版本号  # 只退回commit 保留index

# 
git reset --keep

# 查看版本号
git log 


```

> `git restore <file>`从仓库中恢复文件

- 只能撤销工作区、暂存区的代码,不能撤销仓库区的代码
    - 撤销代码 可从 暂存区和本地仓库区的代码
- 撤销仓库区的代码就相当于回退版本操作

git reset HEAD

工作区, 暂存区, 仓库区, 远程仓库, 版本历史

```shell
# 撤销工作区代码 (从暂存区检出)
git checkout 文件名

# 从 HEAD检出
git checkout HEAD .

# 从 暂存区 index检出
git checkout .

# 撤销暂存区代码 (根据版本号重置暂存区
git reset <版本号> <文件名>
git reset HEAD 文件名   


```

### 解释说明 - description

In the first three forms, copy entries from `<tree-ish>` to the index. In the last form, set the current branch
head (`HEAD`) to `<commit>`, optionally modifying index and working tree to match. The `<tree-ish>`/`<commit>` defaults
to `HEAD` in all forms.

### 选项 - options

# restore-恢复

> 恢复工作区文件

git-restore - Restore working tree files

> ? 同时也可以用来恢复暂存区文件

**git**-**restore** is about **restoring** files in the working tree from either the index or another commit. This
command does not update your branch. The command can also be used to **restore** files in the index from another commit.

### 大纲概要-Synopsis

```shell
# 基本用法
# synopsis 大纲, 概要
git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>…
git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>…​]

# options 选项
-s <tree>
--source=<tree>  # 从目录树中恢复文件


```

### 解释说明-Description

Restore specified paths in the working tree with some contents from a restore source. If a path is tracked but does not
exist in the restore source, it will be removed to match the source.

The command can also be used to restore the content in the index with `--staged`, or restore both the working tree and
the index with `--staged --worktree`.

By default, if `--staged` is given, the contents are restored from `HEAD`, otherwise from the index. Use `--source` to
restore from a different commit.

See "Reset, restore and revert" in [git[1\]](https://git-scm.com/docs/git) for the differences between the three
commands.

THIS COMMAND IS EXPERIMENTAL. THE BEHAVIOR MAY CHANGE.

### 选项-Options

```shell

```

### 用法示例-Usage

```shell
git reset --hard 版本号  # 同时会回退工作区

git restore --staged [file]  # 退回到工作区, 取消git add . 提交

git reset --soft HEAD^  # 撤销提交  Undo commit


# 撤销工作区所有更改
git reset # Undo/discard 撤销所有git add操作


# 还原工作区文件
# 撤销本地修改, 将工作区文件修改为最近一次提交的状态
git restore <file>

```

# Branching and Merging

# 分支合并

## tag-标签

标签其实是为本地的当前仓库区(HEAD)打标签 所以 一般在版本提交后打标签

大版本完成之后,打标签

add / delete 增加删除标签

```shell
# 查看标签
git tag

# 查看标签列表
git tag -l
# 伪代码 git tag -a 标签名 -m '版本描述'
# 这是附注标签(annotated)
git tag -a v1.0 -m 'version 1.0'

# 轻量标签(lightweight)
git tag v1.0

# 删除本地标签
git tag -d v1.0
git tag --delete v1.0

# 远程推送标签
git push origin [tagname]  # 推送单个标签
git push [origin] --tags  # 推送所有标签

# 查看远程标签
git ls-remote --tags
git ls-remote -t

# 删除远程标签
git push origin --delete 标签名
git push origin -d v3.5.2

# 后期打标签 
# 校验和是提交版本的哈希值
git tag -a v1.1 [校验和(部分)]

# 检出标签 
git checkout 1a



# 回到最新版本
git checkout [校验和]/[哈希值]/[tree-ish]
git checkout main
```

### 后期打标签

为前面的版本打标签

```shell
# 检出版本校验和
git log
git reflog

# 打标签 git tag -a [标签号] <校验和>
git tag -a v0.9 be28ae815af2b97173e4d65e95d10eab168c1d45
```

### 共享标签 远程标签

默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。
这个过程就像共享远程分支一样 - 你可以运行 `git push origin [tagname]`。

```shell
# 远程标签 git push origin [tagname]
git push origin v1.0
```

### 推送本地标签到远程

如果想要一次性推送很多标签，也可以使用带有 `--tags` 选项的 `git push` 命令。 这将会把所有不在远程仓库服务器上的标签全部传送到那里。

```shell
git push origin --tags
```

### 检出标签

如果你想查看某个标签所指向的文件版本，可以使用 `git checkout` 命令

这个方式的问题是, 必须产生新的分支来同步才能返回主分支

```shell
# 检出标签 和检出校验和(部分校验和)一样
git checkout v1.0
# 回到主分支
git checkout main
```



## mergetool

## log-日志

## worktree

# switch-切换

```shell
# 从远程获取相同名称的分支并
git switch hint-refine # 等价于
git switch -c <local-branch-name> --track origin/<remote-branch-name>
```



# branch-分支

branch

git-branch - List, create, or delete branches

列出分支, 创建分支, 删除分支

### 应用场景:

- 区分生产环境代码与开发环境代码

- 研究新的功能或者公关难题
- 解决线上bug

### 特点:

- 项目开发中公用分支包括main、dev

- 分支main是默认分支，用于发布，当需要发布时将dev分支合并到main分支

- 分支dev是用于开发的分支，开发完阶段性的代码后，需要合并到main分支

### 创建新分支

```shell
# 查看当前分支
git branch

# 查看所有分支
git branch -a

# 创建并切换到分支
git checkout -b dev

# 等于如下
git branch test # 创建分支
git checkout test # 切换到分支
# 设置本体分支跟踪远程指定分支(将分支推送到远程)
git push -u origin dev

```

### dev分支合并到main

先切换到main分支

```shell
git checkout main
```

dev分支合并到main分支

```shell
git merge dev
```

推送合并分支操作到远程仓库

```shell
git push
```

#### 其他账户同步合并后的代码

```shell
# 张三
git pull
```

# checkout-检出

> 更新工作区文件

git checkout : Switch branches or restore working tree files.

Updates files in the working tree to match the version in the index or the specified tree. If no pathspec was given,
*git checkout* will also update `HEAD` to set the specified branch as the current branch.

```shell
# 基本用法 
# synopsis 大纲, 概要
git checkout [-q] [-f] [-m] [<branch>]
git checkout [-q] [-f] [-m] --detach [<branch>]
git checkout [-q] [-f] [-m] [--detach] <commit>
git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new_branch>] [<start_point>]
git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] [--] <pathspec>…
git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] --pathspec-from-file=<file> [--pathspec-file-nul]
git checkout (-p|--patch) [<tree-ish>] [--] [<pathspec>…​]

# options 选项
-b  # 创建分支
-t, --track  # 创建新分支时, 建立上游配置
--detach  # 分离, 派遣
-m, --merge  # 合并


<tree-ish> 

--  # Do not interpret any more arguments as options.
--  # 不解析任何参数为选项

<pathspec>  # 指定路径时
```

```shell
# 用法示例
# 切换分支
git checkout [<branch>]  # 从版本库检出分支
git checkout 

# 如果不存在创建新分支并切换到新分支, 分支存在是会提示错误, 且不会切换到分支
git checkout -b <new_branch>

# 从远程下载新分支
git checkout -b <new_branch> <remote_name><remote_branch_name>
git fetch
git checkout -b wwfyde-patch-1 origin/wwfyde-patch-1

# 切换到版本库 当文件名<commit> 不是分支名时 默认切换到版本库
# 通过使用这种方式来作出实验性更改, 并提交他们
git checkout <commit>  # 默认行为
git checkout [--detach] <commit> # 从版本库 分离

git switch -c <new-branch-name> # 切换到新分支

git switch -  # 取消操作, 取消从版本库分离

# 检出到主分支
git checkout main
# 检出版本号
git checkout <tag> 

# 从远程检出分支
git checkout -b <name> origin/<name>
```

## 附注

检出, 就是从Refs记录中检出一个新的版本路线

# merge-合并

git-merge - Join two or more development histories together

TODO

```shell
# 合并指定分支到当前分支, 并产生新的提交.
git merge <barnch>


# merge squash
# 将new-feature commits squashed into a single commit to main
git merge --squash new-feature
```

Demo

### 解决冲突

```shell
git checkout --ours <file>  # 接受我们的
  
  
git checkout --theirs <file> # 接受即将到来的
    
git add <new-file>  # 保留新增的
      
git rm  <new-file>   # 删除文件


# 或者
git mergetool
```



# **stash**-贮藏

```shell
# [NAME] git-stash - Stash the changes in a dirty working directory away
```

# Sharing and Updating Projects

# pull-拉取

# push-推送

```shell
# 推送 分支

git push -u origin no-redis
git push -u origin main 

# 推送所有本地标签(tags)
git push origin --tags

# 推送本地所有本地分支到远程仓库origin
git push origin --all


# 强制推送  
# 需谨慎使用
git push -f
```

# **fetch**-提取

```shell
git-fetch - Download objects and refs from another repository

git fetch [<options>] [<repository> [<refspec>…​]]
git fetch [<options>] <group>
git fetch --multiple [<options>] [(<repository> | <group>)…​]
git fetch --all [<options>]
```

# remote-远程

```shell
# NAME: git-remote - 管理已追踪仓库集
# NAME: git-remote - Manage set of tracked repositories

# DESCRIPTION: Manage the set of repositories ("remotes") whose branches you track.

# 概要 synopsis
git remote [-v | --verbose]
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <URL>
git remote rename [--[no-]progress] <old> <new>
git remote remove <name>
git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
git remote set-branches [--add] <name> <branch>…​
git remote get-url [--push] [--all] <name>
git remote set-url [--push] <name> <newurl> [<oldurl>]
git remote set-url --add [--push] <name> <newurl>
git remote set-url --delete [--push] <name> <URL>
git remote [-v | --verbose] show [-n] <name>…​
git remote prune [-n | --dry-run] <name>…​
git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)…​]
```

## Examples

```shell
# 添加一个远程仓库, 远程分支
git remote add <name> <url>
git remote add origin https://github.com/wwfyde/test.git

# 修改/替换 origin url, 适用于在github修改项目名称后
git remote set-url origin https://github.com/wwfyde/new-test.git
```

# Inspection and Comparison

## ls-remote

查看远程仓库参考信息

git-ls-remote - List references in a remote repository



# **show**

```shell

git show HEAD

```



# Patching

# rebase-变基

变基/改变基准

establish a new base level for ...

[官方文档](https://git-scm.com/docs/git-rebase)

[官方中文翻译](https://git-scm.com/book/zh/v2/Git-分支-变基)

[github docs](https://docs.github.com/zh/get-started/using-git/using-git-rebase-on-the-command-line)

https://docs.github.com/en/get-started/using-git/about-git-rebase

git-rebase - Reapply commits on top of another base tip



![Image](https://wwfyde.oss-cn-hangzhou.aliyuncs.com/images/202306101423343.jpeg)

## 附注

rebase意思是重新确定基准. 比如在`-amend commit`时, 本地分是修改了最近一次提交, 而云端的最近一次提交保持原样, 这样两个分支不一样,
产生了分歧, 这时候采用rebase命令时将会以remote分支为基准进行提交尝试, 由于本地分支不是派生而是修改分支, 因此本地的修改将会被舍弃,
以remote为基准, 将本地的修改覆盖掉, 也就是检出remote分支, 保持本地和云端版本一致

基本原则是将本地修改变基到remote, 而不是对remote执行变基, 变基前应该分清主次, 才能更好的保留历史真相, 这样查看历史的人才能更好的还原真相.

rebase做到了并行的事情串行化, 即将看起来是两个人做的事情, 串行到一个人先后做了两件事情, 二者的结果都是做了两件事情,
但是串行化时需要考虑主次和先后问题,不能将后发生的事情串行至先发生的事情之前, 总之, 谁先提交谁就是基准, 不能改变已经发生了的事情,
得有先来后到, 同时走向宽敞的马路, 谁先到马路上, 谁就是主时间线, 后到者需要清除自己的时间线, 改变自己的基准,
将自己的时间线改变到先到者的时间线上

## Examples

```shell

# 将feature分支合并到main分支
git checkout feature
git rebase main  # 将feature分支的提交重新设置在main分支的基础上

# 这两条命令等价于
git rebase main feature

将UAT 分支合并到main 分支


# squash  将feature分支的多个提交squash to a single commit
# git squash commit
git rebase --squash 

# interactively
git rebase -i  
git rebase -





```

## 修改历史提交

```shell
# 定位到某次提交的前一个提交
git rebase -i ...~1

# 编辑文档 完成自己想要的编辑后

# 也可以不用执行, 但是会进入vim
git add .
# 或者  `git commit --amend --no-edit` 但是不会处理未跟踪的文件, git add . 则会

# 修订提交
git commit --ammend

# 继续rebase progress
git rebase --continue

# 处理冲突
git add .


```



# **Administration**

# clean-移除

> 谨慎操作

git-clean - Remove untracked files from the working tree

# reflog-

```shell
# NAME: git-reflog - Manage reflog information

git reflog [show] [<log-options>] [<ref>]
git reflog expire [--expire=<time>] [--expire-unreachable=<time>]
	[--rewrite] [--updateref] [--stale-fix]
	[--dry-run | -n] [--verbose] [--all [--single-worktree] | <refs>…]
git reflog delete [--rewrite] [--updateref]
	[--dry-run | -n] [--verbose] <ref>@{<specifier>}…
git reflog exists <ref>

```

# archive-归档

git-archive - Create an archive of files from a named tree.

从命名的分支中创建归档.

```shell
# 常用命令
# 语法 - synopsis
git archive [--format=<fmt>] [--list] [--prefix=<prefix>/] [<extra>]
	      [-o <file> | --output=<file>] [--worktree-attributes]
	      [--remote=<repo> [--exec=<git-upload-archive>]] <tree-ish>
	      [<path>…]

# 

```

```shell
# 示例

# 从提交树打包
git archive --format=tar.gz --prefix=ommanager/  -o ../app_pkg/ommanager-release-3.5.2.tar.gz HEAD

# 从工作区打包
```



# filter-branch

https://git-scm.com/docs/git-filter-branch

https://git-scm.com/docs/git-filter-branch#_examples

删除历史提交中的文件

```shell
# 删除历史文件, 对所有历史提交均有效, 整个版本系统均删除该文件
git filter-branch --tree-filter 'rm filename' HEAD
git filter-branch --tree-filter 'rm -f filename' HEAD
```



# Plumbing Commands

> 管道命名

## checkout-index

git-checkout-index - Copy files from the index to the working tree

应用场景: 

# update-index

# submodule



# 最佳实践

## 协作开发

分支策略, 一般建议为每个人创建一个分支

请注意分支命名规范

定期拉取最新代码

### 分支策略

主分支, 开发分支, 特性分支

### 创建合并请求(拉取请求)

```shell
gh pr create --base main --head your-branch-name --title "Your PR title" --body "Your PR description"
```

## 提交信息

- docs
- fix
- feat
- release

## 提交信息

### 参考资料

- https://gist.github.com/brianclements/841ea7bffdb01346392c

- https://www.conventionalcommits.org/en/v1.0.0/

- https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit

    

### 说明

- **Use the imperative mood in the summary line**: For example, "Fix", "Add", "Change" instead of "Fixed", "Added", "Changed".

```shell
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve|
  │                          devtools
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

## 开源贡献

一句话描述: fork然后pull request

## Modify remote default branch 

```shell
git branch -m master main	# 修改本地分支
git fetch origin			# 获取远程分支
git branch -u origin/main main	# 关联分支
git remote set-head origin -a	# 根据remote HEAD set the default branch for the named remote
```



## 误删除处理

前提是存到仓库中(其实是暂存区)

```shell
# 从索引检出
git  checkout 文件名
git checkout -- <pathspec>  # 禁用所有参数, 优先从暂存区检出,否则从版本库检出
```

## 基于开源开发

- 跟踪一个远程分支设置为upsteam

```shell
git remote -v

origin    git@github.com:octocat/my-full-stack.git (fetch)
origin    git@github.com:octocat/my-full-stack.git (push)
upstream    git@github.com:tiangolo/full-stack-fastapi-template.git (fetch)
upstream    git@github.com:tiangolo/full-stack-fastapi-template.git (push)

git pull --no-commit upstream master/main
# his will download the latest changes from this template without committing them, that way you can check everything is right before committing.
# If there are conflicts, solve them in your editor.

# Once you are done, commit the changes:

```



## tree-提交, 分支, 标签

### 交互模式 - Interactive mode

## 基础知识

## git引用初识(HEAD、分支、tag)

[git引用初识(HEAD、分支、tag)](https://www.cnblogs.com/milesgo517/p/10993188.html)

git将引用保存在文件中，原理很简单

## 引用原理

[参考文档](https://www.cnblogs.com/milesgo517/p/10993188.html#4201295712)

```
引用`指的是对`提交记录`的引用
`提交记录`用`哈希值`唯一标识
每个`引用`用一个文件表示，文件中保存`其引用的提交记录的哈希值
```

## 引用分类

[参考文档](https://www.cnblogs.com/milesgo517/p/10993188.html#434159189)

- 分支

    - 可变, 在不同的时刻可以指向`不同的提交记录`
    - 本地分支
        - 对应`.git/refs/heads/目录`中的文件
        - 每个`本地仓库`有多个`本地分支`
    - 远程分支
        - 对应`.git/refs/remotes/<远端仓库名>/目录`中的文件
        - 每个`本地仓库`可以对应多个`远端仓库`, 同时每个`远端仓库`可以有多个`远端分支`

- tag

    - 对应`.git/refs/tags/目录`中的文件
    - 不可变, 除非删除后重新创建, 否则总是指向`特定的提交记录`
    - 每个git仓库可以有多个`tag`

- HEAD

    - 对应`.git/HEAD`文件

    - 可变

        - 通常指向某个`本地分支`，即引用的引用
        - 也可以直接指向`某个提交记录`，称为`HEAD detached`, 即分离头指针状态
        - 也可以指向`tag`，git将这种情况也处理成`HEAD detached`
        - 也可以指向`远端分支`, git将这种情况也处理成`HEAD detached`

    - 每个git仓库只有一个`HEAD`

    - 表示当前`工作区`检出的文件(或者说文件在修改之前)是属于哪个`提交记录`的

    - ```
    git checkout 指令
    ```
    
      ，就是在改变HEAD的指向
    
        - `git checkout 本地分支名`
        - `git checkout 提交记录哈希值`, detached
        - `git checkout 远端分支名`, detached
        - `git checkout tag名`, detached

## 实验

[参考文档](https://www.cnblogs.com/milesgo517/p/10993188.html#4192426702)

```
Copy$ git checkout main
Switched to branch 'main'

$ cat .git/HEAD
ref: refs/heads/main

$ cat .git/refs/heads/main
89d496d44f93d107a7eb404890cd15a14ba8845d
```

checkout main后, HEAD指向main, main指向89d496

```
Copy$ git checkout milestone
Note: checking out 'milestone'.
You are in 'detached HEAD' state. 
HEAD is now at eecc5fe milestone

$ cat .git/refs/tags/milestone
eecc5fe060e5b86957f931fd931beae4f206d4eb

$ cat .git/HEAD
eecc5fe060e5b86957f931fd931beae4f206d4eb
```

checkout tag milestone后，HEAD指向 `eecc5f`, detached HEAD

## 代码冲突

当推送代码时, 如果 本地仓库比远程仓库低将会要求先拉去远程仓库到本地在进行推送, 此时 可能出现代码冲突, 默认进行合并处理
再提交到远程仓库中

- **提示**：多人协同开发时，避免不了会出现代码冲突的情况
- **原因**：多人同时修改了同一个文件
- **危害**：会影响正常的开发进度
- **注意**：一旦出现代码冲突，必须先解决再做后续开发

### 解决冲突

- 原则：谁冲突谁解决，并且一定要协商解决
- 方案：保留所有代码 或者 保留某一人代码
- 解决完冲突代码后，依然需要`add`、`commit`、`push`
- 冲突解决完毕后, 应该通知对方拉取信息后再开发

### 容易冲突的操作方式

- 多个人同时操作了同一个文件
- 一个人一直写不提交
- 修改之前不更新最新代码
- 提交之前不更新最新代码
- 擅自修改同事代码

### 减少冲突的操作方式

- 养成良好的操作习惯,先`pull`在修改,修改完立即`commit`和`push`
- 一定要确保自己正在修改的文件是最新版本的
- 各自开发各自的模块
- 如果要修改公共文件,一定要先确认有没有人正在修改
- 下班前一定要提交代码,上班第一件事拉取最新代码
- 一定不要擅自修改同事的代码

## .git文档解读

```shell

# 对象库
objects/
```

### d - refs - 引用文件夹

### HEAD - 指向工作区项目分支

ref: refs/heads/dev

## 多分支开发

- 从开源项目folk一个项目
- 拉取项目
- 切换到新分支



## 导入裸仓库

什么是裸仓库: `git clone --bare`: 这个命令用于克隆一个Git仓库作为一个裸仓库。裸仓库是没有工作目录的仓库，只包含版本历史和Git的元数据。这种类型的仓库常用于作为服务器上的中央仓库。

```shell
# 参考自阿里云codeup 导入代码库(方式三)
git clone --bare https://git.example.com/your/project.git your_path
cd your_path
git remote set-url origin https://codeup.aliyun.com/6358ca79d705c35e6ebf016f/molook/engineering/universal.git
git push origin --tags && git push origin --all
```



# Git-lfs

实现对大文件支持

