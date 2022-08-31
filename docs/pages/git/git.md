## 查看用户名和邮箱地址

```
git config user.name
git config user.email
```

## 修改用户名和邮箱地址

```
git config --global user.name "username"
git config --global user.email "email"
```

## 重置远程仓库地址

当项目更新 git 地址时，我们不需要重新获取代码，只需要当前项目中去更新 git 仓库

```
$ git remote -v  查看当前仓库
$ git remote set-url origin <git仓库>
```

## 删除远程仓库
删除项目中不同远程仓库
```
$ git remote 查看当前仓库
$ git remote rm <git仓库名> 移除远程仓库
```

## 分支操作

```
git branch -a 查看所有分支
git branch -D 删除本地分支
git push origin --delete 删除线上分支
```

### 代码回滚

```
git reset --hard HEAD^ 本地回退上一版本
git push -f origin <git仓库> 强制提交（远程端将强制更新致本地端）
```

## 提交本地代码到线上库

当我们在本地开发完代码后，要提交到线上时

```git
git add .  //把工作区代码存到暂存区
git commit -m '提交备注'  //将暂存区的代码提交到本地版本库
git pull origin <branch>  //将本地版本库提交到线上指定分支

```

## reset

git reset 是回到某次提交，提交及之前的 commit 都会被保留，但是此 commit id 之后的修改都会被删除或放回工作区等待下一次提交；

- `git reset --soft <commit_id>`：保留 commit 修改，将修改存储到 index 中；也就是说 git add 后的区域
- `git reset --mixed <commit_id>`：保留 commit 修改，将修改存储到本地工作区域中；也就是说 git add 前的区域
- `git reset --hard <commit_id>`：删除 commit 修改，慎用！

```
git log //查看已提交的版本日志
git reset <commit_id> //此时本地会返回指定版本ID后的所有状态
//修改代码
git add . //把工作区代码存到暂存区
git commit -m '提交备注'  //将暂存区的代码提交到本地版本库
git push origin HEAD --force //将本地修改同步到远程仓库
```

## revert

git revert 是指定删除某次提交，只针对指定 commit_id 会被删除在暂存区，此次提交前后 commit 都会被保留不动

- `git revert -e <commit_id>` 重做指定 commit 的提交信息
- `git revert -n <commit_id>` 重做执行 commit 的代码修改

## checkout

`git checkout -b <branch_name>` 创建分支等操作  
`git checkout <branch_name>` 切换分支
