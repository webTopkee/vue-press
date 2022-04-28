### 设置本地域名解析

按住键盘`win+r`打开 cmd，输入 drivers

![cmd](../img/parse1.png)

在进入 etc 文件，双击 hosts 打开进行修改

![cmd](../img/parse2.png)

在打开文本中输入如下代码，即可把 weber.com 解析到本地访问打开（需要带上端口号）

```
127.0.0.1 weber.com
```
