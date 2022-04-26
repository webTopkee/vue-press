## 查看用户名和邮箱地址

```
$ git config user.name
$ git config user.email
```

## 修改用户名和邮箱地址

```
$ git config --global user.name "username"
$ git config --global user.email "email"
```

## 重置 gitlab 远程仓库地址

```
$ git remote -v  查看当前仓库
$ git remote set-url origin <git仓库>
```

## 分支操作

```
$ git branch -a 查看所有分支
$ git branch -D 删除本地分支
$ git push origin --delete 删除线上分支
```

## 代码回滚

```
$ git reset --hard HEAD^ 本地回退上一版本
$ git push -f origin <git仓库> 强制提交（远程端将强制更新致本地端）
```
