(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{451:function(t,e,s){"use strict";s.r(e);var a=s(62),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"提交本地代码到线上库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交本地代码到线上库"}},[t._v("#")]),t._v(" 提交本地代码到线上库")]),t._v(" "),s("p",[t._v("当我们在本地开发完代码后，要提交到线上时")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git add .  //把工作区代码存到暂存区\ngit commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提交备注'")]),t._v("  //将暂存区的代码提交到本地版本库\ngit pull origin <branch>  //将本地版本库提交到线上指定分支\n\n")])])]),s("h2",{attrs:{id:"reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset")]),t._v(" "),s("p",[t._v("git reset 是回到某次提交，提交及之前的 commit 都会被保留，但是此 commit id 之后的修改都会被删除或放回工作区等待下一次提交；")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git reset --soft <commit_id>")]),t._v("：保留 commit 修改，将修改存储到 index 中；也就是说 git add 后的区域")]),t._v(" "),s("li",[s("code",[t._v("git reset --mixed <commit_id>")]),t._v("：保留 commit 修改，将修改存储到本地工作区域中；也就是说 git add 前的区域")]),t._v(" "),s("li",[s("code",[t._v("git reset --hard <commit_id>")]),t._v("：删除 commit 修改，慎用！")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("git log "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看已提交的版本日志")]),t._v("\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此时本地会返回指定版本ID后的所有状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改代码")]),t._v("\ngit add "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把工作区代码存到暂存区")]),t._v("\ngit commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'提交备注'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将暂存区的代码提交到本地版本库")]),t._v("\ngit push origin "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("force "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将本地修改同步到远程仓库")]),t._v("\n")])])]),s("h2",{attrs:{id:"revert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[t._v("#")]),t._v(" revert")]),t._v(" "),s("p",[t._v("git revert 是指定删除某次提交，只针对指定 commit_id 会被删除在暂存区，此次提交前后 commit 都会被保留不动")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git revert -e <commit_id>")]),t._v(" 重做指定 commit 的提交信息")]),t._v(" "),s("li",[s("code",[t._v("git revert -n <commit_id>")]),t._v(" 重做执行 commit 的代码修改")])]),t._v(" "),s("h2",{attrs:{id:"checkout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checkout"}},[t._v("#")]),t._v(" checkout")]),t._v(" "),s("p",[s("code",[t._v("git checkout -b <branch_name>")]),t._v(" 创建分支等操作"),s("br"),t._v(" "),s("code",[t._v("git checkout <branch_name>")]),t._v(" 切换分支")])])}),[],!1,null,null,null);e.default=r.exports}}]);