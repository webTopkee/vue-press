(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{434:function(t,a,e){"use strict";e.r(a);var s=e(62),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"查看用户名和邮箱地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看用户名和邮箱地址"}},[t._v("#")]),t._v(" 查看用户名和邮箱地址")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config user.name\ngit config user.email\n")])])]),e("h2",{attrs:{id:"修改用户名和邮箱地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改用户名和邮箱地址"}},[t._v("#")]),t._v(" 修改用户名和邮箱地址")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git config --global user.name "username"\ngit config --global user.email "email"\n')])])]),e("h2",{attrs:{id:"重置远程仓库地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置远程仓库地址"}},[t._v("#")]),t._v(" 重置远程仓库地址")]),t._v(" "),e("p",[t._v("当项目更新 git 地址时，我们不需要重新获取代码，只需要当前项目中去更新 git 仓库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git remote -v  查看当前仓库\n$ git remote set-url origin <git仓库>\n")])])]),e("h2",{attrs:{id:"分支操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -a 查看所有分支\ngit branch -D 删除本地分支\ngit push origin --delete 删除线上分支\n")])])]),e("h3",{attrs:{id:"代码回滚"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码回滚"}},[t._v("#")]),t._v(" 代码回滚")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset --hard HEAD^ 本地回退上一版本\ngit push -f origin <git仓库> 强制提交（远程端将强制更新致本地端）\n")])])]),e("h2",{attrs:{id:"提交本地代码到线上库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交本地代码到线上库"}},[t._v("#")]),t._v(" 提交本地代码到线上库")]),t._v(" "),e("p",[t._v("当我们在本地开发完代码后，要提交到线上时")]),t._v(" "),e("div",{staticClass:"language-git extra-class"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git add .  //把工作区代码存到暂存区\ngit commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提交备注'")]),t._v("  //将暂存区的代码提交到本地版本库\ngit pull origin <branch>  //将本地版本库提交到线上指定分支\n\n")])])]),e("h2",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset")]),t._v(" "),e("p",[t._v("git reset 是回到某次提交，提交及之前的 commit 都会被保留，但是此 commit id 之后的修改都会被删除或放回工作区等待下一次提交；")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git reset --soft <commit_id>")]),t._v("：保留 commit 修改，将修改存储到 index 中；也就是说 git add 后的区域")]),t._v(" "),e("li",[e("code",[t._v("git reset --mixed <commit_id>")]),t._v("：保留 commit 修改，将修改存储到本地工作区域中；也就是说 git add 前的区域")]),t._v(" "),e("li",[e("code",[t._v("git reset --hard <commit_id>")]),t._v("：删除 commit 修改，慎用！")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log //查看已提交的版本日志\ngit reset <commit_id> //此时本地会返回指定版本ID后的所有状态\n//修改代码\ngit add . //把工作区代码存到暂存区\ngit commit -m '提交备注'  //将暂存区的代码提交到本地版本库\ngit push origin HEAD --force //将本地修改同步到远程仓库\n")])])]),e("h2",{attrs:{id:"revert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[t._v("#")]),t._v(" revert")]),t._v(" "),e("p",[t._v("git revert 是指定删除某次提交，只针对指定 commit_id 会被删除在暂存区，此次提交前后 commit 都会被保留不动")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git revert -e <commit_id>")]),t._v(" 重做指定 commit 的提交信息")]),t._v(" "),e("li",[e("code",[t._v("git revert -n <commit_id>")]),t._v(" 重做执行 commit 的代码修改")])]),t._v(" "),e("h2",{attrs:{id:"checkout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkout"}},[t._v("#")]),t._v(" checkout")]),t._v(" "),e("p",[e("code",[t._v("git checkout -b <branch_name>")]),t._v(" 创建分支等操作"),e("br"),t._v(" "),e("code",[t._v("git checkout <branch_name>")]),t._v(" 切换分支")])])}),[],!1,null,null,null);a.default=r.exports}}]);