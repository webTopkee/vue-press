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

```php
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
