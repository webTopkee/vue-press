module.exports = {
  title: "weber", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "前端记录", // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/git.png" }], //浏览器的标签栏的网页图标
  ],
  // markdown: {
  //   lineNumbers: true,
  // },
  // serviceWorker: true,
  themeConfig: {
    logo: "/git.png",
    lastUpdated: "上次更新", // string | boolean
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: false, //是否展示所有标题
    smoothScroll: true,
    nav: [
      { text: "首页", link: "/" },
      {
        text: "笔记分类",
        ariaLabel: "分类",
        items: [
          { text: "Git", link: "/pages/git/" },
          { text: "React", link: "/pages/React/" },
          { text: "Vuex", link: "/pages/vuex/" },
          { text: "JavaScript", link: "/pages/js/" },
          { text: "TypeScript", link: "/pages/ts/" },
          { text: "Http", link: "/pages/http/" },
          { text: "PHP", link: "/pages/php/" },
        ],
      },
      {
        text: "前端生态",
        items: [
          {
            text: "CSS",
            items: [
              {
                text: "Windi CSS",
                link: "https://cn.windicss.org",
              },
            ],
          },
          {
            text: "ES6",
            items: [
              {
                text: "ES6-阮一峰",
                link: "https://wangdoc.com/es6/index.html",
              },
              {
                text: "ECMAScript2015~2020 语法全解析",
                link: "http://es.xiecheng.live",
              },
            ],
          },
          {
            text: "Vue",
            items: [
              {
                text: "Vue3 官网",
                link: "https://staging-cn.vuejs.org",
              },
              {
                text: "Vue3 入门指南与实战案例",
                link: "https://vue3.chengpeiquan.com",
              },
              {
                text: "Vue 驱动的静态网站生成器",
                link: "https://vuepress.vuejs.org/zh/",
              },
            ],
          },
          {
            text: "TypeScript",
            items: [
              { text: "TypeScript 入门教程", link: "https://ts.xcatliu.com/" },
              {
                text: "深入理解 TypeScript",
                link: "https://jkchao.github.io/typescript-book-chinese/",
              },
            ],
          },
          {
            text: "框架",
            items: [
              {
                text: "Vben Admin",
                link: "https://vvbin.cn/doc-next/",
              },
            ],
          },
        ],
      },
      { text: "Github", link: "https://github.com/webTopkee" },
    ],
    sidebar: {
      "/pages/php/": [
        {
          title: "PHP基础",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["php.md", "语法特点"],
            ["php2.md", "输出语句"],
            ["php3.md", "超全局变量"],
            ["php4.md", "变量"],
            ["data-type.md", "数据类型"],
            ["variable-function.md", "变量相关功能"],
            ["type-conversion.md", "数据类型转换"],
            ["constant.md", "常量"],
            ["operator.md", "运算符"],
            ["process.md", "流程控制"],
            ["array.md", "数组"],
            ["function.md", "函数"],
            ["sys-function.md", "系统函数"],

            // ["php6.md", "标量类型"],
            // ["php7.md", "复合类型"],
            // ["php8.md", "进制转换"],
            // ["php9.md", "ASCII 方法"],
          ],
        },
      ],
      "/pages/js/": [
        {
          title: "ES5基础",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["es5/array.md", "数组"],
            ["es5/object.md", "对象"],
            ["es5/try.md", "try"],
          ],
        },
        {
          title: "ES6基础",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["es6/array.md", "数组扩展"],
            ["es6/object.md", "对象扩展"],
            ["es6/function.md", "函数扩展"],
            ["es6/class.md", "Class"],
            // ["es6/es.md", "变量声明"],
            // ["es6/es2.md", "循环"],
            // ["es6/es3.md", "作用域"],
            // ["es6/es4.md", "箭头函数"],
            // ["es6/es5.md", "数组遍历"],
            // ["es6/promise.md", "Promise"],
            // ["es6/async.md", "async"],
          ],
        },
      ],
      "/pages/vuex/": [
        {
          title: "vuex基础",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["pinia.md", "关于 Pinia"],
            ["install.md", "安装与启用"],
            ["store.md", "Store"],
            ["state.md", "State"],
            ["getters.md", "Getters"],
            ["actions.md", "Actions"],
          ],
        },
      ],
      "/pages/git/": [
        {
          title: "Git",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["git.md", "常规操作"],
            // ["git2.md", "修改用户名和邮箱地址"],
            // ["git3.md", "重置远程仓库地址"],
            // ["git4.md", "分支操作"],
            // ["git5.md", "代码回滚"],
            // ["git6.md", "场景运用"],
          ],
        },
      ],
      "/pages/http/": [
        {
          title: "http基础",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["http.md", "HTTP 请求方式"],
            ["http2.md", "HTTP 返回错误码"],
          ],
        },
      ],
      "/pages/ts/": [
        {
          title: "TypeScript基础",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["ts.md", "基本类型"],
            ["ts2.md", "数组"],
            ["ts3.md", "接口"],
          ],
        },
      ],
      "/pages/react/": [
        {
          title: "React基础",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["react.md", "起步准备"],
            ["module.md", "单组件编写"],
            ["communication.md", "组件之间的通信"],
          ],
        },
      ],
    },
  },
};
