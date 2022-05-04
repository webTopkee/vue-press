module.exports = {
  title: "weber", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "前端记录", // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/git.png" }], //浏览器的标签栏的网页图标
  ],
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  displayAllHeaders:true,
  themeConfig: {
    logo: "/git.png",
    lastUpdated: "最后更新", // string | boolean
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: "首页", link: "/" },
      // {
      //     text: '分类',
      //     ariaLabel: '分类',
      //     items: [
      //         { text: '文章', link: '/pages/folder1/test1.md' },
      //         { text: '琐碎', link: '/pages/folder2/test4.md' },
      //     ]
      // },
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
      "/pages/guide/": [
        {
          title: "前言",
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            ["weber.md", "weber"],
          ],
        },
        {
          title: "前端相关",
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            ["npm.md", "Npm"],
            ["js.md", "JavaScript"],
            ["es.md", "ES6"],
            ["vuex.md", "Vuex 4.x"],
            ["type.md", "TypeScript"],
          ],
        },
        {
          title: "网络相关",
          collapsable: false,
          sidebarDepth: 1, 
          children: [
            ["http.md", "Http"],
          ],
        },
        {
          title: "数据库相关",
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            // ["git.md", "Git"],
          ],
        },
        {
          title: "服务器相关",
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            ["php.md", "PHP"],
          ],
        },
        {
          title: "项目管理",
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            ["git.md", "Git"],
          ],
        },
        {
          title: "其它",
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            ["parse.md", "设置本地域名解析"],
          ],
        },
      ],
    },
  },
};
