# 开发笔记



# 问题记录

- "Cannot connect to already running IDE instance.
    Exception: Process 476 is still running"
    - 出现问题场景, 系统异常重启后发生, 比如长按强制关机.
- 解决思路
    - rm `~/Library/Application Support/JetBrains/<ide-instance>/.lock`, 其中<ide-instance>为对应无法启动的ide应用.
- 参考链接:
    - https://youtrack.jetbrains.com/issue/IDEA-330531/Improve-Cannot-connect-to-already-running-IDE-instance-Exception-Process-processid-is-still-running-detection
    - 